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
        <span>Mervat Maison</span>
        <span>&mdash;</span>
      </div>
      <div class="animate-[marquee_30s_linear_infinite] flex items-center gap-12 font-heading text-7xl sm:text-9xl md:text-[12rem] lg:text-[16rem] uppercase font-normal text-primary tracking-tighter opacity-5 absolute top-4 left-full">
        <span>Connect With Us</span>
        <span>&mdash;</span>
        <span>Say Hello</span>
        <span>&mdash;</span>
        <span>Let's Talk</span>
        <span>&mdash;</span>
        <span>Mervat Maison</span>
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
            <div class="mt-8">
              <a href="tel:+201001234567" class="font-heading text-3xl sm:text-4xl text-primary/40 hover:text-primary transition-colors duration-500" data-cursor-text="Call">
                +20 100 123 4567
              </a>
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
                <a href="#" class="group flex items-center gap-4 text-primary text-xl sm:text-2xl font-heading font-normal" data-cursor-text="Follow">
                  <span class="transform group-hover:translate-x-3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" class="group flex items-center gap-4 text-primary text-xl sm:text-2xl font-heading font-normal" data-cursor-text="Follow">
                  <span class="transform group-hover:translate-x-3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" class="group flex items-center gap-4 text-primary text-xl sm:text-2xl font-heading font-normal" data-cursor-text="Follow">
                  <span class="transform group-hover:translate-x-3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">TikTok</span>
                </a>
              </li>
              <li>
                <a href="#" class="group flex items-center gap-4 text-primary text-xl sm:text-2xl font-heading font-normal" data-cursor-text="Chat">
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
          <div class="space-y-8 col-span-2 lg:col-span-1 pt-8 lg:pt-0 border-t lg:border-none border-muted-border/50">
            <span class="text-[10px] font-mono text-[#D4AF37] tracking-widest block border-b border-muted-border pb-4">PAYMENTS</span>
            <ul class="space-y-6">
              <li class="flex items-center gap-4 group cursor-pointer" data-cursor-text="Secure">
                <div class="w-10 h-10 rounded-full border border-muted-border bg-secondary/50 flex items-center justify-center shrink-0 group-hover:bg-purple-50 group-hover:border-purple-200 transition-colors duration-500">
                  <Zap class="w-4 h-4 text-primary/40 group-hover:text-purple-600 transition-colors duration-500" />
                </div>
                <div>
                  <span class="block font-heading text-lg text-primary">InstaPay</span>
                  <span class="block text-[10px] font-mono text-muted-text">Instant Transfer</span>
                </div>
              </li>
              <li class="flex items-center gap-4 group cursor-pointer" data-cursor-text="Secure">
                <div class="w-10 h-10 rounded-full border border-muted-border bg-secondary/50 flex items-center justify-center shrink-0 group-hover:bg-red-50 group-hover:border-red-200 transition-colors duration-500">
                  <Smartphone class="w-4 h-4 text-primary/40 group-hover:text-red-600 transition-colors duration-500" />
                </div>
                <div>
                  <span class="block font-heading text-lg text-primary">Vodafone Cash</span>
                  <span class="block text-[10px] font-mono text-muted-text">Mobile Wallet</span>
                </div>
              </li>
              <li class="flex items-center gap-4 group cursor-pointer" data-cursor-text="In-Store">
                <div class="w-10 h-10 rounded-full border border-muted-border bg-secondary/50 flex items-center justify-center shrink-0 group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-colors duration-500">
                  <Banknote class="w-4 h-4 text-primary/40 group-hover:text-emerald-600 transition-colors duration-500" />
                </div>
                <div>
                  <span class="block font-heading text-lg text-primary">Cash</span>
                  <span class="block text-[10px] font-mono text-muted-text">On Delivery / Store</span>
                </div>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}
</style>
