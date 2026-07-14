<script setup lang="ts">
import { ref } from 'vue'
import { MERVAT_COLORS, MERVAT_SPACING, MERVAT_TYPOGRAPHY, MERVAT_SHADOWS, MERVAT_ANIMATIONS } from '~/utils/design-tokens'
import type { ButtonVariant, ButtonSize } from '~/types/design'

const activeTab = ref<'tokens' | 'typography' | 'buttons' | 'cards' | 'effects'>('tokens')
const copiedColor = ref<string | null>(null)
const isModalOpen = ref(false)
const modalProduct = ref<any>(null)
const isLoadingButton = ref(false)

const copyToClipboard = (hex: string) => {
  if (typeof navigator !== 'undefined') {
    navigator.clipboard.writeText(hex)
    copiedColor.value = hex
    setTimeout(() => {
      copiedColor.value = null
    }, 2000)
  }
}

const toggleButtonLoading = () => {
  isLoadingButton.value = true
  setTimeout(() => {
    isLoadingButton.value = false
  }, 2500)
}

const demoProducts = [
  {
    id: 1,
    title: 'Aura Silk Tote Handbag in Cream & Gold',
    category: 'Handbags & Leather Goods',
    price: 1850,
    originalPrice: 2200,
    image: '/images/luxury_handbag.png',
    badge: 'Best Seller',
    badgeVariant: 'gold' as const,
    description: 'Crafted from supple Italian calf leather and natural silk lining. Features 24k gold-plated signature hardware and an adjustable shoulder strap for timeless day-to-evening versatility.'
  },
  {
    id: 2,
    title: 'Obsidian Velvet Evening Gown',
    category: 'Haute Couture & Women\'s Fashion',
    price: 3400,
    image: '/images/luxury_dress.png',
    isNew: true,
    description: 'An architectural silhouette sculpted from heavy silk velvet with hand-embroidered metallic gold thread detailing along the bodice and flowing train.'
  },
  {
    id: 3,
    title: 'Lumière d\'Or Satin Lip & Palette Compact',
    category: 'Luxury Makeup & Fragrance',
    price: 180,
    originalPrice: 240,
    image: '/images/luxury_makeup.png',
    isOutlet: true,
    description: 'An ultra-luxurious gold compact housing four luminous lip shades and finely milled highlighting powders infused with crushed pearl and rose essence.'
  }
]

const handleQuickView = (id: string | number) => {
  const prod = demoProducts.find(p => p.id === id)
  if (prod) {
    modalProduct.value = prod
    isModalOpen.value = true
  }
}

const handleCardClick = (id: string | number) => {
  handleQuickView(id)
}
</script>

