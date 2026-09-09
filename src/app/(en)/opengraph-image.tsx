import { OG_SIZE, ogImage } from "@/lib/og";

export const alt = "Genia Ops — Your AI-native company starts here";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OpengraphImage() {
  return ogImage({
    title: "Your AI-native company starts here.",
    subtitle: "People, AI agents and enterprise knowledge. Orchestrated together. Governed by you.",
    byline: "Closed release · Invitation only",
  });
}
