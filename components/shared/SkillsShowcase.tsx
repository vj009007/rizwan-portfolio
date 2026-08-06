import { SkillCircle } from "@/components/shared/SkillCircle";

export const skillGroups = [
  {
    bg: "bg-color-one",
    blue: false,
    percent: 95,
    title: "Frontend",
    sub: "(React, Angular, Next.js)",
    description: "5+ years building responsive, high-performance interfaces with React, Angular, and Next.js.",
  },
  {
    bg: "bg-color-two",
    blue: true,
    percent: 100,
    title: "Design to Code",
    sub: "(Figma, PSD, XD)",
    description: "Converting Figma, PSD, and XD designs into pixel-accurate, responsive HTML and React.",
  },
  {
    bg: "bg-color-three",
    blue: false,
    percent: 85,
    title: "WordPress",
    sub: "(ACF, CMS)",
    description: "Building and customizing WordPress sites with Advanced Custom Fields integration.",
  },
];

type SkillGroup = (typeof skillGroups)[number];

export function SkillCard({ skill }: { skill: SkillGroup }) {
  return (
    <div className={`skill-inner-box ${skill.bg}`} data-aos="fade-up" data-aos-duration="2000">
      <div className="skill-contact">
        <SkillCircle percent={skill.percent} blue={skill.blue} />
        <div className="skill-box-contact">
          <h4>
            {skill.title} <span>{skill.sub}</span>
          </h4>
          <p>{skill.description}</p>
        </div>
      </div>
    </div>
  );
}

export function SkillsShowcase({ id }: { id?: string }) {
  return (
    <div className="bix-skill" id={id}>
      {skillGroups.map((skill) => (
        <SkillCard key={skill.title} skill={skill} />
      ))}
    </div>
  );
}
