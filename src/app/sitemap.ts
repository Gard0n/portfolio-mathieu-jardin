import { MetadataRoute } from "next";
import { siteContent } from "@/content/siteContent";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteContent.site.url;
  const staticRoutes = ["", "/about", "/projects", "/course-portfolio", "/contact"];
  const projectRoutes = siteContent.projects.items.map(
    (project) => `/projects/${project.slug}`
  );

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
