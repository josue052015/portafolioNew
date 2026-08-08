export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Enterprise' | 'Web Platform' | 'Security & IoT' | 'Domain & Infrastructure';
  summary: string;
  impactMetrics: string[];
  techStack: string[];
  role: string;
  interactiveDemoType: 'AR_CALCULATOR' | 'VISIT_APP' | 'DOMAINS_APP';
  featured: boolean;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  metrics: string;
  bullets: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location?: string;
  badge?: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    experienceYears: string;
    highlight?: boolean;
  }[];
}

export interface RecruiterRole {
  id: string;
  title: string;
  matchScore: number;
  pitch: string;
  highlightedSkills: string[];
  relevantMetrics: string[];
  topProjects: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  hasScheduleAction?: boolean;
}
