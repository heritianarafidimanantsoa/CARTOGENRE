<script setup>
import { ref, onMounted, watch, nextTick } from "vue";
import { useRouter } from "vue-router"; // Importer useRouter pour la navigation

// Importation des vidéos locales
import videoIntro from "@/assets/img/slide1.mp4";
import video2 from "@/assets/img/videoIntro.mp4";
import video3 from "@/assets/img/slide3.mp4";

// Déclaration du tableau des slides
const slides = ref([
    {
        id: 0,
        video: videoIntro,
        title: "Les Genres dans",
        subtitle: "THEMATIQUE",
        text: "VIE ASSOCIATIVE",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sint natus excepturi recusandae temporibus exercitationem maiores! Illum facilis quis nostrum laborum cupiditate.",
        buttons: [
            {
                text: "EN SAVOIR PLUS",
                class: "border-0 bg-secondary tracking-[3px] font-poppins font-medium",
            },
            {
                text: "REGARDER LA VIDEO",
                class: "bg-transparent text-white border border-primary font-poppins font-medium",
            },
        ],
    },
    {
        id: 1,
        video: video2,
        title: "Les Genres dans",
        subtitle: "THEMATIQUE",
        text: "MOBILITES",
        description:
            "Explorez l'univers fascinant des arts visuels et du théâtre. Découvrez les nouvelles tendances créatives.",
        buttons: [
            {
                text: "EN SAVOIR PLUS",
                class: "border-0 bg-secondary tracking-[3px] font-poppins font-medium",
            },
            {
                text: "REGARDER LA VIDEO",
                class: "bg-transparent text-white border border-primary font-poppins font-medium",
            },
        ],
    },
    {
        id: 2,
        video: video3,
        title: "Les Genres dans",
        subtitle: "THEMATIQUE",
        text: "TOILLETES",
        description:
            "Plongez dans l'univers de l'innovation technologique et de la transformation numérique.",
        buttons: [
            {
                text: "EN SAVOIR PLUS",
                class: "border-0 bg-secondary tracking-[3px] font-poppins font-medium",
            },
            {
                text: "REGARDER LA VIDEO",
                class: "bg-transparent text-white border border-primary font-poppins font-medium",
            },
        ],
    },
    // Ajouter d'autres slides ici
]);

const currentSlide = ref(0);
const progressBars = ref([0, 0, 0]);
const videoElements = ref([]);
const openModal = ref(false);
const modalVideo = ref("");

const isHovered = ref(false);

const router = useRouter(); // Créer une instance du router

// Méthode pour rediriger vers la bonne page
const navigateToPage = (index) => {
    switch (index) {
        case 0:
            router.push("/vieAssociative");
            break;
        case 1:
            router.push("/mobilite");
            break;
        case 2:
            router.push("/toillete");
            break;
        // Ajouter d'autres cas pour plus de slides
        default:
            break;
    }
};

const updateProgressBar = () => {
    const video = videoElements.value[currentSlide.value];
    if (video) {
        progressBars.value[currentSlide.value] =
            (video.currentTime / video.duration) * 100;
    }
};

const resetVideo = (index) => {
    if (videoElements.value[index]) {
        videoElements.value[index].currentTime = 0;
    }
};

const resetProgressBar = () => {
    progressBars.value = [0, 0, 0];
};

