<template>
  <section id="proceso" class="py-8 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden w-full flex justify-center">
    <!-- Animated Background -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Floating Particles -->
      <div v-for="i in 10" :key="i" 
           class="absolute w-1 h-1 bg-white/20 rounded-full"
           :style="{
             left: Math.random() * 100 + '%',
             top: Math.random() * 100 + '%',
             animationDelay: Math.random() * 3 + 's',
             animationDuration: 2 + Math.random() * 2 + 's'
           }"
           :class="{'animate-float': true}">
      </div>
      
      <!-- Gradient Orbs -->
      <div class="absolute -top-20 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-2xl animate-pulse" style="animation-duration: 4s"></div>
      <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style="animation-duration: 6s"></div>
    </div>

    <div class="w-full max-w-6xl mx-auto px-4 relative z-10 flex flex-col items-center">
      <!-- Section Header - CON PADDING PARA LAS LETRAS -->
      <div class="text-center mb-8 w-full flex flex-col items-center">
        <div class="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/20">
          <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
          <span class="text-xs font-semibold text-white/80">🔄 NUESTRO PROCESO</span>
        </div>
        
        <h2 class="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-white via-blue-200 to-blue-100 bg-clip-text text-transparent text-center w-full pb-1.5 pt-1.5">
          Metodología Probada
        </h2>
        
        <p class="text-base text-white/80 max-w-2xl leading-relaxed text-center mx-auto">
          Un proceso estructurado que garantiza el éxito de tu proyecto desde el primer día hasta el lanzamiento
        </p>
      </div>

      <!-- Process Timeline -->
      <div class="relative w-full">
        <!-- Timeline Line -->
        <div class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/50 to-blue-400/50 transform -translate-x-1/2"></div>
        
        <!-- Process Steps -->
        <div class="w-full">
          <!-- Step 1 -->
          <div class="flex flex-col lg:flex-row items-center lg:items-start gap-6 group w-full mb-12">
            <!-- Content -->
            <div class="lg:w-1/2 lg:pr-8 order-2 lg:order-1 flex justify-center lg:justify-end">
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg transform transition-all duration-500 group-hover:scale-105 w-full max-w-md">
                <div class="flex items-center justify-center mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-black text-xl shadow transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    1
                  </div>
                </div>
                <h3 class="text-xl font-black text-white mb-2 text-center pb-0.7 pt-0.7">Descubrimiento & Estrategia</h3>
                <p class="text-white/80 leading-relaxed text-sm text-center">
                  Comprendemos profundamente tu negocio, objetivos y audiencia para crear una estrategia digital personalizada.
                </p>
                <ul class="mt-4 space-y-2 text-white/70">
                  <li class="flex items-center justify-center">
                    <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    <span class="text-sm pb-0.7">Análisis de competencia</span>
                  </li>
                  <li class="flex items-center justify-center">
                    <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    <span class="text-sm pb-0.7">Definición de objetivos</span>
                  </li>
                  <li class="flex items-center justify-center">
                    <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    <span class="text-sm pb-0.7">Planificación estratégica</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <!-- Visual -->
            <div class="lg:w-1/2 lg:pl-8 order-1 lg:order-2 flex justify-center lg:justify-start">
              <div class="w-32 h-32 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg border border-white/10">
                <span class="text-4xl">💡</span>
              </div>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="flex flex-col lg:flex-row items-center lg:items-start gap-6 group w-full mb-12">
            <!-- Visual -->
            <div class="lg:w-1/2 lg:pr-8 order-1 flex justify-center lg:justify-end">
              <div class="w-32 h-32 bg-gradient-to-br from-blue-600/20 to-blue-700/20 rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg border border-white/10">
                <span class="text-4xl">🎨</span>
              </div>
            </div>
            
            <!-- Content -->
            <div class="lg:w-1/2 lg:pl-8 order-2 flex justify-center lg:justify-start">
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg transform transition-all duration-500 group-hover:scale-105 w-full max-w-md">
                <div class="flex items-center justify-center mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-white font-black text-xl shadow transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    2
                  </div>
                </div>
                <h3 class="text-xl font-black text-white mb-2 text-center pb-0.7 pt-0.7">Diseño & Experiencia</h3>
                <p class="text-white/80 leading-relaxed text-sm text-center">
                  Creamos diseños visualmente impactantes y experiencias de usuario fluidas que reflejan tu marca.
                </p>
                <ul class="mt-4 space-y-2 text-white/70">
                  <li class="flex items-center justify-center">
                    <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    <span class="text-sm pb-0.7">Wireframes y prototipos</span>
                  </li>
                  <li class="flex items-center justify-center">
                    <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    <span class="text-sm pb-0.7">Diseño UI/UX personalizado</span>
                  </li>
                  <li class="flex items-center justify-center">
                    <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    <span class="text-sm pb-0.7">Pruebas de usabilidad</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="flex flex-col lg:flex-row items-center lg:items-start gap-6 group w-full mb-12">
            <!-- Content -->
            <div class="lg:w-1/2 lg:pr-8 order-2 lg:order-1 flex justify-center lg:justify-end">
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg transform transition-all duration-500 group-hover:scale-105 w-full max-w-md">
                <div class="flex items-center justify-center mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl flex items-center justify-center text-white font-black text-xl shadow transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    3
                  </div>
                </div>
                <h3 class="text-xl font-black text-white mb-2 text-center pb-0.7 pt-0.7">Desarrollo & Implementación</h3>
                <p class="text-white/80 leading-relaxed text-sm text-center">
                  Programamos tu sitio web con las mejores tecnologías, asegurando máximo rendimiento, seguridad y escalabilidad.
                </p>
                <ul class="mt-4 space-y-2 text-white/70">
                  <li class="flex items-center justify-center">
                    <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    <span class="text-sm pb-0.7">Desarrollo frontend y backend</span>
                  </li>
                  <li class="flex items-center justify-center">
                    <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    <span class="text-sm pb-0.7">Integración de funcionalidades</span>
                  </li>
                  <li class="flex items-center justify-center">
                    <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    <span class="text-sm pb-0.7">Optimización SEO técnico</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <!-- Visual -->
            <div class="lg:w-1/2 lg:pl-8 order-1 lg:order-2 flex justify-center lg:justify-start">
              <div class="w-32 h-32 bg-gradient-to-br from-blue-700/20 to-blue-800/20 rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg border border-white/10">
                <span class="text-4xl">⚡</span>
              </div>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="flex flex-col lg:flex-row items-center lg:items-start gap-6 group w-full mb-12">
            <!-- Visual -->
            <div class="lg:w-1/2 lg:pr-8 order-1 flex justify-center lg:justify-end">
              <div class="w-32 h-32 bg-gradient-to-br from-blue-800/20 to-blue-900/20 rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg border border-white/10">
                <span class="text-4xl">🚀</span>
              </div>
            </div>
            
            <!-- Content -->
            <div class="lg:w-1/2 lg:pl-8 order-2 flex justify-center lg:justify-start">
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg transform transition-all duration-500 group-hover:scale-105 w-full max-w-md">
                <div class="flex items-center justify-center mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-800 to-blue-950 rounded-xl flex items-center justify-center text-white font-black text-xl shadow transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    4
                  </div>
                </div>
                <h3 class="text-xl font-black text-white mb-2 text-center pb-0.7 pt-0.7">Lanzamiento & Crecimiento</h3>
                <p class="text-white/80 leading-relaxed text-sm text-center">
                  Desplegamos tu sitio web y proporcionamos soporte continuo para garantizar su éxito a largo plazo.
                </p>
                <ul class="mt-4 space-y-2 text-white/70">
                  <li class="flex items-center justify-center">
                    <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    <span class="text-sm pb-0.7">Lanzamiento y deployment</span>
                  </li>
                  <li class="flex items-center justify-center">
                    <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    <span class="text-sm pb-0.7">Monitoreo y analytics</span>
                  </li>
                  <li class="flex items-center justify-center">
                    <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    <span class="text-sm pb-0.7">Soporte y mantenimiento</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section - CON PADDING PARA LAS LETRAS -->
      <div class="text-center mt-8 w-full flex flex-col items-center justify-center">
        <div class="bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl p-8 border border-blue-500/30 w-full max-w-3xl mx-auto flex flex-col items-center justify-center">
          <h3 class="text-xl md:text-2xl font-black text-white mb-4 text-center w-full pb-1.5">
            ¿Listo para Iniciar tu Proyecto?
          </h3>
          <p class="text-base text-white/80 mb-6 max-w-xl text-center">
            Sigue los pasos de más de 200 empresas exitosas que confiaron en nuestro proceso probado.
          </p>
          <div class="flex justify-center w-full">
            <button 
              @click="scrollToSection('contacto')"
              class="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-black py-3 px-8 rounded-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-xl text-base relative overflow-hidden group"
            >
              <span class="relative z-10 flex items-center justify-center">
                Iniciar Proceso
                <span class="ml-2 transform transition-transform duration-500 group-hover:translate-x-1">🎯</span>
              </span>
              <div class="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-[110%] group-hover:translate-x-[110%] transition-transform duration-1000 opacity-0 group-hover:opacity-100"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>