import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        instances: {
              "vJ55LksVe": {
                "id": 8,
                "title": "普通容器",
                "name": "una-container",
                "props": {},
                "slots": {
                  "default": {
                    "title": "默认插槽",
                    "children": [
                      "Tu0fFOFQa",
                      "9IXHst6X-",
                      "WzDcavriU",
                      "2OOghTOcf",
                      "7sBf8r1ns"
                    ]
                  }
                },
                "events": {
                  "init": {
                    "title": "初始化事件",
                    "description": "初始化事件"
                  }
                }
              },
              "Tu0fFOFQa": {
                "id": 21,
                "title": "行布局",
                "name": "una-row",
                "props": {
                  "gutter": {
                    "title": "栅格间隔",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "type": {
                    "title": "布局模式",
                    "type": "string",
                    "default": "flex",
                    "options": [
                      {
                        "key": "flex",
                        "label": "flex"
                      }
                    ],
                    "consequence": "flex"
                  },
                  "justify": {
                    "title": "水平排列方式",
                    "type": "string",
                    "default": "start",
                    "options": [
                      {
                        "key": "start",
                        "label": "start"
                      },
                      {
                        "key": "end",
                        "label": "end"
                      },
                      {
                        "key": "center",
                        "label": "center"
                      },
                      {
                        "key": "space-around",
                        "label": "space-around"
                      },
                      {
                        "key": "space-between",
                        "label": "space-between"
                      }
                    ],
                    "consequence": "start"
                  },
                  "align": {
                    "title": "垂直排列方式",
                    "type": "string",
                    "default": "top",
                    "options": [
                      {
                        "key": "top",
                        "label": "top"
                      },
                      {
                        "key": "middle",
                        "label": "middle"
                      },
                      {
                        "key": "bottom",
                        "label": "bottom"
                      }
                    ],
                    "consequence": "top"
                  },
                  "tag": {
                    "title": "自定义元素标签",
                    "type": "string",
                    "default": "div",
                    "consequence": "div"
                  }
                },
                "slots": {
                  "default": {
                    "title": "默认插槽",
                    "children": [
                      "LRAKJDlRb",
                      "x797aMHHV"
                    ]
                  }
                },
                "style": {
                  "height": "45px",
                  "lineHeight": "45px"
                }
              },
              "LRAKJDlRb": {
                "id": 6,
                "name": "una-col",
                "title": "列布局",
                "props": {
                  "span": {
                    "title": "栅格占据的列数",
                    "type": "number",
                    "default": 24,
                    "consequence": 16
                  },
                  "offset": {
                    "title": "栅格左侧的间隔格数",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "push": {
                    "title": "栅格向右移动格数",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "pull": {
                    "title": "栅格向左移动格数",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "tag": {
                    "title": "自定义元素标签",
                    "type": "string",
                    "default": "div",
                    "consequence": "div"
                  }
                },
                "slots": {
                  "default": {
                    "title": "默认插槽",
                    "children": [
                      "DHxq59fSP"
                    ]
                  }
                }
              },
              "x797aMHHV": {
                "id": 6,
                "name": "una-col",
                "title": "列布局",
                "props": {
                  "span": {
                    "title": "栅格占据的列数",
                    "type": "number",
                    "default": 24,
                    "consequence": 8
                  },
                  "offset": {
                    "title": "栅格左侧的间隔格数",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "push": {
                    "title": "栅格向右移动格数",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "pull": {
                    "title": "栅格向左移动格数",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "tag": {
                    "title": "自定义元素标签",
                    "type": "string",
                    "default": "div",
                    "consequence": "div"
                  }
                },
                "slots": {
                  "default": {
                    "title": "默认插槽",
                    "children": [
                      "F6Uj5M-O-",
                      "6dWJ9B7KJ",
                      "O63oC4RJQ",
                      "zW1ikLl83",
                      "K6c4Uwiqx",
                      "lTKq3MdP9"
                    ]
                  }
                },
                "style": {
                  "height": "45px",
                  "lineHeight": "45px"
                }
              },
              "6dWJ9B7KJ": {
                "id": 3,
                "name": "una-button",
                "title": "按钮",
                "description": "",
                "props": {
                  "text": {
                    "title": "点击事件",
                    "type": "string",
                    "default": "按钮",
                    "required": true,
                    "consequence": "基础信息"
                  },
                  "size": {
                    "title": "按钮大小",
                    "type": "string",
                    "default": "small",
                    "options": [
                      {
                        "key": "medium",
                        "label": "medium"
                      },
                      {
                        "key": "small",
                        "label": "small"
                      },
                      {
                        "key": "mini",
                        "label": "mini"
                      }
                    ],
                    "consequence": "mini"
                  },
                  "type": {
                    "title": "按钮类型",
                    "type": "string",
                    "default": "primary",
                    "consequence": "primary",
                    "options": [
                      {
                        "key": "primary",
                        "label": "primary"
                      },
                      {
                        "key": "success",
                        "label": "success"
                      },
                      {
                        "key": "warning",
                        "label": "warning"
                      },
                      {
                        "key": "danger",
                        "label": "danger"
                      },
                      {
                        "key": "info",
                        "label": "info"
                      },
                      {
                        "key": "text",
                        "label": "text"
                      }
                    ]
                  },
                  "icon": {
                    "title": "按钮图标",
                    "type": "string",
                    "default": "",
                    "consequence": ""
                  },
                  "plain": {
                    "title": "是否朴素按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "round": {
                    "title": "是否圆角按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "circle": {
                    "title": "是否圆形按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "loading": {
                    "title": "是否加载中",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "disabled": {
                    "title": "是否禁用",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  }
                },
                "events": {
                  "click": {
                    "title": "点击事件",
                    "description": "点击按钮"
                  }
                },
                "dataType": [
                  "string",
                  "number"
                ]
              },
              "O63oC4RJQ": {
                "id": 3,
                "name": "una-button",
                "title": "按钮",
                "description": "",
                "props": {
                  "text": {
                    "title": "点击事件",
                    "type": "string",
                    "default": "按钮",
                    "required": true,
                    "consequence": "预览"
                  },
                  "size": {
                    "title": "按钮大小",
                    "type": "string",
                    "default": "small",
                    "options": [
                      {
                        "key": "medium",
                        "label": "medium"
                      },
                      {
                        "key": "small",
                        "label": "small"
                      },
                      {
                        "key": "mini",
                        "label": "mini"
                      }
                    ],
                    "consequence": "mini"
                  },
                  "type": {
                    "title": "按钮类型",
                    "type": "string",
                    "default": "primary",
                    "consequence": "primary",
                    "options": [
                      {
                        "key": "primary",
                        "label": "primary"
                      },
                      {
                        "key": "success",
                        "label": "success"
                      },
                      {
                        "key": "warning",
                        "label": "warning"
                      },
                      {
                        "key": "danger",
                        "label": "danger"
                      },
                      {
                        "key": "info",
                        "label": "info"
                      },
                      {
                        "key": "text",
                        "label": "text"
                      }
                    ]
                  },
                  "icon": {
                    "title": "按钮图标",
                    "type": "string",
                    "default": "",
                    "consequence": ""
                  },
                  "plain": {
                    "title": "是否朴素按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "round": {
                    "title": "是否圆角按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "circle": {
                    "title": "是否圆形按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "loading": {
                    "title": "是否加载中",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "disabled": {
                    "title": "是否禁用",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  }
                },
                "events": {
                  "click": {
                    "title": "点击事件",
                    "description": "点击按钮"
                  }
                },
                "dataType": [
                  "string",
                  "number"
                ]
              },
              "zW1ikLl83": {
                "id": 3,
                "name": "una-button",
                "title": "按钮",
                "description": "",
                "props": {
                  "text": {
                    "title": "点击事件",
                    "type": "string",
                    "default": "按钮",
                    "required": true,
                    "consequence": "发布"
                  },
                  "size": {
                    "title": "按钮大小",
                    "type": "string",
                    "default": "small",
                    "options": [
                      {
                        "key": "medium",
                        "label": "medium"
                      },
                      {
                        "key": "small",
                        "label": "small"
                      },
                      {
                        "key": "mini",
                        "label": "mini"
                      }
                    ],
                    "consequence": "mini"
                  },
                  "type": {
                    "title": "按钮类型",
                    "type": "string",
                    "default": "primary",
                    "consequence": "primary",
                    "options": [
                      {
                        "key": "primary",
                        "label": "primary"
                      },
                      {
                        "key": "success",
                        "label": "success"
                      },
                      {
                        "key": "warning",
                        "label": "warning"
                      },
                      {
                        "key": "danger",
                        "label": "danger"
                      },
                      {
                        "key": "info",
                        "label": "info"
                      },
                      {
                        "key": "text",
                        "label": "text"
                      }
                    ]
                  },
                  "icon": {
                    "title": "按钮图标",
                    "type": "string",
                    "default": "",
                    "consequence": ""
                  },
                  "plain": {
                    "title": "是否朴素按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "round": {
                    "title": "是否圆角按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "circle": {
                    "title": "是否圆形按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "loading": {
                    "title": "是否加载中",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "disabled": {
                    "title": "是否禁用",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  }
                },
                "events": {
                  "click": {
                    "title": "点击事件",
                    "description": "点击按钮"
                  }
                },
                "dataType": [
                  "string",
                  "number"
                ]
              },
              "K6c4Uwiqx": {
                "id": 3,
                "name": "una-button",
                "title": "按钮",
                "description": "",
                "props": {
                  "text": {
                    "title": "点击事件",
                    "type": "string",
                    "default": "按钮",
                    "required": true,
                    "consequence": "回滚"
                  },
                  "size": {
                    "title": "按钮大小",
                    "type": "string",
                    "default": "small",
                    "options": [
                      {
                        "key": "medium",
                        "label": "medium"
                      },
                      {
                        "key": "small",
                        "label": "small"
                      },
                      {
                        "key": "mini",
                        "label": "mini"
                      }
                    ],
                    "consequence": "mini"
                  },
                  "type": {
                    "title": "按钮类型",
                    "type": "string",
                    "default": "primary",
                    "consequence": "danger",
                    "options": [
                      {
                        "key": "primary",
                        "label": "primary"
                      },
                      {
                        "key": "success",
                        "label": "success"
                      },
                      {
                        "key": "warning",
                        "label": "warning"
                      },
                      {
                        "key": "danger",
                        "label": "danger"
                      },
                      {
                        "key": "info",
                        "label": "info"
                      },
                      {
                        "key": "text",
                        "label": "text"
                      }
                    ]
                  },
                  "icon": {
                    "title": "按钮图标",
                    "type": "string",
                    "default": "",
                    "consequence": ""
                  },
                  "plain": {
                    "title": "是否朴素按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "round": {
                    "title": "是否圆角按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "circle": {
                    "title": "是否圆形按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "loading": {
                    "title": "是否加载中",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "disabled": {
                    "title": "是否禁用",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  }
                },
                "events": {
                  "click": {
                    "title": "点击事件",
                    "description": "点击按钮"
                  }
                },
                "dataType": [
                  "string",
                  "number"
                ]
              },
              "lTKq3MdP9": {
                "id": 3,
                "name": "una-button",
                "title": "按钮",
                "description": "",
                "props": {
                  "text": {
                    "title": "点击事件",
                    "type": "string",
                    "default": "按钮",
                    "required": true,
                    "consequence": "下线"
                  },
                  "size": {
                    "title": "按钮大小",
                    "type": "string",
                    "default": "small",
                    "options": [
                      {
                        "key": "medium",
                        "label": "medium"
                      },
                      {
                        "key": "small",
                        "label": "small"
                      },
                      {
                        "key": "mini",
                        "label": "mini"
                      }
                    ],
                    "consequence": "mini"
                  },
                  "type": {
                    "title": "按钮类型",
                    "type": "string",
                    "default": "primary",
                    "consequence": "danger",
                    "options": [
                      {
                        "key": "primary",
                        "label": "primary"
                      },
                      {
                        "key": "success",
                        "label": "success"
                      },
                      {
                        "key": "warning",
                        "label": "warning"
                      },
                      {
                        "key": "danger",
                        "label": "danger"
                      },
                      {
                        "key": "info",
                        "label": "info"
                      },
                      {
                        "key": "text",
                        "label": "text"
                      }
                    ]
                  },
                  "icon": {
                    "title": "按钮图标",
                    "type": "string",
                    "default": "",
                    "consequence": ""
                  },
                  "plain": {
                    "title": "是否朴素按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "round": {
                    "title": "是否圆角按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "circle": {
                    "title": "是否圆形按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "loading": {
                    "title": "是否加载中",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "disabled": {
                    "title": "是否禁用",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  }
                },
                "events": {
                  "click": {
                    "title": "点击事件",
                    "description": "点击按钮"
                  }
                },
                "dataType": [
                  "string",
                  "number"
                ]
              },
              "9IXHst6X-": {
                "id": 6,
                "name": "una-col",
                "title": "列布局",
                "props": {
                  "span": {
                    "title": "栅格占据的列数",
                    "type": "number",
                    "default": 24,
                    "consequence": 4
                  },
                  "offset": {
                    "title": "栅格左侧的间隔格数",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "push": {
                    "title": "栅格向右移动格数",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "pull": {
                    "title": "栅格向左移动格数",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "tag": {
                    "title": "自定义元素标签",
                    "type": "string",
                    "default": "div",
                    "consequence": "div"
                  }
                },
                "slots": {
                  "default": {
                    "title": "默认插槽",
                    "children": [
                      "6W2G1EUNe",
                      "FTNv7QXfS"
                    ]
                  }
                },
                "style": {
                  "height": "60vh"
                }
              },
              "WzDcavriU": {
                "id": 6,
                "name": "una-col",
                "title": "列布局",
                "props": {
                  "span": {
                    "title": "栅格占据的列数",
                    "type": "number",
                    "default": 24,
                    "consequence": 6
                  },
                  "offset": {
                    "title": "栅格左侧的间隔格数",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "push": {
                    "title": "栅格向右移动格数",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "pull": {
                    "title": "栅格向左移动格数",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "tag": {
                    "title": "自定义元素标签",
                    "type": "string",
                    "default": "div",
                    "consequence": "div"
                  }
                },
                "slots": {
                  "default": {
                    "title": "默认插槽",
                    "children": [
                      "mjW1_mGWb"
                    ]
                  }
                },
                "style": {
                  "height": "80vh",
                  "backgroundColor": "#F7F8FC",
                  "paddingLeft": "19px",
                  "paddingRight": "20px",
                  "paddingTop": "20px",
                  "paddingBottom": "20px"
                }
              },
              "2OOghTOcf": {
                "id": 6,
                "name": "una-col",
                "title": "列布局",
                "props": {
                  "span": {
                    "title": "栅格占据的列数",
                    "type": "number",
                    "default": 24,
                    "consequence": 14
                  },
                  "offset": {
                    "title": "栅格左侧的间隔格数",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "push": {
                    "title": "栅格向右移动格数",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "pull": {
                    "title": "栅格向左移动格数",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "tag": {
                    "title": "自定义元素标签",
                    "type": "string",
                    "default": "div",
                    "consequence": "div"
                  }
                },
                "slots": {
                  "default": {
                    "title": "默认插槽",
                    "children": [
                      "gSCFjufaA"
                    ]
                  }
                },
                "style": {
                  "height": "80vh",
                  "backgroundColor": "#F7F8FC",
                  "marginLeft": "0px",
                  "marginTop": "0px",
                  "marginBottom": "20px"
                }
              },
              "7sBf8r1ns": {
                "id": 6,
                "name": "una-col",
                "title": "列布局",
                "props": {
                  "span": {
                    "title": "栅格占据的列数",
                    "type": "number",
                    "default": 24,
                    "consequence": 4
                  },
                  "offset": {
                    "title": "栅格左侧的间隔格数",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "push": {
                    "title": "栅格向右移动格数",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "pull": {
                    "title": "栅格向左移动格数",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "tag": {
                    "title": "自定义元素标签",
                    "type": "string",
                    "default": "div",
                    "consequence": "div"
                  }
                },
                "slots": {
                  "default": {
                    "title": "默认插槽",
                    "children": []
                  }
                }
              },
              "mjW1_mGWb": {
                "id": "29",
                "title": "图片元素",
                "name": "una-image",
                "props": {
                  "src": {
                    "title": "图片链接",
                    "type": "string",
                    "default": "https://p1.meituan.net/dprainbow/9a3b2c8bfaf8072329aff31266e0ee2977024.png",
                    "consequence": "https://p0.meituan.net/dprainbow/76456c516f3dd6b7eada950ef8e869f150415.png"
                  },
                  "width": {
                    "title": "图片宽度",
                    "type": "string",
                    "default": "100px",
                    "consequence": "200px"
                  },
                  "height": {
                    "title": "图片高度",
                    "type": "string",
                    "default": "100px",
                    "consequence": "100px"
                  }
                },
                "style": {
                  "width": "280px",
                  "height": "80vh"
                }
              },
              "6W2G1EUNe": {
                "id": 21,
                "title": "行布局",
                "name": "una-row",
                "props": {
                  "gutter": {
                    "title": "栅格间隔",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "type": {
                    "title": "布局模式",
                    "type": "string",
                    "default": "flex",
                    "options": [
                      {
                        "key": "flex",
                        "label": "flex"
                      }
                    ],
                    "consequence": "flex"
                  },
                  "justify": {
                    "title": "水平排列方式",
                    "type": "string",
                    "default": "start",
                    "options": [
                      {
                        "key": "start",
                        "label": "start"
                      },
                      {
                        "key": "end",
                        "label": "end"
                      },
                      {
                        "key": "center",
                        "label": "center"
                      },
                      {
                        "key": "space-around",
                        "label": "space-around"
                      },
                      {
                        "key": "space-between",
                        "label": "space-between"
                      }
                    ],
                    "consequence": "start"
                  },
                  "align": {
                    "title": "垂直排列方式",
                    "type": "string",
                    "default": "top",
                    "options": [
                      {
                        "key": "top",
                        "label": "top"
                      },
                      {
                        "key": "middle",
                        "label": "middle"
                      },
                      {
                        "key": "bottom",
                        "label": "bottom"
                      }
                    ],
                    "consequence": "top"
                  },
                  "tag": {
                    "title": "自定义元素标签",
                    "type": "string",
                    "default": "div",
                    "consequence": "div"
                  }
                },
                "slots": {
                  "default": {
                    "title": "默认插槽",
                    "children": [
                      "ZgxGtjxre"
                    ]
                  }
                },
                "style": {
                  "height": "40vh",
                  "marginTop": "0px",
                  "paddingLeft": "19px",
                  "paddingRight": "20px",
                  "paddingTop": "20px",
                  "paddingBottom": "20px",
                  "backgroundColor": "#F7F8FC"
                }
              },
              "FTNv7QXfS": {
                "id": 21,
                "title": "行布局",
                "name": "una-row",
                "props": {
                  "gutter": {
                    "title": "栅格间隔",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "type": {
                    "title": "布局模式",
                    "type": "string",
                    "default": "flex",
                    "options": [
                      {
                        "key": "flex",
                        "label": "flex"
                      }
                    ],
                    "consequence": "flex"
                  },
                  "justify": {
                    "title": "水平排列方式",
                    "type": "string",
                    "default": "start",
                    "options": [
                      {
                        "key": "start",
                        "label": "start"
                      },
                      {
                        "key": "end",
                        "label": "end"
                      },
                      {
                        "key": "center",
                        "label": "center"
                      },
                      {
                        "key": "space-around",
                        "label": "space-around"
                      },
                      {
                        "key": "space-between",
                        "label": "space-between"
                      }
                    ],
                    "consequence": "start"
                  },
                  "align": {
                    "title": "垂直排列方式",
                    "type": "string",
                    "default": "top",
                    "options": [
                      {
                        "key": "top",
                        "label": "top"
                      },
                      {
                        "key": "middle",
                        "label": "middle"
                      },
                      {
                        "key": "bottom",
                        "label": "bottom"
                      }
                    ],
                    "consequence": "bottom"
                  },
                  "tag": {
                    "title": "自定义元素标签",
                    "type": "string",
                    "default": "div",
                    "consequence": "div"
                  }
                },
                "slots": {
                  "default": {
                    "title": "默认插槽",
                    "children": [
                      "rDQfThiM7",
                      "vloJTEPh8"
                    ]
                  }
                },
                "style": {
                  "height": "40vh",
                  "backgroundColor": "#F7F8FC"
                }
              },
              "gSCFjufaA": {
                "id": "29",
                "title": "图片元素",
                "name": "una-image",
                "props": {
                  "src": {
                    "title": "图片链接",
                    "type": "string",
                    "default": "https://p1.meituan.net/dprainbow/9a3b2c8bfaf8072329aff31266e0ee2977024.png",
                    "consequence": "https://p0.meituan.net/dprainbow/422b666d7fa2a6a9d7934dbf85aeed19570544.png"
                  },
                  "width": {
                    "title": "图片宽度",
                    "type": "string",
                    "default": "100px",
                    "consequence": "100px"
                  },
                  "height": {
                    "title": "图片高度",
                    "type": "string",
                    "default": "100px",
                    "consequence": "100px"
                  }
                },
                "style": {
                  "width": "120vh",
                  "height": "60vh",
                  "marginLeft": "20px",
                  "marginTop": "20px"
                }
              },
              "rDQfThiM7": {
                "id": "29",
                "title": "图片元素",
                "name": "una-image",
                "props": {
                  "src": {
                    "title": "图片链接",
                    "type": "string",
                    "default": "https://p1.meituan.net/dprainbow/9a3b2c8bfaf8072329aff31266e0ee2977024.png",
                    "consequence": "https://p1.meituan.net/dprainbow/aa72fcc86a4bd72eb99c0d1b493799fe265848.png"
                  },
                  "width": {
                    "title": "图片宽度",
                    "type": "string",
                    "default": "100px",
                    "consequence": "150px"
                  },
                  "height": {
                    "title": "图片高度",
                    "type": "string",
                    "default": "100px",
                    "consequence": ""
                  }
                }
              },
              "vloJTEPh8": {
                "id": 3,
                "name": "una-button",
                "title": "按钮",
                "description": "",
                "props": {
                  "text": {
                    "title": "点击事件",
                    "type": "string",
                    "default": "按钮",
                    "required": true,
                    "consequence": "使用文档"
                  },
                  "size": {
                    "title": "按钮大小",
                    "type": "string",
                    "default": "small",
                    "options": [
                      {
                        "key": "medium",
                        "label": "medium"
                      },
                      {
                        "key": "small",
                        "label": "small"
                      },
                      {
                        "key": "mini",
                        "label": "mini"
                      }
                    ],
                    "consequence": "mini"
                  },
                  "type": {
                    "title": "按钮类型",
                    "type": "string",
                    "default": "primary",
                    "consequence": "text",
                    "options": [
                      {
                        "key": "primary",
                        "label": "primary"
                      },
                      {
                        "key": "success",
                        "label": "success"
                      },
                      {
                        "key": "warning",
                        "label": "warning"
                      },
                      {
                        "key": "danger",
                        "label": "danger"
                      },
                      {
                        "key": "info",
                        "label": "info"
                      },
                      {
                        "key": "text",
                        "label": "text"
                      }
                    ]
                  },
                  "icon": {
                    "title": "按钮图标",
                    "type": "string",
                    "default": "",
                    "consequence": ""
                  },
                  "plain": {
                    "title": "是否朴素按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "round": {
                    "title": "是否圆角按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "circle": {
                    "title": "是否圆形按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "loading": {
                    "title": "是否加载中",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "disabled": {
                    "title": "是否禁用",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  }
                },
                "events": {
                  "click": {
                    "title": "点击事件",
                    "description": "点击按钮"
                  }
                },
                "dataType": [
                  "string",
                  "number"
                ]
              },
              "ZgxGtjxre": {
                "id": 4,
                "name": "una-card",
                "title": "卡片",
                "props": {
                  "header": {
                    "title": "卡片头",
                    "type": "string",
                    "default": "",
                    "consequence": ""
                  },
                  "shadow": {
                    "title": "设置阴影显示时机\t",
                    "type": "string",
                    "default": "always",
                    "options": [
                      {
                        "label": "always",
                        "key": "always"
                      },
                      {
                        "label": "hover",
                        "key": "hover"
                      },
                      {
                        "label": "never",
                        "key": "never"
                      }
                    ],
                    "consequence": "always"
                  }
                },
                "slots": {
                  "header": {
                    "title": "卡片名称",
                    "scoped": false,
                    "children": []
                  },
                  "default": {
                    "title": "卡片内容",
                    "scoped": false,
                    "children": [
                      "kIVQgS0ec",
                      "lI13AG4cO",
                      "Ssu9ZBEKk",
                      "WZ1pcMQ5X",
                      "_oxLdNDNo"
                    ]
                  }
                },
                "events": {
                  "click": {
                    "title": "点击事件",
                    "description": "点击按钮",
                    "actions": []
                  }
                },
                "style": {
                  "width": "100%"
                }
              },
              "kIVQgS0ec": {
                "id": 16,
                "title": "输入框",
                "name": "una-input",
                "props": {
                  "type": {
                    "title": "输入框类型",
                    "type": "string",
                    "default": "text",
                    "options": [
                      {
                        "key": "text",
                        "label": "text"
                      },
                      {
                        "key": "textarea",
                        "label": "textarea"
                      }
                    ],
                    "consequence": "text"
                  },
                  "value": {
                    "title": "绑定值",
                    "type": "string",
                    "format": [
                      "custom",
                      "objPath",
                      "componentProps"
                    ],
                    "default": "",
                    "consequence": {
                      "format": "custom",
                      "value": "输入关键字搜索组件"
                    }
                  },
                  "placeholder": {
                    "title": "占位文本",
                    "type": "string",
                    "default": "请在这里输入",
                    "consequence": "输入关键字搜索组件"
                  },
                  "disabled": {
                    "title": "是否可编辑",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "size": {
                    "title": "大小",
                    "type": "string",
                    "default": "small",
                    "options": [
                      {
                        "key": "medium",
                        "label": "medium"
                      },
                      {
                        "key": "small",
                        "label": "small"
                      },
                      {
                        "key": "mini",
                        "label": "mini"
                      }
                    ],
                    "consequence": "small"
                  }
                },
                "events": {
                  "blur": {
                    "title": "失去焦点",
                    "description": "在 Input 失去焦点时触发"
                  },
                  "focus": {
                    "title": "获得焦点",
                    "description": "在 Input 获得焦点时触发"
                  },
                  "change": {
                    "title": "值改变",
                    "description": "在 Input 值改变时触发"
                  }
                }
              },
              "RnRkd7IaT": {
                "id": "28",
                "title": "自定义元素",
                "description": "默认为文字",
                "name": "una-text",
                "props": {
                  "text": {
                    "title": "文字",
                    "type": "string",
                    "default": "文字",
                    "consequence": "供应链上单组件 "
                  },
                  "tag": {
                    "title": "自定义元素标签",
                    "type": "string",
                    "default": "div",
                    "consequence": "div"
                  }
                },
                "style": {
                  "height": "40px",
                  "backgroundColor": "#FFFFFF",
                  "lineHeight": "40px",
                  "marginLeft": "0px"
                }
              },
              "lI13AG4cO": {
                "id": 21,
                "title": "行布局",
                "name": "una-row",
                "props": {
                  "gutter": {
                    "title": "栅格间隔",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "type": {
                    "title": "布局模式",
                    "type": "string",
                    "default": "flex",
                    "options": [
                      {
                        "key": "flex",
                        "label": "flex"
                      }
                    ],
                    "consequence": "flex"
                  },
                  "justify": {
                    "title": "水平排列方式",
                    "type": "string",
                    "default": "start",
                    "options": [
                      {
                        "key": "start",
                        "label": "start"
                      },
                      {
                        "key": "end",
                        "label": "end"
                      },
                      {
                        "key": "center",
                        "label": "center"
                      },
                      {
                        "key": "space-around",
                        "label": "space-around"
                      },
                      {
                        "key": "space-between",
                        "label": "space-between"
                      }
                    ],
                    "consequence": "start"
                  },
                  "align": {
                    "title": "垂直排列方式",
                    "type": "string",
                    "default": "top",
                    "options": [
                      {
                        "key": "top",
                        "label": "top"
                      },
                      {
                        "key": "middle",
                        "label": "middle"
                      },
                      {
                        "key": "bottom",
                        "label": "bottom"
                      }
                    ],
                    "consequence": "middle"
                  },
                  "tag": {
                    "title": "自定义元素标签",
                    "type": "string",
                    "default": "div",
                    "consequence": "div"
                  }
                },
                "slots": {
                  "default": {
                    "title": "默认插槽",
                    "children": [
                      "RnRkd7IaT",
                      "mMM2-HGqZ"
                    ]
                  }
                }
              },
              "_oxLdNDNo": {
                "id": 21,
                "title": "行布局",
                "name": "una-row",
                "props": {
                  "gutter": {
                    "title": "栅格间隔",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "type": {
                    "title": "布局模式",
                    "type": "string",
                    "default": "flex",
                    "options": [
                      {
                        "key": "flex",
                        "label": "flex"
                      }
                    ],
                    "consequence": "flex"
                  },
                  "justify": {
                    "title": "水平排列方式",
                    "type": "string",
                    "default": "start",
                    "options": [
                      {
                        "key": "start",
                        "label": "start"
                      },
                      {
                        "key": "end",
                        "label": "end"
                      },
                      {
                        "key": "center",
                        "label": "center"
                      },
                      {
                        "key": "space-around",
                        "label": "space-around"
                      },
                      {
                        "key": "space-between",
                        "label": "space-between"
                      }
                    ],
                    "consequence": "start"
                  },
                  "align": {
                    "title": "垂直排列方式",
                    "type": "string",
                    "default": "top",
                    "options": [
                      {
                        "key": "top",
                        "label": "top"
                      },
                      {
                        "key": "middle",
                        "label": "middle"
                      },
                      {
                        "key": "bottom",
                        "label": "bottom"
                      }
                    ],
                    "consequence": "top"
                  },
                  "tag": {
                    "title": "自定义元素标签",
                    "type": "string",
                    "default": "div",
                    "consequence": "div"
                  }
                },
                "slots": {
                  "default": {
                    "title": "默认插槽",
                    "children": [
                      "nApkiMZfv",
                      "cYCp1fTFb"
                    ]
                  }
                }
              },
              "nApkiMZfv": {
                "id": "28",
                "title": "自定义元素",
                "description": "默认为文字",
                "name": "una-text",
                "props": {
                  "text": {
                    "title": "文字",
                    "type": "string",
                    "default": "文字",
                    "consequence": "团购上单组件>"
                  },
                  "tag": {
                    "title": "自定义元素标签",
                    "type": "string",
                    "default": "div",
                    "consequence": "div"
                  }
                },
                "style": {
                  "height": "40px",
                  "lineHeight": "40px"
                }
              },
              "DHxq59fSP": {
                "id": "28",
                "title": "自定义元素",
                "description": "默认为文字",
                "name": "una-text",
                "props": {
                  "text": {
                    "title": "文字",
                    "type": "string",
                    "default": "文字",
                    "consequence": "平台配置化系统/页面配置"
                  },
                  "tag": {
                    "title": "自定义元素标签",
                    "type": "string",
                    "default": "div",
                    "consequence": "div"
                  }
                },
                "style": {
                  "marginLeft": "20px"
                }
              },
              "Ssu9ZBEKk": {
                "id": 21,
                "title": "行布局",
                "name": "una-row",
                "props": {
                  "gutter": {
                    "title": "栅格间隔",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "type": {
                    "title": "布局模式",
                    "type": "string",
                    "default": "flex",
                    "options": [
                      {
                        "key": "flex",
                        "label": "flex"
                      }
                    ],
                    "consequence": "flex"
                  },
                  "justify": {
                    "title": "水平排列方式",
                    "type": "string",
                    "default": "start",
                    "options": [
                      {
                        "key": "start",
                        "label": "start"
                      },
                      {
                        "key": "end",
                        "label": "end"
                      },
                      {
                        "key": "center",
                        "label": "center"
                      },
                      {
                        "key": "space-around",
                        "label": "space-around"
                      },
                      {
                        "key": "space-between",
                        "label": "space-between"
                      }
                    ],
                    "consequence": "start"
                  },
                  "align": {
                    "title": "垂直排列方式",
                    "type": "string",
                    "default": "top",
                    "options": [
                      {
                        "key": "top",
                        "label": "top"
                      },
                      {
                        "key": "middle",
                        "label": "middle"
                      },
                      {
                        "key": "bottom",
                        "label": "bottom"
                      }
                    ],
                    "consequence": "top"
                  },
                  "tag": {
                    "title": "自定义元素标签",
                    "type": "string",
                    "default": "div",
                    "consequence": "div"
                  }
                },
                "slots": {
                  "default": {
                    "title": "默认插槽",
                    "children": [
                      "3g9__Xrii",
                      "KOSvjXVbM"
                    ]
                  }
                }
              },
              "3g9__Xrii": {
                "id": "28",
                "title": "自定义元素",
                "description": "默认为文字",
                "name": "una-text",
                "props": {
                  "text": {
                    "title": "文字",
                    "type": "string",
                    "default": "文字",
                    "consequence": "0.0.1版本"
                  },
                  "tag": {
                    "title": "自定义元素标签",
                    "type": "string",
                    "default": "div",
                    "consequence": "div"
                  }
                },
                "style": {
                  "height": "40px",
                  "marginLeft": "10px",
                  "lineHeight": "40px"
                }
              },
              "WZ1pcMQ5X": {
                "id": 21,
                "title": "行布局",
                "name": "una-row",
                "props": {
                  "gutter": {
                    "title": "栅格间隔",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "type": {
                    "title": "布局模式",
                    "type": "string",
                    "default": "flex",
                    "options": [
                      {
                        "key": "flex",
                        "label": "flex"
                      }
                    ],
                    "consequence": "flex"
                  },
                  "justify": {
                    "title": "水平排列方式",
                    "type": "string",
                    "default": "start",
                    "options": [
                      {
                        "key": "start",
                        "label": "start"
                      },
                      {
                        "key": "end",
                        "label": "end"
                      },
                      {
                        "key": "center",
                        "label": "center"
                      },
                      {
                        "key": "space-around",
                        "label": "space-around"
                      },
                      {
                        "key": "space-between",
                        "label": "space-between"
                      }
                    ],
                    "consequence": "start"
                  },
                  "align": {
                    "title": "垂直排列方式",
                    "type": "string",
                    "default": "top",
                    "options": [
                      {
                        "key": "top",
                        "label": "top"
                      },
                      {
                        "key": "middle",
                        "label": "middle"
                      },
                      {
                        "key": "bottom",
                        "label": "bottom"
                      }
                    ],
                    "consequence": "top"
                  },
                  "tag": {
                    "title": "自定义元素标签",
                    "type": "string",
                    "default": "div",
                    "consequence": "div"
                  }
                },
                "slots": {
                  "default": {
                    "title": "默认插槽",
                    "children": [
                      "yb8allFWv",
                      "gJ8bYRq9X"
                    ]
                  }
                }
              },
              "yb8allFWv": {
                "id": "28",
                "title": "自定义元素",
                "description": "默认为文字",
                "name": "una-text",
                "props": {
                  "text": {
                    "title": "文字",
                    "type": "string",
                    "default": "文字",
                    "consequence": "0.0.2版本"
                  },
                  "tag": {
                    "title": "自定义元素标签",
                    "type": "string",
                    "default": "div",
                    "consequence": "div"
                  }
                },
                "style": {
                  "height": "40px",
                  "marginLeft": "10px",
                  "lineHeight": "40px"
                }
              },
              "mMM2-HGqZ": {
                "id": 3,
                "name": "una-button",
                "title": "按钮",
                "description": "",
                "props": {
                  "text": {
                    "title": "点击事件",
                    "type": "string",
                    "default": "按钮",
                    "required": true,
                    "consequence": "使用"
                  },
                  "size": {
                    "title": "按钮大小",
                    "type": "string",
                    "default": "small",
                    "options": [
                      {
                        "key": "medium",
                        "label": "medium"
                      },
                      {
                        "key": "small",
                        "label": "small"
                      },
                      {
                        "key": "mini",
                        "label": "mini"
                      }
                    ],
                    "consequence": "small"
                  },
                  "type": {
                    "title": "按钮类型",
                    "type": "string",
                    "default": "primary",
                    "consequence": "text",
                    "options": [
                      {
                        "key": "primary",
                        "label": "primary"
                      },
                      {
                        "key": "success",
                        "label": "success"
                      },
                      {
                        "key": "warning",
                        "label": "warning"
                      },
                      {
                        "key": "danger",
                        "label": "danger"
                      },
                      {
                        "key": "info",
                        "label": "info"
                      },
                      {
                        "key": "text",
                        "label": "text"
                      }
                    ]
                  },
                  "icon": {
                    "title": "按钮图标",
                    "type": "string",
                    "default": "",
                    "consequence": ""
                  },
                  "plain": {
                    "title": "是否朴素按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "round": {
                    "title": "是否圆角按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "circle": {
                    "title": "是否圆形按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "loading": {
                    "title": "是否加载中",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "disabled": {
                    "title": "是否禁用",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  }
                },
                "events": {
                  "click": {
                    "title": "点击事件",
                    "description": "点击按钮"
                  }
                },
                "dataType": [
                  "string",
                  "number"
                ]
              },
              "KOSvjXVbM": {
                "id": 3,
                "name": "una-button",
                "title": "按钮",
                "description": "",
                "props": {
                  "text": {
                    "title": "点击事件",
                    "type": "string",
                    "default": "按钮",
                    "required": true,
                    "consequence": "使用"
                  },
                  "size": {
                    "title": "按钮大小",
                    "type": "string",
                    "default": "small",
                    "options": [
                      {
                        "key": "medium",
                        "label": "medium"
                      },
                      {
                        "key": "small",
                        "label": "small"
                      },
                      {
                        "key": "mini",
                        "label": "mini"
                      }
                    ],
                    "consequence": "small"
                  },
                  "type": {
                    "title": "按钮类型",
                    "type": "string",
                    "default": "primary",
                    "consequence": "text",
                    "options": [
                      {
                        "key": "primary",
                        "label": "primary"
                      },
                      {
                        "key": "success",
                        "label": "success"
                      },
                      {
                        "key": "warning",
                        "label": "warning"
                      },
                      {
                        "key": "danger",
                        "label": "danger"
                      },
                      {
                        "key": "info",
                        "label": "info"
                      },
                      {
                        "key": "text",
                        "label": "text"
                      }
                    ]
                  },
                  "icon": {
                    "title": "按钮图标",
                    "type": "string",
                    "default": "",
                    "consequence": ""
                  },
                  "plain": {
                    "title": "是否朴素按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "round": {
                    "title": "是否圆角按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "circle": {
                    "title": "是否圆形按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "loading": {
                    "title": "是否加载中",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "disabled": {
                    "title": "是否禁用",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  }
                },
                "events": {
                  "click": {
                    "title": "点击事件",
                    "description": "点击按钮"
                  }
                },
                "dataType": [
                  "string",
                  "number"
                ]
              },
              "gJ8bYRq9X": {
                "id": 3,
                "name": "una-button",
                "title": "按钮",
                "description": "",
                "props": {
                  "text": {
                    "title": "点击事件",
                    "type": "string",
                    "default": "按钮",
                    "required": true,
                    "consequence": "使用"
                  },
                  "size": {
                    "title": "按钮大小",
                    "type": "string",
                    "default": "small",
                    "options": [
                      {
                        "key": "medium",
                        "label": "medium"
                      },
                      {
                        "key": "small",
                        "label": "small"
                      },
                      {
                        "key": "mini",
                        "label": "mini"
                      }
                    ],
                    "consequence": "small"
                  },
                  "type": {
                    "title": "按钮类型",
                    "type": "string",
                    "default": "primary",
                    "consequence": "text",
                    "options": [
                      {
                        "key": "primary",
                        "label": "primary"
                      },
                      {
                        "key": "success",
                        "label": "success"
                      },
                      {
                        "key": "warning",
                        "label": "warning"
                      },
                      {
                        "key": "danger",
                        "label": "danger"
                      },
                      {
                        "key": "info",
                        "label": "info"
                      },
                      {
                        "key": "text",
                        "label": "text"
                      }
                    ]
                  },
                  "icon": {
                    "title": "按钮图标",
                    "type": "string",
                    "default": "",
                    "consequence": ""
                  },
                  "plain": {
                    "title": "是否朴素按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "round": {
                    "title": "是否圆角按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "circle": {
                    "title": "是否圆形按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "loading": {
                    "title": "是否加载中",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "disabled": {
                    "title": "是否禁用",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  }
                },
                "events": {
                  "click": {
                    "title": "点击事件",
                    "description": "点击按钮"
                  }
                },
                "dataType": [
                  "string",
                  "number"
                ]
              },
              "cYCp1fTFb": {
                "id": 3,
                "name": "una-button",
                "title": "按钮",
                "description": "",
                "props": {
                  "text": {
                    "title": "点击事件",
                    "type": "string",
                    "default": "按钮",
                    "required": true,
                    "consequence": "使用"
                  },
                  "size": {
                    "title": "按钮大小",
                    "type": "string",
                    "default": "small",
                    "options": [
                      {
                        "key": "medium",
                        "label": "medium"
                      },
                      {
                        "key": "small",
                        "label": "small"
                      },
                      {
                        "key": "mini",
                        "label": "mini"
                      }
                    ],
                    "consequence": "small"
                  },
                  "type": {
                    "title": "按钮类型",
                    "type": "string",
                    "default": "primary",
                    "consequence": "text",
                    "options": [
                      {
                        "key": "primary",
                        "label": "primary"
                      },
                      {
                        "key": "success",
                        "label": "success"
                      },
                      {
                        "key": "warning",
                        "label": "warning"
                      },
                      {
                        "key": "danger",
                        "label": "danger"
                      },
                      {
                        "key": "info",
                        "label": "info"
                      },
                      {
                        "key": "text",
                        "label": "text"
                      }
                    ]
                  },
                  "icon": {
                    "title": "按钮图标",
                    "type": "string",
                    "default": "",
                    "consequence": ""
                  },
                  "plain": {
                    "title": "是否朴素按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "round": {
                    "title": "是否圆角按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "circle": {
                    "title": "是否圆形按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "loading": {
                    "title": "是否加载中",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "disabled": {
                    "title": "是否禁用",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  }
                },
                "events": {
                  "click": {
                    "title": "点击事件",
                    "description": "点击按钮"
                  }
                },
                "dataType": [
                  "string",
                  "number"
                ]
              },
              "F6Uj5M-O-": {
                "id": 3,
                "name": "una-button",
                "title": "按钮",
                "description": "",
                "props": {
                  "text": {
                    "title": "点击事件",
                    "type": "string",
                    "default": "按钮",
                    "required": true,
                    "consequence": "保存"
                  },
                  "size": {
                    "title": "按钮大小",
                    "type": "string",
                    "default": "small",
                    "options": [
                      {
                        "key": "medium",
                        "label": "medium"
                      },
                      {
                        "key": "small",
                        "label": "small"
                      },
                      {
                        "key": "mini",
                        "label": "mini"
                      }
                    ],
                    "consequence": "small"
                  },
                  "type": {
                    "title": "按钮类型",
                    "type": "string",
                    "default": "primary",
                    "consequence": "primary",
                    "options": [
                      {
                        "key": "primary",
                        "label": "primary"
                      },
                      {
                        "key": "success",
                        "label": "success"
                      },
                      {
                        "key": "warning",
                        "label": "warning"
                      },
                      {
                        "key": "danger",
                        "label": "danger"
                      },
                      {
                        "key": "info",
                        "label": "info"
                      },
                      {
                        "key": "text",
                        "label": "text"
                      }
                    ]
                  },
                  "icon": {
                    "title": "按钮图标",
                    "type": "string",
                    "default": "",
                    "consequence": ""
                  },
                  "plain": {
                    "title": "是否朴素按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "round": {
                    "title": "是否圆角按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "circle": {
                    "title": "是否圆形按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "loading": {
                    "title": "是否加载中",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "disabled": {
                    "title": "是否禁用",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  }
                },
                "events": {
                  "click": {
                    "title": "点击事件",
                    "description": "点击按钮"
                  }
                },
                "dataType": [
                  "string",
                  "number"
                ]
              },
              "99wHPJcui": {
                "id": 8,
                "title": "普通容器",
                "name": "una-container",
                "props": {},
                "slots": {
                  "default": {
                    "title": "默认插槽",
                    "children": [
                      "ieBcCSO9a",
                      "_ClIehBVf",
                      "nqIHWzc7K"
                    ]
                  }
                },
                "events": {
                  "init": {
                    "title": "初始化事件",
                    "description": "初始化事件"
                  }
                }
              },
              "ieBcCSO9a": {
                "id": 13,
                "title": "表单",
                "name": "una-form",
                "props": {
                  "size": {
                    "title": "表单组件大小",
                    "type": "string",
                    "default": "small",
                    "consequence": "small",
                    "options": [
                      {
                        "key": "medium",
                        "label": "medium"
                      },
                      {
                        "key": "small",
                        "label": "small"
                      },
                      {
                        "key": "mini",
                        "label": "mini"
                      }
                    ]
                  }
                },
                "slots": {
                  "default": {
                    "title": "默认插槽",
                    "scoped": false,
                    "children": [
                      "T4Omep-FZ",
                      "BEuNTH10Z",
                      "8sLCXq_5A",
                      "1kZtOzj1f",
                    ]
                  },
                  "content": {
                    "title": "内容",
                    "children": [
                      "WRZIFLxj5",
                      "_ryIWhCrj"
                    ] 
                  }
                },
                "events": {
                  "click": {
                    "title": "点击事件",
                    "description": "点击按钮"
                  }
                }
              },
              "T4Omep-FZ": {
                "id": 14,
                "title": "表单项",
                "name": "una-form-item",
                "props": {
                  "label": {
                    "title": "label",
                    "type": "string",
                    "default": "表单标签",
                    "consequence": "页面名称"
                  },
                  "labelWidth": {
                    "title": "label-width",
                    "type": "string",
                    "description": "例如50px",
                    "default": "100px",
                    "consequence": "100px"
                  },
                  "required": {
                    "title": "是否必填",
                    "type": "boolean",
                    "default": false,
                    "consequence": true
                  },
                  "prop": {
                    "title": "表单域 model 字段",
                    "type": "string",
                    "format": [
                      "componentProps"
                    ]
                  },
                  "size": {
                    "title": "表单组件大小",
                    "type": "string",
                    "default": "small",
                    "consequence": "small",
                    "options": [
                      {
                        "key": "medium",
                        "label": "medium"
                      },
                      {
                        "key": "small",
                        "label": "small"
                      },
                      {
                        "key": "mini",
                        "label": "mini"
                      }
                    ]
                  }
                },
                "slots": {
                  "default": {
                    "title": "默认插槽",
                    "scoped": false,
                    "children": [
                      "eMOYvuTET"
                    ]
                  }
                },
                "events": {
                  "click": {
                    "title": "点击事件",
                    "description": "点击按钮"
                  }
                }
              },
              "BEuNTH10Z": {
                "id": 14,
                "title": "表单项",
                "name": "una-form-item",
                "props": {
                  "label": {
                    "title": "label",
                    "type": "string",
                    "default": "表单标签",
                    "consequence": "页面路径"
                  },
                  "labelWidth": {
                    "title": "label-width",
                    "type": "string",
                    "description": "例如50px",
                    "default": "100px",
                    "consequence": "100px"
                  },
                  "required": {
                    "title": "是否必填",
                    "type": "boolean",
                    "default": false,
                    "consequence": true
                  },
                  "prop": {
                    "title": "表单域 model 字段",
                    "type": "string",
                    "format": [
                      "componentProps"
                    ]
                  },
                  "size": {
                    "title": "表单组件大小",
                    "type": "string",
                    "default": "small",
                    "consequence": "small",
                    "options": [
                      {
                        "key": "medium",
                        "label": "medium"
                      },
                      {
                        "key": "small",
                        "label": "small"
                      },
                      {
                        "key": "mini",
                        "label": "mini"
                      }
                    ]
                  }
                },
                "slots": {
                  "default": {
                    "title": "默认插槽",
                    "scoped": false,
                    "children": [
                      "KrveMAPRL"
                    ]
                  }
                },
                "events": {
                  "click": {
                    "title": "点击事件",
                    "description": "点击按钮"
                  }
                }
              },
              "8sLCXq_5A": {
                "id": 14,
                "title": "表单项",
                "name": "una-form-item",
                "props": {
                  "label": {
                    "title": "label",
                    "type": "string",
                    "default": "表单标签",
                    "consequence": "页面别名"
                  },
                  "labelWidth": {
                    "title": "label-width",
                    "type": "string",
                    "description": "例如50px",
                    "default": "100px",
                    "consequence": "100px"
                  },
                  "required": {
                    "title": "是否必填",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "prop": {
                    "title": "表单域 model 字段",
                    "type": "string",
                    "format": [
                      "componentProps"
                    ]
                  },
                  "size": {
                    "title": "表单组件大小",
                    "type": "string",
                    "default": "small",
                    "consequence": "small",
                    "options": [
                      {
                        "key": "medium",
                        "label": "medium"
                      },
                      {
                        "key": "small",
                        "label": "small"
                      },
                      {
                        "key": "mini",
                        "label": "mini"
                      }
                    ]
                  }
                },
                "slots": {
                  "default": {
                    "title": "默认插槽",
                    "scoped": false,
                    "children": [
                      "Z4dHDVQiU"
                    ]
                  }
                },
                "events": {
                  "click": {
                    "title": "点击事件",
                    "description": "点击按钮"
                  }
                }
              },
              "1kZtOzj1f": {
                "id": 14,
                "title": "表单项",
                "name": "una-form-item",
                "props": {
                  "label": {
                    "title": "label",
                    "type": "string",
                    "default": "表单标签",
                    "consequence": "页面描述"
                  },
                  "labelWidth": {
                    "title": "label-width",
                    "type": "string",
                    "description": "例如50px",
                    "default": "100px",
                    "consequence": "100px"
                  },
                  "required": {
                    "title": "是否必填",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "prop": {
                    "title": "表单域 model 字段",
                    "type": "string",
                    "format": [
                      "componentProps"
                    ]
                  },
                  "size": {
                    "title": "表单组件大小",
                    "type": "string",
                    "default": "small",
                    "consequence": "small",
                    "options": [
                      {
                        "key": "medium",
                        "label": "medium"
                      },
                      {
                        "key": "small",
                        "label": "small"
                      },
                      {
                        "key": "mini",
                        "label": "mini"
                      }
                    ]
                  }
                },
                "slots": {
                  "default": {
                    "title": "默认插槽",
                    "scoped": false,
                    "children": [
                      "tiybNrI5B"
                    ]
                  }
                },
                "events": {
                  "click": {
                    "title": "点击事件",
                    "description": "点击按钮"
                  }
                }
              },
              "WRZIFLxj5": {
                "id": 14,
                "title": "表单项",
                "name": "una-form-item",
                "props": {
                  "label": {
                    "title": "label",
                    "type": "string",
                    "default": "表单标签",
                    "consequence": "灵犀打点"
                  },
                  "labelWidth": {
                    "title": "label-width",
                    "type": "string",
                    "description": "例如50px",
                    "default": "100px",
                    "consequence": "100px"
                  },
                  "required": {
                    "title": "是否必填",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "prop": {
                    "title": "表单域 model 字段",
                    "type": "string",
                    "format": [
                      "componentProps"
                    ]
                  },
                  "size": {
                    "title": "表单组件大小",
                    "type": "string",
                    "default": "small",
                    "consequence": "small",
                    "options": [
                      {
                        "key": "medium",
                        "label": "medium"
                      },
                      {
                        "key": "small",
                        "label": "small"
                      },
                      {
                        "key": "mini",
                        "label": "mini"
                      }
                    ]
                  }
                },
                "slots": {
                  "default": {
                    "title": "默认插槽",
                    "scoped": false,
                    "children": [
                      "K2mtT5IVb"
                    ]
                  }
                },
                "events": {
                  "click": {
                    "title": "点击事件",
                    "description": "点击按钮"
                  }
                }
              },
              "_ryIWhCrj": {
                "id": 14,
                "title": "表单项",
                "name": "una-form-item",
                "props": {
                  "label": {
                    "title": "label",
                    "type": "string",
                    "default": "表单标签",
                    "consequence": "页面预览图"
                  },
                  "labelWidth": {
                    "title": "label-width",
                    "type": "string",
                    "description": "例如50px",
                    "default": "100px",
                    "consequence": "100px"
                  },
                  "required": {
                    "title": "是否必填",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "prop": {
                    "title": "表单域 model 字段",
                    "type": "string",
                    "format": [
                      "componentProps"
                    ]
                  },
                  "size": {
                    "title": "表单组件大小",
                    "type": "string",
                    "default": "small",
                    "consequence": "small",
                    "options": [
                      {
                        "key": "medium",
                        "label": "medium"
                      },
                      {
                        "key": "small",
                        "label": "small"
                      },
                      {
                        "key": "mini",
                        "label": "mini"
                      }
                    ]
                  }
                },
                "slots": {
                  "default": {
                    "title": "默认插槽",
                    "scoped": false,
                    "children": [
                      "uhC15MSir"
                    ]
                  }
                },
                "events": {
                  "click": {
                    "title": "点击事件",
                    "description": "点击按钮"
                  }
                }
              },
              "_ClIehBVf": {
                "id": 6,
                "name": "una-col",
                "title": "列布局",
                "props": {
                  "span": {
                    "title": "栅格占据的列数",
                    "type": "number",
                    "default": 24,
                    "consequence": 20
                  },
                  "offset": {
                    "title": "栅格左侧的间隔格数",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "push": {
                    "title": "栅格向右移动格数",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "pull": {
                    "title": "栅格向左移动格数",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "tag": {
                    "title": "自定义元素标签",
                    "type": "string",
                    "default": "div",
                    "consequence": "div"
                  }
                },
                "slots": {
                  "default": {
                    "title": "默认插槽",
                    "children": []
                  }
                }
              },
              "nqIHWzc7K": {
                "id": 6,
                "name": "una-col",
                "title": "列布局",
                "props": {
                  "span": {
                    "title": "栅格占据的列数",
                    "type": "number",
                    "default": 24,
                    "consequence": 4
                  },
                  "offset": {
                    "title": "栅格左侧的间隔格数",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "push": {
                    "title": "栅格向右移动格数",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "pull": {
                    "title": "栅格向左移动格数",
                    "type": "number",
                    "default": 0,
                    "consequence": 0
                  },
                  "tag": {
                    "title": "自定义元素标签",
                    "type": "string",
                    "default": "div",
                    "consequence": "div"
                  }
                },
                "slots": {
                  "default": {
                    "title": "默认插槽",
                    "children": [
                      "6WkZCR-am"
                    ]
                  }
                }
              },
              "6WkZCR-am": {
                "id": 3,
                "name": "una-button",
                "title": "按钮",
                "description": "",
                "props": {
                  "text": {
                    "title": "点击事件",
                    "type": "string",
                    "default": "按钮",
                    "required": true,
                    "consequence": "确定"
                  },
                  "size": {
                    "title": "按钮大小",
                    "type": "string",
                    "default": "small",
                    "options": [
                      {
                        "key": "medium",
                        "label": "medium"
                      },
                      {
                        "key": "small",
                        "label": "small"
                      },
                      {
                        "key": "mini",
                        "label": "mini"
                      }
                    ],
                    "consequence": "small"
                  },
                  "type": {
                    "title": "按钮类型",
                    "type": "string",
                    "default": "primary",
                    "consequence": "primary",
                    "options": [
                      {
                        "key": "primary",
                        "label": "primary"
                      },
                      {
                        "key": "success",
                        "label": "success"
                      },
                      {
                        "key": "warning",
                        "label": "warning"
                      },
                      {
                        "key": "danger",
                        "label": "danger"
                      },
                      {
                        "key": "info",
                        "label": "info"
                      },
                      {
                        "key": "text",
                        "label": "text"
                      }
                    ]
                  },
                  "icon": {
                    "title": "按钮图标",
                    "type": "string",
                    "default": "",
                    "consequence": ""
                  },
                  "plain": {
                    "title": "是否朴素按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "round": {
                    "title": "是否圆角按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "circle": {
                    "title": "是否圆形按钮",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "loading": {
                    "title": "是否加载中",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "disabled": {
                    "title": "是否禁用",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  }
                },
                "events": {
                  "click": {
                    "title": "点击事件",
                    "description": "点击按钮"
                  }
                },
                "dataType": [
                  "string",
                  "number"
                ]
              },
              "eMOYvuTET": {
                "id": 16,
                "title": "输入框",
                "name": "una-input",
                "props": {
                  "type": {
                    "title": "输入框类型",
                    "type": "string",
                    "default": "text",
                    "options": [
                      {
                        "key": "text",
                        "label": "text"
                      },
                      {
                        "key": "textarea",
                        "label": "textarea"
                      }
                    ],
                    "consequence": "text"
                  },
                  "value": {
                    "title": "绑定值",
                    "type": "string",
                    "format": [
                      "custom",
                      "objPath",
                      "componentProps"
                    ],
                    "default": "",
                    "consequence": ""
                  },
                  "placeholder": {
                    "title": "占位文本",
                    "type": "string",
                    "default": "请在这里输入",
                    "consequence": "请在这里输入"
                  },
                  "disabled": {
                    "title": "是否可编辑",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "size": {
                    "title": "大小",
                    "type": "string",
                    "default": "small",
                    "options": [
                      {
                        "key": "medium",
                        "label": "medium"
                      },
                      {
                        "key": "small",
                        "label": "small"
                      },
                      {
                        "key": "mini",
                        "label": "mini"
                      }
                    ],
                    "consequence": "small"
                  }
                },
                "events": {
                  "blur": {
                    "title": "失去焦点",
                    "description": "在 Input 失去焦点时触发"
                  },
                  "focus": {
                    "title": "获得焦点",
                    "description": "在 Input 获得焦点时触发"
                  },
                  "change": {
                    "title": "值改变",
                    "description": "在 Input 值改变时触发"
                  }
                }
              },
              "KrveMAPRL": {
                "id": 16,
                "title": "输入框",
                "name": "una-input",
                "props": {
                  "type": {
                    "title": "输入框类型",
                    "type": "string",
                    "default": "text",
                    "options": [
                      {
                        "key": "text",
                        "label": "text"
                      },
                      {
                        "key": "textarea",
                        "label": "textarea"
                      }
                    ],
                    "consequence": "text"
                  },
                  "value": {
                    "title": "绑定值",
                    "type": "string",
                    "format": [
                      "custom",
                      "objPath",
                      "componentProps"
                    ],
                    "default": "",
                    "consequence": ""
                  },
                  "placeholder": {
                    "title": "占位文本",
                    "type": "string",
                    "default": "请在这里输入",
                    "consequence": "请在这里输入"
                  },
                  "disabled": {
                    "title": "是否可编辑",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "size": {
                    "title": "大小",
                    "type": "string",
                    "default": "small",
                    "options": [
                      {
                        "key": "medium",
                        "label": "medium"
                      },
                      {
                        "key": "small",
                        "label": "small"
                      },
                      {
                        "key": "mini",
                        "label": "mini"
                      }
                    ],
                    "consequence": "small"
                  }
                },
                "events": {
                  "blur": {
                    "title": "失去焦点",
                    "description": "在 Input 失去焦点时触发"
                  },
                  "focus": {
                    "title": "获得焦点",
                    "description": "在 Input 获得焦点时触发"
                  },
                  "change": {
                    "title": "值改变",
                    "description": "在 Input 值改变时触发"
                  }
                }
              },
              "Z4dHDVQiU": {
                "id": 16,
                "title": "输入框",
                "name": "una-input",
                "props": {
                  "type": {
                    "title": "输入框类型",
                    "type": "string",
                    "default": "text",
                    "options": [
                      {
                        "key": "text",
                        "label": "text"
                      },
                      {
                        "key": "textarea",
                        "label": "textarea"
                      }
                    ],
                    "consequence": "text"
                  },
                  "value": {
                    "title": "绑定值",
                    "type": "string",
                    "format": [
                      "custom",
                      "objPath",
                      "componentProps"
                    ],
                    "default": "",
                    "consequence": ""
                  },
                  "placeholder": {
                    "title": "占位文本",
                    "type": "string",
                    "default": "请在这里输入",
                    "consequence": "请在这里输入"
                  },
                  "disabled": {
                    "title": "是否可编辑",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "size": {
                    "title": "大小",
                    "type": "string",
                    "default": "small",
                    "options": [
                      {
                        "key": "medium",
                        "label": "medium"
                      },
                      {
                        "key": "small",
                        "label": "small"
                      },
                      {
                        "key": "mini",
                        "label": "mini"
                      }
                    ],
                    "consequence": "small"
                  }
                },
                "events": {
                  "blur": {
                    "title": "失去焦点",
                    "description": "在 Input 失去焦点时触发"
                  },
                  "focus": {
                    "title": "获得焦点",
                    "description": "在 Input 获得焦点时触发"
                  },
                  "change": {
                    "title": "值改变",
                    "description": "在 Input 值改变时触发"
                  }
                }
              },
              "tiybNrI5B": {
                "id": 16,
                "title": "输入框",
                "name": "una-input",
                "props": {
                  "type": {
                    "title": "输入框类型",
                    "type": "string",
                    "default": "text",
                    "options": [
                      {
                        "key": "text",
                        "label": "text"
                      },
                      {
                        "key": "textarea",
                        "label": "textarea"
                      }
                    ],
                    "consequence": "textarea"
                  },
                  "value": {
                    "title": "绑定值",
                    "type": "string",
                    "format": [
                      "custom",
                      "objPath",
                      "componentProps"
                    ],
                    "default": "",
                    "consequence": ""
                  },
                  "placeholder": {
                    "title": "占位文本",
                    "type": "string",
                    "default": "请在这里输入",
                    "consequence": "请在这里输入"
                  },
                  "disabled": {
                    "title": "是否可编辑",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "size": {
                    "title": "大小",
                    "type": "string",
                    "default": "small",
                    "options": [
                      {
                        "key": "medium",
                        "label": "medium"
                      },
                      {
                        "key": "small",
                        "label": "small"
                      },
                      {
                        "key": "mini",
                        "label": "mini"
                      }
                    ],
                    "consequence": "small"
                  }
                },
                "events": {
                  "blur": {
                    "title": "失去焦点",
                    "description": "在 Input 失去焦点时触发"
                  },
                  "focus": {
                    "title": "获得焦点",
                    "description": "在 Input 获得焦点时触发"
                  },
                  "change": {
                    "title": "值改变",
                    "description": "在 Input 值改变时触发"
                  }
                }
              },
              "uhC15MSir": {
                "id": "29",
                "title": "图片元素",
                "name": "una-image",
                "props": {
                  "src": {
                    "title": "图片链接",
                    "type": "string",
                    "default": "https://p1.meituan.net/dprainbow/9a3b2c8bfaf8072329aff31266e0ee2977024.png",
                    "consequence": "https://p1.meituan.net/dprainbow/9a3b2c8bfaf8072329aff31266e0ee2977024.png"
                  },
                  "width": {
                    "title": "图片宽度",
                    "type": "string",
                    "default": "100px",
                    "consequence": "100px"
                  },
                  "height": {
                    "title": "图片高度",
                    "type": "string",
                    "default": "100px",
                    "consequence": "100px"
                  }
                }
              },
              "K2mtT5IVb": {
                "id": 16,
                "title": "输入框",
                "name": "una-input",
                "props": {
                  "type": {
                    "title": "输入框类型",
                    "type": "string",
                    "default": "text",
                    "options": [
                      {
                        "key": "text",
                        "label": "text"
                      },
                      {
                        "key": "textarea",
                        "label": "textarea"
                      }
                    ],
                    "consequence": "text"
                  },
                  "value": {
                    "title": "绑定值",
                    "type": "string",
                    "format": [
                      "custom",
                      "objPath",
                      "componentProps"
                    ],
                    "default": "",
                    "consequence": ""
                  },
                  "placeholder": {
                    "title": "占位文本",
                    "type": "string",
                    "default": "请在这里输入",
                    "consequence": "请在这里输入"
                  },
                  "disabled": {
                    "title": "是否可编辑",
                    "type": "boolean",
                    "default": false,
                    "consequence": false
                  },
                  "size": {
                    "title": "大小",
                    "type": "string",
                    "default": "small",
                    "options": [
                      {
                        "key": "medium",
                        "label": "medium"
                      },
                      {
                        "key": "small",
                        "label": "small"
                      },
                      {
                        "key": "mini",
                        "label": "mini"
                      }
                    ],
                    "consequence": "small"
                  }
                },
                "events": {
                  "blur": {
                    "title": "失去焦点",
                    "description": "在 Input 失去焦点时触发"
                  },
                  "focus": {
                    "title": "获得焦点",
                    "description": "在 Input 获得焦点时触发"
                  },
                  "change": {
                    "title": "值改变",
                    "description": "在 Input 值改变时触发"
                  }
                }
              }
            },
        "root": "99wHPJcui"
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
        updateInstances(state, {key , childs, slots}){
            let slot = _.get(state.instances, key+'.slots.'+slots);
            slot.children = childs;
        }
    },
    actions: {
        updateChilds({commit, state}, payload){
            commit('updateInstances', payload)
        }
    },
});

export default store;