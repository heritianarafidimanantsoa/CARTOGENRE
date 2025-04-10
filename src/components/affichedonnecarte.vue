<template>
    <div class="h-[639px] w-full">
        <div id="map" class="h-full w-full"></div>
    </div>
</template>

<script setup>
import { onMounted, watch } from "vue";

// Définition des propriétés (props) pour les filtres
const props = defineProps({
    filterType: String,
    filterDate: String,
});

let map; // Déclaration de la variable globale pour la carte

// Fonction pour recentrer la carte
const centerMap = () => {
    if (map) {
        // Centre la carte sans changer le niveau de zoom
        map.setView([-21.4633723, 47.1090000]); // Pas de zoom défini ici, on conserve le zoom initial
    }
};

// Fonction pour récupérer et afficher les marqueurs
const fetchAndDisplay = () => {
    let url = new URL("https://www.cartogenre-uf.mastercmw.com/fetch_feedbacks.php");
    const params = new URLSearchParams();
    if (props.filterType) params.append("type", props.filterType);
    if (props.filterDate) params.append("date", props.filterDate);
    url.search = params.toString();

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // Supprimer tous les marqueurs existants avant d'en ajouter de nouveaux
            map.eachLayer((layer) => {
                if (layer instanceof L.Marker) {
                    map.removeLayer(layer);
                }
            });

            // Ajouter de nouveaux marqueurs avec les données récupérées
            data.forEach((entry) => {
                const marker = L.marker([
                    entry.latitude,
                    entry.longitude,
                ]).addTo(map);
                const popup = `
                    <div style="max-width: 250px">
                        <h3 class="font-bold text-lg text-primary mb-1">${
                            entry.genre
                        } - ${entry.feedbackType}</h3>
                        <p class="mb-1"><strong>Lieu:</strong> ${entry.lieu}</p>
                        <p class="text-sm text-gray-700">${entry.message}</p>
                        ${
                            entry.image_path
                                ? `<img src="https://www.cartogenre-uf.mastercmw.com/${entry.image_path}" alt="image" class="w-full h-auto mt-2 rounded" />`
                                : ""
                        }
                        ${
                            entry.audio_path
                                ? `<audio controls class="mt-2 w-full">
                                    <source src="https://www.cartogenre-uf.mastercmw.com/${entry.audio_path}" type="audio/webm">
                                    Votre navigateur ne prend pas en charge l'audio.
                                  </audio>`
                                : ""
                        }
                    </div>
                `;
                marker.bindPopup(popup);
            });

            // Recentrer la carte après avoir ajouté les marqueurs sans changer le zoom
            centerMap();
        })
        .catch((error) => {
            console.error("Erreur de chargement des feedbacks:", error);
        });
};

// Initialisation de la carte après le montage
onMounted(() => {
    if (window.L) {
        map = L.map("map", {
            center: [-21.4633723, 47.1190000], // Centrage initial de la carte
            zoom: 16.4, // Zoom éloigné par défaut
            scrollWheelZoom: false, // Désactiver le zoom au scroll
            dragging: true, // Permettre de déplacer la carte
        });

        // Ajouter un seul tileLayer
        L.tileLayer(
            "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png?key=3a1c3ba9-1285-47fa-a3a7-a311abe4d5b1",
            {
                attribution: "&copy; OpenStreetMap contributors",
            }
        ).addTo(map);

        L.tileLayer(
            "https://warper.wmflabs.org/maps/tile/8560/{z}/{x}/{y}.png",
            {
                attribution: "&copy; OpenStreetMap contributors",
            }
        ).addTo(map);

        // Charger et afficher les marqueurs
        fetchAndDisplay();
    } else {
        console.error("Leaflet n'est pas chargé");
    }
});

// Réagir aux changements de filtre
watch(() => [props.filterType, props.filterDate], fetchAndDisplay, {
    immediate: true,
});
</script>

<style scoped>
#map {
    height: 100%;
    width: 100%;
}
</style>
