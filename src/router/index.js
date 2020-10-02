import Vue from 'vue'
import Router from 'vue-router'
import DefaultPage from '@/layout/default'
import Map from '@/layout/map'
import Index from '@/pages/index'
import About from '@/pages/about'
import LeaveWord from '@/pages/leaveWord'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'default',
            redirect:'/index',
            component: DefaultPage,
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Index,
                },
                {
                    path: '/about',
                    name: 'about',
                    component: About,
                },
                {
                    path: '/leaveWord',
                    name: 'leaveWord',
                    component: LeaveWord,
                }
            ]
        },
        {
            path: '/map',
            name: 'map',
            component: Map
        }
    ]
})
