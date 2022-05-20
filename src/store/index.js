import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    username:"",
    token:""
  },
  getters:{},
  mutations:{
    settoken(state,payload){
      console.log(payload);
      state.token = payload
    }
  },
  actions:{},
  modules:{}
})