export const SITE = {
  name: "Genia Ops",
  url: "https://geniaops.com",
  company: "ZC Tech Partners",
  email: "accounts@zctechpartners.com",
  tagline: "Agentes de IA que planifican y ejecutan sobre tus propios datos",
  description:
    "Genia Ops es una plataforma de gestión de proyectos con agentes de IA. Conecta tu correo, tus documentos, tus archivos y tus repositorios, los organiza en un grafo de conocimiento privado y deja que agentes de IA planifiquen, propongan y ejecuten el trabajo bajo tu supervisión.",
} as const;

export const MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent(
  "Solicitar acceso a Genia Ops",
)}`;
