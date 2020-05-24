import VueRouter from 'vue-router';
import routes from "../routes/index"
import Vue from "vue";
Vue.use(VueRouter);
export default new VueRouter({
  routes,
  linkActiveClass:"active"
})