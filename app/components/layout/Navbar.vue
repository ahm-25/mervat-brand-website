<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'التشكيلة', href: '#offers' },
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
  <header 
    class="fixed top-0 inset-x-0 w-full z-50 transition-all duration-500 border-b pointer-events-auto"
    :class="isScrolled 
      ? 'bg-white/98 backdrop-blur-2xl border-black/10 shadow-[0_4px_30px_rgba(0,0,0,0.06)] py-3 sm:py-3.5' 
      : 'bg-white/95 backdrop-blur-xl border-black/5 shadow-soft py-4 sm:py-5'"
  >
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-2 md:grid-cols-3 items-center w-full">
      <!-- Right Column: Brand Logo -->
      <div class="flex items-center justify-start">
        <a
          href="#home"
          class="flex items-center gap-3 group focus:outline-none"
          data-cursor-text="Home"
        >
          <img
            src="/website-logo.jpeg"
            alt="Mervat Brand"
            class="h-10 sm:h-12 w-auto mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
          />
        </a>
      </div>

      <!-- Center Column: Navigation Links (Precisely Centered) -->
      <nav class="hidden md:flex items-center justify-center gap-8 lg:gap-11">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          class="relative font-body text-[15px] lg:text-base font-bold transition-colors duration-300 py-1 text-[#1a1a1a] hover:text-[#B59021] group tracking-wide"
          data-cursor-text="Go"
        >
          {{ link.label }}
          <span class="absolute inset-x-0 bottom-0 h-[2px] bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center" />
        </a>
      </nav>

      <!-- Left Column: Balanced Concierge Pill & Mobile Toggle -->
      <div class="flex items-center justify-end gap-4">
        <a
          href="#contact"
          class="hidden md:inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-black/[0.03] hover:bg-[#030303] text-[#1a1a1a] hover:text-[#D4AF37] border border-black/5 hover:border-[#030303] text-xs font-body font-bold transition-all duration-300 shadow-soft"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>خدمة العملاء</span>
        </a>

        <!-- Mobile Menu Hamburger Button -->
        <button
          type="button"
          class="md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 focus:outline-none text-primary hover:bg-black/5"
          aria-label="Toggle Navigation Menu"
          @click="toggleMobileMenu"
        >
          <svg v-if="!isMobileMenuOpen" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg v-else class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

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
            class="font-body text-lg font-bold text-primary hover:text-[#B59021] py-3 border-b border-black/5 transition-colors"
            @click="isMobileMenuOpen = false"
          >
            {{ link.label }}
          </a>

        </nav>
      </div>
    </Transition>
  </header>
</template>
