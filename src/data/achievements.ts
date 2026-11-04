export type AchievementCategory =
  | "All"
  | "Hackathons"
  | "Competitions"
  | "Certifications"
  | "Technical Events"
  | "Leadership"
  | "Internships";

export interface AchievementItem {
  id: string;
  category: "Hackathons" | "Competitions" | "Certifications" | "Technical Events" | "Leadership" | "Internships";
  title: string;
  organization: string;
  date: string;
  description: string;
  certificateImage?: string;
  verificationUrl?: string;
  badge?: string;
}

export const achievementCategories: AchievementCategory[] = [
  "All",
  "Hackathons",
  "Competitions",
  "Certifications",
  "Technical Events",
  "Leadership",
  "Internships"
];

// Honest showcase: starter active milestone without fabricating certificates or credentials.
// Users can easily add their certificates or accomplishments here.
export const achievementsData: AchievementItem[] = [
  {
    id: "sih-2026-prep",
    category: "Hackathons",
    title: "Smart India Hackathon (SIH 2026) Initiative",
    organization: "National Innovation / SIH Platform",
    date: "In Active Preparation (2026)",
    description:
      "Active team initiative developing FDR MITRA — an automated Fixed Deposit Receipt and security deposit management portal engineered to streamline institutional verification and compliance.",
    badge: "Under Development"
  },
  {
    id: "campus-hack-collab",
    category: "Technical Events",
    title: "Collegiate Tech Symposia & Coding Collaborations",
    organization: "Computer Science Engineering Department",
    date: "Second Year (2025 - Present)",
    description:
      "Participating in engineering workshops, coding jams, and collaborative project demonstrations with peer developers, focusing on modern web stacks and systems engineering.",
    badge: "Ongoing"
  }
];

