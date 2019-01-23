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
        <div :class="['children-node', {'active': active}]" v-if="node.children">
            <draggable v-model="node.children" :options="options" class="vue-draggle-tree-node-container">
                <tree-node :node="t" :options="options" v-for="(t,i) in node.children" :parent="node"  :key="i"/>
            </draggable>
        </div>
  </div>
</template>

<script>
import _ from 'lodash'
import draggable from 'vuedraggable'
export default {
    props: ['node', 'options', 'parent'],
    name: 'treeNode',
    data () {
        return {
            active: true,
            dragover: false,
            tree: null,
        }
    },
    components:{
        draggable
    },
    methods: {
        dragEnterHandler () {
            this.dragover = true,
            this.tree && this.tree.$emit('treeDrop',11)
        },
        dragLeaveHandler () {
            this.dragover = false
        },
        dropHandler () {
            this.dragover = false
            this.active = true
        },
        dragoverHandler: _.throttle(function () {
            if (!this.node.children) {
                this.$set(this.node, 'children', [])
            }
        }, 1000),
        clickHandler () {
            this.$set(this, 'active', !this.active)
        }
    },
    created(){
        const parent = this.$parent.$parent;

        if (parent.isTree) {
            this.tree = parent;
        } else {
            this.tree = parent.tree;
        }

        const tree = this.tree;
        if (!tree) {
            console.warn('Can not find node\'s tree.');
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
