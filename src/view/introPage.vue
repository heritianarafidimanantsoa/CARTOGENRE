<template>
    <div class="relative w-full h-screen flex bg-black">
        <!-- Vidéo -->
        <video
            ref="videoElement"
            class="absolute top-0 left-0 w-full h-full object-cover"
            @ended="handleVideoEnd"
            :autoplay="false"
        >
            <source src="@/assets/img/videoIntro.mp4" type="video/mp4" />
        </video>

        <div
            class="h-screen flex flex-col justify-center items-center space-y-6 w-full px-4"
        >
            <!-- Image -->
            <img
                v-if="!isPlaying"
                src="@/assets/img/logo-Madatlas.png"
                alt="Image"
                class="w-40 sm:w-48 md:w-56 h-auto z-10"
            />

            <!-- Texte -->
            <p
                v-if="!isPlaying"
                class="text-white text-base sm:text-lg font-light z-10 text-center max-w-xs sm:max-w-sm md:max-w-md"
            >
                Pour une expérience optimale, connectez vos écouteurs <br />
                Mettez vos lunettes de genre
            </p>

            <!-- Bouton pour lancer la vidéo -->
            <button
                v-if="!isPlaying"
                class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                @click="playVideo"
            >
                <!-- Texte du bouton -->
                <span
                    class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center space-x-2"
                >
                    <!-- Icône SVG -->
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="size-6 mr-2.5"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                            clip-rule="evenodd"
                        />
                    </svg>

                    Découvrir
                </span>

                <!-- Icône et animation de clignotement en position indépendante -->
                <span
                    class="absolute -top-2 -right-2 w-6 sm:w-7 h-6 sm:h-7 flex items-center justify-center z-20"
                >
                    <!-- Animation de clignotement -->
                    <span
                        class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75"
                    ></span>
                    <!-- Cercle de couleur pour l'icône -->
                    <span
                        class="relative inline-flex size-3.5 rounded-full bg-green-500"
                    ></span>
                </span>
            </button>
        </div>

        <!-- Bouton pour ignorer la vidéo -->
        <button
            class="absolute bottom-5 right-5 p-2 bg-transparent text-white rounded-lg shadow-l transition z-10"
            @click="skipVideo"
        >
            <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6 h-6 stroke-white"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7-7 7M5 5l7 7-7 7"
                />
            </svg>
        </button>

        <!-- Effet de fondu -->
        <transition name="fade">
            <div
                v-if="fadeOut"
                class="absolute top-0 left-0 w-full h-full bg-white opacity-100"
            ></div>
        </transition>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const fadeOut = ref(false);
const isPlaying = ref(false);
const videoElement = ref(null);

// Fonction pour jouer la vidéo
const playVideo = () => {
    if (videoElement.value) {
        videoElement.value.play();
        isPlaying.value = true;
    }
};

// Fonction pour ignorer la vidéo
const skipVideo = () => {
    fadeOut.value = true;
    setTimeout(() => {
        router.push("/home");
    }, 300);
};

// Détecter la fin de la vidéo
const handleVideoEnd = () => {
    skipVideo();
};
</script>

<style scoped>
/* Effet de fondu */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 10s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
