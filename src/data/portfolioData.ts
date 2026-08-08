import { Project, WorkExperience, Education, SkillCategory, RecruiterRole } from '../types';

export interface RecruiterRoleExt extends RecruiterRole {
  titleEn: string;
  pitchEn: string;
  relevantMetricsEn: string[];
}

export interface ProjectExt extends Project {
  summaryEn: string;
  impactMetricsEn: string[];
  roleEn: string;
}

export interface WorkExperienceExt extends WorkExperience {
  roleEn: string;
  metricsEn: string;
  bulletsEn: string[];
}

export interface SkillCategoryExt extends SkillCategory {
  nameEn: string;
  descriptionEn: string;
}

export interface EducationExt extends Education {
  degreeEn: string;
  badgeEn: string;
}

export const personalInfo = {
  name: "Pedro Rodriguez",
  title: "Senior Software Engineer",
  tagline: "Building High-Performance Full-Stack Systems with Angular, React, .NET Core & AI Automation",
  summary: "Software Engineer with 5+ years of experience building production web applications using Angular, React, TypeScript, JavaScript, C#, ASP.NET Core, .NET Core, ASP.NET MVC, and SQL. Proven track record of improving system performance by up to 40%, automating business-critical workflows, and integrating AI-assisted engineering tools (Google Antigravity, Cursor) to deliver scalable software 2-3x faster.",
  location: "Santo Domingo, Dominican Republic (Available Remote / Hybrid)",
  phone: "+1 (829) 804-9502",
  email: "pe.rod.001@gmail.com",
  linkedin: "https://www.linkedin.com/in/pedro-rodriguez-1b557b1b9/",
  status: "Available for Senior / Tech Lead Roles",
  stats: [
    { label: "Years of Experience", value: "5+" },
    { label: "Production Modules", value: "30+" },
    { label: "Query/Perf Optimization", value: "+40%" },
    { label: "Manual Workflow Reduction", value: "60%" }
  ]
};

