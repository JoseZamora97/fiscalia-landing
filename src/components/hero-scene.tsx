import type { Audience } from "@/content/variants";
import { variants } from "@/content/variants";
import type { Lang } from "@/lib/i18n";

/** A conceptual operating model, not a simulated live product dashboard. */
export function HeroScene({ lang, audience }: { lang: Lang; audience: Audience }) {
  const v = variants[lang][audience];
  return (
    <figure className="operations-scene" aria-label={v.focus}>
      <div className="landscape-grid" aria-hidden="true"><div /><div /><div /></div>
      <div className="scene-heading"><span className="release-dot" />GENIA OPS<span>{lang === "es" ? "MODELO ILUSTRATIVO" : "ILLUSTRATIVE MODEL"}</span></div>
      <div className="operations-model">
        <div className="model-context"><span>01 / {lang === "es" ? "CONTEXTO" : "CONTEXT"}</span><strong>{lang === "es" ? "Conocimiento empresarial" : "Business knowledge"}</strong><div className="context-lines" aria-hidden="true"><i /><i /><i /></div></div>
        <div className="model-work"><div className="model-title"><span className="model-icon" aria-hidden="true">✳</span><div><small>{lang === "es" ? "OBJETIVO COMPARTIDO" : "SHARED OBJECTIVE"}</small><strong>{v.example}</strong></div></div><ol>{v.steps.map((step, i) => <li key={step}><span>0{i + 1}</span>{step}<i aria-hidden="true" /></li>)}</ol><div className="model-people"><span>{lang === "es" ? "Personas" : "People"}</span><b aria-hidden="true">↔</b><span>{lang === "es" ? "Agentes IA" : "AI agents"}</span><b aria-hidden="true">↔</b><span>{lang === "es" ? "Agentes IA" : "AI agents"}</span></div></div>
        <div className="model-decision"><span className="decision-icon" aria-hidden="true">✓</span><div><small>{lang === "es" ? "CRITERIO HUMANO" : "HUMAN JUDGMENT"}</small><strong>{lang === "es" ? "Revisar. Decidir. Avanzar." : "Review. Decide. Move forward."}</strong></div></div>
      </div>
      <figcaption><span>↳</span>{v.outcome}</figcaption>
    </figure>
  );
}
