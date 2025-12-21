<template>
  <section 
    id="testimonios" 
    class="py-10 md:py-12 text-white relative overflow-hidden w-full flex justify-center transition-all duration-150 ease-out"
  >
    <!-- Capa de fondo principal - EXACTAMENTE IGUAL -->
    <div 
      class="absolute inset-0 transition-all duration-150 ease-out overflow-hidden"
      :style="sectionGradientStyle"
    >
      <!-- Efecto de partículas - MISMA cantidad y estilo -->
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
    
    <!-- Efectos de fondo animados - EXACTAMENTE IGUAL -->
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
      
      <!-- Partículas flotantes - EXACTAMENTE IGUAL -->
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
      <!-- Section Header -->
      <div class="text-center mb-8 md:mb-12 w-full relative">
        <!-- Botón de tema premium con switch grande - EXACTAMENTE IGUAL -->
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
        
        <!-- Badge animado - EXACTAMENTE IGUAL -->
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
                } : {}">💬 TESTIMONIOS</span>
        </div>
        
        <!-- Título - EXACTAMENTE IGUAL -->
        <div class="relative w-full mb-4">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-center w-full tracking-tight leading-tight animate-slideInLeft transition-all duration-150">
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
                Testimonios Clientes
              </span>
              
              <!-- Efectos de subrayado - EXACTAMENTE IGUAL -->
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
        
        <!-- Subtítulo - EXACTAMENTE IGUAL -->
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
            Más de 
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
                200 empresas satisfechas
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
                } : {}"
              ></div>
            </span>
            confían en nosotros
          </p>
        </div>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 w-full justify-items-center">
        
        <!-- Testimonio 1 -->
        <div class="group relative w-full max-w-sm flex flex-col animate-fadeInUp transform-gpu transition-all duration-150"
             style="animation-delay: 150ms">
          
          <!-- Tarjeta Principal - MISMO ESTILO que las tarjetas del proceso -->
          <div class="relative backdrop-blur-xl rounded-xl border-2 p-0.5 transition-all duration-150 transform group-hover:-translate-y-1.5 group-hover:shadow-xl shadow-lg overflow-hidden w-full flex flex-col"
               :class="isDarkMode 
                 ? 'bg-gradient-to-br from-blue-700/30 via-indigo-800/40 to-blue-900/30 border-cyan-400/40 hover:border-cyan-300/60 shadow-blue-500/20' 
                 : 'bg-gradient-to-br from-blue-50/90 via-blue-100/80 to-blue-200/70 border-blue-400/60 hover:border-blue-300/80 shadow-blue-400/20'"
               :style="isTransitioning ? { 
                 background: isDarkMode 
                   ? 'linear-gradient(135deg, rgba(29, 78, 216, 0.3), rgba(55, 48, 163, 0.4), rgba(30, 58, 138, 0.3))' 
                   : 'linear-gradient(135deg, rgba(219, 234, 254, 0.9), rgba(191, 219, 254, 0.8), rgba(147, 197, 253, 0.7))',
                 borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.4)' : 'rgba(59, 130, 246, 0.6)',
                 filter: 'brightness(1.1)'
               } : {}">
            
            <!-- Efecto de borde animado - EXACTAMENTE IGUAL -->
            <div 
              class="absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-150"
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
            
            <!-- Header de la tarjeta -->
            <div class="p-5 md:p-6 text-center border-b flex-shrink-0 flex flex-col items-center justify-center transition-all duration-150"
                 :class="isDarkMode ? 'border-blue-400/25' : 'border-blue-300/25'">
              
              <!-- Avatar -->
              <div class="relative w-16 h-16 rounded-full flex items-center justify-center mb-4 transform transition-all duration-150 group-hover:scale-110 shadow-lg"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600' 
                     : 'bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400'">
                <span class="text-2xl text-white font-bold">MR</span>
              </div>
              
              <h3 class="text-xl font-bold mb-2 transition-colors duration-150"
                  :class="isDarkMode ? 'text-white' : 'text-blue-900'">
                María Rodríguez
              </h3>
              <p class="text-sm font-semibold tracking-wider transition-colors duration-150"
                 :class="isDarkMode ? 'text-blue-100/60' : 'text-blue-700/60'">
                Dueña de Boutique Elegante
              </p>
            </div>
            
            <!-- Rating -->
            <div class="p-4 md:p-5 text-center flex-shrink-0 transition-all duration-150"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-r from-blue-800/30 via-indigo-900/30 to-blue-900/30' 
                   : 'bg-gradient-to-r from-blue-100/30 via-blue-200/30 to-blue-300/30'">
              <div class="flex justify-center mb-3">
                <span v-for="star in 5" :key="star" 
                      class="text-yellow-400 text-lg mx-0.5 transform transition-all duration-300 group-hover:scale-110">
                  ⭐
                </span>
              </div>
            </div>
            
            <!-- Testimonio -->
            <div class="p-5 md:p-6 flex-grow transition-all duration-150">
              <div class="relative mb-4">
                <div class="absolute -top-2 -left-2 text-2xl opacity-20 transition-all duration-150"
                     :class="isDarkMode ? 'text-blue-300' : 'text-blue-400'">"</div>
                <div class="absolute -bottom-2 -right-2 text-2xl opacity-20 transition-all duration-150"
                     :class="isDarkMode ? 'text-blue-300' : 'text-blue-400'">"</div>
                
                <p class="text-sm leading-relaxed italic text-center transition-colors duration-150 px-2"
                   :class="isDarkMode ? 'text-white/90' : 'text-blue-800/90'"
                   :style="isTransitioning ? { 
                     color: isDarkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(30, 58, 138, 0.95)'
                   } : {}">
                  "JMG Desarrollos transformó completamente mi negocio. Mi sitio web no solo es hermoso, sino que ha aumentado mis ventas online."
                </p>
              </div>
            </div>
            
            <!-- Resultados -->
            <div class="p-4 md:p-5 pt-0 flex-shrink-0 transition-all duration-150">
              <div class="relative backdrop-blur-xl rounded-lg border-2 p-3 transform transition-all duration-150"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-br from-blue-700/50 via-indigo-800/60 to-blue-900/50 border-cyan-400/50' 
                     : 'bg-gradient-to-br from-blue-50/90 via-blue-100/80 to-blue-200/70 border-blue-400/60'"
                   :style="isTransitioning ? { 
                     background: isDarkMode 
                       ? 'linear-gradient(135deg, rgba(29, 78, 216, 0.6), rgba(55, 48, 163, 0.7), rgba(30, 58, 138, 0.6))' 
                       : 'linear-gradient(135deg, rgba(219, 234, 254, 0.95), rgba(191, 219, 254, 0.85), rgba(147, 197, 253, 0.75))',
                     borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.6)' : 'rgba(59, 130, 246, 0.7)',
                     filter: 'brightness(1.1)'
                   } : {}">
                <div class="flex justify-between items-center">
                  <span class="text-xs font-semibold uppercase tracking-wide transition-colors duration-150"
                        :class="isDarkMode ? 'text-white/90' : 'text-blue-900/90'"
                        :style="isTransitioning ? { 
                          color: isDarkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(30, 58, 138, 0.95)'
                        } : {}">
                    RESULTADOS:
                  </span>
                  <span class="text-sm font-black transition-all duration-150"
                        :class="isDarkMode 
                          ? 'bg-gradient-to-r from-green-300 via-green-400 to-cyan-400 bg-clip-text text-transparent' 
                          : 'bg-gradient-to-r from-green-600 via-green-700 to-blue-800 bg-clip-text text-transparent'">
                    +300% VENTAS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Testimonio 2 -->
        <div class="group relative w-full max-w-sm flex flex-col animate-fadeInUp transform-gpu transition-all duration-150"
             style="animation-delay: 250ms">
          
          <!-- Tarjeta Principal -->
          <div class="relative backdrop-blur-xl rounded-xl border-2 p-0.5 transition-all duration-150 transform group-hover:-translate-y-1.5 group-hover:shadow-xl shadow-lg overflow-hidden w-full flex flex-col"
               :class="isDarkMode 
                 ? 'bg-gradient-to-br from-blue-700/35 via-indigo-800/45 to-blue-900/35 border-cyan-500/45 hover:border-cyan-400/70 shadow-blue-500/25' 
                 : 'bg-gradient-to-br from-blue-50/95 via-blue-100/85 to-blue-200/75 border-blue-500/65 hover:border-blue-400/90 shadow-blue-400/25'"
               :style="isTransitioning ? { 
                 background: isDarkMode 
                   ? 'linear-gradient(135deg, rgba(29, 78, 216, 0.35), rgba(55, 48, 163, 0.45), rgba(30, 58, 138, 0.35))' 
                   : 'linear-gradient(135deg, rgba(219, 234, 254, 0.95), rgba(191, 219, 254, 0.85), rgba(147, 197, 253, 0.75))',
                 borderColor: isDarkMode ? 'rgba(56, 189, 248, 0.45)' : 'rgba(96, 165, 250, 0.65)',
                 filter: 'brightness(1.1)'
               } : {}">
            
            <!-- Efecto de borde animado -->
            <div 
              class="absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-150"
              :class="isDarkMode 
                ? 'group-hover:border-cyan-500/40' 
                : 'group-hover:border-blue-500/50'"
              :style="isTransitioning ? { 
                borderColor: isDarkMode ? 'rgba(56, 189, 248, 0.5)' : 'rgba(96, 165, 250, 0.6)',
                boxShadow: isDarkMode 
                  ? '0 0 25px rgba(56, 189, 248, 0.3)' 
                  : '0 0 25px rgba(96, 165, 250, 0.3)'
              } : {}"
            ></div>
            
            <!-- Header de la tarjeta -->
            <div class="p-5 md:p-6 text-center border-b flex-shrink-0 flex flex-col items-center justify-center transition-all duration-150"
                 :class="isDarkMode ? 'border-blue-500/30' : 'border-blue-400/30'">
              
              <!-- Avatar -->
              <div class="relative w-16 h-16 rounded-full flex items-center justify-center mb-4 transform transition-all duration-150 group-hover:scale-110 shadow-lg"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700' 
                     : 'bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500'">
                <span class="text-2xl text-white font-bold">CP</span>
              </div>
              
              <h3 class="text-xl font-bold mb-2 transition-colors duration-150"
                  :class="isDarkMode ? 'text-white' : 'text-blue-900'">
                Carlos Pérez
              </h3>
              <p class="text-sm font-semibold tracking-wider transition-colors duration-150"
                 :class="isDarkMode ? 'text-blue-100/60' : 'text-blue-700/60'">
                Director de TechSolutions
              </p>
            </div>
            
            <!-- Rating -->
            <div class="p-4 md:p-5 text-center flex-shrink-0 transition-all duration-150"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-r from-blue-800/35 via-indigo-900/35 to-blue-900/35' 
                   : 'bg-gradient-to-r from-blue-100/35 via-blue-200/35 to-blue-300/35'">
              <div class="flex justify-center mb-3">
                <span v-for="star in 5" :key="star" 
                      class="text-yellow-400 text-lg mx-0.5 transform transition-all duration-300 group-hover:scale-110">
                  ⭐
                </span>
              </div>
            </div>
            
            <!-- Testimonio -->
            <div class="p-5 md:p-6 flex-grow transition-all duration-150">
              <div class="relative mb-4">
                <div class="absolute -top-2 -left-2 text-2xl opacity-20 transition-all duration-150"
                     :class="isDarkMode ? 'text-blue-300' : 'text-blue-400'">"</div>
                <div class="absolute -bottom-2 -right-2 text-2xl opacity-20 transition-all duration-150"
                     :class="isDarkMode ? 'text-blue-300' : 'text-blue-400'">"</div>
                
                <p class="text-sm leading-relaxed italic text-center transition-colors duration-150 px-2"
                   :class="isDarkMode ? 'text-white/90' : 'text-blue-800/90'"
                   :style="isTransitioning ? { 
                     color: isDarkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(30, 58, 138, 0.95)'
                   } : {}">
                  "Trabajamos con JMG para nuestro sitio corporativo y los resultados superaron expectativas. El proceso fue transparente y la entrega puntual."
                </p>
              </div>
            </div>
            
            <!-- Resultados -->
            <div class="p-4 md:p-5 pt-0 flex-shrink-0 transition-all duration-150">
              <div class="relative backdrop-blur-xl rounded-lg border-2 p-3 transform transition-all duration-150"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-br from-blue-700/55 via-indigo-800/65 to-blue-900/55 border-cyan-500/55' 
                     : 'bg-gradient-to-br from-blue-50/95 via-blue-100/85 to-blue-200/75 border-blue-500/65'"
                   :style="isTransitioning ? { 
                     background: isDarkMode 
                       ? 'linear-gradient(135deg, rgba(29, 78, 216, 0.55), rgba(55, 48, 163, 0.65), rgba(30, 58, 138, 0.55))' 
                       : 'linear-gradient(135deg, rgba(219, 234, 254, 0.95), rgba(191, 219, 254, 0.85), rgba(147, 197, 253, 0.75))',
                     borderColor: isDarkMode ? 'rgba(56, 189, 248, 0.55)' : 'rgba(96, 165, 250, 0.65)',
                     filter: 'brightness(1.1)'
                   } : {}">
                <div class="flex justify-between items-center">
                  <span class="text-xs font-semibold uppercase tracking-wide transition-colors duration-150"
                        :class="isDarkMode ? 'text-white/90' : 'text-blue-900/90'"
                        :style="isTransitioning ? { 
                          color: isDarkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(30, 58, 138, 0.95)'
                        } : {}">
                    RESULTADOS:
                  </span>
                  <span class="text-sm font-black transition-all duration-150"
                        :class="isDarkMode 
                          ? 'bg-gradient-to-r from-green-300 via-green-400 to-cyan-400 bg-clip-text text-transparent' 
                          : 'bg-gradient-to-r from-green-600 via-green-700 to-blue-800 bg-clip-text text-transparent'">
                    +150% LEADS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Testimonio 3 -->
        <div class="group relative w-full max-w-sm flex flex-col animate-fadeInUp transform-gpu transition-all duration-150"
             style="animation-delay: 350ms">
          
          <!-- Tarjeta Principal -->
          <div class="relative backdrop-blur-xl rounded-xl border-2 p-0.5 transition-all duration-150 transform group-hover:-translate-y-1.5 group-hover:shadow-xl shadow-lg overflow-hidden w-full flex flex-col"
               :class="isDarkMode 
                 ? 'bg-gradient-to-br from-blue-700/40 via-indigo-800/50 to-blue-900/40 border-cyan-600/50 hover:border-cyan-500/80 shadow-blue-500/30' 
                 : 'bg-gradient-to-br from-blue-50/95 via-blue-100/90 to-blue-200/80 border-blue-600/70 hover:border-blue-500/95 shadow-blue-400/30'"
               :style="isTransitioning ? { 
                 background: isDarkMode 
                   ? 'linear-gradient(135deg, rgba(29, 78, 216, 0.4), rgba(55, 48, 163, 0.5), rgba(30, 58, 138, 0.4))' 
                   : 'linear-gradient(135deg, rgba(219, 234, 254, 0.95), rgba(191, 219, 254, 0.9), rgba(147, 197, 253, 0.8))',
                 borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.5)' : 'rgba(37, 99, 235, 0.7)',
                 filter: 'brightness(1.1)'
               } : {}">
            
            <!-- Efecto de borde animado -->
            <div 
              class="absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-150"
              :class="isDarkMode 
                ? 'group-hover:border-cyan-600/40' 
                : 'group-hover:border-blue-600/50'"
              :style="isTransitioning ? { 
                borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.5)' : 'rgba(37, 99, 235, 0.6)',
                boxShadow: isDarkMode 
                  ? '0 0 25px rgba(34, 211, 238, 0.3)' 
                  : '0 0 25px rgba(37, 99, 235, 0.3)'
              } : {}"
            ></div>
            
            <!-- Header de la tarjeta -->
            <div class="p-5 md:p-6 text-center border-b flex-shrink-0 flex flex-col items-center justify-center transition-all duration-150"
                 :class="isDarkMode ? 'border-blue-600/35' : 'border-blue-500/35'">
              
              <!-- Avatar -->
              <div class="relative w-16 h-16 rounded-full flex items-center justify-center mb-4 transform transition-all duration-150 group-hover:scale-110 shadow-lg"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800' 
                     : 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600'">
                <span class="text-2xl text-white font-bold">AG</span>
              </div>
              
              <h3 class="text-xl font-bold mb-2 transition-colors duration-150"
                  :class="isDarkMode ? 'text-white' : 'text-blue-900'">
                Ana García
              </h3>
              <p class="text-sm font-semibold tracking-wider transition-colors duration-150"
                 :class="isDarkMode ? 'text-blue-100/60' : 'text-blue-700/60'">
                Fundadora de Wellness Center
              </p>
            </div>
            
            <!-- Rating -->
            <div class="p-4 md:p-5 text-center flex-shrink-0 transition-all duration-150"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-r from-blue-800/40 via-indigo-900/40 to-blue-900/40' 
                   : 'bg-gradient-to-r from-blue-100/40 via-blue-200/40 to-blue-300/40'">
              <div class="flex justify-center mb-3">
                <span v-for="star in 5" :key="star" 
                      class="text-yellow-400 text-lg mx-0.5 transform transition-all duration-300 group-hover:scale-110">
                  ⭐
                </span>
              </div>
            </div>
            
            <!-- Testimonio -->
            <div class="p-5 md:p-6 flex-grow transition-all duration-150">
              <div class="relative mb-4">
                <div class="absolute -top-2 -left-2 text-2xl opacity-20 transition-all duration-150"
                     :class="isDarkMode ? 'text-blue-300' : 'text-blue-400'">"</div>
                <div class="absolute -bottom-2 -right-2 text-2xl opacity-20 transition-all duration-150"
                     :class="isDarkMode ? 'text-blue-300' : 'text-blue-400'">"</div>
                
                <p class="text-sm leading-relaxed italic text-center transition-colors duration-150 px-2"
                   :class="isDarkMode ? 'text-white/90' : 'text-blue-800/90'"
                   :style="isTransitioning ? { 
                     color: isDarkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(30, 58, 138, 0.95)'
                   } : {}">
                  "Increíble experiencia de principio a fin. Mi sitio web captura perfectamente la esencia de mi marca y ha sido clave para atraer nuevos clientes."
                </p>
              </div>
            </div>
            
            <!-- Resultados -->
            <div class="p-4 md:p-5 pt-0 flex-shrink-0 transition-all duration-150">
              <div class="relative backdrop-blur-xl rounded-lg border-2 p-3 transform transition-all duration-150"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-br from-blue-700/60 via-indigo-800/70 to-blue-900/60 border-cyan-600/60' 
                     : 'bg-gradient-to-br from-blue-50/95 via-blue-100/90 to-blue-200/80 border-blue-600/70'"
                   :style="isTransitioning ? { 
                     background: isDarkMode 
                       ? 'linear-gradient(135deg, rgba(29, 78, 216, 0.6), rgba(55, 48, 163, 0.7), rgba(30, 58, 138, 0.6))' 
                       : 'linear-gradient(135deg, rgba(219, 234, 254, 0.95), rgba(191, 219, 254, 0.9), rgba(147, 197, 253, 0.8))',
                     borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.6)' : 'rgba(37, 99, 235, 0.7)',
                     filter: 'brightness(1.1)'
                   } : {}">
                <div class="flex justify-between items-center">
                  <span class="text-xs font-semibold uppercase tracking-wide transition-colors duration-150"
                        :class="isDarkMode ? 'text-white/90' : 'text-blue-900/90'"
                        :style="isTransitioning ? { 
                          color: isDarkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(30, 58, 138, 0.95)'
                        } : {}">
                    RESULTADOS:
                  </span>
                  <span class="text-sm font-black transition-all duration-150"
                        :class="isDarkMode 
                          ? 'bg-gradient-to-r from-green-300 via-green-400 to-cyan-400 bg-clip-text text-transparent' 
                          : 'bg-gradient-to-r from-green-600 via-green-700 to-blue-800 bg-clip-text text-transparent'">
                    +200% CLIENTES
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Logos de clientes -->
      <div class="text-center w-full flex flex-col items-center mt-8 md:mt-10 animate-fadeInUp" style="animation-delay: 450ms">
        <h3 class="text-2xl md:text-3xl font-bold mb-8 text-center w-full">
          <span class="bg-clip-text text-transparent transition-all duration-150"
                :class="isDarkMode 
                  ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-100' 
                  : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'"
                :style="isTransitioning ? { 
                  backgroundImage: isDarkMode 
                    ? 'linear-gradient(to right, #ffffff, #a5f3fc, #dbeafe)' 
                    : 'linear-gradient(to right, #1e3a8a, #1d4ed8, #2563eb)'
                } : {}">
            Empresas que Confían en Nosotros
          </span>
        </h3>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 items-center justify-items-center w-full max-w-5xl mx-auto">
          <div v-for="i in 6" :key="i" 
               class="group relative transform-gpu">
            
            <!-- Logo Card - MISMO ESTILO que las tarjetas -->
            <div class="relative backdrop-blur-xl rounded-xl border-2 p-0.5 transition-all duration-150 transform group-hover:-translate-y-1 shadow-lg overflow-hidden"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-br from-blue-700/30 via-indigo-800/40 to-blue-900/30 border-cyan-400/40 hover:border-cyan-300/60 shadow-blue-500/15' 
                   : 'bg-gradient-to-br from-blue-50/90 via-blue-100/80 to-blue-200/70 border-blue-400/60 hover:border-blue-300/80 shadow-blue-400/15'"
                 :style="isTransitioning ? { 
                   background: isDarkMode 
                     ? 'linear-gradient(135deg, rgba(29, 78, 216, 0.3), rgba(55, 48, 163, 0.4), rgba(30, 58, 138, 0.3))' 
                     : 'linear-gradient(135deg, rgba(219, 234, 254, 0.9), rgba(191, 219, 254, 0.8), rgba(147, 197, 253, 0.7))',
                   borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.4)' : 'rgba(59, 130, 246, 0.6)',
                   filter: 'brightness(1.1)'
                 } : {}">
              
              <!-- Efecto de borde animado -->
              <div 
                class="absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-150"
                :class="isDarkMode 
                  ? 'group-hover:border-cyan-400/40' 
                  : 'group-hover:border-blue-400/50'"
                :style="isTransitioning ? { 
                  borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.5)' : 'rgba(59, 130, 246, 0.6)',
                  boxShadow: isDarkMode 
                    ? '0 0 20px rgba(34, 211, 238, 0.3)' 
                    : '0 0 20px rgba(59, 130, 246, 0.3)'
                } : {}"
              ></div>
              
              <!-- Logo Container -->
              <div class="p-4 md:p-5 flex flex-col items-center justify-center h-full">
                <div class="relative w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 transform transition-all duration-150 group-hover:scale-110"
                     :class="isDarkMode 
                       ? 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600' 
                       : 'bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400'">
                  <span class="text-white font-bold text-sm md:text-base">C{{ i }}</span>
                </div>
                
                <span class="text-sm font-medium text-center transition-colors duration-150"
                      :class="isDarkMode ? 'text-white/80' : 'text-blue-800/80'"
                      :style="isTransitioning ? { 
                        color: isDarkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(30, 58, 138, 0.95)'
                      } : {}">
                  Cliente {{ i }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Nota adicional - MISMO ESTILO que el subtítulo -->
      <div class="text-center mt-10 md:mt-12 max-w-3xl mx-auto px-4 animate-fadeInUp" style="animation-delay: 550ms">
        <div class="relative backdrop-blur-xl rounded-2xl border-2 shadow-xl p-6 md:p-8 w-full flex flex-col items-center justify-center transform hover:scale-102 transition-all duration-150 group"
             :class="isDarkMode 
               ? 'bg-gradient-to-br from-blue-700/50 via-indigo-800/60 to-blue-900/50 border-cyan-400/50' 
               : 'bg-gradient-to-br from-blue-50/90 via-blue-100/80 to-blue-200/70 border-blue-400/60'"
             :style="isTransitioning ? { 
               background: isDarkMode 
                 ? 'linear-gradient(135deg, rgba(29, 78, 216, 0.6), rgba(55, 48, 163, 0.7), rgba(30, 58, 138, 0.6))' 
                 : 'linear-gradient(135deg, rgba(219, 234, 254, 0.95), rgba(191, 219, 254, 0.85), rgba(147, 197, 253, 0.75))',
               borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.6)' : 'rgba(59, 130, 246, 0.7)',
               filter: 'brightness(1.1)'
             } : {}">
          
          <!-- Efecto de borde animado -->
          <div 
            class="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-150"
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
          
          <h3 
            class="text-xl md:text-2xl font-black mb-4 text-center w-full bg-clip-text text-transparent px-4 transition-all duration-150"
            :class="isDarkMode 
              ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-100' 
              : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'"
            :style="isTransitioning ? { 
              backgroundImage: isDarkMode 
                ? 'linear-gradient(to right, #ffffff, #a5f3fc, #dbeafe)' 
                : 'linear-gradient(to right, #1e3a8a, #1d4ed8, #2563eb)'
            } : {}"
          >
            ¿Quieres ser nuestro próximo caso de éxito?
          </h3>
          
          <p 
            class="text-base md:text-lg mb-6 max-w-xl text-center transition-colors duration-150"
            :class="isDarkMode ? 'text-white/90' : 'text-blue-900/90'"
            :style="isTransitioning ? { 
              color: isDarkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(30, 58, 138, 0.95)'
            } : {}"
          >
            Únete a las más de 200 empresas que ya transformaron su presencia digital.
          </p>
          
          <!-- Botón CTA - EXACTAMENTE IGUAL -->
          <div class="flex justify-center w-full transition-all duration-150">
            <button 
              @click="scrollToSection('contacto')"
              class="relative text-white font-bold py-3.5 px-8 rounded-2xl transition-all duration-150 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-glow-hover text-base md:text-lg group overflow-hidden"
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
              <!-- Efecto de brillo al pasar el mouse -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-300 transition-all duration-150"
                   :style="isTransitioning ? { opacity: 0.4 } : {}"></div>
              
              <span class="flex items-center justify-center relative transition-all duration-150">
                Contáctanos ahora
                <span class="ml-2.5 text-xl animate-bounce-fast transition-all duration-150"
                      :style="isTransitioning ? { transform: 'scale(1.2)' } : {}">↗</span>
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

