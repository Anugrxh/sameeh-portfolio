import type { LucideIcon } from "lucide-react";
import { ShoppingBag, Stethoscope } from "lucide-react";

export type Project = {
  title: string;
  period: string;
  icon: LucideIcon;
  summary: string;
  highlights: string[];
  stack: string[];
  /** Optional live or repo URL. Leave undefined to hide the link. */
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Opinion Mining in Online Shopping",
    period: "Nov 2023 – May 2024",
    icon: ShoppingBag,
    summary:
      "A web platform that scrapes product reviews from e-commerce sites and runs sentiment analysis to help shoppers make better decisions.",
    highlights: [
      "Sentiment analysis APIs backed by pre-trained models for efficient classification.",
      "Product recommendation, review summarization, per-user history, multi-language support, word clouds, and visual results.",
      "Real-time scraping with BeautifulSoup, data wrangling with Pandas, NLP with NLTK, and Matplotlib visualizations.",
      "VADER rule-based scoring that handles nuances like sarcasm and negation.",
      "Django backend and MySQL schema storing analysis history per user.",
    ],
    stack: ["Python", "Django", "MySQL", "NLTK", "VADER", "BeautifulSoup", "Pandas", "Matplotlib"],
  },
  {
    title: "Hospital Management System",
    period: "Apr 2023 – Aug 2023",
    icon: Stethoscope,
    summary:
      "A web application for managing hospital appointments and patient-doctor records.",
    highlights: [
      "Patients book appointments online, check real-time doctor availability, and receive instant confirmations.",
      "MySQL stores and serves structured data for patients, doctors, and appointments.",
      "Django handles backend logic, database communication, and authentication; static content is served with WhiteNoise.",
      "Planned extensions: online bill payment and access to electronic health records.",
    ],
    stack: ["Python", "Django", "MySQL", "WhiteNoise"],
  },
];
