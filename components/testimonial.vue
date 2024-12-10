<template>
  <div id="my-project" class="bg-[#14151A] w-full mt-8 py-16 px-4 md:py-[80px] md:px-8 lg:px-[120px] flex items-center justify-center">
    <div class="w-full max-w-[1200px]">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="max-w-full max-w-[350px] flex flex-col gap-6 text-white rounded-[1.5rem] p-6 md:p-8 shadow-lg border-[#FFFFFF24] border"
        >
          <div class="mb-4 flex">
            <img :src="testimonial.logo" :alt="testimonial.company + ' Logo'" class="w-16 md:w-24" />
          </div>
          <p class="text-base md:text-lg font-medium leading-relaxed mb-4 md:mb-6">
            {{ testimonial.text }}
          </p>
          <div class="flex gap-4 flex-col">
            <img :src="testimonial.avatar" :alt="testimonial.name + ' Avatar'" class="w-10 h-10 md:w-12 md:h-12 rounded-full" />
            <div>
              <p class="font-bold">{{ testimonial.name }}</p>
              <p class="text-sm text-gray-400">{{ testimonial.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const testimonials = [
  {
    logo: "/framer.svg",
    text: "I have been using them for a year now. Everything is detailed and well organized and, of course, damn beautiful.",
    avatar: "/avatar-1.svg",
    name: "Elon Musk",
    position: "CEO and CTO of SpaceX",
    company: "Framer",
  },
  {
    logo: "/google.svg",
    text: "This product has completely transformed how we approach our projects. Absolutely recommend it!",
    avatar: "/avatar-2.svg",
    name: "Jane Doe",
    position: "Product Manager at ABC Corp",
    company: "Framer",
  },
  {
    logo: "/framer.svg",
    text: "This product has completely transformed how we approach our projects. Absolutely recommend it!",
    avatar: "/avatar-3.svg",
    name: "Jane Doe",
    position: "Product Manager at ABC Corp",
    company: "Framer",
  },
];
</script>
