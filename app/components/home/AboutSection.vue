<script setup lang="ts">
import { ref } from 'vue'
import { useAnimatedCounter } from '~/composables/useAnimatedCounter'

// Animated Counters setup
const counterBranches = useAnimatedCounter(2, 1800, '', '')
const counterClients = useAnimatedCounter(15000, 2200, '', '+')
const counterBrands = useAnimatedCounter(50, 1800, '', '+')
const counterCommitment = useAnimatedCounter(100, 1500, '', '%')

const specializations = [
  {
    title: "Women's Fashion",
    subtitle: "Haute Couture & Ready-to-Wear",
    description: "Refined silhouettes, architectural evening gowns, and everyday luxury staples tailored from exquisite European silks and velvets.",
    badge: "Haute Couture",
    badgeVariant: "dark" as const,
    icon: "✦"
  },
  {
    title: "Handcrafted Handbags",
    subtitle: "Supple Italian Leather & Silk",
    description: "Signature totes, evening clutches, and structured top-handles featuring 24k gold-plated hardware and meticulous hand-stitching.",
    badge: "Signature",
    badgeVariant: "gold" as const,
    icon: "💼"
  },
  {
    title: "Bespoke Accessories",
    subtitle: "Jewelry, Belts & Silk Scarves",
    description: "The finishing touches of feminine power — handcrafted statement belts, gold-threaded scarves, and artisanal jewelry pieces.",
    badge: "Artisanal",
    badgeVariant: "cream" as const,
    icon: "👑"
  },
  {
    title: "Luxury Makeup & Beauty",
    subtitle: "Luminous Compacts & Lip Palettes",
    description: "Formulated with crushed pearl and nourishing rose essences, housed in ultra-luxurious gold compacts designed to be treasured.",
    badge: "Luminous",
    badgeVariant: "glass" as const,
    icon: "✨"
  },
  {
    title: "Premium Outlet Brands",
    subtitle: "Curated Designer Discoveries",
    description: "Making high fashion accessible. Explore authentic past-season collections from premier global fashion houses at up to 50% off.",
    badge: "Affordable Luxury",
    badgeVariant: "outlet" as const,
    icon: "🏷️"
  }
]

const timelineEvents = [
  {
    year: "2018",
    title: "The Spark of Elegance",
    location: "Paris & Cairo Inspiration",
    description: "Founded by Mervat with a singular vision: creating an intimate sanctuary where high-fashion craftsmanship meets modern feminine grace."
  },
  {
    year: "2021",
    title: "Cairo Flagship Showroom",
    location: "New Cairo & Galleria District",
    description: "Expanded our offerings into complete women's ready-to-wear collections and opened our landmark Cairo showroom to VIP clientele."
  },
  {
    year: "2024",
    title: "Sharm El Sheikh & Beauty",
    location: "Red Sea Luxury Promenade",
    description: "Inaugurated our second premier boutique in resort-haven Sharm El Sheikh alongside the debut of our Luminous Makeup collection."
  },
  {
    year: "2026",
    title: "The Affordable Luxury Era",
    location: "Nationwide & Online",
    description: "Revolutionizing Egyptian retail by launching our Premium Outlet concept — bringing world-class luxury closer to every woman without compromise."
  }
]
</script>

