<template>
  <section class="title-ornaments pb-16">
    <div class="container mx-auto md:px-6">
      <h4 class="text-center font-origin font-bold text-gray-600 uppercase">
        Teams
      </h4>
      <div class="flex flex-wrap justify-center gap-1 pt-5 pb-11">
        <div
          v-for="team in esportTeams"
          :key="team.id"
          class="relative w-full mx-3 md:max-w-[95px] m-2"
          style="filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.35));"
        >
          <a :href="team.link">
            <div
              :class="['hidden md:block z-10 absolute w-full text-white text-md font-bold py-2 text-center mt-3',
                       team.isSpecial
                         ? 'bg-gradient-to-r from-[#754c36] via-[#b27e52] to-[#754c36]'
                         : 'bg-[#640000]'
              ]"
            >
              {{ team.name }}
            </div>
            <span
              v-if="team.isSpecial"
              class="absolute top-8 md:top-8 z-20 left-16 md:left-auto md:right-[6px] w-[40px] aspect-[5/3] bg-[url('/orns/orn-teams.png')] bg-cover bg-no-repeat"
            />
            <div
              :class="[
                'p-[5px] hover:bg-gray-200',
                team.isSpecial
                  ? 'bg-gradient-to-r md:bg-gradient-to-b from-[#754C36] via-[#FFC28F] to-[#754C36] [clip-path:polygon(0_0,calc(100%_-_30px)_0,100%_50%,calc(100%_-_30px)_100%,0_100%)] md:[clip-path:polygon(100%_0,100%_calc(100%_-_40px),50%_100%,0_calc(100%_-_40px),0_0)]'
                  : '[clip-path:polygon(0_0,calc(100%_-_30px)_0,100%_50%,calc(100%_-_30px)_100%,0_100%)] md:[clip-path:polygon(100%_0,100%_calc(100%_-_38px),50%_100%,0_calc(100%_-_38px),0_0)] bg-[#f8f8f8]'
              ]"
            >

              <div
                :class="[
                  'p-[5px] flex flex-col items-center h-16 md:h-72 hover:bg-gray-200',
                  team.isSpecial
                    ? 'hover:bg-gradient-to-b bg-gradient-to-r md:bg-gradient-to-b  hover:from-[#a37c4f] hover:via-[#e4ded7] hover:to-[#eeeeee] from-[#ce9d64] via-[#fff9f1] to-[#f8f8f8] [clip-path:polygon(0_0,calc(100%_-_30px)_0,100%_50%,calc(100%_-_30px)_100%,0_100%)] md:[clip-path:polygon(100%_0,100%_calc(100%_-_40px),50%_100%,0_calc(100%_-_40px),0_0)]'
                    : '[clip-path:polygon(0_0,calc(100%_-_30px)_0,100%_50%,calc(100%_-_30px)_100%,0_100%)] md:[clip-path:polygon(100%_0,100%_calc(100%_-_38px),50%_100%,0_calc(100%_-_38px),0_0)] bg-[#f8f8f8]'
                ]"
              >
                <div
                  class="grid grid-cols-2 md:grid-cols-1 gap-x-10 self-start justify-self-start items-start"
                >
                  <div
                    :class="['block md:hidden relative w-full text-white text-sm min-w-24 py-1 text-center mt-3 -ml-1',
                             team.isSpecial
                               ? 'bg-gradient-to-r from-[#754c36] via-[#b27e52] to-[#754c36]'
                               : 'bg-[#640000]'
                    ]"
                  >
                    {{ team.name }}
                  </div>
                  <div class="flex items-center justify-center py-4">
                    <img
                      :src="team.logo"
                      :alt="team.name"
                      loading="eager"
                      class="max-w-[50px] md:max-w-[85px] -mt-3 md:mt-24 relative"
                    >
                  </div>
                  <img
                    v-if="team.isSpecial"
                    src="/logo/logo-m6-color.png"
                    alt="M6 Logo"
                    class="absolute top-8 md:top-auto md:bottom-1 right-[30px] md:right-[22px] transform -translate-y-1/2 w-[40px] h-[40px] md:w-[55px] md:h-[55px] z-[1]"
                  >
                </div>
              </div>
            </div>
            <div
              class="relative text-center mt-2 font-bold text-base"
              :class="team.isSpecial ? 'team-m6' : ''"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
  <SponsorsSection />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SponsorsSection from "@/components/SponsorsSection.vue";
import esportTeamsData from "@/assets/json/esportTeams.json";
import { z } from "zod";

// Validasi data JSON langsung
const validatedEsportTeams = z.array(z.object({
  id: z.number(),
  name: z.string(),
  logo: z.string(),
  link: z.string(),
  isSpecial: z.boolean()
})).safeParse(esportTeamsData);

// Data default jika validasi gagal
const esportTeams = validatedEsportTeams.success ? validatedEsportTeams.data : [];

export default defineComponent({
  name: "EsportTeams",
  components: {
    SponsorsSection
  },
  data() {
    return {
      esportTeams: esportTeams
    };
  }
});
</script>