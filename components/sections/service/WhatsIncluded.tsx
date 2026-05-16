"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

export function WhatsIncluded({ items }: { items: string[] }) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <h2 className="text-display text-2xl font-bold tracking-tight text-ink-900 md:text-3xl">
            What&apos;s included
          </h2>
          <p className="mt-3 text-ink-500">
            Everything in our flat fee — no hidden add-ons.
          </p>
        </Reveal>

        <Stagger interval={60} className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <Stagger.Item key={item}>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-100">
                  <Check className="size-3 text-brand-700" strokeWidth={2.5} aria-hidden="true" />
                </div>
                <p className="text-sm leading-relaxed text-ink-700">{item}</p>
              </div>
            </Stagger.Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
