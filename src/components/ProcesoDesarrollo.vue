<template>
  <section id="proceso" class="py-6 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden w-full flex justify-center">
    <!-- Background simplificado sin animaciones -->
    <div class="absolute inset-0">
      <!-- Background estático -->
      <div class="absolute top-1/4 -left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-full blur-xl"></div>
      <div class="absolute bottom-1/4 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-blue-500/5 rounded-full blur-xl"></div>
    </div>

    <div class="w-full max-w-6xl mx-auto px-4 relative z-10 flex flex-col items-center">
      <!-- Section Header con padding para la "G" -->
      <div class="text-center mb-4 w-full flex flex-col items-center">
        <div class="inline-flex items-center bg-gradient-to-r from-blue-600/40 to-blue-800/40 backdrop-blur-lg rounded-full px-5 py-2 mb-3 border border-blue-400/30 shadow-lg">
          <div class="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mr-3"></div>
          <span class="text-sm font-bold text-white/90 tracking-wide">🔄 NUESTRO PROCESO</span>
        </div>
        
        <!-- Título con padding extra para la "G" -->
        <h2 class="text-2xl md:text-3xl font-black mb-2 bg-gradient-to-r from-white via-blue-200 to-blue-100 bg-clip-text text-transparent text-center w-full px-3 pb-0.5 pt-0.5 tracking-tight">
          Metodología Probada
        </h2>
        
        <p class="text-sm text-white/80 max-w-xl leading-relaxed text-center mx-auto px-2">
          Un proceso estructurado que garantiza el éxito de tu proyecto desde el primer día hasta el lanzamiento
        </p>
      </div>

      <!-- Carousel Container -->
      <div class="relative w-full max-w-6xl mx-auto">
        <!-- Contenedor principal -->
        <div class="flex items-center justify-center h-[400px] gap-4 md:gap-6">
          <!-- Botón izquierdo -->
          <button 
            @click="prevSlide"
            class="relative z-30 w-12 h-12 bg-gradient-to-br from-blue-600/50 to-blue-800/40 backdrop-blur-lg rounded-lg border border-blue-400/40 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            :disabled="isAnimating"
          >
            <span class="text-xl text-white group-hover:text-blue-200 transition-colors duration-300">←</span>
          </button>

          <!-- Contenedor de tarjetas -->
          <div class="flex-1 relative flex items-center justify-center h-full gap-4 md:gap-6">
            <!-- Card anterior (izquierda) -->
            <div 
              v-if="prevCard"
              class="absolute left-0 w-[250px] h-[320px] transition-all duration-500 z-20"
              :class="isAnimating ? 'opacity-60 translate-x-2' : 'opacity-90'"
              @click="prevSlide"
            >
              <div class="w-full h-full bg-gradient-to-br from-blue-800/30 to-blue-900/25 backdrop-blur-lg rounded-2xl border border-blue-400/35 shadow-lg p-5 transform perspective-1000 rotate-y-10 hover:rotate-y-5 hover:scale-105 transition-all duration-300 cursor-pointer group flex flex-col items-center">
                <!-- Brillo superior -->
                <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent rounded-t-2xl"></div>
                
                <!-- Número centrado -->
                <div class="flex items-center justify-center mb-3 w-full">
                  <div class="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white font-black text-base shadow-lg">
                    {{ prevCard.number }}
                  </div>
                </div>
                
                <!-- Icono centrado -->
                <div class="flex justify-center mb-3 w-full">
                  <div class="w-13 h-13 bg-gradient-to-br from-blue-500/35 to-blue-600/30 rounded-xl flex items-center justify-center border border-blue-400/35">
                    <span class="text-2xl">{{ prevCard.icon }}</span>
                  </div>
                </div>
                
                <!-- Título centrado - SIN line-clamp -->
                <h3 class="text-sm font-bold text-white mb-2 text-center w-full group-hover:text-blue-200 transition-colors duration-300 px-2 whitespace-normal">
                  {{ prevCard.title }}
                </h3>
                
                <!-- Descripción centrada - SIN SCROLL -->
                <p class="text-white/75 leading-snug text-xs text-center mb-3 min-h-[2.8rem] w-full px-2">
                  {{ prevCard.description }}
                </p>
                
                <!-- Características centradas -->
                <ul class="space-y-1 text-white/70 w-full px-2">
                  <li v-for="(feature, featureIndex) in prevCard.features" :key="featureIndex" 
                      class="flex items-start justify-center">
                    <div class="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mr-2 mt-0.5 flex-shrink-0"></div>
                    <span class="text-xs text-center flex-1">{{ feature }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Card actual (centro) -->
            <div 
              class="absolute left-1/2 transform -translate-x-1/2 w-[270px] h-[360px] z-30 transition-all duration-500"
              :class="isAnimating ? 'opacity-90 scale-95' : 'opacity-100 scale-100'"
            >
              <div class="w-full h-full bg-gradient-to-br from-blue-700/40 via-blue-800/50 to-blue-900/40 backdrop-blur-xl rounded-3xl border-2 border-blue-300/45 shadow-2xl p-6 transform perspective-1000 hover:scale-[1.02] transition-all duration-300 group flex flex-col items-center">
                <!-- Efecto de luz superior -->
                <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-300/60 to-transparent rounded-t-3xl"></div>
                
                <!-- Número centrado -->
                <div class="flex items-center justify-center mb-4 w-full">
                  <div class="w-11 h-11 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white font-black text-lg shadow-2xl">
                    {{ currentCard.number }}
                  </div>
                </div>
                
                <!-- Icono centrado -->
                <div class="flex justify-center mb-4 w-full">
                  <div class="w-15 h-15 bg-gradient-to-br from-blue-500/45 via-blue-600/55 to-blue-700/45 rounded-xl flex items-center justify-center border-2 border-blue-300/45">
                    <span class="text-2xl">{{ currentCard.icon }}</span>
                  </div>
                </div>
                
                <!-- Título centrado - SIN line-clamp -->
                <h3 class="text-base font-black text-white mb-3 text-center w-full bg-gradient-to-r from-white via-blue-200 to-blue-100 bg-clip-text text-transparent px-3 whitespace-normal tracking-tight">
                  {{ currentCard.title }}
                </h3>
                
                <!-- Descripción centrada - SIN SCROLL -->
                <p class="text-white/90 leading-snug text-sm text-center mb-4 min-h-[3.2rem] w-full px-3">
                  {{ currentCard.description }}
                </p>
                
                <!-- Características centradas -->
                <ul class="space-y-1.5 text-white/85 w-full px-3">
                  <li v-for="(feature, featureIndex) in currentCard.features" :key="featureIndex" 
                      class="flex items-start justify-center">
                    <div class="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mr-2 mt-0.5 flex-shrink-0"></div>
                    <span class="text-xs text-center flex-1">{{ feature }}</span>
                  </li>
                </ul>
                
                <!-- Indicador actual centrado -->
                <div class="mt-4 text-center w-full">
                  <div class="inline-flex items-center bg-blue-500/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-1.5"></div>
                    <span class="text-xs font-semibold text-blue-300">PASO ACTUAL</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card siguiente (derecha) -->
            <div 
              v-if="nextCard"
              class="absolute right-0 w-[250px] h-[320px] transition-all duration-500 z-20"
              :class="isAnimating ? 'opacity-60 -translate-x-2' : 'opacity-90'"
              @click="nextSlide"
            >
              <div class="w-full h-full bg-gradient-to-br from-blue-800/30 to-blue-900/25 backdrop-blur-lg rounded-2xl border border-blue-400/35 shadow-lg p-5 transform perspective-1000 -rotate-y-10 hover:-rotate-y-5 hover:scale-105 transition-all duration-300 cursor-pointer group flex flex-col items-center">
                <!-- Brillo superior -->
                <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent rounded-t-2xl"></div>
                
                <!-- Número centrado -->
                <div class="flex items-center justify-center mb-3 w-full">
                  <div class="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white font-black text-base shadow-lg">
                    {{ nextCard.number }}
                  </div>
                </div>
                
                <!-- Icono centrado -->
                <div class="flex justify-center mb-3 w-full">
                  <div class="w-13 h-13 bg-gradient-to-br from-blue-500/35 to-blue-600/30 rounded-xl flex items-center justify-center border border-blue-400/35">
                    <span class="text-2xl">{{ nextCard.icon }}</span>
                  </div>
                </div>
                
                <!-- Título centrado - SIN line-clamp -->
                <h3 class="text-sm font-bold text-white mb-2 text-center w-full group-hover:text-blue-200 transition-colors duration-300 px-2 whitespace-normal">
                  {{ nextCard.title }}
                </h3>
                
                <!-- Descripción centrada - SIN SCROLL -->
                <p class="text-white/75 leading-snug text-xs text-center mb-3 min-h-[2.8rem] w-full px-2">
                  {{ nextCard.description }}
                </p>
                
                <!-- Características centradas -->
                <ul class="space-y-1 text-white/70 w-full px-2">
                  <li v-for="(feature, featureIndex) in nextCard.features" :key="featureIndex" 
                      class="flex items-start justify-center">
                    <div class="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mr-2 mt-0.5 flex-shrink-0"></div>
                    <span class="text-xs text-center flex-1">{{ feature }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Botón derecho -->
          <button 
            @click="nextSlide"
            class="relative z-30 w-12 h-12 bg-gradient-to-br from-blue-600/50 to-blue-800/40 backdrop-blur-lg rounded-lg border border-blue-400/40 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            :disabled="isAnimating"
          >
            <span class="text-xl text-white group-hover:text-blue-200 transition-colors duration-300">→</span>
          </button>
        </div>

        <!-- Indicators -->
        <div class="flex justify-center items-center mt-6 space-x-2 md:space-x-3">
          <button 
            v-for="(step, index) in steps" 
            :key="index"
            @click="goToSlide(index)"
            class="relative w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 group"
            :class="currentIndex === index ? 'scale-125' : ''"
          >
            <div 
              class="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full transition-all duration-300"
              :class="currentIndex === index ? 'opacity-100 shadow-md shadow-blue-500/50' : 'opacity-40 group-hover:opacity-70'"
            ></div>
          </button>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center mt-6 w-full flex flex-col items-center justify-center">
        <div class="bg-gradient-to-br from-blue-700/40 via-blue-800/50 to-blue-900/40 backdrop-blur-xl rounded-3xl border border-blue-400/30 shadow-xl p-5 w-full max-w-2xl mx-auto flex flex-col items-center justify-center">
          <h3 class="text-lg md:text-xl font-black text-white mb-2 text-center w-full bg-gradient-to-r from-white via-blue-200 to-blue-100 bg-clip-text text-transparent px-4">
            ¿Listo para Iniciar tu Proyecto?
          </h3>
          <p class="text-xs md:text-sm text-white/80 mb-3 max-w-md text-center">
            Sigue los pasos de más de 200 empresas exitosas que confiaron en nuestro proceso probado.
          </p>
          <div class="flex justify-center w-full">
            <button 
              @click="scrollToSection('contacto')"
              class="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-bold py-2.5 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-xl text-sm"
            >
              <span class="flex items-center justify-center">
                Iniciar Proceso
                <span class="ml-2">🚀</span>
              </span>
            </button>
          </div>
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
  await new Promise(resolve => setTimeout(resolve, 300));
  currentIndex.value = index;
  await new Promise(resolve => setTimeout(resolve, 300));
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
  autoRotateInterval.value = setInterval(() => nextSlide(), 5000);
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
  setTimeout(startAutoRotate, 10000);
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
/* Efectos 3D simplificados */
.perspective-1000 {
  transform-style: preserve-3d;
  perspective: 1000px;
}

.rotate-y-10 {
  transform: rotateY(10deg);
}

.-rotate-y-10 {
  transform: rotateY(-10deg);
}

.rotate-y-5 {
  transform: rotateY(5deg);
}

.-rotate-y-5 {
  transform: rotateY(-5deg);
}

/* Ajuste para evitar que letras como la "G" se corten */
.text-center {
  text-align: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* Asegurar que todo el texto sea visible */
.whitespace-normal {
  white-space: normal;
}

/* Ajustes responsive */
@media (max-width: 768px) {
  .h-\[400px\] {
    height: 340px;
  }
  
  .w-\[250px\] {
    width: 210px;
  }
  
  .w-\[270px\] {
    width: 230px;
  }
  
  .h-\[320px\] {
    height: 280px;
  }
  
  .h-\[360px\] {
    height: 320px;
  }
  
  .gap-4 {
    gap: 0.75rem;
  }
  
  /* Botones más pequeños en móvil */
  .w-12 {
    width: 2rem;
  }
  
  .h-12 {
    height: 2rem;
  }
  
  /* Ajuste para la "G" en móvil */
  h2 {
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important;
  }
}

@media (max-width: 640px) {
  .h-\[400px\] {
    height: 300px;
  }
  
  .w-\[250px\] {
    width: 180px;
  }
  
  .w-\[270px\] {
    width: 200px;
  }
  
  .h-\[320px\] {
    height: 250px;
  }
  
  .h-\[360px\] {
    height: 290px;
  }
  
  .gap-4 {
    gap: 0.5rem;
  }
  
  .w-12 {
    width: 1.75rem;
  }
  
  .h-12 {
    height: 1.75rem;
  }
  
  /* Más padding para la "G" en pantallas muy pequeñas */
  h2 {
    padding-left: 0.75rem !important;
    padding-right: 0.75rem !important;
    font-size: 1.5rem !important;
    line-height: 1.2 !important;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 1.3rem !important;
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important;
  }
}
</style>