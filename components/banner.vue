<script lang="ts" setup>
import Button from "./ui/button.vue";
import { ref } from "vue";

// Scroll functions
const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: "smooth" });
};

// Image data
const images = ref([
  { src: "/framer.svg", alt: "Framer Logo" },
  { src: "/google.svg", alt: "Google Logo" },
  { src: "/airbnb.svg", alt: "Airbnb Logo" },
  { src: "/figma.svg", alt: "Figma Logo" },
  { src: "/discord.svg", alt: "Discord Logo" },
  { src: "/dropbox.svg", alt: "Dropbox Logo" },
  { src: "/mailchimp.svg", alt: "MailChimp Logo" },
]);

// SEO metadata
useHead({
  title: "Robi Harid",
  meta: [
    {
      name: "description",
      content:
        "Helping recruiters improve their candidate experience. Discover the work of a leading entrepreneur, founder, author, and tech innovator.",
    },
    { name: "keywords", content: "Entrepreneur, Founder, Author, Tech Innovator, Candidate Experience, Tech Leadership" },
    { name: "author", content: "Robi Harid" },
    { property: "og:title", content: "Entrepreneur, Founder, Author & Tech Innovator" },
    { property: "og:description", content: "Helping recruiters improve their candidate experience. Explore projects and contact the creator." },
    { property: "og:image", content: "/public/robi-harid.svg" },
    { property: "og:url", content: "https://robi-harid" },
    { name: "twitter:title", content: "Entrepreneur, Founder, Author & Tech Innovator" },
    { name: "twitter:description", content: "Helping recruiters improve their candidate experience. Learn more about the projects and expertise." },
    { name: "twitter:image", content: "/public/robi-harid.svg" },
  ],
  link: [{ rel: "canonical", href: "https://robi-harid" }],
});
</script>

<template>
  <div class="w-full flex flex-col items-center px-8 lg:px-[120px]">
    <!-- Hero Section -->
    <section
      class="w-full flex flex-col lg:flex-row justify-between items-center text-white bg-[#14151a] rounded-[24px] p-6 md:p-10 my-6 md:my-[91px] shadow-lg max-w-[1200px]"
    >
      <div class="flex-1 text-center lg:text-left">
        <p class="text-[16px] md:text-[18px] font-normal text-gray-400 mb-4 leading-[1.4] tracking-[-0.2px]">
          Helping recruiters improve their candidate experience
        </p>
        <h1 class="text-[30px] sm:text-[40px] md:text-[45px] font-medium leading-[1.17] tracking-[-0.1px] mb-6">
          Entrepreneur, Founder,<br />Author & Tech Innovator
        </h1>
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button @click="() => scrollToSection('contact')" class="z-[4000]" variant="secondary">
            <div class="flex justify-center items-center gap-1"><nuxt-icon name="flash" /> Contact With Me</div>
          </Button>
          <Button @click="() => scrollToSection('my-project')" class="z-[4000]" variant="outlined">My Projects</Button>
        </div>
      </div>

      <div class="relative flex-1 hidden lg:flex justify-center items-center h-[300px] lg:h-[450px]" :delay="200" v-motion-slide-visible-once-bottom>
        <nuxt-img
          src="../public/robi-harid.svg"
          alt="Entrepreneur Image"
          class="rounded-lg md:w-[640px] w-[calc(60vw)] max-w-[640px] object-cover absolute top-[calc(-187px)]"
        />
      </div>
    </section>

    <!-- Marquee Section -->
    <section class="lg:w-[65%] w-full" :delay="200" v-motion-fade-visible>
      <Vue3Marquee :gradient="true" :gradient-color="[11, 11, 11]" gradient-length="30%">
        <div class="flex mt-10 md:mt-0">
          <nuxt-img v-for="(image, index) in images" :key="index" :src="image.src" :alt="image.alt" width="120" height="120" class="mx-6" />
        </div>
      </Vue3Marquee>
    </section>
  </div>
</template>
