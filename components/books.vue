<script lang="ts" setup>
import Button from "./ui/button.vue";
</script>
<template>
  <div class="flex w-full justify-center items-center py-[40px] lg:py-[80px] px-8 lg:px-[120px]">
    <div class="max-w-[1200px] w-full flex flex-col justify-between xl:flex-row items-center gap-6 lg:gap-12 py-10 lg:py-20">
      <!-- Story Image -->

      <a
        href="https://books.google.com.vn/books?id=8hozEQAAQBAJ&pg=PA3&dq=hiring:+candidate+experience+made+easy&hl=en&newbks=1&newbks_redir=0&source=gb_mobile_search&sa=X&ved=2ahUKEwj6-ra18ayKAxUHh1YBHSIbDVkQ6AF6BAgLEAM#v=onepage&q=hiring%3A%20candidate%20experience%20made%20easy&f=false"
        target="_blank"
      >
        <div
          v-motion-fade-visible
          :delay="200"
          class="flex justify-center w-full rounded-[25px] sm:w-[435px] xl:w-[435px] justify-center w-full lg:w-auto"
        >
          <NuxtImg placeholder src="/books.svg" alt="Robi Harid" class="lg:h-[600px] h-[450px] w-auto rounded-[25px] xl:object-cover" />
        </div>
      </a>

      <!-- Books Content -->
      <div v-motion-fade-visible :delay="200" class="w-full lg:w-[600px] flex flex-col gap-6">
        <div class="flex justify-start">
          <div class="flex justify-center w-full lg:w-auto">
            <NuxtImg placeholder src="/stars.svg" alt="Robi Harid" class="w-[130px] shadow-lg object-cover" />
          </div>
        </div>

        <!-- Title -->
        <h2 class="text-[32px] sm:text-[40px] md:text-[38px] xl:text-[48px] font-[500] text-white leading-[1.17] tracking-[1px]">
          Hiring: Candidate Experience Made Easy
        </h2>

        <a
          href="https://books.google.com.vn/books?id=8hozEQAAQBAJ&pg=PA3&dq=hiring:+candidate+experience+made+easy&hl=en&newbks=1&newbks_redir=0&source=gb_mobile_search&sa=X&ved=2ahUKEwj6-ra18ayKAxUHh1YBHSIbDVkQ6AF6BAgLEAM#v=onepage&q=hiring%3A%20candidate%20experience%20made%20easy&f=false"
          target="_blank "
        >
          <Button class="z-[4000] w-full md:w-auto" variant="secondary">View Now </Button>
        </a>
        <!-- Paragraphs -->
        <div>
          <div class="text-[#908e9b] flex flex-col gap-4 mb-4 tleading-7 mb-4 text-base md:text-lg xl:max-w-[470px]">
            <p>
              After speaking with hundreds of recruiters, I’ve compiled everything I’ve learned into a book designed to help recruiters enhance the
              candidate experience and build lasting relationships.
            </p>
            <p>
              <span class="font-bold">‘Hiring: Candidate Management Made Easy’</span> is a comprehensive guide to creating a recruitment process that
              attracts, engages, and retains top talent—all while ensuring every applicant feels valued and appreciated.
            </p>
            <p>
              It explores how treating every candidate with respect and care fosters an exceptional experience, building trust, loyalty, and a
              reputation for excellence. By prioritising these principles, you’ll position yourself as the recruiter of choice, attracting candidates
              who choose to work with you time and time again.
            </p>
          </div>

          <p class="leading-7 mb-2 text-base md:text-lg w-full xl:max-w-[470px]">
            <span class="font-bold text-[#908e9b]">Robi Harid</span>
          </p>
          <p class="text-[#908e9b] text-base md:text-lg leading-8 w-full lg:auto font-bold">Director at RobX Technologies</p>
        </div>
      </div>
    </div>
  </div>
</template>
