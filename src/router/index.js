import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Design from '../views/Design.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
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