export const recruiterRoles: RecruiterRoleExt[] = [
  {
    id: "fullstack",
    title: "Senior Full-Stack Developer (.NET + React/Angular)",
    titleEn: "Senior Full-Stack Developer (.NET + React/Angular)",
    matchScore: 98,
    pitch: "Complete end-to-end fullstack engineer proficient in modern SPAs (Angular/React) and robust backends (C# ASP.NET Core, SQL). Delivered 30+ enterprise modules and CRM integrations.",
    pitchEn: "Complete end-to-end fullstack engineer proficient in modern SPAs (Angular/React) and robust backends (C# ASP.NET Core, SQL). Delivered 30+ enterprise modules and CRM integrations.",
    highlightedSkills: ["Angular", "React", "C# ASP.NET Core", "TypeScript", "SQL Optimization", "REST APIs"],
    relevantMetrics: [
      "Desarrolló 12+ módulos web críticos para el negocio en TripleCyber Corp",
      "Mejoró el rendimiento frontend y backend entre 25% y 35%",
      "Migró 4+ módulos empresariales legados a arquitectura moderna"
    ],
    relevantMetricsEn: [
      "Built 12+ business-critical web modules at TripleCyber Corp",
      "Improved backend & rendering performance by 25-35%",
      "Migrated 4+ legacy enterprise modules to modern architecture"
    ],
    topProjects: ["AR Management System", "Domains App"]
  },
  {
    id: "frontend",
    title: "Senior Frontend Architect / Engineer",
    titleEn: "Senior Frontend Architect / Engineer",
    matchScore: 96,
    pitch: "Specialist in building complex business SPA applications, state management, custom UI components, and high-speed web rendering using Angular, React, and TypeScript.",
    pitchEn: "Specialist in building complex business SPA applications, state management, custom UI components, and high-speed web rendering using Angular, React, and TypeScript.",
    highlightedSkills: ["Angular 17+", "React 18", "TypeScript", "SPA Architecture", "CSS3 / Micro-animations", "RxJS / State"],
    relevantMetrics: [
      "Mentoró desarrolladores junior reduciendo errores de revisión en un 30%",
      "Entregó 10+ proyectos web personalizados con >90% de precisión en plazos",
      "Optimizó renders de tablas de datos de alto volumen"
    ],
    relevantMetricsEn: [
      "Mentored junior engineers reducing code review cycle bugs by 30%",
      "Delivered 10+ custom client-facing applications with 90%+ timeline accuracy",
      "Optimized frontend rendering workflows for high-volume data tables"
    ],
    topProjects: ["Visit App", "AR Management System"]
  },
  {
    id: "backend",
    title: "Backend & Database Engineer (.NET Core / SQL)",
    titleEn: "Backend & Database Engineer (.NET Core / SQL)",
    matchScore: 94,
    pitch: "Expert in SQL query optimization, data access patterns, RESTful API design, C# .NET Core microservices, and CRM synchronization platforms.",
    pitchEn: "Expert in SQL query optimization, data access patterns, RESTful API design, C# .NET Core microservices, and CRM synchronization platforms.",
    highlightedSkills: ["C#", "ASP.NET Core", "SQL Server / Query Optimization", "MS Dynamics CRM Integration", "RESTful Architecture"],
    relevantMetrics: [
      "30-40% de mejora en recuperación de datos SQL en Solvex",
      "Integró Dynamics CRM con apps personalizadas cubriendo 5+ procesos core",
      "Apoyó 20+ lanzamientos en producción con metodologías CI/CD"
    ],
    relevantMetricsEn: [
      "30-40% performance gain in SQL data retrieval at Solvex",
      "Integrated Dynamics CRM with custom web apps covering 5+ core workflows",
      "Supported 20+ production releases with zero downtime deployment practices"
    ],
    topProjects: ["Domains App", "AR Management System"]
  },
  {
    id: "ai-lead",
    title: "AI-Augmented Lead Engineer",
    titleEn: "AI-Augmented Lead Engineer",
    matchScore: 99,
    pitch: "Pioneer in adopting Google Antigravity, Cursor, and AI-assisted workflows to refactor legacy applications, generate robust test suites, and accelerate delivery timelines by 2x.",
    pitchEn: "Pioneer in adopting Google Antigravity, Cursor, and AI-assisted workflows to refactor legacy applications, generate robust test suites, and accelerate delivery timelines by 2x.",
    highlightedSkills: ["Google Antigravity", "Cursor IDE", "AI Code Generation", "Prompt Engineering", "Legacy System Modernization"],
    relevantMetrics: [
      "Más de 100+ tareas ágiles completadas con aceleración por IA",
      "Automatizó el cálculo de comisiones y nóminas manuales en un 60%",
      "Líder en prototipado rápido y entrega de software Full-Stack"
    ],
    relevantMetricsEn: [
      "Over 100+ agile tasks completed with AI acceleration",
      "Automated manual commission & payroll calculations by 60%",
      "Rapid prototyping and full-stack delivery lead"
    ],
    topProjects: ["Visit App", "Domains App", "AR Management System"]
  }
];

