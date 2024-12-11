<script lang="ts" setup>
useHead({
  title: "My Story - Robi Harid | RecruitMate AI Founder",
  meta: [
    {
      name: "description",
      content: "Learn about Robi Harid's journey as a technology leader and founder of RecruitMate AI, revolutionizing the recruitment industry.",
    },
    { name: "keywords", content: "Robi Harid, RecruitMate AI, technology leader, recruitment platform, innovation, global brands" },
    { name: "author", content: "Robi Harid" },
    { property: "og:title", content: "My Story - Robi Harid | RecruitMate AI Founder" },
    {
      property: "og:description",
      content: "Discover Robi Harid's journey, leading innovative projects and founding RecruitMate AI to transform recruitment processes.",
    },
    { property: "og:image", content: "/public/robi-harid-story-image.svg" },
    { property: "og:url", content: "https://robi-harid.vercel.app" },
    { property: "og:type", content: "website" },
    { name: "twitter:title", content: "My Story - Robi Harid | RecruitMate AI Founder" },
    { name: "twitter:description", content: "Learn about Robi Harid's journey as a technology leader and founder of RecruitMate AI." },
    { name: "twitter:image", content: "/public/robi-harid-story-image.svg" },
  ],
});
</script>

<template>
  <div class="flex w-full justify-center items-center py-[80px] px-8 lg:px-[120px]">
    <div class="max-w-[1200px] w-full flex flex-col lg:flex-row items-start gap-6 lg:gap-12 py-10 lg:py-20">
      <!-- Story Image -->
      <div class="flex justify-center w-full lg:w-auto">
        <NuxtImg placeholder src="/robi-harid-story-image.svg" alt="Robi Harid" class="rounded-lg shadow-lg h-[500px] w-[510px] object-cover" />
      </div>

      <!-- Story Content -->
      <div class="w-full lg:w-[600px] flex flex-col lg:pl-10 gap-[30px]">
        <div v-motion-fade class="flex justify-start">
          <div
            class="bg-[#100f17] text-white rounded-full w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center text-lg lg:text-xl font-bold border border-[#FFFFFF24]"
          >
            #
          </div>
        </div>

        <!-- Title -->
        <h2 class="text-[32px] sm:text-[40px] md:text-[48px] font-[500] mb-4 text-white leading-[1.17] tracking-[-1px]">My Story</h2>

        <!-- Paragraphs -->
        <p class="text-[#908e9b] leading-7 mb-4 text-base md:text-lg w-full lg:max-w-[470px]">
          My name is <span class="font-bold">Robi Harid</span>, and I’ve spent over a decade leading innovative projects for global brands including
          <span class="font-bold">TOSHIBA, HSBC, EY, IKEA,</span> and <span class="font-bold">Formula 1</span>. I quickly recognised the
          transformative power of technology to enhance customer experiences and drive organisational efficiency.
        </p>
        <p class="text-[#908e9b] text-base md:text-lg leading-8 w-full lg:max-w-[470px]">
          Building on this expertise, I founded <span class="font-bold">RecruitMate AI</span>, an all-in-one platform designed to make recruiters'
          jobs easier. RecruitMate AI empowers recruiters to streamline candidate communications, saving them hours every day – all while delivering
          an industry-leading candidate experience.
        </p>
      </div>
    </div>
  </div>
</template>
