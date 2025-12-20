<template>
  <section id="por-que-elegirnos" class="min-h-screen w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden flex items-center justify-center py-8 md:py-10">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden w-full">
      <!-- Partículas -->
      <div v-for="i in 12" :key="i" 
           class="absolute w-1.5 h-1.5 bg-gradient-to-br from-blue-400/20 via-blue-300/15 to-blue-200/10 rounded-full custom-float"
           :style="{
             left: Math.random() * 100 + '%',
             top: Math.random() * 100 + '%',
             animationDelay: Math.random() * 4 + 's',
             animationDuration: 8 + Math.random() * 8 + 's'
           }">
      </div>
      
      <!-- Orbes -->
      <div class="absolute -top-28 -left-28 w-56 h-56 bg-gradient-to-br from-blue-600/10 via-blue-500/8 to-blue-400/6 rounded-full blur-3xl custom-pulse-slow"></div>
      <div class="absolute -bottom-28 -right-28 w-56 h-56 bg-gradient-to-br from-blue-600/10 via-blue-500/8 to-blue-400/6 rounded-full blur-3xl custom-pulse-slow custom-delay-2500"></div>
      
      <!-- Luz de escenario -->
      <div class="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-blue-900/20 via-blue-800/10 to-transparent"></div>
    </div>
    
    <!-- Contenedor Principal -->
    <div class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center justify-center">
      
      <!-- Header optimizado -->
      <div class="text-center w-full flex flex-col items-center mb-8 md:mb-10 animate-fadeInUp">
        <!-- Badge más compacto -->
        <div class="inline-flex items-center bg-gradient-to-r from-blue-600/35 via-blue-500/30 to-blue-400/25 backdrop-blur-md rounded-full px-4 py-2 mb-4 border border-blue-400/35 shadow-lg shadow-blue-500/20 custom-glow animate-fadeInUp transform-gpu">
          <div class="relative w-2 h-2 mr-2">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full custom-pulse"></div>
          </div>
          <span class="text-xs font-bold text-white tracking-wider">💎 VENTAJAS EXCLUSIVAS</span>
        </div>
        
        <!-- Título optimizado -->
        <div class="relative w-full mb-4">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-center w-full tracking-tight leading-tight animate-slideInLeft">
            <span class="relative inline-block">
              <span class="bg-gradient-to-r from-white via-blue-200 to-blue-100 bg-clip-text text-transparent relative z-20">
                ¿Por Qué Elegirnos?
              </span>
              
              <!-- Efectos de subrayado más compactos -->
              <div class="absolute -bottom-1 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full opacity-60 mt-1"></div>
            </span>
          </h2>
        </div>
        
        <!-- Subtítulo optimizado -->
        <div class="relative max-w-2xl mx-auto mb-6 animate-fadeInUp" style="animation-delay: 200ms">
          <p class="text-sm sm:text-base text-white/85 leading-relaxed text-center">
            Creamos 
            <span class="relative inline-block">
              <span class="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 bg-clip-text text-transparent font-bold">
                experiencias digitales
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-400/15 via-blue-300/15 to-blue-200/15 blur-sm -z-10 rounded-full"></div>
            </span>
            que impulsan tu negocio
          </p>
        </div>
      </div>

      <!-- Features Grid compacto -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full justify-items-center items-stretch relative mb-8 md:mb-10">
        
        <div v-for="(feature, index) in features" :key="index" 
             class="group relative w-full max-w-xs flex flex-col animate-fadeInUp transform-gpu"
             :style="{ animationDelay: `${150 + index * 60}ms` }">
          
          <!-- Efecto de iluminación al pasar el mouse -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-500/15 to-blue-400/12 rounded-xl transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:custom-glow-hover"></div>
          
          <!-- Tarjeta Principal compacta -->
          <div class="relative bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-blue-700/35 backdrop-blur-xl rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 transform group-hover:-translate-y-0.5 group-hover:shadow-lg group-hover:shadow-blue-500/10 shadow-md shadow-blue-500/5 overflow-hidden w-full flex flex-col flex-1">
            
            <!-- Luz superior que se intensifica en hover -->
            <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent rounded-t-xl group-hover:via-blue-400/50 transition-all duration-500"></div>
            
            <!-- Header compacto -->
            <div class="p-4 sm:p-5 text-center border-b border-blue-500/20 flex-shrink-0 flex flex-col items-center justify-center">
              
              <!-- Icono compacto -->
              <div class="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-3 transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-2 shadow group-hover:shadow-blue-500/15">
                <span class="text-2xl sm:text-3xl text-white">{{ feature.icon }}</span>
              </div>
              
              <h3 class="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-blue-50 transition-colors duration-300">{{ feature.title }}</h3>
              <p class="text-blue-200/60 font-medium text-xs tracking-wider group-hover:text-blue-100 transition-colors duration-300 uppercase">
                {{ feature.subtitle || 'VENTAJA PREMIUM' }}
              </p>
            </div>
            
            <!-- Descripción compacta -->
            <div class="p-4 sm:p-5 flex-grow relative flex items-center justify-center">
              <div class="relative w-full">
                <p class="text-white/70 text-xs sm:text-sm leading-relaxed text-center group-hover:text-white/80 transition-colors duration-300">
                  {{ feature.description }}
                </p>
              </div>
            </div>
            
            <!-- Línea de iluminación en hover -->
            <div class="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 flex-shrink-0">
              <div class="w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full transition-all duration-500 group-hover:w-full custom-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Technology & Promise Section compacta -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start w-full max-w-6xl mx-auto">
        
        <!-- Technology Stack compacto -->
        <div class="relative flex flex-col animate-fadeInUp" style="animation-delay: 400ms">
          <!-- Badge centrado y compacto -->
          <div class="inline-flex items-center bg-gradient-to-r from-blue-600/30 via-blue-500/25 to-blue-400/20 backdrop-blur-md rounded-full px-4 py-2 mb-3 border border-blue-400/30 shadow shadow-blue-500/10 w-full justify-center custom-glow transform-gpu">
            <div class="relative w-2 h-2 mr-2">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full custom-pulse"></div>
            </div>
            <span class="text-xs font-bold text-white tracking-wider">⚡ TECNOLOGÍA DE VANGUARDIA</span>
          </div>
          
          <!-- Título centrado y compacto -->
          <div class="relative mb-4 text-center">
            <h3 class="text-xl sm:text-2xl font-bold mb-2">
              <span class="relative">
                <span class="bg-gradient-to-r from-blue-300 via-blue-200 to-white bg-clip-text text-transparent">
                  Stack Tecnológico
                </span>
              </span>
            </h3>
            
            <p class="text-white/75 text-sm leading-relaxed max-w-xl mx-auto">
              Dominamos las tecnologías más demandadas para soluciones 
              <span class="relative inline-block">
                <span class="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 bg-clip-text text-transparent font-semibold">
                  robustas y modernas
                </span>
              </span>.
            </p>
          </div>
          
          <!-- Grid de tecnologías compacto -->
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-3 w-full">
            <div v-for="(tech, index) in technologies" :key="index" 
                 class="group relative flex flex-col items-center p-3 bg-gradient-to-br from-blue-900/35 via-blue-800/30 to-blue-700/25 backdrop-blur-xl rounded-lg border border-blue-500/25 hover:border-blue-400/40 transition-all duration-300 transform hover:-translate-y-0.5 animate-fadeInUp transform-gpu min-h-[100px]"
                 :style="{ animationDelay: `${500 + index * 40}ms` }">
                 
              <!-- Efecto de iluminación en hover -->
              <div class="absolute inset-0 bg-gradient-to-br from-blue-600/15 via-blue-500/12 to-blue-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:custom-glow-hover"></div>
              
              <!-- Icono compacto -->
              <div class="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500/50 to-blue-600/50 backdrop-blur-sm rounded-lg flex items-center justify-center mb-2 transform transition-all duration-300 group-hover:rotate-2 group-hover:scale-105 flex-shrink-0">
                <span class="text-lg sm:text-xl text-white">{{ tech.icon }}</span>
              </div>
              
              <!-- Contenido centrado -->
              <div class="relative z-10 w-full text-center">
                <div class="font-bold text-white text-sm mb-0.5 group-hover:text-blue-50 transition-colors duration-300 break-words whitespace-normal leading-tight">
                  {{ tech.name }}
                </div>
                <div class="text-blue-200/60 text-xs group-hover:text-blue-100/70 transition-colors duration-300">
                  {{ tech.category }}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Our Promise compacto -->
        <div class="relative flex flex-col animate-fadeInUp" style="animation-delay: 600ms">
          <!-- Badge centrado y compacto -->
          <div class="inline-flex items-center bg-gradient-to-r from-blue-600/30 via-blue-500/25 to-blue-400/20 backdrop-blur-md rounded-full px-4 py-2 mb-3 border border-blue-400/30 shadow shadow-blue-500/10 w-full justify-center custom-glow transform-gpu">
            <div class="relative w-2 h-2 mr-2">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full custom-pulse"></div>
            </div>
            <span class="text-xs font-bold text-white tracking-wider">💎 NUESTRA PROMESA</span>
          </div>
          
          <!-- Título centrado y compacto -->
          <div class="relative mb-4 text-center">
            <h4 class="text-xl sm:text-2xl font-bold mb-2">
              <span class="relative">
                <span class="bg-gradient-to-r from-white via-blue-200 to-blue-100 bg-clip-text text-transparent">
                  Compromiso Total
                </span>
              </span>
            </h4>
            
            <p class="text-white/75 text-sm leading-relaxed max-w-xl mx-auto">
              Construimos relaciones duraderas basadas en 
              <span class="relative inline-block">
                <span class="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 bg-clip-text text-transparent font-semibold">
                  confianza y resultados
                </span>
              </span>.
            </p>
          </div>
          
          <!-- Tarjeta de promesa compacta -->
          <div class="relative bg-gradient-to-br from-blue-900/35 via-blue-800/30 to-blue-700/35 backdrop-blur-xl rounded-xl border border-blue-400/35 overflow-hidden transform-gpu group hover:custom-glow-hover transition-all duration-500">
            
            <div class="relative z-10 p-4 sm:p-5">
              <!-- Promesas compactas -->
              <div class="space-y-3">
                <div v-for="(promise, index) in promises" :key="index" 
                     class="group/promise relative flex items-start p-3 bg-gradient-to-br from-blue-900/35 via-blue-800/25 to-blue-700/25 backdrop-blur-sm rounded-lg border border-blue-500/25 hover:border-blue-400/40 transition-all duration-300 transform hover:-translate-y-0.5 animate-fadeInUp transform-gpu"
                     :style="{ animationDelay: `${700 + index * 60}ms` }">
                     
                  <!-- Efecto de iluminación -->
                  <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-blue-500/8 to-blue-400/6 rounded-lg opacity-0 group-hover/promise:opacity-100 transition-all duration-500 group-hover/promise:custom-glow-hover"></div>
                     
                  <!-- Check compacto -->
                  <div class="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500/40 to-blue-600/40 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3 transform transition-all duration-300 group-hover/promise:rotate-2 group-hover/promise:scale-105 flex-shrink-0 mt-0.5">
                    <span class="text-blue-200 text-lg sm:text-xl">✓</span>
                  </div>
                  
                  <!-- Contenido compacto -->
                  <div class="flex-1 min-w-0">
                    <div class="font-bold text-white text-sm sm:text-base mb-1 group-hover/promise:text-blue-50 transition-colors duration-300">{{ promise.title }}</div>
                    <div class="text-blue-100/60 text-xs sm:text-sm group-hover/promise:text-blue-100/70 transition-colors duration-300 leading-relaxed">{{ promise.description }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Elemento decorativo final compacto -->
      <div class="mt-6 md:mt-8 animate-fadeInUp" style="animation-delay: 800ms">
        <div class="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mx-auto custom-pulse"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: '⚡',
    title: 'Desarrollo Express',
    subtitle: 'VELOCIDAD',
    description: 'Entregas rápidas sin comprometer calidad, con metodologías ágiles y procesos optimizados.'
  },
  {
    icon: '💎',
    title: 'Calidad Premium',
    subtitle: 'EXCELENCIA',
    description: 'Código limpio y arquitectura escalable con las mejores prácticas de desarrollo moderno.'
  },
  {
    icon: '🛡️',
    title: 'Soporte Continuo',
    subtitle: 'COMPROMISO',
    description: 'Soporte técnico post-entrega y actualizaciones periódicas para mantener tu sitio seguro.'
  },
  {
    icon: '🎯',
    title: 'Enfoque en ROI',
    subtitle: 'RESULTADOS',
    description: 'Desarrollo enfocado en tus objetivos de negocio y maximización de conversiones.'
  }
];

