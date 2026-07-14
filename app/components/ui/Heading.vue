<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'display'
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  goldUnderline?: boolean
  tag?: string
}>(), {
  level: 'h2',
  align: 'left',
  goldUnderline: false
})

const headingClasses = computed(() => {
  switch (props.level) {
    case 'display':
      return 'font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-primary leading-[1.1]'
    case 'h1':
      return 'font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-primary leading-tight'
    case 'h2':
      return 'font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-primary leading-tight'
    case 'h3':
      return 'font-heading text-xl sm:text-2xl md:text-3xl font-medium tracking-normal text-primary'
    case 'h4':
      return 'font-heading text-lg sm:text-xl md:text-2xl font-semibold tracking-normal text-primary'
    default:
      return 'font-heading text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-primary'
  }
})

const alignClasses = computed(() => {
  switch (props.align) {
    case 'center':
      return 'text-center items-center'
    case 'right':
      return 'text-right items-end'
    default:
      return 'text-left items-start'
  }
})

const componentTag = computed(() => {
  if (props.tag) return props.tag
  return props.level === 'display' ? 'h1' : props.level
})
</script>

<template>
  <div :class="['flex flex-col gap-2', alignClasses]">
    <!-- Optional Subtitle / Overline -->
    <span
      v-if="subtitle"
      class="font-body text-xs sm:text-sm uppercase tracking-[0.25em] font-medium text-[#B59021] block"
    >
      {{ subtitle }}
    </span>

    <!-- Heading Title -->
    <component
      :is="componentTag"
      :class="[headingClasses, 'transition-colors duration-300']"
    >
      <slot />
    </component>

    <!-- Optional Luxury Gold Underline -->
    <div
      v-if="goldUnderline"
      class="h-[2px] w-16 bg-gradient-to-r from-[#B59021] via-[#D4AF37] to-transparent mt-1 rounded-full"
    />
  </div>
</template>