export const projectsData: ProjectExt[] = [
  {
    id: "ar-management",
    title: "AR Management System",
    subtitle: "Enterprise Hotel Operations & Automated Payroll Platform",
    category: "Enterprise",
    role: "Lead Full-Stack Developer",
    roleEn: "Lead Full-Stack Developer",
    summary: "Web-based management system designed for hotel sales, reservations, structured discounts, commission calculation, and payroll reporting. Automated 6+ operational workflows and cut manual workload by 60%.",
    summaryEn: "Web-based management system designed for hotel sales, reservations, structured discounts, commission calculation, and payroll reporting. Automated 6+ operational workflows and cut manual workload by 60%.",
    impactMetrics: [
      "Redujo el trabajo manual de cálculo de comisiones en ~60%",
      "Automatizó 6+ flujos de trabajo operativos hoteleros",
      "Módulos centralizados de reservas, descuentos y nómina"
    ],
    impactMetricsEn: [
      "Reduced manual commission calculation work by ~60%",
      "Automated 6+ core operational hotel workflows",
      "Centralized reservation, discount, and payroll reporting modules"
    ],
    techStack: ["React", "Angular", "ASP.NET Core", "C#", "SQL Server", "TypeScript"],
    interactiveDemoType: "AR_CALCULATOR",
    featured: true
  },
  {
    id: "visit-app",
    title: "Visit App",
    subtitle: "Multi-Residential Visitor Access & Security Platform",
    category: "Security & IoT",
    role: "Full-Stack Software Engineer",
    roleEn: "Full-Stack Software Engineer",
    summary: "Centralized visitor access control platform engineered for multiple residential complexes. Handles instant resident requests, real-time security guard approvals, visitor check-in/out tracking, and visitor analytics.",
    summaryEn: "Centralized visitor access control platform engineered for multiple residential complexes. Handles instant resident requests, real-time security guard approvals, visitor check-in/out tracking, and visitor analytics.",
    impactMetrics: [
      "Centralizó 1,000+ registros de visitantes con datos estructurados",
      "Aceleró los tiempos de aprobación de entrada en garita",
      "Arquitectura multi-tenant para administración residencial"
    ],
    impactMetricsEn: [
      "Centralized 1,000+ visitor records with structured data schemas",
      "Accelerated security approval check-in times",
      "Multi-tenant access architecture for residential management"
    ],
    techStack: ["Angular", "TypeScript", "ASP.NET Core", "SQL", "REST API"],
    interactiveDemoType: "VISIT_APP",
    featured: true
  },
  {
    id: "domains-app",
    title: "Domains App",
    subtitle: "Domain Registration, DNS Inspector & Marketplace Platform",
    category: "Domain & Infrastructure",
    role: "Full-Stack Engineer",
    roleEn: "Full-Stack Engineer",
    summary: "Cloud platform supporting domain search, instant registration, DNS record management (A, CNAME, MX, TXT), ownership transfer, and an interactive domain marketplace supporting over 100+ active domains.",
    summaryEn: "Cloud platform supporting domain search, instant registration, DNS record management (A, CNAME, MX, TXT), ownership transfer, and an interactive domain marketplace supporting over 100+ active domains.",
    impactMetrics: [
      "Soportó 100+ registros de dominios activos con propagación instantánea",
      "Implementó mercado de dominios y flujos de renovación automática",
      "Interfaz web de alto rendimiento sin latencia en consultas DNS"
    ],
    impactMetricsEn: [
      "Supported 100+ active domain records with instant DNS propagation updates",
      "Implemented domain marketplace and automated renewal workflows",
      "High performance web interface with zero lag DNS lookup"
    ],
    techStack: ["React", "Node.js / .NET Core", "TypeScript", "SQL", "Tailwind CSS"],
    interactiveDemoType: "DOMAINS_APP",
    featured: true
  }
];

