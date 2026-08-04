import Link from "next/link";
import { dict } from "@/content";
import type { LegalDoc } from "@/content/types";
import { localePath, type Lang } from "@/lib/i18n";
import { Rich } from "@/components/rich";

export function LegalView({ lang, doc }: { lang: Lang; doc: LegalDoc }) {
  const d = dict(lang);

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-text">
        {d.legalEyebrow}
      </p>
      <h1 className="mt-3 text-[34px] font-semibold sm:text-[42px]">{doc.title}</h1>
      <p className="mt-3 text-[13.5px] text-fg-dim">
        {d.lastUpdated} {doc.updated}
      </p>

      <div className="prose-legal mt-10">
        {doc.blocks.map((block, i) => {
          if ("h2" in block) return <h2 key={i}>{block.h2}</h2>;
          if ("h3" in block) return <h3 key={i}>{block.h3}</h3>;
          if ("ul" in block)
            return (
              <ul key={i}>
                {block.ul.map((item, j) => (
                  <li key={j}>
                    <Rich>{item}</Rich>
                  </li>
                ))}
              </ul>
            );
          return (
            <p key={i}>
              <Rich>{block.p}</Rich>
            </p>
          );
        })}
      </div>

      <div className="mt-12 border-t border-border pt-6">
        <Link href={localePath(lang, "/")} className="link-accent text-[14px]">
          {d.backHome}
        </Link>
      </div>
    </article>
  );
}
