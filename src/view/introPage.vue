Mec Daddi Barjeenio
<template>
  <div class="relative w-full h-screen flex bg-black">
    <!-- Vidéo principale -->
    <video
      v-if="!showIntroContent && videoStarted"
      ref="videoElement"
      class="absolute top-0 left-0 w-full h-full object-cover"
      @ended="handleVideoEnd"
      autoplay
      muted
      @play="isPlaying = true"
      @pause="isPlaying = false"
    >
      <source src="@/assets/img/videoIntro.mp4" type="video/mp4" />
    </video>

    <!-- Contenu d'introduction -->
    <div v-if="showIntroContent" class="relative w-full h-full">
      <!-- Grille d'images -->
      <div class="grid grid-cols-4 h-full w-full gap-0.3">
        <!-- Vidéo 1 -->
        <div class="relative w-full h-full">
          <video
            class="absolute top-0 left-0 w-full h-full object-cover"
            autoplay
            muted
            loop
          >
            <source src="@/assets/img/viedeoacceuille.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>

        <!-- Vidéo 2 -->
        <div class="relative w-full h-full">
          <video
            class="absolute top-0 left-0 w-full h-full object-cover"
            autoplay
            muted
            loop
          >
            <source src="@/assets/img/slide1.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>

        <!-- Vidéo 3 -->
        <div class="relative w-full h-full">
          <video
            class="absolute top-0 left-0 w-full h-full object-cover"
            autoplay
            muted
            loop
          >
            <source src="@/assets/img/slide2.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>

        <!-- Vidéo 4 -->
        <div class="relative w-full h-full">
          <video
            class="absolute top-0 left-0 w-full h-full object-cover"
            autoplay
            muted
            loop
          >
            <source src="@/assets/img/slide3.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
      </div>
      <div class="absolute inset-0 bg-black opacity-60 z-0"></div>
      <!-- Contenu superposé -->
      <div
        class="absolute inset-0 flex flex-col items-center justify-center space-y-6 z-10 w-full h-full max-w-[1200px] mx-auto"
      >
        <img
          src="../assets/img/LOGO CARTOGENRE.png"
          alt="Logo Cartogenre"
          class="w-24 h-auto mb-2"
        />
        <!-- Titre -->
        <h1
          class="font-poppins font-bold text-[2.5em] md:text-[5em] leading-tight text-primary mb-4"
        >
          CARTOGENRE
        </h1>

        <!-- Texte -->
        <p
          class="max-w-2xl text-sm md:text-base leading-relaxed font-light opacity-80 text-white items-center text-center"
        >
          Un site dédiée à la représentation des expériences vécues des
          inégalités entre FEMMES ET HOMMES, dans les pratiques, les
          traitements, la façon de penser et la manière d’être perçu par les
          autres sur le campus universitaire d’Andrainjato à Fianarantsoa
          Madagascar.
        </p>

        <!-- Bouton pour démarrer la vidéo -->
        <button
          v-if="!isPlaying && !videoStarted"
          class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
          @click="startVideo"
        >
          <!-- Texte du bouton -->
          <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center space-x-2"
          >
            <!-- Icône SVG -->
            <svg viewBox="0 0 24 24" fill="currentColor" class="size-6 mr-2.5">
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
    </div>

    <!-- Bouton pour ignorer la vidéo -->
    <button
      v-if="isPlaying"
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
const showIntroContent = ref(true); // Affiche le contenu d'introduction par défaut
const videoElement = ref(null);
const isPlaying = ref(false); // Gère l'état de lecture de la vidéo
const fadeOut = ref(false);
const videoStarted = ref(false); // Gère si la vidéo a démarré

// Fonction pour démarrer la vidéo
const startVideo = () => {
  videoStarted.value = true; // La vidéo commence
  showIntroContent.value = false; // Masque le contenu d'introduction
  if (videoElement.value) {
    videoElement.value.play(); // Joue la vidéo principale
    isPlaying.value = true; // Détecte que la vidéo a commencé
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
  transition: opacity 1s ease; /* Transition plus rapide pour un effet plus subtil */
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Améliorer le bouton "Démarrer la vidéo" */
button {
  transition: all 0.3s ease-in-out;
}

button:hover {
  transform: scale(1.05); /* Légère animation d'agrandissement au survol */
}
</style>
