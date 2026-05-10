"use client";

import { AnimatedNumber } from "@/components/motion/AnimatedNumber";
import { Stagger } from "@/components/motion/Stagger";
import { statsList, type Stat } from "@/content/stats";

// ─── Single stat card ─────────────────────────────────────────────────────────

function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className="flex flex-col gap-3">
      {/* 4px × 24px brand accent rule */}
      <div className="h-1 w-6 rounded-full bg-brand-500" />

      <AnimatedNumber
        value={stat.value}
        suffix={stat.suffix}
        duration={1.6}
        className="text-display text-[clamp(2.5rem,3vw+1rem,3.5rem)] font-bold leading-none tracking-tight text-ink-900"
      />

      <p className="text-sm font-medium text-ink-500">{stat.label}</p>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function TrustStrip() {
  return (
    <section className="bg-ink-50 py-20 md:py-28" aria-label="Trust metrics">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Stagger
          interval={80}
          className="grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-4 md:gap-x-12"
        >
          {statsList.map((stat) => (
            <Stagger.Item key={stat.label}>
              <StatCard stat={stat} />
            </Stagger.Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
