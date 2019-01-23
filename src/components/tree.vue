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
       <template slot-scope="slotProps" v-if="hasDefaultSlot">
          <div>
              <slot v-bind="slotProps"/>
          </div>
      </template>
     </tree-node> 
    </draggable>
  </div>
</template>

<script>
import treeNode from "./treeNode.vue";
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
        return this.value;
      },
      set(value) {
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
};
</script>

<style lang="less">
.vue-draggle-tree-node-container {
  padding-left: 1.5rem;
  color: #606266;
  min-height: 1px;
}
</style>