<template>
  <div class="flex w-full justify-center items-center py-[80px] px-8 lg:px-[120px]">
    <div class="max-w-[1200px] w-full flex justify-between flex-col lg:flex-row items-start gap-6 lg:gap-12 py-10 lg:py-20">
      <!-- Story Image -->
      <div v-motion-fade-visible :delay="200" class="flex justify-center w-full lg:w-auto rounded-[25px]">
        <NuxtImg placeholder src="/robi-harid-story-image.svg" alt="Robi Harid" class="rounded-[25px] shadow-lg h-[500px] w-[510px] object-cover" />
      </div>

      <!-- Story Content -->
      <div v-motion-fade-visible :delay="200" class="w-full lg:w-[600px] flex flex-col gap-[30px]">
        <div class="flex justify-start">
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
        <p class="text-[#908e9b] text-base md:text-lg leading-7 w-full lg:max-w-[470px]">
          Building on this expertise, I founded <span class="font-bold">RecruitMate AI</span>, an all-in-one platform designed to make recruiters'
          jobs easier. RecruitMate AI empowers recruiters to streamline candidate communications, saving them hours every day – all while delivering
          an industry-leading candidate experience.
        </p>
      </div>
    </div>
  </div>
</template>
