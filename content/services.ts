export interface Service {
  slug: string;
  title: string;
  oneLiner: string;
  description: string;
  /** Exact lucide-react component name */
  icon: string;
  /** Plain-text WhatsApp prefill message (unencoded) */
  whatsappPrefill: string;
}

export const services: Service[] = [
  {
    slug: "itr-filing",
    title: "ITR Filing",
    oneLiner: "File your income tax return before 31 July — stress-free.",
    description:
      "We handle ITR-1 through ITR-6 for salaried individuals, freelancers, and businesses for AY 2026–27 (FY 2025–26). Our CAs review your Form 16, capital gains, and deductions to maximise your refund and ensure zero-defect filing.",
    icon: "FileText",
    whatsappPrefill: "Hi, I need help with ITR Filing for AY 2026-27.",
  },
  {
    slug: "gst-registration-returns",
    title: "GST Registration & Returns",
    oneLiner: "Get GST-registered in 7–10 days and stay compliant every month.",
    description:
      "We handle GST registration from scratch and file GSTR-1 (due 11th), GSTR-3B (due 20th), and annual GSTR-9 on your behalf. Whether you're a trader, service provider, or e-commerce seller, we keep you reconciled and penalty-free.",
    icon: "Receipt",
    whatsappPrefill: "Hi, I need help with GST Registration or Returns.",
  },
  {
    slug: "tds-returns",
    title: "TDS Returns",
    oneLiner: "Quarterly TDS filing with 26AS reconciliation, done right.",
    description:
      "We prepare and file Form 24Q, 26Q, and 27Q within statutory deadlines (31 Jul, 31 Oct, 31 Jan, 31 May) so you avoid the ₹200/day default fee. We also correct TDS mismatches and handle TRACES notices.",
    icon: "Percent",
    whatsappPrefill: "Hi, I need help with TDS Returns.",
  },
  {
    slug: "msme-registration",
    title: "MSME Registration",
    oneLiner: "Udyam certificate issued within 1 working day.",
    description:
      "MSME (Udyam) registration unlocks priority lending, government scheme eligibility, and protection against delayed payments. We file the application on the Udyam portal and deliver your certificate with zero paperwork on your end.",
    icon: "Award",
    whatsappPrefill: "Hi, I need help with MSME / Udyam Registration.",
  },
  {
    slug: "digital-signature",
    title: "Digital Signature Certificate",
    oneLiner: "Class 3 DSC issued in 1–2 days for ROC, GST, and tenders.",
    description:
      "A DSC is mandatory for MCA filings, GST e-verification, e-tendering, and EPFO. We arrange Class 3 DSCs (individual and organisation) from licensed CAs, with doorstep verification available across Delhi NCR.",
    icon: "PenLine",
    whatsappPrefill: "Hi, I need help getting a Digital Signature Certificate (DSC).",
  },
  {
    slug: "esi-pf-registration-returns",
    title: "ESI / PF Registration & Returns",
    oneLiner: "End-to-end EPFO and ESIC compliance for your workforce.",
    description:
      "We handle PF and ESI registration, monthly ECR filing, and employee grievance follow-ups with EPFO. Our team ensures your contribution challans are deposited by the 15th and returns filed without delays.",
    icon: "Users",
    whatsappPrefill: "Hi, I need help with ESI / PF Registration or Returns.",
  },
  {
    slug: "startup-registration",
    title: "Startup Registration",
    oneLiner: "Incorporate your company or LLP and get DPIIT recognition.",
    description:
      "We incorporate Private Limited companies, LLPs, and One Person Companies on the MCA portal, and apply for DPIIT Startup India recognition to unlock tax holidays under Section 80-IAC. Full post-incorporation compliance included.",
    icon: "Rocket",
    whatsappPrefill: "Hi, I need help with Startup or Company Registration.",
  },
  {
    slug: "roc-compliance",
    title: "ROC Compliance",
    oneLiner: "Annual filings, director changes, and charge registration — on time.",
    description:
      "We file AOC-4, MGT-7, DIR-3 KYC, and all event-based forms with the Registrar of Companies before due dates to avoid hefty additional fees. We also handle share transfers, amendments to MoA/AoA, and statutory registers.",
    icon: "Scale",
    whatsappPrefill: "Hi, I need help with ROC Compliance filings.",
  },
];
