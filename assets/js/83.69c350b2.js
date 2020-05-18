(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{639:function(t,n,e){"use strict";e.r(n);var c=e(59),a=Object(c.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"裁减"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#裁减"}},[t._v("#")]),t._v(" 裁减")]),t._v(" "),e("h2",{attrs:{id:"clip-path"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clip-path"}},[t._v("#")]),t._v(" clip-path")]),t._v(" "),e("p",[t._v("功能："),e("code",[t._v("clip-path")]),t._v("用来剪切元素，代替了现在已经弃用的剪切"),e("code",[t._v("clip")]),t._v("属性。它创建一个剪切区域，区域内的部分显示，区域外的隐藏。")]),t._v(" "),e("p",[t._v("👇 先看下效果,拖动三个小圆点查看对应的"),e("code",[t._v("clip-path")]),t._v("值\n"),e("fragment-ClipPath")],1),t._v(" "),e("p",[t._v("体验更多形状，可以查看 "),e("code",[t._v("clip-path")]),t._v("在线"),e("a",{attrs:{href:"https://bennettfeely.com/clippy/",target:"_blank",rel:"noopener noreferrer"}},[t._v("神器"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"属性值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性值"}},[t._v("#")]),t._v(" 属性值")]),t._v(" "),e("ol",[e("li",[e("p",[e("code",[t._v("none")])])]),t._v(" "),e("li",[e("p",[t._v("链接资源，如 "),e("code",[t._v("url(resource.svg#c1)")])])]),t._v(" "),e("li",[e("p",[t._v("盒子值，一共有七个")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("margin-box")]),t._v(" 使用 margin box 作为引用框")]),t._v(" "),e("li",[e("code",[t._v("border-box")]),t._v(" 使用 border box 作为引用框")]),t._v(" "),e("li",[e("code",[t._v("padding-box")]),t._v(" 使用 padding box 作为引用框")]),t._v(" "),e("li",[e("code",[t._v("content-box")]),t._v(" 使用 content box 作为引用框")]),t._v(" "),e("li",[e("code",[t._v("fill-box")]),t._v(" 利用对象边界框作为引用框")]),t._v(" "),e("li",[e("code",[t._v("stroke-box")]),t._v(" 使用笔触边界框作为引用框")]),t._v(" "),e("li",[e("code",[t._v("view-box")]),t._v(" 使用最近的 SVG 视口作为引用框")])])]),t._v(" "),e("li",[e("p",[t._v("形状函数（相当于 SVG 中的形状元素）")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("inset()")])]),t._v(" "),e("li",[e("code",[t._v("circle()")])]),t._v(" "),e("li",[e("code",[t._v("ellipse()")])]),t._v(" "),e("li",[e("code",[t._v("polygon()")])]),t._v(" "),e("li",[e("code",[t._v("path()")])])])]),t._v(" "),e("li",[e("p",[t._v("盒子和形状结合值 "),e("code",[t._v("clip-path: padding-box circle(50px at 0 100px);")])])])]),t._v(" "),e("h4",{attrs:{id:"inset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inset"}},[t._v("#")]),t._v(" "),e("code",[t._v("inset()")])]),t._v(" "),e("p",[e("strong",[t._v("矩形 可以绘制圆角")])]),t._v(" "),e("div",{staticClass:"language-markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 语法 --\x3e")]),t._v("\n\ninset()可以传入 5 个参数，分别对应 top,right,bottom,left 的裁剪位置,roundradius（可选，圆角）\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 示例 --\x3e")]),t._v("\n\nclip-path: inset(2em 3em 2em 1em round 2em);\n")]),e("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[e("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775714724-54925"}},[t._v("copy success")]),e("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"\x3c!-- 语法 --\x3e\n\ninset()可以传入 5 个参数，分别对应 top,right,bottom,left 的裁剪位置,roundradius（可选，圆角）\n\n\x3c!-- 示例 --\x3e\n\nclip-path: inset(2em 3em 2em 1em round 2em);\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775714724-54925","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])]),e("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[e("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775714724-90651"}},[t._v("Copy successed")]),e("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"\x3c!-- 语法 --\x3e\n\ninset()可以传入 5 个参数，分别对应 top,right,bottom,left 的裁剪位置,roundradius（可选，圆角）\n\n\x3c!-- 示例 --\x3e\n\nclip-path: inset(2em 3em 2em 1em round 2em);\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775714724-90651","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"Copy failed",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("Copy")])])])]),e("h4",{attrs:{id:"circle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#circle"}},[t._v("#")]),t._v(" "),e("code",[t._v("circle()")])]),t._v(" "),e("p",[e("strong",[t._v("定义一个圆")])]),t._v(" "),e("div",{staticClass:"language-markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 语法 --\x3e")]),t._v("\n\ncircle( [ "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("shape-radius")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" ]? [ at "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("position")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" ]? )\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 说明 --\x3e")]),t._v("\n\ncircle()可以传人 2 个可选参数；\n\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" 圆的半径，默认元素宽高中短的那个为直径，支持百分比\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" 圆心位置，默认为元素中心点\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 半径公式 --\x3e")]),t._v("\n\n如果半径使用百分比：圆的半径 = (sqrt(width^2+height^2)/sqrt(2)) \\* 百分比\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 示例 --\x3e")]),t._v("\n\nclip-path: circle(30% at 150px 120px);\n")]),e("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[e("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775714724-52659"}},[t._v("copy success")]),e("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"\x3c!-- 语法 --\x3e\n\ncircle( [ <shape-radius> ]? [ at <position> ]? )\n\n\x3c!-- 说明 --\x3e\n\ncircle()可以传人 2 个可选参数；\n\n1. 圆的半径，默认元素宽高中短的那个为直径，支持百分比\n2. 圆心位置，默认为元素中心点\n\n\x3c!-- 半径公式 --\x3e\n\n如果半径使用百分比：圆的半径 = (sqrt(width^2+height^2)/sqrt(2)) \\* 百分比\n\n\x3c!-- 示例 --\x3e\n\nclip-path: circle(30% at 150px 120px);\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775714724-52659","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])]),e("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[e("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775714724-8892"}},[t._v("Copy successed")]),e("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"\x3c!-- 语法 --\x3e\n\ncircle( [ <shape-radius> ]? [ at <position> ]? )\n\n\x3c!-- 说明 --\x3e\n\ncircle()可以传人 2 个可选参数；\n\n1. 圆的半径，默认元素宽高中短的那个为直径，支持百分比\n2. 圆心位置，默认为元素中心点\n\n\x3c!-- 半径公式 --\x3e\n\n如果半径使用百分比：圆的半径 = (sqrt(width^2+height^2)/sqrt(2)) \\* 百分比\n\n\x3c!-- 示例 --\x3e\n\nclip-path: circle(30% at 150px 120px);\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775714724-8892","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"Copy failed",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("Copy")])])])]),e("h4",{attrs:{id:"ellipse"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ellipse"}},[t._v("#")]),t._v(" "),e("code",[t._v("ellipse()")])]),t._v(" "),e("p",[e("strong",[t._v("定义一个椭圆")])]),t._v(" "),e("div",{staticClass:"language-markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 语法 --\x3e")]),t._v("\n\nellipse( [ "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("shape-radius")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{2} ]? [ at "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("position")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" ]? )\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 说明 --\x3e")]),t._v("\n\nellipse()可以传人 3 个可选参数；\n\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" 椭圆的 X 轴半径，默认是宽度的一半，支持百分比\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" 椭圆的 Y 轴半径，默认是高度的一半，支持百分比\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" 椭圆中心位置，默认是元素的中心点\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 示例 --\x3e")]),t._v("\n\nclip-path: ellipse(45% 30% at 50% 50%);\n")]),e("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[e("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775714724-99561"}},[t._v("copy success")]),e("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"\x3c!-- 语法 --\x3e\n\nellipse( [ <shape-radius>{2} ]? [ at <position> ]? )\n\n\x3c!-- 说明 --\x3e\n\nellipse()可以传人 3 个可选参数；\n\n1. 椭圆的 X 轴半径，默认是宽度的一半，支持百分比\n2. 椭圆的 Y 轴半径，默认是高度的一半，支持百分比\n3. 椭圆中心位置，默认是元素的中心点\n\n\x3c!-- 示例 --\x3e\n\nclip-path: ellipse(45% 30% at 50% 50%);\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775714724-99561","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])]),e("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[e("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775714724-75617"}},[t._v("Copy successed")]),e("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"\x3c!-- 语法 --\x3e\n\nellipse( [ <shape-radius>{2} ]? [ at <position> ]? )\n\n\x3c!-- 说明 --\x3e\n\nellipse()可以传人 3 个可选参数；\n\n1. 椭圆的 X 轴半径，默认是宽度的一半，支持百分比\n2. 椭圆的 Y 轴半径，默认是高度的一半，支持百分比\n3. 椭圆中心位置，默认是元素的中心点\n\n\x3c!-- 示例 --\x3e\n\nclip-path: ellipse(45% 30% at 50% 50%);\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775714724-75617","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"Copy failed",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("Copy")])])])]),e("h4",{attrs:{id:"polygon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#polygon"}},[t._v("#")]),t._v(" "),e("code",[t._v("polygon()")])]),t._v(" "),e("p",[e("strong",[t._v("定义一个多边形")])]),t._v(" "),e("div",{staticClass:"language-markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 语法 --\x3e")]),t._v("\n\npolygon( "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("fill-rule")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("? , [ "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("length-percentage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("length-percentage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" ]# )\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 说明 --\x3e")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("fill-rule")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("可选，表示填充规则用来确定该多边形的内部。可能的值有 nonzero 和 evenodd,默认值是 nonzero\n后面的每对参数表示多边形的顶点坐标（X,Y），也就是连接点\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 示例 --\x3e")]),t._v("\n\nclip-path: polygon(50% 0,100% 50%,0 100%);\n")]),e("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[e("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775714724-2555"}},[t._v("copy success")]),e("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"\x3c!-- 语法 --\x3e\n\npolygon( <fill-rule>? , [ <length-percentage> <length-percentage> ]# )\n\n\x3c!-- 说明 --\x3e\n\n<fill-rule>可选，表示填充规则用来确定该多边形的内部。可能的值有 nonzero 和 evenodd,默认值是 nonzero\n后面的每对参数表示多边形的顶点坐标（X,Y），也就是连接点\n\n\x3c!-- 示例 --\x3e\n\nclip-path: polygon(50% 0,100% 50%,0 100%);\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775714724-2555","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])]),e("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[e("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775714724-38727"}},[t._v("Copy successed")]),e("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"\x3c!-- 语法 --\x3e\n\npolygon( <fill-rule>? , [ <length-percentage> <length-percentage> ]# )\n\n\x3c!-- 说明 --\x3e\n\n<fill-rule>可选，表示填充规则用来确定该多边形的内部。可能的值有 nonzero 和 evenodd,默认值是 nonzero\n后面的每对参数表示多边形的顶点坐标（X,Y），也就是连接点\n\n\x3c!-- 示例 --\x3e\n\nclip-path: polygon(50% 0,100% 50%,0 100%);\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775714724-38727","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"Copy failed",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("Copy")])])])]),e("p",[e("code",[t._v("clip-path")]),t._v("用的最多的值就属"),e("code",[t._v("polygon")]),t._v("函数，它的参数由一堆"),e("code",[t._v("x y")]),t._v("坐标点组成，它可以接受无限个参数，每个参数都是"),e("code",[t._v("x y")]),t._v("坐标，最终显示的形状就是这些坐标连接成的形状。如"),e("code",[t._v("clip-path: polygon(50% 0%, 0% 100%, 100% 100%);")]),t._v("，是一个三角形。")]),t._v(" "),e("p",[e("code",[t._v("clip-path")]),t._v("也可以使用"),e("code",[t._v("transition")]),t._v("属性让它有动画效果，不过需要变动前后的坐标点数量必须相同。")]),t._v(" "),e("star-star"),t._v(" "),e("comment-comment"),t._v(" "),e("back-to-top")],1)}),[],!1,null,null,null);n.default=a.exports}}]);