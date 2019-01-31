import { ActionTree } from 'vuex'
import { ALL_USER } from  './mutain-types'
import axios from 'axios'
 interface commitType{
    commit:any
 }
const actions= {
    
    async getAllUser({commit}:{commit:any}) {
        try {
          const res = await axios.get('/user/users');
          if (res.status === 200) {
            commit("ALL_USER", res.data);
          };
        } catch (error) {
          console.log('获取用户列表失败');
        }
    }
}

export default actions
