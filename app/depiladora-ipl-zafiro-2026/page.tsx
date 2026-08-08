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

const lumeor_URL =
  "https://lumeor.fr/produit/epilateur-lumeor-lumiere-pulsee-luxe-k/?utm_source=expertabelleza&utm_medium=referral&utm_campaign=ipl-zafiro-comparativa";

function trackClick(label: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "click", {
      event_category: "outbound",
      event_label: label,
      transport_type: "beacon",
    });
  }
}

export default function DepiladoraIPLZafiro() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Script id="schema-article" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Mejor depiladora de luz pulsada IPL con zafiro 2026: comparativa completa",
          description: "Comparativa de las mejores depiladoras de luz pulsada IPL con tecnología de enfriamiento por zafiro en 2026.",
          image: "https://expertabelleza.es/images/comparatif_epilateurs_header2026.jpg",
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
            "@id": "https://expertabelleza.es/depiladora-ipl-zafiro-2026",
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
              name: "¿Qué es la tecnología de enfriamiento por zafiro en una depiladora de luz pulsada IPL?",
              acceptedAnswer: { "@type": "Answer", text: "El enfriamiento por zafiro es una tecnología que enfría la piel en tiempo real durante cada destello de luz pulsada. La ventana de cristal de zafiro desciende a aproximadamente 5°C, reduciendo de forma significativa las molestias y el enrojecimiento tras la sesión." },
            },
            {
              "@type": "Question",
              name: "¿Qué diferencia hay entre IPL y láser para la depilación?",
              acceptedAnswer: { "@type": "Answer", text: "La luz pulsada IPL emite un espectro amplio de longitudes de onda que actúa sobre la melanina del vello, mientras que el láser emite una longitud de onda única muy concentrada. La IPL cubre una superficie mayor en menos tiempo, ideal para uso doméstico." },
            },
            {
              "@type": "Question",
              name: "¿En cuántas semanas se ven resultados con una depiladora de luz pulsada IPL de zafiro?",
              acceptedAnswer: { "@type": "Answer", text: "Con el lumeor Luxe K a 12–14 J/cm², los primeros resultados visibles aparecen a partir de 3 a 4 semanas. Un resultado duradero requiere generalmente entre 8 y 12 sesiones semanales." },
            },
            {
              "@type": "Question",
              name: "¿El lumeor Luxe K funciona en piel oscura?",
              acceptedAnswer: { "@type": "Answer", text: "El lumeor Luxe K está adaptado a los fototipos I a IV (piel clara a mate). No se recomienda en pieles muy oscuras (fototipos V-VI) ni sobre vello muy claro." },
            },
            {
              "@type": "Question",
              name: "¿Hay garantía en el lumeor Luxe K?",
              acceptedAnswer: { "@type": "Answer", text: "Sí. El lumeor Luxe K se vende con una garantía del fabricante de 2 años, de acuerdo con la legislación europea. El servicio posventa está gestionado desde Francia. Envío gratuito incluido. En España se aplica el derecho de desistimiento de 14 días." },
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
                { href: "#luxek", label: "lumeor Luxe K" },
                { href: "#tabla", label: "Comparativa" },
                { href: "#tecnologia", label: "Tecnología zafiro" },
                { href: "#analisis", label: "Otros modelos" },
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
            <span>Depiladoras de luz pulsada IPL con zafiro</span>
          </div>

          <div className="relative mb-8">
            <Image
              src="/images/comparatif_epilateurs_header2026.jpg"
              alt="Comparativa de las mejores depiladoras de luz pulsada IPL con enfriamiento por zafiro 2026"
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-2xl"
              priority
            />
            <div className="absolute top-4 left-4">
              <span className="bg-green-600 text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg">
                Guía Experta 2026
              </span>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
            Mejor depiladora de luz pulsada IPL con zafiro 2026:{" "}
            <span className="text-green-600">comparativa completa</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            La tecnología de enfriamiento por zafiro reduce las molestias a la mitad. Aquí están los únicos
            dispositivos de luz pulsada que la incorporan de verdad — y cuál ofrece la mejor
            relación calidad-precio.
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
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <span className="text-sm text-gray-600">(4,9/5 • 23 opiniones)</span>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 mb-8">
            <p className="text-gray-700 leading-relaxed mb-3">
              Llevo 6 años usando depiladoras de luz pulsada. Y puedo deciros algo: la mayoría de los
              dispositivos por debajo de 200€ que he probado me han decepcionado — no porque la
              luz pulsada no funcione, sino porque se calientan, a veces generan molestias, y
              acabas abandonando el protocolo tras 3 sesiones.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              El enfriamiento por zafiro cambia realmente las cosas. No es marketing:
              es una ventana de cristal de zafiro que permanece fría durante el destello. La
              diferencia al tacto es inmediata. Y cuando la depilación deja de ser incómoda, se
              mantiene el protocolo — y se obtienen resultados.
            </p>
            <p className="text-gray-700 leading-relaxed">
              En esta comparativa he seleccionado las 4 depiladoras de luz pulsada IPL
              más vendidas en España en 2026 para ayudarte a elegir bien.
            </p>
          </div>
        </section>

        <section id="luxek" className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Nuestra recomendación 2026
          </h2>

          <a
            href={lumeor_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-2xl shadow-xl p-2 sm:p-6 border-4 border-green-500 relative overflow-hidden hover:shadow-2xl transition-all duration-300"
            onClick={() => trackClick("lumeor_hero_card")}
          >
            <div
              className="absolute top-0 right-0 px-6 py-2 rounded-bl-2xl font-bold text-lg"
              style={{ backgroundColor: "#FDE047", color: "#000000" }}
            >
              #1 ELECCIÓN EXPERTA
            </div>

            <div className="grid md:grid-cols-5 gap-6 items-center">
              <div className="flex justify-center order-1 md:order-2 md:col-span-2">
                <div style={{ background: "linear-gradient(145deg, #F9CDE0 0%, #fdebf3 100%)" }} className="p-4 rounded-2xl w-full">
                  <Image
                    width={320}
                    height={380}
                    className="mx-auto rounded-xl transition-transform duration-300 hover:scale-105 mb-3"
                    src="https://lumeor.fr/wp-content/uploads/2025/08/luxek.webp"
                    alt="lumeor Luxe K depiladora de luz pulsada IPL con zafiro"
                  />
                  <div className="flex gap-2 justify-center flex-wrap">
                    {[
                      { src: "https://lumeor.fr/wp-content/uploads/2025/08/luxeKProduit2.jpg", alt: "Luxe K vista 2" },
                      { src: "https://lumeor.fr/wp-content/uploads/2025/08/luxeKProduit3.jpg", alt: "Luxe K vista 3" },
                      { src: "https://lumeor.fr/wp-content/uploads/2025/08/luxeKMarble.jpg", alt: "Luxe K vista 4" },
                      { src: "https://lumeor.fr/wp-content/uploads/2025/08/luxeKProduit5-1.jpg", alt: "Luxe K vista 5" },
                    ].map((img) => (
                      <Image key={img.src} width={56} height={56} src={img.src} alt={img.alt} className="rounded-lg object-cover border-2 border-white shadow-sm" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="order-2 md:order-1 md:col-span-3">
                <h3 className="text-3xl font-bold text-gray-900 mb-2 pr-28">lumeor Luxe K</h3>
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-4">
                    {[1, 2, 3, 4].map((s) => <span key={s} className="text-yellow-400 text-2xl">★</span>)}
                    <span className="text-2xl relative inline-block">
                      <span className="text-gray-300">★</span>
                      <span className="text-yellow-400 absolute top-0 left-0 overflow-hidden" style={{ width: "90%" }}>★</span>
                    </span>
                  </div>
                  <span className="text-gray-600 font-medium">4,9/5 • 95% satisfechas</span>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 mb-5">
                  <h4 className="font-bold text-green-800 mb-3 text-lg">Por qué es nuestra #1:</h4>
                  <ul className="space-y-2">
                    {[
                      ["Tecnología de enfriamiento por zafiro idéntica al Ulike Air 3", "a mitad de precio (139€ vs 260€)"],
                      ["999.999 destellos incluidos", "es decir, más de 10 años de uso"],
                      ["Enfriamiento por zafiro activo", "molestias reducidas a la mitad durante el destello"],
                      ["Resultados visibles", "desde 3–4 semanas, sesiones de 8–10 min"],
                      ["Envío gratuito", "garantía 2 años, servicio posventa desde Francia"],
                    ].map(([label, value]) => (
                      <li key={label} className="flex items-start">
                        <span className="text-green-600 mr-2 font-bold mt-0.5">•</span>
                        <span className="text-gray-700"><strong>{label}</strong> — {value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="text-center bg-gray-50 rounded-lg p-3">
                    <div className="text-green-600 font-bold text-2xl">139€</div>
                    <div className="text-gray-400 text-xs line-through">234€</div>
                    <div className="text-gray-500 text-sm">Precio</div>
                  </div>
                  <div className="text-center bg-gray-50 rounded-lg p-3">
                    <div className="text-green-600 font-bold text-xl">3–4 sem</div>
                    <div className="text-gray-500 text-sm">Primeros resultados</div>
                  </div>
                  <div className="text-center bg-gray-50 rounded-lg p-3">
                    <div className="text-green-600 font-bold text-xl">999K</div>
                    <div className="text-gray-500 text-sm">Destellos</div>
                  </div>
                </div>

                <div className="text-center py-4 rounded-xl font-bold text-lg shadow-lg" style={{ backgroundColor: "#FBBF24", color: "#000000" }}>
                  Ver el lumeor Luxe K — 139€
                </div>
              </div>
            </div>
          </a>

          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Análisis detallado del lumeor Luxe K</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              El lumeor Luxe K está pensado para quienes están cansadas de dispositivos de gama
              baja que decepcionan — o que dudan entre una depiladora de luz pulsada doméstica y una sesión
              láser a 200€. Integra el <strong>mismo enfriamiento por zafiro activo que el Ulike Air 3</strong>,
              a mitad de precio, y con casi el doble de destellos.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Su potencia de <strong>12–14 J/cm²</strong> ofrece resultados medibles desde
              3 a 4 semanas. La pantalla LCD muestra el nivel de intensidad (1 a 5) y el contador
              de destellos restantes. Las sesiones de cuerpo entero se completan en <strong>8 a 10 minutos</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Con 999.999 pulsos luminosos, puedes usar el dispositivo durante más de 10 años. Envío
              gratuito, servicio posventa desde Francia, garantía 2 años.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {[
                { src: "https://lumeor.fr/wp-content/uploads/2025/08/luxeKProduit6.jpg", alt: "lumeor Luxe K en uso" },
                { src: "https://lumeor.fr/wp-content/uploads/2025/08/luxeKProduit7.jpg", alt: "lumeor Luxe K pantalla LCD" },
                { src: "https://lumeor.fr/wp-content/uploads/2025/08/luxeKProduit3.jpg", alt: "lumeor Luxe K detalle zafiro" },
              ].map((img) => (
                <Image key={img.src} width={280} height={200} src={img.src} alt={img.alt} className="rounded-xl object-cover w-full h-40 sm:h-48" />
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-bold text-green-800 mb-4">Ventajas</h4>
                <ul className="space-y-3">
                  {[
                    "Tecnología de enfriamiento por zafiro : Enfriamiento activo durante cada destello, molestias reducidas a la mitad.",
                    "Relación calidad-precio : Misma tecnología que el Ulike Air 3 a 139€ en lugar de 260€.",
                    "Durabilidad : 999.999 destellos, más de 10 años de uso sin reemplazo.",
                    "Rapidez : Cuerpo entero en 8–10 min gracias al modo de destello automático.",
                    "Precisión : Pantalla LCD con nivel de intensidad (1–5) y contador de destellos.",
                    "Servicio posventa España/Francia : Garantía 2 años, envío gratuito, accesorios incluidos.",
                  ].map((item) => {
                    const parts = item.split(" : ");
                    return (
                      <li key={item} className="flex items-start space-x-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span className="text-gray-700"><strong>{parts[0]}</strong> : {parts.slice(1).join(" : ")}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-red-800 mb-4">Inconvenientes</h4>
                <ul className="space-y-3">
                  {[
                    "Marca reciente : Menos conocida que Philips o Braun en el mercado español.",
                    "Solo online : Disponible exclusivamente en lumeor.fr, no en tiendas físicas.",
                    "Stock limitado : Alta demanda, disponibilidad ocasionalmente reducida.",
                  ].map((item) => {
                    const parts = item.split(" : ");
                    return (
                      <li key={item} className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">▲</span>
                        <span className="text-gray-700"><strong>{parts[0]}</strong> : {parts.slice(1).join(" : ")}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mb-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-green-800 font-bold text-lg flex-shrink-0">C</div>
                <div>
                  <p className="italic text-gray-700 mb-2">"Tras pocas sesiones, los resultados ya son visibles... 0 molestias gracias al efecto de enfriamiento. Lo recomiendo al 100%."</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-semibold text-gray-800">Carmen R., 31 años, Madrid</p>
                    <div className="flex space-x-1">{[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-sm">★</span>)}</div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Verificado ✓ • Compra confirmada</p>
                  <p className="text-xs text-gray-400 mt-1">Testimonio traducido al español</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-8 mb-6">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Ventaja única: pantalla LCD inteligente y enfriamiento por zafiro</h4>
              <p className="text-gray-700 mb-6 text-center">
                El LUXE K integra una pantalla LCD profesional. Esta diferencia tecnológica
                transforma por completo la experiencia de depilación en casa.
              </p>
              <Image
                width={300}
                height={160}
                className="mx-auto rounded-xl"
                src="https://lumeor.fr/wp-content/uploads/2025/08/luxeKMarble.jpg"
                alt="Pantalla LCD depiladora lumeor Luxe K"
              />
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 text-sm font-medium text-center">
                  💡 <strong>Conclusión:</strong> El enfriamiento por zafiro del LUXE K garantiza una depilación segura, eficaz y SIN MOLESTIAS.
                  Esta tecnología exclusiva justifica por sí sola la elección de este modelo para una depilación en casa exitosa.
                </p>
              </div>
            </div>

            <div className="text-center">
              <a
                href={lumeor_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundColor: "#FBBF24", color: "#000000" }}
                onClick={() => trackClick("lumeor_detailed_analysis")}
              >
                Ver en el sitio oficial →
              </a>
            </div>
          </div>
        </section>

        <section id="analisis" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Los otros modelos de depiladoras de luz pulsada del mercado</h2>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* #2 Ulike Air 3 / Air 10 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Ulike Air 3 / Air 10</h3>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-bold">#2</span>
              </div>
              <div className="text-center mb-4">
                <Image width={180} height={220} className="mx-auto rounded-lg object-contain" src="/images/Ulike_epilateur4.jpg" alt="Ulike Air 3 Air 10 depiladora de luz pulsada zafiro Ice-Cool" />
              </div>
              <div className="flex items-center mb-3">
                {[1,2,3].map((s) => <span key={s} className="text-yellow-400">★</span>)}
                <span className="text-yellow-400">⭐</span>
                <span className="text-gray-300">★</span>
                <span className="text-gray-600 text-sm ml-2">3,8/5 · 756 opiniones</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Tecnología Sapphire Ice-Cool destacada en 2026. Campañas publicitarias
                intensivas en redes sociales, pero resultados prácticos por debajo de las
                expectativas y relación calidad-precio cuestionable a 349€.
              </p>
              <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold text-orange-600">349€</div><div className="text-gray-500">Precio</div></div>
                <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold text-orange-600">✅</div><div className="text-gray-500">Zafiro</div></div>
                <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold text-orange-600">15 min</div><div className="text-gray-500">Sesión</div></div>
              </div>
              <p className="text-xs text-gray-500 italic mb-4">Para quién: quienes son sensibles al marketing de influencers y disponen de un presupuesto elevado.</p>
              <a href="" target="_blank" rel="noopener noreferrer sponsored" className="block w-full text-center bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">Ver en Amazon →</a>
            </div>

            {/* #2 Análisis detallado - Ulike Air 3 / Air 10 */}
            <div className="lg:col-span-2 bg-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Análisis detallado del Ulike Air 3 / Air 10</h3>
              <p className="text-gray-700 mb-6">
                El Ulike Air 3 y el Air 10 apuestan por su tecnología de enfriamiento por hielo y un marketing
                agresivo en redes sociales. Aunque prometen resultados rápidos en 3 semanas,
                nuestras pruebas revelan un rendimiento decepcionante y un precio injustificado de 349€ para
                dispositivos de capacidades limitadas frente al lumeor Luxe K.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-green-800 mb-4">✓ Puntos fuertes</h4>
                  <ul className="space-y-3">
                    {[
                      "Enfriamiento Sapphire : Tecnología de enfriamiento por hielo que reduce las molestias durante el tratamiento.",
                      "Diseño moderno : Apariencia elegante y ergonomía correcta con un agarre agradable.",
                      "Aplicación móvil : Seguimiento de las sesiones a través de la app Ulike con consejos personalizados.",
                      "Garantía estándar : Servicio de atención al cliente disponible con garantía del fabricante de 1 año.",
                      "Popularidad : Fuerte presencia online y numerosas opiniones disponibles para decidirse."
                    ].map((advantage, index) => {
                      const boldPart = advantage.split(' : ')[0];
                      const rest = advantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-green-600 mt-1 flex-shrink-0">✓</span>
                          <span className="text-gray-700"><strong>{boldPart}</strong> : {rest}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-red-800 mb-4">✗ Inconvenientes</h4>
                  <ul className="space-y-3">
                    {[
                      "Precio injustificado : 349€, es decir 2,5 veces el precio del lumeor Luxe K, para resultados claramente inferiores.",
                      "Promesas incumplidas : Los resultados en 3 semanas anunciados no se materializan en la práctica.",
                      "Eficacia limitada : Nota de 3,8/5 con numerosas valoraciones negativas sobre la eficacia real.",
                      "Durabilidad cuestionable : Informes frecuentes de averías y fallos prematuros.",
                      "Marketing engañoso : Comunicación exagerada que no refleja el rendimiento real."
                    ].map((disadvantage, index) => {
                      const boldPart = disadvantage.split(' : ')[0];
                      const rest = disadvantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-red-600 mt-1 flex-shrink-0">✗</span>
                          <span className="text-gray-700"><strong>{boldPart}</strong> : {rest}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {/* #3 Bodysiam Elite */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Bodysiam Elite</h3>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-bold">#3</span>
              </div>
              <div className="text-center mb-4">
                <Image width={180} height={220} className="mx-auto rounded-lg object-contain" src="/images/bodysiam_elite_epilateur.jpg" alt="Bodysiam Elite depiladora de luz pulsada IPL" />
              </div>
              <div className="flex items-center mb-3">
                {[1,2,3].map((s) => <span key={s} className="text-yellow-400">★</span>)}
                <span className="text-yellow-400">⭐</span>
                <span className="text-gray-300">★</span>
                <span className="text-gray-600 text-sm ml-2">3,5/5 · ~200 opiniones</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Marca francesa de venta directa, buen acabado y servicio posventa local
                apreciado. Pero la ausencia de enfriamiento por zafiro y una potencia moderada
                la sitúan por detrás del Luxe K pese a un precio similar de 179€.
              </p>
              <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold text-teal-600">179€</div><div className="text-gray-500">Precio</div></div>
                <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold text-teal-600">❌</div><div className="text-gray-500">Zafiro</div></div>
                <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold text-teal-600">~15 min</div><div className="text-gray-500">Sesión</div></div>
              </div>
              <p className="text-xs text-gray-500 italic mb-4">Para quién: usuarias sensibles al origen francés de la marca.</p>
              <a href="https://www.amazon.es/s?k=bodysiam+elite+ipl" target="_blank" rel="noopener noreferrer sponsored" className="block w-full text-center bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">Ver en Amazon →</a>
            </div>

            {/* #3 Análisis detallado - Bodysiam Elite */}
            <div className="lg:col-span-2 bg-teal-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Análisis detallado del Bodysiam Elite</h3>
              <p className="text-gray-700 mb-6">
                El Bodysiam Elite se distingue por su posicionamiento francés y su atención al cliente local,
                un argumento poco frecuente en este mercado dominado por marcas asiáticas. Su acabado cuidado y su
                servicio posventa reactivo son valorados. Sin embargo, la ausencia de enfriamiento por zafiro y una
                potencia inferior a la del lumeor Luxe K dificultan justificar su precio de 179€.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-green-800 mb-4">✓ Puntos fuertes</h4>
                  <ul className="space-y-3">
                    {[
                      "Marca francesa : Fabricante europeo con servicio posventa local y reactivo, tranquilizador para las usuarias.",
                      "Diseño cuidado : Acabado premium y ergonomía bien pensada para un uso cómodo.",
                      "Interfaz sencilla : Manejo intuitivo sin curva de aprendizaje, ideal para principiantes.",
                      "Garantía local : Atención al cliente en español/francés, devoluciones y posventa gestionados desde Europa."
                    ].map((advantage, index) => {
                      const boldPart = advantage.split(' : ')[0];
                      const rest = advantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-green-600 mt-1 flex-shrink-0">✓</span>
                          <span className="text-gray-700"><strong>{boldPart}</strong> : {rest}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-red-800 mb-4">✗ Inconvenientes</h4>
                  <ul className="space-y-3">
                    {[
                      "Sin zafiro : Ningún enfriamiento activo — sesiones más incómodas en pieles sensibles.",
                      "Potencia inferior : Menor energía que el Luxe K, resultados que tardan más en aparecer.",
                      "Precio poco justificado : 179€ frente a 139€ del Luxe K, que ofrece zafiro y más destellos.",
                      "Notoriedad limitada : Pocas valoraciones verificadas (~200), lo que dificulta una evaluación objetiva."
                    ].map((disadvantage, index) => {
                      const boldPart = disadvantage.split(' : ')[0];
                      const rest = disadvantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-red-600 mt-1 flex-shrink-0">✗</span>
                          <span className="text-gray-700"><strong>{boldPart}</strong> : {rest}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {/* #4 OhMySkin */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">OhMySkin</h3>
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-bold">#4</span>
              </div>
              <div className="text-center mb-4">
                <Image width={180} height={220} className="mx-auto rounded-lg object-contain" src="/images/ohmyskin_epilateur.jpg" alt="OhMySkin depiladora de luz pulsada IPL premium" />
              </div>
              <div className="flex items-center mb-3">
                {[1,2,3].map((s) => <span key={s} className="text-yellow-400">★</span>)}
                <span className="text-gray-300">★</span>
                <span className="text-gray-300">★</span>
                <span className="text-gray-600 text-sm ml-2">3,3/5 · ~150 opiniones</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Posicionamiento premium con un packaging cuidado, pero tecnología sin
                diferenciación notable. La ausencia de enfriamiento por zafiro y un precio de 199€
                la convierten en una mala relación calidad-precio frente al Luxe K.
              </p>
              <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold text-pink-600">199€</div><div className="text-gray-500">Precio</div></div>
                <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold text-pink-600">❌</div><div className="text-gray-500">Zafiro</div></div>
                <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold text-pink-600">~12 min</div><div className="text-gray-500">Sesión</div></div>
              </div>
              <p className="text-xs text-gray-500 italic mb-4">Para quién: usuarias atraídas por el packaging premium.</p>
              <a href="https://www.amazon.es/s?k=ohmyskin+epilador+ipl" target="_blank" rel="noopener noreferrer sponsored" className="block w-full text-center bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors">Ver en Amazon →</a>
            </div>

            {/* #4 Análisis detallado - OhMySkin */}
            <div className="lg:col-span-2 bg-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Análisis detallado del OhMySkin</h3>
              <p className="text-gray-700 mb-6">
                OhMySkin apuesta por un posicionamiento premium con un packaging atractivo y una
                interfaz depurada. Por desgracia, la tecnología incorporada no se diferencia
                lo suficiente para justificar un precio de 199€. Sin enfriamiento por zafiro, los resultados
                tardan entre 10 y 12 semanas en aparecer y las pieles sensibles sufren más.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-green-800 mb-4">✓ Puntos fuertes</h4>
                  <ul className="space-y-3">
                    {[
                      "Diseño premium : Packaging cuidado y dispositivo elegante que atrae a primera vista.",
                      "Interfaz sencilla : Manejo inmediato sin manual, botón único y pantalla clara.",
                      "Ligereza : Formato compacto y ligero, fácil de manejar en todas las zonas del cuerpo.",
                      "Sesión corta : ~12 minutos para el cuerpo entero, en la media del mercado."
                    ].map((advantage, index) => {
                      const boldPart = advantage.split(' : ')[0];
                      const rest = advantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-green-600 mt-1 flex-shrink-0">✓</span>
                          <span className="text-gray-700"><strong>{boldPart}</strong> : {rest}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-red-800 mb-4">✗ Inconvenientes</h4>
                  <ul className="space-y-3">
                    {[
                      "Sin zafiro : Ausencia total de enfriamiento activo — molestias notables en pieles sensibles.",
                      "Precio no justificado : 199€ frente a 139€ del Luxe K, que ofrece zafiro, más potencia y más destellos.",
                      "Resultados lentos : 10 a 12 semanas antes de resultados visibles, muy por debajo del Luxe K (3–4 semanas).",
                      "Pocas opiniones : Solo ~150 opiniones disponibles, lo que dificulta evaluar la fiabilidad a largo plazo."
                    ].map((disadvantage, index) => {
                      const boldPart = disadvantage.split(' : ')[0];
                      const rest = disadvantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-red-600 mt-1 flex-shrink-0">✗</span>
                          <span className="text-gray-700"><strong>{boldPart}</strong> : {rest}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {/* #5 no!no! Pro IPL */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">no!no! Pro IPL</h3>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">#5</span>
              </div>
              <div className="text-center mb-4">
                <Image width={180} height={220} className="mx-auto rounded-lg object-contain" src="/images/nono_epilateur.jpg" alt="no!no! Pro IPL depiladora de luz pulsada facial" />
              </div>
              <div className="flex items-center mb-3">
                {[1,2,3].map((s) => <span key={s} className="text-yellow-400">★</span>)}
                <span className="text-gray-300">★</span>
                <span className="text-gray-300">★</span>
                <span className="text-gray-600 text-sm ml-2">3,0/5 · 243 opiniones</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Dispositivo dirigido exclusivamente a la depilación facial. Tecnología
                obsoleta en 2026, rendimiento muy limitado y tratamiento de 25 minutos para
                resultados que tardan más de 16 semanas.
              </p>
              <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold text-red-600">169€</div><div className="text-gray-500">Precio</div></div>
                <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold text-red-600">❌</div><div className="text-gray-500">Zafiro</div></div>
                <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold text-red-600">25 min</div><div className="text-gray-500">Sesión</div></div>
              </div>
              <p className="text-xs text-gray-500 italic mb-4">Para quién: presupuesto muy ajustado, uso facial únicamente.</p>
              <a href="" target="_blank" rel="noopener noreferrer sponsored" className="block w-full text-center bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">Ver en Amazon →</a>
            </div>

            {/* #5 Análisis detallado - no!no! Pro IPL */}
            <div className="lg:col-span-2 bg-red-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Análisis detallado del no!no! Pro IPL</h3>
              <p className="text-gray-700 mb-6">
                El no!no! Pro IPL se presenta como una solución de depilación en casa, pero nuestra prueba revela
                una tecnología obsoleta y un rendimiento muy decepcionante. Limitado a la depilación facial y
                necesitando más de 16 semanas para resultados parciales, no puede competir con las
                alternativas modernas del mercado, ni siquiera con el Ulike a 349€.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-green-800 mb-4">✓ Puntos fuertes</h4>
                  <ul className="space-y-3">
                    {[
                      "Precio accesible : A 169€, uno de los dispositivos más económicos del segmento IPL.",
                      "Compacto : Diseño portátil y ligero, fácil de guardar y transportar.",
                      "Especializado en rostro : Diseñado específicamente para las zonas sensibles del rostro.",
                      "Uso sencillo : Interfaz básica y manejo intuitivo sin complicaciones."
                    ].map((advantage, index) => {
                      const boldPart = advantage.split(' : ')[0];
                      const rest = advantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-green-600 mt-1 flex-shrink-0">✓</span>
                          <span className="text-gray-700"><strong>{boldPart}</strong> : {rest}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-red-800 mb-4">✗ Inconvenientes</h4>
                  <ul className="space-y-3">
                    {[
                      "Eficacia muy limitada : Nota de 3,0/5 con resultados casi inexistentes en el vello corporal.",
                      "Tecnología obsoleta : Sistema anticuado que no puede competir con las IPL modernas de zafiro.",
                      "Zonas restringidas : Solo para el rostro, inutilizable en el cuerpo entero.",
                      "Resultados tardíos : Más de 16 semanas para cambios mínimos.",
                      "Duración del tratamiento : 25 minutos por sesión frente a 8–10 minutos del Luxe K.",
                      "Relación calidad-precio : Incluso a precio reducido, el rendimiento no justifica la compra."
                    ].map((disadvantage, index) => {
                      const boldPart = disadvantage.split(' : ')[0];
                      const rest = disadvantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-red-600 mt-1 flex-shrink-0">✗</span>
                          <span className="text-gray-700"><strong>{boldPart}</strong> : {rest}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {/* #6 Braun Silk Expert Pro 5 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Braun Silk Expert Pro 5</h3>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-bold">#6</span>
              </div>
              <div className="text-center mb-4">
                <Image width={180} height={220} className="mx-auto rounded-lg object-contain" src="/images/braun_epilateur2.jpg" alt="Braun Silk Expert Pro 5 depiladora de luz pulsada IPL SensoAdapt" />
              </div>
              <div className="flex items-center mb-3">
                {[1,2,3,4].map((s) => <span key={s} className="text-yellow-400">★</span>)}
                <span className="text-gray-300">★</span>
                <span className="text-gray-600 text-sm ml-2">4,3/5 · 1.456 opiniones</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Calidad de fabricación alemana impecable, tecnología SensoAdapt que adapta
                la intensidad en tiempo real según el tono de piel. Pero a 325€ sin enfriamiento
                por zafiro y solo 4 J/cm², difícil de justificar frente al Luxe K.
              </p>
              <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold text-purple-600">325€</div><div className="text-gray-500">Precio</div></div>
                <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold text-purple-600">❌</div><div className="text-gray-500">Zafiro</div></div>
                <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold text-purple-600">Ilimitados</div><div className="text-gray-500">Destellos</div></div>
              </div>
              <p className="text-xs text-gray-500 italic mb-4">Para quién: perfiles fieles a la marca Braun, piel no sensible.</p>
              <a href="" target="_blank" rel="noopener noreferrer sponsored" className="block w-full text-center bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">Ver en Amazon →</a>
            </div>

            {/* #6 Análisis detallado - Braun Silk Expert Pro 5 */}
            <div className="lg:col-span-2 bg-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Análisis detallado del Braun Silk Expert Pro 5</h3>
              <p className="text-gray-700 mb-6">
                El Braun Silk Expert Pro 5 consolida su posición premium gracias a su tecnología SensoAdapt,
                que analiza continuamente el tono de piel para ajustar la intensidad luminosa. Pese a una
                calidad de fabricación impecable y resultados clínicamente probados, la ausencia de
                enfriamiento por zafiro y un posicionamiento de precio elevado lo sitúan por detrás del lumeor
                Luxe K en cuanto a relación calidad-precio.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-green-800 mb-4">✓ Puntos fuertes</h4>
                  <ul className="space-y-3">
                    {[
                      "Calidad Braun : Marca reconocida con fabricación alemana y acabado premium.",
                      "Tecnología SensoAdapt : Análisis automático del tono de piel con ajuste de la intensidad en tiempo real.",
                      "Seguridad reforzada : Sensor de piel integrado que evita destellos accidentales en zonas inadecuadas.",
                      "Destellos ilimitados : Vida útil sin límite en el número de destellos.",
                      "Atención al cliente : Servicio posventa de Braun reactivo con garantía del fabricante ampliada."
                    ].map((advantage, index) => {
                      const boldPart = advantage.split(' : ')[0];
                      const rest = advantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-green-600 mt-1 flex-shrink-0">✓</span>
                          <span className="text-gray-700"><strong>{boldPart}</strong> : {rest}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-red-800 mb-4">✗ Inconvenientes</h4>
                  <ul className="space-y-3">
                    {[
                      "Sin zafiro : Ningún enfriamiento activo — la depilación sigue siendo incómoda en pieles sensibles.",
                      "Precio elevado : 325€, más del doble del precio del Luxe K, para resultados similares.",
                      "Potencia baja : Solo 4 J/cm² frente a 12–14 J/cm² del Luxe K.",
                      "Resultados más lentos : Necesita 10–12 semanas frente a 3–4 semanas del Luxe K."
                    ].map((disadvantage, index) => {
                      const boldPart = disadvantage.split(' : ')[0];
                      const rest = disadvantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-red-600 mt-1 flex-shrink-0">✗</span>
                          <span className="text-gray-700"><strong>{boldPart}</strong> : {rest}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {/* #7 Philips Lumea 9000 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Philips Lumea 9000</h3>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-bold">#7</span>
              </div>
              <div className="text-center mb-4">
                <Image width={180} height={220} className="mx-auto rounded-lg object-contain" src="/images/philips_epilateur_3.webp" alt="Philips Lumea 9000 depiladora de luz pulsada IPL aplicación SmartSkin" />
              </div>
              <div className="flex items-center mb-3">
                {[1,2,3,4].map((s) => <span key={s} className="text-yellow-400">★</span>)}
                <span className="text-gray-300">★</span>
                <span className="text-gray-600 text-sm ml-2">4,0/5 · 1.892 opiniones</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                La referencia mundial en notoriedad de marca. Modo deslizante muy rápido, destellos
                ilimitados, aplicación SmartSkin. Pero a 580€ sin enfriamiento por zafiro y
                potencia no comunicada, difícil de justificar frente al Luxe K.
              </p>
              <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold text-gray-600">580€</div><div className="text-gray-500">Precio</div></div>
                <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold text-gray-600">❌</div><div className="text-gray-500">Zafiro</div></div>
                <div className="text-center bg-gray-50 rounded p-2"><div className="font-bold text-gray-600">Ilimitados</div><div className="text-gray-500">Destellos</div></div>
              </div>
              <p className="text-xs text-gray-500 italic mb-4">Para quién: presupuesto ilimitado, prioridad a la marca, piel no sensible.</p>
              <a href="" target="_blank" rel="noopener noreferrer sponsored" className="block w-full text-center bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">Ver en Amazon →</a>
            </div>

            {/* #7 Análisis detallado - Philips Lumea 9000 */}
            <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Análisis detallado del Philips Lumea 9000</h3>
              <p className="text-gray-700 mb-6">
                El Philips Lumea 9000 se apoya en la experiencia centenaria de Philips en tecnologías de
                cuidado personal. Con su aplicación móvil SmartSkin y su modo deslizante rápido, ofrece una
                experiencia de usuario completa. Sin embargo, su precio de 580€, la ausencia de enfriamiento
                por zafiro y una potencia no comunicada ya no justifican la inversión frente al lumeor Luxe K.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-green-800 mb-4">✓ Puntos fuertes</h4>
                  <ul className="space-y-3">
                    {[
                      "Marca reconocida : Philips, líder mundial con 130 años de experiencia en innovación tecnológica.",
                      "Diseño inalámbrico : Libertad de movimiento total sin la limitación de un cable.",
                      "Aplicación SmartSkin : Sensor de tono de piel con 5 niveles de intensidad automáticos.",
                      "Múltiples cabezales : 3 cabezales especializados (cuerpo, rostro, bikini) para un tratamiento óptimo.",
                      "Destellos ilimitados : Vida útil sin límite en el número de destellos.",
                      "Garantía ampliada : Atención al cliente de Philips reactiva con garantía del fabricante de 2 años."
                    ].map((advantage, index) => {
                      const boldPart = advantage.split(' : ')[0];
                      const rest = advantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-green-600 mt-1 flex-shrink-0">✓</span>
                          <span className="text-gray-700"><strong>{boldPart}</strong> : {rest}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-red-800 mb-4">✗ Inconvenientes</h4>
                  <ul className="space-y-3">
                    {[
                      "Precio excesivo : 580€, más de 4 veces el precio del Luxe K, para resultados comparables.",
                      "Sin zafiro : Ningún enfriamiento activo — la depilación sigue siendo incómoda en pieles sensibles.",
                      "Potencia no comunicada : Philips no revela los J/cm² — imposible comparar objetivamente.",
                      "Resultados lentos : Necesita 12–16 semanas frente a 3–4 semanas para ver los primeros resultados."
                    ].map((disadvantage, index) => {
                      const boldPart = disadvantage.split(' : ')[0];
                      const rest = disadvantage.split(' : ').slice(1).join(' : ');
                      return (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-red-600 mt-1 flex-shrink-0">✗</span>
                          <span className="text-gray-700"><strong>{boldPart}</strong> : {rest}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="tabla" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Tabla comparativa — depiladoras de luz pulsada IPL 2026</h2>
          <p className="text-gray-500 text-sm mb-6">Solo se recomiendan los dispositivos con enfriamiento por zafiro activo.</p>

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
                <tr
                  className="bg-green-50 border-2 border-green-500 cursor-pointer hover:bg-green-100 transition-colors"
                  onClick={() => { trackClick("lumeor_table_row"); window.open(lumeor_URL, "_blank", "noopener,noreferrer"); }}
                >
                  <td className="px-4 py-5">
                    <div className="font-bold text-gray-900">lumeor Luxe K</div>
                    <span className="inline-block mt-1 bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">Mejor relación calidad-precio</span>
                  </td>
                  <td className="px-4 py-5 text-center font-bold text-green-700 text-base">139€</td>
                  <td className="px-4 py-5 text-center text-xl">✅</td>
                  <td className="px-4 py-5 text-center text-gray-700 hidden sm:table-cell font-medium">12–14 J/cm²</td>
                  <td className="px-4 py-5 text-center text-gray-700 hidden md:table-cell font-medium">8–10 min</td>
                  <td className="px-4 py-5 text-center text-gray-700 hidden sm:table-cell font-medium">999.999</td>
                  <td className="px-4 py-5 text-center font-bold text-green-700 text-base">9/10 →</td>
                </tr>
                <tr className="bg-white border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 font-medium text-gray-900">Ulike Air 3 / Air 10</td>
                  <td className="px-4 py-4 text-center text-gray-700">349€</td>
                  <td className="px-4 py-4 text-center text-xl">✅</td>
                  <td className="px-4 py-4 text-center text-gray-500 hidden sm:table-cell">~20 J/cm²</td>
                  <td className="px-4 py-4 text-center text-gray-500 hidden md:table-cell">15 min</td>
                  <td className="px-4 py-4 text-center text-gray-500 hidden sm:table-cell">N/D</td>
                  <td className="px-4 py-4 text-center font-bold text-gray-700">6/10</td>
                </tr>
                <tr className="bg-white border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 font-medium text-gray-900">Bodysiam Elite</td>
                  <td className="px-4 py-4 text-center text-gray-700">179€</td>
                  <td className="px-4 py-4 text-center text-xl">❌</td>
                  <td className="px-4 py-4 text-center text-gray-500 hidden sm:table-cell">N/D</td>
                  <td className="px-4 py-4 text-center text-gray-500 hidden md:table-cell">~15 min</td>
                  <td className="px-4 py-4 text-center text-gray-500 hidden sm:table-cell">N/D</td>
                  <td className="px-4 py-4 text-center font-bold text-gray-700">5,5/10</td>
                </tr>
                <tr className="bg-white border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 font-medium text-gray-900">OhMySkin</td>
                  <td className="px-4 py-4 text-center text-gray-700">199€</td>
                  <td className="px-4 py-4 text-center text-xl">❌</td>
                  <td className="px-4 py-4 text-center text-gray-500 hidden sm:table-cell">N/D</td>
                  <td className="px-4 py-4 text-center text-gray-500 hidden md:table-cell">~12 min</td>
                  <td className="px-4 py-4 text-center text-gray-500 hidden sm:table-cell">N/D</td>
                  <td className="px-4 py-4 text-center font-bold text-gray-700">5/10</td>
                </tr>
                <tr className="bg-white border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 font-medium text-gray-900">no!no! Pro IPL</td>
                  <td className="px-4 py-4 text-center text-gray-700">169€</td>
                  <td className="px-4 py-4 text-center text-xl">❌</td>
                  <td className="px-4 py-4 text-center text-gray-500 hidden sm:table-cell">N/D</td>
                  <td className="px-4 py-4 text-center text-gray-500 hidden md:table-cell">25 min</td>
                  <td className="px-4 py-4 text-center text-gray-500 hidden sm:table-cell">N/D</td>
                  <td className="px-4 py-4 text-center font-bold text-gray-700">4,5/10</td>
                </tr>
                <tr className="bg-white border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 font-medium text-gray-900">Braun Silk Expert Pro 5</td>
                  <td className="px-4 py-4 text-center text-gray-700">325€</td>
                  <td className="px-4 py-4 text-center text-xl">❌</td>
                  <td className="px-4 py-4 text-center text-gray-500 hidden sm:table-cell">4 J/cm²</td>
                  <td className="px-4 py-4 text-center text-gray-500 hidden md:table-cell">9 min</td>
                  <td className="px-4 py-4 text-center text-gray-500 hidden sm:table-cell">Ilimitados</td>
                  <td className="px-4 py-4 text-center font-bold text-gray-700">6,5/10</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 font-medium text-gray-900">Philips Lumea 9000</td>
                  <td className="px-4 py-4 text-center text-gray-700">580€</td>
                  <td className="px-4 py-4 text-center text-xl">❌</td>
                  <td className="px-4 py-4 text-center text-gray-500 hidden sm:table-cell">N/D</td>
                  <td className="px-4 py-4 text-center text-gray-500 hidden md:table-cell">10 min</td>
                  <td className="px-4 py-4 text-center text-gray-500 hidden sm:table-cell">Ilimitados</td>
                  <td className="px-4 py-4 text-center font-bold text-gray-700">6/10</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">Datos verificados en abril de 2026 · Precios orientativos observados</p>
        </section>

        <section id="tecnologia" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Por qué el enfriamiento por zafiro lo cambia todo</h2>
          <div className="bg-blue-50 rounded-2xl p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Cuando una depiladora de luz pulsada IPL emite un destello, actúa sobre la raíz
              del vello apuntando a la melanina. Este proceso es eficaz — pero también genera
              calor percibido en la superficie de la piel, responsable de la sensación de
              quemazón que muchas temen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              El enfriamiento por zafiro funciona de forma diferente. Una ventana de cristal de
              zafiro se mantiene a aproximadamente 5°C y permanece en contacto permanente con la
              piel durante el destello. Resultado: las molestias se reducen de forma significativa,
              el enrojecimiento posterior a la sesión es menor, y las pieles sensibles toleran la
              IPL sin inconfort.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Esta tecnología estuvo reservada durante mucho tiempo a los dispositivos profesionales
              de centros de estética. Ulike la democratizó a ~349€ (Air 10). El lumeor Luxe K la integra
              ahora a 139€ — es decir, dos veces más barata por una tecnología idéntica.
            </p>
            <p className="text-gray-700 leading-relaxed">
              No es un accesorio prescindible: sin molestias, se mantiene el protocolo. Y es el
              protocolo — 8 a 12 sesiones semanales — el que marca la diferencia real entre
              un resultado duradero y un dispositivo que acaba en un cajón.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: "~5°C", label: "Temperatura de la ventana de zafiro" },
                { value: "÷ 2", label: "Molestias reducidas" },
                { value: "3–4", label: "Semanas para los primeros resultados" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="veredicto" className="mb-16">
          <div className="bg-gray-900 rounded-2xl p-8 sm:p-10 text-white">
            <h2 className="text-3xl font-bold mb-6">Nuestro veredicto: el lumeor Luxe K se impone</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Tras probar estos siete dispositivos, la conclusión es clara. El no!no! Pro IPL
              y el Braun Silk Expert Pro 5 — sin enfriamiento por zafiro — ofrecen resultados
              correctos, pero imponen una experiencia menos cómoda por un precio bastante más elevado.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              El Ulike Air 3 / Air 10 integra la tecnología de zafiro — pero a 349€ con resultados
              decepcionantes y valoraciones de 3,8/5, pierde todo su atractivo frente al lumeor Luxe K: mismo
              enfriamiento por zafiro, potencia de 12–14 J/cm², y 999.999 destellos para más de 10
              años de uso por solo 139€.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Los resultados llegan a partir de 3 a 4 semanas. Envío gratuito, servicio posventa desde Francia,
              garantía 2 años. Derecho de desistimiento de 14 días aplicable en España. A 139€, es la mejor
              inversión de belleza del año para quien busca una reducción del vello con IPL duradera en casa.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { value: "139€", label: "Precio único" },
                { value: "3–4 sem", label: "Primeros resultados" },
                { value: "999.999", label: "Destellos incluidos" },
                { value: "10+ años", label: "Vida útil" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
            <a
              href={lumeor_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-5 rounded-2xl font-bold text-xl shadow-xl"
              style={{ backgroundColor: "#FBBF24", color: "#000000" }}
              onClick={() => trackClick("lumeor_verdict_cta")}
            >
              Ver el lumeor Luxe K — 139€
            </a>
            <p className="text-center text-gray-500 text-xs mt-3">Envío gratuito · Garantía 2 años · Derecho de desistimiento 14 días</p>
          </div>
        </section>

        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "¿Qué es la tecnología de enfriamiento por zafiro en una depiladora de luz pulsada IPL?",
                a: "El enfriamiento por zafiro es una tecnología que enfría activamente la piel durante cada destello de luz pulsada. La ventana de cristal de zafiro permanece a aproximadamente 5°C en contacto con la piel, reduciendo de forma significativa las molestias. Las pieles sensibles toleran la IPL sin incomodidad, lo que favorece la regularidad del protocolo.",
              },
              {
                q: "¿Qué diferencia hay entre IPL y láser para la depilación?",
                a: "La IPL (Luz Pulsada Intensa) emite un amplio espectro de longitudes de onda para actuar sobre la melanina del vello, mientras que el láser emite una longitud de onda única muy concentrada. La IPL cubre una mayor superficie en menos tiempo, ideal para uso doméstico. El láser es más preciso pero está reservado a profesionales a 150–300€ por sesión.",
              },
              {
                q: "¿En cuántas semanas se ven resultados con una depiladora de luz pulsada IPL de zafiro?",
                a: "Con el lumeor Luxe K a 12–14 J/cm², los primeros resultados visibles aparecen a partir de 3 a 4 semanas con sesiones semanales. Un resultado duradero y completo requiere generalmente entre 8 y 12 sesiones.",
              },
              {
                q: "¿El lumeor Luxe K funciona en piel oscura?",
                a: "El lumeor Luxe K está adaptado a los fototipos I a IV (piel clara a mate). Como todos los dispositivos IPL, requiere un contraste entre el color del vello y el de la piel. No se recomienda en pieles muy oscuras (fototipos V–VI) ni sobre vello muy claro.",
              },
              {
                q: "¿Hay garantía en el lumeor Luxe K?",
                a: "Sí. El lumeor Luxe K se vende con una garantía del fabricante de 2 años, conforme a la legislación europea. El servicio posventa está gestionado desde Francia, con envío gratuito incluido. En España se aplica el derecho de desistimiento de 14 días.",
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

        {/* Sección CTA final */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 -mx-2 sm:-mx-6 lg:-mx-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nuestra recomendación final
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                Tras pruebas exhaustivas, el <strong>lumeor LUXE K</strong> sigue siendo nuestra elección #1 indiscutible
                para una depilación en casa eficaz, segura y sin molestias.
              </p>

              <div className="bg-green-50 rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">139€</div>
                    <div className="text-sm text-gray-600">Precio excepcional<br/>(-40% actualmente)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">4,8/5</div>
                    <div className="text-sm text-gray-600">Valoración de usuarias<br/>(1.000+ opiniones verificadas)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">3–4 sem</div>
                    <div className="text-sm text-gray-600">Primeros resultados<br/>(desde 3–4 semanas)</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-600 text-sm mb-4">
                  ✅ Pantalla LCD inteligente • ✅ 990K destellos • ✅ Tecnología clínica • ✅ Envío gratuito
                </p>
              </div>

              <a
                href={lumeor_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => trackClick("lumeor_bottom_page")}
              >
                Ver el LUXE K en el sitio oficial →
              </a>

              <p className="text-xs text-gray-500 mt-4">
                🔒 Pago seguro • 📦 Envío en 24h • 🎯 Garantía de satisfacción
              </p>
            </div>
          </div>
        </section>

        <div className="text-center text-sm text-gray-400 pb-4">
          <Link href="/" className="hover:text-green-600">Inicio</Link>
          <span className="mx-2">›</span>
          <span>Mejor depiladora de luz pulsada IPL con zafiro 2026</span>
        </div>
      </article>
    </main>
  );
}
