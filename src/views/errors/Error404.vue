<template>
    <div class="container mx-auto pt-4 px-20">
  <h4 class="font-origin text-center">
    ERROR 404
  </h4>

  <div class="flex flex-col items-center">
    <!-- Title -->
    <div class="text-center mt-9">
      <div class="text-muted text-gray-500 text-4xl">
        Page not found
      </div>
    </div>

    <!-- Spacer -->

    <!-- Image -->
    <div class="lg:w-1/2 lg:mx-auto mt-6 text-center">
      <img
        src="/errors/404-400.png"
        alt="404"
        class="w-72 max-w-md mx-auto"
      />
    </div>
  </div>

  <!-- Spacer -->
  <div class="pb-4"></div>
</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Error404",
});
</script>