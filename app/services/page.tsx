import type { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { TestimonialsSection } from "@/components/shared/TestimonialsSection";
import { services } from "@/data/services";
import { pricingPlans } from "@/data/pricing";
import { faqs } from "@/data/faq";
import { HireMeTriggerButton } from "@/components/contact/HireMeTriggerButton";

export const metadata: Metadata = {
  title: "Services",
  description: "Front-end development, design-to-code conversion, and WordPress/ACF services.",
};

const half = Math.ceil(faqs.length / 2);
const faqColumns = [faqs.slice(0, half), faqs.slice(half)];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb title="Services" />

      <section className="section-services padding-tb-50">
        <div className="container">
          <div className="row mb-minus-24">
            <div className="col-12">
              <div className="bix-banner" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
                <h4>
                  Why Hire Me <br /> For Your Next <span>Project</span>
                </h4>
              </div>
              <div className="bix-banner-line" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
                <span className="inner-border" />
              </div>
            </div>
          </div>
          <ServicesGrid services={services} />
        </div>
      </section>

      <section className="section-price padding-tb-50">
        <div className="container">
          <div className="row mb-minus-24">
            <div className="col-12">
              <div className="bix-banner" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
                <h4>
                  Price <span>Plans</span>
                </h4>
              </div>
              <div className="bix-banner-line" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
                <span className="inner-border" />
              </div>
            </div>
            {pricingPlans.map((plan) => (
              <div className="col-xl-3 col-sm-6 col-12 mb-24" key={plan.name} data-aos="fade-up" data-aos-duration="2000">
                <div className="bix-services-box">
                  <div className="services-header">
                    <span>{plan.name}</span>
                    <h4>
                      ${plan.price} <span>/ {plan.period}</span>
                    </h4>
                  </div>
                  <div className="services-inner-contact">
                    <ul>
                      {plan.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <div className="buttons">
                      <HireMeTriggerButton className="bix-button">Get in touch</HireMeTriggerButton>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-faq padding-tb-50">
        <div className="container">
          <div className="row mb-minus-24">
            <div className="col-12">
              <div className="bix-banner" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
                <h4>
                  Common <span>Inquiries</span>
                </h4>
              </div>
              <div className="bix-banner-line" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
                <span className="inner-border" />
              </div>
            </div>
            {faqColumns.map((column, colIndex) => (
              <div className="col-lg-6 col-12 mb-24" key={colIndex}>
                <div className="bix-faq" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
                  <div className="accordion" id={`accordionExample${colIndex}`}>
                    {column.map((faq, i) => {
                      const id = `faqCollapse${colIndex}-${i}`;
                      return (
                        <div className="accordion-item" key={faq.question}>
                          <h2 className="accordion-header">
                            <button
                              className={`accordion-button${i === 0 ? "" : " collapsed"}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#${id}`}
                              aria-expanded={i === 0}
                              aria-controls={id}
                            >
                              {faq.question}
                            </button>
                          </h2>
                          <div
                            id={id}
                            className={`accordion-collapse collapse${i === 0 ? " show" : ""}`}
                            data-bs-parent={`#accordionExample${colIndex}`}
                          >
                            <div className="accordion-body">{faq.answer}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
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
