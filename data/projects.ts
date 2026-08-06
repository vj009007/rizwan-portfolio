export type Project = {
  slug: string;
  title: string;
  /** Short line shown on cards */
  tagline: string;
  category: string;
  role: string;
  /** Short intro shown at the top of the detail page */
  summary: string;
  /** Longer body paragraph(s) for the detail page */
  overview: string;
  /** "Why this project" style bullets */
  highlights: string[];
  /** Technical/feature bullets */
  features: string[];
  tech: string[];
  /**
   * Real screenshot, added later. Until then ProjectThumb renders a clean
   * placeholder derived from the title/category instead of a borrowed stock photo.
   */
  image?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "snowdome",
    title: "SnowDome",
    tagline: "PSD to HubSpot website build",
    category: "HubSpot",
    role: "Front-end Developer",
    summary:
      "The official SnowDome website, rebuilt from PSD designs into a fully responsive, animated HubSpot CMS site.",
    overview:
      "SnowDome needed its marketing site rebuilt from a set of static PSD design files into a live, editable HubSpot build. I took the approved designs and hand-coded them into semantic HTML, CSS, and JavaScript, matching every section pixel-for-pixel while making sure the layout held up cleanly across breakpoints. Beyond the base build, I added a layer of scroll-triggered animation and interactive detail work — subtle hover states, reveal effects, and transitions — so the finished site felt considerably more alive than the flat design files it started from, without adding load-time bloat.",
    highlights: [
      "Pixel-accurate conversion from static PSD designs to a live, editable HubSpot site.",
      "Custom scroll animations and micro-interactions layered on top of the base build.",
      "Fully responsive across mobile, tablet, and desktop breakpoints.",
    ],
    features: [
      "Hand-coded HTML, CSS, and vanilla JavaScript — no page-builder bloat.",
      "HubSpot CMS modules for marketing-team-editable content.",
      "Cross-browser tested for consistent rendering.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "HubSpot"],
    image: "/images/projects/snowdome.jpg",
  },
  {
    slug: "centrical",
    title: "Centrical",
    tagline: "Corporate website on WordPress + ACF",
    category: "WordPress",
    role: "Front-end Developer",
    summary:
      "Front-end contribution to Centrical's corporate marketing site — a performance intelligence platform used by frontline workforce teams.",
    overview:
      "Centrical is an enterprise performance-intelligence platform, and its marketing site needed to read as credible and enterprise-grade while staying easy for the marketing team to update on their own. I worked on the WordPress front end, building page templates and content blocks around Advanced Custom Fields so non-technical editors could rearrange sections, swap copy, and publish new pages without a developer in the loop. Performance and SEO were a running concern throughout — enterprise buyers research vendors extensively before ever talking to sales, so page speed and clean markup mattered as much as visual polish.",
    highlights: [
      "Enterprise-grade marketing site for a frontline performance-intelligence SaaS platform.",
      "Fully editable via WordPress + ACF, with no developer needed for routine content changes.",
      "Built with SEO and page-speed as first-class requirements, not an afterthought.",
    ],
    features: [
      "WordPress + Advanced Custom Fields (ACF) content architecture.",
      "Reusable, editor-friendly page-building blocks.",
      "Responsive layout across all breakpoints.",
      "Performance and SEO best practices applied throughout.",
    ],
    tech: ["WordPress", "ACF", "HTML", "CSS"],
    image: "/images/projects/centrical.jpg",
    liveUrl: "https://centrical.com",
  },
  {
    slug: "btc-car-rental-program",
    title: "BTC Car Rental Program",
    tagline: "Figma to React.js booking platform",
    category: "React",
    role: "UI Developer",
    summary:
      "A car rental booking platform, built in React.js from Figma designs, with a full booking and reservation flow.",
    overview:
      "This project took a Figma design system for a car rental service and turned it into a working React.js application. Beyond the standard marketing pages, the core of the work was the booking flow itself — vehicle selection, date/location pickers, and a reservation summary step — which needed to feel instant and trustworthy, since this is where users commit to spending money. I broke the design into a reusable component library first, then wired up the booking state so the flow could handle edge cases (unavailable dates, location mismatches) gracefully instead of just failing silently.",
    highlights: [
      "Full booking and reservation flow, not just static marketing pages.",
      "Componentized in React.js for reuse across the rental listing and checkout screens.",
      "Built directly from Figma design specs for pixel-accurate implementation.",
    ],
    features: [
      "React.js component architecture with reusable UI primitives.",
      "Date and location-based availability logic in the booking flow.",
      "Responsive design tested across devices.",
      "Clear, guided navigation from search to confirmation.",
    ],
    tech: ["React.js", "Figma to HTML", "JavaScript"],
    image: "/images/projects/btc-car-rental.jpg",
  },
  {
    slug: "crediblock",
    title: "CrediBlock",
    tagline: "NFT project UI in Next.js + Tailwind",
    category: "Next.js",
    role: "UI Developer",
    summary:
      "The user interface for CrediBlock, an NFT project, built with Tailwind CSS in Next.js.",
    overview:
      "CrediBlock needed a front end that could keep up with the visual expectations of the NFT/Web3 space — bold, animated, and a little unconventional — while still being fast and responsive on mobile, which is where a large share of crypto-native traffic comes from. I built the UI in Next.js with Tailwind CSS, focusing on getting the layout system right early (grid-based NFT galleries, mint/connect-wallet call-to-actions, and stat displays) so new sections could be added quickly as the project evolved. Performance mattered more than usual here too, since animated, image-heavy NFT sites are notorious for shipping bloated, slow pages.",
    highlights: [
      "Built for the visual expectations of an NFT/Web3 audience without sacrificing performance.",
      "Next.js + Tailwind CSS for a fast, maintainable component system.",
      "Mobile-first, since a large share of Web3 traffic is mobile.",
    ],
    features: [
      "Next.js App architecture for fast page loads.",
      "Tailwind CSS utility-first styling for rapid iteration.",
      "Responsive NFT gallery and stat display components.",
      "Optimized asset loading for an image-heavy interface.",
    ],
    tech: ["Next.js", "Tailwind CSS", "React.js"],
    image: "/images/projects/crediblock.jpg",
  },
  {
    slug: "shorebirds-hotels",
    title: "Shorebirds Hotels",
    tagline: "InDesign to WordPress ACF booking site",
    category: "WordPress",
    role: "Front-end Developer",
    summary:
      "The Shorebirds Hotels booking website, converted from InDesign designs into a WordPress + ACF build with a full booking-inquiry flow.",
    overview:
      "This project started as a set of InDesign design files for the Shorebirds Hotels website — room galleries, amenity pages, and a booking-inquiry section — and needed to become a real, content-manageable WordPress site. I built out the templates with Advanced Custom Fields so hotel staff could update room descriptions, pricing, and photos themselves once the site launched, without needing to touch a single line of code. Navigation and information architecture were a particular focus, since hotel sites live or die on how quickly a visitor can get from browsing to ready to book.",
    highlights: [
      "Converted static InDesign design files into a fully content-manageable WordPress site.",
      "Room galleries and amenity pages structured for easy staff updates via ACF.",
      "Navigation designed around getting visitors to the booking inquiry quickly.",
    ],
    features: [
      "WordPress + ACF for room, amenity, and pricing content.",
      "Responsive photo galleries for each room type.",
      "Clear, booking-focused navigation and calls-to-action.",
      "Cross-device tested booking-inquiry flow.",
    ],
    tech: ["WordPress", "ACF", "HTML", "CSS"],
    image: "/images/projects/shorebirdshotels.jpg",
  },
  {
    slug: "burwell-nebout",
    title: "Burwell Nebout Trial Lawyers",
    tagline: "WordPress site for a Texas personal injury law firm",
    category: "WordPress",
    role: "Front-end Developer",
    summary:
      "A content-managed WordPress site for Burwell Nebout Trial Lawyers, a Texas personal injury firm serving Houston, Galveston, Clear Lake, and League City.",
    overview:
      "Law firm sites have a specific job: build trust fast, and get a visitor from \"I was just in an accident\" to \"I called someone\" in as few steps as possible. I built out the practice-area pages (wrongful death, car accidents, truck accidents, motorcycle accidents, and more), attorney profile pages, and location pages on WordPress, with Advanced Custom Fields structuring the content so the firm can add new practice areas, update attorney bios, or publish case results without needing a developer involved. Clear calls-to-action and fast load times were the priority throughout, since a slow or confusing page is a lost lead in this space.",
    highlights: [
      "Multiple practice-area, attorney, and location pages, all content-manageable via ACF.",
      "Built around a clear, lead-generation-focused user journey.",
      "Fast-loading, mobile-friendly pages for visitors searching right after an incident.",
    ],
    features: [
      "WordPress + Advanced Custom Fields (ACF) content structure.",
      "Practice-area and attorney profile templates.",
      "Location pages for each office (Houston, Galveston, Clear Lake, League City).",
      "Conversion-focused calls-to-action throughout.",
    ],
    tech: ["WordPress", "ACF", "HTML", "CSS", "JavaScript"],
    image: "/images/projects/burwellnebout.jpg",
    liveUrl: "https://burwellnebout.com",
  },
  {
    slug: "developher",
    title: "DevelopHer",
    tagline: "Career growth platform for women in tech",
    category: "WordPress",
    role: "Front-end Developer",
    summary:
      "DevelopHer's career playbook and platform, helping women future-proof their careers — built on WordPress with custom templates for course and member content.",
    overview:
      "DevelopHer's platform combines marketing content with gated course material, which meant the front end had to serve two different audiences well: visitors evaluating the program, and paying members working through the content. I built responsive page templates for both, translating Figma and PSD designs into pixel-accurate, cross-browser-compatible markup, and worked with the content team to structure course and resource pages in WordPress so new material could be added without re-building templates each time. A lot of the detail work went into making the marketing pages feel personal and credible — this is a career program built around one person's story and expertise, and the design needed to carry that through.",
    highlights: [
      "Serves two audiences from one platform: prospective members and paying members.",
      "Course and resource content structured for easy ongoing updates.",
      "Pixel-accurate implementation from Figma/PSD design files.",
    ],
    features: [
      "WordPress + ACF for course and resource content management.",
      "Responsive marketing and member-content page templates.",
      "Cross-browser-tested, pixel-accurate markup.",
      "Content structure built for frequent updates without re-development.",
    ],
    tech: ["WordPress", "ACF", "HTML", "CSS", "JavaScript"],
    image: "/images/projects/developher.jpg",
    liveUrl: "https://developher.com",
  },
  {
    slug: "sutherland-house-books",
    title: "Sutherland House Publishing",
    tagline: "WordPress + WooCommerce site for a book publisher",
    category: "WordPress",
    role: "Front-end Developer",
    summary:
      "Sutherland House Publishing's online bookstore — a WordPress/WooCommerce catalog of new releases and bestsellers.",
    overview:
      "Publishing sites are essentially product catalogs, but the products are books — which means cover art, author names, and pre-order dates matter as much as price. I built out the product listing and detail templates in WordPress/WooCommerce for new releases and bestsellers, keeping the browsing experience clean and catalog-like rather than over-designed, since the goal is to get readers from \"browsing new releases\" to \"pre-ordered\" with as little friction as possible. Responsive layout was a priority across the catalog grid and checkout flow, given how much book-browsing traffic happens on mobile.",
    highlights: [
      "Clean, catalog-style browsing built for a publisher's new releases and bestsellers.",
      "WooCommerce product and variant handling (pre-orders, multiple formats).",
      "Responsive from catalog grid through to checkout.",
    ],
    features: [
      "WordPress + WooCommerce product architecture.",
      "New-release and bestseller catalog templates.",
      "Support for product variants and pre-orders.",
      "Responsive design across the full purchase flow.",
    ],
    tech: ["WordPress", "WooCommerce", "HTML", "CSS"],
    image: "/images/projects/sutherland-house-books.jpg",
    liveUrl: "https://sutherlandhousebooks.com",
  },
  {
    slug: "gisc-india",
    title: "GISC India",
    tagline: "Corporate site for a GIS consulting company",
    category: "WordPress",
    role: "Front-end Developer",
    summary:
      "A corporate WordPress site for GIS Consortium India, a Geographic Information Systems services provider working with government and enterprise clients.",
    overview:
      "GISC India works across industries as different as telecom, oil & gas, power distribution, and municipal government, so their site needed to organize a genuinely wide range of services and case studies without feeling cluttered. I built responsive service and industry-solution pages on WordPress, translating design mockups into clean, cross-browser-compatible markup, and structured the business-highlights, services, and industries sections with ACF so the team could keep the content current — new case studies, updated stats, new service lines — without ongoing developer involvement.",
    highlights: [
      "Organizes a wide range of GIS services and industries without feeling cluttered.",
      "Built for a technical, B2B, government-and-enterprise audience.",
      "Content sections structured for the team to keep current independently.",
    ],
    features: [
      "WordPress + ACF for services, industries, and business-highlights content.",
      "Clean, cross-browser-compatible markup from design mockups.",
      "Responsive layout for both desktop research and mobile browsing.",
      "Structured for easy addition of new case studies over time.",
    ],
    tech: ["WordPress", "ACF", "HTML", "CSS"],
    image: "/images/projects/gisc-india.jpg",
    liveUrl: "https://giscindia.com",
  },
  {
    slug: "rizlearn",
    title: "RizLearn",
    tagline: "Personal learning platform, built in Next.js",
    category: "Next.js",
    role: "Independent Project",
    summary:
      "A self-initiated learning platform concept, built end to end in Next.js and Tailwind CSS to practice full-product thinking outside of client work.",
    overview:
      "RizLearn is a personal project — a chance to design and build a learning platform end to end, rather than implementing someone else's design against a client brief. I used it to explore course and lesson content structures, progress tracking, and the kind of clean, distraction-free UI that keeps someone actually working through a course instead of bouncing off it. It's also where I try out new Next.js and Tailwind patterns before bringing them into client work — a low-stakes place to get things wrong first.",
    highlights: [
      "Full UI/UX ownership, from information architecture to final polish.",
      "Explores course/lesson structures and progress-tracking UI patterns.",
      "A testbed for Next.js and Tailwind patterns ahead of client work.",
    ],
    features: [
      "Built in Next.js with Tailwind CSS.",
      "Course and lesson content structure.",
      "Progress-tracking UI concepts.",
      "Ongoing personal project, iterated on over time.",
    ],
    tech: ["Next.js", "React.js", "Tailwind CSS"],
    image: "/images/projects/rizlearn.jpg",
  },
  {
    slug: "rizpostai",
    title: "RizPostAI",
    tagline: "AI-assisted social post generator, built in Next.js",
    category: "Next.js",
    role: "Independent Project",
    summary:
      "A personal side project exploring AI-assisted content generation for social posts, built with Next.js and a modern, component-driven UI.",
    overview:
      "RizPostAI is a sandbox for a question I kept running into in client work: how do you design a UI around an AI feature so the generated content feels like a starting point to refine, not a black box you either accept or reject? I built the front end in Next.js, keeping the generation flow deliberately simple — a prompt, a result, and fast, obvious ways to regenerate or edit — and used it to explore patterns like streaming text output and inline editing of AI-generated copy.",
    highlights: [
      "Explores UI patterns for AI-generated content, not just the AI integration itself.",
      "Deliberately simple, fast generation-to-edit flow.",
      "A personal sandbox for AI-in-the-UI ideas ahead of client applications.",
    ],
    features: [
      "Built in Next.js with a component-driven UI.",
      "AI-assisted text generation flow.",
      "Inline editing of generated content.",
      "Ongoing personal project, iterated on over time.",
    ],
    tech: ["Next.js", "React.js", "Tailwind CSS"],
    image: "/images/projects/rizpostai.jpg",
  },
];
