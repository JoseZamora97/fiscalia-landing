import type { Metadata } from "next";
import { privacy } from "@/content";
import { pageMeta } from "@/lib/meta";
import { LegalView } from "@/components/legal-view";
import { Shell } from "@/components/shell";

const LANG = "es";
const doc = privacy(LANG);

export const metadata: Metadata = pageMeta(LANG, {
  path: "/privacy",
  title: doc.title,
  description: doc.description,
});

export default function Page() {
  return (
    <Shell lang={LANG}>
      <LegalView lang={LANG} doc={doc} />
    </Shell>
  );
}
