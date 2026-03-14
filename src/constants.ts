import { Experience, Project, SkillCategory, Certification, Education } from './types';

export const EXPERIENCES: Experience[] = [
  {
    company: "C3 AI",
    role: "Senior Software Engineer",
    period: "Present",
    description: [
      "Served as Forward Deployed Engineer owning the customer account end-to-end, working directly with plant managers and stakeholders to architect system integrations.",
      "Designed and built a large-scale Production Schedule Optimization application used by 200+ Cargill facilities, delivering a high-performance React/Redux UI.",
      "Implemented Python-based data ingestion pipelines & REST APIs to extract, transform and synchronize production, inventory & order data between SAP and C3.ai.",
      "Integrated the Gurobi optimization engine into backend microservices, formulating constraint-based models and optimizing compute performance.",
      "Developed an internal LLM powered Batch Job Optimizer using LangChain, LangGraph, OpenAI & MCP servers to autonomously analyze logs and generate code fixes.",
      "Created a multi-agent workflow with a RAG pipeline over historical job metadata, reducing batch job debugging and tuning time by 70%."
    ],
    tech: ["React", "Redux", "Python", "Gurobi", "LangChain", "OpenAI", "SAP", "REST APIs"]
  },
  {
    company: "Tesla",
    role: "Software Engineer Intern",
    period: "Jan 2024 - May 2024",
    description: [
      "Developed real-time network traffic infrastructure inventory dashboard for CDN & F5 Load Balancers utilizing React/Redux, GraphQL & Python FastAPI.",
      "Automated the provisioning of new Varnish nodes in NetBox and applied tagging conventions using a Python-based tagging service.",
      "Configured and deployed Varnish CDN reverse proxies on virtual machines, ensuring seamless connectivity with upstream backend servers."
    ],
    tech: ["React", "Redux", "GraphQL", "Python", "FastAPI", "Prometheus", "Varnish", "NetBox"]
  },
  {
    company: "Viasat",
    role: "Software Engineer Intern",
    period: "May 2023 - Aug 2023",
    description: [
      "Developed robust automation scripts in Golang to effectively retrieve metrics from PagerDuty RESTful APIs, implementing authentication and database integration.",
      "Implemented CI/CD scripts in Drone and set up Docker for running EC2 instances ensuring seamless integration with the infrastructure.",
      "Created a comprehensive dashboard for the collected data in Grafana to provide valuable insights and facilitate data-driven decision-making."
    ],
    tech: ["Golang", "PagerDuty API", "Drone CI", "Docker", "AWS EC2", "Grafana"]
  },
  {
    company: "John Deere",
    role: "Software Development Engineer II",
    period: "June 2019 - July 2022",
    description: [
      "Engineered the backend architecture across 3 Spring Boot microservices to validate job payloads and process geospatial field data.",
      "Built a responsive, data-driven farm management system UI using React/Redux for real-time field operation visualization.",
      "Implemented the end-to-end job delivery pipeline using REST, Kafka, and MQTT, generating machine-readable ISOXML task files.",
      "Improved system observability by integrating Prometheus, Grafana, and Elasticsearch to monitor API latency and telemetry ingestion.",
      "Participated in the Global Hackathon 2021, implementing front-end and workflow improvements to the Work Planner tool.",
      "Set up CI/CD pipelines using Drone and Jenkins, and designed automated end-to-end regression test suites with Cypress."
    ],
    tech: ["Spring Boot", "Java", "PostgreSQL", "React", "Redux", "Kafka", "MQTT", "Prometheus", "Grafana", "Cypress"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Production Schedule Optimizer",
    description: "High-performance optimization engine for 200+ industrial facilities, featuring real-time data synchronization and complex constraint modeling.",
    tech: ["React", "Redux", "Python", "Gurobi", "SAP"],
  },
  {
    title: "LLM Batch Job Optimizer",
    description: "Autonomous agentic workflow that analyzes batch job logs, generates code fixes, and creates GitHub PRs using RAG and multi-agent systems.",
    tech: ["LangChain", "LangGraph", "OpenAI", "MCP", "Python"],
  },
  {
    title: "Farm Management System",
    description: "Responsive UI and backend architecture for managing large-scale field operations with real-time job status and machine communication.",
    tech: ["Spring Boot", "React", "Kafka", "MQTT", "PostgreSQL"],
  },
  {
    title: "Infrastructure Health Dashboard",
    description: "Real-time visibility into CDN and Load Balancer health metrics, integrating with Prometheus and NetBox.",
    tech: ["React", "GraphQL", "FastAPI", "Prometheus"],
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js" },
      { name: "Redux" },
      { name: "Angular.js" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "CSS3" },
      { name: "ECMAScript" },
      { name: "webpack" },
      { name: "babel" },
      { name: "Node.js" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Java" },
      { name: "Python" },
      { name: "C++" },
      { name: "Spring Boot" },
      { name: "Jango" },
      { name: "REST APIs" },
      { name: "AWS" },
      { name: "Docker" },
      { name: "F5 Load Balancers" },
      { name: "Varnish CDN" }
    ]
  },
  {
    category: "AI & Data",
    skills: [
      { name: "LangChain" },
      { name: "LangGraph" },
      { name: "multi-agent workflows" },
      { name: "RAG pipelines" },
      { name: "vector databases (Chroma DB, Pinecone)" },
      { name: "MCP servers" },
      { name: "LangSmith" },
      { name: "NetBox" },
      { name: "Grafana" }
    ]
  },
  {
    category: "Testing & DB",
    skills: [
      { name: "Mocha" },
      { name: "Jest" },
      { name: "Junit" },
      { name: "Cypress" },
      { name: "Jenkins" },
      { name: "Drone" },
      { name: "Prometheus" },
      { name: "My-SQL" },
      { name: "MongoDB" },
      { name: "PostgreSQL" }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    link: "https://www.credly.com/earner/earned/badge/c8ddf41d-6109-4973-bd25-302d490a7b16"
  },
  {
    name: "Certified Kubernetes Application Developer (CKAD)",
    issuer: "Cloud Native Computing Foundation",
    link: "https://www.credly.com/badges/31735bef-25a9-4908-ae07-f73d37d9aa5a/linked_in_profile"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "San Diego State University",
    period: "June 2022 - May 2024",
    gpa: "3.7/4",
    coursework: ["Algorithms", "Software Engineering", "Distributed Systems", "Parallel Computing", "Machine Learning"]
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "University of Pune",
    period: "June 2015 - May 2019",
    gpa: "9.01/10",
    coursework: ["Data Structures", "Cloud Computing", "Machine Learning", "Data Mining", "Soft Computing"]
  }
];
