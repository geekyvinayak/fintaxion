export interface Stat {
  value: number;
  label: string;
  suffix: string;
}

export const stats = {
  itrsFiled: {
    value: 1000,
    label: "ITRs Filed",
    suffix: "+",
  },
  businessesServed: {
    value: 200,
    label: "Businesses Served",
    suffix: "+",
  },
  yearsExperience: {
    value: 8,
    label: "Years of Experience",
    suffix: "+",
  },
  gstReturnsFiled: {
    value: 5000,
    label: "GST Returns Filed",
    suffix: "+",
  },
} satisfies Record<string, Stat>;

/** Ordered array for rendering the trust strip */
export const statsList: Stat[] = [
  stats.itrsFiled,
  stats.businessesServed,
  stats.yearsExperience,
  stats.gstReturnsFiled,
];
