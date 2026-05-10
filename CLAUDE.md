# Fintaxion — Website Redesign Project Brief

> Read this file before every task. It defines product, audience, design tokens, and conversion goals.

---

## 1. Product

**Fintaxion Consulting LLP** — Chartered Accountant firm in Delhi.

**Services:** ITR filing • GST registration & returns • TDS returns • MSME registration • Digital Signature Certificates • ESI/PF registration & returns • Startup registration • All ROC-related work.

**Partners:**
- Hemant Singh — `+91-8178363761` — WhatsApp: https://wa.me/918178363761
- Vijay Pal — `+91-7042067976` — WhatsApp: https://wa.me/917042067976

**Email:** info@fintaxion.in
**Offices:**
- L-223/4, Sangam Vihar, Deoli, South Delhi, New Delhi 110062
- 201 DSIDC Shed, Okhla Industrial Area, Phase-I, New Delhi 110020

---

## 2. Primary Goal

**Drive WhatsApp + phone-call leads.** Every section must surface a path to one of those two channels. Forms are secondary; chat is primary in this market.

Secondary: build trust through specificity (numbers, names, compliance references) — not generic claims.

---

## 3. Target Users

1. Salaried individuals filing ITR (Tier 1–2 Indian cities, comfortable in English but Hindi-friendly)
2. Small business owners needing GST/TDS/ROC compliance
3. Founders registering startups, MSMEs, getting DSCs

---

## 4. Tech Stack (locked)

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (`motion/react`)
- **shadcn/ui** as component base
- **lucide-react** for icons
- **next/font** for self-hosted fonts
- **Vercel** for deployment
- **Resend** for transactional email on form submit

---

## 5. Design Direction

**"Clean fintech meets modern minimal."** Think Razorpay's clarity + Cred's precision, but for tax. Light, spacious, confident.

### Tokens

```css
/* Color */
--brand-50:  #ECFDF5;
--brand-100: #D1FAE5;
--brand-500: #10B981;  /* primary accent */
--brand-600: #059669;  /* CTA hover */
--brand-700: #047857;  /* text on light */
--brand-900: #064E3B;  /* deep emphasis */

--ink-950: #0A0A0A;
--ink-900: #171717;
--ink-700: #404040;
--ink-500: #737373;
--ink-300: #D4D4D4;
--ink-100: #F5F5F5;
--ink-50:  #FAFAFA;

--accent-warm: #FCD34D;  /* used sparingly for highlights */
--bg: #FFFFFF;
```

### Typography

- **Display / headings:** Bricolage Grotesque (variable, weights 400–800)
- **Body:** Geist Sans
- **Numbers / mono accents:** Geist Mono

Heading sizes (clamp-based):
- H1: `clamp(2.5rem, 5vw + 1rem, 5rem)` — tight tracking (-0.03em)
- H2: `clamp(2rem, 3vw + 1rem, 3.5rem)`
- H3: `clamp(1.5rem, 1.5vw + 1rem, 2rem)`

### Motion principles

- Subtle, not showy. 8–12px translate, 0.5–0.6s, `cubic-bezier(0.16, 1, 0.3, 1)`.
- Scroll-reveal on sections (once, not on every scroll).
- Stagger children at 60ms intervals.
- Magnetic effect on primary CTA buttons only.
- Animated number counters for stats (intersection-observer triggered).
- No parallax, no auto-playing video, no heavy WebGL.

### Spacing & rhythm

- Container: `max-w-6xl` with `px-6 md:px-8`
- Section vertical padding: `py-20 md:py-28`
- Generous whitespace between sections — let the page breathe.

---

## 6. Page Structure (in order)

