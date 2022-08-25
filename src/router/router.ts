import {createRouter, createWebHistory} from 'vue-router';
import vRegister from '@/views/Register/Register.view.vue'
import vLogin from '@/views/Login/Login.view.vue'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: vLogin
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