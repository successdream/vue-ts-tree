<template>
  <div style="position:absolute;top:60px;bottom:0px;width:100%">
    <!-- <div>{{foo}}</div> -->
    <div style='display:flex;padding-left:30px'>
      <span style='width:33.3%; '>name</span>
      <span style='width:33.3%'>ID</span>
      <span style='width:33.3%'>parentID</span>
    </div>
    <renderChild style="width:100%;" :data="renderData"></renderChild>
  </div>
</template>
<script lang = 'ts'>
import { Component, Vue, Inject, Provide, Watch } from "vue-property-decorator";
import brother from '../../api/brother';
import renderChild from "@/components/renderChild.vue";
@Component({
  components: {
    renderChild
  }
})
export default class renders extends Vue {
  //只能祖宗往子孙传值
  @Provide() foo = 'foo';
  @Watch('dragId',{deep:true})
    changeDragId(val:any){
      const dragId = this.dragId;
      const dropTargetIds = this.dropTargetIds;
      let dragData = this.mapDataForIdForDelete(this.renderData,dragId);
      this.dragData = dragData;
      this.mapDataForIdForAdd(this.renderData,dropTargetIds);
      this.$forceUpdate();
    }
  //整理数据
  tabledata = [
    { Id: 1, name: "办公管理", parentId: 0 },
    { Id: 2, name: "请假申请", parentId: 1 },
    { Id: 3, name: "出差申请", parentId: 1 },
    { Id: 4, name: "请假记录", parentId: 2 },
    { Id: 5, name: "系统设置", parentId: 0 },
    { Id: 6, name: "权限管理", parentId: 5 },
    { Id: 7, name: "用户角色", parentId: 6 },
    { Id: 8, name: "菜单设置", parentId: 6 }
  ];
  
  renderData: any = [];
  currentId:number = 0;
  dragId:number = -1;
  dropTargetIds:number = -1;
  dragData:any = null;
  mounted() {
    const firsrData = this.firstData();
    this.mapTagData(firsrData);
    this.renderData = firsrData;
    brother.$on('ids',(ids:any) =>{
      const arr = ids.split(',');
      this.dragId = arr[0];
      this.dropTargetIds = arr[1];
    })
  }
  firstData() {
    const data = this.tabledata;
    let arrData: any[] = [];
    if( data && (data.length) === 0 ) return
    for (var b = 0; b < data.length; b++) {
      let isHasParent: boolean = false;
      let recordVal: any = null;
      for (var d = 0; d < data.length; d++) {
        if (data[b].parentId === data[d].Id) {
          isHasParent = true;
        }
        if (!isHasParent) {
          recordVal = data[b];
        } else {
          recordVal = null;
        }
      }
      if (!isHasParent && recordVal !== null) arrData.push(recordVal);
    }
    return arrData;
  }
  mapTagData(firstData: any) {
    const data = this.tabledata;
    if (firstData instanceof Array && firstData.length > 1) {
      for (var i = 0; i < firstData.length; i++) {
        for (var a = 0; a < data.length; a++) {
          if (data[a].parentId === firstData[i].Id) {
            if (firstData[i].children === undefined) {
              firstData[i].children = [];
              firstData[i].children.push(data[a]);
            } else {
              firstData[i].children.push(data[a]);
            }
          }
        }
        if (firstData[i].children) {
          this.mapTagData(firstData[i].children);
        }
      }
    }
  }
  //根据id遍历数据
  mapDataForIdForDelete(data:any,dragId:number){
    dragId = dragId -0;
    if( this.dragId === -1 || this.dropTargetIds === -1) return;
    for(var i =0;i<data.length;i++){
       const item = data[i];
       console.log(item.Id, dragId)
       if(item.Id === dragId){
         if( item.children ) {
           delete item.children;
           data.splice(i,1);
           return item;
          }else{
            data.splice(i,1);
            return item;
          }
       }else{
         if( item.children ){
           let returnVal:any = this.mapDataForIdForDelete(item.children,dragId);
           //递归函数外层的return慎用
           if( returnVal!==undefined ) {
             return returnVal
           }
         }
       }
    }
  }
   //根据id添加数据
  mapDataForIdForAdd(data:any,dropTargetIds:number){
    dropTargetIds = dropTargetIds -0;
    if( this.dragId === -1 || this.dropTargetIds === -1) return;
    for(var i =0;i<data.length;i++){
       const item = data[i];
       if(item.Id === dropTargetIds){
         if(item.children){
           item.children.push(this.dragData)
           this.renderData.splice(1,0)
           
         }else{
           item.children = [];
           item.children.push(this.dragData)
           this.renderData.splice(1,0)

         }
       }else{
         if( item.children ){
           let returnVal:any = this.mapDataForIdForAdd(item.children,dropTargetIds);
         }
       }
    }
  }
 


}
</script>

