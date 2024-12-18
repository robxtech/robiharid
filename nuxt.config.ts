export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icons",
    "@nuxt/fonts",
    "@vueuse/motion/nuxt",
    "@nuxt/image",
    "@nuxt/scripts",
    // "@nuxthub/core"
  ],
  css: ["~/assets/fonts/inter.css"],
  app: {
    head: {
      title: "Robi Harid",
      meta: [
        {
          name: "description",
          content:
            "Robi Harid is an accomplished entrepreneur with over 10 years' experience leading projects for global brands including TOSHIBA and HSBC.",
        },
        {
          name: "keywords",
          content:
            "Robi Harid, entrepreneur, founder, tech innovator, RecruitMate AI, TOSHIBA, HSBC, global brands, portfolio, projects, testimonials, recruitment platform",
        },
        { name: "author", content: "Robi Harid" },
        { property: "og:title", content: "Robi Harid" },
        {
          property: "og:description",
          content:
            "Robi Harid is an accomplished entrepreneur with over 10 years' experience leading projects for global brands including TOSHIBA and HSBC.",
        },
        { property: "og:image", content: "/public/robi-harid-main.svg" },
        { property: "og:url", content: "https://robi-harid.vercel.app" },
        { property: "og:type", content: "website" },
        { name: "twitter:title", content: "Robi Harid" },
        {
          name: "twitter:description",
          content:
            "Robi Harid is an accomplished entrepreneur with over 10 years' experience leading projects for global brands including TOSHIBA and HSBC.",
        },
        { name: "twitter:image", content: "/public/robi-harid-main.svg" },
      ],
      link: [{ rel: "canonical", href: "https://robi-harid.vercel.app" }],
    },
  },
});
