<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Etat pour gérer l'ouverture et la fermeture du menu
const isMenuOpen = ref(false);

// Fonction pour basculer l'état du menu
const toggleMenu = (event) => {
    isMenuOpen.value = !isMenuOpen.value;
    event.stopPropagation(); // Empêche la propagation du clic au document
};

// Fonction pour fermer le menu
const closeMenu = () => {
    isMenuOpen.value = false;
};

// Ajouter un écouteur d'événement pour fermer le menu quand on clique en dehors
const handleClickOutside = (event) => {
    const menu = document.getElementById("mobile-menu");
    const button = document.getElementById("menu-toggle-button");
    if (
        menu &&
        !menu.contains(event.target) &&
        !button.contains(event.target)
    ) {
        closeMenu();
    }
};

// Montée du composant : ajouter l'écouteur d'événement pour les clics en dehors du menu
onMounted(() => {
    document.addEventListener("click", handleClickOutside);
});

// Nettoyer l'écouteur d'événement lors du démontage du composant
onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
    <nav
        class="top-0 border-solid border-gray-200 w-full border-b py-3 bg-primary z-50"
    >
        <div class="container mx-auto">
            <div class="w-full flex flex-col lg:flex-row relative">
                <div class="flex justify-between lg:flex-row">
                    <RouterLink to="/home" class="flex items-center">
                        <span
                            class="text-2xl font-poppins font-semibold text-gray-50"
                            >CECPG</span
                        >
                    </RouterLink>
                    <!-- Bouton pour ouvrir et fermer le menu mobile -->
                    <button
                        @click="toggleMenu"
                        type="button"
                        id="menu-toggle-button"
                        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default-example"
                        :aria-expanded="isMenuOpen.toString()"
                    >
                        <span class="sr-only">Open main menu</span>
                        <!-- Icône menu (hamburger) -->
                        <svg
                            v-if="!isMenuOpen"
                            class="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        <!-- Icône croix (X) -->
                        <svg
                            v-if="isMenuOpen"
                            class="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M6 6L14 14M6 14L14 6"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    class="hidden w-full lg:flex lg:pl-11"
                    :class="{ block: isMenuOpen, hidden: !isMenuOpen }"
                    id="navbar-default-example"
                >
                    <ul
                        class="flex items-center flex-col mt-4 lg:mt-0 lg:ml-auto lg:flex-row gap-4"
                    >
                        <li>
                            <RouterLink
                                to="/home"
                                class="relative flex items-center justify-between text-gray-50 text-sm lg:text-base font-poppins font-medium hover:text-secondary transition-all duration-300 group mb-2 lg:mr-6 md:mb-0 md:mr-3"
                                exact-active-class="text-secondary"
                            >
                                <span>Accueil</span>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink
                                to="/chantierPage"
                                class="relative flex items-center justify-between text-gray-50 text-sm lg:text-base font-poppins font-medium hover:text-secondary transition-all duration-300 group mb-2 lg:mr-6 md:mb-0 md:mr-3"
                                active-class="text-secondary"
                            >
                                <span>Chantier Ecole</span>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink
                                to="/statPage"
                                class="relative flex items-center justify-between text-gray-50 text-sm lg:text-base font-poppins font-medium hover:text-secondary transition-all duration-300 group mb-2 lg:mr-6 md:mb-0 md:mr-3"
                                active-class="text-secondary"
                            >
                                <span>Statistique</span>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink
                                to="/forumPage"
                                class="relative flex items-center justify-between text-gray-50 text-sm lg:text-base font-poppins font-medium hover:text-secondary transition-all duration-300 group mb-2 lg:mr-6 md:mb-0 md:mr-3"
                                active-class="text-secondary"
                            >
                                <span>Forum</span>
                            </RouterLink>
                        </li>
                    </ul>
                </div>

                <!-- Menu Mobile -->
                <div
                    :class="{ block: isMenuOpen, hidden: !isMenuOpen }"
                    class="absolute top-0 left-0 right-0 bg-primary w-full z-50 lg:hidden"
                    id="mobile-menu"
                >
                    <ul class="flex flex-col gap-4 p-4">
                        <li>
                            <RouterLink
                                to="/home"
                                class="text-gray-50 text-sm lg:text-base font-poppins font-medium hover:text-secondary transition-all duration-300"
                                @click="closeMenu"
                            >
                                Accueil
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink
                                to="/chantierPage"
                                class="text-gray-50 text-sm lg:text-base font-poppins font-medium hover:text-secondary transition-all duration-300"
                                @click="closeMenu"
                            >
                                Chantier Ecole
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink
                                to="/statPage"
                                class="text-gray-50 text-sm lg:text-base font-poppins font-medium hover:text-secondary transition-all duration-300"
                                @click="closeMenu"
                            >
                                Statistique
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink
                                to="/forumPage"
                                class="text-gray-50 text-sm lg:text-base font-poppins font-medium hover:text-secondary transition-all duration-300"
                                @click="closeMenu"
                            >
                                Forum
                            </RouterLink>
                        </li>
                        <!-- Bouton Quitter mobile, seulement si le menu est ouvert -->
                        <li v-if="isMenuOpen">
                            <button
                                @click="closeMenu"
                                class="text-gray-50 text-sm lg:text-base font-poppins font-medium hover:text-secondary transition-all duration-300"
                            >
                                Quitter
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>
