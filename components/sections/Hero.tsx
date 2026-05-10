"use client";

import { PartnerChooserDialog } from "@/components/layout/PartnerChooserDialog";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

// ─── Constants ────────────────────────────────────────────────────────────────

const WORDS = ["ITR", "GST", "TDS"] as const;
const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];
const WORD_INTERVAL_MS = 2600;

/** Stats rendered inside the right decorative panel */
const PANEL_STATS = [
  { value: "1,000+", label: "ITRs Filed" },
  { value: "200+", label: "Businesses Served" },
  { value: "8+", label: "Years of Experience" },
  { value: "5,000+", label: "GST Returns Filed" },
] as const;

// ─── Deadline info strip ──────────────────────────────────────────────────────

const DEADLINES = [
  "ITR due 31 July 2026",
  "GSTR-3B due 20th monthly",
  "Free first consultation",
] as const;

// ─── Shared easing for staggered children ────────────────────────────────────

/**
 * Container variant carries ONLY stagger timing — no opacity.
 * This keeps the h1 (plain HTML, not a motion element) visible in the
 * initial server render so it remains the LCP candidate.
 */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.08 },
  },
} as const;

const itemVariants = {
  hidden: { y: 14, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: EASE },
  },
} as const;

// ─── WhatsApp icon ────────────────────────────────────────────────────────────

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

// ─── Hero ─────────────────────────────────────────────────────────────────────

export function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [chooserOpen, setChooserOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const id = setInterval(
      () => setWordIdx((i) => (i + 1) % WORDS.length),
      WORD_INTERVAL_MS
    );
    return () => clearInterval(id);
  }, [prefersReduced]);

  function scrollToContact() {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <section
        className={cn(
          "relative flex w-full flex-col overflow-hidden bg-white md:flex-row",
          "min-h-[calc(100vh-4rem)]"
        )}
        aria-label="Hero"
      >
        {/* ── Left panel: content ─────────────────────────────────────────── */}
        <motion.div
          className="flex w-full flex-col justify-between p-8 md:w-3/5 md:p-12 lg:p-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main content */}
          <div className="flex flex-1 flex-col justify-center">
            {/*
             * h1 is intentionally NOT a motion element.
             * The container above starts with no opacity change (containerVariants.hidden = {}),
             * so this text is painted in the very first frame — keeping it as the LCP candidate.
             * font-display: swap is set on Bricolage Grotesque in layout.tsx.
             */}
            <h1
              className={cn(
                "text-display font-bold leading-[1.08] tracking-tight text-ink-900 text-balance",
                "text-[clamp(2.75rem,4vw+1rem,4.75rem)]"
              )}
            >
              File your{" "}
              {/*
               * AnimatePresence mode="popLayout" — the exiting word is absolutely
               * positioned during its exit, so the entering word's width drives layout.
               * This avoids a fixed min-width and still prevents a jump.
               */}
              <span className="inline-block overflow-hidden align-bottom">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={WORDS[wordIdx]}
                    className="inline-block text-brand-500"
                    initial={
                      prefersReduced ? { opacity: 0 } : { y: "105%", opacity: 0 }
                    }
                    animate={
                      prefersReduced ? { opacity: 1 } : { y: 0, opacity: 1 }
                    }
                    exit={
                      prefersReduced
                        ? { opacity: 0 }
                        : { y: "-105%", opacity: 0 }
                    }
                    transition={{ duration: 0.38, ease: EASE }}
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {WORDS[wordIdx]}
                  </motion.span>
                </AnimatePresence>
              </span>{" "}
              before the deadline.{" "}
              <span className="text-ink-300">Stress-free.</span>
            </h1>

            {/* Brand accent rule */}
            <motion.div
              className="my-7 h-[3px] w-14 rounded-full bg-brand-500"
              variants={itemVariants}
            />

            {/* Subheadline */}
            <motion.p
              className="max-w-[42ch] text-lg leading-relaxed text-ink-500"
              variants={itemVariants}
            >
              Licensed CAs in Delhi handling 1,000+ filings every year. Talk to
              us on WhatsApp — first consultation is free.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              variants={itemVariants}
            >
              <MagneticButton
                className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-colors hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                onClick={() => setChooserOpen(true)}
                aria-label="Open WhatsApp partner chooser"
              >
                <WhatsAppIcon className="size-4 shrink-0" />
                WhatsApp us now
              </MagneticButton>

              <MagneticButton
                className="inline-flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-6 py-3.5 text-sm font-semibold text-ink-700 transition-colors hover:bg-ink-50 hover:border-ink-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                onClick={scrollToContact}
              >
                <Phone className="size-4 shrink-0" />
                Book a free call
              </MagneticButton>
            </motion.div>

            {/* Trust micro-line */}
            <motion.p
              className="mt-5 text-xs tracking-wide text-ink-400"
              variants={itemVariants}
            >
              Trusted by 200+ businesses across Delhi NCR
              <span className="mx-2 text-ink-200" aria-hidden="true">·</span>
              GST
              <span className="mx-2 text-ink-200" aria-hidden="true">·</span>
              ITR
              <span className="mx-2 text-ink-200" aria-hidden="true">·</span>
              ROC
            </motion.p>
          </div>

          {/* Deadline strip — bottom of left panel */}
          <motion.div
            className="mt-12 grid grid-cols-1 gap-3 border-t border-ink-100 pt-7 sm:grid-cols-3"
            variants={itemVariants}
          >
            {DEADLINES.map((d) => (
              <div key={d} className="flex items-center gap-2 text-xs text-ink-400">
                <span
                  className="size-1.5 shrink-0 rounded-full bg-brand-500"
                  aria-hidden="true"
                />
                {d}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right panel: decorative ─────────────────────────────────────── */}
        <motion.div
          className="relative hidden overflow-hidden md:block md:w-2/5"
          /*
           * Clip-path wipe — replicates the original 21st.dev animation.
           * "circOut" is not in our preset easings but matches the playful reveal.
           * GPU-composited: no layout shift, no paint.
           */
          initial={{
            clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
          }}
          animate={{
            clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
          transition={{ duration: 1.15, ease: "circOut", delay: 0.05 }}
          aria-hidden="true"
        >
          {/* Brand gradient fill */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-900" />

          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: [
                "linear-gradient(var(--brand-100) 1px, transparent 1px)",
                "linear-gradient(90deg, var(--brand-100) 1px, transparent 1px)",
              ].join(", "),
              backgroundSize: "36px 36px",
            }}
          />

          {/* Floating stat cards */}
          <div className="absolute inset-0 flex flex-col justify-center gap-4 pl-24 pr-8">
            {PANEL_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="w-fit rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-sm"
                initial={{ x: 56, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.75 + i * 0.1, duration: 0.5, ease: EASE }}
              >
                <p className="font-display text-3xl font-bold tracking-tight text-white">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-sm text-white/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Large decorative "₹" watermark */}
          <div className="absolute -bottom-8 -right-4 select-none text-[18rem] font-bold leading-none text-white/5">
            ₹
          </div>
        </motion.div>
      </section>

      <PartnerChooserDialog open={chooserOpen} onOpenChange={setChooserOpen} />
    </>
  );
}
