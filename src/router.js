import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import UploadPage from "@/pages/UploadPage.vue";
import AdminPage from "@/pages/AdminPage.vue";

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
        path: '/admin',
        component: AdminPage
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