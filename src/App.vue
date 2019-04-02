<template>
  <div id="app">
    <tree v-model="tree" @treeDrop="listenDrop" @node-click="click" :data="tree2">
        <!-- <template slot-scope="{node, data}">
          <div>
           {{data.name}}<a style="color:blue" @click="doProcess(node, data)">-删除</a>
          </div>
        </template> -->
    </tree>
    <!-- <tree v-model="tree2" @treeDrop="listenDrop">
        <template slot-scope="{node, data}">
          <div>
           {{data.label}}<a style="color:blue" :options="{
             clone: v=>v,
             group: {
               pull: false,
             }
           }" @click="doProcess(node, data)">-删除</a>
          </div>
        </template>
    </tree> -->
  </div>
</template>

<script>
import tree from "./components/newTree";

export default {
  name: "app",
  components: {
    tree
  },
  data() {
    return {
      tree2: [
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
                  label: "三级 3-2-2"
                },
                {
                  id: 13,
                  label: "三级 3-2-3",
                  children: []
                }
              ]
            }
          ]
        }
      ],
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
                  label: "三级 3-2-2"
                },
                {
                  id: 13,
                  label: "三级 3-2-3",
                  children: []
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods:{
    click(...p){console.log(p)},
    listenDrop(v){
      console.log('listen', v)
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
  width: 50vw;
}
</style>
