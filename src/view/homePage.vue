<script setup>
import MapComponent from "@/components/maps.vue";
import Footer from "@/components/footer.vue";
import Navbar from "@/components/navbar.vue";

const services = [
    {
        icon: "fas fa-venus-mars",
        title: "COMPRENDRE LES INÉGALITÉS",
        description:
            "Explorer les inégalités systémiques pour identifier des pistes d'action concrètes.",
    },
    {
        icon: "fas fa-universal-access",
        title: "DEVELOPPER L'INCLUSION",
        description:
            "Favoriser l'accessibilité et la représentation équitable dans les espaces universitaires.",
    },
    {
        icon: "fas fa-balance-scale",
        title: "FAVORISER L'ÉQUITÉ",
        description:
            "Garantir des opportunités justes pour chaque individu au sein de la communauté académique.",
    },
];
</script>

<template>
    <Navbar />
    <!-- HERO avec background image -->
    <section class="w-full h-[100vh]">
        <!-- Grille d'images -->
        <div class="grid grid-cols-4 h-full w-full gap-0.3">
            <!-- Vidéo 1 -->
            <div class="relative w-full h-full">
                <video
                    class="absolute top-0 left-0 w-full h-full object-cover"
                    autoplay
                    muted
                    loop
                >
                    <source
                        src="http://www.cartogenre-uf.mastercmw.com/videos/video_1.mp4"
                        type="video/mp4"
                    />

                    Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
            </div>

            <!-- Vidéo 2 -->
            <div class="relative w-full h-full">
                <video
                    class="absolute top-0 left-0 w-full h-full object-cover"
                    autoplay
                    muted
                    loop
                >
                    <source
                        src="http://www.cartogenre-uf.mastercmw.com/videos/video_2.mp4"
                        type="video/mp4"
                    />

                    Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
            </div>

            <!-- Vidéo 3 -->
            <div class="relative w-full h-full">
                <video
                    class="absolute top-0 left-0 w-full h-full object-cover"
                    autoplay
                    muted
                    loop
                >
                    <source
                        src="https://cartogenre-uf.mastercmw.com/videos/video_3.mp4"
                        type="video/mp4"
                    />

                    Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
            </div>

            <!-- Vidéo 4 -->
            <div class="relative w-full h-full">
                <video
                    class="absolute top-0 left-0 w-full h-full object-cover"
                    autoplay
                    muted
                    loop
                >
                    <source
                        src="https://cartogenre-uf.mastercmw.com/videos/video_4.mp4"
                        type="video/mp4"
                    />

                    Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
            </div>
        </div>
        <div class="absolute inset-0 bg-black opacity-60 z-0"></div>
        <!-- Contenu superposé -->
        <div
            class="absolute inset-0 flex flex-col items-center justify-center space-y-6 z-10 w-full h-full max-w-[1200px] mx-auto"
        >
            <img
                src="../assets/img/LOGO CARTOGENRE.png"
                alt="Logo Cartogenre"
                class="w-24 h-auto mb-2"
            />
            <!-- Titre -->
            <h1
                class="font-poppins font-bold text-[2.5em] md:text-[5em] leading-tight text-primary mb-4"
            >
                CARTOGENRE
            </h1>

            <!-- Texte -->
            <p
                class="max-w-2xl text-sm md:text-base leading-relaxed font-light opacity-80 text-white items-center text-center"
            >
                Un site dédiée à la représentation des expériences vécues des
                inégalités entre FEMMES ET HOMMES, dans les pratiques, les
                traitements, la façon de penser et la manière d’être perçu par
                les autres sur le campus universitaire d’Andrainjato à
                Fianarantsoa Madagascar.
            </p>
        </div>
    </section>

    <!-- POINTS D'INTÉRÊT -->
    <section
        id="Service"
        class="h-[100vh] bg-gray-50 flex flex-col justify-center px-4 mb-0"
    >
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h1 class="text-4xl md:text-5xl font-bold text-gray-800">
                    Dans quel but ?
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
    <section class="relative w-full h-[100vh] bg-gray-50">
        <!-- Titre centré -->
        <div class="text-center mb-12">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800">
                Le campus universitaire d'Andrainjato en carte
            </h1>
            <div class="w-90 h-1 bg-primary mx-auto mt-4 mb-2"></div>
        </div>

        <!-- Conteneur carte + panneau -->
        <div class="relative flex container mx-auto">
            <!-- Carte -->
            <div class="w-full h-[639px] z-0">
                <MapComponent />
            </div>

            <!-- Panneau flottant -->
            <div
                class="absolute right-20 top-16 h-[539px] w-1/3 bg-white/30 backdrop-blur-sm rounded-3xl p-7 shadow-lg text-secondary flex flex-col justify-between z-10"
            >
                <div
                    class="text-justify text-lg font-poppins font-light overflow-y-auto max-h-[calc(100%-5px)] scrollbar-hidden"
                >
                    <div class="py-4">
                        <h2
                            class="text-2xl text-center font-poppins font-bold tracking-[.20em] mb-4"
                        >
                            L’Université de Fianarantsoa
                        </h2>
                        <p>
                            Cette carte représente le campus universitaire
                            d’Andrainjato à Fianarantsoa, notre principal lieu
                            d’étude. Elle permet de situer les différents
                            espaces fréquentés par les étudiants et étudiantes,
                            les enseignants et enseignantes ainsi que les
                            personnels administratifs et technique. La carte est
                            révélatrice des inégalités de genre sur le campus
                            car elle rend visibles, dans l’espace, des
                            disparités qui restent souvent invisibles dans les
                            pratiques quotidiennes : accès inégal aux lieux,
                            sentiment d’insécurité, préférence inégal d'un
                            endroit...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SUJET DE GENRE -->
    <section
        class="h-[100vh] bg-white flex items-center justify-center text-center px-4 mb-10 mt-25"
    >
        <div class="w-full flex flex-col items-center relative">
            <!-- Avatars en demi-arc avec hauteur définie -->
            <div
                class="relative w-full h-[400px] sm:h-[440px] md:h-[500px] lg:h-[540px] xl:h-[580px] mb-0"
            >
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
                class="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 px-4 max-w-4xl"
            >
                <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
                    Réveler les inégalités de genre sur le campus
                </h1>
                <p
                    class="text-gray-700 mb-4 text-base md:text-lg leading-relaxed font-normal"
                >
                    Il n’existe aucune loi qui établisse une différence entre
                    les sexes au sein de l’université de Fianarantsoa: hommes et
                    femmes sont traités de manière égale. Ce sont les pratiques
                    sociales des étudiants qui révèlent les inégalités.» Pr
                    Clarisse RASOAMAMPIONONA
                </p>
                <p
                    class="max-w-2xl text-sm md:text-base leading-relaxed font-light opacity-80 text-gray-700"
                >
                    L’égalité inscrite dans les textes ne suffit pas toujours à
                    garantir une réalité équitable. À l’université de
                    Fianarantsoa, ce ne sont pas les lois qui divisent, mais les
                    usages, les habitudes et les représentations qui traversent
                    la vie étudiante. C’est dans les détails du quotidien, les
                    ressentis et les façons d’occuper l’espace, que les
                    différences prennent forme. Comprendre ces nuances, souvent
                    invisibles mais bien présentes, demande de l'attention à ce
                    que l’on ne voit pas toujours au premier regard.
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
