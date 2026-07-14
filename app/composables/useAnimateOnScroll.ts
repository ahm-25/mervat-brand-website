import { ref, onMounted, onUnmounted } from 'vue'
import type { AnimationType } from '~/types/design'

export function useAnimateOnScroll(animationType: AnimationType = 'fade', threshold = 0.15) {
  const elementRef = ref<HTMLElement | null>(null)
  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null

  const getAnimationClass = () => {
    switch (animationType) {
      case 'fade':
        return 'animate-fade-in'
      case 'slide-up':
        return 'animate-slide-up'
      case 'slide-down':
        return 'animate-slide-down'
      case 'slide-left':
        return 'animate-slide-left'
      case 'slide-right':
        return 'animate-slide-right'
      case 'scale':
        return 'animate-scale-up'
      default:
        return 'animate-fade-in'
    }
  }

  onMounted(() => {
    if (typeof window !== 'undefined' && elementRef.value) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              isVisible.value = true
              // Once visible, we can unobserve if we only want entrance animation once
              if (observer && elementRef.value) {
                observer.unobserve(elementRef.value)
              }
            }
          })
        },
        { threshold }
      )
      observer.observe(elementRef.value)
    }
  })

  onUnmounted(() => {
    if (observer && elementRef.value) {
      observer.unobserve(elementRef.value)
      observer.disconnect()
    }
  })

  return {
    elementRef,
    isVisible,
    getAnimationClass
  }
}
