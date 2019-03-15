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

/*
 ts中declare是相当于js中的var等，因此声明函数，接口，对象等都需要加上它
 类型检查其实是为编辑器提供静态类型检查，普通的h5，编辑.d.ts一样可以达到提示作用，但无法使用类型报错，因为没有指明语言类型
 .d.ts是为js提供服务的，因此文件应该放在与js同级的位置，编辑器会自动检查的。
 不使用lang='ts',就不会进行类型检查，其实也没啥js,ts的意思了
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
