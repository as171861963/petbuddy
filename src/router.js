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
      path: '/signIn/:status',
      name: 'signIn',
      component: () => import(/* webpackChunkName: "about" */ './views/SignIn.vue')
    }
  ]
})
