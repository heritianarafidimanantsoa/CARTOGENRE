<template>
    <div>
        <canvas ref="chartCanvas" class="popup-chart"></canvas>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { Chart } from "chart.js";

const props = defineProps({
    labels: Array,
    dataHomme: Array,
    dataFemme: Array,
    chartId: String,
});

const chartCanvas = ref(null);

// Fonction pour créer le graphique
const createChart = () => {
    if (!chartCanvas.value) return;

    const ctx = chartCanvas.value.getContext("2d");

    const data = {
        labels: props.labels,
        datasets: [
            {
                label: "Féminin",
                backgroundColor: "rgba(255, 105, 180, 0.8)",
                borderColor: "rgba(255, 105, 180, 0.4)",
                data: props.dataFemme,
            },
            {
                label: "Masculin",
                backgroundColor: "rgba(0, 0, 255, 0.8)",
                borderColor: "rgba(0, 0, 255, 0.4)",
                data: props.dataHomme,
            },
        ],
    };

    new Chart(ctx, {
        type: "bar",
        data: data,
        options: {
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 14, // La taille de la police pour la légende
                        },
                    },
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
};

// Re-créer le graphique si les données changent
watch(
    () => props.dataHomme,
    () => {
        createChart(); // Recréer le graphique lorsque les données changent
    },
    { immediate: true } // Initialiser le graphique immédiatement
);

onMounted(() => {
    createChart(); // Initialiser le graphique lorsque le composant est monté
});
</script>

<style scoped>
.popup-chart {
    display: block;
    width: 100%;
    height: 100%;
    max-height: 200px;
}
</style>
