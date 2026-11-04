export interface ProfileData {
  fullName: string;
  brandInitials: string;
  professionalRole: string;
  statusLabel: string;
  academicLevel: string;
  branch: string;
  institutionState: string;
  country: string;
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
}

export const profileData: ProfileData = {
  fullName: "Shyam Sivadasan Nair",
  brandInitials: "SN",
  professionalRole: "Computer Science Engineering Student | Aspiring Software Developer | Technology Enthusiast",
  statusLabel: "OPEN TO INTERNSHIPS & COLLABORATIONS",
  academicLevel: "Second Year Engineering",
  branch: "Computer Science Engineering",
  institutionState: "Undergraduate Studies",
  country: "India",
  primaryTagline: "Turning Curiosity Into Code. Turning Ideas Into Reality.",
  supportingTagline: "Building Digital Experiences, Exploring Technology and Engineering What's Next.",
  shortBio:
    "I enjoy transforming ideas into meaningful digital experiences. I explore technologies, build practical applications and continuously challenge myself to become a better engineer.",
  aboutIntro: [
    "I'm Shyam Sivadasan Nair, a second-year Computer Science Engineering student with a growing passion for software development, problem-solving and emerging technologies.",
    "I enjoy exploring new tools, experimenting with ideas and building applications that solve practical problems.",
    "My journey is driven by curiosity, creativity and the desire to continuously improve my technical capabilities."
  ],
  infoCards: [
    {
      title: "EDUCATION",
      description: "Computer Science Engineering — Second Year Undergraduate.",
      icon: "GraduationCap"
    },
    {
      title: "INTERESTS",
      description: "Software Development, Web Technologies, AI and Problem Solving.",
      icon: "Sparkles"
    },
    {
      title: "MINDSET",
      description: "Continuous Learning, Innovation and Collaboration.",
      icon: "Compass"
    },
    {
      title: "GOAL",
      description: "Becoming a skilled software engineer and creating meaningful technology solutions.",
      icon: "Target"
    }
  ],
  // User can place their actual photo at /images/profile.jpg or update this path
  profileImage: "/images/profile.svg",
  resumeUrl: "/resume.pdf"
};
