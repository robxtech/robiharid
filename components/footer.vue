<template>
  <div class="bg-[#14151A] w-full px-4 md:px-8 lg:px-[120px] flex items-center justify-center">
    <div class="w-full flex justify-center items-center max-w-[1200px]">
      <div class="w-full text-gray-300 py-8 flex flex-col gap-8">
        <div class="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
          <div class="max-w-full lg:max-w-md text-center lg:text-left">
            <h2 class="text-lg md:text-xl font-semibold text-white mb-2">Subscribe to our newsletter</h2>
            <p class="text-sm md:text-base">Get a summary of what we've shipped during the last month, behind the scenes updates, and team picks.</p>
          </div>

          <div class="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
            <div class="relative flex-1 w-full">
              <Input size="medium" icon="email" placeholder="Enter Your Email" />
            </div>
            <Button variant="secondary" size="medium" type="submit" class="w-full md:w-auto"> Get Early Access </Button>
          </div>
        </div>

        <div class="w-full flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="text-center md:text-left">
            <p class="text-sm">© 2025 Robi Hadrid</p>
          </div>

          <div class="flex justify-center md:justify-center">
            <img @click="scrollToTop" src="../public/logo.svg" alt="Logo" />
          </div>

          <div class="flex gap-4 justify-center md:justify-end">
            <nuxt-icon name="twitter" class="text-2xl" />
            <nuxt-icon name="linkedin" class="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "./ui/button.vue";
import Input from "./ui/input.vue";
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
