import Vue from 'vue'
import Vuex from 'vuex'
import users from "./modules/users.js";
import shops from "./modules/shops";

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    users,shops
  }
})
