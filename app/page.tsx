import About from "@/components/About";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import { SectionDivider } from "@/components/SectionDivider";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    // add top padding to avoid being covered by the fixed header
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
