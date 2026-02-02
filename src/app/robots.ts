import { MetadataRoute } from "next";
import { siteContent } from "@/content/siteContent";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${siteContent.site.url}/sitemap.xml`
  };
}
