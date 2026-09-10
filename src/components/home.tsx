import Link from "next/link";
import { HeroScene, ParallelFlow, KnowledgeFlow } from "@/components/hero-scene";
import { dict, useCases } from "@/content";
import { localePath, type Lang } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { Rich } from "@/components/rich";
import { Shot } from "@/components/shot";
import { mailto } from "@/components/shell";
import { Arrow, Check, SectionHead } from "@/components/ui";

function JsonLd({ lang, path }: { lang: Lang; path: string }) {
  const d = dict(lang);
  const url = `${SITE.url}${localePath(lang, path)}`.replace(/\/$/, "") || SITE.url;

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
        releaseNotes: d.hero.badge,
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
      <JsonLd lang={lang} path="/" />

      <div className="product-experience">
      <section className="product-hero">
        <div className="ambient-field" aria-hidden="true"><i /><i /><div className="ambient-contours" /></div>
        <div className="product-hero-copy">
          <p className="hero-kicker"><span className="release-dot" />{d.hero.badge}</p>
          <h1>{lang === "es" ? "Tu equipo. Tus agentes." : "Your team. Your agents."}<br /><span>{lang === "es" ? "El trabajo, en marcha." : "Work, moving forward."}</span></h1>
          <p>{lang === "es" ? "De un objetivo a un resultado. Planifica con IA, coordina agentes y toma decisiones con todo el contexto de tu empresa en un mismo espacio." : "From an objective to an outcome. Plan with AI, coordinate agents and make decisions with your business context in one workspace."}</p>
          <div className="hero-actions"><a href={mailto(lang)} className="btn btn-primary">{d.requestAccess}<Arrow /></a><a href="#product" className="hero-text-link">{d.hero.ctaSecondary}<span aria-hidden="true"> ↘</span></a></div>
        </div>
        <div className="product-stage">
          <div className="product-caption"><span className="release-dot" />{lang === "es" ? "El espacio donde se hace el trabajo" : "The workspace where work happens"}<span className="caption-index">GENIA OPS / PRODUCT</span></div>
          <Shot lang={lang} name="project-detail" alt={d.hero.shotAlt} priority />
          <div className="stage-footnote"><span>{lang === "es" ? "Interfaz real del producto" : "Actual product interface"}</span><span>{lang === "es" ? "Objetivos · Conversaciones · Resultados" : "Objectives · Conversations · Results"}</span></div>
        </div>
      </section>
      <section className="execution-section section-wrap" id="how-it-works">
        <div className="execution-copy"><p className="eyebrow">{lang === "es" ? "NO ES OTRO CHAT" : "NOT ANOTHER CHAT"}</p><h2>{lang === "es" ? "Una conversación inicia el trabajo. No lo termina." : "A conversation starts the work. It doesn’t end it."}</h2><p>{lang === "es" ? "Define qué necesitas. Revisa el plan. Deja que los agentes trabajen en paralelo y continúen cuando sus dependencias estén listas. Tú aportas el criterio; el contexto y los entregables quedan en el proyecto." : "Define what you need. Review the plan. Let agents work in parallel and continue when their dependencies are ready. You bring the judgment; the context and deliverables stay with the project."}</p><a href="#agents" className="text-link">{lang === "es" ? "Mira cómo trabajan los agentes" : "See how agents work"}<Arrow /></a></div>
        <HeroScene lang={lang} />
      </section>

      <section className="parallel-section section-wrap"><ParallelFlow lang={lang} /><div className="execution-copy"><p className="eyebrow">{lang === "es" ? "COORDINACIÓN ENTRE AGENTES" : "AGENT-TO-AGENT COORDINATION"}</p><h2>{lang === "es" ? "En paralelo cuando pueden. En orden cuando importa." : "Parallel where possible. In sequence where it matters."}</h2><p>{lang === "es" ? "Un agente revisa los contratos mientras otro analiza las facturas. El siguiente objetivo espera a ambos antes de consolidar el resultado. Define las dependencias en el plan: el trabajo continúa sin que tengas que copiar el contexto de una conversación a otra." : "One agent reviews contracts while another analyzes invoices. The next objective waits for both before consolidating the result. Define dependencies in the plan: work continues without copying context from one conversation to another."}</p></div></section>
      <section className="ownership-section">
        <div className="section-wrap retained-layout"><div><p className="eyebrow">{d.ownership.eyebrow}</p><h2>{d.ownership.title}</h2><p>{d.ownership.body}</p></div><KnowledgeFlow lang={lang} /></div>
      </section>

      <section id="why-genia" className="section-wrap execution-section">
        <div className="execution-copy"><p className="eyebrow">{d.difference.eyebrow}</p><h2>{d.difference.title}</h2><p>{d.difference.body}</p></div>
        <ol className="explanation-steps">{d.difference.items.map((item, i) => <li key={item.title}><span>0{i + 1}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></li>)}</ol>
      </section>

      {/* --------------------------------------------------------- product */}
      <section id="product" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHead
            eyebrow={d.product.eyebrow}
            title={d.product.title}
            body={d.product.body}
          />

          <div className="product-features">
            {d.product.features.map((f, i) => (
              <article
                key={f.id}
                id={f.id}
                className="product-feature"
              >
                <div className="feature-copy">
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

                <div className="feature-screen">
                  <Shot lang={lang} name={f.shot} alt={f.shotAlt} url={f.url} />
                </div>
              </article>
            ))}
          </div>
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
          <div className="invitation-card px-8 py-16 text-center">
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
      </div>
    </>
  );
}
