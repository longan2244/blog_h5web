import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'; 
import 'normalize.css/normalize.css'//修复浏览器bug
import 'amfe-flexible'
import '@/styles/public.less'//公共样式
import 'ionicons-css/dist/icon.css'//图标
import 'mdui/dist/css/mdui.min.css'//框架1
import 'mdui/dist/js/mdui.min.js'
import 'vant/lib/index.css';//vant
import '@/styles/init.css'
import '@/styles/media.css'
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
