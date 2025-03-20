<script setup>
import MapComponent from "@/components/maps.vue";
</script>

<template>
    <div class="relative flex flex-row">
        <div class="w-full h-[639px] z-0">
            <MapComponent />
        </div>

        <div
            class="absolute right-20 top-13 h-[539px] w-1/3 bg-white/30 backdrop-blur-sm rounded-3xl p-9 shadow-lg text-secondary flex flex-col justify-between z-10"
        >
            <h1
                class="text-3xl text-center font-poppins font-bold tracking-[.20em] mb-4"
            >
                LES GENRES À L’UF A TRAVERS UN CHANTIER ÉCOLE
            </h1>
            <div
                class="text-left text-lg font-poppins font-light overflow-y-auto max-h-[calc(90%-150px)] scrollbar-hidden"
            >
                Bienvenue sur la plateforme “cartogenre” dédiée aux travaux et
                enquêtes lors du Chantier École 2023 réalisé par des étudiants à
                l’Université de Fianarantsoa, Madagascar. <br /><br />
                Ce site centralise les recherches menées sur les dynamiques
                genrées à l’Université de Fianarantsoa, axées sur les inégalités
                et les enjeux d’inclusion à travers huit thématiques : mobilité,
                vie associative, toilettes, restauration, santé, connectivité,
                sport et habitation.

                <div class="py-4">
                    <h1
                        class="text-1xl text-center font-poppins font-bold tracking-[.20em] mb-4"
                    >
                        Les points d’intérêt
                    </h1>
                    <div
                        class="grid grid-cols-3 gap-2 text-center font-semibold text-white mt-4"
                    >
                        <div
                            class="bg-secondary p-2 rounded-lg shadow-md flex items-center justify-center text-sm"
                        >
                            INÉGALITÉ DE GENRE
                        </div>
                        <div
                            class="bg-secondary p-2 rounded-lg shadow-md flex items-center justify-center text-sm"
                        >
                            INCLUSION
                        </div>
                        <div
                            class="bg-secondary p-2 rounded-lg shadow-md flex items-center justify-center text-sm"
                        >
                            ÉQUITÉ
                        </div>
                    </div>
                </div>
                <div class="py-4">
                    <h1
                        class="text-1xl text-center font-poppins font-bold tracking-[.20em] mb-4"
                    >
                        Le sujet de genre et la population Malgache
                    </h1>
                    La question du genre est émergée depuis longtemps dans les
                    discussions à Madagascar. La culture a ancré des rôles
                    distincts, assignant aux femmes le foyer et aux hommes les
                    responsabilités de décision et de direction. Pourtant, de
                    nombreuses femmes ont dépassé ce schéma et occupent des
                    postes clés dans la société, mais les effets de cette
                    culture restent souvent invisibles sans une analyse
                    attentive.
                </div>
                <div class="py-4">
                    <h1
                        class="text-1xl text-center font-poppins font-bold tracking-[.20em] mb-4"
                    >
                        L’Université de Fianarantsoa en action
                    </h1>
                    Dans le cadre du projet Madatlas, l’Université de
                    Fianarantsoa s'intéresse aux questions d’égalité,
                    d’inégalité de genre et d’équité. Des études ont été
                    réalisées, dont le chantier école cartographie des pratiques
                    genrées afin de comprendre et proposer des leviers d’action
                    pour un environnement universitaire plus équitable et
                    inclusif.
                </div>
            </div>

            <RouterLink
                to="/chantierPage"
                class="mt-auto w-fit mx-auto px-6 py-3 bg-secondary text-white font-semibold rounded-lg shadow-md hover:bg-secondary/80 transition"
            >
                CHANTIER ÉCOLE
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
