import type { Metadata, Viewport } from "next";
import { Geist, Zen_Dots } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist",
  display: "swap",
});

// The product sets its GENIA wordmark in Zen Dots; this page matches it.
const zenDots = Zen_Dots({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-zen-dots",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://geniaops.com"),
  title: "Genia Ops — Enterprise AI. Operational control.",
  description: "Enterprise AI. Operational control.",
  applicationName: "Genia Ops",
  openGraph: {
    type: "website",
    url: "https://geniaops.com",
    siteName: "Genia Ops",
    title: "Genia Ops",
    description: "Enterprise AI. Operational control.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${zenDots.variable}`}>
      <body>{children}</body>
    </html>
  );
}
