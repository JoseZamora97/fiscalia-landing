export const SITE = {
  name: "Genia Ops",
  url: "https://geniaops.com",
  company: "Genia Ops",
  email: "accounts@geniaops.com",
  tagline: "IA empresarial para operar con criterio y control",
  description:
    "Genia Ops coordina personas y agentes de IA para planificar y ejecutar operaciones con gobierno, conocimiento empresarial reutilizable y supervisión humana. Versión cerrada, solo por invitación.",
} as const;

export const MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent(
  "Solicitar acceso a Genia Ops",
)}`;
