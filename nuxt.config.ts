// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icons", "@nuxt/fonts", "@vueuse/motion/nuxt"],
  css: ["~/assets/fonts/inter.css"],
});
