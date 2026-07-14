<script setup lang="ts">
import { ref } from 'vue'
import type { BadgeVariant } from '~/types/design'

const props = withDefaults(defineProps<{
  id: string | number
  title: string
  category: string
  price: number | string
  originalPrice?: number | string
  image: string
  hoverImage?: string
  badge?: string
  badgeVariant?: BadgeVariant
  isNew?: boolean
  isOutlet?: boolean
}>(), {
  badgeVariant: 'gold',
  isNew: false,
  isOutlet: false
})

const emit = defineEmits<{
  (e: 'click', id: string | number): void
  (e: 'quick-view', id: string | number): void
  (e: 'favorite', id: string | number, status: boolean): void
}>()

const isFavorited = ref(false)
const isImageLoaded = ref(false)

const toggleFavorite = (e: Event) => {
  e.stopPropagation()
  isFavorited.value = !isFavorited.value
  emit('favorite', props.id, isFavorited.value)
}

const handleQuickView = (e: Event) => {
  e.stopPropagation()
  emit('quick-view', props.id)
}
</script>

<template>
  <div
    class="group relative flex flex-col bg-background rounded-lg overflow-hidden border border-muted-border/60 transition-all duration-500 hover:shadow-luxury hover:-translate-y-1.5 cursor-pointer"
    @click="emit('click', id)"
  >
    <!-- Card Image Container -->
    <div class="relative aspect-[3/4] w-full overflow-hidden bg-secondary/60">
      <!-- Image Skeleton / Placeholder while loading -->
      <div
        v-if="!isImageLoaded"
        class="absolute inset-0 animate-pulse bg-gradient-to-r from-secondary via-white to-secondary"
      />

      <!-- Primary Image -->
      <img
        :src="image"
        :alt="title"
        class="h-full w-full object-cover object-center transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-108"
        :class="[
          hoverImage ? 'group-hover:opacity-0 transition-opacity duration-500' : '',
          isImageLoaded ? 'opacity-100' : 'opacity-0'
        ]"
        @load="isImageLoaded = true"
      />

      <!-- Secondary Hover Image -->
      <img
        v-if="hoverImage"
        :src="hoverImage"
        :alt="`${title} hover view`"
        class="absolute inset-0 h-full w-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 cubic-bezier(0.16, 1, 0.3, 1)"
      />

      <!-- Badges Stack -->
      <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
        <UiBadge
          v-if="isOutlet"
          variant="outlet"
          size="sm"
        >
          Outlet
        </UiBadge>
        <UiBadge
          v-else-if="badge"
          :variant="badgeVariant"
          size="sm"
        >
          {{ badge }}
        </UiBadge>
        <UiBadge
          v-else-if="isNew"
          variant="cream"
          size="sm"
        >
          New
        </UiBadge>
      </div>

      <!-- Wishlist / Favorite Button -->
      <button
        type="button"
        class="absolute top-3 right-3 z-10 w-9 h-9 rounded-full glass-effect flex items-center justify-center text-primary transition-all duration-300 hover:bg-white hover:scale-110 active:scale-95 focus:outline-none"
        :class="{ '!bg-accent !text-white !border-accent shadow-gold': isFavorited }"
        aria-label="Add to wishlist"
        @click="toggleFavorite"
      >
        <svg
          class="w-4 h-4 transition-transform duration-300"
          :class="{ 'scale-110 fill-current': isFavorited }"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      </button>

      <!-- Glass Quick View Overlay on Hover -->
      <div class="absolute inset-x-3 bottom-3 z-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)">
        <button
          type="button"
          class="w-full py-2.5 px-4 rounded glass-card bg-white/90 text-primary text-xs font-body uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors duration-300"
          @click="handleQuickView"
        >
          <span>Quick View</span>
          <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Card Content -->
    <div class="flex flex-col p-4 flex-grow justify-between gap-2">
      <div class="space-y-1">
        <!-- Category Overline -->
        <p class="text-[11px] font-body tracking-[0.2em] uppercase text-muted-text font-medium">
          {{ category }}
        </p>
        
        <!-- Product Title -->
        <h3 class="font-heading text-lg font-medium text-primary line-clamp-1 group-hover:text-accent transition-colors duration-300">
          {{ title }}
        </h3>
      </div>

      <!-- Price Section -->
      <div class="flex items-center gap-2 pt-1 border-t border-muted/80">
        <span class="font-body font-semibold text-base text-primary">
          {{ typeof price === 'number' ? `$${price.toLocaleString()}` : price }}
        </span>
        
        <span
          v-if="originalPrice"
          class="font-body text-xs text-muted-text line-through"
        >
          {{ typeof originalPrice === 'number' ? `$${originalPrice.toLocaleString()}` : originalPrice }}
        </span>

        <span
          v-if="originalPrice && typeof price === 'number' && typeof originalPrice === 'number'"
          class="ml-auto text-[10px] font-bold text-[#B59021] bg-accent/15 px-1.5 py-0.5 rounded"
        >
          -{{ Math.round(((originalPrice - price) / originalPrice) * 100) }}%
        </span>
      </div>
    </div>
  </div>
</template>
