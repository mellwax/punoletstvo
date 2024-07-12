import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import UploadPage from "@/pages/UploadPage.vue";
import MediaTest from "@/pages/MediaTest.vue";

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
        path: '/media-test',
        component: MediaTest
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