<template>
    <section class="title-ornaments pb-16 -mt-4">
        <div class="container mx-auto md:px-36">
            <h4 class="text-center font-origin font-bold text-gray-600 uppercase">
                Schedule
            </h4>
            <!-- Title -->
            <div class="text-center mt-36 mb-28">
                <div class="text-muted text-gray-500 text-4xl">
                    There is no schedule now
                </div>
            </div>
        </div>
        <SponsorsSection />
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SponsorsSection from "@/components/SponsorsSection.vue";

export default defineComponent({
    name: "SchedulePage",
    components: {
        SponsorsSection
    }
});
</script>