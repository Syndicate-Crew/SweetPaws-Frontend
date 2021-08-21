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



    //Channelling Routers
    {
        path: '/ch_usercard',
        name: 'ChViewChannel',
        component: () => import('../views/Channel/ChViewChannel.vue')
    },
    {
        path: '/ch_app',
        name: 'ChApp',
        component: () => import('../views/Channel/ChAppointment.vue')
    },
    {
        path: '/ch_formslot',
        name: 'ChNewChannelform',
        component: () => import('../views/Channel/ChNewChannel.vue')
    },
    {
        path: '/ch_manageslot',
        name: 'ChSlotManage',
        component: () => import('../views/Channel/CHMangeSlot.vue')
    },
]

const router = new VueRouter({
    mode: "history",
    routes: routes
})

export default router