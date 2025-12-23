<template>
  <section 
    id="por-que-elegirnos" 
    class="min-h-auto w-full relative overflow-hidden flex items-center justify-center py-6 md:py-8 transition-all duration-150 ease-out"
    :style="sectionGradientStyle"
  >
    <!-- Background Elements con tema -->
    <div class="absolute inset-0 overflow-hidden w-full transition-all duration-150 ease-out">
      <!-- Partículas con tema -->
      <div v-for="i in 8" :key="i" 
           class="absolute rounded-full custom-float transition-all duration-150"
           :class="isDarkMode ? 'bg-blue-400/25' : 'bg-blue-300/20'"
           :style="getParticleStyle(i)">
      </div>
      
      <!-- Orbes con tema -->
      <div class="absolute -top-20 -left-20 w-40 h-40 rounded-full blur-2xl custom-pulse-slow transition-all duration-150"
           :class="isDarkMode ? 'bg-blue-600/15' : 'bg-blue-400/10'"
           :style="transitionStyle">
      </div>
      <div class="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-2xl custom-pulse-slow custom-delay-2000 transition-all duration-150"
           :class="isDarkMode ? 'bg-blue-700/15' : 'bg-blue-300/10'"
           :style="transitionStyle">
      </div>
      
      <!-- Gradientes de borde con tema -->
      <div class="absolute top-0 left-0 right-0 h-16 transition-all duration-150"
           :class="isDarkMode ? 'bg-gradient-to-b from-blue-900/40 to-transparent' : 'bg-gradient-to-b from-blue-100/25 to-transparent'">
      </div>
    </div>

    <!-- Contenedor Principal -->
    <div class="w-full max-w-5xl mx-auto px-3 sm:px-4 lg:px-6 text-center relative z-10 flex flex-col items-center justify-center">
      
      <!-- Contenedor para badge y botón de temas alineados -->
      <div class="relative w-full mb-6">
        <!-- Header optimizado -->
        <div class="text-center w-full flex flex-col items-center mb-6 md:mb-8 animate-fadeInUp">
          <!-- Badge premium igual al header -->
          <div 
            class="inline-flex items-center backdrop-blur-xl rounded-full px-4 py-1.5 mb-2 shadow-glow animate-pulse-slow transition-all duration-150"
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
                  } : {}">💎 VENTAJAS EXCLUSIVAS</span>
          </div>

          <!-- ✅ BOTÓN DE TEMA PREMIUM COMPACTO -->
          <div class="absolute top-0 right-0 md:right-2 z-50">
            <button
              @click="toggleTheme"
              class="relative flex items-center justify-center w-28 h-10 rounded-lg border shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-150 ease-out overflow-hidden group theme-switch-premium"
              :class="isDarkMode 
                ? 'border-cyan-400/50 hover:border-cyan-300 shadow-cyan-500/15 bg-gradient-to-br from-blue-900/85 via-indigo-900/85 to-purple-900/85' 
                : 'border-blue-300/50 hover:border-blue-200 shadow-blue-400/15 bg-gradient-to-br from-white/90 via-blue-50/90 to-blue-100/90'"
              :title="isDarkMode ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'"
              aria-label="Cambiar tema"
            >
              <!-- Switch COMPACTO -->
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
        </div>
      </div>

      <!-- Versión más completa con múltiples ajustes -->
      <div class="relative w-full mb-1 md:mb-2 transition-all duration-150 text-center">
        <div class="inline-block relative">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-center w-full tracking-tight leading-[1.2] animate-slideInLeft transition-all duration-150 pb-0.5">
            <span class="relative inline-block">
              <span 
                class="bg-clip-text text-transparent relative z-20 pb-0.5 pt-0.5 transition-all duration-150"
                :class="isDarkMode 
                  ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-100' 
                  : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'"
                :style="isTransitioning ? { 
                  backgroundImage: isDarkMode 
                    ? 'linear-gradient(to right, #ffffff, #a5f3fc, #dbeafe)' 
                    : 'linear-gradient(to right, #1e3a8a, #1d4ed8, #2563eb)'
                } : {}"
              >
                ¿Por Qué Elegirnos?
              </span>
              
              <!-- Efectos de subrayado premium - ajustado más abajo -->
              <div 
                class="absolute bottom-0 left-1/4 right-1/4 h-0.5 rounded-full opacity-60 mt-1.5 transition-all duration-150"
                :class="isDarkMode 
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
                  : 'bg-gradient-to-r from-blue-500 to-blue-400'"
                :style="isTransitioning ? { 
                  background: isDarkMode 
                    ? 'linear-gradient(to right, #22d3ee, #60a5fa)' 
                    : 'linear-gradient(to right, #3b82f6, #60a5fa)',
                  opacity: 0.75,
                  height: '0.4px'
                } : {}"
              ></div>
            </span>
          </h2>
        </div>

        <!-- Subtítulo premium -->
        <div class="relative max-w-lg mx-auto mb-4 animate-fadeInUp transition-all duration-150" style="animation-delay: 40ms">
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
            Creamos 
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
                experiencias digitales
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
            que impulsan tu negocio
          </p>
        </div>
      </div>

      <!-- Features Grid con efectos premium -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 w-full justify-items-center items-stretch relative mb-6 md:mb-8 md:mt-6">
        
        <div v-for="(feature, index) in features" :key="index" 
             class="group relative w-full max-w-xs flex flex-col animate-fadeInUp transform-gpu"
             :style="{ animationDelay: `${120 + index * 50}ms` }">
          
          <!-- Efecto de iluminación premium al hover -->
          <div class="absolute inset-0 rounded-lg transform group-hover:scale-103 transition-all duration-400 opacity-0 group-hover:opacity-100 transition-all duration-150"
               :class="isDarkMode 
                 ? 'bg-gradient-to-br from-blue-300/25 via-blue-200/20 to-blue-100/15' 
                 : 'bg-gradient-to-br from-blue-300/20 via-blue-200/15 to-blue-100/10'">
          </div>
          
          <!-- Tarjeta Principal premium -->
          <div class="relative backdrop-blur-xl rounded-lg border transition-all duration-250 transform group-hover:-translate-y-1 shadow-md group-hover:shadow-lg overflow-hidden w-full flex flex-col flex-1"
               :class="isDarkMode 
                 ? 'bg-gradient-to-br from-blue-700/25 via-indigo-800/35 to-blue-900/25 border-cyan-400/35 hover:border-cyan-300/50 shadow-cyan-500/10 group-hover:shadow-cyan-500/20' 
                 : 'bg-gradient-to-br from-blue-50/85 via-blue-100/75 to-blue-200/65 border-blue-400/35 hover:border-blue-300/50 shadow-blue-400/10 group-hover:shadow-blue-400/20'"
               :style="isTransitioning ? { 
                 background: isDarkMode 
                   ? 'linear-gradient(135deg, rgba(29, 78, 216, 0.3), rgba(55, 48, 163, 0.4), rgba(30, 58, 138, 0.3))' 
                   : 'linear-gradient(135deg, rgba(219, 234, 254, 0.9), rgba(191, 219, 254, 0.8), rgba(147, 197, 253, 0.7))',
                 borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.45)' : 'rgba(59, 130, 246, 0.5)',
                 filter: 'brightness(1.05)'
               } : {}">
            
            <!-- Luz superior premium -->
            <div class="absolute top-0 left-0 right-0 h-0.5 rounded-t-lg bg-gradient-to-r from-transparent via-blue-400/40 to-transparent group-hover:via-blue-300/60 transition-all duration-400"
                 :class="isDarkMode ? 'via-blue-400/35 group-hover:via-cyan-300/50' : 'via-blue-400/35 group-hover:via-blue-500/50'">
            </div>
            
            <!-- Header premium -->
            <div class="p-3 sm:p-4 text-center border-b flex-shrink-0 flex flex-col items-center justify-center transition-all duration-150"
                 :class="isDarkMode ? 'border-cyan-400/20' : 'border-blue-400/20'">
              
              <!-- Icono premium -->
              <div class="relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-2 transform transition-all duration-250 group-hover:scale-105 group-hover:rotate-2 shadow-md group-hover:shadow-glow"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-br from-blue-500 via-cyan-600 to-blue-700 group-hover:shadow-cyan-500/25' 
                     : 'bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 group-hover:shadow-blue-500/25'">
                <span class="text-xl sm:text-2xl text-white">{{ feature.icon }}</span>
              </div>
              
              <h3 class="text-base sm:text-lg font-bold mb-0.5 transition-colors duration-250 bg-clip-text text-transparent"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-100 group-hover:from-cyan-300 group-hover:via-blue-200 group-hover:to-white' 
                    : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 group-hover:from-blue-800 group-hover:via-blue-700 group-hover:to-blue-600'">{{ feature.title }}</h3>
              <p class="font-bold text-xs tracking-tight uppercase transition-colors duration-250"
                 :class="isDarkMode 
                   ? 'text-cyan-300/75 group-hover:text-cyan-300' 
                   : 'text-blue-600/75 group-hover:text-blue-600'">
                {{ feature.subtitle || 'VENTAJA PREMIUM' }}
              </p>
            </div>
            
            <!-- Descripción premium -->
            <div class="p-3 sm:p-4 flex-grow relative flex items-center justify-center">
              <div class="relative w-full">
                <p class="text-xs leading-relaxed text-center transition-colors duration-250"
                   :class="isDarkMode 
                     ? 'text-white/85 group-hover:text-white' 
                     : 'text-blue-800/75 group-hover:text-blue-900/85'">
                  {{ feature.description }}
                </p>
              </div>
            </div>
            
            <!-- Línea de iluminación premium -->
            <div class="px-3 sm:px-4 pb-3 sm:pb-4 pt-0 flex-shrink-0">
              <div class="w-0 h-0.5 rounded-full transition-all duration-400 group-hover:w-full animate-pulse-fast"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-r from-cyan-400 to-blue-400' 
                     : 'bg-gradient-to-r from-blue-500 to-blue-400'"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Technology & Promise Section premium -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 items-start w-full max-w-5xl mx-auto">
        
        <!-- Technology Stack premium -->
        <div class="relative flex flex-col animate-fadeInUp" style="animation-delay: 350ms">
          <!-- Badge premium -->
          <div 
            class="inline-flex items-center backdrop-blur-xl rounded-full px-4 py-1.5 mb-2 border shadow-glow w-full justify-center animate-pulse-slow transform-gpu transition-all duration-150"
            :class="isDarkMode 
              ? 'bg-gradient-to-r from-blue-600/45 to-cyan-500/35 border border-cyan-400/40 shadow-cyan-500/15' 
              : 'bg-gradient-to-r from-blue-500/35 to-blue-400/45 border border-blue-400/50 shadow-blue-400/15'"
            :style="isTransitioning ? { 
              filter: 'brightness(1.15)',
              boxShadow: isDarkMode 
                ? '0 0 12px rgba(34, 211, 238, 0.3)' 
                : '0 0 12px rgba(59, 130, 246, 0.3)'
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
              ⚡ TECNOLOGÍA DE VANGUARDIA
            </span>
          </div>
          
          <!-- Título premium -->
          <div class="relative mb-3 text-center">
            <h3 class="text-lg sm:text-xl font-bold mb-1.5">
              <span class="relative inline-block">
                <span 
                  class="bg-clip-text text-transparent transition-all duration-150"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-100' 
                    : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'"
                  :style="isTransitioning ? { 
                    backgroundImage: isDarkMode 
                      ? 'linear-gradient(to right, #ffffff, #a5f3fc, #dbeafe)' 
                      : 'linear-gradient(to right, #1e3a8a, #1d4ed8, #2563eb)'
                  } : {}"
                >
                  Stack Tecnológico
                </span>
              </span>
            </h3>
            
            <div class="relative backdrop-blur-xl rounded-lg p-3 border transform transition-all duration-150 shadow-md"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-br from-blue-700/25 via-indigo-800/35 to-blue-900/25 border-cyan-400/35 shadow-cyan-500/8' 
                   : 'bg-gradient-to-br from-blue-50/85 via-blue-100/75 to-blue-200/65 border-blue-400/35 shadow-blue-400/8'"
                 :style="isTransitioning ? { 
                   background: isDarkMode 
                     ? 'linear-gradient(135deg, rgba(29, 78, 216, 0.3), rgba(55, 48, 163, 0.4), rgba(30, 58, 138, 0.3))' 
                     : 'linear-gradient(135deg, rgba(219, 234, 254, 0.9), rgba(191, 219, 254, 0.8), rgba(147, 197, 253, 0.7))',
                   borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.45)' : 'rgba(59, 130, 246, 0.5)',
                   filter: 'brightness(1.05)'
                 } : {}">
              <p class="text-xs leading-relaxed max-w-md mx-auto transition-colors duration-150"
                 :class="isDarkMode ? 'text-white/85' : 'text-blue-900/85'"
                 :style="isTransitioning ? { 
                   color: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(30, 58, 138, 0.9)'
                 } : {}">
                Dominamos las tecnologías más demandadas para soluciones 
                <span class="relative inline-block transition-all duration-150">
                  <span 
                    class="bg-clip-text text-transparent font-semibold transition-all duration-150"
                    :class="isDarkMode 
                      ? 'bg-gradient-to-r from-cyan-300 via-blue-200 to-blue-100' 
                      : 'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400'"
                    :style="isTransitioning ? { 
                      backgroundImage: isDarkMode 
                        ? 'linear-gradient(to right, #67e8f9, #bfdbfe, #dbeafe)' 
                        : 'linear-gradient(to right, #2563eb, #3b82f6, #60a5fa)'
                    } : {}"
                  >
                    robustas y modernas
                  </span>
                </span>.
              </p>
            </div>
          </div>
          
          <!-- Grid de tecnologías premium -->
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-1.5 sm:gap-2 w-full">
            <div v-for="(tech, index) in technologies" :key="index" 
                 class="group relative flex flex-col items-center p-3 backdrop-blur-xl rounded-lg border transition-all duration-250 transform hover:-translate-y-1 animate-fadeInUp transform-gpu min-h-[95px] shadow-sm hover:shadow-md"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-br from-blue-700/20 via-indigo-800/30 to-blue-900/20 border-cyan-400/30 hover:border-cyan-300/50 shadow-cyan-500/8' 
                   : 'bg-gradient-to-br from-blue-50/75 via-blue-100/65 to-blue-200/55 border-blue-400/30 hover:border-blue-300/50 shadow-blue-400/8'"
                 :style="{ 
                   animationDelay: `${400 + index * 35}ms`,
                   ...(isTransitioning ? { 
                     background: isDarkMode 
                       ? 'linear-gradient(135deg, rgba(29, 78, 216, 0.25), rgba(55, 48, 163, 0.35), rgba(30, 58, 138, 0.25))' 
                       : 'linear-gradient(135deg, rgba(219, 234, 254, 0.85), rgba(191, 219, 254, 0.75), rgba(147, 197, 253, 0.65))',
                     borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.5)' : 'rgba(59, 130, 246, 0.6)',
                     filter: 'brightness(1.05)'
                   } : {})
                 }">
                 
              <!-- Efecto de iluminación premium -->
              <div class="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-400 transition-all duration-150"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-br from-blue-300/20 via-cyan-200/15 to-blue-100/10' 
                     : 'bg-gradient-to-br from-blue-300/15 via-blue-200/10 to-blue-100/5'">
              </div>
              
              <!-- Icono premium -->
              <div class="relative w-9 h-9 sm:w-10 sm:h-10 backdrop-blur-md rounded-md flex items-center justify-center mb-2 transform transition-all duration-250 group-hover:rotate-2 group-hover:scale-105 flex-shrink-0 shadow group-hover:shadow-glow"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-br from-blue-500 via-cyan-600 to-blue-700' 
                     : 'bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700'">
                <span class="text-base sm:text-lg text-white">{{ tech.icon }}</span>
              </div>
              
              <!-- Contenido premium -->
              <div class="relative z-10 w-full text-center">
                <div class="font-bold text-xs mb-0.5 transition-colors duration-250 break-words whitespace-normal leading-tight bg-clip-text text-transparent"
                     :class="isDarkMode 
                       ? 'bg-gradient-to-r from-white via-blue-100 to-blue-200 group-hover:from-cyan-300' 
                       : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 group-hover:from-blue-800'">
                  {{ tech.name }}
                </div>
                <div class="text-xs font-medium transition-colors duration-250"
                     :class="isDarkMode 
                       ? 'text-cyan-300/75 group-hover:text-cyan-300' 
                       : 'text-blue-600/75 group-hover:text-blue-600'">
                  {{ tech.category }}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Our Promise premium -->
        <div class="relative flex flex-col animate-fadeInUp" style="animation-delay: 500ms">
          <!-- Badge premium -->
          <div 
            class="inline-flex items-center backdrop-blur-xl rounded-full px-4 py-1.5 mb-2 border shadow-glow w-full justify-center animate-pulse-slow transform-gpu transition-all duration-150"
            :class="isDarkMode 
              ? 'bg-gradient-to-r from-blue-600/45 to-cyan-500/35 border border-cyan-400/40 shadow-cyan-500/15' 
              : 'bg-gradient-to-r from-blue-500/35 to-blue-400/45 border border-blue-400/50 shadow-blue-400/15'"
            :style="isTransitioning ? { 
              filter: 'brightness(1.15)',
              boxShadow: isDarkMode 
                ? '0 0 12px rgba(34, 211, 238, 0.3)' 
                : '0 0 12px rgba(59, 130, 246, 0.3)'
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
              💎 NUESTRA PROMESA
            </span>
          </div>
          
          <!-- Título premium -->
          <div class="relative mb-3 text-center">
            <h4 class="text-lg sm:text-xl font-bold mb-1.5">
              <span class="relative inline-block">
                <span 
                  class="bg-clip-text text-transparent transition-all duration-150"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-100' 
                    : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'"
                  :style="isTransitioning ? { 
                    backgroundImage: isDarkMode 
                      ? 'linear-gradient(to right, #ffffff, #a5f3fc, #dbeafe)' 
                      : 'linear-gradient(to right, #1e3a8a, #1d4ed8, #2563eb)'
                  } : {}"
                >
                  Compromiso Total
                </span>
              </span>
            </h4>
            
            <div class="relative backdrop-blur-xl rounded-lg p-3 border transform transition-all duration-150 shadow-md"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-br from-blue-700/25 via-indigo-800/35 to-blue-900/25 border-cyan-400/35 shadow-cyan-500/8' 
                   : 'bg-gradient-to-br from-blue-50/85 via-blue-100/75 to-blue-200/65 border-blue-400/35 shadow-blue-400/8'"
                 :style="isTransitioning ? { 
                   background: isDarkMode 
                     ? 'linear-gradient(135deg, rgba(29, 78, 216, 0.3), rgba(55, 48, 163, 0.4), rgba(30, 58, 138, 0.3))' 
                     : 'linear-gradient(135deg, rgba(219, 234, 254, 0.9), rgba(191, 219, 254, 0.8), rgba(147, 197, 253, 0.7))',
                   borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.45)' : 'rgba(59, 130, 246, 0.5)',
                   filter: 'brightness(1.05)'
                 } : {}">
              <p class="text-xs leading-relaxed max-w-md mx-auto transition-colors duration-150"
                 :class="isDarkMode ? 'text-white/85' : 'text-blue-900/85'"
                 :style="isTransitioning ? { 
                   color: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(30, 58, 138, 0.9)'
                 } : {}">
                Construimos relaciones duraderas basadas en 
                <span class="relative inline-block transition-all duration-150">
                  <span 
                    class="bg-clip-text text-transparent font-semibold transition-all duration-150"
                    :class="isDarkMode 
                      ? 'bg-gradient-to-r from-cyan-300 via-blue-200 to-blue-100' 
                      : 'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400'"
                    :style="isTransitioning ? { 
                      backgroundImage: isDarkMode 
                        ? 'linear-gradient(to right, #67e8f9, #bfdbfe, #dbeafe)' 
                        : 'linear-gradient(to right, #2563eb, #3b82f6, #60a5fa)'
                    } : {}"
                  >
                    confianza y resultados
                  </span>
                </span>.
              </p>
            </div>
          </div>
          
          <!-- Tarjeta de promesa premium -->
          <div class="relative backdrop-blur-xl rounded-lg border overflow-hidden transform-gpu group shadow-md hover:shadow-lg transition-all duration-400"
               :class="isDarkMode 
                 ? 'bg-gradient-to-br from-blue-700/25 via-indigo-800/35 to-blue-900/25 border-cyan-400/35 hover:border-cyan-300/50 shadow-cyan-500/10' 
                 : 'bg-gradient-to-br from-blue-50/85 via-blue-100/75 to-blue-200/65 border-blue-400/35 hover:border-blue-300/50 shadow-blue-400/10'"
               :style="isTransitioning ? { 
                 background: isDarkMode 
                   ? 'linear-gradient(135deg, rgba(29, 78, 216, 0.3), rgba(55, 48, 163, 0.4), rgba(30, 58, 138, 0.3))' 
                   : 'linear-gradient(135deg, rgba(219, 234, 254, 0.9), rgba(191, 219, 254, 0.8), rgba(147, 197, 253, 0.7))',
                 borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.45)' : 'rgba(59, 130, 246, 0.5)',
                 filter: 'brightness(1.05)'
               } : {}">
            
            <div class="relative z-10 p-4">
              <!-- Promesas premium -->
              <div class="space-y-3">
                <div v-for="(promise, index) in promises" :key="index" 
                     class="group/promise relative flex items-start p-3 backdrop-blur-xl rounded-lg border transition-all duration-250 transform hover:-translate-y-1 animate-fadeInUp transform-gpu shadow-xs hover:shadow-sm"
                     :class="isDarkMode 
                       ? 'bg-gradient-to-br from-blue-700/20 via-indigo-800/30 to-blue-900/20 border-cyan-400/30 hover:border-cyan-300/50' 
                       : 'bg-gradient-to-br from-blue-50/75 via-blue-100/65 to-blue-200/55 border-blue-400/30 hover:border-blue-300/50'"
                     :style="{ 
                       animationDelay: `${600 + index * 50}ms`,
                       ...(isTransitioning ? { 
                         background: isDarkMode 
                           ? 'linear-gradient(135deg, rgba(29, 78, 216, 0.25), rgba(55, 48, 163, 0.35), rgba(30, 58, 138, 0.25))' 
                           : 'linear-gradient(135deg, rgba(219, 234, 254, 0.85), rgba(191, 219, 254, 0.75), rgba(147, 197, 253, 0.65))',
                         borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.6)' : 'rgba(59, 130, 246, 0.7)',
                         filter: 'brightness(1.05)'
                       } : {})
                     }">
                     
                  <!-- Check premium -->
                  <div class="relative w-9 h-9 sm:w-10 sm:h-10 backdrop-blur-md rounded-md flex items-center justify-center mr-3 transform transition-all duration-250 group-hover/promise:rotate-2 group-hover/promise:scale-105 flex-shrink-0 mt-0.5 shadow group-hover/promise:shadow-glow"
                       :class="isDarkMode 
                         ? 'bg-gradient-to-br from-blue-500 via-cyan-600 to-blue-700' 
                         : 'bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700'">
                    <span class="text-base sm:text-lg text-white transition-colors duration-150">✓</span>
                  </div>
                  
                  <!-- Contenido premium -->
                  <div class="flex-1 min-w-0">
                    <div class="font-bold text-xs sm:text-sm mb-1 transition-colors duration-250 bg-clip-text text-transparent"
                         :class="isDarkMode 
                           ? 'bg-gradient-to-r from-white via-blue-100 to-blue-200 group-hover/promise:from-cyan-300' 
                           : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 group-hover/promise:from-blue-800'">{{ promise.title }}</div>
                    <div class="text-xs leading-relaxed transition-colors duration-250"
                         :class="isDarkMode 
                           ? 'text-white/75 group-hover/promise:text-white/85' 
                           : 'text-blue-800/65 group-hover/promise:text-blue-900/75'">{{ promise.description }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Elemento decorativo final premium -->
      <div class="mt-4 md:mt-6 animate-fadeInUp" style="animation-delay: 700ms">
        <div class="w-10 h-0.5 rounded-full mx-auto animate-pulse-fast transition-all duration-150"
             :class="isDarkMode 
               ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
               : 'bg-gradient-to-r from-blue-500 to-blue-400'"
             :style="isTransitioning ? { 
               background: isDarkMode 
                 ? 'linear-gradient(to right, #22d3ee, #60a5fa)' 
                 : 'linear-gradient(to right, #3b82f6, #60a5fa)'
             } : {}"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';

