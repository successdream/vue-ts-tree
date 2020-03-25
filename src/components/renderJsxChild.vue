

<template>
  <ul>
  <li
    v-for="todo in filteredTodos"
    v-bind:key="todo.id"
  >
    <!--
    我们为每个 todo 准备了一个插槽，
    将 `todo` 对象作为一个插槽的 prop 传入。
    -->
    <slot name="todo" v-bind:todo="todo">
      <!-- 后备内容 -->
      {{ todo.text }}
    </slot>
  </li>
</ul>
</template>

<script lang ='ts'>
import { Component, Vue, Inject, Provide, Watch ,Prop} from "vue-property-decorator";
@Component({})
export default class renderJsxChild extends Vue {
  @Prop()todos!: any
  username = {
    firstName:'zhang',
    lastName:'ning'
  }
  mounted() {
    // console.log(this.$root.a)
  }
  get filteredTodos () {
    return  this.todos;
  }
  user = {
    xing: '张',
    ming: '宁'
  }
}
</script>