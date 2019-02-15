import Vue, { VNode } from 'vue'
import axios,{ AxiosInstance } from 'axios';
import moment from 'moment';
import lodash from 'lodash';
declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
declare global {
  interface Window {
      axios: AxiosInstance,
      //typeof moment挺有意思啊！类型不报错了
      moment:typeof moment
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance
  }
}
declare global {
  const _: typeof lodash
}
