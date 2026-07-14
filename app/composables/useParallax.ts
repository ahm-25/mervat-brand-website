import { ref, onMounted, onUnmounted } from 'vue'

export function useParallax(speed = 0.15) {
  const elementRef = ref<HTMLElement | null>(null)
  const offset = ref(0)
  let animationFrameId: number | null = null

  const handleScroll = () => {
    if (!elementRef.value || typeof window === 'undefined') return

    const rect = elementRef.value.getBoundingClientRect()
    const windowHeight = window.innerHeight

    // Calculate how far the element is from the center of viewport
    if (rect.top <= windowHeight && rect.bottom >= 0) {
      const distanceFromCenter = rect.top - windowHeight / 2 + rect.height / 2
      offset.value = Math.round(distanceFromCenter * speed)
    }
  }

  const onScrollThrottled = () => {
    if (animationFrameId !== null) return
    animationFrameId = window.requestAnimationFrame(() => {
      handleScroll()
      animationFrameId = null
    })
  }

  onMounted(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', onScrollThrottled, { passive: true })
      handleScroll()
    }
  })

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', onScrollThrottled)
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
  })

  return {
    elementRef,
    offset
  }
}
