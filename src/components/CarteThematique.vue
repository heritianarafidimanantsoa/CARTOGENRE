<template>
    <div id="map" class="w-full h-[639px]"></div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
    if (window.L) {
        // Initialisation de la carte avec centrage sur les coordonnées spécifiques
        const map = L.map("map", {
            center: [-21.4633723, 47.1121022], // Coordonnées initiales de la carte
            zoom: 15, // Zoom initial (ajuste cette valeur pour rapprocher ou éloigner)
            scrollWheelZoom: false, // Désactive le zoom par molette
            minZoom: 4, // Zoom minimum autorisé
            maxZoom: 18, // Zoom maximum autorisé
        });

        // Ajouter un fond de carte standard
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors",
        }).addTo(map);

        // Ajouter un autre fond de carte si nécessaire
        L.tileLayer("@/assets/img/maps.png", {
            attribution: "&copy; OpenStreetMap contributors",
        }).addTo(map);

        // Ajouter une autre source de tuiles
        L.tileLayer(
            "https://warper.wmflabs.org/maps/tile/8475/{z}/{x}/{y}.png",
            {
                attribution: "&copy; OpenStreetMap contributors",
            }
        ).addTo(map);

        // Charger les données GeoJSON et ajouter les marqueurs à la carte
        fetch("/geojson/mobilit.geojson")
            .then((response) => response.json())
            .then((data) => {
                const geoJSONLayer = L.geoJSON(data, {
                    pointToLayer: (feature, latlng) => {
                        const name = feature.properties.name || "Lieu inconnu";

                        // Icône pour le marqueur
                        const icon = L.icon({
                            iconUrl:
                                "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png", // Icône standard
                            iconSize: [25, 41], // Taille de l'icône
                            iconAnchor: [12, 41], // Ancrage de l'icône
                            popupAnchor: [0, -41], // Position de la popup par rapport au marqueur
                        });

                        const marker = L.marker(latlng, { icon }).addTo(map);

                        // Crée un divIcon pour afficher le nom au-dessus du marqueur
                        const label = L.divIcon({
                            className: "marker-label",
                            html: `<div class="text-center">${name}</div>`,
                            iconSize: [100, 30], // Taille de l'étiquette
                            iconAnchor: [50, 0], // Position de l'étiquette
                        });

                        // Marqueur pour le nom, au-dessus du marqueur
                        L.marker(latlng, { icon: label }).addTo(map);

                        return marker; // Retourne le marqueur avec l'icône
                    },
                    onEachFeature: (feature, layer) => {
                        if (
                            feature.geometry.type === "Point" &&
                            feature.properties
                        ) {
                            const name =
                                feature.properties.name || "Lieu inconnu";
                            const image =
                                feature.properties.image ||
                                "https://via.placeholder.com/150";
                            const link = feature.properties.link || "#";
                            const description =
                                feature.properties.description ||
                                "Aucune description disponible.";

                            // Contenu de la popup
                            const popupContent = `
                                <div>
                                    <img src="${image}" alt="${name}" class="w-full object-cover rounded-t-lg">
                                    <div class="py-4">
                                        <h3 class="mb-3 text-xl font-poppins font-semibold">${name}</h3>
                                        <p class="font-poppins font-light mb-4">${description}</p>
                                        <button onclick="window.open('${link}', '_blank')" class="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer text-sm">
                                            Voir plus
                                        </button>
                                    </div>
                                </div>
                            `;

                            layer.bindPopup(popupContent);
                        }
                    },
                }).addTo(map);

                // Ne pas utiliser fitBounds() ici pour centrer la carte sur les coordonnées initiales
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

/* Style du texte au-dessus du marqueur */
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
</style>
