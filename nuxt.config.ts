// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  css: [
    '~/assets/css/tailwind.css'
  ],

  app: {
    head: {
      title: 'Mervat Brand — Luxury Women\'s Fashion, Accessories & Handbags',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5' },
        { name: 'description', content: 'Mervat Brand is a premier luxury destination for women\'s fashion, bespoke accessories, designer handbags, sophisticated makeup, and exclusive premium outlet collections.' },
        { name: 'keywords', content: 'luxury fashion, women\'s fashion, handbags, makeup, accessories, designer dresses, premium outlet, Mervat Brand' },
        { property: 'og:title', content: 'Mervat Brand — Luxury Women\'s Fashion & Accessories' },
        { property: 'og:description', content: 'Explore timeless elegance, modern feminine silhouettes, and luxury craftsmanship.' },
        { property: 'og:type', content: 'website' },
        { name: 'theme-color', content: '#111111' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap' }
      ]
    }
  }
})
