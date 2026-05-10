import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Fintaxion Consulting — CA Firm Delhi | ITR, GST & ROC Filing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Fetches Bricolage Grotesque Bold from Google Fonts CSS → woff2 → ArrayBuffer
async function loadBricolage(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0" } }
    ).then((r) => r.text());

    const woff2Url = css.match(/src:\s*url\(([^)]+\.woff2)\)/)?.[1];
    if (!woff2Url) return null;

    return fetch(woff2Url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OGImage() {
  const fontData = await loadBricolage();

  return new ImageResponse(
    (
      <div
        style={{
          background: "#064E3B",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "64px 80px",
          fontFamily: fontData ? "Bricolage Grotesque" : "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle radial glow */}
        <div
          style={{
            position: "absolute",
            top: -60,
            left: "50%",
            transform: "translateX(-50%)",
            width: 900,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(16,185,129,0.22) 0%, transparent 70%)",
          }}
        />

        {/* Logo — top left */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: "#10B981",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
          <span
            style={{
              color: "#10B981",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Fintaxion
          </span>
        </div>

        {/* Main title — vertically centered */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <p
            style={{
              color: "#6EE7B7",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              margin: "0 0 16px",
            }}
          >
            Chartered Accountants · Delhi
          </p>
          <h1
            style={{
              color: "#ffffff",
              fontSize: 60,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              margin: 0,
              maxWidth: 900,
            }}
          >
            ITR, GST & ROC Filing — stress-free.
          </h1>
          <p
            style={{
              color: "#A7F3D0",
              fontSize: 22,
              margin: "24px 0 0",
              fontWeight: 400,
            }}
          >
            Trusted by 200+ businesses across Delhi NCR
          </p>
        </div>

        {/* Domain — bottom right */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            zIndex: 1,
          }}
        >
          <span
            style={{
              color: "#6EE7B7",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.02em",
            }}
          >
            fintaxion.in
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [{ name: "Bricolage Grotesque", data: fontData, weight: 700 }]
        : [],
    }
  );
}
