"use client";

import { testimonials } from "@/data/testimonials";
import { placeholderImage } from "@/lib/placeholder";
import { useSlider } from "@/lib/use-slider";

export function TestimonialsSection() {
  const [index, setIndex] = useSlider(testimonials.length);

  return (
    <section className="section-testimonials padding-tb-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bix-banner" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
              <h4>
                Echoes of <span>Brilliance</span>
              </h4>
            </div>
            <div className="bix-banner-line" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
              <span className="inner-border" />
            </div>
          </div>
          <div className="col-12">
            <div className="bix-testimonials" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800">
              <div className="inner-banner">
                <h4>Testimonials</h4>
              </div>
              <div className="testimonials-slider">
                <div
                  className="testimonials-slider-track"
                  style={{ transform: `translateX(-${index * 100}%)` }}
                >
                  {testimonials.map((t) => (
                    <div className="testimonials-slider-slide" key={t.name}>
                      <div className="bix-testimonials-inner">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="testimonials-image">
                              <img src={placeholderImage(t.name)} alt={t.name} />
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="testimonials-contact">
                              <h4>{t.name}</h4>
                              <span>({t.company})</span>
                              <div className="inner-contact">
                                <p>&quot;{t.quote}&quot;</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="slider-dots">
                {testimonials.map((item, i) => (
                  <button
                    key={item.name}
                    type="button"
                    aria-label={`Show testimonial from ${item.name}`}
                    onClick={() => setIndex(i)}
                    className={`slider-dot${i === index ? " active" : ""}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
