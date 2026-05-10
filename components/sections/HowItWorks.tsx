"use client";

import { Stagger } from "@/components/motion/Stagger";
import { Reveal } from "@/components/motion/Reveal";
import { buildWhatsAppUrl, TEAM_NUMBERS } from "@/lib/whatsapp";

// Inline WhatsApp SVG — lucide-react omits brand icons
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const DOC_CHIPS = ["PAN Card", "Form 16", "Bank Statement"];

// ─── Step card ────────────────────────────────────────────────────────────────

function StepCard({
  number,
  title,
  body,
  extra,
}: {
  number: string;
  title: string;
  body: string;
  extra: "whatsapp" | "docs" | "badge";
}) {
  return (
    <div className="flex flex-col gap-5">
      {/* Numbered circle — z-10 so it sits above the desktop connector line */}
      <div className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-full bg-brand-500 shadow-md shadow-brand-500/25">
        <span className="font-mono text-lg font-bold leading-none text-white">{number}</span>
      </div>

      <h3 className="text-display text-xl font-semibold leading-snug tracking-tight text-ink-900">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-ink-500">{body}</p>

      {/* Step-specific visual accent */}
      {extra === "whatsapp" && (
        <a
          href={buildWhatsAppUrl(TEAM_NUMBERS.hemant, "Hi, I'd like to get started.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-1 rounded-sm"
        >
          <WhatsAppIcon className="size-4" />
          Start on WhatsApp
        </a>
      )}

      {extra === "docs" && (
        <div className="flex flex-wrap gap-2">
          {DOC_CHIPS.map((doc) => (
            <span
              key={doc}
              className="rounded-full bg-ink-100 px-3 py-1 text-xs font-medium text-ink-700"
            >
              {doc}
            </span>
          ))}
        </div>
      )}

      {extra === "badge" && (
        <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
          Filed <span aria-hidden="true">✓</span>
        </div>
      )}
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function HowItWorks() {
  return (
    <section className="bg-white py-20 md:py-28" id="how-it-works">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Header */}
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-display text-[clamp(2rem,3vw+1rem,3.5rem)] font-bold leading-tight tracking-tight text-ink-900 text-balance">
              From first message to filed return
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-500">
              Three steps. No office visits. No jargon.
            </p>
          </div>
        </Reveal>

        {/* Steps container — relative so the dashed connector line can be absolute */}
        <div className="relative mt-16">
          {/*
           * Desktop-only dashed connector: one horizontal line at circle center (top: 2rem).
           * The solid bg-brand-500 circles sit on top (z-10) and visually "cut" the line,
           * making it appear only between circles.
           */}
          <div
            className="absolute inset-x-0 hidden border-t-2 border-dashed border-ink-300 md:block"
            style={{ top: "2rem" }}
            aria-hidden="true"
          />

          <Stagger
            interval={120}
            className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8"
          >
            <Stagger.Item>
              <StepCard
                number="01"
                title="Chat on WhatsApp"
                body="Drop us a message and tell us what you need. We'll scope the work and quote a fixed fee — no surprises, no hidden charges."
                extra="whatsapp"
              />
            </Stagger.Item>

            <Stagger.Item>
              <StepCard
                number="02"
                title="Share your documents"
                body="Send us the required documents securely over WhatsApp or email. Our CAs review everything and confirm receipt within the hour."
                extra="docs"
              />
            </Stagger.Item>

            <Stagger.Item>
              <StepCard
                number="03"
                title="We file. You relax."
                body="We handle the entire filing process end-to-end and send you the acknowledgement the moment it's done. Zero follow-up needed."
                extra="badge"
              />
            </Stagger.Item>
          </Stagger>
        </div>
      </div>
    </section>
  );
}
