<!-- <button
    class="absolute top-1/2 left-2 transform -translate-y-1/2 px-4 py-2 bg-gray-700 text-white bg-opacity-50 hover:bg-opacity-75 rounded-full transition"
    @click="prevSlide('carte')"
>
                ‹
            </button>
<button
    class="absolute top-1/2 right-2 px-4 py-2 bg-gray-700 text-white bg-opacity-50 hover:bg-opacity-75 rounded-full transition"
    @click="nextSlide('carte')"
>
                ›
            </button> -->

<!-- <div class="item">
                    <img
                        src="../assets/icon/quote-mark-svgrepo-com.svg"
                        class="absolute top-2 right-8 opacity-50 w-12 h-12"
                    />
                    <h1>slider 2</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores odit cum, voluptas dolorem mollitia delectus
                    tenetur quibusdam ab ipsam quis ipsum odio vitae, quasi
                    soluta nisi ipsa voluptate perferendis ullam.
                </div>
                <div class="item">
                    <img
                        src="../assets/icon/quote-mark-svgrepo-com.svg"
                        class="absolute top-2 right-8 opacity-50 w-12 h-12"
                    />
                    <h1>slider 3</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores odit cum, voluptas dolorem mollitia delectus
                    tenetur quibusdam ab ipsam quis ipsum odio vitae, quasi
                    soluta nisi ipsa voluptate perferendis ullam.
                </div>
                <div class="item">
                    <img
                        src="../assets/icon/quote-mark-svgrepo-com.svg"
                        class="absolute top-2 right-8 opacity-50 w-12 h-12"
                    />
                    <h1>slider 4</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores odit cum, voluptas dolorem mollitia delectus
                    tenetur quibusdam ab ipsam quis ipsum odio vitae, quasi
                    soluta nisi ipsa voluptate perferendis ullam.
                </div>
                <div class="item">
                    <img
                        src="../assets/icon/quote-mark-svgrepo-com.svg"
                        class="absolute top-2 right-8 opacity-50 w-12 h-12"
                    />
                    <h1>slider 5</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores odit cum, voluptas dolorem mollitia delectus
                    tenetur quibusdam ab ipsam quis ipsum odio vitae, quasi
                    soluta nisi ipsa voluptate perferendis ullam.
                </div>
                <div class="item">
                    <img
                        src="../assets/icon/quote-mark-svgrepo-com.svg"
                        class="absolute top-2 right-8 opacity-50 w-12 h-12"
                    />
                    <h1 class="pt-10">slider 6</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores odit cum, voluptas dolorem mollitia delectus
                    tenetur quibusdam ab ipsam quis ipsum odio vitae, quasi
                    soluta nisi ipsa voluptate perferendis ullam.
                </div> -->

<script setup>

let items = document.querySelectorAll(".slider .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let active = 3;
function loadShow(){
    let stt = 0;
        items[active].style.transform = 'none';
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
    for(var i = active + 1; i < items.length; i++){
        stt++;
        items[i].style.transform = translateX(${120*sst}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg);
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = sst > 2 ? 0 : 0.6;
    }
    stt = 0;
    for(var i = active - 1; i >= 0; i--){
        stt++;
        items[i].style.transform = translateX(${-120*sst}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg);
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = sst > 2 ? 0 : 0.6;
    }
}
loadShow();
next.onclick = function(){
    active = active + 1 < items.length ? active +1 : active;
    loadShow();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}
</script>

<script setup>
let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .list");
let thumbnailDom = document.querySelector(".carousel .thumbnail");

nextDom.onclick = function () {
    showSlider("next");
};
prevDom.onclick = function () {
    showSlider;
};

let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let timeAutoRun;
function showSlider(type) {
    let itemSlider = document.querySelectorAll(".carousel .list .item");
    let itemthumbnail = document.querySelectorAll(".carousel .thumbnail .item");

    if (type === "next") {
        listItemDom.appendChils(itemSlider[0]);
        thumbnailDom.appendChils(itemthumbnail[0]);
        carouselDom.classList.add("next");
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prevend(itemSlider[positionLastItem]);
        thumbnailDom.prevend(itemthumbnail[positionLastItem]);
        carouselDom.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
    }, timeRunning);
    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}
