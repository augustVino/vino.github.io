(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{673:function(t,e,c){"use strict";c.r(e);var n=c(59),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[c("h1",{attrs:{id:"google-cloud-mac-使用-iterm2-自动-ssh-登录远程服务器"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#google-cloud-mac-使用-iterm2-自动-ssh-登录远程服务器"}},[t._v("#")]),t._v(" Google Cloud - Mac 使用 iterm2 自动 ssh 登录远程服务器")]),t._v(" "),c("p",[t._v("通常情况下，有两种方式登录远程服务器。一种是正常使用 ssh 登录（输入账号密码），另一种是使用 ssh 公钥登录（免输入密码）。本文记录从第一种方式入手。")]),t._v(" "),c("p",[t._v("正常使用 ssh 登录时：")]),t._v(" "),c("div",{staticClass:"language-bash extra-class"},[c("pre",{pre:!0,attrs:{class:"language-bash"}},[c("code",[c("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" user@host -p port\n"),c("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 例如 ssh root@192.168.81.68 -p 8888")]),t._v("\n"),c("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 会提示输入密码")]),t._v("\nuser@host's password:\n")]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775701038-68556"}},[t._v("copy success")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"ssh user@host -p port\n# 例如 ssh root@192.168.81.68 -p 8888\n# 会提示输入密码\nuser@host's password:\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775701038-68556","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775701038-80935"}},[t._v("Copy successed")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"ssh user@host -p port\n# 例如 ssh root@192.168.81.68 -p 8888\n# 会提示输入密码\nuser@host's password:\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775701038-80935","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"Copy failed",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("Copy")])])])]),c("h2",{attrs:{id:"服务器配置"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#服务器配置"}},[t._v("#")]),t._v(" 服务器配置")]),t._v(" "),c("h3",{attrs:{id:"配置登录密码"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#配置登录密码"}},[t._v("#")]),t._v(" 配置登录密码")]),t._v(" "),c("blockquote",[c("p",[t._v("注意：此密码为机器密码，并非是创建的 ssr 密码")])]),t._v(" "),c("ol",[c("li",[c("p",[t._v("首先登录 Google Cloud，切换到实例。使用 ssh 方式连接上服务器。\n"),c("image-image",{attrs:{imgSrc:"/img/other5.6-1.webp",imgAlt:"other5.6-1"}})],1)]),t._v(" "),c("li",[c("p",[t._v("切换到 root")])])]),t._v(" "),c("div",{staticClass:"language-bash extra-class"},[c("pre",{pre:!0,attrs:{class:"language-bash"}},[c("code",[c("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -i\n")]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775701038-20447"}},[t._v("copy success")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"sudo -i\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775701038-20447","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775701038-86272"}},[t._v("Copy successed")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"sudo -i\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775701038-86272","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"Copy failed",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("Copy")])])])]),c("ol",{attrs:{start:"3"}},[c("li",[t._v("配置机器密码")])]),t._v(" "),c("div",{staticClass:"language-bash extra-class"},[c("pre",{pre:!0,attrs:{class:"language-bash"}},[c("code",[c("span",{pre:!0,attrs:{class:"token function"}},[t._v("passwd")]),t._v("\n")]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775701039-5573"}},[t._v("copy success")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"passwd\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775701039-5573","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775701039-92630"}},[t._v("Copy successed")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"passwd\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775701039-92630","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"Copy failed",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("Copy")])])])]),c("image-image",{attrs:{imgSrc:"/img/other5.6-2.webp",imgAlt:"other5.6-2"}}),t._v(" "),c("h3",{attrs:{id:"编辑-ssh-配置文件"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#编辑-ssh-配置文件"}},[t._v("#")]),t._v(" 编辑 ssh 配置文件")]),t._v(" "),c("div",{staticClass:"language-bash extra-class"},[c("pre",{pre:!0,attrs:{class:"language-bash"}},[c("code",[c("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/ssh/sshd_config\n")]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775701039-7660"}},[t._v("copy success")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"vim /etc/ssh/sshd_config\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775701039-7660","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775701039-64434"}},[t._v("Copy successed")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"vim /etc/ssh/sshd_config\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775701039-64434","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"Copy failed",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("Copy")])])])]),c("p",[t._v("搜索并修改以下内容：")]),t._v(" "),c("div",{staticClass:"language-bash extra-class"},[c("pre",{pre:!0,attrs:{class:"language-bash"}},[c("code",[t._v("PermitRootLogin "),c("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("\nPasswordAuthentication "),c("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("\n")]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775701039-67891"}},[t._v("copy success")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"PermitRootLogin yes\nPasswordAuthentication yes\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775701039-67891","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775701039-16325"}},[t._v("Copy successed")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"PermitRootLogin yes\nPasswordAuthentication yes\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775701039-16325","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"Copy failed",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("Copy")])])])]),c("p",[t._v("重启 ssh")]),t._v(" "),c("div",{staticClass:"language-bash extra-class"},[c("pre",{pre:!0,attrs:{class:"language-bash"}},[c("code",[c("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" sshd restart\n")]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775701039-90772"}},[t._v("copy success")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"service sshd restart\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775701039-90772","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775701039-73938"}},[t._v("Copy successed")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"service sshd restart\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775701039-73938","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"Copy failed",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("Copy")])])])]),c("h2",{attrs:{id:"客户端-iterm2-配置"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#客户端-iterm2-配置"}},[t._v("#")]),t._v(" 客户端 iTerm2 配置")]),t._v(" "),c("ol",[c("li",[t._v("在"),c("code",[t._v("~/.ssh/")]),t._v("目录新建 shell 文件")])]),t._v(" "),c("div",{staticClass:"language-bash extra-class"},[c("pre",{pre:!0,attrs:{class:"language-bash"}},[c("code",[c("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" ~/.ssh/googlecloudshell\n")]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775701039-99734"}},[t._v("copy success")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"vim ~/.ssh/googlecloudshell\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775701039-99734","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775701039-24257"}},[t._v("Copy successed")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"vim ~/.ssh/googlecloudshell\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775701039-24257","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"Copy failed",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("Copy")])])])]),c("ol",{attrs:{start:"2"}},[c("li",[t._v("Copy 并编辑内容")])]),t._v(" "),c("p",[t._v("用户名、ip 地址、密码三项需要修改。密码就是上一步在服务器上新建的密码。")]),t._v(" "),c("div",{staticClass:"language-bash extra-class"},[c("pre",{pre:!0,attrs:{class:"language-bash"}},[c("code",[c("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" user 用户名\n"),c("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),c("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" ip地址\n"),c("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" password 密码\n"),c("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),c("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeout")]),t._v(" -1\n\nspawn "),c("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" "),c("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),t._v("@"),c("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),t._v("\n"),c("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),t._v(" "),c("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*assword:*"')]),t._v("\nsend "),c("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),c("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$password")]),c("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[t._v("\\r")]),t._v('"')]),t._v("\ninteract\n"),c("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),t._v(" eof\n")]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775701039-42301"}},[t._v("copy success")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":'set user 用户名\nset host ip地址\nset password 密码\nset timeout -1\n\nspawn ssh $user@$host\nexpect "*assword:*"\nsend "$password\\r"\ninteract\nexpect eof\n',"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775701039-42301","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775701039-90821"}},[t._v("Copy successed")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":'set user 用户名\nset host ip地址\nset password 密码\nset timeout -1\n\nspawn ssh $user@$host\nexpect "*assword:*"\nsend "$password\\r"\ninteract\nexpect eof\n',"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775701039-90821","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"Copy failed",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("Copy")])])])]),c("ol",{attrs:{start:"3"}},[c("li",[t._v("iTerm2 配置")])]),t._v(" "),c("p",[t._v("打开 "),c("code",[t._v("iTerm2 -> preferences -> Profiles")])]),t._v(" "),c("p",[t._v("点击下面“"),c("code",[t._v("+")]),t._v("”号，新建一个 "),c("code",[t._v("profile")]),t._v("。")]),t._v(" "),c("p",[t._v("选择 "),c("code",[t._v("Command")]),t._v(" 在输入框中输入:")]),t._v(" "),c("div",{staticClass:"language-bash extra-class"},[c("pre",{pre:!0,attrs:{class:"language-bash"}},[c("code",[c("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),t._v(" ~/.ssh/googlecloudshell\n")]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775701040-75527"}},[t._v("copy success")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"expect ~/.ssh/googlecloudshell\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775701040-75527","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])]),c("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[c("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1589775701040-35540"}},[t._v("Copy successed")]),c("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"expect ~/.ssh/googlecloudshell\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1589775701040-35540","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"Copy failed",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("Copy")])])])]),c("p",[t._v("大功告成 ~ 以后就可以直接免密码登录啦，当然，这个不是真的免密码登录，只是自动免输入密码而已。")]),t._v(" "),c("star-star"),t._v(" "),c("comment-comment"),t._v(" "),c("back-to-top")],1)}),[],!1,null,null,null);e.default=o.exports}}]);