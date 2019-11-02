import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "../views/index"
import Register from "../views/register"
import Login from "../views/login"
import notFond from '../views/404'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/index',
    },
    {
        path: '/index',
        name: 'index',
        // component: index
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/index.vue')
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '*',
        name: "404",
        component: notFond
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router