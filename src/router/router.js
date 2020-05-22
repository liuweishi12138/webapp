import VueRouter from 'vue-router';
import routes from "@/router/router"
import Vue from "vue";
Vue.use(VueRouter);
export default new VueRouter({
  routes,
  linkActiveClass:"active"
})