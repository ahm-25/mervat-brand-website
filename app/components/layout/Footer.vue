<script setup lang="ts">
import { 
  Facebook, 
  Instagram, 
  MessageCircle, 
  ArrowUp, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight
} from 'lucide-vue-next'

const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const quickLinks = [
  { name: 'About The Brand', url: '#about' },
  { name: 'Latest Collections', url: '#' },
  { name: 'Store Locations', url: '#' },
  { name: 'Client Concierge', url: '#' },
  { name: 'Shipping & Returns', url: '#' },
  { name: 'Privacy Policy', url: '#' }
]
</script>

<template>
  <footer class="bg-primary text-white relative overflow-hidden border-t border-[#D4AF37]/20">
    <!-- Subtle luxury glow -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>
    <div class="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 relative z-10">
      
      <!-- Newsletter Section -->
      <div class="flex flex-col lg:flex-row items-center justify-between gap-10 pb-20 border-b border-white/10">
        <div class="max-w-xl text-center lg:text-left space-y-3">
          <h3 class="font-heading text-3xl sm:text-4xl font-medium text-white">Join The Inner Circle</h3>
          <p class="text-sm text-gray-400 font-light leading-relaxed">
            Subscribe to receive exclusive access to VIP collections, private sales, and Parisian styling insights directly to your inbox.
          </p>
        </div>
        <div class="w-full lg:w-[400px]">
          <form @submit.prevent class="relative group">
            <input 
              type="email" 
              placeholder="Your email address" 
              class="w-full bg-transparent border-b border-white/30 text-white placeholder:text-gray-500 py-3 pr-12 focus:outline-none focus:border-[#D4AF37] transition-colors duration-300 font-body text-sm"
              required
            />
            <button 
              type="submit" 
              class="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 p-2"
              aria-label="Subscribe"
            >
              <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </form>
        </div>
      </div>

      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 py-16 border-b border-white/10">
        
        <!-- Column 1: Brand & Logo -->
        <div class="space-y-6">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary font-heading font-bold text-xl shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              M
            </div>
            <div>
              <span class="font-heading font-normal tracking-wide text-2xl block leading-none text-white">MERVAT</span>
              <span class="text-[10px] text-accent uppercase tracking-[0.25em] font-medium">Boutique</span>
            </div>
          </div>
          <p class="text-sm text-gray-400 font-light leading-relaxed">
            The ultimate luxury destination celebrating feminine power and timeless elegance through haute couture, handcrafted handbags, and curated beauty.
          </p>
          <div class="flex items-center gap-4 pt-2">
            <a href="#" class="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 hover:bg-white/10 transition-all duration-300">
              <Instagram class="w-4 h-4" />
            </a>
            <a href="#" class="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 hover:bg-white/10 transition-all duration-300">
              <Facebook class="w-4 h-4" />
            </a>
            <a href="#" class="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 hover:bg-white/10 transition-all duration-300">
              <MessageCircle class="w-4 h-4" />
            </a>
            <!-- TikTok SVG -->
            <a href="#" class="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 hover:bg-white/10 transition-all duration-300">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="space-y-6 lg:pl-8">
          <h4 class="font-heading text-lg font-medium text-white tracking-wide">Explore</h4>
          <ul class="space-y-3.5">
            <li v-for="link in quickLinks" :key="link.name">
              <a :href="link.url" class="group flex items-center text-sm font-light text-gray-400 hover:text-white transition-colors duration-300">
                <span class="w-1.5 h-[1px] bg-[#D4AF37] mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"></span>
                <span class="transform group-hover:translate-x-1 transition-transform duration-300">{{ link.name }}</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 3: Boutiques -->
        <div class="space-y-6">
          <h4 class="font-heading text-lg font-medium text-white tracking-wide">Our Boutiques</h4>
          <div class="space-y-5">
            <div class="group">
              <span class="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] block mb-1">Sharm El Sheikh</span>
              <p class="text-sm font-light text-gray-400 leading-relaxed group-hover:text-white transition-colors duration-300">
                Hay El Nour District<br/>El Genena City Mall
              </p>
            </div>
            <div class="group">
              <span class="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] block mb-1">Cairo</span>
              <p class="text-sm font-light text-gray-400 leading-relaxed group-hover:text-white transition-colors duration-300">
                5th Settlement, Downtown Mall
              </p>
            </div>
          </div>
        </div>

        <!-- Column 4: Contact -->
        <div class="space-y-6">
          <h4 class="font-heading text-lg font-medium text-white tracking-wide">Client Concierge</h4>
          <ul class="space-y-4">
            <li>
              <a href="tel:+201001234567" class="group flex items-start gap-3 text-sm font-light text-gray-400 hover:text-white transition-colors duration-300">
                <Phone class="w-4 h-4 mt-0.5 text-[#D4AF37] opacity-80 group-hover:opacity-100" />
                <span>+20 100 123 4567<br/><span class="text-xs text-gray-500">Everyday: 10AM - 11PM</span></span>
              </a>
            </li>
            <li>
              <a href="mailto:concierge@mervatbrand.com" class="group flex items-center gap-3 text-sm font-light text-gray-400 hover:text-white transition-colors duration-300">
                <Mail class="w-4 h-4 text-[#D4AF37] opacity-80 group-hover:opacity-100" />
                <span>concierge@mervat.com</span>
              </a>
            </li>
            <li>
              <div class="flex items-center gap-3 text-sm font-light text-gray-400">
                <MapPin class="w-4 h-4 text-[#D4AF37] opacity-80" />
                <span>Worldwide Shipping</span>
              </div>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p class="text-xs font-mono text-gray-500">
          &copy; {{ new Date().getFullYear() }} Mervat Brand. All Rights Reserved.
        </p>
        
        <button 
          @click="scrollToTop"
          class="group flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors duration-300"
        >
          <span>Back To Top</span>
          <div class="w-8 h-8 rounded-full border border-gray-600 group-hover:border-[#D4AF37] flex items-center justify-center transition-colors duration-300">
            <ArrowUp class="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-300 group-hover:text-[#D4AF37]" />
          </div>
        </button>
      </div>

    </div>
  </footer>
</template>
