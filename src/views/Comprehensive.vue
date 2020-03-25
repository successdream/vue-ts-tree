<template>
  <div id="Comprehensive" style="position:absolute;top:80px">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import  ElForm  from 'element-ui'
import { ElForm} from 'element-ui/types/form'
// const uuid=require('uuid-v4');
// import uuid from 'uuid-v4'

@Component({
})
export default class comprehensive extends Vue{
  public $refs!: {
    ruleForm: ElForm,
  }
  private ruleForm = {
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: '',
    type: '',
    resource: '',
    desc: ''
  }
  private rules ={
    name: [ { required: true, validator: this.validatorName} ],
    region: [ { required: true, message: '年龄不能为空'} ],
    date1: [ { required: true, message: '年龄不能为空'} ],
    date2: [ { required: true, message: '年龄不能为空'} ],
    delivery: [ { required: true, message: '年龄不能为空'} ],
    type: [ { required: true, message: '年龄不能为空'} ],
    resource: [ { required: true, message: '年龄不能为空'} ],
    desc: [ { required: true, message: '年龄不能为空'} ],
  }
  private numberValidateForm = {
    age: ''
  }
  mounted() {

  }

  private validatorName(rule: any, value: string, callback: any) {
    if (value === '') {
      // callback(new Error('请输入密码'));
      callback(new Error('请输入密码'));

    } else if(value.length > 6){
      // if (this.ruleForm.name !== '') {
      //   this.$refs.ruleForm.validateField('name');
      // }
      callback(new Error('名字内容不能多余六个字'))
      // callback();
    } else if ( value.length < 4) {
      callback(new Error('名字内容不能少于四个字'))
    }
    // switch(value) {
    //   case '':
    //     callback(new Error('请输入密码'));
    //     break;
    //   case 
    // }
  }

  private submitForm() {
    this.$refs.ruleForm.validate((valid, object) => {
      console.log(valid, 'valid111', object)
    })
  }

  private resetForm() {
    console.log(6666)
     this.$refs.ruleForm.resetFields();
  }
}
</script>
<style lang="scss">
</style>

