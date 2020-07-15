<template>
  <div id="home">

    <div class="nav-menu">
      <div class="nav-left">
        我是home页面
        1版
      </div>
      <div class="nav-center">
        <el-menu
          default-active="task"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#fff"
          text-color="#2d2f33"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item v-for="(item,index) in homeChildren" :index="item.path" :key='index'><span :class="item.icon" :key='item.path'></span>{{item.title}}</el-menu-item>
        </el-menu>
      </div>
      <div class="nav-right"></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
//  background-color="#727a9e91"

import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import About from "./About.vue";
import Login from "./Login.vue";
import Routes from '../router/routes';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default Vue.extend({
   
  data() {
    return {
      homeChildren:[]
    };
  },

  async created() {
       this.renderNavMenu();
       (this as any).getAllUser();
       this.$router.push("/task")
       axios.get('abcdefg');
  },

  methods: {
    handleSelect(key: any, keyPath: any) {
      console.log(key, keyPath);
    },
   
    renderNavMenu(){
        interface arrayIndex{
            [index:number]:object
        }
        const routes:arrayIndex=Routes.routes;
        if(((routes[0])as any).children.length==0) return ;
        this.homeChildren =((routes[0])as any).children; 
    },
    //传参类型必须酱紫，否则类型报错
    ...mapActions(["getAllUser"])
    

  },
  components: {
    About,
    Login
  }
});
</script>
<style lang="scss">
     #home{
       width: 100%;
       height: 100%;
 
        .nav-menu{
          position: absolute;

          display: flex;
            .nav-left{
              width: 239px;   
              height: 61px;
              // background-color: #545c64;
              background-size: 100% 100%;
              border-bottom: solid 1px #e6e6e6;
            }
            .nav-center{
               flex:1
            }
            .nav-right{
              
            }
        }
     }
</style>

