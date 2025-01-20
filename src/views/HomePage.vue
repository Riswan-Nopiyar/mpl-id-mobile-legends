<template>
  <section class="hero-section">
    <Carousel ref="carousel" v-bind="carouselConfig" class="hero-carousel">
      <Slide class="p-0">
        <a href="#">
          <div class="aspect-w-16 aspect-h-9">
            <img
              src="/images/Champions_Banner_MPLID_S14.webp"
              alt="Champions Banner MPL ID S14"
              class="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </a>
      </Slide>
      <Slide class="p-0">
        <a href="#">
          <div class="aspect-w-16 aspect-h-9">
            <img
              src="/images/M6nyala-Indonesia.webp"
              alt="M6 Nyala Indonesia"
              class="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </a>
      </Slide>
      <template #addons>
        <button class="carousel-control prev" @click="goPrev">
          <i class="fa fa-chevron-left"></i>
        </button>
        <button class="carousel-control next" @click="goNext">
          <i class="fa fa-chevron-right"></i>
        </button>
      </template>
    </Carousel>
  </section>
  <StandingsTable />
  <TrendingCard />
  <NewsSection />
  <GameHighlights />
  <FAQ />
  <AboutUs />
  <SponsorsSection />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import StandingsTable from "@/components/StandingsTable.vue";
import TrendingCard from "@/components/TrendingCard.vue";
import NewsSection from "@/components/NewsSection.vue";
import GameHighlights from "@/components/GameHighlights.vue";
import FAQ from "@/components/FAQ.vue";
import AboutUs from "@/components/AboutUs.vue";
import SponsorsSection from "@/components/SponsorsSection.vue";

// Import tipe bawaan untuk Carousel dari vue3-carousel
import type { CarouselInstance } from "vue3-carousel";

export default defineComponent({
  name: "HomePage",
  components: {
    Carousel,
    Slide,
    StandingsTable,
    TrendingCard,
    NewsSection,
    GameHighlights,
    FAQ,
    AboutUs,
    SponsorsSection,
  },
  setup() {
    // Tipe spesifik: carousel adalah referensi ke CarouselInstance
    const carousel = ref<CarouselInstance | null>(null);

    const goPrev = () => {
      carousel.value?.prev(); // Tidak ada `any` di sini
    };

    const goNext = () => {
      carousel.value?.next(); // Tidak ada `any` di sini
    };

    return {
      carousel,
      goPrev,
      goNext,
      carouselConfig: {
        wrapAround: true,
        autoplay: 5000,
        transition: 600,
        snapAlign: "center",
        itemsToShow: 1,
      },
    };
  },
});
</script>

<style scoped>
.hero-section {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
}
.hero-carousel {
  position: relative;
  width: 100%;
}
.hero-carousel img {
  margin: 0;
  padding: 0;
}
.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 0 -10px;
  cursor: pointer;
  font-size: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;
}
.carousel-control.prev {
  left: 10px;
}
.carousel-control.next {
  right: 10px;
}
.carousel-control:hover {
  background: rgba(0, 0, 0, 0.8);
  transform: translateY(-50%) scale(1.1);
}
</style>
