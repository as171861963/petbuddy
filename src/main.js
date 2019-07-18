import Vue from 'vue'
// import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ShopService from "./components/shopService/ShopService.vue"

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  // render: h => h(App)
  render: h => h(ShopService)
}).$mount('#app')
