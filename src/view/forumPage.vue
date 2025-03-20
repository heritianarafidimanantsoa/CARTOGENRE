<script setup>
import { ref, onMounted } from "vue";
import MapComponent from "@/components/maps.vue";

const slides = ref([
    { id: 1, title: "2025-03-12", text: "Lorem ipsum dolor sit amet..." },
    { id: 2, title: "2025-03-12", text: "Autres informations ici..." },
    { id: 3, title: "2025-03-12", text: "Encore un autre texte..." },
    { id: 4, title: "2025-03-12", text: "Du contenu dynamique..." },
    { id: 5, title: "2025-03-12", text: "Une autre description..." },
    { id: 6, title: "2025-03-12", text: "Dernier slide de la liste..." },
    { id: 7, title: "2025-03-12", text: "Dernier slide de la liste..." },
]);

onMounted(() => {
    let items = document.querySelectorAll(".slider .item");
    let next = document.getElementById("next");
    let prev = document.getElementById("prev");

    let active = 3; // Initialisation de l'élément actif

    function loadShow() {
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = items.length;
        items[active].style.filter = "none";
        items[active].style.opacity = 1;

        for (let i = active + 1; i < items.length; i++) {
            stt++;
            items[i].style.transform = `translateX(${120 * stt}px) scale(${
                1 - 0.2 * stt
            }) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = items.length - stt;
            items[i].style.filter = "blur(5px)";
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for (let i = active - 1; i >= 0; i--) {
            stt++;
            items[i].style.transform = `translateX(${-120 * stt}px) scale(${
                1 - 0.2 * stt
            }) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = items.length - stt;
            items[i].style.filter = "blur(5px)";
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }

    loadShow();
    next.onclick = () => {
        active = active + 1 < items.length ? active + 1 : 0;
        loadShow();
    };
    prev.onclick = () => {
        active = active - 1 >= 0 ? active - 1 : items.length - 1;
        loadShow();
    };
});
</script>

<template>
    <div class="flex flex-row w-full h-[639px] z-0">
        <!-- Section Texte -->
        <div class="basis-1/2 flex flex-col justify-center px-10">
            <div
                class="author font-poppins font-bold tracking-[10px] animate-slide-content"
            >
                FAITES ENTENDRE VOTRE VOIX,
            </div>
            <div
                class="title font-poppins font-bold text-[4em] leading-[1.3em] animate-slide-content"
            >
                EXPRIMEZ-VOUS
            </div>
            <!-- Section MAPS -->
            <div class="des w-full h-[350px] z-0">
                <MapComponent />
            </div>
            <div
                class="grid grid-cols-2 gap-5 mt-5 animate-slide-content justify-center items-center"
            >
                <RouterLink
                    to="/formulairePage"
                    class="border-0 bg-secondary px-6 py-2 tracking-[3px] font-poppins font-medium text-white hover:bg-secondary/90 transition duration-200 flex justify-center items-center"
                    aria-label="Accéder à la page du formulaire"
                >
                    S'EXPRIMER
                </RouterLink>
            </div>
        </div>

        <!-- Section Slider -->
        <div class="basis-1/2 contents">
            <div class="slider">
                <div v-for="slide in slides" :key="slide.id" class="item">
                    <img
                        src="../assets/icon/quote-mark-svgrepo-com.svg"
                        class="absolute top-2 right-8 opacity-50 w-15 h-15"
                    />
                    <h1 class="opacity-50 text-[13px]">{{ slide.title }}</h1>
                    <p class="pt-10">{{ slide.text }}</p>
                </div>

                <button id="prev">
                    <svg
                        class="h-10 w-10 text-white group-hover:text-white"
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
                <button id="next">
                    <svg
                        class="h-10 w-10 text-white group-hover:text-white"
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
            </div>
        </div>
    </div>
</template>

<style>
.contents {
    background-image: linear-gradient(to top, #582c4d, #9ad35a);
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Poppins", sans-serif;
}
.slider {
    position: relative;
    width: 100%;
    height: 350px;
    overflow: hidden;
}
.item {
    position: absolute;
    width: 270px;
    height: 350px;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    transition: 0.5s;
    left: calc(50% - 120px);
    top: 0;
    z-index: 0;
}
#next,
#prev {
    position: absolute;
    top: 45%;
    color: #fff;
    background-color: transparent;
    border: none;
    font-size: xx-large;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    left: 50px;
    z-index: 50;
}
#next {
    left: unset;
    right: 50px;
}
</style>
