import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "/",
      lastModified: "2025-11-06",
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "/about",
      lastModified: "2025-11-06",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "/admissions",
      lastModified: "2025-11-06",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "/academics",
      lastModified: "2025-11-06",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "/events",
      lastModified: "2025-11-06",
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "/contact",
      lastModified: "2025-11-06",
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
