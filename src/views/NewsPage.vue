<template>
    <section class="container mx-auto px-4 md:px-20 py-8">
        <hr class="mb-4 border"/>
      <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div
          v-for="(news, index) in newsList"
          :key="index"
          class="flex lg:block items-center bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <!-- Gambar -->
          <a :href="news.link" target="_blank" class="block w-32 h-24 lg:h-auto lg:w-full flex-shrink-0">
            <img
              :src="news.image"
              :alt="news.title"
              class="w-full h-full object-cover border-b border-red-600"
            />
          </a>
  
          <!-- Konten Berita -->
          <div class="p-4 flex-1 lg:block">
            <p class="text-sm text-gray-500 mb-1">{{ news.date }}</p>
            <a :href="news.link" target="_blank" class="text-sm font-semibold text-gray-800 hover:underline line-clamp-2">
              {{ news.title }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import newsList from "@/assets/json/newsList.json";
  
interface NewsItem {
    date: string;
    title: string;
    image: string;
    link: string;
}

  export default defineComponent({
    name: "NewsPage",
    data(): { newsList: NewsItem[]} {
      return {
        newsList: newsList as NewsItem[],
      };
    },
  });
  </script>
  
  <style scoped>
  /* Tambahkan styling khusus jika dibutuhkan */
  </style>
  