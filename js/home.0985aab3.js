(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"7f63":function(t,e,a){"use strict";a.r(e);var c=a("7a23"),n=Object(c["N"])("data-v-3331e1b9");Object(c["z"])("data-v-3331e1b9");var r={class:"layout_wrapper"},o={class:"main_wrapper"},u={class:"footer_wrapper"},i=Object(c["h"])("search"),b=Object(c["h"])("Chats"),d=Object(c["h"])("My");Object(c["x"])();var f=n((function(t,e,a,f,j,s){var O=Object(c["D"])("router-view"),l=Object(c["D"])("van-tabbar-item"),p=Object(c["D"])("van-tabbar");return Object(c["w"])(),Object(c["f"])("div",r,[Object(c["i"])("div",o,[Object(c["i"])(O)]),Object(c["i"])("div",u,[Object(c["i"])(p,{modelValue:f.data.active,"onUpdate:modelValue":e[1]||(e[1]=function(t){return f.data.active=t}),route:"true"},{default:n((function(){return[Object(c["i"])(l,{icon:"search",to:"/search"},{default:n((function(){return[i]})),_:1}),Object(c["i"])(l,{icon:"chat-o",to:"/chats",badge:f.unreadCount},{default:n((function(){return[b]})),_:1},8,["badge"]),Object(c["i"])(l,{icon:"contact",to:"/my"},{default:n((function(){return[d]})),_:1})]})),_:1},8,["modelValue"])])])})),j=a("5502"),s={setup:function(){var t=Object(c["k"])().appContext.config.globalProperties.$msim,e=Object(j["b"])(),a=Object(c["d"])((function(){return e.state.allUnread||""})),n=Object(c["A"])({active:Object(c["B"])(1)});return Object(c["t"])((function(){t.getAllUnreadCount().then((function(t){e.commit("setUnread",t.data.unread)}))})),{data:n,unreadCount:a}}};a("d512");s.render=f,s.__scopeId="data-v-3331e1b9";e["default"]=s},d512:function(t,e,a){"use strict";a("f23d")},f23d:function(t,e,a){}}]);