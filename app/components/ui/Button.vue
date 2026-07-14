<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonVariant, ButtonSize } from '~/types/design'

const props = withDefaults(defineProps<{
  variant?: ButtonVariant
  size?: ButtonSize
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
  block?: boolean
}>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  loading: false,
  block: false
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-primary text-white border border-primary hover:bg-[#222222] shadow-soft hover:shadow-luxury transition-all duration-300'
    case 'secondary':
      return 'bg-secondary text-primary border border-secondary hover:bg-[#EDE7DE] shadow-soft transition-all duration-300'
    case 'outline':
      return 'bg-transparent text-primary border border-primary/40 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300'
    case 'ghost':
      return 'bg-transparent text-primary hover:bg-muted transition-all duration-300'
    case 'luxury-gold':
      return 'bg-accent text-primary font-medium border border-accent hover:bg-[#B59021] hover:text-white shadow-gold transition-all duration-300'
    default:
      return 'bg-primary text-white border border-primary hover:bg-[#222222]'
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'py-1.5 px-3 text-xs tracking-wider uppercase rounded-sm'
    case 'md':
      return 'py-2.5 px-6 text-sm tracking-widest uppercase rounded'
    case 'lg':
      return 'py-3.5 px-8 text-sm tracking-widest uppercase rounded-md'
    case 'xl':
      return 'py-4 px-10 text-base tracking-widest uppercase rounded-lg'
    default:
      return 'py-2.5 px-6 text-sm tracking-widest uppercase rounded'
  }
})

const handleClick = (e: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', e)
  }
}
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="[
      'relative inline-flex items-center justify-center font-body font-medium transition-transform duration-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2',
      variantClasses,
      sizeClasses,
      block ? 'w-full' : '',
      (disabled || loading) ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'
    ]"
    @click="handleClick"
  >
    <!-- Loading Spinner -->
    <span v-if="loading" class="absolute inset-0 flex items-center justify-center">
      <svg class="w-5 h-5 animate-spin text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
    </span>

    <!-- Content Slot -->
    <span :class="[loading ? 'opacity-0' : 'opacity-100 flex items-center gap-2']">
      <slot name="prefix" />
      <slot />
      <slot name="suffix" />
    </span>
  </button>
</template>
