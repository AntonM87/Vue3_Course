import MainPage from "@/pages/MainPage";
import PostsPage from "@/pages/PostsPage";
import PostsPageWithStore from "@/pages/PostsPageWithStore";
import PostsPageCompositionAPI from '@/pages/PostsPageCompositionAPI';
import About from "@/pages/About";
import PostIdPage from "@/pages/PostIdPage";
import {createRouter, createWebHistory} from "vue-router";

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
    {
        path: '/store',
        component: PostsPageWithStore,
    },
    {
        path: '/composition',
        component: PostsPageCompositionAPI,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router