<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  variant?: 'light' | 'card' | 'dark'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'luxury'
  hoverEffect?: boolean
}>(), {
  variant: 'light',
  padding: 'md',
  rounded: 'lg',
  hoverEffect: false
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'light':
      return 'bg-white/70 backdrop-blur-md border border-white/50 shadow-soft text-primary'
    case 'card':
      return 'bg-white/85 backdrop-blur-lg border border-[#D4AF37]/20 shadow-soft text-primary'
    case 'dark':
      return 'bg-primary/90 backdrop-blur-lg border border-white/10 shadow-luxury text-white'
    default:
      return 'bg-white/70 backdrop-blur-md border border-white/50 shadow-soft'
  }
})

const paddingClasses = computed(() => {
  switch (props.padding) {
    case 'none':
      return 'p-0'
    case 'sm':
      return 'p-2 sm:p-3' // 16px - 24px
    case 'md':
      return 'p-4 sm:p-6' // 32px - 48px
    case 'lg':
      return 'p-6 sm:p-8' // 48px - 64px
    case 'xl':
      return 'p-8 sm:p-12' // 64px - 96px
    default:
      return 'p-4 sm:p-6'
  }
})

const roundedClasses = computed(() => {
  switch (props.rounded) {
    case 'sm':
      return 'rounded-sm'
    case 'md':
      return 'rounded-md'
    case 'lg':
      return 'rounded-lg'
    case 'xl':
      return 'rounded-xl'
    case '2xl':
      return 'rounded-2xl'
    case 'luxury':
      return 'rounded-luxury'
    default:
      return 'rounded-lg'
  }
})
</script>

<template>
  <div
    :class="[
      'transition-all duration-500',
      variantClasses,
      paddingClasses,
      roundedClasses,
      hoverEffect ? 'hover:shadow-luxury hover:-translate-y-1' : ''
    ]"
  >
    <slot />
  </div>
</template>
