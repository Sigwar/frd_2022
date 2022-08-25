import {createRouter, createWebHistory} from 'vue-router';
import vRegister from '@/views/Register/Register.view.vue'
import vDashboard from '@/views/Dashboard/Dashboard.view.vue'
import vLogin from '@/views/Login/Login.view.vue';

const routes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: vDashboard
    },
    {
        path: '/register',
        name: 'Register',
        component: vRegister,
    },
    {
        path: '/login',
        name: 'Login',
        component: vLogin
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router