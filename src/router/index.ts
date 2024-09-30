import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/Tab4Page.vue')
      },
      {
        path: 'tab5',
        component: () => import('@/views/Tab5Page.vue')
      },
      {
        path: 'tab6',
        component: () => import('@/views/Tab6Page.vue')
      },
      {
        path: 'tab7',
        component: () => import('@/views/Tab7page.vue')
      },
      {
        path: 'tab8',
        component: () => import('@/views/Tab8Page.vue')
      },
      {
        path: 'tab9',
        component: () => import('@/views/Tab9page.vue')
      },
      {
        path: 'tab10',
        component: () => import('@/views/Tab10Page.vue')
      },
      {
        path: 'tab-cart',  // Nueva ruta para el carrito
        component: () => import('@/views/Cart.vue')  // Importamos el componente del carrito
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;


