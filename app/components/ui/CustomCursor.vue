<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const cursorX = ref(0)
const cursorY = ref(0)
const dotX = ref(0)
const dotY = ref(0)
const isHovering = ref(false)
const hoverText = ref('')
const isHidden = ref(true)

let requestRef: number

const updateMousePosition = (e: MouseEvent) => {
  cursorX.value = e.clientX
  cursorY.value = e.clientY
  isHidden.value = false
  
  const target = e.target as HTMLElement
  const interactiveEl = target.closest('a, button, [data-cursor], .group, input')
  
  if (interactiveEl) {
    isHovering.value = true
    const text = interactiveEl.getAttribute('data-cursor-text')
    if (text) {
      hoverText.value = text
    } else {
      hoverText.value = ''
    }
  } else {
    isHovering.value = false
    hoverText.value = ''
  }
}

const handleMouseLeave = () => {
  isHidden.value = true
}

const handleMouseEnter = () => {
  isHidden.value = false
}

const animate = () => {
  dotX.value += (cursorX.value - dotX.value) * 0.15
  dotY.value += (cursorY.value - dotY.value) * 0.15
  requestRef = requestAnimationFrame(animate)
}

onMounted(() => {
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mouseenter', handleMouseEnter)
    dotX.value = window.innerWidth / 2
    dotY.value = window.innerHeight / 2
    cursorX.value = window.innerWidth / 2
    cursorY.value = window.innerHeight / 2
    requestRef = requestAnimationFrame(animate)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('mousemove', updateMousePosition)
    window.removeEventListener('mouseleave', handleMouseLeave)
    window.removeEventListener('mouseenter', handleMouseEnter)
    cancelAnimationFrame(requestRef)
  }
})
</script>

<template>
  <div class="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
    <!-- Central Dot -->
    <div 
      class="fixed w-1.5 h-1.5 bg-[#D4AF37] rounded-full mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
      :style="{ left: `${cursorX}px`, top: `${cursorY}px`, opacity: isHidden ? 0 : 1 }"
    ></div>
    
    <!-- Outer Ring / Text Label -->
    <div 
      class="fixed flex items-center justify-center rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out pointer-events-none"
      :class="[
        hoverText ? 'w-20 h-20 bg-primary/95 text-white backdrop-blur-md shadow-2xl border border-white/10 scale-100' : 
        (isHovering ? 'w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/30 scale-100' : 'w-8 h-8 border border-[#D4AF37]/50 scale-100')
      ]"
      :style="{ 
        left: `${dotX}px`, 
        top: `${dotY}px`,
        opacity: isHidden ? 0 : 1 
      }"
    >
      <span v-if="hoverText" class="text-[9px] font-heading uppercase tracking-[0.2em] font-semibold animate-fade-in text-center px-1 leading-tight">
        {{ hoverText }}
      </span>
    </div>
  </div>
</template>

<style>
@media (pointer: fine) {
  body {
    cursor: none;
  }
  a, button, [role="button"], input, select, textarea, .cursor-pointer {
    cursor: none !important;
  }
}
</style>
