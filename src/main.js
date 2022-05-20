import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"
import Vant from 'vant';
import 'vant/lib/index.css';
// 重定向问题
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

import "amfe-flexible"
import "./assets/style/index.css"
Vue.config.productionTip = false;
if(process.env.NODE_ENV==='development'){
  require('./mock')
}
Vue.use(Vant);

let app = new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
// console.log(app);
