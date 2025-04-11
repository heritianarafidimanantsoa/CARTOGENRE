<template>
    <div class="relative h-auto py-12 bg-gray-100">
        <div class="container mx-auto px-4">
            <div
                class="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden"
            >
                <!-- 📍 Carte -->
                <div
                    class="w-full lg:w-1/2 min-h-[600px] sm:min-h-[400px] lg:min-h-full relative"
                >
                    <Cartexpression v-model="position" />
                </div>

                <!-- 📝 Formulaire -->
                <div
                    class="w-full lg:w-1/2 bg-secondary px-6 sm:px-8 py-10 flex items-center"
                >
                    <form
                        @submit.prevent="handleSubmit"
                        class="w-full max-w-lg mx-auto space-y-6"
                    >
                        <!-- Titre -->
                        <div class="text-center">
                            <h2
                                class="text-3xl sm:text-5xl font-bold text-primary mb-2 font-poppins"
                            >
                                EXPRIMEZ-VOUS
                            </h2>
                            <p class="text-white text-sm">
                                Partagez votre expérience de façon anonyme et
                                sécurisée
                            </p>
                        </div>

                        <!-- Genre -->
                        <div>
                            <label
                                for="genre"
                                class="block mb-1 text-sm font-medium text-white"
                            >
                                Vous êtes :
                            </label>
                            <select
                                id="genre"
                                name="genre"
                                class="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option disabled selected value="">
                                    Choisissez une option
                                </option>
                                <option value="homme">Homme</option>
                                <option value="femme">Femme</option>
                            </select>
                        </div>

                        <!-- Type de retour -->
                        <div>
                            <label
                                for="feedbackType"
                                class="block mb-1 text-sm font-medium text-white"
                            >
                                Que s'est-il passé ?
                            </label>
                            <select
                                id="feedbackType"
                                name="feedbackType"
                                class="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="">
                                    Choisissez un type de témoignage
                                </option>
                                <option value="avis">Avis</option>
                                <option value="suggestion">Suggestion</option>
                                <option value="experience">Expérience</option>
                            </select>
                        </div>

                        <!-- Lieu -->
                        <div>
                            <label
                                for="lieu"
                                class="block mb-1 text-sm font-medium text-white"
                            >
                                Sélectionnez le lieu sur la carte et indiquez
                                son nom ici
                            </label>
                            <input
                                type="text"
                                id="lieu"
                                name="lieu"
                                placeholder="Nom du lieu"
                                class="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        <!-- Message -->
                        <div class="bg-white shadow rounded-lg p-4">
                            <label
                                for="message"
                                class="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Votre message :
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="À vous le clavier..."
                                class="w-full p-3 text-gray-800 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                            ></textarea>

                            <!-- Actions -->
                            <div
                                class="flex flex-wrap items-center justify-start gap-4 mt-4"
                            >
                                <!-- Image -->
                                <label
                                    for="file-upload"
                                    class="cursor-pointer flex items-center gap-2 text-sm text-gray-600 hover:text-green-600"
                                >
                                    <i
                                        class="fas fa-image text-green-500 text-xl"
                                    ></i>
                                    <span class="hidden sm:inline">Image</span>
                                </label>
                                <input
                                    id="file-upload"
                                    type="file"
                                    class="hidden"
                                    @change="handleImageUpload"
                                />

                                <!-- Microphone -->
                                <button
                                    type="button"
                                    @click="
                                        isRecording
                                            ? stopRecording()
                                            : startRecording()
                                    "
                                    class="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600"
                                >
                                    <i
                                        :class="[
                                            'text-xl',
                                            isRecording
                                                ? 'fas fa-stop text-red-700 animate-pulse'
                                                : 'fas fa-microphone text-red-500',
                                        ]"
                                    ></i>
                                    <span class="hidden sm:inline">{{
                                        isRecording ? "Stop" : "Audio"
                                    }}</span>
                                </button>

                                <!-- Durée -->
                                <span
                                    v-if="isRecording"
                                    class="text-sm text-red-600 font-semibold"
                                >
                                    {{ formattedDuration }}
                                </span>
                            </div>

                            <!-- Aperçu image -->
                            <div
                                v-if="imagePreview"
                                class="mt-4 relative inline-block"
                            >
                                <img
                                    :src="imagePreview"
                                    class="w-20 h-20 object-cover rounded-xl shadow border"
                                />
                                <button
                                    @click="removeImage"
                                    class="absolute -top-2 -right-2 bg-white border border-gray-300 text-gray-600 rounded-full p-1 shadow hover:bg-red-500 hover:text-white"
                                >
                                    <i class="fas fa-times text-xs"></i>
                                </button>
                            </div>

                            <!-- Aperçu audio -->
                            <div
                                v-if="audioBlob"
                                class="mt-4 flex items-center gap-3"
                            >
                                <audio
                                    :src="audioUrl"
                                    controls
                                    class="w-full rounded-lg shadow"
                                />
                                <button
                                    @click="clearAudio"
                                    type="button"
                                    class="text-red-600 hover:text-red-800"
                                    title="Supprimer l'audio"
                                >
                                    <i class="fas fa-times-circle text-xl"></i>
                                </button>
                            </div>
                        </div>

                        <!-- Confirmation -->
                        <div
                            v-if="successMessage"
                            class="text-green-500 text-sm text-center"
                        >
                            {{ successMessage }}
                        </div>

                        <!-- Bouton ENVOYER -->
                        <button
                            type="submit"
                            class="w-full inline-block text-center px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary/80 transition duration-200"
                        >
                            ENVOYER
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import Cartexpression from "@/components/cartexpression.vue";

