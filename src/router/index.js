import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Category.vue')
  },
  {
    path: '/shoppingCart',
    name: 'ShoppingCart',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShoppingCart.vue')
  },
  {
    path: '/me',
    name: 'Me',
    component: () => import(/* webpackChunkName: "about" */ '../views/Me.vue')
  },
  {
    path: '/xiangqing',
    name: 'xiangqing',
    component: () => import(/* webpackChunkName: "about" */ '../views/xiangqing.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// 路由守卫
router.beforeEach((to, from, next) => {
  // console.log(to.path)
  if (to.path === '/login'||to.path==='/register'||to.path==='/home'||to.path==='/xiangqing') {
    next();
  } else{
    let token = localStorage.getItem('Authorization');
 
    if (token === null || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});
export default router
