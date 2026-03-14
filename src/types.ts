export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; icon?: string }[];
}

export interface Certification {
  name: string;
  issuer: string;
  link: string;
}

export interface Education {
  degree: string;
  institution: string;
  gpa: string;
  period: string;
  coursework: string[];
}
