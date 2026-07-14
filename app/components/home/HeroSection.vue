<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
})

const scrollToNext = () => {
  if (typeof document !== 'undefined') {
    const nextSection = document.getElementById('about') || document.getElementById('offers')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<template>
  <section
    id="home"
    class="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary"
  >
    <!-- Immersive Background Video / Image -->
    <div class="absolute inset-0 w-full h-full z-0 overflow-hidden">
      <!-- Dark overlay to ensure text readability -->
      <div class="absolute inset-0 bg-black/60 z-10 transition-opacity duration-[2000ms]" :class="isLoaded ? 'opacity-60' : 'opacity-100'"></div>
      
      <!-- We use a high-res image acting as a video placeholder, with a slow scale effect -->
      <img
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop"
        alt="Luxury Fashion Campaign"
        class="w-full h-full object-cover object-top transform-gpu transition-all duration-[20000ms] ease-out"
        :class="isLoaded ? 'scale-105' : 'scale-125 blur-sm'"
      />
    </div>

    <!-- Editorial Typography Layer -->
    <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center pt-24 md:pt-32">
      
      <!-- Overline -->
      <div class="overflow-hidden mb-6">
        <span 
          class="block text-[10px] sm:text-xs font-body font-bold tracking-[0.4em] uppercase text-white/90 transform transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300"
          :class="isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'"
        >
          Paris &bull; Beirut &bull; Cairo
        </span>
      </div>

      <!-- Main Headline (Kinetic Typography Style) -->
      <h1 class="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] text-white font-normal tracking-tighter uppercase flex flex-col items-center drop-shadow-2xl">
        <div class="overflow-hidden">
          <span 
            class="block transform transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-500"
            :class="isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'"
          >
            Mervat
          </span>
        </div>
        <div class="overflow-hidden flex items-center gap-4 lg:gap-8 mt-2">
          <span 
            class="block italic font-light text-[#D4AF37] transform transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-700 drop-shadow-xl"
            :class="isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'"
          >
            Maison
          </span>
          <span 
            class="block transform transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-900"
            :class="isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'"
          >
            Brand
          </span>
        </div>
      </h1>

      <!-- Description -->
      <div class="overflow-hidden mt-10 max-w-lg">
        <p 
          class="font-body text-sm sm:text-base text-white/90 font-light leading-relaxed transform transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[1100ms] drop-shadow-md"
          :class="isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'"
        >
          The premier luxury destination crafted for women who celebrate sophisticated elegance, haute couture, and bespoke accessories.
        </p>
      </div>

      <!-- Magnetic Button (Data attribute triggers custom cursor) -->
      <div class="mt-12 overflow-hidden">
        <div
          class="transform transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[1300ms]"
          :class="isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'"
        >
          <a 
            href="#gallery" 
            data-cursor-text="Explore"
            class="inline-flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-white/30 text-white hover:bg-white hover:text-primary transition-colors duration-500 font-heading text-sm sm:text-base uppercase tracking-widest"
          >
            Explore
          </a>
        </div>
      </div>

    </div>

    <!-- Scroll Down Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 cursor-pointer group" @click="scrollToNext" data-cursor-text="Scroll">
      <div class="w-[1px] h-16 bg-white/20 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full bg-white transform -translate-y-full animate-[scroll-down_2s_ease-in-out_infinite]" />
      </div>
      <span class="font-body text-[9px] uppercase tracking-[0.4em] text-white/50 group-hover:text-white transition-colors">
        Scroll
      </span>
    </div>
  </section>
</template>

<style scoped>
@keyframes scroll-down {
  0% { transform: translateY(-100%); }
  50% { transform: translateY(0); }
  100% { transform: translateY(100%); }
}
</style>