// Estado del tema - EXACTAMENTE IGUAL
const isDarkMode = ref(true);
const isTransitioning = ref(false);
const gradientPosition = ref(0);
const showParticles = ref(false);

// Gradientes premium - EXACTAMENTE IGUAL
const darkGradient = 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 25%, #0369a1 50%, #1e40af 75%, #0f172a 100%)';
const lightGradient = 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 25%, #93c5fd 50%, #60a5fa 75%, #3b82f6 100%)';

// Inicializar tema desde localStorage o usar oscuro por defecto - EXACTAMENTE IGUAL
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

// Alternar entre temas con transición - EXACTAMENTE IGUAL
const toggleTheme = async () => {
  if (isTransitioning.value) return;
  
  isTransitioning.value = true;
  showParticles.value = true;
  
  // Animar el degradado
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
  
  // Cambiar el estado del tema
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
  
  requestAnimationFrame(animateGradient);
  
  // Ocultar partículas
  setTimeout(() => {
    showParticles.value = false;
    isTransitioning.value = false;
  }, duration + 50);
};

// Función cubic bezier - EXACTAMENTE IGUAL
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

// Estilo del degradado del fondo principal - EXACTAMENTE IGUAL
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

// Scroll a sección - EXACTAMENTE IGUAL
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) element.scrollIntoView({ behavior: 'smooth' });
};

