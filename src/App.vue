<template>
  <div id="app">
    <div>
      <tree v-model="tree">
        <template slot-scope="{node, data}">
          <div>
            <span @click="doProcess(node, data)">{{node.label}}-删除</span>
          </div>
        </template>
      </tree>
    </div>
    <div>
      <tree2 v-model="tree1" @treeDrop="listenDrop"
        @node-click = "nodeClick"
        :group-key="'tree'"
        :allow-drop="allowDrop"
      /> 
    </div>
  </div>
</template>

<script>
import tree from "./components/wrappedTree.vue";
import tree2 from "./components/tree.back.vue";
export default {
  name: "app",
  components: {
    tree,
    tree2
  },
  data() {
    return {
      tree: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2",
              children: [
                {
                  id: 11,
                  label: "三级 3-2-1"
                },
                {
                  id: 12,
                  label: "三级 3-2-2",
                  isContainer: true,
                },
                {
                  id: 13,
                  label: "三级 3-2-3",
                  children: [],
                  isContainer: true,
                }
              ]
            }
          ]
        }
      ],
      tree1: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2",
              children: [
                {
                  id: 11,
                  label: "三级 3-2-1"
                },
                {
                  id: 12,
                  label: "三级 3-2-2",
                  isContainer: true,
                },
                {
                  id: 13,
                  label: "三级 3-2-3",
                  children: [],
                  isContainer: true,
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods:{
    listenDrop(v){
    },
    nodeClick(v){
    },
    allowDrop(dg, drop, t){
      return t !== 'inner' ? true : (drop && !!drop.isContainer);
    },
    doProcess(node, data){
      console.log('slot ....--->', node, data)
    }
  }
};
</script>

<style>
#app {
  margin-top: 60px;
  display: flex;
}
</style>
