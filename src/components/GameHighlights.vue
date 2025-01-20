<template>
  <section class="title-ornaments mt-14 pb-16">
    <div class="container mx-auto md:px-20">
      <!-- Section Title -->
      <h4 class="text-center font-origin text-gray-600 font-bold uppercase">Game Highlights</h4>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <!-- Video Player -->
        <div class="lg:col-span-2">
          <div class="aspect-w-16 h-[400px] aspect-h-9 bg-[#640000]">
            <iframe :src="currentVideo" frameborder="0" allowfullscreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              class="w-full h-full rounded-lg"></iframe>
          </div>
        </div>

        <!-- Playlist & Select Dropdown -->
        <div>
          <!-- Dropdown for Playlist Selection -->
          <div class="mb-1 relative">
            <select v-model="selectedCategory"
              class="px-2 font-bold text-lg w-[90%] mx-5 my-4 relative outline-none z-10" @change="filterVideos">
              <option v-for="category in categories" :key="category.value" :value="category.value">
                {{ category.label }}
              </option>
            </select>
            <div class="bg-select-border-playlist"></div>
          </div>


          <!-- Video Playlist -->
          <ul class="overflow-y-auto max-h-[343px] bg-transparent video-playlist">
            <li v-for="video in filteredVideos" :key="video.id"
              class="flex items-center gap-4 p-1 cursor-pointer transition-all duration-300" :class="{
                'bg-[#640000] text-white': currentVideo === video.url
              }" @click="changeVideo(video.url)">
              <!-- Thumbnail -->
              <div class="flex-shrink-0">
                <img :src="video.thumbnail" :alt="video.title" class="w-[120px] object-cover" loading="lazy" />
              </div>
              <!-- Title -->
              <div class="text-sm font-medium">
                {{ video.title }}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import videoPlaylist from "@/assets/json/videoPlaylist.json";

// Define interface Video
interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  category: string;
}

export default defineComponent({
  name: "GameHighlights",
  data() {
    return {
      videos: videoPlaylist as unknown as Video[],
      filteredVideos: videoPlaylist as unknown as Video[],
      currentVideo: (videoPlaylist as unknown as Video[])[0].url,
      selectedCategory: "playoffs",
      categories: [
        { value: "playoffs", label: "Playoffs" },
        { value: "week-9", label: "Week 9" },
        { value: "week-8", label: "Week 8" },
        { value: "week-7", label: "Week 7" },
        { value: "week-6", label: "Week 6" },
        { value: "week-5", label: "Week 5" },
        { value: "week-4", label: "Week 4" },
        { value: "week-3", label: "Week 3" },
        { value: "week-2", label: "Week 2" },
        { value: "week-1", label: "Week 1" },
      ],
    };
  },
  mounted() {
    this.filterVideos(); // Filter video saat komponen dimuat
  },
  methods: {
    changeVideo(videoUrl: string) {
      this.currentVideo = videoUrl; // Mengubah video yang sedang dimainkan
    },
    filterVideos() {
      this.filteredVideos = this.videos.filter(
        (video: Video) => video.category === this.selectedCategory
      );

      // Set video pertama dari kategori yang dipilih sebagai default
      if (this.filteredVideos.length > 0) {
        this.currentVideo = this.filteredVideos[0].url;
      }
    },
  },
});
</script>
