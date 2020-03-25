
<template>
  <div v-bind:class="[]">
    <br>
    <br>
    <br>我是renderJsx组件
    <h1 class="animated infinite bounce ">Example</h1>
    <transition>
   
        <div  v-tack:left='300'>
          <p>我被当作了子模快</p>
        </div>

    </transition>
    <button @click="closeOrOpen" out-in>{{val}}</button>
    <input v-focus>
    <!-- <todo-list >
  <template >
    <span v-if="todo.isComplete">✓</span>
    {{ todo.text }}
  </template>
</todo-list> -->
    <renderJsxChild v-bind:todos="todos">
        <template scope ="{ todo }">
         {{ todo.text }}
        </template>
    </renderJsxChild>
  </div>
</template>

<script>
import { Component, Vue, Inject, Provide, Watch } from "vue-property-decorator";
import renderJsxChild from "@/components/renderJsxChild.vue";
Vue.directive('tack',{
  //binding.arg是bind后面的:加的参数
  //binding.value是bind后面的值
  bind(el,binding,vnode){
    el.style.position='fixed';
    const s = (binding.arg == 'left'? 'left':'top')
    el.style[s]=binding.value+'px';
  }
})
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
@Component({
  components: {
    renderJsxChild
  }
})
export default class renderJsx extends Vue {
  // user={
  //   number: 'number'
  // }
  slotProps = 'abcd'
  show = true;
  val = 'on';
  todos = [
    {
      text: 1
    },
        {
      text: 2
    },
        {
      text: 3
    },
  ]
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


