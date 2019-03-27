<template>
  <div id="User" style="position:absolute;top:80px">
      我在上面
      <slot></slot>  
     <slot name="header"></slot>
     <slot name="main"></slot>
     <slot name="footer"></slot>
     
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({

})
export default class UserSlot extends Vue{
   
}

</script>
<style lang="scss">
#User {
      
}
</style>

