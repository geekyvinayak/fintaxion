"use client";

import { Clock, IndianRupee } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function ServicePricing({
  pricing,
  timeline,
}: {
  pricing: { from: number; note: string };
  timeline: string;
}) {
  return (
    <section className="bg-ink-50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <h2 className="text-display text-2xl font-bold tracking-tight text-ink-900 md:text-3xl">
            Pricing & timeline
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 max-w-2xl">
          {/* Pricing card */}
          <div className="flex flex-col gap-3 rounded-2xl border border-brand-100 bg-white p-6">
            <div className="flex items-center gap-2 text-sm font-medium text-ink-500">
              <IndianRupee className="size-4 text-brand-500" aria-hidden="true" />
              Flat fee
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-mono text-xs text-ink-400">from</span>
              <span className="text-display font-mono text-4xl font-bold text-ink-900">
                ₹{pricing.from.toLocaleString("en-IN")}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-ink-400">{pricing.note}</p>
          </div>

          {/* Timeline card */}
          <div className="flex flex-col gap-3 rounded-2xl border border-ink-100 bg-white p-6">
            <div className="flex items-center gap-2 text-sm font-medium text-ink-500">
              <Clock className="size-4 text-brand-500" aria-hidden="true" />
              Turnaround
            </div>
            <p className="text-display text-2xl font-bold text-ink-900 leading-snug">
              {timeline}
            </p>
            <p className="text-xs text-ink-400">After all documents received</p>
          </div>
        </div>

        <p className="mt-6 text-sm text-ink-500">
          We quote a fixed fee before we start. Nothing is billed without your approval.
        </p>
      </div>
    </section>
  );
}
