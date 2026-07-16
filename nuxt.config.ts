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
      htmlAttrs: {
        dir: 'rtl',
        lang: 'ar'
      },
      title: '2M Brand Outlet — أزياء نسائية فاخرة، حقائب وإكسسوارات',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5' },
        { name: 'description', content: 'تو إم براند أوتليت هي وجهتك الفاخرة للأزياء النسائية، الإكسسوارات الراقية، الحقائب، والمكياج بأسعار لا تقبل المنافسة.' },
        { name: 'keywords', content: 'أزياء فاخرة, أزياء نسائية, حقائب, مكياج, إكسسوارات, فساتين, أوتليت, تو إم براند' },
        { property: 'og:title', content: '2M Brand Outlet — أزياء نسائية وإكسسوارات' },
        { property: 'og:description', content: 'اكتشفي الأناقة الخالدة وأحدث صيحات الموضة النسائية.' },
        { property: 'og:type', content: 'website' },
        { name: 'theme-color', content: '#111111' }
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/website-logo.jpeg' },
        { rel: 'apple-touch-icon', href: '/website-logo.jpeg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Tajawal:wght@300;400;500;700;800;900&display=swap' }
      ]
    }
  }
})
