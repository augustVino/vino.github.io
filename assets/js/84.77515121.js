(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{641:function(t,e,c){"use strict";c.r(e);var n=c(59),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[c("h1",{attrs:{id:"flex-弹性布局"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#flex-弹性布局"}},[t._v("#")]),t._v(" flex 弹性布局")]),t._v(" "),c("h2",{attrs:{id:"基本概念"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),c("ol",[c("li",[t._v("采用 flex 布局的元素，称为 "),c("strong",[t._v("flex 容器")]),t._v("（"),c("code",[t._v("flex container")]),t._v("），简称“容器”。")]),t._v(" "),c("li",[t._v("它的所有子元素自动称为容器成员，称为 "),c("strong",[t._v("flex 项目")]),t._v("（"),c("code",[t._v("flex item")]),t._v("），简称“项目”。")]),t._v(" "),c("li",[t._v("容器拥有两根隐形的轴，水平的"),c("strong",[t._v("主轴")]),t._v("（"),c("code",[t._v("main axis")]),t._v("），和竖直的"),c("strong",[t._v("交叉轴")]),t._v("（"),c("code",[t._v("cross axis")]),t._v("）。")]),t._v(" "),c("li",[t._v("主轴开始的位置，即主轴与容器左边框的交点，称为 "),c("strong",[c("code",[t._v("main start")])]),t._v("；主轴结束的位置称为 "),c("strong",[c("code",[t._v("main end")])]),t._v("；")]),t._v(" "),c("li",[t._v("交叉轴开始的位置称为 "),c("strong",[c("code",[t._v("cross start")])]),t._v("；交叉轴结束的位置称为 "),c("strong",[c("code",[t._v("cross end")])]),t._v("。")]),t._v(" "),c("li",[t._v("item 按主轴或交叉轴排列，item 在主轴方向上占据的宽度称为 "),c("strong",[c("code",[t._v("main size")])]),t._v("，在交叉轴方向上占据的宽度称为 "),c("strong",[c("code",[t._v("cross size")])]),t._v("。")])]),t._v(" "),c("p",[t._v("具体可以依照下图来分析：\n"),c("image-image",{attrs:{imgSrc:"/img/css3.8-1.webp",imgAlt:"css3.8-1"}})],1),t._v(" "),c("div",{staticClass:"custom-block danger"},[c("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),c("p",[t._v("注意：使用 flex 布局，项目（即 flex item）的 "),c("code",[t._v("float、clear、vertical-align")]),t._v(" 属性将失效。")])]),t._v(" "),c("h2",{attrs:{id:"容器-flex-container-的属性"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#容器-flex-container-的属性"}},[t._v("#")]),t._v(" 容器(flex-container)的属性")]),t._v(" "),c("h3",{attrs:{id:"flex-direction"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#flex-direction"}},[t._v("#")]),t._v(" flex-direction")]),t._v(" "),c("blockquote",[c("p",[t._v("flex-direction 属性决定主轴的方向（即项目的排列方向）。")])]),t._v(" "),c("ul",[c("li",[c("code",[t._v("row")]),t._v(" (默认值)：主轴为水平方向，起点在"),c("strong",[t._v("左端")]),t._v("。")]),t._v(" "),c("li",[c("code",[t._v("row-reverse")]),t._v("：主轴为水平方向，起点在"),c("strong",[t._v("右端")]),t._v("。")]),t._v(" "),c("li",[c("code",[t._v("column")]),t._v("：主轴为垂直方向，起点在"),c("strong",[t._v("上沿")]),t._v("。")]),t._v(" "),c("li",[c("code",[t._v("column-reverse")]),t._v("：主轴为垂直方向，起点在"),c("strong",[t._v("下沿")]),t._v("。")])]),t._v(" "),c("fragment-FlexDirection"),t._v(" "),c("h3",{attrs:{id:"flex-wrap"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#flex-wrap"}},[t._v("#")]),t._v(" flex-wrap")]),t._v(" "),c("blockquote",[c("p",[t._v("默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap 属性定义，如果一条轴线排不下，如何换行。")])]),t._v(" "),c("ul",[c("li",[t._v("nowrap（默认值）：不换行")]),t._v(" "),c("li",[t._v("wrap：换行，第一行在上方")]),t._v(" "),c("li",[t._v("wrap-reverse：换行，第一行在下方")])]),t._v(" "),c("fragment-FlexWrap"),t._v(" "),c("h3",{attrs:{id:"flex-flow"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#flex-flow"}},[t._v("#")]),t._v(" flex-flow")]),t._v(" "),c("blockquote",[c("p",[t._v("flex-flow 属性是 flex-direction 属性和 flex-wrap 属性的简写形式，默认值为 row nowrap。")])]),t._v(" "),c("div",{staticClass:"language-md extra-class"},[c("pre",{pre:!0,attrs:{class:"language-md"}},[c("code",[t._v("flex-flow: "),c("span",{pre:!0,attrs:{class:"token tag"}},[c("span",{pre:!0,attrs:{class:"token tag"}},[c("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("flex-direction")]),c("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" || "),c("span",{pre:!0,attrs:{class:"token tag"}},[c("span",{pre:!0,attrs:{class:"token tag"}},[c("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("flex-wrap")]),c("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(";\n")]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775714693-55386"}},[t._v("copy success")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"flex-flow: <flex-direction> || <flex-wrap>;\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775714693-55386","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775714693-96826"}},[t._v("Copy successed")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"flex-flow: <flex-direction> || <flex-wrap>;\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775714693-96826","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"Copy failed",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("Copy")])])])]),c("h3",{attrs:{id:"justify-content"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#justify-content"}},[t._v("#")]),t._v(" justify-content")]),t._v(" "),c("blockquote",[c("p",[t._v("justify-content 属性定义了项目在主轴上的对齐方式。")])]),t._v(" "),c("p",[t._v("它可能取 5 个值，具体对齐方式与轴的方向有关。")]),t._v(" "),c("div",{staticClass:"language-md extra-class"},[c("pre",{pre:!0,attrs:{class:"language-md"}},[c("code",[t._v("justify-content: flex-start | flex-end | center | space-between | space-around;\n")]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775714693-76852"}},[t._v("copy success")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"justify-content: flex-start | flex-end | center | space-between | space-around;\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775714693-76852","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775714693-97999"}},[t._v("Copy successed")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"justify-content: flex-start | flex-end | center | space-between | space-around;\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775714693-97999","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"Copy failed",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("Copy")])])])]),c("p",[t._v("下面假设主轴为从左到右。")]),t._v(" "),c("ul",[c("li",[t._v("flex-start（默认值）：左对齐")]),t._v(" "),c("li",[t._v("flex-end：右对齐")]),t._v(" "),c("li",[t._v("center：居中")]),t._v(" "),c("li",[t._v("space-between："),c("strong",[t._v("两端对齐，项目之间的间隔都相等")]),t._v("。")]),t._v(" "),c("li",[t._v("space-around："),c("strong",[t._v("每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍")]),t._v("。")])]),t._v(" "),c("fragment-JustifyContent"),t._v(" "),c("h3",{attrs:{id:"align-items"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#align-items"}},[t._v("#")]),t._v(" align-items")]),t._v(" "),c("blockquote",[c("p",[t._v("align-items 属性定义项目在交叉轴上如何对齐。项目只有一根轴线(指项目只占一行或一列时)，该属性起作用。")])]),t._v(" "),c("p",[t._v("它可能取 5 个值。具体的对齐方式与交叉轴的方向有关。")]),t._v(" "),c("div",{staticClass:"language-md extra-class"},[c("pre",{pre:!0,attrs:{class:"language-md"}},[c("code",[t._v("align-items: flex-start | flex-end | center | baseline | stretch;\n")]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775714693-30273"}},[t._v("copy success")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"align-items: flex-start | flex-end | center | baseline | stretch;\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775714693-30273","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775714693-57448"}},[t._v("Copy successed")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"align-items: flex-start | flex-end | center | baseline | stretch;\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775714693-57448","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"Copy failed",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("Copy")])])])]),c("p",[t._v("下面假设交叉轴从上到下。")]),t._v(" "),c("ul",[c("li",[t._v("flex-start：交叉轴的起点对齐。")]),t._v(" "),c("li",[t._v("flex-end：交叉轴的终点对齐。")]),t._v(" "),c("li",[t._v("center：交叉轴的中点对齐。")]),t._v(" "),c("li",[t._v("baseline：项目的第一行文字的基线对齐。")]),t._v(" "),c("li",[t._v("stretch（默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度。")])]),t._v(" "),c("fragment-AlignItems"),t._v(" "),c("h3",{attrs:{id:"align-content"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#align-content"}},[t._v("#")]),t._v(" align-content")]),t._v(" "),c("blockquote",[c("p",[t._v("align-content 属性定义了多根轴线的对齐方式。如果项目只有一根轴线(指项目只占一行或一列时)，该属性不起作用。")])]),t._v(" "),c("div",{staticClass:"language-md extra-class"},[c("pre",{pre:!0,attrs:{class:"language-md"}},[c("code",[t._v("align-content: flex-start | flex-end | center | space-between | space-around | stretch;\n")]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775714694-86618"}},[t._v("copy success")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"align-content: flex-start | flex-end | center | space-between | space-around | stretch;\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775714694-86618","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775714694-24089"}},[t._v("Copy successed")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"align-content: flex-start | flex-end | center | space-between | space-around | stretch;\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775714694-24089","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"Copy failed",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("Copy")])])])]),c("p",[t._v("下面假设交叉轴从上到下。")]),t._v(" "),c("ul",[c("li",[t._v("flex-start：与交叉轴的起点对齐。。")]),t._v(" "),c("li",[t._v("flex-end：与交叉轴的终点对齐。")]),t._v(" "),c("li",[t._v("center：与交叉轴的中点对齐。")]),t._v(" "),c("li",[t._v("space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。")]),t._v(" "),c("li",[t._v("space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。")]),t._v(" "),c("li",[t._v("stretch（默认值）：轴线占满整个交叉轴。")])]),t._v(" "),c("fragment-AlignContent"),t._v(" "),c("h2",{attrs:{id:"项目-flex-item-的属性"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#项目-flex-item-的属性"}},[t._v("#")]),t._v(" 项目(flex-item)的属性")]),t._v(" "),c("h3",{attrs:{id:"order"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#order"}},[t._v("#")]),t._v(" order")]),t._v(" "),c("blockquote",[c("p",[t._v("order 属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0。")])]),t._v(" "),c("fragment-ItemOrder"),t._v(" "),c("h3",{attrs:{id:"flex-grow"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#flex-grow"}},[t._v("#")]),t._v(" flex-grow")]),t._v(" "),c("blockquote",[c("p",[t._v("flex-grow 属性定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。")])]),t._v(" "),c("blockquote",[c("p",[t._v("如果所有项目的 flex-grow 属性都为 1，则它们将等分剩余空间（如果有的话）。")])]),t._v(" "),c("blockquote",[c("p",[t._v("如果一个项目的 flex-grow 属性为 2，其他项目都为 1，则前者占据的剩余空间将比其他项多一倍。")])]),t._v(" "),c("fragment-FlexGrow"),t._v(" "),c("h3",{attrs:{id:"flex-shrink"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#flex-shrink"}},[t._v("#")]),t._v(" flex-shrink")]),t._v(" "),c("blockquote",[c("p",[t._v("flex-shrink 属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。")])]),t._v(" "),c("blockquote",[c("p",[t._v("如果所有项目的 flex-shrink 属性都为 1，当空间不足时，都将等比例缩小。")])]),t._v(" "),c("blockquote",[c("p",[t._v("如果一个项目的 flex-shrink 属性为 0，其他项目都为 1，则空间不足时，前者不缩小。")])]),t._v(" "),c("blockquote",[c("p",[t._v("负值对该属性无效。")])]),t._v(" "),c("fragment-FlexShrink"),t._v(" "),c("h3",{attrs:{id:"flex-basis"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#flex-basis"}},[t._v("#")]),t._v(" flex-basis")]),t._v(" "),c("blockquote",[c("p",[t._v("flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。")])]),t._v(" "),c("blockquote",[c("p",[t._v("浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 auto，即项目的本来大小。")])]),t._v(" "),c("blockquote",[c("p",[t._v("它可以设为跟 width 或 height 属性一样的值（比如 350px），则项目将占据固定空间。")])]),t._v(" "),c("h3",{attrs:{id:"flex"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#flex"}},[t._v("#")]),t._v(" flex")]),t._v(" "),c("blockquote",[c("p",[t._v("flex 属性是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选。")])]),t._v(" "),c("blockquote",[c("p",[t._v("该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。")])]),t._v(" "),c("div",{staticClass:"language-md extra-class"},[c("pre",{pre:!0,attrs:{class:"language-md"}},[c("code",[t._v("flex: none | [ "),c("span",{pre:!0,attrs:{class:"token tag"}},[c("span",{pre:!0,attrs:{class:"token tag"}},[c("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'flex-grow'")]),c("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),c("span",{pre:!0,attrs:{class:"token tag"}},[c("span",{pre:!0,attrs:{class:"token tag"}},[c("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'flex-shrink'")]),c("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" || "),c("span",{pre:!0,attrs:{class:"token tag"}},[c("span",{pre:!0,attrs:{class:"token tag"}},[c("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'flex-basis'")]),c("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" ]\n")]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775714694-47809"}},[t._v("copy success")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"flex: none | [ <'flex-grow'> <'flex-shrink'> || <'flex-basis'> ]\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775714694-47809","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775714694-82463"}},[t._v("Copy successed")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"flex: none | [ <'flex-grow'> <'flex-shrink'> || <'flex-basis'> ]\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775714694-82463","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"Copy failed",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("Copy")])])])]),c("h3",{attrs:{id:"align-self"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#align-self"}},[t._v("#")]),t._v(" align-self")]),t._v(" "),c("blockquote",[c("p",[t._v("align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。")])]),t._v(" "),c("blockquote",[c("p",[t._v("默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。")])]),t._v(" "),c("div",{staticClass:"language-md extra-class"},[c("pre",{pre:!0,attrs:{class:"language-md"}},[c("code",[t._v("align-self: auto | flex-start | flex-end | center | baseline | stretch;\n")]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775714694-34456"}},[t._v("copy success")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"align-self: auto | flex-start | flex-end | center | baseline | stretch;\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775714694-34456","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775714694-46048"}},[t._v("Copy successed")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"align-self: auto | flex-start | flex-end | center | baseline | stretch;\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775714694-46048","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"Copy failed",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("Copy")])])])]),c("ul",[c("li",[t._v("flex-start：交叉轴的起点对齐。")]),t._v(" "),c("li",[t._v("flex-end：交叉轴的终点对齐。")]),t._v(" "),c("li",[t._v("center：交叉轴的中点对齐。")]),t._v(" "),c("li",[t._v("baseline：项目的第一行文字的基线对齐。")]),t._v(" "),c("li",[t._v("stretch（默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度。")])]),t._v(" "),c("fragment-AlignSelf"),t._v(" "),c("star-star"),t._v(" "),c("comment-comment"),t._v(" "),c("back-to-top")],1)}),[],!1,null,null,null);e.default=a.exports}}]);