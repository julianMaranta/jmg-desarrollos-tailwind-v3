<template>
  <header 
    id="inicio" 
    class="min-h-[90vh] w-full text-white relative overflow-hidden flex items-center justify-center transition-all duration-150 ease-out"
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

    <!-- Contenedor principal - TÍTULOS CENTRADOS EXACTAMENTE IGUAL -->
    <div class="w-full max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10 py-8 md:py-12 flex flex-col items-center">
      
      <!-- Contenedor para badge y botón de temas alineados -->
      <div class="relative w-full mb-8">
        <!-- Badge animado EXACTAMENTE igual -->
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
                } : {}">🚀 AGENCIA DIGITAL PREMIUM</span>
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

        <!-- Botón de tema premium - AHORA A LA MISMA ALTURA QUE EL BADGE -->
        <div class="absolute top-0 right-0 md:right-4 z-50">
          <button
            @click="toggleTheme"
            class="relative flex items-center justify-center w-36 h-14 rounded-xl border shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-150 ease-out overflow-hidden group theme-switch-premium"
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
      </div>

      <!-- Sección principal con títulos centrados -->
      <div class="w-full flex flex-col items-center space-y-4 md:space-y-6">
        <!-- Título principal EXACTAMENTE centrado igual -->
        <div class="relative w-full mb-2 md:mb-3 transition-all duration-150 text-center">
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center w-full tracking-tight leading-tight animate-slideInLeft transition-all duration-150">
            <span class="relative inline-block">
              <div class="relative pb-2">
                <!-- Primera línea -->
                <div 
                  class="bg-clip-text text-transparent leading-tight transition-all duration-150"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-100' 
                    : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'"
                  :style="isTransitioning ? { 
                    backgroundImage: isDarkMode 
                      ? 'linear-gradient(to right, #ffffff, #a5f3fc, #dbeafe)' 
                      : 'linear-gradient(to right, #1e3a8a, #1d4ed8, #2563eb)'
                  } : {}"
                >
                  Transformamos Tu
                </div>
                
                <!-- Segunda línea -->
                <div 
                  class="bg-clip-text text-transparent pt-3 md:pt-4 leading-[1.35] transition-all duration-150"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-r from-white via-blue-100 to-blue-200' 
                    : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'"
                  :style="isTransitioning ? { 
                    backgroundImage: isDarkMode 
                      ? 'linear-gradient(to right, #ffffff, #dbeafe, #bfdbfe)' 
                      : 'linear-gradient(to right, #1e3a8a, #2563eb, #3b82f6)'
                  } : {}"
                >
                  Visión Digital
                </div>
              </div>
              
              <!-- Subrayado animado EXACTAMENTE igual -->
              <div 
                class="absolute -bottom-2 left-1/4 right-1/4 h-0.5 rounded-full opacity-70 mt-1 transition-all duration-150"
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
          </h1>
          
          <!-- Slogan -->
          <div class="mt-3 md:mt-4 animate-fadeInUp transition-all duration-150" style="animation-delay: 50ms">
            <p class="text-lg md:text-xl font-bold transition-colors duration-150"
               :class="isDarkMode ? 'text-blue-100/90' : 'text-blue-700/90'"
               :style="isTransitioning ? { 
                 color: isDarkMode ? 'rgba(219, 234, 254, 0.95)' : 'rgba(30, 58, 138, 0.95)'
               } : {}">
              De <span :class="isDarkMode ? 'text-blue-200' : 'text-blue-800'" :style="isTransitioning ? { color: isDarkMode ? '#bfdbfe' : '#1e40af' } : {}">Ideas</span> a 
              <span :class="isDarkMode ? 'text-blue-200' : 'text-blue-800'" :style="isTransitioning ? { color: isDarkMode ? '#bfdbfe' : '#1e40af' } : {}">Resultados</span> Excepcionales
            </p>
          </div>
        </div>
        
        <!-- Subtítulo -->
        <div class="relative max-w-3xl mx-auto mb-6 md:mb-8 animate-fadeInUp transition-all duration-150" style="animation-delay: 100ms">
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
              <span :class="isDarkMode ? 'text-white' : 'text-blue-900'" :style="isTransitioning ? { color: isDarkMode ? '#ffffff' : '#1e3a8a' } : {}">Creamos experiencias web innovadoras</span> 
              que no solo 
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
                  captan la atención
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
              </span>, 
              sino que <span :class="isDarkMode ? 'text-blue-100' : 'text-blue-700'" :style="isTransitioning ? { color: isDarkMode ? '#dbeafe' : '#1d4ed8' } : {}">generan resultados medibles</span>
            </p>
          </div>
        </div>

        <!-- Botones CTA -->
        <div class="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center w-full animate-fadeInUp transition-all duration-150 mt-2" style="animation-delay: 150ms">
          
          <!-- Botón Primario -->
          <button @click="scrollToSection('servicios')"
                  class="group relative text-white font-bold py-3.5 px-8 rounded-2xl transition-all duration-150 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-glow-hover text-base md:text-lg overflow-hidden"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-r from-blue-600 via-cyan-700 to-indigo-800 hover:from-blue-700 hover:via-cyan-800 hover:to-indigo-900' 
                    : 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900'"
                  :style="isTransitioning ? { 
                    background: isDarkMode 
                      ? 'linear-gradient(to right, #2563eb, #0891b2, #3730a3)' 
                      : 'linear-gradient(to right, #2563eb, #1d4ed8, #1e40af)',
                    filter: 'brightness(1.15)'
                  } : {}">
            <!-- Efecto de brillo al pasar el mouse -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-300 transition-all duration-150"
                 :style="isTransitioning ? { opacity: 0.4 } : {}"></div>
            
            <span class="flex items-center justify-center relative transition-all duration-150">
              Explorar Servicios
              <span class="ml-2.5 text-xl animate-bounce-fast transition-all duration-150"
                    :style="isTransitioning ? { transform: 'scale(1.2)' } : {}">→</span>
            </span>
          </button>
          
          <!-- Botón Secundario -->
          <button @click="scrollToSection('contacto')"
                  class="group relative border-2 font-bold py-3.5 px-8 rounded-2xl transition-all duration-150 transform hover:scale-105 hover:-translate-y-1 text-base md:text-lg overflow-hidden backdrop-blur-xl"
                  :class="isDarkMode 
                    ? 'border-cyan-400/50 text-white hover:text-blue-100 hover:border-cyan-300/70' 
                    : 'border-blue-400/50 text-blue-800 hover:text-blue-900 hover:border-blue-500/70'"
                  :style="isTransitioning ? { 
                    borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.6)' : 'rgba(59, 130, 246, 0.7)',
                    color: isDarkMode ? '#f0f9ff' : '#1e3a8a'
                  } : {}">
            <!-- Efecto de fondo al hover -->
            <div class="absolute inset-0 transition-all duration-150"
                 :class="isDarkMode 
                   ? 'bg-blue-900/20 group-hover:bg-blue-800/30' 
                   : 'bg-blue-100/20 group-hover:bg-blue-200/30'"></div>
            
            <span class="relative z-10 flex items-center justify-center">
              <span class="mr-2.5 text-xl transform transition-transform duration-300 group-hover:scale-110 animate-bounce-fast transition-all duration-150"
                    :style="isTransitioning ? { transform: 'scale(1.2)' } : {}">💬</span>
              Contactar Ahora
            </span>
          </button>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto w-full px-6 mt-6 md:mt-8 animate-fadeInUp transition-all duration-150" style="animation-delay: 200ms">
          <div v-for="(stat, index) in stats" :key="index" class="group relative">
            
            <!-- Tarjeta Stat -->
            <div class="relative backdrop-blur-2xl rounded-3xl border-2 p-4 md:p-5 transform transition-all duration-150 group-hover:-translate-y-1 group-hover:scale-102 group-hover:shadow-xl shadow-lg hover:shadow-glow"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-br from-blue-700/50 via-indigo-800/60 to-blue-900/50 border-cyan-400/50 hover:border-cyan-300/70' 
                   : 'bg-gradient-to-br from-blue-50/90 via-blue-100/80 to-blue-200/70 border-blue-400/60 hover:border-blue-500/80'"
                 :style="isTransitioning ? { 
                   background: isDarkMode 
                     ? 'linear-gradient(135deg, rgba(29, 78, 216, 0.6), rgba(55, 48, 163, 0.7), rgba(30, 58, 138, 0.6))' 
                     : 'linear-gradient(135deg, rgba(219, 234, 254, 0.95), rgba(191, 219, 254, 0.85), rgba(147, 197, 253, 0.75))',
                   borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.6)' : 'rgba(59, 130, 246, 0.7)',
                   filter: 'brightness(1.1)'
                 } : {}">
              
              <div class="relative mb-2 md:mb-3">
                <div class="text-2xl md:text-3xl lg:text-4xl font-black leading-none transition-all duration-150"
                     
                     :style="isTransitioning ? { 
                       color: isDarkMode ? '#a5f3fc' : '#1e40af',
                       textShadow: isDarkMode 
                         ? '0 0 10px rgba(165, 243, 252, 0.5)' 
                         : '0 0 10px rgba(30, 64, 175, 0.3)'
                     } : {}">
                  {{ stat.value }}
                </div>
              </div>
              
              <div class="text-xs md:text-sm font-semibold uppercase tracking-wide transition-colors duration-300"
                   :class="isDarkMode ? 'text-white/90' : 'text-blue-700/90'"
                   :style="isTransitioning ? { 
                     color: isDarkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(30, 58, 138, 0.95)'
                   } : {}">
                <div class="flex items-center justify-center space-x-1 md:space-x-2">
                  <div class="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full group-hover:scale-125 transition-all duration-150 animate-pulse-fast"
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
                  <span>{{ stat.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';

// Estado EXACTAMENTE igual al primer código
const isDarkMode = ref(true);
const isTransitioning = ref(false);
const gradientPosition = ref(0);
const showParticles = ref(false);

// EXACTAMENTE los mismos gradientes del primer código
const darkGradient = 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 25%, #0369a1 50%, #1e40af 75%, #0f172a 100%)';
const lightGradient = 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 25%, #93c5fd 50%, #60a5fa 75%, #3b82f6 100%)';

// Inicializar tema EXACTAMENTE igual
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

// Alternar tema - EXACTAMENTE igual que en el primer código
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

// Función cubic bezier - EXACTAMENTE igual
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

// Estilo del degradado del fondo principal - EXACTAMENTE igual
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

// Stats
const stats = [
  { 
    value: '+15', 
    label: 'Proyectos Entregados'
  },
  { 
    value: '+10', 
    label: 'Clientes Satisfechos'
  },
  { 
    value: '24 HS', 
    label: 'Soporte Técnico'
  },
  { 
    value: '+5', 
    label: 'Años de Experiencia'
  }
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

// Inicializar y animar contadores
onMounted(() => {
  initializeTheme();
  
  const counters = document.querySelectorAll('[data-target]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const targetText = counter.getAttribute('data-target');
        const target = parseInt(targetText);
        
        if (!isNaN(target)) {
          animateCounter(counter, target);
          observer.unobserve(counter);
        }
      }
    });
  }, { threshold: 0.2 });
  
  counters.forEach(counter => observer.observe(counter));
});

