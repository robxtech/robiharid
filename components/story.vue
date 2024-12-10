<template>
  <div class="flex w-full justify-center items-center py-[80px] px-4 md:px-12 lg:px-[120px]">
    <div class="flex flex-col lg:flex-row items-start w-full gap-6 lg:gap-[3rem] py-10 lg:py-[132px] max-w-[1200px]">
      <div class="flex justify-center w-full lg:w-auto">
        <img src="../public/robi-harid-story-image.svg" alt="Robi Harid" class="rounded-lg shadow-lg h-[500px] w-[510px] object-cover" />
      </div>

      <div class="w-full lg:w-[600px] lg:pl-10 flex flex-col">
        <div v-motion-fade class="mb-6 flex justify-start">
          <div
            v-motion-fade
            class="bg-[#100f17] text-center text-white rounded-full w-12 h-12 lg:w-14 lg:h-14 border-[#FFFFFF24] border flex items-center justify-center text-lg lg:text-xl font-bold"
          >
            #
          </div>
        </div>
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-white text-left">My Story</h2>
        <p class="text-[#908e9b] leading-7 mb-4 text-base md:text-lg text-left">
          My name is <span class="font-bold text-[#908e9b]">Robi Harid</span>, and I’ve spent over a decade leading innovative projects for global
          brands including <span class="font-bold">TOSHIBA, HSBC, EY, IKEA,</span> and <span class="font-bold text-[#908e9b]">Formula 1</span>. I
          quickly recognised the transformative power of technology to enhance customer experiences and drive organisational efficiency.
        </p>
        <p class="text-[#908e9b] text-base md:text-lg leading-8 text-left">
          Building on this expertise, I founded <span class="font-bold text-[#908e9b]">RecruitMate AI</span>, an all-in-one platform designed to make
          recruiters' jobs easier. RecruitMate AI empowers recruiters to streamline candidate communications, saving them hours every day – all while
          delivering an industry-leading candidate experience.
        </p>
      </div>
    </div>
  </div>
</template>
