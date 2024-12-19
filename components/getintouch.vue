<script lang="ts" setup>
import { ref } from "vue";
import Button from "./ui/button.vue";
import Input from "./ui/input.vue";
import { toast } from "vue-sonner"; // Toast library import

const handleSubmit = (event: Event) => {
  toast.success("Success! sending you a message");
};
</script>

<template>
  <div id="contact" class="bg-[#0b0c0e] w-full py-[80px] px-8 lg:px-[120px] flex items-center justify-center">
    <div class="max-w-[1200px] w-full flex flex-col lg:flex-row items-end justify-between gap-8 text-white rounded-xl my-10 lg:my-16">
      <!-- Contact Information -->
      <div v-motion-slide-visible-left :delay="200" class="flex-1 flex flex-col gap-8">
        <div
          class="bg-[#100f17] text-white rounded-full w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center text-lg lg:text-xl font-bold border border-[#FFFFFF24]"
        >
          #
        </div>
        <h2 class="text-[32px] sm:text-[40px] md:text-[48px] font-[500] leading-[1.17] tracking-[-1px]">Get In Touch</h2>
        <p class="text-gray-300 text-base md:text-lg leading-relaxed">
          To get in touch with Robi, learn more about RecruitMate AI or book keynote speaking events, please contact Robi through the form below.
        </p>

        <!-- Contact Form  -->
        <form
          class="space-y-4 w-full"
          action="https://forms.hubspot.com/uploads/form/v2/48040344/7228c492-78f9-414e-a077-a85ea033dbe8"
          method="POST"
          @submit="handleSubmit"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7">
            <Input name="email" placeholder="example@example.com" type="email" label="Email" size="medium" required />
            <Input name="name" placeholder="John Doe" type="text" label="Name" size="medium" required />
          </div>
          <div>
            <label class="block text-gray-300">
              Message
              <textarea
                name="message"
                placeholder="Write something"
                rows="4"
                class="w-full mt-2 bg-transparent text-gray-300 placeholder-gray-500 rounded-md py-3 px-4 border border-[#FFFFFF24] focus:outline-none focus:ring-1 focus:ring-white"
                required
              ></textarea>
            </label>
          </div>
          <Button
            variant="secondary"
            size="medium"
            type="submit"
            class="flex items-center justify-center gap-2 bg-white text-black py-3 px-6 rounded-md hover:bg-gray-100 transition float-right w-full md:w-auto"
          >
            <div class="flex justify-center items-center gap-2">
              Send Your Message
              <nuxt-icon name="right-arrow" />
            </div>
          </Button>
        </form>
      </div>

      <!-- Contact Image -->
      <NuxtImg
        v-motion-fade-visible
        :delay="200"
        placeholder
        src="/robi-harid-getin-touch.png"
        alt="Robi Group"
        quality="85"
        format="webp"
        class="rounded-[25px] w-full max-w-[300px] lg:max-w-[20rem] xl:max-w-[22rem] max-h-[600px] object-cover shadow-lg hidden lg:flex mb-16"
      />
    </div>
  </div>
</template>
