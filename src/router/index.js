import Vue from 'vue'
import VueRouter from 'vue-router'
//登录
import Login from '../views/login.vue'
//导航
import Nav from '../components/nav.vue'
// 个人信息
import Person from '../views/person.vue'
//首页
import Index from '../views/index.vue'
// 表单管理
import Administration from '../views/administration.vue'
// 实验室运行记录
import Working from '../views/working.vue'
// 实验室申请记录表
import Borrow from '../views/borrow.vue'
// 开发实验室申请表
import Development from '../views/development.vue'
// 设备借用表单
import Equipment from '../views/equipment.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/nav',
}, {
  path: '/login',
  name: '登录',
  component: Login,
  meta: {
    requireAuth: false
  },
  hidden: true
}, {
  path: '/nav',
  name: '框架',
  component: Nav,
  meta: {
    requireAuth: false
  },
  hidden: true,
  redirect: '/index',
  children: [{
    path: '/index',
    name: '首页',
    component: Index,
    meta: {
      requireAuth: false
    },
    hidden: true
  }, {
    path: '/person',
    name: '个人信息页面',
    component: Person,
    meta: {
      requireAuth: false
    },
    hidden: true
    },
    {
      path: '/administration', name: '表单管理', component: Administration,
      meta: {
          requireAuth: false
      },
      hidden: true
    },
    {
      path: '/working', name: '实验室运行记录', component: Working,
      meta: {
          requireAuth: false
      },
      hidden: true
    },
    {
      path: '/borrow', name: '实验室申请记录表', component: Borrow,
      meta: {
          requireAuth: false
      },
      hidden: true
    },
    {
      path: '/development', name: '开发实验室申请表', component: Development,
      meta: {
          requireAuth: false
      },
      hidden: true
    },
    {
      path: '/equipment', name: '设备借用表单', component: Equipment,
      meta: {
          requireAuth: false
      },
      hidden: true
  }
  ]
}, ]

const router = new VueRouter({
  routes
})

export default router
