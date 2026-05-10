"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { PartnerChooserDialog } from "@/components/layout/PartnerChooserDialog";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── Background beams ─────────────────────────────────────────────────────────
// CSS-only spotlight effect — keeps opacity well under 25% as required.
// Blurred div wedges simulate stage-light beams converging from the top.

function BackgroundBeams() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Ambient radial halo above center */}
      <div
        className="absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand-500/[0.18]"
        style={{ filter: "blur(80px)" }}
      />

      {/* Individual light beams — each a blurred gradient strip */}
      {(
        [
          { left: "12%", rotate: "-22deg", opacity: "0.07" },
          { left: "30%", rotate: "-10deg", opacity: "0.12" },
          { left: "50%", rotate: "0deg",   opacity: "0.15" },
          { left: "68%", rotate: "10deg",  opacity: "0.12" },
          { left: "86%", rotate: "22deg",  opacity: "0.07" },
        ] as const
      ).map(({ left, rotate, opacity }, i) => (
        <div
          key={i}
          className="absolute top-0 h-full w-14 bg-gradient-to-b from-brand-100 to-transparent"
          style={{
            left,
            opacity,
            transform: `rotate(${rotate}) translateX(-50%)`,
            transformOrigin: "top center",
            filter: "blur(10px)",
          }}
        />
      ))}

      {/* Bottom edge fade — blends section into what's below */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-900 to-transparent" />
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function FinalCTA() {
  const [chooserOpen, setChooserOpen] = useState(false);

  return (
    <section
      className="relative overflow-hidden bg-brand-900 py-32 md:py-40"
      id="contact"
    >
      <BackgroundBeams />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-8">
        <h2 className="text-display text-[clamp(2rem,4vw+1rem,4rem)] font-bold leading-tight tracking-tight text-white text-balance">
          Have a question about your taxes? We reply in minutes.
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-brand-100">
          First consultation is free. No spam, no commitment.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {/* Primary — white pill, magnetic */}
          <MagneticButton
            onClick={() => setChooserOpen(true)}
            className="inline-flex cursor-pointer items-center gap-2.5 rounded-xl bg-white px-8 py-4 text-base font-semibold text-brand-900 transition-colors hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <WhatsAppIcon className="size-5" />
            WhatsApp us
          </MagneticButton>

          {/* Secondary — ghost with white border */}
          <button
            onClick={() => setChooserOpen(true)}
            className="inline-flex cursor-pointer items-center gap-2.5 rounded-xl border-2 border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-white/80 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <Phone className="size-5" aria-hidden="true" />
            Call now
          </button>
        </div>
      </div>

      <PartnerChooserDialog open={chooserOpen} onOpenChange={setChooserOpen} />
    </section>
  );
}
