<script lang="ts" setup>
import Button from "./ui/button.vue";
import Input from "./ui/input.vue";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

useHead({
  title: "Robi Harid",
  meta: [
    {
      name: "description",
      content:
        "Robi Harid is an accomplished entrepreneur with over 10 years' experience leading projects for global brands including TOSHIBA and HSBC.",
    },
    { name: "keywords", content: "newsletter, updates, monthly summaries, behind the scenes, team picks, Robi Harid" },
    { name: "author", content: "Robi Harid" },
    { property: "og:title", content: "Robi Harid" },
    {
      property: "og:description",
      content:
        "Robi Harid is an accomplished entrepreneur with over 10 years' experience leading projects for global brands including TOSHIBA and HSBC.",
    },
    { property: "og:image", content: "/public/logo.svg" },
    { property: "og:url", content: "https://robi-harid.vercel.app" },
    { property: "og:type", content: "website" },
    { name: "twitter:title", content: "Robi Harid" },
    {
      name: "twitter:description",
      content:
        "Robi Harid is an accomplished entrepreneur with over 10 years' experience leading projects for global brands including TOSHIBA and HSBC.",
    },
    { name: "twitter:image", content: "/public/logo.svg" },
  ],
});
</script>

<template>
  <div class="bg-[#14151A] w-full px-8 lg:px-[120px] flex items-center justify-center">
    <div class="max-w-[1200px] w-full text-gray-300 py-8 flex flex-col gap-8">
      <!-- Newsletter Header -->
      <form
        action="https://hooks.zapier.com/hooks/catch/your-zap-id/"
        method="POST"
        class="flex flex-col lg:flex-row items-center justify-between gap-4"
      >
        <div class="lg:max-w-md text-center lg:text-left">
          <h2 class="text-[20px] md:text-xl font-[500] leading-[1.17] tracking-[-0.1px] text-white mb-2">Subscribe to our newsletter</h2>
          <p class="text-sm md:text-base leading-[1.4] tracking-[-0.2px] text-[#FFFFFF99]">
            Get a summary of what we've shipped during the last month, behind the scenes updates, and team picks.
          </p>
        </div>

        <div class="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
          <Input name="email" size="medium" icon="email" placeholder="Enter Your Email" class="flex-1 w-full" required />
          <Button variant="secondary" size="medium" type="submit" class="w-full md:w-auto"> Get Early Access </Button>
        </div>
      </form>

      <!-- Footer Section -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-[#FFFFFF99] leading-[1.43] tracking-[-0.1px] text-center md:text-left">© 2025 Robi Harid</p>

        <NuxtImg placeholder width="32" height="32" @click="scrollToTop" src="/logo.svg" alt="Logo" class="cursor-pointer" />

        <div class="flex gap-4">
          <a href="https://x.com/robiharid" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <nuxt-icon name="twitter" class="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/robiharid/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <nuxt-icon name="linkedin" class="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
