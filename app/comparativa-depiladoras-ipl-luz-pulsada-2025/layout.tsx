import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top 5 Depiladoras de Luz Pulsada IPL en 2025 - Comparativa Completa | ExpertaBelleza",
  description: "Comparativa de las mejores depiladoras de luz pulsada IPL probadas por nuestro equipo de expertas en 2025. Reducción duradera del vello corporal en casa.",
  keywords: "depiladora luz pulsada, IPL, reducción vello, comparativa depiladora luz pulsada 2025, mejor depiladora de luz pulsada, depilación en casa, lumeor Pulse Pro",
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://expertabelleza.es/comparativa-depiladoras-ipl-luz-pulsada-2025',
    title: 'Comparativa: Top 5 Depiladoras de Luz Pulsada IPL en 2025 | ExpertaBelleza',
    description: 'Guía de compra completa de las mejores depiladoras de luz pulsada IPL con precios, opiniones y tests en profundidad.',
    images: [
      {
        url: 'https://expertabelleza.es/images/comparatif_epilateurs_header.jpg',
        width: 1200,
        height: 630,
        alt: 'Comparativa de las mejores depiladoras de luz pulsada IPL 2025',
      }
    ],
    siteName: 'ExpertaBelleza',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 5 Depiladoras de Luz Pulsada IPL 2025 | Test Completo y Comparativa',
    description: 'Nuestro equipo ha probado las mejores depiladoras de luz pulsada. Descubre nuestra selección.',
    images: ['/images/comparatif_epilateurs_header.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://expertabelleza.es/comparativa-depiladoras-ipl-luz-pulsada-2026',
  },
  authors: [{ name: 'Sarah Martin' }],
  publisher: 'ExpertaBelleza',
};

export default function DepiladoraIPL2025Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
