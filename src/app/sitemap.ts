import type { MetadataRoute } from "next";
import { USE_CASE_SLUGS } from "@/content";
import { LANGS, localePath } from "@/lib/i18n";
import { SITE } from "@/lib/site";

type Entry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const PATHS: Entry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/use-cases", changeFrequency: "monthly", priority: 0.8 },
  ...USE_CASE_SLUGS.map((slug) => ({
    path: `/use-cases/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  })),
  { path: "/privacy", changeFrequency: "yearly", priority: 0.4 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return PATHS.flatMap((entry) =>
    LANGS.map((lang) => ({
      url: `${SITE.url}${localePath(lang, entry.path)}`,
      lastModified: now,
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
      alternates: {
        languages: Object.fromEntries(
          LANGS.map((l) => [l, `${SITE.url}${localePath(l, entry.path)}`]),
        ),
      },
    })),
  );
}
