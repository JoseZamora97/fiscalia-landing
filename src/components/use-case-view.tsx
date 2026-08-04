import Link from "next/link";
import { dict } from "@/content";
import type { UseCase } from "@/content/types";
import { localePath, type Lang } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { Rich } from "@/components/rich";
import { mailto } from "@/components/shell";
import { Arrow, Check } from "@/components/ui";

function JsonLd({ lang, c }: { lang: Lang; c: UseCase }) {
  const d = dict(lang);
  const indexUrl = `${SITE.url}${localePath(lang, "/use-cases")}`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: c.fullTitle,
        description: c.metaDescription,
        inLanguage: d.lang,
        isPartOf: { "@id": `${SITE.url}/#website` },
        publisher: { "@id": `${SITE.url}/#organization` },
        about: { "@id": `${SITE.url}/#software` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: SITE.name,
            item: `${SITE.url}${localePath(lang, "/")}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: d.useCases.indexTitle,
            item: indexUrl,
          },
          { "@type": "ListItem", position: 3, name: c.title },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-text">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export function UseCaseView({ lang, useCase: c }: { lang: Lang; useCase: UseCase }) {
  const d = dict(lang);

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <JsonLd lang={lang} c={c} />

      <Link
        href={localePath(lang, "/use-cases")}
        className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-fg-dim transition hover:text-fg"
      >
        <span className="rotate-180">
          <Arrow />
        </span>
        {d.useCases.backToIndex}
      </Link>

      <p className="mt-8 text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-text">
        {c.eyebrow}
      </p>
      <h1 className="mt-3 text-[32px] font-semibold leading-[1.14] sm:text-[42px]">
        {c.fullTitle}
      </h1>
      <p className="mt-5 text-[17px] leading-relaxed text-fg-muted">{c.summary}</p>

      <div className="mt-8 rounded-[var(--radius-lg)] border border-accent-border bg-accent-soft px-5 py-4">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-text">
          {d.caseDetail.who}
        </p>
        <p className="mt-1.5 text-[14.5px] leading-relaxed text-fg">{c.who}</p>
      </div>

      <Panel title={d.caseDetail.scenario}>
        <div className="space-y-4 text-[16px] leading-relaxed text-fg-muted">
          {c.scenario.map((p, i) => (
            <p key={i}>
              <Rich>{p}</Rich>
            </p>
          ))}
        </div>
      </Panel>

      <Panel title={d.caseDetail.problems}>
        <ul className="space-y-3">
          {c.problems.map((p) => (
            <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-fg-muted">
              <span
                aria-hidden
                className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--fg-dim)]"
              />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </Panel>

      <Panel title={d.caseDetail.approach}>
        <ol className="space-y-4">
          {c.approach.map((step, i) => (
            <li key={step.title} className="glass-card p-6">
              <span className="font-mono text-[13px] font-medium text-accent-text">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2.5 text-[17px] font-semibold">{step.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-fg-muted">
                <Rich>{step.body}</Rich>
              </p>
            </li>
          ))}
        </ol>
      </Panel>

      {c.integration && (
        <Panel title={d.caseDetail.integration}>
          <div className="rounded-[var(--radius-lg)] border border-accent-border bg-[var(--bg-elev)] p-7">
            <h3 className="text-[20px] font-semibold">
              {SITE.name} + {c.integration.name}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">
              <Rich>{c.integration.body}</Rich>
            </p>
            <ul className="mt-5 space-y-3">
              {c.integration.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[14.5px] leading-relaxed text-fg-muted">
                  <Check />
                  <span>
                    <Rich>{b}</Rich>
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={c.integration.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-6 !h-9 !px-4 !text-[13.5px]"
            >
              {c.integration.urlLabel}
            </a>
          </div>
        </Panel>
      )}

      <Panel title={d.caseDetail.outcomes}>
        <ul className="space-y-3">
          {c.outcomes.map((o) => (
            <li key={o} className="flex gap-3 text-[15px] leading-relaxed text-fg-muted">
              <Check />
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </Panel>

      <Panel title={d.caseDetail.sourcesUsed}>
        <ul className="flex flex-wrap gap-2">
          {c.sources.map((s) => (
            <li
              key={s}
              className="rounded-full border border-border bg-[var(--bg-elev)] px-3.5 py-1.5 text-[13px] text-fg-muted"
            >
              {s}
            </li>
          ))}
        </ul>
      </Panel>

      <div className="glass-card dot-grid mt-16 px-8 py-12 text-center">
        <h2 className="text-[24px] font-semibold sm:text-[28px]">{d.caseDetail.ctaTitle}</h2>
        <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-fg-muted">
          {d.caseDetail.ctaBody}
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a href={mailto(lang)} className="btn btn-primary">
            {d.requestAccess}
          </a>
          <Link href={localePath(lang, "/use-cases")} className="btn">
            {d.useCases.allCases}
          </Link>
        </div>
      </div>
    </article>
  );
}
