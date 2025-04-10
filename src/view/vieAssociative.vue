<template>
  <div
    class="flex flex-col lg:flex-row gap-6 h-auto lg:h-[639px] p-6 bg-gray-100"
  >
    <!-- Section du carrousel -->
    <div
      v-show="activeTab === 'carte'"
      class="w-full lg:w-1/2 shadow-md rounded-lg overflow-hidden relative"
    >
      <div class="relative w-full h-[300px] lg:h-full">
        <CarteThematique :image="images[currentIndex]" />
      </div>
      <!-- Contrôles du carrousel -->
      <button
        class="absolute top-1/2 left-2 transform -translate-y-1/2 px-4 py-2 bg-gray-700 text-white bg-opacity-50 hover:bg-opacity-75 rounded-full transition"
        @click="prevSlide('carte')"
        aria-label="Image précédente"
      >
        ‹
      </button>
      <button
        class="absolute top-1/2 right-2 px-4 py-2 bg-gray-700 text-white bg-opacity-50 hover:bg-opacity-75 rounded-full transition"
        @click="nextSlide('carte')"
        aria-label="Image suivante"
      >
        ›
      </button>
    </div>

    <div
      v-show="activeTab === 'resultats'"
      class="flex flex-col w-full lg:w-1/2 bg-white shadow-lg rounded-2xl p-15 relative"
    >
      <!-- Conteneur du graphique -->
      <div class="relative flex-grow min-h-[300px]">
        <canvas ref="chartCanvas" class="w-full h-full"></canvas>
      </div>

      <!-- Contrôles du graphique -->
      <button
        class="absolute top-1/2 left-3 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white bg-opacity-60 hover:bg-opacity-90 transition"
        @click="prevSlide('resultats')"
        aria-label="Graphique précédent"
      >
        ‹
      </button>
      <button
        class="absolute top-1/2 right-3 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white bg-opacity-60 hover:bg-opacity-90 transition"
        @click="nextSlide('resultats')"
        aria-label="Graphique suivant"
      >
        ›
      </button>
    </div>

    <!-- Texte associé à chaque slide -->
    <div
      class="w-full lg:w-1/2 bg-[#1e293b] shadow-md rounded-lg text-white flex flex-col"
    >
      <div class="p-6 flex-grow overflow-auto">
        <div v-if="activeTab === 'carte'">
          <!-- Badge -->
          <div
            class="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider bg-blue-900 text-blue-300 rounded-full"
          >
            CARTE
          </div>

          <!-- Titre -->
          <h1
            class="text-2xl md:text-3xl text-left font-poppins font-bold uppercase tracking-wide mb-2"
          >
            {{ images[currentIndex].title }}
          </h1>

          <!-- Ligne -->
          <hr class="border-gray-600 mb-4" />

          <!-- Texte -->
          <p
            class="text-base md:text-lg font-light leading-relaxed text-gray-300"
          >
            {{ images[currentIndex].description }}
          </p>
        </div>

        <div v-if="activeTab === 'resultats'">
          <!-- Badge -->
          <div
            class="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider bg-blue-900 text-blue-300 rounded-full"
          >
            STATISTIQUES
          </div>

          <!-- Titre -->
          <h1
            class="text-2xl md:text-3xl text-left font-poppins font-bold uppercase tracking-wide mb-2"
          >
            {{ resultImages[currentResultIndex].title }}
          </h1>

          <!-- Ligne -->
          <hr class="border-gray-600 mb-4" />

          <!-- Texte -->
          <p
            class="text-base md:text-lg font-light leading-relaxed text-gray-300"
          >
            {{ resultImages[currentResultIndex].description }}
          </p>
        </div>
      </div>

      <!-- Boutons de navigation -->
      <div class="grid grid-cols-2 mt-auto border-t border-gray-700">
        <button
          @click="activeTab = 'carte'"
          :class="{
            'bg-gray-900 text-white': activeTab === 'carte',
            'bg-gray-700 text-gray-300 hover:text-white': activeTab !== 'carte',
          }"
          class="flex items-center justify-center px-4 py-3 font-semibold rounded-bl-lg transition uppercase text-sm gap-2"
        >
          <i class="fas fa-map-marked-alt"></i> Carte
        </button>
        <button
          @click="activeTab = 'resultats'"
          :class="{
            'bg-gray-900 text-white': activeTab === 'resultats',
            'bg-gray-700 text-gray-300 hover:text-white':
              activeTab !== 'resultats',
          }"
          class="flex items-center justify-center px-4 py-3 font-semibold rounded-br-lg transition uppercase text-sm gap-2"
        >
          <i class="fas fa-chart-bar"></i> Statistiques
        </button>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { Chart, registerables } from "chart.js";
import Footer from "@/components/footer.vue";
import CarteThematique from "@/components/CarteThematique.vue";

// Images du carrousel
import videoIntro from "@/assets/img/image1.jpg";
import videoIntro2 from "@/assets/img/image2.jpg";
import videoIntro3 from "@/assets/img/image3.jpg";
import resultImage1 from "@/assets/img/1.jpg";
import resultImage2 from "@/assets/img/2.jpg";
import resultImage3 from "@/assets/img/3.jpg";

