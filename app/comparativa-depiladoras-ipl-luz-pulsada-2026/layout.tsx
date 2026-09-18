import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mejores Depiladoras de Luz Pulsada IPL 2026: Comparativa Completa | ExpertaBelleza",
  description: "Comparativa 2026 de las 5 mejores depiladoras de luz pulsada IPL, con el lumeor Pulse Pro II como elección #1. Precios, potencia y resultados probados.",
  keywords: "depiladora luz pulsada, IPL, reducción vello, comparativa depiladora luz pulsada 2026, mejor depiladora de luz pulsada, depilación en casa, lumeor Pulse Pro II",
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://expertabelleza.es/comparativa-depiladoras-ipl-luz-pulsada-2026',
    title: 'Mejores Depiladoras de Luz Pulsada IPL 2026: Comparativa Completa | ExpertaBelleza',
    description: 'Guía de compra 2026 de las mejores depiladoras de luz pulsada IPL con precios, opiniones y tests en profundidad.',
    images: [
      {
        url: 'https://expertabelleza.es/images/comparatif_epilateurs_header2026.jpg',
        width: 1200,
        height: 630,
        alt: 'Comparativa de las mejores depiladoras de luz pulsada IPL 2026',
      }
    ],
    siteName: 'ExpertaBelleza',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mejores Depiladoras de Luz Pulsada IPL 2026 | Test Completo y Comparativa',
    description: 'Nuestro equipo ha probado las mejores depiladoras de luz pulsada IPL de 2026. Descubre nuestra selección.',
    images: ['/images/comparatif_epilateurs_header2026.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://expertabelleza.es/comparativa-depiladoras-ipl-luz-pulsada-2026',
  },
  authors: [{ name: 'Carmen Ruiz' }],
  publisher: 'ExpertaBelleza',
};

export default function DepiladoraIPL2026Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
