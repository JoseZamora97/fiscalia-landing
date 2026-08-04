import Link from "next/link";
import { Fragment, type ReactNode } from "react";

const TOKEN = /\*\*(.+?)\*\*|`([^`]+?)`|\[([^\]]+?)\]\(([^)]+?)\)/g;

/**
 * Renders the tiny inline markup accepted in content strings: **bold**,
 * `code` and [label](/href). Internal links go through next/link.
 */
export function Rich({ children }: { children: string }): ReactNode {
  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;

  for (const m of children.matchAll(TOKEN)) {
    const at = m.index ?? 0;
    if (at > last) nodes.push(children.slice(last, at));
    last = at + m[0].length;

    if (m[1] !== undefined) {
      nodes.push(
        <strong key={key++} className="font-semibold text-fg">
          <Rich>{m[1]}</Rich>
        </strong>,
      );
    } else if (m[2] !== undefined) {
      nodes.push(<code key={key++}>{m[2]}</code>);
    } else {
      const [, , , label, href] = m;
      const external = /^(https?:|mailto:)/.test(href);
      nodes.push(
        external ? (
          <a
            key={key++}
            href={href}
            className="link-accent"
            {...(href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {label}
          </a>
        ) : (
          <Link key={key++} href={href} className="link-accent">
            {label}
          </Link>
        ),
      );
    }
  }

  if (last < children.length) nodes.push(children.slice(last));

  return (
    <>
      {nodes.map((n, i) => (
        <Fragment key={i}>{n}</Fragment>
      ))}
    </>
  );
}
