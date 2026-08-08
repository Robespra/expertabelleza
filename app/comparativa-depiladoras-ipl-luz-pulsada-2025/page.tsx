"use client"

import Image from "next/image";
import Link from "next/link";

declare global {
  interface Window {
    gtag: Function;
    dataLayer: any[];
  }
}

export default function DepiladoraIPL2025() {
  const lumeorBaseUrl = "https://lumeor.fr/produit/epilateur-lumiere-pulsee-permanent-pulse-pro-ii/";
  const decoratedlumeorUrl = `${lumeorBaseUrl}?utm_source=expertabelleza&utm_medium=referral&utm_campaign=ipl-2025-legacy`;

  return (
    <main className="bg-gray-100 min-h-screen">

      {/* Updated version banner */}
      <div className="bg-green-600 text-white py-3 px-4 text-center">
        <p className="text-sm font-medium">
          Esta guía es de 2025.{" "}
          <Link href="/comparativa-depiladoras-ipl-luz-pulsada-2026" className="underline font-bold hover:text-green-100">
            Ver la comparativa 2026 actualizada →
          </Link>
        </p>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white">
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-green-600">Inicio</Link>
            <span className="mx-2">›</span>
            <span>Depiladoras luz pulsada</span>
          </div>

          <div className="relative mb-8">
            <Image
              src="/images/comparatif_epilateurs_header.jpg"
              alt="Comparativa de las mejores depiladoras de luz pulsada IPL 2025"
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-2xl"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-green-600 text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg">
                Guía Experta
              </span>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
            <span className="block">Mejores Depiladoras de Luz Pulsada IPL</span>
            <span className="text-green-600">2025</span>
          </h1>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-6 mb-8">
            <p className="text-gray-800 font-medium mb-2">Guía de 2025 — contenido desactualizado</p>
            <p className="text-gray-600 text-sm mb-4">
              Esta comparativa corresponde a la edición 2025. Nuestra guía 2026 incluye nuevos modelos probados,
              precios actualizados y el lumeor Pulse Pro II como elección #1 a 89€.
            </p>
            <Link
              href="/comparativa-depiladoras-ipl-luz-pulsada-2026"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
            >
              Ver la comparativa 2026 →
            </Link>
          </div>

          <div className="flex items-center mb-8 pb-8 border-b border-gray-200">
            <Image
              width={60}
              height={60}
              className="rounded-full mr-4"
              src="/images/sarahMartin.webp"
              alt="Carmen Ruiz"
            />
            <div>
              <div className="flex items-center text-sm text-gray-500 mb-1">
                <span>6 enero 2025</span>
                <span className="mx-2">•</span>
                <span>Actualizado: 6 enero 2025</span>
              </div>
              <p className="font-semibold text-lg text-gray-900">Por Carmen Ruiz</p>
              <p className="text-sm text-gray-600">Experta en fotodepilación IPL • 10 años de experiencia</p>
            </div>
          </div>
        </div>

        {/* Intro summary */}
        <section className="mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">
            Nuestra selección 2025 de las mejores depiladoras de luz pulsada IPL, probadas rigurosamente durante
            6 meses para una reducción duradera del vello corporal en casa.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            La depiladora de luz pulsada IPL actúa sobre el folículo piloso para inhibir el crecimiento del vello
            de forma progresiva. A diferencia de la depilación láser profesional, estos dispositivos de uso doméstico
            ofrecen una alternativa accesible y eficaz para reducir el vello en piernas, axilas, ingles y otros
            zones del cuerpo.
          </p>

          <div className="bg-green-50 rounded-xl p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Nuestra elección #1 en 2025</h2>
            <div className="flex items-center space-x-4">
              <Image
                src="/images/PulseProIISolo.jpg"
                alt="lumeor Pulse Pro II - Depiladora de Luz Pulsada IPL"
                width={120}
                height={160}
                className="rounded-xl"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">lumeor Pulse Pro II</h3>
                <div className="flex space-x-1 mb-2">
                  {[1,2,3,4,5].map((star) => (
                    <span key={star} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-3">4,8/5 · 2.847 valoraciones verificadas · 89€</p>
                <a
                  href={decoratedlumeorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-5 rounded-full text-sm transition-colors"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'click', {
                        event_category: 'outbound',
                        event_label: 'lumeor_legacy_2025_ipl',
                        transport_type: 'beacon'
                      });
                    }
                  }}
                >
                  Ver en el sitio oficial →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA to updated version */}
        <section className="py-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl text-center mb-8">
          <div className="px-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              ¿Buscas la guía más actualizada?
            </h2>
            <p className="text-green-100 mb-6">
              Nuestra comparativa 2026 incluye los últimos modelos probados y los mejores precios actuales.
            </p>
            <Link
              href="/comparativa-depiladoras-ipl-luz-pulsada-2026"
              className="inline-block bg-white text-green-700 font-bold py-4 px-10 rounded-full text-lg transition-all hover:shadow-xl hover:scale-105"
            >
              Ver la comparativa IPL 2026 →
            </Link>
          </div>
        </section>

        <p className="text-xs text-gray-500 text-center">
          Pago seguro · Envío en 24h · Derecho de desistimiento 14 días
        </p>
      </article>
    </main>
  );
}
