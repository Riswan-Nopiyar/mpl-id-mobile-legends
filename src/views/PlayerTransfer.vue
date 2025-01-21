<template>
    <section class="title-ornaments pb-16 -mt-4">
      <div class="container mx-auto md:px-36">
        <h4 class="text-center font-origin font-bold text-gray-600 uppercase">
          Bursa Transfer MPL Indonesia
        </h4>
        <!-- Table -->
        <div class="flex flex-col mt-8">
          <!-- Data Rows -->
          <div
            v-for="(player, index) in players"
            :key="index"
            :class="['flex flex-col md:flex-row items-center md:items-start gap-4 p-2', index % 2 === 0 ? 'bg-transparent' : 'bg-gray-200']"
          >
            <div class="w-full md:w-36 text-center my-auto">
              <span class="font-light text-sm">{{ player.date }}</span>
            </div>
            <div class="w-full md:w-1/3 text-left">
              <span class="font-semibold text-sm">{{ player.playerName }}</span>
              <br />
              <span class="text-gray-700 capitalize font-light text-xs">{{ player.role }}</span>
            </div>
            <div class="md:w-1/5 text-center md:text-left flex items-center gap-2 m-auto">
              <img
                :src="player.fromTeam.logo"
                alt="from-team-logo"
                class="w-8 h-8"
              />
              <span>{{ player.fromTeam.name }}</span>
            </div>
            <div class="md:w-10 text-center md:text-left flex items-center gap-2 m-auto">
                <i class="fas fa-arrow-circle-right"></i>
            </div>
            <div class="md:w-1/5 text-center md:text-left flex items-center gap-2 m-auto">
              <img
                :src="player.toTeam.logo"
                alt="to-team-logo"
                class="w-8 h-8"
              />
              <span>{{ player.toTeam.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <SponsorsSection />
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import SponsorsSection from "@/components/SponsorsSection.vue";
  import playerTransfer from "@/assets/json/playerTransfer.json"; // Import JSON file
  
  export default defineComponent({
    name: "PlayerTransfer",
    components: {
      SponsorsSection,
    },
    data() {
      return {
        players: playerTransfer, // Bind data from JSON file
      };
    },
  });
  </script>