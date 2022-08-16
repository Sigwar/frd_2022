import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.views.vue'
import vRegister from '@/views/Register/register.view.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/register',
        name: 'Register',
        component: vRegister,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router