const nextSlide = () => {
    resetProgressBar();
    resetVideo(currentSlide.value);
    // Réinitialiser l'animation des éléments de slide
    resetSlideContentAnimation();
    currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const prevSlide = () => {
    resetProgressBar();
    resetVideo(currentSlide.value);
    // Réinitialiser l'animation des éléments de slide
    resetSlideContentAnimation();
    currentSlide.value =
        (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};

// Fonction pour réinitialiser l'animation des éléments du slide
const resetSlideContentAnimation = () => {
    const slideContentElements = document.querySelectorAll(
        ".animate-slide-content"
    );
    slideContentElements.forEach((el) => {
        // Retirer la classe pour réinitialiser l'animation
        el.classList.remove("animate-slide-content");
        // Forcer le reflow pour redémarrer l'animation
        void el.offsetWidth; // Cette ligne force un reflow du DOM
        // Réajouter la classe pour lancer l'animation
        el.classList.add("animate-slide-content");
    });
};

const handleVideoEnd = () => {
    nextSlide();
};

watch(currentSlide, () => {
    nextTick(() => {
        const video = videoElements.value[currentSlide.value];
        if (video) {
            video.play();
        }
    });
});

const openModalVideo = (index) => {
    modalVideo.value = slides.value[index].video;
    openModal.value = true;
};

const closeModal = () => {
    openModal.value = false;
};

onMounted(() => {
    nextTick(() => {
        videoElements.value = document.querySelectorAll("video");
        videoElements.value.forEach((video) => {
            video.addEventListener("timeupdate", updateProgressBar);
        });
    });
});
</script>

<template>
    <div
        class="relative w-full h-[639px] overflow-hidden"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
    >
        <!-- Carrousel -->
        <div
            class="relative flex transition-transform duration-500 ease-in-out w-full h-full"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
            <div
                v-for="(slide, index) in slides"
                :key="slide.id"
                class="w-full h-full flex-shrink-0 relative"
            >
                <!-- Vidéo en arrière-plan -->
                <video
                    ref="videoElements"
                    :src="slide.video"
                    class="absolute inset-0 w-full h-[695px] object-cover"
                    autoplay
                    muted
                    @ended="handleVideoEnd"
                ></video>

                <!-- Contenu -->
                <div
                    class="absolute top-[20%] w-[1140px] max-w-[80%] left-1/2 -translate-x-1/2 pr-[30%] box-border text-white drop-shadow-[0_5px_10px_#0007]"
                >
                    <div
                        class="author font-poppins font-bold tracking-[10px] animate-slide-content"
                    >
                        {{ slide.title }}
                    </div>
                    <div
                        class="title font-poppins font-bold text-[5em] leading-[1.3em] animate-slide-content"
                    >
                        {{ slide.subtitle }}
                    </div>
                    <div
                        class="topic font-poppins font-bold text-[5em] leading-[1.3em] text-primary animate-slide-content"
                    >
                        {{ slide.text }}
                    </div>
                    <div class="des mt-4 max-w-xl animate-slide-content">
                        {{ slide.description }}
                    </div>
                    <div
                        class="grid [grid-template-columns:repeat(2,190px)] [grid-template-rows:40px] gap-[5px] mt-[20px] animate-slide-content"
                    >
                        <!-- Boutons -->
                        <button
                            v-for="(button, buttonIndex) in slide.buttons"
                            :key="buttonIndex"
                            :class="button.class"
                            @click="
                                button.text === 'REGARDER LA VIDEO' &&
                                    openModalVideo(index);
                                button.text === 'EN SAVOIR PLUS' &&
                                    navigateToPage(index);
                            "
                        >
                            {{ button.text }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Transition des boutons de navigation -->
        <Transition name="fade">
            <button
                v-if="isHovered"
                @click="prevSlide"
                class="absolute group p-2 flex justify-center items-center border border-secondary w-12 h-12 transition-all duration-500 rounded-full top-2/4 -translate-y-8 left-5 hover:bg-secondary"
            >
                <!-- Icône flèche gauche SVG -->
                <svg
                    class="h-5 w-5 text-white group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                >
                    <path
                        d="M10.0002 11.9999L6 7.99971L10.0025 3.99719"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
        </Transition>

        <Transition name="fade">
            <button
                v-if="isHovered"
                @click="nextSlide"
                class="absolute group p-2 flex justify-center items-center border border-secondary w-12 h-12 transition-all duration-500 rounded-full top-2/4 -translate-y-8 right-5 hover:bg-secondary"
            >
                <!-- Icône flèche droite SVG -->
                <svg
                    class="h-5 w-5 text-white group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                >
                    <path
                        d="M5.99984 4.00012L10 8.00029L5.99748 12.0028"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
        </Transition>

        <!-- Barres de progression -->
        <div class="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
            <div
                v-for="(slide, index) in slides"
                :key="slide.id"
                class="w-1/3 h-1 bg-gray-700 rounded overflow-hidden"
            >
                <div
                    class="h-1 bg-green-400 rounded transition-all duration-500"
                    :style="{ width: `${progressBars[index]}%` }"
                ></div>
            </div>
        </div>

        <!-- Modal -->
        <Teleport to="body">
            <div
                v-if="openModal"
                class="modal fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
            >
                <!-- Bouton de fermeture positionné au-dessus de la vidéo -->

                <button
                    @click="closeModal"
                    class="z-50 close-btn absolute top-4 right-4 w-8 h-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-300 dark:focus:bg-neutral-600"
                >
                    <span class="sr-only">Close</span>
                    <svg
                        class="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                    </svg>
                </button>

                <!-- Vidéo dans la modal -->
                <video
                    :src="modalVideo"
                    class="video-modal w-full h-full object-cover"
                    autoplay
                    controls
                ></video>
            </div>
        </Teleport>
    </div>
</template>

<style>
/* Transition d'entrée et de sortie des boutons */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 50;
}

.video-modal {
    object-fit: cover; /* Garde le ratio de la vidéo et la couvre entièrement */
    width: 100%;
    height: 100%;
}
/* Animation d'entrée pour chaque élément du slide */
@keyframes showContent {
    to {
        opacity: 1;
        filter: blur(0);
        transform: translateY(0);
    }
}

/* Applique l'animation sur les éléments */
.animate-slide-content {
    transform: translateY(50px);
    filter: blur(20px);
    opacity: 0;
    animation: showContent 0.5s linear forwards;
}

/* Délais d'animation spécifiques pour chaque élément */
.title {
    animation-delay: 1.2s;
}
.topic {
    animation-delay: 1.4s;
}
.des {
    animation-delay: 1.6s;
}
.grid {
    animation-delay: 1.8s;
}
</style>
