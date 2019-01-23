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
    components: {
        draggable
    },
    methods: {
        onMove({relatedContext: rctx, draggedContext: dctx}) {
            const draggingNode = dctx.element;
            const dropNode = rctx.element || _.get(rctx, 'component.$parent.node');
            console.log(draggingNode, dropNode)
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
            ctx && ctx.$emit("node-drop", draggingNode, dropNode, dropType);
            console.log('node-drop','draggingnode:', JSON.stringify(draggingNode),'dropnode:', JSON.stringify(dropNode), dropType)
        },
        dragoverHandler: _.throttle(function() {
            if(!this.node.childNodes){
                this.$set(this.node, "childNodes", []);
            }
        }, 1000),
    },
}