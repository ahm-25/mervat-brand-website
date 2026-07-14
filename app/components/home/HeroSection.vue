<script setup lang="ts">
import { ref } from 'vue'
import { useParallax } from '~/composables/useParallax'
import { useAnimateOnScroll } from '~/composables/useAnimateOnScroll'

const { elementRef: collageRef, offset: collageOffset } = useParallax(0.12)
const { elementRef: ownerRef, offset: ownerOffset } = useParallax(0.08)

const stats = [
  { value: '2+', label: 'Two Branches', description: 'Flagship & Outlet Destinations' },
  { value: '10k+', label: 'Thousands of Customers', description: 'Trusted by Discerning Women' },
  { value: '50+', label: 'Premium Brands', description: 'Curated Global Haute Couture' }
]

const scrollToNext = () => {
  if (typeof document !== 'undefined') {
    const nextSection = document.getElementById('about') || document.getElementById('gallery')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<template>
  <section
    id="home"
    class="relative min-h-[92vh] lg:min-h-[96vh] w-full flex items-center bg-gradient-to-b from-background via-[#FAF9F6] to-secondary/50 pt-12 pb-24 lg:py-20"
  >
    <!-- Luxury Fashion Collage Background & Ambient Glows (Contained) -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <!-- Background Collage Image with Opacity & Parallax -->
      <div
        :ref="el => { if (el) collageRef = el as HTMLElement }"
        class="absolute -right-20 -top-20 w-[600px] lg:w-[900px] h-[600px] lg:h-[900px] opacity-15 sm:opacity-20 transition-transform duration-700 ease-out rounded-full filter blur-[2px]"
        :style="{ transform: `translate3d(0, ${collageOffset}px, 0)` }"
      >
        <img
          src="/images/luxury_fashion_collage.png"
          alt="Luxury fashion collage background"
          class="w-full h-full object-cover rounded-full"
        />
      </div>

      <!-- Subtle Radial Gold Glows -->
      <div class="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      <div class="absolute bottom-1/3 right-1/4 w-[30rem] h-[30rem] rounded-full bg-[#F5F2EE] blur-2xl" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 xl:gap-16 items-center">
        
        <!-- Left Column: Editorial Headline & Actions -->
        <div class="lg:col-span-6 xl:col-span-7 flex flex-col items-start space-y-8 animate-fade-in">
          
          <!-- Overline Badge -->
          <div class="flex items-center gap-3">
            <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-[#B59021] text-xs font-body font-semibold tracking-widest uppercase shadow-sm">
              <span class="w-1.5 h-1.5 rounded-full bg-[#B59021] animate-pulse" />
              Haute Couture & Exclusive Outlets
            </span>
            <span class="hidden sm:inline-block text-xs font-heading italic text-muted-text">
              Est. Paris & Beirut
            </span>
          </div>

          <!-- Main Luxury Headline -->
          <div class="space-y-4">
            <h1 class="font-heading text-5xl sm:text-6xl md:text-7xl xl:text-[5.5rem] font-normal tracking-tight text-primary leading-[1.05]">
              The Joy Of <br class="hidden sm:inline" />
              <span class="italic font-light text-gradient-gold">Shopping</span>
            </h1>
            <p class="font-body text-base sm:text-lg lg:text-xl text-muted-text max-w-xl font-light leading-relaxed pt-2">
              Step into <strong class="font-medium text-primary">Mervat Brand</strong> — the premier luxury destination crafted for women who celebrate sophisticated elegance. Explore curated women's fashion, bespoke accessories, designer handbags, luminous makeup collections, and exclusive premium outlet discoveries.
            </p>
          </div>

          <!-- Call to Actions -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
            <a href="#gallery" class="w-full sm:w-auto">
              <UiButton variant="luxury-gold" size="lg" block>
                Explore Collection
              </UiButton>
            </a>
            <a href="#contact" class="w-full sm:w-auto">
              <UiButton variant="outline" size="lg" block>
                Contact Us
              </UiButton>
            </a>
          </div>

          <!-- Floating Statistics Strip -->
          <div class="mt-8 pt-10 border-t border-muted-border/80 w-full grid grid-cols-3 gap-6 sm:gap-10">
            <div
              v-for="(stat, idx) in stats"
              :key="stat.label"
              class="flex flex-col space-y-1.5 group"
            >
              <div class="flex items-baseline gap-1">
                <span class="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                  {{ stat.value }}
                </span>
              </div>
              <span class="font-body text-xs sm:text-sm font-medium tracking-wide text-primary">
                {{ stat.label }}
              </span>
              <span class="hidden sm:block text-[11px] text-muted-text leading-relaxed font-light">
                {{ stat.description }}
              </span>
            </div>
          </div>
        </div>

        <!-- Right Column: Perfectly Centered Owner Portrait & Safe Floating Cards -->
        <div class="lg:col-span-6 xl:col-span-5 flex justify-center items-center animate-fade-in mt-12 lg:mt-0 py-8 lg:py-6">
          
          <!-- Wrapper box holding portrait and floating cards within safe margins -->
          <div class="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/5] mx-auto my-4">
            
            <!-- Main Owner Portrait Frame -->
            <div
              :ref="el => { if (el) ownerRef = el as HTMLElement }"
              class="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-secondary shadow-luxury border border-[#D4AF37]/30 group transition-transform duration-700 ease-out z-10"
              :style="{ transform: `translate3d(0, ${ownerOffset}px, 0)` }"
            >
              <!-- Collage / Texture Behind Owner Portrait inside frame -->
              <div class="absolute inset-0 opacity-15 mix-blend-overlay">
                <img src="/images/luxury_fashion_collage.png" alt="Texture" class="w-full h-full object-cover" />
              </div>

              <!-- Owner Image -->
              <img
                src="/images/mervat_owner_portrait.png"
                alt="Mervat — Founder & Creative Director"
                class="w-full h-full object-cover object-top transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-105"
              />

              <!-- Subtle Shimmer Overlay on Hover -->
              <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-75" />

              <!-- Bottom Owner Name Badge inside frame (safely clear of bottom-right outer card) -->
              <div class="absolute bottom-5 left-5 right-12 sm:right-16 glass-card bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-white/60 flex items-center justify-between shadow-soft z-20">
                <div>
                  <h3 class="font-heading text-base sm:text-lg font-medium text-primary leading-none">
                    Mervat
                  </h3>
                  <p class="text-[10px] sm:text-[11px] font-body text-[#B59021] uppercase tracking-widest font-semibold mt-1">
                    Founder & Creative Director
                  </p>
                </div>
                <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary text-accent flex items-center justify-center font-heading font-bold shadow-sm flex-shrink-0">
                  M
                </div>
              </div>
            </div>

            <!-- Floating Decorative Glass Stat Card (Top Left Corner of Frame) -->
            <div class="absolute -top-6 -left-4 sm:-left-8 glass-card bg-white/95 backdrop-blur-xl py-3 px-4 sm:px-5 rounded-2xl border border-[#D4AF37]/30 shadow-luxury animate-float flex items-center gap-3.5 z-30 max-w-[240px] sm:max-w-[260px]">
              <div class="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-[#B59021] flex-shrink-0">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div>
                <span class="font-body text-[10px] font-bold uppercase tracking-widest text-[#B59021] block">Exclusive Outlet</span>
                <span class="font-heading text-xs sm:text-sm font-semibold text-primary block mt-0.5 leading-snug">Up to 40% Off Designer Items</span>
              </div>
            </div>

            <!-- Floating Decorative Card (Bottom Right Corner of Frame) -->
            <div class="absolute -bottom-6 -right-4 sm:-right-8 glass-dark py-3.5 px-4 sm:px-5 rounded-2xl border border-white/20 shadow-luxury flex items-center gap-3.5 z-30 max-w-[240px] sm:max-w-[260px]">
              <div class="w-10 h-10 rounded-full bg-accent text-primary flex items-center justify-center font-heading font-bold text-lg flex-shrink-0">
                ★
              </div>
              <div>
                <span class="font-heading text-xs sm:text-sm font-medium text-white block leading-snug">Award-Winning</span>
                <span class="font-body text-[10px] sm:text-[11px] text-gray-300 block mt-0.5 leading-normal">Women's Fashion & Handbag Boutique</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

    <!-- Scroll Down Indicator -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group" @click="scrollToNext">
      <span class="font-body text-[10px] uppercase tracking-[0.3em] text-muted-text font-medium group-hover:text-primary transition-colors">
        Scroll To Explore
      </span>
      <div class="w-6 h-10 rounded-full border-2 border-primary/30 group-hover:border-accent flex items-start justify-center p-1 transition-colors duration-300">
        <div class="w-1.5 h-2.5 bg-accent rounded-full animate-bounce" />
      </div>
    </div>
  </section>
</template>
