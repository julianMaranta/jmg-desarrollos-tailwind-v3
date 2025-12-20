<template>
  <header id="inicio" class="min-h-[90vh] w-full bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden flex items-center justify-center">
    <!-- Sistema de Capas de Fondo Mejorado -->
    <div class="absolute inset-0 overflow-hidden w-full">
      <!-- Partículas flotantes - Más y más grandes -->
      <div v-for="i in 30" :key="i" 
           class="absolute w-2 h-2 bg-gradient-to-br from-blue-400/30 via-blue-500/25 to-blue-600/20 rounded-full custom-float"
           :style="{
             left: Math.random() * 100 + '%',
             top: Math.random() * 100 + '%',
             animationDelay: Math.random() * 6 + 's',
             animationDuration: 10 + Math.random() * 10 + 's'
           }">
      </div>
      
      <!-- Sistema de Orbes Mejorado -->
      <div class="absolute -top-56 -right-56 w-[700px] h-[700px] bg-gradient-to-br from-blue-600/25 via-blue-700/20 to-blue-500/15 rounded-full blur-3xl custom-pulse-slow"></div>
      <div class="absolute -bottom-56 -left-56 w-[700px] h-[700px] bg-gradient-to-br from-blue-700/25 via-blue-600/20 to-blue-800/15 rounded-full blur-3xl custom-pulse-slow custom-delay-2500"></div>
      
      <!-- Orbes medianos -->
      <div class="absolute top-1/3 left-1/4 w-48 h-48 bg-gradient-to-br from-blue-500/30 to-blue-600/25 rounded-full blur-2xl custom-float" style="animation-delay: 1.5s; animation-duration: 15s"></div>
      <div class="absolute bottom-1/4 right-1/3 w-40 h-40 bg-gradient-to-br from-blue-400/28 to-blue-500/20 rounded-full blur-2xl custom-float" style="animation-delay: 0.8s; animation-duration: 12s"></div>
      
      <!-- Patrón de cuadrícula mejorado -->
      <div class="absolute inset-0 opacity-[0.03] w-full">
        <div class="absolute inset-0 w-full" style="
          background-image: 
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 70px 70px;
        "></div>
      </div>
      
      <!-- Efecto de luz de escenario -->
      <div class="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-blue-900/50 via-blue-800/30 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-800/40 via-blue-700/25 to-transparent"></div>
    </div>
    
    <!-- Contenedor Principal -->
    <div class="w-full max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10 py-8 md:py-12 flex flex-col items-center">
      
      <!-- Contenido Principal con ESPACIO REDUCIDO -->
      <div class="w-full flex flex-col items-center space-y-4 md:space-y-6">
        
        <!-- Badge con menos espacio debajo -->
        <div class="inline-flex items-center bg-gradient-to-r from-blue-700/50 via-blue-600/45 to-blue-500/40 backdrop-blur-xl rounded-full px-5 py-2.5 mb-1 border border-blue-400/40 shadow-xl shadow-blue-500/25 custom-glow animate-fadeInUp transform-gpu">
          <div class="relative w-2.5 h-2.5 mr-3">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-200 rounded-full custom-pulse"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-200 rounded-full blur-xs opacity-60"></div>
          </div>
          <span class="text-xs font-bold text-white tracking-wider">🚀 LISTOS PARA IMPULSAR TU NEGOCIO</span>
          <div class="ml-3 w-1 h-5 bg-gradient-to-b from-blue-300/40 via-transparent to-blue-400/40 rounded-full"></div>
        </div>

        <!-- Título Principal con ESPACIO REDUCIDO ARRIBA -->
        <div class="relative w-full">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-black text-center w-full tracking-tight">
            
            <!-- Línea 1 con menos margen -->
            <div class="relative animate-slideInLeft">
              <span class="bg-gradient-to-r from-white via-blue-100 to-blue-50 bg-clip-text text-transparent relative z-10 pb-0.5 block leading-[1.05]">
                Impulsa Tu
              </span>
              <!-- Sombra de texto para profundidad -->
              <div class="absolute inset-0 text-5xl md:text-6xl lg:text-7xl font-black opacity-20 blur-sm transform translate-y-0.5 pb-0.5 leading-[1.05]"
                   style="background: linear-gradient(to right, white, blue-100, blue-50); -webkit-background-clip: text; background-clip: text; color: transparent;">
                Impulsa Tu
              </div>
            </div>
            
            <!-- Línea 2 - Ajustada para menos espacio -->
            <div class="relative animate-slideInRight" style="animation-delay: 300ms;">
              <span class="relative inline-block pb-2 pt-0">
                <span class="bg-gradient-to-r from-blue-50 via-blue-100 to-white bg-clip-text text-transparent relative z-20 leading-[1.1] tracking-tight block">
                  Negocio Digital
                </span>
                
                <!-- Efectos de subrayado ajustados -->
                <div class="absolute bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent"></div>
                <div class="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full opacity-70 blur-xs custom-pulse"></div>
                <div class="absolute -bottom-0.5 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent rounded-full"></div>
              </span>
              
              <!-- Sombra de texto para línea 2 - ajustada -->
              <div class="absolute inset-0 text-5xl md:text-6xl lg:text-7xl font-black opacity-15 blur-md transform translate-y-0.5 -z-10 pt-0 pb-2 leading-[1.1]"
                   style="background: linear-gradient(to right, blue-50, blue-100, white); -webkit-background-clip: text; background-clip: text; color: transparent;">
                Negocio Digital
              </div>
            </div>
          </h1>
        </div>

        <!-- Subtítulo PEGADO AL TÍTULO -->
        <div class="relative max-w-3xl mx-auto mb-3 animate-fadeInUp" style="animation-delay: 500ms">
          <p class="text-lg md:text-xl text-white/85 leading-relaxed text-center px-6 -mt-1">
            Creamos 
            <span class="relative inline-block mx-1">
              <span class="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 bg-clip-text text-transparent font-bold tracking-tight">
                experiencias web extraordinarias
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-300/25 via-blue-400/25 to-blue-500/25 blur-lg -z-10 rounded-full px-1"></div>
              <div class="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-300/50 via-blue-400/50 to-blue-500/50 rounded-full"></div>
            </span>
            que transforman visitantes en clientes leales
          </p>
          
          <!-- Línea decorativa más cerca -->
          <div class="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-300/50 to-transparent rounded-full"></div>
        </div>

        <!-- Botones CTA con Más Espacio -->
        <div class="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center w-full animate-fadeInUp mt-2" style="animation-delay: 700ms">
          
          <!-- Botón Primario Mejorado -->
          <button 
            @click="scrollToSection('servicios')"
            class="group relative bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-bold py-3 px-8 md:py-3.5 md:px-9 rounded-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-0.5 shadow-xl hover:shadow-2xl text-base md:text-base overflow-hidden transform-gpu"
          >
            <!-- Efecto de brillo sweep -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            
            <!-- Efecto de partículas en hover -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div v-for="i in 3" :key="i" 
                   class="absolute w-1 h-1 bg-white/40 rounded-full"
                   :style="{
                     left: Math.random() * 100 + '%',
                     top: Math.random() * 100 + '%',
                     animation: `sparkle 0.6s ease-out ${i * 0.15}s`
                   }"></div>
            </div>
            
            <span class="relative z-10 flex items-center justify-center">
              Explorar Servicios
              <span class="ml-2 text-lg transform transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
            
            <!-- Sistema de bordes animados -->
            <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-300/60 transition-all duration-500"></div>
          </button>
          
          <!-- Botón Secundario Mejorado -->
          <button 
            @click="scrollToSection('contacto')"
            class="group relative bg-gradient-to-r from-transparent via-blue-800/25 to-transparent border-2 border-blue-300/50 hover:border-blue-200/70 text-white hover:text-blue-100 font-bold py-3 px-8 md:py-3.5 md:px-9 rounded-xl transition-all duration-500 transform hover:scale-105 text-base md:text-base overflow-hidden backdrop-blur-xl transform-gpu"
          >
            <!-- Efecto de fondo animado -->
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-blue-600/15 to-blue-700/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Efecto de líneas interiores -->
            <div class="absolute inset-2 rounded-lg border border-blue-300/20 group-hover:border-blue-200/35 transition-all duration-300"></div>
            
            <span class="relative z-10 flex items-center justify-center">
              <span class="mr-2 text-lg transform transition-transform duration-300 group-hover:scale-110">💬</span>
              Contactar Ahora
            </span>
            
            <!-- Sistema de bordes exteriores -->
            <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-200/50 transition-all duration-500"></div>
          </button>
        </div>

        <!-- Stats con menos margen superior -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto w-full px-6 mt-6 md:mt-8 animate-fadeInUp" style="animation-delay: 900ms">
          <div v-for="(stat, index) in stats" :key="index" 
               class="group relative transform-gpu">
            
            <!-- Fondo animado que se ilumina en hover -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-700/25 via-blue-600/20 to-blue-500/15 rounded-xl transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:custom-glow-hover"></div>
            
            <!-- Efecto de luz adicional en hover -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-300/15 via-blue-400/12 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-sm"></div>
            
            <!-- Tarjeta Stat con Iluminación -->
            <div class="relative bg-gradient-to-br from-blue-900/45 via-blue-800/35 to-blue-700/30 backdrop-blur-xl rounded-xl border border-blue-400/35 hover:border-blue-300/60 p-4 md:p-5 transform transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:shadow-blue-400/25 shadow-lg shadow-blue-500/20">
              
              <!-- Luz superior que se intensifica en hover -->
              <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-300/50 to-transparent rounded-t-xl group-hover:via-blue-200/80 transition-all duration-500"></div>
              
              <div class="relative">
                <!-- Número animado con brillo en hover -->
                <div class="relative mb-2 md:mb-3">
                  <div class="text-2xl md:text-3xl lg:text-4xl font-black custom-stat-number leading-none" 
                       :data-target="stat.value.replace('+', '').replace(' HS', '')"
                       :class="stat.gradient">
                    {{ stat.value }}
                  </div>
                  
                  <!-- Efecto de brillo que aparece en hover -->
                  <div class="absolute inset-0 text-2xl md:text-3xl lg:text-4xl font-black opacity-0 blur-md transform scale-105 group-hover:opacity-20 transition-opacity duration-500"
                       :class="stat.gradient">
                    {{ stat.value }}
                  </div>
                  
                  <!-- Icono decorativo que brilla en hover -->
                  <div class="absolute -top-1 -right-1 md:-top-1.5 md:-right-1.5 w-6 h-6 md:w-7 md:h-7 bg-gradient-to-br from-blue-400/45 to-blue-300/35 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-300/35 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:border-blue-200/60">
                    <div class="w-1.5 h-1.5 bg-blue-200 rounded-full group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300"></div>
                  </div>
                </div>
                
                <!-- Label con efecto de brillo en hover -->
                <div class="text-white/90 text-xs md:text-sm font-semibold uppercase tracking-wide group-hover:text-white transition-colors duration-300">
                  <div class="flex items-center justify-center space-x-1 md:space-x-2">
                    <div class="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full group-hover:scale-125 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300"></div>
                    <span class="text-center">{{ stat.label }}</span>
                  </div>
                </div>
                
                <!-- Línea decorativa que aparece en hover -->
                <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 md:w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-300/40 to-transparent rounded-full mt-2 md:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <!-- Efecto de borde que brilla en hover -->
              <div class="absolute inset-0 rounded-xl border border-transparent group-hover:border-blue-300/30 group-hover:shadow-[0_0_20px_rgba(100,150,255,0.4)_inset] transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Elementos Flotantes Decorativos -->
    <div class="absolute top-20 left-20 w-5 h-5 bg-gradient-to-br from-blue-400/30 to-blue-500/20 rounded-full blur-sm custom-float" style="animation-delay: 2s; animation-duration: 8s"></div>
    <div class="absolute bottom-40 right-32 w-4 h-4 bg-gradient-to-br from-blue-300/25 to-blue-400/20 rounded-full blur-xs custom-float" style="animation-delay: 0.5s; animation-duration: 6s"></div>
  </header>
