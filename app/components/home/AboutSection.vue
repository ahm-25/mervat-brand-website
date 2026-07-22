<script setup lang="ts">
import { ref } from 'vue'
import { useAnimatedCounter } from '~/composables/useAnimatedCounter'

// Animated Counters setup
const counterBranches = useAnimatedCounter(3, 1800, '', '')
const counterClients = useAnimatedCounter(15000, 2200, '', '+')
const counterBrands = useAnimatedCounter(50, 1800, '', '+')
const counterCommitment = useAnimatedCounter(100, 1500, '', '%')

const specializations = [
  {
    title: "أزياء نسائية",
    subtitle: "تصاميم راقية وأزياء جاهزة",
    description: "قصات أنيقة وفساتين سهرة معتمدة على أرقى الأقمشة الحريرية والمخملية لتناسب إطلالتك اليومية والفاخرة.",
    badge: "هوت كوتور",
    badgeVariant: "dark" as const,
    icon: "✦"
  },
  {
    title: "حقائب فاخرة",
    subtitle: "جلود إيطالية وحرير طبيعي",
    description: "حقائب يد وحقائب سهرة مميزة مع إكسسوارات مطلية بالذهب عيار 24 وتطريز يدوي دقيق.",
    badge: "تصميم حصري",
    badgeVariant: "gold" as const,
    icon: "💼"
  },
  {
    title: "إكسسوارات راقية",
    subtitle: "مجوهرات، أحزمة، وأوشحة",
    description: "اللمسة الأخيرة لقوتك وأنوثتك — أحزمة مصنوعة يدوياً، أوشحة بخيوط ذهبية، وقطع مجوهرات فريدة.",
    badge: "صناعة يدوية",
    badgeVariant: "cream" as const,
    icon: "👑"
  },
  {
    title: "مكياج وعناية",
    subtitle: "ألوان مشرقة ولمسات ساحرة",
    description: "تركيبات فاخرة غنية بخلاصة اللؤلؤ والورد، محفوظة في عبوات ذهبية أنيقة لتعكس جمالك الداخلي.",
    badge: "إشراقة",
    badgeVariant: "glass" as const,
    icon: "✨"
  },
  {
    title: "ماركات أوتليت",
    subtitle: "اكتشافات لأرقى المصممين",
    description: "نجعل الموضة الراقية في متناول الجميع. تصفحي مجموعات المواسم السابقة لأشهر دور الأزياء بخصومات تصل إلى 50%.",
    badge: "فخامة بأسعار مناسبة",
    badgeVariant: "outlet" as const,
    icon: "🏷️"
  }
]

const timelineEvents = [
  {
    year: "2018",
    title: "شرارة الأناقة",
    location: "وحي من باريس والقاهرة",
    description: "تأسست تو إم براند برؤية واحدة: خلق ملاذ حميمي يجمع بين الحرفية العالية والأناقة النسائية العصرية."
  },
  {
    year: "2021",
    title: "الفرع الرئيسي بالقاهرة",
    location: "القاهرة - مدينة نصر",
    description: "وسعنا عروضنا لتشمل مجموعات كاملة من الأزياء الجاهزة وافتتحنا فرعنا الرئيسي في القاهرة لاستقبال عملائنا المميزين."
  },
  {
    year: "2024",
    title: "شرم الشيخ والجمال",
    location: "عروس البحر الأحمر",
    description: "افتتحنا فرعنا الثاني في الوجهة السياحية شرم الشيخ بالتزامن مع إطلاق تشكيلة المكياج المشرق."
  },
  {
    year: "2026",
    title: "عصر الفخامة بأسعار في المتناول",
    location: "في جميع الفروع وأونلاين",
    description: "أحدثنا ثورة في تجارة التجزئة بإطلاق مفهوم 'الأوتليت' الفاخر، لنجلب أرقى صيحات الموضة لكل امرأة دون مساومة على الجودة."
  }
]
</script>

