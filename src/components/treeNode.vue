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
        <slot v-bind="{node:node , data:parent }"></slot>
        <span :class="{'dragover': dragover}" v-if="!hasDefaultSlot">{{node.label}}</span>
    </div>
    <div :class="['children-node', {'active': active}]">
        <slot name="tree"/>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
    props: ['node', 'parent'],
    data () {
        return {
            active: true,
            dragover: false
        }
    },
    computed:{
        hasDefaultSlot(){
            return !!this.$scopedSlots.default;
        }
    },
    methods: {
        dragEnterHandler ($event) {
            // console.log(this.$refs.node !== $event.target)
            this.dragover = true
        },
        dragLeaveHandler () {
            this.dragover = false
        },
        dropHandler () {
            this.dragover = false
            this.active = true
        },
        dragoverHandler: _.throttle(function () {
            // console.log('dragover')
            // if (!this.node.children) {
            //     this.$set(this.node, 'children', [])
            // }
        }, 1000),
        clickHandler () {
            console.log(this.parent)
            this.$set(this, 'active', !this.active)
        }
    }
}
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
