<template>
    <div class="relative h-[639px]">
        <div
            class="title font-poppins font-bold text-[3em] leading-[1.3em] animate-slide-content text-center absolute top-5 left-1/2 transform -translate-x-1/2"
        >
            EXPRIMEZ-VOUS
        </div>

        <div class="flex justify-center items-center h-full bg-gray-100">
            <div
                class="flex flex-row w-2/3 bg-white shadow-lg rounded-lg overflow-hidden"
            >
                <div
                    class="basis-1/2 bg-primary flex flex-col items-center justify-center text-white font-bold text-lg"
                >
                    <MapComponent />
                </div>
                <div
                    class="basis-1/2 bg-secondary p-6 flex justify-center items-center"
                >
                    <form class="max-w-sm w-full space-y-4">
                        <div>
                            <label
                                for="feedbackType"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Que s'est-il passé ?
                            </label>
                            <select
                                id="feedbackType"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                            >
                                <option value="avis">Avis</option>
                                <option value="suggestion">Suggestion</option>
                                <option value="france">Experience</option>
                            </select>
                        </div>

                        <div>
                            <label
                                for="feedbackType"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Où ça se passe ?
                            </label>
                            <input
                                id="feedbackType"
                                type="text"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                placeholder="indiquez le lieu"
                            />
                        </div>

                        <div
                            class="max-w-lg mx-auto bg-white shadow-md rounded-lg p-3"
                        >
                            <!-- Zone de texte sans bordure et non redimensionnable -->
                            <textarea
                                placeholder="A vous le clavier..."
                                class="w-full h-20 rounded-lg focus:outline-none focus:ring-0 text-gray-900 resize-none"
                            ></textarea>

                            <!-- Section des boutons (upload et enregistrement) -->
                            <div
                                class="flex items-center justify-between mt-3 px-3 py-2"
                            >
                                <div class="flex space-x-4">
                                    <!-- Bouton Upload Image -->
                                    <label
                                        for="file-upload"
                                        class="cursor-pointer"
                                    >
                                        <i
                                            class="fas fa-image text-green-500 text-2xl"
                                        ></i>
                                    </label>
                                    <input
                                        id="file-upload"
                                        type="file"
                                        class="hidden"
                                    />

                                    <!-- Bouton Enregistrement -->
                                    <button>
                                        <i
                                            class="fas fa-microphone text-red-500 text-2xl"
                                        ></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <RouterLink
                            to="/forumPage"
                            class="block text-center mt-4 px-6 py-3 bg-primary text-secondary font-semibold rounded-lg shadow-md hover:bg-primary/80 transition"
                        >
                            ENVOYER
                        </RouterLink>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import MapComponent from "@/components/maps.vue";
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css");
</style>
