import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { blogPosts } from "@/data/blog";
import { placeholderImage } from "@/lib/placeholder";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on front-end development, design-to-code, and WordPress.",
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumb title="Blog" />

      <section className="section-blog padding-t-50 padding-b-100">
        <div className="container">
          <div className="row mb-minus-24">
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
      </section>
    </>
  );
}
