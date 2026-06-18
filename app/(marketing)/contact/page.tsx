import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Fintaxion Consulting. WhatsApp, call, or email us for ITR filing, GST registration, TDS returns, and all CA services in Delhi.",
  path: "/contact",
});

// ─── Contact details ──────────────────────────────────────────────────────────

const OFFICES = [
  {
    label: "South Delhi",
    address: "L-223/4, Sangam Vihar, Deoli,\nSouth Delhi, New Delhi 110062",
  },
  {
    label: "Okhla",
    address: "201 DSIDC Shed, Okhla Industrial Area,\nPhase-I, New Delhi 110020",
  },
];

const PARTNERS = [
  { name: "Hemant Singh", phone: "+91-8178363761", tel: "tel:+91-8178363761" },
  { name: "CMA Vijay Pal", phone: "+91-8796987976", tel: "tel:+91-8796987976" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Page header */}
        <div className="max-w-2xl">
          <h1 className="text-display text-[clamp(2rem,3vw+1rem,3.5rem)] font-bold leading-tight tracking-tight text-ink-900 text-balance">
            Let&apos;s sort out your taxes.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            Send us a message and we&apos;ll reply within 30 minutes during business
            hours — or reach us instantly on WhatsApp.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — contact details */}
          <div className="flex flex-col gap-10">
            {/* Offices */}
            <div className="flex flex-col gap-6">
              {OFFICES.map((office) => (
                <div key={office.label} className="flex gap-3">
                  <MapPin
                    className="mt-1 size-5 shrink-0 text-brand-500"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-ink-900">{office.label}</p>
                    <p className="mt-0.5 whitespace-pre-line text-sm leading-relaxed text-ink-500">
                      {office.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Phones */}
            <div className="flex flex-col gap-3">
              {PARTNERS.map((p) => (
                <div key={p.name} className="flex gap-3">
                  <Phone
                    className="mt-0.5 size-5 shrink-0 text-brand-500"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold text-ink-900">{p.name}</p>
                    <a
                      href={p.tel}
                      className="text-sm text-ink-500 transition-colors hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-sm"
                    >
                      {p.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Email */}
            <div className="flex gap-3">
              <Mail className="mt-0.5 size-5 shrink-0 text-brand-500" aria-hidden="true" />
              <a
                href="mailto:info@fintaxion.in"
                className="text-sm text-ink-500 transition-colors hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-sm"
              >
                info@fintaxion.in
              </a>
            </div>

            {/* Hours */}
            <div className="flex gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-brand-500" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-ink-900">Office hours</p>
                <p className="text-sm text-ink-500">Mon – Sat, 10:00 AM – 7:00 PM</p>
                <p className="mt-1 text-sm text-ink-400">
                  WhatsApp available outside hours for urgent matters.
                </p>
              </div>
            </div>

            {/* Google Map */}
            <div className="overflow-hidden rounded-2xl border border-ink-100">
              <iframe
                title="Fintaxion office location — Sangam Vihar, South Delhi"
                src="https://maps.google.com/maps?q=28.4961,77.2351&z=15&output=embed"
                width="100%"
                height="280"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right — lead form */}
          <div>
            <h2 className="text-display text-xl font-semibold text-ink-900 mb-6">
              Send us a message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
