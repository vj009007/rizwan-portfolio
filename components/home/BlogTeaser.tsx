import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { placeholderImage } from "@/lib/placeholder";

export function BlogTeaser() {
  return (
    <section className="section-blog padding-t-50 padding-b-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bix-banner" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
              <h4>
                Spotlight <span>Stories</span>
              </h4>
            </div>
            <div className="bix-banner-line" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
              <span className="inner-border" />
            </div>
          </div>
          <div className="col-12">
            <div className="row mb-minus-24 justify-content-center">
              {blogPosts.map((post) => (
                <div className="col-md-6 col-12 mb-24" key={post.slug}>
                  <div className="bix-blog-box" data-aos="fade-up" data-aos-duration="2000">
                    <div className="blog-img">
                      <img src={placeholderImage(post.title)} alt={post.title} />
                    </div>
                    <div className="blog-contact">
                      <span>Frontend</span>
                      <h4>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h4>
                      <p>{post.excerpt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
