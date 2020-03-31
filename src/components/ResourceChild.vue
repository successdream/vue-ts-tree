

<script lang = 'ts'>
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
  }
})
export default class Resource extends Vue {
  // data = [
  //   { id: 1, name: "办公管理", pid: 0 },
  //   { id: 2, name: "请假申请", pid: 1 },
  //   { id: 3, name: "出差申请", pid: 1 },
  //   { id: 4, name: "请假记录", pid: 2 },
  //   { id: 5, name: "系统设置", pid: 0 },
  //   { id: 6, name: "权限管理", pid: 5 },
  //   { id: 7, name: "用户角色", pid: 6 },
  //   { id: 8, name: "菜单设置", pid: 6 }
  
  // ];
  // renderData: any[] = [];
  // isTriangle: boolean = true;
  // deleteDrag: any = null;
  // addDrag: any = null;
  // dealTree:boolean = true;
  // created() {
  //   const firstDatas = this.firstData();
  //   this.mapTagData(firstDatas);
  //   this.renderData = firstDatas;
  // }
  // mounted() {
  //   const renderDOM = this.$refs.content;
    // this.renderDOM(renderDOM, this.renderData, 3, false, 1);
    // const expandDOM = document.getElementsByClassName("list");
    // for (var i = 0; i < expandDOM.length; i++) {
    //   expandDOM[i].addEventListener("click", this.expandrowchild);
    // }
    // //拖动处理
    // const spbox = document.getElementsByClassName("spbox");
    // for (var i = 0; i < spbox.length; i++) {
    //   spbox[i].addEventListener("dragstart", this.dragStartSet);
    // }
    // const lists = document.getElementsByClassName("spbox");
    // for (var i = 0; i < lists.length; i++) {
    //   lists[i].addEventListener("dragover", this.dragoverSet);
    //   lists[i].addEventListener("drop", this.dragDropSet);
    // }
  // }
  // firstData() {
  //   const data = this.data;
  //   let arrData: any[] = [];
  //   for (var b = 0; b < data.length; b++) {
  //     let isHasParent: boolean = false;
  //     let recordVal: any = null;
  //     for (var d = 0; d < data.length; d++) {
  //       if (data[b].pid === data[d].id) {
  //         isHasParent = true;
  //       }
  //       if (!isHasParent) {
  //         recordVal = data[b];
  //       } else {
  //         recordVal = null;
  //       }
  //     }
  //     if (!isHasParent && recordVal !== null) arrData.push(recordVal);
  //   }
  //   return arrData;
  // }
  // mapTagData(firstData: any) {
  //   const data = this.data;
  //   if (firstData instanceof Array && firstData.length > 1) {
  //     for (var i = 0; i < firstData.length; i++) {
  //       for (var a = 0; a < data.length; a++) {
  //         if (data[a].pid === firstData[i].id) {
  //           if (firstData[i].children === undefined) {
  //             firstData[i].children = [];
  //             firstData[i].children.push(data[a]);
  //           } else {
  //             firstData[i].children.push(data[a]);
  //           }
  //         }
  //       }
  //       if (firstData[i].children) {
  //         this.mapTagData(firstData[i].children);
  //       }
  //     }
  //   }
  // }
  // //渲染
  // render(createElement: any) {
  //   const renderDOM = this.$refs.content;
  //   // const DOM = this.renderDOM(renderDOM, this.renderData, 3, false, 1);
  //   // console.log(DOM)
  //   return createElement('div',{class: 'Tree',})
  // }
  //展开子元素
  // expandrowchild(e: any) {
  //   e = e || event;
  //   e.stopPropagation();
  //   //获取事件绑定的元素  e.currentTarget
  //   e = e || event;
  //   const item = e.currentTarget;
  //   const triangle = item.firstChild.firstChild;
  //   if (triangle.classList.contains("rotate-90-deg"))
  //     triangle.classList.remove("rotate-90-deg");
  //   else triangle.classList.add("rotate-90-deg");
  //   const allChild = item.childNodes;
  //   let boxsArr = [];
  //   for (var i = 0; i < allChild.length; i++) {
  //     if (allChild[i].classList.contains("boxs")) {
  //       boxsArr.push(allChild[i]);
  //     }
  //   }
  //   for (var i = 0; i < boxsArr.length; i++) {
  //     if (boxsArr[i].classList.contains("hide")) {
  //       boxsArr[i].classList.remove("hide");
  //     } else {
  //       boxsArr[i].classList.add("hide");
  //     }
  //   }
  // }
  // //渲染DOM
  // renderDOM(html: any, renderData: any, max: number, show: boolean, num: number) {
  //   renderData.forEach((item: any) => {
  //     // const boxs = document.createElement("div");
  //     // boxs.className = "boxs";
  //     // const box = document.createElement("div");
  //     // box.setAttribute("ref", "list");
  //     // box.className = "list";
  //     // const spbox = document.createElement("div");
  //     // spbox.setAttribute("ref", "spbox");
  //     // spbox.setAttribute("ids", item.id);
  //     // spbox.className = "spbox";
  //     // spbox.className = "spbox";
  //     // spbox.draggable = true;
  //     // if (num === 1) {
  //     //   if (boxs.classList.contains("hide") === true) {
  //     //     boxs.classList.remove("hide");
  //     //   }
  //     // } else {
  //     //   if (boxs.classList.contains("hide") === false) {
  //     //     boxs.classList.add("hide");
  //     //   }
  //     // }
  //     // if (show) {
  //     //   if (boxs.classList.contains("hide") === true) {
  //     //     boxs.classList.remove("hide");
  //     //   }
  //     // }
  //     // let arrs = [];
  //     // for (var k in item) {
  //     //   if (k !== "children") {
  //     //     arrs.push(item[k]);
  //     //   }
  //     // }
  //     // for (var i = 0; i < max; i++) {
  //     //   const child = document.createElement("span");
  //     //   child.innerHTML = arrs[i];
  //     //   console.log(spbox)
  //     //   spbox.appendChild(child);
  //     // }
  //     // box.appendChild(spbox);
  //     // if (item.children) {
  //     //   const treeAngle = document.createElement("div");
  //     //   treeAngle.className = "triangle";
  //     //   const firstNode = spbox.childNodes[0];
  //     //   spbox.insertBefore(treeAngle, firstNode);
  //     //   // this.renderDOM(box, item.children, max, show, 2);
  //     // }
  //     // console.log(boxs)
  //     // boxs.appendChild(box);
  //     // if(num===1){
  //     //   return boxs;
  //     // }
  //   });
  // }
  //开始拖动
  // dragStartSet(e: any) {
  //   const ids = e.target.getAttribute("ids");
  //   console.log(ids);
  //   e.dataTransfer.setData("text/html", ids);
  // }
  // dragoverSet(e: any) {
  //   e = e || event;
  //   // 阻止浏览器默认事件
  //   e.preventDefault();
  //   console.log(7);
  // }
  // dragDropSet(e: any) {
  //   e = e || event;
  //   e.preventDefault();
  //   const dragIds = e.dataTransfer.getData("text/html");
  //   const dropTargetIds = e.currentTarget.getAttribute("ids");
  //   const datas = this.mapDataForId(dragIds, dropTargetIds);
  //   this.deleteDrag = datas.dragIdsData;
  //   this.addDrag = datas.dropTargetIdsData;
  //   this.mapDataDeleteDrag(this.renderData);
  //   this.mapDataAddDrag(this.renderData);
    
