import type { Metadata } from "next";
import { dict } from "@/content";
import { pageMeta } from "@/lib/meta";
import { Shell } from "@/components/shell";
import { UseCasesIndex } from "@/components/use-cases-index";

const LANG = "en";

export const metadata: Metadata = pageMeta(LANG, {
  path: "/use-cases",
  title: dict(LANG).useCases.indexTitle,
  description: dict(LANG).useCases.indexMetaDescription,
});

export default function Page() {
  return (
    <Shell lang={LANG}>
      <UseCasesIndex lang={LANG} />
    </Shell>
  );
}
