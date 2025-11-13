<style>
body {
  font-family: "InterDisplay" !important;
}
</style>
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "u5nmspyn18");
</script>
<script lang="ts" setup>
import { Toaster } from "vue-sonner";
import Books from "./components/books.vue";
useHead({
  link: [
    {
      rel: "canonical",
      href: "https://www.robiharid.co.uk",
    },
  ],
});
</script>

<template>
  <Toaster
    :toastOptions="{
      style: { background: '#0B0C0E', color: 'white', borderColor: '#FFFFFF2E' },
    }"
    position="top-right"
  />

  <div class="bg-[#0B0C0E] w-full relative overflow-hidden mx-auto">
    <Header></Header>
    <div
      class="z-[100] min-w-[40.5rem] max-w-[30.5rem] max-h-[30.5rem] min-h-[30.5rem] absolute top-[2.75rem] right-[-20.8125rem] bg-[#231D83] shadow-[0_4px_20px_rgba(0,0,0,0.7)] blur-[1000px] rounded-[30.5rem] pointer-events-none"
    ></div>
    <div
      class="z-[1] w-[25.5rem] h-[25.5rem] absolute top-[4rem] right-[55.9375rem] bg-[rgba(240,145,255,0.60)] shadow-[0_4px_20px_rgba(0,0,0,0.7)] blur-[1000px] rounded-[30.5rem] pointer-events-none"
    ></div>
    <Banner></Banner>
    <Story></Story>
    <div
      class="z-[100] min-w-[20.5rem] max-w-[30.5rem] max-h-[30.5rem] min-h-[30.5rem] absolute top-[60.75rem] right-[-20.8125rem] bg-[#231D83] shadow-[0_4px_20px_rgba(0,0,0,0.7)] blur-[1000px] rounded-[30.5rem] pointer-events-none"
    ></div>
    <div
      class="z-[1] w-[20.5rem] h-[30.5rem] absolute top-[80rem] right-[95.9375rem] bg-[rgba(240,145,255,0.60)] shadow-[0_4px_20px_rgba(0,0,0,0.7)] blur-[1000px] rounded-[30.5rem] pointer-events-none"
    ></div>

    <div class="bg-[#14151A] w-full flex items-center justify-center">
      <Books></Books>
    </div>

    <Getintouch></Getintouch>
    <div class="w-full">
      <Footer></Footer>
    </div>
  </div>
</template>
