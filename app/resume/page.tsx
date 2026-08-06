import type { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { profile } from "@/data/profile";
import { education, courses } from "@/data/education";
import { skills, skillCategoryLabels, type SkillCategory } from "@/data/skills";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Resume",
  description: `${profile.name}'s resume — experience, education, and skills.`,
};

const skillCategories = Object.keys(skillCategoryLabels) as SkillCategory[];

export default function ResumePage() {
  return (
    <>
      <Breadcrumb title="Resume" />

      <section className="section-resume padding-t-50 padding-b-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="bix-resume-sidebar">
                <div className="inner-img">
                  <img src={profile.photo} alt={profile.name} />
                </div>
                <div className="inner-contact">
                  <div className="resume-title">
                    <h4>
                      <i className="ri-contacts-fill" />
                      Contact
                    </h4>
                  </div>
                  <div className="resume-contact-info">
                    <ul>
                      <li>
                        <i className="ri-phone-line" />
                        <a href={profile.phoneHref}>{profile.phone}</a>
                      </li>
                      <li>
                        <i className="ri-mail-open-line" />
                        <a href={`mailto:${profile.email}`}>{profile.email}</a>
                      </li>
                      <li>
                        <i className="ri-link" />
                        <a href={profile.linkedin} target="_blank" rel="noreferrer">
                          {profile.linkedinHandle}
                        </a>
                      </li>
                      <li>
                        <i className="ri-map-pin-line" />
                        <span>{profile.location}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="inner-contact">
                  <div className="resume-title">
                    <h4>
                      <i className="ri-book-3-line" />
                      Education
                    </h4>
                  </div>
                  {education.map((item) => (
                    <div className="resume-education-info" key={item.school}>
                      <span>{item.period}</span>
                      <h4>{item.degree}.</h4>
                      <p>{item.school}</p>
                    </div>
                  ))}
                  {courses.map((item) => (
                    <div className="resume-education-info" key={item.name}>
                      <h4>{item.name}.</h4>
                      <p>{item.institute}</p>
                    </div>
                  ))}
                </div>
                <div className="inner-contact">
                  <div className="resume-title">
                    <h4>
                      <i className="ri-settings-5-line" />
                      Skills
                    </h4>
                  </div>
                  {skillCategories.map((category) => (
                    <div className="resume-skills-group" key={category}>
                      <h6>{skillCategoryLabels[category]}</h6>
                      <div className="resume-skill-tags">
                        {skills
                          .filter((skill) => skill.category === category)
                          .map((skill) => (
                            <span className="resume-skill-tag" key={skill.name}>
                              {skill.name}
                            </span>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-12">
              <div className="bix-resume-contact">
                <div className="sub-heading">
                  <div className="inner-img">
                    <img src={profile.photo} alt={profile.name} />
                  </div>
                  <div className="inner-heading">
                    <h4>{profile.name}</h4>
                    <span>{profile.title}</span>
                  </div>
                </div>
                <div className="inner-resume-contact">
                  <div className="resume-about">
                    <div className="inner-title">
                      <h5>About Me</h5>
                    </div>
                    <p>{profile.summary}</p>
                  </div>
                  <div className="resume-experience">
                    <div className="inner-title">
                      <h5>My Experience</h5>
                    </div>
                    {experience.map((item, i) => (
                      <div
                        className={`inner-experience ${i === 0 ? "border-top-radius" : ""} ${
                          i === experience.length - 1 ? "border-bottom-radius" : ""
                        }`}
                        key={item.company}
                      >
                        <h5>{item.company}</h5>
                        <div className="experience-value">
                          <span>- {item.role}</span>
                          <span>{item.period}</span>
                        </div>
                        <p>{item.bullets.join(" ")}</p>
                      </div>
                    ))}
                  </div>
                  <div className="resume-project">
                    <div className="inner-title">
                      <h5>My Projects</h5>
                    </div>
                    {projects.map((item, i) => (
                      <div
                        className={`inner-project ${i === 0 ? "border-top-radius" : ""} ${
                          i === projects.length - 1 ? "border-bottom-radius" : ""
                        }`}
                        key={item.slug}
                      >
                        <h5>{item.title}</h5>
                        <a href={`/projects/${item.slug}`}>View project</a>
                        <p>
                          {item.summary} <strong>Tech:</strong> {item.tech.join(", ")}.
                        </p>
                      </div>
                    ))}
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
