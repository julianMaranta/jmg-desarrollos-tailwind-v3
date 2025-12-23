<template>
  <section 
    id="servicios" 
    class="min-h-[85vh] w-full relative overflow-hidden flex items-center justify-center py-8 md:py-10 transition-all duration-150 ease-out"
    :style="sectionGradientStyle"
  >
    <!-- Capa de fondo principal -->
    <div 
      class="absolute inset-0 transition-all duration-150 ease-out overflow-hidden"
      :style="sectionGradientStyle"
    >
      <!-- Efecto de partículas -->
      <div class="absolute inset-0">
        <div v-for="i in 20" :key="i" 
             class="absolute rounded-full transition-all duration-150"
             :class="isDarkMode ? 'bg-blue-400/12' : 'bg-white/12'"
             :style="`
               width: ${Math.random() * 1.5 + 0.8}px;
               height: ${Math.random() * 1.5 + 0.8}px;
               top: ${Math.random() * 100}%;
               left: ${Math.random() * 100}%;
               animation-delay: ${Math.random() * 0.25}s;
               opacity: ${isTransitioning ? 0.4 : 0.15};
             `">
        </div>
      </div>
    </div>

    <!-- Efectos de fondo animados -->
    <div class="absolute inset-0 overflow-hidden transition-all duration-150 ease-out">
      <transition name="theme-fade-fast" mode="out-in">
        <div v-if="isDarkMode" key="dark-bg-1" class="absolute top-1/4 -left-10 w-36 h-36 bg-gradient-to-br from-blue-500/20 to-cyan-400/12 rounded-full blur-xl animate-pulse-fast transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.3, transform: 'scale(1.03)' } : {}"></div>
        <div v-else key="light-bg-1" class="absolute top-1/4 -left-10 w-36 h-36 bg-gradient-to-br from-blue-100/35 to-blue-50/25 rounded-full blur-xl animate-pulse-fast transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.3, transform: 'scale(1.03)' } : {}"></div>
      </transition>
      
      <transition name="theme-fade-fast" mode="out-in">
        <div v-if="isDarkMode" key="dark-bg-2" class="absolute bottom-1/3 -right-10 w-40 h-40 bg-gradient-to-br from-indigo-500/20 to-blue-500/12 rounded-full blur-xl animate-pulse-fast animate-delay-200 transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.3, transform: 'scale(1.03)' } : {}"></div>
        <div v-else key="light-bg-2" class="absolute bottom-1/3 -right-10 w-40 h-40 bg-gradient-to-br from-blue-100/40 to-blue-50/25 rounded-full blur-xl animate-pulse-fast animate-delay-200 transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.3, transform: 'scale(1.03)' } : {}"></div>
      </transition>
      
      <transition name="theme-fade-fast" mode="out-in">
        <div v-if="isDarkMode" key="dark-bg-3" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-blue-600/12 to-cyan-500/8 rounded-full blur-xl animate-pulse-fast animate-delay-400 transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.3, transform: 'scale(1.03)' } : {}"></div>
        <div v-else key="light-bg-3" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-blue-100/25 to-blue-50/15 rounded-full blur-xl animate-pulse-fast animate-delay-400 transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.3, transform: 'scale(1.03)' } : {}"></div>
      </transition>
      
      <!-- Partículas flotantes reducidas -->
      <div v-for="i in 6" :key="i" 
           class="absolute w-0.4 h-0.4 rounded-full animate-float transition-all duration-150"
           :class="isDarkMode ? 'bg-blue-400/35' : 'bg-blue-300/35'"
           :style="`
             top: ${Math.random() * 100}%; 
             left: ${Math.random() * 100}%; 
             animation-delay: ${Math.random() * 1.2}s;
           `">
      </div>

      <!-- Gradientes de borde reducidos -->
      <div class="absolute top-0 left-0 right-0 h-24 transition-all duration-150"
           :class="isDarkMode ? 'bg-gradient-to-b from-blue-900/30 to-transparent' : 'bg-gradient-to-b from-blue-100/30 to-transparent'">
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-24 transition-all duration-150"
           :class="isDarkMode ? 'bg-gradient-to-t from-blue-800/25 to-transparent' : 'bg-gradient-to-t from-blue-200/25 to-transparent'">
      </div>
    </div>
    
    <!-- Contenido Principal -->
    <div class="w-full max-w-6xl mx-auto px-3 md:px-4 text-center relative z-10 py-4 md:py-6 flex flex-col items-center">
      
      <!-- Header con botón de tema integrado -->
      <div class="text-center mb-3 md:mb-4 w-full relative">
        <!-- Botón de tema premium compacto -->
        <div class="absolute top-0 right-0 md:right-1 z-20">
          <button
            @click="toggleTheme"
            class="relative flex items-center justify-center w-28 h-10 rounded-lg border shadow-sm hover:shadow transform hover:scale-105 active:scale-95 transition-all duration-150 ease-out overflow-hidden group theme-switch-premium"
            :class="isDarkMode 
              ? 'border-cyan-400/40 hover:border-cyan-300 shadow-cyan-500/10 bg-gradient-to-br from-blue-900/75 via-indigo-900/75 to-purple-900/75' 
              : 'border-blue-300/40 hover:border-blue-200 shadow-blue-400/10 bg-gradient-to-br from-white/85 via-blue-50/85 to-blue-100/85'"
            :title="isDarkMode ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'"
            aria-label="Cambiar tema"
          >
            <!-- Switch compacto -->
            <div 
              class="absolute w-10 h-10 rounded-full transition-all duration-300 ease-out transform z-30 overflow-hidden"
              :class="isDarkMode ? 'right-2' : 'left-2'"
              :style="isTransitioning ? { 
                filter: 'brightness(1.08)',
                boxShadow: isDarkMode 
                  ? '0 0 12px rgba(96, 165, 250, 0.35), inset 0 0 12px rgba(96, 165, 250, 0.15)' 
                  : '0 0 12px rgba(250, 204, 21, 0.35), inset 0 0 12px rgba(250, 204, 21, 0.15)'
              } : {}"
            >
              <!-- Fondo del switch -->
              <div class="absolute inset-0">
                <!-- Base del switch -->
                <div 
                  class="absolute inset-0 transition-all duration-150"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800' 
                    : 'bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500'">
                </div>
                
                <!-- Efecto de luz interior -->
                <div class="absolute inset-0 bg-gradient-to-br from-transparent via-white/35 to-transparent opacity-50 animate-pulse-slow"></div>
                
                <!-- Brillo de borde -->
                <div 
                  class="absolute inset-0 rounded-full border transition-all duration-150"
                  :class="isDarkMode 
                    ? 'border-blue-400/75' 
                    : 'border-yellow-400/75'">
                </div>
              </div>
              
              <!-- Icono dentro del switch -->
              <div class="absolute inset-0 flex items-center justify-center z-10">
                <!-- Luna -->
                <svg v-if="isDarkMode" class="w-5 h-5 transition-all duration-150" fill="currentColor" viewBox="0 0 20 20"
                     :class="isTransitioning ? 'text-blue-200' : 'text-blue-300'">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                </svg>
                
                <!-- Sol -->
                <svg v-else class="w-5 h-5 transition-all duration-150" fill="currentColor" viewBox="0 0 20 20"
                     :class="isTransitioning ? 'text-yellow-200' : 'text-yellow-400'">
                  <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
                </svg>
              </div>
              
              <!-- Brillo central -->
              <div class="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-xs transition-all duration-150"
                   :class="isDarkMode ? 'bg-blue-300/65' : 'bg-yellow-300/65'"></div>
            </div>
            
            <!-- Efecto de brillo al hover -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-25 transition-opacity duration-300 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-out"></div>
            
            <!-- Contenedor principal con iconos -->
            <div class="relative w-full h-full flex items-center justify-center overflow-hidden">
              
              <!-- Sol (izquierda) -->
              <div class="absolute left-2 w-5 h-5 transition-all duration-150 ease-out z-20"
                   :class="isDarkMode 
                     ? 'opacity-25 scale-85 text-yellow-300/35' 
                     : 'opacity-100 scale-105 text-yellow-400'">
                <svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
                </svg>
              </div>
              
              <!-- Luna (derecha) -->
              <div class="absolute right-2 w-4 h-4 transition-all duration-150 ease-out z-20"
                   :class="!isDarkMode 
                     ? 'opacity-25 scale-85 text-blue-400/35' 
                     : 'opacity-100 scale-105 text-blue-300'">
                <svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                </svg>
              </div>
              
              <!-- Texto "DÍA/NOCHE" -->
              <div class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-[8px] font-semibold uppercase tracking-tight opacity-75 z-5 transition-all duration-150 whitespace-nowrap"
                   :class="isDarkMode ? 'text-blue-300/75' : 'text-yellow-600/75'">
                {{ isDarkMode ? 'NOCHE' : 'DÍA' }}
              </div>
              
            </div>
            
            <!-- Tooltip -->
            <div class="absolute -bottom-5 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-50">
              <div class="px-1 py-0.5 text-[8px] font-medium rounded backdrop-blur-sm shadow-xs"
                   :class="isDarkMode 
                     ? 'bg-blue-900/75 text-blue-300 border border-blue-400/15' 
                     : 'bg-yellow-50/85 text-yellow-800 border border-yellow-400/15'">
                {{ isDarkMode ? 'Activar día' : 'Activar noche' }}
              </div>
            </div>
            
          </button>
        </div>
        
        <!-- Badge animado -->
        <div 
          class="inline-flex items-center backdrop-blur-md rounded-full px-3 py-1 mb-1.5 shadow-sm animate-pulse-slow transition-all duration-150"
          :class="isDarkMode 
            ? 'bg-gradient-to-r from-blue-600/35 to-cyan-500/25 border border-cyan-400/35' 
            : 'bg-gradient-to-r from-blue-500/25 to-blue-400/35 border border-blue-400/45'"
          :style="isTransitioning ? { 
            filter: 'brightness(1.08)',
            boxShadow: isDarkMode 
              ? '0 0 12px rgba(34, 211, 238, 0.25)' 
              : '0 0 12px rgba(59, 130, 246, 0.25)'
          } : {}"
        >
          <div 
            class="w-1.5 h-1.5 rounded-full mr-1.5 animate-pulse-fast transition-all duration-150"
            :class="isDarkMode 
              ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
              : 'bg-gradient-to-r from-blue-400 to-blue-300'"
            :style="isTransitioning ? { 
              transform: 'scale(1.08)'
            } : {}"
          ></div>
          <span class="text-xs font-bold tracking-tighter transition-colors duration-150"
                :class="isDarkMode ? 'text-white' : 'text-blue-900'">💎 PLANES</span>
        </div>
        
        <!-- Título -->
        <div class="relative w-full mb-1.5">
          <h2 class="text-xl sm:text-2xl md:text-3xl font-black text-center w-full tracking-tight leading-tight animate-slideInLeft transition-all duration-150">
            <span class="relative inline-block">
              <span 
                class="bg-clip-text text-transparent relative z-20 transition-all duration-150"
                :class="isDarkMode 
                  ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-100' 
                  : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'">
                Servicios Premium
              </span>
              
              <!-- Efectos de subrayado -->
              <div 
                class="absolute -bottom-0.5 left-1/4 right-1/4 h-0.5 rounded-full opacity-50 mt-0.5 transition-all duration-150"
                :class="isDarkMode 
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
                  : 'bg-gradient-to-r from-blue-500 to-blue-400'">
              </div>
            </span>
          </h2>
        </div>
        
        <!-- Subtítulo -->
        <div class="relative max-w-lg mx-auto mb-3 animate-fadeInUp transition-all duration-150" style="animation-delay: 40ms">
          <p 
            class="text-xs sm:text-sm leading-snug text-center transition-colors duration-150"
            :class="isDarkMode ? 'text-white/85' : 'text-blue-900/85'">
            <span :class="isDarkMode ? 'text-white' : 'text-blue-900'">Planes premium </span> 
            <span class="relative inline-block transition-all duration-150">
              <span 
                class="bg-clip-text text-transparent font-bold transition-all duration-150"
                :class="isDarkMode 
                  ? 'bg-gradient-to-r from-cyan-300 via-blue-200 to-blue-100' 
                  : 'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400'">
                 diseñados exclusivamente
              </span>
              <div 
                class="absolute inset-0 blur-xs -z-10 rounded-full transition-all duration-150"
                :class="isDarkMode 
                  ? 'bg-gradient-to-r from-cyan-400/15 via-blue-300/10 to-blue-200/10' 
                  : 'bg-gradient-to-r from-blue-500/15 via-blue-400/10 to-blue-300/10'">
              </div>
            </span>
            para tu <span :class="isDarkMode ? 'text-blue-100' : 'text-blue-700'">negocio</span>
          </p>
        </div>
      </div>
      
      <!-- Services Grid Compacto -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-2 md:gap-3 w-full justify-items-center items-stretch relative mb-6 md:mb-8">
        
        <!-- Plan Básico -->
        <div class="group relative w-full max-w-xs flex flex-col animate-fadeInUp transition-all duration-150"
             style="animation-delay: 80ms">
          
          <!-- Tarjeta Principal COMPACTA -->
          <div class="relative backdrop-blur-lg rounded-xl border p-0.5 transition-all duration-150 transform group-hover:-translate-y-0.5 group-hover:scale-101 group-hover:shadow-md shadow-sm hover:shadow-glow overflow-hidden w-full flex flex-col flex-1 min-h-[280px]"
               :class="isDarkMode 
                 ? 'bg-gradient-to-br from-blue-700/35 via-indigo-800/45 to-blue-900/35 border-cyan-400/35 hover:border-cyan-300/45' 
                 : 'bg-gradient-to-br from-blue-50/75 via-blue-100/65 to-blue-200/55 border-blue-400/45 hover:border-blue-500/55'">
            
            <!-- Header de la tarjeta COMPACTO -->
            <div class="p-2.5 md:p-3 text-center border-b flex-shrink-0 flex flex-col items-center justify-center transition-all duration-150"
                 :class="isDarkMode ? 'border-cyan-400/15' : 'border-blue-400/15'">
              
              <!-- Icono compacto -->
              <div class="relative w-10 h-10 rounded-full flex items-center justify-center mb-2 transform transition-all duration-150 group-hover:scale-105 shadow animate-pulse-slow"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-br from-blue-500/60 to-cyan-500/60' 
                     : 'bg-gradient-to-br from-blue-200/60 to-blue-300/60'">
                <span class="text-lg">🌱</span>
              </div>
              
              <h3 class="text-sm font-bold mb-0.5 transition-colors duration-150"
                  :class="isDarkMode ? 'text-white' : 'text-blue-900'">
                Inicial
              </h3>
              <p class="text-xs font-semibold tracking-tight transition-colors duration-150 uppercase"
                 :class="isDarkMode ? 'text-blue-100/50' : 'text-blue-700/50'">
                PARA EMPRENDEDORES
              </p>
            </div>
            
            <!-- Price Section COMPACTA -->
            <div class="p-2.5 md:p-3 text-center flex-shrink-0 transition-all duration-150 min-h-[60px]"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-r from-blue-800/25 via-indigo-800/25 to-blue-900/25' 
                   : 'bg-gradient-to-r from-blue-100/25 via-blue-200/25 to-blue-300/25'">
              <div class="text-xl md:text-2xl font-black mb-0.5 transition-all duration-150">
                <div class="leading-tight transition-all duration-150"
                     :class="isDarkMode ? 'text-white' : 'text-blue-800'">
                  $400.000
                </div>
              </div>
              <div class="text-xs font-medium transition-colors duration-150"
                   :class="isDarkMode ? 'text-blue-100/50' : 'text-blue-700/50'">
                Hosting 1 año incluido
              </div>
            </div>
            
            <!-- Features COMPACTAS -->
            <div class="p-2.5 md:p-3 flex-grow transition-all duration-150">
              <ul class="space-y-1.5">
                <li v-for="(feature, index) in basicFeatures" :key="index" 
                    class="flex items-start transform transition-all duration-150 group-hover:translate-x-0.5"
                    :style="{ transitionDelay: `${index * 15}ms` }">
                  
                  <!-- Checkmark compacto -->
                  <div class="relative w-3 h-3 rounded-full flex items-center justify-center mr-1.5 flex-shrink-0 mt-0.5 group-hover:scale-105 transition-all duration-150 animate-pulse-fast"
                       :class="isDarkMode 
                         ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
                         : 'bg-gradient-to-r from-blue-400 to-blue-300'">
                    <span class="text-white text-xs font-bold">✓</span>
                  </div>
                  
                  <span class="text-xs leading-relaxed flex-1 transition-colors duration-150 line-clamp-2"
                        :class="isDarkMode ? 'text-white/85' : 'text-blue-800/85'">
                    {{ feature }}
                  </span>
                </li>
              </ul>
            </div>
            
            <!-- CTA COMPACTA -->
            <div class="p-2.5 md:p-3 pt-0 flex-shrink-0 transition-all duration-150">
              <button @click="scrollToSection('contacto')"
                      class="group/btn relative w-full text-white font-bold py-1.5 px-3 rounded-lg transition-all duration-150 transform hover:scale-105 hover:-translate-y-0.5 shadow hover:shadow-glow-hover text-xs overflow-hidden"
                      :class="isDarkMode 
                        ? 'bg-gradient-to-r from-blue-600 via-cyan-700 to-indigo-800 hover:from-blue-700 hover:via-cyan-800 hover:to-indigo-900' 
                        : 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900'">
                <!-- Efecto de brillo al hover -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-300"></div>
                
                <span class="relative z-10 flex items-center justify-center transition-all duration-150">
                  Comenzar
                  <span class="ml-1 text-sm animate-bounce-fast">→</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <!-- Plan Estándar (MÁS POPULAR) -->
        <div class="group relative w-full max-w-xs flex flex-col animate-fadeInUp transition-all duration-150"
             style="animation-delay: 120ms">
          
          <!-- Cartel MÁS POPULAR compacto -->
          <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-150">
            <div class="inline-flex items-center backdrop-blur-md rounded-full px-2 py-0.5 border shadow-sm transition-all duration-150"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-r from-blue-600/45 to-cyan-500/35 border-cyan-400/35 shadow-cyan-500/20' 
                   : 'bg-gradient-to-r from-blue-200/45 to-blue-100/35 border-blue-300/35 shadow-blue-400/20'">
              <div class="relative w-1 h-1 mr-1">
                <div class="absolute inset-0 rounded-full animate-pulse-fast transition-all duration-150"
                     :class="isDarkMode ? 'bg-cyan-300' : 'bg-blue-400'"></div>
              </div>
              <span class="text-xs font-bold tracking-tighter transition-colors duration-150"
                    :class="isDarkMode ? 'text-white' : 'text-blue-800'">
                ⭐ POPULAR
              </span>
            </div>
          </div>
          
          <!-- Tarjeta Principal COMPACTA -->
          <div class="relative backdrop-blur-lg rounded-xl border p-0.5 transition-all duration-150 transform group-hover:-translate-y-0.5 group-hover:scale-101 group-hover:shadow-md shadow-sm hover:shadow-glow overflow-hidden w-full flex flex-col flex-1 min-h-[280px]"
               :class="isDarkMode 
                 ? 'bg-gradient-to-br from-blue-700/45 via-indigo-800/55 to-blue-900/45 border-cyan-400/45 hover:border-cyan-300/55' 
                 : 'bg-gradient-to-br from-blue-50/80 via-blue-100/70 to-blue-200/60 border-blue-400/55 hover:border-blue-500/65'">
            
            <!-- Header de la tarjeta COMPACTO -->
            <div class="p-2.5 md:p-3 text-center border-b flex-shrink-0 flex flex-col items-center justify-center transition-all duration-150"
                 :class="isDarkMode ? 'border-cyan-400/20' : 'border-blue-400/20'">
              
              <!-- Icono compacto -->
              <div class="relative w-10 h-10 rounded-full flex items-center justify-center mb-2 transform transition-all duration-150 group-hover:scale-105 shadow animate-pulse-slow"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-br from-cyan-500/60 to-blue-600/60' 
                     : 'bg-gradient-to-br from-blue-300/60 to-blue-400/60'">
                <span class="text-lg">🚀</span>
              </div>
              
              <h3 class="text-sm font-bold mb-0.5 transition-colors duration-150"
                  :class="isDarkMode ? 'text-white' : 'text-blue-900'">
                Estándar
              </h3>
              <p class="text-xs font-semibold tracking-tight transition-colors duration-150 uppercase"
                 :class="isDarkMode ? 'text-blue-100/50' : 'text-blue-700/50'">
                PEQUEÑAS EMPRESAS
              </p>
            </div>
            
            <!-- Price COMPACTO -->
            <div class="p-2.5 md:p-3 text-center flex-shrink-0 transition-all duration-150 min-h-[60px]"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-r from-blue-800/35 via-indigo-800/35 to-blue-900/35' 
                   : 'bg-gradient-to-r from-blue-100/35 via-blue-200/35 to-blue-300/35'">
              <div class="text-xl md:text-2xl font-black mb-0.5 transition-all duration-150">
                <div class="leading-tight transition-all duration-150"
                     :class="isDarkMode ? 'text-white' : 'text-blue-800'">
                  $800.000
                </div>
              </div>
              <div class="text-xs font-medium transition-colors duration-150"
                   :class="isDarkMode ? 'text-blue-100/50' : 'text-blue-700/50'">
                SEO Avanzado Incluido
              </div>
            </div>
            
            <!-- Features COMPACTAS -->
            <div class="p-2.5 md:p-3 flex-grow transition-all duration-150">
              <ul class="space-y-1.5">
                <li v-for="(feature, index) in standardFeatures" :key="index" 
                    class="flex items-start transform transition-all duration-150 group-hover:translate-x-0.5"
                    :style="{ transitionDelay: `${index * 15}ms` }">
                  
                  <div class="relative w-3 h-3 rounded-full flex items-center justify-center mr-1.5 flex-shrink-0 mt-0.5 group-hover:scale-105 transition-all duration-150 animate-pulse-fast"
                       :class="isDarkMode 
                         ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
                         : 'bg-gradient-to-r from-blue-400 to-blue-300'">
                    <span class="text-white text-xs font-bold">✓</span>
                  </div>
                  
                  <span class="text-xs leading-relaxed flex-1 transition-colors duration-150 line-clamp-2"
                        :class="isDarkMode ? 'text-white/85' : 'text-blue-800/85'">
                    {{ feature }}
                  </span>
                </li>
              </ul>
            </div>
            
            <!-- CTA COMPACTA -->
            <div class="p-2.5 md:p-3 pt-0 flex-shrink-0 transition-all duration-150">
              <button @click="scrollToSection('contacto')"
                      class="group/btn relative w-full text-white font-bold py-1.5 px-3 rounded-lg transition-all duration-150 transform hover:scale-105 hover:-translate-y-0.5 shadow hover:shadow-glow-hover text-xs overflow-hidden"
                      :class="isDarkMode 
                        ? 'bg-gradient-to-r from-blue-600 via-cyan-700 to-indigo-800 hover:from-blue-700 hover:via-cyan-800 hover:to-indigo-900' 
                        : 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900'">
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-300"></div>
                
                <span class="relative z-10 flex items-center justify-center transition-all duration-150">
                  Elegir Plan
                  <span class="ml-1 text-sm animate-bounce-fast">⚡</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <!-- Plan Profesional -->
        <div class="group relative w-full max-w-xs flex flex-col animate-fadeInUp transition-all duration-150"
             style="animation-delay: 160ms">
          
          <!-- Tarjeta Principal COMPACTA -->
          <div class="relative backdrop-blur-lg rounded-xl border p-0.5 transition-all duration-150 transform group-hover:-translate-y-0.5 group-hover:scale-101 group-hover:shadow-md shadow-sm hover:shadow-glow overflow-hidden w-full flex flex-col flex-1 min-h-[280px]"
               :class="isDarkMode 
                 ? 'bg-gradient-to-br from-blue-700/55 via-indigo-800/65 to-blue-900/55 border-cyan-400/55 hover:border-cyan-300/65' 
                 : 'bg-gradient-to-br from-blue-50/85 via-blue-100/75 to-blue-200/65 border-blue-400/65 hover:border-blue-500/75'">
            
            <!-- Header de la tarjeta COMPACTO -->
            <div class="p-2.5 md:p-3 text-center border-b flex-shrink-0 flex flex-col items-center justify-center transition-all duration-150"
                 :class="isDarkMode ? 'border-cyan-400/25' : 'border-blue-400/25'">
              
              <!-- Icono compacto -->
              <div class="relative w-10 h-10 rounded-full flex items-center justify-center mb-2 transform transition-all duration-150 group-hover:scale-105 shadow animate-pulse-slow"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-br from-blue-600/60 to-cyan-600/60' 
                     : 'bg-gradient-to-br from-blue-400/60 to-blue-500/60'">
                <span class="text-lg">⭐</span>
              </div>
              
              <h3 class="text-sm font-bold mb-0.5 transition-colors duration-150"
                  :class="isDarkMode ? 'text-white' : 'text-blue-900'">
                Profesional
              </h3>
              <p class="text-xs font-semibold tracking-tight transition-colors duration-150 uppercase"
                 :class="isDarkMode ? 'text-blue-100/50' : 'text-blue-700/50'">
                NEGOCIOS EN CRECIMIENTO
              </p>
            </div>
            
            <!-- Price COMPACTO -->
            <div class="p-2.5 md:p-3 text-center flex-shrink-0 transition-all duration-150 min-h-[60px]"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-r from-blue-800/45 via-indigo-800/45 to-blue-900/45' 
                   : 'bg-gradient-to-r from-blue-100/45 via-blue-200/45 to-blue-300/45'">
              <div class="text-xl md:text-2xl font-black mb-0.5 transition-all duration-150">
                <div class="leading-tight transition-all duration-150"
                     :class="isDarkMode ? 'text-white' : 'text-blue-800'">
                  $1.400.000
                </div>
              </div>
              <div class="text-xs font-medium transition-colors duration-150"
                   :class="isDarkMode ? 'text-blue-100/50' : 'text-blue-700/50'">
                Gestión de Datos Incluido
              </div>
            </div>
            
            <!-- Features COMPACTAS -->
            <div class="p-2.5 md:p-3 flex-grow transition-all duration-150">
              <ul class="space-y-1.5">
                <li v-for="(feature, index) in professionalFeatures" :key="index" 
                    class="flex items-start transform transition-all duration-150 group-hover:translate-x-0.5"
                    :style="{ transitionDelay: `${index * 15}ms` }">
                  
                  <div class="relative w-3 h-3 rounded-full flex items-center justify-center mr-1.5 flex-shrink-0 mt-0.5 group-hover:scale-105 transition-all duration-150 animate-pulse-fast"
                       :class="isDarkMode 
                         ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
                         : 'bg-gradient-to-r from-blue-400 to-blue-300'">
                    <span class="text-white text-xs font-bold">✓</span>
                  </div>
                  
                  <span class="text-xs leading-relaxed flex-1 transition-colors duration-150 line-clamp-2"
                        :class="isDarkMode ? 'text-white/85' : 'text-blue-800/85'">
                    {{ feature }}
                  </span>
                </li>
              </ul>
            </div>
            
            <!-- CTA COMPACTA -->
            <div class="p-2.5 md:p-3 pt-0 flex-shrink-0 transition-all duration-150">
              <button @click="scrollToSection('contacto')"
                      class="group/btn relative w-full text-white font-bold py-1.5 px-3 rounded-lg transition-all duration-150 transform hover:scale-105 hover:-translate-y-0.5 shadow hover:shadow-glow-hover text-xs overflow-hidden"
                      :class="isDarkMode 
                        ? 'bg-gradient-to-r from-blue-600 via-cyan-700 to-indigo-800 hover:from-blue-700 hover:via-cyan-800 hover:to-indigo-900' 
                        : 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900'">
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-300"></div>
                
                <span class="relative z-10 flex items-center justify-center transition-all duration-150">
                  Ir Profesional
                  <span class="ml-1 text-sm animate-bounce-fast">→</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <!-- Plan Empresa -->
        <div class="group relative w-full max-w-xs flex flex-col animate-fadeInUp transition-all duration-150"
             style="animation-delay: 200ms">
          
          <!-- Tarjeta Principal COMPACTA -->
          <div class="relative backdrop-blur-lg rounded-xl border p-0.5 transition-all duration-150 transform group-hover:-translate-y-0.5 group-hover:scale-101 group-hover:shadow-md shadow-sm hover:shadow-glow overflow-hidden w-full flex flex-col flex-1 min-h-[280px]"
               :class="isDarkMode 
                 ? 'bg-gradient-to-br from-blue-700/65 via-indigo-800/75 to-blue-900/65 border-cyan-400/65 hover:border-cyan-300/75' 
                 : 'bg-gradient-to-br from-blue-50/90 via-blue-100/80 to-blue-200/70 border-blue-400/75 hover:border-blue-500/85'">
            
            <!-- Header de la tarjeta COMPACTO -->
            <div class="p-2.5 md:p-3 text-center border-b flex-shrink-0 flex flex-col items-center justify-center transition-all duration-150"
                 :class="isDarkMode ? 'border-cyan-400/30' : 'border-blue-400/30'">
              
              <!-- Icono compacto -->
              <div class="relative w-10 h-10 rounded-full flex items-center justify-center mb-2 transform transition-all duration-150 group-hover:scale-105 shadow animate-pulse-slow"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-br from-cyan-600/60 to-blue-700/60' 
                     : 'bg-gradient-to-br from-blue-500/60 to-blue-600/60'">
                <span class="text-lg">🏢</span>
              </div>
              
              <h3 class="text-sm font-bold mb-0.5 transition-colors duration-150"
                  :class="isDarkMode ? 'text-white' : 'text-blue-900'">
                Empresa
              </h3>
              <p class="text-xs font-semibold tracking-tight transition-colors duration-150 uppercase"
                 :class="isDarkMode ? 'text-blue-100/50' : 'text-blue-700/50'">
                SOLUCIONES CORPORATIVAS
              </p>
            </div>
            
            <!-- Price COMPACTO -->
            <div class="p-2.5 md:p-3 text-center flex-shrink-0 transition-all duration-150 min-h-[60px]"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-r from-blue-800/55 via-indigo-800/55 to-blue-900/55' 
                   : 'bg-gradient-to-r from-blue-100/55 via-blue-200/55 to-blue-300/55'">
              <div class="text-xl md:text-2xl font-black mb-0.5 transition-all duration-150">
                <span 
                  class="bg-clip-text text-transparent transition-all duration-150"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-100' 
                    : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'">
                  Hablemos
                </span>
              </div>
              <div class="text-xs font-medium transition-colors duration-150"
                   :class="isDarkMode ? 'text-blue-100/50' : 'text-blue-700/50'">
                Aplicaciones Web & Mobile
              </div>
            </div>
            
            <!-- Features COMPACTAS -->
            <div class="p-2.5 md:p-3 flex-grow transition-all duration-150">
              <ul class="space-y-1.5">
                <li v-for="(feature, index) in enterpriseFeatures" :key="index" 
                    class="flex items-start transform transition-all duration-150 group-hover:translate-x-0.5"
                    :style="{ transitionDelay: `${index * 15}ms` }">
                  
                  <div class="relative w-3 h-3 rounded-full flex items-center justify-center mr-1.5 flex-shrink-0 mt-0.5 group-hover:scale-105 transition-all duration-150 animate-pulse-fast"
                       :class="isDarkMode 
                         ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
                         : 'bg-gradient-to-r from-blue-400 to-blue-300'">
                    <span class="text-white text-xs font-bold">✓</span>
                  </div>
                  
                  <span class="text-xs leading-relaxed flex-1 transition-colors duration-150 line-clamp-2"
                        :class="isDarkMode ? 'text-white/85' : 'text-blue-800/85'">
                    {{ feature }}
                  </span>
                </li>
              </ul>
            </div>
            
            <!-- CTA COMPACTA -->
            <div class="p-2.5 md:p-3 pt-0 flex-shrink-0 transition-all duration-150">
              <button @click="scrollToSection('contacto')"
                      class="group/btn relative w-full text-white font-bold py-1.5 px-3 rounded-lg transition-all duration-150 transform hover:scale-105 hover:-translate-y-0.5 shadow hover:shadow-glow-hover text-xs overflow-hidden"
                      :class="isDarkMode 
                        ? 'bg-gradient-to-r from-blue-600 via-cyan-700 to-indigo-800 hover:from-blue-700 hover:via-cyan-800 hover:to-indigo-900' 
                        : 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900'">
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-300"></div>
                
                <span class="relative z-10 flex items-center justify-center transition-all duration-150">
                  Enviar Mensaje
                  <span class="ml-1 text-sm animate-bounce-fast">→</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Nota adicional compacta -->
      <div class="text-center mt-4 md:mt-6 max-w-lg mx-auto px-3 animate-fadeInUp transition-all duration-150" style="animation-delay: 240ms">
        <div class="relative backdrop-blur-sm border rounded-lg p-3 shadow transform transition-all duration-150 hover:scale-101"
             :class="isDarkMode 
               ? 'bg-blue-900/15 border-blue-400/10 shadow-blue-500/5 hover:border-blue-300/20' 
               : 'bg-blue-50/15 border-blue-300/10 shadow-blue-400/5 hover:border-blue-400/20'">
          <p class="text-xs sm:text-sm leading-relaxed text-center font-medium transition-colors duration-150"
             :class="isDarkMode ? 'text-white/85' : 'text-blue-800/85'">
            <span :class="isDarkMode ? 'text-white' : 'text-blue-900'">¿Necesitas algo personalizado?</span> 
            Todos los planes son ajustables.
            <button @click="scrollToSection('contacto')"
                    class="inline-flex items-center font-bold ml-0.5 transition-colors duration-150 group"
                    :class="isDarkMode ? 'text-blue-200 hover:text-white' : 'text-blue-700 hover:text-blue-900'">
              Contáctanos
              <span class="ml-0.5 transform transition-transform duration-150 group-hover:translate-x-0.5 animate-bounce-fast transition-all duration-150"
                    :class="isDarkMode ? 'text-blue-300' : 'text-blue-600'">
                ↗
              </span>
            </button>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';

// Estado del tema
const isDarkMode = ref(true);
const isTransitioning = ref(false);
const gradientPosition = ref(0);
const showParticles = ref(false);

// Gradientes premium
const darkGradient = 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 25%, #0369a1 50%, #1e40af 75%, #0f172a 100%)';
const lightGradient = 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 25%, #93c5fd 50%, #60a5fa 75%, #3b82f6 100%)';

// Inicializar tema
const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    isDarkMode.value = false;
    gradientPosition.value = 100;
  } else {
    isDarkMode.value = true;
    gradientPosition.value = 0;
  }
};

// Alternar entre temas con transición
const toggleTheme = async () => {
  if (isTransitioning.value) return;
  
  isTransitioning.value = true;
  showParticles.value = true;
  
  const startPosition = isDarkMode.value ? 0 : 100;
  const endPosition = isDarkMode.value ? 100 : 0;
  
  const duration = 180;
  const startTime = Date.now();
  
  const animateGradient = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const easedProgress = progress * (2 - progress);
    gradientPosition.value = startPosition + (endPosition - startPosition) * easedProgress;
    
    if (progress < 1) {
      requestAnimationFrame(animateGradient);
    } else {
      gradientPosition.value = endPosition;
    }
  };
  
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
  
  requestAnimationFrame(animateGradient);
  
  setTimeout(() => {
    showParticles.value = false;
    isTransitioning.value = false;
  }, duration + 40);
};

// Estilo del gradiente del fondo principal
const sectionGradientStyle = computed(() => {
  if (isTransitioning.value) {
    const startGradient = isDarkMode.value ? lightGradient : darkGradient;
    const endGradient = isDarkMode.value ? darkGradient : lightGradient;
    
    return {
      backgroundImage: `${startGradient}, ${endGradient}`,
      backgroundSize: `200% 200%, 200% 200%`,
      backgroundPosition: `${gradientPosition.value}% ${gradientPosition.value}%, ${gradientPosition.value}% ${gradientPosition.value}%`,
      filter: 'brightness(1.08)',
      transition: 'all 0.12s ease-out',
    };
  } else {
    return {
      backgroundImage: isDarkMode.value ? darkGradient : lightGradient,
      backgroundSize: '200% 200%',
      backgroundPosition: '0% 0%',
      animation: isDarkMode.value ? 'gradient-shift-dark 6s ease infinite' : 'gradient-shift-light 6s ease infinite',
    };
  }
});

// Features de planes COMPACTAS
const basicFeatures = [
  'Página web con 5 secciones',
  'Diseño responsive avanzado',
  'SEO básico optimizado',
  'Hosting 1 año incluido',
  'Certificado SSL gratuito'
];

const standardFeatures = [
  'Animaciones interactivas',
  'Diseño UX/UI exclusivo',
  'SEO avanzado integrado',
  'Formularios de contacto',
  'Integración multimedia'
];

const professionalFeatures = [
  'Diseño premium personalizado',
  'Sistema de branding completo',
  'Panel de Administrador',
  'Contenido editable en tiempo real',
  'Soporte prioritario 24/7'
];

const enterpriseFeatures = [
  'Desarrollo 100% a medida',
  'Consultoría estratégica digital',
  'Desarrollo Full-Stack',
  'Soporte prioritario extendido',
  'Backup automatizado garantizado',
  'Seguridad informática avanzada'
];

// Scroll a sección
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Inicializar
onMounted(() => {
  initializeTheme();
});

// Aplicar transición al cambiar tema
watch(isDarkMode, (newVal) => {
  document.documentElement.classList.add('theme-transition-fast');
  
  if (newVal) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  setTimeout(() => {
    document.documentElement.classList.remove('theme-transition-fast');
  }, 180);
});
</script>

<style scoped>
/* ANIMACIONES OPTIMIZADAS */

@keyframes gradient-shift-dark {
  0%, 100% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes gradient-shift-light {
  0%, 100% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Transiciones de tema */
@keyframes themeFadeInFast {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes themeFadeOutFast {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(1.03);
  }
}

.theme-fade-fast-enter-active {
  animation: themeFadeInFast 0.1s ease-out !important;
}

.theme-fade-fast-leave-active {
  animation: themeFadeOutFast 0.1s ease-out !important;
}

/* Transiciones optimizadas */
* {
  transition: background-color 0.1s ease-out, 
              border-color 0.1s ease-out,
              color 0.1s ease-out,
              transform 0.1s ease-out,
              opacity 0.1s ease-out;
}

/* Animaciones básicas */
.animate-pulse-fast {
  animation: pulse 1s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse 2s ease-in-out infinite;
}

.animate-bounce-fast {
  animation: bounce 0.7s infinite;
}

.animate-float {
  animation: float 2s ease-in-out infinite;
}

.animate-slideInLeft {
  animation: slideInLeft 0.4s ease-out forwards;
  opacity: 0;
}

.animate-fadeInUp {
  animation: fadeInUp 0.4s ease-out forwards;
  opacity: 0;
}

.animate-delay-200 {
  animation-delay: 200ms;
}

.animate-delay-400 {
  animation-delay: 400ms;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-15px);
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

/* Efectos de sombras */
.shadow-glow {
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.15);
}

.hover\:shadow-glow:hover {
  box-shadow: 0 0 15px rgba(34, 211, 238, 0.2);
}

.hover\:shadow-glow-hover:hover {
  box-shadow: 0 6px 20px rgba(34, 211, 238, 0.2);
}

/* Clase utilitaria para limitar líneas de texto */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Altura mínima para tarjetas */
.min-h-\[280px\] {
  min-height: 280px;
}

/* Clase para escala mínima */
.hover\:scale-101:hover {
  transform: scale(1.01);
}

/* Desenfoque sutil */
.blur-xs {
  filter: blur(2px);
}

/* Sombra pequeña */
.shadow-xs {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* Optimización responsive */
@media (max-width: 768px) {
  #servicios {
    min-height: 80vh;
  }
  
  .lg\:grid-cols-4 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  /* Altura de tarjetas en móvil */
  .min-h-\[280px\] {
    min-height: 260px;
  }
  
  /* Ajustes para el botón en móvil */
  button[aria-label="Cambiar tema"] {
    width: 26px;
    height: 9px;
  }
  
  button[aria-label="Cambiar tema"] > div:first-child {
    width: 9px;
    height: 9px;
  }
  
  .absolute.left-2, .absolute.right-2 {
    width: 4px;
    height: 4px;
  }
  
  .absolute.-bottom-3 {
    font-size: 7px;
    bottom: -2.5px;
  }
}

@media (max-width: 640px) {
  .lg\:grid-cols-4 {
    grid-template-columns: 1fr;
  }
  
  .min-h-\[280px\] {
    min-height: 250px;
  }
  
  /* Botón aún más compacto en móviles pequeños */
  button[aria-label="Cambiar tema"] {
    width: 24px;
    height: 8px;
  }
  
  button[aria-label="Cambiar tema"] > div:first-child {
    width: 8px;
    height: 8px;
  }
}

/* Accesibilidad */
@media (prefers-reduced-motion: reduce) {
  .animate-pulse-fast,
  .animate-pulse-slow,
  .animate-bounce-fast,
  .animate-float,
  .animate-slideInLeft,
  .animate-fadeInUp {
    animation: none !important;
  }
  
  .hover\:scale-101,
  .hover\:-translate-y-0\.5 {
    transform: none !important;
  }
}

/* Mejoras de rendimiento */
#servicios > div:first-child {
  will-change: background-position;
}

button[aria-label="Cambiar tema"] {
  will-change: transform;
}
</style>