<template>
  <div id='tag'>
    <el-table  :data='treeTableData' ref='filterTable' max-height='100%' style='overflow:auto;' @expand-change='expandRow'>
      <el-table-column type='selection' width='55'></el-table-column>
      <el-table-column type='expand'>
        <template slot-scope='props'>
          <tag-table :title='props' ref='tagTable'></tag-table>
        </template>
      </el-table-column>
      <el-table-column prop='tag' label='标签'>
        <template slot-scope='scope'>
          <el-tag disable-transitions>{{scope.row.label}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop='description' label='描述' w_idth='180'></el-table-column>
      <el-table-column label='操作'>
        <template slot-scope='scope'>
          <el-button size='mini' type='primary' @click='handleAdd'>添加</el-button>
          <el-button size='mini' type='success' @click='handleEdit(scope.$index, scope.row)'>编辑</el-button>
          <el-button size='mini' type='danger' @click='handleDelete(scope.$index, scope.row)' :before-close='handleDelete'>删除</el-button>
          <el-button size='mini' type='info' @click='handleLook(scope.$index, scope.row)'>查看</el-button>
        </template>
      </el-table-column>
    </el-table>

    <TagController ref='adel' v-on:echo="echo"></TagController>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import API from '../../api';
import TagController from './TagController.vue';
import tagTable from './TagTable.vue';
const uuid=require('uuid-v4');
@Component({
  components: { TagController, tagTable }
})
export default class Tag extends Vue {
  $refs!:{
    adel: TagController,
    tagTable:tagTable
  }
  public dialogVisible: boolean = false;
  public tableData:any[] = [];
  public treeTableData:any[]=[];
  public componentID:any = uuid();
  async mounted() {
    await this.getTagData();
    const firstData = this.firstData();
    this.mapTagData(firstData);
    this.treeTableData = firstData;
  }
  
  async getTagData(){
    try{
      const res = await API.tags.getTags();
      if(res && res.status === 200 && res.data){
        this.tableData = res.data;
      }
    }catch(err){
      this.$message.error('获取标签页失败');
    }
  }

  //改
  handleEdit(index:any, row:any) {
    this.$refs.adel.show({ row: row, index: index, readonly: false });
  }

  echo(data:any) {
    const changeData = this.tableData[data.index];
    this.tableData.splice(data.index, 1, data);
  }
  //增
  handleAdd() {
    this.$refs.adel.show({ index: this.tableData.length });
  }
  //删除
  handleDelete(index:any, row:any) {
    this.$confirm('确定要删除(' + row.label + ')?', row.label, {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
    .then(() => {
              
    })
    .catch(() => {

    });
  }
  //查看
  handleLook(index:any, row:any) {
    this.$refs.adel.show({ row: row, index: index, readonly: true });
  }
  //整理数据
  firstData() {
    const data = this.tableData;
    let arrData: any[] = [];
    for (var b = 0; b < data.length; b++) {
      let isHasParent: boolean = false;
      let recordVal: any = null;
      for (var d = 0; d < data.length; d++) {
        if (data[b].parentId === data[d]._id) {
          isHasParent = true;
        }
        if (!isHasParent) {
          recordVal = data[b];
        } else {
          recordVal = null;
        }
      }
      if (!isHasParent && recordVal !== null){
         recordVal.select =false;
         arrData.push(recordVal);
      }
    }
    return arrData;
  }
  mapTagData(firstData:any) {
    const data = this.tableData;
    if (firstData instanceof Array && firstData.length >0) {
      for (var i = 0; i < firstData.length; i++) {
        for (var a = 0; a < data.length; a++) {
          if (data[a].parentId === firstData[i]._id) {
            if (firstData[i].children === undefined) {
              firstData[i].children = [];
              data[a].select = false;
              firstData[i].children.push(data[a]);
            } else {
              data[a].select = false;
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
  
  expandRow(row:any, expandedRows:any) {
    this.$nextTick(() => {
      try {
        this.$refs.tagTable.updataTagTableData(row.children);
      } catch (err) {
        console.log(err);
      }
    });
  }

  //组件销毁前把数据保存早vueX中，已备在上传图片页面使用
  beforeDestroy() {
    this.$store.commit('allTags', {
      data: this.tableData
    });
  }
}
</script>

<style lang='scss' scoped>
#tag {
  position: absolute;
  top: 44px;
  bottom: 0px;
  z-index: 300;
  width: 100%;
}
</style>