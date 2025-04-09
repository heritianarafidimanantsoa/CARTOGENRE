<template>
    <footer class="bg-[#9AD35A] pt-10 pb-6">
        <div class="container mx-auto px-4">
            <div class="flex flex-wrap justify-between gap-y-8">
                <!-- Bloc principal -->
                <div class="w-full lg:w-6/12 px-4">
                    <h4 class="text-3xl font-bold text-white tracking-tight">
                        CARTOGENRE
                    </h4>
                    <h5 class="text-lg mt-2 text-white/90">
                        Mettez vos lunettes de genre
                    </h5>
                </div>

                <!-- Liens -->
                <div
                    class="w-full lg:w-6/12 px-4 flex flex-wrap justify-end gap-y-6"
                >
                    <!-- Liens utiles -->
                    <div class="w-full sm:w-6/12 lg:w-4/12 px-4">
                        <span
                            class="block uppercase text-white/80 text-sm font-semibold mb-3"
                        >
                            Liens utiles
                        </span>
                        <ul class="space-y-2">
                            <li>
                                <RouterLink
                                    to="/about"
                                    class="text-white hover:text-white/90 text-sm font-medium transition"
                                >
                                    À propos de nous
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink
                                    to="/chantierPage"
                                    class="text-white hover:text-white/90 text-sm font-medium transition"
                                >
                                    Le genre en pratiques
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink
                                    to="/statPage"
                                    class="text-white hover:text-white/90 text-sm font-medium transition"
                                >
                                    Statistiques
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink
                                    to="/forumPage"
                                    class="text-white hover:text-white/90 text-sm font-medium transition"
                                >
                                    Témoignage
                                </RouterLink>
                            </li>
                        </ul>
                    </div>

                    <!-- Autres ressources -->
                    <div class="w-full sm:w-6/12 lg:w-4/12 px-4">
                        <span
                            class="block uppercase text-white/80 text-sm font-semibold mb-3"
                        >
                            Autres ressources
                        </span>
                        <ul class="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    class="text-white hover:text-white/90 text-sm font-medium transition"
                                >
                                    Mentions légales
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="text-white hover:text-white/90 text-sm font-medium transition"
                                >
                                    Contactez-nous
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Ligne -->
            <hr class="my-8 border-white/40" />

            <!-- Copyright -->
            <div class="text-center">
                <p class="text-sm text-white/80">
                    &copy; 2025
                    <span
                        class="font-semibold text-white hover:text-white/90 transition"
                    >
                        CartoGenre
                    </span>
                    — Réalisé par
                    <span class="font-medium text-white hover:text-white/90 transition">
                    <a href="https://www.linkedin.com/in/heritiana-rafidimanantsoa/" target="_blank" class="hover:underline">RAF.Heritiana</a> · 
                    <a href="https://www.linkedin.com/in/ranto-fidinarivo/" target="_blank" class="hover:underline">FID.Ranto</a> · 
                    <a href="https://www.linkedin.com/in/daddy-barjeenio-mec-892196234/" target="_blank" class="hover:underline">MEC.Daddy</a> · 
                    <a href="https://www.linkedin.com/in/fifaliana-randrianjaka-8ab85423b/" target="_blank" class="hover:underline">RAN.Fifaliana</a>
</span>
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup></script>

<style scoped></style>
