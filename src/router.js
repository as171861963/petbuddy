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
      path: '/signIn/:status',
      name: 'signIn',
      component: () => import(/* webpackChunkName: "about" */ './views/SignIn.vue')
    },
    //  {
    //   path: '/',
    //   name: 'applyShop',
    //   component: ApplyShop
    // },

  ]
})
