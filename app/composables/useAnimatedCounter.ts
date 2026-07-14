import { ref, computed, onMounted, onUnmounted } from 'vue'

export function useAnimatedCounter(targetValue: number, duration = 2000, prefix = '', suffix = '') {
  const elementRef = ref<HTMLElement | null>(null)
  const currentValue = ref(0)
  const isStarted = ref(false)
  let observer: IntersectionObserver | null = null
  let animationFrameId: number | null = null

  const formattedValue = computed(() => {
    return `${prefix}${Math.round(currentValue.value).toLocaleString()}${suffix}`
  })

  const startAnimation = () => {
    if (isStarted.value) return
    isStarted.value = true
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Cubic ease-out curve for luxury deceleration
      const easeOutProgress = 1 - Math.pow(1 - progress, 3)

      currentValue.value = easeOutProgress * targetValue

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        currentValue.value = targetValue
      }
    }

    animationFrameId = requestAnimationFrame(animate)
  }

  onMounted(() => {
    if (typeof window !== 'undefined' && elementRef.value) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startAnimation()
              if (observer && elementRef.value) {
                observer.unobserve(elementRef.value)
              }
            }
          })
        },
        { threshold: 0.2 }
      )
      observer.observe(elementRef.value)
    }
  })

  onUnmounted(() => {
    if (observer && elementRef.value) {
      observer.unobserve(elementRef.value)
      observer.disconnect()
    }
    if (animationFrameId !== null && typeof window !== 'undefined') {
      cancelAnimationFrame(animationFrameId)
    }
  })

  return {
    elementRef,
    currentValue,
    formattedValue,
    startAnimation
  }
}
