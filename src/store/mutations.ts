import TYPES from './types'
import { MutationTree } from 'vuex'
import { CHECK_PHONE , ALL_USER} from './mutain-types'

const mutations: MutationTree<any> = {
  // [TYPES.SET_MODULES](state, modules): void {
  //   state.modules = modules
  // },
     //检验手机号码
    //  [CHECK_PHONE](state,payload):any{
    //    payload=parseInt(payload);
    //   if(!(/^1[34578]\d{9}$/.test(payload))){ 
         
    //   } else{
    //   }
    //  }

    [ALL_USER](state,payload){
          state.allUser=payload
    }
}
export default mutations
