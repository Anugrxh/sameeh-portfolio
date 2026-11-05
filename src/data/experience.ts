export type Experience = {
  company: string;
  role: string;
  type?: string;
  start: string;
  end: string;
  tagline: string;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Snapshare AI",
    role: "Product Operations Associate",
    start: "Nov 2025",
    end: "Present",
    tagline: "Bridging product, engineering, and QA to keep releases moving.",
    bullets: [
      "Partner with the Product Owner to run day-to-day product operations: break epics into tasks, assign work across the dev team, and track issues from report to resolution.",
      "Own the issue intake and triage process, maintaining a single prioritized backlog so bugs and feature requests are captured, deduplicated, and closed on schedule.",
      "Coordinate QA cycles and development workflows, running regression passes before releases and routing fixes between testers and developers.",
      "Manage GitHub repositories end to end: review and merge pull requests, enforce branching conventions, resolve merge conflicts, and keep the main branch release-ready.",
      "Author release notes and drive the deployment process for each version, coordinating with engineering on rollout timing and post-release monitoring.",
      "Maintain product documentation and internal process guides so new contributors can onboard quickly.",
    ],
    stack: ["GitHub", "Release management", "QA coordination", "Documentation"],
  },
  {
    company: "Snapshare AI",
    role: "Junior Data Scientist",
    start: "Mar 2025",
    end: "Oct 2025",
    tagline: "Built and shipped GenAI services from prototype to production.",
    bullets: [
      "Designed and developed GenAI/LLM applications with FastAPI, LangChain, and MongoDB, serving real-time inference to end users with low latency.",
      "Built MCP Server integrations so LLM agents could call internal tools and data sources securely and consistently.",
      "Containerized AI services with Docker and deployed them on AWS, using S3 for storage and Rekognition for image and face analysis features.",
      "Designed prompt pipelines and retrieval flows to improve response accuracy and reduce hallucinations in production chatbots.",
      "Performed exploratory data analysis, built predictive models, and produced visualizations that fed directly into product and business decisions.",
      "Wrote clean, testable Python with clear API contracts so services could be maintained and extended by the wider team.",
    ],
    stack: ["FastAPI", "LangChain", "MCP", "MongoDB", "Docker", "AWS S3", "Rekognition"],
  },
  {
    company: "Snapshare AI",
    role: "Junior Data Analyst",
    start: "Mar 2025",
    end: "May 2025",
    tagline: "Turned raw engagement and lead data into decisions.",
    bullets: [
      "Analyzed user engagement and lead data using Excel, SQL, and Redash, building dashboards and recurring reports for product and sales teams.",
      "Scraped and aggregated external data with BeautifulSoup to enrich internal datasets and support market analysis.",
      "Managed metadata and API integrations for LLM chatbots, improving contextual accuracy and ensuring clean data flow between systems.",
      "Performed load and performance testing with JMeter, identifying bottlenecks and reporting findings to the engineering team.",
      "Built and maintained data pipelines that kept reporting reliable, accurate, and up to date.",
    ],
    stack: ["SQL", "Redash", "Excel", "BeautifulSoup", "JMeter"],
  },
  {
    company: "ICT Academy of Kerala",
    role: "ML & AI Intern",
    type: "Internship",
    start: "May 2023",
    end: "Jun 2023",
    tagline: "Intensive hands-on program in applied machine learning.",
    bullets: [
      "Developed ML models for predictive analytics, benchmarking against baselines and tuning for improved accuracy.",
      "Built a loan approval prediction model: cleaned and preprocessed the dataset, engineered features, and fine-tuned a K-Nearest Neighbors classifier to reach 61% accuracy.",
      "Compared multiple algorithms and evaluation metrics to understand trade-offs between model complexity and interpretability.",
      "Contributed ideas during collaborative brainstorming sessions to refine existing ML approaches and techniques.",
    ],
    stack: ["Python", "KNN", "Feature engineering", "Model evaluation"],
  },
];
