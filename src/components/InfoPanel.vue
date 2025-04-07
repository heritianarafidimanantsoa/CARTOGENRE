<template>
    <div
        class="flex flex-col h-full rounded-2xl shadow-lg overflow-hidden bg-[#192231]"
        :class="className"
    >
        <div class="flex-grow p-8 flex flex-col">
            <div class="text-appear mb-2">
                <div
                    class="inline-block px-4 py-1 bg-blue-500/10 backdrop-blur-sm rounded-full text-blue-400 text-xs tracking-wider font-medium mb-2"
                >
                    {{ activeTab === "map" ? "CARTOGRAPHIE" : "STATISTIQUES" }}
                </div>
            </div>

            <h2
                class="text-4xl font-bold tracking-tight text-white mb-6 text-appear"
            >
                {{ currentData.title }}
            </h2>

            <div class="h-px w-full bg-white/10 mb-6" />

            <div
                class="prose prose-invert max-w-none text-appear overflow-y-auto flex-grow pr-4 scrollbar-thin"
            >
                <p class="text-gray-300 leading-relaxed">
                    {{ currentData.description }}
                </p>
            </div>
        </div>

        <div class="grid grid-cols-2 border-t border-white/10">
            <button
                @click="() => emit('tabChange', 'map')"
                :class="[
                    'py-4 px-6 flex items-center justify-center gap-2 transition-all font-medium focus:outline-none',
                    activeTab === 'map'
                        ? 'bg-blue-500/10 text-blue-400'
                        : 'text-gray-400 hover:text-gray-200 hover:bg-white/5',
                ]"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                    <line x1="9" x2="9" y1="3" y2="18" />
                    <line x1="15" x2="15" y1="6" y2="21" />
                </svg>
                <span class="tracking-wide">CARTE</span>
            </button>

            <button
                @click="() => emit('tabChange', 'stats')"
                :class="[
                    'py-4 px-6 flex items-center justify-center gap-2 transition-all font-medium focus:outline-none',
                    activeTab === 'stats'
                        ? 'bg-blue-500/10 text-blue-400'
                        : 'text-gray-400 hover:text-gray-200 hover:bg-white/5',
                ]"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path d="M3 3v18h18" />
                    <path d="M18 17V9" />
                    <path d="M13 17V5" />
                    <path d="M8 17v-3" />
                </svg>
                <span class="tracking-wide">STATISTIQUES</span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    activeTab: {
        type: String,
        required: true,
    },
    currentMapIndex: {
        type: Number,
        required: true,
    },
    currentChartIndex: {
        type: Number,
        required: true,
    },
    mapData: {
        type: Array,
        required: true,
    },
    chartData: {
        type: Array,
        required: true,
    },
    className: {
        type: String,
        default: "",
    },
});

const emit = defineEmits(["tabChange"]);

const currentData = computed(() =>
    props.activeTab === "map"
        ? props.mapData[props.currentMapIndex]
        : props.chartData[props.currentChartIndex]
);
</script>
