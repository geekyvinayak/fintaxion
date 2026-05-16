"use client";

import { services } from "@/content/services";
import { cn } from "@/lib/utils";
import { buildWhatsAppUrl, TEAM_NUMBERS } from "@/lib/whatsapp";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { PartnerChooserDialog } from "./PartnerChooserDialog";

import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const MOBILE_WA_URL = buildWhatsAppUrl(TEAM_NUMBERS.hemant, "Hi, I need help with tax filing.");

// ─── Services dropdown ────────────────────────────────────────────────────────

function ServicesDropdown({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={cn(
          "flex items-center gap-1 text-sm font-medium transition-colors",
          scrolled
            ? "text-ink-700 hover:text-ink-900"
            : "text-ink-900/80 hover:text-ink-900"
        )}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        Services
        <ChevronDown
          className={cn(
            "size-3.5 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-[520px] rounded-xl border border-ink-100 bg-white p-3 shadow-lg shadow-ink-900/5">
          <div className="grid grid-cols-2 gap-1">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                onClick={() => setOpen(false)}
                className="flex flex-col rounded-lg px-3 py-2.5 transition-colors hover:bg-ink-50"
              >
                <span className="text-sm font-medium text-ink-900">
                  {s.title}
                </span>
                <span className="mt-0.5 text-xs text-ink-400 line-clamp-1">
                  {s.oneLiner}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-2 border-t border-ink-100 pt-2">
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-brand-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              View all services →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Nav links ────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
] as const;

// ─── Nav ──────────────────────────────────────────────────────────────────────

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [chooserOpen, setChooserOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    handler(); // sync on mount
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const linkCls = cn(
    "text-sm font-medium transition-colors",
    scrolled
      ? "text-ink-700 hover:text-ink-900"
      : "text-ink-900/80 hover:text-ink-900"
  );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-sm border-b border-ink-100 shadow-sm shadow-ink-900/4"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-display text-xl font-semibold tracking-tight text-ink-900"
          >
            Fintaxion
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  linkCls,
                  pathname === link.href && "text-brand-600 font-semibold"
                )}
              >
                {link.label}
              </Link>
            ))}
            <ServicesDropdown scrolled={scrolled} />
          </nav>

          {/* Right: CTA + mobile trigger */}
          <div className="flex items-center gap-3">
            <MagneticButton
              className="hidden items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 md:inline-flex"
              onClick={() => setChooserOpen(true)}
              aria-label="Chat with us on WhatsApp"
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp Us
            </MagneticButton>

            {/* Mobile hamburger */}
            <Sheet>
              <SheetTrigger
                render={
                  <button
                    className="inline-flex size-9 items-center justify-center rounded-lg text-ink-700 transition-colors hover:bg-ink-100 md:hidden"
                    aria-label="Open navigation menu"
                  >
                    <Menu className="size-5" />
                  </button>
                }
              />
              <SheetContent side="right" className="w-72 px-0 pt-0">
                <SheetHeader className="border-b border-ink-100 px-6 py-4">
                  <SheetTitle className="text-display text-left text-lg font-semibold text-ink-900">
                    Fintaxion
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-1 p-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "rounded-lg px-4 py-2.5 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-50 hover:text-ink-900",
                        pathname === link.href &&
                          "bg-brand-50 text-brand-700 hover:bg-brand-50"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}

                  <p className="mt-2 px-4 pb-1 text-[11px] font-semibold uppercase tracking-widest text-ink-400">
                    Services
                  </p>
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="rounded-lg px-4 py-2 text-sm text-ink-600 transition-colors hover:bg-ink-50 hover:text-ink-900"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>

                <div className="mt-auto border-t border-ink-100 p-4">
                  <a
                    href={MOBILE_WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
                  >
                    <WhatsAppIcon className="size-4" />
                    WhatsApp Us
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <PartnerChooserDialog open={chooserOpen} onOpenChange={setChooserOpen} />
    </>
  );
}