</template>

<script setup>
const stats = [
  { 
    value: '+15', 
    label: 'Proyectos Entregados',
    gradient: 'bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent'
  },
  { 
    value: '+10', 
    label: 'Clientes Satisfechos',
    gradient: 'bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent'
  },
  { 
    value: '24 HS', 
    label: 'Soporte Técnico',
    gradient: 'bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 bg-clip-text text-transparent'
  },
  { 
    value: '+5', 
    label: 'Años de Experiencia',
    gradient: 'bg-gradient-to-r from-blue-100 via-blue-200 to-white bg-clip-text text-transparent'
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

// Animación de contadores mejorada
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
          const duration = 1800;
          const startTime = Date.now();
          
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function para animación suave
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(easeOutQuart * target);
            
            counter.textContent = current + (counter.textContent.includes('+') ? '+' : 
                              (counter.textContent.includes('HS') ? ' HS' : ''));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              observer.unobserve(counter);
            }
          };
          
          requestAnimationFrame(animate);
        }
      }
    });
  }, { 
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });
  
  counters.forEach(counter => observer.observe(counter));
});
</script>

<style scoped>
/* Sistema de Animaciones Mejorado */
@keyframes customFloat {
  0%, 100% { 
    transform: translateY(0) rotate(0deg); 
    opacity: 0.3;
  }
  50% { 
    transform: translateY(-15px) rotate(180deg); 
    opacity: 0.6;
  }
}

