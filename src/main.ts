import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import axios,{ AxiosInstance } from 'axios';


Vue.prototype.$axios=axios;
//应该是axios属于模块化，所以需要挂在全局对象上使用；
/*
 1 此处把axios挂在到全局对象
 2 在shims-tsx.d.ts中在全局对象global中声明两个全局类型
 3 一是挂在到window上，来防止第一步，把axios挂在在window对象上时，报类型错误、到了这一步，axios,其实已经可以发送请求了
 4 二是声明axios的全局类型在global对象上，来防止axios单独存在的时候报错。
*/ 
window.axios = axios;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//moment
import moment from 'moment';
(window as any).moment=moment;

import 'animate.css'

import './assets/style/base.scss';
import './assets/icon/iconfont/iconfont.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app').$mount('#app').$axios.defaults.baseURL='/api'
