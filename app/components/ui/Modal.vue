<script setup lang="ts">
import { watch } from 'vue'

const props = withDefaults(defineProps<{
  modelValue: boolean
  title?: string
  subtitle?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl'
}>(), {
  maxWidth: '2xl'
})

const emit = defineEmits<{
  (e: 'update:modelValue', val: boolean): void
  (e: 'close'): void
}>()

const close = () => {
  emit('update:modelValue', false)
  emit('close')
}

watch(() => props.modelValue, (isOpen) => {
  if (typeof document !== 'undefined') {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
})

const widthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '4xl': 'max-w-4xl'
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-[100] overflow-y-auto bg-primary/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        @click.self="close"
      >
        <Transition
          enter-active-class="transition duration-400 cubic-bezier(0.16, 1, 0.3, 1)"
          enter-from-class="opacity-0 scale-95 translate-y-4"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition duration-250 cubic-bezier(0.4, 0, 0.2, 1)"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-4"
        >
          <div
            v-if="modelValue"
            :class="[
              'relative w-full bg-background rounded-xl shadow-luxury border border-accent/20 overflow-hidden my-8',
              widthClasses[maxWidth]
            ]"
          >
            <!-- Modal Header -->
            <div class="flex items-center justify-between px-6 py-4 border-b border-muted bg-secondary/40">
              <div>
                <span v-if="subtitle" class="text-[11px] font-body uppercase tracking-[0.2em] text-[#B59021] block font-medium">
                  {{ subtitle }}
                </span>
                <h3 v-if="title" class="font-heading text-xl sm:text-2xl font-medium text-primary">
                  {{ title }}
                </h3>
              </div>

              <!-- Close Button -->
              <button
                type="button"
                class="w-8 h-8 rounded-full bg-white/80 border border-muted-border flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Close modal"
                @click="close"
              >
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Modal Body Content -->
            <div class="p-6 max-h-[80vh] overflow-y-auto">
              <slot />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
