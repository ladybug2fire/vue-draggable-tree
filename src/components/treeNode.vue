<template>
  <div>
    <div :class="['node']" @drop="dropHandler" ref="node">
        <span :class="[{'active': active},{'arrow': childs && childs.length > 0}]"
            @click="clickHandler"
        ></span>
        <slot name="leaf" v-bind="{node:{ node } , data: node.data }"></slot>
        <span :class="{'dragover': dragover}" v-if="!hasDefaultSlot">{{node.data.name}}-<font color="green">{{unaKey}}</font></span>
    </div>
    <div
      :class="['children-node', {'active': active}]"
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
        <tree-node :una-key="k" :options="options" :parent="unaKey" :allow-drop="allowDrop" v-for="k in childs" :key="k">
            <template slot-scope="slotProps" slot="leaf">
                <slot name="leaf" v-bind="slotProps"/>
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
      active: true,
      dragover: false,
      tree: null, 
    };
  },
  inject:['rootTree'],
  computed:{
    instances(){
      return this.$store.getters.getInstances;
    },
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
      this.active = true;
    },
    clickHandler() {
      this.$set(this, "active", !this.active);
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
  padding: 0.2rem 1rem;
  border-radius: 0.2rem;
  margin: 0.2rem 0;
  display: flex;
  cursor: pointer;
  &:hover {
    background-color: #f5f7fa;
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
    transition: all 0.3s;
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