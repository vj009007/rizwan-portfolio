import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { AboutHome } from "@/components/home/AboutHome";
import { AchieveTabs } from "@/components/home/AchieveTabs";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { HireCta } from "@/components/shared/HireCta";
import { TestimonialsSection } from "@/components/shared/TestimonialsSection";
import { BlogTeaser } from "@/components/home/BlogTeaser";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutHome />
      <AchieveTabs />

      <section className="section-services padding-tb-50">
        <div className="container">
          <ServicesGrid services={services.slice(0, 4)} />
        </div>
      </section>

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
              <div className="item-grid" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
                <div className="row mb-minus-24">
                  {projects.slice(0, 6).map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
              </div>
              <div className="see-all-btn-wrap">
                <Link href="/projects" className="bix-button">
                  See All Projects <i className="ri-arrow-right-up-line" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HireCta />
      <TestimonialsSection />
      <BlogTeaser />
    </>
  );
}
