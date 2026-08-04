import type { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { HireCta } from "@/components/shared/HireCta";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of front-end, WordPress, and Next.js projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <Breadcrumb title="Projects" />

      <section className="section-projects padding-tb-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bix-banner" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
                <h4>
                  Featured <span>Projects</span>
                </h4>
              </div>
              <div className="bix-banner-line" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
                <span className="inner-border" />
              </div>
            </div>
            <div className="col-lg-12">
              <ProjectFilter projects={projects} />
            </div>
          </div>
        </div>
      </section>

      <HireCta marginClass="margin-t-50" />
    </>
  );
}
