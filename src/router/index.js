import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '@/views/LogIn'
import SignUp from '@/views/SignUp'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