export const experienceData: WorkExperienceExt[] = [
  {
    id: "triplecyber",
    company: "TripleCyber Corporation",
    role: "Software Engineer",
    roleEn: "Software Engineer",
    location: "Dominican Republic / Remote",
    period: "2022 – Present",
    metrics: "12+ Enterprise Modules | +25-35% Workflow Performance | Mentored 2-3 Juniors",
    metricsEn: "12+ Enterprise Modules | +25-35% Workflow Performance | Mentored 2-3 Juniors",
    bullets: [
      "Desarrolló y desplegó 12+ módulos web críticos para el negocio utilizando Angular, React, ASP.NET Core, C#, TypeScript y SQL.",
      "Mejoró el rendimiento de las aplicaciones aproximadamente entre un 25% y 35% optimizando renderizado frontend, lógica backend y llamadas a API.",
      "Mentoró a 2-3 desarrolladores junior en estándares de código y arquitectura, reduciendo errores en revisión de código en un 30%.",
      "Apoyó 20+ lanzamientos a producción y completó más de 100 tareas de desarrollo en entornos Agile/Scrum."
    ],
    bulletsEn: [
      "Developed and deployed 12+ business-critical web modules using Angular, React, ASP.NET Core, C#, TypeScript, and SQL.",
      "Improved application performance by 25–35% across key workflows by optimizing frontend rendering, backend logic, and API calls.",
      "Mentored 2–3 junior developers on coding standards and architecture, reducing code review issues by 30%.",
      "Supported 20+ production releases and completed 100+ development tasks in Agile/Scrum environments."
    ],
    technologies: ["Angular", "React", "ASP.NET Core", "C#", "TypeScript", "SQL", "Google Antigravity", "Cursor"]
  },
  {
    id: "solvex",
    company: "Solvex Dominicana",
    role: "Software Developer",
    roleEn: "Software Developer",
    location: "Santo Domingo, DR",
    period: "2021 – 2022",
    metrics: "+30-40% Query Retrieval Performance | 8+ Production Features | MS Dynamics CRM",
    metricsEn: "+30-40% Query Retrieval Performance | 8+ Production Features | MS Dynamics CRM",
    bullets: [
      "Optimizó consultas SQL y patrones de acceso a datos, mejorando el rendimiento de recuperación entre un 30% y 40%.",
      "Construyó y mantuvo aplicaciones web de negocios dinámicas con React, Angular y ASP.NET Core, entregando 8+ funcionalidades en producción.",
      "Migró 4+ módulos legados a tecnologías web modernas, mejorando la escalabilidad a largo plazo.",
      "Integró Microsoft Dynamics CRM con aplicaciones web personalizadas, respaldando 5+ procesos de negocio clave."
    ],
    bulletsEn: [
      "Optimized SQL queries and data access patterns, improving data retrieval performance by 30–40% across key workflows.",
      "Built and maintained dynamic business web applications with React, Angular, and ASP.NET Core, delivering 8+ production features.",
      "Migrated 4+ legacy modules to modern web technologies, improving scalability and long-term application support.",
      "Integrated Microsoft Dynamics CRM with custom web applications, supporting 5+ business processes with reliable sync."
    ],
    technologies: ["React", "Angular", "ASP.NET Core", "MS Dynamics CRM", "SQL Server", "C#", "REST APIs"]
  },
  {
    id: "freelance",
    company: "Freelance / Software Consultant",
    role: "Software Developer",
    roleEn: "Software Developer",
    location: "Dominican Republic",
    period: "2019 – 2021",
    metrics: "10+ Custom Web Applications | 90%+ On-Time Delivery | Custom WordPress & Plugins",
    metricsEn: "10+ Custom Web Applications | 90%+ On-Time Delivery | Custom WordPress & Plugins",
    bullets: [
      "Entregó 10+ proyectos web personalizados para clientes utilizando React, Angular, ASP.NET Core, C#, JavaScript y SQL.",
      "Construyó sitios web WordPress con temas y plugins personalizados, incrementando la velocidad en un 20-30%.",
      "Gestionó entregas desde la concepción hasta el lanzamiento, manteniendo más del 90% de proyectos dentro de los tiempos pactados."
    ],
    bulletsEn: [
      "Delivered 10+ custom web projects for clients using React, Angular, ASP.NET Core, C#, JavaScript, and SQL.",
      "Built WordPress websites with custom themes and plugins, increasing page performance by 20–30% in optimized projects.",
      "Managed project delivery from concept to launch, keeping over 90% of projects within agreed timelines."
    ],
    technologies: ["React", "Angular", "JavaScript", "ASP.NET Core", "C#", "WordPress", "Custom PHP Plugins", "SQL"]
  }
];

