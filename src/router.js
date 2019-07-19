import Vue from 'vue';
import Router from "vue-router";
import Login from "./views/Login";
// import ApplyShop from "./applyShop/applyShop"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Login
    },
    {
      path: '/login/:username',
      name: 'login',
      component: Login
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: () => import(/* webpackChunkName: "about" */ './views/SignIn.vue')
    },
    {
      path: '/platform',
      name: 'platform',
      component: () => import(/* webpackChunkName: "about" */ './views/Platform.vue'),
      children:[
        {
          path: '/platform/message',
          name: 'message',
          component: () => import(/* webpackChunkName: "about" */ './components/messages.vue'),
        },
        {
          path: '/platform/shopManage',
          name: 'shopManage',
          component: () => import(/* webpackChunkName: "about" */ './components/shopsManage.vue'),
        }
      ]
    },
    {
      path: '/info',
      name: 'info',
      component: () => import(/* webpackChunkName: "about" */ './views/info.vue'),
      children:[
        {
          path: '/info/',
          name: 'hello',
          component: () => import(/* webpackChunkName: "about" */ './components/Hello.vue'),
        },
        {
          path: '/info/shopservice',
          name: 'shopservice',
          component: () => import(/* webpackChunkName: "about" */ './components/ShopService.vue'),
        },
        {
          path: '/info/addFood',
          name: 'addFood',
          component: () => import(/* webpackChunkName: "about" */ './components/addFoot.vue'),
        },
        {
          path: '/info/order',
          name: 'order',
          component: () => import(/* webpackChunkName: "about" */ './components/order.vue'),
        },
        {
          path: '/info/pets',
          name: 'pets',
          component: () => import(/* webpackChunkName: "about" */ './components/pets.vue'),
        },
        {
          path: '/info/applyShop',
          name: 'applyShop',
          component: () => import(/* webpackChunkName: "about" */ './components/applyShop.vue'),
        }
      ]
    }
  ]
})
