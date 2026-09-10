import type { Lang } from "@/lib/i18n";

/** A labelled workflow illustration; no invented live product metrics. */
export function HeroScene({ lang, steps }: { lang: Lang; steps?: string[] }) {
  const es = lang === "es";
  const tasks = steps ?? (es ? ["Revisar documentación", "Analizar información", "Preparar el entregable"] : ["Review documentation", "Analyze information", "Prepare the deliverable"]);
  return (
    <figure className="work-sequence">
      <figcaption><span>{es ? "DEL OBJETIVO AL RESULTADO" : "FROM OBJECTIVE TO OUTCOME"}</span><span>{es ? "Flujo ilustrativo" : "Illustrative flow"}</span></figcaption>
      <div className="sequence-objective"><span className="sequence-symbol" aria-hidden="true">◎</span><div><small>{es ? "PERSONA + IA" : "HUMAN + AI"}</small><strong>{es ? "Definir el objetivo y revisar el plan" : "Define the objective and review the plan"}</strong></div></div>
      <div className="sequence-connector" aria-hidden="true"><i /></div>
      <ol className="sequence-tasks">{tasks.map((task, i) => <li key={task} style={{ "--task-index": i } as React.CSSProperties}><span className="task-status" aria-hidden="true"><svg viewBox="0 0 16 16"><path d="m4 8 3 3 5-6" /></svg></span><div><small>{es ? "AGENTE" : "AGENT"} / 0{i + 1}</small><strong>{task}</strong><span className="task-progress" aria-hidden="true"><i /></span></div><span className="task-activity" aria-hidden="true"><i /><i /><i /></span></li>)}</ol>
      <div className="sequence-connector" aria-hidden="true"><i /></div>
      <div className="sequence-review"><span className="review-avatar" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4" /><path d="M4 22v-3a8 8 0 0 1 16 0v3" /></svg></span><div><strong>{es ? "Tu criterio, en el momento clave" : "Your judgment, at the right moment"}</strong><span>{es ? "Revisa el resultado. Decide el siguiente paso." : "Review the result. Decide what happens next."}</span></div></div>
    </figure>
  );
}


export function ParallelFlow({ lang }: { lang: Lang }) {
  const es = lang === "es";
  return <figure className="parallel-flow">
    <figcaption><span>{es ? "OBJETIVOS EN PARALELO" : "PARALLEL OBJECTIVES"}</span><span>{es ? "Flujo ilustrativo" : "Illustrative flow"}</span></figcaption>
    <div className="parallel-branches">{[es ? "Revisar contratos" : "Review contracts", es ? "Analizar facturas" : "Analyze invoices"].map((label, i) => <div className={`parallel-objective branch-${i}`} key={label}><small>{es ? "AGENTE" : "AGENT"} 0{i + 1}</small><strong>{label}</strong><div className="branch-meter" aria-hidden="true"><i /></div><span className="branch-status"><span className="branch-running">{es ? "En ejecución" : "Working"}</span><span className="branch-done">{es ? "Completado" : "Complete"}</span></span></div>)}</div>
    <svg className="join-paths" viewBox="0 0 400 64" fill="none" aria-hidden="true"><path className="join-base" d="M100 0V20Q100 32 112 32H188Q200 32 200 44V64M300 0V20Q300 32 288 32H212Q200 32 200 44V64" /><path className="join-signal signal-one" d="M100 0V20Q100 32 112 32H188Q200 32 200 44V64" /><path className="join-signal signal-two" d="M300 0V20Q300 32 288 32H212Q200 32 200 44V64" /></svg>
    <div className="joined-objective"><span className="join-state" aria-hidden="true" /><div><small>{es ? "DEPENDE DE AMBOS OBJETIVOS" : "DEPENDS ON BOTH OBJECTIVES"}</small><strong>{es ? "Consolidar el plan de renovaciones" : "Consolidate the renewal plan"}</strong><span className="join-status"><span className="join-waiting">{es ? "Esperando las dos revisiones" : "Waiting for both reviews"}</span><span className="join-working">{es ? "Revisiones listas. Preparando el plan." : "Reviews ready. Preparing the plan."}</span></span></div></div>
  </figure>;
}

export function KnowledgeFlow({ lang }: { lang: Lang }) {
  const es = lang === "es";
  return <figure className="knowledge-flow"><figcaption>{es ? "CONTEXTO REUTILIZABLE · ILUSTRACIÓN" : "REUSABLE CONTEXT · ILLUSTRATION"}</figcaption><div className="knowledge-records">{[es ? "Conversaciones" : "Conversations", es ? "Decisiones" : "Decisions", es ? "Entregables" : "Deliverables"].map((label, i) => <div key={label} style={{ "--record-index": i } as React.CSSProperties}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M6 3h9l4 4v14H6zM14 3v5h5M9 12h7M9 16h5" /></svg><span>{label}</span><i aria-hidden="true" /></div>)}</div><div className="knowledge-transfer" aria-hidden="true"><i /><i /><i /></div><div className="knowledge-project"><small>{es ? "EL SIGUIENTE PROYECTO" : "THE NEXT PROJECT"}</small><strong>{es ? "Empieza con lo que ya sabes." : "Start with what you already know."}</strong><p>{es ? "Contexto disponible según permisos y retención." : "Context available subject to access and retention."}</p><div className="context-available" aria-hidden="true"><span /><span /><span /></div></div></figure>;
}
