export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "Are you available for freelance work while employed full-time?",
    answer:
      "Yes. I work full-time as a UI/UX Developer, and take on a limited number of freelance or contract projects alongside that — typically design-to-code conversions, WordPress/ACF builds, or short-term front-end support.",
  },
  {
    question: "What's your typical process for a design-to-code project?",
    answer:
      "I start from your Figma, PSD, or XD file, confirm breakpoints and interaction details with you, then build it out in HTML/React/Next.js (or WordPress + ACF for CMS-driven sites), checking responsiveness and cross-browser behavior before handoff.",
  },
  {
    question: "Do you work with WordPress and Advanced Custom Fields?",
    answer:
      "Yes — I've built and maintained several WordPress sites using ACF for flexible, client-editable content, including corporate and hospitality sites.",
  },
  {
    question: "How do we get started on a project?",
    answer:
      "Send a message through the contact form with a short brief of what you need — I'll reply with questions, a rough timeline, and next steps.",
  },
];
