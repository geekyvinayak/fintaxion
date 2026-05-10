"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { services, type Service } from "@/content/services";
import { buildWhatsAppUrl, TEAM_NUMBERS } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";
import { ArrowRight, type LucideIcon } from "lucide-react";

// ─── Icon resolver ────────────────────────────────────────────────────────────

function getIcon(name: string): LucideIcon {
  // Double-cast through unknown: lucide's namespace mixes icons + non-icon
  // exports; Record<string, LucideIcon> doesn't statically overlap, but at
  // runtime every name from content/services.ts resolves to a valid icon.
  const lookup = LucideIcons as unknown as Record<string, LucideIcon | undefined>;
  return lookup[name] ?? LucideIcons.FileText;
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function ServiceCard({
  service,
  featured = false,
}: {
  service: Service;
  featured?: boolean;
}) {
  const Icon = getIcon(service.icon);
  const waUrl = buildWhatsAppUrl(TEAM_NUMBERS.hemant, service.whatsappPrefill);

  return (
    <div
      className={cn(
        // Base
        "group relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300",
        // Hover: -4px lift, soft shadow, brand ring
        "hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-500/8 hover:ring-1 hover:ring-brand-100",
        // Default card
        !featured && "border-ink-100 bg-white",
        // Featured card (ITR Filing — 2×2)
        featured && "border-brand-100 bg-brand-50"
      )}
    >
      {/* Icon */}
      <Icon
        size={28}
        strokeWidth={1.75}
        className={cn(
          "shrink-0 text-brand-600 transition-transform duration-300 ease-out group-hover:rotate-[4deg]",
          featured && "size-8"
        )}
      />

      {/* Title */}
      <h3
        className={cn(
          "text-display mt-4 font-semibold leading-snug tracking-tight text-ink-900",
          featured ? "text-xl" : "text-base"
        )}
      >
        {service.title}
      </h3>

      {/* Copy — featured shows full description, others show one-liner */}
      <p
        className={cn(
          "mt-2 leading-relaxed text-ink-500",
          featured ? "text-sm" : "text-sm"
        )}
      >
        {service.oneLiner}
      </p>
      {featured && (
        <p className="mt-3 text-sm leading-relaxed text-ink-400">
          {service.description}
        </p>
      )}

      {/* WhatsApp link — always at bottom */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto flex items-center gap-1 pt-5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-1 rounded-sm"
        aria-label={`WhatsApp us about ${service.title}`}
      >
        WhatsApp us
        <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function Services() {
  return (
    <section className="bg-white py-20 md:py-28" id="services">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Header */}
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-display text-[clamp(2rem,3vw+1rem,3.5rem)] font-bold leading-tight tracking-tight text-ink-900 text-balance">
              Everything you need under one roof
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-500">
              From your first ITR to annual ROC compliance — we handle every
              filing deadline so you can focus on growing your business.
            </p>
          </div>
        </Reveal>

        {/* Bento grid */}
        <Stagger
          interval={55}
          className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, i) => (
            <Stagger.Item
              key={service.slug}
              className={cn(
                // First card: 2 cols × 2 rows on desktop
                i === 0 && "lg:col-span-2 lg:row-span-2"
              )}
            >
              <ServiceCard service={service} featured={i === 0} />
            </Stagger.Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
