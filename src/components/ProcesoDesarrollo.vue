<template>
  <section id="proceso" class="py-10 md:py-12 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden w-full flex justify-center">
    <!-- Efectos de fondo animados -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 -left-16 w-56 h-56 bg-gradient-to-br from-blue-500/15 to-blue-400/10 rounded-full blur-3xl custom-pulse-slow"></div>
      <div class="absolute bottom-1/3 -right-16 w-60 h-60 bg-gradient-to-br from-blue-500/15 to-blue-400/10 rounded-full blur-3xl custom-pulse-slow custom-delay-2000"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-600/5 to-blue-500/5 rounded-full blur-3xl custom-pulse-slow custom-delay-4000"></div>
      
      <!-- Partículas flotantes -->
      <div v-for="i in 12" :key="i" 
           class="absolute w-1 h-1 bg-blue-400/30 rounded-full custom-float"
           :style="`top: ${Math.random() * 100}%; left: ${Math.random() * 100}%; animation-delay: ${Math.random() * 5}s;`">
      </div>
    </div>

    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
      <!-- Section Header -->
      <div class="text-center mb-6 md:mb-10 w-full">
        <div class="inline-flex items-center bg-gradient-to-r from-blue-600/30 to-blue-500/30 backdrop-blur-xl rounded-full px-5 py-2.5 mb-3 border border-blue-400/40 shadow-custom-glow custom-glow">
          <div class="w-2.5 h-2.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mr-2.5 custom-pulse"></div>
          <span class="text-sm font-bold text-white tracking-wider">🚀 NUESTRO PROCESO</span>
        </div>
        
        <!-- Título optimizado -->
        <div class="relative w-full mb-4">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-center w-full tracking-tight leading-tight animate-slideInLeft">
            <span class="relative inline-block">
              <span class="bg-gradient-to-r from-white via-blue-200 to-blue-100 bg-clip-text text-transparent relative z-20">
                Metodología Probada
              </span>
              
              <!-- Efectos de subrayado más compactos -->
              <div class="absolute -bottom-1 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full opacity-60 mt-1"></div>
            </span>
          </h2>
        </div>
        
        <!-- Subtítulo optimizado -->
        <div class="relative max-w-2xl mx-auto mb-6 animate-fadeInUp" style="animation-delay: 200ms">
          <p class="text-sm sm:text-base text-white/85 leading-relaxed text-center">
            Un proceso estructurado 
            <span class="relative inline-block">
              <span class="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 bg-clip-text text-transparent font-bold">
                que garantiza el éxito de tu proyecto
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-400/15 via-blue-300/15 to-blue-200/15 blur-sm -z-10 rounded-full"></div>
            </span>
            desde el primer día hasta el lanzamiento
          </p>
        </div>
      </div>

      <!-- Contenedor de tarjetas mejorado -->
      <div class="relative w-full max-w-5xl mx-auto mb-6">
        <!-- Contenedor principal con tarjetas más juntas -->
        <div class="flex items-center justify-center h-[420px] md:h-[460px]">
          <!-- Botón izquierdo -->
          <button 
            @click="prevSlide"
            class="relative z-30 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-600/40 to-blue-500/30 backdrop-blur-xl rounded-xl border-2 border-blue-400/40 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:border-blue-300/60 group mr-2 md:mr-4 shadow-lg"
            :disabled="isAnimating"
          >
            <div class="w-7 h-7 bg-gradient-to-r from-blue-200 to-blue-100 rounded-lg flex items-center justify-center transform group-hover:-translate-x-1 transition-transform duration-300">
              <span class="text-lg md:text-xl font-bold text-blue-900">←</span>
            </div>
          </button>

          <!-- Contenedor de tarjetas - más juntas -->
          <div class="flex-1 relative flex items-center justify-center h-full">
            <!-- Tarjeta anterior -->
            <div 
              v-if="prevCard"
              class="absolute left-0 w-[240px] h-[340px] md:w-[280px] md:h-[380px] transition-all duration-700 z-20"
              :class="isAnimating ? 'opacity-70 -translate-x-10' : 'opacity-90'"
            >
              <div 
                class="w-full h-full bg-gradient-to-br from-blue-800/25 via-blue-900/20 to-blue-800/25 backdrop-blur-2xl rounded-2xl border-2 border-blue-400/30 shadow-xl p-5 transform-gpu hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer group flex flex-col items-center relative overflow-hidden"
                style="transform: rotateY(15deg) translateZ(-15px);"
                @click="prevSlide"
              >
                <!-- Efecto de luz 3D -->
                <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <!-- Número -->
                <div class="flex items-center justify-center mb-3 w-full relative">
                  <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white font-black text-lg md:text-xl shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                    {{ prevCard.number }}
                  </div>
                </div>
                
                <!-- Icono más grande -->
                <div class="flex justify-center mb-4 w-full">
                  <div class="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500/40 via-blue-600/50 to-blue-600/40 rounded-xl flex items-center justify-center border-2 border-blue-400/40 shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                    <span class="text-2xl md:text-3xl">{{ prevCard.icon }}</span>
                  </div>
                </div>
                
                <!-- Título más grande -->
                <h3 class="text-lg md:text-xl font-black text-white mb-2 text-center w-full group-hover:text-blue-200 transition-colors duration-300 px-3 whitespace-normal tracking-tight">
                  {{ prevCard.title }}
                </h3>
                
                <!-- Descripción -->
                <p class="text-white/85 leading-relaxed text-sm md:text-base text-center mb-4 min-h-[3rem] w-full px-3">
                  {{ prevCard.description }}
                </p>
                
                <!-- Características -->
                <ul class="space-y-1.5 text-white/80 w-full px-3">
                  <li v-for="(feature, featureIndex) in prevCard.features" :key="featureIndex" 
                      class="flex items-start justify-center">
                    <div class="w-2.5 h-2.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mr-2.5 mt-0.5 flex-shrink-0 shadow-sm"></div>
                    <span class="text-xs md:text-sm text-center flex-1">{{ feature }}</span>
                  </li>
                </ul>
                
                <!-- Efecto de borde brillante al pasar el mouse -->
                <div class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400/30 transition-all duration-500"></div>
              </div>
            </div>

            <!-- Tarjeta actual central - CON NÚMERO QUE GIRA 360° SUAVE -->
            <div 
              class="absolute left-1/2 transform -translate-x-1/2 w-[280px] h-[420px] md:w-[340px] md:h-[480px] z-30 transition-all duration-700"
              :class="isAnimating ? 'opacity-90 scale-95' : 'opacity-100 scale-100'"
            >
              <div 
                class="w-full h-full bg-gradient-to-br from-blue-700/50 via-blue-800/60 to-blue-900/50 backdrop-blur-2xl rounded-3xl border-3 border-blue-400/50 shadow-3d p-6 md:p-7 transform-gpu hover:scale-103 transition-all duration-500 group flex flex-col items-center relative overflow-hidden"
              >
                <!-- Efecto de luz superior -->
                <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-blue-400/70 to-transparent rounded-t-3xl custom-pulse"></div>
                
                <!-- Brillo interior -->
                <div class="absolute top-8 left-8 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-blue-400/5 rounded-full blur-xl"></div>
                
                <!-- Número destacado - AHORA GIRA 360° SUAVE AL PASAR EL MOUSE -->
                <div class="flex items-center justify-center mb-5 w-full relative">
                  <div class="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-black text-xl md:text-2xl shadow-custom custom-number-container">
                    {{ currentCard.number }}
                  </div>
                  <!-- Anillo decorativo -->
                  <div class="absolute inset-0 w-14 h-14 md:w-16 md:h-16 rounded-xl border-3 border-blue-400/30 custom-spin-slow"></div>
                </div>
                
                <!-- Icono grande y animado -->
                <div class="flex justify-center mb-5 w-full relative">
                  <div class="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500/60 via-blue-600/70 to-blue-600/60 rounded-2xl flex items-center justify-center border-3 border-blue-300/60 shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                    <span class="text-3xl md:text-4xl custom-bounce-slow">{{ currentCard.icon }}</span>
                  </div>
                  <!-- Brillo alrededor del icono -->
                  <div class="absolute inset-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl border-3 border-blue-400/20 custom-ping-slow"></div>
                </div>
                
                <!-- Título principal -->
                <h3 class="text-xl md:text-2xl font-black text-white mb-3 text-center w-full bg-gradient-to-r from-white via-blue-200 to-blue-100 bg-clip-text text-transparent px-4 whitespace-normal tracking-tight">
                  {{ currentCard.title }}
                </h3>
                
                <!-- Descripción -->
                <p class="text-white/95 leading-relaxed text-base md:text-lg text-center mb-5 min-h-[3.5rem] w-full px-4">
                  {{ currentCard.description }}
                </p>
                
                <!-- Características -->
                <ul class="space-y-2 text-white/90 w-full px-4 mb-6">
                  <li v-for="(feature, featureIndex) in currentCard.features" :key="featureIndex" 
                      class="flex items-start justify-center transform group-hover:translate-x-2 transition-transform duration-300"
                      :style="`transition-delay: ${featureIndex * 100}ms`">
                    <div class="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mr-2.5 mt-0.5 flex-shrink-0 shadow-md"></div>
                    <span class="text-sm md:text-base text-center flex-1 font-medium">{{ feature }}</span>
                  </li>
                </ul>
                
                <!-- ESPACIO ADICIONAL DEBAJO DE LAS FEATURES -->
                <div class="flex-1 min-h-[10px]"></div>
              </div>
            </div>

            <!-- Tarjeta siguiente -->
            <div 
              v-if="nextCard"
              class="absolute right-0 w-[240px] h-[340px] md:w-[280px] md:h-[380px] transition-all duration-700 z-20"
              :class="isAnimating ? 'opacity-70 translate-x-10' : 'opacity-90'"
            >
              <div 
                class="w-full h-full bg-gradient-to-br from-blue-800/25 via-blue-900/20 to-blue-800/25 backdrop-blur-2xl rounded-2xl border-2 border-blue-400/30 shadow-xl p-5 transform-gpu hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer group flex flex-col items-center relative overflow-hidden"
                style="transform: rotateY(-15deg) translateZ(-15px);"
                @click="nextSlide"
              >
                <!-- Efecto de luz 3D -->
                <div class="absolute inset-0 bg-gradient-to-tl from-transparent via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <!-- Número -->
                <div class="flex items-center justify-center mb-3 w-full relative">
                  <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white font-black text-lg md:text-xl shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                    {{ nextCard.number }}
                  </div>
                </div>
                
                <!-- Icono más grande -->
                <div class="flex justify-center mb-4 w-full">
                  <div class="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500/40 via-blue-600/50 to-blue-600/40 rounded-xl flex items-center justify-center border-2 border-blue-400/40 shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                    <span class="text-2xl md:text-3xl">{{ nextCard.icon }}</span>
                  </div>
                </div>
                
                <!-- Título más grande -->
                <h3 class="text-lg md:text-xl font-black text-white mb-2 text-center w-full group-hover:text-blue-200 transition-colors duration-300 px-3 whitespace-normal tracking-tight">
                  {{ nextCard.title }}
                </h3>
                
                <!-- Descripción -->
                <p class="text-white/85 leading-relaxed text-sm md:text-base text-center mb-4 min-h-[3rem] w-full px-3">
                  {{ nextCard.description }}
                </p>
                
                <!-- Características -->
                <ul class="space-y-1.5 text-white/80 w-full px-3">
                  <li v-for="(feature, featureIndex) in nextCard.features" :key="featureIndex" 
                      class="flex items-start justify-center">
                    <div class="w-2.5 h-2.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mr-2.5 mt-0.5 flex-shrink-0 shadow-sm"></div>
                    <span class="text-xs md:text-sm text-center flex-1">{{ feature }}</span>
                  </li>
                </ul>
                
                <!-- Efecto de borde brillante al pasar el mouse -->
                <div class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400/30 transition-all duration-500"></div>
              </div>
            </div>
          </div>

          <!-- Botón derecho -->
          <button 
            @click="nextSlide"
            class="relative z-30 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-600/40 to-blue-500/30 backdrop-blur-xl rounded-xl border-2 border-blue-400/40 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:border-blue-300/60 group ml-2 md:ml-4 shadow-lg"
            :disabled="isAnimating"
          >
            <div class="w-7 h-7 bg-gradient-to-r from-blue-200 to-blue-100 rounded-lg flex items-center justify-center transform group-hover:translate-x-1 transition-transform duration-300">
              <span class="text-lg md:text-xl font-bold text-blue-900">→</span>
            </div>
          </button>
        </div>

        <!-- Indicadores mejorados -->
        <div class="flex justify-center items-center mt-8 md:mt-10 space-x-2.5 md:space-x-3">
          <button 
            v-for="(step, index) in steps" 
            :key="index"
            @click="goToSlide(index)"
            class="relative w-3.5 h-3.5 md:w-4 md:h-4 rounded-full transition-all duration-500 group"
            :class="currentIndex === index ? 'scale-125' : ''"
          >
            <div 
              class="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full transition-all duration-500"
              :class="currentIndex === index ? 'opacity-100 shadow-md shadow-blue-500/60' : 'opacity-50 group-hover:opacity-80'"
            ></div>
            <div v-if="currentIndex === index" 
                 class="absolute inset-0 rounded-full custom-ping bg-blue-400/40"></div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const steps = [
  {
    number: 1,
    title: "Estrategia",
    icon: "💡",
    description: "Comprendemos tu negocio para una estrategia digital.",
    features: [
      "Análisis de competencia",
      "Definición de objetivos",
      "Planificación estratégica"
    ]
  },
  {
    number: 2,
    title: "Diseño",
    icon: "🎨",
    description: "Creamos diseños visualmente impactantes.",
    features: [
      "Wireframes y prototipos",
      "Diseño UI/UX personalizado",
      "Pruebas de usabilidad"
    ]
  },
  {
    number: 3,
    title: "Desarrollo",
    icon: "⚡",
    description: "Programamos tu sitio web con las mejores tecnologías.",
    features: [
      "Desarrollo frontend y backend",
      "Integración de funcionalidades",
      "Optimización SEO técnico"
    ]
  },
  {
    number: 4,
    title: "Lanzamiento",
    icon: "🚀",
    description: "Desplegamos tu sitio web.",
    features: [
      "Lanzamiento y deployment",
      "Monitoreo y analytics",
      "Soporte y mantenimiento"
    ]
  }
];

