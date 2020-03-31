<template>
  <div>
    <div>
      我是test的vue 
    </div>
    <el-input :value="checked" placeholder="请输入内容" @change="changeInput"></el-input>
    <el-button type="primary" @click="addToCount('qqq')">主要按钮</el-button>
    <div>{{foo}}-1</div>
    <div>{{bar}}-1</div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch,Model, Emit, Inject } from 'vue-property-decorator';
// import AboutChild1 from '@/components/AboutChild1.vue';
@Component({
})
export default class Test extends Vue{
  @Model('change', { type: String }) readonly checked!: String;
  private show = false;
  // return 优先级最高 
  // 1 子组件驼峰写法，父组件是 a-a-a写法
  // 2 无return 则默认返回传递的参数
  @Inject() readonly foo!: string;
  @Inject() readonly bar!: string;

  @Emit()
  addToCount(a: any) {
    console.log('888')
    // if(this.show) {
    //   console.log('a')
    //   this.show = !this.show;
    //   return 11
    // } else {
    //   console.log('b')
    //   this.show = !this.show;
    //   return 22
    // }
    // return '0000'
  }
  // private input = '';
  private changeInput(val: any) {
    console.log(999)
    this.$emit('change', val)
  }

}
</script>

