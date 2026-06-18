export interface ServiceProcess {
  step: string;
  title: string;
  body: string;
}

export interface ServiceFaqItem {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  title: string;
  oneLiner: string;
  description: string;
  /** Exact lucide-react component name */
  icon: string;
  /** Plain-text WhatsApp prefill message (unencoded) */
  whatsappPrefill: string;
  // ─── Detail page fields ───────────────────────────────────────────────
  metaTitle: string;
  metaDescription: string;
  hero: { headline: string; subtext: string };
  whoNeedsThis: string[];
  whatsIncluded: string[];
  documentsRequired: string[];
  process: ServiceProcess[];
  pricing: { from: number; note: string };
  timeline: string;
  faq: ServiceFaqItem[];
  relatedSlugs: string[];
  keywords: string[];
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
    metaTitle: "ITR Filing AY 2026–27 | CA in Delhi | Fintaxion",
    metaDescription:
      "File your income tax return for AY 2026–27 (FY 2025–26) with a licensed CA in Delhi. ITR-1 to ITR-6, all income sources covered. Flat fee, zero surprises.",
    hero: {
      headline: "File your ITR before 31 July — stress-free.",
      subtext:
        "Our Professionals handle ITR-1 through ITR-6 for salaried individuals, freelancers, and businesses. One fixed fee, acknowledgement delivered to your inbox.",
    },
    whoNeedsThis: [
      "Salaried employees receiving Form 16",
      "Freelancers, consultants, and gig workers",
      "Business owners and self-employed professionals",
      "NRIs with income from India",
      "Investors with capital gains from stocks, MFs, or property",
    ],
    whatsIncluded: [
      "CA-reviewed ITR preparation (ITR-1 to ITR-6)",
      "Form 16 & AIS / TIS reconciliation",
      "Deduction optimisation — 80C, 80D, HRA, LTA, NPS, and more",
      "E-filing on the Income Tax portal",
      "ITR-V acknowledgement PDF delivered within 24 hours of filing",
      "Basic response to defective-return notices (if any)",
    ],
    documentsRequired: [
      "PAN card",
      "Aadhaar card",
      "Form 16 from all employers",
      "Bank account statements (all accounts) for FY 2025–26",
      "Investment proofs — LIC, PPF, ELSS, NSC, etc.",
      "Home loan interest certificate (if applicable)",
      "Capital gains statement from broker / CAMS / KFintech (if applicable)",
      "Rental income details (if applicable)",
    ],
    process: [
      {
        step: "01",
        title: "Share your documents",
        body: "Send us your PAN, Form 16, and bank statements over WhatsApp or email. We'll confirm receipt within the hour.",
      },
      {
        step: "02",
        title: "CA reviews & prepares",
        body: "Our CA reconciles your Form 16 with AIS/TIS, identifies every eligible deduction, and prepares your ITR draft. You get a PDF to review before anything is filed.",
      },
      {
        step: "03",
        title: "E-file & acknowledgement",
        body: "Once you approve, we file on the Income Tax portal and share the ITR-V acknowledgement — typically within the same working day.",
      },
    ],
    pricing: {
      from: 499,
      note: "ITR-1 for salaried individuals. Price varies by ITR form and income complexity.",
    },
    timeline: "2–3 working days after documents received",
    faq: [
      {
        q: "What is the last date to file ITR for AY 2026–27?",
        a: "31 July 2025 is the deadline for non-audit cases. Filing after this date attracts a late fee of ₹1,000 (income ≤₹5L) or ₹5,000 (income >₹5L), plus interest on any tax due.",
      },
      {
        q: "Which ITR form do I need?",
        a: "ITR-1 for salaried income up to ₹50L with one house property and no capital gains. ITR-2 if you have capital gains, multiple properties, or foreign income. ITR-3/4 for business income. We pick the correct form automatically based on your income sources.",
      },
      {
        q: "I missed the July 31 deadline. Can I still file?",
        a: "Yes. A belated return can be filed by 31 December 2025 with a late fee. After that, you'll need to file a condonation-of-delay request with the Income Tax department.",
      },
      {
        q: "How long does it take to file my ITR?",
        a: "We complete most returns within 2–3 working days of receiving your documents. If your income situation is complex (e.g., foreign income, business income, multiple properties), it may take up to 5 working days.",
      },
      {
        q: "Do you handle income tax notices?",
        a: "Yes — any defective-return notice received within 30 days of filing is covered in our fee. Scrutiny notices, 143(1) notices, and other post-filing correspondence are handled at an additional flat fee.",
      },
    ],
    relatedSlugs: ["tds-returns", "gst-registration-returns"],
    keywords: [
      "ITR filing Delhi",
      "income tax return AY 2026-27",
      "CA for ITR filing",
      "file ITR online India",
      "ITR-1 ITR-2 filing",
    ],
  },
  {
    slug: "gst-registration-returns",
    title: "GST Registration & Returns",
    oneLiner: "Get GST-registered in 7–10 days and stay compliant every month.",
    description:
      "We handle GST registration from scratch and file GSTR-1 (due 11th), GSTR-3B (due 20th), and annual GSTR-9 on your behalf. Whether you're a trader, service provider, or e-commerce seller, we keep you reconciled and penalty-free.",
    icon: "Receipt",
    whatsappPrefill: "Hi, I need help with GST Registration or Returns.",
    metaTitle: "GST Registration & Returns | CA in Delhi | Fintaxion",
    metaDescription:
      "GST registration in 7–10 working days and monthly GSTR-1, GSTR-3B filings by a licensed CA in Delhi. Flat fee, no hidden charges, penalty-free compliance.",
    hero: {
      headline: "GST registration and returns — done by a CA, every month.",
      subtext:
        "We register your business for GST in 7–10 working days and handle GSTR-1 (11th), GSTR-3B (20th), and annual GSTR-9 so you never miss a deadline.",
    },
    whoNeedsThis: [
      "Businesses with annual turnover above ₹20L (₹10L for North-East states)",
      "E-commerce sellers (mandatory regardless of turnover)",
      "Service providers making interstate supplies",
      "Businesses receiving reverse-charge supplies",
      "Import/export businesses requiring IGST credits",
    ],
    whatsIncluded: [
      "GST registration on the GST portal (GSTIN within 7–10 days)",
      "Monthly GSTR-1 filing (11th of every month)",
      "Monthly GSTR-3B filing (20th of every month)",
      "ITC reconciliation — GSTR-2B vs. books",
      "Annual GSTR-9 / GSTR-9C filing",
      "Assistance with GST notices and show-cause notices",
    ],
    documentsRequired: [
      "PAN card of business / proprietor",
      "Aadhaar card of proprietor / director / partner",
      "Proof of principal place of business (electricity bill, rental agreement, or ownership deed)",
      "Cancelled cheque or bank statement",
      "Digital photograph (proprietor / directors)",
      "Constitution document — partnership deed, MOA/AOA (for companies/LLPs)",
      "Letter of authorisation for authorised signatory",
    ],
    process: [
      {
        step: "01",
        title: "Share documents & business details",
        body: "Send us your PAN, Aadhaar, address proof, and business details over WhatsApp or email. We confirm what's needed within the hour.",
      },
      {
        step: "02",
        title: "CA files registration application",
        body: "We prepare and file the REG-01 on the GST portal. A GSTIN is typically issued within 7–10 working days. We track the application and handle any queries from the GST officer.",
      },
      {
        step: "03",
        title: "Ongoing returns every month",
        body: "Once registered, we file your GSTR-1 by the 11th and GSTR-3B by the 20th every month. You just share your sales/purchase data and we handle the rest.",
      },
    ],
    pricing: {
      from: 999,
      note: "One-time GST registration. Monthly returns from ₹499/month depending on transaction volume.",
    },
    timeline: "Registration in 7–10 working days; returns filed 2–3 days before due date",
    faq: [
      {
        q: "Is GST registration mandatory for my business?",
        a: "Mandatory if your annual turnover exceeds ₹20L (₹10L for North-East and hill states), or if you sell on e-commerce platforms, make interstate supplies, or are liable for TDS/TCS under GST — regardless of turnover.",
      },
      {
        q: "What is GSTR-1 and when is it due?",
        a: "GSTR-1 is a statement of all outward supplies (sales) made in the previous month. It's due on the 11th of the following month for businesses with turnover above ₹5Cr, and quarterly for those under.",
      },
      {
        q: "Can I claim input tax credit (ITC)?",
        a: "Yes, ITC on purchases is available in GSTR-3B subject to conditions — supplier must have filed GSTR-1, goods/services used for business, and invoices must be uploaded correctly. We reconcile this every month.",
      },
      {
        q: "What happens if I miss the GST return deadline?",
        a: "A late fee of ₹50/day (nil return: ₹20/day) per return applies, capped at ₹5,000 plus 18% interest on unpaid tax. We file before due dates so this never happens.",
      },
      {
        q: "I already have GSTIN but haven't filed for months. Can you help?",
        a: "Yes — we handle catch-up filings for past periods, calculate the late fee, and bring your compliance up to date. WhatsApp us with your GSTIN and we'll assess the position.",
      },
    ],
    relatedSlugs: ["itr-filing", "tds-returns"],
    keywords: [
      "GST registration Delhi",
      "GST return filing CA",
      "GSTR-1 GSTR-3B filing",
      "GST registration online India",
      "monthly GST compliance",
    ],
  },
  {
    slug: "tds-returns",
    title: "TDS Returns",
    oneLiner: "Quarterly TDS filing with 26AS reconciliation, done right.",
    description:
      "We prepare and file Form 24Q, 26Q, and 27Q within statutory deadlines (31 Jul, 31 Oct, 31 Jan, 31 May) so you avoid the ₹200/day default fee. We also correct TDS mismatches and handle TRACES notices.",
    icon: "Percent",
    whatsappPrefill: "Hi, I need help with TDS Returns.",
    metaTitle: "TDS Return Filing | Form 24Q 26Q | CA Delhi | Fintaxion",
    metaDescription:
      "Quarterly TDS return filing — Form 24Q, 26Q, and 27Q — by a licensed CA in Delhi. 26AS reconciliation, TRACES corrections, and deadline management included.",
    hero: {
      headline: "Quarterly TDS returns filed before the due date — every quarter.",
      subtext:
        "We handle Form 24Q (salary), 26Q (non-salary), and 27Q (NRI payments) with complete 26AS reconciliation. ₹200/day default fee? Not on our watch.",
    },
    whoNeedsThis: [
      "Employers deducting TDS on employee salaries",
      "Businesses making payments to contractors, professionals, or landlords",
      "Companies deducting TDS on rent above ₹50,000/month",
      "Any person making payments to NRIs subject to TDS",
      "Businesses with TAN who need to file quarterly TDS returns",
    ],
    whatsIncluded: [
      "Preparation and filing of Form 24Q (salary TDS) — quarterly",
      "Preparation and filing of Form 26Q (non-salary TDS) — quarterly",
      "Form 27Q for payments to NRI deductees (if applicable)",
      "Challan validation and 26AS reconciliation",
      "Issuance guidance for Form 16 / 16A to deductees",
      "TRACES correction statements for prior-period errors",
    ],
    documentsRequired: [
      "TAN (Tax Deduction Account Number)",
      "PAN of all deductees (employees / contractors / vendors)",
      "Monthly salary details and payroll register (for 24Q)",
      "Payment details — amount, date, nature of payment (for 26Q)",
      "TDS challan / payment confirmation from bank",
      "Previous quarter's TDS return (for corrections, if applicable)",
    ],
    process: [
      {
        step: "01",
        title: "Share payroll & payment data",
        body: "Send us your payroll register or payment list, PAN details of deductees, and TDS challans for the quarter via WhatsApp or email.",
      },
      {
        step: "02",
        title: "CA prepares and validates the return",
        body: "We prepare the FVU-validated TDS return file, cross-check challan figures, and reconcile against Form 26AS to ensure zero mismatches before filing.",
      },
      {
        step: "03",
        title: "Filing & acknowledgement",
        body: "We file on TRACES/TIN-NSDL portal and share the filing acknowledgement. Form 16/16A issuance guidance is provided after the quarter is filed.",
      },
    ],
    pricing: {
      from: 799,
      note: "Per quarter, for up to 10 deductees. Additional deductees billed at a flat rate.",
    },
    timeline: "Filed 5–7 working days before the quarterly due date",
    faq: [
      {
        q: "What are the TDS return due dates?",
        a: "Q1 (Apr–Jun): 31 July | Q2 (Jul–Sep): 31 October | Q3 (Oct–Dec): 31 January | Q4 (Jan–Mar): 31 May. We track these and file at least a week before to allow corrections if needed.",
      },
      {
        q: "What is the penalty for late TDS return filing?",
        a: "₹200 per day of delay under Section 234E, capped at the total TDS amount. Additionally, there's a penalty of ₹10,000–₹1,00,000 under Section 271H for non-filing.",
      },
      {
        q: "What if the PAN of a deductee is incorrect?",
        a: "TDS is applied at 20% instead of the applicable rate for PAN-invalid deductees. We collect and validate all PANs before filing to prevent this.",
      },
      {
        q: "Do I need TAN to deduct TDS?",
        a: "Yes. Every person required to deduct TDS must first obtain a TAN from the Income Tax department. We can help you apply for TAN if you don't have one.",
      },
      {
        q: "What is a TDS mismatch and how is it corrected?",
        a: "A mismatch occurs when TDS deposited by the deductor doesn't reflect correctly in the deductee's Form 26AS. We file correction statements on TRACES to resolve these.",
      },
    ],
    relatedSlugs: ["itr-filing", "gst-registration-returns"],
    keywords: [
      "TDS return filing Delhi",
      "Form 24Q 26Q filing",
      "quarterly TDS returns CA",
      "TRACES filing India",
      "TDS compliance Delhi",
    ],
  },
  {
    slug: "msme-registration",
    title: "MSME Registration",
    oneLiner: "Udyam certificate issued within 1 working day.",
    description:
      "MSME (Udyam) registration unlocks priority lending, government scheme eligibility, and protection against delayed payments. We file the application on the Udyam portal and deliver your certificate with zero paperwork on your end.",
    icon: "Award",
    whatsappPrefill: "Hi, I need help with MSME / Udyam Registration.",
    metaTitle: "MSME / Udyam Registration | CA Delhi | Fintaxion",
    metaDescription:
      "Get your Udyam certificate in 1 working day. MSME registration unlocks priority lending, government schemes, and protection against delayed payments. Licensed CA in Delhi.",
    hero: {
      headline: "Udyam MSME registration — certificate in 1 working day.",
      subtext:
        "MSME registration unlocks priority lending, government scheme eligibility, and legal protection against delayed payments. We file on the Udyam portal and deliver your certificate — zero paperwork on your end.",
    },
    whoNeedsThis: [
      "Manufacturers and service providers with investment in plant/machinery ≤₹50Cr",
      "Small businesses seeking priority-sector bank loans at lower interest rates",
      "Businesses wanting to bid for government tenders reserved for MSMEs",
      "Exporters needing MSME certificate for schemes like MEIS or RoDTEP",
      "Startups wanting protection against delayed payments under MSME Act",
    ],
    whatsIncluded: [
      "Udyam registration on the official Udyam portal",
      "Udyam Registration Certificate (URC) delivered as PDF",
      "NIC code selection assistance for your business activity",
      "Guidance on MSME schemes — Credit Guarantee, CGTMSE, PSB loans",
      "Update or amendment support for existing Udyam registrations",
    ],
    documentsRequired: [
      "Aadhaar card of proprietor / managing director / designated partner",
      "PAN card of business / individual (for composition scheme: PAN is mandatory)",
      "GSTIN (if registered under GST)",
      "Bank account number (IFSC code)",
      "Details of main activity — manufacturing or services",
      "Investment in plant & machinery (or equipment for service sector)",
    ],
    process: [
      {
        step: "01",
        title: "Share Aadhaar & business details",
        body: "Send us your Aadhaar, PAN, GSTIN, and a brief description of your business activity and investment in plant & machinery.",
      },
      {
        step: "02",
        title: "CA files on the Udyam portal",
        body: "We file the Udyam registration application, select the correct NIC code for your activity, and enter the verified financial data.",
      },
      {
        step: "03",
        title: "Certificate delivered",
        body: "Your Udyam Registration Certificate (URC) with QR code is issued immediately or within 1 working day. We deliver it directly to your WhatsApp.",
      },
    ],
    pricing: {
      from: 499,
      note: "One-time registration fee. No government fee for Udyam registration.",
    },
    timeline: "1 working day after Aadhaar OTP verification",
    faq: [
      {
        q: "What is Udyam registration and is it the same as Udyog Aadhaar?",
        a: "Yes — Udyam registration replaced the older Udyog Aadhaar Memorandum (UAM) scheme in 2020. All existing UAM holders were required to re-register on the Udyam portal by March 2021. If you have an old UAM, we help you migrate.",
      },
      {
        q: "What are the investment limits for MSME classification?",
        a: "Micro: investment ≤₹1Cr and turnover ≤₹5Cr. Small: investment ≤₹10Cr and turnover ≤₹50Cr. Medium: investment ≤₹50Cr and turnover ≤₹250Cr. Both conditions must be met.",
      },
      {
        q: "Is Udyam registration mandatory?",
        a: "Not mandatory by law, but practically essential to access MSME loan schemes, tender preferences, subsidies, and the 45-day payment protection under the MSME Development Act.",
      },
      {
        q: "Can I register more than one business under Udyam?",
        a: "Each business entity (having a separate PAN) gets one Udyam number. A proprietor with multiple businesses under the same PAN gets one consolidated registration.",
      },
      {
        q: "How long is the Udyam certificate valid?",
        a: "It has no expiry date, but you must self-declare annually and update details if your investment or turnover crosses the MSME threshold.",
      },
    ],
    relatedSlugs: ["startup-registration", "roc-compliance"],
    keywords: [
      "MSME registration Delhi",
      "Udyam registration online",
      "Udyam certificate same day",
      "MSME certificate India",
      "small business registration Delhi",
    ],
  },
  {
    slug: "digital-signature",
    title: "Digital Signature Certificate",
    oneLiner: "Class 3 DSC issued in 1–2 days for ROC, GST, and tenders.",
    description:
      "A DSC is mandatory for MCA filings, GST e-verification, e-tendering, and EPFO. We arrange Class 3 DSCs (individual and organisation) from licensed CAs, with doorstep verification available across Delhi NCR.",
    icon: "PenLine",
    whatsappPrefill: "Hi, I need help getting a Digital Signature Certificate (DSC).",
    metaTitle: "Digital Signature Certificate (DSC) | Delhi | Fintaxion",
    metaDescription:
      "Class 3 DSC issued in 1–2 working days for MCA, GST, e-tendering, and EPFO filing. Doorstep verification available across Delhi NCR. Licensed CA assistance.",
    hero: {
      headline: "Class 3 Digital Signature Certificate — issued in 1–2 Hours",
      subtext:
        "A DSC is mandatory for MCA filings, GST e-verification, government tenders, and EPFO. We arrange Class 3 DSCs with doorstep verification across Delhi NCR.",
    },
    whoNeedsThis: [
      "Company directors filing forms on the MCA portal",
      "Partners and designated partners of LLPs",
      "GST taxpayers requiring e-signature for e-way bills or e-verification",
      "Contractors and suppliers bidding on government e-tenders (GeM, CPPP)",
      "Individuals and businesses filing EPFO/ESIC forms electronically",
    ],
    whatsIncluded: [
      "Class 3 DSC — individual or organisation (as needed)",
      "USB e-token (hardware device) for storing the certificate",
      "2-year validity from date of issue",
      "Driver installation and USB token setup assistance",
      "Doorstep verification across Delhi NCR (at no extra charge)",
      "Renewal reminder when your DSC is about to expire",
    ],
    documentsRequired: [
      "PAN card (original + self-attested copy)",
      "Aadhaar card (for video verification / Aadhaar-based eKYC)",
      "Recent passport-size photograph",
      "Proof of address (Aadhaar, passport, utility bill)",
      "Organisation documents for company DSC — Certificate of Incorporation, board resolution",
    ],
    process: [
      {
        step: "01",
        title: "Share your details",
        body: "Send us a copy of your PAN, Aadhaar, and photograph. Tell us the purpose — MCA, GST, tender, or EPFO — so we select the right certificate type.",
      },
      {
        step: "02",
        title: "Video / Aadhaar verification",
        body: "The Certifying Authority verifies your identity via a short video call (for Class 3 DSC) or Aadhaar OTP-based eKYC. We guide you through the entire process.",
      },
      {
        step: "03",
        title: "DSC issued & delivered",
        body: "Your DSC is loaded onto a USB e-token and delivered to you (or via doorstep visit across Delhi NCR). We also help you install the required drivers.",
      },
    ],
    pricing: {
      from: 1499,
      note: "Class 3 individual DSC with 2-year validity. Organisation DSC and renewal pricing available on request.",
    },
    timeline: "1–2 Hours after successful identity verification",
    faq: [
      {
        q: "What is a Digital Signature Certificate and why do I need one?",
        a: "A DSC is an electronic equivalent of a physical signature, issued by a government-licensed Certifying Authority (CA). It's mandatory for filing with MCA (ROC), e-tendering on GeM, GST e-verification, and EPFO/ESIC — wherever an authenticated electronic signature is required by law.",
      },
      {
        q: "What is the difference between Class 2 and Class 3 DSC?",
        a: "Class 2 DSC has been discontinued since 2021. Class 3 is now the only class available, and it covers all purposes — MCA, GST, e-tendering, income tax, and more.",
      },
      {
        q: "How long is a DSC valid?",
        a: "DSCs are issued with 1-year or 2-year validity. We issue 2-year DSCs by default and send you a renewal reminder a month before expiry.",
      },
      {
        q: "Can a DSC be used for multiple portals?",
        a: "Yes — one Class 3 DSC can be used across all portals that accept DSC-based authentication: MCA21, GST, EPFO, GeM, CPPP, e-procurement portals, and income tax.",
      },
      {
        q: "What if I lose my USB token?",
        a: "The e-token is hardware-protected and PIN-locked, so the DSC cannot be misused without the PIN. However, if the token is physically lost, you'll need a fresh DSC. We help you revoke the old one and issue a replacement.",
      },
    ],
    relatedSlugs: ["roc-compliance", "startup-registration"],
    keywords: [
      "digital signature certificate Delhi",
      "DSC for MCA filing",
      "Class 3 DSC India",
      "e-token DSC online",
      "DSC for GST filing",
    ],
  },
  {
    slug: "esi-pf-registration-returns",
    title: "ESI / PF Registration & Returns",
    oneLiner: "End-to-end EPFO and ESIC compliance for your workforce.",
    description:
      "We handle PF and ESI registration, monthly ECR filing, and employee grievance follow-ups with EPFO. Our team ensures your contribution challans are deposited by the 15th and returns filed without delays.",
    icon: "Users",
    whatsappPrefill: "Hi, I need help with ESI / PF Registration or Returns.",
    metaTitle: "ESI / PF Registration & Monthly Returns | Delhi | Fintaxion",
    metaDescription:
      "End-to-end EPFO and ESIC compliance — PF & ESI registration, monthly ECR filing, UAN activation, and challan payment by the 15th. Licensed CA in Delhi.",
    hero: {
      headline: "PF & ESI compliance — handled end-to-end, every month.",
      subtext:
        "We register your business with EPFO and ESIC, generate UANs, file monthly ECRs, and deposit contribution challans by the 15th — so you're never penalised for payroll compliance gaps.",
    },
    whoNeedsThis: [
      "Businesses with 20 or more employees (mandatory PF registration)",
      "Businesses with 10 or more employees and wages ≤₹21,000/month (mandatory ESI registration)",
      "Startups and growing teams crossing the EPFO/ESIC threshold",
      "Businesses receiving EPFO / ESIC notices or show-cause notices",
      "Employers wanting to voluntarily register for PF (below 20-employee threshold)",
    ],
    whatsIncluded: [
      "PF registration on the EPFO portal (PF establishment code)",
      "ESI registration on the ESIC portal (ESI code)",
      "UAN generation and activation for all employees",
      "Monthly ECR (Electronic Challan cum Return) preparation and filing",
      "PF/ESI contribution challan generation and payment by the 15th",
      "Annual PF return (Form 3A, 6A) filing",
      "EPFO grievance handling and joint declaration filing",
    ],
    documentsRequired: [
      "Business registration certificate (GST, Shop Act, or Certificate of Incorporation)",
      "PAN of the business entity",
      "Bank account details (for EPFO and ESIC)",
      "List of all employees — name, Aadhaar, PAN, date of joining, designation, salary",
      "Address proof of registered office",
      "Digital signature of authorised signatory (for EPFO)",
    ],
    process: [
      {
        step: "01",
        title: "Share business & employee data",
        body: "Provide your business registration, PAN, bank details, and employee list (name, Aadhaar, salary, date of joining). We'll confirm what's needed within the hour.",
      },
      {
        step: "02",
        title: "Registration & UAN setup",
        body: "We register your establishment with EPFO and ESIC, obtain your PF code and ESI code, and generate UANs for all existing employees. New joiners are added every month.",
      },
      {
        step: "03",
        title: "Monthly ECR filing & challan",
        body: "Every month, we prepare the ECR, calculate PF (12% employee + 12% employer) and ESI (0.75% + 3.25%) contributions, and file by the 15th. You pay the challan and we share the proof.",
      },
    ],
    pricing: {
      from: 999,
      note: "Per month, for up to 20 employees. Additional employees billed at a flat rate per head.",
    },
    timeline: "Registration in 3–5 working days; monthly ECR filed by the 15th",
    faq: [
      {
        q: "When must I register for PF and ESI?",
        a: "PF registration is mandatory once you have 20 or more employees. ESI is mandatory when you have 10 or more employees drawing wages ≤₹21,000/month. Once you cross the threshold, registration is required within 30 days.",
      },
      {
        q: "What is the PF contribution rate?",
        a: "Employee contributes 12% of basic + DA. Employer contributes 12% (8.33% goes to EPS — Employees' Pension Scheme — and 3.67% to EPF). Some admin charges also apply to the employer.",
      },
      {
        q: "What is the ESI contribution rate?",
        a: "Employee contributes 0.75% of gross wages. Employer contributes 3.25% of gross wages. Employees earning above ₹21,000/month are excluded from ESI coverage.",
      },
      {
        q: "What is UAN and why does every employee need one?",
        a: "Universal Account Number (UAN) is a 12-digit number assigned by EPFO to every contributing employee. It persists across employers and allows the employee to view their PF balance, transfer, and withdraw — online.",
      },
      {
        q: "What if I have pending PF/ESI dues from previous months?",
        a: "We calculate the outstanding dues including interest (12% per annum for PF) and damages, prepare a catch-up filing, and help you regularise the account. WhatsApp us with your PF code to assess the position.",
      },
    ],
    relatedSlugs: ["startup-registration", "tds-returns"],
    keywords: [
      "PF ESI registration Delhi",
      "EPFO ESIC compliance",
      "ECR filing CA",
      "PF return filing India",
      "ESI registration online",
    ],
  },
  {
    slug: "startup-registration",
    title: "Startup Registration",
    oneLiner: "Incorporate your company or LLP and get DPIIT recognition.",
    description:
      "We incorporate Private Limited companies, LLPs, and One Person Companies on the MCA portal, and apply for DPIIT Startup India recognition to unlock tax holidays under Section 80-IAC. Full post-incorporation compliance included.",
    icon: "Rocket",
    whatsappPrefill: "Hi, I need help with Startup or Company Registration.",
    metaTitle: "Startup & Company Registration | Delhi CA | Fintaxion",
    metaDescription:
      "Incorporate your Private Limited company, LLP, or OPC in Delhi with a licensed CA. DPIIT Startup India recognition and Section 80-IAC tax holiday guidance included.",
    hero: {
      headline: "Incorporate your startup — and get DPIIT recognition.",
      subtext:
        "We register Private Limited companies, LLPs, and One Person Companies on the MCA portal, and apply for DPIIT Startup India recognition so you qualify for the 3-year income tax holiday under Section 80-IAC.",
    },
    whoNeedsThis: [
      "Founders incorporating their first company or LLP",
      "Startups seeking limited liability protection for founders",
      "Businesses wanting DPIIT recognition for the 3-year tax holiday",
      "Freelancers converting their proprietorship to a Pvt Ltd or LLP",
      "Foreign investors and NRIs wanting an Indian entity for business",
    ],
    whatsIncluded: [
      "Name reservation on MCA (RUN / LLP-RUN)",
      "DIN (Director Identification Number) for all directors",
      "Class 3 DSC for all directors (as needed)",
      "SPICe+ incorporation form filing (Pvt Ltd / OPC) or FiLLiP (LLP)",
      "Certificate of Incorporation, PAN, and TAN from MCA",
      "Drafting of MoA & AoA (for Pvt Ltd) or LLP Agreement (for LLP)",
      "DPIIT Startup India application for eligible entities",
      "GST registration and bank account opening assistance",
    ],
    documentsRequired: [
      "PAN card of all proposed directors / partners",
      "Aadhaar card of all proposed directors / partners",
      "Proof of address of directors (passport, driving licence, or utility bill)",
      "Proof of registered office address (electricity bill + NOC from owner)",
      "Passport-size photographs of all directors / partners",
      "Bank details for company account (needed post-incorporation)",
      "Details of proposed business activity (for MoA / LLP Agreement drafting)",
    ],
    process: [
      {
        step: "01",
        title: "Choose structure & reserve name",
        body: "Tell us your business idea and preferred entity type. We recommend the right structure (Pvt Ltd vs LLP vs OPC), suggest name options, and reserve the name on MCA within 1–2 days.",
      },
      {
        step: "02",
        title: "File incorporation documents",
        body: "We draft MoA, AoA (or LLP Agreement), prepare SPICe+/FiLLiP, and file with the Registrar of Companies. DIN, DSC, and e-signature of directors sorted by us.",
      },
      {
        step: "03",
        title: "Certificate & post-incorporation setup",
        body: "Once the ROC issues your Certificate of Incorporation, we apply for PAN, TAN, GST, DPIIT recognition, and help you open your first business bank account.",
      },
    ],
    pricing: {
      from: 4999,
      note: "LLP incorporation. Private Limited Company from ₹5,999. Includes government fees up to ₹10L authorised capital.",
    },
    timeline: "7–10 working days for Certificate of Incorporation",
    faq: [
      {
        q: "Which is better — Pvt Ltd, LLP, or OPC?",
        a: "Private Limited is preferred for startups seeking external funding (VCs require it). LLP suits professional services and partnerships with flexible profit-sharing. OPC is for single-founder businesses not looking for external investment. We help you decide based on your goals.",
      },
      {
        q: "What is DPIIT Startup India recognition and how do I qualify?",
        a: "DPIIT recognition is a government certificate for eligible startups (incorporated ≤10 years, turnover ≤₹100Cr, working on innovation). It unlocks a 3-year income tax holiday under Section 80-IAC, self-certification under labour & environment laws, and easier public procurement.",
      },
      {
        q: "How many directors do I need for a Private Limited company?",
        a: "A minimum of 2 directors (and 2 shareholders) are required. A maximum of 15 directors is allowed. At least one director must be a resident of India.",
      },
      {
        q: "What is the minimum paid-up capital for a Pvt Ltd company?",
        a: "There is no minimum paid-up capital requirement for a Private Limited company in India. Even ₹10,000 is legally sufficient to incorporate.",
      },
      {
        q: "Do I need a physical office address to register a company?",
        a: "Yes — a registered office address in India is mandatory. It can be a residential address. You need the owner's NOC and an address proof (electricity bill). We help you sort this documentation.",
      },
    ],
    relatedSlugs: ["roc-compliance", "msme-registration"],
    keywords: [
      "startup registration Delhi",
      "company incorporation India",
      "DPIIT Startup India recognition",
      "Private Limited company registration",
      "LLP registration Delhi CA",
    ],
  },
  {
    slug: "roc-compliance",
    title: "ROC Compliance",
    oneLiner: "Annual filings, director changes, and charge registration — on time.",
    description:
      "We file AOC-4, MGT-7, DIR-3 KYC, and all event-based forms with the Registrar of Companies before due dates to avoid hefty additional fees. We also handle share transfers, amendments to MoA/AoA, and statutory registers.",
    icon: "Scale",
    whatsappPrefill: "Hi, I need help with ROC Compliance filings.",
    metaTitle: "ROC Compliance | Annual Filings MCA | CA Delhi | Fintaxion",
    metaDescription:
      "ROC annual compliance — AOC-4, MGT-7, DIR-3 KYC — filed on time by a licensed CA in Delhi. Avoid MCA additional fees. Event-based forms and share transfers included.",
    hero: {
      headline: "ROC compliance — every form filed before the due date.",
      subtext:
        "We file AOC-4, MGT-7, DIR-3 KYC, and all event-based MCA forms before due dates so you never face the compounding additional-fee regime. Statutory registers maintained and share transfers handled.",
    },
    whoNeedsThis: [
      "All Private Limited companies registered under the Companies Act 2013",
      "LLPs (Limited Liability Partnerships) with annual compliance obligations",
      "Companies with director changes, share transfers, or charge creation",
      "Companies that have missed past filings and face additional fees",
      "Foreign subsidiaries and branch offices registered with MCA",
    ],
    whatsIncluded: [
      "AOC-4 filing — financial statements with the ROC (annual)",
      "MGT-7 filing — annual return with shareholding details (annual)",
      "DIR-3 KYC — director KYC renewal (annual, before 30 September)",
      "DIR-12 — intimation of director appointment / resignation",
      "SH-7 — increase in authorised share capital",
      "CHG-1 / CHG-9 — charge creation or modification (for loans)",
      "Maintenance guidance for statutory registers — MGT-1, MGT-2, SH-1, etc.",
    ],
    documentsRequired: [
      "Certificate of Incorporation and PAN of company",
      "Audited financial statements for the relevant financial year",
      "Board resolutions for the actions taken during the year",
      "Current shareholding pattern (for MGT-7)",
      "Director details — DIN, PAN, and contact details",
      "Details of any charges created or modified (if applicable)",
      "Share transfer deed and stamp duty receipt (for share transfers)",
    ],
    process: [
      {
        step: "01",
        title: "Share CIN & financial statements",
        body: "Provide your Company Identification Number (CIN), audited financials, and list of events during the year — director changes, share allotments, charges, etc.",
      },
      {
        step: "02",
        title: "CA prepares and reviews all filings",
        body: "We prepare AOC-4, MGT-7, and all event-based forms, cross-check with MCA records, and share draft filings for your review before submission.",
      },
      {
        step: "03",
        title: "Filing with MCA & SRN delivery",
        body: "We file all forms on the MCA21 portal using DSC, pay applicable government fees, and share the SRN (Service Request Number) as proof of filing.",
      },
    ],
    pricing: {
      from: 2999,
      note: "Basic annual compliance (AOC-4 + MGT-7 + DIR-3 KYC). Event-based forms billed separately per form.",
    },
    timeline: "7–10 working days for annual filings; event-based forms within 2–3 working days",
    faq: [
      {
        q: "What is the due date for filing AOC-4 and MGT-7?",
        a: "AOC-4 (financial statements) is due within 30 days of the AGM. MGT-7 (annual return) is due within 60 days of the AGM. The AGM must be held by 30 September every year, making the effective deadlines 30 October and 28 November respectively.",
      },
      {
        q: "What is the penalty for late ROC filing?",
        a: "MCA charges a progressive 'additional fee' for late filings — ₹100 per day for most forms, scaling up based on delay duration. This can quickly mount to lakhs for heavily delayed filings. There is no cap.",
      },
      {
        q: "Is DIR-3 KYC mandatory every year?",
        a: "Yes. Every director with a DIN must complete DIR-3 KYC by 30 September of every year. Non-compliance results in DIN deactivation, which prevents the director from signing any MCA forms.",
      },
      {
        q: "Can I file ROC returns even if I have no business activity?",
        a: "Yes — even dormant companies must file AOC-4 and MGT-7 annually. The only exemption is a company formally declared 'dormant' under Section 455 of the Companies Act, which requires a separate application.",
      },
      {
        q: "My company missed filings for multiple years. Can you help?",
        a: "Yes — we assess the total additional fee liability, file under the CFSS (Condonation of Delay Scheme) if applicable, and bring your MCA records up to date. WhatsApp us with your CIN and we'll give you a clear picture.",
      },
    ],
    relatedSlugs: ["startup-registration", "digital-signature"],
    keywords: [
      "ROC compliance Delhi",
      "AOC-4 MGT-7 filing",
      "annual return MCA CA",
      "director KYC DIR-3",
      "company compliance India",
    ],
  },
];