const technologies = [
  { icon: '🌐', name: 'HTML & CSS', category: 'Fundamentos' },
  { icon: '⚡', name: 'JavaScript', category: 'Lenguaje' },
  { icon: '⚛️', name: 'React', category: 'Frontend' },
  { icon: '🌀', name: 'Vue.js', category: 'Frontend' },
  { icon: '🚀', name: 'Express.js', category: 'Backend' },
  { icon: '▲', name: 'Next.js', category: 'Fullstack' },
  { icon: '📘', name: 'TypeScript', category: 'Tipado' },
  { icon: '🎨', name: 'Tailwind CSS', category: 'CSS' },
  { icon: '🏗️', name: 'Nest.js', category: 'Backend' }
];

const promises = [
  {
    title: 'Entrega Puntual',
    description: 'Cumplimos plazos sin excusas ni retrasos injustificados'
  },
  {
    title: 'Comunicación Clara',
    description: 'Canal abierto con updates semanales durante el proyecto'
  },
  {
    title: 'Satisfacción Garantizada',
    description: 'Trabajamos hasta tu 100% satisfacción con el resultado'
  },
  {
    title: 'Soporte Post-Entrega',
    description: 'No te abandonamos después del lanzamiento'
  }
];

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};
</script>

<style scoped>
/* Sistema de Animaciones optimizado */
@keyframes customFloat {
  0%, 100% { 
    transform: translateY(0); 
    opacity: 0.2;
  }
  50% { 
    transform: translateY(-6px); 
    opacity: 0.3;
  }
}

