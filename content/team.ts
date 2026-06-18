export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  /** Short credential line shown under name */
  credentials: string;
  bio: string;
  phone: string;
  /** Formatted for display */
  phoneDisplay: string;
  whatsappUrl: string;
  photo: string;
}

export const team: TeamMember[] = [
  {
    slug: "hemant-singh",
    name: "Hemant Singh",
    role: "Designated Partner",
    credentials: "Pusuing CA & LLB, B.com",
    bio: "Hemant brings 8+ years of experience in GST, ROC compliance, indirect taxation, and startup advisory. He has assisted 100+ businesses across Delhi NCR in managing regulatory compliances, tax filings, and business structuring. With extensive hands-on experience in handling departmental matters and representing clients in indirect tax cases, Hemant helps businesses navigate complex tax regulations while staying compliant with evolving laws.",
    phone: "+91-8178363761",
    phoneDisplay: "+91 81783 63761",
    whatsappUrl: "https://wa.me/918178363761",
    photo: "/images/team/hemant.jpg",
  },
  {
    slug: "vijay-pal",
    name: "CMA Vijay Pal",
    role: "Designated Partner",
    credentials: "CMA Qualified, B.com",
    bio: "Vijay specialises in Direct Taxation, Audit & Assurance, and MSME Advisory. With extensive experience in income tax compliance, tax planning, financial reporting, and audit support, he helps businesses maintain strong financial controls while ensuring regulatory compliance. His practical approach to tax advisory and audit management enables clients to identify risks, improve operational efficiency, and make informed business decisions with confidence.",
    phone: "+91-8796987976",
    phoneDisplay: "+91 8796987976",
    whatsappUrl: "https://wa.me/918796987976",
    photo: "/images/team/vijay.jpg",
  },
];
