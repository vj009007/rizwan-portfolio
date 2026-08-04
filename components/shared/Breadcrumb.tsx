import Link from "next/link";

export function Breadcrumb({ title }: { title: string }) {
  return (
    <section className="section-breadcrumb margin-b-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bix-breadcrumb">
              <div className="breadcrumb-overlay" />
              <div className="breadcrumb-contact">
                <h4>{title}</h4>
                <h5>
                  <span>
                    <Link href="/">Home</Link>
                  </span>
                  <span>
                    <i className="ri-arrow-right-s-line" />
                  </span>
                  <a href="#" aria-disabled="true" className="disabled">
                    {title}
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