1. **Sticky nav** — logo, services dropdown, links, persistent WhatsApp CTA on the right
2. **Hero** — 21st.dev animated hero. Big confident headline ("File your ITR before 31 July. Stress-free."), subtext, dual CTA: WhatsApp (primary) + Book a free call (secondary). Trust micro-line: "Trusted by 200+ businesses across Delhi NCR"
3. **Trust strip** — animated counters: ITRs filed, businesses served, years of experience, GST returns processed
4. **Services grid** — 8 services with icon + 1-line description + hover lift
5. **How it works** — 3 steps: (1) Chat on WhatsApp, (2) Share documents, (3) Sit back, we file. Visual step indicator.
6. **Why Fintaxion** — 4 differentiators with icon: licensed CAs, transparent pricing, deadline reminders, year-round support
7. **Testimonials** — marquee or carousel with name, role, photo, short quote
8. **Pricing snapshot** *(optional, behind feature flag)* — "starting from" cards for top 3 services
9. **Team** — Hemant & Vijay cards with photos, credentials, direct WhatsApp + call buttons per partner
10. **FAQ** — accordion: 8–10 questions (deadlines, documents needed, fees, refunds, response time, etc.)
11. **Final CTA** — large emerald section: "Have a question? We reply in minutes." with WhatsApp + call buttons
12. **Footer** — both office addresses, embedded map, contact, social links, copyright
13. **Floating WhatsApp button** — bottom-right, persistent, opens chooser between Hemant and Vijay

---

## 7. Conversion Rules

- WhatsApp link template: `https://wa.me/{number}?text=Hi%20I%20need%20help%20with%20{Service}`
- Click-to-call: `tel:+91xxxxxxxxxx`
- Above-the-fold CTAs must be visible without scrolling on a 360×640 viewport
- All service cards have a "WhatsApp us" link prefilled with that service name
- Lead form on `/contact` posts to `/api/lead` → emails info@fintaxion.in via Resend, returns toast confirmation
- Floating WhatsApp persists across all pages

---

## 8. Content Rules

- **Numbers beat adjectives.** "Filed 1,000+ returns" not "trusted experts."
- Use ₹ symbol, mention current AY (2026–27 for FY 2025–26).
- Reference real deadlines: ITR 31 July, GSTR-1 11th, GSTR-3B 20th.
- English-only copy v1; structure code so a Hindi locale can be added later (use `next-intl` patterns even if only English is shipped).
- No lorem ipsum. If real content isn't ready, use placeholder marked `[TODO: client to confirm]`.

---

## 9. Performance & SEO

- Lighthouse mobile ≥ 95 on Performance, Accessibility, Best Practices, SEO.
- All images via `next/image`, with explicit width/height; serve AVIF/WebP.
- LCP element is the hero headline (text), not an image — keep hero image lazy or below the fold.
- Structured data: `LocalBusiness` + `AccountingService` JSON-LD on homepage; `Person` schema for team.
- Meta: title 50–60 chars, description 150–160 chars, unique per page.
- OG image: 1200×630, dynamically generated via `next/og`.
- `sitemap.xml`, `robots.txt`, canonical tags.

---

## 10. 21st.dev Components in Use

Browse https://21st.dev and copy snippets directly. Components selected for this project:

- **Hero:** Animated Hero with rotating words OR Hero Highlight (Aceternity). Spotlight effect optional, kept subtle.
- **Marquee:** for testimonials and trust logos.
- **BentoGrid:** for services overview.
- **Animated Number:** for stats counters.
- **Sparkles / Background Beams:** only on the final CTA section, kept low-opacity.

When pulling a 21st.dev component, place it under `components/ui/` and adapt its tokens to match our `--brand-*` and font variables. Strip any default purple gradients.

---

## 11. Folder Structure

```
app/
  (marketing)/
    page.tsx            # homepage
    services/[slug]/page.tsx
    about/page.tsx
    team/page.tsx
    contact/page.tsx
  api/lead/route.ts     # form handler
  layout.tsx
  globals.css
components/
  ui/                   # shadcn + 21st.dev primitives
  sections/             # Hero, Services, Trust, FAQ, etc.
  motion/               # Reveal, MagneticButton, AnimatedNumber
  layout/               # Nav, Footer, FloatingWhatsApp
content/
  services.ts
  faq.ts
  testimonials.ts
  team.ts
lib/
  whatsapp.ts           # link builders
  seo.ts                # metadata helpers
public/
  images/team/...
```

---

## 12. Definition of Done (per section)

A section is "done" when:
- ✅ Renders correctly at 360px, 768px, 1280px, 1536px
- ✅ All interactive elements have hover/focus/active states
- ✅ Motion respects `prefers-reduced-motion`
- ✅ Copy uses real numbers and real partner names — no placeholders
- ✅ Every CTA links to a working WhatsApp/tel/route
- ✅ Lighthouse mobile score for the page ≥ 95
- ✅ No console warnings, no `any` types, no unused imports
