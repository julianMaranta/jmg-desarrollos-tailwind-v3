<template>
  <section id="testimonios" class="py-8 bg-gradient-to-br from-white via-blue-50 to-blue-100 relative overflow-hidden w-full flex justify-center items-center">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl" style="animation: float 6s ease-in-out infinite; animation-delay: 2s"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl" style="animation: float 4s ease-in-out infinite"></div>
    </div>

    <div class="w-full max-w-6xl mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
      <!-- Section Header -->
      <div class="text-center mb-8 w-full flex flex-col items-center">
        <div class="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-blue-200 shadow justify-center">
          <div class="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mr-2 animate-pulse"></div>
          <span class="text-xs font-semibold text-gray-600">💬 TESTIMONIOS</span>
        </div>
        
        <h2 class="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-gray-800 via-blue-800 to-blue-900 bg-clip-text text-transparent text-center w-full">
          Historias de Éxito
        </h2>
        <p class="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed text-center">
          Más de 200 empresas confían en nosotros para transformar su presencia digital
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 w-full justify-items-center">
        <!-- Testimonio 1 -->
        <div class="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-200/50 w-full max-w-xs flex flex-col items-center text-center">
          <!-- Header -->
          <div class="flex flex-col items-center mb-4 w-full">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-3 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow">
              <span class="text-white font-bold text-sm">MR</span>
            </div>
            <div class="text-center w-full">
              <h4 class="font-black text-gray-800 text-base">María Rodríguez</h4>
              <p class="text-gray-500 text-xs">Dueña de Boutique Elegante</p>
            </div>
          </div>
          
          <!-- Rating -->
          <div class="flex mb-3 justify-center w-full">
            <span v-for="star in 5" :key="star" class="text-yellow-400 text-sm">⭐</span>
          </div>
          
          <!-- Testimonial Text -->
          <p class="text-gray-600 leading-relaxed italic mb-4 w-full text-center text-sm">
            "JMG Desarrollos transformó completamente mi negocio. Mi sitio web no solo es hermoso, sino que ha aumentado mis ventas online en un 300%."
          </p>
          
          <!-- Results -->
          <div class="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-3 border border-blue-200 w-full">
            <div class="flex justify-between items-center text-xs">
              <span class="text-blue-600 font-semibold">Resultados:</span>
              <span class="text-green-600 font-black">+300% Ventas</span>
            </div>
          </div>
        </div>

        <!-- Testimonio 2 -->
        <div class="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-200/50 w-full max-w-xs flex flex-col items-center text-center">
          <!-- Header -->
          <div class="flex flex-col items-center mb-4 w-full">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl flex items-center justify-center mb-3 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow">
              <span class="text-white font-bold text-sm">CP</span>
            </div>
            <div class="text-center w-full">
              <h4 class="font-black text-gray-800 text-base">Carlos Pérez</h4>
              <p class="text-gray-500 text-xs">Director de TechSolutions</p>
            </div>
          </div>
          
          <!-- Rating -->
          <div class="flex mb-3 justify-center w-full">
            <span v-for="star in 5" :key="star" class="text-yellow-400 text-sm">⭐</span>
          </div>
          
          <!-- Testimonial Text -->
          <p class="text-gray-600 leading-relaxed italic mb-4 w-full text-center text-sm">
            "Trabajamos con JMG para nuestro sitio corporativo y los resultados superaron expectativas. El proceso fue transparente y la entrega puntual."
          </p>
          
          <!-- Results -->
          <div class="bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl p-3 border border-blue-300 w-full">
            <div class="flex justify-between items-center text-xs">
              <span class="text-blue-600 font-semibold">Resultados:</span>
              <span class="text-green-600 font-black">+150% Leads</span>
            </div>
          </div>
        </div>

        <!-- Testimonio 3 -->
        <div class="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-200/50 w-full max-w-xs flex flex-col items-center text-center">
          <!-- Header -->
          <div class="flex flex-col items-center mb-4 w-full">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-800 to-blue-950 rounded-xl flex items-center justify-center mb-3 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow">
              <span class="text-white font-bold text-sm">AG</span>
            </div>
            <div class="text-center w-full">
              <h4 class="font-black text-gray-800 text-base">Ana García</h4>
              <p class="text-gray-500 text-xs">Fundadora de Wellness Center</p>
            </div>
          </div>
          
          <!-- Rating -->
          <div class="flex mb-3 justify-center w-full">
            <span v-for="star in 5" :key="star" class="text-yellow-400 text-sm">⭐</span>
          </div>
          
          <!-- Testimonial Text -->
          <p class="text-gray-600 leading-relaxed italic mb-4 w-full text-center text-sm">
            "Increíble experiencia de principio a fin. Mi sitio web captura perfectamente la esencia de mi marca y ha sido clave para atraer nuevos clientes."
          </p>
          
          <!-- Results -->
          <div class="bg-gradient-to-r from-blue-200 to-blue-300 rounded-xl p-3 border border-blue-400 w-full">
            <div class="flex justify-between items-center text-xs">
              <span class="text-blue-600 font-semibold">Resultados:</span>
              <span class="text-green-600 font-black">+200% Clientes</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Client Logos -->
      <div class="text-center w-full flex flex-col items-center mt-8">
        <h3 class="text-xl font-black text-gray-800 mb-6 bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent text-center w-full">
          Empresas que Confían en Nosotros
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center opacity-60 justify-items-center w-full">
          <div v-for="i in 6" :key="i" 
               class="bg-white/80 backdrop-blur-sm rounded-xl h-20 flex flex-col items-center justify-center shadow hover:shadow-md transition-all duration-500 transform hover:scale-105 group border border-blue-200/50 w-full max-w-32">
            <div class="text-center w-full flex flex-col items-center justify-center">
              <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-1 transform transition-all duration-500 group-hover:rotate-6">
                <span class="text-white font-bold text-xs flex items-center justify-center w-full">C{{ i }}</span>
              </div>
              <span class="text-gray-600 font-semibold text-xs text-center w-full">Cliente {{ i }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section 
      <div class="text-center mt-8 w-full">
        <div class="bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl p-8 border border-blue-500/20 w-full flex flex-col items-center justify-center">
          <h3 class="text-xl md:text-2xl font-black text-gray-800 mb-4 text-center w-full">
            ¿Listo para ser Nuestro Próximo Caso de Éxito?
          </h3>
          
          <div class="flex items-center justify-center w-full mb-6">
            <p class="text-base text-gray-600 max-w-xl text-center leading-relaxed">
              Únete a las empresas que ya experimentaron la transformación digital con JMG Desarrollos.
            </p>
          </div>

          <div class="flex justify-center w-full">
            <button 
              @click="scrollToSection('contacto')"
              class="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-black py-3 px-8 rounded-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-xl text-base relative overflow-hidden group"
            >
              <span class="relative z-10 flex items-center justify-center">
                Unirme al Éxito
                <span class="ml-2 transform transition-transform duration-500 group-hover:translate-x-1">🎉</span>
              </span>
              <div class="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-[110%] group-hover:translate-x-[110%] transition-transform duration-1000 opacity-0 group-hover:opacity-100"></div>
            </button>
          </div>
        </div>
      </div>-->
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