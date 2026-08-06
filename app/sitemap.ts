import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mohdrizwan.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/resume", "/services", "/projects", "/blog"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
