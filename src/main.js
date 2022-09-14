import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import vuetify from './plugins/vuetify'
import store from './store'
import axios from 'axios'

// axios.defaults.baseURL = 'http://146.56.115.236:8080'
axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.get["Content-Type"] = "application/json";

Vue.config.productionTip = false

Vue.prototype.$EventBus = new Vue();
Vue.prototype.$axios = axios;
Vue.prototype.$store = store;

new Vue({
  vuetify,
  router,
  mixins,
  render: h => h(App)
}).$mount('#app')
