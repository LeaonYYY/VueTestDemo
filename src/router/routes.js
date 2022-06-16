import Home from '@/pages/Home/Home.vue'
import HomeLayout from '@/pages/HomeLayout/HomeLayout.vue'
import Personal from '@/pages/Personal/Personal.vue'
import Login from '@/pages/Login/Login.vue'

export default [
  {
    path: '/',
    component: HomeLayout,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/personal',
        component: Personal
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]
