import Vue from 'vue'
import App from './views/info'
import router from './router'
import store from './store'
import _g from "./_globals"
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
