import { experience } from "@/data/experience";
import { education, courses } from "@/data/education";

type Item = { year: string; title: string; subtitle: string; description: string };

const educationItems: Item[] = [
  ...education.map((e) => ({
    year: e.period,
    title: e.degree,
    subtitle: e.school,
    description: `Studied ${e.degree} at ${e.school} from ${e.period}.`,
  })),
  ...courses.map((c) => ({
    year: c.period,
    title: c.name,
    subtitle: c.institute,
    description: `Completed the ${c.name} certification course at ${c.institute}.`,
  })),
];

const experienceItems: Item[] = experience.map((e) => ({
  year: e.period,
  title: e.role,
  subtitle: e.company,
  description: e.bullets.join(" "),
}));

function AchievementColumns({ items }: { items: Item[] }) {
  const left = items.filter((_, i) => i % 2 === 0);
  const right = items.filter((_, i) => i % 2 === 1);

  return (
    <div className="row">
      <div className="col-12">
        <div className="bix-achievement">
          <div className="bix-achievement-inner border-r">
            {left.map((item, i) => (
              <div key={item.title} className={`bix-achievement-box left${i > 0 ? " mt-150" : ""}`}>
                {item.year && (
                  <div className="achievement-year">
                    <span>{item.year}</span>
                  </div>
                )}
                <h4>
                  {item.title} <span>- {item.subtitle}</span>
                </h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div className="bix-achievement-inner border-l">
            {right.map((item) => (
              <div key={item.title} className="bix-achievement-box right mt-150">
                {item.year && (
                  <div className="achievement-year">
                    <span>{item.year}</span>
                  </div>
                )}
                <h4>
                  {item.title} <span>- {item.subtitle}</span>
                </h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AchieveTabs() {
  return (
    <section className="section-achievement padding-tb-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bix-banner" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
              <h4>
                What I <span>Achieve</span>
              </h4>
            </div>
            <div className="bix-banner-line" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
              <span className="inner-border" />
            </div>
          </div>
          <div className="col-12">
            <div className="bix-activity-tabs">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link active"
                    id="education-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#education"
                    role="tab"
                    aria-controls="education"
                    aria-selected="true"
                  >
                    Education
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link"
                    id="experience-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#experience"
                    role="tab"
                    aria-controls="experience"
                    aria-selected="false"
                  >
                    Experience
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="education" role="tabpanel" aria-labelledby="education-tab">
                  <AchievementColumns items={educationItems} />
                </div>
                <div className="tab-pane fade" id="experience" role="tabpanel" aria-labelledby="experience-tab">
                  <AchievementColumns items={experienceItems} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
