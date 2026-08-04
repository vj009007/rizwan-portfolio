import type { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SkillCard, skillGroups } from "@/components/shared/SkillsShowcase";
import { TestimonialsSection } from "@/components/shared/TestimonialsSection";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name} — ${profile.title}.`,
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb title="About" />

      <section className="section-about padding-tb-50">
        <div className="container">
          <div className="row mb-minus-24">
            <div className="col-lg-6 col-12 mb-24">
              <div className="bix-aboutpage-img">
                <div className="inner-img">
                  <img src={profile.photo} alt={profile.name} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 mb-24">
              <div className="bix-about-contact">
                <div className="bix-banner bix-text-left">
                  <h4>
                    About <span>Me</span>
                  </h4>
                </div>
                <h5>&ldquo;Creativity bleeds from the pen of inspiration.&rdquo;</h5>
                <p>{profile.aboutFull}</p>
                <div className="about-name">
                  <h6>{profile.title}</h6>
                  <p>{profile.name}</p>
                  <div className="inner-sign-items">
                    <img src={profile.signature} alt={`${profile.name} signature`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-Skill padding-tb-50">
        <div className="container">
          <div className="row mb-minus-24" id="progress">
            {skillGroups.map((skill) => (
              <div className="col-lg-4 col-12 mb-24" key={skill.title}>
                <div className="bix-skill bix-block-skill">
                  <SkillCard skill={skill} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </>
  );
}
