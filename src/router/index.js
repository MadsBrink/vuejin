import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Design from '../views/Design.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/design',
        name: 'Design',
        component: Design,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
