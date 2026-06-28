import '@knadh/oat/oat.min.css';
import './globals.css'
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import { Providers } from "./providers";

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
