import Vue from 'vue';
import Router from "vue-router";
import Login from "./views/Login";
// import ApplyShop from "./applyShop/applyShop"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
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
    //  {
    //   path: '/',
    //   name: 'applyShop',
    //   component: ApplyShop
    // },

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
      component: () => import(/* webpackChunkName: "about" */ './views/info.vue')
      
    }
  ]
})
