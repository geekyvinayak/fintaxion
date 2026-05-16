"use client";

import { FileCheck2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

export function DocumentsRequired({ items }: { items: string[] }) {
  return (
    <section className="bg-ink-50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <h2 className="text-display text-2xl font-bold tracking-tight text-ink-900 md:text-3xl">
            Documents you&apos;ll need
          </h2>
          <p className="mt-3 text-ink-500">
            Send these over WhatsApp or email — originals never needed.
          </p>
        </Reveal>

        <Stagger interval={60} className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Stagger.Item key={item}>
              <div className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-4">
                <FileCheck2
                  className="mt-0.5 size-4.5 shrink-0 text-ink-400"
                  aria-hidden="true"
                />
                <p className="text-sm text-ink-700">{item}</p>
              </div>
            </Stagger.Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
