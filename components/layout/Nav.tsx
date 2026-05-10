"use client";

import { services } from "@/content/services";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
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

// ─── WhatsApp SVG ─────────────────────────────────────────────────────────────

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

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
        <div className="absolute left-0 top-full z-50 mt-2 w-64 rounded-xl border border-ink-100 bg-white p-2 shadow-lg shadow-ink-900/5">
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
              <span className="mt-0.5 text-xs text-ink-500 line-clamp-1">
                {s.oneLiner}
              </span>
            </Link>
          ))}
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
                    href="https://wa.me/918178363761?text=Hi%2C%20I%20need%20help%20with%20tax%20filing."
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
