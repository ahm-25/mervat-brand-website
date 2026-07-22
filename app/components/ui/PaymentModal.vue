<script setup lang="ts">
import { ref } from 'vue'
import { 
  Zap, 
  Smartphone, 
  Banknote, 
  Copy, 
  Check, 
  ExternalLink, 
  Phone, 
  MessageCircle 
} from 'lucide-vue-next'

const props = withDefaults(defineProps<{
  modelValue: boolean
  initialTab?: 'instapay' | 'vodafone' | 'cod'
}>(), {
  initialTab: 'instapay'
})

const emit = defineEmits<{
  (e: 'update:modelValue', val: boolean): void
}>()

const activeTab = ref<'instapay' | 'vodafone' | 'cod'>(props.initialTab)
const copiedKey = ref<string | null>(null)

watch(() => props.initialTab, (newTab) => {
  if (newTab) activeTab.value = newTab
})

const copyText = (text: string, key: string) => {
  if (typeof navigator !== 'undefined') {
    navigator.clipboard.writeText(text)
    copiedKey.value = key
    setTimeout(() => {
      copiedKey.value = null
    }, 2000)
  }
}

const closeModal = () => {
  emit('update:modelValue', false)
}
</script>

<template>
  <UiModal
    :model-value="modelValue"
    title="طرق الدفع المتاحة"
    subtitle="الدفع الإلكتروني والمباشر"
    max-width="lg"
    @update:model-value="closeModal"
  >
    <div class="space-y-6">
      
      <!-- Payment Method Navigation Tabs -->
      <div class="grid grid-cols-3 gap-2 p-1.5 rounded-xl bg-secondary border border-muted-border">
        <button
          @click="activeTab = 'instapay'"
          :class="[
            'py-2.5 px-3 rounded-lg text-xs font-body font-bold transition-all duration-300 flex items-center justify-center gap-2',
            activeTab === 'instapay' 
              ? 'bg-primary text-accent shadow-sm border border-accent/20' 
              : 'text-muted-text hover:text-primary hover:bg-white/50'
          ]"
        >
          <Zap class="w-3.5 h-3.5" />
          <span>إنستا باي</span>
        </button>

        <button
          @click="activeTab = 'vodafone'"
          :class="[
            'py-2.5 px-3 rounded-lg text-xs font-body font-bold transition-all duration-300 flex items-center justify-center gap-2',
            activeTab === 'vodafone' 
              ? 'bg-primary text-accent shadow-sm border border-accent/20' 
              : 'text-muted-text hover:text-primary hover:bg-white/50'
          ]"
        >
          <Smartphone class="w-3.5 h-3.5" />
          <span>فودافون كاش</span>
        </button>

        <button
          @click="activeTab = 'cod'"
          :class="[
            'py-2.5 px-3 rounded-lg text-xs font-body font-bold transition-all duration-300 flex items-center justify-center gap-2',
            activeTab === 'cod' 
              ? 'bg-primary text-accent shadow-sm border border-accent/20' 
              : 'text-muted-text hover:text-primary hover:bg-white/50'
          ]"
        >
          <Banknote class="w-3.5 h-3.5" />
          <span>عند الاستلام</span>
        </button>
      </div>

      <!-- TAB 1: INSTAPAY -->
      <div v-if="activeTab === 'instapay'" class="space-y-4 animate-fadeIn">
        <div class="p-4 rounded-xl bg-purple-950/5 border border-purple-500/20 text-xs text-purple-900 leading-relaxed">
          <p class="font-medium">✨ يمكنك التحويل الفوري عبر تطبيق إنستا باي لـ InstaPay باستخدام المعرف أو الرابط المباشر:</p>
        </div>

        <!-- Account 1 -->
        <div class="p-5 rounded-2xl bg-white border border-muted-border shadow-soft space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <span class="text-xs font-mono text-muted-text block">حساب إنستا باي (الحساب الأول)</span>
                <span class="font-sans font-bold text-base text-primary block dir-ltr text-start">thabetloutfy93@instapay</span>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-2 pt-2 border-t border-muted-border">
            <a
              href="https://ipn.eg/S/thabetloutfy93/instapay/8qNwjr"
              target="_blank"
              class="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-primary text-accent hover:bg-primary/90 text-xs font-body font-bold transition-colors shadow-sm"
            >
              <ExternalLink class="w-3.5 h-3.5" />
              <span>رابط التحويل</span>
            </a>

            <button
              @click="copyText('thabetloutfy93@instapay', 'insta1')"
              class="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-secondary text-primary hover:bg-muted-border text-xs font-body font-bold transition-colors border border-muted-border"
            >
              <Check v-if="copiedKey === 'insta1'" class="w-3.5 h-3.5 text-emerald-600" />
              <Copy v-else class="w-3.5 h-3.5" />
              <span>{{ copiedKey === 'insta1' ? 'تم النسخ!' : 'نسخ المعرف' }}</span>
            </button>
          </div>
        </div>

        <!-- Account 2 -->
        <div class="p-5 rounded-2xl bg-white border border-muted-border shadow-soft space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <span class="text-xs font-mono text-muted-text block">حساب إنستا باي (الحساب الثاني)</span>
                <span class="font-sans font-bold text-base text-primary block dir-ltr text-start">boryu@instapay</span>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-2 pt-2 border-t border-muted-border">
            <a
              href="https://ipn.eg/S/boryu/instapay/9eUeLR"
              target="_blank"
              class="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-primary text-accent hover:bg-primary/90 text-xs font-body font-bold transition-colors shadow-sm"
            >
              <ExternalLink class="w-3.5 h-3.5" />
              <span>رابط التحويل</span>
            </a>

            <button
              @click="copyText('boryu@instapay', 'insta2')"
              class="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-secondary text-primary hover:bg-muted-border text-xs font-body font-bold transition-colors border border-muted-border"
            >
              <Check v-if="copiedKey === 'insta2'" class="w-3.5 h-3.5 text-emerald-600" />
              <Copy v-else class="w-3.5 h-3.5" />
              <span>{{ copiedKey === 'insta2' ? 'تم النسخ!' : 'نسخ المعرف' }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- TAB 2: VODAFONE CASH -->
      <div v-else-if="activeTab === 'vodafone'" class="space-y-4 animate-fadeIn">
        <div class="p-4 rounded-xl bg-red-950/5 border border-red-500/20 text-xs text-red-900 leading-relaxed">
          <p class="font-medium">📱 يمكنك تحويل المبلغ عبر المحفظة الإلكترونية فودافون كاش إلى الرقم التالي:</p>
        </div>

        <div class="p-6 rounded-2xl bg-white border border-muted-border shadow-soft space-y-6 text-center">
          <div class="space-y-2">
            <span class="text-xs font-mono uppercase tracking-widest text-muted-text block">رقم فودافون كاش الرئيسي</span>
            <span class="font-sans text-3xl font-extrabold text-primary tracking-wider block" dir="ltr">01062641050</span>
          </div>

          <div class="grid grid-cols-3 gap-2 pt-4 border-t border-muted-border">
            <button
              @click="copyText('01062641050', 'voda')"
              class="flex flex-col items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-secondary hover:bg-muted-border text-primary text-xs font-body font-bold transition-colors border border-muted-border"
            >
              <Check v-if="copiedKey === 'voda'" class="w-4 h-4 text-emerald-600" />
              <Copy v-else class="w-4 h-4 text-primary" />
              <span>{{ copiedKey === 'voda' ? 'تم النسخ' : 'نسخ الرقم' }}</span>
            </button>

            <a
              href="https://wa.me/201062641050"
              target="_blank"
              class="flex flex-col items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 text-xs font-body font-bold transition-colors"
            >
              <MessageCircle class="w-4 h-4" />
              <span>واتساب</span>
            </a>

            <a
              href="tel:+201062641050"
              class="flex flex-col items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-primary text-accent hover:bg-primary/90 text-xs font-body font-bold transition-colors shadow-sm"
            >
              <Phone class="w-4 h-4" />
              <span>اتصال</span>
            </a>
          </div>
        </div>
      </div>

      <!-- TAB 3: CASH ON DELIVERY -->
      <div v-else-if="activeTab === 'cod'" class="space-y-4 animate-fadeIn">
        <div class="p-6 rounded-2xl bg-white border border-muted-border shadow-soft space-y-4">
          <div class="flex items-center gap-3 text-emerald-700">
            <Banknote class="w-6 h-6 shrink-0" />
            <h4 class="font-heading text-lg font-semibold text-primary">الدفع نقداً عند الاستلام</h4>
          </div>

          <p class="text-sm text-muted-text font-light leading-relaxed">
            نسعد بخدمتكم وتوفير خيار الدفع نقداً عند استلام الطلب مباشرة من ممثل الشحن حتى باب منزلك، أو عند الشراء المباشر من أحد معارضنا في <strong>القاهرة - مدينة نصر</strong> أو <strong>شرم الشيخ</strong>.
          </p>

          <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-medium">
            ✔ الدفع نقداً متاح لجميع الطلبات داخل جمهورية مصر العربية.
          </div>
        </div>
      </div>

    </div>
  </UiModal>
</template>
