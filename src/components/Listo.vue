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
          <span class="text-sm font-bold text-white tracking-wider">🚀 ANIMATE</span>
        </div>
        
        <!-- Título optimizado -->
        <div class="relative w-full mb-4">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-center w-full tracking-tight leading-tight animate-slideInLeft">
            <span class="relative inline-block">
              <span class="bg-gradient-to-r from-white via-blue-200 to-blue-100 bg-clip-text text-transparent relative z-20">
                Empecemos el proceso
              </span>
              
              <!-- Efectos de subrayado más compactos -->
              <div class="absolute -bottom-1 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full opacity-60 mt-1"></div>
            </span>
          </h2>
        </div>
        
        <!-- Subtítulo optimizado -->
        <div class="relative max-w-2xl mx-auto mb-6 animate-fadeInUp" style="animation-delay: 200ms">
          <p class="text-sm sm:text-base text-white/85 leading-relaxed text-center">
            Consultas y asesorías
            <span class="relative inline-block">
              <span class="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 bg-clip-text text-transparent font-bold">
                100% Gratis.
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-400/15 via-blue-300/15 to-blue-200/15 blur-sm -z-10 rounded-full"></div>
            </span>
            Envianos un mensaje!
          </p>
        </div>
      
      </div>
      

      <!-- CTA Section mejorada -->
      <div class="text-center mt-8 md:mt-10 w-full max-w-3xl mx-auto">
        <div class="bg-gradient-to-br from-blue-700/40 via-blue-800/50 to-blue-900/40 backdrop-blur-2xl rounded-3xl border-2 border-blue-400/40 shadow-xl p-6 md:p-7 w-full flex flex-col items-center justify-center transform hover:scale-102 transition-all duration-500 group">
          <!-- Efecto de borde animado -->
          <div class="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-400/30 transition-all duration-500"></div>
          
          <h3 class="text-xl md:text-2xl font-black text-white mb-3 text-center w-full bg-gradient-to-r from-white via-blue-200 to-blue-100 bg-clip-text text-transparent px-4">
            ¿Listo para Iniciar tu Proyecto?
          </h3>
          <p class="text-base md:text-lg text-white/85 mb-5 max-w-xl text-center">
            Sigue los pasos de más de 200 empresas exitosas que confiaron en nuestro proceso probado.
          </p>
          <div class="flex justify-center w-full">
            <button 
              @click="scrollToSection('contacto')"
              class="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-bold py-3.5 px-8 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-custom-hover text-base md:text-lg group overflow-hidden"
            >
              <!-- Efecto de brillo al pasar el mouse -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              <span class="flex items-center justify-center relative">
                Iniciar Proceso
                <span class="ml-2.5 text-xl custom-bounce-slow">🚀</span>
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