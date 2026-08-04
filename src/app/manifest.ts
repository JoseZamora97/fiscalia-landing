import type { MetadataRoute } from "next";
import { dict } from "@/content";
import { DEFAULT_LANG, HTML_LANG } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.name,
    description: dict(DEFAULT_LANG).description,
    start_url: "/",
    display: "standalone",
    background_color: "#16181c",
    theme_color: "#ff5c5c",
    lang: HTML_LANG[DEFAULT_LANG],
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