const currentIndex = ref(0);
const isAnimating = ref(false);
const autoRotateInterval = ref(null);

// Computed properties
const currentCard = computed(() => steps[currentIndex.value]);
const prevCard = computed(() => {
  const prevIndex = (currentIndex.value - 1 + steps.length) % steps.length;
  return steps[prevIndex];
});
const nextCard = computed(() => {
  const nextIndex = (currentIndex.value + 1) % steps.length;
  return steps[nextIndex];
});

// Navigation
const navigateToSlide = async (index) => {
  if (isAnimating.value || index === currentIndex.value) return;
  
  isAnimating.value = true;
  await new Promise(resolve => setTimeout(resolve, 400));
  currentIndex.value = index;
  await new Promise(resolve => setTimeout(resolve, 400));
  isAnimating.value = false;
};

const nextSlide = () => {
  const nextIndex = (currentIndex.value + 1) % steps.length;
  navigateToSlide(nextIndex);
};

const prevSlide = () => {
  const prevIndex = (currentIndex.value - 1 + steps.length) % steps.length;
  navigateToSlide(prevIndex);
};

const goToSlide = (index) => navigateToSlide(index);

// Auto-rotation
const startAutoRotate = () => {
  autoRotateInterval.value = setInterval(() => nextSlide(), 6000);
};
const stopAutoRotate = () => {
  if (autoRotateInterval.value) {
    clearInterval(autoRotateInterval.value);
    autoRotateInterval.value = null;
  }
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) element.scrollIntoView({ behavior: 'smooth' });
};

