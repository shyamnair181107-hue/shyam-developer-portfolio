export type SkillCategory = "All" | "Programming" | "Frontend" | "Backend" | "Database" | "Tools";

export interface SkillItem {
  name: string;
  category: "Programming" | "Frontend" | "Backend" | "Database" | "Tools";
  description: string;
  icon: string;
  badgeColor?: string;
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
  // Programming
  {
    name: "C",
    category: "Programming",
    description: "Core structured programming, memory models, pointers & algorithmic thinking",
    icon: "Code2",
    badgeColor: "from-blue-500 to-indigo-600"
  },
  {
    name: "Python",
    category: "Programming",
    description: "Scripting, algorithmic problem solving, automation and software prototyping",
    icon: "FileCode",
    badgeColor: "from-yellow-400 to-blue-500"
  },
  {
    name: "JavaScript",
    category: "Programming",
    description: "Modern ES6+ syntax, asynchronous programming, event-driven web development",
    icon: "FileJson",
    badgeColor: "from-amber-400 to-yellow-500"
  },

  // Frontend
  {
    name: "React",
    category: "Frontend",
    description: "Component architecture, hooks, state management and reactive UI development",
    icon: "Atom",
    badgeColor: "from-cyan-400 to-blue-500"
  },
  {
    name: "TypeScript",
    category: "Frontend",
    description: "Static typing, robust interfaces, type safety and enhanced developer tooling",
    icon: "FileCode2",
    badgeColor: "from-blue-400 to-blue-600"
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Modern utility-first styling, glassmorphism design and responsive systems",
    icon: "Palette",
    badgeColor: "from-teal-400 to-cyan-500"
  },
  {
    name: "HTML5 & CSS3",
    category: "Frontend",
    description: "Semantic web structure, accessibility standards, flexbox/grid layouts and CSS animations",
    icon: "Layout",
    badgeColor: "from-orange-500 to-pink-500"
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    description: "Event-driven runtime environment for building scalable network backends",
    icon: "Server",
    badgeColor: "from-emerald-400 to-green-600"
  },
  {
    name: "Express.js",
    category: "Backend",
    description: "Minimalist server framework for routing, middleware pipelines and microservices",
    icon: "Cpu",
    badgeColor: "from-slate-400 to-slate-600"
  },
  {
    name: "REST APIs",
    category: "Backend",
    description: "Designing structured JSON endpoints, HTTP lifecycle management and error handling",
    icon: "Network",
    badgeColor: "from-purple-400 to-violet-600"
  },

  // Database
  {
    name: "MySQL",
    category: "Database",
    description: "Relational schema design, complex query joins, indexing and data integrity",
    icon: "Database",
    badgeColor: "from-blue-500 to-orange-400"
  },
  {
    name: "PostgreSQL",
    category: "Database",
    description: "Advanced relational database management, transactions and ACID compliance",
    icon: "Layers",
    badgeColor: "from-sky-500 to-blue-700"
  },
  {
    name: "SQLite",
    category: "Database",
    description: "Lightweight embedded database engine for local prototyping and testing",
    icon: "HardDrive",
    badgeColor: "from-blue-300 to-indigo-500"
  },
  {
    name: "Supabase",
    category: "Database",
    description: "Open-source PostgreSQL backend-as-a-service with real-time subscriptions",
    icon: "Zap",
    badgeColor: "from-emerald-400 to-teal-500"
  },

  // Tools
  {
    name: "Git",
    category: "Tools",
    description: "Distributed version control, branching strategies, commit history and rebasing",
    icon: "GitBranch",
    badgeColor: "from-red-500 to-orange-600"
  },
  {
    name: "GitHub",
    category: "Tools",
    description: "Collaborative coding, pull requests, issue tracking and remote repositories",
    icon: "Github",
    badgeColor: "from-slate-400 to-slate-700"
  },
  {
    name: "VS Code",
    category: "Tools",
    description: "Primary engineering IDE configured with linting, debugging and productivity tools",
    icon: "TerminalSquare",
    badgeColor: "from-blue-400 to-cyan-500"
  },
  {
    name: "Vercel",
    category: "Tools",
    description: "Zero-configuration edge deployment, serverless functions and continuous delivery",
    icon: "Globe",
    badgeColor: "from-slate-200 to-slate-500"
  },
  {
    name: "Postman",
    category: "Tools",
    description: "API testing, request mockups, automated test suites and environment debugging",
    icon: "Send",
    badgeColor: "from-orange-400 to-amber-600"
  }
];

