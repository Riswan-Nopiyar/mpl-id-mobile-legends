<template>
    <section class="title-ornaments mt-14 pb-16">
      <div class="container mx-auto md:px-20">
        <h4 class="text-center font-origin text-gray-600 font-bold uppercase">Standings</h4>
        <div class="mx-3 md:mx-3">
        <table class="mb-2 w-full border-collapse bg-white text-left shadow-md uppercase">
          <thead>
            <tr class="bg-black text-white text-center text-xs md:text-[0.9rem]">
              <th class="p-1 ps-8 text-start">Team</th>
              <th class="p-1 text-red-500">Match Points</th>
              <th class="p-1">Match W-L</th>
              <th class="p-1 text-red-500">Net Game Win</th>
              <th class="p-1">Game W-L</th>
            </tr>
          </thead>
          <tbody>
            <tr
v-for="team in standings" :key="team.rank" :class="{ 'bg-red-300': team.rank > standings.length - 3 }"
              class="border-t text-[0.8rem] md:text-[0.9rem] font-semibold">
              <td class="p-1 whitespace-nowrap">
                <div class="flex items-center space-x-1 md:space-x-3">
                  <span
                    class="font-origin py-2 px-[6px] md:ml-2 bg-black text-white leading-6 text-4xl font-bold">
                    {{ team.rank }}
                  </span>
                  <img :src="team.logo" class="h-6" :alt="team.team" />
                  <span class="block lg:hidden">{{ team.abbreviation }}</span>
                  <span class="hidden lg:block">{{ team.team }}</span>
                </div>
              </td>
              <td class="p-1 text-center text-red-500">{{ team.matchPoints }}</td>
              <td class="p-1 text-center">
                {{ team.matchWin }} - {{ team.matchLose }}
              </td>
              <td class="p-1 text-center">{{ team.netGameWin }}</td>
              <td class="p-1 text-center">
                {{ team.gameWin }} - {{ team.gameLose }}
              </td>
            </tr>
          </tbody>
        </table>
        <span class="font-bold text-gray-600">*Tiga posisi terbawah tidak lolos ke babak playoffs</span>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import standings from "@/assets/json/standings.json";

  interface StandingsData {
    rank: number;
    team: string;
    abbreviation: string;
    logo: string;
    matchPoints: number;
    matchWin: number;
    matchLose: number;
    netGameWin: number;
    gameWin: number;
    gameLose: number;
  }

  export default defineComponent({
    name: "StandingsTable",
    data() {
      return {
        standings: standings as StandingsData[], 
      };
    },
  });
</script>

  