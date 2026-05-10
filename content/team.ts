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
    credentials: "B.Com, CA Final",
    bio: "Hemant brings 8+ years of experience in direct taxation, ROC compliance, and startup advisory. He has helped 100+ Delhi NCR businesses structure their filings and stay ahead of regulatory changes.",
    phone: "+91-8178363761",
    phoneDisplay: "+91 81783 63761",
    whatsappUrl: "https://wa.me/918178363761",
    photo: "/images/team/hemant.jpg",
  },
  {
    slug: "vijay-pal",
    name: "Vijay Pal",
    role: "Designated Partner",
    credentials: "B.Com, CA Final",
    bio: "Vijay specialises in GST, indirect taxation, and MSME advisory. His hands-on approach to GST reconciliation and audit support has saved clients from penalties worth lakhs of rupees.",
    phone: "+91-7042067976",
    phoneDisplay: "+91 70420 67976",
    whatsappUrl: "https://wa.me/917042067976",
    photo: "/images/team/vijay.jpg",
  },
];
