<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import Navbar from "@/components/navbar.vue";
import { RouterView } from "vue-router";

const route = useRoute();

// Variable pour contrôler l'affichage de la navbar
const showNavbar = ref(route.meta.showNavbar);

// Surveiller les changements de route
watch(
    () => route.path,
    () => {
        showNavbar.value = route.meta.showNavbar;
    }
);
</script>

<template>
    <div>
        <Navbar v-if="showNavbar" />

        <RouterView />
    </div>
</template>

<style scoped></style>
