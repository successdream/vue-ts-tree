<template>
  <div style="width:100%;position:absolute;top:60px;bottom:0px;">
     <div>我是renderChild组件</div>
  </div>
</template>
<script lang = 'ts'>
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import renderChild from "@/components/treeChild.vue";
@Component({
  components: {}
})
export default class treeChild extends Vue {
  @Prop()id!:any;
  created(){
    console.log(this.id);
  }
}
</script>

