<template>
  <div>
    <draggable
      v-model="tree"
      :options="dragOptions"
      class="node-container"
      :move="onMove"
      @end="onEnd"
    >
      <tree-node
        :node="t"
        :options="dragOptions"
        v-for="(t,i) in tree"
        :allow-drop="allowDrop"
        :key="i"
     >
       <template slot-scope="slotProps">
          <div>
              <slot v-bind="slotProps"/>
          </div>
      </template>
     </tree-node> 
    </draggable>
  </div>
</template>

<script>
import treeNode from "./treeNode.back.vue";
import treeBase from "../util/draggable-tree";
export default {
  name: "tree",
  props: ["value", "groupKey"],
  mixins: [treeBase],
  data() {
    return {
      isTree: true,
    };
  },
  computed: {
    tree: {
      get() {
        console.log('2 inner get', this.value)
        return this.value;
      },
      set(value) {
        console.log('2 inner set', this.value)
        this.$emit("input", value);
      }
    },
    dragOptions() {
      return Object.assign(
        { animation: 0, group: this.groupKey || 'vue-draggable-tree', swapThreshold: 0.1 },
        this.options
      );
    }
  },
  components: {
    treeNode
  },
  // NOTE: 数据清理，新建一个专用于节点的树，包含数据和节点
  created(){
    
  }
};
</script>

<style lang="less">
.vue-draggle-tree-node-container {
  padding-left: 1.5rem;
  color: #606266;
  min-height: 1px;
}
</style>
