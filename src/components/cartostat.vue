<template>
    <div id="map" class="w-full h-[639px]"></div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { Chart, registerables } from "chart.js";

// Reçois l'activeTab comme prop
const props = defineProps({
    activeTab: {
        type: String,
        default: "etudiant", // Valeur par défaut "etudiant"
    },
    currentTabLabel: {
        type: String,
        required: true,
    },
});

Chart.register(...registerables);

// Utilisation de `activeTab` pour générer dynamiquement le titre
const selectedFonction = ref(props.activeTab); // Gérer dynamiquement les types (etudiant, enseignant, pat)
console.log("Selected Fonction:", selectedFonction.value);
watch(
    () => props.activeTab,
    (newValue) => {
        selectedFonction.value = newValue; // Met à jour selectedFonction quand activeTab change
        console.log("Selected Function updated:", selectedFonction.value);
    },
    { immediate: true }
);

// Déclare la fonction updatePopupTitle avant son utilisation
const updatePopupTitle = (title) => {
    const popupTitle = document.querySelector(".popup-title");
    if (popupTitle) {
        popupTitle.textContent = title;
    }
};

// Regarder les changements de `currentTabLabel` et mettre à jour le titre dans le popup
watch(
    () => props.currentTabLabel,
    (newValue) => {
        console.log("currentTabLabel updated:", newValue);
        // Mettre à jour le titre du popup si la prop change
        updatePopupTitle(newValue);
    },
    { immediate: true }
);

