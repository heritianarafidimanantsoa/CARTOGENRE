<script setup>
import { ref, computed, onMounted, watch, nextTick } from "vue";
import Chart from "chart.js/auto";
import MapComponent from "@/components/maps.vue";

const tabs = ref([
    { id: "etudiant", label: "Étudiant", icon: "fas fa-user-graduate" },
    {
        id: "enseignant",
        label: "Enseignant",
        icon: "fas fa-chalkboard-teacher",
    },
    { id: "pat", label: "PAT", icon: "fas fa-building" },
]);

const activeTab = ref("etudiant");
const getCurrentTab = computed(() => {
    return (
        tabs.value.find((tab) => tab.id === activeTab.value) || {
            label: "Inconnu",
        }
    );
});

const myChart = ref(null);

const createChart = () => {
    nextTick(() => {
        const ctx = myChart.value?.getContext("2d");
        if (ctx) {
            new Chart(ctx, {
                type: "bar",
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    datasets: [
                        {
                            label: "Ventes",
                            data: [65, 59, 80, 81, 56, 55],
                            backgroundColor: "rgba(75, 192, 192, 0.2)",
                            borderColor: "rgba(75, 192, 192, 1)",
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        }
    });
};

watch(activeTab, (newTab) => {
    if (newTab === "etudiant") {
        if (myChart.value) {
            myChart.value.destroy();
        }

        createChart();
    }
});

onMounted(() => {
    if (activeTab.value === "etudiant") {
        createChart();
    }
});
</script>

<template>
    <div class="flex flex-col h-[639px] text-white">
        <div class="w-full h-[639px] z-0">
            <MapComponent />
        </div>
        <div
            class="absolute right-20 top-27 w-full max-w-lg bg-gray-800 rounded-lg h-[539px] flex flex-col"
            ref="chartContainer"
        >
            <div class="grid grid-cols-3 gap-0.5">
                <button
                    v-for="(tab, index) in tabs"
                    :key="index"
                    @click="activeTab = tab.id"
                    class="flex items-center justify-center space-x-2 p-2 transition duration-200 w-full"
                    :class="{
                        'bg-transparent text-white font-bold':
                            activeTab === tab.id,
                        'bg-gray-600 text-white hover:bg-gray-500':
                            activeTab !== tab.id,
                        'rounded-tl-lg': tab.id === 'etudiant',
                        'rounded-none': tab.id === 'enseignant',
                        'rounded-tr-lg  ': tab.id === 'pat',
                    }"
                >
                    <i :class="tab.icon" class="text-xl"></i>
                    <span>{{ tab.label }}</span>
                </button>
            </div>

            <div
                class="flex-1 flex flex-col p-6 justify-center items-center mt-4"
            >
                <h2 class="text-lg font-bold text-center">
                    {{ getCurrentTab.label }}
                </h2>

                <!-- Affichage du graphique uniquement pour l'onglet "Étudiant" -->
                <canvas
                    ref="myChart"
                    v-if="activeTab === 'etudiant'"
                    class="mt-4 w-full"
                ></canvas>

                <div
                    v-else-if="activeTab === 'enseignant'"
                    class="mt-4 text-center"
                >
                    <p>👨‍🏫 Informations sur les enseignants...</p>
                </div>

                <div v-else-if="activeTab === 'pat'" class="mt-4 text-center">
                    <p>
                        🏢 Informations sur le personnel administratif et
                        technique...
                    </p>
                </div>
            </div>

            <div class="mt-auto grid grid-cols-2 gap-4 text-sm p-6">
                <div>
                    <p>EMIT</p>
                    <p>ENS</p>
                    <p>DEDGS</p>
                </div>
                <div>
                    <p>ENI</p>
                    <p>MEDECINE</p>
                    <p>LETTRE</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css");

canvas {
    width: 100% !important;
    height: 100% !important;
}
</style>
