<template>
  <section class="hero-section">
    <Carousel ref="carousel" v-bind="carouselConfig" class="hero-carousel">
      <Slide class="p-0">
        <a href="#">
          <div class="aspect-w-16 aspect-h-9">
            <img src="/images/Champions_Banner_MPLID_S14.webp" alt="Champions Banner MPL ID S14"
              class="w-full h-full object-cover" loading="eager" />
          </div>
        </a>
      </Slide>
      <Slide class="p-0">
        <a href="#">
          <div class="aspect-w-16 aspect-h-9">
            <img src="/images/M6nyala-Indonesia.webp" alt="M6 Nyala Indonesia" class="w-full h-full object-cover"
              loading="eager" />
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

  <section class="title-ornaments mt-16 pb-16">
    <StandingsSection />
  </section>

  <section class="title-ornaments mt-16 pb-16">
    <TrendingCard />
  </section>

  <section class="title-ornaments mt-16 pb-16">
    <NewsSection />
  </section>

  <section class="title-ornaments mt-16 pb-16">
    <GameHighlights />
  </section>

  <section class="title-ornaments mt-16 pb-16">
    <FAQ />
  </section>

  <section class="title-ornaments mt-16 pb-16">
    <AboutUs />
  </section>

  <section class="mt-14 pb-16 ">
    <SponsorsSection />
  </section>

</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import StandingsSection from "@/components/StandingsSection.vue";
import TrendingCard from "@/components/TrendingCard.vue";
import NewsSection from "@/components/NewsSection.vue";
import GameHighlights from "@/components/GameHighlights.vue";
import FAQ from "@/components/FAQ.vue";
import AboutUs from "@/components/AboutUs.vue";
import SponsorsSection from "@/components/SponsorsSection.vue";

// Deklarasi manual tipe CarouselInstance jika tidak tersedia
interface CarouselInstance {
  prev: () => void;
  next: () => void;
}

export default defineComponent({
  name: "HomePage",
  components: {
    Carousel,
    Slide,
    StandingsSection,
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
      carousel.value?.prev(); // Memanggil metode prev pada instance Carousel
    };

    const goNext = () => {
      carousel.value?.next(); // Memanggil metode next pada instance Carousel
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
        touchDrag: true
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

/* Gaya default untuk .carousel-control */
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

/* Media query untuk layar di bawah ukuran md (max-width: 768px) */
@media screen and (max-width: 768px) {
  .carousel-control {
    font-size: 20px;
    /* Ukuran font lebih kecil */
    padding: 8px 10px;
    /* Padding lebih kecil */
    margin: 0 -5px;
    /* Margin lebih kecil */
  }

  .carousel-control.prev {
    left: 5px;
    /* Jarak dari kiri lebih kecil */
  }

  .carousel-control.next {
    right: 5px;
    /* Jarak dari kanan lebih kecil */
  }
}
</style>
