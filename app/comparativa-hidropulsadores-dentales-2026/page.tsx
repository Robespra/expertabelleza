"use client"

import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

// Ensure the Window interface includes gtag
declare global {
  interface Window {
    gtag: Function;
    dataLayer: any[];
    ga: Function;
  }
}

export default function HidropulsadorDentalComparativa() {
  const lumeorBaseUrl = "https://lumeor.fr/produit/jet-dentaire-hydropulseur-lyrax-pro/";
  const decoratedLumeorUrl = `${lumeorBaseUrl}?utm_source=expertabelleza&utm_medium=referral&utm_campaign=hidropulsador-dental-review`;

  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Structured Data for SEO */}
      <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Top 5 Hidropulsadores Dentales en 2026 - Comparativa Exclusiva",
          "description": "Comparativa detallada de los mejores hidropulsadores dentales probados por nuestro equipo de expertas en 2026.",
          "image": "https://expertabelleza.es/images/JetDentaireComparison-main.jpg",
          "datePublished": "2026-01-06T09:00:00+01:00",
          "dateModified": "2026-01-06T09:00:00+01:00",
          "author": {
            "@type": "Person",
            "name": "Emmanuelle Harault",
            "jobTitle": "Experta en higiene bucodental"
          },
          "publisher": {
            "@type": "Organization",
            "name": "ExpertaBelleza",
            "logo": {
              "@type": "ImageObject",
              "url": "https://expertabelleza.es/logo.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://expertabelleza.es/comparativa-hidropulsadores-dentales-2026"
          },
          "articleSection": "Higiene Bucodental & Salud",
          "keywords": "hidropulsador dental 2026, irrigador bucal 2026, comparativa hidropulsadores dentales 2026, mejor hidropulsador dental 2026"
        })}
      </Script>
      <Script id="faq-structured-data" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "¿Con qué frecuencia usar un hidropulsador dental?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Se recomienda el uso diario, idealmente por la noche después del cepillado. Empieza con 2-3 veces por semana y aumenta progresivamente según tu comodidad."
              }
            },
            {
              "@type": "Question",
              "name": "¿Los hidropulsadores dentales reemplazan el hilo dental?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, complementan el cepillado y el hilo dental tradicional. Son especialmente eficaces para eliminar los restos de alimentos y masajear las encías."
              }
            },
            {
              "@type": "Question",
              "name": "¿Se puede usar enjuague bucal en el depósito?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí, pero dilúyelo con agua (50/50). El agua tibia sigue siendo la opción más segura para conservar tu aparato."
              }
            }
          ]
        })}
      </Script>
      <Script id="google-ads-pageview" strategy="afterInteractive">
        {`
          gtag('event', 'page_view', {
            'send_to': 'AW-1003252837',
            'custom_parameters': {
              'product_category': 'dental_care',
              'product_type': 'water_flosser'
            }
          });
        `}
      </Script>

      {/* Page Navigation Menu */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <div className="flex space-x-1 py-3 min-w-max">
              <a href="#resumen" className="px-3 py-1 text-sm font-medium bg-blue-600 text-white rounded-full whitespace-nowrap">
                Resumen
              </a>
              <span className="text-gray-300 text-xs">•</span>
              <a href="#top-5" className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap">
                Top 5
              </a>
              <span className="text-gray-300 text-xs">•</span>
              <a href="#comparativa" className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap">
                Comparativa
              </a>
              <span className="text-gray-300 text-xs">•</span>
              <a href="#metodologia" className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap">
                Metodología
              </a>
              <span className="text-gray-300 text-xs">•</span>
              <a href="#guia-compra" className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap">
                Guía de compra
              </a>
              <span className="text-gray-300 text-xs">•</span>
              <a href="#faq" className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap">
                F.A.Q
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article id="resumen" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white">
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <a href="/" className="hover:text-blue-600">Inicio</a>
            <span className="mx-2">›</span>
            <span>Hidropulsadores dentales</span>
          </div>

          <div className="relative mb-8">
            <Image
              src="/images/JetDentaireComparison-main.jpg"
              alt="Comparativa de los mejores hidropulsadores dentales 2026"
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-2xl"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-blue-600 text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg">
                Guía Experta
              </span>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
            <span className="block">Mejores Hidropulsadores Dentales</span>
            <span className="text-blue-600">2026</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Nuestra selección actualizada 2026 de los 5 mejores hidropulsadores dentales,
            evaluados según los últimos avances en salud bucodental para una higiene óptima y reducir tus gastos en cuidados dentales.
          </p>

          {/* Author & Meta Info */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                width={60}
                height={60}
                className="rounded-full mr-4"
                src="/images/EmmanuelleHarault.jpg"
                alt="Emmanuelle Harault"
              />
              <div>
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <span>6 enero 2026</span>
                  <span className="mx-2">•</span>
                  <span>Actualizado: 6 enero 2026</span>
                </div>
                <p className="font-semibold text-lg text-gray-900">Por Emmanuelle Harault</p>
                <p className="text-sm text-gray-600">Experta en higiene bucodental • 8 años de experiencia</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex space-x-1 mr-2">
                {[1,2,3,4,5].map((star) => (
                  <span key={star} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <span className="text-sm text-gray-600">(4,9/5 • 15 valoraciones)</span>
            </div>
          </div>
        </div>

        {/* Top 5 Products */}
        <section id="top-5" className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Top 5 Mejores Hidropulsadores Dentales 2026
          </h2>

          {/* #1 Product - LyraX Pro */}
          <a
            href={decoratedLumeorUrl}
            className="block bg-white rounded-2xl shadow-xl p-8 mb-8 border-4 border-blue-600 relative overflow-hidden hover:shadow-2xl hover:border-blue-700 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-6 py-2 rounded-bl-2xl">
              <span className="font-bold text-lg">#1 ELECCIÓN EXPERTA</span>
            </div>

            <div className="grid md:grid-cols-5 gap-8 items-center">
              {/* Image first on mobile, second on desktop */}
              <div className="flex justify-center order-1 md:order-2 md:col-span-2">
                <Image
                  width={200}
                  height={300}
                  className="mx-auto rounded-2xl transition-transform duration-300 shadow-lg hover:scale-105"
                  src="/images/LyraXSolo.jpg"
                  alt="LyraX Pro Hidropulsador Dental - Nuestra elección #1"
                />
              </div>

              {/* Content second on mobile, first on desktop */}
              <div className="order-2 md:order-1 md:col-span-3">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 pr-32">
                  luméor LyraX Pro Hidropulsador Dental
                </h3>

                <div className="flex items-center mb-6">
                  <div className="flex space-x-1 mr-4">
                    {[1,2,3,4].map((star) => (
                      <span key={star} className="text-yellow-400 text-2xl">★</span>
                    ))}
                    <span className="text-2xl relative inline-block">
                      <span className="text-gray-300">★</span>
                      <span className="text-yellow-400 absolute top-0 left-0 overflow-hidden w-1/2">★</span>
                    </span>
                  </div>
                  <span className="text-gray-600 font-medium">4,8/5 • 2.847 valoraciones</span>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-blue-800 mb-3 text-lg">Por qué es nuestro #1:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">•</span>
                      <span className="text-gray-700"><strong>Resultados probados:</strong> Nota excepcional de 4,9/5 basada en más de 2.800 valoraciones verificadas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">•</span>
                      <span className="text-gray-700"><strong>Precio imbatible:</strong> Solo 49€ (gastos de envío incluidos), la mejor relación calidad-precio del mercado</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">•</span>
                      <span className="text-gray-700"><strong>Tecnología avanzada:</strong> Hidropulsador inteligente con 5 modos de limpieza</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">•</span>
                      <span className="text-gray-700"><strong>Práctico:</strong> Limpieza completa en 2 minutos, depósito de 300 ml</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center bg-gray-50 rounded-lg p-4">
                    <div className="text-blue-600 font-bold text-2xl">49€</div>
                    <div className="text-gray-600 text-sm">Precio</div>
                  </div>
                  <div className="text-center bg-gray-50 rounded-lg p-4">
                    <div className="text-blue-600 font-bold text-2xl">2 min</div>
                    <div className="text-gray-600 text-sm">Limpieza completa</div>
                  </div>
                  <div className="text-center bg-gray-50 rounded-lg p-4">
                    <div className="text-blue-600 font-bold text-xl">300 ml</div>
                    <div className="text-gray-600 text-sm">Depósito</div>
                  </div>
                </div>

                <div className="bg-blue-600 text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-700 transition-colors">
                  Sitio oficial →
                </div>
              </div>
            </div>
          </a>

          {/* Detailed Analysis Section for #1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Análisis detallado del luméor LyraX Pro Hidropulsador Dental</h3>

            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Nuestra primera elección sigue siendo incontestable en 2026: el <strong>LyraX Pro Hidropulsador Dental</strong>, lanzado a principios de 2025, continúa superando a la competencia por su excepcional relación rendimiento-precio.
                Tras su rotundo éxito en Alemania y Reino Unido, este dispositivo se ha consolidado definitivamente como la referencia del mercado español frente a las marcas establecidas.</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                El LyraX Pro ofrece <strong>5 modos de presión ajustables</strong> y <strong>un depósito inteligente</strong> que garantiza <strong>una limpieza bucodental completa en solo 2 minutos</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                La tecnología LyraX Pro está basada en años de investigación con dentistas y expertos de primer nivel. El aparato <strong>incorpora un depósito de 300 ml</strong>, lo que equivale a varias sesiones sin necesidad de recargarlo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-bold text-green-800 mb-4">Ventajas</h4>
                <ul className="space-y-3">
                  {[
                    "Resultados probados : Nota excepcional de 4,9/5 basada en más de 2.800 valoraciones; eficacia confirmada por nuestros tests internos.",
                    "Precio imbatible : Solo 49€, gastos de envío incluidos; la solución de limpieza dental más asequible y eficaz que hemos probado.",
                    "Limpieza rápida : Higiene bucodental completa en solo 2 minutos, una vez al día.",
                    "Tecnología avanzada : 5 modos de presión para personalizar la limpieza según tus necesidades.",
                    "Práctico : Depósito de 300 ml para varias sesiones sin recarga constante.",
                    "Versátil : Ideal para encías sensibles, ortodoncia, implantes y mantenimiento diario.",
                    "Seguro y eficaz : Hidropulsador inteligente con control automático de presión.",
                    "Diseño compacto : Fácil de guardar y transportar, perfecto para viajes.",
                    "Accesorios incluidos : Boquillas múltiples y cargador USB incluidos."
                  ].map((advantage, index) => {
                    const boldPart = advantage.split(' : ')[0];
                    const restOfString = advantage.split(' : ').slice(1).join(' : ');
                    return (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span className="text-gray-700">
                          <strong>{boldPart}</strong>: {restOfString}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-red-800 mb-4">Inconvenientes</h4>
                <ul className="space-y-3">
                  {[
                    "Uso personal : Concebido para uso familiar; puede no ser adecuado para uso profesional.",
                    "Disponibilidad geográfica : Disponible únicamente en España y países limítrofes.",
                    "Solo online : Disponible exclusivamente por internet, no en tiendas físicas.",
                    "Stock limitado : Alta demanda; disponibilidad a veces reducida."
                  ].map((disadvantage, index) => {
                    const boldPart = disadvantage.split(' : ')[0];
                    const restOfString = disadvantage.split(' : ').slice(1).join(' : ');
                    return (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-red-600 mt-1">▲</span>
                        <span className="text-gray-700">
                          <strong>{boldPart}</strong>: {restOfString}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* User Testimonial */}
            <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-lg p-6 mb-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold text-lg">M</div>
                <div>
                  <p className="italic text-gray-700 mb-2">"El LyraX Pro es increíble. En solo 2 minutos noto una sensación de frescor espectacular. Mis encías nunca habían estado tan sanas."</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-semibold text-gray-800">María L., 32 años, Madrid</p>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Verificado ✓ • Compra confirmada • Testimonio traducido al español</p>
                </div>
              </div>
            </div>

            {/* Official Site Link */}
            <div className="text-center mt-6">
              <a
                href={decoratedLumeorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg hover:shadow-xl"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'click', {
                      event_category: 'outbound',
                      event_label: 'lumeor_detailed_analysis',
                      transport_type: 'beacon'
                    });
                  }
                }}
              >
                Ver en el sitio oficial →
              </a>
            </div>
          </div>

          {/* Other Products - Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* #2 Product - Oral B Hydropulseur */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Oral B Hidropulsador</h3>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-bold">#2</span>
              </div>
              <div className="text-center mb-4">
                <Image
                  width={200}
                  height={250}
                  className="mx-auto rounded-lg"
                  src="/images/JetDentaireOralB447c15d191011466552ad5993e6912e4-600x600.png"
                  alt="Oral-B Hidropulsador 2026 - Sistema de presión adaptativa optimizado"
                />
              </div>
              <div className="flex items-center mb-3">
                <div className="flex space-x-1 mr-3">
                  {[1,2,3,4].map((star) => (
                    <span key={star} className="text-yellow-400">★</span>
                  ))}
                  <span className="text-yellow-400">⭐</span>
                </div>
                <span className="text-gray-600 text-sm">4,3/5 • 1.456 valoraciones</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Edición 2026 con sistema de presión adaptativa optimizado y depósito XXL.
                La reputada marca Oral-B mantiene su posicionamiento tarifario premium.
              </p>
              <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-purple-600">100€</div>
                  <div className="text-gray-500">Precio</div>
                </div>
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-purple-600">5 modos</div>
                  <div className="text-gray-500">Modos</div>
                </div>
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-purple-600">600 ml</div>
                  <div className="text-gray-500">Depósito</div>
                </div>
              </div>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Ver en Amazon →
              </button>
            </div>

            {/* #2 Product Detailed Analysis - Oral B */}
            <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-8 mt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Análisis detallado del Oral B Hidropulsador</h3>
              <p className="text-gray-700 mb-6">
                En 2026, el Oral B Hidropulsador confirma su posición de solución premium con mejoras en su tecnología de presión inteligente.
                Con su generoso depósito de 600 ml y sus 5 modos de limpieza refinados, ofrece una experiencia de uso muy completa.
                Sin embargo, su precio mantenido a 100€ y su mayor tamaño lo sitúan por detrás de nuestra primera recomendación en el criterio calidad-precio.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-green-800 mb-4">✓ Puntos fuertes</h4>
                  <ul className="space-y-3">
                    {[
                      "Marca reconocida : Oral B, líder mundial con excelente reputación en cuidado dental.",
                      "Gran depósito : 600 ml para un uso prolongado sin recarga constante.",
                      "Tecnología inteligente : Presión de agua adaptativa para una limpieza óptima y segura.",
                      "5 modos de limpieza : Personalización completa según tus necesidades específicas.",
                      "Construcción robusta : Materiales de calidad para una durabilidad a largo plazo.",
                      "Servicio posventa : SAV Oral B receptivo con garantía extendida del fabricante."
                    ].map((advantage, index) => {
                      const boldPart = advantage.split(' : ')[0];
                      const restOfString = advantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span className="text-gray-700">
                            <strong>{boldPart}</strong>: {restOfString}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-red-800 mb-4">✗ Inconvenientes</h4>
                  <ul className="space-y-3">
                    {[
                      "Precio elevado : 100€, es decir un 26% más caro que el LyraX Pro para resultados similares.",
                      "Tamaño : Mayor volumen que requiere más espacio de almacenamiento.",
                      "Autonomía limitada : La batería se descarga más rápido de lo esperado.",
                      "Nivel sonoro : Más ruidoso que las alternativas compactas modernas."
                    ].map((disadvantage, index) => {
                      const boldPart = disadvantage.split(' : ')[0];
                      const restOfString = disadvantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-red-600 mt-1">✗</span>
                          <span className="text-gray-700">
                            <strong>{boldPart}</strong>: {restOfString}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {/* #3 Product - Waterpik Blue Advanced */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Waterpik Blue Advanced</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">#3</span>
              </div>
              <div className="text-center mb-4">
                <Image
                  width={200}
                  height={250}
                  className="mx-auto rounded-lg"
                  src="/images/JetDentairewaterpik-cordless-advanced-water-flosser-wp-563-blue-600x480.webp"
                  alt="Waterpik Blue Advanced 2026 - Hidropulsador dental inalámbrico premium"
                />
              </div>
              <div className="flex items-center mb-3">
                <div className="flex space-x-1 mr-3">
                  {[1,2,3,4].map((star) => (
                    <span key={star} className="text-yellow-400">★</span>
                  ))}
                  <span className="text-gray-300">★</span>
                </div>
                <span className="text-gray-600 text-sm">4,0/5 • 1.892 valoraciones</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Líder mundial 2026 con innovaciones inalámbricas. Tecnología clínicamente validada en formato portátil,
                pero precio premium persistente y tamaño voluminoso.
              </p>
              <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-blue-600">120€</div>
                  <div className="text-gray-500">Precio</div>
                </div>
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-blue-600">Múltiples</div>
                  <div className="text-gray-500">Modos</div>
                </div>
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-blue-600">220 ml</div>
                  <div className="text-gray-500">Depósito</div>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Ver en Amazon →
              </button>
            </div>

            {/* #3 Product Detailed Analysis - Waterpik */}
            <div className="lg:col-span-2 bg-blue-50 rounded-2xl p-8 mt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Análisis detallado del Waterpik Blue Advanced</h3>
              <p className="text-gray-700 mb-6">
                El Waterpik Blue Advanced capitaliza en la renombrada trayectoria internacional de Waterpik, pionero de los hidropulsadores desde hace décadas.
                Con su arquitectura inalámbrica optimizada para 2026 y su tecnología de pulsación patentada, despliega una eficacia de limpieza notable.
                Sin embargo, su precio premium mantenido a 120€ y su mayor tamaño dificultan justificar la inversión
                frente a soluciones más accesibles con mejor relación valor-precio.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-green-800 mb-4">✓ Puntos fuertes</h4>
                  <ul className="space-y-3">
                    {[
                      "Marca líder : Waterpik, referencia mundial con 50 años de expertise en higiene dental.",
                      "Tecnología probada : Sistema de limpieza clínicamente testado y aprobado por dentistas.",
                      "Uso bajo el agua : Diseño estanco IPX7 para uso en la ducha.",
                      "Potencia de limpieza : Presión de agua óptima para eliminar eficazmente el sarro.",
                      "Diseño inalámbrico : Libertad de movimiento total sin restricción de cable.",
                      "Múltiples modos : Personalización según el tipo de limpieza deseada."
                    ].map((advantage, index) => {
                      const boldPart = advantage.split(' : ')[0];
                      const restOfString = advantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span className="text-gray-700">
                            <strong>{boldPart}</strong>: {restOfString}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-red-800 mb-4">✗ Inconvenientes</h4>
                  <ul className="space-y-3">
                    {[
                      "Precio elevado : 120€, un 52% más caro que el LyraX Pro para resultados comparables.",
                      "Depósito limitado : 220 ml que requiere recargas frecuentes en uso familiar.",
                      "Tamaño : Mayor volumen que los modelos compactos modernos.",
                      "Tecnología estancada : Sin innovaciones recientes respecto a la competencia emergente."
                    ].map((disadvantage, index) => {
                      const boldPart = disadvantage.split(' : ')[0];
                      const restOfString = disadvantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-red-600 mt-1">✗</span>
                          <span className="text-gray-700">
                            <strong>{boldPart}</strong>: {restOfString}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {/* #4 Product - Phillips Power Flosser 3000 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Philips Power Flosser 3000</h3>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-bold">#4</span>
              </div>
              <div className="text-center mb-4">
                <Image
                  width={200}
                  height={250}
                  className="mx-auto rounded-lg"
                  src="/images/JetDentairePhilipsdba5ffb2da004171a8a0adb9009d8b4f-600x600.webp"
                  alt="Philips Power Flosser 3000 - Edición 2026 con certificación médica"
                />
              </div>
              <div className="flex items-center mb-3">
                <div className="flex space-x-1 mr-3">
                  {[1,2,3].map((star) => (
                    <span key={star} className="text-yellow-400">★</span>
                  ))}
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-gray-300">★</span>
                </div>
                <span className="text-gray-600 text-sm">3,8/5 • 756 valoraciones</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Sistema gentle-clean con homologación de dispositivo médico 2026. Alegaciones comerciales respaldadas
                pero resultados prácticos por debajo de lo esperado y relación calidad-precio cuestionable.
              </p>
              <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-orange-600">100€</div>
                  <div className="text-gray-500">Precio</div>
                </div>
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-orange-600">Suave</div>
                  <div className="text-gray-500">Tecnología</div>
                </div>
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-orange-600">250 ml</div>
                  <div className="text-gray-500">Depósito</div>
                </div>
              </div>
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                Ver en Amazon →
              </button>
            </div>

            {/* #5 Product - WellaWhite */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">WellaWhite Hidropulsador</h3>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">#5</span>
              </div>
              <div className="text-center mb-4">
                <Image
                  width={200}
                  height={250}
                  className="mx-auto rounded-lg"
                  src="/images/JetDentaireWellaWhite1-water-flosser.webp"
                  alt="WellaWhite Hidropulsador 2026 - Dispositivo de entrada de gama certificado"
                />
              </div>
              <div className="flex items-center mb-3">
                <div className="flex space-x-1 mr-3">
                  {[1,2,3].map((star) => (
                    <span key={star} className="text-yellow-400">★</span>
                  ))}
                  <span className="text-gray-300">★</span>
                  <span className="text-gray-300">★</span>
                </div>
                <span className="text-gray-600 text-sm">3,5/5 • 243 valoraciones</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Dispositivo de entrada de gama a precio accesible en 2026. Certificación médica obtenida
                pero paleta funcional muy restringida.
              </p>
              <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-red-600">80€</div>
                  <div className="text-gray-500">Precio</div>
                </div>
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-red-600">Estándar</div>
                  <div className="text-gray-500">Modo</div>
                </div>
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-red-600">200 ml</div>
                  <div className="text-gray-500">Depósito</div>
                </div>
              </div>
              <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Ver en Amazon →
              </button>
            </div>

            {/* #4 Product Detailed Analysis - Philips */}
            <div className="lg:col-span-2 bg-orange-50 rounded-2xl p-8 mt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Análisis detallado del Philips Power Flosser 3000</h3>
              <p className="text-gray-700 mb-6">
                El Philips Power Flosser 3000 apuesta por su tecnología suave y su certificación de dispositivo médico.
                Aunque promete resultados visibles y tecnología probada, nuestras pruebas revelan
                unas prestaciones decepcionantes y un precio injustificado de 100€ para un aparato con capacidades limitadas.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-green-800 mb-4">✓ Puntos fuertes</h4>
                  <ul className="space-y-3">
                    {[
                      "Dispositivo médico certificado : Homologación para uso terapéutico con estándares médicos.",
                      "Tecnología suave : Limpieza respetuosa con las encías sensibles e inflamadas.",
                      "Marca Philips : Reputación mundial y fiabilidad en cuidados personales.",
                      "Resultados visibles : Mejora de la salud gingival observada tras el uso.",
                      "Tecnología probada : Sistema de limpieza clínicamente validado por estudios."
                    ].map((advantage, index) => {
                      const boldPart = advantage.split(' : ')[0];
                      const restOfString = advantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span className="text-gray-700">
                            <strong>{boldPart}</strong>: {restOfString}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-red-800 mb-4">✗ Inconvenientes</h4>
                  <ul className="space-y-3">
                    {[
                      "Precio elevado : 100€ por unas prestaciones medias, mismo precio que el Oral B.",
                      "Depósito medio : 250 ml que requiere recargas regulares.",
                      "Expectativas no cumplidas : Rendimiento por debajo de las promesas de marketing de Philips.",
                      "Innovación limitada : Tecnología convencional sin avances recientes notables.",
                      "Relación calidad-precio : Coste elevado respecto a las funcionalidades ofrecidas frente a la competencia."
                    ].map((disadvantage, index) => {
                      const boldPart = disadvantage.split(' : ')[0];
                      const restOfString = disadvantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-red-600 mt-1">✗</span>
                          <span className="text-gray-700">
                            <strong>{boldPart}</strong>: {restOfString}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {/* #5 Product Detailed Analysis - WellaWhite */}
            <div className="lg:col-span-2 bg-red-50 rounded-2xl p-8 mt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Análisis detallado del WellaWhite Hidropulsador</h3>
              <p className="text-gray-700 mb-6">
                El WellaWhite Hidropulsador se presenta como una solución avanzada para los cuidados bucodentales,
                prometiendo una limpieza minuciosa y suave. Aunque se ofrezca a un precio accesible de 80€
                y cuente con estatus de dispositivo médico, nuestras pruebas revelan unas prestaciones limitadas y unas
                funcionalidades básicas que no pueden rivalizar con las alternativas modernas del mercado.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-green-800 mb-4">✓ Puntos fuertes</h4>
                  <ul className="space-y-3">
                    {[
                      "Precio accesible : 80€, el aparato más económico de nuestra selección.",
                      "Dispositivo médico : Certificación para uso terapéutico y cuidados dentales.",
                      "Limpieza suave : Respetuoso con las encías sensibles y problemas gingivales.",
                      "Diseño compacto : Facilidad de almacenamiento y transporte para viajes."
                    ].map((advantage, index) => {
                      const boldPart = advantage.split(' : ')[0];
                      const restOfString = advantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span className="text-gray-700">
                            <strong>{boldPart}</strong>: {restOfString}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-red-800 mb-4">✗ Inconvenientes</h4>
                  <ul className="space-y-3">
                    {[
                      "Depósito muy limitado : 200 ml que requiere recargas muy frecuentes.",
                      "Modo único : Sin personalización de la presión del agua.",
                      "Tecnología básica : Funcionalidades limitadas respecto a la competencia.",
                      "Eficacia reducida : Resultados por debajo de las expectativas para una limpieza óptima.",
                      "Durabilidad cuestionable : Construcción aparentemente menos robusta de lo esperado.",
                      "Soporte limitado : Servicio posventa básico con garantía reducida."
                    ].map((disadvantage, index) => {
                      const boldPart = disadvantage.split(' : ')[0];
                      const restOfString = disadvantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-red-600 mt-1">✗</span>
                          <span className="text-gray-700">
                            <strong>{boldPart}</strong>: {restOfString}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section id="comparativa" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Tabla Comparativa Detallada
            </h2>

            <div className="overflow-x-auto mb-12">
              <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-blue-600 to-sky-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Modelo</th>
                    <th className="px-6 py-4 text-center">Precio</th>
                    <th className="px-6 py-4 text-center">Nota</th>
                    <th className="px-6 py-4 text-center">Modos</th>
                    <th className="px-6 py-4 text-center">Depósito</th>
                    <th className="px-6 py-4 text-center">Garantía</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-blue-50 border-l-4 border-blue-600">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="text-blue-600 font-bold mr-2">🏆</span>
                        <div>
                          <div className="font-bold">
                            <a href={decoratedLumeorUrl} className="text-blue-600 hover:underline">
                              LyraX Pro
                            </a>
                          </div>
                          <div className="text-sm text-gray-500">Nuestra elección #1</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="font-bold text-blue-600">49€</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="font-bold text-blue-600">4,9/5</div>
                      <div className="text-yellow-400">★★★★⭐</div>
                    </td>
                    <td className="px-6 py-4 text-center font-bold">5 modos</td>
                    <td className="px-6 py-4 text-center font-bold text-blue-600">300 ml</td>
                    <td className="px-6 py-4 text-center">1 año</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="text-purple-600 font-bold mr-2">#2</span>
                        <div>
                          <div className="font-bold">Oral B Hidropulsador</div>
                          <div className="text-sm text-gray-500">Tecnología inteligente</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center font-bold">100€</td>
                    <td className="px-6 py-4 text-center">
                      <div className="font-bold text-purple-600">4,3/5</div>
                      <div className="text-yellow-400">★★★★⭐</div>
                    </td>
                    <td className="px-6 py-4 text-center font-bold">5 modos</td>
                    <td className="px-6 py-4 text-center">600 ml</td>
                    <td className="px-6 py-4 text-center">2 años</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="text-blue-600 font-bold mr-2">#3</span>
                        <div>
                          <div className="font-bold">Waterpik Blue Advanced</div>
                          <div className="text-sm text-gray-500">Diseño inalámbrico</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center font-bold">120€</td>
                    <td className="px-6 py-4 text-center">
                      <div className="font-bold text-blue-600">4,0/5</div>
                      <div className="text-yellow-400">★★★★☆</div>
                    </td>
                    <td className="px-6 py-4 text-center font-bold">Múltiples</td>
                    <td className="px-6 py-4 text-center">220 ml</td>
                    <td className="px-6 py-4 text-center">2 años</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="text-orange-600 font-bold mr-2">#4</span>
                        <div>
                          <div className="font-bold">Philips Power Flosser 3000</div>
                          <div className="text-sm text-gray-500">Tecnología suave</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center font-bold">100€</td>
                    <td className="px-6 py-4 text-center">
                      <div className="font-bold text-orange-600">3,8/5</div>
                      <div className="text-yellow-400">★★★⭐☆</div>
                    </td>
                    <td className="px-6 py-4 text-center font-bold">Estándar</td>
                    <td className="px-6 py-4 text-center">250 ml</td>
                    <td className="px-6 py-4 text-center">1 año</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="text-red-600 font-bold mr-2">#5</span>
                        <div>
                          <div className="font-bold">WellaWhite Hidropulsador</div>
                          <div className="text-sm text-gray-500">Precio accesible</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center font-bold">80€</td>
                    <td className="px-6 py-4 text-center">
                      <div className="font-bold text-red-600">3,5/5</div>
                      <div className="text-yellow-400">★★★☆☆</div>
                    </td>
                    <td className="px-6 py-4 text-center font-bold">1 modo</td>
                    <td className="px-6 py-4 text-center">200 ml</td>
                    <td className="px-6 py-4 text-center">1 año</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Buying Guide */}
        <section id="guia-compra" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Guía de compra 2026
              <span className="block w-16 h-1 bg-blue-600 mx-auto mt-4 rounded"></span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600">¿Cómo elegir?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span><strong>Presión ajustable:</strong> Imprescindible para encías sensibles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span><strong>Capacidad del depósito:</strong> 300 ml o más para uso familiar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span><strong>Boquillas incluidas:</strong> Ortodoncia, implantes, estándar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span><strong>Autonomía:</strong> Batería de larga duración indispensable</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-green-600">Nuestros criterios de evaluación</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span><strong>Eficacia:</strong> Tests sobre sarro y placa dental</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span><strong>Facilidad de uso:</strong> Manejo y ergonomía</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span><strong>Durabilidad:</strong> Resistencia y longevidad</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span><strong>Relación calidad-precio:</strong> Rendimiento vs coste</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Preguntas frecuentes
              <span className="block w-16 h-1 bg-blue-600 mx-auto mt-4 rounded"></span>
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3 text-gray-900">¿Con qué frecuencia usar un hidropulsador dental?</h3>
                <p className="text-gray-700">
                  Se recomienda el uso diario, idealmente por la noche después del cepillado.
                  Empieza con 2-3 veces por semana y aumenta progresivamente según tu comodidad.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3 text-gray-900">¿Los hidropulsadores dentales reemplazan el hilo dental?</h3>
                <p className="text-gray-700">
                  No, complementan el cepillado y el hilo dental tradicional. Son especialmente
                  eficaces para eliminar los restos de alimentos y masajear las encías.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3 text-gray-900">¿Se puede usar enjuague bucal en el depósito?</h3>
                <p className="text-gray-700">
                  Sí, pero dilúyelo con agua (50/50). El agua tibia sigue siendo la opción más segura
                  para conservar tu aparato.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Guides Section */}
        <section className="py-16 bg-white border-t-2 border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nuestras otras guías de belleza y bienestar
              </h2>
              <p className="text-lg text-gray-600">
                Descubre nuestras comparativas para completar tu rutina de belleza
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* IPL Guide */}
              <Link
                href="/comparativa-depiladoras-ipl-luz-pulsada-2026"
                className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-green-100 hover:border-green-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center text-3xl">
                    ✨
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      Mejores Depiladoras IPL 2026
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm">
                      Reducción del vello con IPL eficaz en casa. Nuestra comparativa completa de las mejores depiladoras de luz pulsada desde 89€.
                    </p>
                    <div className="flex items-center text-green-600 font-medium text-sm">
                      <span>Ver la guía completa</span>
                      <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* LED Mask Guide */}
              <Link
                href="/mascarilla-led-facial-2026"
                className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-purple-100 hover:border-purple-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center text-3xl">
                    💆
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      Mascarillas LED Fototerapia 2026
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm">
                      Cuidado antiedad y tratamiento del acné en casa. Nuestra comparativa de las mejores mascarillas LED profesionales.
                    </p>
                    <div className="flex items-center text-purple-600 font-medium text-sm">
                      <span>Descubrir la guía</span>
                      <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Return to Homepage */}
              <Link
                href="/"
                className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-blue-300 md:col-span-2"
              >
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-3xl">
                    🏠
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      Todas nuestras guías de belleza y bienestar
                    </h3>
                    <div className="flex items-center justify-center text-blue-600 font-medium text-sm">
                      <span>Volver al inicio</span>
                      <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-sky-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nuestra recomendación final
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                Tras pruebas exhaustivas, el <strong>LyraX Pro</strong> sigue siendo nuestra elección #1 indiscutible
                para una higiene bucodental óptima en casa, eficaz y asequible.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">49€</div>
                    <div className="text-sm text-gray-600">Precio excepcional<br/>(excelente relación calidad/precio)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">4,8/5</div>
                    <div className="text-sm text-gray-600">Nota usuarios<br/>(2.800+ valoraciones verificadas)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">2 min</div>
                    <div className="text-sm text-gray-600">Limpieza completa<br/>(más rápido que la competencia)</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-600 text-sm mb-4">
                  Tecnología inteligente • 5 modos • Depósito 300 ml • Envío gratuito
                </p>
              </div>

              <a
                href={decoratedLumeorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'click', {
                      event_category: 'final_cta',
                      event_label: 'lumeor_bottom_page',
                      transport_type: 'beacon'
                    });
                  }
                }}
              >
                Ver el LyraX Pro en el Sitio Oficial →
              </a>

              <p className="text-xs text-gray-500 mt-4">
                Pago seguro • Envío en 24h • Garantía de satisfacción • Derecho de desistimiento 14 días
              </p>
            </div>
          </div>
        </section>

      </article>
    </main>
  );
}
