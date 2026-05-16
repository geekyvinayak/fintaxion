"use client";

import { Stagger } from "@/components/motion/Stagger";
import { Reveal } from "@/components/motion/Reveal";
import { buildWhatsAppUrl, TEAM_NUMBERS } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const WA_URL = buildWhatsAppUrl(TEAM_NUMBERS.hemant, "Hi, I'd like to get started.");

const DOC_CHIPS = ["PAN Card", "Form 16", "Bank Statement"];

// ─── Step card ────────────────────────────────────────────────────────────────

function StepCard({
  number,
  title,
  body,
  extra,
}: {
  number: string;
  title: string;
  body: string;
  extra: "whatsapp" | "docs" | "badge";
}) {
  return (
    <div className="flex flex-col gap-5">
      {/* Numbered circle — z-10 so it sits above the desktop connector line */}
      <div className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-full bg-brand-500 shadow-md shadow-brand-500/25">
        <span className="font-mono text-lg font-bold leading-none text-white">{number}</span>
      </div>

      <h3 className="text-display text-xl font-semibold leading-snug tracking-tight text-ink-900">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-ink-500">{body}</p>

      {/* Step-specific visual accent */}
      {extra === "whatsapp" && (
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-1 rounded-sm"
        >
          <WhatsAppIcon className="size-4" />
          Start on WhatsApp
        </a>
      )}

      {extra === "docs" && (
        <div className="flex flex-wrap gap-2">
          {DOC_CHIPS.map((doc) => (
            <span
              key={doc}
              className="rounded-full bg-ink-100 px-3 py-1 text-xs font-medium text-ink-700"
            >
              {doc}
            </span>
          ))}
        </div>
      )}

      {extra === "badge" && (
        <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
          Filed <span aria-hidden="true">✓</span>
        </div>
      )}
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function HowItWorks() {
  return (
    <section className="bg-white py-20 md:py-28" id="how-it-works">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Header */}
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-display text-[clamp(2rem,3vw+1rem,3.5rem)] font-bold leading-tight tracking-tight text-ink-900 text-balance">
              From first message to filed return
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-500">
              Three steps. No office visits. No jargon.
            </p>
          </div>
        </Reveal>

        {/* Steps container — relative so the dashed connector line can be absolute */}
        <div className="relative mt-16">
          {/*
           * Desktop-only dashed connector: one horizontal line at circle center (top: 2rem).
           * The solid bg-brand-500 circles sit on top (z-10) and visually "cut" the line,
           * making it appear only between circles.
           */}
          <div
            className="absolute inset-x-0 hidden border-t-2 border-dashed border-ink-300 md:block"
            style={{ top: "2rem" }}
            aria-hidden="true"
          />

          <Stagger
            interval={120}
            className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8"
          >
            <Stagger.Item>
              <StepCard
                number="01"
                title="Chat on WhatsApp"
                body="Drop us a message and tell us what you need. We'll scope the work and quote a fixed fee — no surprises, no hidden charges."
                extra="whatsapp"
              />
            </Stagger.Item>

            <Stagger.Item>
              <StepCard
                number="02"
                title="Share your documents"
                body="Send us the required documents securely over WhatsApp or email. Our CAs review everything and confirm receipt within the hour."
                extra="docs"
              />
            </Stagger.Item>

            <Stagger.Item>
              <StepCard
                number="03"
                title="We file. You relax."
                body="We handle the entire filing process end-to-end and send you the acknowledgement the moment it's done. Zero follow-up needed."
                extra="badge"
              />
            </Stagger.Item>
          </Stagger>
        </div>
      </div>
    </section>
  );
}