const handleInteraction = () => {
  stopAutoRotate();
  setTimeout(startAutoRotate, 15000);
};

onMounted(() => {
  startAutoRotate();
  const carouselContainer = document.querySelector('#proceso');
  if (carouselContainer) {
    carouselContainer.addEventListener('click', handleInteraction);
    carouselContainer.addEventListener('touchstart', handleInteraction);
  }
});

onUnmounted(() => {
  stopAutoRotate();
  const carouselContainer = document.querySelector('#proceso');
  if (carouselContainer) {
    carouselContainer.removeEventListener('click', handleInteraction);
    carouselContainer.removeEventListener('touchstart', handleInteraction);
  }
});
</script>

<style scoped>
/* Animaciones personalizadas */
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

@keyframes customSpinSlow {
  from { 
    transform: rotate(0deg); 
  }
  to { 
    transform: rotate(360deg); 
  }
}

@keyframes customPing {
  75%, 100% {
    transform: scale(1.3);
    opacity: 0;
  }
}

@keyframes customGlow {
  0%, 100% { 
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.3); 
  }
  50% { 
    box-shadow: 0 0 30px rgba(59, 130, 246, 0.5); 
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

@keyframes numberRotate360 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Clases de animación personalizadas */
.custom-float {
  animation: customFloat 8s ease-in-out infinite;
}

.custom-pulse-slow {
  animation: customPulseSlow 3s ease-in-out infinite;
}

.custom-bounce-slow {
  animation: customBounceSlow 2.5s ease-in-out infinite;
}

.custom-spin-slow {
  animation: customSpinSlow 8s linear infinite;
}

.custom-ping-slow {
  animation: customPing 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.custom-glow {
  animation: customGlow 2.5s ease-in-out infinite;
}

.custom-pulse {
  animation: customPulse 1.5s ease-in-out infinite;
}

.custom-delay-2000 {
  animation-delay: 1.5s;
}

.custom-delay-4000 {
  animation-delay: 3s;
}

/* Efectos personalizados */
.shadow-custom {
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

.shadow-3d {
  box-shadow: 0 20px 40px -10px rgba(59, 130, 246, 0.4), 
              inset 0 1px 0 0 rgba(255, 255, 255, 0.2);
}

.shadow-custom-glow {
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
}

.shadow-custom-hover {
  box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4);
}

.custom-glow-inner {
  box-shadow: inset 0 0 40px rgba(59, 130, 246, 0.3);
}

/* Mejoras 3D */
.transform-gpu {
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

/* NÚMERO QUE GIRA 360° - SOLUCIÓN FUNCIONAL */
.custom-number-container {
  transform-origin: center center;
  transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.group:hover .custom-number-container {
  animation: numberRotate360 0.7s ease-out forwards;
}

/* Asegurar que el número mantenga su posición centrada mientras gira */
.w-14, .w-16 {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Efecto de vidrio esmerilado mejorado */
.backdrop-blur-2xl {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

/* Sombra 3D mejorada */
.shadow-2xl {
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
}

/* Transiciones suaves */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Clases de utilidad para escalas específicas */
.hover\:scale-103:hover {
  transform: scale(1.03);
}

.hover\:scale-102:hover {
  transform: scale(1.02);
}

/* Ajustes para evitar que se corte la letra "G" */
.leading-tight {
  line-height: 1.1;
}

.pb-1 {
  padding-bottom: 0.25rem;
}

/* Ajustes responsive */
@media (max-width: 1024px) {
  .h-\[420px\] {
    height: 380px;
  }
  
  .h-\[460px\] {
    height: 420px;
  }
}

@media (max-width: 768px) {
  .h-\[420px\] {
    height: 340px;
  }
  
  .h-\[460px\] {
    height: 380px;
  }
  
  .w-\[240px\] {
    width: 200px;
  }
  
  .w-\[280px\] {
    width: 220px;
  }
  
  .w-\[340px\] {
    width: 260px;
  }
  
  .h-\[340px\] {
    height: 280px;
  }
  
  .h-\[380px\] {
    height: 320px;
  }
  
  .h-\[420px\] {
    height: 340px;
  }
  
  .h-\[480px\] {
    height: 400px;
  }
  
  .mr-4, .ml-4 {
    margin-right: 1rem;
    margin-left: 1rem;
  }
  
  /* Ajuste adicional para la letra "G" en móvil */
  .text-3xl {
    line-height: 1.15;
  }
}

@media (max-width: 640px) {
  .h-\[420px\] {
    height: 300px;
  }
  
  .h-\[460px\] {
    height: 340px;
  }
  
  .w-\[240px\] {
    width: 160px;
  }
  
  .w-\[280px\] {
    width: 180px;
  }
  
  .w-\[340px\] {
    width: 220px;
  }
  
  .h-\[340px\] {
    height: 240px;
  }
  
  .h-\[380px\] {
    height: 280px;
  }
  
  .h-\[420px\] {
    height: 280px;
  }
  
  .h-\[480px\] {
    height: 320px;
  }
  
  .w-12, .h-12 {
    width: 2.25rem;
    height: 2.25rem;
  }
  
  .text-3xl {
    font-size: 1.75rem;
    line-height: 1.2;
  }
  
  .text-xl {
    font-size: 1.25rem;
  }
  
  .text-lg {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .h-\[420px\] {
    height: 280px;
  }
  
  .h-\[460px\] {
    height: 300px;
  }
  
  .w-\[240px\] {
    width: 140px;
  }
  
  .w-\[280px\] {
    width: 150px;
  }
  
  .w-\[340px\] {
    width: 180px;
  }
  
  .h-\[340px\] {
    height: 220px;
  }
  
  .h-\[380px\] {
    height: 240px;
  }
  
  .h-\[420px\] {
    height: 240px;
  }
  
  .h-\[480px\] {
    height: 280px;
  }
  
  .text-3xl {
    font-size: 1.5rem;
    line-height: 1.25;
    padding-bottom: 0.125rem;
  }
  
  .text-2xl {
    font-size: 1.25rem;
  }
  
  .text-xl {
    font-size: 1.125rem;
  }
  
  .p-5 {
    padding: 1rem;
  }
  
  .p-6 {
    padding: 1.25rem;
  }
  
  .p-7 {
    padding: 1.5rem;
  }
  
  /* Ajuste extra para la "G" en pantallas muy pequeñas */
  h2 {
    padding-top: 0.125rem;
    padding-bottom: 0.25rem;
  }
}
</style>