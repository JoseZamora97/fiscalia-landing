import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { SITE, MAILTO } from "@/lib/site";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  category: "technology",
  keywords: [
    "Genia Ops",
    "agentes de IA",
    "agentes autónomos",
    "gestión de proyectos con IA",
    "grafo de conocimiento",
    "automatización de procesos",
    "IA para empresas",
    "conectar Gmail y Outlook con IA",
    "extracción de facturas con IA",
    "asistente de IA sobre documentos",
  ],
  authors: [{ name: SITE.company }],
  creator: SITE.company,
  publisher: SITE.company,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f8" },
    { media: "(prefers-color-scheme: dark)", color: "#16181c" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Applies the persisted theme before React mounts, to avoid a flash.
const THEME_SCRIPT = `(function(){try{
  var d=document.documentElement;
  var t=localStorage.getItem('genia.theme');
  if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}
  d.classList.add(t==='dark'?'theme-dark':'theme-light');
}catch(e){document.documentElement.classList.add('theme-light');}})();`;

const NAV = [
  { href: "/#producto", label: "Producto" },
  { href: "/#como-funciona", label: "Cómo funciona" },
  { href: "/#fuentes", label: "Integraciones" },
  { href: "/#seguridad", label: "Seguridad" },
  { href: "/#faq", label: "FAQ" },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--glass-border)] bg-[var(--glass-bg-strong)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link href="/" aria-label={`${SITE.name} — inicio`}>
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13.5px] font-medium text-fg-muted transition hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a href={MAILTO} className="btn btn-primary !h-9 !px-4 !text-[13.5px]">
            Solicitar acceso
          </a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-border bg-[var(--bg-elev)]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-fg-muted">
              {SITE.name} conecta tus fuentes de información, las organiza en un grafo
              de conocimiento privado y pone agentes de IA a planificar y ejecutar el
              trabajo bajo tu supervisión.
            </p>
          </div>

          <div>
            <h2 className="text-[13px] font-semibold text-fg">Producto</h2>
            <ul className="mt-4 space-y-2.5 text-[13.5px] text-fg-muted">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-fg">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[13px] font-semibold text-fg">Legal y contacto</h2>
            <ul className="mt-4 space-y-2.5 text-[13.5px] text-fg-muted">
              <li>
                <Link href="/privacy" className="transition hover:text-fg">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition hover:text-fg">
                  Términos del Servicio
                </Link>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="transition hover:text-fg">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-[12.5px] text-fg-dim sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.company}. {SITE.name} es un producto de{" "}
            {SITE.company}.
          </p>
          <p>Hecho en España.</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido" className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
