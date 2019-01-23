<template>
    <div>
      <tree v-model="tree"
      >
       <template slot-scope="{node, data}">
            <slot v-bind="{node, data}"/>
            </template>
      </tree>
      <pre>
        {{JSON.stringify(tree, null, 2)}}
      </pre>
    </div>
</template>

<script>
import tree from "./draggableTreeNode.vue";
import { tranverse } from '../util/tool';
export default {
  name: "app",
  props: ['value'],
  components: {
    tree,
  },
  data() {
      return {
          isTree: true,
      }
  },
  computed:{
    tree: {
            get () {
                // const wrappedTree = tranverse.bind(this)(this.value, null);
                console.log('get', this.value);
                return this.value;
            },
            set (value) {
                console.log('set', value)
                this.$emit('input', value)
            }
    },
  }

};
</script>

<style>

</style>
