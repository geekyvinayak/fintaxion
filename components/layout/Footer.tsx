import { services } from "@/content/services";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const offices = [
  {
    label: "South Delhi",
    address: "L-223/4, Sangam Vihar, Deoli, South Delhi, New Delhi 110062",
  },
  {
    label: "Okhla",
    address:
      "201 DSIDC Shed, Okhla Industrial Area, Phase-I, New Delhi 110020",
  },
] as const;

const contacts = [
  { label: "Hemant Singh", phone: "+91-8178363761", href: "tel:+918178363761" },
  { label: "CMA Vijay Pal", phone: "+91-8796987976", href: "tel:+918796987976" },
] as const;

// Minimal inline SVGs for brand social icons (lucide-react excludes brand icons)
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-100 bg-ink-50">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
        {/* Three-column grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {/* Left — Logo, tagline, offices */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-display text-xl font-semibold tracking-tight text-ink-900">
                Fintaxion
              </span>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                Professionals in Delhi. Compliance made simple — ITR,
                GST, ROC, and more.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {offices.map((office) => (
                <div key={office.label} className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand-500" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                      {office.label}
                    </p>
                    <p className="mt-0.5 text-sm text-ink-600">
                      {office.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Middle — Services */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink-400">
              Services
            </p>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-ink-600 transition-colors hover:text-brand-600"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Contact + social */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink-400">
                Contact
              </p>
              <div className="flex flex-col gap-3">
                {contacts.map((c) => (
                  <div key={c.label} className="flex items-center gap-3">
                    <Phone className="size-4 shrink-0 text-brand-500" />
                    <div>
                      <p className="text-xs text-ink-400">{c.label}</p>
                      <a
                        href={c.href}
                        className="text-sm font-medium text-ink-700 transition-colors hover:text-brand-600"
                      >
                        {c.phone}
                      </a>
                    </div>
                  </div>
                ))}

                <div className="flex items-center gap-3">
                  <Mail className="size-4 shrink-0 text-brand-500" />
                  <a
                    href="mailto:info@fintaxion.in"
                    className="text-sm font-medium text-ink-700 transition-colors hover:text-brand-600"
                  >
                    info@fintaxion.in
                  </a>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink-400">
                Follow us
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex size-8 items-center justify-center rounded-lg border border-ink-200 text-ink-500 transition-colors hover:border-brand-500 hover:text-brand-500"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex size-8 items-center justify-center rounded-lg border border-ink-200 text-ink-500 transition-colors hover:border-brand-500 hover:text-brand-500"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-ink-100 pt-8 text-xs text-ink-400 sm:flex-row sm:items-center">
          <p>
            © {year} Fintaxion Consulting LLP. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-ink-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-ink-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
