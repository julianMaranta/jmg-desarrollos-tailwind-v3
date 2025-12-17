<template>
  <header id="inicio" class="min-h-[75vh] w-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden flex items-center justify-center pt-8">
    <!-- Background animado con los mismos efectos -->
    <div class="absolute inset-0 overflow-hidden w-full">
      <!-- Partículas flotantes mejoradas -->
      <div v-for="i in 20" :key="i" 
           class="absolute w-1.5 h-1.5 bg-blue-400/30 rounded-full custom-float"
           :style="{
             left: Math.random() * 100 + '%',
             top: Math.random() * 100 + '%',
             animationDelay: Math.random() * 5 + 's'
           }">
      </div>
      
      <!-- Orbes de gradiente mejorados -->
      <div class="absolute -top-32 -right-32 w-72 h-72 bg-gradient-to-br from-blue-600/15 to-purple-600/15 rounded-full blur-3xl custom-pulse-slow"></div>
      <div class="absolute -bottom-32 -left-32 w-72 h-72 bg-gradient-to-br from-purple-600/15 to-blue-500/15 rounded-full blur-3xl custom-pulse-slow custom-delay-2000"></div>
      <div class="absolute top-1/3 left-1/4 w-36 h-36 bg-gradient-to-br from-cyan-500/10 to-blue-500/8 rounded-full blur-xl" style="animation: customFloat 8s ease-in-out infinite; animation-delay: 1s"></div>
      <div class="absolute bottom-1/4 right-1/3 w-28 h-28 bg-gradient-to-br from-blue-400/10 to-purple-400/8 rounded-full blur-xl" style="animation: customFloat 6s ease-in-out infinite; animation-delay: 0.5s"></div>
      
      <!-- Patrón de cuadrícula sutil -->
      <div class="absolute inset-0 opacity-3 w-full">
        <div class="absolute inset-0 w-full" style="
          background-image: 
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        "></div>
      </div>
    </div>
    
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 text-center relative z-10 py-6 flex flex-col items-center">
      <!-- Main Content -->
      <div class="w-full flex flex-col items-center animate-fadeInUp">
        <!-- Badge mejorado - CON MÁS ESPACIO ARRIBA -->
        <div class="inline-flex items-center bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-xl rounded-full px-5 py-2.5 mb-6 mt-4 border border-blue-400/40 shadow-custom-glow custom-glow animate-fadeInUp">
          <div class="w-2.5 h-2.5 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full mr-2.5 custom-pulse"></div>
          <span class="text-xs font-bold text-white tracking-wider">🚀 LISTOS PARA IMPULSAR TU NEGOCIO</span>
        </div>

        <!-- Main Heading - TÍTULO CORREGIDO -->
        <div class="w-full mb-4">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-black text-center w-full tracking-tight">
            <div class="block mb-2 animate-slideInLeft leading-tight">
              <span class="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                Impulsa Tu
              </span>
            </div>
            <div class="block animate-slideInRight leading-tight" style="animation-delay: 300ms;">
              <span class="relative">
                <span class="bg-gradient-to-r from-blue-200 via-cyan-100 to-white bg-clip-text text-transparent">
                  Negocio Digital
                </span>
                <!-- Efecto de subrayado animado - más sutil -->
                <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent rounded-full mt-0.5"></div>
                <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-0.5 opacity-60 blur-xs custom-pulse"></div>
              </span>
            </div>
          </h1>
        </div>

        <!-- Subheading - TAMAÑOS REDUCIDOS -->
        <p class="text-base md:text-lg lg:text-xl mb-6 text-white/90 max-w-3xl mx-auto leading-relaxed text-center w-full px-4 animate-fadeInUp" style="animation-delay: 500ms">
          Creamos <span class="relative">
            <span class="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-bold tracking-tight px-0.5">
              experiencias web extraordinarias
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-400/15 via-blue-400/15 to-purple-400/15 blur-md -z-10"></div>
          </span> que convierten visitantes en clientes leales
        </p>

        <!-- CTA Buttons - TAMAÑOS REDUCIDOS -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4 mb-4 w-full animate-fadeInUp" style="animation-delay: 700ms">
          <button 
            @click="scrollToSection('servicios')"
            class="group relative bg-gradient-to-r from-cyan-600 via-blue-700 to-purple-700 hover:from-cyan-700 hover:via-blue-800 hover:to-purple-800 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-custom-hover text-base overflow-hidden"
          >
            <!-- Efecto de brillo al pasar el mouse -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            
            <span class="relative z-10 flex items-center justify-center">
              Explorar Servicios
              <span class="ml-2.5 text-lg transform transition-transform duration-500 group-hover:translate-x-1">→</span>
            </span>
            
            <!-- Borde brillante al pasar el mouse -->
            <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-cyan-400/40 transition-all duration-500"></div>
          </button>
          
          <button 
            @click="scrollToSection('contacto')"
            class="group relative bg-gradient-to-r from-transparent via-blue-900/15 to-transparent border-2 border-cyan-400/30 hover:border-cyan-300 text-white hover:text-cyan-100 font-bold py-3.5 px-8 rounded-xl transition-all duration-500 transform hover:scale-105 text-base backdrop-blur-xl overflow-hidden"
          >
            <!-- Efecto de fondo al pasar el mouse -->
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/8 via-blue-500/8 to-purple-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <span class="relative z-10 flex items-center justify-center">
              <span class="mr-2.5 text-lg transform transition-transform duration-500 group-hover:scale-105">💬</span>
              Contactar Ahora
            </span>
            
            <!-- Anillo de expansión -->
            <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-cyan-300/20 transition-all duration-500"></div>
          </button>
        </div>

        <!-- Stats - TAMAÑOS REDUCIDOS -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto w-full px-4 mt-6 animate-fadeInUp" style="animation-delay: 1000ms">
          <div v-for="(stat, index) in stats" :key="index" 
               class="text-center transform transition-all duration-500 hover:scale-105 group relative">
            <!-- Carta 3D para cada stat - más compacta -->
            <div class="relative bg-gradient-to-br from-blue-800/20 via-blue-900/15 to-purple-900/20 backdrop-blur-xl rounded-xl border-2 border-blue-400/30 p-4 transform-gpu hover:shadow-xl transition-all duration-500">
              <!-- Efecto de luz superior -->
              <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent rounded-t-xl"></div>
              
              <div class="relative">
                <!-- Número animado -->
                <div class="text-2xl md:text-3xl font-black mb-1.5 custom-stat-number" 
                     :data-target="stat.value.replace('+', '').replace(' HS', '')"
                     :class="stat.gradient">
                  {{ stat.value }}
                </div>
                
                <!-- Efecto de brillo detrás -->
                <div class="absolute inset-0 text-2xl md:text-3xl font-black opacity-20 blur-sm group-hover:opacity-25 transition-opacity duration-500 transform group-hover:scale-105"
                     :class="stat.gradient">
                  {{ stat.value }}
                </div>
                
                <!-- Icono decorativo -->
                <div class="absolute -top-1.5 -right-1.5 w-6 h-6 bg-gradient-to-br from-cyan-500/25 to-blue-500/15 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-400/25">
                  <div class="w-1.5 h-1.5 bg-cyan-300 rounded-full"></div>
                </div>
              </div>
              
              <!-- Label mejorado -->
              <div class="text-white/80 text-xs font-semibold uppercase tracking-wider leading-tight mt-1.5">
                <div class="flex items-center justify-center">
                  <div class="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-1.5"></div>
                  {{ stat.label }}
                </div>
              </div>
              
              <!-- Efecto de borde al pasar el mouse -->
              <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-cyan-400/20 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Flecha de scroll - más pequeña -->
    <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce-slow cursor-pointer" @click="scrollToSection('proceso')">
      <div class="w-10 h-10 bg-gradient-to-br from-blue-600/30 to-purple-600/20 backdrop-blur-xl rounded-lg border-2 border-cyan-400/30 flex items-center justify-center group hover:scale-110 transition-all duration-300">
        <div class="w-5 h-5 bg-gradient-to-r from-blue-200 to-cyan-100 rounded flex items-center justify-center transform group-hover:translate-y-0.5 transition-transform duration-300">
          <span class="text-sm font-bold text-blue-900">↓</span>
        </div>
      </div>
    </div>

    <!-- Elementos flotantes mejorados - menos numerosos -->
    <div class="absolute top-16 left-16 w-4 h-4 bg-gradient-to-br from-cyan-500/15 to-blue-500/8 rounded-full" style="animation: customFloat 8s ease-in-out infinite; animation-delay: 2s"></div>
    <div class="absolute bottom-32 right-24 w-3 h-3 bg-gradient-to-br from-blue-400/15 to-purple-400/8 rounded-full" style="animation: customFloat 6s ease-in-out infinite; animation-delay: 0.5s"></div>
  </header>
