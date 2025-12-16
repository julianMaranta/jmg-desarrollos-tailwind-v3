<template>
  <header id="inicio" class="min-h-[80vh] w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden flex items-center justify-center">
    <!-- Animated Background -->
    <div class="absolute inset-0 overflow-hidden w-full">
      <!-- Floating Particles -->
      <div v-for="i in 20" :key="i" 
           class="absolute w-3 h-3 bg-white/10 rounded-full"
           :style="{
             left: Math.random() * 100 + '%',
             top: Math.random() * 100 + '%',
             animationDelay: Math.random() * 5 + 's',
             animationDuration: 3 + Math.random() * 2 + 's'
           }"
           :class="{'animate-float': true}">
      </div>
      
      <!-- Gradient Orbs -->
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style="animation-duration: 4s"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style="animation-duration: 6s"></div>
      <div class="absolute top-1/3 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl" style="animation: float 6s ease-in-out infinite; animation-delay: 1s"></div>
      <div class="absolute bottom-1/4 right-1/3 w-24 h-24 bg-blue-300/10 rounded-full blur-2xl" style="animation: float 4s ease-in-out infinite"></div>
      
      <!-- Grid Pattern -->
      <div class="absolute inset-0 opacity-10 w-full">
        <div class="absolute inset-0 w-full" style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
      </div>
    </div>
    
    <div class="w-full px-4 text-center relative z-10 py-8 flex flex-col items-center">
      <!-- Main Content -->
      <div class="w-full flex flex-col items-center animate-fadeInUp">
        <!-- Badge -->
        <div class="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mt-8 mb-4 border border-white/20 animate-pulse">
          <div class="w-2.5 h-2.5 bg-blue-400 rounded-full mr-2 animate-ping"></div>
          <span class="text-sm font-semibold text-white/80">🚀 Listos para impulsar tu negocio</span>
        </div>

        <!-- Main Heading -->
        <div class="w-full mb-3">
          <h1 class="text-3xl md:text-5xl lg:text-6xl font-black text-center w-full">
            <div class="block bg-gradient-to-r from-white via-blue-200 to-blue-100 bg-clip-text text-transparent mb-1 pb-0.5 animate-slideInLeft">
              Impulsa Tu
            </div>
            <div class="block bg-gradient-to-r from-blue-200 via-blue-100 to-white bg-clip-text text-transparent animate-slideInRight pb-2 pt-1" style="animation-delay: 300ms; line-height: 1.15;">
              Negocio Digital
            </div>
          </h1>
        </div>

        <!-- Subheading - EN UNA SOLA LÍNEA -->
        <p class="text-base md:text-lg lg:text-xl mb-6 text-white/80 max-w-6xl mx-auto leading-tight text-center w-full px-4 whitespace-nowrap animate-fadeInUp" style="animation-delay: 500ms">
          Creamos <span class="text-blue-300 font-semibold">experiencias web extraordinarias</span> que convierten visitantes en clientes leales
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mt-3 mb-3 w-full animate-fadeInUp" style="animation-delay: 700ms">
          <button 
            @click="scrollToSection('servicios')"
            class="group relative bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-4 px-10 rounded-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl text-base overflow-hidden"
          >
            <span class="relative z-10 flex items-center">
              Explorar Servicios
              <span class="ml-3 transform transition-transform duration-500 group-hover:translate-x-1">→</span>
            </span>
            <!-- ANIMACIÓN CORREGIDA - OCULTA COMPLETAMENTE ANTES DEL HOVER -->
            <div class="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-[110%] group-hover:translate-x-[110%] transition-transform duration-1000 opacity-0 group-hover:opacity-100"></div>
          </button>
          
          <button 
            @click="scrollToSection('contacto')"
            class="group relative bg-transparent border-2 border-white/30 hover:border-white text-white hover:bg-white/10 font-bold py-4 px-10 rounded-xl transition-all duration-500 transform hover:scale-105 text-base backdrop-blur-sm overflow-hidden"
          >
            <span class="relative z-10 flex items-center">
              <span class="mr-3">💬</span>
              Contactar Ahora
            </span>
            <div class="absolute inset-0 bg-white/5 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl"></div>
          </button>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto w-full px-4 mt-8 animate-fadeInUp" style="animation-delay: 1000ms">
          <div v-for="(stat, index) in stats" :key="index" 
               class="text-center transform transition-all duration-500 hover:scale-110 group">
            <div class="relative">
              <div class="text-2xl md:text-4xl font-black text-white mb-1" 
                   :data-target="stat.value"
                   :class="stat.gradient">
                {{ stat.value }}
              </div>
              <div class="absolute inset-0 text-2xl md:text-4xl font-black opacity-20 blur-sm group-hover:opacity-30 transition-opacity duration-500"
                   :class="stat.gradient">
                {{ stat.value }}
              </div>
            </div>
            <div class="text-white/60 text-xs font-semibold uppercase tracking-wider leading-tight mt-1">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Elements -->
    <div class="absolute top-12 left-12 w-4 h-4 bg-blue-400/20 rounded-full" style="animation: float 6s ease-in-out infinite; animation-delay: 2s"></div>
    <div class="absolute top-32 right-24 w-3 h-3 bg-blue-300/20 rounded-full" style="animation: float 4s ease-in-out infinite"></div>
    <div class="absolute bottom-32 left-24 w-4 h-4 bg-blue-200/20 rounded-full" style="animation: float 5s ease-in-out infinite; animation-delay: 1s"></div>
  </header>
</template>

<script setup>
const stats = [
  { 
    value: '+15', 
    label: 'Proyectos Entregados',
    gradient: 'bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent'
  },
  { 
    value: '+10', 
    label: 'Clientes Satisfechos',
    gradient: 'bg-gradient-to-r from-blue-300 to-blue-200 bg-clip-text text-transparent'
  },
  { 
    value: '24 HS', 
    label: 'Soporte Técnico',
    gradient: 'bg-gradient-to-r from-blue-200 to-blue-100 bg-clip-text text-transparent'
  },
  { 
    value: '+5', 
    label: 'Años de Experiencia',
    gradient: 'bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent'
  }
];

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Counter animation
import { onMounted } from 'vue';

onMounted(() => {
  const counters = document.querySelectorAll('.animate-count-up');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            counter.textContent = target + (counter.textContent.includes('%') ? '%' : '+');
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(current) + (counter.textContent.includes('%') ? '%' : '+');
          }
        }, 16);
        
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => observer.observe(counter));
});
</script>