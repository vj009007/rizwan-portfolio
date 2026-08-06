import Link from "next/link";
import { profile } from "@/data/profile";
import { SkillsShowcase } from "@/components/shared/SkillsShowcase";

export function AboutHome() {
  return (
    <section className="section-about padding-tb-50" id="about">
      <div className="container">
        <div className="row mb-minus-30">
          <div className="col-12">
            <div className="bix-banner" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
              <h4>
                About <span>Me</span>
              </h4>
            </div>
            <div className="bix-banner-line" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
              <span className="inner-border" />
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-6 order-xl-1 order-md-2 mb-30"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="400"
          >
            <div className="bix-about-contact">
              <h5>&ldquo;Creativity bleeds from the pen of inspiration.&rdquo;</h5>
              <p>{profile.aboutTeaser}</p>
              <div className="about-name">
                <h6>{profile.title}</h6>
                <p>{profile.name}</p>
                <div className="inner-sign-items">
                  <img src={profile.signature} alt={`${profile.name} signature`} />
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-xl-4 col-12 order-xl-2 order-md-1 mb-30"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="600"
          >
            <div className="bix-about-img">
              <img src={profile.photo} alt={profile.name} />
              <div className="bix-rounded-circle">
                <Link href="/about">
                  <svg viewBox="0 0 100 100" width="100" height="100">
                    <defs>
                      <path id="circle" d=" M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                    </defs>
                    <text>
                      <textPath xlinkHref="#circle">About Me&nbsp; - About Me &nbsp;-&nbsp;About Me &nbsp;-</textPath>
                    </text>
                  </svg>
                  <div className="inner-contact">
                    <i className="ri-arrow-right-up-line" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 order-xl-3 order-md-3 mb-30">
            <SkillsShowcase id="progress" />
          </div>
        </div>
      </div>
    </section>
  );
}
