"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import type { ServiceProcess as Step } from "@/content/services";

export function ServiceProcess({ steps }: { steps: Step[] }) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <h2 className="text-display text-2xl font-bold tracking-tight text-ink-900 md:text-3xl">
            How it works
          </h2>
          <p className="mt-3 text-ink-500">
            Three steps from first message to completion.
          </p>
        </Reveal>

        <div className="relative mt-12">
          {/* Desktop dashed connector */}
          <div
            className="absolute inset-x-0 hidden border-t-2 border-dashed border-ink-200 md:block"
            style={{ top: "2rem" }}
            aria-hidden="true"
          />

          <Stagger
            interval={100}
            className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8"
          >
            {steps.map((step) => (
              <Stagger.Item key={step.step}>
                <div className="flex flex-col gap-4">
                  <div className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-full bg-brand-500 shadow-md shadow-brand-500/20">
                    <span className="font-mono text-lg font-bold text-white leading-none">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-display text-lg font-semibold leading-snug tracking-tight text-ink-900">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-500">{step.body}</p>
                </div>
              </Stagger.Item>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
