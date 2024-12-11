// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icons", "@nuxt/fonts", "@vueuse/motion/nuxt", "@nuxt/image"],
  css: ["~/assets/fonts/inter.css"],
  app: {
    head: {
      title: "Robi Harid",
      meta: [
        {
          name: "Robi Harid",
          content: "Robi Harid",
        },
      ],
    },
  },
});
