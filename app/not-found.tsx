"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  Layers,
  Phone,
  FileText,
  Receipt,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { PartnerChooserDialog } from "@/components/layout/PartnerChooserDialog";

const QUICK_LINKS = [
  {
    label: "Home",
    href: "/",
    icon: Home,
    desc: "Back to the homepage",
  },
  {
    label: "All Services",
    href: "/services",
    icon: Layers,
    desc: "ITR, GST, TDS, ROC & more",
  },
  {
    label: "ITR Filing",
    href: "/services/itr-filing",
    icon: FileText,
    desc: "File your return before 31 July",
  },
  {
    label: "GST Returns",
    href: "/services/gst-registration-returns",
    icon: Receipt,
    desc: "Registration & monthly filings",
  },
  {
    label: "Startup Registration",
    href: "/services/startup-registration",
    icon: Rocket,
    desc: "Incorporate & get DPIIT recognition",
  },
  {
    label: "Contact Us",
    href: "/contact",
    icon: Phone,
    desc: "Reach us by email or form",
  },
] as const;

export default function NotFound() {
  const [chooserOpen, setChooserOpen] = useState(false);

  return (
    <div className="flex flex-1 flex-col bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-24 md:px-8 md:py-32">
        {/* 404 badge */}
        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5">
          <span className="font-mono text-sm font-semibold text-brand-700">404</span>
          <span className="text-sm text-brand-600">Page not found</span>
        </div>

        {/* Heading */}
        <h1 className="text-display max-w-xl text-[clamp(2.25rem,4vw+1rem,3.75rem)] font-bold leading-tight tracking-tight text-ink-900 text-balance">
          This page doesn&apos;t exist.
        </h1>

        <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-500">
          The link may be broken or the page may have moved. Here are some useful places to go instead.
        </p>

        {/* Quick links grid */}
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {QUICK_LINKS.map(({ label, href, icon: Icon, desc }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md hover:shadow-brand-500/6"
            >
              <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-ink-50 transition-colors group-hover:bg-brand-50">
                <Icon className="size-4.5 text-ink-500 transition-colors group-hover:text-brand-600" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-ink-900">{label}</p>
                <p className="mt-0.5 text-sm text-ink-500">{desc}</p>
              </div>
              <ArrowRight className="mt-1 size-4 shrink-0 text-ink-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-brand-500" aria-hidden="true" />
            </Link>
          ))}
        </div>

        {/* WhatsApp nudge */}
        <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-brand-100 bg-brand-50 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-ink-900">Need help finding something?</p>
            <p className="mt-1 text-sm text-ink-500">
              Chat with our CA team on WhatsApp — we reply in minutes.
            </p>
          </div>
          <button
            onClick={() => setChooserOpen(true)}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp us
          </button>
        </div>
      </div>

      <PartnerChooserDialog open={chooserOpen} onOpenChange={setChooserOpen} />
    </div>
  );
}
