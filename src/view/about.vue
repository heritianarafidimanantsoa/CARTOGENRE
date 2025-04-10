<script setup>
import Footer from "@/components/footer.vue";

</script>

<template>
  <!-- NAVBAR -->
  <Navbar />

  <!-- SECTION A PROPOS -->
  <section class="min-h-screen bg-white py-16 px-6 md:px-16">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">
        À propos de CartoGenre
      </h1>
      <p class="text-gray-700 text-lg leading-relaxed mb-6">
        CartoGenre est une plateforme numérique dédiée à la visualisation et à la compréhension des inégalités de genre sur le campus universitaire d’Andrainjato, à Fianarantsoa, Madagascar. À travers une approche cartographique et immersive, ce projet donne à voir les expériences vécues, les pratiques sociales et les représentations liées aux rapports de genre dans l’espace académique.
      </p>

      <p class="text-gray-700 text-lg leading-relaxed mb-6">
        Né d’un projet de recherche universitaire dans le cadre du Chantier École, CartoGenre s’appuie sur des enquêtes de terrain, des témoignages et des données géographiques collectées auprès des étudiants et du personnel universitaire. Il s’agit d’un outil de sensibilisation, mais aussi d’un levier pour l’action en faveur de l’égalité, de l’équité et de l’inclusion dans les établissements d’enseignement supérieur.
      </p>

      <p class="text-gray-700 text-lg leading-relaxed">
        Ce projet collaboratif est porté par des étudiants, des enseignants-chercheurs et des partenaires engagés, désireux de faire évoluer les mentalités et les pratiques sur le campus, en rendant visibles les dynamiques de genre qui s’y jouent. À travers CartoGenre, nous affirmons qu’une meilleure compréhension des enjeux de genre peut contribuer à bâtir un environnement universitaire plus juste et plus respectueux pour toutes et tous.
      </p>
    </div>
  </section>

  <!-- FOOTER -->
  <Footer />
</template>

<style scoped>
section {
  font-family: 'Poppins', sans-serif;
}
</style>