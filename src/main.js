import Vue from 'vue'
// import App from './App'
import ApplyShop from './applyShop/applyShop'
// import App from './component/order/order'
import _g from "./_globals"
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
})
