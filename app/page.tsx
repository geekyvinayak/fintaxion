import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      {/*
       * Remaining sections will be added here as they're built:
       * TrustStrip, Services, HowItWorks, WhyFintaxion,
       * Testimonials, Team, FAQ, FinalCTA
       */}

      {/* Anchor target for "Book a free call" CTA in hero */}
      <div id="contact" />
    </>
  );
}