const router = useRouter();
const position = ref({ lat: null, lng: null });
const successMessage = ref("");
const imageFile = ref(null);
const imagePreview = ref(null);

const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
        imageFile.value = file;
        imagePreview.value = URL.createObjectURL(file);
    }
};

const removeImage = () => {
    imageFile.value = null;
    imagePreview.value = null;
};

const isRecording = ref(false);
let mediaRecorder;
let chunks = [];
const audioBlob = ref(null);
const audioUrl = ref(null);
const duration = ref(0);
let timer = null;

const startRecording = async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
        });
        mediaRecorder = new MediaRecorder(stream);
        chunks = [];
        duration.value = 0;

        mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
        mediaRecorder.onstop = () => {
            audioBlob.value = new Blob(chunks, { type: "audio/webm" });
            audioUrl.value = URL.createObjectURL(audioBlob.value);
            clearInterval(timer);
        };

        mediaRecorder.start();
        isRecording.value = true;
        timer = setInterval(() => duration.value++, 1000);
    } catch (err) {
        alert("Microphone inaccessible !");
        console.error(err);
    }
};

const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
        mediaRecorder.stop();
        isRecording.value = false;
    }
};

const formattedDuration = computed(() => {
    const min = Math.floor(duration.value / 60)
        .toString()
        .padStart(1, "0");
    const sec = (duration.value % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
});

const clearAudio = () => {
    audioBlob.value = null;
    audioUrl.value = null;
    duration.value = 0;
};

const handleSubmit = async () => {
    const genre = document.getElementById("genre").value;
    const feedbackType = document.getElementById("feedbackType").value;
    const lieu = document.getElementById("lieu").value;
    const message = document.getElementById("message").value;

    if (!genre || !feedbackType) {
        alert("Veuillez remplir tous les champs obligatoires.");
        return;
    }

    const formData = new FormData();
    formData.append("genre", genre);
    formData.append("feedbackType", feedbackType);
    formData.append("lieu", lieu);
    formData.append("message", message);
    formData.append("latitude", position.value.lat);
    formData.append("longitude", position.value.lng);

    if (imageFile.value) {
        formData.append("file", imageFile.value);
    }
    if (audioBlob.value) {
        formData.append("audio", audioBlob.value, "audio.webm");
    }

    try {
        const response = await fetch(
            "https://www.cartogenre-uf.mastercmw.com/submit.php",
            {
                method: "POST",
                body: formData,
            }
        );

        const result = await response.json();

        if (response.ok) {
            successMessage.value = "✅ Données envoyées avec succès !";
            setTimeout(() => {
                successMessage.value = "";
                router.push("/forumPage");
            }, 2000);
        } else {
            alert(`❌ Erreur : ${result.message}`);
        }
    } catch (error) {
        console.error("Erreur réseau :", error);
        alert("❌ Erreur de connexion au serveur.");
    }
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css");
</style>
