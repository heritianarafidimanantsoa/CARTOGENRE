<script setup>
// Importation du composant MapComponent
import MapComponent from "@/components/maps.vue";
</script>

<template>
    <div class="relative flex flex-row">
        <!-- La carte doit être en arrière-plan -->
        <div class="w-full h-[639px] z-0">
            <MapComponent />
        </div>

        <!-- La div doit être devant -->
        <div
            class="absolute right-20 top-13 h-[539px] w-1/3 bg-white/30 backdrop-blur-sm rounded-3xl p-9 shadow-lg text-secondary flex flex-col justify-between z-10"
        >
            <h1
                class="text-3xl text-center font-poppins font-bold tracking-[.20em] mb-4"
            >
                LES GENS A L’UF A TRAVERS UN CHANTIER ECOLE
            </h1>
            <p
                class="text-left text-lg font-poppins font-light overflow-y-auto max-h-[calc(90%-150px)] scrollbar-hidden"
            >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corporis quod aliquid culpa, doloremque ipsa quibusdam quisquam
                autem veritatis nesciunt. Eveniet dicta recusandae ad. Impedit
                totam molestias corrupti accusamus, deserunt dolores. Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Corporis
                quod aliquid culpa, doloremque ipsa quibusdam quisquam autem
                veritatis nesciunt. Eveniet dicta recusandae ad. Impedit totam
                molestias corrupti accusamus, deserunt dolores. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Corporis quod
                aliquid culpa, doloremque ipsa quibusdam quisquam autem
                veritatis nesciunt. Eveniet dicta recusandae ad. Impedit totam
                molestias corrupti accusamus, deserunt dolores.
            </p>
            <RouterLink
                to="/chantierPage"
                class="mt-auto w-fit mx-auto px-6 py-3 bg-secondary text-white font-semibold rounded-lg shadow-md hover:bg-secondary/80 transition"
            >
                CHANTIER ECOLE
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.scrollbar-hidden::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

.scrollbar-hidden::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
}

.scrollbar-hidden::-webkit-scrollbar-track {
    background-color: transparent;
}

.scrollbar-hidden {
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
}
</style>
