export type SkillCategory = "All" | "Programming" | "Frontend" | "Backend" | "Database" | "Tools";

export interface SkillItem {
  name: string;
  category: "Programming" | "Frontend" | "Backend" | "Database" | "Tools";
  description: string;
  icon: string;
}

export const skillCategories: SkillCategory[] = [
  "All",
  "Programming",
  "Frontend",
  "Backend",
  "Database",
  "Tools"
];

export const skillsData: SkillItem[] = [
  // Programming Languages
  {
    name: "Python",
    category: "Programming",
    description: "Core scripting, Flask web backends, clean OOP paradigms & algorithmic problem solving",
    icon: "FileCode"
  },
  {
    name: "Java",
    category: "Programming",
    description: "Object-oriented programming, inheritance, polymorphism, and structured exception handling",
    icon: "Code2"
  },
  {
    name: "C & C++",
    category: "Programming",
    description: "Systems programming, memory models, pointers, and data structures implementation",
    icon: "Cpu"
  },
  {
    name: "JavaScript & TypeScript",
    category: "Programming",
    description: "Modern ES6+ syntax, asynchronous runtime execution, and type-safe web development",
    icon: "FileJson"
  },
  {
    name: "SQL",
    category: "Programming",
    description: "Relational database querying, joins, schema design, constraints, and transactions",
    icon: "Database"
  },

  // Frontend & Libraries
  {
    name: "React",
    category: "Frontend",
    description: "Component architecture, hooks, state management, and interactive UI engineering",
    icon: "Atom"
  },
  {
    name: "Next.js",
    category: "Frontend",
    description: "App Router, server-rendered components, static site generation, and optimized routing",
    icon: "Globe"
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Utility-first responsive layouts, glassmorphism design, and modern dark aesthetics",
    icon: "Palette"
  },
  {
    name: "HTML5 & CSS3",
    category: "Frontend",
    description: "Semantic web standards, cross-browser styling, flexbox/grid, and mobile-first design",
    icon: "Layout"
  },

  // Backend
  {
    name: "Flask",
    category: "Backend",
    description: "Python micro-framework for building scalable RESTful backends, routing, and APIs",
    icon: "Server"
  },
  {
    name: "REST APIs",
    category: "Backend",
    description: "Designing JSON endpoints, HTTP status lifecycle management, and service integration",
    icon: "Network"
  },
  {
    name: "Node.js & Express",
    category: "Backend",
    description: "Event-driven runtime for microservices, middleware routing, and real-time sockets",
    icon: "Cpu"
  },

  // Databases
  {
    name: "MySQL",
    category: "Database",
    description: "Relational schema modeling, index optimization, foreign key constraints, and ACID safety",
    icon: "Database"
  },
  {
    name: "SQLite",
    category: "Database",
    description: "Embedded relational database engine for lightweight application data storage",
    icon: "HardDrive"
  },

  // Developer Tools & Concepts
  {
    name: "Git & GitHub",
    category: "Tools",
    description: "Distributed version control, branching workflows, pull requests, and sprint management",
    icon: "GitBranch"
  },
  {
    name: "VS Code",
    category: "Tools",
    description: "Primary engineering environment configured with debugging, linting, and Git integration",
    icon: "TerminalSquare"
  },
  {
    name: "Vercel",
    category: "Tools",
    description: "Cloud edge deployment, automated CI/CD pipelines, and zero-configuration hosting",
    icon: "Globe"
  },
  {
    name: "OOP & Exception Handling",
    category: "Tools",
    description: "Encapsulation, abstraction, robust error recovery, and production code hygiene",
    icon: "Layers"
  }
];
