"use client";

import Image from "next/image";
import { useState } from "react";
import { Phone } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { team, type TeamMember } from "@/content/team";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── Photo with initials fallback ─────────────────────────────────────────────

function TeamPhoto({ src, name }: { src: string; name: string }) {
  const [errored, setErrored] = useState(false);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (errored) {
    return (
      <div className="flex size-60 shrink-0 items-center justify-center rounded-2xl bg-brand-50">
        <span className="text-display text-4xl font-bold text-brand-500">{initials}</span>
      </div>
    );
  }

  return (
    <div className="size-60 shrink-0 overflow-hidden rounded-2xl">
      <Image
        src={src}
        alt={name}
        width={240}
        height={240}
        className="h-full w-full object-cover object-top"
        onError={() => setErrored(true)}
      />
    </div>
  );
}

// ─── Partner card ─────────────────────────────────────────────────────────────

function MemberCard({ member }: { member: TeamMember }) {
  // Strip non-digits to get the E.164 number for buildWhatsAppUrl
  const phoneDigits = member.phone.replace(/\D/g, "");
  const waUrl = buildWhatsAppUrl(phoneDigits, "Hi, I'd like a free consultation.");
  const telHref = `tel:${member.phone}`;

  return (
    <div className="flex flex-col gap-6 rounded-2xl bg-ink-50 p-8 sm:flex-row sm:items-start sm:gap-8">
      <TeamPhoto src={member.photo} name={member.name} />

      <div className="flex flex-1 flex-col gap-4">
        <div>
          <h3 className="text-display text-2xl font-bold leading-tight tracking-tight text-ink-900">
            {member.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-ink-500">{member.role}</p>
          <p className="text-xs text-ink-400">{member.credentials}</p>
        </div>

        <p className="text-sm leading-relaxed text-ink-600">{member.bio}</p>

        <div className="mt-auto flex flex-wrap gap-3 pt-1">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp
          </a>
          <a
            href={telHref}
            className="inline-flex items-center gap-2 rounded-lg border border-ink-300 px-4 py-2.5 text-sm font-semibold text-ink-700 transition-colors hover:border-ink-500 hover:text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-400"
          >
            <Phone className="size-4" aria-hidden="true" />
            {member.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function Team() {
  return (
    <section className="bg-white py-20 md:py-28" id="team">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-display text-[clamp(2rem,3vw+1rem,3.5rem)] font-bold leading-tight tracking-tight text-ink-900 text-balance">
              The partners behind Fintaxion.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-500">
              Qualified CAs with a combined 15+ years of practice across direct
              and indirect taxation.
            </p>
          </div>
        </Reveal>

        <Stagger
          interval={120}
          className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2"
        >
          {team.map((member) => (
            <Stagger.Item key={member.slug}>
              <MemberCard member={member} />
            </Stagger.Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
