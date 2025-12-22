<template>
  <section 
    id="proceso" 
    class="min-h-screen w-full relative overflow-hidden flex items-center justify-center py-12 md:py-16 transition-all duration-150 ease-out"
    :style="sectionGradientStyle"
  >
    <!-- Capa de fondo principal -->
    <div 
      class="absolute inset-0 transition-all duration-150 ease-out overflow-hidden"
      :style="sectionGradientStyle"
    >
      <!-- Efecto de partículas -->
      <div class="absolute inset-0">
        <div v-for="i in 30" :key="i" 
             class="absolute rounded-full transition-all duration-150"
             :class="isDarkMode ? 'bg-blue-400/20' : 'bg-white/20'"
             :style="`
               width: ${Math.random() * 3 + 1}px;
               height: ${Math.random() * 3 + 1}px;
               top: ${Math.random() * 100}%;
               left: ${Math.random() * 100}%;
               animation-delay: ${Math.random() * 0.5}s;
               opacity: ${isTransitioning ? 0.7 : 0.3};
               filter: ${isTransitioning ? 'brightness(1.3)' : 'brightness(1)'};
             `">
        </div>
      </div>
    </div>

    <!-- Efectos de fondo animados -->
    <div class="absolute inset-0 overflow-hidden transition-all duration-150 ease-out">
      <transition name="theme-fade-fast" mode="out-in">
        <div v-if="isDarkMode" key="dark-bg-1" class="absolute top-1/4 -left-16 w-56 h-56 bg-gradient-to-br from-blue-500/30 to-cyan-400/20 rounded-full blur-3xl animate-pulse-fast transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.5, transform: 'scale(1.05)' } : {}"></div>
        <div v-else key="light-bg-1" class="absolute top-1/4 -left-16 w-56 h-56 bg-gradient-to-br from-blue-100/50 to-blue-50/40 rounded-full blur-3xl animate-pulse-fast transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.5, transform: 'scale(1.05)' } : {}"></div>
      </transition>
      
      <transition name="theme-fade-fast" mode="out-in">
        <div v-if="isDarkMode" key="dark-bg-2" class="absolute bottom-1/3 -right-16 w-60 h-60 bg-gradient-to-br from-indigo-500/30 to-blue-500/20 rounded-full blur-3xl animate-pulse-fast animate-delay-500 transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.5, transform: 'scale(1.05)' } : {}"></div>
        <div v-else key="light-bg-2" class="absolute bottom-1/3 -right-16 w-60 h-60 bg-gradient-to-br from-blue-100/60 to-blue-50/40 rounded-full blur-3xl animate-pulse-fast animate-delay-500 transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.5, transform: 'scale(1.05)' } : {}"></div>
      </transition>
      
      <transition name="theme-fade-fast" mode="out-in">
        <div v-if="isDarkMode" key="dark-bg-3" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-600/20 to-cyan-500/15 rounded-full blur-3xl animate-pulse-fast animate-delay-1000 transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.5, transform: 'scale(1.05)' } : {}"></div>
        <div v-else key="light-bg-3" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-100/40 to-blue-50/30 rounded-full blur-3xl animate-pulse-fast animate-delay-1000 transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.5, transform: 'scale(1.05)' } : {}"></div>
      </transition>
      
      <!-- Partículas flotantes -->
      <div v-for="i in 12" :key="i" 
           class="absolute w-1 h-1 rounded-full animate-float transition-all duration-150"
           :class="isDarkMode ? 'bg-blue-400/50' : 'bg-blue-300/50'"
           :style="`
             top: ${Math.random() * 100}%; 
             left: ${Math.random() * 100}%; 
             animation-delay: ${Math.random() * 2}s;
             filter: ${isTransitioning ? 'brightness(1.3)' : 'brightness(1)'};
           `">
      </div>

      <!-- Gradientes de borde -->
      <div class="absolute top-0 left-0 right-0 h-40 transition-all duration-150"
           :class="isDarkMode ? 'bg-gradient-to-b from-blue-900/50 to-transparent' : 'bg-gradient-to-b from-blue-100/50 to-transparent'">
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-40 transition-all duration-150"
           :class="isDarkMode ? 'bg-gradient-to-t from-blue-800/40 to-transparent' : 'bg-gradient-to-t from-blue-200/40 to-transparent'">
      </div>
    </div>

    <!-- Contenido Principal -->
    <div class="w-full max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10 py-8 md:py-12 flex flex-col items-center">
      
      <!-- ✅ BOTÓN DE TEMA - CONTENEDOR SEPARADO -->
      <div class="absolute top-0 right-0 md:right-4 z-20 w-full max-w-7xl mx-auto px-4 md:px-8">
        <button
          @click="toggleTheme"
          class="relative flex items-center justify-center w-36 h-14 rounded-xl border shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-150 ease-out overflow-hidden group theme-switch-premium float-right"
          :class="isDarkMode 
            ? 'border-cyan-400/60 hover:border-cyan-300 shadow-cyan-500/20 bg-gradient-to-br from-blue-900/90 via-indigo-900/90 to-purple-900/90' 
            : 'border-blue-300/60 hover:border-blue-200 shadow-blue-400/20 bg-gradient-to-br from-white/95 via-blue-50/95 to-blue-100/95'"
          :title="isDarkMode ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'"
          aria-label="Cambiar tema"
        >
          <!-- Switch GRANDE que cubre completamente el icono correspondiente -->
          <div 
            class="absolute w-16 h-16 rounded-full transition-all duration-300 ease-out transform z-30 overflow-hidden"
            :class="isDarkMode ? 'right-4' : 'left-4'"
            :style="isTransitioning ? { 
              filter: 'brightness(1.2)',
              boxShadow: isDarkMode 
                ? '0 0 20px rgba(96, 165, 250, 0.5), inset 0 0 20px rgba(96, 165, 250, 0.3)' 
                : '0 0 20px rgba(250, 204, 21, 0.5), inset 0 0 20px rgba(250, 204, 21, 0.3)'
            } : {}"
          >
            <!-- Fondo del switch -->
            <div class="absolute inset-0">
              <!-- Base del switch con gradiente -->
              <div 
                class="absolute inset-0 transition-all duration-150"
                :class="isDarkMode 
                  ? 'bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800' 
                  : 'bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500'"
                :style="isTransitioning ? { 
                  background: isDarkMode 
                    ? 'linear-gradient(135deg, #1d4ed8, #3b82f6, #1e40af)' 
                    : 'linear-gradient(135deg, #facc15, #fde047, #eab308)'
                } : {}"
              ></div>
              
              <!-- Efecto de luz interior pulsante -->
              <div class="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent opacity-70 animate-pulse-slow transition-all duration-150"
                   :style="isTransitioning ? { opacity: 0.9 } : {}"></div>
              
              <!-- Brillo de borde con efecto neón -->
              <div 
                class="absolute inset-0 rounded-full border-2 transition-all duration-150"
                :class="isDarkMode 
                  ? 'border-blue-400/90' 
                  : 'border-yellow-400/90'"
                :style="isTransitioning ? { 
                  borderColor: isDarkMode ? 'rgba(96, 165, 250, 0.95)' : 'rgba(250, 204, 21, 0.95)',
                  boxShadow: isDarkMode 
                    ? '0 0 15px rgba(96, 165, 250, 0.6), inset 0 0 10px rgba(96, 165, 250, 0.4)' 
                    : '0 0 15px rgba(250, 204, 21, 0.6), inset 0 0 10px rgba(250, 204, 21, 0.4)'
                } : {}"
              ></div>
              
              <!-- Sombra interna para profundidad -->
              <div class="absolute inset-0 rounded-full shadow-inner transition-all duration-150"
                   :class="isDarkMode 
                     ? 'shadow-blue-900/70' 
                     : 'shadow-yellow-900/40'"
                   :style="isTransitioning ? { 
                     boxShadow: isDarkMode 
                       ? 'inset 0 4px 8px rgba(0, 0, 0, 0.5)' 
                       : 'inset 0 4px 8px rgba(0, 0, 0, 0.3)'
                   } : {}"></div>
            </div>
            
            <!-- Icono dentro del switch (SVG) -->
            <div class="absolute inset-0 flex items-center justify-center z-10">
              <!-- Icono de Luna para tema oscuro -->
              <svg v-if="isDarkMode" class="w-8 h-8 transition-all duration-150" fill="currentColor" viewBox="0 0 20 20"
                   :class="isTransitioning ? 'text-blue-200 filter drop-shadow-[0_0_10px_rgba(147,197,253,0.8)]' : 'text-blue-300'">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
              </svg>
              
              <!-- Icono de Sol para tema claro -->
              <svg v-else class="w-8 h-8 transition-all duration-150" fill="currentColor" viewBox="0 0 20 20"
                   :class="isTransitioning ? 'text-yellow-200 filter drop-shadow-[0_0_10px_rgba(253,224,71,0.8)]' : 'text-yellow-400'">
                <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
              </svg>
            </div>
            
            <!-- Brillo central dentro del switch -->
            <div class="absolute top-1/2 left-1/2 w-3 h-3 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-sm transition-all duration-150"
                 :class="isDarkMode ? 'bg-blue-300/80' : 'bg-yellow-300/80'"
                 :style="isTransitioning ? { 
                   width: '4px', 
                   height: '4px',
                   opacity: 0.9
                 } : {}"></div>
          </div>
          
          <!-- Efecto de brillo dinámico al pasar el mouse -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-out"></div>
          
          <!-- Contenedor principal con ambos iconos (icono inactivo) -->
          <div class="relative w-full h-full flex items-center justify-center overflow-hidden">
            
            <!-- Sol (izquierda) - Icono INACTIVO cuando tema oscuro -->
            <div class="absolute left-4 w-8 h-8 transition-all duration-150 ease-out z-20"
                 :class="isDarkMode 
                   ? 'opacity-40 scale-90 text-yellow-300/50' 
                   : 'opacity-100 scale-110 text-yellow-400 filter drop-shadow-[0_0_8px_rgba(250,204,21,0.7)]'"
                 :style="isTransitioning ? { 
                   filter: isDarkMode 
                     ? 'drop-shadow(0 0 4px rgba(245, 158, 11, 0.3)) brightness(1.2)' 
                     : 'drop-shadow(0 0 12px rgba(250, 204, 21, 0.6)) brightness(1.3)',
                   transform: isDarkMode ? 'scale(0.95)' : 'scale(1.1)'
                 } : {}">
              <svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
              </svg>
            </div>
            
            <!-- Luna (derecha) - Icono INACTIVO cuando tema claro -->
            <div class="absolute right-4 w-7 h-7 transition-all duration-150 ease-out z-20"
                 :class="!isDarkMode 
                   ? 'opacity-40 scale-90 text-blue-400/50' 
                   : 'opacity-100 scale-110 text-blue-300 filter drop-shadow-[0_0_8px_rgba(96,165,250,0.7)]'"
                 :style="isTransitioning ? { 
                   filter: !isDarkMode 
                     ? 'drop-shadow(0 0 4px rgba(147, 197, 253, 0.3)) brightness(1.2)' 
                     : 'drop-shadow(0 0 12px rgba(96, 165, 250, 0.6)) brightness(1.3)',
                   transform: !isDarkMode ? 'scale(0.95)' : 'scale(1.1)'
                 } : {}">
              <svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
              </svg>
            </div>
            
            <!-- Texto "DÍA/NOCHE" debajo del botón -->
            <div class="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-[10px] font-semibold uppercase tracking-wide opacity-90 z-5 transition-all duration-150 whitespace-nowrap"
                 :class="isDarkMode ? 'text-blue-300/90' : 'text-yellow-600/90'"
                 :style="isTransitioning ? { 
                   color: isDarkMode ? 'rgba(147, 197, 253, 0.95)' : 'rgba(202, 138, 4, 0.95)',
                   opacity: 1,
                   textShadow: isDarkMode 
                     ? '0 1px 3px rgba(147, 197, 253, 0.4)' 
                     : '0 1px 3px rgba(202, 138, 4, 0.4)',
                   fontWeight: '600'
                 } : {}">
              {{ isDarkMode ? 'NOCHE' : 'DÍA' }}
            </div>
            
          </div>
          
          <!-- Rayos del sol animados (solo en tema CLARO, fuera del switch) -->
          <div v-if="!isDarkMode" class="absolute left-4 w-8 h-8 z-10">
            <div v-for="(ray, index) in 8" :key="index"
                 class="absolute top-1/2 left-1/2 w-0.5 h-3 bg-yellow-300/80 rounded-full transform origin-center transition-all duration-150"
                 :style="`
                   transform: rotate(${index * 45}deg) translateY(-12px);
                   animation: pulse-ray-fast 1.5s ease-in-out infinite;
                   animation-delay: ${index * 0.03}s;
                   ${isTransitioning ? 'opacity: 0.9; height: 3.5px;' : ''}
                 `">
            </div>
          </div>
          
          <!-- Constelación estelar (solo en tema OSCURO, fuera del switch) -->
          <div v-if="isDarkMode" class="absolute right-4 w-7 h-7 z-10">
            <div v-for="(star, index) in 4" :key="index"
                 class="absolute rounded-full bg-blue-100/80 animate-twinkle-fast transition-all duration-150"
                 :style="`
                   width: ${Math.random() * 1.2 + 0.8}px;
                   height: ${Math.random() * 1.2 + 0.8}px;
                   top: ${Math.random() * 100}%;
                   left: ${Math.random() * 100}%;
                   animation-delay: ${index * 0.15}s;
                   ${isTransitioning ? 'opacity: 1;' : ''}
                 `">
            </div>
          </div>
          
          <!-- Efecto de partículas al hacer clic -->
          <div v-if="showParticles" class="absolute inset-0 pointer-events-none z-40">
            <div v-for="i in 10" :key="i"
                 class="absolute w-1.5 h-1.5 rounded-full animate-particle-explode-fast transition-all duration-150"
                 :class="isDarkMode ? 'bg-blue-400' : 'bg-yellow-400'"
                 :style="`
                   --x: ${Math.random() * 40 - 20}px;
                   --y: ${Math.random() * 40 - 20}px;
                   animation-delay: ${Math.random() * 0.1}s;
                   ${isTransitioning ? 'filter: brightness(1.3);' : ''}
                 `">
            </div>
          </div>
          
          <!-- Tooltip -->
          <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap transition-all duration-150 pointer-events-none z-50">
            <div class="px-2 py-1 text-[10px] font-medium rounded-md backdrop-blur-sm shadow-sm transition-all duration-150"
                 :class="isDarkMode 
                   ? 'bg-blue-900/90 text-blue-300 border border-blue-400/30' 
                   : 'bg-yellow-50/95 text-yellow-800 border border-yellow-400/30'"
                 :style="isTransitioning ? { 
                   backgroundColor: isDarkMode ? 'rgba(30, 58, 138, 0.95)' : 'rgba(254, 252, 232, 0.95)',
                   borderColor: isDarkMode ? 'rgba(96, 165, 250, 0.4)' : 'rgba(250, 204, 21, 0.4)'
                 } : {}">
              {{ isDarkMode ? 'Activar día' : 'Activar noche' }}
            </div>
          </div>
          
        </button>
      </div>
      
      <!-- ✅ HEADER CENTRADO - SIN AFECTAR POR BOTÓN -->
      <div class="text-center w-full flex flex-col items-center mb-12 md:mb-16 animate-fadeInUp transition-all duration-150">
        
        <!-- Badge animado -->
        <div 
          class="inline-flex items-center backdrop-blur-xl rounded-full px-5 py-2.5 mb-3 shadow-glow animate-pulse-slow transition-all duration-150"
          :class="isDarkMode 
            ? 'bg-gradient-to-r from-blue-600/50 to-cyan-500/40 border border-cyan-400/50' 
            : 'bg-gradient-to-r from-blue-500/40 to-blue-400/50 border border-blue-400/60'"
          :style="isTransitioning ? { 
            filter: 'brightness(1.2)',
            boxShadow: isDarkMode 
              ? '0 0 20px rgba(34, 211, 238, 0.4)' 
              : '0 0 20px rgba(59, 130, 246, 0.4)'
          } : {}"
        >
          <div 
            class="w-2.5 h-2.5 rounded-full mr-2.5 animate-pulse-fast transition-all duration-150"
            :class="isDarkMode 
              ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
              : 'bg-gradient-to-r from-blue-400 to-blue-300'"
            :style="isTransitioning ? { 
              background: isDarkMode 
                ? 'linear-gradient(to right, #22d3ee, #60a5fa)' 
                : 'linear-gradient(to right, #60a5fa, #93c5fd)',
              transform: 'scale(1.2)'
            } : {}"
          ></div>
          <span class="text-sm font-bold tracking-wider transition-colors duration-150"
                :class="isDarkMode ? 'text-white' : 'text-blue-900'"
                :style="isTransitioning ? { 
                  color: isDarkMode ? '#f0f9ff' : '#1e3a8a',
                  textShadow: isDarkMode 
                    ? '0 0 5px rgba(240, 249, 255, 0.5)' 
                    : '0 0 5px rgba(30, 58, 138, 0.3)'
                } : {}">🔄 NUESTRO PROCESO</span>
          <div 
            class="ml-3 w-1 h-5 rounded-full transition-all duration-150"
            :class="isDarkMode 
              ? 'bg-gradient-to-b from-blue-300/40 to-blue-400/40' 
              : 'bg-gradient-to-b from-blue-400/40 to-blue-500/40'"
            :style="isTransitioning ? { 
              background: isDarkMode 
                ? 'linear-gradient(to bottom, rgba(147, 197, 253, 0.4), rgba(96, 165, 250, 0.4))' 
                : 'linear-gradient(to bottom, rgba(59, 130, 246, 0.4), rgba(37, 99, 235, 0.4))'
            } : {}">
          </div>
        </div>
        
        <!-- Título CENTRADO -->
        <div class="relative w-full mb-6 md:mb-8 transition-all duration-150">
          <div class="w-full flex justify-center">
            <div class="w-full max-w-4xl">
              <h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-center w-full tracking-tight leading-tight animate-slideInLeft transition-all duration-150">
                <span class="relative inline-block">
                  <span 
                    class="bg-clip-text text-transparent relative z-20 pb-2 transition-all duration-150"
                    :class="isDarkMode 
                      ? 'bg-gradient-to-r from-white via-blue-100 to-blue-200' 
                      : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'"
                    :style="isTransitioning ? { 
                      backgroundImage: isDarkMode 
                        ? 'linear-gradient(to right, #ffffff, #a5f3fc, #dbeafe)' 
                        : 'linear-gradient(to right, #1e3a8a, #1d4ed8, #2563eb)'
                    } : {}"
                  >
                    Metodología Probada
                  </span>
                  
                  <!-- Subrayado animado -->
                  <div 
                    class="absolute -bottom-1 left-1/4 right-1/4 h-0.5 rounded-full opacity-70 mt-1 transition-all duration-150"
                    :class="isDarkMode 
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
                      : 'bg-gradient-to-r from-blue-500 to-blue-400'"
                    :style="isTransitioning ? { 
                      background: isDarkMode 
                        ? 'linear-gradient(to right, #22d3ee, #60a5fa)' 
                        : 'linear-gradient(to right, #3b82f6, #60a5fa)',
                      opacity: 0.85,
                      height: '0.6px'
                    } : {}"
                  ></div>
                </span>
              </h2>
            </div>
          </div>
        </div>
        
        <!-- Subtítulo CENTRADO -->
        <div class="relative w-full max-w-3xl mx-auto mb-8 md:mb-10 animate-fadeInUp transition-all duration-150" style="animation-delay: 50ms">
          <div class="relative backdrop-blur-md border rounded-xl p-4 md:p-5 shadow-xl transform transition-all duration-150 hover:scale-102"
               :class="isDarkMode 
                 ? 'bg-blue-900/30 border-blue-400/20 shadow-blue-500/15 hover:border-blue-300/40' 
                 : 'bg-blue-50/30 border-blue-300/20 shadow-blue-400/15 hover:border-blue-400/40'"
               :style="isTransitioning ? { 
                 backgroundColor: isDarkMode ? 'rgba(30, 58, 138, 0.35)' : 'rgba(219, 234, 254, 0.35)',
                 borderColor: isDarkMode ? 'rgba(96, 165, 250, 0.3)' : 'rgba(59, 130, 246, 0.3)',
                 boxShadow: isDarkMode 
                   ? '0 10px 25px rgba(34, 211, 238, 0.15)' 
                   : '0 10px 25px rgba(59, 130, 246, 0.15)'
               } : {}">
            <p class="text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose text-center font-medium transition-colors duration-150"
               :class="isDarkMode ? 'text-white/90' : 'text-blue-800/90'"
               :style="isTransitioning ? { 
                 color: isDarkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(30, 58, 138, 0.95)'
               } : {}">
              <span :class="isDarkMode ? 'text-white' : 'text-blue-900'" :style="isTransitioning ? { color: isDarkMode ? '#ffffff' : '#1e3a8a' } : {}">Un proceso estructurado </span> 
              <span class="relative inline-block">
                <span 
                  class="bg-clip-text text-transparent font-bold transition-all duration-150"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-r from-blue-300 via-blue-200 to-white' 
                    : 'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400'"
                  :style="isTransitioning ? { 
                    backgroundImage: isDarkMode 
                      ? 'linear-gradient(to right, #93c5fd, #bfdbfe, #ffffff)' 
                      : 'linear-gradient(to right, #2563eb, #3b82f6, #60a5fa)'
                  } : {}"
                >
                  que garantiza el éxito
                </span>
                <!-- Brillo de fondo del texto -->
                <div 
                  class="absolute inset-0 blur-sm -z-10 rounded-full transition-all duration-150"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-r from-blue-400/30 via-blue-300/25 to-blue-200/25' 
                    : 'bg-gradient-to-r from-blue-500/30 via-blue-400/25 to-blue-300/25'"
                  :style="isTransitioning ? { 
                    background: isDarkMode 
                      ? 'linear-gradient(to right, rgba(96, 165, 250, 0.4), rgba(147, 197, 253, 0.35), rgba(191, 219, 254, 0.35))' 
                      : 'linear-gradient(to right, rgba(59, 130, 246, 0.4), rgba(96, 165, 250, 0.35), rgba(147, 197, 253, 0.35))',
                    filter: 'blur(6px)'
                  } : {}"
                ></div>
              </span>
              de tu <span :class="isDarkMode ? 'text-blue-100' : 'text-blue-700'" :style="isTransitioning ? { color: isDarkMode ? '#dbeafe' : '#1d4ed8' } : {}">proyecto digital</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Contenedor del carrusel de pasos - MODIFICADO -->
      <div class="relative w-full max-w-6xl mx-auto mb-10 md:mb-12">
        <!-- Contenedor principal con tarjetas - ALTURAS AJUSTADAS -->
        <div class="flex items-center justify-center h-[500px] md:h-[550px] transition-all duration-150">
          
          <!-- Botón izquierdo -->
          <button 
            @click="prevSlide"
            :disabled="isAnimating"
            class="relative z-30 w-14 h-14 md:w-16 md:h-16 backdrop-blur-xl rounded-xl border-2 flex items-center justify-center transition-all duration-150 hover:scale-110 hover:shadow-2xl group mr-2 md:mr-4 shadow-lg transform-gpu hover:-translate-y-0.5"
            :class="isDarkMode 
              ? 'bg-blue-900/40 border-blue-400/40 hover:border-cyan-300/60 shadow-blue-500/20 hover:shadow-blue-500/40' 
              : 'bg-blue-50/40 border-blue-300/40 hover:border-blue-400/60 shadow-blue-400/20 hover:shadow-blue-400/40'"
            :style="isTransitioning ? { 
              backgroundColor: isDarkMode ? 'rgba(30, 58, 138, 0.45)' : 'rgba(219, 234, 254, 0.45)',
              borderColor: isDarkMode ? 'rgba(96, 165, 250, 0.5)' : 'rgba(59, 130, 246, 0.5)',
              filter: 'brightness(1.1)'
            } : {}"
          >
            <!-- Efecto de fondo -->
            <div class="absolute inset-0 transition-all duration-150"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-br from-blue-800/50 to-indigo-800/50' 
                   : 'bg-gradient-to-br from-blue-100/50 to-blue-200/50'"></div>
            
            <div class="relative w-8 h-8 rounded-lg flex items-center justify-center transform group-hover:-translate-x-1 transition-transform duration-150 transition-all duration-150"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-r from-blue-200 to-blue-100 shadow-inner' 
                   : 'bg-gradient-to-r from-blue-300 to-blue-200 shadow-inner'">
              <span class="text-xl font-bold transition-colors duration-150"
                    :class="isDarkMode ? 'text-blue-900' : 'text-blue-800'">
                ←
              </span>
            </div>
          </button>

          <!-- Contenedor de tarjetas -->
          <div class="flex-1 relative flex items-center justify-center h-full transition-all duration-150">
            
            <!-- Tarjeta anterior -->
            <div 
              v-if="prevCard"
              class="absolute left-0 w-[260px] h-[400px] md:w-[300px] md:h-[440px] transition-all duration-700 z-20"
              :class="isAnimating ? 'opacity-70 -translate-x-12' : 'opacity-90'"
            >
              <div 
                class="w-full h-full backdrop-blur-2xl rounded-3xl border-2 shadow-xl p-5 transform-gpu hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer group flex flex-col items-center relative overflow-hidden hover:border-blue-500/80 min-h-full"
                style="transform: rotateY(15deg) translateZ(-15px);"
                @click="prevSlide"
                :class="isDarkMode 
                  ? 'bg-gradient-to-br from-blue-700/50 via-indigo-800/60 to-blue-900/50 border-cyan-400/50 hover:border-cyan-300/70' 
                  : 'bg-gradient-to-br from-blue-50/90 via-blue-100/80 to-blue-200/70 border-blue-400/60 hover:border-blue-500/80'"
                :style="isTransitioning ? { 
                  background: isDarkMode 
                    ? 'linear-gradient(135deg, rgba(29, 78, 216, 0.6), rgba(55, 48, 163, 0.7), rgba(30, 58, 138, 0.6))' 
                    : 'linear-gradient(135deg, rgba(219, 234, 254, 0.95), rgba(191, 219, 254, 0.85), rgba(147, 197, 253, 0.75))',
                  borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.6)' : 'rgba(59, 130, 246, 0.7)',
                  filter: 'brightness(1.1)'
                } : {}"
              >
                <!-- ICONO MÁS GRANDE (sin número) -->
                <div class="flex justify-center mb-5 w-full">
                  <div class="w-20 h-20 md:w-24 md:h-24 rounded-xl flex items-center justify-center border-2 shadow-xl transform group-hover:scale-110 transition-transform duration-150 animate-pulse-slow"
                       :class="isDarkMode 
                         ? 'bg-gradient-to-br from-blue-500/80 to-cyan-500/80 border-cyan-400/40' 
                         : 'bg-gradient-to-br from-blue-200/80 to-blue-300/80 border-blue-300/40'">
                    <span class="text-4xl transition-all duration-150"
                          :style="isTransitioning ? { transform: 'scale(1.2)' } : {}">{{ prevCard.icon }}</span>
                  </div>
                </div>
                
                <!-- Título -->
                <h3 class="text-xl font-bold mb-3 text-center w-full group-hover:text-blue-800 transition-colors duration-150 px-3 whitespace-normal tracking-tight"
                    :class="isDarkMode ? 'text-white' : 'text-blue-900'"
                    :style="isTransitioning ? { 
                      color: isDarkMode ? '#ffffff' : '#1e3a8a'
                    } : {}">
                  {{ prevCard.title }}
                </h3>
                
                <!-- Descripción - ALTURA FIJA EVITA CORTES -->
                <p class="leading-relaxed text-base text-center mb-5 min-h-[4rem] max-h-[4.5rem] w-full px-3 transition-colors duration-150 overflow-hidden text-ellipsis line-clamp-3"
                   :class="isDarkMode ? 'text-white/85' : 'text-blue-800/85'"
                   :style="isTransitioning ? { 
                     color: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(30, 58, 138, 0.9)'
                   } : {}">
                  {{ prevCard.description }}
                </p>
                
                <!-- Características - CON ALTURA CONTROLADA -->
                <ul class="space-y-2 w-full px-3 flex-grow overflow-hidden">
                  <li v-for="(feature, featureIndex) in prevCard.features" :key="featureIndex" 
                      class="flex items-start justify-center">
                    <div class="w-3 h-3 rounded-full mr-3 mt-0.5 flex-shrink-0 shadow-sm animate-pulse-fast"
                         :class="isDarkMode 
                           ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
                           : 'bg-gradient-to-r from-blue-400 to-blue-300'"
                         :style="isTransitioning ? { 
                           background: isDarkMode 
                             ? 'linear-gradient(to right, #22d3ee, #60a5fa)' 
                             : 'linear-gradient(to right, #60a5fa, #93c5fd)',
                           transform: 'scale(1.2)'
                         } : {}">
                    </div>
                    <span class="text-sm text-center flex-1 font-medium transition-colors duration-150 line-clamp-2"
                          :class="isDarkMode ? 'text-white/80' : 'text-blue-800/80'"
                          :style="isTransitioning ? { 
                            color: isDarkMode ? 'rgba(255, 255, 255, 0.85)' : 'rgba(30, 58, 138, 0.85)'
                          } : {}">
                      {{ feature }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Tarjeta actual central - SIN NÚMERO -->
            <div 
              class="absolute left-1/2 transform -translate-x-1/2 w-[320px] h-[480px] md:w-[380px] md:h-[540px] z-30 transition-all duration-700"
              :class="isAnimating ? 'opacity-90 scale-95' : 'opacity-100 scale-100'"
            >
              <div 
                class="w-full h-full backdrop-blur-2xl rounded-3xl border-2 shadow-2xl p-6 md:p-7 transform-gpu hover:scale-[1.02] transition-all duration-500 group flex flex-col items-center relative overflow-hidden hover:shadow-glow min-h-full"
                :class="isDarkMode 
                  ? 'bg-gradient-to-br from-blue-700/60 via-indigo-800/70 to-blue-900/60 border-cyan-400/60 hover:border-cyan-300/80 shadow-blue-500/25 hover:shadow-blue-500/40' 
                  : 'bg-gradient-to-br from-blue-50/95 via-blue-100/85 to-blue-200/75 border-blue-400/70 hover:border-blue-500/90 shadow-blue-400/25 hover:shadow-blue-400/40'"
                :style="isTransitioning ? { 
                  background: isDarkMode 
                    ? 'linear-gradient(135deg, rgba(29, 78, 216, 0.7), rgba(55, 48, 163, 0.8), rgba(30, 58, 138, 0.7))' 
                    : 'linear-gradient(135deg, rgba(219, 234, 254, 0.98), rgba(191, 219, 254, 0.9), rgba(147, 197, 253, 0.8))',
                  borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.7)' : 'rgba(59, 130, 246, 0.8)',
                  filter: 'brightness(1.1)'
                } : {}"
              >
                <!-- ICONO GRANDE CENTRAL (sin número) -->
                <div class="flex justify-center mb-6 w-full relative">
                  <div class="w-28 h-28 md:w-32 md:h-32 rounded-2xl flex items-center justify-center border-2 shadow-2xl transform group-hover:rotate-12 transition-transform duration-500 animate-pulse-slow"
                       :class="isDarkMode 
                         ? 'bg-gradient-to-br from-blue-500/70 to-cyan-600/70 border-cyan-400/60' 
                         : 'bg-gradient-to-br from-blue-300/70 to-blue-400/70 border-blue-300/60'">
                    <span class="text-5xl md:text-6xl custom-bounce-slow transition-all duration-150"
                          :style="isTransitioning ? { transform: 'scale(1.2)' } : {}">{{ currentCard.icon }}</span>
                  </div>
                </div>
                
                <!-- Título principal -->
                <h3 class="text-2xl md:text-3xl font-black mb-4 text-center w-full bg-clip-text text-transparent px-4 whitespace-normal tracking-tight transition-all duration-150"
                    :class="isDarkMode 
                      ? 'bg-gradient-to-r from-white via-blue-100 to-blue-200' 
                      : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'"
                    :style="isTransitioning ? { 
                      backgroundImage: isDarkMode 
                        ? 'linear-gradient(to right, #ffffff, #a5f3fc, #dbeafe)' 
                        : 'linear-gradient(to right, #1e3a8a, #1d4ed8, #2563eb)'
                    } : {}">
                  {{ currentCard.title }}
                </h3>
                
                <!-- Descripción - ALTURA CONTROLADA -->
                <p class="leading-relaxed text-lg md:text-xl text-center mb-6 min-h-[5rem] max-h-[5.5rem] w-full px-4 transition-colors duration-150 overflow-hidden text-ellipsis line-clamp-3"
                   :class="isDarkMode ? 'text-white/95' : 'text-blue-800/95'"
                   :style="isTransitioning ? { 
                     color: isDarkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(30, 58, 138, 0.95)'
                   } : {}">
                  {{ currentCard.description }}
                </p>
                
                <!-- Características - CON ESPACIO SUFICIENTE -->
                <ul class="space-y-3 w-full px-4 mb-8 flex-grow overflow-y-auto">
                  <li v-for="(feature, featureIndex) in currentCard.features" :key="featureIndex" 
                      class="flex items-start justify-center transform group-hover:translate-x-2 transition-transform duration-150"
                      :style="`transition-delay: ${featureIndex * 100}ms`">
                    <div class="w-5 h-5 rounded-full mr-3 mt-0.5 flex-shrink-0 shadow-md group-hover:scale-125 transition-all duration-150 animate-pulse-fast"
                         :class="isDarkMode 
                           ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
                           : 'bg-gradient-to-r from-blue-400 to-blue-300'"
                         :style="isTransitioning ? { 
                           background: isDarkMode 
                             ? 'linear-gradient(to right, #22d3ee, #60a5fa)' 
                             : 'linear-gradient(to right, #60a5fa, #93c5fd)',
                           transform: 'scale(1.2)'
                         } : {}">
                    </div>
                    <span class="text-lg md:text-xl text-center flex-1 font-bold transition-colors duration-150 line-clamp-2"
                          :class="isDarkMode ? 'text-white/90' : 'text-blue-800/90'"
                          :style="isTransitioning ? { 
                            color: isDarkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(30, 58, 138, 0.95)'
                          } : {}">
                      {{ feature }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Tarjeta siguiente -->
            <div 
              v-if="nextCard"
              class="absolute right-0 w-[260px] h-[400px] md:w-[300px] md:h-[440px] transition-all duration-700 z-20"
              :class="isAnimating ? 'opacity-70 translate-x-12' : 'opacity-90'"
            >
              <div 
                class="w-full h-full backdrop-blur-2xl rounded-3xl border-2 shadow-xl p-5 transform-gpu hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer group flex flex-col items-center relative overflow-hidden hover:border-blue-500/80 min-h-full"
                style="transform: rotateY(-15deg) translateZ(-15px);"
                @click="nextSlide"
                :class="isDarkMode 
                  ? 'bg-gradient-to-br from-blue-700/50 via-indigo-800/60 to-blue-900/50 border-cyan-400/50 hover:border-cyan-300/70' 
                  : 'bg-gradient-to-br from-blue-50/90 via-blue-100/80 to-blue-200/70 border-blue-400/60 hover:border-blue-500/80'"
                :style="isTransitioning ? { 
                  background: isDarkMode 
                    ? 'linear-gradient(135deg, rgba(29, 78, 216, 0.6), rgba(55, 48, 163, 0.7), rgba(30, 58, 138, 0.6))' 
                    : 'linear-gradient(135deg, rgba(219, 234, 254, 0.95), rgba(191, 219, 254, 0.85), rgba(147, 197, 253, 0.75))',
                  borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.6)' : 'rgba(59, 130, 246, 0.7)',
                  filter: 'brightness(1.1)'
                } : {}"
              >
                <!-- ICONO MÁS GRANDE (sin número) -->
                <div class="flex justify-center mb-5 w-full">
                  <div class="w-20 h-20 md:w-24 md:h-24 rounded-xl flex items-center justify-center border-2 shadow-xl transform group-hover:scale-110 transition-transform duration-150 animate-pulse-slow"
                       :class="isDarkMode 
                         ? 'bg-gradient-to-br from-blue-500/80 to-cyan-500/80 border-cyan-400/40' 
                         : 'bg-gradient-to-br from-blue-200/80 to-blue-300/80 border-blue-300/40'">
                    <span class="text-4xl transition-all duration-150"
                          :style="isTransitioning ? { transform: 'scale(1.2)' } : {}">{{ nextCard.icon }}</span>
                  </div>
                </div>
                
                <!-- Título -->
                <h3 class="text-xl font-bold mb-3 text-center w-full group-hover:text-blue-800 transition-colors duration-150 px-3 whitespace-normal tracking-tight"
                    :class="isDarkMode ? 'text-white' : 'text-blue-900'"
                    :style="isTransitioning ? { 
                      color: isDarkMode ? '#ffffff' : '#1e3a8a'
                    } : {}">
                  {{ nextCard.title }}
                </h3>
                
                <!-- Descripción - ALTURA FIJA -->
                <p class="leading-relaxed text-base text-center mb-5 min-h-[4rem] max-h-[4.5rem] w-full px-3 transition-colors duration-150 overflow-hidden text-ellipsis line-clamp-3"
                   :class="isDarkMode ? 'text-white/85' : 'text-blue-800/85'"
                   :style="isTransitioning ? { 
                     color: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(30, 58, 138, 0.9)'
                   } : {}">
                  {{ nextCard.description }}
                </p>
                
                <!-- Características - CON ALTURA CONTROLADA -->
                <ul class="space-y-2 w-full px-3 flex-grow overflow-hidden">
                  <li v-for="(feature, featureIndex) in nextCard.features" :key="featureIndex" 
                      class="flex items-start justify-center">
                    <div class="w-3 h-3 rounded-full mr-3 mt-0.5 flex-shrink-0 shadow-sm animate-pulse-fast"
                         :class="isDarkMode 
                           ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
                           : 'bg-gradient-to-r from-blue-400 to-blue-300'"
                         :style="isTransitioning ? { 
                           background: isDarkMode 
                             ? 'linear-gradient(to right, #22d3ee, #60a5fa)' 
                             : 'linear-gradient(to right, #60a5fa, #93c5fd)',
                           transform: 'scale(1.2)'
                         } : {}">
                    </div>
                    <span class="text-sm text-center flex-1 font-medium transition-colors duration-150 line-clamp-2"
                          :class="isDarkMode ? 'text-white/80' : 'text-blue-800/80'"
                          :style="isTransitioning ? { 
                            color: isDarkMode ? 'rgba(255, 255, 255, 0.85)' : 'rgba(30, 58, 138, 0.85)'
                          } : {}">
                      {{ feature }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Botón derecho -->
          <button 
            @click="nextSlide"
            :disabled="isAnimating"
            class="relative z-30 w-14 h-14 md:w-16 md:h-16 backdrop-blur-xl rounded-xl border-2 flex items-center justify-center transition-all duration-150 hover:scale-110 hover:shadow-2xl group ml-2 md:ml-4 shadow-lg transform-gpu hover:-translate-y-0.5"
            :class="isDarkMode 
              ? 'bg-blue-900/40 border-blue-400/40 hover:border-cyan-300/60 shadow-blue-500/20 hover:shadow-blue-500/40' 
              : 'bg-blue-50/40 border-blue-300/40 hover:border-blue-400/60 shadow-blue-400/20 hover:shadow-blue-400/40'"
            :style="isTransitioning ? { 
              backgroundColor: isDarkMode ? 'rgba(30, 58, 138, 0.45)' : 'rgba(219, 234, 254, 0.45)',
              borderColor: isDarkMode ? 'rgba(96, 165, 250, 0.5)' : 'rgba(59, 130, 246, 0.5)',
              filter: 'brightness(1.1)'
            } : {}"
          >
            <!-- Efecto de fondo -->
            <div class="absolute inset-0 transition-all duration-150"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-br from-blue-800/50 to-indigo-800/50' 
                   : 'bg-gradient-to-br from-blue-100/50 to-blue-200/50'"></div>
            
            <div class="relative w-8 h-8 rounded-lg flex items-center justify-center transform group-hover:translate-x-1 transition-transform duration-150 transition-all duration-150"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-r from-blue-200 to-blue-100 shadow-inner' 
                   : 'bg-gradient-to-r from-blue-300 to-blue-200 shadow-inner'">
              <span class="text-xl font-bold transition-colors duration-150"
                    :class="isDarkMode ? 'text-blue-900' : 'text-blue-800'">
                →
              </span>
            </div>
          </button>
        </div>

        <!-- Indicadores - ACTUALIZADOS SIN NÚMEROS -->
        <div class="flex justify-center items-center mt-10 md:mt-12 space-x-3 md:space-x-4">
          <button 
            v-for="(step, index) in steps" 
            :key="index"
            @click="goToSlide(index)"
            class="relative w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-150 group hover:scale-125"
          >
            <div 
              class="absolute inset-0 rounded-full flex items-center justify-center transition-all duration-150 border-2"
              :class="currentIndex === index 
                ? (isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-300 border-cyan-300/80 shadow-glow' 
                    : 'bg-gradient-to-r from-blue-400 to-blue-300 border-blue-500/80 shadow-blue-500/20')
                : (isDarkMode 
                    ? 'bg-blue-800/40 border-blue-600/40' 
                    : 'bg-blue-200/40 border-blue-300/40')"
              :style="currentIndex === index 
                ? { 
                    opacity: 1, 
                    boxShadow: isDarkMode 
                      ? '0 0 15px rgba(34, 211, 238, 0.8)' 
                      : '0 0 15px rgba(59, 130, 246, 0.8)',
                  } 
                : { 
                    opacity: 0.7,
                  }"
            >
              <span class="text-lg font-bold transition-colors duration-150"
                    :class="currentIndex === index 
                      ? (isDarkMode ? 'text-blue-900' : 'text-white') 
                      : (isDarkMode ? 'text-blue-300/70' : 'text-blue-700/70')">
                {{ step.icon }}
              </span>
            </div>
            <div v-if="currentIndex === index" 
                 class="absolute inset-0 rounded-full custom-ping transition-all duration-150"
                 :class="isDarkMode ? 'bg-cyan-400/40' : 'bg-blue-500/40'">
            </div>
          </button>
        </div>
      </div>

      <!-- Nota adicional -->
      <div class="text-center mt-10 md:mt-12 max-w-3xl mx-auto px-4 animate-fadeInUp transition-all duration-150" style="animation-delay: 300ms">
        <div class="relative backdrop-blur-md border rounded-xl p-5 md:p-6 shadow-xl transform transition-all duration-150 hover:scale-102"
             :class="isDarkMode 
               ? 'bg-blue-900/30 border-blue-400/20 shadow-blue-500/15 hover:border-blue-300/40' 
               : 'bg-blue-50/30 border-blue-300/20 shadow-blue-400/15 hover:border-blue-400/40'"
             :style="isTransitioning ? { 
               backgroundColor: isDarkMode ? 'rgba(30, 58, 138, 0.35)' : 'rgba(219, 234, 254, 0.35)',
               borderColor: isDarkMode ? 'rgba(96, 165, 250, 0.3)' : 'rgba(59, 130, 246, 0.3)',
               boxShadow: isDarkMode 
                 ? '0 10px 25px rgba(34, 211, 238, 0.15)' 
                 : '0 10px 25px rgba(59, 130, 246, 0.15)'
             } : {}">
          <p class="text-base sm:text-lg leading-relaxed text-center font-medium transition-colors duration-150"
             :class="isDarkMode ? 'text-white/90' : 'text-blue-800/90'"
             :style="isTransitioning ? { 
               color: isDarkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(30, 58, 138, 0.95)'
             } : {}">
            <span :class="isDarkMode ? 'text-white' : 'text-blue-900'" :style="isTransitioning ? { color: isDarkMode ? '#ffffff' : '#1e3a8a' } : {}">¿Listo para comenzar?</span> 
            Nuestro proceso probado garantiza resultados excepcionales en cada paso.
            <button @click="scrollToSection('contacto')"
                    class="inline-flex items-center font-bold ml-1 transition-colors duration-150 group"
                    :class="isDarkMode ? 'text-blue-200 hover:text-white' : 'text-blue-700 hover:text-blue-900'"
                    :style="isTransitioning ? { 
                      color: isDarkMode ? '#bfdbfe' : '#1d4ed8'
                    } : {}">
              Iniciar Proyecto
              <span class="ml-1 transform transition-transform duration-150 group-hover:translate-x-1 animate-bounce-fast transition-all duration-150"
                    :class="isDarkMode ? 'text-blue-300' : 'text-blue-600'"
                    :style="isTransitioning ? { 
                      color: isDarkMode ? '#93c5fd' : '#3b82f6'
                    } : {}">
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
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';

// Estado del tema
const isDarkMode = ref(true);
const isTransitioning = ref(false);
const gradientPosition = ref(0);
const showParticles = ref(false);

// Gradientes premium
const darkGradient = 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 25%, #0369a1 50%, #1e40af 75%, #0f172a 100%)';
const lightGradient = 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 25%, #93c5fd 50%, #60a5fa 75%, #3b82f6 100%)';

// Inicializar tema desde localStorage o usar oscuro por defecto
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
  
  const duration = 200;
  const startTime = Date.now();
  
  const animateGradient = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const easedProgress = cubicBezier(progress, 0.4, 0, 0.2, 1);
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
  }, duration + 50);
};

// Función cubic bezier
const cubicBezier = (t, p0, p1, p2, p3) => {
  const u = 1 - t;
  const tt = t * t;
  const uu = u * u;
  const uuu = uu * u;
  const ttt = tt * t;
  
  const p = uuu * 0;
  const q = 3 * uu * t * p1;
  const r = 3 * u * tt * p2;
  const s = ttt * 1;
  
  return p + q + r + s;
};

// Estilo del degradado del fondo principal
const sectionGradientStyle = computed(() => {
  if (isTransitioning.value) {
    const startGradient = isDarkMode.value ? lightGradient : darkGradient;
    const endGradient = isDarkMode.value ? darkGradient : lightGradient;
    
    return {
      backgroundImage: `${startGradient}, ${endGradient}`,
      backgroundSize: `200% 200%, 200% 200%`,
      backgroundPosition: `${gradientPosition.value}% ${gradientPosition.value}%, ${gradientPosition.value}% ${gradientPosition.value}%`,
      backgroundBlendMode: 'overlay, normal',
      filter: 'brightness(1.15) saturate(1.1)',
      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      willChange: 'background-position, background-image, filter'
    };
  } else {
    return {
      backgroundImage: isDarkMode.value ? darkGradient : lightGradient,
      backgroundSize: '200% 200%',
      backgroundPosition: '0% 0%',
      animation: isDarkMode.value ? 'gradient-shift-dark 8s ease infinite' : 'gradient-shift-light 8s ease infinite',
      filter: 'brightness(1) saturate(1)',
      willChange: 'background-position'
    };
  }
});

// Pasos del proceso - SIN NÚMEROS EN LAS TARJETAS
const steps = [
  {
    icon: "💡",
    title: "Estrategia",
    description: "Comprendemos tu negocio para una estrategia digital.",
    features: [
      "Análisis de competencia",
      "Definición de objetivos",
      "Planificación estratégica"
    ]
  },
  {
    icon: "🎨",
    title: "Diseño",
    description: "Creamos diseños visualmente impactantes.",
    features: [
      "Wireframes y prototipos",
      "Diseño UI/UX",
      "Pruebas de usabilidad"
    ]
  },
  {
    icon: "⚡",
    title: "Desarrollo",
    description: "Programamos tu sitio web con las mejores tecnologías.",
    features: [
      "Desarrollo Full Stack",
      "Funcionalidades",
      "Optimización SEO"
    ]
  },
  {
    icon: "🚀",
    title: "Lanzamiento",
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
  initializeTheme();
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
  }, 250);
});
</script>

<style scoped>
/* ANIMACIONES EXACTAMENTE IGUALES A LOS COMPONENTES ANTERIORES */

@keyframes gradient-shift-dark {
  0%, 100% {
    background-position: 0% 0%;
  }
  25% {
    background-position: 50% 25%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 50% 75%;
  }
}

@keyframes gradient-shift-light {
  0%, 100% {
    background-position: 0% 0%;
  }
  25% {
    background-position: 50% 25%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 50% 75%;
  }
}

/* Transiciones de tema */
@keyframes themeFadeInFast {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(8px);
    filter: blur(3px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
    filter: blur(0);
  }
}

@keyframes themeFadeOutFast {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
    filter: blur(0);
  }
  to {
    opacity: 0;
    transform: scale(1.05) translateY(-8px);
    filter: blur(3px);
  }
}

.theme-fade-fast-enter-active {
  animation: themeFadeInFast 0.15s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.theme-fade-fast-leave-active {
  animation: themeFadeOutFast 0.15s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

/* Transiciones para todo */
* {
  transition: background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), 
              border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1),
              color 0.15s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.15s cubic-bezier(0.4, 0, 0.2, 1),
              filter 0.15s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1),
              background-position 0.15s cubic-bezier(0.4, 0, 0.2, 1),
              background-image 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Transición específica para el tema */
.theme-transition-fast * {
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

/* Optimización para rendimiento */
#proceso > div:first-child {
  will-change: background-position, background-image, filter;
  transform: translateZ(0);
  backface-visibility: hidden;
}

button[aria-label="Cambiar tema"] {
  will-change: transform, box-shadow, border-color, background-position, filter;
  transform-style: preserve-3d;
}

/* Animación para rayos del sol */
@keyframes pulse-ray-fast {
  0%, 100% {
    opacity: 0.3;
    transform: rotate(var(--rotation)) translateY(-12px) scale(0.8);
  }
  50% {
    opacity: 0.9;
    transform: rotate(var(--rotation)) translateY(-12px) scale(1.2);
  }
}

/* Animación para partículas */
@keyframes particle-explode-fast {
  0% {
    transform: translate(0, 0) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(var(--x), var(--y)) scale(1);
    opacity: 0;
  }
}

/* Animación para brillo estelar */
@keyframes twinkle-fast {
  0%, 100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

/* Animación para rebote lento */
@keyframes custom-bounce-slow {
  0%, 100% { 
    transform: translateY(0); 
  }
  50% { 
    transform: translateY(-10px); 
  }
}

/* Animación para giro lento */
@keyframes custom-spin-slow {
  from { 
    transform: rotate(0deg); 
  }
  to { 
    transform: rotate(360deg); 
  }
}

/* Animación para ping */
@keyframes custom-ping {
  75%, 100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

/* Animaciones adicionales */
.animate-pulse-fast {
  animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-pulse-slow {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-bounce-fast {
  animation: bounce 1s infinite;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-slideInLeft {
  animation: slideInLeft 0.7s ease-out forwards;
  opacity: 0;
}

.animate-fadeInUp {
  animation: fadeInUp 0.7s ease-out forwards;
  opacity: 0;
}

.animate-delay-500 {
  animation-delay: 500ms;
}

.animate-delay-1000 {
  animation-delay: 1000ms;
}

.custom-bounce-slow {
  animation: custom-bounce-slow 3s ease-in-out infinite;
}

.custom-spin-slow {
  animation: custom-spin-slow 8s linear infinite;
}

.custom-ping {
  animation: custom-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
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

/* Efecto de sombras */
.shadow-glow {
  box-shadow: 0 0 20px rgba(34, 211, 238, 0.3);
}

.hover\:shadow-glow:hover {
  box-shadow: 0 0 25px rgba(34, 211, 238, 0.4);
}

/* Utilidades para control de texto */
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
}

.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
}

.text-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
}

/* Asegurar que todos los elementos usen la misma transición */
.absolute.inset-0 {
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

.relative {
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Efectos especiales durante la transición */
.theme-transition-fast #proceso > div:first-child {
  filter: brightness(1.15) saturate(1.1);
}

.theme-transition-fast button[aria-label="Cambiar tema"] {
  filter: brightness(1.2);
}

/* Ajustes responsive MEJORADOS */
@media (max-width: 768px) {
  #proceso {
    background-attachment: scroll;
  }
  
  #proceso > div:first-child {
    background-attachment: scroll;
  }
  
  /* Ajustes para el botón en móvil */
  button[aria-label="Cambiar tema"] {
    width: 32px;
    height: 16px;
  }
  
  /* Switch más pequeño en móvil */
  button[aria-label="Cambiar tema"] > div:first-child {
    width: 14px;
    height: 14px;
  }
  
  /* Iconos más pequeños en móvil */
  .absolute.left-4, .absolute.right-4 {
    width: 7px;
    height: 7px;
  }
  
  /* Texto "DÍA/NOCHE" más pequeño en móvil */
  .absolute.-bottom-5 {
    font-size: 8px;
    bottom: -4px;
  }
  
  /* Ajustes del carrusel en móvil - ALTURAS INCREMENTADAS */
  .h-\[500px\] {
    height: 420px;
  }
  
  .h-\[550px\] {
    height: 460px;
  }
  
  .w-\[320px\] {
    width: 260px;
  }
  
  .w-\[380px\] {
    width: 300px;
  }
  
  .h-\[400px\] {
    height: 340px;
  }
  
  .h-\[440px\] {
    height: 380px;
  }
  
  .h-\[480px\] {
    height: 420px;
  }
  
  .h-\[540px\] {
    height: 460px;
  }
  
  /* Ajustes de iconos en móvil */
  .text-4xl {
    font-size: 2rem;
  }
  
  .text-5xl {
    font-size: 2.5rem;
  }
  
  .w-20, .w-24 {
    width: 3.5rem;
    height: 3.5rem;
  }
  
  .w-28, .w-32 {
    width: 4rem;
    height: 4rem;
  }
}

@media (max-width: 480px) {
  /* Botón aún más compacto en móviles pequeños */
  button[aria-label="Cambiar tema"] {
    width: 30px;
    height: 15px;
  }
  
  button[aria-label="Cambiar tema"] > div:first-child {
    width: 12px;
    height: 12px;
  }
  
  .absolute.left-4 {
    left: 4px;
    width: 6px;
    height: 6px;
  }
  
  .absolute.right-4 {
    right: 4px;
    width: 6px;
    height: 6px;
  }
  
  /* Ajustes adicionales del carrusel */
  .h-\[500px\] {
    height: 380px;
  }
  
  .h-\[550px\] {
    height: 420px;
  }
  
  .w-\[320px\] {
    width: 240px;
  }
  
  .w-\[380px\] {
    width: 280px;
  }
  
  .h-\[400px\] {
    height: 320px;
  }
  
  .h-\[440px\] {
    height: 360px;
  }
  
  .h-\[480px\] {
    height: 380px;
  }
  
  .h-\[540px\] {
    height: 420px;
  }
  
  /* Más ajustes para móviles pequeños */
  .text-2xl {
    font-size: 1.5rem;
  }
  
  .text-3xl {
    font-size: 1.75rem;
  }
  
  .text-lg {
    font-size: 1rem;
  }
  
  .text-xl {
    font-size: 1.125rem;
  }
}

/* Accesibilidad */
@media (prefers-reduced-motion: reduce) {
  .animate-pulse-fast,
  .animate-pulse-slow,
  .animate-bounce-fast,
  .animate-float,
  .animate-slideInLeft,
  .animate-fadeInUp,
  .custom-bounce-slow,
  .custom-spin-slow,
  .custom-ping,
  .theme-fade-fast-enter-active,
  .theme-fade-fast-leave-active {
    animation: none !important;
    transition: none !important;
  }
  
  .hover\:scale-105,
  .hover\:-translate-y-1,
  .group-hover\:scale-125,
  .hover\:-translate-y-0\.5,
  .hover\:scale-110 {
    transform: none !important;
  }
}
</style>