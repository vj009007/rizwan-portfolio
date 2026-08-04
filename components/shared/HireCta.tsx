import { HireMeTriggerButton } from "@/components/contact/HireMeTriggerButton";

export function HireCta({ marginClass = "margin-tb-50" }: { marginClass?: string }) {
  return (
    <section className={`section-hire ${marginClass}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bix-hire-banner">
              <div className="overlay" />
              <div className="bix-hire-contact">
                <h2 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
                  Good <span>Idea</span>
                </h2>
                <h4 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
                  Why not we bond each other?
                </h4>
                <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
                  Available for freelance and contract work alongside my full-time role — send a message about your
                  project and I&apos;ll get back to you.
                </p>
                <div className="inner-circle-items" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800">
                  <div className="bix-rounded-circle">
                    <HireMeTriggerButton>
                      <svg viewBox="0 0 100 100" width="140" height="140">
                        <defs>
                          <path id="hire-circle" d=" M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                        </defs>
                        <text>
                          <textPath xlinkHref="#hire-circle">Hire Me - Hire Me - Hire Me - Hire -</textPath>
                        </text>
                      </svg>
                      <div className="inner-contact">
                        <i className="ri-arrow-right-up-line" />
                      </div>
                    </HireMeTriggerButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
