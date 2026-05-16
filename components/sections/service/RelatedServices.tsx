"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { services } from "@/content/services";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

function getIcon(name: string): LucideIcon {
  const lookup = LucideIcons as unknown as Record<string, LucideIcon | undefined>;
  return lookup[name] ?? LucideIcons.FileText;
}

export function RelatedServices({ relatedSlugs }: { relatedSlugs: string[] }) {
  const related = relatedSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean) as typeof services;

  if (related.length === 0) return null;

  return (
    <section className="bg-ink-50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <h2 className="text-display text-2xl font-bold tracking-tight text-ink-900 md:text-3xl">
            You might also need
          </h2>
        </Reveal>

        <Stagger interval={80} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {related.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <Stagger.Item key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-6 transition-all hover:border-brand-200 hover:shadow-md hover:shadow-brand-500/5"
                >
                  <Icon
                    size={24}
                    strokeWidth={1.75}
                    className="mt-0.5 shrink-0 text-brand-500"
                    aria-hidden="true"
                  />
                  <div className="flex-1">
                    <h3 className="text-display font-semibold text-ink-900">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-500">{service.oneLiner}</p>
                  </div>
                  <ArrowRight
                    className="mt-1 size-4 shrink-0 text-ink-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-brand-500"
                    aria-hidden="true"
                  />
                </Link>
              </Stagger.Item>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
