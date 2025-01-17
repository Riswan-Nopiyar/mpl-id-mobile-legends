<template>
    <section class="home-news title-ornaments my-12">
        <div class="container mx-auto px-20">
            <h4 class="text-center font-origin text-gray-600 font-bold mb-8">NEWS</h4>

           <!-- Highlight News -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
  <div
    v-for="(news, index) in highlightNews"
    :key="index"
    class="highlight-news"
  >
    <a :href="news.url" target="_blank" class="block">
      <div class="relative h-80 rounded-lg shadow-md bg-black flex items-center justify-center overflow-hidden">
        <!-- Gunakan <img> untuk menampilkan gambar -->
        <img
          :src="news.image"
          alt="News Image"
          class="w-full h-full object-cover"
        />
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
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-3">
                <div v-for="(newsGroup, groupIndex) in subNews" :key="groupIndex" class="sub-news">
                    <div v-for="(news, index) in newsGroup" :key="index" class="mb-4">
                        <a :href="news.url" target="_blank" class="flex items-center justify-start">
                            <!-- Left Image Section -->
                            <div
                                class="h-[100px] max-w-[133px] rounded-xl flex-shrink-0 bg-black flex justify-center items-center">
                                <img :src="news.image" alt="News Image"
                                    class="h-[60px] w-[133px] max-h-[60px] max-w-[133px] rounded-lg object-cover" />
                            </div>


                            <!-- Right Frame Section -->
                            <div class="relative w-[300px] p-4 bg-contain bg-no-repeat bg-center"
                                :style="{ backgroundImage: `url('/bg/frame-news.png')` }">
                                <div class="relative z-10">
                                    <div class="text-gray-500 text-sm mb-1">
                                        {{ news.date }}
                                    </div>
                                    <div class="font-semibold text-sm text-gray-800 leading-tight">
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

<script>
export default {
    name: "NewsSection",
    data() {
        return {
            highlightNews: [
                {
                    image: "https://api.duniagames.co.id/api/content/upload/file/11568188461727444701.jpg",
                    title: "Pemain dengan Hero Signature Paling Ikonik di MPL Indonesia Season 14",
                    date: "1 Okt 2024",
                    url: "https://duniagames.co.id/discover/article/pemain-ikonik-mpl-id-s14",
                },
                {
                    image: "https://api.duniagames.co.id/api/content/upload/file/6995190101727430701.jpg",
                    title: "Pemain Baru Bersinar yang Mendapat Sorotan di MPL Indonesia Season 14",
                    date: "1 Okt 2024",
                    url: "https://duniagames.co.id/discover/article/pemain-baru-bersinar-yang-mendapat-sorotan-di-mpl-indonesia-season-14",
                },
            ],
            subNews: [
                [
                    {
                        image: "https://mobilenation.id/frontend/uploads/2024/09/FNATIC-Onic-VS-EVOS-Glory.png",
                        title: "Hasil MPL ID S14: Welcome! Fnatic ONIC Pastikan Tiket ke Playoffs MPL ID S14",
                        date: "30 Sep 2024",
                        url: "https://mobilenation.id/hasil-mpl-id-s14-welcome-fnatic-onic-pastikan-tiket-ke-playoffs-mpl-id-s14/",
                    },
                    {
                        image: "https://mobilenation.id/frontend/uploads/2024/09/asdaa.jpg",
                        title: "Eldorado Dome Bandung Jadi Venue Playoffs MPL ID S14, Ini Harga dan Cara Beli Tiketnya!",
                        date: "20 Sep 2024",
                        url: "https://mobilenation.id/eldorado-dome-bandung-jadi-venue-playoffs-mpl-id-s14-ini-harga-dan-cara-beli-tiketnya/",
                    },
                ],
                [
                    {
                        image: "http://www.kotakgame.com/images/gambar/berita/38/23/103283/s.jpg",
                        title: "INGIN MENGULANG DEJAVU SEASON 13, EVOS GLORY KEMBALI ROMBAK ROSTER DI TENGAH MUSIM!",
                        date: "12 Sep 2024",
                        url: "http://m.kotakgame.com/detail.php?id=103283",
                    },
                    {
                        image: "https://d1tgyzt3mf06m9.cloudfront.net/v3-staging/2024/09/Build-Item-Ling-Versi-Bigerton-Super-Kenn-Auto-Bantai-.jpg",
                        title: "Build Item Ling Versi Bigetron Super Kenn, Auto Bantai!",
                        date: "2 Sep 2024",
                        url: "https://kincir.com/game/mobile-game/build-item-ling-versi-super-kenn/",
                    },
                ],
                [
                    {
                        image: "https://be.gamefinity.id/wp-content/uploads/2024/07/Roster-Alter-Ego-MPL-ID-S14.png",
                        title: "Alter Ego Perpanjang Kekalahan RBL di MPL ID S14",
                        date: "8 Sep 2024",
                        url: "https://www.gamefinity.id/berita-esports/alter-ego-perpanjang-kekalahan-rbl-di-mpl-id-s14",
                    },
                    {
                        image: "https://dailyspin.id/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/08/RBL-700x442.jpg.webp",
                        title: "Rebellion Terancam Tak Lolos Playoff MPL ID S14",
                        date: "27 Agt 2024",
                        url: "https://dailyspin.id/esports/mobile-legends/rebellion-terancam-tak-lolos-playoff-mpl-id-s14/",
                    },
                ],
            ],
        };
    },
    methods: {
        truncate(text, maxLength) {
            if (text.length > maxLength) {
                return text.substring(0, maxLength) + "...";
            }
            return text;
        },
    },
};
</script>