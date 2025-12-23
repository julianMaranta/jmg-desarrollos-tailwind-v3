<template>
  <section 
    id="contacto" 
    class="py-8 md:py-10 text-white relative overflow-hidden w-full flex justify-center transition-all duration-150 ease-out"
  >
    <!-- Capa de fondo principal con transición reducida -->
    <div 
      class="absolute inset-0 transition-all duration-150 ease-out overflow-hidden"
      :style="sectionGradientStyle"
    >
      <!-- Efecto de partículas brillantes -->
      <div class="absolute inset-0">
        <div v-for="i in 20" :key="i" 
             class="absolute rounded-full transition-all duration-150"
             :class="isDarkMode ? 'bg-blue-400/15' : 'bg-white/15'"
             :style="`
               width: ${Math.random() * 2 + 0.8}px;
               height: ${Math.random() * 2 + 0.8}px;
               top: ${Math.random() * 100}%;
               left: ${Math.random() * 100}%;
               animation-delay: ${Math.random() * 0.3}s;
               opacity: ${isTransitioning ? 0.6 : 0.25};
               filter: ${isTransitioning ? 'brightness(1.2)' : 'brightness(1)'};
             `">
        </div>
      </div>
    </div>
    
    <!-- Efectos de fondo animados compactos -->
    <div class="absolute inset-0 overflow-hidden transition-all duration-150 ease-out">
      <!-- Fondos para tema oscuro -->
      <transition name="theme-fade-fast" mode="out-in">
        <div v-if="isDarkMode" key="dark-bg-1" class="absolute top-1/4 -left-10 w-40 h-40 bg-gradient-to-br from-blue-500/25 to-cyan-400/15 rounded-full blur-2xl animate-pulse-fast transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.4, transform: 'scale(1.03)' } : {}"></div>
        <div v-else key="light-bg-1" class="absolute top-1/4 -left-10 w-40 h-40 bg-gradient-to-br from-blue-100/40 to-blue-50/30 rounded-full blur-2xl animate-pulse-fast transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.4, transform: 'scale(1.03)' } : {}"></div>
      </transition>
      
      <transition name="theme-fade-fast" mode="out-in">
        <div v-if="isDarkMode" key="dark-bg-2" class="absolute bottom-1/3 -right-10 w-44 h-44 bg-gradient-to-br from-indigo-500/25 to-blue-500/15 rounded-full blur-2xl animate-pulse-fast animate-delay-500 transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.4, transform: 'scale(1.03)' } : {}"></div>
        <div v-else key="light-bg-2" class="absolute bottom-1/3 -right-10 w-44 h-44 bg-gradient-to-br from-blue-100/50 to-blue-50/30 rounded-full blur-2xl animate-pulse-fast animate-delay-500 transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.4, transform: 'scale(1.03)' } : {}"></div>
      </transition>
      
      <transition name="theme-fade-fast" mode="out-in">
        <div v-if="isDarkMode" key="dark-bg-3" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-600/15 to-cyan-500/10 rounded-full blur-2xl animate-pulse-fast animate-delay-1000 transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.4, transform: 'scale(1.03)' } : {}"></div>
        <div v-else key="light-bg-3" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-blue-50/20 rounded-full blur-2xl animate-pulse-fast animate-delay-1000 transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.4, transform: 'scale(1.03)' } : {}"></div>
      </transition>
      
      <!-- Partículas flotantes reducidas -->
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
      <div class="text-center mb-6 md:mb-8 w-full relative">
        <!-- Botón de tema premium compacto -->
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
              
              <!-- Icono dentro del switch -->
              <div class="absolute inset-0 flex items-center justify-center z-10">
                <!-- Icono de Luna -->
                <svg v-if="isDarkMode" class="w-6 h-6 transition-all duration-150" fill="currentColor" viewBox="0 0 20 20"
                     :class="isTransitioning ? 'text-blue-200 filter drop-shadow-[0_0_8px_rgba(147,197,253,0.7)]' : 'text-blue-300'">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                </svg>
                
                <!-- Icono de Sol -->
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
        
        <!-- Badge animado compacto -->
        <div 
          class="inline-flex items-center backdrop-blur-xl rounded-full px-4 py-1.5 mb-3 shadow-glow animate-pulse-slow transition-all duration-150"
          :class="isDarkMode 
            ? 'bg-gradient-to-r from-blue-600/45 to-cyan-500/35 border border-cyan-400/40' 
            : 'bg-gradient-to-r from-blue-500/35 to-blue-400/45 border border-blue-400/50'"
          :style="isTransitioning ? { 
            filter: 'brightness(1.15)',
            boxShadow: isDarkMode 
              ? '0 0 15px rgba(34, 211, 238, 0.35)' 
              : '0 0 15px rgba(59, 130, 246, 0.35)'
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
                } : {}">
            📞 HABLEMOS DE TU PROYECTO
          </span>
        </div>
        
        <!-- Título optimizado -->
        <div class="relative w-full mb-4 transition-all duration-150">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-center w-full tracking-tight leading-tight animate-slideInLeft transition-all duration-150">
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
                  opacity: 0.75,
                  height: '0.4px'
                } : {}">
              </div>
            </span>
          </h2>
        </div>
        
        <!-- Subtítulo optimizado -->
        <div class="relative max-w-lg mx-auto mb-6 animate-fadeInUp transition-all duration-150" style="animation-delay: 40ms">
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
                una cotización gratuita
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
                } : {}">
              </div>
            </span>
            para tu proyecto
          </p>
        </div>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full items-start transition-all duration-150">
        <!-- Contact Form compacto -->
        <div 
          class="backdrop-blur-2xl rounded-2xl border shadow-lg p-4 md:p-5 w-full flex flex-col items-center justify-center transform hover:scale-101 transition-all duration-150 group"
          :class="isDarkMode 
            ? 'bg-gradient-to-br from-blue-700/45 via-indigo-800/55 to-blue-900/45 border-cyan-400/45' 
            : 'bg-gradient-to-br from-blue-50/85 via-blue-100/75 to-blue-200/65 border-blue-400/50'"
          :style="isTransitioning ? { 
            background: isDarkMode 
              ? 'linear-gradient(135deg, rgba(29, 78, 216, 0.5), rgba(55, 48, 163, 0.6), rgba(30, 58, 138, 0.5))' 
              : 'linear-gradient(135deg, rgba(219, 234, 254, 0.9), rgba(191, 219, 254, 0.8), rgba(147, 197, 253, 0.7))',
            borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.5)' : 'rgba(59, 130, 246, 0.6)',
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
          
          <!-- Título Formulario -->
          <h3 class="text-lg md:text-xl font-black mb-4 text-center w-full bg-clip-text text-transparent px-3 transition-all duration-150"
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
          <form class="space-y-4 w-full transition-all duration-150">
            <!-- Name & Email -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 transition-all duration-150">
              <div class="group transition-all duration-150">
                <label class="block mb-1.5 font-semibold text-left text-xs transition-colors duration-150"
                       :class="isDarkMode ? 'text-white/85' : 'text-blue-900/85'"
                       :style="isTransitioning ? { 
                         color: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(30, 58, 138, 0.9)'
                       } : {}">
                  Nombre Completo
                </label>
                <input 
                  type="text" 
                  class="w-full px-3 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-150 group-hover:bg-white/10 text-left text-xs"
                  :class="isDarkMode 
                    ? 'bg-white/5 border-white/15 focus:ring-cyan-400 text-white placeholder-white/50' 
                    : 'bg-white/10 border-blue-300/25 focus:ring-blue-400 text-blue-900 placeholder-blue-400/50'"
                  :style="isTransitioning ? { 
                    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.12)',
                    borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.25)' : 'rgba(59, 130, 246, 0.35)'
                  } : {}"
                  placeholder="Tu nombre"
                >
              </div>
              <div class="group transition-all duration-150">
                <label class="block mb-1.5 font-semibold text-left text-xs transition-colors duration-150"
                       :class="isDarkMode ? 'text-white/85' : 'text-blue-900/85'"
                       :style="isTransitioning ? { 
                         color: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(30, 58, 138, 0.9)'
                       } : {}">
                  Email
                </label>
                <input 
                  type="email" 
                  class="w-full px-3 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-150 group-hover:bg-white/10 text-left text-xs"
                  :class="isDarkMode 
                    ? 'bg-white/5 border-white/15 focus:ring-cyan-400 text-white placeholder-white/50' 
                    : 'bg-white/10 border-blue-300/25 focus:ring-blue-400 text-blue-900 placeholder-blue-400/50'"
                  :style="isTransitioning ? { 
                    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.12)',
                    borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.25)' : 'rgba(59, 130, 246, 0.35)'
                  } : {}"
                  placeholder="tu@email.com"
                >
              </div>
            </div>
            
            <!-- Company -->
            <div class="group transition-all duration-150">
              <label class="block mb-1.5 font-semibold text-left text-xs transition-colors duration-150"
                     :class="isDarkMode ? 'text-white/85' : 'text-blue-900/85'"
                     :style="isTransitioning ? { 
                       color: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(30, 58, 138, 0.9)'
                     } : {}">
                Empresa
              </label>
              <input 
                type="text" 
                class="w-full px-3 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-150 group-hover:bg-white/10 text-left text-xs"
                :class="isDarkMode 
                  ? 'bg-white/5 border-white/15 focus:ring-cyan-400 text-white placeholder-white/50' 
                  : 'bg-white/10 border-blue-300/25 focus:ring-blue-400 text-blue-900 placeholder-blue-400/50'"
                :style="isTransitioning ? { 
                  backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.12)',
                  borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.25)' : 'rgba(59, 130, 246, 0.35)'
                } : {}"
                placeholder="Nombre de tu empresa"
              >
            </div>
            
            <!-- Service -->
            <div class="group transition-all duration-150">
              <label class="block mb-1.5 font-semibold text-left text-xs transition-colors duration-150"
                     :class="isDarkMode ? 'text-white/85' : 'text-blue-900/85'"
                     :style="isTransitioning ? { 
                       color: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(30, 58, 138, 0.9)'
                     } : {}">
                Servicio de Interés
              </label>
              <select class="w-full px-3 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-150 group-hover:bg-white/10 text-left text-xs appearance-none"
                      :class="isDarkMode 
                        ? 'bg-white/5 border-white/15 focus:ring-cyan-400 text-white' 
                        : 'bg-white/10 border-blue-300/25 focus:ring-blue-400 text-blue-900'"
                      :style="isTransitioning ? { 
                        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.12)',
                        borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.25)' : 'rgba(59, 130, 246, 0.35)'
                      } : {}">
                <option class="text-left text-xs transition-colors duration-150"
                        :class="isDarkMode ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-900'">
                  Selecciona un servicio
                </option>
                <option class="text-left text-xs transition-colors duration-150"
                        :class="isDarkMode ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-900'">
                  Plan Inicial
                </option>
                <option class="text-left text-xs transition-colors duration-150"
                        :class="isDarkMode ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-900'">
                  Plan Estándar
                </option>
                <option class="text-left text-xs transition-colors duration-150"
                        :class="isDarkMode ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-900'">
                  Plan Profesional
                </option>
                <option class="text-left text-xs transition-colors duration-150"
                        :class="isDarkMode ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-900'">
                  Plan Empresa
                </option>
                <option class="text-left text-xs transition-colors duration-150"
                        :class="isDarkMode ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-900'">
                  Desarrollo a medida
                </option>
              </select>
            </div>
            
            <!-- Message -->
            <div class="group transition-all duration-150">
              <label class="block mb-1.5 font-semibold text-left text-xs transition-colors duration-150"
                     :class="isDarkMode ? 'text-white/85' : 'text-blue-900/85'"
                     :style="isTransitioning ? { 
                       color: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(30, 58, 138, 0.9)'
                     } : {}">
                Mensaje
              </label>
              <textarea 
                rows="3" 
                class="w-full px-3 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-150 group-hover:bg-white/10 resize-none text-left text-xs"
                :class="isDarkMode 
                  ? 'bg-white/5 border-white/15 focus:ring-cyan-400 text-white placeholder-white/50' 
                  : 'bg-white/10 border-blue-300/25 focus:ring-blue-400 text-blue-900 placeholder-blue-400/50'"
                :style="isTransitioning ? { 
                  backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.12)',
                  borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.25)' : 'rgba(59, 130, 246, 0.35)'
                } : {}"
                placeholder="Cuéntanos sobre tu proyecto..."
              ></textarea>
            </div>
            
            <!-- Submit Button -->
            <button 
              type="submit" 
              class="relative text-white font-bold py-2.5 px-6 rounded-xl transition-all duration-150 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-glow text-sm md:text-base group overflow-hidden w-full"
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
                Enviar Solicitud
                <span class="ml-2 text-lg animate-bounce-fast transition-all duration-150"
                      :style="isTransitioning ? { transform: 'scale(1.15)' } : {}">🚀</span>
              </span>
            </button>
          </form>
        </div>
        
        <!-- Contact Information compacto -->
        <div class="flex flex-col justify-center space-y-6 items-start w-full transition-all duration-150">
          <!-- Contact Methods -->
          <div class="space-y-4 w-full transition-all duration-150">
            <!-- Phone -->
            <div class="flex items-start group cursor-pointer transform transition-all duration-400 hover:scale-103 w-full transition-all duration-150">
              <div class="w-12 h-12 rounded-lg flex items-center justify-center mr-4 transform transition-all duration-400 group-hover:scale-105 group-hover:rotate-2 shadow-lg transition-all duration-150"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-br from-blue-600 via-cyan-700 to-indigo-800' 
                     : 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800'"
                   :style="isTransitioning ? { 
                     background: isDarkMode 
                       ? 'linear-gradient(135deg, #2563eb, #0891b2, #3730a3)' 
                       : 'linear-gradient(135deg, #2563eb, #1d4ed8, #1e40af)',
                     boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)'
                   } : {}">
                <span class="text-xl transition-all duration-150">📞</span>
              </div>
              <div class="flex-1 text-left transition-all duration-150">
                <h4 class="text-base md:text-lg font-black mb-1.5 transition-colors duration-150"
                    :class="isDarkMode ? 'text-white' : 'text-blue-900'"
                    :style="isTransitioning ? { 
                      color: isDarkMode ? '#ffffff' : '#1e3a8a'
                    } : {}">
                  Teléfono
                </h4>
                <p class="text-sm md:text-base font-semibold transition-colors duration-150"
                   :class="isDarkMode ? 'text-cyan-200' : 'text-blue-700'"
                   :style="isTransitioning ? { 
                     color: isDarkMode ? '#a5f3fc' : '#1d4ed8'
                   } : {}">
                  +54 9 11 5527-1430
                </p>
                <p class="text-xs transition-colors duration-150 mt-0.5"
                   :class="isDarkMode ? 'text-white/65' : 'text-blue-900/65'"
                   :style="isTransitioning ? { 
                     color: isDarkMode ? 'rgba(255, 255, 255, 0.75)' : 'rgba(30, 58, 138, 0.75)'
                   } : {}">
                  Lunes a Viernes 9:00 - 18:00
                </p>
              </div>
            </div>
            
            <!-- Email -->
            <div class="flex items-start group cursor-pointer transform transition-all duration-400 hover:scale-103 w-full transition-all duration-150">
              <div class="w-12 h-12 rounded-lg flex items-center justify-center mr-4 transform transition-all duration-400 group-hover:scale-105 group-hover:rotate-2 shadow-lg transition-all duration-150"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-br from-blue-700 via-cyan-800 to-indigo-900' 
                     : 'bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900'"
                   :style="isTransitioning ? { 
                     background: isDarkMode 
                       ? 'linear-gradient(135deg, #1d4ed8, #0891b2, #3730a3)' 
                       : 'linear-gradient(135deg, #1d4ed8, #2563eb, #1e40af)',
                     boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)'
                   } : {}">
                <span class="text-xl transition-all duration-150">✉️</span>
              </div>
              <div class="flex-1 text-left transition-all duration-150">
                <h4 class="text-base md:text-lg font-black mb-1.5 transition-colors duration-150"
                    :class="isDarkMode ? 'text-white' : 'text-blue-900'"
                    :style="isTransitioning ? { 
                      color: isDarkMode ? '#ffffff' : '#1e3a8a'
                    } : {}">
                  Email
                </h4>
                <p class="text-sm md:text-base font-semibold transition-colors duration-150"
                   :class="isDarkMode ? 'text-cyan-200' : 'text-blue-700'"
                   :style="isTransitioning ? { 
                     color: isDarkMode ? '#a5f3fc' : '#1d4ed8'
                   } : {}">
                  contacto@jmgdesarrollos.com
                </p>
                <p class="text-xs transition-colors duration-150 mt-0.5"
                   :class="isDarkMode ? 'text-white/65' : 'text-blue-900/65'"
                   :style="isTransitioning ? { 
                     color: isDarkMode ? 'rgba(255, 255, 255, 0.75)' : 'rgba(30, 58, 138, 0.75)'
                   } : {}">
                  Respondemos en menos de 24 horas
                </p>
              </div>
            </div>
            
            <!-- Location -->
            <div class="flex items-start group cursor-pointer transform transition-all duration-400 hover:scale-103 w-full transition-all duration-150">
              <div class="w-12 h-12 rounded-lg flex items-center justify-center mr-4 transform transition-all duration-400 group-hover:scale-105 group-hover:rotate-2 shadow-lg transition-all duration-150"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-br from-indigo-800 via-blue-900 to-purple-900' 
                     : 'bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900'"
                   :style="isTransitioning ? { 
                     background: isDarkMode 
                       ? 'linear-gradient(135deg, #3730a3, #1e40af, #581c87)' 
                       : 'linear-gradient(135deg, #1e40af, #1e3a8a, #3730a3)',
                     boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)'
                   } : {}">
                <span class="text-xl transition-all duration-150">📍</span>
              </div>
              <div class="flex-1 text-left transition-all duration-150">
                <h4 class="text-base md:text-lg font-black mb-1.5 transition-colors duration-150"
                    :class="isDarkMode ? 'text-white' : 'text-blue-900'"
                    :style="isTransitioning ? { 
                      color: isDarkMode ? '#ffffff' : '#1e3a8a'
                    } : {}">
                  Ubicación
                </h4>
                <p class="text-sm md:text-base font-semibold transition-colors duration-150"
                   :class="isDarkMode ? 'text-cyan-200' : 'text-blue-700'"
                   :style="isTransitioning ? { 
                     color: isDarkMode ? '#a5f3fc' : '#1d4ed8'
                   } : {}">
                  Buenos Aires, Argentina
                </p>
                <p class="text-xs transition-colors duration-150 mt-0.5"
                   :class="isDarkMode ? 'text-white/65' : 'text-blue-900/65'"
                   :style="isTransitioning ? { 
                     color: isDarkMode ? 'rgba(255, 255, 255, 0.75)' : 'rgba(30, 58, 138, 0.75)'
                   } : {}">
                  Trabajamos con clientes de todo el mundo
                </p>
              </div>
            </div>
          </div>
          
          <!-- Quick Contact -->
          <div 
            class="backdrop-blur-2xl rounded-2xl border shadow-lg p-4 md:p-5 w-full flex flex-col items-center justify-center transform hover:scale-101 transition-all duration-150 group"
            :class="isDarkMode 
              ? 'bg-gradient-to-br from-blue-700/45 via-indigo-800/55 to-blue-900/45 border-cyan-400/45' 
              : 'bg-gradient-to-br from-blue-50/85 via-blue-100/75 to-blue-200/65 border-blue-400/50'"
            :style="isTransitioning ? { 
              background: isDarkMode 
                ? 'linear-gradient(135deg, rgba(29, 78, 216, 0.5), rgba(55, 48, 163, 0.6), rgba(30, 58, 138, 0.5))' 
                : 'linear-gradient(135deg, rgba(219, 234, 254, 0.9), rgba(191, 219, 254, 0.8), rgba(147, 197, 253, 0.7))',
              borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.5)' : 'rgba(59, 130, 246, 0.6)',
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
            
            <!-- Título Quick Contact -->
            <h4 class="text-base md:text-lg font-black mb-3 text-center w-full bg-clip-text text-transparent transition-all duration-150"
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
            <p class="mb-4 text-center w-full max-w-md mx-auto text-xs transition-colors duration-150"
               :class="isDarkMode ? 'text-white/85' : 'text-blue-900/85'"
               :style="isTransitioning ? { 
                 color: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(30, 58, 138, 0.9)'
               } : {}">
              Contáctanos directamente por WhatsApp para una respuesta inmediata y atención personalizada.
            </p>
            
            <!-- WhatsApp Button -->
            <button class="relative text-white font-bold py-2.5 px-6 rounded-xl transition-all duration-150 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-glow text-sm md:text-base group overflow-hidden w-full max-w-xs"
                    :class="isDarkMode 
                      ? 'bg-gradient-to-r from-green-600 via-emerald-700 to-green-800 hover:from-green-700 hover:via-emerald-800 hover:to-green-900' 
                      : 'bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:from-green-700 hover:via-green-800 hover:to-green-900'"
                    :style="isTransitioning ? { 
                      background: isDarkMode 
                        ? 'linear-gradient(to right, #059669, #047857, #065f46)' 
                        : 'linear-gradient(to right, #059669, #047857, #065f46)',
                      filter: 'brightness(1.1)'
                    } : {}">
              <!-- Efecto de brillo al pasar el mouse -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-300 transition-all duration-150"
                   :style="isTransitioning ? { opacity: 0.35 } : {}"></div>
              
              <span class="flex items-center justify-center relative transition-all duration-150">
                💬 Chatear por WhatsApp
                <span class="ml-2 text-lg animate-bounce-fast transition-all duration-150"
                      :style="isTransitioning ? { transform: 'scale(1.15)' } : {}">→</span>
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

/* Animaciones del botón de tema */
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

/* Clases de Animación */
.animate-pulse-fast { animation: pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
.animate-pulse-slow { animation: pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
.animate-bounce-fast { animation: bounce 0.9s infinite; }
.animate-particle-explode-fast { animation: particle-explode-fast 0.25s ease-out forwards; }
.animate-twinkle-fast { animation: twinkle-fast 1.2s ease-in-out infinite; }

/* Animaciones de Entrada */
.animate-slideInLeft { animation: slideInLeft 0.6s ease-out forwards; opacity: 0; }
.animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; }

/* Transiciones generales */
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

.theme-transition-fast * {
  transition: all 0.12s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

/* Animaciones básicas */
@keyframes float {
  0%, 100% { 
    transform: translateY(0) rotate(0deg); 
    opacity: 0.25;
  }
  50% { 
    transform: translateY(-8px) rotate(180deg); 
    opacity: 0.6;
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
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

/* Support for reduced motion */
@media (prefers-reduced-motion: reduce) {
  .animate-float,
  .animate-pulse-fast,
  .animate-pulse-slow,
  .animate-slideInLeft,
  .animate-fadeInUp,
  .theme-fade-fast-enter-active,
  .theme-fade-fast-leave-active,
  .animate-particle-explode-fast,
  .animate-twinkle-fast,
  .animate-bounce-fast {
    animation: none !important;
  }
  
  .group-hover\:scale-103,
  .group-hover\:scale-105,
  .group-hover\:-translate-y-0\.5,
  .group-hover\:rotate-2,
  .hover\:scale-105,
  .hover\:-translate-y-0\.5 {
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
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

.shadow-glow-hover:hover {
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
}

/* Responsividad */
@media (max-width: 768px) {
  #contacto > div:first-child {
    background-attachment: scroll;
  }
  
  /* Ajustes para el botón en móvil */
  .theme-switch-premium {
    width: 26px;
    height: 10px;
  }
  
  /* Switch más pequeño en móvil */
  .theme-switch-premium > div:first-child {
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
    font-size: 7px;
    bottom: -3px;
  }
}

@media (max-width: 480px) {
  /* Botón aún más compacto en móviles pequeños */
  .theme-switch-premium {
    width: 24px;
    height: 9px;
  }
  
  .theme-switch-premium > div:first-child {
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
  
  /* Padding reducido en móvil */
  .px-3 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}

/* Nuevas clases utilitarias */
.hover\:scale-101:hover {
  transform: scale(1.01);
}

.hover\:scale-103:hover {
  transform: scale(1.03);
}

.blur-xs {
  filter: blur(2px);
}

.shadow-xs {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>