import type { Metadata } from "next";
import { dict } from "@/content";
import { alternates, OG_LOCALE, localePath, type Lang } from "./i18n";
import { SITE } from "./site";

/** Builds per-page metadata: title, description, canonical and hreflang set. */
export function pageMeta(
  lang: Lang,
  {
    path,
    title,
    description,
    absoluteTitle = false,
  }: {
    path: string;
    title: string;
    description: string;
    absoluteTitle?: boolean;
  },
): Metadata {
  const d = dict(lang);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: d.keywords,
    alternates: alternates(lang, path),
    openGraph: {
      type: "website",
      locale: OG_LOCALE[lang],
      url: localePath(lang, path),
      siteName: SITE.name,
      title,
      description,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
