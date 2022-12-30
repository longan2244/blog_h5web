import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'amfe-flexible'
import '@/styles/public.css'
import 'ionicons-css/dist/icon.css'
import 'mdui/dist/css/mdui.min.css'
import 'mdui/dist/js/mdui.min.js'
import 'vant/lib/index.css';
import '@/styles/init.css'
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
