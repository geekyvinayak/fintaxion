import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Toaster } from "@/components/ui/sonner";

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

export const metadata: Metadata = {
  title: "Fintaxion — CA Firm Delhi | ITR, GST & ROC Filing",
  description:
    "Fintaxion Consulting LLP — Chartered Accountants in Delhi. ITR filing, GST registration, TDS returns, ROC work, and MSME registration.",
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
          <Toaster position="bottom-right" />
        </Providers>
      </body>
    </html>
  );
}
