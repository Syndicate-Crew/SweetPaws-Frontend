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
        name: "daycare-receipt",
        component: () => import( /* webpackChunkName: "home" */ '../views/Daycare/Daycare-receipt.vue')
    },
    {
        path: "/daycare-details",
        name: "daycare-details",
        component: () => import( /* webpackChunkName: "home" */ '../views/Daycare/Daycare-details.vue')
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
        path: '/petdisplay',
        name: 'pet display',
        component: () => import('../views/Pet/Pet Management/Pet Display.vue')
    },
    // Dog Management Routes
    {
        path: '/dogcreate',
        name: 'dog create',
        component: () => import('../views/Pet/Dog Management/Dog Create.vue')
    },
    {
        path: '/dogdisplay',
        name: 'dog display',
        component: () => import('../views/Pet/Dog Management/Dog Display.vue')
    },
    {
        path: '/dogupdate',
        name: 'dog update',
        component: () => import('../views/Pet/Dog Management/Dog Update.vue')
    },
    {
        path: '/dogbreedcreate',
        name: 'dog breed create',
        component: () => import('../views/Pet/Dog Management/Dog Breed Create.vue')
    },
    {
        path: '/dogbreeddisplay',
        name: 'dog breed display',
        component: () => import('../views/Pet/Dog Management/Dog Breed Display.vue')
    },
    {
        path: '/dogbreedupdate',
        name: 'dog breed update',
        component: () => import('../views/Pet/Dog Management/Dog Breed Update.vue')
    },
    // Cat Management Routes
    {
        path: '/catcreate',
        name: 'cat create',
        component: () => import('../views/Pet/Cat Management/Cat Create.vue')
    },
    {
        path: '/catdisplay',
        name: 'cat display',
        component: () => import('../views/Pet/Cat Management/Cat Display.vue')
    },
    {
        path: '/catupdate',
        name: 'cat update',
        component: () => import('../views/Pet/Cat Management/Cat Update.vue')
    },
    {
        path: '/catbreedcreate',
        name: 'cat breed create',
        component: () => import('../views/Pet/Cat Management/Cat Breed Create.vue')
    },
    {
        path: '/catbreeddisplay',
        name: 'cat breed display',
        component: () => import('../views/Pet/Cat Management/Cat Breed Display.vue')
    },
    {
        path: '/catbreedupdate',
        name: 'cat breed update',
        component: () => import('../views/Pet/Cat Management/Cat Breed Update.vue')
    },
    // user routes
    {
        path: "/UserProfile",
        name: "UserProfile",
        component: () => import('../views/User/User.vue')
    },
    {
        path: "/SignIn",
        name: "SignIn",
        component: () => import('../views/User/SignInView.vue')
    },
    {
        path: "/SignUp",
        name: "SignUp",
        component: () => import('../views/User/SignUpView.vue')
    }
]

const router = new VueRouter({
    mode: "history",
    routes: routes
})

export default router