import MainPage from "@/pages/MainPage";
import PostsPage from "@/pages/PostsPage";
import About from "@/pages/About";
import {createRouter, createWebHistory} from "vue-router";
import PostIdPage from "@/pages/PostIdPage";

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/posts',
        component: PostsPage,
    },
    {
        path: '/posts/:id',
        component: PostIdPage,
    },
    {
        path: '/about',
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router