<template>
  <section 
    id="contacto" 
    class="py-10 md:py-12 text-white relative overflow-hidden w-full flex justify-center transition-all duration-150 ease-out"
  >
    <!-- Capa de fondo principal con EXACTAMENTE LA MISMA TRANSICIÓN -->
    <div 
      class="absolute inset-0 transition-all duration-150 ease-out overflow-hidden"
      :style="sectionGradientStyle"
    >
      <!-- Efecto de partículas brillantes sincronizadas -->
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
             `"
             :animation="isTransitioning ? 'particle-move 1.5s ease-in-out infinite' : ''">
        </div>
      </div>
    </div>
    
    <!-- Efectos de fondo animados con EXACTAMENTE LA MISMA TRANSICIÓN -->
    <div class="absolute inset-0 overflow-hidden transition-all duration-150 ease-out">
      <!-- Fondos para tema oscuro con transición sincronizada -->
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
      
      <!-- Partículas flotantes con transición sincronizada -->
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
    </div>

    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
      <!-- Section Header con botón de tema integrado -->
      <div class="text-center mb-8 md:mb-10 w-full relative">
        <!-- Botón de tema premium con switch grande que cubre el icono (EXACTAMENTE IGUAL) -->
        <div class="absolute top-0 right-0 md:right-4 z-20">
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
        
        <!-- Badge animado con EXACTA TRANSICIÓN -->
        <div 
          class="inline-flex items-center backdrop-blur-xl rounded-full px-5 py-2.5 mb-4 shadow-glow animate-pulse-slow transition-all duration-150"
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
                } : {}">
            📞 HABLEMOS DE TU PROYECTO
          </span>
        </div>
        
        <!-- Título optimizado con EXACTA TRANSICIÓN -->
        <div class="relative w-full mb-6 transition-all duration-150">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-center w-full tracking-tight leading-tight animate-slideInLeft transition-all duration-150">
            <span class="relative inline-block transition-all duration-150">
              <span 
                class="bg-clip-text text-transparent relative z-20 transition-all duration-150"
                :class="isDarkMode 
                  ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-100' 
                  : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'"
                :style="isTransitioning ? { 
                  backgroundImage: isDarkMode 
                    ? 'linear-gradient(to right, #ffffff, #a5f3fc, #dbeafe)' 
                    : 'linear-gradient(to right, #1e3a8a, #1d4ed8, #2563eb)'
                } : {}"
              >
                Comencemos Hoy
              </span>
              
              <!-- Efectos de subrayado más compactos con transición EXACTA -->
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
                } : {}">
              </div>
            </span>
          </h2>
        </div>
        
        <!-- Subtítulo optimizado con EXACTA TRANSICIÓN -->
        <div class="relative max-w-2xl mx-auto mb-8 animate-fadeInUp transition-all duration-150" style="animation-delay: 50ms">
          <p 
            class="text-sm sm:text-base leading-relaxed text-center transition-colors duration-150"
            :class="isDarkMode ? 'text-white/90' : 'text-blue-900/90'"
            :style="isTransitioning ? { 
              color: isDarkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(30, 58, 138, 0.95)',
              textShadow: isDarkMode 
                ? '0 0 8px rgba(255, 255, 255, 0.3)' 
                : '0 0 8px rgba(30, 58, 138, 0.1)'
            } : {}"
          >
            Contáctanos y recibe
            <span class="relative inline-block transition-all duration-150">
              <span 
                class="bg-clip-text text-transparent font-bold transition-all duration-150"
                :class="isDarkMode 
                  ? 'bg-gradient-to-r from-cyan-300 via-blue-200 to-blue-100' 
                  : 'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400'"
                :style="isTransitioning ? { 
                  backgroundImage: isDarkMode 
                    ? 'linear-gradient(to right, #67e8f9, #bfdbfe, #dbeafe)' 
                    : 'linear-gradient(to right, #2563eb, #3b82f6, #60a5fa)'
                } : {}"
              >
                una cotización gratuita y personalizada
              </span>
              <div 
                class="absolute inset-0 blur-sm -z-10 rounded-full transition-all duration-150"
                :class="isDarkMode 
                  ? 'bg-gradient-to-r from-cyan-400/30 via-blue-300/25 to-blue-200/25' 
                  : 'bg-gradient-to-r from-blue-500/30 via-blue-400/25 to-blue-300/25'"
                :style="isTransitioning ? { 
                  background: isDarkMode 
                    ? 'linear-gradient(to right, rgba(34, 211, 238, 0.4), rgba(59, 130, 246, 0.35), rgba(191, 219, 254, 0.35))' 
                    : 'linear-gradient(to right, rgba(59, 130, 246, 0.4), rgba(96, 165, 250, 0.35), rgba(147, 197, 253, 0.35))',
                  filter: 'blur(6px)'
                } : {}">
              </div>
            </span>
            para tu proyecto
          </p>
        </div>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 w-full items-start transition-all duration-150">
        <!-- Contact Form con transición EXACTA -->
        <div 
          class="backdrop-blur-2xl rounded-3xl border-2 shadow-xl p-6 md:p-8 w-full flex flex-col items-center justify-center transform hover:scale-102 transition-all duration-150 group"
          :class="isDarkMode 
            ? 'bg-gradient-to-br from-blue-700/50 via-indigo-800/60 to-blue-900/50 border-cyan-400/50' 
            : 'bg-gradient-to-br from-blue-50/90 via-blue-100/80 to-blue-200/70 border-blue-400/60'"
          :style="isTransitioning ? { 
            background: isDarkMode 
              ? 'linear-gradient(135deg, rgba(29, 78, 216, 0.6), rgba(55, 48, 163, 0.7), rgba(30, 58, 138, 0.6))' 
              : 'linear-gradient(135deg, rgba(219, 234, 254, 0.95), rgba(191, 219, 254, 0.85), rgba(147, 197, 253, 0.75))',
            borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.6)' : 'rgba(59, 130, 246, 0.7)',
            filter: 'brightness(1.1)'
          } : {}"
        >
          <!-- Efecto de borde animado con EXACTA TRANSICIÓN -->
          <div 
            class="absolute inset-0 rounded-3xl border-2 border-transparent transition-all duration-150"
            :class="isDarkMode 
              ? 'group-hover:border-cyan-400/40' 
              : 'group-hover:border-blue-400/50'"
            :style="isTransitioning ? { 
              borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.5)' : 'rgba(59, 130, 246, 0.6)',
              boxShadow: isDarkMode 
                ? '0 0 25px rgba(34, 211, 238, 0.3)' 
                : '0 0 25px rgba(59, 130, 246, 0.3)'
            } : {}"
          ></div>
          
          <!-- Título Formulario -->
          <h3 class="text-xl md:text-2xl font-black mb-6 text-center w-full bg-clip-text text-transparent px-4 transition-all duration-150"
              :class="isDarkMode 
                ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-100' 
                : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'"
              :style="isTransitioning ? { 
                backgroundImage: isDarkMode 
                  ? 'linear-gradient(to right, #ffffff, #a5f3fc, #dbeafe)' 
                  : 'linear-gradient(to right, #1e3a8a, #1d4ed8, #2563eb)'
              } : {}">
            Solicita Tu Cotización
          </h3>
          <form class="space-y-5 w-full transition-all duration-150">
            <!-- Name & Email -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-150">
              <div class="group transition-all duration-150">
                <label class="block mb-2 font-semibold text-left text-sm transition-colors duration-150"
                       :class="isDarkMode ? 'text-white/90' : 'text-blue-900/90'"
                       :style="isTransitioning ? { 
                         color: isDarkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(30, 58, 138, 0.95)'
                       } : {}">
                  Nombre Completo
                </label>
                <input 
                  type="text" 
                  class="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-150 group-hover:bg-white/10 text-left text-sm"
                  :class="isDarkMode 
                    ? 'bg-white/5 border-white/20 focus:ring-cyan-400 text-white placeholder-white/50' 
                    : 'bg-white/10 border-blue-300/30 focus:ring-blue-400 text-blue-900 placeholder-blue-400/50'"
                  :style="isTransitioning ? { 
                    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.15)',
                    borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(59, 130, 246, 0.4)'
                  } : {}"
                  placeholder="Tu nombre"
                >
              </div>
              <div class="group transition-all duration-150">
                <label class="block mb-2 font-semibold text-left text-sm transition-colors duration-150"
                       :class="isDarkMode ? 'text-white/90' : 'text-blue-900/90'"
                       :style="isTransitioning ? { 
                         color: isDarkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(30, 58, 138, 0.95)'
                       } : {}">
                  Email
                </label>
                <input 
                  type="email" 
                  class="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-150 group-hover:bg-white/10 text-left text-sm"
                  :class="isDarkMode 
                    ? 'bg-white/5 border-white/20 focus:ring-cyan-400 text-white placeholder-white/50' 
                    : 'bg-white/10 border-blue-300/30 focus:ring-blue-400 text-blue-900 placeholder-blue-400/50'"
                  :style="isTransitioning ? { 
                    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.15)',
                    borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(59, 130, 246, 0.4)'
                  } : {}"
                  placeholder="tu@email.com"
                >
              </div>
            </div>
            
            <!-- Company con transición EXACTA -->
            <div class="group transition-all duration-150">
              <label class="block mb-2 font-semibold text-left text-sm transition-colors duration-150"
                     :class="isDarkMode ? 'text-white/90' : 'text-blue-900/90'"
                     :style="isTransitioning ? { 
                       color: isDarkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(30, 58, 138, 0.95)'
                     } : {}">
                Empresa
              </label>
              <input 
                type="text" 
                class="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-150 group-hover:bg-white/10 text-left text-sm"
                :class="isDarkMode 
                  ? 'bg-white/5 border-white/20 focus:ring-cyan-400 text-white placeholder-white/50' 
                  : 'bg-white/10 border-blue-300/30 focus:ring-blue-400 text-blue-900 placeholder-blue-400/50'"
                :style="isTransitioning ? { 
                  backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.15)',
                  borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(59, 130, 246, 0.4)'
                } : {}"
                placeholder="Nombre de tu empresa"
              >
            </div>
            
            <!-- Service con transición EXACTA -->
            <div class="group transition-all duration-150">
              <label class="block mb-2 font-semibold text-left text-sm transition-colors duration-150"
                     :class="isDarkMode ? 'text-white/90' : 'text-blue-900/90'"
                     :style="isTransitioning ? { 
                       color: isDarkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(30, 58, 138, 0.95)'
                     } : {}">
                Servicio de Interés
              </label>
              <select class="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-150 group-hover:bg-white/10 text-left text-sm appearance-none"
                      :class="isDarkMode 
                        ? 'bg-white/5 border-white/20 focus:ring-cyan-400 text-white' 
                        : 'bg-white/10 border-blue-300/30 focus:ring-blue-400 text-blue-900'"
                      :style="isTransitioning ? { 
                        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.15)',
                        borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(59, 130, 246, 0.4)'
                      } : {}">
                <option class="text-left text-sm transition-colors duration-150"
                        :class="isDarkMode ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-900'">
                  Selecciona un servicio
                </option>
                <option class="text-left text-sm transition-colors duration-150"
                        :class="isDarkMode ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-900'">
                  Plan Inicial
                </option>
                <option class="text-left text-sm transition-colors duration-150"
                        :class="isDarkMode ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-900'">
                  Plan Estándar
                </option>
                <option class="text-left text-sm transition-colors duration-150"
                        :class="isDarkMode ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-900'">
                  Plan Profesional
                </option>
                <option class="text-left text-sm transition-colors duration-150"
                        :class="isDarkMode ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-900'">
                  Plan Empresa
                </option>
                <option class="text-left text-sm transition-colors duration-150"
                        :class="isDarkMode ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-900'">
                  Desarrollo a medida
                </option>
              </select>
            </div>
            
            <!-- Message con transición EXACTA -->
            <div class="group transition-all duration-150">
              <label class="block mb-2 font-semibold text-left text-sm transition-colors duration-150"
                     :class="isDarkMode ? 'text-white/90' : 'text-blue-900/90'"
                     :style="isTransitioning ? { 
                       color: isDarkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(30, 58, 138, 0.95)'
                     } : {}">
                Mensaje
              </label>
              <textarea 
                rows="4" 
                class="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-150 group-hover:bg-white/10 resize-none text-left text-sm"
                :class="isDarkMode 
                  ? 'bg-white/5 border-white/20 focus:ring-cyan-400 text-white placeholder-white/50' 
                  : 'bg-white/10 border-blue-300/30 focus:ring-blue-400 text-blue-900 placeholder-blue-400/50'"
                :style="isTransitioning ? { 
                  backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.15)',
                  borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(59, 130, 246, 0.4)'
                } : {}"
                placeholder="Cuéntanos sobre tu proyecto..."
              ></textarea>
            </div>
            
            <!-- Submit Button con EXACTA TRANSICIÓN -->
            <button 
              type="submit" 
              class="relative text-white font-bold py-3.5 px-8 rounded-2xl transition-all duration-150 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-glow-hover text-base md:text-lg group overflow-hidden w-full"
              :class="isDarkMode 
                ? 'bg-gradient-to-r from-blue-600 via-cyan-700 to-indigo-800 hover:from-blue-700 hover:via-cyan-800 hover:to-indigo-900' 
                : 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900'"
              :style="isTransitioning ? { 
                background: isDarkMode 
                  ? 'linear-gradient(to right, #2563eb, #0891b2, #3730a3)' 
                  : 'linear-gradient(to right, #2563eb, #1d4ed8, #1e40af)',
                filter: 'brightness(1.15)'
              } : {}"
            >
              <!-- Efecto de brillo al pasar el mouse con EXACTA TRANSICIÓN -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-300 transition-all duration-150"
                   :style="isTransitioning ? { opacity: 0.4 } : {}"></div>
              
              <span class="flex items-center justify-center relative transition-all duration-150">
                Enviar Solicitud
                <span class="ml-2.5 text-xl animate-bounce-fast transition-all duration-150"
                      :style="isTransitioning ? { transform: 'scale(1.2)' } : {}">🚀</span>
              </span>
            </button>
          </form>
        </div>
        
        <!-- Contact Information con EXACTA TRANSICIÓN -->
        <div class="flex flex-col justify-center space-y-8 items-start w-full transition-all duration-150">
          <!-- Contact Methods -->
          <div class="space-y-6 w-full transition-all duration-150">
            <!-- Phone con EXACTA TRANSICIÓN -->
            <div class="flex items-start group cursor-pointer transform transition-all duration-500 hover:scale-105 w-full transition-all duration-150">
              <div class="w-14 h-14 rounded-xl flex items-center justify-center mr-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-xl transition-all duration-150"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-br from-blue-600 via-cyan-700 to-indigo-800' 
                     : 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800'"
                   :style="isTransitioning ? { 
                     background: isDarkMode 
                       ? 'linear-gradient(135deg, #2563eb, #0891b2, #3730a3)' 
                       : 'linear-gradient(135deg, #2563eb, #1d4ed8, #1e40af)',
                     boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
                   } : {}">
                <span class="text-2xl transition-all duration-150">📞</span>
              </div>
              <div class="flex-1 text-left transition-all duration-150">
                <h4 class="text-lg md:text-xl font-black mb-2 transition-colors duration-150"
                    :class="isDarkMode ? 'text-white' : 'text-blue-900'"
                    :style="isTransitioning ? { 
                      color: isDarkMode ? '#ffffff' : '#1e3a8a'
                    } : {}">
                  Teléfono
                </h4>
                <p class="text-base md:text-lg font-semibold transition-colors duration-150"
                   :class="isDarkMode ? 'text-cyan-200' : 'text-blue-700'"
                   :style="isTransitioning ? { 
                     color: isDarkMode ? '#a5f3fc' : '#1d4ed8'
                   } : {}">
                  +54 9 11 5527-1430
                </p>
                <p class="text-sm transition-colors duration-150 mt-1"
                   :class="isDarkMode ? 'text-white/70' : 'text-blue-900/70'"
                   :style="isTransitioning ? { 
                     color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(30, 58, 138, 0.8)'
                   } : {}">
                  Lunes a Viernes 9:00 - 18:00
                </p>
              </div>
            </div>
            
            <!-- Email con EXACTA TRANSICIÓN -->
            <div class="flex items-start group cursor-pointer transform transition-all duration-500 hover:scale-105 w-full transition-all duration-150">
              <div class="w-14 h-14 rounded-xl flex items-center justify-center mr-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-xl transition-all duration-150"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-br from-blue-700 via-cyan-800 to-indigo-900' 
                     : 'bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900'"
                   :style="isTransitioning ? { 
                     background: isDarkMode 
                       ? 'linear-gradient(135deg, #1d4ed8, #0891b2, #3730a3)' 
                       : 'linear-gradient(135deg, #1d4ed8, #2563eb, #1e40af)',
                     boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
                   } : {}">
                <span class="text-2xl transition-all duration-150">✉️</span>
              </div>
              <div class="flex-1 text-left transition-all duration-150">
                <h4 class="text-lg md:text-xl font-black mb-2 transition-colors duration-150"
                    :class="isDarkMode ? 'text-white' : 'text-blue-900'"
                    :style="isTransitioning ? { 
                      color: isDarkMode ? '#ffffff' : '#1e3a8a'
                    } : {}">
                  Email
                </h4>
                <p class="text-base md:text-lg font-semibold transition-colors duration-150"
                   :class="isDarkMode ? 'text-cyan-200' : 'text-blue-700'"
                   :style="isTransitioning ? { 
                     color: isDarkMode ? '#a5f3fc' : '#1d4ed8'
                   } : {}">
                  contacto@jmgdesarrollos.com
                </p>
                <p class="text-sm transition-colors duration-150 mt-1"
                   :class="isDarkMode ? 'text-white/70' : 'text-blue-900/70'"
                   :style="isTransitioning ? { 
                     color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(30, 58, 138, 0.8)'
                   } : {}">
                  Respondemos en menos de 24 horas
                </p>
              </div>
            </div>
            
            <!-- Location con EXACTA TRANSICIÓN -->
            <div class="flex items-start group cursor-pointer transform transition-all duration-500 hover:scale-105 w-full transition-all duration-150">
              <div class="w-14 h-14 rounded-xl flex items-center justify-center mr-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-xl transition-all duration-150"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-br from-indigo-800 via-blue-900 to-purple-900' 
                     : 'bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900'"
                   :style="isTransitioning ? { 
                     background: isDarkMode 
                       ? 'linear-gradient(135deg, #3730a3, #1e40af, #581c87)' 
                       : 'linear-gradient(135deg, #1e40af, #1e3a8a, #3730a3)',
                     boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
                   } : {}">
                <span class="text-2xl transition-all duration-150">📍</span>
              </div>
              <div class="flex-1 text-left transition-all duration-150">
                <h4 class="text-lg md:text-xl font-black mb-2 transition-colors duration-150"
                    :class="isDarkMode ? 'text-white' : 'text-blue-900'"
                    :style="isTransitioning ? { 
                      color: isDarkMode ? '#ffffff' : '#1e3a8a'
                    } : {}">
                  Ubicación
                </h4>
                <p class="text-base md:text-lg font-semibold transition-colors duration-150"
                   :class="isDarkMode ? 'text-cyan-200' : 'text-blue-700'"
                   :style="isTransitioning ? { 
                     color: isDarkMode ? '#a5f3fc' : '#1d4ed8'
                   } : {}">
                  Buenos Aires, Argentina
                </p>
                <p class="text-sm transition-colors duration-150 mt-1"
                   :class="isDarkMode ? 'text-white/70' : 'text-blue-900/70'"
                   :style="isTransitioning ? { 
                     color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(30, 58, 138, 0.8)'
                   } : {}">
                  Trabajamos con clientes de todo el mundo
                </p>
              </div>
            </div>
          </div>
          
          <!-- Quick Contact con EXACTA TRANSICIÓN -->
          <div 
            class="backdrop-blur-2xl rounded-3xl border-2 shadow-xl p-6 md:p-7 w-full flex flex-col items-center justify-center transform hover:scale-102 transition-all duration-150 group"
            :class="isDarkMode 
              ? 'bg-gradient-to-br from-blue-700/50 via-indigo-800/60 to-blue-900/50 border-cyan-400/50' 
              : 'bg-gradient-to-br from-blue-50/90 via-blue-100/80 to-blue-200/70 border-blue-400/60'"
            :style="isTransitioning ? { 
              background: isDarkMode 
                ? 'linear-gradient(135deg, rgba(29, 78, 216, 0.6), rgba(55, 48, 163, 0.7), rgba(30, 58, 138, 0.6))' 
                : 'linear-gradient(135deg, rgba(219, 234, 254, 0.95), rgba(191, 219, 254, 0.85), rgba(147, 197, 253, 0.75))',
              borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.6)' : 'rgba(59, 130, 246, 0.7)',
              filter: 'brightness(1.1)'
            } : {}"
          >
            <!-- Efecto de borde animado con EXACTA TRANSICIÓN -->
            <div 
              class="absolute inset-0 rounded-3xl border-2 border-transparent transition-all duration-150"
              :class="isDarkMode 
                ? 'group-hover:border-cyan-400/40' 
                : 'group-hover:border-blue-400/50'"
              :style="isTransitioning ? { 
                borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.5)' : 'rgba(59, 130, 246, 0.6)',
                boxShadow: isDarkMode 
                  ? '0 0 25px rgba(34, 211, 238, 0.3)' 
                  : '0 0 25px rgba(59, 130, 246, 0.3)'
              } : {}"
            ></div>
            
            <!-- Título Quick Contact -->
            <h4 class="text-lg md:text-xl font-black mb-4 text-center w-full bg-clip-text text-transparent transition-all duration-150"
                :class="isDarkMode 
                  ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-100' 
                  : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'"
                :style="isTransitioning ? { 
                  backgroundImage: isDarkMode 
                    ? 'linear-gradient(to right, #ffffff, #a5f3fc, #dbeafe)' 
                    : 'linear-gradient(to right, #1e3a8a, #1d4ed8, #2563eb)'
                } : {}">
              ¿Necesitas una solución urgente?
            </h4>
            <p class="mb-6 text-center w-full max-w-md mx-auto text-sm transition-colors duration-150"
               :class="isDarkMode ? 'text-white/90' : 'text-blue-900/90'"
               :style="isTransitioning ? { 
                 color: isDarkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(30, 58, 138, 0.95)'
               } : {}">
              Contáctanos directamente por WhatsApp para una respuesta inmediata y atención personalizada.
            </p>
            
            <!-- WhatsApp Button con EXACTA TRANSICIÓN -->
            <button class="relative text-white font-bold py-3.5 px-8 rounded-2xl transition-all duration-150 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-glow-hover text-base md:text-lg group overflow-hidden w-full max-w-xs"
                    :class="isDarkMode 
                      ? 'bg-gradient-to-r from-green-600 via-emerald-700 to-green-800 hover:from-green-700 hover:via-emerald-800 hover:to-green-900' 
                      : 'bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:from-green-700 hover:via-green-800 hover:to-green-900'"
                    :style="isTransitioning ? { 
                      background: isDarkMode 
                        ? 'linear-gradient(to right, #059669, #047857, #065f46)' 
                        : 'linear-gradient(to right, #059669, #047857, #065f46)',
                      filter: 'brightness(1.15)'
                    } : {}">
              <!-- Efecto de brillo al pasar el mouse con EXACTA TRANSICIÓN -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-300 transition-all duration-150"
                   :style="isTransitioning ? { opacity: 0.4 } : {}"></div>
              
              <span class="flex items-center justify-center relative transition-all duration-150">
                💬 Chatear por WhatsApp
                <span class="ml-2.5 text-xl animate-bounce-fast transition-all duration-150"
                      :style="isTransitioning ? { transform: 'scale(1.2)' } : {}">→</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';

// Estado del tema (EXACTAMENTE IGUAL)
const isDarkMode = ref(true);
const isTransitioning = ref(false);
const gradientPosition = ref(0);
const showParticles = ref(false);

// Gradientes premium EXACTAMENTE IGUALES
const darkGradient = 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 25%, #0369a1 50%, #1e40af 75%, #0f172a 100%)';
const lightGradient = 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 25%, #93c5fd 50%, #60a5fa 75%, #3b82f6 100%)';

// Inicializar tema desde localStorage o usar oscuro por defecto (EXACTAMENTE IGUAL)
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

// Alternar entre temas con transición EXACTAMENTE IGUAL
const toggleTheme = async () => {
  if (isTransitioning.value) return;
  
  isTransitioning.value = true;
  showParticles.value = true;
  
  // Animar el degradado - EXACTAMENTE LA MISMA TRANSICIÓN (200ms)
  const startPosition = isDarkMode.value ? 0 : 100;
  const endPosition = isDarkMode.value ? 100 : 0;
  
  // Animación del degradado con easing EXACTAMENTE IGUAL
  const duration = 200; // 200ms EXACTAMENTE IGUAL
  const startTime = Date.now();
  
  const animateGradient = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing cubic bezier EXACTAMENTE IGUAL
    const easedProgress = cubicBezier(progress, 0.4, 0, 0.2, 1);
    gradientPosition.value = startPosition + (endPosition - startPosition) * easedProgress;
    
    if (progress < 1) {
      requestAnimationFrame(animateGradient);
    } else {
      gradientPosition.value = endPosition;
    }
  };
  
  // Cambiar el estado del tema EXACTAMENTE IGUAL
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
  
  requestAnimationFrame(animateGradient);
  
  // Ocultar partículas EXACTAMENTE IGUAL
  setTimeout(() => {
    showParticles.value = false;
    isTransitioning.value = false;
  }, duration + 50);
};

// Función cubic bezier EXACTAMENTE IGUAL
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

// Estilo del degradado del fondo principal EXACTAMENTE IGUAL
const sectionGradientStyle = computed(() => {
  if (isTransitioning.value) {
    // EXACTAMENTE EL MISMO efecto de superposición
    const startGradient = isDarkMode.value ? lightGradient : darkGradient;
    const endGradient = isDarkMode.value ? darkGradient : lightGradient;
    
    // EXACTAMENTE LOS MISMOS valores
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
    // EXACTAMENTE LA MISMA animación en estado estable
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

// Estilo del degradado del botón EXACTAMENTE IGUAL
const buttonGradientStyle = computed(() => {
  if (isTransitioning.value) {
    // EXACTAMENTE LOS MISMOS gradientes
    const darkColors = ['#0f172a', '#1e3a8a', '#0369a1'];
    const lightColors = ['#dbeafe', '#bfdbfe', '#93c5fd'];
    
    const startColors = isDarkMode.value ? lightColors : darkColors;
    const endColors = isDarkMode.value ? darkColors : lightColors;
    
    // EXACTAMENTE LA MISMA composición
    return {
      backgroundImage: `linear-gradient(135deg, 
        ${startColors[0]} 0%, 
        ${startColors[1]} 25%, 
        ${startColors[2]} 50%, 
        ${endColors[1]} 75%, 
        ${endColors[0]} 100%)`,
      backgroundSize: '200% 200%',
      backgroundPosition: `${gradientPosition.value}% ${gradientPosition.value}%`,
      opacity: '0.9',
      mixBlendMode: 'overlay',
      filter: 'brightness(1.1)',
      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      willChange: 'background-position, background-image, filter'
    };
  } else {
    // EXACTAMENTE LA MISMA animación
    return {
      backgroundImage: isDarkMode.value 
        ? 'linear-gradient(135deg, rgba(14, 165, 233, 0.4) 0%, rgba(59, 130, 246, 0.5) 25%, rgba(99, 102, 241, 0.4) 50%, rgba(59, 130, 246, 0.5) 75%, rgba(14, 165, 233, 0.4) 100%)'
        : 'linear-gradient(135deg, rgba(250, 204, 21, 0.4) 0%, rgba(251, 191, 36, 0.5) 25%, rgba(253, 224, 71, 0.4) 50%, rgba(251, 191, 36, 0.5) 75%, rgba(250, 204, 21, 0.4) 100%)',
      backgroundSize: '200% 200%',
      animation: isDarkMode.value ? 'gradient-shift-dark 8s ease infinite' : 'gradient-shift-light 8s ease infinite',
      opacity: '0.8',
      willChange: 'background-position'
    };
  }
});

// Aplicar transición EXACTAMENTE IGUAL al cambiar tema
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

onMounted(() => {
  initializeTheme();
});
</script>

<style scoped>
/* ANIMACIONES EXACTAMENTE IGUALES PARA FONDO Y BOTÓN */

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

/* Transiciones de tema RÁPIDAS EXACTAMENTE IGUALES */
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

/* Animaciones del botón de tema (EXACTAMENTE IGUALES) */
@keyframes particle-move {
  0%, 100% {
    transform: translate(0, 0);
    opacity: 0.3;
  }
  50% {
    transform: translate(10px, -10px);
    opacity: 0.7;
  }
}

@keyframes pulse-ray-fast {
  0%, 100% {
    opacity: 0.5;
    transform: rotate(var(--rotation)) translateY(-12px) scale(1);
  }
  50% {
    opacity: 0.9;
    transform: rotate(var(--rotation)) translateY(-12px) scale(1.2);
  }
}

@keyframes twinkle-fast {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.3);
  }
}

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

@keyframes shimmer-fast {
  0% {
    background-position: -100% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

.animate-particle-explode-fast {
  animation: particle-explode-fast 0.5s ease-out forwards;
}

.animate-pulse-fast {
  animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-pulse-slow {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-twinkle-fast {
  animation: twinkle-fast 1.5s ease-in-out infinite;
}

.animate-shimmer-fast {
  animation: shimmer-fast 2s ease-in-out infinite;
  background-size: 200% 200%;
}

.animate-bounce-fast {
  animation: bounce 1s infinite;
}

/* Transiciones EXACTAMENTE IGUALES para todo */
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

/* Transición específica para el tema EXACTAMENTE IGUAL */
.theme-transition-fast * {
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

/* Optimización para rendimiento EXACTAMENTE IGUAL */
section > div:first-child {
  will-change: background-position, background-image, filter;
  transform: translateZ(0);
  backface-visibility: hidden;
}

button[aria-label="Cambiar tema"] {
  will-change: transform, box-shadow, border-color, background-position, filter;
  transform-style: preserve-3d;
}

/* Animaciones básicas EXACTAMENTE IGUALES */
@keyframes float {
  0%, 100% { 
    transform: translateY(0) rotate(0deg); 
    opacity: 0.3;
  }
  50% { 
    transform: translateY(-10px) rotate(180deg); 
    opacity: 0.7;
  }
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

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
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

.animate-float {
  animation: float 5s ease-in-out infinite;
}

.animate-slideInLeft {
  animation: slideInLeft 0.5s ease-out forwards;
  opacity: 0;
  animation-fill-mode: both;
}

.animate-fadeInUp {
  animation: fadeInUp 0.5s ease-out forwards;
  opacity: 0;
  animation-fill-mode: both;
}

/* Support for reduced motion */
@media (prefers-reduced-motion: reduce) {
  .animate-float,
  .animate-pulse,
  .animate-pulse-fast,
  .animate-pulse-slow,
  .animate-slideInLeft,
  .animate-fadeInUp,
  .theme-fade-fast-enter-active,
  .theme-fade-fast-leave-active,
  .animate-particle-explode-fast,
  .animate-twinkle-fast,
  .animate-shimmer-fast,
  .animate-bounce-fast {
    animation: none !important;
  }
  
  .group-hover\:scale-105,
  .group-hover\:scale-110,
  .group-hover\:-translate-y-1,
  .group-hover\:rotate-3,
  .hover\:scale-105,
  .hover\:-translate-y-1 {
    transform: none !important;
  }
}

/* Corrección para animaciones de delay */
.animate-delay-500 {
  animation-delay: 500ms;
}

.animate-delay-1000 {
  animation-delay: 1000ms;
}

/* Efectos de sombra específicos */
.shadow-glow {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.shadow-glow-hover:hover {
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
}

/* Responsividad EXACTA */
@media (max-width: 768px) {
  #contacto {
    background-attachment: scroll;
  }
  
  #contacto > div:first-child {
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

/* Asegurar que todos los elementos usen EXACTAMENTE LA MISMA transición */
.absolute.inset-0 {
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

.relative {
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Efectos especiales durante la transición */
.theme-transition-fast #contacto > div:first-child {
  filter: brightness(1.15) saturate(1.1);
}

.theme-transition-fast button[aria-label="Cambiar tema"] {
  filter: brightness(1.2);
}

/* Sincronización perfecta del desplazamiento del gradiente */
@keyframes synchronized-gradient-transition {
  0% {
    background-position: var(--start-pos) var(--start-pos);
  }
  100% {
    background-position: var(--end-pos) var(--end-pos);
  }
}

/* Clase especial para elementos con transición sincronizada */
.synchronized-transition {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>