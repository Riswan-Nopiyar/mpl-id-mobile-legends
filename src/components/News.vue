<template>
    <section class="title-ornaments mt-14 pb-16">
        <div class="container mx-auto md:px-20">
            <h4 class="text-center font-origin text-gray-600 font-bold uppercase">News</h4>

            <!-- Highlight News -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div v-for="(news, index) in highlightNews" :key="index">
                    <a :href="news.url" target="_blank" class="block">
                        <div
                            class="relative h-80 rounded-lg shadow-md bg-black flex items-center justify-center overflow-hidden">
                            <img :src="news.image" alt="News Image" class="w-full h-full object-cover" loading="eager" />
                            <div class="absolute bottom-0 left-0 w-full bg-white bg-opacity-80 p-4">
                                <div class="text-sm text-gray-500">{{ news.date }}</div>
                                <div class="font-bold text-lg text-gray-800 leading-snug">
                                    {{ truncate(news.title, 58) }}
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <!-- Sub News -->
            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-3">
                <div v-for="(newsGroup, groupIndex) in subNews" :key="groupIndex" class="sub-news">
                    <div v-for="(news, index) in newsGroup" :key="index" class="mb-4">
                        <a :href="news.url" target="_blank" class="flex items-center justify-center">
                            <!-- Left Image Section -->
                            <div
                                class="h-[109px] lg:h-[100px] w-[100px] lg:w-[133px] rounded-xl lg:rounded-xl flex-shrink-0 bg-black flex justify-center items-center z-20">
                                <img :src="news.image" alt="News Image"
                                    class="h-full w-full object-cover rounded-xl" loading="lazy" />
                            </div>

                            <!-- Right Frame Section -->
                            <div class="frame-border relative w-[300px] h-[122px] -ml-10 p-4 bg-contain bg-no-repeat bg-center">
                                <div class="relative z-10 ml-9">
                                    <div class="text-gray-500 text-sm mb-1">
                                        {{ news.date }}
                                    </div>
                                    <div class="font-semibold text-sm text-gray-800 leading-tight block lg:hidden hover:text-[#640000]"
                                        style="max-width: 200px;">
                                        {{ truncate(news.title, 60) }}
                                    </div>
                                    <div class="font-semibold text-sm text-gray-800 leading-tight hidden lg:block hover:text-[#640000]"
                                        style="max-width: 200px;">
                                        {{ truncate(news.title, 60) }}
                                    </div>
                                </div>
                            </div>

                        </a>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import News from "@/assets/json/News.json";

interface HighlightNews {
  image: string;
  title: string;
  date: string;
  url: string;
}

interface NewsData {
  highlightNews: HighlightNews[];
  subNews: HighlightNews[];
}

export default defineComponent({
  name: "News",
  data() {
    return {
      highlightNews: News.highlightNews as HighlightNews[],
      subNews: News.subNews as HighlightNews[], 
    };
  },
  methods: {
    truncate(text: string, maxLength: number): string {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
      }
      return text;
    }
  }
});
</script>