<template>
  <section id="about" class="relative bg-background py-20 lg:py-28 overflow-hidden border-t border-muted">
    
    <!-- Ambient Background Decorative Glows -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div class="absolute top-1/3 -start-32 w-[28rem] h-[28rem] rounded-full bg-accent/10 blur-3xl" />
      <div class="absolute bottom-1/4 -end-32 w-[32rem] h-[32rem] rounded-full bg-secondary blur-3xl" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-32">
      
      <!-- PART 1: THE STORY & OVERLAPPING IMAGES EDITORIAL LAYOUT -->
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        <!-- Left Column: Asymmetrical Editorial Composition -->
        <div class="w-full lg:w-1/2 relative flex justify-center lg:justify-start pt-6 pb-16 lg:py-12 px-4 sm:px-8 lg:px-0">
          <div class="relative w-full aspect-[4/5] sm:aspect-[3/4] max-w-md lg:max-w-lg mx-auto lg:mx-0 group cursor-pointer" data-cursor-text="Discover">
            
            <!-- Primary Massive Image -->
            <div class="absolute inset-0 overflow-hidden w-full h-full bg-secondary shadow-2xl rounded-sm">
              <img
                src="/images/luxury_dress.png"
                alt="Mervat Brand Haute Couture Silhouette"
                class="w-full h-full object-cover object-top transition-transform duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
            </div>

            <!-- Overlapping Minimalist Badge -->
            <div class="absolute -start-2 sm:-start-8 top-16 sm:top-24 bg-white/95 backdrop-blur-xl p-6 sm:p-8 max-w-[240px] sm:max-w-[280px] shadow-2xl border-s-2 border-[#D4AF37] transform transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-4 z-30">
              <p class="font-heading italic text-lg sm:text-xl text-primary leading-snug font-light">
                "الفخامة الحقيقية هي عندما تلتقي الجودة العالية ببهجة كل يوم."
              </p>
              <span class="block mt-6 font-body text-[9px] font-bold text-[#B59021] uppercase tracking-[0.3em]">
                2M Brand
              </span>
            </div>
            
            <!-- Floating Secondary Image -->
            <div class="absolute -bottom-8 sm:-bottom-12 -end-2 sm:-end-8 w-3/5 aspect-[4/5] overflow-hidden shadow-2xl bg-white border border-white/50 transform transition-transform duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-6 z-20 rounded-sm">
              <img
                src="/images/luxury_handbag.png"
                alt="Handcrafted Italian Leather Handbag"
                class="w-full h-full object-cover transition-transform duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] scale-110 group-hover:scale-100"
              />
            </div>
          </div>
        </div>

        <!-- Right Column: Editorial Narrative -->
        <div class="w-full lg:w-1/2 space-y-10 sm:space-y-12 lg:pe-8 mt-12 lg:mt-0">
          <div class="space-y-4 sm:space-y-6">
            <span class="text-[10px] font-body uppercase tracking-[0.4em] text-[#B59021] font-semibold block">
              تراثنا ورؤيتنا
            </span>
            <h2 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-primary leading-[1.1]">
              قصة <br />
              <span class="italic font-light text-gradient-gold">تو إم براند أوتليت.</span>
            </h2>
          </div>

          <div class="space-y-5 sm:space-y-6 font-body text-base sm:text-lg text-muted-text font-light leading-relaxed max-w-xl">
            <p>
              تأسست <strong class="font-normal text-primary">تو إم براند أوتليت</strong> من منطلق الاحترام العميق للأناقة الراقية والأنوثة الساحرة، حيث بدأنا كحلم لإعادة تعريف تجربة التسوق في مصر والشرق الأوسط.
            </p>
            <p>
              نؤمن بأن كل امرأة تستحق أن تشعر بالقوة والثقة والإشراق. ولهذا السبب، يجمع متجرنا بين عالم الأزياء الراقية و<strong class="font-normal text-primary">الفخامة بأسعار معقولة</strong>. سواء كنتِ تبحثين عن فستان سهرة خلاب، حقيبة يد جلدية أصلية، أو مستحضرات تجميل فاخرة، فإن وعدنا لكِ يظل ثابتاً.
            </p>
          </div>

          <!-- Refined Affordable Luxury Callout -->
          <div class="pe-6 sm:pe-8 border-s border-[#D4AF37]/40 max-w-lg">
            <h3 class="font-heading text-xl sm:text-2xl font-normal text-primary mb-2 sm:mb-3">
              ضمان الفخامة الميسرة
            </h3>
            <p class="text-sm sm:text-base text-muted-text font-light leading-relaxed">
              من خلال الحفاظ على علاقات مباشرة مع أرقى الورش العالمية وتقديم مجموعات الأوتليت المتخصصة، نتيح لكِ اقتناء أرقى صيحات الموضة دون أي تنازل عن الجودة.
            </p>
          </div>

          <div class="pt-4 sm:pt-6 flex flex-wrap gap-6 sm:gap-8 items-center">
            <a href="#gallery" class="group flex items-center gap-4 sm:gap-6 text-primary text-xs sm:text-sm font-heading font-semibold uppercase tracking-[0.2em]" data-cursor-text="تصفح">
              <span>تصفح المجموعات</span>
              <span class="w-10 sm:w-12 h-[1px] bg-[#D4AF37] transform origin-start transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-150"></span>
            </a>
          </div>
        </div>

      </div>

      <!-- PART 2: ANIMATED COUNTERS STRIP -->
      <div class="p-8 sm:p-12 rounded-3xl bg-primary text-white shadow-luxury relative overflow-hidden border border-accent/20">
        <!-- Subtle Gold pattern overlay -->
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div class="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center">
          <!-- Counter 1: Branches -->
          <div :ref="el => { if (el) counterBranches.elementRef.value = el as HTMLElement }" class="space-y-2 border-e border-white/10 last:border-0">
            <span class="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-accent block tracking-tight">
              {{ counterBranches.formattedValue.value }}
            </span>
            <span class="font-body text-xs sm:text-sm uppercase tracking-widest text-gray-300 font-medium block">
              فروعنا
            </span>
            <span class="text-[11px] text-gray-400 font-light block">
              القاهرة وشرم الشيخ
            </span>
          </div>

          <!-- Counter 2: Happy Clients -->
          <div :ref="el => { if (el) counterClients.elementRef.value = el as HTMLElement }" class="space-y-2 border-e border-white/10 last:border-0">
            <span class="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-white block tracking-tight">
              {{ counterClients.formattedValue.value }}
            </span>
            <span class="font-body text-xs sm:text-sm uppercase tracking-widest text-[#B59021] font-medium block">
              سيدة راقية
            </span>
            <span class="text-[11px] text-gray-400 font-light block">
              عملاء مميزين وأعضاء VIP
            </span>
          </div>

          <!-- Counter 3: Brands & Collections -->
          <div :ref="el => { if (el) counterBrands.elementRef.value = el as HTMLElement }" class="space-y-2 border-e border-white/10 last:border-0">
            <span class="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-accent block tracking-tight">
              {{ counterBrands.formattedValue.value }}
            </span>
            <span class="font-body text-xs sm:text-sm uppercase tracking-widest text-gray-300 font-medium block">
              ماركات عالمية
            </span>
            <span class="text-[11px] text-gray-400 font-light block">
              أزياء راقية ومكتشفات أوتليت
            </span>
          </div>

          <!-- Counter 4: Affordable Luxury Commitment -->
          <div :ref="el => { if (el) counterCommitment.elementRef.value = el as HTMLElement }" class="space-y-2">
            <span class="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-white block tracking-tight">
              {{ counterCommitment.formattedValue.value }}
            </span>
            <span class="font-body text-xs sm:text-sm uppercase tracking-widest text-[#B59021] font-medium block">
              فخامة في المتناول
            </span>
            <span class="text-[11px] text-gray-400 font-light block">
              التزام لا هوادة فيه بالجودة
            </span>
          </div>
        </div>
      </div>

      <!-- PART 3: 5 CORE SPECIALIZATIONS GRID -->
      <div class="space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-4">
          <span class="text-xs font-body uppercase tracking-[0.3em] text-[#B59021] font-semibold">
            حرفية لا مثيل لها
          </span>
          <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-primary">
            عوالم من الأناقة المختارة
          </h2>
          <p class="text-muted-text text-base font-light">
            من منصات عروض الأزياء إلى إشراقتك اليومية، استكشفي ركائزنا الخمسة المصممة للارتقاء بكل تفاصيل خزانتك.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- First 3 Cards -->
          <div
            v-for="spec in specializations.slice(0, 3)"
            :key="spec.title"
            class="group rounded-2xl bg-white border border-muted-border/90 p-8 shadow-soft hover:shadow-luxury transition-all duration-500 flex flex-col justify-between space-y-6 hover:-translate-y-1.5 relative overflow-hidden"
          >
            <div class="absolute top-0 end-0 w-32 h-32 bg-accent/5 rounded-es-full transition-transform duration-500 group-hover:scale-125 pointer-events-none" />
            
            <div class="space-y-4 relative z-10">
              <div class="flex items-center justify-between">
                <span class="text-3xl sm:text-4xl p-3 rounded-xl bg-secondary text-primary block shadow-sm border border-muted-border">
                  {{ spec.icon }}
                </span>
                <UiBadge :variant="spec.badgeVariant" size="sm">{{ spec.badge }}</UiBadge>
              </div>
              
              <div>
                <h3 class="font-heading text-2xl font-medium text-primary group-hover:text-accent transition-colors">
                  {{ spec.title }}
                </h3>
                <span class="text-xs font-mono uppercase tracking-wider text-[#B59021] block mt-1 font-semibold">
                  {{ spec.subtitle }}
                </span>
              </div>

              <p class="text-sm text-muted-text font-light leading-relaxed">
                {{ spec.description }}
              </p>
            </div>
          </div>

          <!-- Bottom 2 Cards -->
          <div
            v-for="spec in specializations.slice(3, 5)"
            :key="spec.title"
            :class="[
              'group rounded-2xl bg-white border border-muted-border/90 p-8 shadow-soft hover:shadow-luxury transition-all duration-500 flex flex-col justify-between space-y-6 hover:-translate-y-1.5 relative overflow-hidden',
              spec.badge === 'فخامة بأسعار مناسبة' ? 'md:col-span-2 lg:col-span-2 border-[#D4AF37]/50 bg-gradient-to-br from-white via-[#FAF9F6] to-secondary/30' : ''
            ]"
          >
            <div class="absolute top-0 end-0 w-40 h-40 bg-accent/10 rounded-es-full transition-transform duration-500 group-hover:scale-125 pointer-events-none" />
            
            <div class="space-y-4 relative z-10">
              <div class="flex items-center justify-between">
                <span class="text-3xl sm:text-4xl p-3 rounded-xl bg-secondary text-primary block shadow-sm border border-muted-border">
                  {{ spec.icon }}
                </span>
                <UiBadge :variant="spec.badgeVariant" size="md">{{ spec.badge }}</UiBadge>
              </div>
              
              <div>
                <h3 class="font-heading text-2xl sm:text-3xl font-medium text-primary group-hover:text-accent transition-colors">
                  {{ spec.title }}
                </h3>
                <span class="text-xs font-mono uppercase tracking-wider text-[#B59021] block mt-1 font-semibold">
                  {{ spec.subtitle }}
                </span>
              </div>

              <p class="text-sm sm:text-base text-muted-text font-light leading-relaxed max-w-2xl">
                {{ spec.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- PART 4: ELEGANT TIMELINE CARDS -->
      <div class="space-y-12 pt-8 border-t border-muted/80">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs font-body uppercase tracking-[0.3em] text-[#B59021] font-semibold">
            سجلات النجاح
          </span>
          <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-primary">
            رحلتنا وإنجازاتنا
          </h2>
          <p class="text-muted-text text-sm sm:text-base font-light">
            من فكرة ملهمة إلى وجهة بارزة تمتد عبر القاهرة وشرم الشيخ.
          </p>
        </div>

        <div class="relative">
          <!-- Connecting Line for Desktop -->
          <div class="hidden lg:block absolute top-1/2 start-0 end-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent -translate-y-1/2 z-0" />

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            <div
              v-for="(event, idx) in timelineEvents"
              :key="event.year"
              class="glass-card bg-white/95 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-[#D4AF37]/30 shadow-soft hover:shadow-luxury transition-all duration-500 space-y-4 flex flex-col justify-between hover:-translate-y-1 group"
            >
              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <span class="font-heading text-3xl sm:text-4xl font-bold text-gradient-gold">
                    {{ event.year }}
                  </span>
                  <div class="w-8 h-8 rounded-full bg-secondary border border-[#D4AF37]/40 flex items-center justify-center text-[#B59021] font-mono text-xs font-bold group-hover:bg-primary group-hover:text-accent transition-colors">
                    0{{ idx + 1 }}
                  </div>
                </div>
                <h3 class="font-heading text-xl font-medium text-primary pt-1">
                  {{ event.title }}
                </h3>
                <span class="text-xs font-mono uppercase tracking-wider text-muted-text block font-medium">
                  📍 {{ event.location }}
                </span>
              </div>

              <p class="text-xs sm:text-sm text-muted-text font-light leading-relaxed pt-3 border-t border-muted/60">
                {{ event.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- PART 5: LUXURY BRANCHES SPOTLIGHT (CAIRO & SHARM EL SHEIKH) -->
      <div id="branches" class="space-y-12 pt-8 border-t border-muted/80">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div class="space-y-3 max-w-2xl">
            <span class="text-xs font-body uppercase tracking-[0.3em] text-[#B59021] font-semibold">
              وجهاتنا في مصر
            </span>
            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-primary">
              معارضنا الرئيسية
            </h2>
            <p class="text-muted-text text-base font-light">
              انغمسي في جلسات تنسيق الأزياء الشخصية، الخياطة المخصصة، واكتشافات الأوتليت الحصرية عبر وجهتين أيقونيتين في مصر.
            </p>
          </div>
          <UiBadge variant="gold" size="lg" dot class="self-start md:self-auto">
            نستقبلكم يومياً في كلي المدينتين
          </UiBadge>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <!-- Cairo Showroom Card -->
          <div class="group rounded-3xl bg-secondary/80 border border-[#D4AF37]/40 overflow-hidden shadow-luxury transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between">
            <!-- Store Image Header -->
            <div class="relative h-56 w-full overflow-hidden bg-black/40">
              <img src="/images/d32a01ee-5f94-4d6b-b1e3-e5d810f31a90.jfif" alt="فرع القاهرة مدينة نصر" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/40 to-transparent" />
              <div class="absolute bottom-4 right-6 left-6 flex items-start justify-between">
                <div>
                  <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#B59021] font-bold block drop-shadow-md">
                    الفرع الرئيسي
                  </span>
                  <h3 class="font-heading text-3xl sm:text-4xl font-medium text-primary mt-1 drop-shadow-md">
                    فرع القاهرة
                  </h3>
                </div>
                <div class="w-12 h-12 rounded-full bg-primary text-accent flex items-center justify-center font-heading font-bold text-xl shadow-md border border-[#D4AF37]/30">
                  C
                </div>
              </div>
            </div>

            <div class="p-8 sm:p-10 space-y-6 pt-4">
              <p class="text-muted-text text-base font-light leading-relaxed">
                استمتعي بأرقى تشكيلات الإكسسوارات والمكياج والملابس في فرعنا بالقاهرة. اكتشفي تنوعاً واسعاً من الأزياء العصرية المصممة لتمنحك إطلالة استثنائية.
              </p>

              <div class="pt-4 border-t border-muted-border">
                <div class="space-y-1 text-xs">
                  <span class="font-mono text-muted-text uppercase block font-semibold">📍 الموقع</span>
                  <a href="https://maps.app.goo.gl/jDXHZaxJdhbsxAbe7" target="_blank" class="text-primary font-medium hover:text-[#B59021] transition-colors block">فرع القاهرة - مدينة نصر</a>
                </div>
              </div>
            </div>

            <div class="bg-primary/95 text-white px-8 py-4 flex items-center justify-between border-t border-accent/20">
              <span class="text-xs font-body uppercase tracking-widest text-gray-300">اكتشفي الأناقة</span>
              <a href="https://maps.app.goo.gl/jDXHZaxJdhbsxAbe7" target="_blank" class="text-accent font-heading font-semibold text-sm">عرض الخريطة ←</a>
            </div>
          </div>

          <!-- Sharm El Sheikh Showroom Card -->
          <div class="group rounded-3xl bg-secondary/80 border border-[#D4AF37]/40 overflow-hidden shadow-luxury transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between">
            <!-- Store Image Header -->
            <div class="relative h-56 w-full overflow-hidden bg-black/40">
              <img src="/images/480dc117-63f8-42c9-8f35-939c0b0ff629.jfif" alt="فروع شرم الشيخ" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/40 to-transparent" />
              <div class="absolute bottom-4 right-6 left-6 flex items-start justify-between">
                <div>
                  <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#B59021] font-bold block drop-shadow-md">
                    فروع البحر الأحمر
                  </span>
                  <h3 class="font-heading text-3xl sm:text-4xl font-medium text-primary mt-1 drop-shadow-md">
                    شرم الشيخ
                  </h3>
                </div>
                <div class="w-12 h-12 rounded-full bg-accent text-primary flex items-center justify-center font-heading font-bold text-xl shadow-md border border-primary/20">
                  S
                </div>
              </div>
            </div>

            <div class="p-8 sm:p-10 space-y-6 pt-4">
              <p class="text-muted-text text-base font-light leading-relaxed">
                زورينا في شرم الشيخ واكتشفي فرعينا الرئيسيين. نوفر لكِ أوسع تشكيلة من الإكسسوارات والملابس، لتجدي كل ما تحتاجينه في مكان واحد.
              </p>

              <div class="pt-4 border-t border-muted-border">
                <div class="space-y-1 text-xs">
                  <span class="font-mono text-muted-text uppercase block font-semibold">📍 الفروع</span>
                  <a href="https://share.google/NJJf6LzntyEGHmTKz" target="_blank" class="text-primary font-medium hover:text-[#B59021] transition-colors block">
                    فرع جليله سيتى خليج نعمه<br/>
                    فرع طريق السلام امام مستشفى شرم الدولى مول الشريف
                  </a>
                </div>
              </div>
            </div>

            <div class="bg-primary/95 text-white px-8 py-4 flex items-center justify-between border-t border-accent/20">
              <span class="text-xs font-body uppercase tracking-widest text-gray-300">اكتشفي الأناقة</span>
              <a href="https://share.google/NJJf6LzntyEGHmTKz" target="_blank" class="text-accent font-heading font-semibold text-sm">عرض الخريطة ←</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
