(window.webpackJsonp=window.webpackJsonp||[]).push([["chats"],{3114:function(t,e,n){"use strict";n.r(e);var a=n("7a23"),c=Object(a.N)("data-v-4a0ecb62");Object(a.z)("data-v-4a0ecb62");var i={class:"chat_wrapper"},o={class:"chat_list"};Object(a.x)();var s=c((function(t,e,n,s,r,d){var f=Object(a.D)("van-nav-bar"),l=Object(a.D)("ChatItem"),h=Object(a.D)("van-button"),u=Object(a.D)("van-swipe-cell"),b=Object(a.D)("van-list"),g=Object(a.D)("van-pull-refresh");return Object(a.w)(),Object(a.f)("div",i,[Object(a.i)(f,{class:"shadow_bottom",title:"会话列表"}),Object(a.i)("div",o,[Object(a.i)(g,{modelValue:s.data.refreshing,"onUpdate:modelValue":e[2]||(e[2]=function(t){return s.data.refreshing=t}),onRefresh:s.onRefresh},{default:c((function(){return[Object(a.i)(b,{loading:s.data.loading,"onUpdate:loading":e[1]||(e[1]=function(t){return s.data.loading=t}),finished:s.data.finished,"finished-text":"没有更多了",onLoad:s.onLoad},{default:c((function(){return[(Object(a.w)(!0),Object(a.f)(a.a,null,Object(a.C)(s.chatList,(function(t){return Object(a.w)(),Object(a.f)(u,{class:"goods_card",key:t.conversationID},{right:c((function(){return[Object(a.i)(h,{text:"删除",type:"danger",square:"",onClick:function(e){return s.deleteChat(t)},class:"delete_button"},null,8,["onClick"])]})),default:c((function(){return[Object(a.i)(l,{onClick:function(e){return s.chatChange(t)},chat:t},null,8,["onClick","chat"])]})),_:2},1024)})),128))]})),_:1},8,["loading","finished","onLoad"])]})),_:1},8,["modelValue","onRefresh"])])])})),r=(n("99af"),n("690a")),d=n.n(r),f=Object(a.N)("data-v-1efce4c3");Object(a.z)("data-v-1efce4c3");var l={class:"chat_item"},h=Object(a.i)("div",{class:"avatar"},[Object(a.i)("img",{class:"avatar_img",src:d.a,alt:""})],-1),u={class:"info"},b={class:"user_info"},g={class:"user_name van-ellipsis"},v={class:"unread_sign"},A={key:0,class:"badge"},j={class:"last_msg"},p={class:"last_msg_body van-ellipsis"},O={class:"last_msg_time"};Object(a.x)();var m=f((function(t,e,n,c,i,o){return Object(a.w)(),Object(a.f)("div",l,[h,Object(a.i)("div",u,[Object(a.i)("div",b,[Object(a.i)("div",g,Object(a.G)(n.chat.conversationID),1),Object(a.i)("div",v,[n.chat.unread>0?(Object(a.w)(),Object(a.f)("span",A,Object(a.G)(n.chat.unread),1)):Object(a.g)("",!0)])]),Object(a.i)("div",j,[Object(a.i)("div",p,Object(a.G)(1===n.chat.showMsgType?"[图片]":2===n.chat.showMsgType?"[音频]":3===n.chat.showMsgType?"[视频]":31===n.chat.showMsgType?"[已撤回]":100===n.chat.showMsgType?"[自定义消息]]":n.chat.showMsg),1),Object(a.i)("div",O,Object(a.G)(n.chat.showTime?new Date(n.chat.showTime).toLocaleTimeString():""),1)])])])})),I={props:{chat:Object}};n("ead3");I.render=m,I.__scopeId="data-v-1efce4c3";var w=I,D=n("5502"),B=n("6c02"),k={components:{ChatItem:w},setup:function(){var t=Object(D.b)(),e=Object(B.d)(),n=Object(a.d)((function(){return t.state.chatList})),c=Object(a.A)({loading:!1,finished:!1,refreshing:!1}),i=Object(a.k)().appContext.config.globalProperties;function o(){var e;c.refreshing&&(t.commit("clearChats"),c.refreshing=!1);var a=n.value;a.length>0&&(e=a[a.length-1].conversationID),function(e){i.$msim.getConversationList({conversationID:e}).then((function(e){var n=e.data.chats;n.length>0?t.commit("addChats",n):c.finished=!0,c.loading=!1})).catch((function(t){return c.loading=!1,i.$toast((null==t?void 0:t.msg)||t)}))}(e)}return Object(a.t)((function(){t.commit("clearChats")})),{data:c,onLoad:o,onRefresh:function(){c.finished=!1,c.loading=!0,o()},chatChange:function(n){var a;n&&n.conversationID&&(n.unread>0&&(a=n.conversationID,i.$msim.setMessageRead({conversationID:a})),t.commit("changeChat",n.conversationID),e.push("/messages/".concat(n.conversationID,"/").concat(n.uid)))},deleteChat:function(t){i.$msim.deleteConversation({conversationID:t.conversationID}).then((function(e){return i.$toast.success("删除会话[".concat(t.conversationID,"]成功"))})).catch((function(t){return i.$toast((null==t?void 0:t.msg)||t)}))},chatList:n}}};n("8f32");k.render=s,k.__scopeId="data-v-4a0ecb62";e.default=k},5382:function(t,e,n){},"690a":function(t,e){t.exports="data:image/png;base64,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"},"7f6d":function(t,e,n){},"8f32":function(t,e,n){"use strict";n("5382")},"99af":function(t,e,n){"use strict";var a=n("23e7"),c=n("d039"),i=n("e8b5"),o=n("861d"),s=n("7b0b"),r=n("50c4"),d=n("8418"),f=n("65f0"),l=n("1dde"),h=n("b622"),u=n("2d00"),b=h("isConcatSpreadable"),g=u>=51||!c((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),v=l("concat"),A=function(t){if(!o(t))return!1;var e=t[b];return void 0!==e?!!e:i(t)};a({target:"Array",proto:!0,forced:!g||!v},{concat:function(t){var e,n,a,c,i,o=s(this),l=f(o,0),h=0;for(e=-1,a=arguments.length;e<a;e++)if(A(i=-1===e?o:arguments[e])){if(h+(c=r(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<c;n++,h++)n in i&&d(l,h,i[n])}else{if(h>=9007199254740991)throw TypeError("Maximum allowed index exceeded");d(l,h++,i)}return l.length=h,l}})},ead3:function(t,e,n){"use strict";n("7f6d")}}]);