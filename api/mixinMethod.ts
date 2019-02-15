
import { Component, Vue } from "vue-property-decorator";
@Component
export class MyMixin extends Vue {
  mixinValue = 'Hello';
  hello(){
    alert(6666)
  }

}

