<script setup>
import { ref, computed, onMounted, watch, nextTick } from "vue";
import Chart from "chart.js/auto";
import cartostat from "@/components/cartostat.vue";

const props = defineProps({
    selectedFonction: {
        type: String,
        default: "etudiant", // Valeur par défaut "etudiant"
    },
});

const tabs = ref([
    { id: "etudiant", label: "Étudiant", icon: "fas fa-user-graduate" },
    {
        id: "enseignant",
        label: "Enseignant",
        icon: "fas fa-chalkboard-teacher",
    },
    { id: "pat", label: "PAT", icon: "fas fa-building" },
]);

const activeTab = ref(props.selectedFonction);

const getCurrentTab = computed(() => {
    return (
        tabs.value.find((tab) => tab.id === activeTab.value) || {
            label: "Inconnu",
        }
    );
});

const myChart = ref(null);
let chartInstance = null;

const chartConfigs = {
    etudiant: {
        labels: ["L1", "L2", "L3", "M1", "M2"],
        data: [
            { masculin: 264, feminin: 73 },
            { masculin: 176, feminin: 44 },
            { masculin: 247, feminin: 75 },
            { masculin: 122, feminin: 37 },
            { masculin: 64, feminin: 19 },
        ],
        label: "Répartition des étudiants",
    },
    enseignant: {
        labels: ["Femmes", "Hommes"],
        data: [45, 55],
        label: "Répartition des enseignants",
    },
    pat: {
        labels: ["Administratif", "Technique"],
        data: [30, 20],
        label: "Personnel PAT",
    },
};

const createChart = () => {
    nextTick(() => {
        const ctx = myChart.value?.getContext("2d");
        if (!ctx) return;

        if (chartInstance) chartInstance.destroy();

        const config = chartConfigs[activeTab.value];

        chartInstance = new Chart(ctx, {
            type: "bar",
            data: {
                labels: config.labels,
                datasets: [
                    {
                        label: config.label,
                        data: config.data,
                        backgroundColor: "rgba(75, 192, 192, 0.2)",
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 2,
                scales: { y: { beginAtZero: true } },
            },
        });
    });
};

watch(activeTab, () => {
    if (myChart.value) createChart();
});

onMounted(() => {
    if (myChart.value) createChart();
});
</script>

<template>
    <div class="flex flex-col h-[639px] relative">
        <div
            class="absolute top-8 left-[32%] z-20 bg-black/30 px-4 py-2 rounded-md text-left transform -translate-x-1/2 backdrop-blur-sm"
        >
            <h1 class="text-2xl font-bold text-white">
                Donner par établissement sur
                <span class="text-secondary">{{ getCurrentTab.label }}</span>
            </h1>
        </div>

        <!-- Carte avec props dynamique -->
        <div class="w-full h-[639px] z-0">
            <cartostat
                :selectedFonction="activeTab"
                :currentTabLabel="getCurrentTab.label"
            />
        </div>

        <!-- Panneau graphique -->
        <div
            class="absolute top-8 right-10 text-white w-full max-w-lg bg-gray-800 rounded-lg h-[539px] flex flex-col z-30 shadow-lg"
            ref="chartContainer"
        >
            <!-- Onglets -->
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
                        'rounded-tr-lg': tab.id === 'pat',
                    }"
                >
                    <i :class="tab.icon" class="text-xl"></i>
                    <span>{{ tab.label }}</span>
                </button>
            </div>

            <!-- Contenu -->
            <div
                class="flex-1 flex flex-col p-6 justify-center items-center mt-4"
            >
                <div class="text-center mb-2">
                    <h1
                        class="text-base font-semibold text-white/80 uppercase tracking-wide mb-1"
                    >
                        Données globales sur
                    </h1>
                    <h2 class="text-lg font-bold text-white">
                        {{ getCurrentTab.label }}
                    </h2>
                </div>
                <canvas
                    ref="myChart"
                    class="mt-4 w-full"
                    style="max-height: 300px"
                ></canvas>
            </div>

            <!-- Établissements -->
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
canvas {
    width: 100% !important;
    height: auto !important;
    max-height: 300px;
}
</style>
