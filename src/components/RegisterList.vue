<template>
  <el-form
    :model="registerList.params"
    ref="registerList"
    label-width="100px"
    class="demo-dynamic register-form"
  >
      <el-form-item
        prop="username"
        label="用户名："
        :rules="valueRules.username"
      >
         <el-input  v-model="registerList.params.username"></el-input>
     </el-form-item>
     <el-form-item
        prop="password"
        label="密码："
        :rules="valueRules.password"
      >
         <el-input  v-model="registerList.params.password"></el-input>
     </el-form-item>
     <el-form-item
        prop="name"
        label="姓名："
        :rules="valueRules.nickname"
      >
         <el-input  v-model="registerList.params.name"></el-input>
     </el-form-item>
     <el-form-item
        prop="phone"
        label="手机号："
        :rules="valueRules.phone"
      >
         <el-input  v-model="registerList.params.phone"></el-input>
     </el-form-item>
     <el-form-item
        prop="email"
        label="邮箱："
        :rules="valueRules.email"
      >
         <el-input  v-model="registerList.params.email"></el-input>
     </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="submitForm('registerList')">提交</el-button>
          <el-button @click="resetForm('registerList')">重置</el-button>
      </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'

@Component
export default class RegisterList extends Vue {
  //   @Prop() private msg!: string;
  @State valueRules:any;
  // @Mutation CHECK_PHONE:any;
    // this.CHECK_PHONE()
  created(){
   
  }
  registerList = {
     params: {
      email: "",
      username:"",
      phone:"",
      name:"",
      password:''
    }
  };

  async submitForm(formName: any) {
    let validateForm:boolean;
    try{
       validateForm= await (this.$refs[formName] as any).validate();
    }catch(err){
       validateForm=false
    }
    if(!validateForm) return;
    try{
      let data= await this.$axios.post('/user/user/', this.registerList.params);
      if(data.status==200){
        console.log(data)
        console.log(data.status)
          this.$message({message: '注册完成', type: 'success'});
      }else{
          let msg = '注册失败';
        switch (<number | string>data.data.code) {
          case 'invalid_param':
            msg = msg + '，参数不合法';
            break;
          case 10001:
            msg = msg + '，用户名不可用';
            break;
          case 10002:
            msg = msg + '，邮箱不可用';
            break;
          default:
            break;
        }
        this.$message({message: msg, type: 'warning'});
      }
    }catch(err){
        console.log(err)
    }
  }

  resetForm(formName:any) {
    ((this.$refs[formName])as any).resetFields();
  }
}
</script>

<style lang='scss'>
    //全局设置样式
    .el-input__inner{
      height: 35px !important;
    }
    //局部设置样式
    .register-form{
        .el-form-item__label{
            // text-align: left;
            // width:70px !important;
        }
        .el-form-item__content{
          // margin-left: 70px !important;
          // width: 202px;
        } 
    } 
    
</style>