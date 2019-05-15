<template>
  <div>
    {{msg}}
    <ul>
      <li v-for="(item,index) in arr" :key="index">{{item}}</li>
    </ul>
    <button @click="changParentVal">我改变about3组件的按钮</button>
    <!-- <AboutChild1 :changAboutChild3="changAboutChild3Val" AboutChild="AboutChild"></AboutChild1> -->
    <div>{{title}}我是testVal2222</div>
    <button @click="btnClick">按钮11111111111111111</button>
 
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import AboutChild1 from '@/components/AboutChild1.vue';
@Component({
  components:{
    AboutChild1
  }
})
export default class AboutChild extends Vue{

   
   changAboutChild3Val = '';
   arr = [1,2,3,4,5,6];
   @Watch('About',{deep:true})
   AboutChange(newVal:any){
      console.log(newVal);
   }
   beforeCreate(){
     console.log(this)
   }
   created(){
     console.log(this.$listeners);
     console.log(this.$attrs);
   }
   beforeMount(){

   }
   mounted(){
   }
   beforeUpdate(){
   }
   updated(){
   }
   beforeDestroy(){
   }
   destroyed(){
   }
   changAboutChild3Val1111(){
   }
   //按钮点击
   btnClick(){
    console.log(11111)
    this.$emit('update:title','我是子组件改变的');
   }
   changParentVal(){
     this.changAboutChild3Val = this.changAboutChild3Val + '该那边的值'+111111
   }
  
}
</script>

