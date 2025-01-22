<template>
    <section class="title-ornaments pb-16 -mt-4">
        <div class="container mx-auto md:px-36">
            <h4 class="text-center font-origin font-bold text-gray-600 uppercase">
                Match Schedule
            </h4>
            <!-- Title -->
            <div class="text-center mt-36 mb-28">
                <div class="text-muted text-white text-6xl bg-[#640000] p-3 rounded-xl w-1/2  m-auto">
                    Ticket Sold Out
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
    name: "TicketPage",
    components: {
        SponsorsSection
    }
});
</script>