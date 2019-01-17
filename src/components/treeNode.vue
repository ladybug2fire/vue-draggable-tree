<template>
  <div>
    <div
      :class="['node',{'active': active}, {'arrow': node.children && node.children.length > 0}]"
      @click="clickHandler"
      @dragover="dragoverHandler"
      @dragenter="dragEnterHandler"
      @dragleave="dragLeaveHandler"
      @drop="dropHandler"
      ref="node"
    >
        <span :class="{'dragover': dragover}">{{node.label}}</span>
    </div>
    <div :class="['children-node', {'active': active}]">
        <slot />
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
    props: ['node'],
    data () {
        return {
            active: true,
            dragover: false
        }
    },
    methods: {
        dragEnterHandler ($event) {
            console.log(this.$refs.node !== $event.target)
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
            console.log('dragover')
            if (!this.node.children) {
                this.$set(this.node, 'children', [])
            }
        }, 1000),
        clickHandler () {
            this.$set(this, 'active', !this.active)
        }
    }
}
</script>

<style lang="less" scoped>
   .node{
        padding: .2rem 1rem;
        border-radius: 0.2rem;
        margin: 0.2rem 0;
        cursor: pointer;
        &:hover{
            background-color: #f5f7fa;
        }
        & .dragover{
            background-color: #409EFF;
            color:#f5f7fa;
        }
    }
    .arrow{
        &:before{
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
        &.active{
            &:before{
                transform: rotate(90deg);
            }
        }
    }
    .children-node{
        max-height: 0;
        overflow: hidden;
        transition: max-height .3s;
        &.active{
            max-height: 3000px;
        }
    }
</style>
