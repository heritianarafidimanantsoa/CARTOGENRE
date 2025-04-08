<script setup>
import MapComponent from "@/components/maps.vue";
import Footer from "@/components/footer.vue";

const services = [
  {
    icon: "fas fa-venus-mars",
    title: "INÉGALITÉ DE GENRE",
    description:
      "Explorer les inégalités systémiques pour identifier des pistes d'action concrètes.",
  },
  {
    icon: "fas fa-universal-access",
    title: "INCLUSION",
    description:
      "Favoriser l'accessibilité et la représentation équitable dans les espaces universitaires.",
  },
  {
    icon: "fas fa-balance-scale",
    title: "ÉQUITÉ",
    description:
      "Garantir des opportunités justes pour chaque individu au sein de la communauté académique.",
  },
];
</script>

<template>
  <!-- HERO avec background image -->
  <section class="relative w-full h-[639px]">
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 w-full h-full object-cover z-0"
    >
      <source src="@/assets/img/viedeoacceuille.mp4" type="video/mp4" />
      Votre navigateur ne supporte pas la vidéo.
    </video>
    <div class="absolute inset-0 bg-black opacity-80 z-0"></div>
    <div
      class="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 z-10"
    >
      <h1
        class="font-poppins font-bold text-[2.5em] md:text-[5em] leading-tight text-primary mb-4"
      >
        CARTOGENRE
      </h1>

      <p
        class="max-w-3xl text-base md:text-xl leading-relaxed font-semibold mb-2"
      >
        Une plateforme cartographique dédiée à la représentation des expériences
        vécues des inégalités entre FEMMES ET HOMMES, dans les pratiques, les
        traitements, la façon de penser et la manière d’être perçu par les
        autres sur le campus universitaire d’Andrainjato à Fianarantsoa
        Madagascar.
      </p>

      <p
        class="max-w-2xl text-sm md:text-base leading-relaxed font-light opacity-80"
      >
        Ce site s'appuie sur les résultats d'enquêtes et de cartographies menées
        dans le cadre du projet Chantier École cartographie des pratiques
        genrées. Les informations issues de ces travaux nourrissent la réflexion
        présentée ici, permettant de mettre en lumière les réalités liées à
        l'égalité et aux représentations sociales sur le campus d'Andrainjato.
      </p>
    </div>
  </section>

  <!-- SUJET DE GENRE -->
  <section
    class="h-[639px] bg-white flex items-center justify-center text-center px-4"
  >
    <div class="w-full flex flex-col items-center relative">
      <!-- Avatars en demi-arc avec hauteur définie -->
      <div class="relative w-full h-[440px] mb-0">
        <!-- Gauche bas -->
        <img
          src="@/assets/img/avatar1.svg"
          class="w-32 h-32 rounded-full absolute top-[55%] left-[8%] transform -translate-y-1/2 border-4 border-white shadow"
        />
        <!-- Gauche haut -->
        <img
          src="@/assets/img/avatar4.svg"
          class="w-32 h-32 rounded-full absolute top-[20%] left-[22%] transform -translate-y-1/2 border-4 border-white shadow"
        />
        <!-- Centre -->
        <img
          src="@/assets/img/avatar2.svg"
          class="w-40 h-40 rounded-full absolute top-[-5%] left-1/2 transform -translate-x-1/2 border-4 border-white shadow z-10"
        />
        <!-- Droite haut -->
        <img
          src="@/assets/img/avatar5.svg"
          class="w-32 h-32 rounded-full absolute top-[20%] right-[22%] transform -translate-y-1/2 border-4 border-white shadow"
        />
        <!-- Droite bas -->
        <img
          src="@/assets/img/avatar6.svg"
          class="w-32 h-32 rounded-full absolute top-[55%] right-[8%] transform -translate-y-1/2 border-4 border-white shadow"
        />
      </div>

      <!-- Texte centré sous les avatars -->
      <div
        class="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 px-4 max-w-xl"
      >
        <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Réveler les inégalités de genre sur le campus
        </h1>
        <p
          class="text-gray-700 mb-4 text-base md:text-lg leading-relaxed font-normal"
        >
          La culture malgache assigne des rôles distincts à l’homme et à la
          femme. Ces distinctions façonnent les attentes et les inégalités dans
          la société contemporaine.
        </p>

        <!-- On isole le bouton avec du padding top -->
        <div class="pt-6">
          <RouterLink
            to="/chantierPage"
            class="bg-secondary hover:bg-secondary/90 text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow-md"
          >
            Découvrir
          </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <!-- POINTS D'INTÉRÊT -->
  <section
    id="Service"
    class="h-[639px] bg-gray-50 flex flex-col justify-center"
  >
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800">
          Nos objectifs
        </h1>
        <div class="w-24 h-1 bg-primary mx-auto mt-4 mb-2"></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="bg-white p-6 rounded-xl text-center shadow hover:shadow-lg transition duration-300"
        >
          <div class="text-primary text-5xl mb-4">
            <i :class="service.icon"></i>
          </div>
          <h4 class="text-xl font-semibold text-gray-800 mb-2">
            {{ service.title }}
          </h4>
          <p class="text-gray-600 text-sm leading-relaxed">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- MAP + TEXTE -->
  <section class="relative w-full bg-gray-50">
    <!-- Titre centré -->
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-800">
        Le campus universitaire d'Andrainjato en carte
      </h1>
      <div class="w-24 h-1 bg-primary mx-auto mt-4 mb-2"></div>
    </div>

    <!-- Conteneur carte + panneau -->
    <div class="relative flex container mx-auto">
      <!-- Carte -->
      <div class="w-full h-[639px] z-0">
        <MapComponent />
      </div>

      <!-- Panneau flottant -->
      <!-- <div
                class="absolute right-20 top-16 h-[539px] w-1/3 bg-white/30 backdrop-blur-sm rounded-3xl p-7 shadow-lg text-secondary flex flex-col justify-between z-10"
            >
                <div
                    class="text-left text-lg font-poppins font-light overflow-y-auto max-h-[calc(100%-5px)] scrollbar-hidden"
                >
                    <div class="py-4">
                        <h2
                            class="text-xl text-center font-poppins font-bold tracking-[.20em] mb-4"
                        >
                            L’Université de Fianarantsoa en action
                        </h2>
                        <p>
                            Dans le cadre du projet de cartographie "Madatlas",
                            l'Université de Fianarantsoa se penche sur les
                            questions d'égalité, d'inégalité de genre et
                            d'équité au sein de son campus. Cette carte vise à
                            représenter de manière détaillée les différents
                            espaces du campus, en s'appuyant sur les recherches
                            menées autour des dynamiques de genre. Elle inclut
                            les établissements et les composantes académiques de
                            l'université, les espaces administratifs, ainsi que
                            les lieux couramment fréquentés par les étudiants,
                            le personnel enseignant et administratif. Chaque
                            zone cartographiée a fait l'objet d'une analyse
                            approfondie sur les réalités de genre, permettant
                            ainsi de visualiser et de comprendre comment ces
                            espaces influencent les interactions, les
                            perceptions et les pratiques de genre au quotidien.
                            Ce projet offre ainsi une réflexion sur les
                            inégalités et les enjeux d'équité présents dans les
                            différents lieux de vie universitaire.
                        </p>
                    </div>
                </div>
            </div> -->
    </div>
  </section>

  <Footer class="mt-16" />
</template>

<style scoped>
.scrollbar-hidden::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.scrollbar-hidden::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.scrollbar-hidden::-webkit-scrollbar-track {
  background-color: transparent;
}

.scrollbar-hidden {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
}
</style>
