import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import axios,{ AxiosInstance } from 'axios';


Vue.prototype.$axios=axios;


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//moment
import moment from 'moment';
(window as any).moment=moment;

import './assets/style/base.scss';
import './assets/icon/iconfont/iconfont.css';







Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app').$mount('#app').$axios.defaults.baseURL='/api'
