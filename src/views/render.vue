<template>
  <div style="position:absolute;top:60px;bottom:0px;">
    <div style='display:flex;padding-left:30px'>
      <span style='width:33.3%; '>name</span>
      <span style='width:33.3%'>ID</span>
      <span style='width:33.3%'>parentID</span>
    </div>
    <renderChild style="width:100%;" :data="renderData"></renderChild>
  </div>
</template>
<script lang = 'ts'>
import { Component, Vue } from "vue-property-decorator";
import renderChild from "@/components/renderChild.vue";
@Component({
  components: {
    renderChild
  }
})
export default class renders extends Vue {
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
  mounted() {
    const firsrData = this.firstData();
    this.mapTagData(firsrData);
    this.renderData = firsrData;
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
}
</script>

