<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const branches = [
  {
    id: 1,
    city: 'شرم الشيخ - Sharm El Sheikh',
    name: 'فرع جليله سيتى خليج نعمه',
    address: 'جليله سيتي - خليج نعمه',
    image: '/images/480dc117-63f8-42c9-8f35-939c0b0ff629.jfif'
  },
  {
    id: 2,
    city: 'شرم الشيخ - Sharm El Sheikh',
    name: 'فرع طريق السلام',
    address: 'طريق السلام امام مستشفى شرم الدولى مول الشريف',
    image: '/images/af22ec37-afcc-4a69-9ddc-d850beda4ba4.jfif'
  },
  {
    id: 3,
    city: 'القاهرة - Cairo',
    name: 'فرع القاهرة - مدينة نصر',
    address: 'القاهرة - مدينة نصر',
    image: '/images/d32a01ee-5f94-4d6b-b1e3-e5d810f31a90.jfif'
  }
]

const activeBranch = ref<number | null>(null)
const mouseX = ref(0)
const mouseY = ref(0)
const imgX = ref(0)
const imgY = ref(0)

let requestRef: number

const updateMousePosition = (e: MouseEvent) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}

const animate = () => {
  // Smooth lerp for the floating image
  imgX.value += (mouseX.value - imgX.value) * 0.1
  imgY.value += (mouseY.value - imgY.value) * 0.1
  requestRef = requestAnimationFrame(animate)
}

onMounted(() => {
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', updateMousePosition)
    imgX.value = window.innerWidth / 2
    imgY.value = window.innerHeight / 2
    requestRef = requestAnimationFrame(animate)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('mousemove', updateMousePosition)
    cancelAnimationFrame(requestRef)
  }
})
</script>

<template>
  <section class="py-32 lg:py-48 bg-primary relative overflow-hidden border-t border-white/10 text-white">
    
    <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Minimalist Header -->
      <div class="mb-20 sm:mb-32">
        <span class="text-[10px] font-body uppercase tracking-[0.5em] text-[#B59021] font-semibold block mb-6">
          Global Presence
        </span>
        <h2 class="font-heading text-6xl sm:text-7xl lg:text-8xl font-normal tracking-tighter">
          Boutiques.
        </h2>
      </div>

      <!-- Editorial Hover List -->
      <div class="relative w-full border-t border-white/10">
        <div 
          v-for="(branch, idx) in branches" 
          :key="branch.id"
          class="group border-b border-white/10 py-12 sm:py-20 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-8 transition-colors duration-700 hover:bg-white/5 px-4 -mx-4 sm:px-8 sm:-mx-8"
          @mouseenter="activeBranch = idx"
          @mouseleave="activeBranch = null"
          data-cursor-text="Visit"
        >
          <div class="flex-1 flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-12">
            <span class="text-[10px] font-mono text-[#D4AF37] tracking-widest block opacity-70">
              0{{ idx + 1 }}
            </span>
            <h3 class="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal group-hover:translate-x-4 sm:group-hover:translate-x-8 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
              {{ branch.name }}
            </h3>
          </div>
          
          <div class="flex-1 md:text-right">
            <span class="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37] block mb-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
              {{ branch.city }}
            </span>
            <p class="font-body text-sm sm:text-base text-gray-400 font-light group-hover:text-white transition-colors duration-500">
              {{ branch.address }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Image Portal (Desktop only) -->
    <div 
      class="hidden md:block fixed pointer-events-none z-40 w-[350px] h-[450px] overflow-hidden rounded-sm shadow-2xl transition-all duration-500 ease-out transform origin-center mix-blend-screen"
      :style="{
        left: `${imgX}px`,
        top: `${imgY}px`,
        opacity: activeBranch !== null ? 1 : 0,
        transform: `translate(-50%, -50%) scale(${activeBranch !== null ? 1 : 0.85}) rotate(${(mouseX - imgX) * 0.03}deg)`
      }"
    >
      <div 
        v-for="(branch, idx) in branches" 
        :key="'img-'+branch.id"
        class="absolute inset-0 w-full h-full transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        :class="activeBranch === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'"
      >
        <img 
          :src="branch.image" 
          :alt="branch.name"
          class="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-out scale-110" 
          :class="activeBranch === idx ? 'scale-100' : 'scale-110'"
        />
        <!-- Cinematic dark gradient over image -->
        <div class="absolute inset-0 bg-black/20"></div>
      </div>
    </div>
  </section>
</template>
