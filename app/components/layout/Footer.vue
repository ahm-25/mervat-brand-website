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

import { ref } from 'vue'

const isPaymentModalOpen = ref(false)
const selectedPaymentTab = ref<'instapay' | 'vodafone' | 'cod'>('instapay')

const openPaymentModal = (tab: 'instapay' | 'vodafone' | 'cod') => {
  selectedPaymentTab.value = tab
  isPaymentModalOpen.value = true
}

const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<template>
  <footer id="contact" class="relative bg-[#030303] text-white overflow-hidden border-t border-white/5">
    
    <!-- Premium Ambient Glows -->
    <div class="absolute top-0 start-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
    <div class="absolute bottom-0 end-0 w-[50rem] h-[50rem] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
    <div class="absolute top-0 start-0 w-[30rem] h-[30rem] bg-white/5 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
    
    <div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-12">
      
      <!-- Top Section: Big Brand Typography -->
      <div class="pb-16 border-b border-white/10">
        <div class="space-y-6 max-w-3xl">
          <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span class="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span class="text-xs font-mono uppercase tracking-[0.2em] text-gray-300">خدمة العملاء</span>
          </div>
          <h2 class="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white">
            اكتشفي<br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">الأناقة الحقيقية.</span>
          </h2>
        </div>
      </div>

      <!-- Premium Direct Contact & Support Numbers Grid -->
      <div class="py-16 border-b border-white/10">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div class="flex items-center gap-3">
            <span class="w-2.5 h-2.5 rounded-full bg-[#D4AF37]"></span>
            <h3 class="font-body text-base font-bold text-[#D4AF37] uppercase tracking-[0.15em]">أرقام التواصل المباشرة والدعم</h3>
          </div>
          <span class="text-xs text-gray-400 font-light">نحن هنا لخدمتكم والإجابة على جميع استفساراتكم على مدار الساعة</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <!-- Card 1: للاستفسار -->
          <div class="group relative bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#D4AF37]/50 rounded-2xl p-6 lg:p-7 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-soft hover:shadow-luxury">
            <!-- Smooth Ambient Hover Glow -->
            <div class="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
            
            <div class="relative z-10">
              <div class="flex items-center justify-between gap-3 mb-6">
                <span class="text-sm font-body font-bold text-[#D4AF37] tracking-wide shrink min-w-0">
                  للاستفسار
                </span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-400 whitespace-nowrap shrink-0">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                  متاح الآن
                </span>
              </div>

              <div class="mb-8">
                <a href="tel:+201229094258" class="font-sans text-3xl sm:text-4xl text-white font-extrabold tracking-wider hover:text-[#D4AF37] transition-colors block leading-tight" dir="ltr">
                  01229094258
                </a>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-2.5 pt-5 border-t border-white/10 mt-auto w-full relative z-10">
              <a
                href="tel:+201229094258"
                class="w-full flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-white/5 hover:bg-[#D4AF37] text-gray-200 hover:text-[#030303] border border-white/10 hover:border-[#D4AF37] text-xs font-body font-bold transition-all duration-300 shadow-soft whitespace-nowrap shrink-0"
              >
                <Phone class="w-3.5 h-3.5 shrink-0" />
                <span>اتصال</span>
              </a>
              <a
                href="https://wa.me/201229094258"
                target="_blank"
                class="w-full flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 hover:border-[#25D366] text-xs font-body font-bold transition-all duration-300 shadow-soft whitespace-nowrap shrink-0"
              >
                <MessageCircle class="w-3.5 h-3.5 shrink-0" />
                <span>واتساب</span>
              </a>
            </div>
          </div>

          <!-- Card 2: للشكاوى – واتساب فقط -->
          <div class="group relative bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#25D366]/50 rounded-2xl p-6 lg:p-7 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-soft hover:shadow-luxury">
            <!-- Smooth Ambient Hover Glow -->
            <div class="absolute inset-0 bg-gradient-to-br from-[#25D366]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
            
            <div class="relative z-10">
              <div class="flex items-center justify-between gap-3 mb-6">
                <span class="text-sm font-body font-bold text-[#F3E5AB] tracking-wide shrink min-w-0">
                  للشكاوى — واتساب فقط
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 text-[11px] font-bold text-[#25D366] whitespace-nowrap shrink-0">
                  رسائل فقط
                </span>
              </div>

              <div class="mb-8">
                <a href="https://wa.me/201002294523" target="_blank" class="font-sans text-3xl sm:text-4xl text-white font-extrabold tracking-wider hover:text-[#25D366] transition-colors block leading-tight" dir="ltr">
                  01002294523
                </a>
              </div>
            </div>

            <div class="pt-5 border-t border-white/10 mt-auto w-full relative z-10">
              <a
                href="https://wa.me/201002294523"
                target="_blank"
                class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 hover:border-[#25D366] text-xs font-body font-bold transition-all duration-300 shadow-soft whitespace-nowrap"
              >
                <MessageCircle class="w-4 h-4 shrink-0" />
                <span>تواصل عبر واتساب</span>
              </a>
            </div>
          </div>

          <!-- Card 3: للطوارئ – مكالمات فقط -->
          <div class="group relative bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#D4AF37]/50 rounded-2xl p-6 lg:p-7 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-soft hover:shadow-luxury">
            <!-- Smooth Ambient Hover Glow -->
            <div class="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
            
            <div class="relative z-10">
              <div class="flex items-center justify-between gap-3 mb-6">
                <span class="text-sm font-body font-bold text-[#D4AF37] tracking-wide shrink min-w-0">
                  للطوارئ — مكالمات فقط
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[11px] font-bold text-[#D4AF37] whitespace-nowrap shrink-0">
                  اتصال سريع
                </span>
              </div>

              <div class="mb-8">
                <a href="tel:+201281061502" class="font-sans text-3xl sm:text-4xl text-white font-extrabold tracking-wider hover:text-[#D4AF37] transition-colors block leading-tight" dir="ltr">
                  01281061502
                </a>
              </div>
            </div>

            <div class="pt-5 border-t border-white/10 mt-auto w-full relative z-10">
              <a
                href="tel:+201281061502"
                class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-[#D4AF37] text-gray-200 hover:text-[#030303] border border-white/10 hover:border-[#D4AF37] text-xs font-body font-bold transition-all duration-300 shadow-soft whitespace-nowrap"
              >
                <Phone class="w-4 h-4 shrink-0" />
                <span>اتصال فوري</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 py-20">
        
        <!-- Column 1: The Brand -->
        <div class="lg:col-span-4 space-y-6">
          <a href="#home" class="inline-block group">
            <h2 class="font-heading text-4xl text-white tracking-wider flex items-baseline gap-2">
              2M <span class="text-[#D4AF37] font-light">MERVAT</span>
            </h2>
            <span class="text-[9px] text-gray-500 uppercase tracking-[0.4em] font-medium mt-2 block group-hover:text-[#D4AF37] transition-colors">Brand Outlet</span>
          </a>
          <p class="text-sm text-gray-400 font-light leading-relaxed max-w-sm">
            وجهتك الأولى لأرقى تشكيلات الملابس، المكياج، والإكسسوارات العصرية. نقدم لك الفخامة بتخفيضات مستمرة.
          </p>
        </div>

        <!-- Column 2: Branches -->
        <div class="lg:col-span-3 space-y-6 lg:pe-8">
          <h4 class="text-xs font-body font-semibold text-white uppercase tracking-widest">الفروع</h4>
          <div class="space-y-6">
            <div class="space-y-3">
              <span class="text-sm text-[#D4AF37] block font-medium">شرم الشيخ</span>
              <ul class="space-y-2">
                <li><a href="https://share.google/NJJf6LzntyEGHmTKz" target="_blank" class="text-xs text-gray-400 hover:text-white transition-colors block leading-relaxed">فرع جليله سيتى خليج نعمه</a></li>
                <li><a href="https://share.google/NJJf6LzntyEGHmTKz" target="_blank" class="text-xs text-gray-400 hover:text-white transition-colors block leading-relaxed">طريق السلام، أمام مستشفى شرم الدولي</a></li>
              </ul>
            </div>
            <div class="space-y-3">
              <span class="text-sm text-[#D4AF37] block font-medium">القاهرة</span>
              <ul class="space-y-2">
                <li><a href="https://maps.app.goo.gl/jDXHZaxJdhbsxAbe7" target="_blank" class="text-xs text-gray-400 hover:text-white transition-colors block leading-relaxed">مدينة نصر</a></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Column 3: Social & Services -->
        <div class="lg:col-span-2 space-y-6">
          <h4 class="text-xs font-body font-semibold text-white uppercase tracking-widest">تواصل معنا</h4>
          <ul class="space-y-3">
            <li><a href="https://www.instagram.com/2m_genena_city" target="_blank" class="group flex items-center gap-3 text-xs text-gray-400 hover:text-white transition-colors"><Instagram class="w-3.5 h-3.5 group-hover:text-[#D4AF37] transition-colors" /> إنستغرام</a></li>
            <li><a href="https://www.facebook.com/share/g/1EbQMiUpY6/?mibextid=wwXlfr" target="_blank" class="group flex items-center gap-3 text-xs text-gray-400 hover:text-white transition-colors"><Facebook class="w-3.5 h-3.5 group-hover:text-[#D4AF37] transition-colors" /> فيسبوك</a></li>
            <li><a href="https://www.tiktok.com/@2m_ginina_ciry" target="_blank" class="group flex items-center gap-3 text-xs text-gray-400 hover:text-white transition-colors">
              <svg class="w-3.5 h-3.5 fill-current group-hover:text-[#D4AF37] transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
              </svg> تيك توك
            </a></li>
            <li><a href="https://chat.whatsapp.com/KmONCWE5f4GKzyJoAHGt8z" target="_blank" class="group flex items-center gap-3 text-xs text-gray-400 hover:text-white transition-colors"><MessageCircle class="w-3.5 h-3.5 group-hover:text-[#D4AF37] transition-colors" /> واتساب</a></li>
          </ul>
        </div>

        <!-- Column 4: Payments -->
        <div class="lg:col-span-3 space-y-6">
          <h4 class="text-xs font-body font-semibold text-white uppercase tracking-widest">طرق الدفع والخدمات</h4>
          
          <div class="space-y-2">
            <button @click="openPaymentModal('instapay')" class="w-full group py-2 px-3 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between text-start cursor-pointer border border-transparent hover:border-white/10">
              <div class="flex items-center gap-3">
                <Zap class="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <span class="text-xs text-gray-300 group-hover:text-white transition-colors">إنستا باي</span>
              </div>
            </button>

            <button @click="openPaymentModal('vodafone')" class="w-full group py-2 px-3 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between text-start cursor-pointer border border-transparent hover:border-white/10">
              <div class="flex items-center gap-3">
                <Smartphone class="w-4 h-4 text-[#25D366] group-hover:text-emerald-400 transition-colors" />
                <span class="text-xs text-gray-300 group-hover:text-white transition-colors">فودافون كاش</span>
              </div>
            </button>

            <button @click="openPaymentModal('cod')" class="w-full group py-2 px-3 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between text-start cursor-pointer border border-transparent hover:border-white/10">
              <div class="flex items-center gap-3">
                <Banknote class="w-4 h-4 text-[#D4AF37] group-hover:text-yellow-400 transition-colors" />
                <span class="text-xs text-gray-300 group-hover:text-white transition-colors">الدفع عند الاستلام</span>
              </div>
            </button>
            
            <div class="pt-4 mt-4 border-t border-white/5">
              <span class="inline-flex items-center gap-2 text-[10px] font-medium text-[#D4AF37] px-3 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
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

    <!-- Interactive Payment Details Modal -->
    <UiPaymentModal v-model="isPaymentModalOpen" :initial-tab="selectedPaymentTab" />
  </footer>
</template>
