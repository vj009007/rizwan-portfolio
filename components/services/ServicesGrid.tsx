import type { Service } from "@/data/services";

export function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <div className="row mb-minus-24">
      {services.map((service) => (
        <div className="col-xl-3 col-md-6 col-12 mb-24" key={service.title} data-aos="fade-up" data-aos-duration="2000">
          <div className={`bix-services ${service.bgClass}`}>
            <div className="services-image">
              <div className="inner-image">
                <span className="ring" />
                <img src={service.image} alt={service.title} />
              </div>
            </div>
            <div className="services-contact">
              <h5>{service.title}</h5>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
