<script setup>
import { ref, computed, onMounted, watch, nextTick } from "vue";
import Chart from "chart.js/auto";
import cartostat from "@/components/cartostat.vue";
import Footer from "@/components/footer.vue";
// Déclarer myChart en tant que référence
const myChart = ref(null); // Utilisez ref pour créer une référence à votre graphique

let chartInstance = null; // Instance pour stocker le graphique

const props = defineProps({
    selectedFonction: {
        type: String,
        default: "etudiant", // Valeur par défaut "etudiant"
    },
});

// Définir les onglets
const tabs = ref([
    { id: "etudiant", label: "Étudiant", icon: "fas fa-user-graduate" },
    {
        id: "enseignant",
        label: "Enseignant",
        icon: "fas fa-chalkboard-teacher",
    },
    { id: "pat", label: "Personnel administratif", icon: "fas fa-building" },
]);

// Onglet actif
const activeTab = ref(props.selectedFonction || "etudiant");

const getCurrentTab = computed(() => {
    return (
        tabs.value.find((tab) => tab.id === activeTab.value) || {
            label: "Inconnu",
        }
    );
});

// Configurations des graphiques
const chartConfigs = {
    etudiant: {
        labels: [
            "DEGSS",
            "FLSH",
            "ENS",
            "EMIT",
            "ENI",
            "SCIENCE",
            "ISTE",
            "MEDECINE",
            "CONFUCIUS",
            "ISST",
        ],
        data: [
            { masculin: 4938, feminin: 5291 },
            { masculin: 2603, feminin: 2158 },
            { masculin: 2241, feminin: 2395 },
            { masculin: 1757, feminin: 2032 },
            { masculin: 1784, feminin: 1315 },
            { masculin: 903, feminin: 841 },
            { masculin: 719, feminin: 505 },
            { masculin: 231, feminin: 171 },
            { masculin: 130, feminin: 136 },
            { masculin: 171, feminin: 136 },
        ],
        label: "Répartition des étudiants par sexe et établissement",
    },
    enseignant: {
        labels: [
            "DEGSS",
            "FLSH",
            "ENS",
            "EMIT",
            "ENI",
            "SCIENCE",
            "ISTE",
            "MEDECINE",
            "CONFUCIUS",
            "ISST",
        ],
        data: [
            { masculin: 28, feminin: 51 },
            { masculin: 203, feminin: 218 },
            { masculin: 221, feminin: 235 },
            { masculin: 177, feminin: 202 },
            { masculin: 174, feminin: 135 },
            { masculin: 93, feminin: 81 },
            { masculin: 79, feminin: 55 },
            { masculin: 21, feminin: 11 },
            { masculin: 30, feminin: 16 },
            { masculin: 17, feminin: 13 },
        ],
        label: "Répartition des enseignants",
    },
    pat: {
        labels: [
            "DEGSS",
            "FLSH",
            "ENS",
            "EMIT",
            "ENI",
            "SCIENCE",
            "ISTE",
            "MEDECINE",
            "CONFUCIUS",
            "ISST",
        ],
        data: [
            { masculin: 938, feminin: 291 },
            { masculin: 203, feminin: 258 },
            { masculin: 241, feminin: 295 },
            { masculin: 157, feminin: 232 },
            { masculin: 184, feminin: 115 },
            { masculin: 93, feminin: 81 },
            { masculin: 19, feminin: 50 },
            { masculin: 31, feminin: 71 },
            { masculin: 30, feminin: 36 },
            { masculin: 71, feminin: 36 },
        ],
        label: "Personnel PAT",
    },
};

// Fonction pour calculer les pourcentages
const calculatePercentages = () => {
    const activeData = chartConfigs[activeTab.value].data;
    return chartConfigs[activeTab.value].labels.map((label, index) => {
        const masculin = activeData[index].masculin;
        const feminin = activeData[index].feminin;
        const total = masculin + feminin;
        const masculinPercentage = ((masculin / total) * 100).toFixed(2);
        const femininPercentage = ((feminin / total) * 100).toFixed(2);
        return { label, masculinPercentage, femininPercentage };
    });
};

// Calcul dynamique des pourcentages
const percentages = computed(() => calculatePercentages());

// Création du graphique
const createChart = () => {
    nextTick(() => {
        const ctx = myChart.value?.getContext("2d"); // Accès à la référence du canvas
        if (!ctx) return;

        if (chartInstance) chartInstance.destroy(); // Détruire l'instance existante si elle existe

        const config = chartConfigs[activeTab.value]; // Obtenir la configuration basée sur l'onglet actif

        // Créer une nouvelle instance du graphique
        chartInstance = new Chart(ctx, {
            type: "bar",
            data: {
                labels: config.labels,
                datasets: [
                    {
                        label: "Féminin",
                        data: config.data.map((d) => d.feminin), // Transformation des données
                        backgroundColor: "#FFFF00",
                        borderColor: "#DAA520",
                        borderWidth: 1,
                    },
                    {
                        label: "Masculin",
                        data: config.data.map((d) => d.masculin), // Transformation des données
                        backgroundColor: "#9ad35a",
                        borderColor: "rgba(154, 211, 100, 0.6)",
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 2,
                scales: {
                    y: { beginAtZero: true },
                    x: { categoryPercentage: 0.5, barPercentage: 0.4 },
                },
            },
        });
    });
};

// Recréer le graphique chaque fois que l'onglet change
watch(activeTab, () => {
    if (myChart.value) createChart();
});

// Créer le graphique au montage du composant
onMounted(() => {
    if (myChart.value) createChart();
});
</script>

<template>
    <div class="flex flex-col h-[639px] relative">
        <!-- Titre Dynamique -->
        <div
            class="absolute top-8 left-[32%] z-20 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-md text-left transform -translate-x-1/2"
        >
            <h1 class="text-2xl font-bold text-white">
                Données par établissement sur
                <span class="text-secondary">{{ getCurrentTab.label }}</span>
            </h1>
        </div>

        <!-- Carte avec props dynamique -->
        <div class="w-full h-[639px] z-0">
            <cartostat
                :activeTab="activeTab"
                :currentTabLabel="getCurrentTab.label"
            />
        </div>

        <!-- Panneau graphique -->
        <div
            class="absolute top-5 right-10 text-white w-full max-w-lg bg-gray-800/95 backdrop-blur-sm rounded-lg h-[600px] flex flex-col z-30 shadow-lg"
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
                    :aria-selected="activeTab === tab.id ? 'true' : 'false'"
                    :aria-controls="tab.id"
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
                    class="w-full"
                    style="max-height: 300px"
                ></canvas>
            </div>

            <!-- Établissements -->
            <div
                class="mt-[-30px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 p-4"
            >
                <div
                    v-for="(item, index) in percentages"
                    :key="index"
                    class="bg-gray-700 p-2 rounded-lg shadow-md flex flex-col items-center min-h-[80px]"
                >
                    <p
                        class="font-semibold text-white mb-1 text-center text-[12px]"
                    >
                        {{ item.label }}:
                    </p>
                    <p class="text-gray-300 text-[10px] text-center">
                        <span class="font-bold text-lime-400">
                            H :{{ item.masculinPercentage }}% </span
                        ><br />
                        <span class="font-bold text-yellow-400">
                            F :{{ item.femininPercentage }}%
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <Footer class="mt-16" />
</template>

<style scoped>
canvas {
    width: 100% !important;
    height: auto !important;
    max-height: 300px;
}

button {
    transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
    transform: scale(1.05);
}
</style>
