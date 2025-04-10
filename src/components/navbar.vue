<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const isHomePage = route.path === "/";
</script>

<template>
    <nav
        :class="[
            'top-0 w-full z-50 py-6 px-6 lg:px-20 transition-all duration-500 flex items-center justify-between',
            isHomePage
                ? 'absolute bg-transparent'
                : 'relative bg-primary border-b border-gray-200',
        ]"
    >
        <!-- LOGO -->
        <RouterLink to="/" class="flex items-center space-x-2">
            <img
                src="../assets/img/ICOCG.png"
                alt="Logo Cartogenre"
                class="w-8 h-8 md:w-10 md:h-10"
            />
            <span
                :class="[
                    'text-2xl font-poppins font-semibold tracking-widest',
                    isHomePage ? 'text-white' : 'text-gray-50',
                ]"
            >
                CARTOGENRE
            </span>
        </RouterLink>

        <!-- MENU -->
        <ul class="hidden lg:flex space-x-10 font-poppins text-sm font-medium">
            <li>
                <RouterLink
                    to="/chantierPage"
                    class="relative flex items-center justify-between group text-sm lg:text-base font-poppins font-medium mb-2 lg:mr-6 md:mb-0 md:mr-3 transition-all duration-300"
                    :class="
                        isHomePage
                            ? 'text-white hover:text-primary'
                            : 'text-gray-50 hover:text-secondary'
                    "
                >
                    <span>Le genre en pratiques</span>
                    <span
                        :class="[
                            'absolute -bottom-1 left-1/2 w-0 h-0.5 transition-all duration-300',
                            isHomePage ? 'bg-primary' : 'bg-secondary',
                            'group-hover:w-1/2',
                        ]"
                    ></span>
                    <span
                        :class="[
                            'absolute -bottom-1 right-1/2 w-0 h-0.5 transition-all duration-300',
                            isHomePage ? 'bg-primary' : 'bg-secondary',
                            'group-hover:w-1/2',
                        ]"
                    ></span>
                </RouterLink>
            </li>

            <li>
                <RouterLink
                    to="/statPage"
                    class="relative flex items-center justify-between group text-sm lg:text-base font-poppins font-medium mb-2 lg:mr-6 md:mb-0 md:mr-3 transition-all duration-300"
                    :class="
                        isHomePage
                            ? 'text-white hover:text-primary'
                            : 'text-gray-50 hover:text-secondary'
                    "
                >
                    <span>Statistiques</span>
                    <span
                        :class="[
                            'absolute -bottom-1 left-1/2 w-0 h-0.5 transition-all duration-300',
                            isHomePage ? 'bg-primary' : 'bg-secondary',
                            'group-hover:w-1/2',
                        ]"
                    ></span>
                    <span
                        :class="[
                            'absolute -bottom-1 right-1/2 w-0 h-0.5 transition-all duration-300',
                            isHomePage ? 'bg-primary' : 'bg-secondary',
                            'group-hover:w-1/2',
                        ]"
                    ></span>
                </RouterLink>
            </li>

            <li>
                <RouterLink
                    to="/forumPage"
                    class="relative flex items-center justify-between group text-sm lg:text-base font-poppins font-medium mb-2 lg:mr-0 md:mb-0 md:mr-3 transition-all duration-300"
                    :class="
                        isHomePage
                            ? 'text-white hover:text-primary'
                            : 'text-gray-50 hover:text-secondary'
                    "
                >
                    <span>Témoignage</span>
                    <span
                        :class="[
                            'absolute -bottom-1 left-1/2 w-0 h-0.5 transition-all duration-300',
                            isHomePage ? 'bg-primary' : 'bg-secondary',
                            'group-hover:w-1/2',
                        ]"
                    ></span>
                    <span
                        :class="[
                            'absolute -bottom-1 right-1/2 w-0 h-0.5 transition-all duration-300',
                            isHomePage ? 'bg-primary' : 'bg-secondary',
                            'group-hover:w-1/2',
                        ]"
                    ></span>
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>
