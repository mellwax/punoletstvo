import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import UploadPage from "@/pages/UploadPage.vue";

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
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router