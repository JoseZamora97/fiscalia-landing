import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { USE_CASE_SLUGS, useCase } from "@/content";
import { pageMeta } from "@/lib/meta";
import { Shell } from "@/components/shell";
import { UseCaseView } from "@/components/use-case-view";

const LANG = "es";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return USE_CASE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = useCase(LANG, slug);
  if (!c) return {};

  return pageMeta(LANG, {
    path: `/use-cases/${slug}`,
    title: c.fullTitle,
    description: c.metaDescription,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const c = useCase(LANG, slug);
  if (!c) notFound();

  return (
    <Shell lang={LANG}>
      <UseCaseView lang={LANG} useCase={c} />
    </Shell>
  );
}
