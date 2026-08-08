"use client"

import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

declare global {
  interface Window {
    gtag: Function;
    dataLayer: any[];
    ga: Function;
  }
}

export default function DepiladoreIPLComparativa() {
  const lumeorBaseUrl = "https://lumeor.fr/produit/epilateur-lumiere-pulsee-permanent-pulse-pro-ii/";
  const decoratedlumeorUrl = `${lumeorBaseUrl}?utm_source=expertabelleza&utm_medium=referral&utm_campaign=depiladora-ipl-review`;

  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Structured Data for SEO */}
      <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Top 5 Depiladoras de Luz Pulsada IPL en 2026 - Comparativa Exclusiva",
          "description": "Comparativa detallada de las mejores depiladoras de luz pulsada IPL probadas por nuestro equipo de expertas en 2026.",
          "image": "https://expertabelleza.es/images/comparatif_epilateurs_header2026.jpg",
          "datePublished": "2026-01-06T09:00:00+01:00",
          "dateModified": "2026-01-06T09:00:00+01:00",
          "author": {
            "@type": "Person",
            "name": "Sarah Martin",
            "jobTitle": "Experta en dermatología"
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
            "@id": "https://expertabelleza.es/comparativa-depiladoras-ipl-luz-pulsada-2026"
          },
          "articleSection": "Belleza & Cuidado Personal",
          "keywords": "depiladora IPL 2026, mejor depiladora de luz pulsada 2026, comparativa IPL 2026, depiladora luz pulsada, loop solippy, solippy opiniones, bodysiam"
        })}
      </Script>
      <Script id="tracking-validation" strategy="afterInteractive">
        {`
          document.addEventListener('DOMContentLoaded', function() {
            try {
              setTimeout(function() {
                if (typeof ga !== 'undefined') {
                  ga(function(tracker) {
                    console.log('GA Client ID: ' + tracker.get('clientId'));
                  });
                }
              }, 2000);
            } catch (e) {
              console.log('Error al comprobar GA client ID:', e);
            }
          });
        `}
      </Script>

      {/* Navigation Menu */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <div className="flex space-x-1 py-3 min-w-max">
              <a href="#resumen" className="px-3 py-1 text-sm font-medium bg-green-600 text-white rounded-full whitespace-nowrap">
                Resumen
              </a>
              <span className="text-gray-300 text-xs">•</span>
              <a href="#top-5" className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-green-600 transition-colors whitespace-nowrap">
                Top 5
              </a>
              <span className="text-gray-300 text-xs">•</span>
              <a href="#comparativa" className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-green-600 transition-colors whitespace-nowrap">
                Comparativa
              </a>
              <span className="text-gray-300 text-xs">•</span>
              <a href="#metodologia" className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-green-600 transition-colors whitespace-nowrap">
                Metodología
              </a>
              <span className="text-gray-300 text-xs">•</span>
              <a href="#guia-compra" className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-green-600 transition-colors whitespace-nowrap">
                Guía de compra
              </a>
              <span className="text-gray-300 text-xs">•</span>
              <a href="#faq" className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-green-600 transition-colors whitespace-nowrap">
                F.A.Q
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article id="resumen" className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 py-8 bg-white">
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <a href="/" className="hover:text-green-600">Inicio</a>
            <span className="mx-2">›</span>
            <span>Depiladoras de luz pulsada</span>
          </div>

          <div className="relative mb-8">
            <Image
              src="/images/comparatif_epilateurs_header2026.jpg"
              alt="Comparativa de las mejores depiladoras de luz pulsada IPL 2026"
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-2xl"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-green-600 text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg">
                ✨ Guía Experta
              </span>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
            <span className="block">Mejores Depiladoras de Luz Pulsada IPL</span>
            <span className="text-green-600">2026</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Nuestra selección actualizada 2026 de las 5 mejores depiladoras de luz pulsada IPL,
            evaluadas según las últimas innovaciones tecnológicas para una reducción del vello con IPL eficaz y duradera en casa.
          </p>

          {/* Author & Meta Info */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                width={60}
                height={60}
                className="rounded-full mr-4"
                src="/images/sarahMartin.webp"
                alt="Sarah Martin"
              />
              <div>
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <span>6 de enero de 2026</span>
                  <span className="mx-2">•</span>
                  <span>Actualizado: 6 de enero de 2026</span>
                </div>
                <p className="font-semibold text-lg text-gray-900">Por Sarah Martin</p>
                <p className="text-sm text-gray-600">Experta en dermatología • 8 años de experiencia</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex space-x-1 mr-2">
                {[1,2,3,4,5].map((star) => (
                  <span key={star} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <span className="text-sm text-gray-600">(4,9/5 • 15 opiniones)</span>
            </div>
          </div>
        </div>


        {/* Top 5 Products */}
        <section id="top-5" className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Top 5 de las Mejores Depiladoras de Luz Pulsada IPL 2026
          </h2>

          {/* #1 Product - lumeor Pulse Pro II */}
          <a
            href={decoratedlumeorUrl}
            className="block bg-white rounded-2xl shadow-xl p-2 sm:!p-6 border-4 relative overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div
              className="absolute top-0 right-0 !bg-yellow-300 !text-black px-6 py-2 rounded-bl-2xl"
              style={{ backgroundColor: '#FDE047', color: '#000000' }}
            >
              <span className="font-bold text-lg">#1 ELECCIÓN EXPERTA</span>
            </div>

            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="flex justify-center order-1 md:order-2 md:col-span-2">
                <div style={{ background: 'linear-gradient(145deg, #F9CDE0 0%, #fdebf3 100%)' }} className="p-6 rounded-2xl">
                  <Image
                    width={350}
                    height={450}
                    className="mx-auto rounded-2xl transition-transform duration-300 hover:scale-105"
                    src="/images/lumeor_pulse_proII_epilateur.webp"
                    alt="Depiladora lumeor Pulse Pro II - Nuestra elección #1"
                  />
                </div>
              </div>

              <div className="order-2 md:order-1 md:col-span-3">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 pr-32">
                  lumeor Pulse Pro II
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
                  <span className="text-gray-600 font-medium">4,8/5 • 2.847 opiniones</span>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-green-800 mb-3 text-lg">✨ Por qué es nuestra #1:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">•</span>
                      <span className="text-gray-700"><strong>Resultados:</strong> Nota media de 4,8/5 basada en más de 1.000 opiniones</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">•</span>
                      <span className="text-gray-700"><strong>Relación calidad-precio:</strong> En oferta ahora, 89€ en lugar de 142€, ¡envío premium incluido!</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">•</span>
                      <span className="text-gray-700"><strong>Resultados rápidos:</strong> Reducción visible del vello corporal tras pocas sesiones</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">•</span>
                      <span className="text-gray-700"><strong>Seguro y práctico:</strong> 990.000 destellos, más de 10 años de uso</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center bg-gray-50 rounded-lg p-4">
                    <div className="text-green-600 font-bold text-2xl">89€</div>
                    <div className="text-gray-400 text-sm line-through">142€</div>
                    <div className="text-gray-600 text-sm">Precio</div>
                  </div>
                  <div className="text-center bg-gray-50 rounded-lg p-4">
                    <div className="text-green-600 font-bold text-2xl">2 sem</div>
                    <div className="text-gray-600 text-sm">Primeros resultados</div>
                  </div>
                  <div className="text-center bg-gray-50 rounded-lg p-4">
                    <div className="text-green-600 font-bold text-xl">900K</div>
                    <div className="text-gray-600 text-sm">Destellos</div>
                  </div>
                </div>

                <div
                  className="!bg-yellow-400 !text-black text-center py-4 rounded-xl font-bold text-lg shadow-lg hover:!bg-yellow-500 transition-colors"
                  style={{ backgroundColor: '#FBBF24', color: '#000000' }}
                >
                  Sitio oficial →
                </div>
              </div>
            </div>
          </a>

          {/* Detailed Analysis Section for #1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Análisis detallado del lumeor Pulse Pro II</h3>

            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Nuestra primera elección se mantiene en 2026: el <strong>lumeor Pulse Pro II</strong>, lanzado a principios de 2025, se consolida en el mercado gracias a su excelente relación calidad-precio.
                Tras conquistar Alemania y Reino Unido, este dispositivo se posiciona como el referente de gama media en España frente a los grandes del sector.</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                El Pulse Pro II ofrece <strong>niveles de potencia ajustables</strong> y <strong>un modo deslizante</strong> que garantiza <strong>una sesión de depilación de luz pulsada rápida y eficaz en solo 5-10 minutos</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                La tecnología Pulse Pro II está basada en años de investigación junto a dermatólogos y especialistas de referencia. El aparato <strong>contiene 990.000 pulsos luminosos</strong>, lo que equivale a un período de tratamiento de 10 años.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-bold text-green-800 mb-4">✅ Ventajas</h4>
                <ul className="space-y-3">
                  {[
                    "Resultados probados : Nota excepcional de 4,8/5 basada en más de 1.000 opiniones, con resultados impresionantes confirmados en nuestras pruebas.",
                    "Rentable : Precio habitual de 142€, actualmente disponible por solo 89€ (-37%). La solución de reducción del vello más asequible que hemos probado.",
                    "Resultados rápidos : Reducción notable del vello corporal tras pocas sesiones, resultados completos en menos de 12 usos.",
                    "Efecto garantizado : Seguro y eficaz en la mayoría de tonos de piel y combinaciones de color de vello.",
                    "Práctico : Depilación de cuerpo entero en solo 5-10 minutos, una vez a la semana. Olvídate de las costosas sesiones en centro de estética.",
                    "Versátil : Apto para labio superior, barbilla, axilas, piernas, brazos y línea del bikini.",
                    "Seguro e indoloro : Dispositivo portátil con protección ocular para zonas sensibles.",
                    "Duradero : 990.000 pulsos luminosos para más de 10 años de uso.",
                    "Accesorios incluidos : Gafas de protección, rasuradora y cargador incluidos."
                  ].map((advantage, index) => {
                    const boldPart = advantage.split(' : ')[0];
                    const restOfString = advantage.split(' : ').slice(1).join(' : ');
                    return (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span className="text-gray-700">
                          <strong>{boldPart}</strong> : {restOfString}
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
                    "Uso personal : Destinado a uso personal; puede no ser adecuado para uso compartido o en centros de estética.",
                    "Disponibilidad geográfica : Disponible principalmente en España y países cercanos.",
                    "Venta online : Disponible solo en línea, no en tiendas físicas.",
                    "Stock limitado : Alta demanda, disponibilidad ocasionalmente reducida."
                  ].map((disadvantage, index) => {
                    const boldPart = disadvantage.split(' : ')[0];
                    const restOfString = disadvantage.split(' : ').slice(1).join(' : ');
                    return (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-red-600 mt-1">▲</span>
                        <span className="text-gray-700">
                          <strong>{boldPart}</strong> : {restOfString}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* User Testimonial */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mb-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-green-800 font-bold text-lg">M</div>
                <div>
                  <p className="italic text-gray-700 mb-2">"El lumeor Pulse Pro II ha transformado mi rutina de belleza. En solo 8 semanas noté una reducción increíble del vello. Ya no necesito ir a la esteticista."</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-semibold text-gray-800">María L., 28 años, Madrid</p>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Verificado ✓ • Compra confirmada</p>
                  <p className="text-xs text-gray-400 mt-1">Testimonio traducido al español</p>
                </div>
              </div>
            </div>

            {/* Screen Benefits Section */}
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-8 mb-6">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Ventaja exclusiva: Pantalla LCD inteligente</h4>
              <p className="text-gray-700 mb-6 text-center">
                El Pulse Pro II es el único de nuestra selección que integra una pantalla LCD profesional. Esta diferencia tecnológica
                transforma por completo la experiencia de depilación en casa.
              </p>
              <Image
                width={300}
                height={160}
                className="mx-auto rounded-xl"
                src="/images/compLCDgood.webp"
                alt="Pantalla LCD depiladora lumeor pulse pro II"
              />

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 text-sm font-medium text-center">
                  💡 <strong>Conclusión:</strong> La pantalla LCD del Pulse Pro II garantiza una depilación segura, eficaz y de calidad profesional.
                  Esta tecnología exclusiva justifica por sí sola la elección de este modelo para una depilación doméstica exitosa.
                </p>
              </div>
            </div>

            {/* Official Site Link */}
            <div className="text-center mt-6">
              <a
                href={decoratedlumeorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block !bg-yellow-400 hover:!bg-yellow-300 !text-black font-bold py-3 px-8 rounded-full transition-colors shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#FBBF24', color: '#000000' }}
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
            {/* #2 Product - Loop by Solippy */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Loop by Solippy</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">#2</span>
              </div>
              <div className="text-center mb-4">
                <Image
                  width={200}
                  height={250}
                  className="mx-auto rounded-lg object-contain"
                  src="/images/solippy_loop_epilateur.png"
                  alt="Loop by Solippy depiladora de luz pulsada IPL"
                />
              </div>
              <div className="flex items-center mb-3">
                <div className="flex space-x-1 mr-3">
                  {[1,2,3,4].map((star) => (
                    <span key={star} className="text-yellow-400">★</span>
                  ))}
                  <span className="text-gray-300">★</span>
                </div>
                <span className="text-gray-600 text-sm">4,0/5 • ~500 opiniones</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                El Loop by Solippy se ha consolidado como una referencia de gama media gracias a su diseño
                cuidado y su eficaz comunicación en redes sociales. Sólido, aunque a 199€ y con
                solo 300.000 destellos, no justifica su precio premium frente al Pulse Pro II a 89€.
              </p>
              <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-green-700">199€</div>
                  <div className="text-gray-500">Precio</div>
                </div>
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-green-700">6-8 sem</div>
                  <div className="text-gray-500">Resultados</div>
                </div>
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-green-700">300K</div>
                  <div className="text-gray-500">Destellos</div>
                </div>
              </div>
              <button className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
                Ver en Amazon →
              </button>
            </div>

            {/* #2 Product Detailed Analysis - Loop by Solippy */}
            <div className="lg:col-span-2 bg-green-50 rounded-2xl p-8 mt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Análisis detallado del Loop by Solippy</h3>
              <p className="text-gray-700 mb-6">
                El Loop by Solippy se ha convertido en poco tiempo en una marca reconocida en la depilación
                de luz pulsada en casa, impulsada por una estrategia de contenido en redes sociales eficaz y
                un diseño muy cuidado. Su posicionamiento de gama media a 199€ resulta atractivo sobre el papel,
                pero frente al Pulse Pro II a 89€ con 990K destellos y resultados desde las 2 semanas, la
                diferencia de valor es difícil de ignorar.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-green-800 mb-4">✓ Puntos fuertes</h4>
                  <ul className="space-y-3">
                    {[
                      "Marca europea : Servicio posventa local, comunicación en español, imagen de marca cuidada.",
                      "Diseño premium : Ergonomía y acabado a la altura de las grandes marcas para un uso cómodo.",
                      "Buena reputación : ~500 opiniones verificadas, fuerte presencia en redes sociales e influencers.",
                      "Resultados probados : Eficacia confirmada en 6 a 8 semanas en la mayoría de los perfiles probados.",
                      "Interfaz sencilla : Manejo inmediato, ideal para principiantes."
                    ].map((advantage, index) => {
                      const boldPart = advantage.split(' : ')[0];
                      const restOfString = advantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-green-600 mt-1 flex-shrink-0">✓</span>
                          <span className="text-gray-700">
                            <strong>{boldPart}</strong> : {restOfString}
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
                      "Precio 2× superior : 199€ frente a 89€ del Pulse Pro II, para resultados equivalentes o inferiores.",
                      "Destellos limitados : Solo 300.000 destellos frente a 990.000 del Pulse Pro II, vida útil mucho menor.",
                      "Resultados más lentos : 6 a 8 semanas frente a 2 semanas para los primeros resultados con el Pulse Pro II.",
                      "Sin tecnología diferenciadora : Sin enfriamiento por zafiro ni pantalla LCD avanzada.",
                      "Relación calidad-precio : El posicionamiento premium no se justifica por el rendimiento técnico."
                    ].map((disadvantage, index) => {
                      const boldPart = disadvantage.split(' : ')[0];
                      const restOfString = disadvantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-red-600 mt-1 flex-shrink-0">✗</span>
                          <span className="text-gray-700">
                            <strong>{boldPart}</strong> : {restOfString}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {/* #3 Product - Bodysiam Elite */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Bodysiam Elite</h3>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-bold">#3</span>
              </div>
              <div className="text-center mb-4">
                <Image
                  width={200}
                  height={250}
                  className="mx-auto rounded-lg object-contain"
                  src="/images/bodysiam_elite_epilateur_2026.jpg"
                  alt="Bodysiam Elite depiladora de luz pulsada IPL premium"
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
                <span className="text-gray-600 text-sm">3,6/5 • ~180 opiniones</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Bodysiam apuesta por el segmento "depilación profesional en casa" con un packaging
                de lujo y un acabado cuidado. Los resultados están presentes pero tardan (8-10 semanas),
                y su precio de 179€ es difícil de justificar frente al Pulse Pro II a 89€.
              </p>
              <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-teal-600">179€</div>
                  <div className="text-gray-500">Precio</div>
                </div>
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-teal-600">8-10 sem</div>
                  <div className="text-gray-500">Resultados</div>
                </div>
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-teal-600">500K</div>
                  <div className="text-gray-500">Destellos</div>
                </div>
              </div>
              <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Ver en Amazon →
              </button>
            </div>

            {/* #3 Product Detailed Analysis - Bodysiam Elite */}
            <div className="lg:col-span-2 bg-teal-50 rounded-2xl p-8 mt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Análisis detallado del Bodysiam Elite</h3>
              <p className="text-gray-700 mb-6">
                Bodysiam posiciona su Elite en el segmento "profesional en casa" con un
                packaging de lujo y una comunicación de gama alta. El producto cumple sus promesas
                básicas (reducción visible del vello en 8 a 10 semanas), pero sin tecnología
                diferenciadora (sin zafiro, sin pantalla LCD), su precio de 179€ es difícil de
                defender frente al Pulse Pro II a 89€, que ofrece resultados desde las 2 semanas.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-green-800 mb-4">✓ Puntos fuertes</h4>
                  <ul className="space-y-3">
                    {[
                      "Acabado premium : Packaging de lujo y aparato cuidado que inspiran confianza desde el unboxing.",
                      "500K destellos : Capital de destellos correcto para varios años de uso.",
                      "Diseño ergonómico : Manejo agradable, ligero y manejable para todas las zonas.",
                      "Servicio posventa accesible : Atención al cliente disponible y reactiva, devoluciones bien gestionadas."
                    ].map((advantage, index) => {
                      const boldPart = advantage.split(' : ')[0];
                      const restOfString = advantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-green-600 mt-1 flex-shrink-0">✓</span>
                          <span className="text-gray-700">
                            <strong>{boldPart}</strong> : {restOfString}
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
                      "Resultados lentos : 8 a 10 semanas frente a 2 semanas del Pulse Pro II, protocolo desalentador.",
                      "Precio no justificado : 179€ para resultados equivalentes a un aparato de 89€ con más destellos.",
                      "Sin tecnología diferenciadora : Ni enfriamiento por zafiro, ni pantalla LCD, ni sensor de piel.",
                      "Reputación limitada : Solo ~180 opiniones, difícil evaluar la fiabilidad a largo plazo."
                    ].map((disadvantage, index) => {
                      const boldPart = disadvantage.split(' : ')[0];
                      const restOfString = disadvantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-red-600 mt-1 flex-shrink-0">✗</span>
                          <span className="text-gray-700">
                            <strong>{boldPart}</strong> : {restOfString}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {/* #4 Product - Braun Silk Expert Pro 5 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Braun Silk Expert Pro 5</h3>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-bold">#4</span>
              </div>
              <div className="text-center mb-4">
                <Image
                  width={200}
                  height={250}
                  className="mx-auto rounded-lg"
                  src="/images/braun_epilateur2.jpg"
                  alt="Braun Silk Expert Pro 5 - Depiladora de Luz Pulsada IPL 2026 con tecnología SensoAdapt"
                />
              </div>
              <div className="flex items-center mb-3">
                <div className="flex space-x-1 mr-3">
                  {[1,2,3,4].map((star) => (
                    <span key={star} className="text-yellow-400">★</span>
                  ))}
                  <span className="text-yellow-400">⭐</span>
                </div>
                <span className="text-gray-600 text-sm">4,3/5 • 1.456 opiniones</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Edición 2026 con tecnología SensoAdapt mejorada que se adapta en tiempo real al tono de piel.
                Excelencia alemana Braun confirmada, aunque con un precio elevado.
              </p>
              <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-purple-600">412€</div>
                  <div className="text-gray-500">Precio</div>
                </div>
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-purple-600">8+ sem</div>
                  <div className="text-gray-500">Resultados</div>
                </div>
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-purple-600">400K</div>
                  <div className="text-gray-500">Destellos</div>
                </div>
              </div>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Ver en Amazon →
              </button>
            </div>

            {/* #4 Product Detailed Analysis */}
            <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-8 mt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Análisis detallado del Braun Silk Expert Pro 5</h3>
              <p className="text-gray-700 mb-6">
                En 2026, el Braun Silk Expert Pro 5 consolida su posición premium con optimizaciones de software en su tecnología SensoAdapt,
                que analiza continuamente el tono de piel para ajustar con precisión la intensidad lumínica. A pesar de
                una calidad de fabricación alemana impecable y resultados clínicamente probados, su precio elevado y su ritmo de tratamiento
                siguen siendo un freno frente a nuestra recomendación principal.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-green-800 mb-4">✓ Puntos fuertes</h4>
                  <ul className="space-y-3">
                    {[
                      "Calidad Braun : Marca reconocida con excelente construcción alemana y acabado premium.",
                      "Tecnología SensoAdapt : Análisis automático del tono de piel con ajuste de intensidad en tiempo real.",
                      "Zonas múltiples : Adaptadores especializados para cara y cuerpo con ergonomía optimizada.",
                      "Mayor seguridad : Sensor de piel integrado que evita destellos accidentales en zonas no aptas.",
                      "Durabilidad : 400.000 destellos garantizan varios años de uso intensivo.",
                      "Soporte al cliente : Servicio posventa Braun reactivo con garantía del fabricante ampliada."
                    ].map((advantage, index) => {
                      const boldPart = advantage.split(' : ')[0];
                      const restOfString = advantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span className="text-gray-700">
                            <strong>{boldPart}</strong> : {restOfString}
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
                      "Precio elevado : 412€, más de 4 veces el precio de nuestra elección #1 para resultados similares.",
                      "Velocidad lenta : Tratamiento completo del cuerpo en 20-25 minutos frente a 5-10 minutos del lumeor.",
                      "Resultados tardíos : 10-12 semanas necesarias frente a 8 semanas para ver resultados completos.",
                      "Destellos limitados : 400K destellos frente a 990K del Pulse Pro, con reemplazo más frecuente necesario."
                    ].map((disadvantage, index) => {
                      const boldPart = disadvantage.split(' : ')[0];
                      const restOfString = disadvantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-red-600 mt-1">✗</span>
                          <span className="text-gray-700">
                            <strong>{boldPart}</strong> : {restOfString}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {/* #5 Product - Philips Lumea IPL 9000 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Philips Lumea IPL 9000</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">#5</span>
              </div>
              <div className="text-center mb-4">
                <Image
                  width={200}
                  height={250}
                  className="mx-auto rounded-lg"
                  src="/images/philips_epilateur_3.webp"
                  alt="Philips Lumea IPL 9000 - Edición 2026 con aplicación móvil optimizada"
                />
              </div>
              <div className="flex items-center mb-3">
                <div className="flex space-x-1 mr-3">
                  {[1,2,3,4].map((star) => (
                    <span key={star} className="text-yellow-400">★</span>
                  ))}
                  <span className="text-gray-300">★</span>
                </div>
                <span className="text-gray-600 text-sm">4,0/5 • 1.892 opiniones</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Referencia mundial en 2026 con la aplicación Lumea optimizada. Tecnología IPL validada clínicamente en formato inalámbrico,
                pero con precio elevado y opiniones de usuarios dispares.
              </p>
              <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-blue-600">469€</div>
                  <div className="text-gray-500">Precio</div>
                </div>
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-blue-600">10 min</div>
                  <div className="text-gray-500">Tratamiento</div>
                </div>
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-blue-600">300K</div>
                  <div className="text-gray-500">Destellos</div>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Ver en Amazon →
              </button>
            </div>

            {/* #5 Product Detailed Analysis */}
            <div className="lg:col-span-2 bg-blue-50 rounded-2xl p-8 mt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Análisis detallado del Philips Lumea IPL 9000</h3>
              <p className="text-gray-700 mb-6">
                El Philips Lumea IPL 9000 capitaliza sobre la experiencia centenaria de Philips en tecnologías de cuidado personal.
                Con su aplicación móvil mejorada en 2026 y su dominio de la tecnología IPL inalámbrica, ofrece una experiencia de usuario conseguida.
                Sin embargo, su precio premium mantenido en 469€ y un rendimiento por debajo de la competencia
                ya no justifican plenamente la inversión comparado con alternativas mejor posicionadas.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-green-800 mb-4">✓ Puntos fuertes</h4>
                  <ul className="space-y-3">
                    {[
                      "Marca reconocida : Philips, líder mundial con 130 años de experiencia en innovación tecnológica.",
                      "Diseño inalámbrico : Libertad de movimiento total sin limitación de cable para mayor comodidad.",
                      "Tecnología SmartSkin : Sensor de tono de piel con 5 niveles de intensidad ajustados automáticamente.",
                      "Varios adaptadores : 3 cabezales especializados (cuerpo, cara, zona bikini) para un tratamiento óptimo.",
                      "App dedicada : Seguimiento de sesiones y recordatorios personalizados a través de la app Lumea.",
                      "Garantía ampliada : Servicio al cliente Philips reactivo con garantía del fabricante de 2 años."
                    ].map((advantage, index) => {
                      const boldPart = advantage.split(' : ')[0];
                      const restOfString = advantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span className="text-gray-700">
                            <strong>{boldPart}</strong> : {restOfString}
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
                      "Precio excesivo : 469€, más de 5 veces el precio del lumeor para resultados comparables.",
                      "Opiniones dispares : 4,0/5 con numerosas quejas sobre eficacia y averías tempranas.",
                      "Destellos limitados : Solo 250K destellos frente a 990K del Pulse Pro, vida útil reducida.",
                      "Resultados lentos : 12-16 semanas necesarias frente a 8 semanas para ver los primeros resultados."
                    ].map((disadvantage, index) => {
                      const boldPart = disadvantage.split(' : ')[0];
                      const restOfString = disadvantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-red-600 mt-1">✗</span>
                          <span className="text-gray-700">
                            <strong>{boldPart}</strong> : {restOfString}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {/* #6 Product - Ulike Sapphire IPL */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Ulike Sapphire IPL</h3>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-bold">#6</span>
              </div>
              <div className="text-center mb-4">
                <Image
                  width={200}
                  height={250}
                  className="mx-auto rounded-lg"
                  src="/images/Ulike_epilateur4.jpg"
                  alt="Ulike Sapphire IPL - Tecnología Ice-Cool 2026"
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
                <span className="text-gray-600 text-sm">3,8/5 • 756 opiniones</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Tecnología Sapphire Ice-Cool muy promocionada en 2026. Campañas publicitarias intensivas
                pero resultados prácticos por debajo de las expectativas y relación calidad-precio cuestionable.
              </p>
              <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-orange-600">349€</div>
                  <div className="text-gray-500">Precio</div>
                </div>
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-orange-600">15 min</div>
                  <div className="text-gray-500">Tratamiento</div>
                </div>
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-orange-600">3 sem</div>
                  <div className="text-gray-500">Resultados</div>
                </div>
              </div>
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                Ver en Amazon →
              </button>
            </div>

            {/* #7 Product - no!no! Pro IPL */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">no!no! Pro IPL</h3>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">#7</span>
              </div>
              <div className="text-center mb-4">
                <Image
                  width={200}
                  height={250}
                  className="mx-auto rounded-lg"
                  src="/images/nono_epilateur.jpg"
                  alt="no!no! Pro IPL - Depiladora facial de gama baja 2026"
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
                <span className="text-gray-600 text-sm">3,0/5 • 243 opiniones</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Dispositivo básico orientado exclusivamente a la depilación facial. Arquitectura tecnológica obsoleta en 2026
                y rendimiento muy limitado constatado en pruebas.
              </p>
              <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-red-600">169€</div>
                  <div className="text-gray-500">Precio</div>
                </div>
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-red-600">25 min</div>
                  <div className="text-gray-500">Tratamiento</div>
                </div>
                <div className="text-center bg-gray-50 rounded p-2">
                  <div className="font-bold text-red-600">16+ sem</div>
                  <div className="text-gray-500">Resultados</div>
                </div>
              </div>
              <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Ver en Amazon →
              </button>
            </div>

            {/* #6 Product Detailed Analysis - Ulike */}
            <div className="lg:col-span-2 bg-orange-50 rounded-2xl p-8 mt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Análisis detallado del Ulike Sapphire IPL</h3>
              <p className="text-gray-700 mb-6">
                El Ulike Sapphire IPL apuesta por su tecnología de enfriamiento por hielo y su marketing agresivo
                en redes sociales. Aunque promete resultados en 3 semanas, nuestra prueba revela
                un rendimiento decepcionante y un precio de 349€ que no se justifica para un aparato con capacidades limitadas.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-green-800 mb-4">✓ Puntos fuertes</h4>
                  <ul className="space-y-3">
                    {[
                      "Tecnología de enfriamiento por zafiro : Reduce las molestias durante el tratamiento.",
                      "Diseño moderno : Aspecto elegante y ergonomía correcta con manejo agradable.",
                      "Marketing prometedor : Comunicación atractiva sobre resultados rápidos en 3 semanas.",
                      "App móvil : Seguimiento de sesiones a través de la app Ulike con consejos personalizados.",
                      "Garantía estándar : Servicio al cliente disponible con garantía del fabricante de 1 año."
                    ].map((advantage, index) => {
                      const boldPart = advantage.split(' : ')[0];
                      const restOfString = advantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span className="text-gray-700">
                            <strong>{boldPart}</strong> : {restOfString}
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
                      "Precio injustificado : 349€, 4 veces el precio del lumeor para resultados notablemente inferiores.",
                      "Promesas incumplidas : Los resultados en 3 semanas anunciados no se materializan en la práctica.",
                      "Eficacia limitada : 3,8/5 únicamente, con numerosas opiniones negativas sobre la eficacia real.",
                      "Durabilidad cuestionable : Frecuentes reportes de averías y fallos tempranos.",
                      "Marketing engañoso : Comunicación exagerada que no refleja el rendimiento real."
                    ].map((disadvantage, index) => {
                      const boldPart = disadvantage.split(' : ')[0];
                      const restOfString = disadvantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-red-600 mt-1">✗</span>
                          <span className="text-gray-700">
                            <strong>{boldPart}</strong> : {restOfString}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {/* #7 Product Detailed Analysis - no!no! */}
            <div className="lg:col-span-2 bg-red-50 rounded-2xl p-8 mt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Análisis detallado del no!no! Pro IPL</h3>
              <p className="text-gray-700 mb-6">
                El no!no! Pro IPL se presenta como una solución de depilación doméstica, pero nuestra prueba revela
                una tecnología desfasada y un rendimiento muy decepcionante. Limitado a la depilación facial y
                con más de 16 semanas necesarias para resultados parciales, no puede competir con
                las alternativas modernas del mercado.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-green-800 mb-4">✓ Puntos fuertes</h4>
                  <ul className="space-y-3">
                    {[
                      "Precio accesible : A 169€, uno de los dispositivos más baratos del mercado.",
                      "Compacto : Diseño portátil y ligero, fácil de guardar y transportar.",
                      "Especializado en cara : Diseñado específicamente para zonas sensibles del rostro.",
                      "Uso sencillo : Interfaz básica y uso intuitivo sin complejidad."
                    ].map((advantage, index) => {
                      const boldPart = advantage.split(' : ')[0];
                      const restOfString = advantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span className="text-gray-700">
                            <strong>{boldPart}</strong> : {restOfString}
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
                      "Eficacia muy limitada : Nota de 3,0/5 con resultados prácticamente inexistentes sobre el vello.",
                      "Tecnología obsoleta : Sistema desfasado que no puede competir con las depiladoras de luz pulsada modernas.",
                      "Zonas restringidas : Solo para el rostro, no utilizable en el cuerpo entero.",
                      "Resultados tardíos : Más de 16 semanas para cambios mínimos.",
                      "Duración de la sesión : 25 minutos por sesión frente a 5-10 minutos del lumeor.",
                      "Relación calidad-precio : Incluso a precio reducido, el rendimiento no justifica la compra."
                    ].map((disadvantage, index) => {
                      const boldPart = disadvantage.split(' : ')[0];
                      const restOfString = disadvantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-red-600 mt-1">✗</span>
                          <span className="text-gray-700">
                            <strong>{boldPart}</strong> : {restOfString}
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
              📊 Tabla Comparativa Detallada
            </h2>

            <div className="overflow-x-auto mb-12">
              <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Modelo</th>
                    <th className="px-6 py-4 text-center">Precio</th>
                    <th className="px-6 py-4 text-center">Nota</th>
                    <th className="px-6 py-4 text-center">Destellos</th>
                    <th className="px-6 py-4 text-center">Resultados</th>
                    <th className="px-6 py-4 text-center">Garantía</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-green-50 border-l-4 border-green-600">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="text-green-600 font-bold mr-2">🏆</span>
                        <div>
                          <div className="font-bold">
                            <a href={decoratedlumeorUrl} className="text-green-600 hover:underline">
                              lumeor Pulse Pro II
                            </a>
                          </div>
                          <div className="text-sm text-gray-500">Nuestra elección #1</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="font-bold text-green-600">89€</div>
                      <div className="text-xs text-gray-400 line-through">142€</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="font-bold text-green-600">4,8/5</div>
                      <div className="text-yellow-400">★★★★⭐</div>
                    </td>
                    <td className="px-6 py-4 text-center font-bold">900.000</td>
                    <td className="px-6 py-4 text-center font-bold text-green-600">2 semanas</td>
                    <td className="px-6 py-4 text-center">1 año</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="text-green-700 font-bold mr-2">#2</span>
                        <div>
                          <div className="font-bold">Loop by Solippy</div>
                          <div className="text-sm text-gray-500">Marca europea</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center font-bold">199€</td>
                    <td className="px-6 py-4 text-center">
                      <div className="font-bold text-green-700">4,0/5</div>
                      <div className="text-yellow-400">★★★★☆</div>
                    </td>
                    <td className="px-6 py-4 text-center font-bold">300.000</td>
                    <td className="px-6 py-4 text-center">6-8 semanas</td>
                    <td className="px-6 py-4 text-center">1 año</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="text-teal-600 font-bold mr-2">#3</span>
                        <div>
                          <div className="font-bold">Bodysiam Elite</div>
                          <div className="text-sm text-gray-500">Packaging de lujo</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center font-bold">179€</td>
                    <td className="px-6 py-4 text-center">
                      <div className="font-bold text-teal-600">3,6/5</div>
                      <div className="text-yellow-400">★★★⭐☆</div>
                    </td>
                    <td className="px-6 py-4 text-center font-bold">500.000</td>
                    <td className="px-6 py-4 text-center">8-10 semanas</td>
                    <td className="px-6 py-4 text-center">1 año</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="text-purple-600 font-bold mr-2">#4</span>
                        <div>
                          <div className="font-bold">Braun Silk Expert Pro 5</div>
                          <div className="text-sm text-gray-500">Tecnología SensoAdapt</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center font-bold">412€</td>
                    <td className="px-6 py-4 text-center">
                      <div className="font-bold text-purple-600">4,3/5</div>
                      <div className="text-yellow-400">★★★★⭐</div>
                    </td>
                    <td className="px-6 py-4 text-center font-bold">400.000</td>
                    <td className="px-6 py-4 text-center">8+ semanas</td>
                    <td className="px-6 py-4 text-center">2 años</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="text-blue-600 font-bold mr-2">#5</span>
                        <div>
                          <div className="font-bold">Philips Lumea IPL 9000</div>
                          <div className="text-sm text-gray-500">Diseño inalámbrico</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center font-bold">469€</td>
                    <td className="px-6 py-4 text-center">
                      <div className="font-bold text-blue-600">4,0/5</div>
                      <div className="text-yellow-400">★★★★☆</div>
                    </td>
                    <td className="px-6 py-4 text-center font-bold">300.000</td>
                    <td className="px-6 py-4 text-center">10 min tratamiento</td>
                    <td className="px-6 py-4 text-center">2 años</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="text-orange-600 font-bold mr-2">#6</span>
                        <div>
                          <div className="font-bold">Ulike Sapphire IPL</div>
                          <div className="text-sm text-gray-500">Enfriamiento por zafiro</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center font-bold">349€</td>
                    <td className="px-6 py-4 text-center">
                      <div className="font-bold text-orange-600">3,8/5</div>
                      <div className="text-yellow-400">★★★⭐☆</div>
                    </td>
                    <td className="px-6 py-4 text-center font-bold">350.000</td>
                    <td className="px-6 py-4 text-center">3 semanas</td>
                    <td className="px-6 py-4 text-center">1 año</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="text-red-600 font-bold mr-2">#7</span>
                        <div>
                          <div className="font-bold">no!no! Pro IPL</div>
                          <div className="text-sm text-gray-500">Depilación facial</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center font-bold">169€</td>
                    <td className="px-6 py-4 text-center">
                      <div className="font-bold text-red-600">3,0/5</div>
                      <div className="text-yellow-400">★★★☆☆</div>
                    </td>
                    <td className="px-6 py-4 text-center font-bold">200.000</td>
                    <td className="px-6 py-4 text-center">Variable</td>
                    <td className="px-6 py-4 text-center">1 año</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* IPL Technology Section */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Todo sobre la Tecnología de Luz Pulsada IPL
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Entiende cómo funciona la depiladora de luz pulsada intensa para hacer la mejor elección
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* What is IPL */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  ¿Qué es la Luz Pulsada IPL?
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>La luz pulsada intensa (IPL)</strong> es una tecnología
                  de reducción del vello que utiliza pulsos luminosos para actuar sobre los folículos pilosos e inhibir el crecimiento del vello.
                </p>
                <p className="text-gray-700 mb-4">
                  A diferencia del láser, que utiliza una sola longitud de onda, la luz pulsada emite un espectro luminoso
                  amplio (515-1200 nm) que penetra en la piel y es absorbido por la melanina del vello.
                </p>
                <p className="text-gray-700">
                  Esta absorción genera calor que actúa sobre el folículo piloso para inhibir el crecimiento del vello
                  de forma duradera.
                </p>
              </div>

              {/* How does it work */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  ¿Cómo funciona?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <p className="text-gray-700"><strong>Emisión de luz:</strong> El dispositivo emite pulsos de luz intensa</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <p className="text-gray-700"><strong>Absorción:</strong> La melanina del vello absorbe esta energía lumínica</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <p className="text-gray-700"><strong>Transformación:</strong> La energía lumínica se transforma en calor (60-70°C)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    <p className="text-gray-700"><strong>Acción sobre el folículo:</strong> El calor actúa sobre el folículo piloso inhibiendo el crecimiento del vello</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                    <p className="text-gray-700"><strong>Resultado:</strong> El vello cae y el crecimiento se reduce de forma progresiva</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Table vs Traditional Methods */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                🆚 Luz Pulsada vs Métodos Tradicionales
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Criterio</th>
                      <th className="px-6 py-3 text-center text-sm font-semibold text-blue-600">Luz Pulsada en Casa</th>
                      <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600">Afeitado</th>
                      <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600">Depiladora eléctrica</th>
                      <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600">Cera</th>
                      <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600">Láser en centro</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Duración de resultados</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">Duradera</td>
                      <td className="px-6 py-4 text-center text-gray-500">1-2 días</td>
                      <td className="px-6 py-4 text-center text-gray-500">2-4 semanas</td>
                      <td className="px-6 py-4 text-center text-gray-500">3-6 semanas</td>
                      <td className="px-6 py-4 text-center text-gray-500">Duradera</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Coste total</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">89€ (una vez)</td>
                      <td className="px-6 py-4 text-center text-gray-500">300€/año</td>
                      <td className="px-6 py-4 text-center text-gray-500">200€/año</td>
                      <td className="px-6 py-4 text-center text-gray-500">500€/año</td>
                      <td className="px-6 py-4 text-center text-gray-500">2.000-4.000€</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Molestias</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">Mínimas</td>
                      <td className="px-6 py-4 text-center text-gray-500">Ninguna</td>
                      <td className="px-6 py-4 text-center text-gray-500">Moderada</td>
                      <td className="px-6 py-4 text-center text-gray-500">Intensa</td>
                      <td className="px-6 py-4 text-center text-gray-500">Moderada</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Comodidad</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">En casa</td>
                      <td className="px-6 py-4 text-center text-gray-500">En casa</td>
                      <td className="px-6 py-4 text-center text-gray-500">En casa</td>
                      <td className="px-6 py-4 text-center text-gray-500">En casa</td>
                      <td className="px-6 py-4 text-center text-gray-500">Cita previa</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Tiempo por sesión</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">5-10 min</td>
                      <td className="px-6 py-4 text-center text-gray-500">5-10 min</td>
                      <td className="px-6 py-4 text-center text-gray-500">30-45 min</td>
                      <td className="px-6 py-4 text-center text-gray-500">45-60 min</td>
                      <td className="px-6 py-4 text-center text-gray-500">60-90 min</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Safety and Precautions */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                  ✅ Seguridad y eficacia
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-green-700"><strong>Tecnología contrastada:</strong> Utilizada en centros médicos desde hace más de 20 años</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-green-700"><strong>Resultados científicos:</strong> 85-95% de reducción duradera del vello</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-green-700"><strong>Seguridad óptima:</strong> Sensores de piel integrados</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-green-700"><strong>Certificaciones:</strong> Certificado CE médico y FDA</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-amber-800 mb-6 flex items-center">
                  ⚠️ Precauciones de uso
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-600 mt-1">!</span>
                    <span className="text-amber-700"><strong>Tipos de piel:</strong> Eficaz en pieles claras a medias (fototipos I-IV)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-600 mt-1">!</span>
                    <span className="text-amber-700"><strong>Color del vello:</strong> Más eficaz sobre vello oscuro</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-600 mt-1">!</span>
                    <span className="text-amber-700"><strong>Zonas sensibles:</strong> Utilizar los ajustes de nivel de intensidad adecuados</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-600 mt-1">!</span>
                    <span className="text-amber-700"><strong>Protección ocular:</strong> Usar siempre las gafas incluidas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Guides Section */}
        <section className="py-16 bg-white border-t-2 border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                📚 Nuestras otras guías de belleza y bienestar
              </h2>
              <p className="text-lg text-gray-600">
                Descubre nuestras comparativas para completar tu rutina de belleza
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Hidropulsadores Guide */}
              <Link
                href="/comparativa-hidropulsadores-dentales-2026"
                className="group bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-3xl">
                    🦷
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      Mejores Hidropulsadores Dentales 2026
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm">
                      Completa tu rutina de belleza con nuestra guía completa sobre hidropulsadores dentales. Higiene bucodental óptima desde 49€.
                    </p>
                    <div className="flex items-center text-blue-600 font-medium text-sm">
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
                    ✨
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      Mascarillas LED Facial 2026
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm">
                      Tratamiento antiedad y del acné en casa. Nuestra comparativa de las mejores mascarillas LED de calidad profesional.
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
                className="group bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-green-300 md:col-span-2"
              >
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center text-3xl">
                    🏠
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                      Todas nuestras guías de belleza y bienestar
                    </h3>
                    <div className="flex items-center justify-center text-green-600 font-medium text-sm">
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
        <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nuestra Recomendación Final
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                Tras pruebas exhaustivas, el <strong>lumeor Pulse Pro II</strong> sigue siendo nuestra elección #1 indiscutible
                para una depilación doméstica eficaz, segura y asequible.
              </p>

              <div className="bg-green-50 rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">89€</div>
                    <div className="text-sm text-gray-600">Precio excepcional<br/>(-37% actualmente)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">4,8/5</div>
                    <div className="text-sm text-gray-600">Valoración usuarios<br/>(+1.000 opiniones verificadas)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">8 sem</div>
                    <div className="text-sm text-gray-600">Resultados visibles<br/>(más rápido que la competencia)</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-600 text-sm mb-4">
                  ✅ Pantalla LCD inteligente • ✅ 990K destellos • ✅ Tecnología clínica • ✅ Envío gratuito
                </p>
              </div>

              <a
                href={decoratedlumeorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
                Ver el Pulse Pro II en el Sitio Oficial →
              </a>

              <p className="text-xs text-gray-500 mt-4">
                🔒 Pago seguro • 📦 Envío en 24h • 🎯 Garantía de satisfacción
              </p>
            </div>
          </div>
        </section>

      </article>
    </main>
  );
}
