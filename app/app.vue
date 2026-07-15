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
