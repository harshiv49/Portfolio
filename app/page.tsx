import About from "@/components/About";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    // add top padding to avoid being covered by the fixed header
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  );
}
