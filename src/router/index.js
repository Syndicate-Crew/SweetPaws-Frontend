import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

    {
        path: "/",
        name: "Home",
        component: () => import( /* webpackChunkName: "home" */ '../views/Home/Home.vue')
    },
    {
        path: "/daycare-reg",
        name: "Daycare-reg",
        component: () => import( /* webpackChunkName: "home" */ '../views/Daycare/Daycare.vue')
    },
    {
        path: "/daycare-packs",
        name: "Daycare-packs",
        component: () => import( /* webpackChunkName: "home" */ '../views/Daycare/Daycare-packages.vue')
    },
    {
        path: "/daycare-receipt",
        name: "Daycare-receipt",
        component: () => import( /* webpackChunkName: "home" */ '../views/Daycare/Daycare-receipt.vue')
    },

    //Channelling Routers
    {
        path: '/ch_usercard',
        name: 'ChViewChannel',
        component: () => import('../views/Channel/ChViewChannel.vue')
    },
    {
        path: '/ch_appointment:id',
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
    {
        path: '/ch_avachannel',
        name: 'ChAvaChannel',
        component: () => import('../views/Channel/ChAvailableChannel.vue')
    },
    {
        path: '/ch_avaslot',
        name: 'ChAvaSlot',
        component: () => import('../views/Channel/ChAvailableSlot.vue')
    },
    {
        path: '/ch_report',
        name: 'ChReport',
        component: () => import('../views/Channel/ChReport.vue')
    },
    {
        path: '/ch_request',
        name: 'ChChannelReq',
        component: () => import('../views/Channel/ChRequest.vue')
    },
    {
        path: '/ch_updateslot',
        name: 'ChUpdateSlot',
        component: () => import('../views/Channel/ChUpdateChannel.vue')
    },

    {
        path: '/ch_appointment',
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

    // Pet Management Routes
    {
        path: "/petmanagement-display",
        name: "petmanagement-display",
        component: () => import('../views/Pet/PetManagement-Display.vue')
    },
    {
        path: "/petmanagement-create",
        name: "petmanagementcreate",
        component: () => import('../views/Pet/PetManagement-Create')
    },
    {
        path: "/petmanagement-update/:id",
        name: "petmanagementupdate",
        component: () => import('../views/Pet/PetManagement-Update')
    },
]

const router = new VueRouter({
    mode: "history",
    routes: routes
})

export default router