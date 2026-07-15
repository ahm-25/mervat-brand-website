<script setup lang="ts">
import { 
  Instagram, 
  Facebook, 
  MessageCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Zap, 
  Smartphone, 
  Banknote,
  ArrowUpRight
} from 'lucide-vue-next'

const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<template>
  <footer class="relative bg-[#030303] text-white overflow-hidden border-t border-white/5">
    
    <!-- Premium Ambient Glows -->
    <div class="absolute top-0 start-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
    <div class="absolute bottom-0 end-0 w-[50rem] h-[50rem] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
    <div class="absolute top-0 start-0 w-[30rem] h-[30rem] bg-white/5 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
    
    <div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-12">
      
      <!-- Top Section: Big Brand Typography & CTA -->
      <div class="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 pb-20 border-b border-white/10">
        <div class="space-y-6 max-w-2xl">
          <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span class="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span class="text-xs font-mono uppercase tracking-[0.2em] text-gray-300">خدمة العملاء</span>
          </div>
          <h2 class="font-heading text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1]">
            اكتشفي<br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">الأناقة الحقيقية.</span>
          </h2>
        </div>
        
        <div class="flex flex-col items-start lg:items-end gap-6">
          <a href="mailto:concierge@mervat.com" class="group flex items-center gap-4 text-2xl sm:text-3xl font-heading hover:text-[#D4AF37] transition-colors duration-500">
            concierge@mervat.com
            <div class="w-10 h-10 rounded-full border border-white/20 group-hover:border-[#D4AF37] flex items-center justify-center transition-all duration-500 group-hover:scale-110">
              <ArrowUpRight class="w-4 h-4 group-hover:text-[#D4AF37] transition-colors" />
            </div>
          </a>
          <a href="tel:+201001234567" class="text-gray-400 font-mono text-lg hover:text-white transition-colors duration-300">
            +20 100 123 4567
          </a>
        </div>
      </div>

      <!-- Main Grid Layout -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 py-20">
        
        <!-- Column 1: The Brand -->
        <div class="space-y-8">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B59021] p-[1px]">
              <div class="w-full h-full bg-[#030303] rounded-xl flex items-center justify-center">
                <span class="font-heading font-bold text-2xl text-[#D4AF37]">2M</span>
              </div>
            </div>
            <div>
              <span class="font-heading font-normal tracking-wider text-2xl block leading-none text-white">MERVAT</span>
              <span class="text-[9px] text-[#D4AF37] uppercase tracking-[0.3em] font-bold mt-1 block">Brand Outlet</span>
            </div>
          </div>
          <p class="text-sm text-gray-400 font-light leading-relaxed">
            أكبر تشكيلة من الملابس والمكياج والإكسسوارات العصرية بتخفيضات مستمرة. كل ما تحتاجينه للتسوق في مكان واحد.
          </p>
        </div>

        <!-- Column 2: Branches -->
        <div class="space-y-8 lg:pe-8">
          <h4 class="text-[10px] font-sans font-bold text-[#D4AF37] uppercase tracking-[0.25em]">فروعنا</h4>
          <div class="space-y-6">
            <div class="group cursor-default">
              <span class="flex items-center gap-2 text-sm text-white mb-2">
                <MapPin class="w-4 h-4 text-[#D4AF37]" />
                شرم الشيخ
              </span>
              <div class="pe-6 space-y-2 border-s border-white/10 me-2">
                <a href="https://maps.app.goo.gl/jDXHZaxJdhbsxAbe7" target="_blank" class="block text-sm text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">فرع جنينة</a>
                <span class="block text-sm text-gray-400">فرع حي النور</span>
              </div>
            </div>
            <div class="group cursor-default">
              <span class="flex items-center gap-2 text-sm text-white mb-2">
                <MapPin class="w-4 h-4 text-[#D4AF37]" />
                القاهرة
              </span>
              <div class="pe-6 border-s border-white/10 me-2">
                <a href="https://share.google/NJJf6LzntyEGHmTKz" target="_blank" class="block text-sm text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">فرع القاهرة</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Column 3: Social & Services -->
        <div class="space-y-12">
          <div class="space-y-6">
            <h4 class="text-[10px] font-sans font-bold text-[#D4AF37] uppercase tracking-[0.25em]">وسائل التواصل</h4>
            <ul class="space-y-4">
              <li><a href="https://www.instagram.com/2m_genena_city" target="_blank" class="group flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-300"><Instagram class="w-4 h-4 group-hover:text-[#D4AF37] transition-colors" /> إنستغرام</a></li>
              <li><a href="https://www.facebook.com/2mBrands" target="_blank" class="group flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-300"><Facebook class="w-4 h-4 group-hover:text-[#D4AF37] transition-colors" /> فيسبوك</a></li>
              <li><a href="https://www.tiktok.com/@2m_ginina_ciry" target="_blank" class="group flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-300">
                <svg class="w-4 h-4 fill-current group-hover:text-[#D4AF37] transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                </svg> تيك توك
              </a></li>
              <li><a href="https://chat.whatsapp.com/KmONCWE5f4GKzyJoAHGt8z" target="_blank" class="group flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-300"><MessageCircle class="w-4 h-4 group-hover:text-[#D4AF37] transition-colors" /> واتساب</a></li>
            </ul>
          </div>
        </div>

        <!-- Column 4: Payments -->
        <div class="space-y-8">
          <h4 class="text-[10px] font-sans font-bold text-[#D4AF37] uppercase tracking-[0.25em]">المدفوعات والخدمات</h4>
          
          <div class="space-y-5">
            <!-- InstaPay -->
            <div class="group p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#D4AF37]/30 hover:bg-white/10 transition-all duration-300 flex items-center gap-4 cursor-default">
              <div class="w-10 h-10 rounded-lg bg-black/50 flex items-center justify-center text-[#D4AF37]">
                <Zap class="w-5 h-5" />
              </div>
              <div>
                <span class="block text-sm text-white font-medium">إنستا باي</span>
                <span class="block text-[10px] text-gray-400 mt-0.5">تحويل فوري</span>
              </div>
            </div>

            <!-- Vodafone Cash -->
            <div class="group p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#D4AF37]/30 hover:bg-white/10 transition-all duration-300 flex items-center gap-4 cursor-default">
              <div class="w-10 h-10 rounded-lg bg-black/50 flex items-center justify-center text-[#D4AF37]">
                <Smartphone class="w-5 h-5" />
              </div>
              <div>
                <span class="block text-sm text-white font-medium">فودافون كاش</span>
                <span class="block text-[10px] text-gray-400 mt-0.5">محفظة هاتف</span>
              </div>
            </div>

            <!-- Cash On Delivery -->
            <div class="group p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#D4AF37]/30 hover:bg-white/10 transition-all duration-300 flex items-center gap-4 cursor-default">
              <div class="w-10 h-10 rounded-lg bg-black/50 flex items-center justify-center text-[#D4AF37]">
                <Banknote class="w-5 h-5" />
              </div>
              <div>
                <span class="block text-sm text-white font-medium">الدفع عند الاستلام</span>
                <span class="block text-[10px] text-gray-400 mt-0.5">الدفع عند الباب</span>
              </div>
            </div>
            
            <div class="pt-2">
              <span class="inline-flex items-center gap-2 text-xs font-medium text-[#E28A8A] px-3 py-1.5 rounded-full bg-[#E28A8A]/10 border border-[#E28A8A]/20">
                <span class="w-1.5 h-1.5 rounded-full bg-[#E28A8A] animate-pulse"></span>
                خدمة طوارئ 24/7
              </span>
            </div>
          </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 mt-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p class="text-[11px] font-mono text-gray-500 uppercase tracking-widest">
          &copy; {{ new Date().getFullYear() }} 2M Brand. جميع الحقوق محفوظة.
        </p>
        
        <button 
          @click="scrollToTop"
          class="group flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors duration-300"
        >
          <span>العودة للأعلى</span>
          <div class="w-8 h-8 rounded-full border border-white/10 group-hover:border-[#D4AF37] flex items-center justify-center transition-all duration-300 bg-white/5 group-hover:bg-[#D4AF37]/10">
            <ArrowUpRight class="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-transform duration-300 group-hover:text-[#D4AF37]" />
          </div>
        </button>
      </div>

    </div>
  </footer>
</template>
