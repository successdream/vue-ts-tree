<template>
  <div id="popup">
       <el-dialog
            title="找回密码"
            :visible.sync="changeItem"
            width="30%"
            :before-close="handleClose">
             <div>
                <el-form :model="emailData" :inline='true' ref="email">  
                   <el-form-item prop="email" label="您的注册邮箱" :rules="[{ type: 'email', required: true, message: '请输入正确的邮箱账号', trigger: 'blur' }]"  >
                        <el-input v-model="emailData.email"></el-input>
                   </el-form-item>
                </el-form>
                <!-- 我是显示的信息 -->
             </div>
            <span slot="footer" class="dialog-footer">
                <el-button ref="cancel"  @click="handleClose" >取 消</el-button>
                <el-button ref="prompt" type="primary" @click="handleClose();sumbitEmail() " >确 定</el-button>
            </span>
        </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch , Emit} from 'vue-property-decorator';
import qs from 'qs';

@Component
export default class GetPassWord extends Vue {
     @Prop({
         type:String,
         default: "Default Value" 
     }) getword:any;
     dialogVisible=false;
     emailData={
         email:''
     };

     //computed
    get changeItem(){
           return this.getword ==="false"? false : true;
    }
    //推荐使用this.$emit方法
    handleClose(){
         this.dialogVisible=false;
         this.$emit("handle-close", this.dialogVisible);
         
    }
    //提交后台
    async sumbitEmail(){
        let res;
        try{
               res=await ((this.$refs.email)as any).validate();
        }catch(err){
              res=false;
        }
        
       if(!res) return;
        try{
           
            let sumbitData=await this.$axios.put('/user/resetpwd/', this.emailData);
            if(sumbitData.status===200){
                    
            }
        }catch(err){
             
             console.log(err)
             this.$message.error("操作失败");
        }
    }
  
}
</script>

<style scoped lang="scss">
  #popup{
      
  }
</style>