// Aplicar transición al cambiar tema - EXACTAMENTE IGUAL
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
/* ANIMACIONES - EXACTAMENTE IGUAL */

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

/* Transiciones de tema - EXACTAMENTE IGUAL */
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

/* Transiciones para todo - EXACTAMENTE IGUAL */
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

/* Transición específica para el tema - EXACTAMENTE IGUAL */
.theme-transition-fast * {
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

/* Optimización para rendimiento - EXACTAMENTE IGUAL */
#testimonios > div:first-child {
  will-change: background-position, background-image, filter;
  transform: translateZ(0);
  backface-visibility: hidden;
}

button[aria-label="Cambiar tema"] {
  will-change: transform, box-shadow, border-color, background-position, filter;
  transform-style: preserve-3d;
}

/* Ajustes responsive - EXACTAMENTE IGUAL */
@media (max-width: 768px) {
  #testimonios {
    background-attachment: scroll;
  }
  
  #testimonios > div:first-child {
    background-attachment: scroll;
  }
  
  /* Ajustes para el botón en móvil - EXACTAMENTE IGUAL */
  button[aria-label="Cambiar tema"] {
    width: 30px;
    height: 12px;
  }
  
  /* Switch más pequeño en móvil - EXACTAMENTE IGUAL */
  button[aria-label="Cambiar tema"] > div:first-child {
    width: 12px;
    height: 12px;
  }
  
  /* Iconos más pequeños en móvil - EXACTAMENTE IGUAL */
  .absolute.left-4, .absolute.right-4 {
    width: 6px;
    height: 6px;
  }
  
  /* Texto "DÍA/NOCHE" más pequeño en móvil - EXACTAMENTE IGUAL */
  .absolute.-bottom-5 {
    font-size: 7px;
    bottom: -4px;
  }
}

