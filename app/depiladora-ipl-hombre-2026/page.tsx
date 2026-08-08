"use client";

import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

declare global {
  interface Window {
    gtag: Function;
    dataLayer: any[];
  }
}

const LUXEK_URL =
  "https://lumeor.fr/produit/epilateur-lumeor-lumiere-pulsee-luxe-k/?utm_source=expertabelleza&utm_medium=referral&utm_campaign=ipl-hombre";
const PULSEPRO_URL =
  "https://lumeor.fr/produit/epilateur-lumiere-pulsee-permanent-pulse-pro-ii/?utm_source=expertabelleza&utm_medium=referral&utm_campaign=ipl-hombre";

function trackClick(label: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "click", {
      event_category: "outbound",
      event_label: label,
      transport_type: "beacon",
    });
  }
}

export default function DepiladoraIPLHombre() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Script id="schema-article" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Mejor depiladora de luz pulsada IPL para hombre 2026: comparativa completa",
          description:
            "Comparativa de las mejores depiladoras de luz pulsada IPL para hombre en 2026 — pecho, espalda, piernas. ¿Qué dispositivos funcionan de verdad?",
          image: "https://expertabelleza.es/images/comparatif_epilateurs_men_header2026.jpg",
          datePublished: "2026-04-12T09:00:00+02:00",
          dateModified: "2026-04-12T09:00:00+02:00",
          author: { "@type": "Person", name: "Carmen Ruiz", jobTitle: "Experta en dermatología" },
          publisher: {
            "@type": "Organization",
            name: "ExpertaBelleza",
            logo: { "@type": "ImageObject", url: "https://expertabelleza.es/logo.png" },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://expertabelleza.es/depiladora-ipl-hombre-2026",
          },
        })}
      </Script>

      <Script id="schema-faq" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "¿La IPL es eficaz sobre el vello grueso de los hombres?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sí, la IPL es eficaz sobre el vello masculino, incluido el vello grueso del pecho y la espalda. El vello más grueso absorbe más energía lumínica, lo que hace que la tecnología de enfriamiento por zafiro sea aún más útil para neutralizar el calor generado y evitar las molestias.",
              },
            },
            {
              "@type": "Question",
              name: "¿Puedo usar la IPL para eliminar mi barba?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. La IPL está contraindicada en la barba completa. La densidad del vello es demasiado elevada y el riesgo de quemaduras es real. En cambio, la IPL puede usarse para perfilar el contorno de la barba o tratar el cuello.",
              },
            },
            {
              "@type": "Question",
              name: "¿Qué zona tratar primero?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Empieza por una zona poco sensible y de densidad moderada, como los antebrazos o las piernas, para familiarizarte con el dispositivo y el nivel de intensidad adecuado para tu piel. El pecho y la espalda pueden tratarse después de forma progresiva.",
              },
            },
            {
              "@type": "Question",
              name: "¿Cuántas sesiones se necesitan para ver resultados en el pecho?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Los primeros resultados visibles —reducción de densidad y ralentización del crecimiento del vello— aparecen generalmente tras 4 a 6 semanas de sesiones semanales. El pecho es una zona densa, por lo que conviene planificar entre 8 y 12 sesiones para un resultado completo.",
              },
            },
            {
              "@type": "Question",
              name: "¿La IPL duele para un hombre?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "El vello masculino es más grueso, por lo que la IPL puede generar más calor y molestias que con vello fino. Un dispositivo con enfriamiento por zafiro activo, como el lumeor Luxe K, neutraliza este calor en tiempo real — la diferencia es significativa.",
              },
            },
            {
              "@type": "Question",
              name: "¿Puedo usar la depiladora de mi pareja?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Técnicamente sí, los dispositivos IPL no están diseñados por género. Pero los dispositivos sin zafiro pueden resultar incómodos sobre el vello grueso masculino. Si compartes el aparato, el lumeor Luxe K con enfriamiento por zafiro se adaptará perfectamente a ambos.",
              },
            },
          ],
        })}
      </Script>


      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <div className="flex space-x-1 py-3 min-w-max">
              {[
                { href: "#intro", label: "Resumen" },
                { href: "#zonas", label: "Zonas compatibles" },
                { href: "#tabla", label: "Comparativa" },
                { href: "#zafiro-hombre", label: "Zafiro & vello grueso" },
                { href: "#analisis", label: "Análisis" },
                { href: "#veredicto", label: "Veredicto" },
                { href: "#faq", label: "F.A.Q" },
              ].map((link, i) => (
                <span key={link.href} className="flex items-center">
                  {i > 0 && <span className="text-gray-300 text-xs mr-1">•</span>}
                  <a
                    href={link.href}
                    className={`px-3 py-1 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
                      i === 0 ? "bg-green-600 text-white" : "text-gray-600 hover:text-green-600"
                    }`}
                  >
                    {link.label}
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 py-8 bg-white">

        <section id="intro" className="mb-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <a href="/" className="hover:text-green-600">Inicio</a>
            <span className="mx-2">›</span>
            <span>Depiladora de luz pulsada IPL para hombre</span>
          </div>

          <div className="relative mb-8">
            <Image
              src="/images/comparatif_epilateurs_men_header2026.jpg"
              alt="Comparativa mejores depiladoras de luz pulsada IPL para hombre 2026"
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-2xl"
              priority
            />
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="bg-green-600 text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg">
                ✨ Guía Experta 2026
              </span>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
            Mejor depiladora de luz pulsada IPL para hombre 2026:{" "}
            <span className="text-green-600">comparativa completa</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Pecho, espalda, piernas, contorno de barba — la IPL funciona en todas estas zonas.
            Aquí están los dispositivos probados, del más asequible al más eficaz, con los precios
            reales del mercado.
          </p>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                width={60}
                height={60}
                className="rounded-full mr-4"
                src="/images/sarahMartin.webp"
                alt="Carmen Ruiz"
              />
              <div>
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <span>12 de abril de 2026</span>
                  <span className="mx-2">•</span>
                  <span>Actualizado: 12 de abril de 2026</span>
                </div>
                <p className="font-semibold text-lg text-gray-900">Por Carmen Ruiz</p>
                <p className="text-sm text-gray-600">Experta en dermatología • 8 años de experiencia</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex space-x-1 mr-2">
                {[1,2,3,4,5].map((s) => <span key={s} className="text-yellow-400 text-lg">★</span>)}
              </div>
              <span className="text-sm text-gray-600">(4,9/5 • 31 opiniones)</span>
            </div>
          </div>

          <div className="bg-gray-50 border-l-4 border-gray-400 rounded-r-xl p-6 mb-8">
            <p className="text-gray-700 leading-relaxed mb-3">
              La depilación masculina con luz pulsada ya no es un fenómeno minoritario. Una parte
              creciente de las ventas de depiladoras de luz pulsada en España corresponde a hombres — principalmente
              para el pecho, la espalda y las piernas. La razón es simple: afeitarse o depilarse manualmente
              cada semana lleva mucho tiempo, y las sesiones láser en centro de estética cuestan entre 800 y 1.200€
              para un protocolo completo.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              La IPL doméstica resuelve ambos problemas: una sola compra, resultados duraderos
              en 8 a 12 sesiones, y un mantenimiento mínimo después.
            </p>
            <p className="text-gray-700 leading-relaxed font-medium text-gray-900">
              ⚠️ Aviso importante: este artículo cubre los dispositivos para el cuerpo —
              no la barba completa, para la cual la IPL no está indicada (densidad del vello
              demasiado elevada, riesgo real de quemaduras).
            </p>
          </div>
        </section>

        <section id="zonas" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Depilación IPL para hombre: zonas compatibles
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h3 className="font-bold text-green-800 mb-4 text-lg">✅ Zonas compatibles</h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Pecho y abdomen",
                  "Espalda y hombros",
                  "Brazos y antebrazos",
                  "Piernas y muslos",
                  "Axilas",
                  "Contorno del cuello",
                  "Perfilado / contorno de barba",
                ].map((z) => (
                  <li key={z} className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>{z}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h3 className="font-bold text-red-800 mb-4 text-lg">❌ Zonas contraindicadas</h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  ["Barba completa", "densidad demasiado elevada — riesgo de quemaduras"],
                  ["Cuero cabelludo", "contraindicado"],
                  ["Zonas tatuadas", "el pigmento absorbe la energía lumínica"],
                  ["Lunares", "evitar sistemáticamente"],
                  ["Cejas", "proximidad a los ojos"],
                ].map(([zona, razon]) => (
                  <li key={zona} className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">✗</span>
                    <span>
                      <strong>{zona}</strong>
                      {razon && <span className="text-gray-500 text-sm"> — {razon}</span>}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 p-3 bg-red-100 rounded-lg">
                <p className="text-red-800 text-xs font-medium">
                  La barba completa es la contraindicación más frecuentemente ignorada.
                  La densidad del vello genera un riesgo real de quemaduras — incluso con los
                  dispositivos más potentes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="tabla" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Tabla comparativa — depiladoras de luz pulsada IPL para hombre 2026
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            5 dispositivos probados — del más asequible al más premium.
          </p>

          <div className="overflow-x-auto rounded-2xl shadow-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-4 text-left font-semibold">Dispositivo</th>
                  <th className="px-4 py-4 text-center font-semibold">Precio</th>
                  <th className="px-4 py-4 text-center font-semibold">Zafiro</th>
                  <th className="px-4 py-4 text-center font-semibold hidden sm:table-cell">Potencia</th>
                  <th className="px-4 py-4 text-center font-semibold hidden md:table-cell">Sesión</th>
                  <th className="px-4 py-4 text-center font-semibold hidden sm:table-cell">Destellos</th>
                  <th className="px-4 py-4 text-center font-semibold">Nota</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-blue-50 border-2 border-blue-400">
                  <td className="px-4 py-5">
                    <div className="font-bold text-gray-900">lumeor Pulse Pro II</div>
                    <span className="inline-block mt-1 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      💰 Mejor precio para empezar
                    </span>
                  </td>
                  <td className="px-4 py-5 text-center font-bold text-blue-700 text-base">89€</td>
                  <td className="px-4 py-5 text-center text-xl">❌</td>
                  <td className="px-4 py-5 text-center text-gray-700 hidden sm:table-cell">8–10 J/cm²</td>
                  <td className="px-4 py-5 text-center text-gray-700 hidden md:table-cell">10–15 min</td>
                  <td className="px-4 py-5 text-center text-gray-700 hidden sm:table-cell">990.000</td>
                  <td className="px-4 py-5 text-center font-bold text-blue-700 text-base">8/10</td>
                </tr>
                <tr className="bg-green-50 border-2 border-green-500">
                  <td className="px-4 py-5">
                    <div className="font-bold text-gray-900">lumeor Luxe K</div>
                    <span className="inline-block mt-1 bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      ⭐ Mejor elección para hombre
                    </span>
                  </td>
                  <td className="px-4 py-5 text-center font-bold text-green-700 text-base">139€</td>
                  <td className="px-4 py-5 text-center text-xl">✅</td>
                  <td className="px-4 py-5 text-center text-gray-700 hidden sm:table-cell font-medium">12–14 J/cm²</td>
                  <td className="px-4 py-5 text-center text-gray-700 hidden md:table-cell font-medium">8–10 min</td>
                  <td className="px-4 py-5 text-center text-gray-700 hidden sm:table-cell font-medium">999.999</td>
                  <td className="px-4 py-5 text-center font-bold text-green-700 text-base">9,5/10</td>
                </tr>
                <tr className="bg-white border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 font-medium text-gray-900">Ulike Air 3</td>
                  <td className="px-4 py-4 text-center text-gray-700">260€</td>
                  <td className="px-4 py-4 text-center text-xl">✅</td>
                  <td className="px-4 py-4 text-center text-gray-500 hidden sm:table-cell">~20 J/cm²</td>
                  <td className="px-4 py-4 text-center text-gray-500 hidden md:table-cell">10 min</td>
                  <td className="px-4 py-4 text-center text-gray-500 hidden sm:table-cell">500.000</td>
                  <td className="px-4 py-4 text-center font-bold text-gray-700">8/10</td>
                </tr>
                <tr className="bg-white border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 font-medium text-gray-900">Braun Silk Expert Pro 5</td>
                  <td className="px-4 py-4 text-center text-gray-700">325€</td>
                  <td className="px-4 py-4 text-center text-xl">❌</td>
                  <td className="px-4 py-4 text-center text-gray-500 hidden sm:table-cell">4–6 J/cm²</td>
                  <td className="px-4 py-4 text-center text-gray-500 hidden md:table-cell">9 min</td>
                  <td className="px-4 py-4 text-center text-gray-500 hidden sm:table-cell">Ilimitados</td>
                  <td className="px-4 py-4 text-center font-bold text-gray-700">7/10</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 font-medium text-gray-900">Philips Lumea 9000</td>
                  <td className="px-4 py-4 text-center text-gray-700">580€</td>
                  <td className="px-4 py-4 text-center text-xl">❌</td>
                  <td className="px-4 py-4 text-center text-gray-500 hidden sm:table-cell">N/D</td>
                  <td className="px-4 py-4 text-center text-gray-500 hidden md:table-cell">10 min</td>
                  <td className="px-4 py-4 text-center text-gray-500 hidden sm:table-cell">Ilimitados</td>
                  <td className="px-4 py-4 text-center font-bold text-gray-700">7/10</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            Datos verificados en abril de 2026 · Precios orientativos observados
          </p>
        </section>

        <section id="zafiro-hombre" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Por qué el enfriamiento por zafiro es aún más importante para los hombres
          </h2>

          <div className="bg-blue-50 rounded-2xl p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              El vello masculino es por término medio entre 2 y 3 veces más grueso que el femenino.
              No es solo una cuestión estética: tiene un impacto directo en la experiencia IPL.
              Cuando el pulso luminoso actúa sobre un vello grueso y denso, la cantidad
              de energía absorbida por el folículo piloso es mayor — y el calor generado en la
              superficie de la piel también.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Resultado sin enfriamiento: una sensación de quemazón marcada, especialmente en
              el pecho y la espalda. La mayoría de los hombres que abandonan la IPL tras 2 o 3
              sesiones lo hacen por las molestias, no porque no funcione.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              El enfriamiento por zafiro activo neutraliza este problema en el origen. La placa de
              cristal de zafiro se mantiene a aproximadamente 5°C durante el destello y absorbe el calor
              cutáneo de forma continua. El pulso actúa sobre el folículo piloso, pero la piel
              en superficie queda protegida.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Por eso el <strong>lumeor Luxe K a 139€ es nuestra recomendación principal para
              los hombres</strong> — y no solo por razones de precio.
              El Ulike Air 3 propone la misma tecnología de zafiro, pero a 260€. El Luxe K ofrece
              el mismo confort por 121€ menos.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: "2–3×", label: "Grosor del vello hombre vs mujer" },
                { value: "~5°C", label: "Temperatura de la placa de zafiro" },
                { value: "121€", label: "Ahorro frente al Ulike Air 3 con zafiro" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="analisis" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Análisis de cada dispositivo
          </h2>

          {/* Luxe K */}
          <div className="rounded-2xl shadow-xl p-6 sm:p-8 mb-10 border-4 border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-green-600 text-white px-5 py-2 rounded-bl-2xl font-bold text-sm">
              ⭐ NUESTRA ELECCIÓN PARA HOMBRES
            </div>

            <div className="flex items-center justify-between mb-6 flex-wrap gap-3 pr-36">
              <h3 className="text-2xl font-bold text-gray-900">lumeor Luxe K — depilación IPL para hombre</h3>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-green-700">139€</span>
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">9,5/10</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 flex justify-center">
                <div className="bg-white rounded-2xl p-4 shadow-sm">
                  <Image
                    width={160}
                    height={220}
                    src="https://lumeor.fr/wp-content/uploads/2025/08/luxek.webp"
                    alt="lumeor Luxe K depiladora de luz pulsada IPL hombre"
                    className="rounded-xl object-contain"
                  />
                  <div className="flex gap-2 mt-3 justify-center">
                    {[
                      "https://lumeor.fr/wp-content/uploads/2025/08/luxeKProduit2.jpg",
                      "https://lumeor.fr/wp-content/uploads/2025/08/luxeKProduit4.jpg",
                      "https://lumeor.fr/wp-content/uploads/2025/08/luxeKProduit5-1.jpg",
                    ].map((src, i) => (
                      <Image key={i} width={44} height={44} src={src} alt={`Luxe K vista ${i + 2}`} className="rounded-lg object-cover border-2 border-white shadow-sm" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="bg-white rounded-xl p-5 mb-5 shadow-sm">
                  <h4 className="font-bold text-green-800 mb-3">🏆 Por qué es nuestra elección para hombres:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      ["Zafiro activo", "neutraliza el calor del vello grueso masculino en tiempo real"],
                      ["12–14 J/cm²", "potencia eficaz en pecho, espalda y hombros"],
                      ["8–10 min", "cuerpo entero en modo destello automático"],
                      ["999.999 destellos", "más de 10 años de uso — sin necesidad de reponer"],
                      ["139€", "misma tecnología de zafiro que el Ulike Air 3 a 121€ menos"],
                    ].map(([label, value]) => (
                      <li key={label} className="flex items-start gap-2">
                        <span className="text-green-600 font-bold mt-0.5">✓</span>
                        <span><strong>{label}</strong> — {value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { val: "139€", sub: "234€", label: "Precio" },
                    { val: "4–6 sem", sub: null, label: "1os resultados pecho" },
                    { val: "999K", sub: null, label: "Destellos" },
                  ].map((s) => (
                    <div key={s.label} className="text-center bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-green-600 font-bold text-xl">{s.val}</div>
                      {s.sub && <div className="text-gray-400 text-xs line-through">{s.sub}</div>}
                      <div className="text-gray-500 text-sm">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-5">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2 text-sm">✅ Puntos fuertes</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Zafiro activo — imprescindible en vello grueso</li>
                      <li>• Sesiones cortas (8–10 min)</li>
                      <li>• Pantalla LCD + contador de destellos</li>
                      <li>• Servicio posventa, garantía 2 años</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2 text-sm">❌ Puntos débiles</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Marca menos conocida que Philips/Braun</li>
                      <li>• Disponible solo online</li>
                    </ul>
                  </div>
                </div>

                <a
                  href={LUXEK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-4 rounded-xl font-bold text-lg shadow-lg transition-colors"
                  style={{ backgroundColor: "#FBBF24", color: "#000000" }}
                  onClick={() => trackClick("luxek_analysis_hombre")}
                >
                  Ver el lumeor Luxe K — 139€ · Envío gratuito
                </a>
              </div>
            </div>
          </div>

          {/* Pulse Pro II */}
          <div className="rounded-2xl shadow-xl p-6 sm:p-8 mb-10 border-4 border-blue-400 bg-gradient-to-br from-blue-50 to-sky-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-5 py-2 rounded-bl-2xl font-bold text-sm">
              💰 MEJOR PRECIO
            </div>

            <div className="flex items-center justify-between mb-6 flex-wrap gap-3 pr-36">
              <h3 className="text-2xl font-bold text-gray-900">lumeor Pulse Pro II — depilación de luz pulsada para hombre</h3>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-blue-700">89€</span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">8/10</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 flex justify-center">
                <div className="bg-white rounded-2xl p-4 shadow-sm">
                  <Image
                    width={160}
                    height={220}
                    src="https://lumeor.fr/wp-content/uploads/2024/12/PulseProNoNew.jpg"
                    alt="lumeor Pulse Pro II depiladora de luz pulsada IPL hombre"
                    className="rounded-xl object-contain"
                  />
                  <div className="flex gap-2 mt-3 justify-center">
                    {[
                      "https://lumeor.fr/wp-content/uploads/2024/12/pulseProfaq_img.webp",
                      "https://lumeor.fr/wp-content/uploads/2024/12/pulsprophotogallerie_deviceEcran.webp",
                      "https://lumeor.fr/wp-content/uploads/2024/12/pulseProPackage.webp",
                    ].map((src, i) => (
                      <Image key={i} width={44} height={44} src={src} alt={`Pulse Pro II vista ${i + 2}`} className="rounded-lg object-cover border-2 border-white shadow-sm" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="bg-white rounded-xl p-5 mb-5 shadow-sm">
                  <h4 className="font-bold text-blue-800 mb-3">💡 Ideal para probar la IPL sin gran inversión:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      ["89€", "el punto de entrada más asequible del mercado"],
                      ["8–10 J/cm²", "potencia suficiente en vello de densidad moderada"],
                      ["990.000 destellos", "más de 10 años de uso sin reemplazo"],
                      ["Pantalla LCD", "control preciso de la intensidad (5 niveles)"],
                    ].map(([label, value]) => (
                      <li key={label} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold mt-0.5">✓</span>
                        <span><strong>{label}</strong> — {value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 mb-5">
                  <p className="text-amber-800 text-sm font-medium">
                    ⚠️ Sin enfriamiento por zafiro — más adecuado para hombres con vello de
                    densidad moderada o piel poco sensible. En zonas muy densas
                    (pecho grueso, espalda), el Luxe K será más cómodo.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-5">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2 text-sm">✅ Puntos fuertes</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Precio imbatible — 89€</li>
                      <li>• 990.000 destellos (más de 10 años)</li>
                      <li>• Pantalla LCD, 5 niveles de intensidad</li>
                      <li>• Servicio posventa, garantía 2 años</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2 text-sm">❌ Puntos débiles</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Sin enfriamiento por zafiro</li>
                      <li>• Sesiones más largas (10–15 min)</li>
                      <li>• Menos adecuado para vello muy grueso</li>
                    </ul>
                  </div>
                </div>

                <a
                  href={PULSEPRO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-4 rounded-xl font-bold text-lg shadow-lg transition-colors"
                  style={{ backgroundColor: "#3B82F6", color: "#ffffff" }}
                  onClick={() => trackClick("pulsepro_analysis_hombre")}
                >
                  Ver el lumeor Pulse Pro II — 89€
                </a>
              </div>
            </div>
          </div>

          {/* Grid para los otros 3 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Ulike Air 3</h3>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-bold">8/10</span>
              </div>
              <div className="text-center mb-4">
                <Image width={160} height={200} className="mx-auto rounded-lg object-contain" src="/images/Ulike_epilateur4.jpg" alt="Ulike Air 3 depiladora de luz pulsada IPL hombre" />
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Tecnología de enfriamiento por zafiro idéntica al Luxe K, resultados comparables. Potencia
                ligeramente superior (~20 J/cm²). Pero a 260€ para una diferencia de
                comodidad mínima, la relación calidad-precio es difícil de defender.
              </p>
              <div className="grid grid-cols-3 gap-2 text-xs mb-4">
                <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold">260€</div><div className="text-gray-500">Precio</div></div>
                <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold text-green-600">✅</div><div className="text-gray-500">Zafiro</div></div>
                <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold">500K</div><div className="text-gray-500">Destellos</div></div>
              </div>
              <p className="text-xs text-gray-500 italic">Para quién: presupuesto disponible, máxima comodidad prioritaria sobre el precio.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Braun Silk Expert Pro 5</h3>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-bold">7/10</span>
              </div>
              <div className="text-center mb-4">
                <Image width={160} height={200} className="mx-auto rounded-lg object-contain" src="/images/braun_epilateur2.jpg" alt="Braun Silk Expert Pro 5 depiladora de luz pulsada IPL" />
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Referencia alemana con sensor SensoAdapt automático. Sólido y fiable. Pero sin
                enfriamiento por zafiro y con solo 4–6 J/cm², está en desventaja sobre
                el vello masculino grueso a pesar de su precio premium de 325€.
              </p>
              <div className="grid grid-cols-3 gap-2 text-xs mb-4">
                <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold">325€</div><div className="text-gray-500">Precio</div></div>
                <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold text-red-500">❌</div><div className="text-gray-500">Zafiro</div></div>
                <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold">∞</div><div className="text-gray-500">Destellos</div></div>
              </div>
              <p className="text-xs text-gray-500 italic">Para quién: fiel a la marca Braun, con vello fino a moderado.</p>
            </div>

            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Philips Lumea 9000</h3>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-bold">7/10</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <Image width={140} height={180} className="mx-auto rounded-lg object-contain" src="/images/philips_epilateur_3.webp" alt="Philips Lumea 9000 depiladora de luz pulsada IPL" />
                <div className="flex-1">
                  <p className="text-gray-600 mb-4 text-sm">
                    Gama alta con aplicación móvil y sensor IA de detección de piel.
                    Resultados excelentes y destellos ilimitados. Pero a 580€ sin enfriamiento
                    por zafiro, es difícil de justificar para una depiladora hombre pecho-espalda cuando
                    el Luxe K ofrece el confort de zafiro a 139€.
                  </p>
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold">580€</div><div className="text-gray-500">Precio</div></div>
                    <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold text-red-500">❌</div><div className="text-gray-500">Zafiro</div></div>
                    <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold">N/D</div><div className="text-gray-500">J/cm²</div></div>
                    <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold">∞</div><div className="text-gray-500">Destellos</div></div>
                  </div>
                  <p className="text-xs text-gray-500 italic mt-3">Para quién: presupuesto ilimitado, prioridad a la marca más conocida.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="veredicto" className="mb-16">
          <div className="bg-gray-900 rounded-2xl p-8 sm:p-10 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Nuestro veredicto para los hombres en 2026
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              La depilación IPL funciona perfectamente sobre el vello masculino — siempre que se
              elija el dispositivo adecuado. Los modelos sin enfriamiento por zafiro (Philips, Braun)
              dan buenos resultados pero resultan incómodos en zonas densas como el pecho
              o la espalda. A sus precios, es difícil recomendarlos.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              En 2026, dos dispositivos lumeor destacan claramente para los hombres:{" "}
              el <strong>Pulse Pro II a 89€</strong> para quienes quieren probar la IPL sin gran
              compromiso, y el <strong>Luxe K a 139€</strong> para quienes quieren
              el confort del zafiro — imprescindible en el vello grueso masculino — a un precio
              que el Ulike Air 3 no puede igualar (260€ por la misma tecnología).
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { value: "89€", label: "Pulse Pro II — para empezar" },
                { value: "139€", label: "Luxe K — con zafiro" },
                { value: "4–6 sem", label: "Resultados pecho" },
                { value: "10+ años", label: "Vida útil" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href={PULSEPRO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-4 rounded-2xl font-bold text-lg shadow-xl transition-colors"
                style={{ backgroundColor: "#3B82F6", color: "#ffffff" }}
                onClick={() => trackClick("pulsepro_verdict_hombre")}
              >
                lumeor Pulse Pro II<br />
                <span className="text-sm font-normal opacity-90">89€ — Mejor precio</span>
              </a>
              <a
                href={LUXEK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-4 rounded-2xl font-bold text-lg shadow-xl transition-colors relative"
                style={{ backgroundColor: "#FBBF24", color: "#000000" }}
                onClick={() => trackClick("luxek_verdict_hombre")}
              >
                lumeor Luxe K ⭐<br />
                <span className="text-sm font-normal opacity-80">139€ — Recomendado para hombres</span>
              </a>
            </div>
            <p className="text-center text-gray-500 text-xs mt-3">
              Envío gratuito · Garantía 2 años · Derecho de desistimiento 14 días
            </p>
          </div>
        </section>

        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Preguntas frecuentes — depiladora de luz pulsada IPL para hombre
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "¿La IPL es eficaz sobre el vello grueso de los hombres?",
                a: "Sí, la IPL es eficaz sobre el vello masculino, incluido el más grueso. El vello más grueso absorbe más energía lumínica, lo que hace el proceso eficaz — pero también genera más calor. Por eso un dispositivo con enfriamiento por zafiro es aún más útil para los hombres que para las mujeres.",
              },
              {
                q: "¿Puedo usar la IPL para eliminar mi barba?",
                a: "No. La IPL está contraindicada en la barba completa. La densidad del vello es demasiado elevada: el riesgo de quemaduras es real y documentado. En cambio, la IPL puede usarse para perfilar el contorno de la barba o tratar el cuello — zonas con una densidad normal.",
              },
              {
                q: "¿Qué zona tratar primero?",
                a: "Empieza por una zona poco sensible con vello de densidad moderada, como los antebrazos o las piernas, para calibrar el nivel de intensidad adecuado a tu piel. Pasa después al pecho y los hombros. La espalda suele requerir ayuda externa para llegar a las zonas difíciles.",
              },
              {
                q: "¿Cuántas sesiones se necesitan para ver resultados en el pecho?",
                a: "Los primeros resultados visibles —reducción de densidad y ralentización del crecimiento del vello— aparecen tras 4 a 6 semanas de sesiones semanales. El pecho es una zona densa, así que conviene prever entre 8 y 12 sesiones para un resultado completo y duradero.",
              },
              {
                q: "¿La IPL duele para un hombre?",
                a: "Sin enfriamiento, la IPL puede resultar incómoda en zonas de vello grueso (pecho, espalda). Con un dispositivo de zafiro activo como el lumeor Luxe K, la sensación se reduce notablemente — la placa fría neutraliza el calor generado por el destello en tiempo real. La mayoría de los usuarios lo describen como un ligero cosquilleo.",
              },
              {
                q: "¿Puedo usar la depiladora de mi pareja?",
                a: "Técnicamente sí, los dispositivos IPL no están diseñados por género. Pero si el aparato no tiene enfriamiento por zafiro, las sesiones serán menos cómodas sobre el vello grueso masculino. Si compartes el dispositivo, el lumeor Luxe K con zafiro se adaptará perfectamente a los dos.",
              },
            ].map((item) => (
              <details key={item.q} className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                  <span>{item.q}</span>
                  <span className="ml-4 text-green-600 text-xl group-open:rotate-45 transition-transform duration-200 flex-shrink-0">+</span>
                </summary>
                <div className="px-6 pb-5 pt-2 text-gray-600 leading-relaxed text-sm border-t border-gray-100">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <a
            href={PULSEPRO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-5 rounded-2xl font-bold text-lg shadow-lg transition-colors"
            style={{ backgroundColor: "#3B82F6", color: "#ffffff" }}
            onClick={() => trackClick("pulsepro_footer_hombre")}
          >
            lumeor Pulse Pro II<br />
            <span className="text-sm font-normal opacity-90">89€ · Envío gratuito</span>
          </a>
          <a
            href={LUXEK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-5 rounded-2xl font-bold text-lg shadow-lg transition-colors"
            style={{ backgroundColor: "#FBBF24", color: "#000000" }}
            onClick={() => trackClick("luxek_footer_hombre")}
          >
            lumeor Luxe K ⭐<br />
            <span className="text-sm font-normal opacity-70">139€ · Recomendado para hombres</span>
          </a>
        </div>

        <div className="text-center text-sm text-gray-400 pb-4">
          <Link href="/" className="hover:text-green-600">Inicio</Link>
          <span className="mx-2">›</span>
          <span>Mejor depiladora de luz pulsada IPL para hombre 2026</span>
        </div>
      </article>
    </main>
  );
}
