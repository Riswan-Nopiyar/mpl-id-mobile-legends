<template>
  <section class="title-ornaments mt-14 pb-16">
    <div class="container mx-auto md:px-20">
        <h4 class="text-center font-origin text-gray-600 font-bold uppercase">FAQ</h4>

      <!-- FAQ List -->
      <div class="scroll-wrapper faq scrollbar-inner overflow-y-scroll" style="max-height: 500px;">
  <div v-for="(faq, index) in faqs" :key="index" class="toggle mb-4">
    <div class="toggle-header flex items-center cursor-pointer" @click="toggleFAQ(index)">
      <div class="toggle-icon mr-3">
        <i :class="faq.open ? 'fas fa-minus-circle text-[#640000]' : 'fas fa-plus-circle text-[#640000]'"></i>
      </div>
      <div class="toggle-title font-medium text-gray-800">{{ faq.question }}</div>
    </div>
    <transition name="faq-toggle">
      <div v-if="faq.open" class="toggle-content m-4">
        <p v-html="faq.answer" class="text-gray-600"></p>
      </div>
    </transition>
    <div class="line border-t border-b-1 border-gray-300 mt-2"></div>
  </div>
</div>


  <!-- Code of Conduct Button -->
  <div class="mt-4">
  <a
    href="https://id-mpl.com/codeofconduct"
    class="relative inline-block pl-16 pr-10 py-3 text-white text-sm font-semibold rounded-md bg-gradient-to-b from-red-600 to-red-900 hover:from-red-500 hover:to-red-800 transition duration-200"
  >
    Code of Conduct
    <span
      class="code-of-conduct absolute inset-0 -top-0.5 -left-1.5 w-14 h-[calc(100%+4px)] rounded-l-md bg-white bg-center bg-no-repeat transition-all duration-200 ease-in-out"
      style="background-image: url('https://id-mpl.com/images/_v1_6/ornaments/coc.png'); background-size: 25px; clip-path: polygon(85% 0, 100% 50%, 85% 100%, 0 100%, 0 0);"
    ></span>
    <span class="absolute inset-0 m-[3px] border-2 border-[#E1C4C4] rounded-md pointer-events-none"></span>
  </a>
</div>





      <!-- Questions Section -->
      <div
        class="flex flex-col lg:flex-row items-start lg:items-center mt-2 border-t border-dashed border-gray-300 pt-4 text-sm"
      >
        <img
          src="/icons/question.png"
          alt="Question Icon"
          class="max-h-6 mb-4 lg:mb-0 lg:mr-2"
        />
        <div>
          <b>Punya pertanyaan?</b> Langsung tanya di <b>Instagram MPL Indonesia</b> kita!
          Link:
          <a href="https://www.instagram.com/mpl.id.official" target="_blank" class="text-red-600">
            https://www.instagram.com/mpl.id.official
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FAQ",
  data() {
    return {
      faqs: [
        {
          question: "Dimanakah lokasi MPL ID S14 akan dilaksanakan?",
          answer:
            '<strong>XO Hall</strong>, Jl. Tanjung Duren Barat III No.1, RT.9/RW.5, Tj. Duren Utara, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470. Link google maps: <a href="https://maps.app.goo.gl/qDzKj6SQZBQeSq3H9" class="text-red-500" target="_blank">https://maps.app.goo.gl/qDzKj6SQZBQeSq3H9</a>',
          open: false,
        },
        {
          question: "Bagaimana pembagian jadwal Regular Season dan Playoffs dalam pertandingan MPL ID S14?",
          answer:
            'Pembagian jadwal MPL ID akan sama seperti MPL sebelumnya yaitu terdapat fase Regular Season dan fase Playoffs, jadwal MPL dapat dilihat sebagai berikut: <a href="https://id-mpl.com/schedule" class="text-red-500" target="_blank">https://id-mpl.com/schedule</a>',
          open: false,
        },
        {
          question: "Siapakah roster dari team MPL ID S14 yang akan bertanding?",
          answer:
            'Roster MPL ID S14 dapat dilihat pada tautan sebagai berikut: <a href="https://id-mpl.com/teams" class="text-red-500" target="_blank">https://id-mpl.com/teams</a>',
          open: false,
        },
        {
          question: "Kapan MPL ID S14 akan berlangsung?",
          answer:
            'MPL ID S14 Reguler Season akan berlangsung pada <strong>9 Agustus - 6 Oktober 2024</strong>',
          open: false,
        },
        {
          question: "Bagaimana caranya membeli tiket nonton langsung MPL ID S14?",
          answer:
            'Tiket nonton langsung MPL ID S14 dapat didapatkan di link berikut: <a href="https://id-mpl.com/ticket" class="text-red-500" target="_blank">https://id-mpl.com/ticket</a>',
          open: false,
        },
        {
          question: "Mengapa kita harus menonton MPL ID S14 secara langsung?",
          answer:
            'Karena dengan menonton langsung, kita akan merasakan suasana dan pengalaman turnamen yang tidak terlupakan. Ayo beli tiket nonton langsung MPL ID S14 sebelum kehabisan link berikut: <a href="https://id-mpl.com/ticket" class="text-red-500" target="_blank">https://id-mpl.com/ticket</a>',
          open: false,
        },
      ],
    };
  },
  methods: {
    toggleFAQ(index) {
      this.faqs[index].open = !this.faqs[index].open;
    },
  },
};
</script>

<style scoped>
.scroll-wrapper {
  max-height: 400px;
  overflow-y: auto;
}

.toggle-icon {
  font-size: 1.2rem;
}

.toggle-title {
  cursor: pointer;
}

.line {
  height: 1px;
}

/* FAQ Toggle Transition */
.faq-toggle-enter-active, .faq-toggle-leave-active {
  transition: all 0.3s ease;
}
.faq-toggle-enter-from, .faq-toggle-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}
.faq-toggle-enter-to, .faq-toggle-leave-from {
  max-height: 1000px;
  opacity: 1;
  transform: translateY(0);
}
</style>