import forumPage from "@/view/forumPage.vue";
import statPage from "@/view/statPage.vue";
import chantierPage from "@/view/chantierPage.vue";
import homePage from "@/view/homePage.vue";
import introPage from "@/view/introPage.vue";

export const routes = [
    {
        path: "/",
        component: introPage,
        meta: { showNavbar: false }, // Cacher la navbar sur cette page
    },
    {
        path: "/home",
        component: homePage,
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
    },
    {
        path: "/mobilite",
        name: "Mobilite",
        component: () => import("@/view/mobilite.vue"),
    },
    {
        path: "/toillete",
        name: "Toillete",
        component: () => import("@/view/toillete.vue"),
    },
];
