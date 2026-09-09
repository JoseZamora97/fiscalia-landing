import { OG_SIZE, ogImage } from "@/lib/og";

export const alt = "Genia Ops — Tu empresa nativa de IA empieza aquí";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OpengraphImage() {
  return ogImage({
    title: "Tu empresa nativa de IA empieza aquí.",
    subtitle: "Personas, agentes de IA y conocimiento empresarial. Orquestados juntos. Bajo tu gobierno.",
    byline: "Release cerrada · Solo por invitación",
  });
}
