(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1001:function(t,e,v){"use strict";v.r(e);var s=v(86),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"一、什么是-vdom"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是-vdom"}},[t._v("#")]),t._v(" 一、什么是 vdom")]),t._v(" "),v("ul",[v("li",[t._v("用 "),v("code",[t._v("JS")]),t._v(" 模拟 "),v("code",[t._v("DOM")]),t._v(" 结构")]),t._v(" "),v("li",[v("code",[t._v("DOM")]),t._v(" 变化的对比，放在 "),v("code",[t._v("JS")]),t._v(" 层来做")]),t._v(" "),v("li",[t._v("提高重绘性能")])]),t._v(" "),v("h2",{attrs:{id:"二、设计一个需求场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、设计一个需求场景"}},[t._v("#")]),t._v(" 二、设计一个需求场景")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cos.poetries.work/gitee/2019/10/587.png",alt:"img"}})]),t._v(" "),v("p",[v("strong",[t._v("用jQuery实现")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cos.poetries.work/gitee/2019/10/588.png",alt:"img"}}),t._v(" "),v("img",{attrs:{src:"https://cos.poetries.work/gitee/2019/10/589.png",alt:"img"}}),t._v(" "),v("img",{attrs:{src:"https://cos.poetries.work/gitee/2019/10/590.png",alt:"img"}})]),t._v(" "),v("p",[v("strong",[t._v("遇到的问题")])]),t._v(" "),v("ul",[v("li",[t._v("DOM 操作是“昂贵”的，js 运行效率高")]),t._v(" "),v("li",[t._v("尽量减少 DOM 操作，而不是“推倒重来”")]),t._v(" "),v("li",[t._v("项目越复杂，影响就越严重")]),t._v(" "),v("li",[t._v("vdom 即可解决这个问题")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cos.poetries.work/gitee/2019/10/591.png",alt:"img"}})]),t._v(" "),v("h2",{attrs:{id:"三、vdom-的如何应用-核心-api-是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、vdom-的如何应用-核心-api-是什么"}},[t._v("#")]),t._v(" 三、vdom 的如何应用，核心 API 是什么")]),t._v(" "),v("p",[v("strong",[t._v("什么是 vdom")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cos.poetries.work/gitee/2019/10/592.png",alt:"img"}})]),t._v(" "),v("p",[v("strong",[t._v("介绍 snabbdom")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cos.poetries.work/gitee/2019/10/593.png",alt:"img"}}),t._v(" "),v("img",{attrs:{src:"https://cos.poetries.work/gitee/2019/10/594.png",alt:"img"}})]),t._v(" "),v("p",[v("strong",[t._v("介绍 snabbdom - h 函数")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cos.poetries.work/gitee/2019/10/595.png",alt:"img"}})]),t._v(" "),v("p",[v("strong",[t._v("介绍 snabbdom - patch 函数")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cos.poetries.work/gitee/2019/10/596.png",alt:"img"}})]),t._v(" "),v("p",[v("strong",[t._v("重做jQuery的demo")])]),t._v(" "),v("ul",[v("li",[t._v("使用 "),v("code",[t._v("data")]),t._v("生成 "),v("code",[t._v("vnode")])]),t._v(" "),v("li",[t._v("第一次渲染，将 "),v("code",[t._v("vnode")]),t._v(" 渲染到 "),v("code",[t._v("#container")]),t._v("中")]),t._v(" "),v("li",[t._v("并将 "),v("code",[t._v("vnode")]),t._v(" 缓存下来")]),t._v(" "),v("li",[t._v("修改 "),v("code",[t._v("data")]),t._v(" 之后，用新 "),v("code",[t._v("data")]),t._v(" 生成 "),v("code",[t._v("newVnode")])]),t._v(" "),v("li",[t._v("将 "),v("code",[t._v("vnode")]),t._v(" 和 "),v("code",[t._v("newVnode")]),t._v(" 对比")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cos.poetries.work/gitee/2019/10/597.png",alt:"img"}})]),t._v(" "),v("p",[v("strong",[t._v("核心 API")])]),t._v(" "),v("ul",[v("li",[v("code",[t._v("h(‘<标签名>’, {…属性…}, […子元素…])")])]),t._v(" "),v("li",[v("code",[t._v("h(‘<标签名>’, {…属性…}, ‘….’)")])]),t._v(" "),v("li",[v("code",[t._v("patch(container, vnode)")])]),t._v(" "),v("li",[v("code",[t._v("patch(vnode, newVnode)")])])]),t._v(" "),v("h2",{attrs:{id:"四、介绍一下-diff-算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四、介绍一下-diff-算法"}},[t._v("#")]),t._v(" 四、介绍一下 diff 算法")]),t._v(" "),v("h3",{attrs:{id:"_4-1-vdom-为何使用-diff-算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-vdom-为何使用-diff-算法"}},[t._v("#")]),t._v(" 4.1 vdom 为何使用 diff 算法")]),t._v(" "),v("ul",[v("li",[t._v("DOM 操作是“昂贵”的，因此尽量减少 DOM 操作")]),t._v(" "),v("li",[t._v("找出本次 DOM 必须更新的节点来更新，其他的不更新")]),t._v(" "),v("li",[t._v("这个“找出”的过程，就需要 diff 算法")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cos.poetries.work/gitee/2019/10/598.png",alt:"img"}})]),t._v(" "),v("p",[v("strong",[t._v("patch(container, vnode)")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cos.poetries.work/gitee/2019/10/599.png",alt:"img"}}),t._v(" "),v("img",{attrs:{src:"https://cos.poetries.work/gitee/2019/10/600.png",alt:"img"}})]),t._v(" "),v("p",[v("strong",[t._v("演示过程")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cos.poetries.work/gitee/2019/10/601.png",alt:"img"}}),t._v(" "),v("img",{attrs:{src:"https://cos.poetries.work/gitee/2019/10/602.png",alt:"img"}}),t._v(" "),v("img",{attrs:{src:"https://cos.poetries.work/gitee/2019/10/603.png",alt:"img"}}),t._v(" "),v("img",{attrs:{src:"https://cos.poetries.work/gitee/2019/10/604.png",alt:"img"}})]),t._v(" "),v("h3",{attrs:{id:"_4-2-diff-实现过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-diff-实现过程"}},[t._v("#")]),t._v(" 4.2 diff 实现过程")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("patch(container, vnode)")]),t._v(" 和 "),v("code",[t._v("patch(vnode, newVnode)")])]),t._v(" "),v("li",[v("code",[t._v("createElment")])]),t._v(" "),v("li",[v("code",[t._v("updateChildren")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);