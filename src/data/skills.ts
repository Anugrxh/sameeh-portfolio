import type { LucideIcon } from "lucide-react";
import { Brain, Cloud, Code2, Database, Layers, Wrench } from "lucide-react";

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: Code2,
    items: ["Python", "Java", "C", "C++", "SQL", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Frameworks & libraries",
    icon: Layers,
    items: [
      "FastAPI",
      "Django",
      "LangChain",
      "BeautifulSoup",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "NLTK",
    ],
  },
  {
    title: "AI / ML",
    icon: Brain,
    items: [
      "LLM application development",
      "RAG pipelines",
      "MCP Server",
      "Sentiment analysis",
      "Predictive modeling",
      "EDA",
      "Data visualization",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "MSSQL", "MongoDB"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: [
      "AWS S3",
      "AWS Rekognition",
      "Docker",
      "Git",
      "GitHub PRs & releases",
      "CI workflows",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
      "VS Code",
      "PyCharm",
      "Jupyter",
      "Power BI",
      "DBeaver",
      "Redash",
      "GitHub Copilot",
      "JMeter",
      "Excel",
    ],
  },
];
