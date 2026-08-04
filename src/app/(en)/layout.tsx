import "../globals.css";
import { RootHtml } from "@/components/root-html";
import { rootMetadata, rootViewport } from "@/lib/root-meta";

export const metadata = rootMetadata("en");
export const viewport = rootViewport;

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <RootHtml lang="en">{children}</RootHtml>;
}
