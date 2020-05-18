(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{656:function(t,e,n){"use strict";n.r(e);var a=n(59),c=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"intersectionobserver-实现图片懒加载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intersectionobserver-实现图片懒加载"}},[t._v("#")]),t._v(" IntersectionObserver 实现图片懒加载")]),t._v(" "),n("h2",{attrs:{id:"概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),n("blockquote",[n("p",[n("code",[t._v("IntersectionObserver")]),t._v(" 接口(从属于 "),n("code",[t._v("Intersection Observer API")]),t._v(" )为开发者提供了一种可以异步监听目标元素与其祖先或视窗("),n("code",[t._v("viewport")]),t._v(")交叉状态的手段。祖先元素与视窗("),n("code",[t._v("viewport")]),t._v(")被称为根("),n("code",[t._v("root")]),t._v(")。")])]),t._v(" "),n("p",[t._v("这是MDN上给的官方概念。重点:"),n("strong",[t._v("监听目标元素与其祖先或视窗交叉状态的手段")]),t._v("，其实就是观察一个元素是否在视窗可见。")]),t._v(" "),n("image-image",{attrs:{imgSrc:"/img/javascript2.16-1.webp",imgAlt:"",imgTitle:"是否可见"}}),t._v(" "),n("p",[t._v("可以看到，交叉了就是说明当前元素在视窗里，当前就是可见的了。")]),t._v(" "),n("h2",{attrs:{id:"api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" io "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IntersectionObserver")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")]),n("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[n("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775706425-47091"}},[t._v("copy success")]),n("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"var io = new IntersectionObserver(callback, options)\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775706425-47091","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])]),n("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[n("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775706425-39411"}},[t._v("Copy successed")]),n("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"var io = new IntersectionObserver(callback, options)\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775706425-39411","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"Copy failed",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("Copy")])])])]),n("p",[t._v("其实就是一个简单的构造函数。")]),t._v(" "),n("p",[t._v("以上代码会返回一个"),n("code",[t._v("IntersectionObserver")]),t._v("实例，"),n("code",[t._v("callback")]),t._v("是当元素的可见性变化时候的回调函数，"),n("code",[t._v("options")]),t._v("是一些配置项（可选）。")]),t._v(" "),n("p",[t._v("我们使用返回的这个实例来进行一些操作。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开始观察，接受一个DOM节点对象")]),t._v("\nio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 停止观察 接受一个element元素")]),t._v("\nio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("unobserve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 关闭观察器")]),t._v("\nio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("disconnect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")]),n("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[n("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775706425-73476"}},[t._v("copy success")]),n("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"// 开始观察，接受一个DOM节点对象\nio.observe(document.querySelector('img'))  \n// 停止观察 接受一个element元素\nio.unobserve(element)   \n// 关闭观察器\nio.disconnect() \n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775706425-73476","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])]),n("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[n("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775706425-4359"}},[t._v("Copy successed")]),n("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"// 开始观察，接受一个DOM节点对象\nio.observe(document.querySelector('img'))  \n// 停止观察 接受一个element元素\nio.unobserve(element)   \n// 关闭观察器\nio.disconnect() \n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775706425-4359","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"Copy failed",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("Copy")])])])]),n("h3",{attrs:{id:"options-参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#options-参数"}},[t._v("#")]),t._v(" options 参数")]),t._v(" "),n("h4",{attrs:{id:"root"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#root"}},[t._v("#")]),t._v(" root")]),t._v(" "),n("p",[t._v("用于观察的根元素，默认是浏览器的视口，也可以指定具体元素，指定元素的时候用于观察的元素必须是指定元素的子元素")]),t._v(" "),n("h4",{attrs:{id:"threshold"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#threshold"}},[t._v("#")]),t._v(" threshold")]),t._v(" "),n("p",[t._v("用来指定交叉比例，决定什么时候触发回调函数，是一个数组，默认是"),n("code",[t._v("[0]")]),t._v("。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" options "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    root"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    threshold"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" io "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IntersectionObserver")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")]),n("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[n("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775706425-65954"}},[t._v("copy success")]),n("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"const options = {\n    root: null,\n    threshold: [0, 0.5, 1]\n}\nvar io = new IntersectionObserver(callback, options)\nio.observe(document.querySelector('img'))\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775706425-65954","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])]),n("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[n("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775706425-73575"}},[t._v("Copy successed")]),n("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"const options = {\n    root: null,\n    threshold: [0, 0.5, 1]\n}\nvar io = new IntersectionObserver(callback, options)\nio.observe(document.querySelector('img'))\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775706425-73575","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"Copy failed",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("Copy")])])])]),n("p",[t._v("上面代码，我们指定了交叉比例为"),n("code",[t._v("0, 0.5, 1")]),t._v("，当观察元素"),n("code",[t._v("img0%")]),t._v("、"),n("code",[t._v("50%")]),t._v("、"),n("code",[t._v("100%")]),t._v("时候就会触发回调函数")]),t._v(" "),n("h4",{attrs:{id:"rootmargin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rootmargin"}},[t._v("#")]),t._v(" rootMargin")]),t._v(" "),n("p",[t._v("用来扩大或者缩小视窗的的大小，使用css的定义方法，"),n("code",[t._v("10px 10px 30px 20px")]),t._v("表示"),n("code",[t._v("top")]),t._v("、"),n("code",[t._v("right")]),t._v("、"),n("code",[t._v("bottom")]),t._v(" 和 "),n("code",[t._v("left")]),t._v("的值")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" options "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    root"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.box'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    threshold"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    rootMargin"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'30px 100px 20px'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),n("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[n("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775706425-66754"}},[t._v("copy success")]),n("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"const options = {\n    root: document.querySelector('.box'),\n    threshold: [0, 0.5, 1],\n    rootMargin: '30px 100px 20px'\n}\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775706425-66754","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])]),n("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[n("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775706425-60561"}},[t._v("Copy successed")]),n("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"const options = {\n    root: document.querySelector('.box'),\n    threshold: [0, 0.5, 1],\n    rootMargin: '30px 100px 20px'\n}\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775706425-60561","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"Copy failed",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("Copy")])])])]),n("p",[t._v("为了方便理解，请看下图：\n"),n("image-image",{attrs:{imgSrc:"/img/javascript2.16-2.webp",imgAlt:"",imgTitle:"options"}})],1),t._v(" "),n("p",[t._v("首先我们来看下图上的问题，蓝线是什么呢？他就是咱们定义的"),n("code",[t._v("root")]),t._v("元素，我们添加了"),n("code",[t._v("rootMargin")]),t._v("属性，将视窗的增大了，虚线就是现在的视窗，所以元素现在也就在视窗里面了。")]),t._v(" "),n("p",[t._v("由此可见，"),n("code",[t._v("root")]),t._v("元素只有在"),n("code",[t._v("rootMargin")]),t._v("为空的时候才是绝对的视窗。")]),t._v(" "),n("h3",{attrs:{id:"callback-函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#callback-函数"}},[t._v("#")]),t._v(" callback 函数")]),t._v(" "),n("p",[t._v("上面我们说到，当元素的可见性变化时，就会触发"),n("code",[t._v("callback")]),t._v("函数。")]),t._v(" "),n("p",[n("code",[t._v("callback")]),t._v("函数会触发两次，元素进入视窗（开始可见时）和元素离开视窗（开始不可见时）都会触发")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" io "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IntersectionObserver")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entries")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entries"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")]),n("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[n("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775706425-91246"}},[t._v("copy success")]),n("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"var io = new IntersectionObserver((entries)=>{\n    console.log(entries)\n})\n\nio.observe($0)\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775706425-91246","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])]),n("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[n("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775706425-23210"}},[t._v("Copy successed")]),n("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"var io = new IntersectionObserver((entries)=>{\n    console.log(entries)\n})\n\nio.observe($0)\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775706425-23210","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"Copy failed",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("Copy")])])])]),n("p",[t._v("以上代码，请在chrome控制台进行调试，这里我使用了"),n("code",[t._v("$0")]),t._v("选择了上一次我审查元素的选择的节点\n运行结果如下\n"),n("image-image",{attrs:{imgSrc:"/img/javascript2.16-3.webp",imgAlt:"",imgTitle:"运行结果"}}),t._v("\n我们可以看到"),n("code",[t._v("callback")]),t._v("函数有个"),n("code",[t._v("entries")]),t._v("参数，它是个"),n("code",[t._v("IntersectionObserverEntry")]),t._v("对象数组，接下来我们重点说下"),n("code",[t._v("IntersectionObserverEntry")]),t._v("对象")],1),t._v(" "),n("h3",{attrs:{id:"intersectionobserverentry"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intersectionobserverentry"}},[t._v("#")]),t._v(" IntersectionObserverEntry")]),t._v(" "),n("p",[n("code",[t._v("IntersectionObserverEntry")]),t._v("提供观察元素的信息，有七个属性。")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("boundingClientRect")]),t._v(" 目标元素的矩形信息")]),t._v(" "),n("li",[n("code",[t._v("intersectionRatio")]),t._v(" 相交区域和目标元素的比例值 "),n("code",[t._v("intersectionRect/boundingClientRect")]),t._v(" 不可见时小于等于0")]),t._v(" "),n("li",[n("code",[t._v("intersectionRect")]),t._v(" 目标元素和视窗（根）相交的矩形信息 可以称为相交区域")]),t._v(" "),n("li",[n("code",[t._v("isIntersecting")]),t._v(" 目标元素当前是否可见 "),n("code",[t._v("Boolean")]),t._v("值 可见为"),n("code",[t._v("true")])]),t._v(" "),n("li",[n("code",[t._v("rootBounds")]),t._v(" 根元素的矩形信息，没有指定根元素就是当前视窗的矩形信息")]),t._v(" "),n("li",[n("code",[t._v("target")]),t._v(" 观察的目标元素")]),t._v(" "),n("li",[n("code",[t._v("time")]),t._v(" 返回一个记录从"),n("code",[t._v("IntersectionObserver")]),t._v("的时间到交叉被触发的时间的时间戳")])]),t._v(" "),n("p",[t._v("上面几个矩形信息的关系如下\n"),n("image-image",{attrs:{imgSrc:"/img/javascript2.16-4.webp",imgAlt:"",imgTitle:"关系"}}),t._v(" "),n("code",[t._v("intersectionRatio")]),t._v("和"),n("code",[t._v("isIntersecting")]),t._v("是用来判断元素是否可见的，押题咯...")],1),t._v(" "),n("h2",{attrs:{id:"懒加载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#懒加载"}},[t._v("#")]),t._v(" 懒加载")]),t._v(" "),n("p",[t._v("通过"),n("code",[t._v("IntersectionObserver")]),t._v("来实现懒加载，就简单的多了，我们只需要设置回调，判断当前元素是否可见，再进行渲染操作就行了，而不用去关心内部的计算。")]),t._v(" "),n("p",[t._v("主要代码如下")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实例化 默认基于当前视窗")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" io "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IntersectionObserver")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将图片的真实url设置为data-src src属性为占位图 元素可见时候替换src")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" imgs "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelectorAll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[data-src]'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entries")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 遍历entries数组")]),t._v("\n    entries"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前元素可见")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isIntersecting"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 替换src")]),t._v("\n            item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src  \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 停止观察当前元素 避免不可见时候再次调用callback函数")]),t._v("\n            io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("unobserve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nimgs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// io.observe接受一个DOM元素，添加多个监听 使用forEach")]),t._v("\n    io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")]),n("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[n("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775706425-39596"}},[t._v("copy success")]),n("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"// 实例化 默认基于当前视窗\nconst io = new IntersectionObserver(callback)  \n\n// 将图片的真实url设置为data-src src属性为占位图 元素可见时候替换src\nlet imgs = document.querySelectorAll('[data-src]') \n\nfunction callback(entries){  \n    // 遍历entries数组\n    entries.forEach((item) => { \n        // 当前元素可见\n        if(item.isIntersecting){ \n            // 替换src\n            item.target.src = item.target.dataset.src  \n            // 停止观察当前元素 避免不可见时候再次调用callback函数\n            io.unobserve(item.target)  \n        }   \n    })\n}\n\nimgs.forEach((item)=>{  \n    // io.observe接受一个DOM元素，添加多个监听 使用forEach\n    io.observe(item)\n})\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775706425-39596","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])]),n("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[n("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775706425-35215"}},[t._v("Copy successed")]),n("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"// 实例化 默认基于当前视窗\nconst io = new IntersectionObserver(callback)  \n\n// 将图片的真实url设置为data-src src属性为占位图 元素可见时候替换src\nlet imgs = document.querySelectorAll('[data-src]') \n\nfunction callback(entries){  \n    // 遍历entries数组\n    entries.forEach((item) => { \n        // 当前元素可见\n        if(item.isIntersecting){ \n            // 替换src\n            item.target.src = item.target.dataset.src  \n            // 停止观察当前元素 避免不可见时候再次调用callback函数\n            io.unobserve(item.target)  \n        }   \n    })\n}\n\nimgs.forEach((item)=>{  \n    // io.observe接受一个DOM元素，添加多个监听 使用forEach\n    io.observe(item)\n})\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775706425-35215","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"Copy failed",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("Copy")])])])]),n("h3",{attrs:{id:"兼容性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#兼容性"}},[t._v("#")]),t._v(" 兼容性")]),t._v(" "),n("p",[t._v("⚠️ 最重要的一点，兼容性..\n"),n("image-image",{attrs:{imgSrc:"/img/javascript2.16-5.webp",imgAlt:"",imgTitle:"兼容性"}})],1),t._v(" "),n("star-star"),t._v(" "),n("comment-comment"),t._v(" "),n("back-to-top")],1)}),[],!1,null,null,null);e.default=c.exports}}]);