"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { PartnerChooserDialog } from "@/components/layout/PartnerChooserDialog";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const BEAMS = [
  { id: "b1", left: "12%", rotate: "-22deg", opacity: "0.07" },
  { id: "b2", left: "30%", rotate: "-10deg", opacity: "0.12" },
  { id: "b3", left: "50%", rotate: "0deg",   opacity: "0.15" },
  { id: "b4", left: "68%", rotate: "10deg",  opacity: "0.12" },
  { id: "b5", left: "86%", rotate: "22deg",  opacity: "0.07" },
] as const;

function BackgroundBeams() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand-500/[0.18]"
        style={{ filter: "blur(80px)" }}
      />

      {BEAMS.map(({ id, left, rotate, opacity }) => (
        <div
          key={id}
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
