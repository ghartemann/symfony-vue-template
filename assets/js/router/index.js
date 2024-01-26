import * as VueRouter from "vue-router";

import Home from "@pages/home/index.vue";
import NotFound from "@pages/not-found/index.vue";

const routes = [
    {
        path: "/",
        name: "homepage",
        component: Home,
    },
    // insert new routes here
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFound
    },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

export default router;
