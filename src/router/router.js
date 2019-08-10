import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: 
    [
        {
            path:'/',
            name:'home',
            component:Home
        },
        {
            path:'/postvideo',
            name:'postvideo',
            component:()=>import('../views/PostVideo.vue')
        },
        {
            path:'/about',
            name:'about',
            component:()=>import('../views/About.vue')
        }
    ]
})