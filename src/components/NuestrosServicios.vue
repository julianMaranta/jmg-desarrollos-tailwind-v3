<template>
  <section id="servicios" class="min-h-screen w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden flex items-center justify-center py-12">
    <!-- Background Elements Modernizados - Consistentes con Header -->
    <div class="absolute inset-0 overflow-hidden w-full">
      <!-- Partículas flotantes - Más y más grandes -->
      <div v-for="i in 30" :key="i" 
           class="absolute w-2 h-2 bg-gradient-to-br from-blue-400/30 via-blue-300/25 to-blue-200/20 rounded-full custom-float"
           :style="{
             left: Math.random() * 100 + '%',
             top: Math.random() * 100 + '%',
             animationDelay: Math.random() * 6 + 's',
             animationDuration: 10 + Math.random() * 10 + 's'
           }">
      </div>
      
      <!-- Sistema de Orbes Mejorado -->
      <div class="absolute -top-56 -left-56 w-[700px] h-[700px] bg-gradient-to-br from-blue-600/20 via-blue-500/15 to-blue-400/12 rounded-full blur-3xl custom-pulse-slow"></div>
      <div class="absolute -bottom-56 -right-56 w-[700px] h-[700px] bg-gradient-to-br from-blue-600/20 via-blue-500/15 to-blue-400/12 rounded-full blur-3xl custom-pulse-slow custom-delay-2500"></div>
      
      <!-- Orbes medianos -->
      <div class="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-blue-500/25 to-blue-400/18 rounded-full blur-2xl custom-float" style="animation-delay: 1.5s; animation-duration: 15s"></div>
      <div class="absolute bottom-1/3 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-400/22 to-blue-300/16 rounded-full blur-2xl custom-float" style="animation-delay: 0.8s; animation-duration: 12s"></div>
      
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
      <div class="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-blue-900/40 via-blue-800/20 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-800/35 via-blue-700/20 to-transparent"></div>
    </div>
    
    <!-- Contenedor Principal con Más Espacio -->
    <div class="w-full max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10 py-8 flex flex-col items-center">
      
      <!-- Section Header Mejorado - Título en una línea -->
      <div class="text-center w-full flex flex-col items-center mb-12 animate-fadeInUp">
        <!-- Badge Premium Mejorado -->
        <div class="inline-flex items-center bg-gradient-to-r from-blue-600/40 via-blue-500/35 to-blue-400/30 backdrop-blur-xl rounded-full px-5 py-2.5 mb-6 border border-blue-400/40 shadow-xl shadow-blue-500/25 custom-glow animate-fadeInUp transform-gpu">
          <div class="relative w-2.5 h-2.5 mr-3">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full custom-pulse"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full blur-xs opacity-60"></div>
          </div>
          <span class="text-xs font-bold text-white tracking-wider">💎 PLANES EXCLUSIVOS</span>
          <div class="ml-3 w-1 h-5 bg-gradient-to-b from-blue-400/40 via-transparent to-blue-300/40 rounded-full"></div>
        </div>
        
        <!-- Título en una sola línea -->
        <div class="relative w-full mb-6">
          <h2 class="text-5xl md:text-6xl lg:text-7xl font-black text-center w-full tracking-tight leading-snug animate-slideInLeft">
            <span class="relative inline-block">
              <span class="bg-gradient-to-r from-white via-blue-200 to-blue-100 bg-clip-text text-transparent relative z-20">
                Servicios Premium
              </span>
              
              <!-- Sistema de efectos de subrayado -->
              <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mt-1"></div>
              <div class="absolute -bottom-1 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full opacity-60 blur-xs custom-pulse mt-1"></div>
              <div class="absolute -bottom-0.5 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-300/30 to-transparent rounded-full mt-1"></div>
              
              <!-- Efectos de partículas alrededor del texto -->
              <div class="absolute -top-2 -left-2 w-2 h-2 bg-blue-400/30 rounded-full custom-pulse" style="animation-delay: 0.5s"></div>
              <div class="absolute -top-2 -right-2 w-2 h-2 bg-blue-300/30 rounded-full custom-pulse" style="animation-delay: 0.8s"></div>
            </span>
            
            <!-- Sombra de texto para profundidad -->
            <div class="absolute inset-0 text-5xl md:text-6xl lg:text-7xl font-black opacity-15 blur-md transform translate-y-2 -z-10"
                 style="background: linear-gradient(to right, white, blue-300, blue-400); -webkit-background-clip: text; background-clip: text; color: transparent;">
              Servicios Premium
            </div>
          </h2>
        </div>
        
        <!-- Subtítulo mejorado -->
        <div class="relative max-w-3xl mx-auto mb-8 animate-fadeInUp" style="animation-delay: 500ms">
          <p class="text-lg md:text-xl text-white/85 leading-relaxed text-center px-6">
            Descubre nuestros planes 
            <span class="relative inline-block mx-1">
              <span class="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 bg-clip-text text-transparent font-bold tracking-tight">
                premium diseñados
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-blue-300/20 to-blue-200/20 blur-lg -z-10 rounded-full px-1"></div>
              <div class="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400/40 via-blue-300/40 to-blue-200/40 rounded-full"></div>
            </span>
            para catapultar tu presencia digital al siguiente nivel
          </p>
          
          <!-- Línea decorativa -->
          <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent rounded-full"></div>
        </div>
      </div>
      
      <!-- Services Grid Mejorado con Efectos de Iluminación -->
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 w-full justify-items-center items-stretch relative">
        
        <!-- Plan Básico - ANIMADO con Efectos de Iluminación -->
        <div class="group relative w-full max-w-sm flex flex-col transform-gpu animate-fadeInUp" style="animation-delay: 200ms">
          <!-- Fondo animado que se ilumina en hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-500/15 to-blue-400/12 rounded-3xl transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:custom-glow-hover"></div>
          
          <!-- Efecto de luz adicional en hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-blue-300/8 to-blue-200/6 rounded-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-sm"></div>
          
          <!-- Tarjeta Principal con Iluminación -->
          <div class="relative bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-blue-700/35 backdrop-blur-xl rounded-3xl border-2 border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 transform group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:shadow-blue-500/20 shadow-lg shadow-blue-500/15 overflow-hidden w-full flex flex-col flex-1">
            <!-- Luz superior que se intensifica en hover -->
            <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent rounded-t-3xl group-hover:via-blue-300/70 transition-all duration-500"></div>
            
            <!-- Header -->
            <div class="p-8 text-center border-b border-blue-500/30 flex-shrink-0 flex flex-col items-center justify-center">
              <!-- Icono animado con brillo en hover -->
              <div class="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-custom-glow">
                <span class="text-3xl text-white">🌱</span>
                <!-- Efecto de brillo en icono -->
                <div class="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-2xl"></div>
              </div>
              
              <h3 class="text-2xl font-black text-white mb-2 group-hover:text-blue-50 transition-colors duration-300">Inicial</h3>
              <p class="text-blue-200/80 font-semibold text-sm tracking-wider group-hover:text-blue-100 transition-colors duration-300">PARA EMPRENDEDORES</p>
            </div>
            
            <!-- Price -->
            <div class="p-6 bg-gradient-to-r from-blue-900/40 via-blue-800/30 to-blue-700/40 text-center flex-shrink-0 relative">
              <!-- Efecto de fondo brillante -->
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="relative">
                <div class="text-3xl font-black text-white mb-2">
                  <span class="bg-gradient-to-r from-blue-200 to-blue-100 bg-clip-text text-transparent group-hover:from-blue-100 group-hover:to-blue-50 transition-all duration-300">$400.000</span>
                </div>
                <div class="text-blue-200/70 text-sm group-hover:text-blue-100/80 transition-colors duration-300">Hosting 1 año incluido</div>
              </div>
            </div>
            
            <!-- Features -->
            <div class="p-6 flex-grow">
              <ul class="space-y-3">
                <li v-for="(feature, index) in basicFeatures" :key="index" 
                    class="flex items-center transform transition-all duration-500 group-hover:translate-x-2"
                    :style="{ transitionDelay: `${index * 50}ms` }">
                  <!-- Check animado con brillo en hover -->
                  <div class="relative w-7 h-7 bg-gradient-to-br from-blue-600/40 to-blue-700/40 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-blue-500/60 group-hover:to-blue-600/60 transition-all duration-500 group-hover:scale-110">
                    <span class="text-blue-300 text-sm group-hover:text-blue-200 transition-colors duration-300">✓</span>
                    <!-- Punto brillante -->
                    <div class="absolute -top-0.5 -right-0.5 w-2 h-2 bg-blue-300/80 rounded-full blur-sm group-hover:bg-blue-200/90 transition-all duration-300"></div>
                  </div>
                  <span class="text-white/90 font-medium text-left text-sm flex-1 group-hover:text-white transition-colors duration-300">{{ feature }}</span>
                </li>
              </ul>
            </div>
            
            <!-- CTA con efectos de iluminación -->
            <div class="p-6 pt-4 flex-shrink-0">
              <button 
                @click="scrollToSection('contacto')"
                class="group relative w-full bg-gradient-to-r from-blue-600/80 via-blue-700/80 to-blue-800/80 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-bold py-4 px-6 rounded-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-xl text-sm overflow-hidden backdrop-blur-sm"
              >
                <!-- Efecto de brillo al pasar el mouse -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <span class="relative z-10 flex items-center justify-center">
                  Comenzar Proyecto
                  <span class="ml-3 text-lg transform transition-transform duration-500 group-hover:translate-x-1.5">→</span>
                </span>
                
                <!-- Sistema de bordes animados -->
                <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-400/50 transition-all duration-500"></div>
              </button>
            </div>
          </div>
          
          <!-- Efecto de borde que brilla en hover -->
          <div class="absolute inset-0 rounded-3xl border border-transparent group-hover:border-blue-400/25 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)_inset] transition-all duration-500"></div>
        </div>

        <!-- Plan Estándar - MÁS POPULAR (Destacado) con Efectos Mejorados -->
        <div class="group relative w-full max-w-sm flex flex-col transform-gpu animate-fadeInUp" style="animation-delay: 400ms">
          <!-- Cartel MÁS POPULAR Mejorado -->
          <div class="absolute -top-5 left-1/2 transform -translate-x-1/2 z-30 w-full max-w-[180px]">
            <span class="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white text-xs font-black py-3 px-5 rounded-full shadow-xl w-full block text-center backdrop-blur-sm border border-blue-300/30 custom-glow">
              ⭐ MÁS POPULAR
            </span>
          </div>
          
          <!-- Fondo premium que se ilumina en hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/25 via-blue-600/20 to-blue-700/20 rounded-3xl transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:custom-glow-hover"></div>
          
          <!-- Efecto de luz adicional premium -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-400/15 via-blue-300/12 to-blue-200/10 rounded-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 blur-sm"></div>
          
          <!-- Tarjeta Principal Premium con Iluminación -->
          <div class="relative bg-gradient-to-br from-blue-900/40 via-blue-800/35 to-blue-700/40 backdrop-blur-xl rounded-3xl border-2 border-blue-400/40 hover:border-blue-300/60 transition-all duration-500 transform group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:shadow-blue-500/25 shadow-xl shadow-blue-500/20 overflow-hidden w-full flex flex-col flex-1">
            <!-- Luz superior premium que se intensifica -->
            <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-t-3xl custom-pulse group-hover:via-blue-300 transition-all duration-500"></div>
            
            <!-- Header -->
            <div class="p-8 text-center border-b border-blue-400/40 flex-shrink-0 flex flex-col items-center justify-center">
              <!-- Icono premium animado con brillo -->
              <div class="relative w-20 h-20 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-xl group-hover:shadow-custom-glow">
                <span class="text-3xl text-white">🚀</span>
                <!-- Efecto de brillo premium -->
                <div class="absolute inset-0 bg-gradient-to-br from-blue-300/30 to-transparent rounded-2xl"></div>
              </div>
              
              <h3 class="text-2xl font-black text-white mb-2 group-hover:text-blue-50 transition-colors duration-300">Estándar</h3>
              <p class="text-blue-200/80 font-semibold text-sm tracking-wider group-hover:text-blue-100 transition-colors duration-300">PEQUEÑAS EMPRESAS</p>
            </div>
            
            <!-- Price -->
            <div class="p-6 bg-gradient-to-r from-blue-900/40 via-blue-800/40 to-blue-700/50 text-center flex-shrink-0 relative">
              <!-- Efecto de fondo brillante premium -->
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-blue-400/15 to-blue-300/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="relative">
                <div class="text-3xl font-black text-white mb-2">
                  <span class="bg-gradient-to-r from-blue-200 via-blue-100 to-white bg-clip-text text-transparent group-hover:from-blue-100 group-hover:via-blue-50 group-hover:to-white transition-all duration-300">$800.000</span>
                </div>
                <div class="text-blue-200/70 text-sm group-hover:text-blue-100/80 transition-colors duration-300">SEO Avanzado Incluido</div>
              </div>
            </div>
            
            <!-- Features -->
            <div class="p-6 flex-grow">
              <ul class="space-y-3">
                <li v-for="(feature, index) in standardFeatures" :key="index" 
                    class="flex items-center transform transition-all duration-500 group-hover:translate-x-2"
                    :style="{ transitionDelay: `${index * 50}ms` }">
                  <!-- Check premium animado con brillo -->
                  <div class="relative w-7 h-7 bg-gradient-to-br from-blue-500/50 to-blue-600/50 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-blue-400/70 group-hover:to-blue-500/70 transition-all duration-500 group-hover:scale-110">
                    <span class="text-blue-200 text-sm group-hover:text-blue-100 transition-colors duration-300">✓</span>
                    <!-- Punto brillante premium -->
                    <div class="absolute -top-0.5 -right-0.5 w-2 h-2 bg-blue-300 rounded-full blur-sm custom-pulse group-hover:bg-blue-200 transition-all duration-300"></div>
                  </div>
                  <span class="text-white/90 font-medium text-left text-sm flex-1 group-hover:text-white transition-colors duration-300">{{ feature }}</span>
                </li>
              </ul>
            </div>
            
            <!-- CTA Premium con efectos mejorados -->
            <div class="p-6 pt-4 flex-shrink-0">
              <button 
                @click="scrollToSection('contacto')"
                class="group relative w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-0.5 shadow-xl hover:shadow-2xl text-sm overflow-hidden"
              >
                <!-- Efecto de brillo premium -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <span class="relative z-10 flex items-center justify-center">
                  Elegir Plan Premium
                  <span class="ml-3 text-lg transform transition-transform duration-500 group-hover:translate-x-1.5">⚡</span>
                </span>
                
                <!-- Borde brillante premium -->
                <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-300/50 transition-all duration-500"></div>
              </button>
            </div>
          </div>
          
          <!-- Efecto de borde premium que brilla -->
          <div class="absolute inset-0 rounded-3xl border border-transparent group-hover:border-blue-300/30 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)_inset] transition-all duration-500"></div>
        </div>

        <!-- Plan Profesional - ANIMADO con Efectos de Iluminación -->
        <div class="group relative w-full max-w-sm flex flex-col transform-gpu animate-fadeInUp" style="animation-delay: 600ms">
          <!-- Fondo animado que se ilumina en hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-700/25 to-blue-800/22 rounded-3xl transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:custom-glow-hover"></div>
          
          <!-- Efecto de luz adicional en hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-400/12 via-blue-300/10 to-blue-200/8 rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-sm"></div>
          
          <!-- Tarjeta Principal con Iluminación -->
          <div class="relative bg-gradient-to-br from-blue-900/50 via-blue-800/35 to-blue-700/40 backdrop-blur-xl rounded-3xl border-2 border-blue-500/40 hover:border-blue-400/60 transition-all duration-500 transform group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:shadow-blue-500/20 shadow-lg shadow-blue-500/15 overflow-hidden w-full flex flex-col flex-1">
            <!-- Luz superior que se intensifica en hover -->
            <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent rounded-t-3xl group-hover:via-blue-300/70 transition-all duration-500"></div>
            
            <!-- Header -->
            <div class="p-8 text-center border-b border-blue-500/40 flex-shrink-0 flex flex-col items-center justify-center">
              <!-- Icono animado con brillo en hover -->
              <div class="relative w-20 h-20 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 rounded-2xl flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-custom-glow">
                <span class="text-3xl text-white">⭐</span>
                <!-- Efecto de brillo en icono -->
                <div class="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-2xl"></div>
              </div>
              
              <h3 class="text-2xl font-black text-white mb-2 group-hover:text-blue-50 transition-colors duration-300">Profesional</h3>
              <p class="text-blue-200/80 font-semibold text-sm tracking-wider group-hover:text-blue-100 transition-colors duration-300">NEGOCIOS EN CRECIMIENTO</p>
            </div>
            
            <!-- Price -->
            <div class="p-6 bg-gradient-to-r from-blue-900/50 via-blue-800/40 to-blue-700/50 text-center flex-shrink-0 relative">
              <!-- Efecto de fondo brillante -->
              <div class="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-transparent to-blue-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="relative">
                <div class="text-3xl font-black text-white mb-2">
                  <span class="bg-gradient-to-r from-blue-100 via-blue-50 to-white bg-clip-text text-transparent group-hover:from-blue-50 group-hover:via-blue-25 group-hover:to-white transition-all duration-300">$1.400.000</span>
                </div>
                <div class="text-blue-200/70 text-sm group-hover:text-blue-100/80 transition-colors duration-300">Gestión de Datos Incluido</div>
              </div>
            </div>
            
            <!-- Features -->
            <div class="p-6 flex-grow">
              <ul class="space-y-3">
                <li v-for="(feature, index) in professionalFeatures" :key="index" 
                    class="flex items-center transform transition-all duration-500 group-hover:translate-x-2"
                    :style="{ transitionDelay: `${index * 50}ms` }">
                  <!-- Check animado con brillo en hover -->
                  <div class="relative w-7 h-7 bg-gradient-to-br from-blue-700/50 to-blue-800/50 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-blue-500/70 group-hover:to-blue-600/70 transition-all duration-500 group-hover:scale-110">
                    <span class="text-blue-300 text-sm group-hover:text-blue-200 transition-colors duration-300">✓</span>
                    <!-- Punto brillante -->
                    <div class="absolute -top-0.5 -right-0.5 w-2 h-2 bg-blue-400/80 rounded-full blur-sm group-hover:bg-blue-300/90 transition-all duration-300"></div>
                  </div>
                  <span class="text-white/90 font-medium text-left text-sm flex-1 group-hover:text-white transition-colors duration-300">{{ feature }}</span>
                </li>
              </ul>
            </div>
            
            <!-- CTA con efectos de iluminación -->
            <div class="p-6 pt-4 flex-shrink-0">
              <button 
                @click="scrollToSection('contacto')"
                class="group relative w-full bg-gradient-to-r from-blue-700/80 via-blue-800/80 to-blue-900/80 hover:from-blue-800 hover:via-blue-900 hover:to-blue-950 text-white font-bold py-4 px-6 rounded-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-xl text-sm overflow-hidden backdrop-blur-sm"
              >
                <!-- Efecto de brillo al pasar el mouse -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <span class="relative z-10 flex items-center justify-center">
                  Ir Profesional
                  <span class="ml-3 text-lg transform transition-transform duration-500 group-hover:translate-x-1.5">→</span>
                </span>
                
                <!-- Sistema de bordes animados -->
                <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-400/50 transition-all duration-500"></div>
              </button>
            </div>
          </div>
          
          <!-- Efecto de borde que brilla en hover -->
          <div class="absolute inset-0 rounded-3xl border border-transparent group-hover:border-blue-400/25 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)_inset] transition-all duration-500"></div>
        </div>

        <!-- Plan Empresa - ANIMADO con Efectos de Iluminación -->
        <div class="group relative w-full max-w-sm flex flex-col transform-gpu animate-fadeInUp" style="animation-delay: 800ms">
          <!-- Fondo animado que se ilumina en hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-800/25 to-blue-900/22 rounded-3xl transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:custom-glow-hover"></div>
          
          <!-- Efecto de luz adicional en hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-400/12 via-blue-300/10 to-blue-200/8 rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-sm"></div>
          
          <!-- Tarjeta Principal con Iluminación -->
          <div class="relative bg-gradient-to-br from-blue-900/40 via-blue-800/50 to-gray-900/60 backdrop-blur-xl rounded-3xl border-2 border-blue-500/40 hover:border-blue-400/60 transition-all duration-500 transform group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:shadow-blue-500/20 shadow-lg shadow-blue-500/15 overflow-hidden w-full flex flex-col flex-1">
            <!-- Luz superior que se intensifica en hover -->
            <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent rounded-t-3xl group-hover:via-blue-300/70 transition-all duration-500"></div>
            
            <!-- Header -->
            <div class="p-8 text-center border-b border-blue-500/40 flex-shrink-0 flex flex-col items-center justify-center">
              <!-- Icono animado con brillo en hover -->
              <div class="relative w-20 h-20 bg-gradient-to-br from-blue-800 via-blue-900 to-gray-900 rounded-2xl flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-custom-glow">
                <span class="text-3xl text-white">🏢</span>
                <!-- Efecto de brillo en icono -->
                <div class="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-2xl"></div>
              </div>
              
              <h3 class="text-2xl font-black text-white mb-2 group-hover:text-blue-50 transition-colors duration-300">Empresa</h3>
              <p class="text-blue-200/80 font-semibold text-sm tracking-wider group-hover:text-blue-100 transition-colors duration-300">SOLUCIONES CORPORATIVAS</p>
            </div>
            
            <!-- Price -->
            <div class="p-6 bg-gradient-to-r from-blue-900/50 via-blue-800/60 to-gray-900/70 text-center flex-shrink-0 relative">
              <!-- Efecto de fondo brillante -->
              <div class="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-transparent to-blue-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="relative">
                <div class="text-3xl font-black text-white mb-2">
                  <span class="bg-gradient-to-r from-blue-200 via-blue-100 to-white bg-clip-text text-transparent group-hover:from-blue-100 group-hover:via-blue-50 group-hover:to-white transition-all duration-300">Hablemos</span>
                </div>
                <div class="text-blue-200/70 text-sm group-hover:text-blue-100/80 transition-colors duration-300">Aplicaciones Web & Mobile</div>
              </div>
            </div>
            
            <!-- Features -->
            <div class="p-6 flex-grow">
              <ul class="space-y-3">
                <li v-for="(feature, index) in enterpriseFeatures" :key="index" 
                    class="flex items-center transform transition-all duration-500 group-hover:translate-x-2"
                    :style="{ transitionDelay: `${index * 50}ms` }">
                  <!-- Check animado con brillo en hover -->
                  <div class="relative w-7 h-7 bg-gradient-to-br from-blue-700/50 to-blue-800/50 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-blue-500/70 group-hover:to-blue-600/70 transition-all duration-500 group-hover:scale-110">
                    <span class="text-blue-300 text-sm group-hover:text-blue-200 transition-colors duration-300">✓</span>
                    <!-- Punto brillante -->
                    <div class="absolute -top-0.5 -right-0.5 w-2 h-2 bg-blue-400/80 rounded-full blur-sm group-hover:bg-blue-300/90 transition-all duration-300"></div>
                  </div>
                  <span class="text-white/90 font-medium text-left text-sm flex-1 group-hover:text-white transition-colors duration-300">{{ feature }}</span>
                </li>
              </ul>
            </div>
            
            <!-- CTA con efectos de iluminación -->
            <div class="p-6 pt-4 flex-shrink-0">
              <button 
                @click="scrollToSection('contacto')"
                class="group relative w-full bg-gradient-to-r from-blue-800/80 via-blue-900/80 to-gray-900/80 hover:from-blue-900 hover:via-blue-950 hover:to-black text-white font-bold py-4 px-6 rounded-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-xl text-sm overflow-hidden backdrop-blur-sm"
              >
                <!-- Efecto de brillo al pasar el mouse -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <span class="relative z-10 flex items-center justify-center">
                  Enviar Mensaje
                  <span class="ml-3 text-lg transform transition-transform duration-500 group-hover:translate-x-1.5">→</span>
                </span>
                
                <!-- Sistema de bordes animados -->
                <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-400/50 transition-all duration-500"></div>
              </button>
            </div>
          </div>
          
          <!-- Efecto de borde que brilla en hover -->
          <div class="absolute inset-0 rounded-3xl border border-transparent group-hover:border-blue-400/25 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)_inset] transition-all duration-500"></div>
        </div>
      </div>
      
      <!-- Nota adicional con efectos -->
      <div class="text-center mt-12 max-w-2xl mx-auto px-4 animate-fadeInUp" style="animation-delay: 1000ms">
        <div class="relative bg-gradient-to-r from-blue-900/30 via-blue-800/25 to-blue-700/20 backdrop-blur-xl rounded-2xl p-6 border border-blue-400/30 shadow-lg shadow-blue-500/15">
          <p class="text-white/80 text-sm font-medium leading-relaxed">
            <span class="text-blue-300 font-bold group-hover:text-blue-200 transition-colors duration-300">¿Necesitas algo personalizado?</span> 
            Todos nuestros planes pueden ser ajustados según tus necesidades específicas. 
            <button 
              @click="scrollToSection('contacto')"
              class="inline-flex items-center text-blue-200 hover:text-blue-100 font-semibold ml-1 transition-colors duration-300 group"
            >
              Contáctanos para un presupuesto personalizado
              <span class="ml-1.5 transform transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </button>
          </p>
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
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};
</script>