</script>

<template>
    <!-- carousel -->
    <div class="carousel">
        <!-- list item -->
        <div class="list">
            <div class="item">
                <img src="@/assets/img/1.jpg" alt="" />
                <div class="content">
                    <div class="author">les Genres dans</div>
                    <div class="title">THEMATIQUE</div>
                    <div class="topic">VIE ASSOCCIATIVE</div>
                    <div class="des">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt sint natus excepturi recusandae temporibus
                        exercitationem maiores! Illum facilis quis nostrum
                        laborum cupiditate, id sint repellat tenetur ab, maxime,
                        at doloribus!
                    </div>
                    <div class="buttons">
                        <button>EN SAVOIR PLUS</button>
                        <button>DOCUMENTAIRE</button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="@/assets/img/2.jpg" alt="" />
                <div class="content">
                    <div class="author">les Genres dans</div>
                    <div class="title">THEMATIQUE</div>
                    <div class="topic">VIE ASSOCCIATIVE</div>
                    <div class="des">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt sint natus excepturi recusandae temporibus
                        exercitationem maiores! Illum facilis quis nostrum
                        laborum cupiditate, id sint repellat tenetur ab, maxime,
                        at doloribus!
                    </div>
                    <div class="buttons">
                        <button>EN SAVOIR PLUS</button>
                        <button>DOCUMENTAIRE</button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="@/assets/img/3.jpg" alt="" />
                <div class="content">
                    <div class="author">les Genres dans</div>
                    <div class="title">THEMATIQUE</div>
                    <div class="topic">VIE ASSOCCIATIVE</div>
                    <div class="des">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt sint natus excepturi recusandae temporibus
                        exercitationem maiores! Illum facilis quis nostrum
                        laborum cupiditate, id sint repellat tenetur ab, maxime,
                        at doloribus!
                    </div>
                    <div class="buttons">
                        <button>EN SAVOIR PLUS</button>
                        <button>DOCUMENTAIRE</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- thumbnail -->
        <div class="thumbnail">
            <div class="item">
                <img src="@/assets/img/1.jpg" alt="" />
                <div class="content">
                    <div class="title">Name Slider</div>
                    <div class="des">Description</div>
                </div>
            </div>
            <div class="item">
                <img src="@/assets/img/2.jpg" alt="" />
                <div class="content">
                    <div class="title">Name Slider</div>
                    <div class="des">Description</div>
                </div>
            </div>
            <div class="item">
                <img src="@/assets/img/3.jpg" alt="" />
                <div class="content">
                    <div class="title">Name Slider</div>
                    <div class="des">Description</div>
                </div>
            </div>
            <div class="item">
                <img src="@/assets/img/1.jpg" alt="" />
                <div class="content">
                    <div class="title">Name Slider</div>
                    <div class="des">Description</div>
                </div>
            </div>
        </div>
        <!-- arrows -->
        <div class="arrows">
            <button class="prev"><</button>
            <button class="next">></button>
        </div>
        <div class="time"></div>
    </div>
</template>

