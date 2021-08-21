import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

    {
        path: "/",
        name: "Home",
        component: () => import(/* webpackChunkName: "home" */ '../views/Home/Home.vue')
    },
    {
        path: "/daycare-reg",
        name: "Daycare-reg",
        component: () => import(/* webpackChunkName: "home" */ '../views/Daycare/Daycare.vue')
    },
    {
        path: "/daycare-packs",
        name: "Daycare-packs",
        component: () => import(/* webpackChunkName: "home" */ '../views/Daycare/Daycare-packages.vue')
    },
    {
        path: "/daycare-receipt",
        name: "Daycare-receipt",
        component: () => import(/* webpackChunkName: "home" */ '../views/Daycare/Daycare-receipt.vue')
    },
]

const router = new VueRouter({
    mode: "history",
    routes: routes
})

export default router