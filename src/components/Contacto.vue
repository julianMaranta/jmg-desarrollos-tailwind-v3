<template>
  <section id="contacto" class="py-8 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden w-full flex justify-center items-center">
    <!-- Animated Background -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Floating Particles -->
      <div v-for="i in 8" :key="i" 
           class="absolute w-1 h-1 bg-white/30 rounded-full"
           :style="{
             left: Math.random() * 100 + '%',
             top: Math.random() * 100 + '%',
             animationDelay: Math.random() * 4 + 's',
             animationDuration: 3 + Math.random() * 2 + 's'
           }"
           :class="{'animate-float': true}">
      </div>
      
      <!-- Gradient Orbs -->
      <div class="absolute -top-12 -right-12 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl animate-pulse" style="animation-duration: 4s"></div>
      <div class="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style="animation-duration: 6s"></div>
    </div>

    <div class="w-full max-w-6xl mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
      <!-- Section Header - CON PADDING PARA LAS LETRAS -->
      <div class="text-center mb-8 w-full flex flex-col items-center">
        <div class="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/20 justify-center">
          <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
          <span class="text-xs font-semibold text-white/80">📞 HABLEMOS DE TU PROYECTO</span>
        </div>
        
        <h2 class="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-white via-blue-200 to-blue-100 bg-clip-text text-transparent text-center w-full pb-1.5 pt-1.5">
          Comencemos Hoy
        </h2>
        <p class="text-base text-white/80 max-w-2xl mx-auto leading-relaxed text-center">
          Contáctanos y recibe una cotización gratuita personalizada para tu proyecto
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-start">
        <!-- Contact Form -->
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg w-full">
          <h3 class="text-xl font-black text-white mb-6 text-center pb-0.7">Solicita Tu Cotización</h3>
          <form class="space-y-4">
            <!-- Name & Email -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="group">
                <label class="block text-white/80 mb-2 font-semibold text-left text-sm pb-0.7">Nombre Completo</label>
                <input 
                  type="text" 
                  class="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-white placeholder-white/50 transition-all duration-300 group-hover:bg-white/10 text-left text-sm"
                  placeholder="Tu nombre"
                >
              </div>
              <div class="group">
                <label class="block text-white/80 mb-2 font-semibold text-left text-sm pb-0.7">Email</label>
                <input 
                  type="email" 
                  class="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-white placeholder-white/50 transition-all duration-300 group-hover:bg-white/10 text-left text-sm"
                  placeholder="tu@email.com"
                >
              </div>
            </div>
            
            <!-- Company -->
            <div class="group">
              <label class="block text-white/80 mb-2 font-semibold text-left text-sm pb-0.7">Empresa</label>
              <input 
                type="text" 
                class="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-white placeholder-white/50 transition-all duration-300 group-hover:bg-white/10 text-left text-sm"
                placeholder="Nombre de tu empresa"
              >
            </div>
            
            <!-- Service -->
            <div class="group">
              <label class="block text-white/80 mb-2 font-semibold text-left text-sm pb-0.7">Servicio de Interés</label>
              <select class="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300 group-hover:bg-white/10 text-left text-sm">
                <option class="bg-blue-900 text-left text-sm pb-0.7">Selecciona un servicio</option>
                <option class="bg-blue-900 text-left text-sm pb-0.7">Plan Inicial</option>
                <option class="bg-blue-900 text-left text-sm pb-0.7">Plan Estándar</option>
                <option class="bg-blue-900 text-left text-sm pb-0.7">Plan Profesional</option>
                <option class="bg-blue-900 text-left text-sm pb-0.7">Plan Empresa</option>
                <option class="bg-blue-900 text-left text-sm pb-0.7">Desarrollo a medida</option>
              </select>
            </div>
            
            <!-- Message -->
            <div class="group">
              <label class="block text-white/80 mb-2 font-semibold text-left text-sm pb-0.7">Mensaje</label>
              <textarea 
                rows="4" 
                class="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-white placeholder-white/50 transition-all duration-300 group-hover:bg-white/10 resize-none text-left text-sm"
                placeholder="Cuéntanos sobre tu proyecto..."
              ></textarea>
            </div>
            
            <!-- Submit Button -->
            <button 
              type="submit" 
              class="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-black py-3 px-6 rounded-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-xl text-base relative overflow-hidden group"
            >
              <span class="relative z-10 flex items-center justify-center">
                Enviar Solicitud
                <span class="ml-2 transform transition-transform duration-500 group-hover:translate-x-1">🚀</span>
              </span>
              <div class="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-[110%] group-hover:translate-x-[110%] transition-transform duration-1000 opacity-0 group-hover:opacity-100"></div>
            </button>
          </form>
        </div>
        
        <!-- Contact Information -->
        <div class="flex flex-col justify-center space-y-6 items-start w-full">
          <!-- Contact Methods -->
          <div class="space-y-6 w-full">
            <!-- Phone -->
            <div class="flex items-start group cursor-pointer transform transition-all duration-500 hover:scale-105 w-full">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mr-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow">
                <span class="text-xl">📞</span>
              </div>
              <div class="flex-1 text-left">
                <h4 class="text-lg font-black text-white mb-1 pb-0.7">Teléfono</h4>
                <p class="text-blue-200 text-base font-semibold pb-0.7">+54 9 11 5527-1430</p>
                <p class="text-white/60 text-xs">Lunes a Viernes 9:00 - 18:00</p>
              </div>
            </div>
            
            <!-- Email -->
            <div class="flex items-start group cursor-pointer transform transition-all duration-500 hover:scale-105 w-full">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl flex items-center justify-center mr-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow">
                <span class="text-xl">✉️</span>
              </div>
              <div class="flex-1 text-left">
                <h4 class="text-lg font-black text-white mb-1 pb-0.7">Email</h4>
                <p class="text-blue-200 text-base font-semibold pb-0.7">contacto@jmgdesarrollos.com</p>
                <p class="text-white/60 text-xs">Respondemos en menos de 24 horas</p>
              </div>
            </div>
            
            <!-- Location -->
            <div class="flex items-start group cursor-pointer transform transition-all duration-500 hover:scale-105 w-full">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-800 to-blue-950 rounded-xl flex items-center justify-center mr-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow">
                <span class="text-xl">📍</span>
              </div>
              <div class="flex-1 text-left">
                <h4 class="text-lg font-black text-white mb-1 pb-0.7">Ubicación</h4>
                <p class="text-blue-200 text-base font-semibold pb-0.7">Buenos Aires, Argentina</p>
                <p class="text-white/60 text-xs">Trabajamos con clientes de todo el mundo</p>
              </div>
            </div>
          </div>
          
          <!-- Quick Contact -->
          <div class="bg-gradient-to-br from-blue-600/20 to-blue-700/20 rounded-2xl p-6 border border-blue-500/30 backdrop-blur-sm w-full flex flex-col items-center text-center">
            <h4 class="text-lg font-black text-white mb-3 text-center w-full pb-0.7">¿Necesitas una solución urgente?</h4>
            <p class="text-white/80 mb-4 text-center w-full max-w-md mx-auto text-sm">
              Contáctanos directamente por WhatsApp para una respuesta inmediata y atención personalizada.
            </p>
            <button class="w-full max-w-xs bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-black py-3 px-6 rounded-xl transition-all duration-500 transform hover:scale-105 shadow hover:shadow-md relative overflow-hidden group">
              <span class="relative z-10 flex items-center justify-center text-sm">
                💬 Chatear por WhatsApp
                <span class="ml-2 transform transition-transform duration-500 group-hover:translate-x-1">→</span>
              </span>
              <div class="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Lógica del componente si es necesaria
</script>