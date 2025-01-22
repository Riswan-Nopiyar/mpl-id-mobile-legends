<template>
    <NewsSection />
    <section class="container mx-auto px-4 md:px-20 pb-8">
      <hr class="mb-4 border" />
      <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-8">
        <div v-for="(news, index) in newsList" :key="index"
             class="flex lg:block items-center bg-white rounded-lg overflow-hidden lg:mpl-shadow">
          <!-- Gambar -->
          <a :href="news.link" target="_blank" class="block w-32 h-24 lg:h-auto lg:w-full flex-shrink-0">
            <img :src="news.image" :alt="news.title"
                 class="w-full h-full object-cover border-b border-red-600" />
          </a>
          <!-- Konten Berita -->
          <div class="p-4 flex-1 lg:block">
            <p class="text-sm text-gray-500 mb-1">{{ news.date }}</p>
            <a :href="news.link" target="_blank"
               class="text-sm font-semibold text-gray-800 hover:underline line-clamp-2">
              {{ news.title }}
            </a>
          </div>
        </div>
      </div>
    </section>
  
    <section class="mt-32 pb-16">
      <SponsorsSection />
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import rawNewsList from "@/assets/json/newsList.json"; // Impor data JSON
  import NewsSection from "@/components/NewsSection.vue";
  import SponsorsSection from "@/components/SponsorsSection.vue";
  
  // Tipe untuk NewsItem
  interface NewsItem {
    date: string;
    title: string;
    image: string;
    link: string;
  }
  
  // Fungsi validasi untuk memastikan JSON sesuai dengan tipe NewsItem[]
  const validateNewsList = (data: unknown): NewsItem[] => {
    if (!Array.isArray(data)) {
      throw new Error("Invalid data format: not an array");
    }
  
    // Validasi setiap item dalam array
    const validatedData = data.filter((item): item is NewsItem => {
      return (
        typeof item.date === "string" &&
        typeof item.title === "string" &&
        typeof item.image === "string" &&
        typeof item.link === "string"
      );
    });
  
    if (validatedData.length !== data.length) {
      throw new Error("Invalid data: some items do not match NewsItem type");
    }
  
    return validatedData;
  };
  
  export default defineComponent({
    name: "NewsPage",
    components: {
      NewsSection,
      SponsorsSection,
    },
    data() {
      return {
        newsList: validateNewsList(rawNewsList), // Validasi data JSON
      };
    },
  });
  </script>
  