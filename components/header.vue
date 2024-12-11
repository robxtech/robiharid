<script lang="ts" setup>
import Button from "./ui/button.vue";
const scrollToContact = () => {
  const footer = document.getElementById("contact");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
};
const scrollToMyProject = () => {
  const footer = document.getElementById("my-project");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
};
useHead({
  title: "Robi Harid",
  meta: [
    {
      name: "description",
      content: "Explore my projects and get in touch with me through the contact section",
    },
    { name: "keywords", content: "portfolio, projects, contact me, web developer" },
    { name: "author", content: "Robi Harid" },
    { property: "og:title", content: "Contact & Projects | Robi Harid" },
    {
      property: "og:description",
      content: "Discover my latest projects and reach out through the contact section",
    },
    { property: "og:image", content: "/public/logo.svg" },
    { property: "og:url", content: "https://robi-harid" },
    { property: "og:type", content: "website" },
    { name: "twitter:title", content: "Contact & Projects | Robi Harid" },
    { name: "twitter:description", content: "Check out my portfolio and contact me easily." },
    { name: "twitter:image", content: "/public/logo.svg" },
  ],
});
</script>

<template>
  <div class="w-full flex justify-center items-center px-8 lg:px-[120px]">
    <div class="w-full flex flex-row justify-between items-center py-6 gap-4 max-w-[1200px]">
      <nuxt-img src="../public/logo.svg" alt="Logo" width="32" height="32" />
      <div class="flex flex-row gap-4">
        <Button class="z-[4000]" @click="scrollToContact" variant="text" size="small">Contact with me</Button>
        <Button class="z-[4000]" @click="scrollToMyProject" variant="primary" size="small">My Project</Button>
      </div>
    </div>
  </div>
</template>
