import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Toaster } from "sonner";

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#10B981",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fintaxion.in"),
  title: {
    default: "Fintaxion Consulting LLP — CA Firm Delhi | ITR, GST & ROC Filing",
    template: "%s | Fintaxion Consulting",
  },
  description:
    "Professionals in Delhi. ITR filing, GST registration, TDS returns, ROC compliance, MSME & startup registration — handled on WhatsApp. First consultation free.",
  keywords: [
    "CA firm Delhi",
    "chartered accountant Delhi",
    "ITR filing Delhi",
    "GST registration Delhi",
    "Indian tax consultant",
    "TDS returns",
    "ROC compliance",
    "MSME registration",
    "startup registration Delhi",
    "income tax filing India",
    "GST return filing",
    "CA near me Delhi",
    "tax consultant Delhi NCR",
    "AY 2026-27 ITR",
  ],
  authors: [{ name: "Fintaxion Consulting LLP" }],
  creator: "Fintaxion Consulting LLP",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Fintaxion Consulting",
    title: "Fintaxion Consulting LLP — CA Firm Delhi",
    description:
      "ITR filing, GST registration, TDS, ROC compliance & more. Trusted by 200+ Delhi NCR businesses. Reply in minutes on WhatsApp.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fintaxion Consulting LLP — CA Firm Delhi",
    description:
      "ITR filing, GST registration, TDS, ROC compliance & more. Trusted by 200+ Delhi NCR businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-ink-900">
        <Providers>
          <Nav />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <Toaster theme="light" position="bottom-right" />
        </Providers>
      </body>
    </html>
  );
}
