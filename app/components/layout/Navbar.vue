<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Branches', href: '#branches' },
  { label: 'Contact', href: '#contact' }
]

const handleScroll = () => {
  if (typeof window !== 'undefined') {
    isScrolled.value = window.scrollY > 20
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
    :class="[
      'sticky top-0 z-50 w-full transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)',
      isScrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-soft py-4'
        : 'bg-transparent border-b border-transparent py-6'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <!-- Logo -->
      <a
        href="#home"
        class="flex items-center gap-3 group focus:outline-none"
      >
        <div
          class="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary flex items-center justify-center text-accent font-heading font-semibold text-xl tracking-tighter shadow-luxury border border-accent/40 transition-transform duration-500 group-hover:scale-105"
        >
          M
        </div>
        <div class="flex flex-col">
          <span
            :class="[
              'font-heading text-xl sm:text-2xl font-normal tracking-tight transition-colors duration-300 leading-none',
              isScrolled ? 'text-primary' : 'text-primary'
            ]"
          >
            MERVAT BRAND
          </span>
          <span class="text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-[#B59021] font-medium mt-1">
            Luxury & Accessories
          </span>
        </div>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center space-x-8 lg:space-x-10">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          :class="[
            'relative font-body text-sm tracking-widest uppercase transition-colors duration-300 py-1 font-medium group',
            isScrolled ? 'text-primary hover:text-accent' : 'text-primary hover:text-[#B59021]'
          ]"
        >
          {{ link.label }}
          <!-- Gold Hover Underline Effect -->
          <span class="absolute inset-x-0 bottom-0 h-[1.5px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </a>
      </nav>

      <!-- Desktop Action & Contact CTA -->
      <div class="hidden md:flex items-center gap-4">
        <a href="#contact">
          <UiButton
            :variant="isScrolled ? 'luxury-gold' : 'outline'"
            size="sm"
          >
            Explore Collection
          </UiButton>
        </a>
      </div>

      <!-- Mobile Menu Hamburger Button -->
      <button
        type="button"
        class="md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 focus:outline-none"
        :class="isScrolled ? 'text-primary hover:bg-secondary' : 'text-primary hover:bg-white/50'"
        aria-label="Toggle Navigation Menu"
        @click="toggleMobileMenu"
      >
        <svg
          v-if="!isMobileMenuOpen"
          class="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <svg
          v-else
          class="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Drawer Menu -->
    <Transition
      enter-active-class="transition duration-400 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-[#D4AF37]/30 shadow-luxury py-6 px-6"
      >
        <nav class="flex flex-col space-y-4">
          <a
            v-for="link in navLinks"
            :key="link.label"
            :href="link.href"
            class="font-heading text-xl font-medium text-primary hover:text-accent py-2 border-b border-muted transition-colors"
            @click="isMobileMenuOpen = false"
          >
            {{ link.label }}
          </a>
          <div class="pt-4 flex flex-col gap-3">
            <a href="#gallery" @click="isMobileMenuOpen = false">
              <UiButton variant="luxury-gold" size="md" block>
                Explore Collection
              </UiButton>
            </a>
            <a href="#contact" @click="isMobileMenuOpen = false">
              <UiButton variant="outline" size="md" block>
                Contact Us
              </UiButton>
            </a>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>
