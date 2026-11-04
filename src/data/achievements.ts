export type AchievementCategory =
  | "All"
  | "Academic"
  | "Internships"
  | "Hackathons"
  | "Certifications";

export interface AchievementItem {
  id: string;
  category: "Academic" | "Internships" | "Hackathons" | "Certifications";
  title: string;
  organization: string;
  date: string;
  description: string;
  badge?: string;
  verificationUrl?: string;
}

export const achievementCategories: AchievementCategory[] = [
  "All",
  "Academic",
  "Internships",
  "Hackathons",
  "Certifications"
];

export const achievementsData: AchievementItem[] = [
  {
    id: "academic-excellence",
    category: "Academic",
    title: "Academic Excellence — 9.64 First Year CGPA",
    organization: "Pillai College of Engineering, Navi Mumbai",
    date: "First Year 2025 – 2026",
    description:
      "Secured an outstanding 9.64 CGPA in the First Year of Bachelor of Technology (B.Tech) in Computer Engineering, demonstrating consistent academic rigor and mastery over foundational engineering curriculum.",
    badge: "9.64 / 10.0 CGPA"
  },
  {
    id: "tripple-one-internship",
    category: "Internships",
    title: "Software Development Internship Certificate",
    organization: "Tripple One Solutions",
    date: "March 2026 – May 2026",
    description:
      "Successfully completed a verified Software Development Internship at Tripple One Solutions. Contributed to core Python software modules, bug resolution, OOP architecture, and agile sprint deliveries.",
    badge: "Verified Internship"
  },
  {
    id: "rakshanet-hackathon",
    category: "Hackathons",
    title: "RakshaNet — Safety & Emergency Response Platform",
    organization: "College Internal Hackathon 2026",
    date: "2026 Hackathon",
    description:
      "Collaborated in a 6-member cross-functional team to design, prototype, and pitch RakshaNet — a real-time safety network with responsive frontend UI and Python/Flask REST APIs built under strict hackathon deadlines.",
    badge: "Hackathon Pitch"
  },
  {
    id: "sih-2026-initiative",
    category: "Hackathons",
    title: "Smart India Hackathon (SIH 2026) Initiative",
    organization: "National Innovation / SIH Platform",
    date: "Active Preparation (2026)",
    description:
      "Active team initiative developing FDR MITRA — an automated Fixed Deposit Receipt and security deposit management portal engineered to streamline institutional verification and compliance.",
    badge: "In Active Development"
  }
];
