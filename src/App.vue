<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import Navbar from "@/components/navbar.vue";
import { RouterView } from "vue-router";
// Récupérer la route active
const route = useRoute();

// Variable pour contrôler l'affichage de la navbar
const showNavbar = ref(route.meta.showNavbar);

// Surveiller les changements de route
watch(
    () => route.path,
    () => {
        showNavbar.value = route.meta.showNavbar; // Mettre à jour la valeur de showNavbar
    }
);

// Surveiller les changements de route
</script>

<template>
    <div>
        <!-- Afficher la navbar seulement si showNavbar est true -->
        <Navbar v-if="showNavbar" />

        <!-- Afficher le composant de la route active -->
        <RouterView />
    </div>
</template>

<style scoped>
/* Style global pour App.vue */
</style>
