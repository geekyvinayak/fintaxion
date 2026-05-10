import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Why } from "@/components/sections/Why";
import { Testimonials } from "@/components/sections/Testimonials";
import { Team } from "@/components/sections/Team";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

// ─── JSON-LD structured data ──────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "AccountingService"],
      "@id": "https://fintaxion.in/#business",
      name: "Fintaxion Consulting LLP",
      description:
        "Chartered Accountants in Delhi offering ITR filing, GST registration, TDS returns, ROC compliance, MSME and startup registration.",
      url: "https://fintaxion.in",
      telephone: ["+91-8178363761", "+91-7042067976"],
      email: "info@fintaxion.in",
      priceRange: "₹₹",
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "L-223/4, Sangam Vihar, Deoli",
          addressLocality: "South Delhi",
          addressRegion: "Delhi",
          postalCode: "110062",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "201 DSIDC Shed, Okhla Industrial Area, Phase-I",
          addressLocality: "New Delhi",
          addressRegion: "Delhi",
          postalCode: "110020",
          addressCountry: "IN",
        },
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.4961,
        longitude: 77.2351,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "10:00",
          closes: "19:00",
        },
      ],
      // [TODO: confirm review count and rating with client before launch]
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "50",
        bestRating: "5",
        worstRating: "1",
      },
      sameAs: [
        "https://www.linkedin.com/company/fintaxion",
        "https://www.instagram.com/fintaxion",
      ],
    },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustStrip />
      <Services />
      <HowItWorks />
      <Why />
      <Testimonials />
      <Team />
      <FAQ />
      <FinalCTA />
    </>
  );
}