@keyframes customPulseSlow {
  0%, 100% { 
    opacity: 0.3; 
    transform: scale(1);
  }
  50% { 
    opacity: 0.6; 
    transform: scale(1.03);
  }
}

@keyframes customPulse {
  0%, 100% { 
    opacity: 1; 
    transform: scale(1);
  }
  50% { 
    opacity: 0.6; 
    transform: scale(1.15);
  }
}

@keyframes customGlow {
  0%, 100% { 
    box-shadow: 
      0 0 20px rgba(100, 150, 255, 0.4),
      0 0 30px rgba(80, 120, 255, 0.2);
  }
  50% { 
    box-shadow: 
      0 0 30px rgba(120, 180, 255, 0.6),
      0 0 50px rgba(100, 160, 255, 0.3);
  }
}

@keyframes sparkle {
  0% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.5) rotate(180deg);
  }
  100% {
    opacity: 0;
    transform: scale(0) rotate(360deg);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Efecto especial de iluminación para hover */
@keyframes glowHover {
  0%, 100% { 
    box-shadow: 
      0 0 15px rgba(100, 150, 255, 0.3),
      inset 0 0 20px rgba(255, 255, 255, 0.05);
  }
  50% { 
    box-shadow: 
      0 0 25px rgba(120, 180, 255, 0.5),
      inset 0 0 30px rgba(255, 255, 255, 0.1);
  }
}

/* Clases de Animación Personalizadas */
.custom-float {
  animation: customFloat 15s ease-in-out infinite;
}

.custom-pulse-slow {
  animation: customPulseSlow 5s ease-in-out infinite;
}

.custom-glow {
  animation: customGlow 3.5s ease-in-out infinite;
}

.custom-pulse {
  animation: customPulse 2s ease-in-out infinite;
}

.custom-delay-2500 {
  animation-delay: 2.5s;
}

/* Clase para efecto de iluminación en hover */
.custom-glow-hover {
  animation: glowHover 2s ease-in-out infinite;
}

/* Optimizaciones 3D */
.transform-gpu {
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}

/* Sistema Glassmorphism */
.backdrop-blur-xl {
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

/* Transiciones Mejoradas */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
}

/* Animaciones de Entrada */
.animate-slideInLeft {
  animation: slideInLeft 0.7s ease-out forwards;
  opacity: 0;
  animation-fill-mode: both;
}

.animate-slideInRight {
  animation: slideInRight 0.7s ease-out forwards;
  opacity: 0;
  animation-fill-mode: both;
}

.animate-fadeInUp {
  animation: fadeInUp 0.7s ease-out forwards;
  opacity: 0;
  animation-fill-mode: both;
}

/* Efectos de Blur */
.blur-xs {
  filter: blur(4px);
}

.blur-sm {
  filter: blur(6px);
}

.blur-lg {
  filter: blur(12px);
}

/* CORRECCIONES ESPECÍFICAS APLICADAS */

/* Corrección específica para letras que descienden (g, j, p, q, y) */
.leading-\[1\.1\] {
  line-height: 1.1 !important;
}

.leading-\[1\.05\] {
  line-height: 1.05 !important;
}

/* Ajuste fino para el espaciado del título */
.tracking-tight {
  letter-spacing: -0.025em;
}

/* Optimización para el gradiente de texto */
.bg-clip-text {
  -webkit-background-clip: text !important;
  background-clip: text !important;
  color: transparent;
  display: inline-block;
  /* Previene cortes en letras descendentes */
  padding: 0.1em 0;
  margin: -0.1em 0;
}

/* Responsividad Mejorada */
@media (max-width: 1536px) {
  .text-7xl {
    font-size: 5rem;
  }
}

@media (max-width: 1280px) {
  .text-7xl {
    font-size: 4.25rem;
  }
  
  .text-6xl {
    font-size: 3.5rem;
  }
}

@media (max-width: 1024px) {
  .min-h-\[90vh\] {
    min-height: 85vh;
  }
  
  .text-7xl {
    font-size: 3.5rem;
  }
  
  .text-6xl {
    font-size: 3rem;
  }
  
  .text-5xl {
    font-size: 2.5rem;
  }
  
  .gap-4 {
    gap: 1rem;
  }
  
  .p-4 {
    padding: 1rem;
  }
  
  .p-5 {
    padding: 1.25rem;
  }
  
  .space-y-4 {
    gap: 1rem;
  }
  
  .space-y-6 {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .min-h-\[90vh\] {
    min-height: 80vh;
  }
  
  .text-7xl {
    font-size: 2.75rem;
  }
  
  .text-6xl {
    font-size: 2.5rem;
  }
  
  .text-5xl {
    font-size: 2.25rem;
  }
  
  .text-xl {
    font-size: 1.25rem;
  }
  
  .py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  
  .py-3\.5 {
    padding-top: 0.875rem;
    padding-bottom: 0.875rem;
  }
  
  .px-8 {
    padding-left: 1.75rem;
    padding-right: 1.75rem;
  }
  
  .px-9 {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  
  .grid-cols-4 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .gap-3 {
    gap: 0.75rem;
  }
  
  .gap-4 {
    gap: 0.75rem;
  }
  
  .space-y-4 {
    gap: 1rem;
  }
  
  .space-y-6 {
    gap: 1.25rem;
  }
  
  /* Ajustes específicos para móviles */
  .leading-\[1\.1\] {
    line-height: 1.05 !important;
  }
  
  .leading-\[1\.05\] {
    line-height: 1 !important;
  }
  
  .pb-2 {
    padding-bottom: 0.4rem;
  }
  
  .pt-0 {
    padding-top: 0;
  }
  
  .-mt-1 {
    margin-top: -0.2rem;
  }
  
  .mt-2 {
    margin-top: 0.5rem;
  }
  
  .mt-6 {
    margin-top: 1.25rem;
  }
}

@media (max-width: 640px) {
  .min-h-\[90vh\] {
    min-height: 85vh;
  }
  
  .text-7xl {
    font-size: 2.5rem;
  }
  
  .text-6xl {
    font-size: 2.25rem;
  }
  
  .text-5xl {
    font-size: 2rem;
  }
  
  .text-lg {
    font-size: 1.125rem;
  }
  
  .py-3 {
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
  }
  
  .py-3\.5 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  
  .px-8 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  
  .grid-cols-2 {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .space-y-4 {
    gap: 0.75rem;
  }
  
  .space-y-6 {
    gap: 1rem;
  }
  
  .-mt-1 {
    margin-top: -0.25rem;
  }
}

/* Corrección para móviles muy pequeños */
@media (max-width: 375px) {
  .text-7xl {
    font-size: 2.25rem;
  }
  
  .text-6xl {
    font-size: 2rem;
  }
  
  .text-5xl {
    font-size: 1.75rem;
  }
  
  .px-5 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .py-2\.5 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  
  .pb-2 {
    padding-bottom: 0.3rem;
  }
  
  .-mt-1 {
    margin-top: -0.3rem;
  }
  
  .mb-1 {
    margin-bottom: 0.1rem;
  }
}

/* Optimización para modo oscuro del sistema */
@media (prefers-color-scheme: dark) {
  .bg-gradient-to-br {
    color-scheme: dark;
  }
}

/* Mejoras de accesibilidad */
@media (prefers-reduced-motion: reduce) {
  .custom-float,
  .custom-pulse-slow,
  .custom-glow,
  .custom-pulse,
  .custom-glow-hover,
  .animate-slideInLeft,
  .animate-slideInRight,
  .animate-fadeInUp {
    animation: none !important;
    transition: none !important;
  }
  
  .group-hover\:scale-105,
  .group-hover\:scale-110,
  .group-hover\:-translate-y-1\.5,
  .group-hover\:rotate-12 {
    transform: none !important;
  }
}
</style>