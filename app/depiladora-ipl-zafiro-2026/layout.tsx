import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Depiladora de Luz Pulsada IPL con Zafiro 2026: lumeor Luxe K | ExpertaBelleza",
  description: "Comparativa 2026 de las depiladoras de luz pulsada IPL con enfriamiento por zafiro. El lumeor Luxe K (139€) frente a Ulike, Braun y no!no!, puesto a prueba.",
  keywords: "depiladora luz pulsada zafiro, enfriamiento zafiro IPL, lumeor Luxe K, Ulike Air 3, depilación sin dolor 2026",
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://expertabelleza.es/depiladora-ipl-zafiro-2026',
    title: 'Depiladora de Luz Pulsada IPL con Zafiro 2026: lumeor Luxe K | ExpertaBelleza',
    description: 'Comparativa completa de las depiladoras de luz pulsada IPL con tecnología de enfriamiento por zafiro en 2026, con precios y resultados probados.',
    images: [
      {
        url: 'https://expertabelleza.es/images/comparatif_epilateurs_header2026.jpg',
        width: 1200,
        height: 630,
        alt: 'Comparativa de las mejores depiladoras de luz pulsada IPL con zafiro 2026',
      }
    ],
    siteName: 'ExpertaBelleza',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Depiladora de Luz Pulsada IPL con Zafiro 2026 | lumeor Luxe K',
    description: 'Nuestro equipo ha probado las mejores depiladoras de luz pulsada IPL con enfriamiento por zafiro. Descubre nuestra selección.',
    images: ['/images/comparatif_epilateurs_header2026.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://expertabelleza.es/depiladora-ipl-zafiro-2026',
  },
  authors: [{ name: 'Carmen Ruiz' }],
  publisher: 'ExpertaBelleza',
};

export default function DepiladoraIPLZafiroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
