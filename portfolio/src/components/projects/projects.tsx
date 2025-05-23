"use client";

import { useEffect, useRef, useState } from "react";
import ProjectCard from "./project-card";
import { projects } from "@/data/projects";

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  /* Handle scroll on projects */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, []);

  /* Handle hover on projects */
  const [hovededProject, setHovededProject] = useState(-1);

  return (
    <div
      ref={scrollRef}
      className="overflow-x-auto no-scrollbar w-full"
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="flex w-max px-2 py-2">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              onMouseEnter={() => setHovededProject(index)}
              onMouseLeave={() => setHovededProject(-1)}
              className={`px-2 ${hovededProject !== -1 && hovededProject !== index && "sm:opacity-20"} transition`}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                type={project.type}
                stack={project.stack}
                prodUrl={project.prodUrl}
                repoUrl={project.repoUrl}
                dev={project.dev}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
