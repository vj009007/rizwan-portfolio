export type SkillCategory = "language" | "framework" | "design" | "tool";

export type Skill = {
  name: string;
  category: SkillCategory;
  /** Shown as a floating badge around the Hero photo */
  heroBadge?: boolean;
};

export const skills: Skill[] = [
  { name: "HTML", category: "language", heroBadge: true },
  { name: "CSS", category: "language", heroBadge: true },
  { name: "JavaScript", category: "language", heroBadge: true },
  { name: "TypeScript", category: "language" },
  { name: "React.js", category: "framework", heroBadge: true },
  { name: "Next.js", category: "framework", heroBadge: true },
  { name: "Angular", category: "framework", heroBadge: true },
  { name: "Redux", category: "framework" },
  { name: "Tailwind CSS", category: "framework", heroBadge: true },
  { name: "Bootstrap", category: "framework" },
  { name: "jQuery", category: "framework" },
  { name: "Material UI", category: "framework" },
  { name: "SASS", category: "language" },
  { name: "WordPress", category: "tool" },
  { name: "WordPress ACF", category: "tool" },
  { name: "Figma to HTML", category: "design" },
  { name: "PSD to HTML", category: "design" },
  { name: "XD to HTML", category: "design" },
  { name: "Photoshop", category: "design" },
  { name: "Responsive Web Design", category: "design" },
  { name: "UI/UX", category: "design" },
  { name: "Cursor AI", category: "tool" },
];

export const skillCategoryLabels: Record<SkillCategory, string> = {
  language: "Languages",
  framework: "Frameworks & Libraries",
  design: "Design & UI/UX",
  tool: "Platforms & Tools",
};
