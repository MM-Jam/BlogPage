import Vue from 'vue'
import Router from 'vue-router'
import DefaultPage from '@/layout/default'
import Map from '@/layout/map'
import Index from '@/pages/index'
import About from '@/pages/about'
import LeaveWord from '@/pages/leaveWord'
import Article from '@/pages/article'
import EditBlog from '@/pages/edit/edit_blog'
import EditEveryday from '@/pages/edit/edit_everyday'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'default',
            redirect: '/index',
            component: DefaultPage,
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Index,
                },
                {
                    path: '/article',
                    name: 'article',
                    component: Article,
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
        },

        {
            path: '/edit_blog',
            name: 'edit_blog',
            component: EditBlog,
        },
        {
            path: '/edit_everyday',
            name: 'edit_everyday',
            component: EditEveryday
        }
    ]
})