  // }
  // //根据 id 寻找数据
  // mapDataForId(dragIds: number, dropTargetIds: number) {
  //   const dragId = Number(dragIds);
  //   const dropTargetId = Number(dropTargetIds);
  //   const data = this.data;
  //   let dragIdsData = null;
  //   let dropTargetIdsData = null;
  //   for (let i = 0; i < data.length; i++) {
  //     const item = data[i];
  //     if (item.id === dropTargetId) {
  //       dropTargetIdsData = item;
  //     } else if (item.id === dragId) {
  //       dragIdsData = item;
  //     }
  //   }
  //   return {
  //     dragIdsData,
  //     dropTargetIdsData
  //   };
  // }
  // //遍历数据
  // mapDataAddDrag(renderData: any) {
  //   const data = renderData;
  //   const dragIdsData = this.deleteDrag;
  //   const dropTargetIdsData = this.addDrag;
  //   if(data.length<1) return;
  //   for (let i = 0; i < data.length; i++) {
  //     if (data[i].id === dropTargetIdsData.id) {
  //       console.log(data)
  //       data.splice(i+1, 0, dragIdsData);
  //       console.log(data)

  //       // Vue.set(this.renderData,0,this.renderData[0])
  //       this.renderData=this.renderData
  //     }
  //     if (data[i].children && data[i].children.length> 0) {
  //       this.mapDataAddDrag(data[i].children);
  //     }
  //   }
  // }
  // mapDataDeleteDrag(renderData: any) {
  //   const data = renderData;
  //   const dragIdsData = this.deleteDrag;
  //   const dropTargetIdsData = this.addDrag;
  //   console.log(dropTargetIdsData.id, dragIdsData.id);
  //   if(data.length<1) return;
  //   for (let i = 0; i < data.length; i++) {
  //     const item = data[i];
  //     if (item.id === dragIdsData.id) {
  //       data.splice(i, 1);
  //     }
  //     if ( item.children  && item.children.length> 0) {
  //       this.mapDataDeleteDrag(item.children);
  //     }
  //   }
  // }
}
</script>
<style lang="scss">
//sass混合器
@mixin flex-layout {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.hide {
  display: none;
}
.triangle {
  position: absolute;
  left: 10px;
  top: 6px;
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
  top: 9px;
  left: 6px;
  transition: 0.1s;
}
.boxs {
  width: 100%;
  padding: 5px 0;
}
.Tree {
  padding: 5px 0;
  background-color: rgba(0, 0, 0, 0.075);
  .title {
    position: relative;
    display: flex;
    span {
      width: 33.3%;
      &:nth-child(1) {
        padding-left: 30px;
      }
    }
  }
  .content {
    .list {
      margin-left: 20px;
      .spbox {
        position: relative;
        padding-left: 30px;
        @include flex-layout;
        span {
          width: 33.3%;
        }
      }
    }
  }
}
</style>