@media (max-width: 480px) {
  /* Botón aún más compacto en móviles pequeños - EXACTAMENTE IGUAL */
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

/* Asegurar que todos los elementos usen la misma transición - EXACTAMENTE IGUAL */
.absolute.inset-0 {
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

.relative {
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Efectos especiales durante la transición - EXACTAMENTE IGUAL */
.theme-transition-fast #testimonios > div:first-child {
  filter: brightness(1.15) saturate(1.1);
}

.theme-transition-fast button[aria-label="Cambiar tema"] {
  filter: brightness(1.2);
}

/* Animación para rayos del sol - EXACTAMENTE IGUAL */
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

/* Animación para partículas - EXACTAMENTE IGUAL */
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

/* Animación para brillo estelar - EXACTAMENTE IGUAL */
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

/* Animaciones adicionales - EXACTAMENTE IGUAL */
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
  animation: float-gentle 3s ease-in-out infinite;
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

@keyframes float-gentle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
}

/* Animaciones de entrada - EXACTAMENTE IGUAL */
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

.animate-slideInLeft {
  animation: slideInLeft 0.7s ease-out forwards;
  opacity: 0;
}

.animate-fadeInUp {
  animation: fadeInUp 0.7s ease-out forwards;
  opacity: 0;
}

.animate-delay-500 {
  animation-delay: 0.5s;
}

.animate-delay-1000 {
  animation-delay: 1s;
}

/* Utilidades - EXACTAMENTE IGUAL */
.transform-gpu {
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}

.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hover\:scale-102:hover {
  transform: scale(1.02);
}

/* Backdrop blur - EXACTAMENTE IGUAL */
.backdrop-blur-xl {
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

.backdrop-blur-md {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.backdrop-blur-sm {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Accesibilidad - EXACTAMENTE IGUAL */
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
  }
  
  .group-hover\:-translate-y-1\.5,
  .group-hover\:scale-105,
  .hover\:scale-105,
  .hover\:-translate-y-1 {
    transform: none !important;
  }
}
</style>