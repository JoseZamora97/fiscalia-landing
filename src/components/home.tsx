import Link from "next/link";
import { dict, useCases } from "@/content";
import { localePath, type Lang } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { Rich } from "@/components/rich";
import { Shot } from "@/components/shot";
import { mailto } from "@/components/shell";
import { Arrow, Check, SectionHead } from "@/components/ui";

function JsonLd({ lang }: { lang: Lang }) {
  const d = dict(lang);
  const url = `${SITE.url}${localePath(lang, "/")}`.replace(/\/$/, "") || SITE.url;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.company,
        url: SITE.url,
        email: SITE.email,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        description: d.description,
        publisher: { "@id": `${SITE.url}/#organization` },
        inLanguage: d.lang,
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE.url}/#software`,
        name: SITE.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url,
        description: d.description,
        publisher: { "@id": `${SITE.url}/#organization` },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
          availability: "https://schema.org/LimitedAvailability",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        mainEntity: d.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
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

export function Home({ lang }: { lang: Lang }) {
  const d = dict(lang);
  const cases = useCases(lang);

  return (
    <>
      <JsonLd lang={lang} />

      {/* ------------------------------------------------------------ hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-16 sm:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge badge-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              {d.hero.badge}
            </span>

            <h1 className="mt-6 text-[38px] font-semibold leading-[1.08] sm:text-[60px]">
              {d.hero.titleTop}
              <br className="hidden sm:block" />{" "}
              <span className="text-accent-text">{d.hero.titleAccent}</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-fg-muted">
              <Rich>{`**${SITE.name}** ${d.hero.lede}`}</Rich>
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a href={mailto(lang)} className="btn btn-primary">
                {d.requestAccess}
              </a>
              <Link href={`${localePath(lang, "/")}#product`} className="btn">
                {d.hero.ctaSecondary}
              </Link>
            </div>

            <p className="mt-5 text-[13px] text-fg-dim">{d.hero.note}</p>
          </div>

          <div className="mt-14">
            <Shot
              name="project-detail"
              alt={d.hero.shotAlt}
              url="app.geniaops.com/projects/tax-close"
              priority
            />
          </div>

          <dl className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-border bg-border sm:grid-cols-3">
            {d.stats.map((s) => (
              <div key={s.label} className="bg-[var(--bg-elev)] px-6 py-7 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="flex h-14 items-center justify-center">
                    <span
                      className={
                        s.emphasis
                          ? "text-[76px] font-semibold leading-none text-accent-text"
                          : "text-[34px] font-semibold leading-none text-fg"
                      }
                    >
                      {s.value}
                    </span>
                  </span>
                  <span className="mt-1 block text-[13.5px] text-fg-muted">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------------------------------------------------------- what is */}
      <section id="what-is" className="scroll-mt-24 border-y border-border bg-[var(--bg-elev)]">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-[28px] font-semibold sm:text-[34px]">{d.whatIs.title}</h2>
          <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-fg-muted">
            {d.whatIs.paragraphs.map((p, i) => (
              <p key={i}>
                <Rich>{p}</Rich>
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- product */}
      <section id="product" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHead
            eyebrow={d.product.eyebrow}
            title={d.product.title}
            body={d.product.body}
          />

          <div className="mt-16 space-y-24">
            {d.product.features.map((f, i) => (
              <article
                key={f.id}
                id={f.id}
                className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 lg:gap-14"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-text">
                    {f.eyebrow}
                  </p>
                  <h3 className="mt-3 text-[26px] font-semibold sm:text-[30px]">{f.title}</h3>
                  <p className="mt-4 text-[15.5px] leading-relaxed text-fg-muted">{f.body}</p>
                  <ul className="mt-6 space-y-3">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-[14.5px] text-fg-muted">
                        <Check />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : undefined}>
                  <Shot name={f.shot} alt={f.shotAlt} url={f.url} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- how it works */}
      <section
        id="how-it-works"
        className="scroll-mt-24 border-y border-border bg-[var(--bg-elev)]"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHead eyebrow={d.how.eyebrow} title={d.how.title} />
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {d.how.steps.map((s) => (
              <li key={s.n} className="glass-card p-6">
                <span className="font-mono text-[13px] font-medium text-accent-text">{s.n}</span>
                <h3 className="mt-3 text-[17px] font-semibold">{s.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-fg-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------------------------------------------- integrations */}
      <section id="integrations" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHead
            eyebrow={d.sources.eyebrow}
            title={d.sources.title}
            body={d.sources.body}
          />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {d.sources.items.map((s) => (
              <li key={s.name} className="glass-card p-5">
                <span className="grid h-10 w-10 place-items-center rounded-[var(--radius)] border border-accent-border bg-accent-soft">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d={s.icon} />
                  </svg>
                </span>
                <h3 className="mt-4 text-[15px] font-semibold">{s.name}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-fg-muted">{s.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* -------------------------------------------------------- security */}
      <section
        id="security"
        className="scroll-mt-24 border-y border-border bg-[var(--bg-elev)]"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHead
            eyebrow={d.security.eyebrow}
            title={d.security.title}
            body={d.security.body}
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {d.security.items.map((s) => (
              <article key={s.title} className="glass-card p-6">
                <h3 className="text-[15.5px] font-semibold">{s.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-fg-muted">{s.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-[14px] text-fg-muted">
            <Rich>{d.security.footnote}</Rich>
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------- use cases */}
      <section id="use-cases" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHead
            eyebrow={d.useCases.eyebrow}
            title={d.useCases.title}
            body={d.useCases.body}
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((c) => (
              <Link
                key={c.slug}
                href={localePath(lang, `/use-cases/${c.slug}`)}
                className="glass-card group flex flex-col p-7 transition hover:border-accent-border"
              >
                <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-accent-text">
                  {c.eyebrow}
                </p>
                <h3 className="mt-2.5 text-[18px] font-semibold">{c.title}</h3>
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
        </div>
      </section>

      {/* ------------------------------------------------------------- faq */}
      <section id="faq" className="scroll-mt-24 border-y border-border bg-[var(--bg-elev)]">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <SectionHead eyebrow={d.faq.eyebrow} title={d.faq.title} />
          <div className="mt-12 border-y border-border">
            {d.faq.items.map((item) => (
              <details
                key={item.q}
                className="group border-b border-border py-5 last:border-b-0"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[15.5px] font-medium text-fg">
                  {item.q}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden
                    className="mt-1 shrink-0 text-fg-dim transition group-open:rotate-45"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className="mt-3 pr-8 text-[14.5px] leading-relaxed text-fg-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- cta */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="glass-card dot-grid px-8 py-16 text-center">
            <h2 className="text-[30px] font-semibold sm:text-[38px]">{d.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-fg-muted">
              {d.cta.body}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={mailto(lang)} className="btn btn-primary">
                {d.requestAccess}
              </a>
              <a href={`mailto:${SITE.email}`} className="btn">
                {d.cta.secondary}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
