import { OG_SIZE, ogImage } from "@/lib/og";

export const alt = "Genia Ops — AI agents that plan and execute on your own data";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OpengraphImage() {
  return ogImage({
    title: "AI agents that work on your own data",
    subtitle:
      "Connect your email, your documents and your repositories. Genia Ops organises them into a private graph and plans the work under your supervision.",
    byline: "by ZC Tech Partners",
  });
}
