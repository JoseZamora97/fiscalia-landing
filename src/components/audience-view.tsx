import Link from "next/link";
import { dict } from "@/content";
import { variants, type Audience } from "@/content/variants";
import { type Lang, localePath } from "@/lib/i18n";
import { Shot } from "@/components/shot";
import { HeroScene } from "@/components/hero-scene";
import { mailto } from "@/components/shell";
import { Arrow, Check } from "@/components/ui";

const examples = {
  en: {
    startups: {
      title: "Make your next customer onboarding repeatable.",
      problem: "The sale is closed. The context is scattered across a founder’s inbox, the signed agreement and product documentation. Your small team needs to deliver without reconstructing every promise by hand.",
      input: "Sales notes, the signed agreement and product documentation. Connect only the sources needed for this customer.",
      steps: ["Extract commitments and open questions", "Prepare the onboarding checklist", "Review the plan with the customer owner"],
      details: ["Ask Genia Ops to identify what was promised, the information still missing and the proposed milestones. Review the scope before execution.", "Agents prepare the checklist and draft the handoff using the assigned sources. Inspect their conversations and correct an assumption without starting over.", "The account owner validates dates and commitments before sharing anything with the customer. Keep the approved checklist in the project for the next onboarding."],
      output: ["A customer-specific onboarding checklist", "Open questions for the account owner", "A reusable record of commitments and decisions"],
      boundary: "Agents prepare the work. Your team validates customer commitments and sends the final communication.",
      next: "Start with one customer. Build a way of working.",
      nextBody: "Choose an onboarding that is already on your desk. Define what a useful result looks like, assign the relevant sources and review the first plan with your team.",
      shot: "projects", second: "chat",
      shotAlt: "Genia Ops projects workspace with project status and task progress",
      secondAlt: "Genia Ops agent conversation with reviewable tool activity",
      roles: "Founder + account owner", deliverable: "Onboarding checklist", context: "Customer context",
    },
    scaleups: {
      title: "Get finance and operations to the same renewal decision.",
      problem: "As teams grow, vendor contracts, invoices and renewal discussions end up in different places. Finance sees the spend. Operations knows the need. Neither has the whole picture when a renewal arrives.",
      input: "Vendor agreements, recent invoices and relevant renewal threads. Separate the sources by objective so each agent works with the context it needs.",
      steps: ["Review spend and contract terms in parallel", "Consolidate upcoming renewals", "Agree actions with finance and operations"],
      details: ["Create separate objectives for invoice review and contract review. Agents can investigate independently rather than waiting for one long conversation to finish.", "Make consolidation depend on both reviews. Bring renewal dates, obligations and unresolved discrepancies into a shared working document.", "Finance validates the numbers; operations confirms the business need. Record the decision and the owner of each follow-up in the project."],
      output: ["A shared renewal calendar and vendor summary", "Discrepancies that need a person’s attention", "A documented action plan across teams"],
      boundary: "No automatic cancellation or negotiation. Responsible teams review the evidence and decide what to do with each vendor.",
      next: "Start with a renewal cycle. Connect the handoffs.",
      nextBody: "Pick a small set of vendors with upcoming renewals. Bring finance and operations into one project and define the dependencies before agents begin.",
      shot: "project-detail", second: "usage",
      shotAlt: "Genia Ops shared project with objectives and execution progress",
      secondAlt: "Genia Ops usage dashboard with project and model resource visibility",
      roles: "Finance + operations", deliverable: "Renewal action plan", context: "Contracts + invoices",
    },
    enterprises: {
      title: "Turn document review into a governed decision process.",
      problem: "A cross-business review needs contributions from several teams without giving every participant access to every source. Leadership needs findings it can examine, not an opaque summary detached from the work behind it.",
      input: "The approved document set for each business unit, its review criteria and named reviewers. Confirm data-handling requirements before connecting sensitive information.",
      steps: ["Scope source access for each review", "Prepare findings by business unit", "Validate and consolidate with legal"],
      details: ["Define the questions and assign only the relevant sources to each objective. Document who is responsible for validating each area of the review.", "Agents examine the assigned material in isolated execution environments. Review tool activity and conversations; interrupt or redirect work when the scope needs correction.", "Legal reviewers validate findings before consolidation. Keep unresolved questions explicit and retain the conversations and deliverables according to your retention settings."],
      output: ["A reviewable set of findings by business unit", "Unresolved issues assigned to human reviewers", "A consolidated brief with its working context"],
      boundary: "AI findings are not legal advice or a compliance certification. Your authorised reviewers remain responsible for conclusions and consequential decisions.",
      next: "Start with a bounded review. Evaluate the controls.",
      nextBody: "Agree the review scope, information boundaries and validation criteria with your responsible teams. Discuss your deployment and data requirements before requesting access.",
      shot: "data-sources", second: "project-detail",
      shotAlt: "Genia Ops data sources screen with connected business accounts",
      secondAlt: "Genia Ops project workspace retaining objectives, conversations and results",
      roles: "Business units + legal", deliverable: "Validated review brief", context: "Scoped documents",
    },
  },
  es: {
    startups: {
      title: "Haz que la incorporación de tu próximo cliente sea repetible.",
      problem: "La venta está cerrada. El contexto está repartido entre el correo del fundador, el acuerdo firmado y la documentación de producto. Un equipo pequeño necesita entregar sin reconstruir cada promesa a mano.",
      input: "Notas comerciales, el acuerdo firmado y documentación de producto. Conecta solo las fuentes necesarias para este cliente.",
      steps: ["Extraer compromisos y preguntas abiertas", "Preparar la lista de incorporación", "Revisar el plan con el responsable del cliente"],
      details: ["Pide a Genia Ops que identifique los compromisos, la información que falta y los hitos propuestos. Revisa el alcance antes de ejecutar.", "Los agentes preparan la lista y el borrador de traspaso con las fuentes asignadas. Inspecciona sus conversaciones y corrige una suposición sin empezar de cero.", "El responsable valida fechas y compromisos antes de compartirlos con el cliente. Conserva la lista aprobada en el proyecto para la siguiente incorporación."],
      output: ["Una lista de incorporación específica del cliente", "Preguntas abiertas para el responsable", "Un registro reutilizable de compromisos y decisiones"],
      boundary: "Los agentes preparan el trabajo. Tu equipo valida los compromisos con el cliente y envía la comunicación final.",
      next: "Empieza con un cliente. Construye una forma de trabajar.",
      nextBody: "Elige una incorporación que ya tengas pendiente. Define qué sería un resultado útil, asigna las fuentes relevantes y revisa el primer plan con tu equipo.",
      shot: "projects", second: "chat",
      shotAlt: "Espacio de proyectos de Genia Ops con estados y progreso de tareas",
      secondAlt: "Conversación con un agente de Genia Ops y actividad de herramientas revisable",
      roles: "Fundador + responsable de cuenta", deliverable: "Lista de incorporación", context: "Contexto del cliente",
    },
    scaleups: {
      title: "Finanzas y operaciones, ante la misma decisión de renovación.",
      problem: "Al crecer, los contratos, las facturas y las conversaciones sobre renovaciones acaban en sitios distintos. Finanzas ve el gasto. Operaciones conoce la necesidad. Ninguno tiene toda la información cuando llega una renovación.",
      input: "Contratos de proveedores, facturas recientes e hilos de renovación relevantes. Separa las fuentes por objetivo para que cada agente tenga el contexto que necesita.",
      steps: ["Revisar gasto y contratos en paralelo", "Consolidar las próximas renovaciones", "Acordar acciones entre finanzas y operaciones"],
      details: ["Crea objetivos separados para revisar facturas y contratos. Los agentes pueden investigar de forma independiente, sin esperar a que termine una única conversación.", "Haz que la consolidación dependa de ambas revisiones. Reúne fechas, obligaciones y discrepancias sin resolver en un documento de trabajo compartido.", "Finanzas valida los importes; operaciones confirma la necesidad. Registra la decisión y el responsable de cada seguimiento en el proyecto."],
      output: ["Un calendario compartido y un resumen por proveedor", "Discrepancias que necesitan atención humana", "Un plan de acción documentado entre equipos"],
      boundary: "Sin cancelaciones ni negociaciones automáticas. Los equipos responsables revisan la información y deciden qué hacer con cada proveedor.",
      next: "Empieza con un ciclo de renovaciones. Conecta los traspasos.",
      nextBody: "Elige unos pocos proveedores con renovaciones próximas. Reúne a finanzas y operaciones en un proyecto y define las dependencias antes de que empiecen los agentes.",
      shot: "project-detail", second: "usage",
      shotAlt: "Proyecto compartido de Genia Ops con objetivos y progreso de ejecución",
      secondAlt: "Panel de uso de Genia Ops con recursos por proyecto y modelo",
      roles: "Finanzas + operaciones", deliverable: "Plan de renovaciones", context: "Contratos + facturas",
    },
    enterprises: {
      title: "Convierte la revisión documental en un proceso de decisión gobernado.",
      problem: "Una revisión transversal necesita aportaciones de varias unidades sin dar acceso a todas las fuentes a cada participante. La dirección necesita hallazgos que pueda examinar, no un resumen opaco separado del trabajo que lo respalda.",
      input: "Documentos autorizados por unidad, criterios de revisión y revisores designados. Confirma los requisitos de tratamiento antes de conectar información sensible.",
      steps: ["Delimitar las fuentes de cada revisión", "Preparar hallazgos por unidad", "Validar y consolidar con el equipo legal"],
      details: ["Define las preguntas y asigna solo las fuentes relevantes a cada objetivo. Documenta quién es responsable de validar cada área de la revisión.", "Los agentes examinan el material asignado en entornos de ejecución aislados. Revisa herramientas y conversaciones; interrumpe o redirige cuando debas corregir el alcance.", "Los revisores legales validan los hallazgos antes de consolidar. Mantén explícitas las preguntas pendientes y conserva conversaciones y entregables según tu configuración de retención."],
      output: ["Hallazgos revisables por unidad de negocio", "Cuestiones pendientes asignadas a revisores humanos", "Un informe consolidado con su contexto de trabajo"],
      boundary: "Los hallazgos de IA no son asesoramiento legal ni una certificación de cumplimiento. Los revisores autorizados mantienen la responsabilidad sobre las conclusiones y decisiones relevantes.",
      next: "Empieza con una revisión acotada. Evalúa los controles.",
      nextBody: "Acuerda el alcance, los límites de información y los criterios de validación con los equipos responsables. Consulta los requisitos de despliegue y datos antes de solicitar acceso.",
      shot: "data-sources", second: "project-detail",
      shotAlt: "Fuentes de datos de Genia Ops con cuentas empresariales conectadas",
      secondAlt: "Espacio de proyecto de Genia Ops con objetivos, conversaciones y resultados",
      roles: "Unidades de negocio + legal", deliverable: "Informe validado", context: "Documentos delimitados",
    },
  },
};

