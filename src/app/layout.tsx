import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://geniaops.com"),
  title: {
    default: "Genia Ops — Agentes de IA que trabajan sobre tus datos",
    template: "%s | Genia Ops",
  },
  description:
    "Genia Ops es una plataforma de gestión de proyectos con agentes de IA. Conecta tu correo, tus documentos y tus repositorios, los organiza en un grafo de conocimiento y permite que agentes de IA planifiquen y ejecuten el trabajo contigo.",
  applicationName: "Genia Ops",
  keywords: [
    "Genia Ops",
    "agentes de IA",
    "gestión de proyectos",
    "grafo de conocimiento",
    "automatización",
  ],
  authors: [{ name: "ZC Tech Partners" }],
  openGraph: {
    title: "Genia Ops — Agentes de IA que trabajan sobre tus datos",
    description:
      "Conecta tus fuentes de datos, organízalas en un grafo de conocimiento y deja que agentes de IA planifiquen y ejecuten el trabajo.",
    url: "https://geniaops.com",
    siteName: "Genia Ops",
    locale: "es_ES",
    type: "website",
  },
  robots: { index: true, follow: true },
};

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/20">
        <span className="text-sm font-bold text-white">G</span>
      </span>
      <span className="text-[15px] font-semibold tracking-tight text-white">
        Genia Ops
      </span>
    </Link>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#05070d]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/#producto"
            className="hidden text-slate-300 transition hover:text-white sm:block"
          >
            Producto
          </Link>
          <Link
            href="/#seguridad"
            className="hidden text-slate-300 transition hover:text-white sm:block"
          >
            Seguridad
          </Link>
          <Link
            href="/privacy"
            className="text-slate-300 transition hover:text-white"
          >
            Privacidad
          </Link>
          <a
            href="mailto:accounts@zctechpartners.com"
            className="rounded-lg bg-white/10 px-3.5 py-1.5 font-medium text-white ring-1 ring-white/15 transition hover:bg-white/15"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#05070d]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Plataforma de gestión de proyectos con agentes de IA sobre tus
              propias fuentes de datos.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <span className="font-medium text-white">Legal</span>
            <Link
              href="/privacy"
              className="text-slate-400 transition hover:text-white"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/terms"
              className="text-slate-400 transition hover:text-white"
            >
              Términos del Servicio
            </Link>
            <a
              href="mailto:accounts@zctechpartners.com"
              className="text-slate-400 transition hover:text-white"
            >
              accounts@zctechpartners.com
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-white/5 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} ZC Tech Partners. Genia Ops es un
          producto de ZC Tech Partners. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
