import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        instances: new Map([
            ["una_instance_pyhuRDvKl", {
                "unaKey": "una-container",
                "data": {
                    "key": "una-container",
                    "name": "una-container",
                    "isContainer": true,
                    "props": {
                        "direction": {
                            "title": "排列方向",
                            "type": "string",
                            "default": "horizontal",
                            "enums": [{
                                "key": "horizontal",
                                "label": "水平方向排列"
                            }, {
                                "key": "vertical",
                                "label": "垂直方向排列"
                            }]
                        }
                    },
                    "events": {
                        "init": {
                            "title": "初始化事件",
                            "description": "初始化事件"
                        }
                    },
                    "directives": {},
                    "slots": {}
                },
                "childs": ["una_instance_lRLfsA_3I", "una_instance_OvCRYpF3z"],
                "parentInstanceKey": null
            }],
            ["una_instance_lRLfsA_3I", {
                "unaKey": "una-container",
                "data": {
                    "key": "una-container",
                    "name": "una-container",
                    "isContainer": true,
                    "props": {
                        "direction": {
                            "title": "排列方向",
                            "type": "string",
                            "default": "horizontal",
                            "enums": [{
                                "key": "horizontal",
                                "label": "水平方向排列"
                            }, {
                                "key": "vertical",
                                "label": "垂直方向排列"
                            }]
                        }
                    },
                    "events": {
                        "init": {
                            "title": "初始化事件",
                            "description": "初始化事件"
                        }
                    },
                    "directives": {},
                    "slots": {}
                },
                "childs": [],
                "parentInstanceKey": "una_instance_pyhuRDvKl"
            }],
            ["una_instance_AyicChOux", {
                "unaKey": "una-row",
                "data": {
                    "key": "una-row",
                    "name": "una-row",
                    "isContainer": true,
                    "props": {
                        "gutter": {
                            "title": "栅格间隔",
                            "type": "number",
                            "default": 0
                        },
                        "type": {
                            "title": "布局模式",
                            "type": "string",
                            "default": "flex",
                            "enums": [{
                                "key": "flex",
                                "label": "flex"
                            }]
                        },
                        "justify": {
                            "title": "水平排列方式",
                            "type": "string",
                            "default": "start",
                            "enums": [{
                                "key": "start",
                                "label": "start"
                            }, {
                                "key": "end",
                                "label": "end"
                            }, {
                                "key": "center",
                                "label": "center"
                            }, {
                                "key": "space-around",
                                "label": "space-around"
                            }, {
                                "key": "space-between",
                                "label": "space-between"
                            }]
                        },
                        "align": {
                            "title": "垂直排列方式",
                            "type": "string",
                            "default": "top",
                            "enums": [{
                                "key": "top",
                                "label": "top"
                            }, {
                                "key": "middle",
                                "label": "middle"
                            }, {
                                "key": "bottom",
                                "label": "bottom"
                            }]
                        },
                        "tag": {
                            "title": "自定义元素标签",
                            "type": "string",
                            "default": "div"
                        }
                    },
                    "directives": {},
                    "slots": {}
                },
                "childs": ["una_instance_OH45vh74S", "una_instance_AusiI4dGh"],
                "parentInstanceKey": "una_instance_OvCRYpF3z"
            }],
            ["una_instance_OvCRYpF3z", {
                "unaKey": "una-col",
                "data": {
                    "key": "una-col",
                    "name": "una-col",
                    "isContainer": true,
                    "props": {
                        "span": {
                            "title": "栅格占据的列数",
                            "type": "number",
                            "default": 24
                        },
                        "offset": {
                            "title": "栅格左侧的间隔格数",
                            "type": "number",
                            "default": 0
                        },
                        "push": {
                            "title": "栅格向右移动格数",
                            "type": "number",
                            "default": 0
                        },
                        "pull": {
                            "title": "栅格向左移动格数",
                            "type": "number",
                            "default": 0
                        },
                        "tag": {
                            "title": "自定义元素标签",
                            "type": "string",
                            "default": "div"
                        }
                    },
                    "directives": {},
                    "slots": {}
                },
                "childs": ["una_instance_AyicChOux"],
                "parentInstanceKey": "una_instance_pyhuRDvKl"
            }],
            ["una_instance_OH45vh74S", {
                "unaKey": "una-col",
                "data": {
                    "key": "una-col",
                    "name": "una-col",
                    "isContainer": true,
                    "props": {
                        "span": {
                            "title": "栅格占据的列数",
                            "type": "number",
                            "default": 24
                        },
                        "offset": {
                            "title": "栅格左侧的间隔格数",
                            "type": "number",
                            "default": 0
                        },
                        "push": {
                            "title": "栅格向右移动格数",
                            "type": "number",
                            "default": 0
                        },
                        "pull": {
                            "title": "栅格向左移动格数",
                            "type": "number",
                            "default": 0
                        },
                        "tag": {
                            "title": "自定义元素标签",
                            "type": "string",
                            "default": "div"
                        }
                    },
                    "directives": {},
                    "slots": {}
                },
                "childs": ["una_instance__ZfZhkWzv"],
                "parentInstanceKey": "una_instance_AyicChOux"
            }],
            ["una_instance_AusiI4dGh", {
                "unaKey": "una-col",
                "data": {
                    "key": "una-col",
                    "name": "una-col",
                    "isContainer": true,
                    "props": {
                        "span": {
                            "title": "栅格占据的列数",
                            "type": "number",
                            "default": 24
                        },
                        "offset": {
                            "title": "栅格左侧的间隔格数",
                            "type": "number",
                            "default": 0
                        },
                        "push": {
                            "title": "栅格向右移动格数",
                            "type": "number",
                            "default": 0
                        },
                        "pull": {
                            "title": "栅格向左移动格数",
                            "type": "number",
                            "default": 0
                        },
                        "tag": {
                            "title": "自定义元素标签",
                            "type": "string",
                            "default": "div"
                        }
                    },
                    "directives": {},
                    "slots": {}
                },
                "childs": [],
                "parentInstanceKey": "una_instance_AyicChOux"
            }],
            ["una_instance__ZfZhkWzv", {
                "unaKey": "una-color",
                "data": {
                    "key": "una-color",
                    "name": "una-color",
                    "props": {
                        "showAlpha": {
                            "title": "是否支持透明度",
                            "type": "boolean",
                            "default": false
                        },
                        "disabled": {
                            "title": "是否禁用",
                            "type": "boolean",
                            "default": false
                        },
                        "size": {
                            "title": "按钮大小",
                            "type": "string",
                            "default": "small",
                            "consequence": "",
                            "enums": [{
                                "key": "medium",
                                "label": "medium"
                            }, {
                                "key": "small",
                                "label": "small"
                            }, {
                                "key": "mini",
                                "label": "mini"
                            }]
                        },
                        "colorFormat": {
                            "title": "颜色的格式",
                            "type": "string",
                            "default": "hsl",
                            "consequence": "",
                            "enums": [{
                                "key": "hsl",
                                "label": "hsl"
                            }, {
                                "key": "hsv",
                                "label": "hsv"
                            }, {
                                "key": "hex",
                                "label": "hex"
                            }, {
                                "key": "rgb",
                                "label": "rgb"
                            }]
                        },
                        "predefine": {
                            "title": "预定义颜色"
                        }
                    },
                    "events": {
                        "change": {
                            "title": "值改变",
                            "description": "当绑定值变化时触发"
                        },
                        "activeChange": {
                            "title": "面板当前颜色",
                            "description": "面板中当前显示的颜色发生改变时触发"
                        }
                    },
                    "directives": {},
                    "slots": {}
                },
                "parentInstanceKey": "una_instance_OH45vh74S"
            }]
        ])
    },
    getters:{
        rootInstanceKey(){
            return 'una_instance_pyhuRDvKl';
        },
        getInstances(state){
            return state.instances;
        }
    },
    mutations:{
        updateInstances(state, {key , childs}){
            const instances = state.instances;
            const val = instances.get(key);
            val.childs = childs;
            _.each(childs, (c)=>{
                const cInstance = instances.get(c);
                cInstance.parentInstanceKey = key;
            });
            state.instances = new Map(instances);
        }
    },
    actions: {
        updateChilds({commit, state}, payload){
            commit('updateInstances', payload)
        }
    },
});

export default store;