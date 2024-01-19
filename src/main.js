import {createApp} from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import './main.css'

createApp(App)
    .use(VueRouter.createRouter({
        history: VueRouter.createWebHistory(process.env.BASE_URL), routes: [
            {
                path: '/', component: () => import('@/pages/HomePage.vue')
            }, {
                path: '/cart', component: () => import('@/pages/ShoppingCartPage.vue')
            }, {
                path: '/products', component: () => import('@/pages/ProductsPage.vue')
            }, {
                path: '/products/:productId', component: () => import('@/pages/ProductDetailPage.vue')
            }, {
                path: '/:pathMatch(.*)*', component: () => import('@/pages/NotFoundPage.vue')
            },

        ]
    }))
    .mount('#app')
