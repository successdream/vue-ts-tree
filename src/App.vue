<template>
  <div id="app">
    <!-- <router-view/> -->
    <Comprehensive></Comprehensive>
  </div>
</template>
<script lang="ts">
import Comprehensive from './views/Comprehensive.vue';
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Comprehensive
  }
})
export default class comprehensive extends Vue{

}
</script>
<style lang="scss" scoped>
   #app{
     width: 100%;
     height: 100%;
   }
</style>
