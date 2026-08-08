import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-32">
          <svg className="w-full h-full" viewBox="0 0 1905 295" fill="none" preserveAspectRatio="none">
            <path d="M0 295L1905 0V295H0Z" fill="#f8f9fa" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-gray-900">Guías de compra</span>{" "}
                <span className="text-[#2ba283] font-bold">2026</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Tus comparativas de belleza y bienestar con tests independientes, opiniones auténticas y recomendaciones de expertas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/comparativa-depiladoras-ipl-luz-pulsada-2026"
                  className="bg-[#2ba283] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#238a6b] transition-colors"
                >
                  Ver depiladoras de luz pulsada
                </Link>
                <Link
                  href="/comparativa-hidropulsadores-dentales-2026"
                  className="border border-[#2ba283] text-[#2ba283] px-8 py-3 rounded-lg font-semibold hover:bg-[#2ba283] hover:text-white transition-colors"
                >
                  Descubrir hidropulsadores dentales
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/homepageBGImage.jpg"
                alt="Experta en belleza y bienestar"
                width={400}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <Image width={80} height={80} className="rounded-full mr-4" src="/images/sarahMartin.webp" alt="Sarah Martin" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Sarah Martin</h3>
                    <p className="text-[#2ba283] font-medium">Experta en Dermatología</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Con 15 años de experiencia en dermatología, analizo y pruebo personalmente cada producto. Mis recomendaciones se basan únicamente en la eficacia y la calidad.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center lg:justify-start">
                    <div className="w-2 h-2 bg-[#2ba283] rounded-full mr-2" />
                    <span>Tests independientes</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <div className="w-2 h-2 bg-[#2ba283] rounded-full mr-2" />
                    <span>Sin patrocinios remunerados</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <div className="w-2 h-2 bg-[#2ba283] rounded-full mr-2" />
                    <span>Opiniones 100% auténticas</span>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <div className="bg-[#2ba283]/5 rounded-lg p-6">
                  <div className="text-3xl font-bold text-[#2ba283] mb-2">1.500+</div>
                  <p className="text-gray-600 mb-4">Productos probados</p>
                  <div className="text-sm text-gray-500">Actualización: enero 2026</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mt-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <Image width={80} height={80} className="rounded-full mr-4" src="/images/EmmanuelleHarault.jpg" alt="Emmanuelle Harault" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Emmanuelle Harault</h3>
                    <p className="text-blue-600 font-medium">Experta en Higiene Bucodental</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Especializada en higiene dental desde hace 8 años, evalúo cada hidropulsador según criterios clínicos estrictos. Mis recomendaciones se basan en la eficacia probada y la seguridad de uso.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center lg:justify-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                    <span>Tests clínicos</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                    <span>Validación odontológica</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                    <span>Recomendaciones seguras</span>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <div className="bg-blue-600/5 rounded-lg p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <p className="text-gray-600 mb-4">Hidropulsadores probados</p>
                  <div className="text-sm text-gray-500">Especialidad: Higiene bucodental</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nuestras guías de referencia
              <span className="block w-16 h-1 bg-[#2ba283] mx-auto mt-4 rounded" />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Análisis en profundidad basados en meses de tests para ayudarte a tomar la mejor decisión
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Depiladoras IPL 2026 */}
            <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-yellow-400">
              <div className="relative h-64 overflow-hidden">
                <Image fill className="object-cover group-hover:scale-110 transition-transform duration-500" src="/images/comparatif_epilateurs_header2026.jpg" alt="Comparativa depiladoras de luz pulsada IPL 2026" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-2 rounded-full text-sm font-bold shadow-lg">NUEVO 2026</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Depiladoras de Luz Pulsada IPL 2026</h3>
                  <div className="flex items-center text-white/90 text-sm">
                    <span className="bg-white/20 px-2 py-1 rounded mr-2">Top 5</span>
                    <span className="bg-white/20 px-2 py-1 rounded mr-2">Actualizado</span>
                    <span className="bg-white/20 px-2 py-1 rounded">2026</span>
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col min-h-[400px]">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">{"★★★★★".split("").map((s, i) => <span key={i} className="text-lg">{s}</span>)}</div>
                  <span className="text-sm text-gray-500">Guía 2026</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">Nueva edición 2026 con las últimas innovaciones en depilación de luz pulsada IPL. Reducción duradera del vello corporal en casa desde 89€.</p>
                <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="text-center"><div className="text-[#2ba283] font-semibold">2026</div><div className="text-gray-500">Edición</div></div>
                  <div className="text-center"><div className="text-[#2ba283] font-semibold">Desde 89€</div><div className="text-gray-500">Precio</div></div>
                  <div className="text-center"><div className="text-[#2ba283] font-semibold">✓</div><div className="text-gray-500">Disponible</div></div>
                </div>
                <Link href="/comparativa-depiladoras-ipl-luz-pulsada-2026" className="block w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-center py-4 rounded-xl font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:-translate-y-1 mt-auto">
                  Ver la guía 2026 →
                </Link>
              </div>
            </article>

            {/* Hidropulsadores Dentales 2026 */}
            <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-cyan-400">
              <div className="relative h-64 overflow-hidden">
                <Image fill className="object-cover group-hover:scale-110 transition-transform duration-500" src="/images/JetDentaireComparison-main.jpg" alt="Comparativa hidropulsadores dentales 2026" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg">NUEVO 2026</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Hidropulsadores Dentales 2026</h3>
                  <div className="flex items-center text-white/90 text-sm">
                    <span className="bg-white/20 px-2 py-1 rounded mr-2">Top 5</span>
                    <span className="bg-white/20 px-2 py-1 rounded mr-2">Actualizado</span>
                    <span className="bg-white/20 px-2 py-1 rounded">2026</span>
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col min-h-[400px]">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">{"★★★★★".split("").map((s, i) => <span key={i} className="text-lg">{s}</span>)}</div>
                  <span className="text-sm text-gray-500">Guía 2026</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">Nueva edición 2026 con los últimos hidropulsadores dentales. Higiene bucodental óptima en casa desde 49€ con el LyraX Pro.</p>
                <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="text-center"><div className="text-blue-600 font-semibold">2026</div><div className="text-gray-500">Edición</div></div>
                  <div className="text-center"><div className="text-blue-600 font-semibold">Desde 49€</div><div className="text-gray-500">Precio</div></div>
                  <div className="text-center"><div className="text-blue-600 font-semibold">✓</div><div className="text-gray-500">Disponible</div></div>
                </div>
                <Link href="/comparativa-hidropulsadores-dentales-2026" className="block w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-center py-4 rounded-xl font-bold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 mt-auto">
                  Ver la guía 2026 →
                </Link>
              </div>
            </article>

            {/* Mascarillas LED 2026 */}
            <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-purple-400">
              <div className="relative h-64 overflow-hidden">
                <Image fill className="object-cover group-hover:scale-110 transition-transform duration-500" src="/images/ledMask.png" alt="Comparativa mascarillas LED fototerapia 2026" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-400 to-fuchsia-500 text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg">NUEVO 2026</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Mascarillas LED 2026</h3>
                  <div className="flex items-center text-white/90 text-sm">
                    <span className="bg-white/20 px-2 py-1 rounded mr-2">Próximamente</span>
                    <span className="bg-white/20 px-2 py-1 rounded mr-2">Actualizado</span>
                    <span className="bg-white/20 px-2 py-1 rounded">2026</span>
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col min-h-[400px]">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">{"★★★★★".split("").map((s, i) => <span key={i} className="text-lg">{s}</span>)}</div>
                  <span className="text-sm text-gray-500">Guía 2026</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">Nueva edición 2026 de las mejores mascarillas LED de fototerapia. Cuidado antiedad y tratamiento del acné probados científicamente.</p>
                <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="text-center"><div className="text-purple-600 font-semibold">2026</div><div className="text-gray-500">Edición</div></div>
                  <div className="text-center"><div className="text-purple-600 font-semibold">Nuevo</div><div className="text-gray-500">Contenido</div></div>
                  <div className="text-center"><div className="text-purple-600 font-semibold">✓</div><div className="text-gray-500">Disponible</div></div>
                </div>
                <Link href="/mascarilla-led-facial-2026" className="block w-full bg-gradient-to-r from-purple-400 to-fuchsia-500 text-white text-center py-4 rounded-xl font-bold hover:from-purple-500 hover:to-fuchsia-600 transition-all duration-300 transform hover:-translate-y-1 mt-auto">
                  Ver la guía 2026 →
                </Link>
              </div>
            </article>

            {/* Depiladora IPL Zafiro */}
            <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-green-400">
              <div className="relative h-64 overflow-hidden">
                <Image fill className="object-cover group-hover:scale-110 transition-transform duration-500" src="/images/comparatif_epilateurs_header2026.jpg" alt="Comparativa depiladoras de luz pulsada IPL zafiro 2026" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg">NUEVO 2026</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Depiladoras de Luz Pulsada IPL Zafiro 2026</h3>
                  <div className="flex items-center text-white/90 text-sm">
                    <span className="bg-white/20 px-2 py-1 rounded mr-2">Top 5</span>
                    <span className="bg-white/20 px-2 py-1 rounded mr-2">Actualizado</span>
                    <span className="bg-white/20 px-2 py-1 rounded">2026</span>
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col min-h-[400px]">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">{"★★★★★".split("").map((s, i) => <span key={i} className="text-lg">{s}</span>)}</div>
                  <span className="text-sm text-gray-500">Guía 2026</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">Comparativa de depiladoras de luz pulsada IPL con tecnología de enfriamiento por zafiro — las molestias reducidas a la mitad. ¿Qué aparato elegir para la mejor relación calidad/precio?</p>
                <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="text-center"><div className="text-green-600 font-semibold">Zafiro</div><div className="text-gray-500">Tecnología</div></div>
                  <div className="text-center"><div className="text-green-600 font-semibold">139€</div><div className="text-gray-500">Desde</div></div>
                  <div className="text-center"><div className="text-green-600 font-semibold">✓</div><div className="text-gray-500">Disponible</div></div>
                </div>
                <Link href="/depiladora-ipl-zafiro-2026" className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white text-center py-4 rounded-xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-1 mt-auto">
                  Ver la guía zafiro →
                </Link>
              </div>
            </article>

            {/* Depiladora IPL Hombre */}
            <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-blue-500">
              <div className="relative h-64 overflow-hidden">
                <Image fill className="object-cover group-hover:scale-110 transition-transform duration-500" src="/images/comparatif_epilateurs_men_header2026.jpg" alt="Comparativa depiladoras de luz pulsada IPL hombre 2026" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg">NUEVO 2026</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Depiladora de Luz Pulsada IPL Hombre 2026</h3>
                  <div className="flex items-center text-white/90 text-sm">
                    <span className="bg-white/20 px-2 py-1 rounded mr-2">Top 5</span>
                    <span className="bg-white/20 px-2 py-1 rounded mr-2">Actualizado</span>
                    <span className="bg-white/20 px-2 py-1 rounded">2026</span>
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col min-h-[400px]">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">{"★★★★★".split("").map((s, i) => <span key={i} className="text-lg">{s}</span>)}</div>
                  <span className="text-sm text-gray-500">Guía 2026</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">Pecho, espalda, piernas, contorno de barba — comparativa de las mejores depiladoras de luz pulsada IPL para hombre. Dos recomendaciones según tu presupuesto.</p>
                <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="text-center"><div className="text-blue-600 font-semibold">Hombre</div><div className="text-gray-500">Específico</div></div>
                  <div className="text-center"><div className="text-blue-600 font-semibold">89€</div><div className="text-gray-500">Desde</div></div>
                  <div className="text-center"><div className="text-blue-600 font-semibold">✓</div><div className="text-gray-500">Disponible</div></div>
                </div>
                <Link href="/depiladora-ipl-hombre-2026" className="block w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 mt-auto">
                  Ver la guía hombre →
                </Link>
              </div>
            </article>

            {/* Depiladoras IPL 2025 */}
            <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <Image fill className="object-cover group-hover:scale-110 transition-transform duration-500" src="/images/comparatif_epilateurs_header.jpg" alt="Comparativa depiladoras de luz pulsada IPL 2025" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#2ba283] text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg">Guía 2025</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Depiladoras de Luz Pulsada IPL 2025</h3>
                  <div className="flex items-center text-white/90 text-sm">
                    <span className="bg-white/20 px-2 py-1 rounded mr-2">27 probadas</span>
                    <span className="bg-white/20 px-2 py-1 rounded mr-2">6 meses</span>
                    <span className="bg-white/20 px-2 py-1 rounded">Completo</span>
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col min-h-[400px]">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">{"★★★★★".split("").map((s, i) => <span key={i} className="text-lg">{s}</span>)}</div>
                  <span className="text-sm text-gray-500">4,8/5 (1.247 opiniones)</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">Descubre nuestra selección de las mejores depiladoras de luz pulsada IPL. Tests comparativos rigurosos y resultados probados para reducción duradera del vello en casa.</p>
                <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="text-center"><div className="text-[#2ba283] font-semibold">Desde 89€</div><div className="text-gray-500">Precio mín.</div></div>
                  <div className="text-center"><div className="text-[#2ba283] font-semibold">3 semanas</div><div className="text-gray-500">Primeros resultados</div></div>
                  <div className="text-center"><div className="text-[#2ba283] font-semibold">100%</div><div className="text-gray-500">Probadas</div></div>
                </div>
                <Link href="/comparativa-depiladoras-ipl-luz-pulsada-2025" className="block w-full bg-[#2ba283] text-white text-center py-4 rounded-xl font-semibold hover:bg-[#238a6b] transition-all duration-300 transform hover:-translate-y-1 mt-auto">
                  Ver la guía completa →
                </Link>
              </div>
            </article>

            {/* Hidropulsadores Dentales 2025 */}
            <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <Image fill className="object-cover group-hover:scale-110 transition-transform duration-500" src="/images/comparateur_epilateur_auteure.jpg" alt="Comparativa hidropulsadores dentales 2025" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg">Guía 2025</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Hidropulsadores Dentales 2025</h3>
                  <div className="flex items-center text-white/90 text-sm">
                    <span className="bg-white/20 px-2 py-1 rounded mr-2">15 probados</span>
                    <span className="bg-white/20 px-2 py-1 rounded mr-2">6 meses</span>
                    <span className="bg-white/20 px-2 py-1 rounded">Completo</span>
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col min-h-[400px]">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">{"★★★★★".split("").map((s, i) => <span key={i} className="text-lg">{s}</span>)}</div>
                  <span className="text-sm text-gray-500">4,7/5 (892 opiniones)</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">Guía completa de los mejores hidropulsadores dentales. Eficacia clínicamente probada y recomendaciones de expertas en higiene bucodental.</p>
                <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="text-center"><div className="text-blue-600 font-semibold">Desde 45€</div><div className="text-gray-500">Precio mín.</div></div>
                  <div className="text-center"><div className="text-blue-600 font-semibold">Inmediato</div><div className="text-gray-500">Resultados</div></div>
                  <div className="text-center"><div className="text-blue-600 font-semibold">✓</div><div className="text-gray-500">Dentistas</div></div>
                </div>
                <Link href="/comparativa-hidropulsadores-dentales-2025" className="block w-full bg-blue-600 text-white text-center py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 mt-auto">
                  Ver la guía completa →
                </Link>
              </div>
            </article>

            {/* Mascarillas LED 2025 */}
            <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <Image fill className="object-cover group-hover:scale-110 transition-transform duration-500" src="/images/ledMask.png" alt="Comparativa mascarillas LED fototerapia 2025" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg">Guía 2025</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Mascarillas LED 2025</h3>
                  <div className="flex items-center text-white/90 text-sm">
                    <span className="bg-white/20 px-2 py-1 rounded mr-2">12 probadas</span>
                    <span className="bg-white/20 px-2 py-1 rounded mr-2">4 meses</span>
                    <span className="bg-white/20 px-2 py-1 rounded">Completo</span>
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col min-h-[400px]">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">{"★★★★★".split("").map((s, i) => <span key={i} className="text-lg">{s}</span>)}</div>
                  <span className="text-sm text-gray-500">4,6/5 (634 opiniones)</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">Descubre las mejores mascarillas LED de fototerapia. Antiedad, anti-acné y regeneración celular probados científicamente.</p>
                <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="text-center"><div className="text-purple-600 font-semibold">Desde 149€</div><div className="text-gray-500">Precio mín.</div></div>
                  <div className="text-center"><div className="text-purple-600 font-semibold">2-4 sem</div><div className="text-gray-500">Primeros efectos</div></div>
                  <div className="text-center"><div className="text-purple-600 font-semibold">FDA</div><div className="text-gray-500">Aprobado</div></div>
                </div>
                <a href="#" className="block w-full bg-purple-600 text-white text-center py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-1 mt-auto">
                  Ver la guía completa →
                </a>
              </div>
            </article>

            {/* Maquinillas Hombre 2025 */}
            <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <Image fill className="object-cover group-hover:scale-110 transition-transform duration-500" src="/images/tondeusesHomme.avif" alt="Comparativa maquinillas pelo barba hombre 2025" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-600 text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg">Guía 2025</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Maquinillas Hombre 2025</h3>
                  <div className="flex items-center text-white/90 text-sm">
                    <span className="bg-white/20 px-2 py-1 rounded mr-2">20 probadas</span>
                    <span className="bg-white/20 px-2 py-1 rounded mr-2">5 meses</span>
                    <span className="bg-white/20 px-2 py-1 rounded">Completo</span>
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col min-h-[400px]">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">{"★★★★★".split("").map((s, i) => <span key={i} className="text-lg">{s}</span>)}</div>
                  <span className="text-sm text-gray-500">4,7/5 (1.156 opiniones)</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">Guía completa de las mejores maquinillas de pelo y barba para hombre. Tests de precisión, autonomía y versatilidad para todos los presupuestos.</p>
                <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="text-center"><div className="text-orange-600 font-semibold">Desde 29€</div><div className="text-gray-500">Precio mín.</div></div>
                  <div className="text-center"><div className="text-orange-600 font-semibold">90 min</div><div className="text-gray-500">Autonomía máx.</div></div>
                  <div className="text-center"><div className="text-orange-600 font-semibold">Lavable</div><div className="text-gray-500">Sumergible</div></div>
                </div>
                <a href="#" className="block w-full bg-orange-600 text-white text-center py-4 rounded-xl font-semibold hover:bg-orange-700 transition-all duration-300 transform hover:-translate-y-1 mt-auto">
                  Ver la guía completa →
                </a>
              </div>
            </article>

            {/* Cuidado Capilar 2025 */}
            <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <Image fill className="object-cover group-hover:scale-110 transition-transform duration-500" src="/images/soinsCheveux.avif" alt="Comparativa aparatos cuidado capilar peluquería" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-pink-600 text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg">Guía 2025</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Cuidado Capilar 2025</h3>
                  <div className="flex items-center text-white/90 text-sm">
                    <span className="bg-white/20 px-2 py-1 rounded mr-2">18 probados</span>
                    <span className="bg-white/20 px-2 py-1 rounded mr-2">6 meses</span>
                    <span className="bg-white/20 px-2 py-1 rounded">Completo</span>
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col min-h-[400px]">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">{"★★★★★".split("").map((s, i) => <span key={i} className="text-lg">{s}</span>)}</div>
                  <span className="text-sm text-gray-500">4,5/5 (823 opiniones)</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">Selección de los mejores aparatos de peluquería y cuidado capilar. Secadores, planchas, rizadores y tratamientos profesionales.</p>
                <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="text-center"><div className="text-pink-600 font-semibold">Desde 79€</div><div className="text-gray-500">Precio mín.</div></div>
                  <div className="text-center"><div className="text-pink-600 font-semibold">Inmediato</div><div className="text-gray-500">Resultados</div></div>
                  <div className="text-center"><div className="text-pink-600 font-semibold">Cerámica</div><div className="text-gray-500">Tecnología</div></div>
                </div>
                <a href="#" className="block w-full bg-pink-600 text-white text-center py-4 rounded-xl font-semibold hover:bg-pink-700 transition-all duration-300 transform hover:-translate-y-1 mt-auto">
                  Ver la guía completa →
                </a>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestro método de prueba
              <span className="block w-16 h-1 bg-[#2ba283] mx-auto mt-4 rounded" />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un enfoque científico para recomendaciones fiables
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#2ba283] to-[#238a6b] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white text-3xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Tests rigurosos</h3>
              <p className="text-gray-600 leading-relaxed">6 meses de uso intensivo, mediciones objetivas y protocolos científicos validados por expertas independientes.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Precios analizados</h3>
              <p className="text-gray-600 leading-relaxed">Comparación exhaustiva de precios, análisis de promociones y evaluación de la relación calidad-precio óptima.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white text-3xl">✓</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Opiniones auténticas</h3>
              <p className="text-gray-600 leading-relaxed">Valoraciones de usuarias verificadas, experiencia real documentada y transparencia total en nuestras recomendaciones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">ExpertaBelleza</h3>
              <p className="text-gray-400 leading-relaxed">Tu referencia en guías de compra de belleza y bienestar. Tests independientes y recomendaciones de expertas.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Nuestras guías</h4>
              <ul className="space-y-2">
                <li><Link href="/comparativa-depiladoras-ipl-luz-pulsada-2025" className="hover:text-[#2ba283] transition-colors">Depiladoras de Luz Pulsada 2025</Link></li>
                <li><Link href="/comparativa-depiladoras-ipl-luz-pulsada-2026" className="hover:text-yellow-400 transition-colors">Depiladoras de Luz Pulsada 2026</Link></li>
                <li><Link href="/comparativa-hidropulsadores-dentales-2025" className="hover:text-[#2ba283] transition-colors">Hidropulsadores dentales 2025</Link></li>
                <li><Link href="/comparativa-hidropulsadores-dentales-2026" className="hover:text-cyan-400 transition-colors">Hidropulsadores dentales 2026</Link></li>
                <li><Link href="/depiladora-ipl-zafiro-2026" className="hover:text-green-400 transition-colors">Depiladoras de Luz Pulsada Zafiro 2026</Link></li>
                <li><Link href="/depiladora-ipl-hombre-2026" className="hover:text-blue-400 transition-colors">Depiladora de Luz Pulsada Hombre 2026</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Sobre nosotras</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#2ba283] transition-colors">Nuestro equipo</a></li>
                <li><a href="#" className="hover:text-[#2ba283] transition-colors">Metodología</a></li>
                <li><a href="#" className="hover:text-[#2ba283] transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#2ba283] transition-colors">
                  <span className="text-lg">📧</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#2ba283] transition-colors">
                  <span className="text-lg">📱</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2026 expertabelleza.es - Todos los derechos reservados</p>
              <div className="text-gray-400 text-sm">Actualización: enero 2026</div>
            </div>
            <div className="mt-6 text-xs text-gray-500 leading-relaxed">
              <p>*Aviso legal: Estas declaraciones no han sido evaluadas por las autoridades sanitarias. Estos productos no están destinados a tratar, curar o prevenir ninguna enfermedad. Los resultados pueden variar y no están garantizados. Consulta siempre a un profesional de la salud cualificado para cualquier cuestión relacionada con tu estado de salud.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
