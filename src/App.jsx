import React from 'react'

const Navbar = () => (
  <nav className="fixed w-full z-50 glass-card border-b border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-chart-pie text-brand-primary text-2xl"></i>
          <span className="font-bold text-2xl tracking-tight">Bigdatia</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
          <a href="#desafio" className="hover:text-brand-primary transition-colors">El Desafío</a>
          <a href="#nosotros" className="hover:text-brand-primary transition-colors">Enfoque</a>
          <a href="#kits" className="hover:text-brand-primary transition-colors">Kits de Entrada</a>
          <a href="#ia" className="hover:text-brand-primary transition-colors">Diagnóstico IA</a>
        </div>
        <div>
          <a href="#contacto" className="bg-brand-primary hover:bg-cyan-400 text-brand-dark font-semibold px-6 py-2.5 rounded-full transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]">
            Agendar Llamada
          </a>
        </div>
      </div>
    </div>
  </nav>
)

const Hero = () => (
  <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 relative">
    <div className="max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-8 text-sm font-medium text-brand-primary">
        <i className="fa-solid fa-robot"></i> Consultoría + Inteligencia Artificial
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
        Inteligencia para hacer <br className="hidden md:block" />
        <span className="gradient-text">crecer tu empresa</span>
      </h1>
      <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
        Kits estratégicos de presencia digital diseñados no solo para que te vean, sino para capturar datos, entender a tu cliente y preparar tu negocio para el siguiente nivel.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a href="#kits" className="w-full sm:w-auto px-8 py-4 bg-white text-brand-dark font-bold rounded-full hover:bg-slate-200 transition-colors">
          Ver Kits de Presencia
        </a>
        <a href="#nosotros" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-600 text-white font-medium rounded-full hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
          <i className="fa-regular fa-circle-play"></i> Cómo funciona
        </a>
      </div>
    </div>
  </section>
)

const Challenges = () => (
  <section id="desafio" className="py-20 bg-brand-dark/50 border-y border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">El desafío de crecer en digital</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">La mayoría de negocios quiere escalar, pero se estanca enfrentando las mismas barreras estructurales una y otra vez.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
          <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 text-brand-primary text-2xl">
            <i className="fa-solid fa-globe"></i>
          </div>
          <h3 className="text-xl font-bold mb-3">Invisibilidad Digital</h3>
          <p className="text-slate-400 text-sm leading-relaxed">No tienen web o es obsoleta. Los clientes con intención de compra los buscan en Google y simplemente no encuentran nada que genere confianza.</p>
        </div>
        <div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
          <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 text-brand-secondary text-2xl">
            <i className="fa-solid fa-palette"></i>
          </div>
          <h3 className="text-xl font-bold mb-3">Identidad Inconsistente</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Logo desactualizado, sin manual de marca ni directrices. La comunicación visual parece amateur, lo que no genera autoridad ni recordación en el mercado.</p>
        </div>
        <div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
          <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 text-brand-accent text-2xl">
            <i className="fa-solid fa-chart-line"></i>
          </div>
          <h3 className="text-xl font-bold mb-3">Esfuerzos sin Datos</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Publican en redes sociales por cumplir, sin norte ni planificación. No miden qué formatos funcionan, qué trae ventas, ni saben cómo optimizar la inversión.</p>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-xl font-medium text-brand-primary bg-brand-primary/10 inline-block px-6 py-3 rounded-full border border-brand-primary/20">
          Bigdatia resuelve los tres pilares: rápido, medible y a un precio accesible.
        </p>
      </div>
    </div>
  </section>
)

