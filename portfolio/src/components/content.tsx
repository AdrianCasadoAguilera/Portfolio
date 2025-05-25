import Hero from "./hero";
import Section from "./section";
import { Train } from "lucide-react";
import Working from "./working";
import WhoAmI from "./whoami/who-am-i";
import Projects from "./projects/projects";
import Experience from "./experience/experience";

export default function Content() {
  return (
    <div className="w-full flex-1 overflow-y-scroll snap-mandatory snap-y">
      <div className="max-w-3xl mx-auto ">
        <Hero />

        {/* Train icon */}
        <div className="sticky translate-0.5 translate-y-[1.5rem] lg:translate-y-[4.5rem] top-0 z-10 mt-10 mb-[calc(100svh-7.5rem)] flex h-10 w-10 items-center justify-center rounded-full bg-foreground">
          <Train className="text-background" />
        </div>

        <div className="relative">
          {/* Metro line */}
          <div className="absolute -bottom-[3.25rem] lg:-bottom-[6.25rem] left-4 top-10 lg:top-[5rem] w-3 lg:w-4 bg-amber-400" />

          <Section title="who-am-i">
            <WhoAmI />
          </Section>
          <Section title="experience">
            <Experience />
          </Section>
          <Section title="projects">
            <Projects />
          </Section>
        </div>
        <Section title="skills">
          <Working />
        </Section>
      </div>

      <footer className="h-52 snap-end bg-black"></footer>
    </div>
  );
}
