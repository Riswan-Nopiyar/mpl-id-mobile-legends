<template>
  <div class="bg-gray-50 text-gray-800">
    <!-- Header -->
    <header class="bg-[#640000] text-white sticky top-0 z-50 uppercase">
    <div class="container mx-auto md:px-20 flex justify-between items-center py-6">
      <!-- Logo -->
      <h1 class="font-origin text-5xl font-normal ms-5 hidden lg:block">MPL INDONESIA</h1>

      <!-- Mobile Menu Trigger -->
      <div
        id="primary-menu-trigger"
        @click="toggleMenu"
        class="block lg:hidden cursor-pointer"
      >
        <svg
          :class="{ 'rotate-45': isMenuOpen }"
          class="svg-trigger transition-transform duration-400"
          viewBox="0 0 100 100"
        >
          <path
            d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
          ></path>
          <path d="m 30,50 h 40"></path>
          <path
            d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
          ></path>
        </svg>
      </div>

      <!-- Navigation -->
      <nav
        id="primary-menu"
        :class="{ hidden: !isMenuOpen, flex: isMenuOpen }"
        class="primary-menu flex-col lg:flex lg:flex-row lg:space-x-3 lg:items-center w-full lg:w-auto space-y-4 lg:space-y-0"
      >
        <!-- Menu Items -->
        <a
      href="/"
      :class="getActiveClass('/')"
      class="hover:text-red-600 font-400 flex items-center"
    >
      Home
    </a>
    <a
      href="/teams"
      :class="getActiveClass('/teams')"
      class="hover:text-red-600 font-400 flex items-center"
    >
      Tim
    </a>
        <a href="https://id-mpl.com/transfer" class="hover:text-red-600 font-400 flex items-center">Transfer</a>
        <a href="https://id-mpl.com/schedule" class="hover:text-red-600 font-400 flex items-center">Jadwal</a>
        <a href="https://id-mpl.com/ticket" class="hover:text-red-600 font-400 flex items-center">Tiket</a>
        <a href="https://id-mpl.com/career" class="hover:text-red-600 font-400 flex items-center">Career</a>
        <a
          href="https://id-mpl.com/m6"
          class="hover:text-red-600 font-400 flex flex-col items-center text-center"
        >
          <div class="flex items-center space-x-2">
            <img
              src="/icons/logo-m6.png"
              alt="M6"
              class="w-5 h-5"
            />
            <span class="text-lg">M6</span>
          </div>
          <span class="text-xs">#M6NYALAINDONESIA</span>
        </a>
        <a href="https://id-mpl.com/statistics" class="hover:text-red-600 font-400 flex items-center">Statistik</a>
        <a href="https://id-mpl.com/news" class="hover:text-red-600 font-400 flex items-center">Berita</a>

        <!-- Dropdown -->
        <div class="relative group">
          <a href="https://id-mpl.com/about" class="hover:text-red-600 font-400 flex items-center">
            Tentang Kita
            <i class="icon-angle-down ml-2"></i>
          </a>
          <ul
            class="absolute hidden group-hover:block bg-white font-medium text-black shadow-md rounded mt-2 w-48 border-t-2 border-red-600"
          >
            <li>
              <a
                href="https://id-mpl.com/mpljourney"
                class="block px-4 py-2 hover:bg-gray-100 border-b border-black"
              >
                MPL JOURNEY
              </a>
            </li>
            <li>
              <a href="https://id-mpl.com" class="block px-4 py-2 hover:bg-gray-100">SEASON 14</a>
            </li>
            <li>
              <a href="https://id-mpl.com/s13" class="block px-4 py-2 hover:bg-gray-100">SEASON 13</a>
            </li>
            <li>
              <a href="https://id-mpl.com/s12" class="block px-4 py-2 hover:bg-gray-100">SEASON 12</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>


    <!-- Router View untuk konten halaman -->
    <main class="bg-barong">
      <router-view /> <!-- Ini akan merender konten dari child route -->
    </main>

    <!-- Footer -->
    <footer id="footer" class="bg-white border-0">

      <!-- Copyrights -->
      <div id="copyrights" class="bg-transparent bg-cover" style="padding-top: 0; padding-bottom: 20px;">
        <div class="bg-[#640000]">
          <div
            class="container mx-auto md:px-[6.35rem] flex flex-row justify-between items-center py-2 h-[60px] lg:h-[100px]">
            <div>
              <!-- Social Media Icons -->
              <ul id="top-social" class="flex space-x-4">
                <li>
                  <a href="https://www.facebook.com/mpl.id.official/?ref=bookmarks" target="_blank"
                    class="text-white hover:text-gray-300">
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/mpl.id.official/?hl=en" target="_blank"
                    class="text-white hover:text-gray-300">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UC1dGHGJTXU_dkiR8tW3qQgg" target="_blank"
                    class="text-white hover:text-gray-300">
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/mplidofficial" target="_blank" class="text-white hover:text-gray-300">
                    <img src="https://id-mpl.com/images/_v1_6/icons/new-x-14.png" alt="Twitter Icon"
                      class="w-4 h-4 inline-block" />
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/tag/mplditiktok?lang=en" target="_blank"
                    class="text-white hover:text-gray-300">
                    <i class="fab fa-tiktok"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div class="md:mt-0 lg:hidden">
              <button
                class="bg-red-950 text-white hover:bg-[#640000] my-0 py-3 px-8 text-sm shadow-lg focus:outline-none"
                id="gotoTop">
                <i class="fas fa-angle-up"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="container mx-auto px-20">
          <div class="flex justify-between py-4 text-center md:text-left">
            <div class="text-gray-700">
              Copyrights © 2025 Moonton. All Rights Reserved. Clone by Riswan Nopiyar
            </div>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "DefaultLayout",
  setup() {
    const isMenuOpen = ref(false);
    const route = useRoute();

    const getActiveClass = (url: string): string => {
      return route.path === url ? "text-red-600" : "";
    };

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      getActiveClass,
      isMenuOpen,
      toggleMenu,
    };
  },
});
</script>

<style scoped>
.svg-trigger {
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: transform 400ms;
}
.svg-trigger.rotate-45 {
  transform: rotate(45deg);
}
</style>