const Approach = () => (
  <section id="nosotros" className="py-24 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">No somos una agencia tradicional. <br /><span className="gradient-text">Somos tu brazo analítico.</span></h2>
          <p className="text-slate-400 mb-8 text-lg leading-relaxed">
            Somos una consultora empresarial que usa Inteligencia Artificial para diagnosticar negocios y ejecutar los cambios que los hacen crecer de manera sostenible.
          </p>
          
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="mt-1 w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary shrink-0">
                <i className="fa-solid fa-check text-sm"></i>
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">IA Aplicada al Negocio</h4>
                <p className="text-sm text-slate-400">Diagnóstico basado en datos reales, no en suposiciones. Entregamos resultados con probabilidad de éxito comprobable.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="mt-1 w-8 h-8 rounded-full bg-brand-secondary/20 flex items-center justify-center text-brand-secondary shrink-0">
                <i className="fa-solid fa-check text-sm"></i>
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Ecosistema Integrado</h4>
                <p className="text-sm text-slate-400">Web, marca, contenido, pauta, software y diagnóstico. Todo bajo un mismo techo estratégico.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="mt-1 w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent shrink-0">
                <i className="fa-solid fa-check text-sm"></i>
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Cada acción alimenta tu Data</h4>
                <p className="text-sm text-slate-400">Cada servicio básico que hacemos (como una web o redes) se convierte en un sensor que captura datos para tu diagnóstico empresarial futuro.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden glass-card p-2">
            <div className="w-full h-full bg-slate-900 rounded-xl relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#06B6D4 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <div className="relative z-10 w-3/4 h-3/4 border border-brand-primary/30 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                <div className="w-3/4 h-3/4 border border-brand-secondary/40 rounded-full flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
                  <div className="w-1/2 h-1/2 bg-gradient-to-tr from-brand-primary to-brand-secondary rounded-full blur-xl opacity-50"></div>
                </div>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
                <i className="fa-solid fa-microchip text-5xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] mb-4"></i>
                <div className="bg-black/50 backdrop-blur px-4 py-2 rounded border border-white/10 text-sm font-mono text-brand-primary">Processing Data...</div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-slate-800 border border-slate-700 p-4 rounded-xl shadow-xl flex items-center gap-4">
            <div className="text-3xl font-bold text-brand-accent">100%</div>
            <div className="text-xs text-slate-300 leading-tight">Enfoque en<br />Métricas Reales</div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Kits = () => (
  <section id="kits" className="py-24 bg-brand-dark/50 relative border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-brand-primary font-semibold tracking-wider text-sm uppercase mb-2 block">Nuestros Servicios</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Tres formas de entrar al mercado digital</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Elige el kit que mejor se adapta a tu momento actual. Todos construidos con una base tecnológica preparada para escalar.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Kit Arranque */}
        <div className="glass-card rounded-2xl p-8 border border-white/5 flex flex-col h-full">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Kit Arranque</h3>
            <p className="text-slate-400 text-sm">Para empezar a existir en digital con pie derecho.</p>
          </div>
          <div className="mb-8">
            <div className="text-3xl font-bold text-white">$1.900.000 <span className="text-base font-normal text-slate-500">COP</span></div>
            <div className="text-xs text-brand-accent mt-2 bg-brand-accent/10 inline-block px-2 py-1 rounded">Ahorro del 53% vs individual</div>
          </div>
          
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-check text-slate-500 mt-1"></i>
              <span className="text-sm text-slate-300">Logo esencial (2 conceptos, 1 ajuste)</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-check text-slate-500 mt-1"></i>
              <span className="text-sm text-slate-300">Landing page de captura (5 secciones, alta velocidad)</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-check text-slate-500 mt-1"></i>
              <span className="text-sm text-slate-300">Perfil optimizado en 2 redes sociales</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-check text-slate-500 mt-1"></i>
              <span className="text-sm text-slate-300">Parrilla mes 1: 15 posts (Temáticas impulsadas por IA) + copy</span>
            </li>
            <li className="mt-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-magnifying-glass-chart text-brand-primary mt-1"></i>
                <div>
                  <span className="text-sm font-semibold text-white block">Diagnóstico Básico Incluido:</span>
                  <span className="text-xs text-slate-400">Análisis inicial de tu huella digital actual y oportunidades rápidas de mejora.</span>
                </div>
              </div>
            </li>
          </ul>
          
          <div className="mt-auto">
            <div className="text-xs text-slate-500 mb-4 flex justify-between">
              <span><i className="fa-regular fa-clock mr-1"></i> 8-10 días hábiles</span>
              <span>50% inicio / 50% fin</span>
            </div>
            <a href="#contacto" className="block w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-center rounded-xl text-sm font-semibold transition-colors">Seleccionar Arranque</a>
          </div>
        </div>

        {/* Kit Presencia (Destacado) */}
        <div className="pricing-highlight rounded-2xl p-8 flex flex-col h-full transform lg:-translate-y-4 shadow-[0_10px_30px_rgba(6,182,212,0.15)] relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-brand-dark text-xs font-bold px-4 py-1 rounded-full shadow-lg">
            RECOMENDADO
          </div>
          
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Kit Presencia</h3>
            <p className="text-cyan-100/70 text-sm">Para establecerse con autoridad y recolectar datos.</p>
          </div>
          <div className="mb-6">
            <div className="text-sm text-slate-400 line-through mb-1">Valor real: $7.200.000 COP</div>
            <div className="text-4xl font-extrabold text-white mb-2">$3.800.000 <span className="text-base font-normal text-slate-400">COP</span></div>
            <div className="text-sm font-semibold text-brand-accent bg-brand-accent/10 border border-brand-accent/20 inline-block px-3 py-1.5 rounded text-center w-full">
              🔥 Ahorras 47% en paquete
            </div>
          </div>
          
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-check text-brand-primary mt-1"></i>
              <span className="text-sm text-slate-200">Logo + Paleta de color + Tipografía</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-check text-brand-primary mt-1"></i>
              <span className="text-sm text-slate-200">Manual de marca básico</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-check text-brand-primary mt-1"></i>
              <span className="text-sm text-white font-medium">Web corporativa (5 págs, arquitectura escalable)</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-check text-brand-primary mt-1"></i>
              <span className="text-sm text-slate-200">Parrilla mes 1: 20 posts (Estrategia IA) + copy</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-check text-brand-primary mt-1"></i>
              <span className="text-sm text-slate-200">Video de presentación (30-45 seg)</span>
            </li>
            <li className="mt-4 pt-4 border-t border-brand-primary/20">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-chart-pie text-brand-primary mt-1"></i>
                <div>
                  <span className="text-sm font-bold text-white block">Diagnóstico Intermedio:</span>
                  <span className="text-xs text-slate-300">Auditoría SEO básica de tu sector y análisis de competencia digital. Descubre qué están haciendo los líderes.</span>
                </div>
              </div>
            </li>
          </ul>
          
          <div className="mt-auto">
            <div className="text-xs text-slate-400 mb-4 flex justify-between">
              <span><i className="fa-regular fa-clock mr-1"></i> 15-18 días hábiles</span>
              <span>50% inicio / 50% fin</span>
            </div>
            <a href="#contacto" className="block w-full py-3.5 px-4 bg-brand-primary hover:bg-cyan-400 text-brand-dark text-center rounded-xl text-sm font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)]">Quiero el Kit Presencia</a>
          </div>
        </div>

        {/* Kit Impulso */}
        <div className="glass-card rounded-2xl p-8 border border-white/5 flex flex-col h-full">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Kit Impulso</h3>
            <p className="text-slate-400 text-sm">Para traccionar y crecer desde el primer mes.</p>
          </div>
          <div className="mb-8">
            <div className="text-3xl font-bold text-white">$6.900.000 <span className="text-base font-normal text-slate-500">COP</span></div>
            <div className="text-xs text-brand-accent mt-2 bg-brand-accent/10 inline-block px-2 py-1 rounded">Ahorro del 40% vs individual</div>
          </div>
          
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-layer-group text-brand-secondary mt-1"></i>
              <span className="text-sm font-medium text-white">Todo lo del Kit Presencia +</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-check text-slate-500 mt-1"></i>
              <span className="text-sm text-slate-300">Gestión de RRSS (primer mes completo)</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-check text-slate-500 mt-1"></i>
              <span className="text-sm text-slate-300">Estrategia de contenido proyectada a 3 meses</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-check text-slate-500 mt-1"></i>
              <span className="text-sm text-slate-300">Setup técnico: Meta Business Manager + Google Analytics</span>
            </li>
            <li className="mt-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-network-wired text-brand-secondary mt-1"></i>
                <div>
                  <span className="text-sm font-semibold text-white block">Diagnóstico Avanzado:</span>
                  <span className="text-xs text-slate-400">Análisis inicial de embudo de conversión, experiencia de usuario (UX) y proyección de crecimiento a 6 meses.</span>
                </div>
              </div>
            </li>
          </ul>
          
          <div className="mt-auto">
            <div className="text-xs text-slate-500 mb-4 flex justify-between">
              <span><i className="fa-regular fa-clock mr-1"></i> 3-4 semanas</span>
              <span>50% inicio / 50% fin</span>
            </div>
            <a href="#contacto" className="block w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-center rounded-xl text-sm font-semibold transition-colors">Seleccionar Impulso</a>
          </div>
        </div>
      </div>

      {/* Add-ons */}
      <div className="mt-12 max-w-3xl mx-auto flex flex-wrap justify-center gap-4 text-sm text-slate-400">
        <span className="bg-slate-800/50 px-3 py-1.5 rounded-full border border-white/5"><strong className="text-white">Add-on:</strong> Video Adicional +$900K</span>
        <span className="bg-slate-800/50 px-3 py-1.5 rounded-full border border-white/5"><strong className="text-white">Add-on:</strong> Gestión RRSS Mes 2 +$650K</span>
        <span className="bg-slate-800/50 px-3 py-1.5 rounded-full border border-white/5"><strong className="text-white">Add-on:</strong> Setup Pauta +$500K</span>
      </div>
    </div>
  </section>
)

