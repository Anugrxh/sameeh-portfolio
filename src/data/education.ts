export type Education = {
  degree: string;
  institution: string;
  period: string;
  location: string;
};

export type Certification = {
  title: string;
  note?: string;
};

export type Organization = {
  name: string;
  role: string;
  period: string;
  description: string;
};

export const education: Education[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "APJ Abdul Kalam Technological University",
    period: "2020 – 2024",
    location: "Kozhikode, Kerala",
  },
  {
    degree: "Higher Secondary Education (Science)",
    institution: "Directorate of Higher Secondary Education (DHSE)",
    period: "2018 – 2020",
    location: "Kozhikode, Kerala",
  },
];

export const certifications: Certification[] = [
  { title: "Microsoft AI Classroom Series" },
  { title: "IEEEXtreme 15.0", note: "Programming competition" },
];

export const organizations: Organization[] = [
  {
    name: "IEEE PES SBC CEV",
    role: "Vice Chair",
    period: "Feb 2022 – Apr 2023",
    description:
      "Led the Power and Energy Society student branch chapter, coordinating events, workshops, and member activities.",
  },
  {
    name: "IEEE SB CEV",
    role: "Volunteer",
    period: "Dec 2020 – Apr 2023",
    description:
      "Supported technical events and student outreach for the IEEE student branch.",
  },
];
