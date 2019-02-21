<template>
  <div id="Task">
    <div class="task-left">
        <el-table
          ref="multipleTable"
          :data="tableData3"
          tooltip-effect="dark"
          style="width: 238px"
          @selection-change="handleSelectionChange"
          height="100%"
          :fit="false"
          cell-class-name="setit()"
        >
          <el-table-column type="selection" width="30"></el-table-column>
          <el-table-column label="日期" width="104">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="104"></el-table-column>
        </el-table>
    </div>
    <div class="task-right">
           <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="标注中" name="first">
                  <!-- 标注中 -->
                  <GoingTask></GoingTask>
                </el-tab-pane>
                <el-tab-pane label="新建任务" name="second">新建任务</el-tab-pane>
                <el-tab-pane label="历史任务" name="third">历史任务</el-tab-pane>
           </el-tabs>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import About from "./About.vue";
import Login from "./Login.vue";
import GoingTask from './GoingTask.vue';

export default Vue.extend({
  data() {
    return {
      activeName:'first',
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎"
        },
        {
          date: "2016-05-02",
          name: "王小虎"
        },
        {
          date: "2016-05-04",
          name: "王小虎"
        },
        {
          date: "2016-05-01",
          name: "王小虎"
        },
        {
          date: "2016-05-08",
          name: "王小虎"
        },
        {
          date: "2016-05-06",
          name: "王小虎"
        },
        {
          date: "2016-05-07",
          name: "王小虎"
        }
      ],
      multipleSelection: []
    };
  },
  components:{
     GoingTask
  },
  created(){
  },
  methods: {
    toggleSelection(rows: any) {
      if (rows) {
        rows.forEach((row: any) => {
          (this.$refs.multipleTable as any).toggleRowSelection(row);
        });
      } else {
        (this.$refs.multipleTable as any).clearSelection();
      }
    },
    handleSelectionChange(val: any) {
      this.multipleSelection = val;
    },
    setit({ row, column, rowIndex, columnIndex }:{row:any,column:any,rowIndex:any,columnIndex:any,[propName:string]:any}) {
      console.log(row, column, rowIndex, columnIndex);
    },
    handleClick(tab:any, event:any) {
        console.log(tab, event);
    }
  }
});
</script>
<style lang="scss">
#Task {
    position: absolute;
    top: 61px;
    bottom: 0px;
    display: flex;
    width: 100%;
    .task-left {
      height: 100%;
      // background-color: green;
      width: 238px;
    }
    .task-right {
      width: 100%;
    }
}
</style>

