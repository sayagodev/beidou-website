import type { Metadata } from "next";
import type { NextLayoutIntlayer } from "next-intlayer";
import Script from "next/script";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

import { Providers } from "../providers";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://beidou.dev";

const beidou = localFont({
  src: [
    {
      path: "../../../public/font/hanyi-olive-body-jane.woff2",
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

const metadataByLocale: Record<string, { title: string; description: string }> = {
  en: {
    title: "Beidou 北斗 - Keyboard Navigation Library",
    description:
      "Beidou is a lightweight, accessible keyboard navigation library for web applications. Navigate menus, grids, and interactive elements with arrow keys and roving tabindex.",
  },
  es: {
    title: "Beidou 北斗 - Librería de Navegación por Teclado",
    description:
      "Beidou es una librería ligera y accesible de navegación por teclado para aplicaciones web. Navega menús, cuadrículas y elementos interactivos con flechas de dirección y roving tabindex.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const { title, description } = metadataByLocale[locale] ?? metadataByLocale.en;
  const canonicalPath = locale === "en" ? "/" : `/${locale}`;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}${canonicalPath}`,
      languages: {
        en: `${BASE_URL}/`,
        es: `${BASE_URL}/es`,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_ES",
      siteName: "Beidou 北斗",
      url: `${BASE_URL}${canonicalPath}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
  const { locale } = await params

  return (
    <html lang={locale} className={`${jetBrainsMono.variable} ${beidou.variable}`} suppressHydrationWarning>
      <body data-ko-ctx="root">
        <Providers locale={locale}>
          {children}
        </Providers>
        <Script src="/oat.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}

export default LocaleLayout
