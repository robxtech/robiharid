<template>
  <div id="contact" class="bg-[#0b0c0e] w-full py-[80px] px-4 md:px-8 lg:px-[120px] flex items-center justify-center">
    <div class="w-full flex items-center justify-between max-w-[1200px]">
      <div class="flex flex-col lg:flex-row items-center justify-between text-white rounded-xl my-10 lg:my-16 gap-8">
        <div class="flex-1 max-w-full flex flex-col items-start">
          <div class="mb-8 lg:mb-10">
            <div
              class="bg-[#100f17] text-center text-white rounded-full w-12 h-12 lg:w-14 lg:h-14 border-[#FFFFFF24] border flex items-center justify-center text-lg lg:text-xl font-bold"
            >
              #
            </div>
          </div>
          <h2 class="text-2xl md:text-3xl font-semibold mb-4 text-left">Get In Touch</h2>
          <p class="text-gray-300 text-base md:text-lg leading-relaxed mb-6 text-left">
            To get in touch with Robi, learn more about RecruitMate AI or book keynote speaking events, please contact Robi through the form below.
          </p>

          <form class="space-y-4 w-full">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7">
              <Input placeholder="example@example.com" type="email" label="Email" size="medium" />
              <Input placeholder="John Doe" type="text" label="Name" size="medium" />
            </div>
            <div>
              <label class="block text-gray-300">
                Message
                <textarea
                  placeholder="Write something"
                  rows="4"
                  class="w-full mt-2 bg-transparent text-gray-300 placeholder-gray-500 rounded-md py-3 px-4 focus:outline-none focus:ring-1 focus:ring-white border-[#FFFFFF24] border"
                ></textarea>
              </label>
            </div>

            <Button
              variant="secondary"
              size="medium"
              type="submit"
              class="flex items-center gap-2 bg-white text-black py-3 px-6 rounded-md hover:bg-gray-100 transition float-right"
            >
              <div class="flex justify-center items-center gap-2">
                Send Your Message
                <nuxt-icon name="right-arrow" />
              </div>
            </Button>
          </form>
        </div>

        <div class="w-full lg:w-auto hidden lg:flex">
          <img src="../public/robi-getin-touch.svg" alt="Robi Group" class="rounded-lg w-full max-w-[300px] md:max-w-md object-cover shadow-lg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "./ui/button.vue";
import Input from "./ui/input.vue";
</script>