<style scoped>
/* Sistema de Animaciones Exactamente Igual al Header */
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
      0 0 20px rgba(59, 130, 246, 0.3),
      0 0 30px rgba(59, 130, 246, 0.15);
  }
  50% { 
    box-shadow: 
      0 0 30px rgba(59, 130, 246, 0.5),
      0 0 50px rgba(59, 130, 246, 0.25);
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

/* Efecto especial de iluminación para hover - Igual al Header */
@keyframes glowHover {
  0%, 100% { 
    box-shadow: 
      0 0 15px rgba(59, 130, 246, 0.2),
      inset 0 0 20px rgba(255, 255, 255, 0.05);
  }
  50% { 
    box-shadow: 
      0 0 25px rgba(59, 130, 246, 0.4),
      inset 0 0 30px rgba(255, 255, 255, 0.1);
  }
}

/* Clases de Animación Personalizadas - Exactamente Iguales */
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

/* Clase para efecto de iluminación en hover - Igual al Header */
.custom-glow-hover {
  animation: glowHover 2s ease-in-out infinite;
}

/* Optimizaciones 3D - Exactamente Iguales */
.transform-gpu {
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}

/* Sistema Glassmorphism - Exactamente Igual */
.backdrop-blur-xl {
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

/* Transiciones Mejoradas - Iguales */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
}

/* Animaciones de Entrada - Iguales */
.animate-slideInLeft {
  animation: slideInLeft 0.7s ease-out forwards;
  opacity: 0;
  animation-fill-mode: both;
}

.animate-fadeInUp {
  animation: fadeInUp 0.7s ease-out forwards;
  opacity: 0;
  animation-fill-mode: both;
}

/* Efectos de Blur - Iguales */
.blur-xs {
  filter: blur(4px);
}

.blur-sm {
  filter: blur(6px);
}

.blur-lg {
  filter: blur(12px);
}

/* Corrección para letras que descienden - Igual */
.leading-snug {
  line-height: 1.3 !important;
}

/* Corrección para Gradientes de Texto - Exactamente Igual */
.bg-clip-text {
  -webkit-background-clip: text !important;
  background-clip: text !important;
  color: transparent;
  display: inline-block;
}

/* Responsividad Mejorada - Consistente */
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
  
  .grid-cols-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1024px) {
  .text-7xl {
    font-size: 3.5rem;
  }
  
  .text-6xl {
    font-size: 3rem;
  }
  
  .text-5xl {
    font-size: 2.5rem;
  }
  
  .gap-6 {
    gap: 1rem;
  }
  
  .p-8 {
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
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
  
  .grid-cols-4, .lg\:grid-cols-2 {
    grid-template-columns: 1fr;
  }
  
  .max-w-sm {
    max-width: 100%;
  }
  
  .gap-6 {
    gap: 0.75rem;
  }
}

@media (max-width: 640px) {
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
  
  .space-y-3 {
    gap: 0.5rem;
  }
  
  .p-8 {
    padding: 1.25rem;
  }
  
  .p-6 {
    padding: 1rem;
  }
}

/* Corrección para móviles muy pequeños */
@media (max-width: 375px) {
  .text-7xl {
    font-size: 2.25rem;
  }
  
  .px-5 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .py-2\.5 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
}

/* Optimización para modo oscuro del sistema */
@media (prefers-color-scheme: dark) {
  .bg-gradient-to-br {
    color-scheme: dark;
  }
}

/* Mejoras de accesibilidad - Iguales */
@media (prefers-reduced-motion: reduce) {
  .custom-float,
  .custom-pulse-slow,
  .custom-glow,
  .custom-pulse,
  .custom-glow-hover,
  .animate-slideInLeft,
  .animate-fadeInUp {
    animation: none !important;
    transition: none !important;
  }
  
  .group-hover\:scale-105,
  .group-hover\:scale-110,
  .group-hover\:-translate-y-1\.5,
  .group-hover\:rotate-6 {
    transform: none !important;
  }
}
</style>