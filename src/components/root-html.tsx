import { Geist, Geist_Mono, Zen_Dots } from "next/font/google";
import type { Lang } from "@/lib/i18n";
import { HTML_LANG } from "@/lib/i18n";

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

// The product sets its GENIA wordmark in Zen Dots; the landing matches it.
const zenDots = Zen_Dots({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-zen-dots",
  display: "swap",
});

// Applies the persisted theme before React mounts, to avoid a flash.
const THEME_SCRIPT = `(function(){try{
  var d=document.documentElement;
  var t=localStorage.getItem('genia.theme');
  if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}
  d.classList.add(t==='dark'?'theme-dark':'theme-light');
}catch(e){document.documentElement.classList.add('theme-light');}})();`;

export function RootHtml({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html
      lang={HTML_LANG[lang]}
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} ${zenDots.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
