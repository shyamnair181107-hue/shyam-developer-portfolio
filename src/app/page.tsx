import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Journey } from "@/components/Journey";
import { Achievements } from "@/components/Achievements";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Achievements />
      <Resume />
      <Contact />
    </>
  );
}

