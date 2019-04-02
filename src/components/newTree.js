/**
 * hover/focus 当前节点高亮
 * allowDrop
 * inner, before, after
 */
import _ from 'lodash'
import draggable from "vuedraggable";
import './tree.less'
export default {
    name: 'treeNode',
    components: {
        draggable
    },
    props: ['groupKey', 'options'],
    computed: {
        instances(){
            return this.$store.getters.getInstances;
        }
    },
    data(){
        return {
            prefixCls: 'my-tree',
            draggingNode: null,
            dropNode: null,
            dropType: null,
        }
    },
    methods:{
        recursiveTree(instances, parentKey, h){
            const slots = _.get(instances, `${parentKey}.slots`, {})
            const slotGroup = _.map(_.keys(slots), e=>_.assign(_.get(slots, e), {name: e}));
            return _.map(slotGroup, slot=>{
                return h('div',
                {
                    class: 'leaf'
                },
                [   
                    h('div', {
                        class: 'slot-tag'
                    }, [slot.title]),
                    h('draggable',{
                        class: 'leaf-children',
                        props: {
                            value: _.get(slot, 'children'),
                            draggable: '.draggable-leaf',
                            options:{
                                ...this.options,
                                animation: 100, 
                                group: this.groupKey || 'vue-draggable-tree', 
                                swapThreshold: 0.1,
                            },
                            // 提取纯函数
                            move:_.throttle(({relatedContext: rctx, draggedContext: dctx})=>{
                                let draggingNode = dctx.element;
                                let dropNode = rctx.element || _.get(rctx, 'component.$parent.node');
                                this.draggingNode = draggingNode;
                                this.dropNode = dropNode;
                                console.log('move on', draggingNode, dropNode)
                                // const isContain = _.includes(rctx.list, draggingNode); 
                                // const isNewChlidren = !rctx.element && _.isEmpty(rctx.list);
                                // let dropType = null;
                                // if(isContain){
                                //     dropType = dctx.index < dctx.futureIndex ? 'after' : 'before'
                                // }else{
                                //     dropType = isNewChlidren ? 'inner' : rctx.index < dctx.futureIndex ? 'after' : 'before'
                                // }
                                // draggingNode = {... this.instances.get(draggingNode), key: draggingNode};
                                // if(dropType !== 'inner'){
                                //     dropNode = {...this.instances.get(dropNode), key: dropNode};
                                // }
                                // _.assignIn(this,{ dropType, draggingNode, dropNode });
                                // if(this.allowDrop){
                                //     return this.allowDrop(draggingNode, dropNode, dropType)
                                // }
                            }, 0),
                        },
                        on: {
                            input: (newVal)=>{
                                // 这里修改 commit
                                console.log('parent', parentKey, newVal, slot)
                                this.$store.commit('updateInstances', {
                                    key: parentKey,
                                    childs: newVal,
                                    slots: slot.name,
                                })
                                this.$emit('input', newVal)
                            },
                            end:()=>{
                                const { draggingNode, dropNode, dropType } = this;
                                this.$emit("node-drop", draggingNode, dropNode, dropType);
                                this.draggingNode = null;
                                this.dropNode = null;
                                // eslint-disable-next-line no-console
                                console.log('node-drop','draggingnode:', JSON.stringify(draggingNode),'dropnode:', JSON.stringify(dropNode), dropType)
                            },
                        }
                    }, _.get(slot, 'children', []).map(e=>{
                        const childrenNodes = this.recursiveTree(instances, e, h)
                        const tmpNode = _.get(instances, e);
                        return h('div',
                        {
                            key: e,
                            class: ['draggable-leaf', {'hover-me': _.get(tmpNode, 'id') === _.get(this.dropNode, 'id')}],
                            on: {
                                dragover:_.throttle((e)=>{
                                    // e.target.classList.add('hover-me')
                                }, 5000),
                            },
                        }, [
                            h('div',{class:'leaf-header'}, [`${_.get(tmpNode, 'title')}-${e}`]), 
                            childrenNodes
                        ])
                    }))]
                )
            })
        }
    },
    render(h){
        const list = this.recursiveTree(this.instances, "99wHPJcui", h);
        return h('div',[list])
    }
}