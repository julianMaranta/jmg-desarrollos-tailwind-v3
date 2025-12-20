<template>
  <section id="testimonios" class="min-h-screen w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden flex items-center justify-center py-12">
    <!-- Background Elements - Exactamente Igual al Header y Servicios -->
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
      
      <!-- Sistema de Orbes Mejorado - Igual que Header -->
      <div class="absolute -top-56 -right-56 w-[700px] h-[700px] bg-gradient-to-br from-blue-600/20 via-blue-500/15 to-blue-400/12 rounded-full blur-3xl custom-pulse-slow"></div>
      <div class="absolute -bottom-56 -left-56 w-[700px] h-[700px] bg-gradient-to-br from-blue-600/20 via-blue-500/15 to-blue-400/12 rounded-full blur-3xl custom-pulse-slow custom-delay-2500"></div>
      
      <!-- Orbes medianos -->
      <div class="absolute top-1/3 left-1/4 w-48 h-48 bg-gradient-to-br from-blue-500/25 to-blue-400/18 rounded-full blur-2xl custom-float" style="animation-delay: 1.5s; animation-duration: 15s"></div>
      <div class="absolute bottom-1/4 right-1/3 w-40 h-40 bg-gradient-to-br from-blue-400/22 to-blue-300/16 rounded-full blur-2xl custom-float" style="animation-delay: 0.8s; animation-duration: 12s"></div>
      
      <!-- Patrón de cuadrícula mejorado - Igual -->
      <div class="absolute inset-0 opacity-[0.03] w-full">
        <div class="absolute inset-0 w-full" style="
          background-image: 
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 70px 70px;
        "></div>
      </div>
      
      <!-- Efecto de luz de escenario - Igual -->
      <div class="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-blue-900/40 via-blue-800/20 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-800/35 via-blue-700/20 to-transparent"></div>
    </div>

    <!-- Contenedor Principal con Más Espacio - Igual -->
    <div class="w-full max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10 py-8 flex flex-col items-center justify-center">
      
      <!-- Section Header - CON LA NUEVA ESTRUCTURA DE TÍTULO Y SUBTÍTULO -->
      <div class="text-center w-full flex flex-col items-center mb-12 animate-fadeInUp">
        
        <!-- Badge Mejorado - Adaptado a azul -->
        <div class="inline-flex items-center bg-gradient-to-r from-blue-600/40 via-blue-500/35 to-blue-400/30 backdrop-blur-xl rounded-full px-5 py-2.5 mb-6 border border-blue-400/40 shadow-xl shadow-blue-500/25 custom-glow animate-fadeInUp transform-gpu">
          <div class="relative w-2.5 h-2.5 mr-3">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full custom-pulse"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full blur-xs opacity-60"></div>
          </div>
          <span class="text-xs font-bold text-white tracking-wider">💬 TESTIMONIOS REALES</span>
          <div class="ml-3 w-1 h-5 bg-gradient-to-b from-blue-400/40 via-transparent to-blue-300/40 rounded-full"></div>
        </div>
        
        <!-- Título optimizado - NUEVA ESTRUCTURA -->
        <div class="relative w-full mb-6">
          <h2 class="text-5xl md:text-6xl lg:text-7xl font-black text-center w-full tracking-tight leading-snug animate-slideInLeft">
            <span class="relative inline-block">
              <span class="bg-gradient-to-r from-white via-blue-200 to-blue-100 bg-clip-text text-transparent relative z-20">
                Testimonios Clientes
              </span>
              
              <!-- Efectos de subrayado más compactos - Adaptado -->
              <div class="absolute -bottom-1 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full opacity-60 mt-1"></div>
            </span>
          </h2>
        </div>
        
        <!-- Subtítulo optimizado - NUEVA ESTRUCTURA -->
        <div class="relative max-w-3xl mx-auto mb-8 animate-fadeInUp" style="animation-delay: 500ms">
          <p class="text-lg md:text-xl text-white/85 leading-relaxed text-center">
            Más de 
            <span class="relative inline-block mx-1">
              <span class="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 bg-clip-text text-transparent font-bold tracking-tight">
                200 empresas satisfechas
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-blue-300/20 to-blue-200/20 blur-lg -z-10 rounded-full px-1"></div>
              <div class="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400/40 via-blue-300/40 to-blue-200/40 rounded-full"></div>
            </span>
            confían en nosotros para transformar su presencia digital
          </p>
        </div>
      </div>

      <!-- Testimonials Grid con Efectos de Iluminación - Igual que Servicios -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 w-full justify-items-center">
        
        <!-- Testimonio 1 con Efectos de Iluminación -->
        <div class="group relative w-full max-w-sm flex flex-col transform-gpu animate-fadeInUp" style="animation-delay: 200ms">
          <!-- Fondo animado que se ilumina en hover - Adaptado a azul -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-500/15 to-blue-400/12 rounded-2xl transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:custom-glow-hover"></div>
          
          <!-- Efecto de luz adicional en hover - Adaptado a azul -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-blue-300/8 to-blue-200/6 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-sm"></div>
          
          <!-- Tarjeta Principal con Iluminación - Adaptado a azul -->
          <div class="relative bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-blue-700/35 backdrop-blur-xl rounded-2xl border-2 border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 transform group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:shadow-blue-500/20 shadow-lg shadow-blue-500/15 w-full flex flex-col items-center p-8">
            
            <!-- Luz superior que se intensifica en hover - Adaptado a azul -->
            <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent rounded-t-2xl group-hover:via-blue-400/70 transition-all duration-500"></div>
            
            <!-- Header -->
            <div class="flex flex-col items-center mb-6 w-full">
              <!-- Avatar con efectos y brillo en hover - Adaptado a azul -->
              <div class="relative w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-custom-glow">
                <span class="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">MR</span>
                <!-- Glow effect - Adaptado a azul -->
                <div class="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-2xl"></div>
              </div>
              
              <div class="text-center w-full">
                <h4 class="font-black text-white text-xl mb-1 group-hover:text-blue-50 transition-colors duration-300">María Rodríguez</h4>
                <p class="text-blue-200/80 text-sm group-hover:text-blue-100 transition-colors duration-300">Dueña de Boutique Elegante</p>
              </div>
              
              <!-- Línea decorativa - Adaptado a azul -->
              <div class="w-12 h-0.5 bg-gradient-to-r from-blue-400/40 to-blue-300/40 rounded-full mt-3"></div>
            </div>
            
            <!-- Rating Mejorado con efectos hover - Mantenido igual (amarillo para estrellas) -->
            <div class="flex mb-4 justify-center w-full">
              <span v-for="star in 5" :key="star" 
                    class="text-yellow-300 text-lg mx-0.5 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                    style="text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);">
                ⭐
              </span>
            </div>
            
            <!-- Testimonial Text con efectos - Adaptado a azul -->
            <div class="relative mb-6 w-full">
              <!-- Comillas decorativas - Adaptado a azul -->
              <div class="absolute -top-2 -left-2 text-blue-300/30 text-2xl">"</div>
              <div class="absolute -bottom-2 -right-2 text-blue-300/30 text-2xl">"</div>
              
              <p class="text-blue-200/90 leading-relaxed italic text-center text-sm px-2 group-hover:text-white/95 transition-colors duration-300">
                "JMG Desarrollos transformó completamente mi negocio. Mi sitio web no solo es hermoso, sino que ha aumentado mis ventas online en un 300%."
              </p>
            </div>
            
            <!-- Results con efectos de iluminación - Adaptado a azul -->
            <div class="relative w-full">
              <div class="bg-gradient-to-r from-blue-800/40 via-blue-700/30 to-blue-800/40 backdrop-blur-sm rounded-xl p-4 border border-blue-400/30 group-hover:border-blue-300/40 transition-all duration-500 w-full">
                <div class="flex justify-between items-center">
                  <span class="text-blue-200 font-semibold text-xs group-hover:text-blue-100 transition-colors duration-300">RESULTADOS:</span>
                  <span class="text-green-300 font-black text-sm bg-gradient-to-r from-green-400/20 to-emerald-400/10 px-3 py-1 rounded-full border border-green-400/30 group-hover:border-green-300/40 group-hover:from-green-300/30 group-hover:to-emerald-300/15 transition-all duration-300">
                    +300% VENTAS
                  </span>
                </div>
              </div>
              
              <!-- Punto animado que aparece en hover - Adaptado a azul -->
              <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          
          <!-- Efecto de borde que brilla en hover - Adaptado a azul -->
          <div class="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-400/25 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)_inset] transition-all duration-500"></div>
        </div>

        <!-- Testimonio 2 con Efectos de Iluminación -->
        <div class="group relative w-full max-w-sm flex flex-col transform-gpu animate-fadeInUp" style="animation-delay: 400ms">
          <!-- Fondo animado que se ilumina en hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-500/15 to-blue-400/12 rounded-2xl transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:custom-glow-hover"></div>
          
          <!-- Efecto de luz adicional en hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-blue-300/8 to-blue-200/6 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-sm"></div>
          
          <!-- Tarjeta Principal con Iluminación -->
          <div class="relative bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-blue-700/35 backdrop-blur-xl rounded-2xl border-2 border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 transform group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:shadow-blue-500/20 shadow-lg shadow-blue-500/15 w-full flex flex-col items-center p-8">
            
            <!-- Luz superior que se intensifica en hover -->
            <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent rounded-t-2xl group-hover:via-blue-400/70 transition-all duration-500"></div>
            
            <!-- Header -->
            <div class="flex flex-col items-center mb-6 w-full">
              <!-- Avatar con efectos y brillo en hover -->
              <div class="relative w-16 h-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl flex items-center justify-center mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-custom-glow">
                <span class="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">CP</span>
                <!-- Glow effect -->
                <div class="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-2xl"></div>
              </div>
              
              <div class="text-center w-full">
                <h4 class="font-black text-white text-xl mb-1 group-hover:text-blue-50 transition-colors duration-300">Carlos Pérez</h4>
                <p class="text-blue-200/80 text-sm group-hover:text-blue-100 transition-colors duration-300">Director de TechSolutions</p>
              </div>
              
              <!-- Línea decorativa -->
              <div class="w-12 h-0.5 bg-gradient-to-r from-blue-400/40 to-blue-300/40 rounded-full mt-3"></div>
            </div>
            
            <!-- Rating Mejorado con efectos hover -->
            <div class="flex mb-4 justify-center w-full">
              <span v-for="star in 5" :key="star" 
                    class="text-yellow-300 text-lg mx-0.5 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                    style="text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);">
                ⭐
              </span>
            </div>
            
            <!-- Testimonial Text con efectos -->
            <div class="relative mb-6 w-full">
              <!-- Comillas decorativas -->
              <div class="absolute -top-2 -left-2 text-blue-300/30 text-2xl">"</div>
              <div class="absolute -bottom-2 -right-2 text-blue-300/30 text-2xl">"</div>
              
              <p class="text-blue-200/90 leading-relaxed italic text-center text-sm px-2 group-hover:text-white/95 transition-colors duration-300">
                "Trabajamos con JMG para nuestro sitio corporativo y los resultados superaron expectativas. El proceso fue transparente y la entrega puntual."
              </p>
            </div>
            
            <!-- Results con efectos de iluminación -->
            <div class="relative w-full">
              <div class="bg-gradient-to-r from-blue-800/40 via-blue-700/30 to-blue-800/40 backdrop-blur-sm rounded-xl p-4 border border-blue-400/40 group-hover:border-blue-300/50 transition-all duration-500 w-full">
                <div class="flex justify-between items-center">
                  <span class="text-blue-200 font-semibold text-xs group-hover:text-blue-100 transition-colors duration-300">RESULTADOS:</span>
                  <span class="text-green-300 font-black text-sm bg-gradient-to-r from-green-400/20 to-emerald-400/10 px-3 py-1 rounded-full border border-green-400/30 group-hover:border-green-300/40 group-hover:from-green-300/30 group-hover:to-emerald-300/15 transition-all duration-300">
                    +150% LEADS
                  </span>
                </div>
              </div>
              
              <!-- Punto animado que aparece en hover -->
              <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          
          <!-- Efecto de borde que brilla en hover -->
          <div class="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-400/25 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)_inset] transition-all duration-500"></div>
        </div>

        <!-- Testimonio 3 con Efectos de Iluminación -->
        <div class="group relative w-full max-w-sm flex flex-col transform-gpu animate-fadeInUp" style="animation-delay: 600ms">
          <!-- Fondo animado que se ilumina en hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-500/15 to-blue-400/12 rounded-2xl transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:custom-glow-hover"></div>
          
          <!-- Efecto de luz adicional en hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-blue-300/8 to-blue-200/6 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-sm"></div>
          
          <!-- Tarjeta Principal con Iluminación -->
          <div class="relative bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-blue-700/35 backdrop-blur-xl rounded-2xl border-2 border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 transform group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:shadow-blue-500/20 shadow-lg shadow-blue-500/15 w-full flex flex-col items-center p-8">
            
            <!-- Luz superior que se intensifica en hover -->
            <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent rounded-t-2xl group-hover:via-blue-400/70 transition-all duration-500"></div>
            
            <!-- Header -->
            <div class="flex flex-col items-center mb-6 w-full">
              <!-- Avatar con efectos y brillo en hover -->
              <div class="relative w-16 h-16 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 rounded-2xl flex items-center justify-center mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-custom-glow">
                <span class="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">AG</span>
                <!-- Glow effect -->
                <div class="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-2xl"></div>
              </div>
              
              <div class="text-center w-full">
                <h4 class="font-black text-white text-xl mb-1 group-hover:text-blue-50 transition-colors duration-300">Ana García</h4>
                <p class="text-blue-200/80 text-sm group-hover:text-blue-100 transition-colors duration-300">Fundadora de Wellness Center</p>
              </div>
              
              <!-- Línea decorativa -->
              <div class="w-12 h-0.5 bg-gradient-to-r from-blue-400/40 to-blue-300/40 rounded-full mt-3"></div>
            </div>
            
            <!-- Rating Mejorado con efectos hover -->
            <div class="flex mb-4 justify-center w-full">
              <span v-for="star in 5" :key="star" 
                    class="text-yellow-300 text-lg mx-0.5 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                    style="text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);">
                ⭐
              </span>
            </div>
            
            <!-- Testimonial Text con efectos -->
            <div class="relative mb-6 w-full">
              <!-- Comillas decorativas -->
              <div class="absolute -top-2 -left-2 text-blue-300/30 text-2xl">"</div>
              <div class="absolute -bottom-2 -right-2 text-blue-300/30 text-2xl">"</div>
              
              <p class="text-blue-200/90 leading-relaxed italic text-center text-sm px-2 group-hover:text-white/95 transition-colors duration-300">
                "Increíble experiencia de principio a fin. Mi sitio web captura perfectamente la esencia de mi marca y ha sido clave para atraer nuevos clientes."
              </p>
            </div>
            
            <!-- Results con efectos de iluminación -->
            <div class="relative w-full">
              <div class="bg-gradient-to-r from-blue-800/40 via-blue-700/30 to-blue-800/40 backdrop-blur-sm rounded-xl p-4 border border-blue-400/50 group-hover:border-blue-300/60 transition-all duration-500 w-full">
                <div class="flex justify-between items-center">
                  <span class="text-blue-200 font-semibold text-xs group-hover:text-blue-100 transition-colors duration-300">RESULTADOS:</span>
                  <span class="text-green-300 font-black text-sm bg-gradient-to-r from-green-400/20 to-emerald-400/10 px-3 py-1 rounded-full border border-green-400/30 group-hover:border-green-300/40 group-hover:from-green-300/30 group-hover:to-emerald-300/15 transition-all duration-300">
                    +200% CLIENTES
                  </span>
                </div>
              </div>
              
              <!-- Punto animado que aparece en hover -->
              <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          
          <!-- Efecto de borde que brilla en hover -->
          <div class="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-400/25 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)_inset] transition-all duration-500"></div>
        </div>
      </div>

      <!-- Client Logos con Efectos de Iluminación - Igual que Servicios -->
      <div class="text-center w-full flex flex-col items-center mt-8 animate-fadeInUp" style="animation-delay: 800ms">
        <h3 class="text-2xl md:text-3xl font-black mb-8 text-center w-full">
          <span class="bg-gradient-to-r from-blue-300 via-blue-200 to-white bg-clip-text text-transparent">
            Empresas que Confían en Nosotros
          </span>
        </h3>
        
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center justify-items-center w-full">
          <div v-for="i in 6" :key="i" 
               class="group relative transform-gpu">
            
            <!-- Fondo animado que se ilumina en hover -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-600/15 via-blue-500/10 to-blue-400/8 rounded-xl transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            
            <!-- Tarjeta Logo con Iluminación - Adaptado a azul -->
            <div class="relative bg-gradient-to-br from-blue-900/35 via-blue-800/25 to-blue-700/30 backdrop-blur-xl rounded-xl border border-blue-500/25 hover:border-blue-400/40 h-24 flex flex-col items-center justify-center transition-all duration-500 transform group-hover:-translate-y-1 group-hover:shadow-lg shadow-md shadow-blue-500/15 w-full max-w-40">
              
              <!-- Luz superior sutil - Adaptado a azul -->
              <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent rounded-t-xl"></div>
              
              <!-- Logo Container -->
              <div class="relative w-14 h-14 bg-gradient-to-br from-blue-500/40 to-blue-600/40 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <span class="text-white font-bold text-base">C{{ i }}</span>
                <!-- Glow effect -->
                <div class="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent rounded-xl"></div>
              </div>
              
              <!-- Nombre Cliente con efectos hover -->
              <span class="text-white font-semibold text-sm text-center w-full px-2 group-hover:text-blue-50 transition-colors duration-300">Cliente {{ i }}</span>
              
              <!-- Punto decorativo que aparece en hover - Adaptado a azul -->
              <div class="absolute top-2 right-2 w-1.5 h-1.5 bg-blue-300/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <!-- Efecto de borde en hover - Adaptado a azul -->
              <div class="absolute inset-0 rounded-xl border border-transparent group-hover:border-blue-400/15 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Nota adicional con efectos - Adaptado a azul -->
      <div class="text-center mt-12 max-w-2xl mx-auto px-4 animate-fadeInUp" style="animation-delay: 1000ms">
        <div class="relative bg-gradient-to-r from-blue-900/30 via-blue-800/25 to-blue-700/20 backdrop-blur-xl rounded-2xl p-6 border border-blue-400/30 shadow-lg shadow-blue-500/15">
          <p class="text-white/80 text-sm font-medium leading-relaxed">
            <span class="text-blue-300 font-bold group-hover:text-blue-200 transition-colors duration-300">¿Quieres ser nuestro próximo caso de éxito?</span> 
            Únete a las más de 200 empresas que ya transformaron su presencia digital con nosotros. 
            <button 
              @click="scrollToSection('contacto')"
              class="inline-flex items-center text-blue-200 hover:text-blue-100 font-semibold ml-1 transition-colors duration-300 group"
            >
              Contáctanos ahora
              <span class="ml-1.5 transform transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </button>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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
