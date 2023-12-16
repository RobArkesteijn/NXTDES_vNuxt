import { gsap } from 'gsap';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(gsap);
  nuxtApp.provide('gsap', gsap);
});
