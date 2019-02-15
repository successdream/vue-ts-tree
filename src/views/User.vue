<template>
  <div id="User" style="position:absolute;top:80px">我是用户列表
    <userslot>
      <div>21111321</div>
       <div slot="header">我是 头部</div>
       
       <div slot="main">我是 主题</div>
       <div slot="footer">我是尾部</div>
    </userslot>
    
  </div>
</template>

<script lang="ts">
//  background-color="#727a9e91"
import { Component, Vue, Mixins } from "vue-property-decorator";
import hotkeys from "hotkeys-js";
import userslot from "@/components/UserSlot.vue";
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
    userslot
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

