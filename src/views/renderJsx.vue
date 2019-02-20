
<template>
  <div v-bind:class="[]">
    <br>
    <br>
    <br>我是renderJsx组件
    <h1 class="animated infinite bounce ">Example</h1>
    <transition>
   
        <div>
          <p>我被当作了子模快</p>
        </div>

    </transition>
    <button @click="closeOrOpen" out-in>{{val}}</button>
  </div>
</template>

<script>
import { Component, Vue, Inject, Provide, Watch } from "vue-property-decorator";
import renderJsxChild from "@/components/renderJsxChild.vue";
@Component({
  components: {
    renderJsxChild
  }
})
export default class renderJsx extends Vue {
  show = true;
  val = 'on';
  closeOrOpen(){
    if(this.val==='on') this.val='off'
    else this.val='on'
  }
}
</script>
<style>

.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}

</style>


