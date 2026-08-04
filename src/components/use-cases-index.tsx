import Link from "next/link";
import { dict, useCases } from "@/content";
import { localePath, type Lang } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { mailto } from "@/components/shell";
import { Arrow } from "@/components/ui";

export function UseCasesIndex({ lang }: { lang: Lang }) {
  const d = dict(lang);
  const cases = useCases(lang);

  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: d.useCases.indexTitle,
    itemListElement: cases.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.fullTitle,
      url: `${SITE.url}${localePath(lang, `/use-cases/${c.slug}`)}`,
    })),
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />

      <div className="max-w-2xl">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-text">
          {d.useCases.eyebrow}
        </p>
        <h1 className="mt-3 text-[36px] font-semibold leading-[1.1] sm:text-[46px]">
          {d.useCases.indexTitle}
        </h1>
        <p className="mt-5 text-[17px] leading-relaxed text-fg-muted">
          {d.useCases.indexLede}
        </p>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {cases.map((c) => (
          <Link
            key={c.slug}
            href={localePath(lang, `/use-cases/${c.slug}`)}
            className="glass-card group flex flex-col p-7 transition hover:border-accent-border"
          >
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-accent-text">
              {c.eyebrow}
            </p>
            <h2 className="mt-2.5 text-[20px] font-semibold leading-snug">{c.fullTitle}</h2>
            <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-fg-muted">
              {c.summary}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-accent-text">
              {d.useCases.readMore}
              <Arrow />
            </span>
          </Link>
        ))}
      </div>

      <div className="glass-card dot-grid mt-16 px-8 py-12 text-center">
        <h2 className="text-[24px] font-semibold sm:text-[28px]">{d.cta.title}</h2>
        <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-fg-muted">
          {d.cta.body}
        </p>
        <div className="mt-7">
          <a href={mailto(lang)} className="btn btn-primary">
            {d.requestAccess}
          </a>
        </div>
      </div>
    </div>
  );
}
