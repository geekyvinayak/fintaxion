"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { PartnerChooserDialog } from "@/components/layout/PartnerChooserDialog";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import type { Service } from "@/content/services";

export function ServiceCTA({ service }: { service: Service }) {
  const [chooserOpen, setChooserOpen] = useState(false);

  return (
    <section className="bg-brand-900 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
        <h2 className="text-display text-[clamp(1.75rem,3vw+1rem,3rem)] font-bold leading-tight tracking-tight text-white text-balance">
          Ready to get started with {service.title}?
        </h2>

        <p className="mt-5 text-lg leading-relaxed text-brand-100">
          First consultation is free. We reply within 30 minutes on WhatsApp.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            onClick={() => setChooserOpen(true)}
            className="inline-flex cursor-pointer items-center gap-2.5 rounded-xl bg-white px-8 py-4 text-base font-semibold text-brand-900 transition-colors hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <WhatsAppIcon className="size-5" />
            WhatsApp us
          </MagneticButton>

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
