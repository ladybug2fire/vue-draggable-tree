/**
 * hover/focus 当前节点高亮
 * 
 */
import draggable from "vuedraggable";

export default {
    name: 'treeNode',
    components: {
        draggable
    },
    props: ['groupKey', 'options', 'data'],
    data(){
        return {
            prefixCls: 'my-tree',
        }
    },
    methods:{
        recursiveTree(curList, h){
            return h('draggable',{
                domProps: {
                    // 这里是 getters 从store 中获取
                    value: curList
                },
                props: {
                    options:{
                        ...this.options,
                        animation: 100, 
                        group: this.groupKey || 'vue-draggable-tree', 
                        swapThreshold: 0.1,
                    }
                },
                on: {
                    input: function (event) {
                      // 这里修改 commit
                      self.$emit('input', event.target.value)
                    }
                }
            }, curList.map(e=>{
                let children = null;
                if(e.children){
                    // children 需要重新计算一下
                    children = this.recursiveTree(e.children, h)
                }
                return h('li',[e.label, h('ul', [children])])
            }))
        }
    },
    render(h){
        const list = this.recursiveTree(this.data, h);
        return h('div', [list])
    }
}