<template>
  <section id="about" class="relative bg-background py-20 lg:py-28 overflow-hidden border-t border-muted">
    
    <!-- Ambient Background Decorative Glows -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div class="absolute top-1/3 -left-32 w-[28rem] h-[28rem] rounded-full bg-accent/10 blur-3xl" />
      <div class="absolute bottom-1/4 -right-32 w-[32rem] h-[32rem] rounded-full bg-secondary blur-3xl" />
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
            <div class="absolute -left-2 sm:-left-8 top-16 sm:top-24 bg-white/95 backdrop-blur-xl p-6 sm:p-8 max-w-[240px] sm:max-w-[280px] shadow-2xl border-l-2 border-[#D4AF37] transform transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-4 z-30">
              <p class="font-heading italic text-lg sm:text-xl text-primary leading-snug font-light">
                “True luxury is where uncompromising craftsmanship meets everyday joy.”
              </p>
              <span class="block mt-6 font-body text-[9px] font-bold text-[#B59021] uppercase tracking-[0.3em]">
                Mervat &mdash; Founder
              </span>
            </div>
            
            <!-- Floating Secondary Image -->
            <div class="absolute -bottom-8 sm:-bottom-12 -right-2 sm:-right-8 w-3/5 aspect-[4/5] overflow-hidden shadow-2xl bg-white border border-white/50 transform transition-transform duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-6 z-20 rounded-sm">
              <img
                src="/images/luxury_handbag.png"
                alt="Handcrafted Italian Leather Handbag"
                class="w-full h-full object-cover transition-transform duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] scale-110 group-hover:scale-100"
              />
            </div>
          </div>
        </div>

        <!-- Right Column: Editorial Narrative -->
        <div class="w-full lg:w-1/2 space-y-10 sm:space-y-12 lg:pl-8 mt-12 lg:mt-0">
          <div class="space-y-4 sm:space-y-6">
            <span class="text-[10px] font-body uppercase tracking-[0.4em] text-[#B59021] font-semibold block">
              Our Heritage & Vision
            </span>
            <h2 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-primary leading-[1.1]">
              The Story of <br />
              <span class="italic font-light text-gradient-gold">Mervat Brand.</span>
            </h2>
          </div>

          <div class="space-y-5 sm:space-y-6 font-body text-base sm:text-lg text-muted-text font-light leading-relaxed max-w-xl">
            <p>
              Founded from a deep reverence for sophisticated elegance and feminine poise, <strong class="font-normal text-primary">Mervat Brand</strong> began as a dream to redefine the modern boutique experience across Egypt and the Middle East.
            </p>
            <p>
              We believe that every woman deserves to feel empowered and radiantly confident. That is why our houses bridge the worlds of bespoke high fashion with <strong class="font-normal text-primary">Affordable Luxury</strong>. Whether selecting an architectural evening gown, a supple calf-leather handbag, or our finely milled makeup palettes, our promise remains unwavering.
            </p>
          </div>

          <!-- Refined Affordable Luxury Callout -->
          <div class="pl-6 sm:pl-8 border-l border-[#D4AF37]/40 max-w-lg">
            <h3 class="font-heading text-xl sm:text-2xl font-normal text-primary mb-2 sm:mb-3">
              The Affordable Luxury Guarantee
            </h3>
            <p class="text-sm sm:text-base text-muted-text font-light leading-relaxed">
              By maintaining direct artisanal atelier relationships and introducing our specialized Outlet Collections, we democratize elite fashion without compromise.
            </p>
          </div>

          <div class="pt-4 sm:pt-6 flex flex-wrap gap-6 sm:gap-8 items-center">
            <a href="#gallery" class="group flex items-center gap-4 sm:gap-6 text-primary text-xs sm:text-sm font-heading font-semibold uppercase tracking-[0.2em]" data-cursor-text="Explore">
              <span>Explore The Collections</span>
              <span class="w-10 sm:w-12 h-[1px] bg-[#D4AF37] transform origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-150"></span>
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
          <div :ref="el => { if (el) counterBranches.elementRef.value = el as HTMLElement }" class="space-y-2 border-r border-white/10 last:border-0">
            <span class="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-accent block tracking-tight">
              {{ counterBranches.formattedValue.value }}
            </span>
            <span class="font-body text-xs sm:text-sm uppercase tracking-widest text-gray-300 font-medium block">
              Flagship Showrooms
            </span>
            <span class="text-[11px] text-gray-400 font-light block">
              Cairo & Sharm El Sheikh
            </span>
          </div>

          <!-- Counter 2: Happy Clients -->
          <div :ref="el => { if (el) counterClients.elementRef.value = el as HTMLElement }" class="space-y-2 border-r border-white/10 last:border-0">
            <span class="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-white block tracking-tight">
              {{ counterClients.formattedValue.value }}
            </span>
            <span class="font-body text-xs sm:text-sm uppercase tracking-widest text-[#B59021] font-medium block">
              Discerning Women
            </span>
            <span class="text-[11px] text-gray-400 font-light block">
              VIP Members & Loyal Clients
            </span>
          </div>

          <!-- Counter 3: Brands & Collections -->
          <div :ref="el => { if (el) counterBrands.elementRef.value = el as HTMLElement }" class="space-y-2 border-r border-white/10 last:border-0">
            <span class="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-accent block tracking-tight">
              {{ counterBrands.formattedValue.value }}
            </span>
            <span class="font-body text-xs sm:text-sm uppercase tracking-widest text-gray-300 font-medium block">
              Curated Brands
            </span>
            <span class="text-[11px] text-gray-400 font-light block">
              Haute Couture & Outlet Discoveries
            </span>
          </div>

          <!-- Counter 4: Affordable Luxury Commitment -->
          <div :ref="el => { if (el) counterCommitment.elementRef.value = el as HTMLElement }" class="space-y-2">
            <span class="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-white block tracking-tight">
              {{ counterCommitment.formattedValue.value }}
            </span>
            <span class="font-body text-xs sm:text-sm uppercase tracking-widest text-[#B59021] font-medium block">
              Affordable Luxury
            </span>
            <span class="text-[11px] text-gray-400 font-light block">
              Uncompromising Quality Commitment
            </span>
          </div>
        </div>
      </div>

      <!-- PART 3: 5 CORE SPECIALIZATIONS GRID -->
      <div class="space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-4">
          <span class="text-xs font-body uppercase tracking-[0.3em] text-[#B59021] font-semibold">
            Bespoke Craftsmanship
          </span>
          <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-primary">
            Curated Worlds of Elegance
          </h2>
          <p class="text-muted-text text-base font-light">
            From the runway to everyday radiance, explore our five specialized pillars designed to elevate every aspect of the modern feminine wardrobe.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- First 3 Cards -->
          <div
            v-for="spec in specializations.slice(0, 3)"
            :key="spec.title"
            class="group rounded-2xl bg-white border border-muted-border/90 p-8 shadow-soft hover:shadow-luxury transition-all duration-500 flex flex-col justify-between space-y-6 hover:-translate-y-1.5 relative overflow-hidden"
          >
            <div class="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full transition-transform duration-500 group-hover:scale-125 pointer-events-none" />
            
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

            <div class="pt-4 border-t border-muted/80 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-primary group-hover:text-[#B59021] transition-colors">
              <span>Discover Collection</span>
              <span class="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
            </div>
          </div>

          <!-- Bottom 2 Cards (Span 1.5 columns each on desktop if needed, or normal 2 across in 3-col grid) -->
          <div
            v-for="spec in specializations.slice(3, 5)"
            :key="spec.title"
            :class="[
              'group rounded-2xl bg-white border border-muted-border/90 p-8 shadow-soft hover:shadow-luxury transition-all duration-500 flex flex-col justify-between space-y-6 hover:-translate-y-1.5 relative overflow-hidden',
              spec.badge === 'Affordable Luxury' ? 'md:col-span-2 lg:col-span-2 border-[#D4AF37]/50 bg-gradient-to-br from-white via-[#FAF9F6] to-secondary/30' : ''
            ]"
          >
            <div class="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-bl-full transition-transform duration-500 group-hover:scale-125 pointer-events-none" />
            
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

            <div class="pt-4 border-t border-muted/80 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-primary group-hover:text-[#B59021] transition-colors">
              <span>Discover Collection</span>
              <span class="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
            </div>
          </div>
        </div>
      </div>

      <!-- PART 4: ELEGANT TIMELINE CARDS -->
      <div class="space-y-12 pt-8 border-t border-muted/80">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs font-body uppercase tracking-[0.3em] text-[#B59021] font-semibold">
            Chronicles of Grace
          </span>
          <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-primary">
            Our Journey & Milestones
          </h2>
          <p class="text-muted-text text-sm sm:text-base font-light">
            From an intimate concept to a premier dual-city destination spanning Cairo and Sharm El Sheikh.
          </p>
        </div>

        <div class="relative">
          <!-- Connecting Line for Desktop -->
          <div class="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent -translate-y-1/2 z-0" />

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
              Destinations in Egypt
            </span>
            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-primary">
              Our Flagship Showrooms
            </h2>
            <p class="text-muted-text text-base font-light">
              Immerse yourself in personal styling sessions, bespoke tailoring, and exclusive outlet discoveries across two iconic Egyptian destinations.
            </p>
          </div>
          <UiBadge variant="gold" size="lg" dot class="self-start md:self-auto">
            Open Daily Across Both Cities
          </UiBadge>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <!-- Cairo Showroom Card -->
          <div class="group rounded-3xl bg-secondary/80 border border-[#D4AF37]/40 overflow-hidden shadow-luxury transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between">
            <div class="p-8 sm:p-10 space-y-6">
              <div class="flex items-start justify-between">
                <div>
                  <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#B59021] font-bold block">
                    Capital Showroom
                  </span>
                  <h3 class="font-heading text-3xl sm:text-4xl font-medium text-primary mt-1">
                    Cairo Flagship Boutique
                  </h3>
                </div>
                <div class="w-12 h-12 rounded-full bg-primary text-accent flex items-center justify-center font-heading font-bold text-xl shadow-sm">
                  C
                </div>
              </div>

              <p class="text-muted-text text-base font-light leading-relaxed">
                Located in the heart of New Cairo and Downtown Galleria. Designed for private styling consultations, haute couture fittings, and showcasing our complete women's fashion and leather handbag lines.
              </p>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-muted-border">
                <div class="space-y-1 text-xs">
                  <span class="font-mono text-muted-text uppercase block font-semibold">📍 Location Address</span>
                  <p class="text-primary font-medium">New Cairo • Galleria Avenue, Suite 101</p>
                </div>
                <div class="space-y-1 text-xs">
                  <span class="font-mono text-muted-text uppercase block font-semibold">🕒 Showroom Hours</span>
                  <p class="text-primary font-medium">Daily: 10:00 AM — 11:00 PM</p>
                </div>
              </div>
            </div>

            <div class="bg-primary/95 text-white px-8 py-4 flex items-center justify-between border-t border-accent/20">
              <span class="text-xs font-body uppercase tracking-widest text-gray-300">VIP Concierge & Styling</span>
              <span class="text-accent font-heading font-semibold text-sm">Book Cairo Appointment →</span>
            </div>
          </div>

          <!-- Sharm El Sheikh Showroom Card -->
          <div class="group rounded-3xl bg-secondary/80 border border-[#D4AF37]/40 overflow-hidden shadow-luxury transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between">
            <div class="p-8 sm:p-10 space-y-6">
              <div class="flex items-start justify-between">
                <div>
                  <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#B59021] font-bold block">
                    Red Sea Resort Lounge
                  </span>
                  <h3 class="font-heading text-3xl sm:text-4xl font-medium text-primary mt-1">
                    Sharm El Sheikh Showroom
                  </h3>
                </div>
                <div class="w-12 h-12 rounded-full bg-accent text-primary flex items-center justify-center font-heading font-bold text-xl shadow-sm">
                  S
                </div>
              </div>

              <p class="text-muted-text text-base font-light leading-relaxed">
                Nestled along the prestigious Red Sea Luxury Promenade. Offering resort-ready couture, exclusive Luminous Makeup compacts, and our dedicated Premium Outlet lounge with up to 50% savings.
              </p>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-muted-border">
                <div class="space-y-1 text-xs">
                  <span class="font-mono text-muted-text uppercase block font-semibold">📍 Location Address</span>
                  <p class="text-primary font-medium">Sharm El Sheikh • Luxury Promenade, Villa 4</p>
                </div>
                <div class="space-y-1 text-xs">
                  <span class="font-mono text-muted-text uppercase block font-semibold">🕒 Showroom Hours</span>
                  <p class="text-primary font-medium">Daily: 11:00 AM — Midnight</p>
                </div>
              </div>
            </div>

            <div class="bg-primary/95 text-white px-8 py-4 flex items-center justify-between border-t border-accent/20">
              <span class="text-xs font-body uppercase tracking-widest text-gray-300">Resort & Outlet Discoveries</span>
              <span class="text-accent font-heading font-semibold text-sm">Explore Sharm Lounge →</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
