import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AudienceView } from "@/components/audience-view";
import { Shell } from "@/components/shell";
import { audiences, variants, type Audience } from "@/content/variants";
import { pageMeta } from "@/lib/meta";

const LANG = "en";
export const dynamicParams = false;
export function generateStaticParams() { return audiences.map(audience => ({ audience })); }
type Props = { params: Promise<{ audience: string }> };
function resolve(value: string): Audience {
  if (!audiences.includes(value as Audience)) notFound();
  return value as Audience;
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const audience = resolve((await params).audience);
  const v = variants[LANG][audience];
  return pageMeta(LANG, { path: `/for/${audience}`, title: `Genia Ops — ${v.label}`, description: v.body });
}
export default async function Page({ params }: Props) {
  const audience = resolve((await params).audience);
  return <Shell lang={LANG}><AudienceView lang={LANG} audience={audience} /></Shell>;
}