// ✅ CÓDIGO DEL BOTÓN DE TEMA PREMIUM COMPACTO

// Estado del tema
const isDarkMode = ref(true);
const isTransitioning = ref(false);
const gradientPosition = ref(0);
const showParticles = ref(false);

// Gradientes premium (más compactos)
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

// Estilo de transición
const transitionStyle = computed(() => isTransitioning.value ? { filter: 'brightness(1.15)' } : {});

// Estilo de partículas
const getParticleStyle = (i) => {
  const size = Math.random() * 1.2 + 0.6;
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 3}s`,
    animationDuration: `${6 + Math.random() * 6}s`,
    filter: isTransitioning.value ? 'brightness(1.2)' : 'brightness(1)',
  };
};

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

// Datos del componente
const features = [
  {
    icon: '⚡',
    title: 'Desarrollo Express',
    subtitle: 'VELOCIDAD',
    description: 'Entregas rápidas sin comprometer calidad, con metodologías ágiles y procesos optimizados.'
  },
  {
    icon: '💎',
    title: 'Calidad Premium',
    subtitle: 'EXCELENCIA',
    description: 'Código limpio y arquitectura escalable con las mejores prácticas de desarrollo moderno.'
  },
  {
    icon: '🛡️',
    title: 'Soporte Continuo',
    subtitle: 'COMPROMISO',
    description: 'Soporte técnico post-entrega y actualizaciones periódicas para mantener tu sitio seguro.'
  },
  {
    icon: '🎯',
    title: 'Enfoque en ROI',
    subtitle: 'RESULTADOS',
    description: 'Desarrollo enfocado en tus objetivos de negocio y maximización de conversiones.'
  }
];

const technologies = [
  { icon: '🌐', name: 'HTML & CSS', category: 'Fundamentos' },
  { icon: '⚡', name: 'JavaScript', category: 'Lenguaje' },
  { icon: '⚛️', name: 'React', category: 'Frontend' },
  { icon: '🌀', name: 'Vue.js', category: 'Frontend' },
  { icon: '🚀', name: 'Express.js', category: 'Backend' },
  { icon: '▲', name: 'Next.js', category: 'Fullstack' },
  { icon: '📘', name: 'TypeScript', category: 'Tipado' },
  { icon: '🎨', name: 'Tailwind CSS', category: 'CSS' },
  { icon: '🏗️', name: 'Nest.js', category: 'Backend' }
];

const promises = [
  {
    title: 'Entrega Puntual',
    description: 'Cumplimos plazos sin excusas ni retrasos injustificados'
  },
  {
    title: 'Comunicación Clara',
    description: 'Canal abierto con updates semanales durante el proyecto'
  },
  {
    title: 'Satisfacción Garantizada',
    description: 'Trabajamos hasta tu 100% satisfacción con el resultado'
  },
  {
    title: 'Soporte Post-Entrega',
    description: 'No te abandonamos después del lanzamiento'
  }
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
/* ✅ ANIMACIONES Y ESTILOS COMPACTOS PREMIUM */

/* ANIMACIONES */
@keyframes gradient-shift-dark {
  0%, 100% { background-position: 0% 0%; }
  25% { background-position: 40% 20%; }
  50% { background-position: 80% 40%; }
  75% { background-position: 40% 60%; }
}

@keyframes gradient-shift-light {
  0%, 100% { background-position: 0% 0%; }
  25% { background-position: 40% 20%; }
  50% { background-position: 80% 40%; }
  75% { background-position: 40% 60%; }
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

/* Animaciones personalizadas compactas */
@keyframes customFloat {
  0%, 100% { 
    transform: translateY(0) rotate(0deg); 
    opacity: 0.25;
  }
  50% { 
    transform: translateY(-12px) rotate(180deg); 
    opacity: 0.5;
  }
}

@keyframes customPulseSlow {
  0%, 100% { 
    opacity: 0.25; 
    transform: scale(1);
  }
  50% { 
    opacity: 0.5; 
    transform: scale(1.02);
  }
}

@keyframes customPulse {
  0%, 100% { 
    opacity: 1; 
    transform: scale(1);
  }
  50% { 
    opacity: 0.6; 
    transform: scale(1.1);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animaciones del botón premium */
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

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes float-gentle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1.5px);
  }
}

/* Clases de Animación */
.custom-float { animation: customFloat 12s ease-in-out infinite; }
.custom-pulse-slow { animation: customPulseSlow 4s ease-in-out infinite; }
.custom-pulse { animation: customPulse 1.5s ease-in-out infinite; }
.custom-delay-2000 { animation-delay: 2s; }

/* Animaciones del header */
.animate-pulse-fast { animation: pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
.animate-pulse-slow { animation: pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
.animate-bounce-fast { animation: bounce 0.9s infinite; }
.animate-particle-explode-fast { animation: particle-explode-fast 0.25s ease-out forwards; }
.animate-twinkle-fast { animation: twinkle-fast 1.2s ease-in-out infinite; }

/* Animaciones de Entrada */
.animate-slideInLeft { animation: slideInLeft 0.6s ease-out forwards; opacity: 0; }
.animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; }

/* Efectos de sombra premium */
.shadow-glow {
  box-shadow: 0 0 12px rgba(59, 130, 246, 0.15);
}

.shadow-glow-hover:hover {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.25);
}

/* Transiciones EXACTAS del header */
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

/* Utilidades premium */
.transform-gpu { transform: translate3d(0, 0, 0); backface-visibility: hidden; }
.backdrop-blur-xl { backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
.backdrop-blur-lg { backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
.backdrop-blur-md { backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); }
.backdrop-blur-sm { backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); }

/* Gradientes de texto premium */
.bg-clip-text {
  -webkit-background-clip: text !important;
  background-clip: text !important;
  color: transparent;
  display: inline-block;
}

/* Altura mínima para tarjetas */
.min-h-\[95px\] {
  min-height: 95px;
}

/* Optimización de texto */
.break-words {
  word-break: break-word;
  overflow-wrap: break-word;
}

.whitespace-normal {
  white-space: normal;
}

/* Utilería para hover escalas reducidas */
.hover\:scale-103:hover {
  transform: scale(1.03);
}

/* Responsividad */
@media (max-width: 1024px) {
  .min-h-auto { min-height: auto; }
  .text-4xl { font-size: 2.5rem; }
  .lg\:grid-cols-4 { grid-template-columns: repeat(2, 1fr); }
  .lg\:grid-cols-3 { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .min-h-auto { min-height: auto; padding-top: 1.5rem; padding-bottom: 1.5rem; }
  .text-4xl { font-size: 2rem; }
  .lg\:grid-cols-4, .sm\:grid-cols-2 { grid-template-columns: 1fr; }
  .lg\:grid-cols-2 { grid-template-columns: 1fr; }
  .lg\:grid-cols-3 { grid-template-columns: repeat(2, 1fr); }
  
  /* Ajustes para el botón premium en móvil */
  .theme-switch-premium {
    width: 26px;
    height: 10px;
  }
  
  .theme-switch-premium > div:first-child {
    width: 10px;
    height: 10px;
  }
  
  .absolute.left-3, .absolute.right-3 {
    width: 5px;
    height: 5px;
  }
  
  .absolute.-bottom-4 {
    font-size: 7px;
    bottom: -3px;
  }
  
  /* Ajuste del contenedor badge y botón en móvil */
  .relative.w-full.mb-6 {
    margin-bottom: 3.5rem;
  }
}

@media (max-width: 640px) {
  .text-4xl { font-size: 1.75rem; }
  .grid-cols-2 { grid-template-columns: 1fr; }
  .sm\:grid-cols-2, .lg\:grid-cols-4, .sm\:grid-cols-3, .lg\:grid-cols-3 { grid-template-columns: 1fr; }
  
  /* Botón premium más compacto en móviles pequeños */
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
}

/* Accesibilidad */
@media (prefers-reduced-motion: reduce) {
  .custom-float,
  .custom-pulse-slow,
  .custom-pulse,
  .animate-pulse-fast,
  .animate-pulse-slow,
  .animate-bounce-fast,
  .animate-slideInLeft,
  .animate-fadeInUp,
  .animate-particle-explode-fast,
  .animate-twinkle-fast {
    animation: none !important;
    transition: none !important;
  }
  
  .group-hover\:scale-103,
  .group-hover\:-translate-y-1,
  .group-hover\:rotate-2,
  .group-hover\:scale-105 {
    transform: none !important;
  }
}

/* Efectos especiales durante la transición */
.theme-transition-fast section::before {
  filter: brightness(1.1) saturate(1.05);
}

.theme-transition-fast .theme-switch-premium {
  filter: brightness(1.15);
}

/* Nueva clase utilitaria para desenfoque */
.blur-xs {
  filter: blur(2px);
}
</style>