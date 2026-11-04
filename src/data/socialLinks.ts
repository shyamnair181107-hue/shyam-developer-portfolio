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
    url: "https://github.com/shyamnair181107-hue",
    icon: "Github"
  },
  {
    platform: "LinkedIn",
    label: "LinkedIn Profile",
    url: "https://www.linkedin.com/in/shyam-nair-9b9090423?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: "Linkedin"
  },
  {
    platform: "Email",
    label: "shyamnair181107@gmail.com",
    url: "mailto:shyamnair181107@gmail.com",
    icon: "Mail"
  }
];

export const contactDetails = {
  // Replace with your real contact information:
  email: "shyamnair181107@gmail.com",
  phone: "+91 9324351955",
  location: "India",
  githubUrl: "https://github.com/shyamnair181107-hue",
  linkedinUrl: "https://www.linkedin.com/in/shyam-nair-9b9090423?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  status: "Available for internships, technical hackathons & open source collaboration",
};
