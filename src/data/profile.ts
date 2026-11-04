export interface ProfileData {
  fullName: string;
  brandInitials: string;
  professionalRole: string;
  statusLabel: string;
  academicLevel: string;
  branch: string;
  institution: string;
  institutionState: string;
  country: string;
  cgpa: string;
  primaryTagline: string;
  supportingTagline: string;
  shortBio: string;
  aboutIntro: string[];
  infoCards: {
    title: string;
    description: string;
    icon: string;
  }[];
  profileImage: string;
  resumeUrl: string;
  resumeImageUrl: string;
}

export const profileData: ProfileData = {
  fullName: "Shyam Sivadasan Nair",
  brandInitials: "SN",
  professionalRole: "Computer Science Engineering Student | Aspiring Software Developer",
  statusLabel: "OPEN TO INTERNSHIPS & OPPORTUNITIES",
  academicLevel: "Second Year B.Tech (2025 – 2029 Expected)",
  branch: "Computer Engineering",
  institution: "Pillai College of Engineering, Navi Mumbai",
  institutionState: "Navi Mumbai, Maharashtra",
  country: "India",
  cgpa: "9.64 / 10.0 (First Year)",
  primaryTagline: "Turning Curiosity Into Code. Turning Ideas Into Reality.",
  supportingTagline: "Building Digital Experiences, Exploring Technology and Engineering What's Next.",
  shortBio:
    "Second-year Computer Engineering undergraduate at Pillai College of Engineering (9.64 CGPA) with hands-on experience in software development, Python, Flask, React, and relational databases. Passionate about solving practical problems through clean architecture.",
  aboutIntro: [
    "I'm Shyam Sivadasan Nair, a Computer Engineering student at Pillai College of Engineering, Navi Mumbai, with a proven academic record (9.64 CGPA) and industry experience as a Software Development Intern at Tripple One Solutions.",
    "I have built and deployed full-stack web platforms, collaborated in hackathon initiatives (including RakshaNet and SIH 2026), and engineered real-time systems using Python, Flask, React, and MySQL.",
    "My technical journey is driven by deep curiosity, structured problem-solving, and the discipline to write clean, maintainable, and high-performance software."
  ],
  infoCards: [
    {
      title: "EDUCATION",
      description: "Pillai College of Engineering, Navi Mumbai — B.Tech Computer Engineering (First Year CGPA: 9.64/10.0).",
      icon: "GraduationCap"
    },
    {
      title: "EXPERIENCE",
      description: "Software Development Intern at Tripple One Solutions — Python, OOP, and web module development.",
      icon: "Briefcase"
    },
    {
      title: "PROJECTS",
      description: "Campus Eats, Grand Azure, RakshaNet, and FDR MITRA workflow systems.",
      icon: "Sparkles"
    },
    {
      title: "GOAL",
      description: "Securing impactful software engineering internships and contributing to production systems.",
      icon: "Target"
    }
  ],
  profileImage: "/images/profile.jpg",
  resumeUrl: "/resume.pdf",
  resumeImageUrl: "/images/resume.jpg"
};