// Onglet actif
const activeTab = ref("carte");

// Données images et graphiques
const images = ref([
  {
    src: videoIntro,
    title: "préférence par genre des toilettes au sein du campus",
    description:
      "La carte révèle que le choix des toilettes sur le campus est largement déterminé par la propreté, l'hygiène et la proximité des installations par rapport aux lieux de travail ou d'études pour l'ensemble des usagers, qu'ils soient étudiants, enseignants ou personnels administratifs et techniques. Toutefois, pour les femmes, le critère de la présence de portes, garantissant intimité et sécurité, vient s'ajouter, alors que les hommes se montrent plus tolérants face à des portes défectueuses. Ainsi, malgré leur éloignement par rapport à leur lieu de travail ou d'étude, les toilettes de l'EMIT et de la Faculté de Médecine sont majoritairement privilégiées par les femmes.",
  },
  {
    src: videoIntro2,
    title: "ACTIVITÉS ASSOCIATIVES",
    description: "Description 2 des activités.",
  },
  {
    src: videoIntro3,
    title: "ÉVÉNEMENTS",
    description: "Description 3 sur les événements.",
  },
]);

const resultImages = ref([
  {
    src: resultImage1,
    title: "REPARTITION GENREE DES POSTES DE PRESIDENT DES ASSOCIATIONS",
    description: `
                    Le graphique met en évidence une forte prédominance masculine au poste de président des associations régionales, une tendance qui s'explique par des représentations culturelles où les rôles de leadership restent majoritairement attribués aux hommes.
Dans ce contexte, même si les décisions peuvent être prises collectivement, l’accès des femmes à la présidence reste limité par des habitudes et des croyances profondément ancrées. Cette dynamique, issue des structures sociales et familiales, influence les associations étudiantes, où la légitimité du pouvoir demeure souvent perçue comme masculine. Ainsi, la répartition observée ne relève pas seulement d’un choix individuel, mais s’inscrit dans un cadre social plus large qui façonne les opportunités et les attentes liées au genre.
“Les femmes n’ont pas le droit de... heu... d’être élues présidentes dans l’association... chez nous ! Mais j’sais pas chez les autres…” Témoignage tiré du mémoire de Mona FLOOD. 
                    `,

    chartData: {
      labels: ["Homme", "Femme"],
      data: [36, 1],
    },
  },
  {
    src: resultImage2,
    title: "REPARTITION GENREE DES MEMBRES DES ASSOCIATIONS",
    description: `
                    Le graphique met en évidence des différences de participation entre les hommes et les femmes dans les associations. Les hommes sont souvent plus présents, car l'engagement associatif, notamment dans les espaces de représentation et de prise de décision, est perçu comme un prolongement des responsabilités et de l'autorité qui leur sont socialement attribuées. À l'inverse, les femmes sont moins nombreuses en raison des attentes qui pèsent sur elles en matière de priorités académiques et familiales, ou encore par une moindre légitimité perçue dans ces espaces collectifs. Bien qu’elles adhèrent à ces associations pour bénéficier d’avantages personnels, tels qu’un logement gratuit, et d’une forme de protection sociale, elles subissent néanmoins diverses violences sexuelles et verbales tout au long de leur séjour, voire même des menaces d’expulsion.
« Premièrement ça m’aide à avoir un logement » « Je suis rentrée dans l’association pour les bâtiments » Témoignages tirés du mémoire de Mona FLOOD.
                    `,
    chartData: {
      labels: ["Homme", "Femme"],
      data: [43, 12],
    },
  },
  
]);

// Index des slides
const currentIndex = ref(0);
const currentResultIndex = ref(0);

// Navigation
const nextSlide = (type) => {
  if (type === "carte") {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
  } else if (type === "resultats") {
    currentResultIndex.value =
      (currentResultIndex.value + 1) % resultImages.value.length;
  }
};

const prevSlide = (type) => {
  if (type === "carte") {
    currentIndex.value =
      (currentIndex.value - 1 + images.value.length) % images.value.length;
  } else if (type === "resultats") {
    currentResultIndex.value =
      (currentResultIndex.value - 1 + resultImages.value.length) %
      resultImages.value.length;
  }
};

// Chart.js
Chart.register(...registerables);
const chartCanvas = ref(null);
let chartInstance = null;

const renderChart = () => {
  const current = resultImages.value[currentResultIndex.value];

  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(chartCanvas.value, {
    type: "bar",
    data: {
      labels: current.chartData.labels,
      datasets: [
        {
          label: current.title,
          data: current.chartData.data,
          backgroundColor: ["#9ad35a", "#FFFF00", "#fbbf24"],
          borderColor: "#000",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

onMounted(() => {
  renderChart();
});

watch(currentResultIndex, () => {
  renderChart();
});
</script>

<style scoped>
/* Transition fade optionnelle */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
