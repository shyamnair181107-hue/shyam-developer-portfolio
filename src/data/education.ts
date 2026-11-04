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
    period: "2025 Completion",
    badge: "76.33% HSC",
    title: "Arya Gurukul International Junior College, Airoli",
    subtitle: "Higher Secondary Certificate (HSC — Class XII)",
    description:
      "Completed higher secondary education in science and mathematics stream, establishing strong mathematical reasoning and quantitative problem-solving foundations.",
    highlights: [
      "Physics, Chemistry, and Advanced Mathematics",
      "Foundational computer science concepts and logical problem solving",
      "Ranked among top percentile students in academic coursework"
    ],
    type: "academic",
    icon: "GraduationCap"
  },
  {
    period: "2025 – 2029 (Expected)",
    badge: "First Year CGPA: 9.64 / 10.0",
    title: "Pillai College of Engineering, Navi Mumbai",
    subtitle: "Bachelor of Technology (B.Tech) in Computer Engineering",
    description:
      "Pursuing undergraduate studies with strong academic excellence, securing a 9.64 CGPA in the first year while building deep foundations across algorithms, operating systems, and computer engineering fundamentals.",
    highlights: [
      "Data Structures and Algorithms (DSA)",
      "Object-Oriented Programming (OOP) in Python, C, and Java",
      "Database Management Systems (DBMS) & Relational SQL Schema Design",
      "Operating Systems & Computer Networks",
      "Discrete Mathematics and Computational Logic"
    ],
    type: "academic",
    icon: "GraduationCap"
  },
  {
    period: "March 2026 – May 2026",
    badge: "Industry Experience",
    title: "Tripple One Solutions — Software Development Intern",
    subtitle: "Web Modules, Python Engineering & Version Control",
    description:
      "Contributed to software and web module development, testing, and optimization in a collaborative engineering team environment.",
    highlights: [
      "Developed, tested, and optimized software modules using Python and modern web technologies",
      "Collaborated with engineers to debug application logic and implement clean OOP exception handling",
      "Maintained structured technical documentation and Git/GitHub version control workflows",
      "Delivered assigned sprint milestones on schedule in an agile development workflow"
    ],
    type: "development",
    icon: "Code"
  },
  {
    period: "Upcoming Horizons",
    badge: "Active Pursuit",
    title: "Full-Stack Software Roles, Hackathons & Scalable Systems",
    subtitle: "Targeting Challenging Technical Internships",
    description:
      "Actively seeking challenging software engineering and full-stack developer internships where practical programming skills and academic rigor can drive production value.",
    highlights: [
      "Securing competitive software engineering internships for summer & fall",
      "Participating in national hackathons (including Smart India Hackathon 2026 track)",
      "Deepening expertise in distributed systems, real-time protocols, and cloud computing",
      "Engineering scalable open-source developer tooling"
    ],
    type: "goals",
    icon: "Rocket"
  }
];
