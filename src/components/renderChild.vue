<template>
  <div>
    <div  v-for="(item,index) in data" :key="index" style='padding-left:25px' v-show='item.parentId===currentParentId'>
      <div style="position:relative;" @click="expandIt($event,item.Id)" :key='item.Id'  :currentid='item.Id'>
        <div  style="display:flex;flex-wrap:wrap;padding:5px 0px 5px 25px;">
          <div ref='triangle' :class='{triangle:true,"rotate-90-deg": item.Id == currentIds[item.Id]}' v-if ="item.children"></div>
          <span style="flex:1">{{item.name}}</span>
          <span style="flex:1">{{item.Id}}</span>
          <span style="flex:1">{{item.parentId}}</span>
        </div>
      </div>
      <template v-show="isHasChildren(item) && closeAll">
        <renderChild ref='child' :data="item.children"></renderChild>
      </template>
    </div>
  </div>
</template>
<script lang = 'ts'>
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
@Component({
  components: {}
})
export default class renderChild extends Vue {
  getParentID(){
    this.currentParentId =(this.$parent as any).currentId;
  }
  mounted(){
    this.getParentID();
    this.renderParentID();
  }
  //整理数据
  @Prop({default:() =>{return []}})data: any;
  name = "renderChild";
  rotate = false;

  //点击行的ID
  currentId:any = -1;
  //储存当前的对象到对象中（以当前id的字符串值做key，以当前id的值做value），以供子组件获取到正确的父组件ID,并根据父组件ID,来判断应该显示哪个子组件
  currentIds:any = {};
  currentParentId:number = -2;
  renderID:any = -3;
  closeAll = true;
  isHasChildren(item: any = '') {
    if (item.children && item.children.length !== 0) {
      return true;
    } else {
      return false;
    } 
  }
  //根据获取父组件id掉用的是子组件中的该方法
  getCurrentParentId(targetId:any){
    this.currentParentId = (this.$parent as any).currentIds[this.renderID];
  };
  // 所有的子组件只有唯一的一个父组件，所以渲染子组件的父ID是唯一的，取第一个，作为，取父组件的id的时候的key值
  renderParentID(){
    if( this.data && this.data.length ===0 ) return;
    this.renderID=this.data[0].parentId;
  }
  //储存id，防止有多个子组件的时候，点击不同的行，子组件没有唯一的parentID
  expandIt(e:any,item:any){
    let targetId = e.currentTarget.getAttribute('currentid');
    this.currentId = targetId-0;
    const rotate = e.currentTarget.children[0].children[0];
    if(this.currentIds[targetId] === targetId-0){
      this.closeAll = false;
      this.currentIds[targetId] = -1;
      Vue.set(this.currentIds,targetId,-1);
    }else{
      Vue.set(this.currentIds,targetId,targetId-0);
      this.closeAll = true;
    }
    if(this.$children && this.$children.length!==0){
      for(var i=0;i<this.$children.length;i++){
        (this.$children[i] as any).getCurrentParentId();
      }
    }
  }

}
</script>
<style>
.hide {
  display: none;
}
.triangle {
  position: absolute;
  left: 10px;
  top: 10px;
  display: inline-block;
  width: 0px;
  height: 0px;
  border-top: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #666;
  cursor: pointer;
  transition: 0.1s;
}
.rotate-90-deg {
  transform: rotate(90deg);
  top: 14px;
  left: 6px;
  transition: 0.1s;
}
</style>