/* Sistema de Animaciones Exactamente Igual al Header y Servicios */
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

/* Efecto especial de iluminación para hover - Adaptado a azul */
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

/* Clase para efecto de iluminación en hover - Exactamente Igual */
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

.backdrop-blur-sm {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
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
  
  .lg\:grid-cols-3 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .lg\:grid-cols-6 {
    grid-template-columns: repeat(4, 1fr);
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
  
  .gap-4 {
    gap: 0.75rem;
  }
  
  .p-8 {
    padding: 1.5rem;
  }
  
  .lg\:grid-cols-6 {
    grid-template-columns: repeat(3, 1fr);
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
  
  .lg\:grid-cols-3, .md\:grid-cols-2 {
    grid-template-columns: 1fr;
  }
  
  .max-w-sm {
    max-width: 100%;
  }
  
  .max-w-40 {
    max-width: 100%;
  }
  
  .gap-6 {
    gap: 0.75rem;
  }
  
  .lg\:grid-cols-6 {
    grid-template-columns: repeat(2, 1fr);
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
  
  .grid-cols-2 {
    grid-template-columns: 1fr;
  }
  
  .gap-4 {
    gap: 0.5rem;
  }
  
  .p-8 {
    padding: 1.25rem;
  }
  
  .h-24 {
    height: 5rem;
  }
  
  .lg\:grid-cols-6, .md\:grid-cols-4 {
    grid-template-columns: repeat(2, 1fr);
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
  
  .lg\:grid-cols-6, .md\:grid-cols-4, .grid-cols-2 {
    grid-template-columns: 1fr;
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