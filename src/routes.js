import forumPage from "@/view/forumPage.vue";
import statPage from "@/view/statPage.vue";
import chantierPage from "@/view/chantierPage.vue";
import homePage from "@/view/homePage.vue";
import about from "@/view/about.vue";
// import introPage from "@/view/introPage.vue";

export const routes = [
    // {
    //     path: "/",
    //     component: introPage,
    //     meta: { showNavbar: false }, // Cacher la navbar sur cette page
    // },
    {
        path: "/",
        component: homePage,
        meta: { showNavbar: false },
    },
    {
        path: "/About",
        component: about,
        meta: { showNavbar: true }, // Afficher la navbar sur cette page
    },
    {
        path: "/About",
        component: about,
        meta: { showNavbar: true }, // Afficher la navbar sur cette page
    },
    {
        path: "/chantierPage",
        component: chantierPage,
        meta: { showNavbar: true }, // Afficher la navbar sur cette page
    },
    {
        path: "/statPage",
        component: statPage,
        meta: { showNavbar: true }, // Afficher la navbar sur cette page
    },
    {
        path: "/forumPage",
        component: forumPage,
        meta: { showNavbar: true }, // Afficher la navbar sur cette page
    },
    {
        path: "/vieAssociative",
        name: "VieAssociative",
        component: () => import("@/view/vieAssociative.vue"),
        meta: { showNavbar: true },
    },
    {
        path: "/mobilite",
        name: "Mobilite",
        component: () => import("@/view/mobilite.vue"),
        meta: { showNavbar: true },
    },
    {
        path: "/toillete",
        name: "Toillete",
        component: () => import("@/view/toillete.vue"),
        meta: { showNavbar: true },
    },
    {
        path: "/formulairePage",
        name: "formulairePage",
        component: () => import("@/view/formulairePage.vue"),
        meta: { showNavbar: true },
    },
];
