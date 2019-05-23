import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";
import { routes } from "./routes";
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
