// [TODO: client to confirm — replace with real quotes, names, and photos before launch]

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  /** Path under /images/testimonials/ — use /images/testimonials/placeholder.jpg until real photos are provided */
  photo: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "rahul-sharma",
    name: "Rahul Sharma",
    role: "Senior Software Engineer",
    company: "Infosys, Gurugram",
    quote:
      "Filed my ITR with capital gains from stocks for the first time — Hemant explained everything clearly and the entire process was done on WhatsApp in less than a day. Got my ₹28,000 refund within three weeks.",
    photo: "/images/testimonials/placeholder.jpg",
  },
  {
    id: "priya-mehta",
    name: "Priya Mehta",
    role: "Founder",
    company: "Artisans Collective, Lajpat Nagar",
    quote:
      "Getting GST registration felt overwhelming until I reached out to Fintaxion. Vijay handled everything — from documentation to following up with the portal — and we were registered in 6 working days.",
    photo: "/images/testimonials/placeholder.jpg",
  },
  {
    id: "amit-gupta",
    name: "Amit Gupta",
    role: "Proprietor",
    company: "Gupta Traders, Okhla",
    quote:
      "I had three years of pending GST returns and was worried about penalties. The team reconciled everything, filed on time, and even helped reduce my late fee liability. Highly professional.",
    photo: "/images/testimonials/placeholder.jpg",
  },
  {
    id: "sneha-agarwal",
    name: "Sneha Agarwal",
    role: "Co-Founder",
    company: "NutriBox Foods Pvt. Ltd.",
    quote:
      "Fintaxion handled our entire company incorporation, DPIIT startup recognition, and first-year ROC compliance. It felt like having an in-house CA team without the cost.",
    photo: "/images/testimonials/placeholder.jpg",
  },
  {
    id: "mohammad-irfan",
    name: "Mohammad Irfan",
    role: "Contractor",
    company: "Self-employed, South Delhi",
    quote:
      "I was filing ITRs myself for years and always worried I was missing deductions. Switched to Fintaxion last year and they found exemptions I had no idea about. Will not go back to self-filing.",
    photo: "/images/testimonials/placeholder.jpg",
  },
  {
    id: "kavitha-nair",
    name: "Kavitha Nair",
    role: "HR Manager",
    company: "Meridian Exports, Okhla Phase I",
    quote:
      "Our company needed PF and ESI registration urgently for a new batch of employees. Hemant fast-tracked it and also trained our HR team on monthly compliance. Prompt and thorough.",
    photo: "/images/testimonials/placeholder.jpg",
  },
];
