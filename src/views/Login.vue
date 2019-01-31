<template>
  <div class="ecv-flex" v-loading.fullscreen.lock="fullscreenLoading" id="login">
    <div class="ecv-login-table" @keyup.enter="loginSubmit">
      <img src="../assets/images/logo-main-dark.png" style="width: 300px; height: auto;">
      <div class="title">图像标注管理系统</div>
      <el-tabs v-model="activeTab" style="height: auto;">
        <el-tab-pane label="登录" name="login" style="display: flex;">
          <el-form :model="params.login"  ref="login" label-width="80px" inline>
            <el-form-item label="用户名：" prop="username"  :rules="valueRules.username">
              <el-input v-model.trim="params.login.username" :autofocus="true"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password"  :rules="valueRules.password">
              <el-input type="password" v-model="params.login.password"></el-input>
            </el-form-item>
            <el-form-item style="float:right; padding-right:30px;">
              <el-button type="text" @click.stop.prevent="dialogVisible='true'">忘记密码?</el-button>
              <el-checkbox style="padding:0px 10px 0px 10px;" v-model="rememberMe">记住我</el-checkbox>
              <el-button type="primary" @click="loginSubmit">登录</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册" name="signup">
           <RegisterList></RegisterList>
        </el-tab-pane>
      </el-tabs>
 
    </div>
        <GetPassWord :getword='dialogVisible' @handle-close='dialog'></GetPassWord>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import RegisterList from '../components/RegisterList.vue';
import GetPassWord from '../components/GetPassWord.vue'


import qs from 'qs';
@Component({
  components:{
      RegisterList,
      GetPassWord
  }
  
})

export default class Login extends Vue {
  @State valueRules:any;
  tokenSrorageKey = "AUTH_TOKEN";
  activeTab = "login";
  params = {
    login: { username: "", password: "", grant_type: "password" }
  };
  rememberMe = true;
  fullscreenLoading = false;
  dialogVisible = "false";
  findPwdParams = { email: "" };
  myAccount = {};
  get add() {
    return this.$store.state.login;
  }
  dialog(data:any){
   
      this.dialogVisible=data+''
  }
  async created() {
    const auth =
      sessionStorage.getItem(this.tokenSrorageKey) ||
      localStorage.getItem(this.tokenSrorageKey);
    await this.checkAuthorization(auth);
  }

  async checkAuthorization(auth: any) {
    if (!auth) return false;
    this.$axios.defaults.headers.common.Authorization = auth;
    await this.getMyAccount();
    if (this.myAccount) {
      //登陆过后，在此处跳转
      this.$router.push({ path: "/" });
    } else {
      console.log(this.myAccount == true);
    }
  }

  async getMyAccount() {
    try {
      let res = await this.$axios.get("/user/user/");
      this.myAccount = res;
    } catch (err) {
      console.log(err);
    }
  }

     async loginSubmit() {
      if (this.activeTab !== 'login') return;

      if (!await  ((this.$refs.login)as any).validate()) return;


      let res:any;
      try {
        res = await this.$axios({
          method: 'post', url: '/user/token/',
          headers: {'Authorization': 'Basic Yzpz'},
          //表单序列化
          data: qs.stringify(this.params.login),
        }); 
        if (res.status === 200) {
          //结构数组
          const {token_type, access_token} = res.data;
          //拼接字符串
          const auth = `${token_type} ${access_token}`;
          //根据token获取用户信息
          await this.checkAuthorization(auth);
          //缓存token
          sessionStorage.setItem(this.tokenSrorageKey, auth);
           
          if (this.rememberMe) localStorage.setItem(this.tokenSrorageKey, auth);
          else localStorage.removeItem(this.tokenSrorageKey);
        }
      } catch (error) {

        this.$message.error(error.response.status);

      }
    }

   //忘记密码

}
</script>
<style  scoped>
.ecv-login-table {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 300px;
  height: auto;
  /* background-color: #c3d0e830; */
  padding: 32px;
  opacity: 0.9;
}
.title {
  margin: 20px 0 20px 0;
  color: #505458;
  font-size: 1.3em;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
#login{
  /* background-color: #dccec054; */
}
</style>