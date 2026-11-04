export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    label: "GitHub Profile",
    url: "https://github.com",
    icon: "Github"
  },
  {
    platform: "LinkedIn",
    label: "LinkedIn Profile",
    url: "https://linkedin.com",
    icon: "Linkedin"
  },
  {
    platform: "Email",
    label: "contact@shyamsivadasan.dev",
    url: "mailto:contact@shyamsivadasan.dev",
    icon: "Mail"
  }
];

export const contactDetails = {
  // Replace with your real contact information:
  email: "contact@shyamsivadasan.dev",
  phone: "+91 00000 00000",
  location: "India",
  githubUrl: "https://github.com",
  linkedinUrl: "https://linkedin.com",
  status: "Available for internships, technical hackathons & open source collaboration",
};
