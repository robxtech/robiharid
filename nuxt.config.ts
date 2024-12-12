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
          hid: "description",
          name: "description",
          content:
            "Robi Harid is an accomplished entrepreneur with over 10 years experience leading projects for global brands including TOSHIBA and HSBC.",
        },
      ],
    },
  },
});
