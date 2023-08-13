// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader';
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  app: {
    head: {
      title: 'Wijkgericht Samenwerken | Rijnmond Dokters',
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  css: ['@/assets/css/main.scss'],
  vite: {
    plugins: [svgLoader()],
  },
});
