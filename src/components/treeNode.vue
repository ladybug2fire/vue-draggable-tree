<template>
  <div>
    <div
      :class="['node']"
      @dragover="dragoverHandler"
      @dragenter="dragEnterHandler"
      @dragleave="dragLeaveHandler"
      @drop="dropHandler"
      ref="node"
    >
        <span :class="[{'active': active},{'arrow': node.children && node.children.length > 0}]"
            @click="clickHandler"
        ></span>
        <slot v-bind="{node:{parent, data: node} , data:node }"></slot>
        <span :class="{'dragover': dragover}" v-if="!hasDefaultSlot">{{node.label}}</span>
    </div>
    <div
      :class="['children-node', {'active': active}]"
      v-if="node.children"
    >
      <draggable
        v-model="node.children"
        :options="options"
        class="vue-draggle-tree-node-container"
        :move="onMove"
        @end="onEnd"
      >
        <tree-node
          :node="t"
          :options="options"
          :parent="node"
          :allow-drop="allowDrop"
          v-for="(t,i) in node.children"
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
  </div>
</template>

<script>
import treeBase from "../util/draggable-tree";
export default {
  props: ["node", "parent"],
  name: "treeNode",
  mixins: [treeBase],
  data() {
    return {
      active: true,
      dragover: false,
      tree: null,
    };
  },

  methods: {
    dragEnterHandler() {
      (this.dragover = true), this.tree && this.tree.$emit("treeDrop", 11);
    },
    dragLeaveHandler() {
      this.dragover = false;
    },
    dropHandler() {
      this.dragover = false;
      this.active = true;
    },
    clickHandler() {
      this.$set(this, "active", !this.active);
      this.tree.$emit("node-click", this.node);
    },
  },
  created() {
    const parent = this.$parent.$parent;
    if (parent.isTree) {
      this.tree = parent;
    } else {
      this.tree = parent.tree;
    }
    const tree = this.tree;
    if (!tree) {
      // eslint-disable-next-line no-console
      console.warn("Can not find node's tree.");
    }
  }
};
</script>

<style lang="less" scoped>
.node {
  padding: 0.2rem 1rem;
  border-radius: 0.2rem;
  margin: 0.2rem 0;
  display: flex;
  cursor: pointer;
  &:hover {
    background-color: #f5f7fa;
  }
  & .dragover {
    background-color: #409eff;
    color: #f5f7fa;
  }
}
.arrow {
  &:before {
    content: "\25BA";
    font-size: 0.3rem;
    width: 1rem;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    vertical-align: middle;
    color: #606266;
    display: inline-block;
    transition: all 0.5s;
  }
  &.active {
    &:before {
      transform: rotate(90deg);
    }
  }
}
.children-node {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s;
  &.active {
    max-height: 3000px;
  }
}
</style>