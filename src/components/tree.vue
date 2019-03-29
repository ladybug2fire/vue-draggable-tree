<template>
  <div>
      <tree-node :una-key="rootInstanceKey" :options="dragOptions" :allow-drop="allowDrop" v-if="hasDefaultSlot">
       <template slot-scope="slotProps">
          <slot v-bind="slotProps"/>
       </template>
     </tree-node> 
     <tree-node :una-key="rootInstanceKey" :options="dragOptions" :allow-drop="allowDrop" v-else />
  </div>
</template>

<script>
import treeNode from "./treeNode.vue";
import treeBase from "../util/draggable-tree";
export default {
  name: "tree",
  props: ["value", "groupKey"],
  mixins: [treeBase],
  provide(){
    return {
      rootTree: ()=>this,
    }
  },
  computed: {
    rootInstanceKey(){
      return this.$store.getters.rootInstanceKey;
    },
    dragOptions() {
      return Object.assign(
        { animation: 0, group: this.groupKey || 'vue-draggable-tree', swapThreshold: 0.1 },
        this.options
      );
    },
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
}
</style>