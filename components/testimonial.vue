<script setup>
// Testimonials Data
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
    logo: "/mailchimp.svg",
    text: "This product has completely transformed how we approach our projects. Absolutely recommend it!",
    avatar: "/avatar-3.svg",
    name: "Jane Doe",
    position: "Product Manager at ABC Corp",
    company: "Mailchimp",
  },
];
</script>

<template>
  <div id="my-project" class="bg-[#14151A] w-full mt-8 py-16 px-8 md:py-[80px] lg:px-[120px] flex items-center justify-center">
    <div class="w-full max-w-[1200px]">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Testimonial Card -->
        <div
          v-motion-slide-visible-once-top
          :delay="300"
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="max-w-full max-w-[350px] flex flex-col justify-between text-white rounded-[1.5rem] p-6 md:p-8 shadow-lg border-[#FFFFFF24] border min-h-[400px]"
        >
          <!-- Company Logo -->
          <div class="mb-4 flex">
            <NuxtImg :src="testimonial.logo" :alt="testimonial.company + ' Logo'" class="w-16 md:w-24 h-10 md:h-12" />
          </div>

          <!-- Testimonial Text -->
          <p class="text-[18px] md:text-lg font-[500] leading-relaxed mb-4 md:mb-6 leading-[1.33] tracking-[1.2px] flex-grow mt-4">
            <!-- flex-grow eklendi -->
            {{ testimonial.text }}
          </p>

          <!-- Author Information -->
          <div class="flex gap-4 items-center">
            <NuxtImg placeholder :src="testimonial.avatar" :alt="testimonial.name + ' Avatar'" class="w-10 h-10 md:w-12 md:h-12 rounded-full" />
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
