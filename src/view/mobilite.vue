<template>
    <div class="flex gap-6 h-[639px] p-6 bg-gray-100">
        <!-- Contenu dynamique en fonction de l'onglet sélectionné -->
        <!-- Section Carte -->
        <div
            v-show="activeTab === 'carte'"
            class="w-1/2 shadow-md rounded-lg overflow-hidden relative"
        >
            <div class="relative w-full h-full overflow-hidden">
                <!-- Hauteur fixe ou dynamique -->
                <div
                    v-for="(image, index) in images"
                    :key="index"
                    :class="[
                        'carousel-item inset-0 w-full h-full transition-all duration-500 ease-in-out',
                        {
                            block: currentIndex === index,
                            hidden: currentIndex !== index,
                        },
                    ]"
                >
                    <img
                        :src="image"
                        class="block w-full h-full object-cover"
                        alt="Carrousel Image"
                    />
                </div>
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

        <!-- Section Résultats -->
        <div
            v-show="activeTab === 'resultats'"
            class="w-1/2 shadow-md rounded-lg overflow-hidden relative"
        >
            <div class="relative w-full h-full">
                <div
                    v-for="(image, index) in resultImages"
                    :key="index"
                    :class="[
                        'carousel-item inset-0 w-full h-full transition-all duration-500 ease-in-out',
                        {
                            block: currentResultIndex === index,
                            hidden: currentResultIndex !== index,
                        },
                    ]"
                >
                    <img
                        :src="image"
                        class="block w-full h-full object-cover"
                        alt="Image du carrousel statistiques"
                    />
                </div>
            </div>
            <!-- Contrôles du carrousel -->
            <button
                class="absolute top-1/2 left-2 px-4 py-2 bg-gray-700 text-white bg-opacity-50 hover:bg-opacity-75 rounded-full transition z-50"
                @click="prevSlide('resultats')"
            >
                ‹
            </button>
            <button
                class="absolute top-1/2 right-2 px-4 py-2 bg-gray-700 text-white bg-opacity-50 hover:bg-opacity-75 rounded-full transition z-50"
                @click="nextSlide('resultats')"
            >
                ›
            </button>
        </div>

        <!-- Texte associé à chaque onglet -->
        <div
            class="w-1/2 bg-gray-800 shadow-md rounded-lg text-white flex flex-col"
        >
            <div class="p-6 flex-grow">
                <div v-show="activeTab === 'carte'">
                    <h1
                        class="text-3xl text-center font-poppins font-bold tracking-[.20em] mb-4"
                    >
                        CARTE MOBILITE
                    </h1>
                    <p class="text-lg font-light overflow-auto max-h-[350px]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Corporis quod aliquid culpa, doloremque ipsa elit.
                    </p>
                </div>
                <div v-show="activeTab === 'resultats'">
                    <h1
                        class="text-3xl text-center font-poppins font-bold tracking-[.20em] mb-4"
                    >
                        RESULTATS STATISTIQUES
                    </h1>
                    <p class="text-lg font-light overflow-auto max-h-[350px]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Corporis quod aliquid culpa, doloremque ipsa elit.
                    </p>
                </div>
            </div>

            <!-- Boutons pour changer l'affichage, placés en bas -->
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

const images = [videoIntro, videoIntro2, videoIntro3];
const resultImages = [resultImage1, resultImage2, resultImage3];

const currentIndex = ref(0);
const currentResultIndex = ref(0);

// Fonction pour passer à l'image suivante dans le carrousel
const nextSlide = (type) => {
    if (type === "carte") {
        currentIndex.value = (currentIndex.value + 1) % images.length;
        console.log("currentIndex:", currentIndex.value); // Affiche l'indice actuel
    } else if (type === "resultats") {
        currentResultIndex.value =
            (currentResultIndex.value + 1) % resultImages.length;
    }
};

// Fonction pour passer à l'image précédente dans le carrousel
const prevSlide = (type) => {
    if (type === "carte") {
        currentIndex.value =
            (currentIndex.value - 1 + images.length) % images.length;
    } else if (type === "resultats") {
        currentResultIndex.value =
            (currentResultIndex.value - 1 + resultImages.length) %
            resultImages.length;
    }
};
</script>

<style scoped></style>
