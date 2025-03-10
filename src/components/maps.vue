<template>
    <div id="map" class="w-full h-[639px]"></div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
    // Vérifie si Leaflet est bien chargé depuis le CDN
    if (window.L) {
        // Créer une carte Leaflet avec une vue initiale
        const map = L.map("map").setView([-21.4633723, 47.1121022], 5);

        // Ajouter une couche OpenStreetMap
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors",
        }).addTo(map);

        // Charger le fichier GeoJSON depuis le dossier public
        fetch("/geojson/mobilit.geojson") // Chemin vers le fichier GeoJSON dans 'public'
            .then((response) => response.json())
            .then((data) => {
                // Ajouter les données GeoJSON à la carte
                const geoJSONLayer = L.geoJSON(data).addTo(map);

                // Ajuster la vue de la carte pour inclure toutes les données du GeoJSON
                const bounds = geoJSONLayer.getBounds();
                map.fitBounds(bounds); // Ajuste la vue pour inclure le GeoJSON
            })
            .catch((error) => {
                console.error("Erreur de chargement du fichier GeoJSON", error);
            });
    } else {
        console.error("Leaflet n'a pas été chargé !");
    }
});
</script>
<style scoped>
#map {
    width: 100%;
    height: 100%;
}
</style>
