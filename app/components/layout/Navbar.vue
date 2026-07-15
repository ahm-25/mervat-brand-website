<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'التشكيلة', href: '#offers' },
  { label: 'المعرض', href: '#gallery' },
  { label: 'الفروع', href: '#branches' },
  { label: 'تواصل معنا', href: '#contact' }
]

const handleScroll = () => {
  if (typeof window !== 'undefined') {
    isScrolled.value = window.scrollY > 50
  }
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll)
  }
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <div 
    class="fixed top-0 start-0 w-full z-50 flex justify-center px-4 sm:px-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
    :class="isScrolled ? 'pt-4' : 'pt-6'"
  >
    <header
      class="pointer-events-auto flex items-center justify-between w-full max-w-5xl rounded-full px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border"
      :class="isScrolled 
        ? 'bg-white/95 backdrop-blur-xl border-[#D4AF37]/30 shadow-luxury' 
        : 'bg-white/70 backdrop-blur-md border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:bg-white/90'"
    >
      <!-- Logo -->
      <a
        href="#home"
        class="flex items-center gap-3 group focus:outline-none"
        data-cursor-text="Home"
      >
        <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary flex items-center justify-center text-[#D4AF37] font-heading font-semibold text-lg tracking-tighter shadow-sm transition-transform duration-500 group-hover:scale-105">
          2M
        </div>
        <div class="hidden sm:flex flex-col">
          <span class="font-heading text-lg font-medium tracking-tight leading-none text-primary transition-colors duration-300">
            2M
          </span>
          <span class="text-[8px] uppercase tracking-[0.3em] text-[#B59021] font-semibold mt-0.5">
            براند أوتليت
          </span>
        </div>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center space-x-8">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          class="relative font-body text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 py-1 font-semibold text-primary/70 hover:text-primary group"
          data-cursor-text="Go"
        >
          {{ link.label }}
          <span class="absolute inset-x-0 bottom-0 h-[1px] bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-start" />
        </a>
      </nav>

      <!-- Desktop Action CTA -->
      <div class="hidden md:flex items-center gap-4">
        <a href="#gallery" data-cursor-text="تصفح">
          <span class="px-5 py-2.5 rounded-full bg-primary text-white text-[9px] font-body font-bold uppercase tracking-[0.25em] hover:bg-[#B59021] hover:shadow-luxury transition-all duration-500">
            تصفح
          </span>
        </a>
      </div>

      <!-- Mobile Menu Hamburger Button -->
      <button
        type="button"
        class="md:hidden w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 focus:outline-none text-primary hover:bg-black/5"
        aria-label="Toggle Navigation Menu"
        @click="toggleMobileMenu"
      >
        <svg v-if="!isMobileMenuOpen" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <svg v-else class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </header>

    <!-- Mobile Drawer Menu -->
    <Transition
      enter-active-class="transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      enter-from-class="opacity-0 -translate-y-4 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-4 scale-95"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-full start-4 end-4 mt-2 bg-white/95 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-2xl py-6 px-6 pointer-events-auto"
      >
        <nav class="flex flex-col space-y-2">
          <a
            v-for="link in navLinks"
            :key="link.label"
            :href="link.href"
            class="font-heading text-xl font-medium text-primary hover:text-[#B59021] py-3 border-b border-black/5 transition-colors"
            @click="isMobileMenuOpen = false"
          >
            {{ link.label }}
          </a>
          <div class="pt-6 flex flex-col gap-3">
            <a href="#gallery" @click="isMobileMenuOpen = false" class="w-full text-center px-5 py-3 rounded-full bg-primary text-white text-[10px] font-body font-bold uppercase tracking-[0.25em] hover:bg-[#B59021] transition-colors">
              تصفح التشكيلة
            </a>
          </div>
        </nav>
      </div>
    </Transition>
  </div>
</template>
