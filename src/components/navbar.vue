<script setup></script>

<template>
    <nav
        class="top-0 border-solid border-gray-200 w-full border-b py-3 bg-primary z-50"
    >
        <div class="container mx-auto">
            <div class="w-full flex flex-col lg:flex-row">
                <div class="flex justify-between lg:flex-row">
                    <RouterLink to="/home" class="flex items-center space-x-2">
                        <img
                        src="../assets/img/ICOCG.png"
                        alt="Logo Cartogenre"
                        class="w-8 h-8 md:w-10 md:h-10"
                        />
                        <span
                            class="text-2xl font-poppins font-semibold text-gray-50"
                            >CARTOGENRE</span
                        >
                    </RouterLink>
                    <button
                        data-collapse-toggle="navbar-default-example"
                        type="button"
                        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default-example"
                        aria-expanded="false"
                    >
                        <span class="sr-only">Open main menu</span>
                        <svg
                            class="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    class="hidden w-full lg:flex lg:pl-11"
                    id="navbar-default-example"
                >
                    <ul
                        class="flex items-center flex-col mt-4 lg:mt-0 lg:ml-auto lg:flex-row gap-4"
                    >
                        <li>
                            <RouterLink
                                to="/chantierPage"
                                class="relative flex items-center justify-between text-gray-50 text-sm lg:text-base font-poppins font-medium hover:text-secondary transition-all duration-300 group mb-2 lg:mr-6 md:mb-0 md:mr-3"
                            >
                                <span> Le genre en pratiques</span>
                                <span
                                    class="absolute -bottom-1 left-1/2 w-0 transition-all duration-300 h-0.5 bg-secondary group-hover:w-1/2"
                                ></span>
                                <span
                                    class="absolute -bottom-1 right-1/2 w-0 transition-all duration-300 h-0.5 bg-secondary group-hover:w-1/2"
                                ></span>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink
                                to="/statPage"
                                class="relative flex items-center justify-between text-gray-50 text-sm lg:text-base font-poppins font-medium hover:text-secondary transition-all duration-300 group mb-2 lg:mr-6 md:mb-0 md:mr-3"
                            >
                                <span>Statistiques</span>
                                <span
                                    class="absolute -bottom-1 left-1/2 w-0 transition-all duration-300 h-0.5 bg-secondary group-hover:w-1/2"
                                ></span>
                                <span
                                    class="absolute -bottom-1 right-1/2 w-0 transition-all duration-300 h-0.5 bg-secondary group-hover:w-1/2"
                                ></span>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink
                                to="/forumPage"
                                class="relative flex items-center justify-between text-gray-50 text-sm lg:text-base font-poppins font-medium hover:text-secondary transition-all duration-300 group mb-2 lg:mr-6 md:mb-0 md:mr-3"
                            >
                                <span>Témoignage</span>
                                <span
                                    class="absolute -bottom-1 left-1/2 w-0 transition-all duration-300 h-0.5 bg-secondary group-hover:w-1/2"
                                ></span>
                                <span
                                    class="absolute -bottom-1 right-1/2 w-0 transition-all duration-300 h-0.5 bg-secondary group-hover:w-1/2"
                                ></span>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>
