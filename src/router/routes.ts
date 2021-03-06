import Home from   '../views/Home.vue';
import Login from  '../views/Login.vue';
import About from  '../views/About.vue';
import Task from  '../views/Task.vue';
import User from  '../views/User/User.vue';
import Comprehensive from  '../views/Comprehensive.vue';
import Resource from  '../views/Resource.vue';
import Render from  '../views/render.vue';
import Tree from  '../views/tree.vue';
import renderJsx from  '../views/renderJsx.vue';
import vueRouter from  '../views/VueRouterTest.vue';








export default{
    routes: [
        {
          path: '/',
          name: 'home',
          component: Home,
          title:"主页",
          children:[
            // {
            //   path:'task',
            //   component:Task,
            //   name:'task',
            //   title:'任务',
            //   icon:'iconfont icon-ziyouanpai',
            //   children:[
            //     {
            //       path: '/task/test'
            //     }
            //   ]
            // },
            {path:'user',component:User,name:'user',title:'用户',icon:'iconfont icon-tupian'},
            {path:'comprehensive',component:Comprehensive,name:'task',title:'任务',icon:'iconfont icon-zhinengyouhua'},
            // {path:'resource',component:Resource,name:'resource',title:'资源',icon:'iconfont icon-zhinengyouhua'},
            {path: '/render',component: Render, name: 'render',title:'渲染', icon:'iconfont icon-zhinengyouhua'},
            {path: '/tree',component: Tree, name: 'tree',title:'树形', icon:'iconfont icon-zhinengyouhua'},
            {path: '/render1',component: renderJsx, name: 'renderjsx',title:'renderJSX', icon:'iconfont icon-tupian'},
            {path: '/resource',component: Resource, name: 'resource',title:'资源', icon:'iconfont icon-tupian'},
            {path: '/vueRouter',component: vueRouter, name: 'resource',title:'图片', icon:'iconfont icon-tupian'}
            
          ]
        },
        {
          path: '/about',
          name: 'about',
          component: About
        },
        {
          path: '/login',
          name: 'login',
          component: Login
        },
       
        {
          path: '*',
          redirect: {path: '/'},
        }
    ]
}

// {
//     path: '/about',
//     name: 'about',
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   },