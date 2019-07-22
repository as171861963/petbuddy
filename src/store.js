import Vue from 'vue'
import Vuex from 'vuex'
import users from "./modules/users.js";
import shops from "./modules/shops";
import messages from "./modules/messages.js";
import services from "./modules/services.js";

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    users,shops,messages,services
  }
})
