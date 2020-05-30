import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js';
import store from './store/store';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-stock-trader-559de.firebaseio.com/';

Vue.filter('currency', (value) => {
   return '$' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  routes
})



Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
