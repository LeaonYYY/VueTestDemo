import Home from '@/pages/Home/Home.vue'
import HomeLayout from '@/pages/HomeLayout/HomeLayout.vue'
import Personal from '@/pages/Personal/Personal.vue'
import Login from '@/pages/Login/Login.vue'
import Application from '@/pages/Application/Application.vue'
import Record from '@/pages/Record/Record'
import RecordDetail from '@/pages/Record/RecordDetail'
import Message from '@/pages/Message/Message.vue'
import SelfApplication from '@/pages/SelfApplication/SelfApplication.vue'
import SelfApprove from '@/pages/SelfApprove/SelfApprove.vue'
import SelfInfo from '@/pages/SelfInfo/SelfInfo.vue'

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
  },
  {
    path: '/application',
    component: Application
  },
  {
    path: '/record',
    component: Record
  },
  {
    path: '/record-detail/:id',
    component: RecordDetail
  },
  {
    path: '/message',
    component: Message
  },
  {
    path: '/self-application',
    component: SelfApplication
  },
  {
    path: '/self-approve',
    component: SelfApprove
  },
  {
    path: '/self-info',
    component: SelfInfo
  },
  {
    path: '/self-appli-detail/:id',
    component: () => import('../pages/SelfApplication/SelfApplicationDetail.vue')
  },
  {
    path: '/test',
    component: () => import('../components/test.vue')
  }
]
