<template>
    <div>
      <draggable v-model="tree" :options="dragOptions" class="container">
          <div v-for="(t,i) in tree" :key="i" class="node-container"
          >
            <tree-node :node="t" :options="options">
                <tree v-if="t.children" v-model="t.children" :options="dragOptions"/>
            </tree-node>
          </div>
      </draggable>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import treeNode from './treeNode'
export default {
    props: ['value', 'options'],
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
                group: { name: 'pages', pull: true, put: true },
                swapThreshold: 0.1
            }, this.options
            )
        }
    },
    name: 'tree',
    components: {
        draggable,
        treeNode
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
