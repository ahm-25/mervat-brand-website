<script setup lang="ts">
import { ref, computed } from 'vue'
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const categories = [
  'الكل',
  'ملابس',
  'إكسسوارات',
  'حقائب',
  'مكياج',
  'المتجر',
  'لحظات العملاء'
]

const activeCategory = ref('الكل')

// Sample high-quality images for a premium luxury look (Zara/Dior aesthetic)
const portfolioItems = ref([
  {
    id: 1,
    category: 'ملابس',
    title: 'تشكيلة الربيع الجديدة',
    image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1200&auto=format&fit=crop',
    aspectClass: 'aspect-[3/4]'
  },
  {
    id: 2,
    category: 'حقائب',
    title: 'حقيبة يد جلدية فاخرة',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop',
    aspectClass: 'aspect-square'
  },
  {
    id: 3,
    category: 'إكسسوارات',
    title: 'ساعة كلاسيكية بسوار جلدي',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1200&auto=format&fit=crop',
    aspectClass: 'aspect-[4/5]'
  },
  {
    id: 4,
    category: 'ملابس',
    title: 'فساتين وأزياء مختارة',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1200&auto=format&fit=crop',
    aspectClass: 'aspect-[2/3]'
  },
  {
    id: 5,
    category: 'مكياج',
    title: 'مجموعة المكياج الأساسية',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
    aspectClass: 'aspect-square'
  },
  {
    id: 6,
    category: 'المتجر',
    title: 'فرعنا الرئيسي المستوحى من باريس',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1200&auto=format&fit=crop',
    aspectClass: 'aspect-video'
  },
  {
    id: 7,
    category: 'لحظات العملاء',
    title: 'تجربة تسوق مميزة',
    image: 'https://images.unsplash.com/photo-1560243563-062bfc001d68?q=80&w=1200&auto=format&fit=crop',
    aspectClass: 'aspect-[4/5]'
  },
  {
    id: 8,
    category: 'حقائب',
    title: 'حقيبة يد بنقشة زهرية',
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1200&auto=format&fit=crop',
    aspectClass: 'aspect-[3/4]'
  },
  {
    id: 9,
    category: 'إكسسوارات',
    title: 'تشكيلة الإكسسوارات المميزة',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1200&auto=format&fit=crop',
    aspectClass: 'aspect-square'
  }
])

const filteredItems = computed(() => {
  if (activeCategory.value === 'الكل') {
    return portfolioItems.value
  }
  return portfolioItems.value.filter(item => item.category === activeCategory.value)
})

// Lightbox state
const lightboxOpen = ref(false)
const currentIndex = ref(0)

const openLightbox = (index: number) => {
  // Find the actual index in the filtered array
  currentIndex.value = index
  lightboxOpen.value = true
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden' // Prevent scrolling
  }
}

const closeLightbox = () => {
  lightboxOpen.value = false
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
}

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % filteredItems.value.length
}

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + filteredItems.value.length) % filteredItems.value.length
}
</script>

<template>
  <section id="gallery" class="py-32 bg-background relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-6">
        <span class="text-xs font-body uppercase tracking-[0.3em] text-[#B59021] font-semibold block">
          المجموعات والمعرض
        </span>
        <h2 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium text-primary tracking-tight">
          مجموعاتنا
        </h2>
        <p class="text-muted-text text-base leading-relaxed font-light mt-4 max-w-xl mx-auto">
          استكشفي مجموعاتنا المختارة من أوسع تشكيلات الإكسسوارات، والملابس، والمكياج، لتعيشي تجربة التسوق الراقية التي نقدمها لكِ.
        </p>
      </div>

      <!-- Filters -->
      <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-16">
        <button
          v-for="category in categories"
          :key="category"
          @click="activeCategory = category"
          :class="[
            'px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-widest uppercase transition-all duration-500',
            activeCategory === category 
              ? 'bg-primary text-white shadow-luxury' 
              : 'bg-transparent text-muted-text hover:text-primary hover:bg-secondary border border-transparent'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Masonry Grid with CSS Columns -->
      <!-- We use transition-group for elegant filtering animations -->
      <TransitionGroup name="staggered-fade" tag="div" class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        <div
          v-for="(item, index) in filteredItems"
          :key="item.id"
          class="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer shadow-soft hover:shadow-luxury transform-gpu transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 mb-6"
          @click="openLightbox(index)"
        >
          <!-- Image Wrapper for Zoom -->
            <div class="relative w-full h-full overflow-hidden bg-secondary">
              <img
                :src="item.image"
                :alt="item.title"
                loading="lazy"
                class="w-full h-auto object-cover transform-gpu transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                :class="item.aspectClass"
              />
            </div>
            
            <!-- Glass Overlay -->
            <div class="absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center z-10">
              
              <div class="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                <Maximize2 class="w-5 h-5 stroke-[1.5]" />
              </div>
              
              <span class="text-[10px] font-body uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150">
                {{ item.category }}
              </span>
              <h3 class="font-heading text-xl sm:text-2xl font-medium text-white mt-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                {{ item.title }}
              </h3>
            </div>
          </div>
        </TransitionGroup>

    </div>

    <!-- Lightbox Modal -->
    <Transition name="fade">
      <div v-if="lightboxOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl">
        
        <!-- Controls -->
        <button @click="closeLightbox" class="absolute top-6 end-6 p-3 rounded-full bg-primary/5 hover:bg-primary/10 text-primary transition-colors z-50">
          <X class="w-6 h-6" />
        </button>

        <!-- Right arrow acts as next, left as prev. Let's keep them physical right/left or switch depending on RTL. -->
        <button @click.stop="nextImage" class="absolute start-4 sm:start-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/80 hover:bg-white text-primary shadow-luxury transition-all z-50">
          <ChevronRight class="w-6 h-6" transform="scale(-1, 1)" />
        </button>

        <button @click.stop="prevImage" class="absolute end-4 sm:end-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/80 hover:bg-white text-primary shadow-luxury transition-all z-50">
          <ChevronLeft class="w-6 h-6" transform="scale(-1, 1)" />
        </button>

        <!-- Main Image -->
        <div class="relative w-full max-w-5xl max-h-[90vh] px-4 sm:px-16 flex flex-col items-center justify-center" @click.stop>
          <Transition name="slide-fade" mode="out-in">
            <div :key="filteredItems[currentIndex].id" class="w-full flex flex-col items-center justify-center h-full">
              <img 
                :src="filteredItems[currentIndex].image" 
                :alt="filteredItems[currentIndex].title"
                class="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div class="mt-6 text-center animate-fade-in">
                <span class="text-[10px] font-body uppercase tracking-[0.3em] text-[#B59021] font-semibold block mb-2">
                  {{ filteredItems[currentIndex].category }}
                </span>
                <h3 class="font-heading text-2xl sm:text-3xl font-medium text-primary">
                  {{ filteredItems[currentIndex].title }}
                </h3>
              </div>
            </div>
          </Transition>
        </div>

      </div>
    </Transition>
  </section>
</template>

<style scoped>
/* Staggered Fade Transitions for Masonry Items */
.staggered-fade-move,
.staggered-fade-enter-active,
.staggered-fade-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.staggered-fade-enter-from,
.staggered-fade-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.staggered-fade-leave-active {
  position: absolute;
}

/* Modal Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slides Transitions for Lightbox Image */
.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
