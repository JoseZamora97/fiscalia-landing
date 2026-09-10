import type { Lang } from "@/lib/i18n";

export const audiences = ["startups", "scaleups", "enterprises"] as const;
export type Audience = (typeof audiences)[number];
export function audiencePath(lang: Lang, audience: Audience) {
  return `${lang === "es" ? "/es" : ""}/for/${audience}`;
}
export const variants = {
  es: {
    startups: {
      label: "Para startups", role: "FUNDADORES · EQUIPOS PEQUEÑOS", kicker: "MENOS ESTRUCTURA. MÁS CAPACIDAD.",
      title: "Tu ambición no necesita", accent: "un equipo enorme.",
      body: "Construye una empresa nativa de IA desde el principio. Personas y agentes convierten objetivos en trabajo coordinado, mientras cada aprendizaje se queda en tu empresa.",
      focus: "De la primera idea a una operación repetible.", example: "Preparar un lanzamiento", steps: ["Definir el objetivo", "Investigar y preparar", "Revisar y lanzar"],
      outcome: "El siguiente lanzamiento empieza con lo aprendido.", link: "Explorar el producto", target: "product",
    },
    scaleups: {
      label: "Para scaleups", role: "COO · OPERACIONES · EQUIPOS EN CRECIMIENTO", kicker: "CRECER NO DEBERÍA MULTIPLICAR EL CAOS.",
      title: "Más equipos.", accent: "Una misma dirección.",
      body: "Conecta personas, agentes y conocimiento empresarial en una operación compartida. Orquesta el trabajo Humano–IA e IA–IA sin perder el contexto entre departamentos.",
      focus: "Del trabajo fragmentado a una operación conectada.", example: "Coordinar la expansión", steps: ["Alinear equipos", "Orquestar el trabajo", "Revisar resultados"],
      outcome: "El conocimiento viaja entre equipos, no se pierde entre herramientas.", link: "Ver cómo se coordina", target: "how-it-works",
    },
    enterprises: {
      label: "Para grandes empresas", role: "CEO · CIO · DIRECCIÓN · TRANSFORMACIÓN", kicker: "IA EMPRESARIAL. CON CRITERIO.",
      title: "La inteligencia escala.", accent: "El control permanece.",
      body: "Convierte la IA en capacidad operativa de tu empresa. Personas y agentes trabajan con contexto, responsabilidades y gobernanza; el conocimiento y las mejoras de productividad permanecen en tu organización.",
      focus: "De iniciativas aisladas a capacidad empresarial.", example: "Preparar una decisión de inversión", steps: ["Delimitar el contexto", "Analizar con agentes", "Decidir con criterio"],
      outcome: "La decisión es humana. El conocimiento queda en la empresa.", link: "Explorar la gobernanza", target: "security",
    },
  },
  en: {
    startups: {
      label: "For Startups", role: "FOUNDERS · SMALL TEAMS", kicker: "LESS OVERHEAD. MORE CAPABILITY.",
      title: "Big ambition.", accent: "Not a bigger team.",
      body: "Build an AI-native company from day one. People and agents turn objectives into coordinated work, while every lesson stays inside your business.",
      focus: "From the first idea to a repeatable operation.", example: "Prepare a product launch", steps: ["Define the objective", "Research and prepare", "Review and launch"],
      outcome: "The next launch starts with what you learned.", link: "Explore the product", target: "product",
    },
    scaleups: {
      label: "For Scaleups", role: "COO · OPERATIONS · GROWING TEAMS", kicker: "GROWTH SHOULDN’T MULTIPLY THE CHAOS.",
      title: "More teams.", accent: "One direction.",
      body: "Bring people, agents and business knowledge into one shared operation. Orchestrate human–AI and AI–AI work without losing context between departments.",
      focus: "From fragmented work to connected operations.", example: "Coordinate market expansion", steps: ["Align teams", "Orchestrate the work", "Review outcomes"],
      outcome: "Knowledge travels between teams, not into silos.", link: "See how it works", target: "how-it-works",
    },
    enterprises: {
      label: "For Enterprises", role: "CEO · CIO · LEADERSHIP · TRANSFORMATION", kicker: "ENTERPRISE AI. WITH INTENTION.",
      title: "Intelligence scales.", accent: "Control stays.",
      body: "Turn AI into an operating capability for your business. People and agents work with context, accountability and governance; business knowledge and productivity gains stay in your organization.",
      focus: "From isolated initiatives to enterprise capability.", example: "Prepare an investment decision", steps: ["Scope the context", "Analyze with agents", "Decide with clarity"],
      outcome: "The decision is human. The knowledge stays in your company.", link: "Explore governance", target: "security",
    },
  },
} satisfies Record<Lang, Record<Audience, { label: string; role: string; kicker: string; title: string; accent: string; body: string; focus: string; example: string; steps: string[]; outcome: string; link: string; target: string }>>;
