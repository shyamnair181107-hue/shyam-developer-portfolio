export interface TimelineStage {
  period: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  type: "academic" | "development" | "goals";
  icon: string;
}

export const journeyTimeline: TimelineStage[] = [
  {
    period: "Current Stage",
    badge: "Undergraduate Engineering",
    title: "Second Year — Computer Science Engineering",
    subtitle: "Core Academic Foundations & Engineering Principles",
    description:
      "Deepening theoretical fundamentals while aggressively translating concepts into functioning code. Building strong discipline across algorithmic thinking, hardware-software abstraction, and software engineering paradigms.",
    highlights: [
      "Data Structures & Algorithms (Arrays, Linked Lists, Trees, Graph algorithms, algorithmic complexity)",
      "Object-Oriented & Procedural Programming in C and Python",
      "Database Management Systems & Relational Schema Design (SQL, Normalization, ACID properties)",
      "Computer Architecture, Operating System concepts & Systems Thinking",
      "Discrete Mathematics & Computational Logic"
    ],
    type: "academic",
    icon: "GraduationCap"
  },
  {
    period: "Active Practice",
    badge: "Hands-on Engineering",
    title: "Full-Stack Software Development & Prototyping",
    subtitle: "Turning Conceptual Theory Into Practical Deployments",
    description:
      "Exploring modern frameworks, API architectures, and real-time protocols by actively designing and implementing full-stack applications like Campus Eats and L'Horizon Azure.",
    highlights: [
      "Modern Frontend Architecture with React, Next.js, and TypeScript",
      "Responsive UI Design Systems with Tailwind CSS & Glassmorphism aesthetics",
      "RESTful API design and asynchronous data management with Node.js and Express",
      "Real-time event synchronization and state management",
      "Version control workflows, Git branching hygiene, and continuous deployment on Vercel"
    ],
    type: "development",
    icon: "Code"
  },
  {
    period: "Strategic Horizon",
    badge: "Upcoming Ambitions",
    title: "Internships, Hackathons & Scalable Engineering",
    subtitle: "Collaborating With High-Impact Teams & Expanding Technical Scope",
    description:
      "Actively seeking challenging internship opportunities and competitive hackathon environments (including SIH 2026 preparation) to collaborate with engineering mentors and build systems that scale.",
    highlights: [
      "Securing competitive software engineering & web development internships",
      "Participating in national and collegiate hackathons to solve domain-specific problems",
      "Diving deeper into distributed systems, cloud infrastructure, and AI-assisted workflows",
      "Contributing to developer communities and open-source ecosystems",
      "Delivering high-reliability software solutions with measurable impact"
    ],
    type: "goals",
    icon: "Rocket"
  }
];

