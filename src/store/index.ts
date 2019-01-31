import Vue from 'vue'
import Vuex, { ActionTree, MutationTree } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'


Vue.use(Vuex)




let state= {
  login: false,
  valueRules: {
    none: [
      { message: '请选择', trigger: 'change' }
    ],
    username: [
      { required: true, message: '请输入用户名', trigger: ['blur','change'] },
      { min: 2, max: 24, message: '长度在 2 到 24 个字符', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 6, max: 128, message: '长度在 6 到 128 个字符', trigger: 'blur' }
    ],
    nickname: [
      { max: 128, message: '最长为 128 个字符', trigger: 'blur' }
    ],
    phone: [
      {pattern: /^1[34578]\d{9}$/,  message: ' Σ( ° △ °|||)︴确定是手机号？', trigger: 'blur' }
    ],
    email: [
      { type: 'email', required: true, message: '请输入邮箱账号', trigger: 'blur' },
    ],
  },
  //初始化所有用户的信息
  allUser:{}

}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
