import Vue from 'vue'
import Vuex from 'vuex'
import users from "./modules/users.js";
import petsList from "./modules/petsList.js";
import footList from "./modules/footList.js";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users, petsList,footList
  }
})
