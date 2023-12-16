import svgLoader from 'vite-svg-loader';
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  runtimeConfig: {
    public: {
      authDomain: '',
      projectId: '',
      apiKey: '',
      databaseURL: '',
      storageBucket: '',
      messagingSenderId: '',
      appId: '',
      measurementId: '',
    },
  },
  app: {
    head: {
      title: 'NXTDES | Next Destination',
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  css: ['@/assets/scss/main.scss'],
  vite: {
    plugins: [svgLoader()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;',
        },
      },
    },
  },
  modules: ['@nuxtjs/strapi', 'nuxt-icon', '@nuxt/image', '@nuxtjs/i18n'],
  image: {
    format: ['webp'],
    strapi: {
      baseURL: 'http://localhost:1337/',
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
      },
      {
        code: 'nl',
        iso: 'nl-NL',
      },
    ],
    defaultLocale: 'en',
  },
});
