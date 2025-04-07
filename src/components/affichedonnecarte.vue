<template>
    <div class="h-[639px] w-full">
        <div id="map" class="h-full w-full"></div>
    </div>
</template>

<script setup>
import { onMounted, watch } from "vue";

const props = defineProps({
    filterType: String,
    filterDate: String,
});

let map;

const centerMap = () => {
    map.setView([-21.4633723, 47.1121022], 17.4);
};

const fetchAndDisplay = () => {
    let url = new URL("http://localhost/fetch_feedbacks.php");
    const params = new URLSearchParams();
    if (props.filterType) params.append("type", props.filterType);
    if (props.filterDate) params.append("date", props.filterDate);
    url.search = params.toString();

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            map.eachLayer((layer) => {
                if (layer instanceof L.Marker) {
                    map.removeLayer(layer);
                }
            });

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
                      ? `<img src="http://localhost/${entry.image_path}" alt="image" class="w-full h-auto mt-2 rounded" />`
                      : ""
              }
              ${
                  entry.audio_path
                      ? `<audio controls class="mt-2 w-full">
                <source src="http://localhost/${entry.audio_path}" type="audio/webm">
                Votre navigateur ne prend pas en charge l'audio.
              </audio>`
                      : ""
              }
            </div>
          `;
                marker.bindPopup(popup);
            });

            centerMap();
        })
        .catch((error) => {
            console.error("Erreur de chargement des feedbacks:", error);
        });
};

onMounted(() => {
    if (!window.L) {
        console.error("Leaflet n'est pas chargé");
        return;
    }

    map = L.map("map").setView([-21.4633723, 47.1121022], 17.4);

    L.tileLayer("https://warper.wmflabs.org/maps/tile/8475/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    fetchAndDisplay();
});

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
