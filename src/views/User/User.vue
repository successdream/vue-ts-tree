<template>
  <div id="User" style="position:absolute;top:80px">
     <div class="display:flex;">
       <span>我是UserSlot组件</span>
       <span>我是UserCHild组件</span>
       <!-- <component></component> -->
     </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue, Mixins } from "vue-property-decorator";
import hotkeys from "hotkeys-js";
// import UserSlot from "./UserSlot.vue";
// import UserChiild from "./UserChiild.vue";
const uuidv4 = require("uuid/v4");
export default Vue.extend({
  data() {
    return {
      hotkeyss: uuidv4()
    };
  },
  mounted() {
    hotkeys("ctrl+a", this.hotkeyss, function(event, handler) {
      alert(6);
    });
    hotkeys("a", this.hotkeyss, function(event, handler) {
      alert(7);
    });
    hotkeys.setScope(this.hotkeyss);

    console.log(hotkeys.getScope());
  },
  methods: {},
  components: {
  },
  //必须以空格间隔
  beforeDestroy() {
    hotkeys.unbind("a, ctrl+a", this.hotkeyss);
  }
});
</script>
<style lang="scss">
#User {
}
</style>

