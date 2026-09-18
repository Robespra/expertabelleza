import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Depiladora de Luz Pulsada IPL para Hombre 2026: lumeor Pulse Pro II y Luxe K | ExpertaBelleza",
  description: "Comparativa 2026 de las mejores depiladoras de luz pulsada IPL para hombre: pecho, espalda y piernas. lumeor Pulse Pro II (79€) y lumeor Luxe K (139€) puestos a prueba.",
  keywords: "depiladora luz pulsada hombre, IPL hombre, depilación pecho espalda, lumeor Pulse Pro II, lumeor Luxe K, depilación masculina 2026",
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://expertabelleza.es/depiladora-ipl-hombre-2026',
    title: 'Depiladora de Luz Pulsada IPL para Hombre 2026: lumeor Pulse Pro II y Luxe K | ExpertaBelleza',
    description: 'Comparativa completa de las mejores depiladoras de luz pulsada IPL para hombre en 2026, con precios y resultados probados.',
    images: [
      {
        url: 'https://expertabelleza.es/images/comparatif_epilateurs_men_header2026.jpg',
        width: 1200,
        height: 630,
        alt: 'Comparativa de las mejores depiladoras de luz pulsada IPL para hombre 2026',
      }
    ],
    siteName: 'ExpertaBelleza',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Depiladora de Luz Pulsada IPL para Hombre 2026 | lumeor Pulse Pro II y Luxe K',
    description: 'Nuestro equipo ha probado las mejores depiladoras de luz pulsada IPL para hombre. Descubre nuestra selección.',
    images: ['/images/comparatif_epilateurs_men_header2026.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://expertabelleza.es/depiladora-ipl-hombre-2026',
  },
  authors: [{ name: 'Carmen Ruiz' }],
  publisher: 'ExpertaBelleza',
};

export default function DepiladoraIPLHombreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
