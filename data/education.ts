export type EducationItem = {
  degree: string;
  school: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Arts",
    school: "Mahatma Jyotiba Phule Rohilkhand University",
    period: "Jul 2018 – Jun 2021",
  },
];

export type CourseItem = {
  name: string;
  institute: string;
  period: string;
};

export const courses: CourseItem[] = [
  {
    name: "O'Level",
    institute: "National Institute of Electronics and Information Technology (NIELIT)",
    period: "Certification",
  },
  { name: "Web Developer", institute: "Dice Academy", period: "Certification" },
];

export const languages = ["English", "Hindi", "Urdu"] as const;
