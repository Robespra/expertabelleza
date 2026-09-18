import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mejores Hidropulsadores Dentales 2026: Comparativa Completa | ExpertaBelleza",
  description: "Comparativa 2026 de los 5 mejores hidropulsadores dentales, con el lumeor LyraX Pro como elección #1. Precios, presión y resultados probados.",
  keywords: "hidropulsador dental, irrigador bucal, higiene bucodental, comparativa hidropulsadores 2026, mejor hidropulsador dental, lumeor LyraX Pro, Waterpik, Oral-B, Philips",
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://expertabelleza.es/comparativa-hidropulsadores-dentales-2026',
    title: 'Mejores Hidropulsadores Dentales 2026: Comparativa Completa | ExpertaBelleza',
    description: 'Guía de compra 2026 de los mejores hidropulsadores dentales con precios, opiniones y tests en profundidad.',
    images: [
      {
        url: 'https://expertabelleza.es/images/JetDentaireComparison-main.jpg',
        width: 1200,
        height: 630,
        alt: 'Comparativa de los mejores hidropulsadores dentales 2026',
      }
    ],
    siteName: 'ExpertaBelleza',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mejores Hidropulsadores Dentales 2026 | Test Completo y Comparativa',
    description: 'Nuestro equipo ha probado los mejores hidropulsadores dentales de 2026. Descubre nuestra selección.',
    images: ['/images/JetDentaireComparison-main.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://expertabelleza.es/comparativa-hidropulsadores-dentales-2026',
  },
  authors: [{ name: 'Lucía Fernández' }],
  publisher: 'ExpertaBelleza',
};

export default function HidropulsadorDental2026Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
