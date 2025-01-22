<template>
  <section class="bg-s7 pb-16 -mt-4">
    <!-- Title Section -->
    <div class="container mx-auto md:px-64 text-center">
      <h4 class="text-center font-origin font-bold text-gray-600 uppercase">
        About
      </h4>
      <h2 class="text-gray-800 font-extrabold text-2xl uppercase mt-4">
        Mobile Legends: Bang Bang Professional League
      </h2>
      <p class="text-gray-600 text-xl font-medium mt-6 leading-relaxed">
        is the largest and most prestigious mobile games competition in Southeast Asia.
      </p>
      <p class="text-gray-600 text-xl font-medium mt-4 leading-relaxed">
        Driven by the determination to elevate the esports ecosystem, in this fourth season,
        <strong>MPL is making the leap by constructing the first franchised-model esports league in Southeast Asia.</strong>
      </p>
      <p class="text-gray-600 text-xl font-medium mt-4 leading-relaxed">
        Ensuring the sustainability of the overall community, this franchise model will implement
        the revenue sharing, salary cap, and other special benefits to the participating teams.
      </p>

      <!-- Contact Email -->
      <div class="flex justify-center items-center mt-8">
        <div class="flex items-center text-gray-600">
          <i class="fa fa-envelope me-1"></i>
          <a href="mailto:mplid@moonton.com" class="text-red-700 font-medium hover:text-black">mplid@moonton.com</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutPage",
});
</script>
