<template>
  <div id="Comprehensive" style="position:absolute;top:80px">
    我是Comprehensive
    <el-input :value="input" @input="inputValue" ref="aaa"></el-input>
    <div v-show="false" > {{ inputValue }} </div>
    <div v-if="show">超过了十个字</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
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
  private input = '';
  @Watch('input', { deep: true} )
  // inputChange(value: any) {
  //   // this.inputValue = value;;
  //   console.log(value, '000')
  //   if( value.length > 3 ) {
  //     this.show = true;
  //     const val = this.input.slice(0, 3);
  //     console.log(val, 'val123')
  //     this.input = val;
  //     // this.$forceUpdate()
  //   }
  // }
  private inputValue(value: any) {
    console.log(value, 'value666s=')
    if(value.length > 3) {
      const a = value.slice(0, 3);
      console.log(a, '11')
      this.input = a;
      // this.$refs.aaa.value = a;
      
    } else {
      console.log(value, 'value666')
      this.input = value
      // this.$refs.aaa.value = value;

    }
  }
  // get inputValue() {
  //   console.log(this.input, 'get')
  //   return this.input;
  // }
  // set inputValue (value: any) {
  //   console.log(value.length, 'len', value)
  //   if(value.length > 3) {
  //     console.log('大雨10', value)

  //     const item = value.slice(0,3);
  //     this.show = true;
  //     console.log(item, 'item666')
  //     this.input = item;
  //     console.log(this.input, 'input')
  //   } else {
  //     console.log('小雨10', value)
  //     this.input = value;
  //   }

    
  //   // console.log(13)
  // }
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
  private that = this;
  private show = false;


  private numberValidateForm = {
    age: ''
  }



  private handler = {
    set(obj:any, prop: any, value: any) {
      console.log(obj, 'handle')
      // console.log('我执行了')
      
      if(prop === 'inputValue' && value.length > 10) {
        const str = new String(value + '')
        const item = str.slice(0, 10);
        // console.log(this, 'this')
        // this.inputValue.
        // tha.tahtt.$set(that.that.inputValue,)
        // this.show = true;
        // console.log(item, 'item111')
        obj[prop]  = item
        obj.$set(obj, 'inputValue', item)
        obj.show = true;

        return true;
      }
      // @ts-ignore
      // obj[prop]  = value
      obj.$set(obj, 'inputValue', value)

      return true;
    }
  }

  mounted() {
    // this.testPoxy();
  }



  // private testPoxy() {
  //   console.log(this, 'value-testPoxy')
  //   const that = this;
  //  const a =  new Proxy(that, this.handler)
  
  //   // console.log(a, '999')
  //   // this.inputValue = a;
  //   // console.log(this.inputValue.value)
    
  // }

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

