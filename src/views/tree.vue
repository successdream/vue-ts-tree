<template>
  <div id="tree">
    <br>
    <br>
    <br>
    <el-tree
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
      :render-content="renderTreeNode"
      @node-expand="expandNode"
      @node-collapse="expandCollapse"
    ></el-tree>
  </div>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class tree extends Vue {
  data = [
    {
      label: "一级 1",
      children: [
        {
          label: "二级 1-1",
          children: [
            {
              label: "三级 1-1-1"
            }
          ]
        }
      ]
    },
    {
      label: "一级 2",
      children: [
        {
          label: "二级 2-1",
          children: [
            {
              label: "三级 2-1-1"
            }
          ]
        },
        {
          label: "二级 2-2",
          children: [
            {
              label: "三级 2-2-1"
            }
          ]
        }
      ]
    },
    {
      label: "一级 3",
      children: [
        {
          label: "二级 3-1",
          children: [
            {
              label: "三级 3-1-1"
            }
          ]
        },
        {
          label: "二级 3-2",
          children: [
            {
              label: "三级 3-2-1"
            }
          ]
        }
      ]
    }
  ];
  defaultProps = {
    children: "children",
    label: "label"
  };

  mounted() {
    const child = this.$children;
  }
  renderTreeNode(h, { node, data, store }) {
    return (
      <div class="fool">
        <span
          class={{
            icon: data.children && data.children.length,
            "icon-pic-close": true
          }}
          ref="icon"
        />
        <span class='fool-content'>{data.label}</span>
      </div>
    );
  }
  handleNodeClick() {}
  expandNode(data, node, item) {
    const iconHtml = item.$children[0].$el.children[0];
    if (iconHtml.classList.contains("icon-pic-close")) {
      iconHtml.classList.remove("icon-pic-close");
      iconHtml.classList.add("icon-pic-open");
    } else {
      iconHtml.classList.remove("icon-pic-open");
      iconHtml.classList.add("icon-pic-close");
    }
  }
  expandCollapse(data, node, item) {
    const iconHtml = item.$children[0].$el.children[0];
    if (iconHtml.classList.contains("icon-pic-close")) {
      iconHtml.classList.remove("icon-pic-close");
      iconHtml.classList.add("icon-pic-open");
    } else {
      iconHtml.classList.remove("icon-pic-open");
      iconHtml.classList.add("icon-pic-close");
    }
  }
}
</script>
<style lang='scss'>
#tree {
  
}
</style>

<style lang='scss' >
#tree {
  .fool {
    width: 200px;
 
  }

  .tree-icon {
    display: inline-block;
  }
  .icon {
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align:middle;
  }
  .icon-pic-close {
    background-image: url("../../public/images/right-circle-fill.svg");
    background-size: cover;
  }
  .icon-pic-open {
    background-image: url("../../public/images/down-circle-fill.svg");
    background-size: cover;
  }
  .el-icon-caret-right:before {
    content: "" !important;
  }
  .fool-content{
    padding-left:20px;
    // border:1px solid #ccc;
    width: 200px;
    display: inline-block;
    padding-top:5px;
    padding-bottom:5px;
  }
  .el-tree-node__content{
    height: 40px !important;
  }
}
</style>


