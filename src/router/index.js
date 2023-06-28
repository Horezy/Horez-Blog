// createRouter   创建router实例对象
// creteWebHistory    创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/Layout.vue'
import Login from '@/views/Login/Login.vue'
import Register from '@/views/Register/Register.vue'
import Home from '@/views/Home/Home.vue'
import Category from '@/views/Category/Category.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'Category',
          component: Category
        },
      ]
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/Register',
      component: Register
    },
  ]
})

export default router
