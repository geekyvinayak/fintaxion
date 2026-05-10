"use client";

import { BadgeCheck, Receipt, BellRing, HeartHandshake, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

const REASONS: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: BadgeCheck,
    title: "Licensed Chartered Accountants",
    body: "Every filing is handled by a qualified CA — not an intern or a bot. You get professional accountability with every engagement.",
  },
  {
    icon: Receipt,
    title: "Transparent flat-fee pricing",
    body: "We quote a fixed price before we start, and that's what you pay. No meter running, no surprise add-ons at the end.",
  },
  {
    icon: BellRing,
    title: "Deadline reminders before due dates",
    body: "We track every deadline — ITR, GSTR-1, GSTR-3B, TDS — and remind you with enough lead time to gather documents without panic.",
  },
  {
    icon: HeartHandshake,
    title: "Year-round support, not just at filing time",
    body: "Tax questions don't follow a calendar. Reach us on WhatsApp any day of the year and get a response within the hour.",
  },
];

// ─── Reason card ──────────────────────────────────────────────────────────────

function ReasonCard({
  icon: Icon,
  title,
  body,
}: (typeof REASONS)[number]) {
  return (
    <div className="flex flex-col gap-4 py-2">
      <Icon
        size={32}
        strokeWidth={1.75}
        className="shrink-0 text-brand-500"
        aria-hidden="true"
      />
      <h3 className="text-display text-lg font-semibold leading-snug tracking-tight text-ink-900">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-ink-500">{body}</p>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function Why() {
  return (
    <section className="bg-white py-20 md:py-28" id="why-us">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Header */}
        <Reveal>
          <h2 className="text-display max-w-xl text-[clamp(2rem,3vw+1rem,3.5rem)] font-bold leading-tight tracking-tight text-ink-900 text-balance">
            Why families and founders choose us.
          </h2>
        </Reveal>

        {/* 2 × 2 grid */}
        <Stagger
          interval={90}
          className="mt-14 grid grid-cols-1 gap-x-16 gap-y-12 sm:grid-cols-2"
        >
          {REASONS.map((reason) => (
            <Stagger.Item key={reason.title}>
              <ReasonCard {...reason} />
            </Stagger.Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
