import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const PATHS: {
  path: string;
  changeFrequency: NonNullable<
    MetadataRoute.Sitemap[number]["changeFrequency"]
  >;
  priority: number;
}[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/contact-us", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.5 },
  { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.5 },
  {
    path: "/request-account-deletion",
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  return PATHS.map(({ path, changeFrequency, priority }) => ({
    url: path === "" ? base : `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
