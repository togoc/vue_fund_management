import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../views/index"
import Register from "../views/register"
import Login from "../views/login"
import notFond from '../views/404'
import Info from "../views/info"
import Form from "../views/form"
import Home from '../views/home'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/index',
    },
    {
        path: '/index',
        name: 'Index',
        component: Index,
        children: [
            {path:'',component:Home},
            { path: "/info", name: "Info", component: Info },
            { path: "/form", name: "Form", component: Form }
        ]
    },
    {
        path: '/register',
        component: Register,
        name:"Register",
    },
    {
        path: '/login',
        name:"Login",
        component: Login
    },
    {
        path: '*',
        name: "notFond",
        component: notFond
    },
]




const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

//路由守卫
// router.beforeEach((to, from, next) => {
//     let isLogin = localStorage.getItem("token") ? true : false;
//     if (to.path == "/login" || to.path == '/register') {
//         next()
//     } else {
//         isLogin ? next() : next("/login")
//     }
// })

export default router