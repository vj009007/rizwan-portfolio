import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { blogPosts } from "@/data/blog";
import { profile } from "@/data/profile";
import { placeholderImage } from "@/lib/placeholder";

type Props = { params: Promise<{ slug: string }> };

const categories = ["Frontend Development", "Design to Code", "WordPress & ACF"];

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const index = blogPosts.findIndex((p) => p.slug === slug);
  const post = blogPosts[index];

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <>
      <Breadcrumb title="Blog Detail" />

      <section className="section section-blog-details padding-t-50 padding-b-100">
        <div className="container">
          <div className="row mb-minus-24">
            <div className="col-lg-4 col-12 mb-24">
              <div className="bix-blog-sidebar">
                <div className="inner-details">
                  <div className="blog-image">
                    <img src={profile.photo} alt={profile.name} />
                  </div>
                  <div className="inner-blog-contact">
                    <span>{profile.title}</span>
                    <h4>{profile.name}</h4>
                    <p>{profile.heroTagline}</p>
                  </div>
                </div>
                <div className="bix-categories">
                  <div className="sub-title">
                    <h4>Categories</h4>
                  </div>
                  <div className="inner-categories">
                    <ul>
                      {categories.map((category) => (
                        <li key={category}>
                          <Link href="/blog">{category}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {otherPosts.length > 0 && (
                  <div className="bix-blog-sub-details">
                    {otherPosts.map((p) => (
                      <div className="blog-rows-card" key={p.slug}>
                        <div className="blog-image">
                          <img src={placeholderImage(p.title)} alt={p.title} />
                        </div>
                        <div className="inner-contact">
                          <h5>
                            <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                          </h5>
                          <p>Frontend</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-8 col-12 mb-24">
              <div className="bix-blog-contact">
                <div className="inner-main-contact">
                  <div className="main-blog-image">
                    <img src={placeholderImage(post.title)} alt={post.title} />
                  </div>
                  <div className="main-blog-contact">
                    <div className="main-title">
                      <h4>{post.title}</h4>
                    </div>
                    {post.content.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
