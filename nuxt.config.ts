// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@pinia/nuxt', '@nuxt/icon'],
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
          tagPriority: 1,
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
          tagPriority: 2,
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Kablammo&display=swap',
          tagPriority: 3,
        },
        {
          rel: 'stylesheet',
          href: '/lib/bootstrap/css/bootstrap.min.css',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/fav/favicon-96x96.png',
          sizes: '96x96',
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/fav/favicon.svg',
        },
        {
          rel: 'shortcut icon',
          href: '/fav/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/fav/apple-touch-icon.png',
        },
      ],
      script: [
        {
          src: '/lib/bootstrap/javascript/bootstrap.bundle.min.js',
          tagPriority: 5,
        },
      ],
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'robots',
          content: 'index, follow',
        },
        {
          name: 'author',
          content: 'Gabriel Henrique da Silva - odev.gabriel@gmail.com',
        },
        {
          name: 'apple-mobile-web-app-title',
          content: 'Gabriel',
        },
      ],
    },
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/css/globals.css',
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  icon: {
    mode: 'svg',
  },
})
