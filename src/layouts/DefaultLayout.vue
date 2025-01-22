<template>
  <div class="bg-gray-50 text-gray-800">
    <!-- Header -->
    <header class="bg-[#640000] text-white sticky top-0 z-50 uppercase">
      <div class="container mx-auto md:px-20 flex justify-between items-center py-6">
        <!-- Logo -->
        <h1 class="font-origin text-5xl font-normal ms-5 hidden lg:block">MPL INDONESIA</h1>

        <!-- Mobile Menu Trigger -->
        <div id="primary-menu-trigger" class="block lg:hidden cursor-pointer absolute top-0 right-3 p-2"
          @click="toggleMenu">
          <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"
            class="text-2xl transition-transform duration-400"></i>
        </div>


        <!-- Navigation -->
        <nav id="primary-menu" :class="{ hidden: !isMenuOpen, flex: isMenuOpen }"
          class="primary-menu flex-col lg:flex lg:flex-row lg:space-x-3 mt-10 lg:mt-0 mx-3 lg:mx-0 lg:items-center w-full lg:w-auto space-y-4 lg:space-y-0">
          <!-- Menu Items -->
          <router-link to="/" :class="getActiveClass('/')"
            class="border-b pb-3 lg:border-b-0 lg:pb-0 hover:text-red-600 font-400 flex items-center">
            Home
          </router-link>
          <router-link to="/teams" :class="getActiveClass('/teams')"
            class="border-b pb-3 lg:border-b-0 lg:pb-0 hover:text-red-600 font-400 flex items-center">
            Tim
          </router-link>
          <router-link to="/transfer" :class="getActiveClass('/transfer')"
            class="border-b pb-3 lg:border-b-0 lg:pb-0 hover:text-red-600 font-400 flex items-center">Transfer</router-link>
          <router-link to="/schedule" :class="getActiveClass('/schedule')"
            class="border-b pb-3 lg:border-b-0 lg:pb-0 hover:text-red-600 font-400 flex items-center">Jadwal</router-link>
          <router-link to="/ticket" :class="getActiveClass('/ticket')"
            class="border-b pb-3 lg:border-b-0 lg:pb-0 hover:text-red-600 font-400 flex items-center">Tiket</router-link>
          <router-link to="/career" :class="getActiveClass('/career')"
            class="border-b pb-3 lg:border-b-0 lg:pb-0 hover:text-red-600 font-400 flex items-center">Career</router-link>
          <router-link to="https://id-mpl.com/m6"
            class="border-b pb-3 lg:border-b-0 lg:pb-0 hover:text-red-600 font-400 flex flex-col items-center text-center">
            <div class="flex items-center space-x-2">
              <img src="/icons/logo-m6.png" alt="M6" class="w-5 h-5" />
              <span class="text-lg">M6</span>
            </div>
            <span class="text-xs">#M6NYALAINDONESIA</span>
          </router-link>
          <router-link to="/statistics" :class="getActiveClass('/statistics')"
            class="border-b pb-3 lg:border-b-0 lg:pb-0 hover:text-red-600 font-400 flex items-center">Statistik</router-link>
          <router-link to="/news" :class="getActiveClass('/news')"
            class="border-b pb-3 lg:border-b-0 lg:pb-0 hover:text-red-600 font-400 flex items-center">Berita</router-link>

          <!-- Dropdown -->
          <div class="relative group">
            <router-link to="/about"
              class="border-b pb-3 lg:border-b-0 lg:pb-0 hover:text-red-600 font-400 flex items-center">
              Tentang Kita
              <i class="icon-angle-down ml-2"></i>
            </router-link>
            <ul
              class="absolute hidden group-hover:block bg-white font-medium text-black shadow-md rounded mt-2 w-48 border-t-2 border-red-600">
              <li>
                <router-link to="/mpljourney" class="block px-4 py-2 hover:bg-gray-100 border-b border-black">
                  MPL JOURNEY
                </router-link>
              </li>
              <li>
                <router-link to="/" class="block px-4 py-2 hover:bg-gray-100">SEASON 14</router-link>
              </li>
              <li>
                <router-link to="https://id-mpl.com/s13" class="block px-4 py-2 hover:bg-gray-100">SEASON
                  13</router-link>
              </li>
              <li>
                <router-link to="https://id-mpl.com/s12" class="block px-4 py-2 hover:bg-gray-100">SEASON
                  12</router-link>
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
              <button id="gotoTop" @click="scrollToTop"
                class="bg-red-950 text-white hover:bg-[#640000] my-0 py-3 px-8 text-sm shadow-lg focus:outline-none">
                <i class="fas fa-angle-up"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="container mx-auto px-20">
          <div class="flex justify-between py-4 text-center md:text-left">
            <div class="text-gray-700">
              Copyrights © 2025 Moonton. All Rights Reserved. <strong>(by Riswan Nopiyar)</strong>
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
import "@fortawesome/fontawesome-free/css/all.min.css";

export default defineComponent({
  name: "DefaultLayout",
  setup() {
    const isMenuOpen = ref(false); // Menyimpan status menu
    const route = useRoute(); // Mendapatkan route saat ini

    // Menambahkan kelas aktif jika URL cocok
    const getActiveClass = (url: string): string => {
      return route.path === url ? "text-red-600" : "";
    };

    // Fungsi untuk toggle menu
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    // Fungsi untuk scroll ke atas
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scrolling effect
      });
    };

    return {
      getActiveClass,
      isMenuOpen,
      toggleMenu,
      scrollToTop, // Tambahkan fungsi ini
    };
  },
});
</script>

<style scoped>
/* Pastikan tombol tetap di posisi tetap */
#gotoTop {
  z-index: 50; /* Agar tombol berada di atas elemen lain */
}
</style>
