import {createRouter, createWebHistory, Router} from 'vue-router';
import vRegister from '@/views/register/Register.view.vue'
import vDashboard from '@/views/dashboard/Dashboard.view.vue'
import vLogin from '@/views/login/Login.view.vue';
import vSeasons from '@/views/dashboard/seasons/Seasons.view.vue'

const routes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: vDashboard,
        redirect: () => {
          return { name: 'Seasons'}
        },
        children: [
            {
                path: 'seasons',
                name: 'Seasons',
                component: vSeasons
            }
        ]
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

const router: Router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