onMounted(() => {
    if (!window.L) {
        console.error("❌ Leaflet non chargé !");
        return;
    }

    const map = L.map("map", {
        center: [-21.4633723, 47.1121022], // Coordonnées spécifiques pour centrer la carte
        zoom: 17, // Zoom initial (ajuste cette valeur pour rapprocher ou éloigner)
        scrollWheelZoom: false, // Désactive le zoom par molette
        minZoom: 4, // Zoom minimum autorisé
        maxZoom: 18, // Zoom maximum autorisé
    });

    // Ajouter un tileLayer
    L.tileLayer(
        "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png",
        {
            attribution: "&copy; OpenStreetMap contributors",
        }
    ).addTo(map);

    // Ajouter un autre tileLayer si nécessaire
    L.tileLayer("https://warper.wmflabs.org/maps/tile/8560/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    fetch("/geojson/mobilit.geojson")
        .then((res) => res.json())
        .then((data) => {
            const geoJSONLayer = L.geoJSON(data, {
                pointToLayer: (feature, latlng) => {
                    const name = feature.properties.name || "Lieu inconnu";
                    const icon = L.icon({
                        iconUrl:
                            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [0, -41],
                    });

                    const marker = L.marker(latlng, { icon }).addTo(map);

                    const label = L.divIcon({
                        className: "marker-label text-center text-xs font-bold",
                        html: `<div class="text-center">${name}</div>`,
                        iconSize: [100, 30],
                        iconAnchor: [50, 0],
                    });

                    L.marker(latlng, { icon: label }).addTo(map);

                    return marker;
                },

                onEachFeature: (feature, layer) => {
                    if (
                        feature.geometry.type === "Point" &&
                        feature.properties?.chartData
                    ) {
                        const chartData = feature.properties.chartData;
                        const name = feature.properties.name || "Lieu inconnu";
                        const uniqueId = Math.random()
                            .toString(36)
                            .substring(2, 9);
                        const chartIdPrefix = `chart-${uniqueId}`;

                        // Dynamique : Utiliser selectedFonction pour accéder aux bonnes données (etudiant, enseignant, pat)
                        const mentions = Object.keys(
                            chartData[selectedFonction.value] || {}
                        );
                        const mentionOptions = mentions
                            .map(
                                (m, i) =>
                                    `<option value="${m}"${
                                        i === 0 ? " selected" : ""
                                    }>${m.toUpperCase()}</option>`
                            )
                            .join("");

                        const popupContent = `
    <div class="p-4 space-y-3 w-72 flex flex-col max-h-[500px] overflow-y-auto">
        <!-- Titre dynamique h1 -->
        <h1 class="text-center text-2xl font-bold mb-4 popup-title">${props.currentTabLabel}</h1>

        <!-- Titre existant h3 avec nom -->
        <h3 id="chartTitle-${uniqueId}" class="text-center text-lg font-semibold mb-2">${name} - ${selectedFonction.value}</h3>

        <div class="flex items-center justify-between mb-4">
            <span class="font-medium">Mention:</span>
            <select id="mentionSelect-${uniqueId}" class="border border-gray-300 rounded px-2 py-1 text-sm">
                ${mentionOptions}
            </select>
            <button id="toggleSelector-${uniqueId}" class="rounded-none border-2 border-blue-500 text-blue-500 py-1 px-4 hover:bg-blue-500 hover:text-white transition-all duration-300">
                Données Globales
            </button>
        </div>

        <div class="relative w-full h-64">
            <canvas id="${chartIdPrefix}-active" class="popup-chart absolute inset-0"></canvas>
        </div>
    </div>
`;

                        layer.bindPopup(popupContent, { maxWidth: 300 });

                        layer.on("popupopen", () => {
                            // Assurer que Vue met à jour le titre après l'ouverture du popup
                            setTimeout(() => {
                                const title = document.getElementById(
                                    `chartTitle-${uniqueId}`
                                );
                                title.innerText = `${name} - ${
                                    selectedFonction.value
                                        .charAt(0)
                                        .toUpperCase() +
                                    selectedFonction.value.slice(1)
                                }`;
                            }, 100);
                        });

                        layer.bindPopup(popupContent, { maxWidth: 300 });

                        layer.on("popupopen", () => {
                            setTimeout(() => {
                                const title = document.getElementById(
                                    `chartTitle-${uniqueId}`
                                );
                                const mentionSelect = document.getElementById(
                                    `mentionSelect-${uniqueId}`
                                );
                                const toggleButton = document.getElementById(
                                    `toggleSelector-${uniqueId}`
                                );
                                const activeCanvas = document.getElementById(
                                    `${chartIdPrefix}-active`
                                );

                                let currentChart;

                                const renderChart = (type) => {
                                    if (currentChart) {
                                        currentChart.destroy();
                                    }

                                    let data, labels;
                                    let label = "";

                                    console.log(
                                        "Selected Function:",
                                        selectedFonction.value
                                    ); // Ajoutez un log pour vérifier la valeur de selectedFonction

                                    // Récupérer les données en fonction de l'onglet actif
                                    if (type === "globale") {
                                        console.log("Fetching Global Data...");
                                        data = chartData.donneesGlobale?.data;
                                        labels =
                                            chartData.donneesGlobale?.labels;
                                        label = "Données Globales";
                                    } else {
                                        if (
                                            selectedFonction.value ===
                                            "etudiant"
                                        ) {
                                            console.log(
                                                "Fetching Etudiant Data..."
                                            );
                                            data =
                                                chartData.etudiant?.[type]
                                                    ?.data;
                                            labels =
                                                chartData.etudiant?.[type]
                                                    ?.labels;
                                            label = type.toUpperCase();
                                        } else if (
                                            selectedFonction.value ===
                                            "enseignant"
                                        ) {
                                            console.log(
                                                "Fetching Enseignant Data..."
                                            );
                                            data =
                                                chartData.enseignant?.[type]
                                                    ?.data;
                                            labels =
                                                chartData.enseignant?.[type]
                                                    ?.labels;
                                            label = type.toUpperCase();
                                        } else if (
                                            selectedFonction.value === "pat"
                                        ) {
                                            console.log("Fetching PAT Data...");
                                            data = chartData.pat?.[type]?.data;
                                            labels =
                                                chartData.pat?.[type]?.labels;
                                            label = type.toUpperCase();
                                        }
                                    }

                                    // Log les données et les labels récupérés
                                    console.log("Data:", data);
                                    console.log("Labels:", labels);

                                    if (!data || !labels) {
                                        console.warn(
                                            `❌ Données manquantes pour ${type}`
                                        );
                                        return;
                                    }

                                    title.innerText = `${name} - ${label}`;

                                    currentChart = new Chart(activeCanvas, {
                                        type: "bar",
                                        data: {
                                            labels: labels,
                                            datasets: [
                                                {
                                                    label: "Masculin",
                                                    data: data.map(
                                                        (d) => d.masculin
                                                    ),
                                                    backgroundColor: "#FFFF00",
                                                    borderRadius: 6,
                                                },
                                                {
                                                    label: "Féminin",
                                                    data: data.map(
                                                        (d) => d.feminin
                                                    ),
                                                    backgroundColor: "#9ad35a",
                                                    borderRadius: 6,
                                                },
                                            ],
                                        },
                                        options: {
                                            responsive: true,
                                            maintainAspectRatio: false,
                                            animation: {
                                                duration: 600,
                                                easing: "easeInOutQuart",
                                            },
                                            scales: {
                                                y: {
                                                    beginAtZero: true,
                                                    ticks: { stepSize: 10 },
                                                },
                                            },
                                            plugins: {
                                                legend: { position: "top" },
                                            },
                                        },
                                    });
                                };

                                mentionSelect?.addEventListener(
                                    "change",
                                    (e) => {
                                        renderChart(e.target.value);
                                    }
                                );

                                toggleButton?.addEventListener("click", () => {
                                    renderChart("globale");
                                });

                                const defaultMention =
                                    mentionSelect?.value || mentions[0];
                                renderChart(defaultMention);
                            }, 100);
                        });
                    }
                },
            }).addTo(map);

            // Suppression de fitBounds() pour ne pas ajuster la vue en fonction des données
        })
        .catch((error) => {
            console.error(
                "❌ Erreur lors du chargement du fichier GeoJSON :",
                error
            );
        });
});
</script>

<style scoped>
#map {
    width: 100%;
    height: 100%;
}
.marker-label {
    font-size: 14px;
    font-weight: bold;
    background-color: white;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    color: #333;
    text-align: center;
}
.popup-chart {
    display: block;
    width: 100% !important;
    height: 0;
    flex-grow: 1;
}
.fade-in {
    animation: fadeIn 0.4s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>
