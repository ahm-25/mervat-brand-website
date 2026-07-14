<script setup lang="ts">
import { computed } from 'vue'
import type { BadgeVariant } from '~/types/design'

const props = withDefaults(defineProps<{
  variant?: BadgeVariant
  size?: 'sm' | 'md'
  dot?: boolean
}>(), {
  variant: 'gold',
  size: 'sm',
  dot: false
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'gold':
      return 'bg-accent/15 text-[#B59021] border border-accent/30 font-semibold'
    case 'dark':
      return 'bg-primary text-white border border-primary'
    case 'cream':
      return 'bg-secondary text-primary border border-[#E8E2DA]'
    case 'glass':
      return 'bg-white/80 backdrop-blur-md text-primary border border-white/50 shadow-soft'
    case 'outlet':
      return 'bg-[#111111] text-accent border border-accent/40 tracking-widest font-bold'
    default:
      return 'bg-accent/15 text-[#B59021] border border-accent/30'
  }
})

const sizeClasses = computed(() => {
  return props.size === 'sm'
    ? 'py-0.5 px-2.5 text-[11px] rounded-sm'
    : 'py-1 px-3 text-xs rounded'
})
</script>

<template>
  <span
    :class="[
      'inline-flex items-center gap-1.5 uppercase tracking-wider font-body transition-all duration-300',
      variantClasses,
      sizeClasses
    ]"
  >
    <span
      v-if="dot"
      class="w-1.5 h-1.5 rounded-full bg-current animate-pulse"
    />
    <slot />
  </span>
</template>
