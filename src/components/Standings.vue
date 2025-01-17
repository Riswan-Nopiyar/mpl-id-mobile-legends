<template>
    <section class="py-8 title-ornaments">
      <div class="container mx-auto md:px-20">
        <div class="uppercase text-center">
          <h4 class="mb-6 font-origin text-gray-600 font-bold">Standings</h4>
        </div>
        <table class="w-full border-collapse bg-white text-left shadow-md uppercase">
          <thead>
            <tr class="bg-black text-white text-center">
              <th class="pb-1 px-4 ps-8 text-start">Team</th>
              <th class="pb-1 px-4 text-red-500">Match Points</th>
              <th class="pb-1 px-4">Match W-L</th>
              <th class="pb-1 px-4 text-red-500">Net Game Win</th>
              <th class="pb-1 px-4">Game W-L</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="team in standings" :key="team.rank" :class="{ 'bg-red-300': team.rank > standings.length - 3 }"
              class="border-t font-bold">
              <td class="py-1 px-1 whitespace-nowrap">
                <div class="flex items-center space-x-3">
                  <span
                    class="font-origin py-2 px-[6px] ml-2 bg-black text-white leading-6 text-4xl">
                    {{ team.rank }}
                  </span>
                  <img :src="team.logo" class="h-6" :alt="team.team" />
                  <span class="block lg:hidden">{{ team.abbreviation }}</span>
                  <span class="hidden lg:block">{{ team.team }}</span>
                </div>
              </td>
              <td class="py-1 px-4 text-center text-red-500">{{ team.matchPoints }}</td>
              <td class="py-1 px-4 text-center">
                {{ team.matchWin }} - {{ team.matchLose }}
              </td>
              <td class="py-1 px-4 text-center">{{ team.netGameWin }}</td>
              <td class="py-1 px-4 text-center">
                {{ team.gameWin }} - {{ team.gameLose }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import standings from "@/assets/json/standings.json";
  
  export default defineComponent({
    name: "Standings",
    data() {
      return {
        standings,
      };
    },
  });
  </script>
  
  <style scoped>
  /* Tambahkan gaya yang diperlukan */
  </style>
  