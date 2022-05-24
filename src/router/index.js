import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from '@/store'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path:'/video',
    name:'video',
    component:()=>import('../views/VideoView.vue')
  },
  {
    path:'/type',
    name:'type',
    component:()=>import('../views/TypeView.vue')
  },
  {
    path:'/talk',
    name:'talk',
    component:()=>import('../views/TalkView.vue'),
    beforeEnter(to,from,next){
      console.log(to,from);
      let token = store.state.token
      console.log(token);
      if(token){
        next()
      }else{
        next({path:'/login',query:{name:'talk'}})
      }      
    }
  },
  {
    path:'/mine',
    name:'mine',
    component:()=>import('../views/MineView.vue'),
    beforeEnter(to,from,next){
      console.log(to,from);
      console.log(store);
      let token = store.state.token
      console.log(token);
      if(token){
        next()
      }else{
          next({path:'/login',query:{name:'mine'}})
      }
    }
  },
  {
    path:'/type',
    name:'type',
    component:()=>import('../views/TypeView.vue')
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/LoginView.vue')
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
