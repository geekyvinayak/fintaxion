"use client";

import Image from "next/image";
import { useState } from "react";
import { Phone } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { team, type TeamMember } from "@/content/team";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

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
              Qualified Professionals with a combined 11+ years of practice across direct
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
