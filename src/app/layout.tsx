import '@knadh/oat/oat.min.css';
import './globals.css'
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import { Providers } from "./providers";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://beidou.sayago.dev";

const title = "Beidou 北斗 - Keyboard Navigation Library";
const description =
  "Beidou is a lightweight, accessible keyboard navigation library for web applications. Navigate menus, grids, and interactive elements with arrow keys and roving tabindex.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${BASE_URL}/`,
    languages: {
      en: `${BASE_URL}/`,
      es: `${BASE_URL}/es`,
    },
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    alternateLocale: "es_ES",
    siteName: "Beidou 北斗",
    url: `${BASE_URL}/`,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const beidou = localFont({
  src: [
    {
      path: "../../public/font/hanyi-olive-body-jane.woff2",
      weight: "100 900",
      style: "normal"
    },
  ],
  variable: '--font-beidou'
})

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={`${jetBrainsMono.variable} ${beidou.variable}`} suppressHydrationWarning>
      <body data-ko-ctx="root">
        <Providers locale="en">
          {children}
        </Providers>
        <Script src="/oat.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  )
}
