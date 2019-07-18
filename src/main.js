import Vue from 'vue'
import _g from "./_globals"
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ShopService from "./components/shopService/ShopService.vue"

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
}).$mount('#app')
