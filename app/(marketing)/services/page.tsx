import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/content/services";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata = buildMetadata({
  title: "CA Services in Delhi | Fintaxion Consulting",
  description:
    "ITR filing, GST registration & returns, TDS, MSME, DSC, PF/ESI, startup registration, and ROC compliance — all under one roof. Licensed CAs in Delhi NCR.",
  path: "/services",
});

function getIcon(name: string): LucideIcon {
  const lookup = LucideIcons as unknown as Record<string, LucideIcon | undefined>;
  return lookup[name] ?? LucideIcons.FileText;
}

export default function ServicesPage() {
  return (
    <main className="pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <h1 className="text-display text-[clamp(2.5rem,5vw+1rem,4rem)] font-bold leading-tight tracking-tight text-ink-900 text-balance">
            Everything you need, under one roof.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">
            ITR filing to ROC compliance — our licensed CAs handle every statutory obligation for salaried individuals, small businesses, and growing startups.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative flex flex-col gap-4 rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-lg hover:shadow-brand-500/8"
              >
                <Icon
                  size={28}
                  strokeWidth={1.75}
                  className="shrink-0 text-brand-500 transition-transform duration-300 group-hover:rotate-[4deg]"
                  aria-hidden="true"
                />
                <div className="flex flex-1 flex-col gap-2">
                  <h2 className="text-display font-semibold leading-snug tracking-tight text-ink-900">
                    {service.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-ink-500">
                    {service.oneLiner}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold text-brand-600 transition-colors group-hover:text-brand-700">
                  Learn more
                  <ArrowRight
                    className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Pricing note */}
        <p className="mt-10 text-sm text-ink-400">
          All services quoted at a fixed fee before work begins. First consultation free —{" "}
          <Link
            href="/#contact"
            className="font-medium text-brand-600 underline underline-offset-2 hover:text-brand-700"
          >
            WhatsApp us to get a quote
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
