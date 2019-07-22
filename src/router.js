import Vue from 'vue';
import Router from "vue-router";
import Login from "./views/Login";

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
      beforeEnter: (to, from, next) => {
        if(!localStorage.getItem("user_name")){
          next("/")
        }
        else{
          next();
        }
      },
      children:[
        {
          path: '/platform/',
          name: 'platformhello',
          component: () => import(/* webpackChunkName: "about" */ './components/Hello.vue'),
        },
        {
          path: '/platform/message',
          name: 'message',
          component: () => import(/* webpackChunkName: "about" */ './components/messages.vue'),
        },
        {
          path: '/platform/userManage',
          name: 'userManage',
          component: () => import(/* webpackChunkName: "about" */ './components/userManage.vue'),
        }
      ]
    },
    {
      path: '/info',
      name: 'info',
      component: () => import(/* webpackChunkName: "about" */ './views/info.vue'),
      beforeEnter: (to, from, next) => {
        if(!localStorage.getItem("user_name")){
          next("/")
        }
        else{
          next();
        }
      },
      children:[
        {
          path: '/info/',
          name: 'hello',
          component: () => import(/* webpackChunkName: "about" */ './components/Hello.vue'),
        },
        {
          path: '/info/shopManage',
          name: 'shopManage2',
          component: () => import(/* webpackChunkName: "about" */ './components/shopsManage.vue'),
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
