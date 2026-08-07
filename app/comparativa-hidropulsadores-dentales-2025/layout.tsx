import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top 5 Hidropulsadores Dentales en 2025 - Comparativa Completa | ExpertaBelleza",
  description: "Comparativa de los mejores hidropulsadores dentales probados por nuestro equipo de expertas en 2025. Higiene bucodental óptima en casa.",
  keywords: "hidropulsador dental, irrigador bucal, higiene bucodental, comparativa hidropulsadores 2025, mejor hidropulsador dental, Waterpik, Oral-B, Philips",
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://expertabelleza.es/comparativa-hidropulsadores-dentales-2025',
    title: 'Comparativa: Top 5 Hidropulsadores Dentales en 2025 | ExpertaBelleza',
    description: 'Guía de compra completa de los mejores hidropulsadores dentales con precios, opiniones y tests en profundidad.',
    images: [
      {
        url: 'https://expertabelleza.es/images/JetDentaireComparison-main.jpg',
        width: 1200,
        height: 630,
        alt: 'Comparativa de los mejores hidropulsadores dentales 2025',
      }
    ],
    siteName: 'ExpertaBelleza',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 5 Hidropulsadores Dentales 2025 | Test Completo y Comparativa',
    description: 'Nuestro equipo ha probado los mejores hidropulsadores dentales. Descubre nuestra selección.',
    images: ['/images/JetDentaireComparison-main.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://expertabelleza.es/comparativa-hidropulsadores-dentales-2026',
  },
  authors: [{ name: 'Emmanuelle Harault' }],
  publisher: 'ExpertaBelleza',
};

export default function HidropulsadorDental2025Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
