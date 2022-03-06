import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/pages/MainPage";

const routes = [
    {
        path: '/',
        components: MainPage,
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;