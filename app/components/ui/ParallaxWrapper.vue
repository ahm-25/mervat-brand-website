<script setup lang="ts">
import { computed } from 'vue'
import { useParallax } from '~/composables/useParallax'
import { useAnimateOnScroll } from '~/composables/useAnimateOnScroll'
import type { AnimationType } from '~/types/design'

const props = withDefaults(defineProps<{
  speed?: number
  enableParallax?: boolean
  animation?: AnimationType | 'none'
  threshold?: number
}>(), {
  speed: 0.12,
  enableParallax: false,
  animation: 'fade',
  threshold: 0.15
})

const { elementRef: parallaxRef, offset } = useParallax(props.speed)
const { elementRef: scrollRef, isVisible, getAnimationClass } = useAnimateOnScroll(
  props.animation !== 'none' ? props.animation : 'fade',
  props.threshold
)

const parallaxStyle = computed(() => {
  if (!props.enableParallax) return {}
  return {
    transform: `translate3d(0, ${offset.value}px, 0)`
  }
})
</script>

<template>
  <div
    :ref="el => {
      if (enableParallax) parallaxRef = el as HTMLElement
      if (animation !== 'none') scrollRef = el as HTMLElement
    }"
    :style="parallaxStyle"
    :class="[
      'transition-all duration-700 will-change-transform',
      animation !== 'none' ? (isVisible ? getAnimationClass() : 'opacity-0') : ''
    ]"
  >
    <slot />
  </div>
</template>
