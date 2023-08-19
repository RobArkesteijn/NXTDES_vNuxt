import svgLoader from 'vite-svg-loader';
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  app: {
    head: {
      title: 'NXTDES | Next Destination',
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' },
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
  modules: ['nuxt-icon'],
});
