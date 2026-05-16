"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PartnerChooserDialog } from "@/components/layout/PartnerChooserDialog";
import { faq } from "@/content/faq";
import { cn } from "@/lib/utils";

const MID = Math.ceil(faq.length / 2);
const LEFT_COL = faq.slice(0, MID);
const RIGHT_COL = faq.slice(MID);

// ─── Column ───────────────────────────────────────────────────────────────────
// Controlled so only one item can be open at a time per column.

function FaqColumn({ items }: { items: typeof faq }) {
  const [open, setOpen] = useState<string[]>([]);

  function handleChange(next: string[]) {
    const openSet = new Set(open);
    const added = next.find((id) => !openSet.has(id));
    setOpen(added !== undefined ? [added] : next);
  }

  return (
    <Accordion
      value={open}
      onValueChange={handleChange}
      className="divide-y divide-ink-100 border-y border-ink-100"
    >
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id} className="border-none">
          <AccordionTrigger
            className={cn(
              "text-display !text-base !font-semibold text-ink-900",
              "hover:no-underline py-5 items-start gap-4"
            )}
          >
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-sm leading-relaxed text-ink-700">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function FAQ() {
  const [chooserOpen, setChooserOpen] = useState(false);

  return (
    <section className="bg-ink-50 py-20 md:py-28" id="faq">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Header */}
        <Reveal>
          <h2 className="text-display max-w-xl text-[clamp(2rem,3vw+1rem,3.5rem)] font-bold leading-tight tracking-tight text-ink-900 text-balance">
            Frequently asked questions.
          </h2>
        </Reveal>

        {/* Two-column accordion */}
        <div className="mt-12 grid grid-cols-1 gap-x-16 lg:grid-cols-2">
          <FaqColumn items={LEFT_COL} />
          <FaqColumn items={RIGHT_COL} />
        </div>

        {/* Footer nudge */}
        <div className="mt-12">
          <button
            onClick={() => setChooserOpen(true)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
          >
            Still have questions? WhatsApp us
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>

      <PartnerChooserDialog open={chooserOpen} onOpenChange={setChooserOpen} />
    </section>
  );
}