// Animación de contador
const animateCounter = (element, target) => {
  const duration = 1800;
  const startTime = Date.now();
  
  const animate = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(easeOutQuart * target);
    
    element.textContent = current + (element.textContent.includes('+') ? '+' : 
                          (element.textContent.includes('HS') ? ' HS' : ''));
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };
  
  requestAnimationFrame(animate);
};

// Watch para cambio de tema - EXACTAMENTE igual
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
/* ANIMACIONES EXACTAMENTE IGUALES AL PRIMER CÓDIGO */

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

/* Transiciones para todo - EXACTAMENTE igual */
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
#inicio > div:first-child {
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

.hover\:shadow-glow-hover:hover {
  box-shadow: 0 10px 30px rgba(34, 211, 238, 0.5);
}

/* Asegurar que todos los elementos usen la misma transición */
.absolute.inset-0 {
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

.relative {
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Efectos especiales durante la transición */
.theme-transition-fast #inicio > div:first-child {
  filter: brightness(1.15) saturate(1.1);
}

.theme-transition-fast button[aria-label="Cambiar tema"] {
  filter: brightness(1.2);
}

/* Ajustes responsive EXACTAMENTE iguales */
@media (max-width: 768px) {
  #inicio {
    background-attachment: scroll;
  }
  
  #inicio > div:first-child {
    background-attachment: scroll;
  }
  
  /* Ajustes para el botón en móvil */
  button[aria-label="Cambiar tema"] {
    width: 30px;
    height: 12px;
  }
  
  /* Switch más pequeño en móvil */
  button[aria-label="Cambiar tema"] > div:first-child {
    width: 12px;
    height: 12px;
  }
  
  /* Iconos más pequeños en móvil */
  .absolute.left-4, .absolute.right-4 {
    width: 6px;
    height: 6px;
  }
  
  /* Texto "DÍA/NOCHE" más pequeño en móvil */
  .absolute.-bottom-5 {
    font-size: 7px;
    bottom: -4px;
  }
  
  /* Ajuste del contenedor badge y botón en móvil */
  .relative.w-full.mb-8 {
    margin-bottom: 4rem;
  }
}

@media (max-width: 480px) {
  /* Botón aún más compacto en móviles pequeños */
  button[aria-label="Cambiar tema"] {
    width: 28px;
    height: 11px;
  }
  
  button[aria-label="Cambiar tema"] > div:first-child {
    width: 10px;
    height: 10px;
  }
  
  .absolute.left-4 {
    left: 3px;
    width: 5px;
    height: 5px;
  }
  
  .absolute.right-4 {
    right: 3px;
    width: 5px;
    height: 5px;
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
  .theme-fade-fast-enter-active,
  .theme-fade-fast-leave-active {
    animation: none !important;
    transition: none !important;
  }
  
  .hover\:scale-105,
  .hover\:-translate-y-1,
  .group-hover\:scale-125 {
    transform: none !important;
  }
}
</style>