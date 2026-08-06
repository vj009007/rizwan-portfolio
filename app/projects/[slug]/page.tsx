import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { projects } from "@/data/projects";
import { placeholderImage } from "@/lib/placeholder";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  if (!project) {
    notFound();
  }

  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const recent = projects[(index + 1) % projects.length];

  return (
    <>
      <Breadcrumb title={project.title} />

      <section className="section-single-projects padding-t-50 padding-b-100">
        <div className="container">
          <div className="row mb-minus-24">
            <div className="col-xl-3 col-lg-4 col-12 mb-24">
              <div className="bix-single-projects-sidebar">
                <div className="bix-category">
                  <div className="sub-title">
                    <h4>Category</h4>
                  </div>
                  <div className="category-contact">
                    {categories.map((category) => (
                      <p key={category}>
                        <Link href="/projects">{category}</Link>
                      </p>
                    ))}
                  </div>
                </div>
                <div className="bix-recent-post">
                  <div className="bix-recent-card">
                    <div className="recent-img">
                      <img src={recent.image ?? placeholderImage(recent.title)} alt={recent.title} />
                    </div>
                    <div className="recent-contact">
                      <span>{recent.category}</span>
                      <h4>
                        <Link href={`/projects/${recent.slug}`}>{recent.title}</Link>
                      </h4>
                      <p>{recent.tagline}</p>
                    </div>
                  </div>
                </div>
                <div className="bix-latest-gallery">
                  <div className="sub-title">
                    <h4>Other Projects</h4>
                  </div>
                  <div className="bix-gallery-card">
                    {projects
                      .filter((p) => p.slug !== project.slug)
                      .map((p) => (
                        <Link href={`/projects/${p.slug}`} key={p.slug}>
                          <img src={p.image ?? placeholderImage(p.title)} alt={p.title} />
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-12 mb-24">
              <div className="bix-single-projects-contact">
                <div className="row mb-minus-24">
                  <div className="col-xl-5 col-12 mb-24">
                    <div className="inner-projects-img">
                      <img src={project.image ?? placeholderImage(project.title)} alt={project.title} />
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="project-live-badge"
                          aria-label={`Visit live site for ${project.title}`}
                        >
                          <i className="ri-arrow-right-up-line" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="col-xl-7 col-12 mb-24">
                    <div className="inner-projects-contact">
                      <div className="sub-title">
                        <h4>{project.title}</h4>
                      </div>
                      <p>{project.summary}</p>
                      {/* {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="bix-button project-live-cta"
                        >
                          Visit Live Site <i className="ri-arrow-right-up-line" />
                        </a>
                      )} */}
                      <div className="inner-contact">
                        <h4>Why This Project</h4>
                        <ul>
                          {project.highlights.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bix-product-details">
                  <div className="row mb-minus-24">
                    <div className="col-xl-3 col-md-6 col-sm-6 col-12 mb-24">
                      <div className="bix-product-details-card">
                        <h4>Role</h4>
                        <p>{project.role}</p>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-6 col-12 mb-24">
                      <div className="bix-product-details-card">
                        <h4>Category</h4>
                        <p>{project.category}</p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-12 mb-24">
                      <div className="bix-product-details-card">
                        <h4>Tech Stack</h4>
                        <p>{project.tech.join(" · ")}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bix-products-tabs">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        type="button"
                        className="nav-link active"
                        id="details-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#details"
                        role="tab"
                        aria-controls="details"
                        aria-selected="true"
                      >
                        Details
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane fade active show" id="details" role="tabpanel" aria-labelledby="details-tab">
                      <div className="products-tabs-details">
                        <p>{project.overview}</p>
                        <div className="inner-contact">
                          <h4>Features</h4>
                          <ul>
                            {project.features.map((feature) => (
                              <li key={feature}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
