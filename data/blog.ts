export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "figma-to-responsive-html",
    title: "Turning a Figma File into Truly Responsive HTML",
    date: "2026-02-10",
    excerpt:
      "A few habits that make design-to-code handoffs go smoothly, beyond just matching pixels at one breakpoint.",
    content: [
      "Most design files show one or two breakpoints, but a real browser window can be any width in between. Before writing a line of markup, I look at how each section's content should reflow — not just how the desktop and mobile frames happen to look.",
      "I build mobile-first with Tailwind's responsive utilities, checking the layout at common in-between widths (768px, 1024px) rather than jumping straight from a phone frame to a desktop frame.",
      "Finally, I treat spacing and type scale as systems, not one-off values per section — so the site holds together even where the design file didn't specify an exact breakpoint.",
    ],
  },
  {
    slug: "wordpress-acf-content-that-lasts",
    title: "Structuring WordPress + ACF So Clients Don't Break the Layout",
    date: "2026-01-18",
    excerpt:
      "Advanced Custom Fields is powerful, but loose field groups are how a client's edit turns into a broken homepage.",
    content: [
      "The biggest risk with ACF-driven pages isn't the code — it's giving an editor a rich text field where a structured repeater field belongs. If a layout depends on exactly three cards, model it as a repeater with a sensible max, not a free-form area.",
      "I keep field group names and template partials 1:1, so six months later it's obvious which ACF group renders which section of the page.",
      "A short internal note (even just field descriptions in ACF itself) on what each field is for saves far more time than it costs to write.",
    ],
  },
];
