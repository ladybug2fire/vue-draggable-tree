<template>
    <div>
      <draggable v-model="tree" :options="dragOptions" class="container"
        @update="handleUpdate"
        @add="handleAdd"
        @sort="handleSort"
        @remove="handleRemove"
        @change="handleChange"
      >
          <div v-for="(t,i) in tree" :key="i" class="node-container"
          >
            <tree-node :node="t" :options="options" v-if="hasDefaultSlot" :parent="parent">
                <template slot-scope="{node, data}">
                    <slot v-bind="{node, data}"/>
                </template>
                <tree slot="tree" v-if="t.children" v-model="t.children" :parent="t"  :options="dragOptions">
                   <template slot-scope="{node, data}">
                        <slot v-bind="{node, data}"/>
                   </template>
                </tree>
            </tree-node>
            <tree-node :node="t" :options="options" v-else :parent="parent">
                <tree slot="tree" v-if="t.children" v-model="t.children" :parent="t" :options="dragOptions">
                </tree>
            </tree-node>
          </div>
      </draggable>
    </div>
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

import draggable from 'vuedraggable'
import treeNode from './treeNode'
import { tranverse } from '../util/tool';
export default {
    props: ['value', 'options', 'parent'],
    computed: {
        tree: {
            get () {
                return this.value;
            },
            set (value) {
                this.$emit('input', value)
            }
        },
        dragOptions () {
            return Object.assign({ animation: 0,
                group: { name: 'pages', pull: true, put: true },
                swapThreshold: 0.1
            }, this.options
            )
        },
        hasDefaultSlot(){
            return !!this.$scopedSlots.default;
        },
    },
    name: 'tree',
    components: {
        draggable,
        treeNode
    },
    methods:{
        handleUpdate(...p){
            console.log('update', p)
        },
        handleAdd(evt){
            console.log('add', evt)
        },
        handleRemove(evt){
            console.log('remove', evt)
        },
        handleSort(...p){
            console.log('on sort', p)
        },
        handleChange(...p){
            console.log('handle change', p)
        }
    }
}
</script>

<style lang="less" scoped>
.node-container{
    padding-left: 1rem;
    color: #606266;
}
.container{
    min-height: 1px;
}

</style>
