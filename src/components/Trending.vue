<template>
    <section class="title-ornaments mt-14 pb-16">
      <div class="container mx-auto md:px-14 relative">
        <h4 class="text-center font-origin text-gray-600 font-bold uppercase">Trending</h4>
  
        <!-- Vue 3 Carousel -->
        <Carousel v-bind="carouselConfig" class="carousel-wrapper w-">
          <Slide
            v-for="(item, index) in trending"
            :key="index"
            class="shorts-item"
          >
            <a :href="item.url" class="block">
              <img
                :src="item.image"
                :alt="item.title"
                class="rounded-lg shadow-md w-full h-[400px] object-cover"
                loading="lazy"
              />
            </a>
          </Slide>
  
          <template #addons>
            <Navigation class="custom-navigation" />
            <Pagination />
          </template>
        </Carousel>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import trending from "@/assets/json/trending.json";
  import "vue3-carousel/dist/carousel.css";
  import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";

  interface TrendingData {
    title: string;
    image: string;
    url: string;
  }

  export default defineComponent({
    name: "Trending",
    components: {
      Carousel,
      Slide,
      Navigation,
      Pagination,
    },
    data() {
      return {
        trending: trending as TrendingData[], // Menyatakan tipe data dengan interface
        carouselConfig: {
          wrapAround: true, // Carousel melingkar
          snapAlign: "center", // Item snap ke tengah
          autoplay: false, // Autoplay dimatikan
          autoplayHoverPause: true, // Berhenti autoplay saat hover
          speed: 500, // Kecepatan transisi dalam ms
          gap: 20, // Jarak antar item (akan diimplementasikan dengan CSS)
          breakpoints: {
            1024: { itemsToShow: 5 }, // Jika lebar layar >= 1024px, tampilkan 5 item
            768: { itemsToShow: 3 },  // Jika lebar layar >= 768px, tampilkan 3 item
            640: { itemsToShow: 2 },  // Jika lebar layar >= 640px, tampilkan 2 item
            0: { itemsToShow: 1 },    // Jika lebar layar < 640px, tampilkan 1 item
          },
        },
      };
    },
  });
</script>
