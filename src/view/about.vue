<script setup>
import Footer from "@/components/footer.vue";
</script>

<template>
    <!-- NAVBAR -->
    <Navbar />

    <!-- SECTION A PROPOS -->
    <section class="min-h-screen bg-white py-16 px-6 md:px-16">
        <div class="max-w-5xl mx-auto">
            <h1
                class="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8"
            >
                À propos de CartoGenre
            </h1>
            <p class="text-gray-700 text-lg leading-relaxed mb-6">
                CartoGenre est une plateforme numérique dédiée à la
                visualisation et à la compréhension des inégalités de genre sur
                le campus universitaire d’Andrainjato, à Fianarantsoa,
                Madagascar. À travers une approche cartographique et immersive,
                ce projet donne à voir les expériences vécues, les pratiques
                sociales et les représentations liées aux rapports de genre dans
                l’espace académique.
            </p>

            <p class="text-gray-700 text-lg leading-relaxed mb-6">
                Né d’un projet de recherche universitaire dans le cadre du
                Chantier École, CartoGenre s’appuie sur des enquêtes de terrain,
                des témoignages et des données géographiques collectées auprès
                des étudiants et du personnel universitaire. Il s’agit d’un
                outil de sensibilisation, mais aussi d’un levier pour l’action
                en faveur de l’égalité, de l’équité et de l’inclusion dans les
                établissements d’enseignement supérieur.
            </p>

            <p class="text-gray-700 text-lg leading-relaxed">
                Ce projet collaboratif est porté par des étudiants, des
                enseignants-chercheurs et des partenaires engagés, désireux de
                faire évoluer les mentalités et les pratiques sur le campus, en
                rendant visibles les dynamiques de genre qui s’y jouent. À
                travers CartoGenre, nous affirmons qu’une meilleure
                compréhension des enjeux de genre peut contribuer à bâtir un
                environnement universitaire plus juste et plus respectueux pour
                toutes et tous.
            </p>
        </div>
    </section>

    <!-- SECTION EQUIPE -->
    <section class="bg-gray-100 py-12 px-6 md:px-16">
        <div class="max-w-6xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
                L’équipe étudiante
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                <!-- Étudiant 1 -->
                <div class="bg-white rounded-lg shadow p-4">
                    <img
                        src="/src/assets/img/heritiana.jpg"
                        alt="Heritiana"
                        class="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                    />
                    <h3 class="text-gray-800 font-semibold text-lg">
                        RAF. Heritiana
                    </h3>
                    <p class="text-gray-600 text-sm">
                        Design & UI/UX & Intégration
                    </p>
                    <p class="text-gray-600 text-sm mt-1">+33 6 86 78 63 19</p>
                    <a
                        href="https://www.linkedin.com/in/heritiana-rafidimanantsoa/"
                        target="_blank"
                        class="text-blue-600 hover:underline text-sm mt-1 block"
                    >
                        Voir LinkedIn
                    </a>
                </div>

                <!-- Étudiant 2 -->
                <div class="bg-white rounded-lg shadow p-4">
                    <img
                        src="/src/assets/img/ranto.jpg"
                        alt="Ranto"
                        class="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                    />
                    <h3 class="text-gray-800 font-semibold text-lg">
                        FID. Ranto
                    </h3>
                    <p class="text-gray-600 text-sm">Coordination & Contenu</p>
                    <p class="text-gray-600 text-sm mt-1">+33 6 86 76 81 13</p>
                    <a
                        href="https://www.linkedin.com/in/ranto-fidinarivo/"
                        target="_blank"
                        class="text-blue-600 hover:underline text-sm mt-1 block"
                    >
                        Voir LinkedIn
                    </a>
                </div>

                <!-- Étudiant 3 -->
                <div class="bg-white rounded-lg shadow p-4">
                    <img
                        src="/src/assets/img/daddy.jpg"
                        alt="Daddy"
                        class="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                    />
                    <h3 class="text-gray-800 font-semibold text-lg">
                        MEC. Daddy
                    </h3>
                    <p class="text-gray-600 text-sm">
                        Modélisation & Développement Web
                    </p>
                    <p class="text-gray-600 text-sm mt-1">+33 6 88 28 29 77</p>
                    <a
                        href="https://www.linkedin.com/in/daddy-barjeenio-mec-892196234/"
                        target="_blank"
                        class="text-blue-600 hover:underline text-sm mt-1 block"
                    >
                        Voir LinkedIn
                    </a>
                </div>

                <!-- Étudiant 4 -->
                <div class="bg-white rounded-lg shadow p-4">
                    <img
                        src="/src/assets/img/fifaliana.jpg"
                        alt="Fifaliana"
                        class="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                    />
                    <h3 class="text-gray-800 font-semibold text-lg">
                        RAN. Fifaliana
                    </h3>
                    <p class="text-gray-600 text-sm">Contenu & Recherche</p>
                    <p class="text-gray-600 text-sm mt-1">+33 7 71 53 27 57</p>
                    <a
                        href="https://www.linkedin.com/in/fifaliana-randrianjaka-8ab85423b/"
                        target="_blank"
                        class="text-blue-600 hover:underline text-sm mt-1 block"
                    >
                        Voir LinkedIn
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <Footer />
</template>

<style scoped>
section {
    font-family: "Poppins", sans-serif;
}
</style>
