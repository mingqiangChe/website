import Vue from 'vue'
import App from './App.vue'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router'
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  components: {},
  render: h => h(App)
}).$mount('#app')
