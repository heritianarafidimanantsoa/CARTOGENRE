<template>
    <div class="relative w-full h-full">
        <div id="map" class="absolute inset-0"></div>

        <!-- Bouton agrandir EN HAUT À GAUCHE -->
        <button
            @click="showModal = true"
            type="button"
            class="absolute top-20 left-2 bg-white border border-gray-300 py-2 px-2.5 hover:bg-gray-100 z-[1000] transition duration-200"
            title="Agrandir la carte"
        >
            <i class="fas fa-expand-arrows-alt text-gray-600 text-lg"></i>
        </button>

        <!-- Coordonnées dynamiques -->
        <div
            class="absolute bottom-4 left-4 bg-white p-5 rounded-xl shadow-lg space-y-3 z-[1000] w-[270px] border border-gray-200"
        >
            <div class="flex flex-col gap-3">
                <div>
                    <label
                        class="block text-xs font-medium text-gray-700 mb-1 uppercase tracking-wide"
                        >Latitude</label
                    >
                    <input
                        name="latitude"
                        v-model="latitude"
                        type="number"
                        step="any"
                        class="border border-gray-300 px-3 py-2 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Ex: -21.4633"
                        @change="updatePosition"
                    />
                </div>
                <div>
                    <label
                        class="block text-xs font-medium text-gray-700 mb-1 uppercase tracking-wide"
                        >Longitude</label
                    >
                    <input
                        name="longitude"
                        v-model="longitude"
                        type="number"
                        step="any"
                        class="border border-gray-300 px-3 py-2 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Ex: 47.1121"
                        @change="updatePosition"
                    />
                </div>
                <div class="flex gap-2">
                    <button
                        @click.prevent="goToCoordinates"
                        class="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-sm transition"
                    >
                        Aller
                    </button>
                    <button
                        @click.prevent="clearDynamicMarker"
                        class="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md text-sm transition"
                    >
                        Supprimer
                    </button>
                </div>
            </div>
        </div>

        <!-- Modal carte agrandie -->
        <Teleport to="body">
            <transition name="fade">
                <div
                    v-if="showModal"
                    class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[1100]"
                >
                    <div
                        class="bg-white w-full max-w-6xl h-[90vh] overflow-hidden relative"
                    >
                        <div id="modal-map" class="w-full h-full"></div>
                        <button
                            @click="showModal = false"
                            type="button"
                            class="absolute top-4 right-4 bg-secondary text-white p-4 rounded-full hover:bg-secondary/80 shadow-md transition z-[1100]"
                            title="Fermer la carte"
                        >
                            <svg
                                class="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                            </svg>
                        </button>

                        <!-- Coordonnées dynamiques dans le modal -->
                        <div
                            class="absolute bottom-4 left-4 bg-white p-5 rounded-xl shadow-lg space-y-3 z-[1000] w-[270px] border border-gray-200"
                        >
                            <div class="flex flex-col gap-3">
                                <div>
                                    <label
                                        class="block text-xs font-medium text-gray-700 mb-1 uppercase tracking-wide"
                                        >Latitude</label
                                    >
                                    <input
                                        name="latitude"
                                        v-model="latitude"
                                        type="number"
                                        step="any"
                                        class="border border-gray-300 px-3 py-2 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Ex: -21.4633"
                                        @change="updatePosition"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-xs font-medium text-gray-700 mb-1 uppercase tracking-wide"
                                        >Longitude</label
                                    >
                                    <input
                                        name="longitude"
                                        v-model="longitude"
                                        type="number"
                                        step="any"
                                        class="border border-gray-300 px-3 py-2 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Ex: 47.1121"
                                        @change="updatePosition"
                                    />
                                </div>
                                <div class="flex gap-2">
                                    <button
                                        @click.prevent="goToCoordinates"
                                        class="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-sm transition"
                                    >
                                        Aller
                                    </button>
                                    <button
                                        @click.prevent="clearDynamicMarker"
                                        class="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md text-sm transition"
                                    >
                                        Supprimer
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- Fin des coordonnées dans le modal -->
                    </div>
                </div>
            </transition>
        </Teleport>
    </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick, defineProps, defineEmits } from "vue";

const props = defineProps({
    modelValue: {
        type: Object,
        default: () => ({ lat: null, lng: null }),
    },
});
const emit = defineEmits(["update:modelValue"]);

const latitude = ref(props.modelValue.lat || -21.4633723);
const longitude = ref(props.modelValue.lng || 47.1121022);

let map;
let dynamicMarker = null;
let modalMap = null;
let modalMarker = null;
const showModal = ref(false);

const emitCoords = () => {
    emit("update:modelValue", {
        lat: parseFloat(latitude.value),
        lng: parseFloat(longitude.value),
    });
};

const addDynamicMarker = (lat, lng) => {
    if (dynamicMarker) map.removeLayer(dynamicMarker);
    dynamicMarker = L.marker([lat, lng]).addTo(map);

    if (modalMap) {
        if (modalMarker) modalMap.removeLayer(modalMarker);
        modalMarker = L.marker([lat, lng]).addTo(modalMap);
    }
};

const goToCoordinates = () => {
    const lat = parseFloat(latitude.value);
    const lng = parseFloat(longitude.value);
    if (!isNaN(lat) && !isNaN(lng)) {
        map.setView([lat, lng], 16);
        if (modalMap) modalMap.setView([lat, lng], 16);
        addDynamicMarker(lat, lng);
        emitCoords();
    }
};

const clearDynamicMarker = () => {
    if (dynamicMarker) {
        map.removeLayer(dynamicMarker);
        dynamicMarker = null;
    }
    if (modalMarker) {
        modalMap.removeLayer(modalMarker);
        modalMarker = null;
    }
    latitude.value = null;
    longitude.value = null;
    emitCoords();
};

const updatePosition = () => {
    emitCoords();
};

onMounted(() => {
    if (window.L) {
        map = L.map("map").setView([latitude.value, longitude.value], 16.5);
        L.tileLayer(
            "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png",
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

        map.on("click", (e) => {
            latitude.value = parseFloat(e.latlng.lat.toFixed(6));
            longitude.value = parseFloat(e.latlng.lng.toFixed(6));
            addDynamicMarker(latitude.value, longitude.value);
            emitCoords();
        });

        // Marqueur initial si coordonnées présentes
        if (latitude.value && longitude.value) {
            addDynamicMarker(latitude.value, longitude.value);
        }
    }
});

watch(showModal, (val) => {
    if (val) {
        nextTick(() => {
            modalMap = L.map("modal-map").setView(
                [latitude.value, longitude.value],
                16.5
            );
            L.tileLayer(
                "https://warper.wmflabs.org/maps/tile/8475/{z}/{x}/{y}.png",
                {
                    attribution: "&copy; OpenStreetMap contributors",
                }
            ).addTo(modalMap);

            modalMap.on("click", (e) => {
                latitude.value = parseFloat(e.latlng.lat.toFixed(6));
                longitude.value = parseFloat(e.latlng.lng.toFixed(6));
                addDynamicMarker(latitude.value, longitude.value);
                emitCoords();
            });

            if (latitude.value && longitude.value) {
                addDynamicMarker(latitude.value, longitude.value);
            }
        });
    } else {
        if (modalMap) {
            modalMap.remove();
            modalMap = null;
            modalMarker = null;
        }
    }
});
</script>

<style scoped>
#map,
#modal-map {
    width: 100%;
    height: 100%;
    border-radius: 0 !important;
    box-shadow: none !important;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
