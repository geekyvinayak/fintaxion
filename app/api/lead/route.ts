import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { escapeHtml } from "@/lib/utils";

// Instantiated lazily inside the handler so module load doesn't throw
// during build when RESEND_API_KEY is not set in the build environment.
let _resend: Resend | null = null;
function getResend(): Resend {
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY);
  return _resend;
}

// ─── In-memory rate limit ─────────────────────────────────────────────────────
// 5 submissions per IP per 15 minutes. Resets on server restart (fine for v1).

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const WINDOW_MS = 15 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    // Prune expired entries when the map gets large to prevent unbounded growth.
    if (rateLimitMap.size > 1000) {
      for (const [k, v] of rateLimitMap) {
        if (now > v.resetAt) rateLimitMap.delete(k);
      }
    }
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

// ─── Email template ───────────────────────────────────────────────────────────

function buildEmailHtml(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="font-family:sans-serif;background:#f5f5f5;margin:0;padding:24px;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e5e5;">
    <div style="background:#064E3B;padding:24px 32px;">
      <p style="color:#10B981;font-size:13px;margin:0 0 4px;">New lead via fintaxion.in</p>
      <h1 style="color:#fff;font-size:22px;margin:0;">${escapeHtml(data.name)}</h1>
    </div>
    <div style="padding:28px 32px;">
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:8px 0;color:#737373;font-size:13px;width:110px;">Email</td>
            <td style="padding:8px 0;font-size:14px;"><a href="mailto:${escapeHtml(data.email)}" style="color:#059669;">${escapeHtml(data.email)}</a></td></tr>
        <tr><td style="padding:8px 0;color:#737373;font-size:13px;">Phone</td>
            <td style="padding:8px 0;font-size:14px;"><a href="tel:${escapeHtml(data.phone)}" style="color:#059669;">${escapeHtml(data.phone)}</a></td></tr>
        <tr><td style="padding:8px 0;color:#737373;font-size:13px;">Service</td>
            <td style="padding:8px 0;font-size:14px;">${escapeHtml(data.service)}</td></tr>
      </table>
      <hr style="border:none;border-top:1px solid #e5e5e5;margin:20px 0;" />
      <p style="color:#737373;font-size:12px;margin:0 0 8px;text-transform:uppercase;letter-spacing:.05em;">Message</p>
      <p style="font-size:14px;line-height:1.65;color:#171717;margin:0;">${escapeHtml(data.message).replace(/\n/g, "<br/>")}</p>
    </div>
    <div style="background:#fafafa;padding:16px 32px;border-top:1px solid #e5e5e5;">
      <p style="font-size:12px;color:#a3a3a3;margin:0;">Reply directly to this email to respond to ${escapeHtml(data.name)}.</p>
    </div>
  </div>
</body>
</html>`;
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  // Check Resend configured before doing any work
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 503 }
    );
  }

  // Rate limit by IP
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  // Parse body
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, phone, service, message } = body;

  // Validate all required fields in one pass
  if (
    typeof name !== "string" || !name.trim() ||
    typeof email !== "string" || !email.trim() || !email.includes("@") || !email.includes(".") ||
    typeof phone !== "string" || !phone.trim() ||
    typeof message !== "string" || !message.trim()
  ) {
    return NextResponse.json({ error: "Missing or invalid required fields" }, { status: 400 });
  }

  const serviceLabel = typeof service === "string" && service ? service : "Not specified";

  try {
    await getResend().emails.send({
      // Note: "from" domain must be verified in Resend dashboard for production.
      from: "Fintaxion Leads <noreply@fintaxion.in>",
      to: "info@fintaxion.in",
      replyTo: email.trim(),
      subject: `New enquiry from ${name.trim()} — ${serviceLabel}`,
      html: buildEmailHtml({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        service: serviceLabel,
        message: message.trim(),
      }),
    });
  } catch (err) {
    console.error("[lead/route] Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try WhatsApp or call us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