@keyframes customPulseSlow {
  0%, 100% { 
    opacity: 0.1; 
  }
  50% { 
    opacity: 0.2; 
  }
}

@keyframes customPulse {
  0%, 100% { 
    opacity: 0.7; 
  }
  50% { 
    opacity: 0.3; 
  }
}

@keyframes customGlow {
  0%, 100% { 
    box-shadow: 
      0 0 8px rgba(59, 130, 246, 0.15);
  }
  50% { 
    box-shadow: 
      0 0 12px rgba(59, 130, 246, 0.25);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Efecto de iluminación para hover optimizado */
@keyframes glowHover {
  0%, 100% { 
    box-shadow: 
      0 0 8px rgba(59, 130, 246, 0.1),
      inset 0 0 12px rgba(255, 255, 255, 0.02);
  }
  50% { 
    box-shadow: 
      0 0 15px rgba(59, 130, 246, 0.2),
      inset 0 0 18px rgba(255, 255, 255, 0.03);
  }
}

/* Clases de Animación optimizadas */
.custom-float {
  animation: customFloat 10s ease-in-out infinite;
}

.custom-pulse-slow {
  animation: customPulseSlow 3s ease-in-out infinite;
}

.custom-glow {
  animation: customGlow 2s ease-in-out infinite;
}

.custom-pulse {
  animation: customPulse 1.5s ease-in-out infinite;
}

.custom-delay-2500 {
  animation-delay: 2.5s;
}

/* Clase para efecto de iluminación en hover */
.custom-glow-hover {
  animation: glowHover 1.5s ease-in-out infinite;
}

/* Optimizaciones 3D */
.transform-gpu {
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}

/* Sistema Glassmorphism optimizado */
.backdrop-blur-xl {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.backdrop-blur-md {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.backdrop-blur-sm {
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

/* Transiciones optimizadas */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 250ms;
}

/* Animaciones de Entrada optimizadas */
.animate-slideInLeft {
  animation: slideInLeft 0.4s ease-out forwards;
  opacity: 0;
  animation-fill-mode: both;
}

.animate-fadeInUp {
  animation: fadeInUp 0.4s ease-out forwards;
  opacity: 0;
  animation-fill-mode: both;
}

/* Corrección para Gradientes de Texto */
.bg-clip-text {
  -webkit-background-clip: text !important;
  background-clip: text !important;
  color: transparent;
  display: inline-block;
}

/* Asegurar que los nombres de tecnologías se vean completos */
.break-words {
  word-break: break-word;
  overflow-wrap: break-word;
}

.whitespace-normal {
  white-space: normal;
}

/* Altura mínima para tarjetas de tecnología */
.min-h-\[100px\] {
  min-height: 100px;
}

/* Responsividad optimizada */
@media (max-width: 1024px) {
  .text-5xl {
    font-size: 2.75rem;
  }
  
  .text-4xl {
    font-size: 2.25rem;
  }
  
  .lg\:grid-cols-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .min-h-screen {
    min-height: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  
  .text-5xl {
    font-size: 2.25rem;
  }
  
  .text-4xl {
    font-size: 1.875rem;
  }
  
  .text-3xl {
    font-size: 1.625rem;
  }
  
  .lg\:grid-cols-4 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .lg\:grid-cols-2 {
    grid-template-columns: 1fr;
  }
  
  .lg\:grid-cols-3 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .gap-4 {
    gap: 1rem;
  }
  
  .mb-8 {
    margin-bottom: 2rem;
  }
}

@media (max-width: 640px) {
  .text-5xl {
    font-size: 2rem;
  }
  
  .text-4xl {
    font-size: 1.75rem;
  }
  
  .text-3xl {
    font-size: 1.5rem;
  }
  
  .text-2xl {
    font-size: 1.375rem;
  }
  
  .sm\:grid-cols-2,
  .lg\:grid-cols-4,
  .sm\:grid-cols-3,
  .lg\:grid-cols-3 {
    grid-template-columns: 1fr;
  }
  
  .grid-cols-2 {
    grid-template-columns: 1fr;
  }
  
  .gap-3 {
    gap: 0.75rem;
  }
  
  .min-h-\[100px\] {
    min-height: 90px;
  }
}

@media (max-width: 375px) {
  .text-5xl {
    font-size: 1.75rem;
  }
  
  .text-4xl {
    font-size: 1.5rem;
  }
  
  .px-4 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  
  .min-h-\[100px\] {
    min-height: 85px;
  }
}

/* Mejoras de rendimiento */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Asegura que todo el contenido esté centrado */
.flex-col.items-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Evita desbordamiento en títulos */
.leading-tight {
  line-height: 1.2;
}

/* Support for reduced motion */
@media (prefers-reduced-motion: reduce) {
  .custom-float,
  .custom-pulse-slow,
  .custom-glow,
  .custom-pulse,
  .custom-glow-hover,
  .animate-slideInLeft,
  .animate-fadeInUp {
    animation: none !important;
  }
  
  .group-hover\:scale-105,
  .group-hover\:-translate-y-0\.5,
  .group-hover\:rotate-2 {
    transform: none !important;
  }
}
</style>