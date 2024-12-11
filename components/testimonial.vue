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

// Page Metadata
useHead({
  title: "Explore Testimonials | Robi Harid",
  meta: [
    { name: "description", content: "Discover the impact of my projects through testimonials from industry leaders like Elon Musk and Jane Doe." },
    { name: "keywords", content: "Robi Harid, projects, testimonials, innovative solutions, client feedback" },
    { name: "author", content: "Robi Harid" },
    { property: "og:title", content: "My Projects - Explore Testimonials | Robi Harid" },
    { property: "og:description", content: "Explore testimonials from leaders like Elon Musk, showcasing the impact of Robi Harid's projects." },
    { property: "og:image", content: "/framer.svg" },
    { property: "og:url", content: "https://robi-harid" },
    { property: "og:type", content: "website" },
    { name: "twitter:title", content: "My Projects - Explore Testimonials | Robi Harid" },
    {
      name: "twitter:description",
      content: "Discover testimonials from industry leaders like Elon Musk, showcasing Robi Harid's innovative solutions.",
    },
    { name: "twitter:image", content: "/framer.svg" },
  ],
});
</script>

<template>
  <div id="my-project" class="bg-[#14151A] w-full mt-8 py-16 px-8 md:py-[80px] lg:px-[120px] flex items-center justify-center">
    <div class="w-full max-w-[1200px]">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Testimonial Card -->
        <div
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
