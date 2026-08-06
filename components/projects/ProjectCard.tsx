import Link from "next/link";
import type { Project } from "@/data/projects";
import { placeholderImage } from "@/lib/placeholder";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="col-xl-4 col-md-6 col-12 mb-24">
      <div className="bix-project-card">
        <div className="project-image">
          <Link href={`/projects/${project.slug}`}>
            <div className="overlay-project-card" />
            <img src={project.image ?? placeholderImage(project.title)} alt={project.title} />
          </Link>
        </div>
        <div className="project-contact">
          <h5>
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </h5>
          <span>{project.tech.slice(0, 3).join(" | ")}</span>
          <p>
            {project.tagline}{" "}
            <Link href={`/projects/${project.slug}`}>Read More</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
