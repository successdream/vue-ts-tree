<template>
  <div style="width:100%;position:absolute;top:60px;bottom:0px;">
     <div>我是renderChild组件</div>
  </div>
</template>
<script lang = 'ts'>
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component({
  components: {}
})
export default class treeMenus1 extends Vue {
  @Prop()id!:any;
  created(){
    this
    console.log(this.id);
  }
}
</script>

