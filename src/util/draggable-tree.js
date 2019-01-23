import _ from 'lodash'
import draggable from "vuedraggable";
export default {
    props: {options: Object, allowDrop: Function},
    data() {
        return {
            dropNode: null,
            draggingNode: null,
            dropType: null
        }
    },
    computed: {
        hasDefaultSlot(){
            return !!this.$scopedSlots.default;
        }
    },
    components: {
        draggable
    },
    methods: {
        onMove({relatedContext: rctx, draggedContext: dctx}) {
            const draggingNode = dctx.element;
            const dropNode = rctx.element || _.get(rctx, 'component.$parent.node');
            const isContain = _.includes(rctx.list, draggingNode); 
            const isNewChlidren = !rctx.element && _.isEmpty(rctx.list);
            let dropType = null;
            if(isContain){
                dropType = dctx.index < dctx.futureIndex ? 'after' : 'before'
            }else{
                dropType = isNewChlidren ? 'inner' : rctx.index < dctx.futureIndex ? 'after' : 'before'
            }
            _.assignIn(this,{ dropType, draggingNode, dropNode });
            if(this.allowDrop){
                return this.allowDrop(draggingNode, dropNode, dropType)
            }
        },
        onEnd() {
            const { draggingNode, dropNode, dropType } = this;
            const ctx = this.isTree ? this : this.tree;
            //TODO: 增加 parent
            ctx && ctx.$emit("node-drop", draggingNode, dropNode, dropType);
            // eslint-disable-next-line no-console
            console.log('node-drop','draggingnode:', JSON.stringify(draggingNode),'dropnode:', JSON.stringify(dropNode), dropType)
        },
        dragoverHandler: _.throttle(function() {
            if(!this.node.children){
                this.$set(this.node, "children", []);
            }
        }, 1000),
    },
}