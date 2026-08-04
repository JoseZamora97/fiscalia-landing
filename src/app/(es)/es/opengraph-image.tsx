import { OG_SIZE, ogImage } from "@/lib/og";

export const alt =
  "Genia Ops — agentes de IA que planifican y ejecutan sobre tus propios datos";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OpengraphImage() {
  return ogImage({
    title: "Agentes de IA que trabajan sobre tus propios datos",
    subtitle:
      "Conecta tu correo, tus documentos y tus repositorios. Genia Ops los organiza en un grafo privado y planifica el trabajo bajo tu supervisión.",
    byline: "por ZC Tech Partners",
  });
}
