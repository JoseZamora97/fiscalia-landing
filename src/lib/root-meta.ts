import type { Metadata, Viewport } from "next";
import { dict } from "@/content";
import type { Lang } from "./i18n";
import { SITE } from "./site";

/** Shared shell metadata for each language's root layout. */
export function rootMetadata(lang: Lang): Metadata {
  const d = dict(lang);

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: `${SITE.name} — ${d.tagline}`,
      template: `%s | ${SITE.name}`,
    },
    description: d.description,
    applicationName: SITE.name,
    category: "technology",
    keywords: d.keywords,
    authors: [{ name: SITE.company }],
    creator: SITE.company,
    publisher: SITE.company,
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    formatDetection: { telephone: false },
  };
}

export const rootViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f8" },
    { media: "(prefers-color-scheme: dark)", color: "#16181c" },
  ],
  width: "device-width",
  initialScale: 1,
};
