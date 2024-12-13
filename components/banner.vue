<script lang="ts" setup>
import Button from "./ui/button.vue";
import { ref } from "vue";

// Scroll functions
const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <div class="w-full flex flex-col items-center px-8 lg:px-[120px]">
    <!-- Hero Section -->
    <section
      v-motion-fade
      :delay="200"
      class="w-full flex flex-col lg:flex-row justify-between items-center text-white bg-[#14151a] h-auto lg:h-[450px] rounded-[24px] p-6 md:p-10 my-6 md:my-[91px] shadow-lg max-w-[1200px]"
    >
      <div class="flex-1 text-center lg:text-left">
        <p class="text-[16px] md:text-[18px] font-normal text-gray-400 mb-4 leading-[1.4] tracking-[1px]">
          Helping recruiters improve their candidate experience
        </p>
        <h1 class="text-[30px] sm:text-[40px] md:text-[45px] font-[500] leading-[1.17] tracking-[1px] mb-6">
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
        <NuxtImg
          src="/robi-harid.svg"
          alt="Entrepreneur Image"
          class="rounded-lg md:w-[570px] w-[calc(60vw)] max-w-[640px] object-cover absolute top-[calc(-153px)]"
        />
      </div>
    </section>

    <!-- Marquee Section -->
    <section class="lg:w-[65%] w-full" :delay="200" v-motion-fade-visible>
      <Vue3Marquee :gradient="true" :gradient-color="[11, 11, 11]" gradient-length="30%">
        <div class="flex mt-10 md:mt-0 items-center">
          <NuxtImg placeholder src="/toshiba.svg" alt="TOSHIBA Logo" width="100" height="100" class="mx-6" />
          <NuxtImg placeholder src="/crh.svg" alt="CRH Logo" width="45" height="45" class="mx-6" />
          <NuxtImg placeholder src="/ey.svg" alt="EY Logo" width="45" height="45" class="mx-6" />
          <NuxtImg placeholder src="/formula1.svg" alt="Formula1 Logo" width="100" height="100" class="mx-6" />
          <NuxtImg placeholder src="/hsbc.svg" alt="HSCB Logo" width="100" height="100" class="mx-6" />
          <NuxtImg placeholder src="/ikea.svg" alt="IKEA Logo" width="100" height="100" class="mx-6" />
          <NuxtImg placeholder src="/mercer.svg" alt="Mercer Logo" width="100" height="100" class="mx-6" />
          <NuxtImg placeholder src="/voxie.svg" alt="Voixe Logo" width="100" height="100" class="mx-6" />
        </div>
      </Vue3Marquee>
    </section>
  </div>
</template>
