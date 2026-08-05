import Link from "next/link";
import { dict } from "@/content";
import { localePath, type Lang } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { LanguageToggle } from "@/components/language-toggle";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

export function mailto(lang: Lang) {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(
    dict(lang).requestAccessSubject,
  )}`;
}

/** Resolves a nav entry (a hash or a canonical path) to a localized href. */
function navHref(lang: Lang, href: string) {
  return href.startsWith("#")
    ? `${localePath(lang, "/")}${href}`
    : localePath(lang, href);
}

function Header({ lang }: { lang: Lang }) {
  const d = dict(lang);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--glass-border)] bg-[var(--glass-bg-strong)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link href={localePath(lang, "/")} aria-label={d.homeAria}>
          <Logo />
        </Link>

        <nav aria-label={d.navAria} className="hidden items-center gap-6 lg:flex">
          {d.nav.map((item) => (
            <Link
              key={item.href}
              href={navHref(lang, item.href)}
              className="text-[13.5px] font-medium text-fg-muted transition hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <LanguageToggle label={d.languageLabel} />
          <ThemeToggle labelToLight={d.themeToLight} labelToDark={d.themeToDark} />
        </div>
      </div>
    </header>
  );
}

function Footer({ lang }: { lang: Lang }) {
  const d = dict(lang);

  return (
    <footer className="relative z-10 mt-24 border-t border-border bg-[var(--bg-elev)]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-fg-muted">
              {d.footer.blurb}
            </p>
          </div>

          <div>
            <h2 className="text-[13px] font-semibold text-fg">{d.footer.product}</h2>
            <ul className="mt-4 space-y-2.5 text-[13.5px] text-fg-muted">
              {d.nav.map((item) => (
                <li key={item.href}>
                  <Link href={navHref(lang, item.href)} className="transition hover:text-fg">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[13px] font-semibold text-fg">{d.footer.legal}</h2>
            <ul className="mt-4 space-y-2.5 text-[13.5px] text-fg-muted">
              <li>
                <Link href={localePath(lang, "/privacy")} className="transition hover:text-fg">
                  {d.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href={localePath(lang, "/terms")} className="transition hover:text-fg">
                  {d.footer.terms}
                </Link>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="transition hover:text-fg">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-[12.5px] text-fg-dim sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.company}. {d.footer.rights}
          </p>
          <p>{d.footer.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}

export function Shell({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  const d = dict(lang);

  return (
    <div lang={d.lang}>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        {d.skipToContent}
      </a>
      <Header lang={lang} />
      <main id="content" className="relative z-10">
        {children}
      </main>
      <Footer lang={lang} />
    </div>
  );
}
