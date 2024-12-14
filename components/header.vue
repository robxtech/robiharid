<script lang="ts" setup>
import Button from "./ui/button.vue";
const scrollToContact = () => {
  const footer = document.getElementById("contact");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <div class="w-full flex justify-center items-center px-8 lg:px-[120px]">
    <div class="w-full flex flex-row justify-between items-center py-6 gap-4 max-w-[1200px]">
      <NuxtImg placeholder src="/logo.svg" alt="Logo" width="32" height="32" />
      <div class="flex flex-row gap-4">
        <Button class="z-[4000]" @click="scrollToContact" variant="primary" size="small">Get In Touch</Button>
      </div>
    </div>
  </div>
</template>