const AISection = () => (
  <section id="ia" className="py-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="glass-card rounded-3xl p-8 md:p-12 border border-brand-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-block px-3 py-1 rounded bg-brand-secondary/20 text-brand-secondary text-xs font-bold tracking-wider uppercase mb-4 border border-brand-secondary/30">El Siguiente Nivel</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Diagnóstico Empresarial con IA</h2>
            <p className="text-slate-300 mb-6 text-lg">
              Cada kit básico construye los cimientos. Una vez recolectamos datos reales de tu negocio, activamos nuestro servicio Core: un diagnóstico profundo utilizando modelos de Inteligencia Artificial.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-slate-300">
                <i className="fa-solid fa-arrow-right text-brand-secondary"></i>
                <span>Análisis profundo de procesos, ventas, marketing y operación.</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <i className="fa-solid fa-arrow-right text-brand-secondary"></i>
                <span>Identificación de cuellos de botella mediante data mining.</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <i className="fa-solid fa-arrow-right text-brand-secondary"></i>
                <span>Plan de acción priorizado con <strong>probabilidad de éxito calculada</strong>.</span>
              </li>
            </ul>

            <div className="bg-black/30 rounded-xl p-4 border border-white/5 inline-block">
              <span className="block text-xs text-slate-400 mb-1">Inversión a futuro:</span>
              <span className="text-xl font-bold text-white">Desde $8.000.000 COP</span>
              <span className="block text-xs text-slate-500 mt-1">*Cotización exacta según tamaño y complejidad.</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">Tu Ruta de Crecimiento</h4>
            
            <div className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-xl border border-white/5">
              <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary font-bold">1</div>
              <div>
                <div className="font-bold">Kit de Entrada</div>
                <div className="text-xs text-slate-400">Presencia y captura de leads</div>
              </div>
            </div>
            
            <div className="w-0.5 h-6 bg-gradient-to-b from-brand-primary/50 to-slate-700 ml-9"></div>

            <div className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-xl border border-white/5">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 font-bold">2</div>
              <div>
                <div className="font-bold">Software / Ecommerce</div>
                <div className="text-xs text-slate-400">Escalabilidad operativa (Mes 4-6)</div>
              </div>
            </div>

            <div className="w-0.5 h-6 bg-gradient-to-b from-slate-700 to-brand-secondary/50 ml-9"></div>

            <div className="flex items-center gap-4 bg-brand-secondary/10 p-4 rounded-xl border border-brand-secondary/30 shadow-[0_0_20px_rgba(139,92,246,0.1)]">
              <div className="w-10 h-10 rounded-full bg-brand-secondary flex items-center justify-center text-white font-bold"><i className="fa-solid fa-brain"></i></div>
              <div>
                <div className="font-bold text-brand-secondary">Diagnóstico IA</div>
                <div className="text-xs text-slate-300">Decisiones basadas en algoritmos (Mes 6+)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Contact = () => (
  <section id="contacto" className="py-24 bg-gradient-to-b from-transparent to-black">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-8">¿Listo para el primer paso?</h2>
      
      <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
        <div className="bg-slate-800/40 p-6 rounded-2xl border border-white/5 relative">
          <div className="absolute -top-4 -left-4 w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center font-bold text-xl border-4 border-[#0B1121]">1</div>
          <h4 className="font-bold mb-2">Hablemos</h4>
          <p className="text-sm text-slate-400">Cuéntanos sobre tu negocio en una llamada de 30 min. Sin costo ni compromiso.</p>
        </div>
        <div className="bg-slate-800/40 p-6 rounded-2xl border border-white/5 relative">
          <div className="absolute -top-4 -left-4 w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center font-bold text-xl border-4 border-[#0B1121]">2</div>
          <h4 className="font-bold mb-2">Elige tu Kit</h4>
          <p className="text-sm text-slate-400">Te recomendamos la opción técnica y estratégica que mejor se adapte hoy.</p>
        </div>
        <div className="bg-slate-800/40 p-6 rounded-2xl border border-white/5 relative">
          <div className="absolute -top-4 -left-4 w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center font-bold text-xl text-black border-4 border-[#0B1121]">3</div>
          <h4 className="font-bold mb-2">Arrancamos</h4>
          <p className="text-sm text-slate-400">Iniciamos en 48 horas. Entregas en los plazos acordados, sin sorpresas.</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center bg-slate-900/80 p-8 rounded-3xl border border-white/10 max-w-2xl mx-auto">
        <div className="text-left flex-grow">
          <p className="text-slate-400 text-sm mb-1">Escríbenos directamente</p>
          <p className="text-xl font-bold text-white"><i className="fa-brands fa-whatsapp text-green-500 mr-2"></i> WhatsApp Comercial</p>
        </div>
        <a href="#" className="px-8 py-4 bg-brand-primary text-black font-bold rounded-full hover:bg-cyan-400 transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
          Contactar Ahora <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </section>
)

const Footer = () => (
  <footer className="border-t border-white/10 py-12 bg-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2 text-xl font-bold">
        <i className="fa-solid fa-chart-pie text-brand-primary"></i> Bigdatia
      </div>
      
      <div className="flex gap-6 text-slate-400">
        <a href="https://bigdatia.co" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2"><i className="fa-solid fa-globe"></i> bigdatia.co</a>
        <a href="mailto:contacto@bigdatia.co" className="hover:text-white transition-colors flex items-center gap-2"><i className="fa-solid fa-envelope"></i> contacto@bigdatia.co</a>
        <a href="#" className="hover:text-white transition-colors flex items-center gap-2"><i className="fa-brands fa-instagram"></i> @bigdatia</a>
      </div>
      
      <div className="text-sm text-slate-600">
        &copy; 2024 Bigdatia. Consultoría & IA.
      </div>
    </div>
  </footer>
)

function App() {
  return (
    <div className="antialiased selection:bg-brand-primary selection:text-white relative overflow-x-hidden">
      {/* Background decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-primary/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-secondary/20 blur-[120px]"></div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <Challenges />
        <Approach />
        <Kits />
        <AISection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
