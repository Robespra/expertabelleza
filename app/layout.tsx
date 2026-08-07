import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import '../src/app/globals.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ExpertaBelleza - Comparativas de depiladoras, hidropulsadores y más",
  description: "ExpertaBelleza: comparativas independientes y opiniones auténticas sobre depiladoras de luz pulsada IPL, hidropulsadores dentales y otros aparatos de belleza y bienestar. Tests, precios, eficacia y recomendaciones de expertas.",
  keywords: "expertabelleza, comparativa depiladora luz pulsada, comparativa IPL, comparativa hidropulsador dental, avis aparatos belleza, tests independientes belleza",
  openGraph: {
    title: "ExpertaBelleza - Comparativas de depiladoras, hidropulsadores y más",
    description: "ExpertaBelleza: comparativas independientes y opiniones auténticas sobre depiladoras de luz pulsada IPL, hidropulsadores dentales y otros aparatos de belleza y bienestar.",
    type: "website",
    images: [
      {
        url: "/images/comparatif_epilateurs_header2026.jpg",
        width: 1200,
        height: 600,
        alt: "ExpertaBelleza - Comparativas de depiladoras y aparatos de belleza"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ExpertaBelleza - Comparativas de depiladoras, hidropulsadores y más",
    description: "ExpertaBelleza: comparativas independientes y opiniones auténticas sobre depiladoras de luz pulsada IPL, hidropulsadores dentales y otros aparatos de belleza y bienestar.",
    images: ["/images/comparatif_epilateurs_header2026.jpg"]
  }
 };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HWVJ1DBJLG"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HWVJ1DBJLG', {
              'send_page_view': true,
              'linker': { 'domains': ['lumeor.fr', 'expertabelleza.es'], 'accept_incoming': true }
            });
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