</template>

<script setup>
const stats = [
  { 
    value: '+15', 
    label: 'Proyectos Entregados',
    gradient: 'bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'
  },
  { 
    value: '+10', 
    label: 'Clientes Satisfechos',
    gradient: 'bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 bg-clip-text text-transparent'
  },
  { 
    value: '24 HS', 
    label: 'Soporte Técnico',
    gradient: 'bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 bg-clip-text text-transparent'
  },
  { 
    value: '+5', 
    label: 'Años de Experiencia',
    gradient: 'bg-gradient-to-r from-blue-200 via-cyan-100 to-white bg-clip-text text-transparent'
  }
];

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Animación de contadores
import { onMounted } from 'vue';

onMounted(() => {
  const counters = document.querySelectorAll('.custom-stat-number');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const targetText = counter.getAttribute('data-target');
        const target = parseInt(targetText);
        
        if (!isNaN(target)) {
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;
          
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              counter.textContent = target + (counter.textContent.includes('+') ? '+' : (counter.textContent.includes('HS') ? ' HS' : ''));
              clearInterval(timer);
            } else {
              counter.textContent = Math.floor(current) + (counter.textContent.includes('+') ? '+' : (counter.textContent.includes('HS') ? ' HS' : ''));
            }
          }, 16);
          
          observer.unobserve(counter);
        }
      }
    });
  }, { threshold: 0.3 });
  
  counters.forEach(counter => observer.observe(counter));
});
</script>

