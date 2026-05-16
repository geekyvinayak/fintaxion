"use client";

import { useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { testimonials, type Testimonial } from "@/content/testimonials";
import { cn } from "@/lib/utils";

// ─── Card ─────────────────────────────────────────────────────────────────────

function TestimonialCard({
  t,
  className,
}: {
  t: Testimonial;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "flex w-72 flex-none flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm shadow-ink-900/5",
        className
      )}
    >
      <blockquote>
        <p className="text-sm italic leading-relaxed text-ink-700">
          &ldquo;{t.quote}&rdquo;
        </p>
      </blockquote>
      <figcaption className="border-t border-ink-100 pt-4">
        <p className="font-mono text-xs font-semibold text-ink-900">{t.name}</p>
        <p className="font-mono text-xs text-ink-500">
          {t.role} &middot; {t.company}
        </p>
      </figcaption>
    </figure>
  );
}

// ─── Single marquee row ───────────────────────────────────────────────────────

function MarqueeRow({
  doubled,
  reverse = false,
}: {
  doubled: Testimonial[];
  reverse?: boolean;
}) {

  return (
    <div
      className="group overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className={cn(
          "flex w-max gap-4",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          // Pause on hover for the entire row container
          "group-hover:[animation-play-state:paused]"
        )}
        aria-hidden="true"
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

// ─── Staggered grid (reduced-motion fallback) ─────────────────────────────────

function StaticGrid() {
  return (
    <Stagger
      interval={80}
      className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {testimonials.map((t) => (
        <Stagger.Item key={t.id}>
          <TestimonialCard t={t} className="w-full" />
        </Stagger.Item>
      ))}
    </Stagger>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

const ROW_1 = testimonials;
const ROW_2 = [...testimonials.slice(3), ...testimonials.slice(0, 3)];
const ROW_1_DOUBLED = [...ROW_1, ...ROW_1];
const ROW_2_DOUBLED = [...ROW_2, ...ROW_2];

export function Testimonials() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-ink-50 py-20 md:py-28" id="testimonials">
      {/* Header inside the container */}
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <h2 className="text-display max-w-xl text-[clamp(2rem,3vw+1rem,3.5rem)] font-bold leading-tight tracking-tight text-ink-900 text-balance">
            Real stories from real clients.
          </h2>
        </Reveal>

        {/*
         * Screen-reader list — always present, always accessible.
         * The visual marquee is aria-hidden; this is the canonical content for AT.
         */}
        <ul className="sr-only">
          {testimonials.map((t) => (
            <li key={t.id}>
              <blockquote>
                &ldquo;{t.quote}&rdquo; — {t.name}, {t.role} at {t.company}
              </blockquote>
            </li>
          ))}
        </ul>

        {/* Reduced-motion: visible static grid */}
        {prefersReduced && <StaticGrid />}
      </div>

      {/* Marquee rows — aria-hidden, visual decoration only */}
      {!prefersReduced && (
        <div className="mt-12 flex flex-col gap-4" aria-hidden="true">
          <MarqueeRow doubled={ROW_1_DOUBLED} />
          <MarqueeRow doubled={ROW_2_DOUBLED} reverse />
        </div>
      )}
    </section>
  );
}
