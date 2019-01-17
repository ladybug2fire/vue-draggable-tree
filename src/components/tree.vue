<template>
    <div>
      <draggable v-model="tree" :options="dragOptions" class="node-container">
            <tree-node :node="t" :options="dragOptions"  v-for="(t,i) in tree" :key="i"/>
      </draggable>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import treeNode from './treeNode'
export default {
    name: 'tree',
    props: ['value', 'options'],
    data() {
        return {
            isTree: true,
        }
    },
    computed: {
        tree: {
            get () {
                return this.value
            },
            set (value) {
                this.$emit('input', value)
            }
        },
        dragOptions () {
            return Object.assign({ animation: 0,
                group: 'tree',
                swapThreshold: 0.1
            }, this.options
            )
        }
    },
    components: {
        draggable,
        treeNode
    }
}
</script>

<style lang="less">
.vue-draggle-tree-node-container{
    padding-left: 1.5rem;
    color: #606266;
    min-height: 1px;
}

</style>
