<script setup lang="ts">
import { ref } from 'vue'

const offers = [
  {
    title: "أزياء نسائية",
    description: "مجموعة مختارة بعناية من الملابس الأنيقة المصممة للمرأة العصرية، تقدم أزياء راقية بأسعار أوتليت مذهلة.",
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
    number: '01'
  },
  {
    title: "إكسسوارات راقية",
    description: "مجموعة مذهلة من الإكسسوارات لتكملة إطلالتك، مصممة لتضيف اللمسة النهائية المثالية لأي زي.",
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
    number: '02'
  },
  {
    title: "حقائب فاخرة",
    description: "تشكيلة متميزة من الحقائب الأنيقة، تجمع بين التصميم الراقي والعملية اليومية.",
    image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1200&auto=format&fit=crop',
    number: '03'
  },
  {
    title: "مكياج وعناية",
    description: "اكتشفي مجموعتنا الرائعة من مستحضرات التجميل الأساسية لتمنحك إشراقة متألقة وراقية كل يوم.",
    image: 'https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=1200&auto=format&fit=crop',
    number: '04'
  }
]

const activeIndex = ref(0)
</script>

<template>
  <section id="offers" class="bg-background py-32 overflow-hidden border-t border-muted-border/30">
    <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-24">
        <div class="space-y-4">
          <span class="text-xs font-body uppercase tracking-[0.4em] text-[#B59021] font-semibold block">
            التشكيلة
          </span>
          <h2 class="font-heading text-5xl sm:text-6xl lg:text-7xl font-medium text-primary tracking-tight leading-none">
            ما نقدمه لكِ
          </h2>
        </div>
        <p class="text-muted-text text-sm sm:text-base max-w-sm font-light leading-relaxed pb-2">
          اكتشفي عالمًا من الفخامة بأسعار مناسبة. من الملابس الأنيقة إلى أدوات التجميل الرائعة، لدينا كل ما تحتاجينه في مكان واحد.
        </p>
      </div>

      <!-- Hover Accordion Grid -->
      <div class="flex flex-col lg:flex-row h-[700px] lg:h-[600px] xl:h-[700px] w-full gap-2 sm:gap-4">
        <div 
          v-for="(offer, idx) in offers" 
          :key="idx"
          class="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex-1 border border-muted-border/50"
          :class="activeIndex === idx ? 'lg:flex-[3.5] flex-[3] shadow-2xl' : 'lg:flex-[0.6] flex-1 hover:flex-[0.8]'"
          @mouseenter="activeIndex = idx"
          data-cursor-text="تصفح"
        >
          <!-- Background Image -->
          <img 
            :src="offer.image" 
            :alt="offer.title"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            :class="activeIndex === idx ? 'scale-100' : 'scale-110 blur-[1px] grayscale-[30%] opacity-80'"
          />
          
          <!-- Gradient Overlays -->
          <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90 transition-opacity duration-1000" :class="activeIndex === idx ? 'opacity-80' : 'opacity-95'"></div>
          <div class="absolute inset-0 bg-primary mix-blend-overlay transition-opacity duration-1000" :class="activeIndex === idx ? 'opacity-20' : 'opacity-60'"></div>
          
          <!-- Content Container -->
          <div class="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 lg:p-10 pointer-events-none">
            <!-- Number Indicator -->
            <div class="font-mono text-white/50 text-lg sm:text-xl font-light">
              {{ offer.number }}
            </div>
            
            <!-- Text & Titles -->
            <div 
              class="transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform"
              :class="activeIndex === idx ? 'translate-y-0' : 'translate-y-8 lg:translate-y-0 lg:absolute lg:bottom-10 lg:start-6'"
            >
              <h3 
                class="font-heading text-2xl sm:text-3xl lg:text-5xl font-medium text-white mb-2 sm:mb-4 whitespace-nowrap drop-shadow-lg transition-all duration-[1200ms]"
                :class="activeIndex === idx ? 'tracking-normal' : 'lg:tracking-widest lg:[writing-mode:vertical-rl] lg:rotate-180'"
              >
                {{ offer.title }}
              </h3>
              
              <!-- Expanding Details -->
              <div 
                class="overflow-hidden transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                :class="activeIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 lg:hidden'"
              >
                <p class="font-body text-xs sm:text-sm text-white/80 font-light max-w-sm leading-relaxed mt-2 sm:mt-4">
                  {{ offer.description }}
                </p>
                <div class="mt-4 sm:mt-8">
                  <span class="inline-flex items-center text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                    تصفح التشكيلة &larr;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>
