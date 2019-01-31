<template>
    <div>
      <div>我是tree组件</div>
      <treeMenus :id='ids'></treeMenus>
      <treeChild></treeChild>
    </div>
</template>
<script lang = 'ts'>
import { Component, Vue } from "vue-property-decorator";
import treeMenus from "@/components/treeChild.vue";
import treeChild from "@/components/treeMenus1.vue";

@Component({
  components: {
    treeMenus,
    treeChild
  }
})
export default class tree extends Vue {
   ids = 123
   created(){
  
   }
   mounted(){
        const child = this.$children;
     console.log(child)
   }
}
</script>
<style>

</style>


