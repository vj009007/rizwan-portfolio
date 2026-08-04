"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/data/projects";

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const categories = useMemo(() => Array.from(new Set(projects.map((p) => p.category))), [projects]);
  const [active, setActive] = useState("all");

  const visible = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="projects-content">
      <div className="controls bix-projects-tabs" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
        <ul id="filters" className="clearfix">
          <li className={`filter${active === "all" ? " active" : ""}`} onClick={() => setActive("all")}>
            All
          </li>
          {categories.map((category) => (
            <li
              key={category}
              className={`filter${active === category ? " active" : ""}`}
              onClick={() => setActive(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="item-grid" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
        <div className="row mb-minus-24">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
