"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import type { ServiceFaqItem } from "@/content/services";

export function ServiceFAQ({ faq }: { faq: ServiceFaqItem[] }) {
  const [open, setOpen] = useState<string[]>([]);

  function handleChange(next: string[]) {
    const openSet = new Set(open);
    const added = next.find((id) => !openSet.has(id));
    setOpen(added !== undefined ? [added] : next);
  }

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <Reveal>
          <h2 className="text-display text-2xl font-bold tracking-tight text-ink-900 md:text-3xl">
            Frequently asked questions
          </h2>
        </Reveal>

        <Accordion
          value={open}
          onValueChange={handleChange}
          className="mt-8 divide-y divide-ink-100 border-y border-ink-100"
        >
          {faq.map((item, i) => (
            <AccordionItem key={i} value={String(i)} className="border-none">
              <AccordionTrigger
                className={cn(
                  "text-display !text-base !font-semibold text-ink-900",
                  "hover:no-underline py-5 items-start gap-4"
                )}
              >
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-ink-600">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
