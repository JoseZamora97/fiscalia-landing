import "../globals.css";
import { RootHtml } from "@/components/root-html";
import { rootMetadata, rootViewport } from "@/lib/root-meta";

export const metadata = rootMetadata("es");
export const viewport = rootViewport;

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <RootHtml lang="es">{children}</RootHtml>;
}
