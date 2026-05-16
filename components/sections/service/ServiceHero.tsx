"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, ChevronRight } from "lucide-react";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { PartnerChooserDialog } from "@/components/layout/PartnerChooserDialog";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import type { Service } from "@/content/services";

export function ServiceHero({ service }: { service: Service }) {
  const [chooserOpen, setChooserOpen] = useState(false);

  return (
    <section className="bg-white pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-1.5 text-sm text-ink-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-ink-900 transition-colors">Home</Link>
          <ChevronRight className="size-3.5 shrink-0" />
          <Link href="/services" className="hover:text-ink-900 transition-colors">Services</Link>
          <ChevronRight className="size-3.5 shrink-0" />
          <span className="text-ink-900 font-medium">{service.title}</span>
        </nav>

        <div className="max-w-3xl">
          {/* Timeline pill */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
            <span className="size-1.5 rounded-full bg-brand-500" />
            {service.timeline}
          </div>

          <h1 className="text-display text-[clamp(2.5rem,5vw+1rem,4.5rem)] font-bold leading-tight tracking-tight text-ink-900 text-balance">
            {service.hero.headline}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-ink-500 max-w-2xl">
            {service.hero.subtext}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton
              onClick={() => setChooserOpen(true)}
              className="inline-flex cursor-pointer items-center gap-2.5 rounded-xl bg-brand-500 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              <WhatsAppIcon className="size-5" />
              WhatsApp us
            </MagneticButton>

            <button
              onClick={() => setChooserOpen(true)}
              className="inline-flex cursor-pointer items-center gap-2.5 rounded-xl border border-ink-200 px-7 py-3.5 text-base font-semibold text-ink-700 transition-colors hover:border-ink-400 hover:text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-400"
            >
              <Phone className="size-4.5" aria-hidden="true" />
              Call now
            </button>
          </div>

          <p className="mt-4 text-sm text-ink-400">
            First consultation free. We reply within 30 minutes on WhatsApp.
          </p>
        </div>
      </div>

      <PartnerChooserDialog open={chooserOpen} onOpenChange={setChooserOpen} />
    </section>
  );
}
