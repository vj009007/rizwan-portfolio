export type PricingPlan = {
  name: string;
  price: number;
  period: string;
  features: string[];
};

/**
 * Placeholder starter numbers — edit these once real freelance rates are decided.
 */
export const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: 25,
    period: "Project",
    features: [
      "1 page design-to-code conversion",
      "2 days delivery time",
      "2 rounds of revisions",
      "Responsive design",
      "Source code included",
    ],
  },
  {
    name: "Standard",
    price: 50,
    period: "Project",
    features: [
      "Up to 5 pages",
      "5 days delivery time",
      "4 rounds of revisions",
      "Responsive design",
      "Basic WordPress/ACF setup",
    ],
  },
  {
    name: "Premium",
    price: 150,
    period: "Project",
    features: [
      "Full site build (up to 10 pages)",
      "10 days delivery time",
      "Unlimited revisions",
      "WordPress/ACF or Next.js build",
      "Source code + brief documentation",
    ],
  },
  {
    name: "Deluxe",
    price: 600,
    period: "Month",
    features: [
      "Ongoing front-end support",
      "Priority turnaround",
      "React/Next.js/Angular development",
      "Regular UI polish & bug fixes",
      "Cancel anytime",
    ],
  },
];
