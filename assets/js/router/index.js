import * as VueRouter from "vue-router";

const routes = [
    {
        path: "/",
        name: "homepage",
        component: () => import("@pages/home/index.vue"),
    },
    // insert new routes here
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import("@pages/not-found/index.vue"),
    },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

export default router;
