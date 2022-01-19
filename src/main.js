import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Fontawesome from "./assets/js/kit.fontawesome.js"

Vue.config.productionTip = false

require('./assets/css/bootstrap.min.css');
require('./assets/css/login.css');
require('./assets/css/dashboard.css');

new Vue({
  router,
  render: h => h(App),
  font: f => f(Fontawesome)
}).$mount('#app')
