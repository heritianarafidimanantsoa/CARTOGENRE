<template>
    <div id="map" class="w-full h-[639px]"></div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
    if (window.L) {
        const map = L.map("map").setView([-21.4633723, 47.1121022], 5);

        L.tileLayer(
            "https://warper.wmflabs.org/maps/tile/8475/{z}/{x}/{y}.png",
            {
                attribution: "&copy; OpenStreetMap contributors",
            }
        ).addTo(map);

        fetch("/geojson/mobilit.geojson")
            .then((response) => response.json())
            .then((data) => {
                // Ajouter la couche GeoJSON avec des popups
                const geoJSONLayer = L.geoJSON(data, {
                    onEachFeature: (feature, layer) => {
                        // Vérifie si les propriétés nécessaires sont présentes
                        if (
                            feature.properties &&
                            feature.properties.name &&
                            feature.properties.image
                        ) {
                            const popupContent = `
                                <div style="text-align: center;">
                                    <h3>${feature.properties.name}</h3>
                                    <img src="${feature.properties.image}" alt="Image" style="width: 150px; height: auto; border-radius: 8px;">
                                    <br>
                                    <button onclick="alert('Bouton cliqué pour ${feature.properties.name}')"
                                        style="margin-top: 8px; padding: 6px 12px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
                                        Voir plus
                                    </button>
                                </div>
                            `;
                            layer.bindPopup(popupContent);
                        }
                    },
                }).addTo(map);

                map.fitBounds(geoJSONLayer.getBounds());
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
