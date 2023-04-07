import Vue from 'vue'
import VueRouter from 'vue-router'

import PageLogin from '../pages/PageLogin.vue'

Vue.use(VueRouter)

const routes = [{
    name: 'PageLogin',
    path: '/',
    component: PageLogin
},]

const router = new VueRouter({
    mode: 'hash',
    routes
})

export default router