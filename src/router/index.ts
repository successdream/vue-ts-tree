import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes'
import axios from 'axios';
Vue.use(Router)

let router=new Router ({
  mode: 'history',
  ...routes
})

router.beforeEach((to,from,next)=>{
   
  let auth = axios.defaults.headers.common.Authorization;

   if( !auth && to.path!=='/login'){
      next({path:'/login'})
   }else{
       next();
   }
    
})

export default router