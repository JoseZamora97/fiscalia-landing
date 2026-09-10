import Link from "next/link";
import { dict } from "@/content";
import { localePath, type Lang } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { LanguageToggle } from "@/components/language-toggle";
import { Logo } from "@/components/logo";
import { audiences, audiencePath } from "@/content/variants";
import { ThemeToggle } from "@/components/theme-toggle";
import { MotionToggle } from "@/components/motion-toggle";

export function mailto(lang: Lang) {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(
    dict(lang).requestAccessSubject,
  )}`;
}

/** Resolves a nav entry (a hash or a canonical path) to a localized href. */
function navHref(lang: Lang, href: string, homePath: string) {
  return href.startsWith("#")
    ? `${localePath(lang, homePath)}${href}`
    : localePath(lang, href);
}

function Solutions({ lang }: { lang: Lang }) {
  return <details className="solutions-menu"><summary>{lang === "es" ? "Soluciones" : "Solutions"}<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" aria-hidden="true"><path d="m3 4 3 3 3-3" /></svg></summary><div className="solutions-dropdown">{audiences.map(a => <Link key={a} href={audiencePath(lang, a)}><strong>{a === "startups" ? "Startups" : a === "scaleups" ? "Scaleups" : "Enterprises"}</strong><span>{lang === "es" ? { startups: "Un equipo pequeño, más capacidad", scaleups: "Coordinar equipos en crecimiento", enterprises: "Llevar la IA a operaciones gobernadas" }[a] : { startups: "A small team, more capability", scaleups: "Coordinate growing teams", enterprises: "Bring AI into governed operations" }[a]}</span></Link>)}</div></details>;
}

function Header({ lang, homePath }: { lang: Lang; homePath: string }) {
  const d = dict(lang);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--glass-border)] bg-[var(--glass-bg-strong)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link href={localePath(lang, "/")} aria-label={d.homeAria}>
          <Logo />
        </Link>

        <nav aria-label={d.navAria} className="hidden items-center gap-6 lg:flex">
          {d.nav.filter(item => ["#product", "/use-cases", "#security"].includes(item.href)).map((item) => (
            <Link
              key={item.href}
              href={navHref(lang, item.href, homePath)}
              className="text-[13.5px] font-medium text-fg-muted transition hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
          <Solutions lang={lang} />
        </nav>

        <div className="flex items-center gap-2.5">
          <LanguageToggle label={d.languageLabel} />
          <ThemeToggle labelToLight={d.themeToLight} labelToDark={d.themeToDark} />
        </div>
      </div>
      <nav aria-label={`${d.navAria} — ${lang === "es" ? "móvil" : "mobile"}`} className="mobile-nav lg:hidden">
        {d.nav.filter(item => ["#product", "/use-cases", "#security"].includes(item.href)).map(item => <Link key={item.href} href={navHref(lang, item.href, homePath)}>{item.label}</Link>)}<Solutions lang={lang} />
      </nav>
    </header>
  );
}

function Footer({ lang, homePath }: { lang: Lang; homePath: string }) {
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
            <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-fg-muted">
              {lang === "es" ? "Genia hace referencia a la IA generativa. Ops significa operaciones: llevar esa inteligencia al trabajo diario de tu empresa." : "Genia refers to generative AI. Ops means operations: bringing that intelligence into the everyday work of your business."}
            </p>
          </div>

          <div>
            <h2 className="text-[13px] font-semibold text-fg">{d.footer.product}</h2>
            <ul className="mt-4 space-y-2.5 text-[13.5px] text-fg-muted">
              {d.nav.filter(item => item.href !== "#for-business").map((item) => (
                <li key={item.href}>
                  <Link href={navHref(lang, item.href, homePath)} className="transition hover:text-fg">
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
          <MotionToggle lang={lang} />
          <p>{d.footer.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}

export function Shell({
  lang,
  children,
  homePath = "/",
}: {
  lang: Lang;
  children: React.ReactNode;
  homePath?: string;
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
      <Header lang={lang} homePath={homePath} />
      <main id="content" className="relative z-10">
        {children}
      </main>
      <Footer lang={lang} homePath={homePath} />
    </div>
  );
}
