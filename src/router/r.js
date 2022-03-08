import MainPage from "@/pages/MainPage";
import PostsPage from "@/pages/PostsPage";
import About from "@/pages/About";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path:'/',
        component: MainPage,
    },
{
        path: '/posts',
        component: PostsPage,
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