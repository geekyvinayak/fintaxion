"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { services, type Service } from "@/content/services";
import { buildWhatsAppUrl, TEAM_NUMBERS } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

// ─── Icon resolver ────────────────────────────────────────────────────────────

function getIcon(name: string): LucideIcon {
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
        "group relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-500/8",
        !featured && "border-ink-100 bg-white",
        featured && "border-brand-100 bg-brand-50"
      )}
    >
      {/* Stretched link covers the entire card */}
      <Link
        href={`/services/${service.slug}`}
        className="absolute inset-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
        aria-label={`View ${service.title}`}
      />

      {/* Icon row — arrow appears on hover */}
      <div className="flex items-start justify-between">
        <Icon
          size={featured ? 32 : 26}
          strokeWidth={1.6}
          className="shrink-0 text-brand-500"
          aria-hidden="true"
        />
        <ArrowUpRight
          className="size-4 shrink-0 text-ink-300 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-500 group-hover:opacity-100"
          aria-hidden="true"
        />
      </div>

      {/* Title */}
      <h3
        className={cn(
          "text-display mt-5 font-semibold leading-snug tracking-tight text-ink-900",
          featured ? "text-xl" : "text-[0.9375rem]"
        )}
      >
        {service.title}
      </h3>

      {/* One-liner — same for all cards, no long description */}
      <p className="mt-2 text-sm leading-relaxed text-ink-500">
        {service.oneLiner}
      </p>

      {/* WhatsApp action — always at the bottom, z-10 to stay above stretched link */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-1 rounded-sm"
        aria-label={`WhatsApp us about ${service.title}`}
        onClick={(e) => e.stopPropagation()}
      >
        <WhatsAppIcon className="size-3.5" />
        WhatsApp us
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
              className={cn(i === 0 && "lg:col-span-2 lg:row-span-2")}
            >
              <ServiceCard service={service} featured={i === 0} />
            </Stagger.Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
