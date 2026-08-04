import type { Metadata } from "next";
import { terms } from "@/content";
import { pageMeta } from "@/lib/meta";
import { LegalView } from "@/components/legal-view";
import { Shell } from "@/components/shell";

const LANG = "en";
const doc = terms(LANG);

export const metadata: Metadata = pageMeta(LANG, {
  path: "/terms",
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
