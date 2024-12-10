<template>
  <div class="w-full flex justify-center items-center flex-col px-4 md:px-8 lg:px-[120px]">
    <div
      class="w-full flex flex-col lg:flex-row justify-between items-center text-white bg-white/5 rounded-[24px] p-6 md:p-10 my-6 md:my-[91px] shadow-lg max-w-[1200px]"
    >
      <!-- Sol Taraf -->
      <div class="flex-1 text-center lg:text-left lg:mb-6 lg:mb-0" :delay="200" v-motion-fade-visible-once>
        <p class="text-base md:text-lg font-normal text-gray-400 mb-4">Helping recruiters improve their candidate experience</p>
        <h1 class="text-2xl md:text-4xl font-medium leading-relaxed mb-6" :delay="200" v-motion-fade-visible-once>
          Entrepreneur, Founder,<br />
          Author & Tech Innovator
        </h1>
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" v-motion-slide-visible-once>
          <Button @click="scrollToContact" class="z-[4000]" variant="secondary">
            <div class="flex justify-center items-center gap-1">
              <nuxt-icon name="flash" />
              Contact With Me
            </div>
          </Button>
          <Button @click="scrollToMyProject" class="z-[4000]" variant="outlined"> My Projects </Button>
        </div>
      </div>

      <!-- Sağ Taraf (Görsel) -->
      <div class="relative flex-1 hidden lg:flex justify-center items-center h-[300px] lg:h-[450px]" :delay="200" v-motion-slide-visible-once-bottom>
        <img
          src="../public/robi-harid.svg"
          alt="Entrepreneur Image"
          class="rounded-lg w-[calc(60vw)] max-w-[640px] object-cover absolute top-[calc(-187px)]"
        />
      </div>
    </div>

    <!-- Alt Logolar -->
    <div class="hidden w-full lg:flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-16 mb-12" :delay="200" v-motion-fade-visible-once>
      <img src="../public/framer.svg" alt="Framer Logo" />
      <img src="../public/google.svg" alt="Google Logo" />
      <img src="../public/airbnb.svg" alt="Airbnb Logo" />
      <img src="../public/figma.svg" alt="Figma Logo" />
      <img src="../public/discord.svg" alt="Discord Logo" />
      <img src="../public/dropbox.svg" alt="Dropbox Logo" />
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
