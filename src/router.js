import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import UploadPage from "@/pages/UploadPage.vue";
import TestPage from "@/pages/TestPage.vue";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/upload',
        component: UploadPage
    },
    {
        path: '/test',
        component: TestPage
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router