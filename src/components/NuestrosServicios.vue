<template>
  <section id="servicios" class="py-8 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden w-full flex justify-center">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div class="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      
      <!-- Animated Background Shapes -->
      <div class="absolute -top-12 -left-12 w-48 h-48 bg-blue-500/5 rounded-full" style="animation: float 6s ease-in-out infinite; animation-delay: 2s"></div>
      <div class="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-400/5 rounded-full" style="animation: float 4s ease-in-out infinite"></div>
      <div class="absolute top-1/2 left-1/3 w-12 h-12 bg-blue-500/10 rounded-full animate-pulse" style="animation-duration: 4s"></div>
    </div>
    
    <div class="w-full max-w-6xl mx-auto px-4 relative z-10 flex flex-col items-center">
      <!-- Section Header -->
      <div class="text-center w-full flex flex-col items-center mb-8">
        <div class="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-blue-200 shadow">
          <div class="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mr-2 animate-pulse"></div>
          <span class="text-xs font-semibold text-gray-600">💎 NUESTROS PLANES</span>
        </div>
        
        <h2 class="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-gray-800 via-blue-800 to-blue-900 bg-clip-text text-transparent text-center w-full">
          Servicios Exclusivos
        </h2>
        <p class="text-base text-gray-600 max-w-2xl leading-relaxed text-center mx-auto mb-8">
          Descubre nuestros planes <span class="font-semibold text-blue-600">premium</span> diseñados para catapultar tu presencia digital
        </p>
      </div>
      
      <!-- Services Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 w-full justify-items-center items-stretch relative">
        
        <!-- Plan Básico -->
        <div class="group relative w-full max-w-xs flex flex-col">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
          <div class="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform group-hover:-translate-y-2 border border-blue-200/50 overflow-hidden w-full flex flex-col flex-1">
            <!-- Header -->
            <div class="p-6 text-center border-b border-blue-200/50 flex-shrink-0 flex flex-col items-center justify-center">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow">
                <span class="text-2xl text-white">🌱</span>
              </div>
              <h3 class="text-xl font-black text-gray-800 mb-2">Inicial</h3>
              <p class="text-gray-500 font-semibold text-sm">Para Emprendedores</p>
            </div>
            
            <!-- Price -->
            <div class="p-4 bg-gradient-to-r from-blue-50 to-white text-center flex-shrink-0">
              <div class="text-2xl font-black text-gray-800 mb-1">$400.000</div>
              <div class="text-gray-500 text-xs">Hosting 1 año incluido</div>
            </div>
            
            <!-- Features -->
            <div class="p-4 flex-grow">
              <ul class="space-y-2">
                <li v-for="(feature, index) in basicFeatures" :key="index" 
                    class="flex items-center transform transition-all duration-300 group-hover:translate-x-1">
                  <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
                    <span class="text-blue-500 text-sm">✓</span>
                  </div>
                  <span class="text-gray-600 font-medium text-left text-sm">{{ feature }}</span>
                </li>
              </ul>
            </div>
            
            <!-- CTA -->
            <div class="p-4 pt-2 flex-shrink-0">
              <button class="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 px-4 rounded-lg transition-all duration-500 transform hover:scale-105 shadow hover:shadow-lg relative overflow-hidden group">
                <span class="relative z-10 text-sm">Comenzar Proyecto</span>
                <div class="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </div>
          </div>
        </div>

        <!-- Plan Estándar - MÁS POPULAR -->
        <div class="group relative w-full max-w-xs flex flex-col">
          <!-- Cartel MÁS POPULAR -->
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-[160px]">
            <span class="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xs font-black py-2 px-4 rounded-full shadow-lg w-full block text-center">
              ⭐ MÁS POPULAR
            </span>
          </div>
          <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-700/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
          <div class="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform group-hover:-translate-y-2 border-2 border-blue-500/50 overflow-hidden w-full flex flex-col flex-1">
            <!-- Header -->
            <div class="p-6 text-center border-b border-blue-200/50 flex-shrink-0 flex flex-col items-center justify-center">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow">
                <span class="text-2xl text-white">🚀</span>
              </div>
              <h3 class="text-xl font-black text-gray-800 mb-2">Estándar</h3>
              <p class="text-gray-500 font-semibold text-sm">Pequeñas Empresas</p>
            </div>
            
            <!-- Price -->
            <div class="p-4 bg-gradient-to-r from-blue-50 to-blue-100 text-center flex-shrink-0">
              <div class="text-2xl font-black text-gray-800 mb-1">$800.000</div>
              <div class="text-gray-500 text-xs">SEO Avanzado Incluido</div>
            </div>
            
            <!-- Features -->
            <div class="p-4 flex-grow">
              <ul class="space-y-2">
                <li v-for="(feature, index) in standardFeatures" :key="index" 
                    class="flex items-center transform transition-all duration-300 group-hover:translate-x-1">
                  <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
                    <span class="text-blue-500 text-sm">✓</span>
                  </div>
                  <span class="text-gray-600 font-medium text-left text-sm">{{ feature }}</span>
                </li>
              </ul>
            </div>
            
            <!-- CTA -->
            <div class="p-4 pt-2 flex-shrink-0">
              <button class="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 px-4 rounded-lg transition-all duration-500 transform hover:scale-105 shadow hover:shadow-lg relative overflow-hidden group">
                <span class="relative z-10 text-sm">Elegir Plan</span>
                <div class="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </div>
          </div>
        </div>

        <!-- Plan Profesional -->
        <div class="group relative w-full max-w-xs flex flex-col">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-700/10 to-blue-800/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
          <div class="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform group-hover:-translate-y-2 border border-blue-200/50 overflow-hidden w-full flex flex-col flex-1">
            <!-- Header -->
            <div class="p-6 text-center border-b border-blue-200/50 flex-shrink-0 flex flex-col items-center justify-center">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl flex items-center justify-center mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow">
                <span class="text-2xl text-white">⭐</span>
              </div>
              <h3 class="text-xl font-black text-gray-800 mb-2">Profesional</h3>
              <p class="text-gray-500 font-semibold text-sm">Negocios en Crecimiento</p>
            </div>
            
            <!-- Price -->
            <div class="p-4 bg-gradient-to-r from-blue-100 to-blue-200 text-center flex-shrink-0">
              <div class="text-2xl font-black text-gray-800 mb-1">$1.400.000</div>
              <div class="text-gray-500 text-xs">Gestión de Datos Incluido</div>
            </div>
            
            <!-- Features -->
            <div class="p-4 flex-grow">
              <ul class="space-y-2">
                <li v-for="(feature, index) in professionalFeatures" :key="index" 
                    class="flex items-center transform transition-all duration-300 group-hover:translate-x-1">
                  <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
                    <span class="text-blue-500 text-sm">✓</span>
                  </div>
                  <span class="text-gray-600 font-medium text-left text-sm">{{ feature }}</span>
                </li>
              </ul>
            </div>
            
            <!-- CTA -->
            <div class="p-4 pt-2 flex-shrink-0">
              <button class="w-full bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white font-bold py-3 px-4 rounded-lg transition-all duration-500 transform hover:scale-105 shadow hover:shadow-lg relative overflow-hidden group">
                <span class="relative z-10 text-sm">Ir Profesional</span>
                <div class="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </div>
          </div>
        </div>

        <!-- Plan Empresa -->
        <div class="group relative w-full max-w-xs flex flex-col">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-800/10 to-blue-900/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
          <div class="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform group-hover:-translate-y-2 border border-blue-200/50 overflow-hidden w-full flex flex-col flex-1">
            <!-- Header -->
            <div class="p-6 text-center border-b border-blue-200/50 flex-shrink-0 flex flex-col items-center justify-center">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-800 to-blue-950 rounded-xl flex items-center justify-center mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow">
                <span class="text-2xl text-white">🏢</span>
              </div>
              <h3 class="text-xl font-black text-gray-800 mb-2">Empresa</h3>
              <p class="text-gray-500 font-semibold text-sm">Soluciones Corporativas</p>
            </div>
            
            <!-- Price -->
            <div class="p-4 bg-gradient-to-r from-blue-200 to-blue-300 text-center flex-shrink-0">
              <div class="text-2xl font-black text-gray-800 mb-1">Hablemos</div>
              <div class="text-gray-500 text-xs">Aplicaciones Web & Mobile</div>
            </div>
            
            <!-- Features -->
            <div class="p-4 flex-grow">
              <ul class="space-y-2">
                <li v-for="(feature, index) in enterpriseFeatures" :key="index" 
                    class="flex items-center transform transition-all duration-300 group-hover:translate-x-1">
                  <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
                    <span class="text-blue-500 text-sm">✓</span>
                  </div>
                  <span class="text-gray-600 font-medium text-left text-sm">{{ feature }}</span>
                </li>
              </ul>
            </div>
            
            <!-- CTA -->
            <div class="p-4 pt-2 flex-shrink-0">
              <button class="w-full bg-gradient-to-r from-blue-800 to-blue-950 hover:from-blue-900 hover:to-black text-white font-bold py-3 px-4 rounded-lg transition-all duration-500 transform hover:scale-105 shadow hover:shadow-lg relative overflow-hidden group">
                <span class="relative z-10 text-sm">Enviar Mensaje</span>
                <div class="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const basicFeatures = [
  'Página web con 5 secciones',
  'Diseño responsive avanzado',
  'SEO básico optimizado',
  'Hosting premium 1 año incluido',
  'Certificado SSL gratuito'
];

const standardFeatures = [
  'Animaciones',
  'Diseño UX/UI exclusivo',
  'SEO avanzado',
  'Formularios de contacto',
  'Videos e imágenes'
  
];

const professionalFeatures = [
  'Diseño premium personalizado',
  'Branding',
  'Panel de Administrador',
  'Información y Contenido Editable',
  'Soporte prioritario'
];

const enterpriseFeatures = [
  'Desarrollo 100% a medida',
  'Consultoría estratégica digital',
  'Desarrollo Front-End + Back-End',
  'Soporte Prioritario',
  'Backup Garantizado',
  'Seguridad informática'
];

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>