<template>
  <section 
    id="proceso" 
    class="py-8 md:py-10 text-white relative overflow-hidden w-full flex justify-center transition-all duration-150 ease-out"
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
             :class="isDarkMode ? 'bg-blue-400/20' : 'bg-white/20'"
             :style="`
               width: ${Math.random() * 2 + 1}px;
               height: ${Math.random() * 2 + 1}px;
               top: ${Math.random() * 100}%;
               left: ${Math.random() * 100}%;
               animation-delay: ${Math.random() * 0.3}s;
               opacity: ${isTransitioning ? 0.7 : 0.2};
               filter: ${isTransitioning ? 'brightness(1.2)' : 'brightness(1)'};
             `">
        </div>
      </div>
    </div>
    
    <!-- Efectos de fondo animados -->
    <div class="absolute inset-0 overflow-hidden transition-all duration-150 ease-out">
      <transition name="theme-fade-fast" mode="out-in">
        <div v-if="isDarkMode" key="dark-bg-1" class="absolute top-1/4 -left-8 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-cyan-400/15 rounded-full blur-2xl animate-pulse-fast transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.4, transform: 'scale(1.05)' } : {}"></div>
        <div v-else key="light-bg-1" class="absolute top-1/4 -left-8 w-40 h-40 bg-gradient-to-br from-blue-100/40 to-blue-50/30 rounded-full blur-2xl animate-pulse-fast transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.4, transform: 'scale(1.05)' } : {}"></div>
      </transition>
      
      <transition name="theme-fade-fast" mode="out-in">
        <div v-if="isDarkMode" key="dark-bg-2" class="absolute bottom-1/3 -right-8 w-44 h-44 bg-gradient-to-br from-indigo-500/20 to-blue-500/15 rounded-full blur-2xl animate-pulse-fast animate-delay-500 transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.4, transform: 'scale(1.05)' } : {}"></div>
        <div v-else key="light-bg-2" class="absolute bottom-1/3 -right-8 w-44 h-44 bg-gradient-to-br from-blue-100/50 to-blue-50/30 rounded-full blur-2xl animate-pulse-fast animate-delay-500 transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.4, transform: 'scale(1.05)' } : {}"></div>
      </transition>
      
      <transition name="theme-fade-fast" mode="out-in">
        <div v-if="isDarkMode" key="dark-bg-3" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-600/15 to-cyan-500/10 rounded-full blur-2xl animate-pulse-fast animate-delay-1000 transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.4, transform: 'scale(1.05)' } : {}"></div>
        <div v-else key="light-bg-3" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-blue-50/20 rounded-full blur-2xl animate-pulse-fast animate-delay-1000 transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.4, transform: 'scale(1.05)' } : {}"></div>
      </transition>
      
      <!-- Partículas flotantes -->
      <div v-for="i in 8" :key="i" 
           class="absolute w-0.5 h-0.5 rounded-full animate-float transition-all duration-150"
           :class="isDarkMode ? 'bg-blue-400/40' : 'bg-blue-300/40'"
           :style="`
             top: ${Math.random() * 100}%; 
             left: ${Math.random() * 100}%; 
             animation-delay: ${Math.random() * 1.5}s;
             filter: ${isTransitioning ? 'brightness(1.2)' : 'brightness(1)'};
           `">
      </div>
    </div>

    <div class="w-full max-w-5xl mx-auto px-3 md:px-4 relative z-10 flex flex-col items-center">
      <!-- Section Header con botón de tema integrado -->
      <div class="text-center mb-4 md:mb-8 w-full relative">
        <!-- Botón de tema premium con switch grande que cubre el icono -->
        <div class="absolute top-0 right-0 md:right-2 z-20">
          <button
            @click="toggleTheme"
            class="relative flex items-center justify-center w-28 h-10 rounded-lg border shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-150 ease-out overflow-hidden group theme-switch-premium"
            :class="isDarkMode 
              ? 'border-cyan-400/50 hover:border-cyan-300 shadow-cyan-500/15 bg-gradient-to-br from-blue-900/85 via-indigo-900/85 to-purple-900/85' 
              : 'border-blue-300/50 hover:border-blue-200 shadow-blue-400/15 bg-gradient-to-br from-white/90 via-blue-50/90 to-blue-100/90'"
            :title="isDarkMode ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'"
            aria-label="Cambiar tema"
          >
            <!-- Switch compacto -->
            <div 
              class="absolute w-12 h-12 rounded-full transition-all duration-300 ease-out transform z-30 overflow-hidden"
              :class="isDarkMode ? 'right-3' : 'left-3'"
              :style="isTransitioning ? { 
                filter: 'brightness(1.15)',
                boxShadow: isDarkMode 
                  ? '0 0 15px rgba(96, 165, 250, 0.4), inset 0 0 15px rgba(96, 165, 250, 0.25)' 
                  : '0 0 15px rgba(250, 204, 21, 0.4), inset 0 0 15px rgba(250, 204, 21, 0.25)'
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
                <div class="absolute inset-0 bg-gradient-to-br from-transparent via-white/40 to-transparent opacity-60 animate-pulse-slow transition-all duration-150"
                     :style="isTransitioning ? { opacity: 0.8 } : {}"></div>
                
                <!-- Brillo de borde -->
                <div 
                  class="absolute inset-0 rounded-full border transition-all duration-150"
                  :class="isDarkMode 
                    ? 'border-blue-400/80' 
                    : 'border-yellow-400/80'"
                  :style="isTransitioning ? { 
                    borderColor: isDarkMode ? 'rgba(96, 165, 250, 0.9)' : 'rgba(250, 204, 21, 0.9)',
                    boxShadow: isDarkMode 
                      ? '0 0 12px rgba(96, 165, 250, 0.5), inset 0 0 8px rgba(96, 165, 250, 0.3)' 
                      : '0 0 12px rgba(250, 204, 21, 0.5), inset 0 0 8px rgba(250, 204, 21, 0.3)'
                  } : {}"
                ></div>
                
                <!-- Sombra interna -->
                <div class="absolute inset-0 rounded-full shadow-inner transition-all duration-150"
                     :class="isDarkMode 
                       ? 'shadow-blue-900/60' 
                       : 'shadow-yellow-900/30'"
                     :style="isTransitioning ? { 
                       boxShadow: isDarkMode 
                         ? 'inset 0 3px 6px rgba(0, 0, 0, 0.4)' 
                         : 'inset 0 3px 6px rgba(0, 0, 0, 0.2)'
                     } : {}"></div>
              </div>
              
              <!-- Icono dentro del switch (SVG) -->
              <div class="absolute inset-0 flex items-center justify-center z-10">
                <!-- Icono de Luna para tema oscuro -->
                <svg v-if="isDarkMode" class="w-6 h-6 transition-all duration-150" fill="currentColor" viewBox="0 0 20 20"
                     :class="isTransitioning ? 'text-blue-200 filter drop-shadow-[0_0_8px_rgba(147,197,253,0.7)]' : 'text-blue-300'">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                </svg>
                
                <!-- Icono de Sol para tema claro -->
                <svg v-else class="w-6 h-6 transition-all duration-150" fill="currentColor" viewBox="0 0 20 20"
                     :class="isTransitioning ? 'text-yellow-200 filter drop-shadow-[0_0_8px_rgba(253,224,71,0.7)]' : 'text-yellow-400'">
                  <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
                </svg>
              </div>
              
              <!-- Brillo central -->
              <div class="absolute top-1/2 left-1/2 w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-xs transition-all duration-150"
                   :class="isDarkMode ? 'bg-blue-300/70' : 'bg-yellow-300/70'"
                   :style="isTransitioning ? { 
                     width: '3px', 
                     height: '3px',
                     opacity: 0.8
                   } : {}"></div>
            </div>
            
            <!-- Efecto de brillo al pasar el mouse -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-35 transition-opacity duration-300 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-out"></div>
            
            <!-- Contenedor principal con ambos iconos -->
            <div class="relative w-full h-full flex items-center justify-center overflow-hidden">
              
              <!-- Sol (izquierda) -->
              <div class="absolute left-3 w-6 h-6 transition-all duration-150 ease-out z-20"
                   :class="isDarkMode 
                     ? 'opacity-35 scale-85 text-yellow-300/40' 
                     : 'opacity-100 scale-105 text-yellow-400 filter drop-shadow-[0_0_6px_rgba(250,204,21,0.6)]'"
                   :style="isTransitioning ? { 
                     filter: isDarkMode 
                       ? 'drop-shadow(0 0 3px rgba(245, 158, 11, 0.2)) brightness(1.15)' 
                       : 'drop-shadow(0 0 10px rgba(250, 204, 21, 0.5)) brightness(1.2)',
                     transform: isDarkMode ? 'scale(0.9)' : 'scale(1.05)'
                   } : {}">
                <svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
                </svg>
              </div>
              
              <!-- Luna (derecha) -->
              <div class="absolute right-3 w-5 h-5 transition-all duration-150 ease-out z-20"
                   :class="!isDarkMode 
                     ? 'opacity-35 scale-85 text-blue-400/40' 
                     : 'opacity-100 scale-105 text-blue-300 filter drop-shadow-[0_0_6px_rgba(96,165,250,0.6)]'"
                   :style="isTransitioning ? { 
                     filter: !isDarkMode 
                       ? 'drop-shadow(0 0 3px rgba(147, 197, 253, 0.2)) brightness(1.15)' 
                       : 'drop-shadow(0 0 10px rgba(96, 165, 250, 0.5)) brightness(1.2)',
                     transform: !isDarkMode ? 'scale(0.9)' : 'scale(1.05)'
                   } : {}">
                <svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                </svg>
              </div>
              
              <!-- Texto "DÍA/NOCHE" -->
              <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-[9px] font-semibold uppercase tracking-tight opacity-85 z-5 transition-all duration-150 whitespace-nowrap"
                   :class="isDarkMode ? 'text-blue-300/85' : 'text-yellow-600/85'"
                   :style="isTransitioning ? { 
                     color: isDarkMode ? 'rgba(147, 197, 253, 0.9)' : 'rgba(202, 138, 4, 0.9)',
                     opacity: 1,
                     textShadow: isDarkMode 
                       ? '0 1px 2px rgba(147, 197, 253, 0.3)' 
                       : '0 1px 2px rgba(202, 138, 4, 0.3)',
                     fontWeight: '500'
                   } : {}">
                {{ isDarkMode ? 'NOCHE' : 'DÍA' }}
              </div>
              
            </div>
            
            <!-- Rayos del sol animados -->
            <div v-if="!isDarkMode" class="absolute left-3 w-6 h-6 z-10">
              <div v-for="(ray, index) in 6" :key="index"
                   class="absolute top-1/2 left-1/2 w-0.5 h-2 bg-yellow-300/70 rounded-full transform origin-center transition-all duration-150"
                   :style="`
                     transform: rotate(${index * 60}deg) translateY(-9px);
                     animation: pulse-ray-fast 1.5s ease-in-out infinite;
                     animation-delay: ${index * 0.03}s;
                     ${isTransitioning ? 'opacity: 0.8; height: 2.5px;' : ''}
                   `">
              </div>
            </div>
            
            <!-- Constelación estelar -->
            <div v-if="isDarkMode" class="absolute right-3 w-5 h-5 z-10">
              <div v-for="(star, index) in 3" :key="index"
                   class="absolute rounded-full bg-blue-100/70 animate-twinkle-fast transition-all duration-150"
                   :style="`
                     width: ${Math.random() * 1 + 0.6}px;
                     height: ${Math.random() * 1 + 0.6}px;
                     top: ${Math.random() * 100}%;
                     left: ${Math.random() * 100}%;
                     animation-delay: ${index * 0.1}s;
                     ${isTransitioning ? 'opacity: 1;' : ''}
                   `">
              </div>
            </div>
            
            <!-- Efecto de partículas al hacer clic -->
            <div v-if="showParticles" class="absolute inset-0 pointer-events-none z-40">
              <div v-for="i in 8" :key="i"
                   class="absolute w-1 h-1 rounded-full animate-particle-explode-fast transition-all duration-150"
                   :class="isDarkMode ? 'bg-blue-400' : 'bg-yellow-400'"
                   :style="`
                     --x: ${Math.random() * 30 - 15}px;
                     --y: ${Math.random() * 30 - 15}px;
                     animation-delay: ${Math.random() * 0.08}s;
                     ${isTransitioning ? 'filter: brightness(1.2);' : ''}
                   `">
              </div>
            </div>
            
            <!-- Tooltip -->
            <div class="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap transition-all duration-150 pointer-events-none z-50">
              <div class="px-1.5 py-0.5 text-[9px] font-medium rounded backdrop-blur-sm shadow-xs transition-all duration-150"
                   :class="isDarkMode 
                     ? 'bg-blue-900/85 text-blue-300 border border-blue-400/25' 
                     : 'bg-yellow-50/90 text-yellow-800 border border-yellow-400/25'"
                   :style="isTransitioning ? { 
                     backgroundColor: isDarkMode ? 'rgba(30, 58, 138, 0.9)' : 'rgba(254, 252, 232, 0.9)',
                     borderColor: isDarkMode ? 'rgba(96, 165, 250, 0.35)' : 'rgba(250, 204, 21, 0.35)'
                   } : {}">
                {{ isDarkMode ? 'Activar día' : 'Activar noche' }}
              </div>
            </div>
            
          </button>
        </div>
        
        <!-- Badge animado -->
        <div 
          class="inline-flex items-center backdrop-blur-lg rounded-full px-4 py-1.5 mb-2 shadow-glow animate-pulse-slow transition-all duration-150"
          :class="isDarkMode 
            ? 'bg-gradient-to-r from-blue-600/40 to-cyan-500/30 border border-cyan-400/40' 
            : 'bg-gradient-to-r from-blue-500/35 to-blue-400/40 border border-blue-400/50'"
          :style="isTransitioning ? { 
            filter: 'brightness(1.15)',
            boxShadow: isDarkMode 
              ? '0 0 15px rgba(34, 211, 238, 0.3)' 
              : '0 0 15px rgba(59, 130, 246, 0.3)'
          } : {}"
        >
          <div 
            class="w-2 h-2 rounded-full mr-2 animate-pulse-fast transition-all duration-150"
            :class="isDarkMode 
              ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
              : 'bg-gradient-to-r from-blue-400 to-blue-300'"
            :style="isTransitioning ? { 
              background: isDarkMode 
                ? 'linear-gradient(to right, #22d3ee, #60a5fa)' 
                : 'linear-gradient(to right, #60a5fa, #93c5fd)',
              transform: 'scale(1.15)'
            } : {}"
          ></div>
          <span class="text-xs font-bold tracking-tighter transition-colors duration-150"
                :class="isDarkMode ? 'text-white' : 'text-blue-900'"
                :style="isTransitioning ? { 
                  color: isDarkMode ? '#f0f9ff' : '#1e3a8a',
                  textShadow: isDarkMode 
                    ? '0 0 4px rgba(240, 249, 255, 0.4)' 
                    : '0 0 4px rgba(30, 58, 138, 0.25)'
                } : {}">🚀 ANIMATE</span>
        </div>
        
        <!-- Título -->
        <div class="relative w-full mb-3">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-center w-full tracking-tight leading-tight animate-slideInLeft transition-all duration-150">
            <span class="relative inline-block">
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
                Empecemos el proceso
              </span>
              
              <!-- Efectos de subrayado -->
              <div 
                class="absolute -bottom-0.5 left-1/4 right-1/4 h-0.5 rounded-full opacity-60 mt-0.5 transition-all duration-150"
                :class="isDarkMode 
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
                  : 'bg-gradient-to-r from-blue-500 to-blue-400'"
                :style="isTransitioning ? { 
                  background: isDarkMode 
                    ? 'linear-gradient(to right, #22d3ee, #60a5fa)' 
                    : 'linear-gradient(to right, #3b82f6, #60a5fa)',
                  opacity: 0.7,
                  height: '0.4px'
                } : {}"
              ></div>
            </span>
          </h2>
        </div>
        
        <!-- Subtítulo -->
        <div class="relative max-w-xl mx-auto mb-4 animate-fadeInUp transition-all duration-150" style="animation-delay: 40ms">
          <p 
            class="text-xs sm:text-sm leading-snug text-center transition-colors duration-150"
            :class="isDarkMode ? 'text-white/85' : 'text-blue-900/85'"
            :style="isTransitioning ? { 
              color: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(30, 58, 138, 0.9)',
              textShadow: isDarkMode 
                ? '0 0 6px rgba(255, 255, 255, 0.25)' 
                : '0 0 6px rgba(30, 58, 138, 0.08)'
            } : {}"
          >
            Consultas y asesorías
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
                100% Gratis.
              </span>
              <div 
                class="absolute inset-0 blur-xs -z-10 rounded-full transition-all duration-150"
                :class="isDarkMode 
                  ? 'bg-gradient-to-r from-cyan-400/25 via-blue-300/20 to-blue-200/20' 
                  : 'bg-gradient-to-r from-blue-500/25 via-blue-400/20 to-blue-300/20'"
                :style="isTransitioning ? { 
                  background: isDarkMode 
                    ? 'linear-gradient(to right, rgba(34, 211, 238, 0.35), rgba(59, 130, 246, 0.3), rgba(191, 219, 254, 0.3))' 
                    : 'linear-gradient(to right, rgba(59, 130, 246, 0.35), rgba(96, 165, 250, 0.3), rgba(147, 197, 253, 0.3))',
                  filter: 'blur(4px)'
                } : {}"
              ></div>
            </span>
            ¡Envíanos un mensaje!
          </p>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center mt-6 md:mt-0 w-full max-w-2xl mx-auto transition-all duration-150">
        <div 
          class="backdrop-blur-xl rounded-2xl border shadow-lg p-4 md:p-5 w-full flex flex-col items-center justify-center transform hover:scale-101 transition-all duration-150 group"
          :class="isDarkMode 
            ? 'bg-gradient-to-br from-blue-700/45 via-indigo-800/55 to-blue-900/45 border-cyan-400/40' 
            : 'bg-gradient-to-br from-blue-50/85 via-blue-100/75 to-blue-200/65 border-blue-400/50'"
          :style="isTransitioning ? { 
            background: isDarkMode 
              ? 'linear-gradient(135deg, rgba(29, 78, 216, 0.5), rgba(55, 48, 163, 0.6), rgba(30, 58, 138, 0.5))' 
              : 'linear-gradient(135deg, rgba(219, 234, 254, 0.9), rgba(191, 219, 254, 0.8), rgba(147, 197, 253, 0.7))',
            borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.45)' : 'rgba(59, 130, 246, 0.6)',
            filter: 'brightness(1.05)'
          } : {}"
        >
          <!-- Efecto de borde animado -->
          <div 
            class="absolute inset-0 rounded-2xl border border-transparent transition-all duration-150"
            :class="isDarkMode 
              ? 'group-hover:border-cyan-400/35' 
              : 'group-hover:border-blue-400/40'"
            :style="isTransitioning ? { 
              borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.4)' : 'rgba(59, 130, 246, 0.5)',
              boxShadow: isDarkMode 
                ? '0 0 20px rgba(34, 211, 238, 0.25)' 
                : '0 0 20px rgba(59, 130, 246, 0.25)'
            } : {}"
          ></div>
          
          <!-- Título CTA -->
          <h3 
            class="text-lg md:text-xl font-black mb-2 text-center w-full bg-clip-text text-transparent px-3 transition-all duration-150"
            :class="isDarkMode 
              ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-100' 
              : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'"
            :style="isTransitioning ? { 
              backgroundImage: isDarkMode 
                ? 'linear-gradient(to right, #ffffff, #a5f3fc, #dbeafe)' 
                : 'linear-gradient(to right, #1e3a8a, #1d4ed8, #2563eb)'
            } : {}"
          >
            ¿Listo para Iniciar tu Proyecto?
          </h3>
          
          <!-- Texto CTA -->
          <p 
            class="text-sm md:text-base mb-4 max-w-md text-center transition-colors duration-150"
            :class="isDarkMode ? 'text-white/85' : 'text-blue-900/85'"
            :style="isTransitioning ? { 
              color: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(30, 58, 138, 0.9)'
            } : {}"
          >
            Sigue los pasos de las empresas exitosas que confiaron en nuestro proceso probado.
          </p>
          
          <!-- Botón CTA -->
          <div class="flex justify-center w-full transition-all duration-150">
            <button 
              @click="scrollToSection('contacto')"
              class="relative text-white font-bold py-2.5 px-6 rounded-xl transition-all duration-150 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-glow text-sm md:text-base group overflow-hidden"
              :class="isDarkMode 
                ? 'bg-gradient-to-r from-blue-600 via-cyan-700 to-indigo-800 hover:from-blue-700 hover:via-cyan-800 hover:to-indigo-900' 
                : 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900'"
              :style="isTransitioning ? { 
                background: isDarkMode 
                  ? 'linear-gradient(to right, #2563eb, #0891b2, #3730a3)' 
                  : 'linear-gradient(to right, #2563eb, #1d4ed8, #1e40af)',
                filter: 'brightness(1.1)'
              } : {}"
            >
              <!-- Efecto de brillo al pasar el mouse -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-300 transition-all duration-150"
                   :style="isTransitioning ? { opacity: 0.35 } : {}"></div>
              
              <span class="flex items-center justify-center relative transition-all duration-150">
                Iniciar Proceso
                <span class="ml-2 text-lg animate-bounce-fast transition-all duration-150"
                      :style="isTransitioning ? { transform: 'scale(1.15)' } : {}">🚀</span>
              </span>
            </button>
          </div>
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

// Gradientes premium (más compactos)
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
  
  // Animar el degradado
  const startPosition = isDarkMode.value ? 0 : 100;
  const endPosition = isDarkMode.value ? 100 : 0;
  
  const duration = 180;
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
  
  // Cambiar el estado del tema
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
  
  requestAnimationFrame(animateGradient);
  
  // Ocultar partículas
  setTimeout(() => {
    showParticles.value = false;
    isTransitioning.value = false;
  }, duration + 40);
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
      filter: 'brightness(1.1) saturate(1.05)',
      transition: 'all 0.18s cubic-bezier(0.4, 0, 0.2, 1)',
      willChange: 'background-position, background-image, filter'
    };
  } else {
    return {
      backgroundImage: isDarkMode.value ? darkGradient : lightGradient,
      backgroundSize: '200% 200%',
      backgroundPosition: '0% 0%',
      animation: isDarkMode.value ? 'gradient-shift-dark 6s ease infinite' : 'gradient-shift-light 6s ease infinite',
      filter: 'brightness(1) saturate(1)',
      willChange: 'background-position'
    };
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
  }, 200);
});

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) element.scrollIntoView({ behavior: 'smooth' });
};

onMounted(() => {
  initializeTheme();
});
</script>

<style scoped>
/* ANIMACIONES OPTIMIZADAS */

@keyframes gradient-shift-dark {
  0%, 100% {
    background-position: 0% 0%;
  }
  25% {
    background-position: 40% 20%;
  }
  50% {
    background-position: 80% 40%;
  }
  75% {
    background-position: 40% 60%;
  }
}

@keyframes gradient-shift-light {
  0%, 100% {
    background-position: 0% 0%;
  }
  25% {
    background-position: 40% 20%;
  }
  50% {
    background-position: 80% 40%;
  }
  75% {
    background-position: 40% 60%;
  }
}

/* Transiciones de tema */
@keyframes themeFadeInFast {
  from {
    opacity: 0;
    transform: scale(0.96) translateY(6px);
    filter: blur(2px);
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
    transform: scale(1.03) translateY(-6px);
    filter: blur(2px);
  }
}

.theme-fade-fast-enter-active {
  animation: themeFadeInFast 0.12s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.theme-fade-fast-leave-active {
  animation: themeFadeOutFast 0.12s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

/* Transiciones generales optimizadas */
* {
  transition: background-color 0.12s cubic-bezier(0.4, 0, 0.2, 1), 
              border-color 0.12s cubic-bezier(0.4, 0, 0.2, 1),
              color 0.12s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.12s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.12s cubic-bezier(0.4, 0, 0.2, 1),
              filter 0.12s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.12s cubic-bezier(0.4, 0, 0.2, 1),
              background-position 0.12s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Transición específica para el tema */
.theme-transition-fast * {
  transition: all 0.12s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

/* Animación para rayos del sol */
@keyframes pulse-ray-fast {
  0%, 100% {
    opacity: 0.25;
    transform: rotate(var(--rotation)) translateY(-9px) scale(0.85);
  }
  50% {
    opacity: 0.8;
    transform: rotate(var(--rotation)) translateY(-9px) scale(1.1);
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
    opacity: 0.25;
    transform: scale(0.85);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.1);
  }
}

/* Animaciones de utilidad */
.animate-pulse-fast {
  animation: pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-pulse-slow {
  animation: pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-bounce-fast {
  animation: bounce 0.9s infinite;
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
    transform: translateY(-8px);
  }
}

/* Efecto especial para el switch */
button[aria-label="Cambiar tema"] > div:first-child {
  animation: float-gentle 2.5s ease-in-out infinite;
}

@keyframes float-gentle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1.5px);
  }
}

/* Optimización para dispositivos móviles */
@media (max-width: 768px) {
  /* Botón de tema más compacto en móvil */
  button[aria-label="Cambiar tema"] {
    width: 24px;
    height: 10px;
  }
  
  /* Switch más pequeño en móvil */
  button[aria-label="Cambiar tema"] > div:first-child {
    width: 10px;
    height: 10px;
  }
  
  /* Iconos más pequeños en móvil */
  .absolute.left-3, .absolute.right-3 {
    width: 5px;
    height: 5px;
  }
  
  /* Texto "DÍA/NOCHE" más pequeño en móvil */
  .absolute.-bottom-4 {
    font-size: 8px;
    bottom: -3px;
  }
  
  /* Padding reducido en móvil */
  .px-3 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  
  /* Margen inferior reducido */
  .mb-4 {
    margin-bottom: 0.75rem;
  }
}

@media (max-width: 480px) {
  /* Botón aún más compacto */
  button[aria-label="Cambiar tema"] {
    width: 22px;
    height: 9px;
  }
  
  button[aria-label="Cambiar tema"] > div:first-child {
    width: 9px;
    height: 9px;
  }
  
  .absolute.left-3 {
    left: 2px;
    width: 4px;
    height: 4px;
  }
  
  .absolute.right-3 {
    right: 2px;
    width: 4px;
    height: 4px;
  }
  
  /* Texto de títulos más pequeño */
  .text-2xl {
    font-size: 1.5rem;
  }
  
  /* Padding mínimo */
  .px-3 {
    padding-left: 0.375rem;
    padding-right: 0.375rem;
  }
}

/* Clases de utilidad para tamaños reducidos */
.text-xs {
  font-size: 0.75rem;
}

.text-sm {
  font-size: 0.875rem;
}

.p-4 {
  padding: 1rem;
}

.p-5 {
  padding: 1.25rem;
}

.py-2\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

/* Utilería para hover escalas reducidas */
.hover\:scale-101:hover {
  transform: scale(1.01);
}

.hover\:scale-102:hover {
  transform: scale(1.02);
}
</style>