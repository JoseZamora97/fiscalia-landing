import type { Metadata } from "next";
import { dict } from "@/content";
import { pageMeta } from "@/lib/meta";
import { SITE } from "@/lib/site";
import { Home } from "@/components/home";
import { Shell } from "@/components/shell";

const LANG = "es";

export const metadata: Metadata = pageMeta(LANG, {
  path: "/",
  title: `${SITE.name} — ${dict(LANG).tagline}`,
  description: dict(LANG).description,
  absoluteTitle: true,
});

export default function Page() {
  return (
    <Shell lang={LANG}>
      <Home lang={LANG} />
    </Shell>
  );
}