<style setup>
.carousel {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
}
.carousel .list .item {
    padding: absolute;
    inset: 0 0 0 0;
}
.carousel .list .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.carousel .list .item .content {
    position: absolute;
    top: 20%;
    width: 1140px;
    max-width: 80%;
    left: 50%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
}
.carousel .list .item .content .author {
    font-weight: bold;
    letter-spacing: 10px;
}
.carousel .list .item .content .title,
.carousel .list .item .content .topic {
    font-weight: bold;
    font-size: 4em;
    line-height: 1.3em;
}
.carousel .list .item .content .topic {
    color: #9ad35a;
}
.carousel .list .item .content .buttons {
    display: grid;
    grid-template-columns: repeat(2, 190px);
    grid-template-rows: 40px;
    gap: 5px;
    margin-top: 20px;
}
.carousel .list .item .content button {
    border: none;
    background-color: #eee;
    letter-spacing: 3px;
    font-family: Poppins;
    font-weight: 500;
}
.carousel .list .item .content button:nth-child(2) {
    background-color: transparent;
    color: #582c4d;
    border: 1px solid #582c4d;
}
/* thumbnail */
.thumbnail {
    position: absolute;
    bottom: 50px;
    left: 50%;
    width: max-content;
    z-index: 100;
    display: flex;
    gap: 20px;
}
.thumbnail .item {
    width: 150px;
    height: 220px;
    flex-shrink: 0;
    position: relative;
}
.thumbnail .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}
.thumbnail .item .content {
    position: absolute;
    color: #fff;
    bottom: 10px;
    left: 10px;
    right: 10px;
}
.thumbnail .item .content .title {
    font-weight: bold;
}
/* arrows */
.arrows {
    position: absolute;
    top: 80%;
    right: 52%;
    width: 300px;
    max-width: 30%;
    display: flex;
    gap: 10px;
    align-items: center;
}
.arrows button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #eee4;
    border: none;
    font-family: monospace;
    color: #fff;
    font-weight: bold;
    font-size: large;
    transition: 0.5s;
    z-index: 100;
}
.arrows button:hover {
    background-color: #eee;
    color: #555;
}
.carousel .list .item:nth-child(1) {
    z-index: 1;
}
.carousel .list .item:nth-child(1) .author,
.carousel .list .item:nth-child(1) .title,
.carousel .list .item:nth-child(1) .topic,
.carousel .list .item:nth-child(1) .des,
.carousel .list .item:nth-child(1) .buttons {
    transform: translateY(50px);
    filter: blur(20px);
    opacity: 0;
    animation: showContent 0.5s 1s linear 1 forwards;
}
@keyframes showContent {
    to {
        opacity: 1;
        filter: blur(0);
        transform: translateY(0);
    }
}
.carousel .list .item:nth-child(1) .title {
    animation-delay: 1.2s;
}
.carousel .list .item:nth-child(1) .topic {
    animation-delay: 1.4s;
}
.carousel .list .item:nth-child(1) .des {
    animation-delay: 1.6s;
}
.carousel .list .item:nth-child(1) .buttons {
    animation-delay: 1.8s;
}
/* effect next clik  */
.carousel.next .item:nth-child(1) img {
    width: 150px;
    height: 220px;
    position: absolute;
    left: 50%;
    bottom: 50%;
    animation: showImage 0.5s linear 1 forwards;
}
@keyframes showImage {
    to {
        width: 100%;
        height: 100%;
        left: 0;
        bottom: 0;
        border-radius: 0;
    }
}
.carousel.next .thumbnail .item:nth-child(1) {
    width: 0;
    overflow: hidden;
    animation: showThumbnail 0.5s linear 1 forwards;
}
@keyframes showThumbnail {
    to {
        width: 150px;
    }
}
.carousel.next .thumbnail {
    transform: translateY(150px);
    animation: transformThumbnail 0.5s linear 1 forwards;
}
@keyframes transformThumbnail {
    to {
        transform: translateX(0);
    }
}
/* effect prev clik  */
.carousel.prev .list .item:nth-child(2) {
    z-index: 2;
}
.carousel.prev .list .item:nth-child(2) img {
    position: absolute;
    bottom: 0;
    left: 0;
    animation: outImage 0.5s linear 1 forwards;
}
@keyframes transformThumbnail {
    to {
        width: 150;
        height: 220px;
        border-radius: 20px;
        left: 50%;
        bottom: 50px;
    }
}
.carousel.prev .thumbnail .item:nth-child(1) {
    width: 0;
    overflow: hidden;
    opacity: 0;
    animation: showTumbnail 0.5s linear 1 forwards;
}
.carousel.prev
    .list
    .item:nth-child(2)
    .author
    .carousel.prev
    .list
    .item:nth-child(2)
    .title
    .carousel.prev
    .list
    .item:nth-child(2)
    .topic
    .carousel.prev
    .list
    .item:nth-child(2)
    .des
    .carousel.prev
    .list
    .item:nth-child(2)
    .buttons {
    animation: contentOut 1.5s linear 1 forwards;
}
@keyframes contentOut {
    to {
        transform: translateX(-150px);
        filter: blur(20px);
        opacity: 0;
    }
}
.carousel.next .arrows button,
.carousel.prev .arrows button {
    pointer-events: none;
}
/* time */
time {
    width: 0%;
    height: 5px;
    background-color: #f1683a;
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
}
.carousel.next .time,
.carousel.prev .time {
    width: 100%;
    animation: timeRunning 2s linear 1 forwards;
}
@keyframes timeRunning {
    to {
        width: 0;
    }
}
@media screen and (max-width: 678px) {
    .carousel .list .item .content {
        padding-right: 0;
    }
    .carousel .list .item .content .title {
        font-size: 30px;
    }
}
</style>

