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
            focusNode: null,
        }
    },
    methods:{
        genChild(slot, instances, h){
            const children = _.get(slot, 'children', []);
            if(!_.isEmpty(children)){
                return children.map(e=>{
                    const childrenNode = this.recursiveTree(instances, e, h)
                    return h('div',
                    {
                        key: e,
                        class: ['draggable-leaf', 
                            {'hover-me': e === _.get(this.dropNode, 'key' && this.dropType === 'inner')},
                            {'active': e === this.focusNode},
                            {'before-me': e === _.get(this.dropNode, 'key') && this.dropType === 'before'},
                            {'after-me': e === _.get(this.dropNode, 'key') && this.dropType === 'after'}
                        ],
                        on: {
                            click:(ev)=>{ev.stopPropagation();this.focusNode = e;}
                        },
                    }, 
                    [
                        h('div', [childrenNode])
                    ]
                    )
                })
            } else {
                return null;
            }
        },
        onMove({relatedContext: rctx, draggedContext: dctx}){
            let draggingNode = dctx.element;
            let dropNode = rctx.element || _.get(rctx, 'component.$parent.node');
            this.draggingNode = draggingNode;
            this.dropNode = dropNode;
            const isContain = _.includes(rctx.list, draggingNode); 
            const isNewChlidren = !rctx.element && _.isEmpty(rctx.list);
            let dropType = null;
            if(isContain){
                dropType = dctx.index < dctx.futureIndex ? 'after' : 'before'
            }else{
                dropType = isNewChlidren ? 'inner' : rctx.index < dctx.futureIndex ? 'after' : 'before'
            }
            draggingNode = {... _.get(this.instances, draggingNode), key: draggingNode};
            if(dropType !== 'inner'){
                dropNode = {..._.get(this.instances, dropNode), key: dropNode};
            }
            _.assignIn(this,{ dropType, draggingNode, dropNode });
            if(this.allowDrop){
                return this.allowDrop(draggingNode, dropNode, dropType)
            }
        },
        recursiveTree(instances, parentKey, h){
            const currentNode = _.get(instances, parentKey);
            const slots = _.get(instances, `${parentKey}.slots`, {})
            const slotGroup = _.map(_.keys(slots), e=>_.assign(_.get(slots, e), {name: e}));
            return h('div',{class: ['leaf']},
                [
                    h('div', {
                        class:['leaf-header'],
                    }, 
                    [
                        h('div', {class: ['arrow', {'active': this.active}], active: true, on:{click(){this.active =!this.active;}}}),
                        `${currentNode.title}-${parentKey}`
                    ]
                    ),
                    _.map(slotGroup, slot=>[
                        h('div', { class:'leaf-node' },
                        [
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
                                    move: this.onMove,
                                },
                                on: {
                                    input: (newVal)=>{
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
                            }, 
                            this.genChild(slot, instances, h)
                            ),
                            h('div', {class: 'slot-tag'}, [slot.title]),
                        ])
                    ])
                ])
        }
    },
    render(h){
        const list = this.recursiveTree(this.instances, "99wHPJcui", h);
        return h('div',{ref: 'tree'},[list])
    },
    mounted() {
        document.addEventListener('click',(e)=>{
            if(!this.$refs.tree.contains(e.target)){
                this.focusNode = null;
            }
        })
    },
}