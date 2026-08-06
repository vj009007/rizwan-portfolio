export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "UI/UX Developer",
    company: "TrainUp.com",
    period: "Oct 2024 – Present",
    current: true,
    bullets: [
      "Frontend developer skilled in Next.js, Angular, and Tailwind CSS, focused on building responsive, high-performance, and user-centric interfaces.",
      "Experienced in translating UI/UX designs into scalable applications while optimizing performance and usability.",
      "Continuously learning and applying modern development practices under the guidance of tech leads.",
    ],
  },
  {
    role: "HTML Developer",
    company: "Brandconn Digital Pvt Ltd",
    period: "Apr 2023 – Jul 2024",
    bullets: [
      "Developed responsive and user-friendly interfaces using HTML, CSS, JavaScript, and frameworks like Bootstrap and Tailwind CSS.",
      "Translated UI/UX design wireframes into code, ensuring high performance and cross-browser compatibility.",
      "Developed a web application for office work using Angular.",
    ],
  },
  {
    role: "UI Developer",
    company: "Infodia Technologies Private Limited",
    period: "Jul 2021 – Apr 2023",
    bullets: [
      "Created and maintained web applications using modern front-end technologies, including React.js.",
      "Enhanced website performance and user experience through optimized code and responsive design.",
      "Participated in code reviews and team meetings to ensure project alignment and knowledge sharing.",
      "Collaborated with senior developers to improve code quality and adhere to best practices.",
    ],
  },
];
