<script setup lang="ts">
import { 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Phone,
  Mail,
  Zap,
  Banknote,
  Smartphone
} from 'lucide-vue-next'

import { ref } from 'vue'

const isPaymentModalOpen = ref(false)
const selectedPaymentTab = ref<'instapay' | 'vodafone' | 'cod'>('instapay')

const openPaymentModal = (tab: 'instapay' | 'vodafone' | 'cod') => {
  selectedPaymentTab.value = tab
  isPaymentModalOpen.value = true
}

const phoneLines = [
  { label: 'للاستفسار', number: '01229094258', call: true, whatsapp: true },
  { label: 'للشكاوى — واتساب فقط', number: '01002294523', call: false, whatsapp: true },
  { label: 'للطوارئ — مكالمات فقط', number: '01281061502', call: true, whatsapp: false }
]
</script>

<template>
  <section class="bg-background pt-32 overflow-hidden border-t border-muted-border/30">
    
    <!-- Massive Scrolling Marquee -->
    <div class="relative w-full overflow-hidden flex whitespace-nowrap mb-24 py-4 select-none pointer-events-none">
      <div class="animate-[marquee_30s_linear_infinite] flex items-center gap-12 font-heading text-7xl sm:text-9xl md:text-[12rem] lg:text-[16rem] uppercase font-normal text-primary tracking-tighter opacity-5">
        <span>Connect With Us</span>
        <span>&mdash;</span>
        <span>Say Hello</span>
        <span>&mdash;</span>
        <span>Let's Talk</span>
        <span>&mdash;</span>
        <span>2M Brand Outlet</span>
        <span>&mdash;</span>
      </div>
      <div class="animate-[marquee_30s_linear_infinite] flex items-center gap-12 font-heading text-7xl sm:text-9xl md:text-[12rem] lg:text-[16rem] uppercase font-normal text-primary tracking-tighter opacity-5 absolute top-4 left-full">
        <span>Connect With Us</span>
        <span>&mdash;</span>
        <span>Say Hello</span>
        <span>&mdash;</span>
        <span>Let's Talk</span>
        <span>&mdash;</span>
        <span>2M Brand Outlet</span>
        <span>&mdash;</span>
      </div>
    </div>

    <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-32">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-8">
        
        <!-- Interactive Contact Text -->
        <div class="md:col-span-5 flex flex-col justify-between">
          <div>
            <span class="text-xs font-body uppercase tracking-[0.4em] text-[#B59021] font-semibold block mb-8">
              Client Concierge
            </span>
            <a href="mailto:concierge@mervatbrand.com" class="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-primary hover:text-[#D4AF37] transition-colors duration-500 inline-block mb-4 leading-none" data-cursor-text="Email">
              concierge@<br />mervat.com
            </a>
            <div class="mt-10 space-y-6">
              <div v-for="line in phoneLines" :key="line.number" class="space-y-1.5">
                <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B59021] font-semibold block">
                  {{ line.label }}
                </span>
                <div class="flex items-center gap-4 flex-wrap">
                  <span class="font-heading text-2xl sm:text-3xl text-primary/70 tracking-wide" dir="ltr">
                    {{ line.number }}
                  </span>
                  <div class="flex items-center gap-2">
                    <a
                      v-if="line.call"
                      :href="`tel:+2${line.number}`"
                      class="flex items-center gap-1.5 text-xs font-body font-semibold text-primary/60 hover:text-primary border border-muted-border rounded-full px-3 py-1.5 transition-colors duration-300"
                      data-cursor-text="Call"
                    >
                      <Phone class="w-3.5 h-3.5" /> اتصال
                    </a>
                    <a
                      v-if="line.whatsapp"
                      :href="`https://wa.me/2${line.number}`"
                      target="_blank"
                      class="flex items-center gap-1.5 text-xs font-body font-semibold text-primary/60 hover:text-[#25D366] border border-muted-border rounded-full px-3 py-1.5 transition-colors duration-300"
                      data-cursor-text="Chat"
                    >
                      <MessageCircle class="w-3.5 h-3.5" /> واتساب
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-16 sm:mt-24">
            <p class="font-body text-sm font-light text-muted-text max-w-sm leading-relaxed">
              For personalized styling advice, order assistance, or inquiries about our exclusive collections, our concierge is available globally.
            </p>
          </div>
        </div>

        <!-- Links Grid -->
        <div class="md:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 lg:pl-16">
          
          <!-- Socials -->
          <div class="space-y-8">
            <span class="text-[10px] font-mono text-[#D4AF37] tracking-widest block border-b border-muted-border pb-4">SOCIAL</span>
            <ul class="space-y-4">
              <li>
                <a href="https://www.instagram.com/2m_genena_city" target="_blank" class="group flex items-center gap-4 text-primary text-xl sm:text-2xl font-heading font-normal" data-cursor-text="Follow">
                  <span class="transform group-hover:translate-x-3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/share/g/1EbQMiUpY6/?mibextid=wwXlfr" target="_blank" class="group flex items-center gap-4 text-primary text-xl sm:text-2xl font-heading font-normal" data-cursor-text="Follow">
                  <span class="transform group-hover:translate-x-3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@2m_ginina_ciry" target="_blank" class="group flex items-center gap-4 text-primary text-xl sm:text-2xl font-heading font-normal" data-cursor-text="Follow">
                  <span class="transform group-hover:translate-x-3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">TikTok</span>
                </a>
              </li>
              <li>
                <a href="https://chat.whatsapp.com/KmONCWE5f4GKzyJoAHGt8z" target="_blank" class="group flex items-center gap-4 text-primary text-xl sm:text-2xl font-heading font-normal" data-cursor-text="Chat">
                  <span class="transform group-hover:translate-x-3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-[#25D366]">WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Services -->
          <div class="space-y-8">
            <span class="text-[10px] font-mono text-[#D4AF37] tracking-widest block border-b border-muted-border pb-4">SERVICES</span>
            <ul class="space-y-4">
              <li>
                <a href="#" class="group flex items-center gap-4 text-primary text-xl sm:text-2xl font-heading font-normal" data-cursor-text="View">
                  <span class="transform group-hover:translate-x-3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">Online Orders</span>
                </a>
              </li>
              <li>
                <a href="#" class="group flex items-center gap-4 text-primary text-xl sm:text-2xl font-heading font-normal" data-cursor-text="View">
                  <span class="transform group-hover:translate-x-3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">Complaints</span>
                </a>
              </li>
              <li>
                <a href="#" class="group flex items-center gap-4 text-primary text-xl sm:text-2xl font-heading font-normal" data-cursor-text="View">
                  <span class="transform group-hover:translate-x-3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] text-red-700/80">Emergency 24/7</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Payments -->
          <div class="space-y-6 col-span-2 lg:col-span-1 pt-8 lg:pt-0 border-t lg:border-none border-muted-border/50">
            <span class="text-[10px] font-mono text-[#D4AF37] tracking-widest block border-b border-muted-border pb-3">PAYMENTS (طرق الدفع والتحويل)</span>
            <ul class="space-y-3">
              <!-- InstaPay 1 -->
              <li @click="openPaymentModal('instapay')" class="p-3 rounded-xl bg-secondary/30 border border-muted-border hover:border-[#D4AF37]/60 transition-all duration-300 flex items-center justify-between gap-3 cursor-pointer group shadow-sm" data-cursor-text="Pay">
                <div class="flex items-center gap-3 shrink-0">
                  <div class="w-9 h-9 rounded-lg border border-muted-border bg-secondary/80 flex items-center justify-center shrink-0 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-colors duration-300">
                    <Zap class="w-4 h-4 text-[#D4AF37] group-hover:text-purple-400 transition-colors duration-300" />
                  </div>
                  <span class="font-heading text-sm font-bold text-primary group-hover:text-[#D4AF37] transition-colors">إنستا باي 1</span>
                </div>
                <span class="font-mono text-xs text-[#D4AF37] font-semibold truncate" dir="ltr">thabetloutfy93@instapay</span>
              </li>

              <!-- InstaPay 2 -->
              <li @click="openPaymentModal('instapay')" class="p-3 rounded-xl bg-secondary/30 border border-muted-border hover:border-[#D4AF37]/60 transition-all duration-300 flex items-center justify-between gap-3 cursor-pointer group shadow-sm" data-cursor-text="Pay">
                <div class="flex items-center gap-3 shrink-0">
                  <div class="w-9 h-9 rounded-lg border border-muted-border bg-secondary/80 flex items-center justify-center shrink-0 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-colors duration-300">
                    <Zap class="w-4 h-4 text-[#D4AF37] group-hover:text-purple-400 transition-colors duration-300" />
                  </div>
                  <span class="font-heading text-sm font-bold text-primary group-hover:text-[#D4AF37] transition-colors">إنستا باي 2</span>
                </div>
                <span class="font-mono text-xs text-[#D4AF37] font-semibold truncate" dir="ltr">boryu@instapay</span>
              </li>

              <!-- Vodafone Cash -->
              <li @click="openPaymentModal('vodafone')" class="p-3 rounded-xl bg-secondary/30 border border-muted-border hover:border-[#25D366]/60 transition-all duration-300 flex items-center justify-between gap-3 cursor-pointer group shadow-sm" data-cursor-text="Pay">
                <div class="flex items-center gap-3 shrink-0">
                  <div class="w-9 h-9 rounded-lg border border-muted-border bg-secondary/80 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-colors duration-300">
                    <Smartphone class="w-4 h-4 text-[#25D366] group-hover:text-emerald-400 transition-colors duration-300" />
                  </div>
                  <span class="font-heading text-sm font-bold text-primary group-hover:text-[#25D366] transition-colors">فودافون كاش</span>
                </div>
                <span class="font-mono text-sm font-bold text-[#25D366]" dir="ltr">01062641050</span>
              </li>

              <!-- Cash on Delivery -->
              <li @click="openPaymentModal('cod')" class="p-3 rounded-xl bg-secondary/30 border border-muted-border hover:border-white/30 transition-all duration-300 flex items-center justify-between gap-3 cursor-pointer group shadow-sm" data-cursor-text="Details">
                <div class="flex items-center gap-3 shrink-0">
                  <div class="w-9 h-9 rounded-lg border border-muted-border bg-secondary/80 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors duration-300">
                    <Banknote class="w-4 h-4 text-[#D4AF37] transition-colors duration-300" />
                  </div>
                  <span class="font-heading text-sm font-bold text-primary">الدفع عند الاستلام</span>
                </div>
                <span class="text-xs text-muted-text">نقداً عند الاستلام ←</span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>

    <!-- Interactive Payment Details Modal -->
    <UiPaymentModal v-model="isPaymentModalOpen" :initial-tab="selectedPaymentTab" />
  </section>
</template>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}
</style>
