<template>
  <div class="w-full flex justify-center items-center px-4 md:px-8 lg:px-[120px]">
    <div class="w-full flex flex-row justify-between items-center py-6 gap-4 max-w-[1200px]">
      <img src="../public/logo.svg" alt="Logo" />
      <div class="flex flex-row gap-4">
        <Button class="z-[4000]" @click="scrollToContact" variant="text" size="small">Contact with me</Button>
        <Button class="z-[4000]" @click="scrollToMyProject" variant="primary" size="small">My Project</Button>
      </div>
    </div>
  </div>
</template>

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
</script>
