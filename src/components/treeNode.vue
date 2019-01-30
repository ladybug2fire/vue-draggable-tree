<template>
  <div>
    <div :class="['node']" @drop="dropHandler" ref="node">
        <span :class="[{'nodeActive': nodeActive},{'arrow': childs && childs.length > 0}]"
            @click="clickHandler"
        ></span>
        <slot v-bind="{node:{ node } , data: node.data }"></slot>
        <span :class="{'dragover': dragover}" v-if="!hasDefaultSlot">{{node.data.name}}-<font color="green">{{unaKey}}</font></span>
    </div>
    <div
      :class="['children-node', {'nodeActive': nodeActive}]"
      v-if="childs"
    >
    <draggable v-model="childs" :options="options" class="vue-draggle-tree-node-container" :move="onMove" 
        v-if="!hasDefaultSlot"
        @end="onEnd" @add="onAdd" @remove="onRemove">
        <tree-node :una-key="k" :options="options" :parent="unaKey" :allow-drop="allowDrop" v-for="k in childs" :key="k" />
    </draggable>
    <draggable v-model="childs" :options="options" class="vue-draggle-tree-node-container" :move="onMove" 
        v-else
        @end="onEnd" @add="onAdd" @remove="onRemove">
        <tree-node :una-key="k" :options="options" :parent-key="unaKey" :allow-drop="allowDrop" v-for="k in childs" :key="k">
            <template slot-scope="slotProps">
                <slot v-bind="slotProps"/>
            </template>
        </tree-node>
    </draggable>
    </div>
  </div>
</template>

<script>
import treeBase from "../util/draggable-tree";
import _ from 'lodash';
export default {
  props: ["parentKey","unaKey"],
  name: "treeNode",
  mixins: [treeBase],
  data() {
    return {
      nodeActive: true,
      dragover: false,
      tree: null, 
    };
  },
  inject:['rootTree'],
  computed:{
    node(){
      return _.isMap(this.instances) && this.instances.get(this.unaKey);
    },
    childs:{
        get(){
          return _.get(this.node, 'childs');
        },
        set(v){
          this.$store.dispatch('updateChilds', {
            key: this.unaKey,
            childs: v,
          })
        }
    },
  },
  methods: {
    dropHandler() {
      this.nodeActive = true;
    },
    clickHandler() {
      this.$set(this, "nodeActive", !this.nodeActive);
      this.tree.$emit("node-click", this.instance);
    },
  },
  mounted(){
    this.tree = this.rootTree();
  }
};
</script>

<style lang="less" scoped>
.node {
  padding: 2px 10px;
  border-radius: 2px;
  margin: 2px 0;
  display: flex;
  cursor: pointer;
  &:hover {
    background-color: #f5f7fa;
  }
}
.arrow {
  &:before {
    content: "\25BA";
    font-size: 5px;
    width: 16px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    vertical-align: middle;
    color: #606266;
    display: inline-block;
    transition: all 0.3s;
  }
  &.nodeActive {
    &:before {
      transform: rotate(90deg);
    }
  }
}
.children-node {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s;
  &.nodeActive {
    max-height: 3000px;
  }
}
</style>