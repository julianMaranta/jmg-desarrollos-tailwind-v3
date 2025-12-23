<template>
  <section 
    id="testimonios" 
    class="py-8 md:py-10 text-white relative overflow-hidden w-full flex justify-center transition-all duration-150 ease-out"
  >
    <!-- Capa de fondo principal - Reducida -->
    <div 
      class="absolute inset-0 transition-all duration-150 ease-out overflow-hidden"
      :style="sectionGradientStyle"
    >
      <!-- Efecto de partículas - Reducida -->
      <div class="absolute inset-0">
        <div v-for="i in 25" :key="i" 
             class="absolute rounded-full transition-all duration-150"
             :class="isDarkMode ? 'bg-blue-400/15' : 'bg-white/15'"
             :style="`
               width: ${Math.random() * 2 + 1}px;
               height: ${Math.random() * 2 + 1}px;
               top: ${Math.random() * 100}%;
               left: ${Math.random() * 100}%;
               animation-delay: ${Math.random() * 0.3}s;
               opacity: ${isTransitioning ? 0.5 : 0.2};
             `">
        </div>
      </div>
    </div>
    
    <!-- Efectos de fondo animados - Reducidos -->
    <div class="absolute inset-0 overflow-hidden transition-all duration-150 ease-out">
      <transition name="theme-fade-fast" mode="out-in">
        <div v-if="isDarkMode" key="dark-bg-1" class="absolute top-1/4 -left-12 w-48 h-48 bg-gradient-to-br from-blue-500/25 to-cyan-400/15 rounded-full blur-2xl animate-pulse-fast transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.4, transform: 'scale(1.05)' } : {}"></div>
        <div v-else key="light-bg-1" class="absolute top-1/4 -left-12 w-48 h-48 bg-gradient-to-br from-blue-100/40 to-blue-50/30 rounded-full blur-2xl animate-pulse-fast transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.4, transform: 'scale(1.05)' } : {}"></div>
      </transition>
      
      <transition name="theme-fade-fast" mode="out-in">
        <div v-if="isDarkMode" key="dark-bg-2" class="absolute bottom-1/3 -right-12 w-52 h-52 bg-gradient-to-br from-indigo-500/25 to-blue-500/15 rounded-full blur-2xl animate-pulse-fast animate-delay-300 transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.4, transform: 'scale(1.05)' } : {}"></div>
        <div v-else key="light-bg-2" class="absolute bottom-1/3 -right-12 w-52 h-52 bg-gradient-to-br from-blue-100/50 to-blue-50/30 rounded-full blur-2xl animate-pulse-fast animate-delay-300 transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.4, transform: 'scale(1.05)' } : {}"></div>
      </transition>
      
      <!-- Partículas flotantes - Reducidas -->
      <div v-for="i in 8" :key="i" 
           class="absolute w-0.5 h-0.5 rounded-full animate-float transition-all duration-150"
           :class="isDarkMode ? 'bg-blue-400/40' : 'bg-blue-300/40'"
           :style="`
             top: ${Math.random() * 100}%; 
             left: ${Math.random() * 100}%; 
             animation-delay: ${Math.random() * 1.5}s;
           `">
      </div>
    </div>

    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
      <!-- Section Header - Reducido -->
      <div class="text-center mb-6 md:mb-8 w-full relative">
        <!-- Botón de tema premium - Reducido -->
        <div class="absolute top-0 right-0 md:right-2 z-20">
          <button
            @click="toggleTheme"
            class="relative flex items-center justify-center w-32 h-12 rounded-lg border shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-150 ease-out overflow-hidden group theme-switch-premium"
            :class="isDarkMode 
              ? 'border-cyan-400/50 hover:border-cyan-300 shadow-cyan-500/15 bg-gradient-to-br from-blue-900/80 via-indigo-900/80 to-purple-900/80' 
              : 'border-blue-300/50 hover:border-blue-200 shadow-blue-400/15 bg-gradient-to-br from-white/90 via-blue-50/90 to-blue-100/90'"
            :title="isDarkMode ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'"
            aria-label="Cambiar tema"
          >
            <!-- Switch compacto -->
            <div 
              class="absolute w-12 h-12 rounded-full transition-all duration-300 ease-out transform z-30 overflow-hidden"
              :class="isDarkMode ? 'right-3' : 'left-3'"
              :style="isTransitioning ? { 
                filter: 'brightness(1.1)',
                boxShadow: isDarkMode 
                  ? '0 0 15px rgba(96, 165, 250, 0.4), inset 0 0 15px rgba(96, 165, 250, 0.2)' 
                  : '0 0 15px rgba(250, 204, 21, 0.4), inset 0 0 15px rgba(250, 204, 21, 0.2)'
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
                <div class="absolute inset-0 bg-gradient-to-br from-transparent via-white/40 to-transparent opacity-60 animate-pulse-slow"></div>
                
                <!-- Brillo de borde -->
                <div 
                  class="absolute inset-0 rounded-full border transition-all duration-150"
                  :class="isDarkMode 
                    ? 'border-blue-400/80' 
                    : 'border-yellow-400/80'">
                </div>
              </div>
              
              <!-- Icono dentro del switch -->
              <div class="absolute inset-0 flex items-center justify-center z-10">
                <!-- Luna -->
                <svg v-if="isDarkMode" class="w-6 h-6 transition-all duration-150" fill="currentColor" viewBox="0 0 20 20"
                     :class="isTransitioning ? 'text-blue-200' : 'text-blue-300'">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                </svg>
                
                <!-- Sol -->
                <svg v-else class="w-6 h-6 transition-all duration-150" fill="currentColor" viewBox="0 0 20 20"
                     :class="isTransitioning ? 'text-yellow-200' : 'text-yellow-400'">
                  <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
              </svg>
              </div>
              
              <!-- Brillo central -->
              <div class="absolute top-1/2 left-1/2 w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-sm transition-all duration-150"
                   :class="isDarkMode ? 'bg-blue-300/70' : 'bg-yellow-300/70'"></div>
            </div>
            
            <!-- Efecto de brillo al hover -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-out"></div>
            
            <!-- Contenedor principal con iconos -->
            <div class="relative w-full h-full flex items-center justify-center overflow-hidden">
              
              <!-- Sol (izquierda) -->
              <div class="absolute left-3 w-6 h-6 transition-all duration-150 ease-out z-20"
                   :class="isDarkMode 
                     ? 'opacity-30 scale-90 text-yellow-300/40' 
                     : 'opacity-100 scale-105 text-yellow-400'">
                <svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
                </svg>
              </div>
              
              <!-- Luna (derecha) -->
              <div class="absolute right-3 w-5 h-5 transition-all duration-150 ease-out z-20"
                   :class="!isDarkMode 
                     ? 'opacity-30 scale-90 text-blue-400/40' 
                     : 'opacity-100 scale-105 text-blue-300'">
                <svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                </svg>
              </div>
              
              <!-- Texto "DÍA/NOCHE" -->
              <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-[9px] font-semibold uppercase tracking-wide opacity-80 z-5 transition-all duration-150 whitespace-nowrap"
                   :class="isDarkMode ? 'text-blue-300/80' : 'text-yellow-600/80'">
                {{ isDarkMode ? 'NOCHE' : 'DÍA' }}
              </div>
              
            </div>
            
            <!-- Tooltip -->
            <div class="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-50">
              <div class="px-1.5 py-0.5 text-[9px] font-medium rounded backdrop-blur-sm shadow-sm"
                   :class="isDarkMode 
                     ? 'bg-blue-900/80 text-blue-300 border border-blue-400/20' 
                     : 'bg-yellow-50/90 text-yellow-800 border border-yellow-400/20'">
                {{ isDarkMode ? 'Activar día' : 'Activar noche' }}
              </div>
            </div>
            
          </button>
        </div>
        
        <!-- Badge animado - Reducido -->
        <div 
          class="inline-flex items-center backdrop-blur-lg rounded-full px-4 py-1.5 mb-2 shadow-glow animate-pulse-slow transition-all duration-150"
          :class="isDarkMode 
            ? 'bg-gradient-to-r from-blue-600/40 to-cyan-500/30 border border-cyan-400/40' 
            : 'bg-gradient-to-r from-blue-500/30 to-blue-400/40 border border-blue-400/50'"
          :style="isTransitioning ? { 
            filter: 'brightness(1.1)',
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
              transform: 'scale(1.1)'
            } : {}"
          ></div>
          <span class="text-xs font-bold tracking-wider transition-colors duration-150"
                :class="isDarkMode ? 'text-white' : 'text-blue-900'">💬 TESTIMONIOS</span>
        </div>
        
        <!-- Título - Reducido -->
        <div class="relative w-full mb-3">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-center w-full tracking-tight leading-tight animate-slideInLeft transition-all duration-150">
            <span class="relative inline-block">
              <span 
                class="bg-clip-text text-transparent relative z-20 transition-all duration-150"
                :class="isDarkMode 
                  ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-100' 
                  : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'">
                Nuestro Caso de Éxito: 
              </span>
              
              <!-- ENSEA visible -->
              <span class="animate-pulse-slow font-bold relative z-20"
                    :class="isDarkMode ? 'text-cyan-300' : 'text-blue-600'">
                ENSEA
              </span>
              
              <!-- Efectos de subrayado -->
              <div 
                class="absolute -bottom-0.5 left-1/4 right-1/4 h-0.5 rounded-full opacity-60 mt-0.5 transition-all duration-150"
                :class="isDarkMode 
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
                  : 'bg-gradient-to-r from-blue-500 to-blue-400'">
              </div>
            </span>
          </h2>
        </div>
        
        <!-- Subtítulo - Reducido -->
        <div class="relative max-w-xl mx-auto mb-4 animate-fadeInUp transition-all duration-150" style="animation-delay: 50ms">
          <p 
            class="text-sm sm:text-base leading-relaxed text-center transition-colors duration-150"
            :class="isDarkMode ? 'text-white/90' : 'text-blue-900/90'">
            Renovamos su 
            <span class="relative inline-block transition-all duration-150">
              <span 
                class="bg-clip-text text-transparent font-bold transition-all duration-150"
                :class="isDarkMode 
                  ? 'bg-gradient-to-r from-cyan-300 via-blue-200 to-blue-100' 
                  : 'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400'">
                Plataforma Web 
              </span>
              <div 
                class="absolute inset-0 blur-sm -z-10 rounded-full transition-all duration-150"
                :class="isDarkMode 
                  ? 'bg-gradient-to-r from-cyan-400/20 via-blue-300/15 to-blue-200/15' 
                  : 'bg-gradient-to-r from-blue-500/20 via-blue-400/15 to-blue-300/15'">
              </div>
            </span>
            de cursos.
          </p>
        </div>
      </div>

      <!-- CARRUSEL DE IMÁGENES - Reducido -->
      <div class="relative w-full max-w-[1000px] mx-auto mb-8 md:mb-10">
        <!-- Contenedor del carrusel con altura reducida -->
        <div class="flex items-center justify-center h-[600px] md:h-[700px] transition-all duration-150">
          
          <!-- Botón izquierdo - Reducido -->
          <button 
            @click="prevSlide"
            :disabled="isAnimating"
            class="relative z-30 w-12 h-12 md:w-14 md:h-14 backdrop-blur-lg rounded-lg border flex items-center justify-center transition-all duration-150 hover:scale-110 hover:shadow-xl group mr-2 md:mr-3 shadow-md transform-gpu hover:-translate-y-0.5"
            :class="isDarkMode 
              ? 'bg-blue-900/30 border-blue-400/30 hover:border-cyan-300/50 shadow-blue-500/15 hover:shadow-blue-500/30' 
              : 'bg-blue-50/30 border-blue-300/30 hover:border-blue-400/50 shadow-blue-400/15 hover:shadow-blue-400/30'">
            <!-- Efecto de fondo -->
            <div class="absolute inset-0 transition-all duration-150"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-br from-blue-800/40 to-indigo-800/40' 
                   : 'bg-gradient-to-br from-blue-100/40 to-blue-200/40'"></div>
            
            <div class="relative w-6 h-6 rounded flex items-center justify-center transform group-hover:-translate-x-0.5 transition-transform duration-150"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-r from-blue-200 to-blue-100 shadow-inner' 
                   : 'bg-gradient-to-r from-blue-300 to-blue-200 shadow-inner'">
              <span class="text-lg font-bold transition-colors duration-150"
                    :class="isDarkMode ? 'text-blue-900' : 'text-blue-800'">
                ←
              </span>
            </div>
          </button>

          <!-- Contenedor de imágenes - Reducido -->
          <div class="flex-1 relative flex items-center justify-center h-full transition-all duration-150">
            
            <!-- Imagen anterior - Reducida -->
            <div 
              v-if="prevImage"
              class="absolute left-0 w-[280px] h-[420px] md:w-[320px] md:h-[480px] transition-all duration-500 z-20"
              :class="isAnimating ? 'opacity-60 -translate-x-20' : 'opacity-80'"
            >
              <div 
                class="w-full h-full backdrop-blur-xl rounded-2xl border shadow-lg p-4 transform-gpu hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden hover:border-blue-500/60"
                style="transform: rotateY(15deg) translateZ(-20px);"
                @click="prevSlide"
                :class="isDarkMode 
                  ? 'bg-gradient-to-br from-blue-700/40 via-indigo-800/50 to-blue-900/40 border-cyan-400/40 hover:border-cyan-300/50' 
                  : 'bg-gradient-to-br from-blue-50/80 via-blue-100/70 to-blue-200/60 border-blue-400/50 hover:border-blue-500/60'">
                
                <!-- Imagen reducida -->
                <div class="relative w-full h-[280px] md:h-[320px] rounded-t-2xl overflow-hidden">
                  <img 
                    :src="prevImage.image" 
                    :alt="prevImage.title"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
                
                <!-- Contenido reducido -->
                <div class="p-4 h-[140px] md:h-[160px] flex flex-col justify-center">
                  <h3 class="text-lg font-bold mb-2 text-center transition-colors duration-150 line-clamp-1"
                      :class="isDarkMode ? 'text-white' : 'text-blue-900'">
                    {{ prevImage.title }}
                  </h3>
                  <p class="text-sm text-center transition-colors duration-150 line-clamp-2"
                     :class="isDarkMode ? 'text-white/80' : 'text-blue-800/80'">
                    {{ prevImage.description }}
                  </p>
                  
                </div>
              </div>
            </div>

            <!-- Imagen actual central - Reducida -->
            <div 
              class="absolute left-1/2 transform -translate-x-1/2 w-[600px] h-[450px] md:w-[700px] md:h-[525px] z-30 transition-all duration-500"
              :class="isAnimating ? 'opacity-80 scale-95' : 'opacity-100 scale-100'"
            >
              <div 
                class="w-full h-full backdrop-blur-xl rounded-2xl border shadow-xl transform-gpu hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden hover:shadow-glow"
                :class="isDarkMode 
                  ? 'bg-gradient-to-br from-blue-700/50 via-indigo-800/60 to-blue-900/50 border-cyan-400/50 hover:border-cyan-300/60 shadow-blue-500/20 hover:shadow-blue-500/30' 
                  : 'bg-gradient-to-br from-blue-50/85 via-blue-100/75 to-blue-200/65 border-blue-400/60 hover:border-blue-500/70 shadow-blue-400/20 hover:shadow-blue-400/30'">
                
                <!-- Imagen grande reducida -->
                <div class="relative w-full h-[300px] md:h-[350px] rounded-t-2xl overflow-hidden">
                  <img 
                    :src="currentImage.image" 
                    :alt="currentImage.title"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                
                <!-- Contenido principal reducido -->
                <div class="p-5 md:p-6 h-[150px] md:h-[175px] flex flex-col justify-center">
                  <h3 class="text-xl md:text-2xl font-black mb-3 text-center bg-clip-text text-transparent transition-all duration-150 line-clamp-1"
                      :class="isDarkMode 
                        ? 'bg-gradient-to-r from-white via-blue-100 to-blue-200' 
                        : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'">
                    {{ currentImage.title }}
                  </h3>
                  <p class="text-base leading-relaxed text-center transition-colors duration-150 line-clamp-2 mb-4"
                     :class="isDarkMode ? 'text-white/90' : 'text-blue-800/90'">
                    {{ currentImage.description }}
                  </p>
                  
                </div>
              </div>
            </div>

            <!-- Imagen siguiente - Reducida -->
            <div 
              v-if="nextImage"
              class="absolute right-0 w-[280px] h-[420px] md:w-[320px] md:h-[480px] transition-all duration-500 z-20"
              :class="isAnimating ? 'opacity-60 translate-x-20' : 'opacity-80'"
            >
              <div 
                class="w-full h-full backdrop-blur-xl rounded-2xl border shadow-lg p-4 transform-gpu hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden hover:border-blue-500/60"
                style="transform: rotateY(-15deg) translateZ(-20px);"
                @click="nextSlide"
                :class="isDarkMode 
                  ? 'bg-gradient-to-br from-blue-700/40 via-indigo-800/50 to-blue-900/40 border-cyan-400/40 hover:border-cyan-300/50' 
                  : 'bg-gradient-to-br from-blue-50/80 via-blue-100/70 to-blue-200/60 border-blue-400/50 hover:border-blue-500/60'">
                
                <!-- Imagen reducida -->
                <div class="relative w-full h-[280px] md:h-[320px] rounded-t-2xl overflow-hidden">
                  <img 
                    :src="nextImage.image" 
                    :alt="nextImage.title"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
                
                <!-- Contenido reducido -->
                <div class="p-4 h-[140px] md:h-[160px] flex flex-col justify-center">
                  <h3 class="text-lg font-bold mb-2 text-center transition-colors duration-150 line-clamp-1"
                      :class="isDarkMode ? 'text-white' : 'text-blue-900'">
                    {{ nextImage.title }}
                  </h3>
                  <p class="text-sm text-center transition-colors duration-150 line-clamp-2"
                     :class="isDarkMode ? 'text-white/80' : 'text-blue-800/80'">
                    {{ nextImage.description }}
                  </p>
                  
                </div>
              </div>
            </div>
          </div>

          <!-- Botón derecho - Reducido -->
          <button 
            @click="nextSlide"
            :disabled="isAnimating"
            class="relative z-30 w-12 h-12 md:w-14 md:h-14 backdrop-blur-lg rounded-lg border flex items-center justify-center transition-all duration-150 hover:scale-110 hover:shadow-xl group ml-2 md:ml-3 shadow-md transform-gpu hover:-translate-y-0.5"
            :class="isDarkMode 
              ? 'bg-blue-900/30 border-blue-400/30 hover:border-cyan-300/50 shadow-blue-500/15 hover:shadow-blue-500/30' 
              : 'bg-blue-50/30 border-blue-300/30 hover:border-blue-400/50 shadow-blue-400/15 hover:shadow-blue-400/30'">
            <!-- Efecto de fondo -->
            <div class="absolute inset-0 transition-all duration-150"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-br from-blue-800/40 to-indigo-800/40' 
                   : 'bg-gradient-to-br from-blue-100/40 to-blue-200/40'"></div>
            
            <div class="relative w-6 h-6 rounded flex items-center justify-center transform group-hover:translate-x-0.5 transition-transform duration-150"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-r from-blue-200 to-blue-100 shadow-inner' 
                   : 'bg-gradient-to-r from-blue-300 to-blue-200 shadow-inner'">
              <span class="text-lg font-bold transition-colors duration-150"
                    :class="isDarkMode ? 'text-blue-900' : 'text-blue-800'">
                →
              </span>
            </div>
          </button>
        </div>

        <!-- Indicadores - Reducidos -->
        <div class="flex justify-center items-center mt-6 md:mt-8 space-x-2 md:space-x-3">
          <button 
            v-for="(image, index) in images" 
            :key="index"
            @click="goToSlide(index)"
            class="relative w-8 h-8 md:w-10 md:h-10 rounded-full transition-all duration-150 group hover:scale-125"
          >
            <div 
              class="absolute inset-0 rounded-full flex items-center justify-center transition-all duration-150 border"
              :class="currentIndex === index 
                ? (isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-300 border-cyan-300/80 shadow-glow' 
                    : 'bg-gradient-to-r from-blue-400 to-blue-300 border-blue-500/80 shadow-blue-500/15')
                : (isDarkMode 
                    ? 'bg-blue-800/30 border-blue-600/30' 
                    : 'bg-blue-200/30 border-blue-300/30')"
              :style="currentIndex === index 
                ? { 
                    opacity: 1, 
                    boxShadow: isDarkMode 
                      ? '0 0 12px rgba(34, 211, 238, 0.6)' 
                      : '0 0 12px rgba(59, 130, 246, 0.6)',
                  } 
                : { 
                    opacity: 0.7,
                  }"
            >
              <span class="text-base font-bold transition-colors duration-150"
                    :class="currentIndex === index 
                      ? (isDarkMode ? 'text-blue-900' : 'text-white') 
                      : (isDarkMode ? 'text-blue-300/60' : 'text-blue-700/60')">
                {{ index + 1 }}
              </span>
            </div>
            <div v-if="currentIndex === index" 
                 class="absolute inset-0 rounded-full custom-ping transition-all duration-150"
                 :class="isDarkMode ? 'bg-cyan-400/30' : 'bg-blue-500/30'">
            </div>
          </button>
        </div>
      </div>

      <!-- Logos de clientes - Reducidos -->
      <div class="text-center w-full flex flex-col items-center mt-8 md:mt-10 animate-fadeInUp" style="animation-delay: 450ms">
        <h3 class="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center w-full">
          <span class="bg-clip-text text-transparent transition-all duration-150"
                :class="isDarkMode 
                  ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-100' 
                  : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'">
            Empresas que Confían en 
          </span>
          <!-- ENSEA visible -->
          <span class="animate-pulse-slow font-bold relative z-20"
                :class="isDarkMode ? 'text-cyan-300' : 'text-blue-600'">
            ENSEA
          </span>
        </h3>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 items-center justify-items-center w-full max-w-4xl mx-auto">
          <div v-for="(client, index) in clients" :key="index" 
               class="group relative transform-gpu w-full">
            
            <!-- Logo Card reducida -->
            <div class="relative backdrop-blur-lg rounded-lg border p-0.5 transition-all duration-150 transform group-hover:-translate-y-1 group-hover:scale-105 shadow-md overflow-hidden h-full"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-br from-blue-700/25 via-indigo-800/30 to-blue-900/25 border-cyan-400/30 hover:border-cyan-300/50 shadow-blue-500/10' 
                   : 'bg-gradient-to-br from-blue-50/80 via-blue-100/70 to-blue-200/60 border-blue-400/50 hover:border-blue-300/60 shadow-blue-400/10'">
              
              <!-- Efecto de borde animado -->
              <div 
                class="absolute inset-0 rounded-lg border border-transparent transition-all duration-150"
                :class="isDarkMode 
                  ? 'group-hover:border-cyan-400/30' 
                  : 'group-hover:border-blue-400/40'">
              </div>
              
              <!-- Logo Container reducido -->
              <div class="p-4 md:p-5 flex flex-col items-center justify-center h-full">
                <!-- Contenedor de imagen del logo reducido -->
                <div class="relative w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden mb-3 transform transition-all duration-150 group-hover:scale-110">
                  <img 
                    :src="client.logo" 
                    :alt="client.name"
                    class="w-full h-full object-contain"
                  />
                </div>
                
                <span class="text-xs font-medium text-center transition-colors duration-150 line-clamp-2"
                      :class="isDarkMode ? 'text-white/90' : 'text-blue-800/90'">
                  {{ client.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Nota adicional - Reducida -->
      <div class="text-center mt-8 md:mt-10 max-w-2xl mx-auto px-4 animate-fadeInUp" style="animation-delay: 550ms">
        <div class="relative backdrop-blur-lg rounded-xl border shadow-lg p-4 md:p-5 w-full flex flex-col items-center justify-center transform hover:scale-102 transition-all duration-150 group"
             :class="isDarkMode 
               ? 'bg-gradient-to-br from-blue-700/40 via-indigo-800/50 to-blue-900/40 border-cyan-400/40' 
               : 'bg-gradient-to-br from-blue-50/80 via-blue-100/70 to-blue-200/60 border-blue-400/50'">
          
          <!-- Efecto de borde animado -->
          <div 
            class="absolute inset-0 rounded-xl border border-transparent transition-all duration-150"
            :class="isDarkMode 
              ? 'group-hover:border-cyan-400/30' 
              : 'group-hover:border-blue-400/40'">
          </div>
          
          <h3 
            class="text-lg md:text-xl font-black mb-3 text-center w-full bg-clip-text text-transparent px-4 transition-all duration-150"
            :class="isDarkMode 
              ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-100' 
              : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'"
          >
            ¿Quieres ser nuestro próximo caso de éxito?
          </h3>
          
          <p 
            class="text-sm md:text-base mb-4 max-w-lg text-center transition-colors duration-150"
            :class="isDarkMode ? 'text-white/90' : 'text-blue-900/90'"
          >
            Únete a las empresas que ya transformaron su presencia digital.
          </p>
          
          <!-- Botón CTA - Reducido -->
          <div class="flex justify-center w-full transition-all duration-150">
            <button 
              @click="scrollToSection('contacto')"
              class="relative text-white font-bold py-2.5 px-6 rounded-xl transition-all duration-150 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-glow-hover text-sm md:text-base group overflow-hidden"
              :class="isDarkMode 
                ? 'bg-gradient-to-r from-blue-600 via-cyan-700 to-indigo-800 hover:from-blue-700 hover:via-cyan-800 hover:to-indigo-900' 
                : 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900'">
              
              <!-- Efecto de brillo al hover -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-300"></div>
              
              <span class="flex items-center justify-center relative transition-all duration-150">
                Contáctanos ahora
                <span class="ml-1.5 text-lg animate-bounce-fast"
                      :style="isTransitioning ? { transform: 'scale(1.1)' } : {}">↗</span>
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

// Estado del tema - Optimizado
const isDarkMode = ref(true);
const isTransitioning = ref(false);
const gradientPosition = ref(0);
const showParticles = ref(false);

// Gradientes optimizados
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
  
  const duration = 200;
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
  }, duration + 50);
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
      filter: 'brightness(1.1)',
      transition: 'all 0.15s ease-out',
    };
  } else {
    return {
      backgroundImage: isDarkMode.value ? darkGradient : lightGradient,
      backgroundSize: '200% 200%',
      backgroundPosition: '0% 0%',
      animation: isDarkMode.value ? 'gradient-shift-dark 8s ease infinite' : 'gradient-shift-light 8s ease infinite',
    };
  }
});

// Imágenes del carrusel - Reducidas
const images = [
  {
    image: '/assets/ensea1.png',
    title: 'ENSEA Plataforma Educativa',
    description: 'Rediseño completo de la plataforma de cursos online con sistema de gestión',
    
  },
  {
    image: '/assets/ensea2.png',
    title: 'ENSEA Plataforma Educativa',
    description: 'Rediseño completo de la plataforma de cursos online con sistema de gestión',
    
  },
  {
    image: '/assets/ensea3.png',
    title: 'ENSEA Plataforma Educativa',
    description: 'Rediseño completo de la plataforma de cursos online con sistema de gestión',
    
  },
  {
    image: '/assets/ensea4.png',
    title: 'ENSEA Plataforma Educativa',
    description: 'Rediseño completo de la plataforma de cursos online con sistema de gestión',
    
  },
  {
    image: '/assets/ensea5.png',
    title: 'ENSEA Plataforma Educativa',
    description: 'Rediseño completo de la plataforma de cursos online con sistema de gestión',
    
  }
];

// Logos de clientes - Optimizados
const clients = [
  {
    logo: '/assets/ATE.png',
    name: 'ATE'
  },
  {
    logo: '/assets/Carrefour.png',
    name: 'Carrefour'
  },
  {
    logo: '/assets/Disney.png',
    name: 'Disney'
  },
  {
    logo: '/assets/Makro.png',
    name: 'Makro'
  },
  {
    logo: '/assets/SAC.png',
    name: 'SAC'
  },
  {
    logo: '/assets/Swiss Medical.png',
    name: 'Swiss Medical'
  },
  {
    logo: '/assets/Trenes Argentinos.png',
    name: 'Trenes Argentinos'
  },
  {
    logo: '/assets/Trenes Argentinos.png',
    name: 'Trenes Argentinos'
  }
];

const currentIndex = ref(0);
const isAnimating = ref(false);
const autoRotateInterval = ref(null);

// Computed properties para el carrusel
const currentImage = computed(() => images[currentIndex.value]);
const prevImage = computed(() => {
  const prevIndex = (currentIndex.value - 1 + images.length) % images.length;
  return images[prevIndex];
});
const nextImage = computed(() => {
  const nextIndex = (currentIndex.value + 1) % images.length;
  return images[nextIndex];
});

// Navigation
const navigateToSlide = async (index) => {
  if (isAnimating.value || index === currentIndex.value) return;
  
  isAnimating.value = true;
  await new Promise(resolve => setTimeout(resolve, 300));
  currentIndex.value = index;
  await new Promise(resolve => setTimeout(resolve, 300));
  isAnimating.value = false;
};

const nextSlide = () => {
  const nextIndex = (currentIndex.value + 1) % images.length;
  navigateToSlide(nextIndex);
};

const prevSlide = () => {
  const prevIndex = (currentIndex.value - 1 + images.length) % images.length;
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
  const carouselContainer = document.querySelector('#testimonios');
  if (carouselContainer) {
    carouselContainer.addEventListener('click', handleInteraction);
    carouselContainer.addEventListener('touchstart', handleInteraction);
  }
});

onUnmounted(() => {
  stopAutoRotate();
  const carouselContainer = document.querySelector('#testimonios');
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
  }, 200);
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
    transform: scale(0.95);
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
    transform: scale(1.05);
  }
}

.theme-fade-fast-enter-active {
  animation: themeFadeInFast 0.12s ease-out !important;
}

.theme-fade-fast-leave-active {
  animation: themeFadeOutFast 0.12s ease-out !important;
}

/* Transiciones optimizadas */
* {
  transition: background-color 0.12s ease-out, 
              border-color 0.12s ease-out,
              color 0.12s ease-out,
              transform 0.12s ease-out,
              opacity 0.12s ease-out;
}

/* Animación para ping */
@keyframes custom-ping {
  75%, 100% {
    transform: scale(1.3);
    opacity: 0;
  }
}

.custom-ping {
  animation: custom-ping 1.2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

/* Animaciones básicas */
.animate-pulse-fast {
  animation: pulse 1.2s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse 2.5s ease-in-out infinite;
}

.animate-bounce-fast {
  animation: bounce 0.8s infinite;
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
    transform: translateY(-8px);
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

/* Animaciones de entrada */
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
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideInLeft {
  animation: slideInLeft 0.5s ease-out forwards;
  opacity: 0;
}

.animate-fadeInUp {
  animation: fadeInUp 0.5s ease-out forwards;
  opacity: 0;
}

.animate-delay-300 {
  animation-delay: 0.3s;
}

/* Utilidades */
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

.line-clamp-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-clamp: 1;
}

.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
}

/* Backdrop blur optimizado */
.backdrop-blur-lg {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.backdrop-blur-xl {
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

/* Efecto de sombras */
.shadow-glow {
  box-shadow: 0 0 15px rgba(34, 211, 238, 0.3);
}

.hover\:shadow-glow-hover:hover {
  box-shadow: 0 8px 25px rgba(34, 211, 238, 0.4);
}

/* Ajustes responsive para el carrusel reducido */
@media (max-width: 1024px) {
  .w-\[700px\] {
    width: 600px;
  }
  
  .h-\[525px\] {
    height: 450px;
  }
  
  .h-\[350px\] {
    height: 300px;
  }
  
  .h-\[175px\] {
    height: 150px;
  }
  
  .w-\[320px\] {
    width: 280px;
  }
  
  .h-\[480px\] {
    height: 400px;
  }
  
  .h-\[320px\] {
    height: 260px;
  }
  
  .h-\[160px\] {
    height: 140px;
  }
}

@media (max-width: 768px) {
  /* Ajustes del carrusel en móvil */
  .w-\[700px\] {
    width: 90vw;
  }
  
  .h-\[525px\] {
    height: 400px;
  }
  
  .h-\[350px\] {
    height: 250px;
  }
  
  .h-\[175px\] {
    height: 150px;
  }
  
  .w-\[320px\] {
    width: 40vw;
    display: none; /* Ocultar imágenes laterales en móvil */
  }
  
  .h-\[480px\] {
    height: 350px;
  }
  
  /* Textos más pequeños en móvil */
  .text-2xl {
    font-size: 1.5rem;
  }
  
  .text-xl {
    font-size: 1.25rem;
  }
  
  .text-lg {
    font-size: 1rem;
  }
  
  /* Botones más pequeños */
  .w-12, .h-12 {
    width: 2.5rem;
    height: 2.5rem;
  }
  
  .w-14, .h-14 {
    width: 3rem;
    height: 3rem;
  }
}

@media (max-width: 640px) {
  .w-\[700px\] {
    width: 95vw;
  }
  
  .h-\[525px\] {
    height: 350px;
  }
  
  .h-\[350px\] {
    height: 220px;
  }
  
  .h-\[175px\] {
    height: 130px;
  }
  
  .text-4xl {
    font-size: 1.75rem;
  }
  
  .text-3xl {
    font-size: 1.5rem;
  }
  
  .text-2xl {
    font-size: 1.25rem;
  }
  
  /* Logos más pequeños */
  .grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
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
  .custom-ping {
    animation: none !important;
  }
  
  .hover\:scale-105,
  .hover\:-translate-y-0\.5,
  .group-hover\:scale-110 {
    transform: none !important;
  }
}

/* Mejoras de rendimiento */
#testimonios > div:first-child {
  will-change: background-position;
}

button[aria-label="Cambiar tema"] {
  will-change: transform;
}
</style>