<style scoped>
/* Reutilizando las mismas animaciones de la sección proceso */
@keyframes customFloat {
  0%, 100% { 
    transform: translateY(0) rotate(0deg); 
    opacity: 0.3;
  }
  50% { 
    transform: translateY(-15px) rotate(180deg); 
    opacity: 0.7;
  }
}

@keyframes customPulseSlow {
  0%, 100% { 
    opacity: 0.5; 
  }
  50% { 
    opacity: 1; 
  }
}

@keyframes customBounceSlow {
  0%, 100% { 
    transform: translateY(0); 
  }
  50% { 
    transform: translateY(-8px); 
  }
}

@keyframes customPulse {
  0%, 100% { 
    opacity: 1; 
  }
  50% { 
    opacity: 0.5; 
  }
}

@keyframes customGlow {
  0%, 100% { 
    box-shadow: 0 0 15px rgba(0, 150, 255, 0.3); 
  }
  50% { 
    box-shadow: 0 0 30px rgba(0, 200, 255, 0.5); 
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Clases de animación personalizadas */
.custom-float {
  animation: customFloat 10s ease-in-out infinite;
}

.custom-pulse-slow {
  animation: customPulseSlow 4s ease-in-out infinite;
}

.custom-bounce-slow {
  animation: customBounceSlow 2.5s ease-in-out infinite;
}

.custom-glow {
  animation: customGlow 2.5s ease-in-out infinite;
}

.custom-pulse {
  animation: customPulse 1.5s ease-in-out infinite;
}

.custom-delay-2000 {
  animation-delay: 2s;
}

/* Efectos personalizados */
.shadow-custom-glow {
  box-shadow: 0 0 15px rgba(0, 150, 255, 0.3);
}

.shadow-custom-hover {
  box-shadow: 0 15px 30px rgba(0, 150, 255, 0.4);
}

/* Mejoras 3D */
.transform-gpu {
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}

/* Efecto de vidrio esmerilado mejorado */
.backdrop-blur-xl {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

/* Transiciones suaves */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Animaciones de entrada */
.animate-slideInLeft {
  animation: slideInLeft 0.8s ease-out forwards;
}

.animate-slideInRight {
  animation: slideInRight 0.8s ease-out forwards;
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  animation-fill-mode: forwards;
}

/* Efecto blur para texto */
.blur-xs {
  filter: blur(3px);
}

/* CORRECCIÓN CRÍTICA PARA bg-clip-text */
.bg-clip-text {
  -webkit-background-clip: text !important;
  background-clip: text !important;
  color: transparent;
}

/* Asegurar que los gradientes de texto funcionen */
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

/* Ajustes para responsividad */
@media (max-width: 768px) {
  .min-h-\[75vh\] {
    min-height: 70vh;
  }
  
  .pt-8 {
    padding-top: 1.5rem;
  }
  
  .mt-4 {
    margin-top: 0.75rem;
  }
  
  .text-3xl {
    font-size: 2rem;
  }
  
  .text-4xl {
    font-size: 2.25rem;
  }
  
  .text-5xl {
    font-size: 2.5rem;
  }
  
  .text-base {
    font-size: 0.95rem;
  }
  
  .text-lg {
    font-size: 1.05rem;
  }
  
  .text-xl {
    font-size: 1.15rem;
  }
  
  .py-3\.5 {
    padding-top: 0.875rem;
    padding-bottom: 0.875rem;
  }
  
  .px-8 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  
  .p-4 {
    padding: 1rem;
  }
  
  .text-2xl {
    font-size: 1.5rem;
  }
  
  .text-3xl {
    font-size: 1.75rem;
  }
  
  .mt-6 {
    margin-top: 1rem;
  }
  
  .mb-4 {
    margin-bottom: 0.75rem;
  }
  
  .gap-4 {
    gap: 0.75rem;
  }
}

@media (max-width: 640px) {
  .min-h-\[75vh\] {
    min-height: 65vh;
  }
  
  .pt-8 {
    padding-top: 1rem;
  }
  
  .mt-4 {
    margin-top: 0.5rem;
  }
  
  .text-3xl {
    font-size: 1.75rem;
  }
  
  .text-4xl {
    font-size: 2rem;
  }
  
  .text-5xl {
    font-size: 2.25rem;
  }
  
  .text-base {
    font-size: 0.9rem;
  }
  
  .text-lg {
    font-size: 1rem;
  }
  
  .text-xl {
    font-size: 1.1rem;
  }
  
  .py-3\.5 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  
  .px-8 {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
  
  .p-4 {
    padding: 0.875rem;
  }
  
  .text-2xl {
    font-size: 1.375rem;
  }
  
  .text-3xl {
    font-size: 1.625rem;
  }
  
  .mt-6 {
    margin-top: 0.75rem;
  }
  
  .mb-4 {
    margin-bottom: 0.5rem;
  }
  
  .gap-4 {
    gap: 0.5rem;
  }
  
  .w-10 {
    width: 2rem;
  }
  
  .h-10 {
    height: 2rem;
  }
  
  .bottom-6 {
    bottom: 1rem;
  }
}
</style>