<template>
    <div class="flex gap-6 h-[639px] p-6 bg-gray-100">
        <!-- Section du carrousel -->
        <div
            v-show="activeTab === 'carte'"
            class="w-1/2 shadow-md rounded-lg overflow-hidden relative"
        >
            <div class="relative w-full h-full">
                <img
                    :src="images[currentIndex].src"
                    class="block w-full h-full object-cover"
                    :alt="images[currentIndex].title"
                />
            </div>
            <!-- Contrôles du carrousel -->
            <button
                class="absolute top-1/2 left-2 transform -translate-y-1/2 px-4 py-2 bg-gray-700 text-white bg-opacity-50 hover:bg-opacity-75 rounded-full transition"
                @click="prevSlide('carte')"
            >
                ‹
            </button>
            <button
                class="absolute top-1/2 right-2 px-4 py-2 bg-gray-700 text-white bg-opacity-50 hover:bg-opacity-75 rounded-full transition"
                @click="nextSlide('carte')"
            >
                ›
            </button>
        </div>

        <div
            v-show="activeTab === 'resultats'"
            class="w-1/2 shadow-md rounded-lg overflow-hidden relative"
        >
            <div class="relative w-full h-full">
                <img
                    :src="resultImages[currentResultIndex].src"
                    class="block w-full h-full object-cover"
                    :alt="resultImages[currentResultIndex].title"
                />
            </div>
            <!-- Contrôles du carrousel -->
            <button
                class="absolute top-1/2 left-2 px-4 py-2 bg-gray-700 text-white bg-opacity-50 hover:bg-opacity-75 rounded-full transition"
                @click="prevSlide('resultats')"
            >
                ‹
            </button>
            <button
                class="absolute top-1/2 right-2 px-4 py-2 bg-gray-700 text-white bg-opacity-50 hover:bg-opacity-75 rounded-full transition"
                @click="nextSlide('resultats')"
            >
                ›
            </button>
        </div>

        <!-- Texte associé à chaque slide -->
        <div
            class="w-1/2 bg-gray-800 shadow-md rounded-lg text-white flex flex-col"
        >
            <div class="p-6 flex-grow">
                <div v-if="activeTab === 'carte'">
                    <h1
                        class="text-3xl text-center font-poppins font-bold tracking-[.20em] mb-4"
                    >
                        {{ images[currentIndex].title }}
                    </h1>
                    <p class="text-lg font-light overflow-auto max-h-[350px]">
                        {{ images[currentIndex].description }}
                    </p>
                </div>
                <div v-if="activeTab === 'resultats'">
                    <h1
                        class="text-3xl text-center font-poppins font-bold tracking-[.20em] mb-4"
                    >
                        {{ resultImages[currentResultIndex].title }}
                    </h1>
                    <p class="text-lg font-light overflow-auto max-h-[350px]">
                        {{ resultImages[currentResultIndex].description }}
                    </p>
                </div>
            </div>

            <!-- Boutons pour changer de section -->
            <div class="grid grid-cols-2 gap-0.5 mt-auto">
                <button
                    @click="activeTab = 'carte'"
                    :class="{
                        'bg-transparent text-white': activeTab === 'carte',
                        'bg-gray-600 text-white hover:bg-gray-500':
                            activeTab !== 'carte',
                    }"
                    class="flex-1 px-4 py-3 font-semibold rounded-bl-lg transition"
                >
                    <i class="fas fa-user-graduate mr-2"></i> CARTE
                </button>
                <button
                    @click="activeTab = 'resultats'"
                    :class="{
                        'bg-transparent text-white': activeTab === 'resultats',
                        'bg-gray-600 text-white hover:bg-gray-500':
                            activeTab !== 'resultats',
                    }"
                    class="flex-1 px-4 py-3 font-semibold rounded-br-lg transition"
                >
                    <i class="fas fa-chart-bar mr-2"></i> RÉSULTATS STATISTIQUES
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

// Importation des images
import videoIntro from "@/assets/img/image1.jpg";
import videoIntro2 from "@/assets/img/image2.jpg";
import videoIntro3 from "@/assets/img/image3.jpg";
import resultImage1 from "@/assets/img/1.jpg";
import resultImage2 from "@/assets/img/2.jpg";
import resultImage3 from "@/assets/img/3.jpg";

const activeTab = ref("carte");

// Tableaux des images avec titres et descriptions
const images = ref([
    {
        src: videoIntro,
        title: "CARTE VIE ASSOCIATIVE",
        description: "Description 1 sur la carte vie associative.",
    },
    {
        src: videoIntro2,
        title: "ACTIVITÉS ASSOCIATIVES",
        description: "Description 2 des activités.",
    },
    {
        src: videoIntro3,
        title: "ÉVÉNEMENTS",
        description: "Description 3 sur les événements.",
    },
]);

const resultImages = ref([
    {
        src: resultImage1,
        title: "RESULTATS STATISTIQUES",
        description: "Statistiques 1 des résultats.",
    },
    {
        src: resultImage2,
        title: "ANALYSES COMPARATIVES",
        description: "Statistiques 2 sur les analyses comparatives.",
    },
    {
        src: resultImage3,
        title: "DÉVELOPPEMENTS FUTURS",
        description: "Statistiques 3 sur les futurs développements.",
    },
]);

const currentIndex = ref(0);
const currentResultIndex = ref(0);

// Fonction pour naviguer dans le carrousel
const nextSlide = (type) => {
    if (type === "carte") {
        currentIndex.value = (currentIndex.value + 1) % images.value.length;
    } else if (type === "resultats") {
        currentResultIndex.value =
            (currentResultIndex.value + 1) % resultImages.value.length;
    }
};

const prevSlide = (type) => {
    if (type === "carte") {
        currentIndex.value =
            (currentIndex.value - 1 + images.value.length) %
            images.value.length;
    } else if (type === "resultats") {
        currentResultIndex.value =
            (currentResultIndex.value - 1 + resultImages.value.length) %
            resultImages.value.length;
    }
};
</script>

<style scoped></style>
