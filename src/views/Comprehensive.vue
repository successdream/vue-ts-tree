<template>
  <div id="Comprehensive" style="position:absolute;top:80px">
     <div>我是综合页面</div>
     <span>{{time}}</span>
  </div>
</template>

<script lang="ts">
//  background-color="#727a9e91"
import { Component, Vue } from "vue-property-decorator";
const uuid=require('uuid-v4');
// import uuid from 'uuid-v4'
export default Vue.extend({
  data() {
      return {
         time: uuid()  
      }
    }   
});
</script>
<style lang="scss">
#User {
 
}
</style>

