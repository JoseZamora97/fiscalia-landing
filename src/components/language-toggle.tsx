"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LANGS, LANG_LABEL, langOf, switchLangPath, type Lang } from "@/lib/i18n";

const FULL_NAME: Record<Lang, string> = { en: "English", es: "Español" };

export function LanguageToggle({ label }: { label: string }) {
  const pathname = usePathname() || "/";
  const current = langOf(pathname);

  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center rounded-md border border-border-strong bg-bg-elev p-0.5"
    >
      {LANGS.map((lang) => {
        const active = lang === current;
        return (
          <Link
            key={lang}
            href={switchLangPath(pathname, lang)}
            hrefLang={lang}
            aria-current={active ? "true" : undefined}
            title={FULL_NAME[lang]}
            className={`rounded-[5px] px-2 py-1 text-[11.5px] font-semibold leading-none transition ${
              active
                ? "bg-accent-soft text-accent-text"
                : "text-fg-dim hover:text-fg"
            }`}
          >
            {LANG_LABEL[lang]}
          </Link>
        );
      })}
    </div>
  );
}
