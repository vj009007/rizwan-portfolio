import { profile } from "@/data/profile";
import { HireMeTriggerButton } from "@/components/contact/HireMeTriggerButton";

export function Hero() {
  const [firstName, ...rest] = profile.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section className="section-hero padding-t-100 padding-b-50">
      <div className="first-name">{firstName}</div>
      <div className="last-name">{lastName}</div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="bix-hero-img" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
              <div className="hero-inner-img">
                <img src={profile.heroPhoto} alt={profile.name} className="hero-parallax" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="bix-hero-contact">
              <h4 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
                Hi, I am
              </h4>
              <h1 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="700">
                {profile.name}
              </h1>
              <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800">
                I am a <span>{profile.title}</span>
              </p>
              <div className="bix-buttons" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
                <a href={profile.resumeUrl} download={profile.resumeFilename} className="bix-button">
                  Download CV
                </a>
                <HireMeTriggerButton className="bix-button">
                  Hire Me <i className="ri-arrow-right-up-line" />
                </HireMeTriggerButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