export function AudienceView({ lang, audience }: { lang: Lang; audience: Audience }) {
  const d = dict(lang), v = variants[lang][audience], e = examples[lang][audience], es = lang === "es";
  return <div className="solution-page">
    <section className="solution-hero section-wrap">
      <Link href={localePath(lang, "/")} className="solution-back">Genia Ops <span aria-hidden="true">/</span> {v.label}</Link>
      <p className="eyebrow">{v.role}</p><h1>{v.title}<br /><span>{v.accent}</span></h1>
      <div className="solution-intro"><p>{v.body}</p><a href={mailto(lang)} className="btn btn-primary">{d.requestAccess}<Arrow /></a></div>
    </section>
    <section className="solution-case section-wrap">
      <div className="case-heading"><p className="eyebrow">01 / {es ? "UN CASO CONCRETO" : "A CONCRETE SCENARIO"}</p><p className="illustration-note">{es ? "Ejemplo ilustrativo, no un resultado de cliente." : "Illustrative example, not a customer result."}</p></div>
      <div className="case-intro"><h2>{e.title}</h2><p>{e.problem}</p></div>
      <dl className="case-facts"><div><dt>{es ? "QUIÉN PARTICIPA" : "WHO IS INVOLVED"}</dt><dd>{e.roles}</dd></div><div><dt>{es ? "CONTEXTO DE PARTIDA" : "STARTING CONTEXT"}</dt><dd>{e.context}</dd></div><div><dt>{es ? "ENTREGABLE PREVISTO" : "INTENDED DELIVERABLE"}</dt><dd>{e.deliverable}</dd></div></dl>
      <Shot lang={lang} name={e.shot} alt={e.shotAlt} priority />
      <p className="screenshot-note">{es ? "Interfaz real de Genia Ops. El contenido mostrado no representa este ejemplo." : "Actual Genia Ops interface. The content shown does not depict this example."}</p>
    </section>
    <section className="solution-work section-wrap">
      <div><p className="eyebrow">02 / {es ? "ASÍ SE ORGANIZA" : "HOW THE WORK IS ORGANIZED"}</p><h2>{es ? "Del contexto a una decisión revisable." : "From context to a reviewable decision."}</h2><p className="solution-input">{e.input}</p><ol className="explanation-steps">{e.steps.map((step, i) => <li key={step}><span>0{i + 1}</span><div><h3>{step}</h3><p>{e.details[i]}</p></div></li>)}</ol></div>
      <HeroScene lang={lang} steps={e.steps} />
    </section>
    <section className="solution-outcome"><div className="section-wrap outcome-layout"><div><p className="eyebrow">03 / {es ? "LO QUE QUEDA" : "WHAT YOU KEEP"}</p><h2>{es ? "Un entregable. Y el contexto para continuar." : "A deliverable. And the context to continue."}</h2><ul>{e.output.map(item => <li key={item}><Check />{item}</li>)}</ul><p className="human-boundary">{e.boundary}</p></div><div><Shot lang={lang} name={e.second} alt={e.secondAlt} /><p className="screenshot-note">{es ? "Interfaz real del producto" : "Actual product interface"}</p></div></div></section>
    <section className="section-wrap solution-cta"><p className="eyebrow">{d.hero.badge}</p><h2>{e.next}</h2><p>{e.nextBody}</p><a href={mailto(lang)} className="btn btn-primary">{d.requestAccess}<Arrow /></a><a href={localePath(lang, "/") + "#product"} className="text-link">{es ? "Explorar el producto completo" : "Explore the full product"}<Arrow /></a></section>
  </div>;
}