<template>
  <div class="min-h-screen bg-background text-primary font-body antialiased flex flex-col selection:bg-accent/20 selection:text-primary">
    <!-- Global Custom Cursor for Awwwards experience -->
    <UiCustomCursor />

    <!-- Sticky Luxury Navbar (Transparent on top, turns white on scroll) -->
    <LayoutNavbar />

    <!-- Main Hero Section -->
    <HomeHeroSection />

    <!-- Premium About Section (Story, Overlapping Images, 5 Pillars, Timeline & Branches) -->
    <HomeAboutSection />

    <!-- Elegant What We Offer Section -->
    <HomeOffersSection />

    <!-- Award-winning Gallery / Portfolio Section -->
    <HomePortfolioSection />

    <!-- Luxury Branches / Boutiques Section -->
    <HomeBranchesSection />

    <!-- Elegant Contact & Connectivity Section -->
    <HomeContactSection />

    <!-- Design System Section Divider -->
    <section id="design-system" class="pt-20 pb-8 bg-secondary/30 border-y border-muted-border/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <span class="text-xs font-body uppercase tracking-[0.3em] text-[#B59021] font-semibold">
          Architectural Foundation
        </span>
        <h2 class="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-primary">
          Design System & Reusable Components
        </h2>
        <p class="text-muted-text text-sm sm:text-base max-w-2xl mx-auto font-light">
          Explore our reusable tokens, luxury product cards, glassmorphism panels, and interactive elements engineered to power the Mervat Brand ecosystem.
        </p>
      </div>

      <!-- Navigation Tabs for Design System -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <nav class="flex justify-start sm:justify-center space-x-3 sm:space-x-8 overflow-x-auto py-3 scrollbar-none border-b border-muted">
          <button
            type="button"
            :class="[
              'py-2 px-3 text-xs sm:text-sm font-medium tracking-widest uppercase border-b-2 transition-all duration-300 whitespace-nowrap cursor-pointer',
              activeTab === 'tokens' ? 'border-accent text-primary font-semibold' : 'border-transparent text-muted-text hover:text-primary'
            ]"
            @click="activeTab = 'tokens'"
          >
            01. Color & Spacing Tokens
          </button>
          <button
            type="button"
            :class="[
              'py-2 px-3 text-xs sm:text-sm font-medium tracking-widest uppercase border-b-2 transition-all duration-300 whitespace-nowrap cursor-pointer',
              activeTab === 'typography' ? 'border-accent text-primary font-semibold' : 'border-transparent text-muted-text hover:text-primary'
            ]"
            @click="activeTab = 'typography'"
          >
            02. Typography & Hierarchy
          </button>
          <button
            type="button"
            :class="[
              'py-2 px-3 text-xs sm:text-sm font-medium tracking-widest uppercase border-b-2 transition-all duration-300 whitespace-nowrap cursor-pointer',
              activeTab === 'buttons' ? 'border-accent text-primary font-semibold' : 'border-transparent text-muted-text hover:text-primary'
            ]"
            @click="activeTab = 'buttons'"
          >
            03. Buttons & Badges
          </button>
          <button
            type="button"
            :class="[
              'py-2 px-3 text-xs sm:text-sm font-medium tracking-widest uppercase border-b-2 transition-all duration-300 whitespace-nowrap cursor-pointer',
              activeTab === 'cards' ? 'border-accent text-primary font-semibold' : 'border-transparent text-muted-text hover:text-primary'
            ]"
            @click="activeTab = 'cards'"
          >
            04. Luxury Product Cards
          </button>
          <button
            type="button"
            :class="[
              'py-2 px-3 text-xs sm:text-sm font-medium tracking-widest uppercase border-b-2 transition-all duration-300 whitespace-nowrap cursor-pointer',
              activeTab === 'effects' ? 'border-accent text-primary font-semibold' : 'border-transparent text-muted-text hover:text-primary'
            ]"
            @click="activeTab = 'effects'"
          >
            05. Glass Effects & Shadows
          </button>
        </nav>
      </div>
    </section>

    <!-- Main Design System Explorer Content Area -->
    <main id="gallery" class="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">
      
      <!-- TAB 1: COLOR PALETTE & SPACING TOKENS -->
      <section v-if="activeTab === 'tokens'" class="space-y-12 animate-fade-in">
        <div class="space-y-4 max-w-3xl">
          <UiHeading level="h2" subtitle="Visual Identity Tokens" gold-underline>
            Curated Color Palette
          </UiHeading>
          <p class="text-muted-text text-base leading-relaxed">
            Every color token in the Mervat Brand identity is formulated to evoke timeless elegance, feminine power, and uncompromised luxury across women's fashion, handbags, makeup, and outlet collections.
          </p>
        </div>

        <!-- Color Swatches Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(color, key) in MERVAT_COLORS"
            :key="key"
            class="group rounded-lg overflow-hidden border border-muted-border/80 bg-white shadow-soft hover:shadow-luxury transition-all duration-500 flex flex-col justify-between"
          >
            <div
              class="h-36 sm:h-44 w-full flex items-end p-4 relative transition-transform duration-500 group-hover:scale-102"
              :style="{ backgroundColor: color.hex }"
            >
              <button
                type="button"
                class="absolute top-3 right-3 py-1.5 px-3 rounded bg-white/90 backdrop-blur text-primary text-xs font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-primary hover:text-white"
                @click="copyToClipboard(color.hex)"
              >
                {{ copiedColor === color.hex ? 'Copied!' : 'Copy Hex' }}
              </button>
              <span
                class="text-xs font-mono uppercase tracking-widest font-bold py-1 px-2.5 rounded backdrop-blur-sm"
                :style="{ color: color.textColor, backgroundColor: color.textColor === '#FFFFFF' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.7)' }"
              >
                {{ color.hex }}
              </span>
            </div>
            
            <div class="p-5 space-y-2 flex-grow flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between">
                  <h3 class="font-heading text-xl font-medium text-primary">
                    {{ color.name }}
                  </h3>
                  <span class="text-xs font-mono text-muted-text uppercase">{{ key }}</span>
                </div>
                <p class="text-sm text-muted-text mt-2 leading-relaxed">
                  {{ color.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 8px Spacing System Grid -->
        <div class="pt-8 border-t border-muted space-y-6">
          <UiHeading level="h3" subtitle="Layout Rhythm" gold-underline>
            8px Spacing & Border Tokens
          </UiHeading>
          <p class="text-muted-text text-sm max-w-2xl">
            Our strict 8px increment system ensures spatial consistency across mobile and desktop breakpoints. Combined with precision rounded corners and soft shadows, every component feels architectural and polished.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div
              v-for="spacing in MERVAT_SPACING"
              :key="spacing.name"
              class="p-4 rounded-md bg-secondary/30 border border-muted-border flex flex-col justify-between space-y-3"
            >
              <div class="flex items-center justify-between">
                <span class="font-heading font-medium text-lg text-primary">{{ spacing.name }}</span>
                <span class="font-mono text-xs bg-white px-2 py-0.5 rounded border border-muted-border font-semibold text-accent">{{ spacing.value }}</span>
              </div>
              <div class="w-full bg-primary/10 rounded-full overflow-hidden h-2">
                <div class="bg-accent h-full rounded-full transition-all duration-500" :style="{ width: spacing.value }" />
              </div>
              <p class="text-xs text-muted-text">{{ spacing.usage }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- TAB 2: TYPOGRAPHY & HIERARCHY -->
      <section v-if="activeTab === 'typography'" class="space-y-12 animate-fade-in">
        <div class="space-y-4 max-w-3xl">
          <UiHeading level="h2" subtitle="Typography Scale" gold-underline>
            Elegant Headings & Modern Body
          </UiHeading>
          <p class="text-muted-text text-base leading-relaxed">
            The typography pairs two distinct worlds: <strong class="text-primary">Cormorant Garamond</strong> for high-fashion editorial luxury headings, and <strong class="text-primary">Plus Jakarta Sans</strong> for geometric, ultra-clean body text.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Serif Headings Showcase -->
          <UiGlassContainer variant="light" padding="lg" rounded="lg" class="space-y-8">
            <div class="border-b border-muted pb-4">
              <span class="text-xs uppercase tracking-[0.25em] text-[#B59021] font-semibold block">Primary Serif Heading</span>
              <h3 class="font-heading text-3xl font-medium text-primary mt-1">Cormorant Garamond</h3>
              <p class="text-xs text-muted-text mt-1">{{ MERVAT_TYPOGRAPHY.heading.description }}</p>
            </div>

            <div class="space-y-6">
              <div v-for="scale in MERVAT_TYPOGRAPHY.heading.scale" :key="scale.level" class="space-y-2 border-b border-muted/50 pb-4 last:border-0">
                <div class="flex items-center justify-between text-xs font-mono text-muted-text">
                  <span>{{ scale.level }}</span>
                  <span>{{ scale.size }} • {{ scale.weight }}</span>
                </div>
                <!-- Live Preview -->
                <div v-if="scale.level.includes('Display')" class="font-heading text-4xl sm:text-5xl font-light tracking-tight text-primary">
                  Timeless Feminine Elegance
                </div>
                <div v-else-if="scale.level.includes('H2')" class="font-heading text-3xl sm:text-4xl font-normal tracking-tight text-primary">
                  Haute Couture & Accessories
                </div>
                <div v-else-if="scale.level.includes('H3')" class="font-heading text-2xl sm:text-3xl font-medium tracking-normal text-primary">
                  The Parisian Outlet Collection
                </div>
                <div v-else class="font-heading text-xl font-semibold tracking-normal text-primary">
                  Bespoke Leather Handcraft
                </div>
              </div>
            </div>
          </UiGlassContainer>

          <!-- Sans Body Showcase -->
          <UiGlassContainer variant="light" padding="lg" rounded="lg" class="space-y-8">
            <div class="border-b border-muted pb-4">
              <span class="text-xs uppercase tracking-[0.25em] text-[#B59021] font-semibold block">Modern Body & UI Font</span>
              <h3 class="font-heading text-3xl font-medium text-primary mt-1">Plus Jakarta Sans</h3>
              <p class="text-xs text-muted-text mt-1">{{ MERVAT_TYPOGRAPHY.body.description }}</p>
            </div>

            <div class="space-y-6">
              <div v-for="scale in MERVAT_TYPOGRAPHY.body.scale" :key="scale.level" class="space-y-2 border-b border-muted/50 pb-4 last:border-0">
                <div class="flex items-center justify-between text-xs font-mono text-muted-text">
                  <span>{{ scale.level }}</span>
                  <span>{{ scale.size }} • {{ scale.weight }}</span>
                </div>
                <!-- Live Preview -->
                <p v-if="scale.level.includes('Large')" class="font-body text-lg font-light text-primary leading-relaxed">
                  Discover refined silhouettes and exquisite fabrics tailored for the discerning woman who values luxury craftsmanship.
                </p>
                <p v-else-if="scale.level.includes('Standard')" class="font-body text-base font-normal text-primary leading-relaxed">
                  Each handbag and accessory is meticulously crafted from ethically sourced European leathers, featuring our signature 24k gold-plated accents.
                </p>
                <p v-else-if="scale.level.includes('Caption')" class="font-body text-sm font-medium text-muted-text leading-normal">
                  Complimentary express shipping and gift wrapping on all orders over $500. Returns accepted within 30 days.
                </p>
                <div v-else class="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#B59021]">
                  Overline Category Tag — Limited Release
                </div>
              </div>
            </div>
          </UiGlassContainer>
        </div>
      </section>

      <!-- TAB 3: BUTTONS & BADGES -->
      <section v-if="activeTab === 'buttons'" class="space-y-12 animate-fade-in">
        <div class="space-y-4 max-w-3xl">
          <UiHeading level="h2" subtitle="Interactive Components" gold-underline>
            Buttons & Badges
          </UiHeading>
          <p class="text-muted-text text-base leading-relaxed">
            Buttons are designed with architectural spacing, smooth hover transformations, and distinct visual hierarchy. Badges provide immediate context for seasonal and outlet offerings.
          </p>
        </div>

        <!-- Buttons Grid -->
        <div class="space-y-8">
          <UiGlassContainer variant="light" padding="lg" rounded="lg" class="space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-muted pb-4">
              <div>
                <h3 class="font-heading text-2xl font-medium text-primary">Button Variants & Sizes</h3>
                <p class="text-xs text-muted-text mt-1">Interactive states across Primary, Secondary, Outline, and Luxury Gold.</p>
              </div>
              <UiButton variant="outline" size="sm" @click="toggleButtonLoading">
                Test Loading State (2.5s)
              </UiButton>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
              <!-- Primary -->
              <div class="space-y-3 p-4 rounded bg-secondary/30 border border-muted-border flex flex-col items-center justify-center">
                <span class="text-xs font-mono text-muted-text">Primary Variant</span>
                <UiButton variant="primary" size="md" :loading="isLoadingButton">
                  Explore Collection
                </UiButton>
                <span class="text-[11px] text-muted-text text-center">Obsidian Black (#111111) with soft shadow elevation</span>
              </div>

              <!-- Secondary -->
              <div class="space-y-3 p-4 rounded bg-secondary/30 border border-muted-border flex flex-col items-center justify-center">
                <span class="text-xs font-mono text-muted-text">Secondary Variant</span>
                <UiButton variant="secondary" size="md" :loading="isLoadingButton">
                  View Lookbook
                </UiButton>
                <span class="text-[11px] text-muted-text text-center">Silk Cream (#F5F2EE) with subtle contrast border</span>
              </div>

              <!-- Outline -->
              <div class="space-y-3 p-4 rounded bg-secondary/30 border border-muted-border flex flex-col items-center justify-center">
                <span class="text-xs font-mono text-muted-text">Outline Variant</span>
                <UiButton variant="outline" size="md" :loading="isLoadingButton">
                  Bespoke Inquiry
                </UiButton>
                <span class="text-[11px] text-muted-text text-center">Transparent foundation filling smoothly on hover</span>
              </div>

              <!-- Luxury Gold -->
              <div class="space-y-3 p-4 rounded bg-secondary/30 border border-muted-border flex flex-col items-center justify-center">
                <span class="text-xs font-mono text-muted-text">Luxury Gold Variant</span>
                <UiButton variant="luxury-gold" size="md" :loading="isLoadingButton">
                  Add to Bag — $1,850
                </UiButton>
                <span class="text-[11px] text-muted-text text-center">Royal Gold (#D4AF37) with ambient gold shadow</span>
              </div>
            </div>

            <!-- Sizes Comparison -->
            <div class="pt-6 border-t border-muted/60 space-y-4">
              <span class="text-xs uppercase tracking-widest text-muted-text block font-medium">8px Scale Button Sizes</span>
              <div class="flex flex-wrap items-center gap-4">
                <UiButton variant="primary" size="sm">Small (sm)</UiButton>
                <UiButton variant="primary" size="md">Medium Standard (md)</UiButton>
                <UiButton variant="primary" size="lg">Large Editorial (lg)</UiButton>
                <UiButton variant="primary" size="xl">Extra Large Banner (xl)</UiButton>
              </div>
            </div>
          </UiGlassContainer>
        </div>

        <!-- Badges Showcase -->
        <UiGlassContainer variant="light" padding="lg" rounded="lg" class="space-y-6">
          <div class="border-b border-muted pb-4">
            <h3 class="font-heading text-2xl font-medium text-primary">Luxury Badges & Status Tags</h3>
            <p class="text-xs text-muted-text mt-1">Status tags applied across product catalogs, lookbooks, and outlet collections.</p>
          </div>

          <div class="flex flex-wrap items-center gap-4">
            <UiBadge variant="gold" size="md" dot>Limited Edition</UiBadge>
            <UiBadge variant="gold" size="md">Best Seller</UiBadge>
            <UiBadge variant="dark" size="md">Haute Couture</UiBadge>
            <UiBadge variant="cream" size="md">New Season</UiBadge>
            <UiBadge variant="glass" size="md">Paris Runway</UiBadge>
            <UiBadge variant="outlet" size="md">Outlet • 30% Off</UiBadge>
          </div>
        </UiGlassContainer>
      </section>

      <!-- TAB 4: LUXURY PRODUCT CARDS -->
      <section v-if="activeTab === 'cards'" class="space-y-12 animate-fade-in">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div class="space-y-4 max-w-2xl">
            <UiHeading level="h2" subtitle="E-Commerce Components" gold-underline>
              Luxury Product Cards
            </UiHeading>
            <p class="text-muted-text text-base leading-relaxed">
              Engineered for high engagement: featuring cubic-bezier hover zoom, quick-view glassmorphism overlays, discount calculation badges, and wishlist toggling.
            </p>
          </div>
          <p class="text-xs font-mono text-accent bg-accent/10 px-3 py-1.5 rounded border border-accent/20 self-start sm:self-auto">
            Click any card to open Quick View Modal
          </p>
        </div>

        <!-- Product Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <UiLuxuryCard
            v-for="product in demoProducts"
            :key="product.id"
            :id="product.id"
            :title="product.title"
            :category="product.category"
            :price="product.price"
            :original-price="product.originalPrice"
            :image="product.image"
            :badge="product.badge"
            :badge-variant="product.badgeVariant"
            :is-new="product.isNew"
            :is-outlet="product.isOutlet"
            @click="handleCardClick"
            @quick-view="handleQuickView"
          />
        </div>
      </section>

      <!-- TAB 5: GLASS EFFECTS & SHADOWS -->
      <section v-if="activeTab === 'effects'" class="space-y-12 animate-fade-in">
        <div class="space-y-4 max-w-3xl">
          <UiHeading level="h2" subtitle="Modern Aesthetics" gold-underline>
            Glassmorphism & Shadows
          </UiHeading>
          <p class="text-muted-text text-base leading-relaxed">
            By layering semi-transparent backgrounds with backdrop blur and delicate gold or white borders, we achieve a modern, tactile depth without sacrificing readability.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Light Glass -->
          <UiGlassContainer variant="light" padding="lg" rounded="lg" hover-effect class="space-y-4">
            <span class="text-xs font-mono uppercase tracking-wider text-muted-text">.glass-effect (Light)</span>
            <h3 class="font-heading text-2xl font-medium text-primary">Light Silk Glass</h3>
            <p class="text-sm text-muted-text leading-relaxed">
              Provides subtle separation over patterned backgrounds or editorial images. Built with `backdrop-blur-md` and 70% white opacity.
            </p>
            <div class="pt-2">
              <UiButton variant="outline" size="sm">Explore Layer</UiButton>
            </div>
          </UiGlassContainer>

          <!-- Card Glass -->
          <UiGlassContainer variant="card" padding="lg" rounded="lg" hover-effect class="space-y-4">
            <span class="text-xs font-mono uppercase tracking-wider text-[#B59021]">.glass-card (Gold Accent)</span>
            <h3 class="font-heading text-2xl font-medium text-primary">Royal Gold Glass</h3>
            <p class="text-sm text-muted-text leading-relaxed">
              Infused with a faint royal gold border (`#D4AF37/20`) and enhanced blur. Perfect for interactive cards and quick-view modals.
            </p>
            <div class="pt-2">
              <UiButton variant="luxury-gold" size="sm">Interactive Card</UiButton>
            </div>
          </UiGlassContainer>

          <!-- Dark Glass -->
          <UiGlassContainer variant="dark" padding="lg" rounded="lg" hover-effect class="space-y-4">
            <span class="text-xs font-mono uppercase tracking-wider text-accent">.glass-dark (Obsidian)</span>
            <h3 class="font-heading text-2xl font-medium text-white">Obsidian Dark Glass</h3>
            <p class="text-sm text-gray-300 leading-relaxed">
              High-contrast luxury dark panel (`#111111/90`) used for premium VIP club announcements, haute couture spotlights, and headers.
            </p>
            <div class="pt-2">
              <UiButton variant="secondary" size="sm">VIP Access</UiButton>
            </div>
          </UiGlassContainer>
        </div>

        <!-- Shadows Showcase -->
        <div class="pt-8 border-t border-muted space-y-6">
          <UiHeading level="h3" subtitle="Elevation Tokens" gold-underline>
            Soft Shadows & Gold Glow
          </UiHeading>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              v-for="shadow in MERVAT_SHADOWS"
              :key="shadow.name"
              :class="[
                'p-6 rounded-lg bg-white border border-muted-border flex flex-col justify-between space-y-4 transition-transform duration-500 hover:-translate-y-1',
                shadow.class
              ]"
            >
              <div>
                <span class="text-xs font-mono text-[#B59021]">{{ shadow.class }}</span>
                <h4 class="font-heading text-xl font-medium text-primary mt-1">{{ shadow.name }}</h4>
                <p class="text-xs text-muted-text mt-2 leading-relaxed">{{ shadow.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>



    <!-- Elegant Luxury Footer -->
    <LayoutFooter />

    <!-- Quick View Modal Sandbox -->
    <UiModal
      v-model="isModalOpen"
      :title="modalProduct?.title"
      :subtitle="modalProduct?.category"
      max-width="2xl"
    >
      <div v-if="modalProduct" class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div class="rounded-lg overflow-hidden border border-muted bg-secondary aspect-[3/4]">
          <img :src="modalProduct.image" :alt="modalProduct.title" class="w-full h-full object-cover" />
        </div>
        <div class="space-y-4 flex flex-col justify-between h-full">
          <div class="space-y-3">
            <div class="flex items-center gap-2">
              <UiBadge v-if="modalProduct.isOutlet" variant="outlet" size="sm">Outlet</UiBadge>
              <UiBadge v-else-if="modalProduct.badge" :variant="modalProduct.badgeVariant" size="sm">{{ modalProduct.badge }}</UiBadge>
              <UiBadge v-else variant="cream" size="sm">Exclusive</UiBadge>
            </div>

            <div class="flex items-center gap-2 pt-1">
              <span class="font-heading text-2xl font-semibold text-primary">
                ${{ modalProduct.price.toLocaleString() }}
              </span>
              <span v-if="modalProduct.originalPrice" class="text-sm text-muted-text line-through">
                ${{ modalProduct.originalPrice.toLocaleString() }}
              </span>
            </div>

            <p class="text-sm text-muted-text leading-relaxed pt-2 border-t border-muted">
              {{ modalProduct.description }}
            </p>
          </div>

          <div class="space-y-3 pt-4 border-t border-muted">
            <UiButton variant="luxury-gold" size="lg" block>
              Add to Shopping Bag
            </UiButton>
            <UiButton variant="outline" size="md" block @click="isModalOpen = false">
              Continue Exploring
            </UiButton>
          </div>
        </div>
      </div>
    </UiModal>
  </div>
</template>
