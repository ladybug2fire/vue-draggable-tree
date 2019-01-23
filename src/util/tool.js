import _ from 'lodash'
export function mapNode(relatedContext, draggedContext) {
    const draggingNode = draggedContext.element;
    const dropNode = relatedContext.element;
    let dropType = null;
    if (dropNode) {
        if (draggedContext.index <= draggedContext.futureIndex)
            dropType = 'after';
        else dropType = 'before'
    } else {
        dropType = 'inner'
    }
    return ({
        dropType,
        draggingNode,
        dropNode
    })
}

export function tranverse(tree, parent = null){
    if(_.isArray(tree)){
        return _.map(tree, e=>{
            let obj = {};
            // obj.data = e;
            this.$set(obj, 'id', e.id)
            this.$set(obj, 'label', e.label)
            // obj.id = e.id;
            // obj.parent = parent;
            // obj.label = e.label;
            if(_.has(e, 'children')){
                this.$set(obj, 'childNodes',  tranverse.bind(this)(_.get(e, 'children'), obj))
                // obj.childNodes = tranverse(_.get(e, 'children'), obj);
            }
            return obj;
        })
    }else if(_.isObject(tree)){
        let obj = {};
        // obj.data = tree;
        obj.id = tree.id;
        // obj.parent = parent;
        obj.label = tree.label;
        if(_.has(tree, 'children')){
            tree.childNodes = tranverse(_.get(tree, 'children'), obj);
        }
        return tree;
    }
}

export function refreshTree(tree){

}