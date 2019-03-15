<template>
   <div>
     我是vue-router测试组件
   </div>
</template>
<script lang="ts">
   import { Component, Vue } from "vue-property-decorator";
@Component
export default class VueRouterTest extends Vue{
  private lastPages:any = {};
  beforeRouteEnter(to:any, from:any, next:any) {
    console.log(666666)
    next();
  }
}
</script>

