export type Lang = "en" | "es";

export const LANGS: Lang[] = ["en", "es"];
export const DEFAULT_LANG: Lang = "en";

export const LANG_LABEL: Record<Lang, string> = { en: "EN", es: "ES" };
export const HTML_LANG: Record<Lang, string> = { en: "en", es: "es-ES" };
export const OG_LOCALE: Record<Lang, string> = { en: "en_US", es: "es_ES" };

// English paths are canonical; Spanish lives under /es with a translated segment.
const USE_CASES_SEGMENT: Record<Lang, string> = {
  en: "use-cases",
  es: "casos-de-uso",
};

/** Turns a canonical (English) path into the path for `lang`. */
export function localePath(lang: Lang, path: string): string {
  const canonical = path === "/" ? "" : path;
  if (lang === "en") return canonical || "/";
  return `/es${canonical.replace("/use-cases", `/${USE_CASES_SEGMENT.es}`)}`;
}

/** Strips the locale prefix from a live pathname, returning the canonical path. */
export function canonicalPath(pathname: string): string {
  const stripped = pathname === "/es" ? "" : pathname.replace(/^\/es(?=\/)/, "");
  return stripped.replace(`/${USE_CASES_SEGMENT.es}`, "/use-cases") || "/";
}

export function langOf(pathname: string): Lang {
  return pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
}

/** The equivalent of `pathname` in the other language. */
export function switchLangPath(pathname: string, to: Lang): string {
  return localePath(to, canonicalPath(pathname));
}

/**
 * `alternates` metadata for a canonical path: self-referencing canonical plus
 * an hreflang entry per language.
 */
export function alternates(lang: Lang, path: string) {
  return {
    canonical: localePath(lang, path),
    languages: {
      en: localePath("en", path),
      es: localePath("es", path),
      "x-default": localePath(DEFAULT_LANG, path),
    },
  };
}
