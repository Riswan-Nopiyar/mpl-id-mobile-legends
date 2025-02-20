<template>
    <section class="pb-16 mt-3">
        <div class="container mx-auto md:px-10">
            <div class="text-center font-extrabold text-gray-600 uppercase text-2xl">
                <h3>MPL Indonesia</h3>
                <h3><span class="text-red-800">Career</span> Program</h3>
            </div>
            <div class="text-center lg:mx-36 font-light text-sm mt-4 text-gray-600">
                <p>
                    The MPL ID Career Program offers a variety of career opportunities within the esports industry. This
                    platform provides valuable work experience in various roles related to esports events, showcasing
                    the numerous career paths available in this dynamic field. Join us and take the first step towards a
                    rewarding career in esports.
                </p>
            </div>

            <div class="my-24">
                <h4 class="text-center font-origin font-bold text-gray-600 uppercase">Partner</h4>
                <div class="flex flex-wrap justify-center lg:gap-y-10 mt-8">
                    <div v-for="partner in careerPartner" :key="partner.name"
                        class="relative flex flex-col items-center partner-card group w-full sm:w-full md:w-full lg:w-1/5">
                        <a :href="partner.link" target="_blank" class="w-full max-w-full lg:max-w-[200px]">
                            <img :src="partner.image" :alt="partner.name" loading="eager"
                                class="lg:h-24 lg:w-24 object-contain mx-auto transition-transform duration-200 group-hover:scale-110 hidden lg:block" />
                            <div
                                class="mt-5 relative bg-white rounded overflow-hidden lg:p-4 flex items-center justify-center w-full">
                                <img :src="partner.image" :alt="partner.name" loading="eager"
                                    class="h-16 w-32 px-8 object-contain mx-auto lg:hidden bg-[#d2c0c0]" />
                                <div
                                    class="absolute left-32 top-1/2 transform -translate-y-1/2 w-3 h-16 bg-gradient-to-r from-red-800 to-red-500 clip-triangle lg:hidden">
                                </div>
                                <div
                                    class="absolute left-1/2 top-0 transform -translate-x-1/2 w-full h-3 bg-gradient-to-t from-red-800 to-red-500 clip-triangle-down hidden lg:block">
                                </div>
                                <div class="text-center text-gray-700 font-bold text-lg w-full">{{ partner.name }}</div>
                            </div>
                        </a>
                        <div
                            class="absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 lg:hidden">
                            <img src="https://id-mpl.com/images/_v1_6/internships/orns/frame-partner.png"
                                class="w-[215px] max-w-[250px]" />
                        </div>

                        <div
                            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden lg:block">
                            <img src="https://id-mpl.com/images/_v1_6/internships/orns/frame-partner.png"
                                class="w-[215px] max-w-[250px]" />
                        </div>
                    </div>
                </div>
            </div>


        </div>
        <div class="text-center font-extrabold text-gray-600 uppercase text-xl mt-40 mb-20">
            <h3>More Opportunities Coming Soon</h3>
        </div>
        <SponsorsSection />
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SponsorsSection from "@/components/SponsorsSection.vue";
import careerPartnerData from "@/assets/json/careerPartner.json";

interface CareerPartner {
    name: string;
    image: string;
    link: string;
}

export default defineComponent({
    name: "TicketPage",
    components: {
        SponsorsSection
    },
    data() {
        return {
            careerPartner: careerPartnerData as unknown as CareerPartner[]
        };
    }
});
</script>

<style>
.partner-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.clip-triangle {
    clip-path: polygon(0 0, 100% 50%, 0 100%);
}

.clip-triangle-down {
    clip-path: polygon(50% 100%, 0 0, 100% 0);
}
</style>