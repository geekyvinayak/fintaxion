export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    id: "itr-deadline-ay2026-27",
    question: "What is the last date to file ITR for AY 2026–27?",
    answer:
      "For AY 2026–27 (FY 2025–26), the due date for salaried individuals and non-audit cases is 31 July 2026. Businesses requiring a tax audit have until 31 October 2026, and those requiring transfer pricing reports have until 30 November 2026. Filing after the deadline attracts a late fee of up to ₹5,000 under Section 234F, so we recommend starting the process in June itself.",
  },
  {
    id: "itr-documents",
    question: "What documents do I need to file my ITR?",
    answer:
      "For salaried individuals: Form 16 (from employer), bank statements for all accounts, interest certificates from banks/NBFCs, Form 26AS and AIS from the income tax portal, investment proofs (Section 80C/80D), and details of any capital gains from stocks or mutual funds. For business owners, we additionally need audited financials or books of accounts, GST returns, and TDS certificates. You can WhatsApp us your documents — we handle the rest.",
  },
  {
    id: "fee-structure",
    question: "How much do you charge for your services?",
    answer:
      "Our fees are transparent and service-specific. ITR filing for salaried individuals starts at ₹499 for simple returns and goes up based on complexity (capital gains, multiple employers, foreign income). GST registration is a one-time fee and monthly return filing has a fixed monthly retainer. We share a clear quote before starting any work — no hidden charges. WhatsApp us with your requirement for an instant quote.", // [TODO: client to confirm pricing tiers]
  },
  {
    id: "response-time",
    question: "How quickly will you respond after I reach out?",
    answer:
      "We typically reply on WhatsApp within 30 minutes during business hours (9 AM – 7 PM, Monday to Saturday). For urgent matters — such as notices or same-day filing requests — you can call either of our partners directly. Most standard filings (ITR, GST returns) are completed within 24–48 hours of receiving all documents.",
  },
  {
    id: "refund-handling",
    question: "What if I'm eligible for a tax refund?",
    answer:
      "If you're eligible for a refund, we calculate the exact amount during ITR preparation and file your return with the correct bank details for seamless credit. Refunds for electronically verified returns are typically processed by the Income Tax Department within 20–45 days. We also track your refund status and follow up with the department if there's an unusual delay.",
  },
  {
    id: "gst-registration-time",
    question: "How long does GST registration take?",
    answer:
      "After submitting all documents, GST registration is typically completed in 7–10 working days on the GST portal. If your application is processed without a query (REG-03), it can be as fast as 3–5 days. We monitor the application status daily and respond to any department queries on your behalf to avoid delays.",
  },
  {
    id: "who-needs-dsc",
    question: "Who needs a Digital Signature Certificate (DSC)?",
    answer:
      "A Class 3 DSC is mandatory for directors and partners filing forms on the MCA (ROC) portal, GST practitioners filing GST returns electronically, and companies participating in government e-tenders. It is also required for income tax filings when turnover exceeds ₹5 crore. Individuals filing personal ITRs generally do not need a DSC — Aadhaar OTP-based e-verification is sufficient.",
  },
  {
    id: "msme-udyam",
    question: "What is MSME Udyam registration and who should get it?",
    answer:
      "Udyam Registration (formerly Udyog Aadhaar) is a government certificate that officially classifies your business as a Micro, Small, or Medium Enterprise based on investment and turnover. Micro enterprises have investment under ₹1 crore and turnover under ₹5 crore; Small under ₹10 crore and ₹50 crore; Medium under ₹50 crore and ₹250 crore. Registered MSMEs benefit from priority bank lending, lower interest rates, protection against delayed payments under the MSMED Act, and eligibility for government schemes. Any business owner — sole proprietor, partnership, LLP, or company — can apply.",
  },
  {
    id: "late-filing-penalty",
    question: "What is the penalty for filing ITR or GST returns late?",
    answer:
      "For ITR: under Section 234F, the late filing fee is ₹1,000 if total income is up to ₹5 lakh, and ₹5,000 for income above ₹5 lakh. Interest at 1% per month under Section 234A also applies on any outstanding tax. For GST: late fees are ₹200 per day (₹100 CGST + ₹100 SGST), capped at 0.25% of annual turnover for GSTR-3B, with nil returns attracting a maximum of ₹500. Acting early with us avoids all of this.",
  },
  {
    id: "online-vs-offline",
    question: "Can I file my returns without visiting your office?",
    answer:
      "Absolutely — 100% of our work happens online. You share documents via WhatsApp or Google Drive, we prepare everything, share a draft for your review, and file only after your approval. E-verification is done via Aadhaar OTP or net banking in seconds. You never need to visit either of our offices unless you prefer an in-person consultation, which we're happy to arrange at our South Delhi or Okhla location.",
  },
];
