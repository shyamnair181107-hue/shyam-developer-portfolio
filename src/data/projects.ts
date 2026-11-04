export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  description: string;
  coverImage: string;
  gradient: string;
  accentColor: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: "Live" | "In Development" | "Prototype";
  isFeatured?: boolean;
  problemStatement: string;
  solutionOverview: string;
  architectureDetails: string;
  keyFeatures: string[];
  guestPortalFeatures?: string[];
  operationsFeatures?: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "grand-azure",
    title: "Grand Azure",
    subtitle: "Resort Management & Systems",
    category: "Full-Stack Web Development | Hospitality Technology",
    badge: "Spotlight Project",
    isFeatured: true,
    status: "Live",
    description:
      "A modern luxury resort management and guest experience platform combining an interactive guest portal with a comprehensive owner and staff operations management system.",
    coverImage: "/images/projects/l-horizon-azure/cover.svg",
    gradient: "from-violet-600/30 via-indigo-900/30 to-cyan-500/20",
    accentColor: "#00F0FF",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "REST APIs"],
    liveUrl: "https://grand-azure-resort1.vercel.app/",
    githubUrl: undefined,
    problemStatement:
      "Traditional resort management often suffers from disconnected systems: guests face disjointed booking and concierge touchpoints, while resort operators juggle fragmented tools for room turnover, ledger balancing, and housekeeping dispatch.",
    solutionOverview:
      "Grand Azure unifies ultra-luxury guest experience with high-precision property management in a single responsive web ecosystem. It delivers a fluid guest portal coupled with an enterprise-grade administrative suite for real-time occupancy and task tracking.",
    architectureDetails:
      "Built with Next.js App Router for server-rendered speed and SEO, styled with custom Tailwind CSS utility layers for sleek glassmorphic luxury, and animated with Framer Motion for responsive interactive feedback.",
    keyFeatures: [
      "Integrated dual-surface architecture: Guest Portal + Owner Operations Suite",
      "Real-time room status tracking with Occupied, Available, and Dirty indicators",
      "Dynamic revenue and occupancy metrics computation (ADR, Occupancy %)",
      "Interactive conversational AI concierge interface (Aura AI)"
    ],
    guestPortalFeatures: [
      "Luxury accommodation and penthouse exploration suite",
      "Seamless 3-step booking experience with instant validation",
      "Digital room key access simulator with secure NFC styling",
      "Aura AI conversational concierge with automated action triggers",
      "Interactive Google Maps and satellite landscape view",
      "Verified guest review system with category analytics breakdown"
    ],
    operationsFeatures: [
      "Centralized booking ledger management and search filters",
      "Room inventory management with full CRUD operations",
      "Room readiness status monitoring (Occupied, Available, Dirty)",
      "Hospitality KPIs: Total Revenue, Occupancy Rate %, Average Daily Rate (ADR)",
      "Interactive Housekeeping Kanban board with real-time drag/drop dispatch",
      "Dining and room service task queue management"
    ]
  },
  {
    id: "campus-eats",
    title: "Campus Eats",
    subtitle: "Student & Cafeteria Food Ordering Platform",
    category: "Full-Stack Web Development",
    badge: "Full-Stack Web App",
    isFeatured: false,
    status: "Live",
    description:
      "A campus-focused food ordering platform designed to simplify food discovery and ordering through a modern digital experience.",
    coverImage: "/images/projects/campus-eats/cover.svg",
    gradient: "from-cyan-500/20 via-blue-900/30 to-purple-900/30",
    accentColor: "#8B5CF6",
    technologies: ["React", "TypeScript", "Vite", "Express.js", "MySQL", "Socket.IO", "Integrated APIs"],
    liveUrl: "https://campus-eats-ruby.vercel.app/",
    githubUrl: "https://github.com/namit27y-dotcom/CampusEats",
    problemStatement:
      "University dining facilities face extreme peak-hour congestion, extended queues, order mix-ups, and lack of real-time food preparation updates for busy students navigating tight lecture schedules.",
    solutionOverview:
      "Campus Eats delivers an intuitive web ordering system bridging students and cafeteria vendors. Students browse real-time menus, place orders digitally, and track kitchen prep status through live event-driven communication.",
    architectureDetails:
      "Frontend architected in React and TypeScript powered by Vite for rapid HMR and lightweight bundle sizes. Backend powered by Express.js and MySQL for relational order/user data, with Socket.IO providing real-time live order updates.",
    keyFeatures: [
      "Digital cafeteria menu discovery with item availability indicators",
      "Fast checkout flow tailored for campus meal breaks",
      "Real-time kitchen order dispatch and status notifications via WebSockets",
      "Relational database schema in MySQL managing users, vendors, and orders",
      "RESTful API endpoints for menu items, authentication, and transaction records"
    ]
  },
  {
    id: "fdr-mitra",
    title: "FDR MITRA",
    subtitle: "Smart Security Deposit & FDR Management Portal",
    category: "SIH 2026 | FinTech | Workflow Automation",
    badge: "SIH 2026 Concept",
    isFeatured: false,
    status: "In Development",
    description:
      "A security deposit and Fixed Deposit Receipt management portal concept designed to improve deposit tracking, transparency and management workflows.",
    coverImage: "/images/projects/fdr-mitra/cover.svg",
    gradient: "from-violet-600/20 via-indigo-900/30 to-blue-600/20",
    accentColor: "#3B82F6",
    technologies: ["React / Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Workflow Automation"],
    liveUrl: undefined,
    githubUrl: undefined,
    problemStatement:
      "Government bodies, institutions, and tender contractors deal with paper-heavy, fragmented Fixed Deposit Receipts (FDR) and earnest money security deposits. Manual tracking leads to expired receipts, delayed refunds, reconciliation errors, and lack of audit trails.",
    solutionOverview:
      "FDR MITRA introduces an automated digital lifecycle portal for FDR verification, tenure tracking, automated maturity alerts, and secure claims processing with transparency and automated audit trails.",
    architectureDetails:
      "Designed as a modern responsive web portal using TypeScript and component-based frontend architecture, structured for secure RESTful API integrations with financial data validation rules.",
    keyFeatures: [
      "Centralized ledger for security deposit and FDR lifecycle tracking",
      "Automated maturity alert pipelines and renewal notification workflows",
      "Audit trail logs for deposit submission, claim verification, and release approval",
      "Role-based dashboard for applicants and authorizing financial officers",
      "Built for upcoming hackathon development and engineering refinement"
    ]
  }
];