export const skillCategories: SkillCategoryExt[] = [
  {
    name: "Desarrollo Frontend",
    nameEn: "Frontend Engineering",
    description: "Construcción de Single Page Applications responsivas y ultra rápidas con arquitectura enterprise.",
    descriptionEn: "Building responsive, lightning-fast Single Page Applications with enterprise architecture.",
    skills: [
      { name: "Angular (10 - 17+)", level: 95, experienceYears: "5 YOE", highlight: true },
      { name: "React / Next.js", level: 92, experienceYears: "5 YOE", highlight: true },
      { name: "TypeScript", level: 95, experienceYears: "5 YOE", highlight: true },
      { name: "JavaScript (ES6+)", level: 95, experienceYears: "5 YOE" },
      { name: "HTML5 / CSS3 / Tailwind", level: 90, experienceYears: "5 YOE" },
      { name: "Responsive SPA Design", level: 95, experienceYears: "5 YOE" }
    ]
  },
  {
    name: "Backend & Base de Datos",
    nameEn: "Backend & Database",
    description: "Desarrollo de REST APIs escalables, microservicios y optimización de consultas SQL.",
    descriptionEn: "Developing scalable REST APIs, microservices, and database query optimization.",
    skills: [
      { name: "C# / .NET Core / ASP.NET", level: 92, experienceYears: "5 YOE", highlight: true },
      { name: "SQL & Query Optimization", level: 94, experienceYears: "5 YOE", highlight: true },
      { name: "RESTful API Architecture", level: 95, experienceYears: "5 YOE" },
      { name: "Node.js", level: 85, experienceYears: "3 YOE" },
      { name: "ASP.NET MVC", level: 88, experienceYears: "4 YOE" },
      { name: "Data Access Patterns / ORM", level: 90, experienceYears: "5 YOE" }
    ]
  },
  {
    name: "IA & Herramientas Modernas",
    nameEn: "AI & Modern Engineering Tools",
    description: "Uso avanzado de asistentes IA para codificar, refactorizar y entregar más rápido.",
    descriptionEn: "Leveraging state-of-the-art AI assistants to code, refactor, and ship faster.",
    skills: [
      { name: "Google Antigravity", level: 98, experienceYears: "Active Lead", highlight: true },
      { name: "Cursor AI IDE", level: 96, experienceYears: "Daily Driver", highlight: true },
      { name: "AI Code Generation & Debugging", level: 95, experienceYears: "Advanced" },
      { name: "Git / GitHub / GitLab", level: 92, experienceYears: "5 YOE" },
      { name: "Agile / Scrum / CI-CD", level: 90, experienceYears: "5 YOE" }
    ]
  },
  {
    name: "Plataformas de Negocio & CRM",
    nameEn: "Business Platforms & CRM",
    description: "Conexión de herramientas web con plataformas empresariales y migración de sistemas legados.",
    descriptionEn: "Connecting custom web tools with enterprise platforms and legacy migrations.",
    skills: [
      { name: "MS Dynamics CRM Integration", level: 90, experienceYears: "2 YOE", highlight: true },
      { name: "Legacy System Modernization", level: 92, experienceYears: "4 YOE" },
      { name: "WordPress Custom Plugins/Themes", level: 85, experienceYears: "3 YOE" }
    ]
  }
];

export const educationData: EducationExt[] = [
  {
    id: "unive-om",
    institution: "Universidad Dominicana O&M",
    degree: "Ingeniero de Sistemas y Cómputos",
    degreeEn: "Systems and Computing Engineer",
    badge: "Ingeniería de Sistemas",
    badgeEn: "Engineering Degree"
  },
  {
    id: "itla",
    institution: "ITLA (Instituto Tecnológico de Las Américas)",
    degree: "Curso Avanzado de Programación",
    degreeEn: "Advanced Programming Certification",
    badge: "Diploma Técnico",
    badgeEn: "Technical Diploma"
  },
  {
    id: "hainamosa",
    institution: "Instituto Politécnico Salesiano Hainamosa",
    degree: "Técnico en Informática",
    degreeEn: "Computer Technician",
    badge: "Técnico en Informática",
    badgeEn: "Technician Diploma"
  },
  {
    id: "solvex-cert",
    institution: "Solvex Academy",
    degree: "Buenas Prácticas para el Desarrollo de Software",
    degreeEn: "Best Practices for Software Development",
    badge: "Certificación",
    badgeEn: "Certification"
  },
  {
    id: "udemy-angular",
    institution: "Udemy Certified",
    degree: "Angular de Cero a Experto",
    degreeEn: "Angular Basic to Expert",
    badge: "Frontend Specialization",
    badgeEn: "Frontend Specialization"
  },
  {
    id: "udemy-react",
    institution: "Udemy Certified",
    degree: "React de Cero a Experto",
    degreeEn: "React Basic to Expert",
    badge: "Frontend Specialization",
    badgeEn: "Frontend Specialization"
  }
];

export const communityData = {
  title: "Liderazgo y Participación en la Comunidad",
  role: "Administrador de la Comunidad — KKCoding Discord",
  description: "Facilitar discusiones técnicas sobre desarrollo de software, intercambio de ideas de proyectos y mentoría de carrera para desarrolladores enfocado en su crecimiento profesional."
};