<template>
    <div id="map" class="w-full h-[639px]"></div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { Chart, registerables } from "chart.js";

// Reçois l'activeTab comme prop
const props = defineProps({
    activeTab: {
        type: String,
        default: "etudiant", // Valeur par défaut "etudiant"
    },
});

Chart.register(...registerables);

// Utilisation de `activeTab` pour générer dynamiquement le titre
const selectedFonction = ref(props.activeTab); // Gérer dynamiquement les types (etudiant, enseignant, pat)

watch(
    () => props.activeTab,
    (newValue) => {
        selectedFonction.value = newValue; // Mettre à jour `selectedFonction` à chaque changement de `activeTab`
    }
);

onMounted(() => {
    if (!window.L) {
        console.error("❌ Leaflet non chargé !");
        return;
    }

    const map = L.map("map", { scrollWheelZoom: false }).setView(
        [-21.4633723, 47.1121022],
        15
    );

    L.tileLayer("https://warper.wmflabs.org/maps/tile/8475/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    fetch("/geojson/mobilit.geojson")
        .then((res) => res.json())
        .then((data) => {
            const geoJSONLayer = L.geoJSON(data, {
                pointToLayer: (feature, latlng) => {
                    const name = feature.properties.name || "Lieu inconnu";
                    const icon = L.icon({
                        iconUrl:
                            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [0, -41],
                    });

                    const marker = L.marker(latlng, { icon }).addTo(map);

                    const label = L.divIcon({
                        className: "marker-label text-center text-xs font-bold",
                        html: `<div class="text-center">${name}</div>`,
                        iconSize: [100, 30],
                        iconAnchor: [50, 0],
                    });

                    L.marker(latlng, { icon: label }).addTo(map);

                    return marker;
                },

                onEachFeature: (feature, layer) => {
                    if (
                        feature.geometry.type === "Point" &&
                        feature.properties?.chartData
                    ) {
                        const chartData = feature.properties.chartData;
                        const name = feature.properties.name || "Lieu inconnu";
                        const uniqueId = Math.random()
                            .toString(36)
                            .substring(2, 9);
                        const chartIdPrefix = `chart-${uniqueId}`;

                        // Dynamique : Utiliser selectedFonction pour accéder aux bonnes données (etudiant, enseignant, pat)
                        const mentions = Object.keys(
                            chartData[selectedFonction.value] || {}
                        );
                        const mentionOptions = mentions
                            .map(
                                (m, i) =>
                                    `<option value="${m}"${
                                        i === 0 ? " selected" : ""
                                    }>${m.toUpperCase()}</option>`
                            )
                            .join("");

                        const popupContent = `
    <div class="p-4 space-y-3 w-72 flex flex-col max-h-[500px] overflow-y-auto">
        <!-- Titre dynamique h1 -->
       <h1 class="text-center text-2xl font-bold mb-4">{{ currentTabLabel }}</h1>

        <!-- Titre existant h3 avec nom -->
        <h3 id="chartTitle-${uniqueId}" class="text-center text-lg font-semibold mb-2">${name} - ${selectedFonction.value}</h3>

        <div class="flex items-center justify-between mb-4">
            <span class="font-medium">Mention:</span>
            <select id="mentionSelect-${uniqueId}" class="border border-gray-300 rounded px-2 py-1 text-sm">
                ${mentionOptions}
            </select>
            <button id="toggleSelector-${uniqueId}" class="rounded-none border-2 border-blue-500 text-blue-500 py-1 px-4 hover:bg-blue-500 hover:text-white transition-all duration-300">
                Données Globales
            </button>
        </div>

        <div class="relative w-full h-64">
            <canvas id="${chartIdPrefix}-active" class="popup-chart absolute inset-0"></canvas>
        </div>
    </div>
`;

                        layer.bindPopup(popupContent, { maxWidth: 300 });

                        layer.on("popupopen", () => {
                            // Assurer que Vue met à jour le titre après l'ouverture du popup
                            setTimeout(() => {
                                const title = document.getElementById(
                                    `chartTitle-${uniqueId}`
                                );
                                title.innerText = `${name} - ${
                                    selectedFonction.value
                                        .charAt(0)
                                        .toUpperCase() +
                                    selectedFonction.value.slice(1)
                                }`;
                            }, 100);
                        });

                        layer.bindPopup(popupContent, { maxWidth: 300 });

                        layer.on("popupopen", () => {
                            setTimeout(() => {
                                const title = document.getElementById(
                                    `chartTitle-${uniqueId}`
                                );
                                const mentionSelect = document.getElementById(
                                    `mentionSelect-${uniqueId}`
                                );
                                const toggleButton = document.getElementById(
                                    `toggleSelector-${uniqueId}`
                                );
                                const activeCanvas = document.getElementById(
                                    `${chartIdPrefix}-active`
                                );

                                let currentChart;

                                const renderChart = (type) => {
                                    if (currentChart) {
                                        currentChart.destroy();
                                    }

                                    let data, labels;
                                    let label = "";
                                    if (type === "globale") {
                                        data = chartData.donneesGlobale?.data;
                                        labels =
                                            chartData.donneesGlobale?.labels;
                                        label = "Données Globales";
                                    } else {
                                        data =
                                            chartData[selectedFonction.value]?.[
                                                type
                                            ]?.data;
                                        labels =
                                            chartData[selectedFonction.value]?.[
                                                type
                                            ]?.labels;
                                        label = type.toUpperCase();
                                    }

                                    if (!data || !labels) {
                                        console.warn(
                                            `❌ Données manquantes pour ${type}`
                                        );
                                        return;
                                    }

                                    title.innerText = `${name} - ${label}`;

                                    currentChart = new Chart(activeCanvas, {
                                        type: "bar",
                                        data: {
                                            labels: labels,
                                            datasets: [
                                                {
                                                    label: "Masculin",
                                                    data: data.map(
                                                        (d) => d.masculin
                                                    ),
                                                    backgroundColor: "#3b82f6",
                                                    borderRadius: 6,
                                                },
                                                {
                                                    label: "Féminin",
                                                    data: data.map(
                                                        (d) => d.feminin
                                                    ),
                                                    backgroundColor: "#ec4899",
                                                    borderRadius: 6,
                                                },
                                            ],
                                        },
                                        options: {
                                            responsive: true,
                                            maintainAspectRatio: false,
                                            animation: {
                                                duration: 600,
                                                easing: "easeInOutQuart",
                                            },
                                            scales: {
                                                y: {
                                                    beginAtZero: true,
                                                    ticks: { stepSize: 10 },
                                                },
                                            },
                                            plugins: {
                                                legend: { position: "top" },
                                            },
                                        },
                                    });
                                };

                                mentionSelect?.addEventListener(
                                    "change",
                                    (e) => {
                                        renderChart(e.target.value);
                                    }
                                );

                                toggleButton?.addEventListener("click", () => {
                                    renderChart("globale");
                                });

                                const defaultMention =
                                    mentionSelect?.value || mentions[0];
                                renderChart(defaultMention);
                            }, 100);
                        });
                    }
                },
            }).addTo(map);

            map.fitBounds(geoJSONLayer.getBounds());
        })
        .catch((error) => {
            console.error(
                "❌ Erreur lors du chargement du fichier GeoJSON :",
                error
            );
        });
});
</script>

<style scoped>
#map {
    width: 100%;
    height: 100%;
}
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
.popup-chart {
    display: block;
    width: 100% !important;
    height: 0;
    flex-grow: 1;
}
.fade-in {
    animation: fadeIn 0.4s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>
