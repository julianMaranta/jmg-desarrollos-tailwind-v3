<template>
  <section class="py-8 bg-gradient-to-br from-white via-blue-50 to-blue-100 relative overflow-hidden w-full flex justify-center">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl" style="animation: float 6s ease-in-out infinite; animation-delay: 2s"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl" style="animation: float 4s ease-in-out infinite"></div>
    </div>

    <div class="w-full max-w-6xl mx-auto px-4 relative z-10 flex flex-col items-center">
      <!-- Section Header - ESPACIO AUMENTADO A pb-1.5 pt-1.5 -->
      <div class="text-center mb-8 w-full flex flex-col items-center">
        <div class="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-blue-200 shadow">
          <div class="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mr-2 animate-pulse"></div>
          <span class="text-xs font-semibold text-gray-600">🎯 POR QUÉ ELEGIRNOS</span>
        </div>
        
        <h2 class="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-gray-800 via-blue-800 to-blue-900 bg-clip-text text-transparent text-center w-full pb-1.5 pt-1.5">
          Ventajas Exclusivas
        </h2>
        <p class="text-base text-gray-600 max-w-2xl leading-relaxed text-center mx-auto mb-8">
          No solo desarrollamos sitios web, creamos <span class="font-semibold text-blue-600">experiencias digitales</span> que impulsan tu negocio
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 w-full justify-items-center">
        <div v-for="(feature, index) in features" :key="index" 
             class="group text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-200/50 w-full max-w-xs flex flex-col items-center">
          <!-- Icon Container -->
          <div class="relative mb-4 flex justify-center">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow">
              <span class="text-xl text-white flex items-center justify-center w-full h-full">{{ feature.icon }}</span>
            </div>
            <div class="absolute -inset-3 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <!-- Content -->
          <h3 class="text-lg font-black text-gray-800 mb-2 text-center pb-0.7 pt-0.7">{{ feature.title }}</h3>
          <p class="text-sm text-gray-600 leading-relaxed text-center">
            {{ feature.description }}
          </p>
          
          <!-- Hover Effect Line -->
          <div class="w-0 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mt-4 transition-all duration-500 group-hover:w-12"></div>
        </div>
      </div>

      <!-- Technology & Promise Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
        <!-- Technology Stack -->
        <div class="text-center lg:text-left flex flex-col items-center lg:items-start">
          <h3 class="text-2xl font-black text-gray-800 mb-4 bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent text-center w-full pb-1.5">
            Tecnología de Vanguardia
          </h3>
          <p class="text-base text-gray-600 mb-6 leading-relaxed text-center lg:text-left w-full">
            Utilizamos el stack tecnológico más moderno para garantizar que tu sitio web sea 
            <span class="font-semibold text-blue-600">rápido, seguro y escalable</span>.
          </p>
          
          <div class="grid grid-cols-2 gap-4 w-full">
            <div v-for="(tech, index) in technologies" :key="index" 
                 class="flex items-center space-x-3 p-3 bg-white/50 rounded-xl shadow hover:shadow-md transition-all duration-300 transform hover:scale-105 group justify-center lg:justify-start">
              <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:rotate-6">
                <span class="text-white font-bold text-xs flex items-center justify-center w-full h-full">{{ tech.icon }}</span>
              </div>
              <div class="text-center lg:text-left">
                <div class="font-black text-gray-800 text-sm pb-0.7">{{ tech.name }}</div>
                <div class="text-xs text-gray-500">{{ tech.description }}</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Our Promise -->
        <div class="relative flex justify-center">
          <div class="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden w-full max-w-sm">
            <!-- Background Pattern -->
            <div class="absolute inset-0 opacity-10">
              <div class="absolute inset-0" style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 16px 16px;"></div>
            </div>
            
            <div class="relative z-10">
              <h4 class="text-xl font-black mb-4 text-center w-full pb-1.5">Nuestra Promesa</h4>
              <div class="space-y-4">
                <div v-for="(promise, index) in promises" :key="index" 
                     class="flex items-center p-3 bg-white/10 rounded-xl backdrop-blur-sm transform transition-all duration-300 hover:scale-105 group justify-center lg:justify-start">
                     
                  <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3 transform transition-all duration-300 group-hover:rotate-6">
                    <span class="text-white text-lg flex items-center justify-center w-full h-full">✓</span>
                  </div>
                  
                  <div class="text-center lg:text-left">
                    <div class="font-bold text-sm pb-0.7">{{ promise.title }}</div>
                    <div class="text-white/80 text-xs">{{ promise.description }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section 
      <div class="text-center w-full flex flex-col items-center justify-center mt-8">
        <div class="bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl p-8 border border-blue-500/20 w-full max-w-3xl">
          <div class="flex flex-col items-center justify-center space-y-6">
            <h3 class="text-xl md:text-2xl font-black text-gray-800 text-center w-full pb-1.5">
              ¿Listo para Transformar tu Presencia Digital?
            </h3>
            <p class="text-base text-gray-600 max-w-xl mx-auto text-center">
              Únete a más de 200 empresas que ya confían en nosotros para llevar su negocio al siguiente nivel.
            </p>
            <button 
              @click="scrollToSection('contacto')"
              class="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-black py-3 px-8 rounded-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-xl text-base relative overflow-hidden group"
            >
              <span class="relative z-10 flex items-center justify-center">
                Comenzar Proyecto
                <span class="ml-2 transform transition-transform duration-500 group-hover:translate-x-1">🚀</span>
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
const features = [
  {
    icon: '⚡',
    title: 'Desarrollo Express',
    description: 'Entregamos proyectos en tiempo récord sin comprometer la calidad y atención al detalle.'
  },
  {
    icon: '💎',
    title: 'Calidad Premium',
    description: 'Código limpio, arquitectura escalable y mejores prácticas de desarrollo web moderno.'
  },
  {
    icon: '🛡️',
    title: 'Soporte Continuo',
    description: 'No te dejamos solo. Soporte técnico post-entrega y actualizaciones regulares.'
  },
  {
    icon: '🎯',
    title: 'Enfoque en ROI',
    description: 'Desarrollamos pensando en tus objetivos de negocio y maximización de conversiones.'
  }
];

const technologies = [
  {
    icon: '⚛️',
    name: 'React & Vue.js',
    description: 'Frameworks modernos'
  },
  {
    icon: '🚀',
    name: 'Node.js',
    description: 'Backend escalable'
  },
  {
    icon: '🗄️',
    name: 'MongoDB',
    description: 'Base de datos NoSQL'
  },
  {
    icon: '☁️',
    name: 'AWS & Vercel',
    description: 'Cloud hosting'
  }
];

const promises = [
  {
    title: 'Entrega Puntual',
    description: 'Cumplimos con los plazos establecidos sin excusas'
  },
  {
    title: 'Comunicación Transparente',
    description: 'Mantenemos un canal abierto durante todo el proyecto'
  },
  {
    title: 'Satisfacción Garantizada',
    description: 'Trabajamos hasta que estés 100% satisfecho'
  },
  {
    title: 'Soporte Post-Entrega',
    description: 'No te abandonamos después del lanzamiento'
  }
];

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>