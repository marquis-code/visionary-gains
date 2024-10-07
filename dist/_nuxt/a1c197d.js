(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{561:function(e,t,n){var content=n(637);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(68).default)("729cfd0c",content,!0,{sourceMap:!1})},636:function(e,t,n){"use strict";n(561)},637:function(e,t,n){var r=n(67)((function(i){return i[1]}));r.push([e.i,".fade-enter-active[data-v-06b3e40c]{transition:all .3s cubic-bezier(.52,.02,.19,1.02) .15s}.fade-leave-active[data-v-06b3e40c]{transition:all .3s cubic-bezier(.52,.02,.19,1.02)}.fade-enter-from[data-v-06b3e40c]{opacity:0}.fade-enter-from[data-v-06b3e40c],.fade-leave-to[data-v-06b3e40c]{transform:scale(.8)}",""]),r.locals={},e.exports=r},695:function(e,t,n){"use strict";n.r(t);n(25),n(175);var r=n(48),o=(n(94),n(14),n(82),n(27),n(10),n(95),n(13),n(8),n(146),{name:"UsersList",layout:"dashboards",scrollToTop:!0,data:function(){return{selectedUser:{},usersList:[],processing:!1,fields:[{key:"sn",label:"S/N",class:"font-medium text-gray-400 text-sm"},{key:"user",label:"User",class:"font-medium text-gray-400 text-sm"},{key:"planType",label:"Plan Type",class:"font-medium text-gray-400 text-sm"},{key:"accountBalance",label:"Account Balance",class:"font-medium text-gray-400 text-sm"},{key:"tradingBalance",label:"Trading Balance",class:"font-medium text-gray-400 text-sm"},{key:"profit",label:"Profit",class:"font-medium text-gray-400 text-sm"},{key:"eth",label:"Etherium",class:"font-medium text-gray-400 text-sm"},{key:"btc",label:"Bitcoin",class:"font-medium text-end text-gray-400"},{key:"status",label:"Status",class:"font-medium text-gray-400 text-sm"},{key:"action",label:"Action",class:""}],currentPage:1,perPage:6,search:"",showModal:!1,totalRows:1,loading:!1}},head:function(){return{meta:[{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"twitter:image",name:"twitter:image",content:this.image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:this.title},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:image:secure_url",property:"og:image:secure_url",content:this.image},{hid:"og:image:alt",property:"og:image:alt",content:this.title}]}},computed:{filteredUsers:function(){var e=this.search.toLowerCase();return this.usersList.filter((function(t){var n,r,o,l,c,d,m,f;return(null==t||null===(n=(r=t.firstName).toLowerCase)||void 0===n?void 0:n.call(r).includes(e))||(null==t||null===(o=(l=t.lastName).toLowerCase)||void 0===o?void 0:o.call(l).includes(e))||(null==t||null===(c=(d=t.email).toLowerCase)||void 0===c?void 0:c.call(d).includes(e))||(null==t||null===(m=(f=t.Status).toLowerCase)||void 0===m?void 0:m.call(f).includes(e))}))}},created:function(){this.fetchUsers()},mounted:function(){this.totalRows=this.usersList.length},methods:{goBack:function(){this.$router.go(-1)},fetchUsers:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,n=JSON.parse(window.localStorage.getItem("auth")),e.loading=!0,t.prev=5,t.next=8,fetch("https://api.visionarygains.com/graphql/query",{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer "+n},body:JSON.stringify({query:"\n        query {\n          getUsers {\n            id\n            firstName\n            lastName\n            email\n            Status\n            PlanType\n            accountBalance\n            tradingBalance\n            profit\n            eth\n            btc\n            timeAdded\n          }\n        }\n      "})});case 8:return r=t.sent,t.next=11,r.json();case 11:null!=(data=t.sent)&&data.errors?e.$toastr.e(data.errors[0].message):(e.usersList=data.data.getUsers,e.totalRows=data.data.getUsers.length);case 13:return t.prev=13,e.loading=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[5,,13,16]])})))()},getInitials:function(e,t){var n=e?e.charAt(0):"",r=t?t.charAt(0):"";return"".concat(n).concat(r)},handleClick:function(data){this.selectedUser=data,this.$bvModal.show("updateUserInfo")},updateUserInfo:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.processing=!0,n=JSON.parse(window.localStorage.getItem("auth")),t.prev=3,t.next=7,fetch("https://api.visionarygains.com/graphql/query",{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer "+n},body:JSON.stringify({query:"\n          mutation updateUser($userId: String!, $input: UpdateUser!) {\n            updateUser(userId: $userId, input: $input) {\n              accountBalance\n              tradingBalance\n              profit\n            }\n          }\n        ",variables:{userId:null!==(r=e.selectedUser.id)&&void 0!==r?r:"",input:{profit:e.selectedUser.profit,tradingBalance:e.selectedUser.tradingBalance,accountBalance:e.selectedUser.accountBalance}}})});case 7:return o=t.sent,t.next=10,o.json();case 10:null!=(data=t.sent)&&data.errors?e.$toastr.e(data.errors[0].message):(e.$toastr.s("User Information was updated successfully"),e.$bvModal.hide("updateUserInfo"));case 12:return t.prev=12,e.processing=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[3,,12,15]])})))()},formatNumberAsDollar:function(e){return null==e?void 0:e.toLocaleString("en-US",{style:"currency",currency:"USD"})}}}),l=(n(636),n(46)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("main",[t("Transition",{attrs:{name:"fade"}},[t("section",{staticClass:"text-white"},[t("div",{staticClass:"flex items-center justify-between my-3"},[t("button",{staticClass:"outline-none border bg-gray-200 text-black px-3 py-1 rounded-md text-sm",on:{click:function(t){return e.goBack()}}},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",viewBox:"0 0 24 24",fill:"none",stroke:"#747070","stroke-width":"2","stroke-linecap":"square","stroke-linejoin":"bevel"}},[t("path",{attrs:{d:"M19 12H6M12 5l-7 7 7 7"}})])])]),e._v(" "),t("div",{staticClass:"sm:flex-1 pb-0 mt-3"},[t("label",{staticClass:"sr-only",attrs:{for:"search"}},[e._v("Search")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"w-full rounded-tr-md rounded-tl-md outline-none bg-white p-3 text-gray-700 transition border focus:border-white focus:outline-none focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent",attrs:{type:"text",placeholder:"Search.."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})]),e._v(" "),t("b-card",{staticClass:"mt-3"},[t("b-table",{attrs:{striped:"","show-empty":"",responsive:"",items:e.filteredUsers,fields:e.fields,busy:e.loading,"current-page":e.currentPage,"per-page":e.perPage},scopedSlots:e._u([{key:"table-busy",fn:function(){return[t("div",{staticClass:"text-center my-2 cursor-pointer"},[t("b-spinner",{staticClass:"align-middle"}),e._v(" "),t("small",[e._v("Loading...")])],1)]},proxy:!0},{key:"empty",fn:function(){return[t("p",{staticClass:"text-center text-sm text-secondary py-4 cursor-pointer"},[e._v("\n              "+e._s(e.search?'No User found for search value: "'.concat(e.search,'"'):"No Users available")+"\n            ")])]},proxy:!0},{key:"cell(sn)",fn:function(data){return[t("div",{staticClass:"font-medium py-4 text-sm cursor-pointer"},[e._v("\n              "+e._s(data.index+1)+"\n            ")])]}},{key:"cell(user)",fn:function(data){var n,r,o,l,c;return[t("div",{staticClass:"font-medium text-sm cursor-pointer flex items-center gap-x-2 py-4"},[t("div",{staticClass:"bg-gray-500 text-white rounded-full h-10 w-10 flex text-center justify-center items-center"},[e._v("\n                "+e._s(e.getInitials(null==data||null===(n=data.item)||void 0===n?void 0:n.firstName,null==data||null===(r=data.item)||void 0===r?void 0:r.lastName))+"\n              ")]),e._v(" "),t("div",[t("span",[e._v("\n                  "+e._s(null==data||null===(o=data.item)||void 0===o?void 0:o.firstName)+"\n                ")]),e._v(" "),t("span",[e._v("\n                  "+e._s(null==data||null===(l=data.item)||void 0===l?void 0:l.lastName)+"\n                ")]),t("br"),e._v(" "),t("span",[e._v("\n                  "+e._s(null==data||null===(c=data.item)||void 0===c?void 0:c.email)+"\n                ")])])])]}},{key:"cell(planType)",fn:function(data){var n,r;return[t("div",{staticClass:"font-medium py-4 text-sm"},[e._v("\n              "+e._s(null!==(n=null==data||null===(r=data.item)||void 0===r?void 0:r.planType)&&void 0!==n?n:"N/A")+"\n            ")])]}},{key:"cell(accountBalance)",fn:function(data){var n,r;return[t("div",{staticClass:"font-medium py-4 text-sm cursor-pointer"},[e._v("\n              "+e._s(null!==(n=e.formatNumberAsDollar(null==data||null===(r=data.item)||void 0===r?void 0:r.accountBalance))&&void 0!==n?n:"N/A")+"\n            ")])]}},{key:"cell(tradingBalance)",fn:function(data){var n,r;return[t("div",{staticClass:"font-medium py-4 text-sm"},[e._v("\n              "+e._s(null!==(n=e.formatNumberAsDollar(null==data||null===(r=data.item)||void 0===r?void 0:r.tradingBalance))&&void 0!==n?n:"N/A")+"\n            ")])]}},{key:"cell(profit)",fn:function(data){var n,r;return[t("div",{staticClass:"font-medium py-4 text-sm"},[e._v("\n              "+e._s(null!==(n=e.formatNumberAsDollar(null==data||null===(r=data.item)||void 0===r?void 0:r.profit))&&void 0!==n?n:"N/A")+"\n            ")])]}},{key:"cell(eth)",fn:function(data){return[t("div",{staticClass:"font-medium py-4 text-sm"},[data.item.eth?t("span",{staticClass:"font-medium py-4 text-sm"},[e._v("\n                "+e._s(data.item.eth)+"\n              ")]):t("span",[e._v("N/A")])])]}},{key:"cell(btc)",fn:function(data){return[t("div",{staticClass:"font-medium py-4 text-sm"},[data.item.btc?t("span",{staticClass:"font-medium py-4 text-sm"},[e._v("\n                "+e._s(data.item.btc)+"\n              ")]):t("span",[e._v("N/A")])])]}},{key:"cell(status)",fn:function(data){var n,r;return[t("div",{staticClass:"font-medium text-sm cursor-pointer px-3 py-4"},[t("span",{staticClass:"px-3 py-2",class:["Active"===(null==data||null===(n=data.item)||void 0===n?void 0:n.Status)?"bg-green-500 text-white rounded-md text-sm":"bg-red-500 text-white rounded-md text-sm"]},[e._v("\n                "+e._s(null==data||null===(r=data.item)||void 0===r?void 0:r.Status)+"\n              ")])])]}},{key:"cell(action)",fn:function(data){return[t("div",{staticClass:"font-medium text-sm cursor-pointer px-3 py-4"},[t("img",{staticClass:"cursor-pointer h-10 w-10",attrs:{src:n(338),alt:"more"},on:{click:function(t){return e.handleClick(data.item)}}})])]}}])}),e._v(" "),t("div",{staticClass:"flex justify-end items-end"},[t("b-pagination",{staticClass:"my-3",attrs:{"total-rows":e.totalRows,"per-page":e.perPage,size:"md"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)],1)]),e._v(" "),t("b-modal",{attrs:{id:"updateUserInfo","hide-footer":"",centered:"","hide-header":""}},[t("div",{staticClass:"flex justify-center items-center"},[t("h1",{staticClass:"text-lg font-semibold text-black"},[e._v("\n        Update Information\n      ")])]),e._v(" "),t("form",{staticClass:"gap-6 w-full space-y-6 px-6 pb-6",on:{submit:function(t){return t.preventDefault(),e.updateUserInfo.apply(null,arguments)}}},[t("div",{staticClass:"col-span-6 sm:col-span-6"},[t("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"profit"}},[e._v("\n          Profit\n        ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedUser.profit,expression:"selectedUser.profit"}],staticClass:"mt-1 w-full px-3 py-3 border outline-none rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm",attrs:{id:"profit",type:"number",step:"0.01",min:"0",name:"profit"},domProps:{value:e.selectedUser.profit},on:{input:function(t){t.target.composing||e.$set(e.selectedUser,"profit",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"col-span-6 sm:col-span-6"},[t("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"tradingBalance",step:"0.01",min:"0"}},[e._v("\n          Trading Balance\n        ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedUser.tradingBalance,expression:"selectedUser.tradingBalance"}],staticClass:"mt-1 w-full px-3 py-3 border outline-none rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm",attrs:{id:"tradingBalance",type:"number",name:"tradingBalance"},domProps:{value:e.selectedUser.tradingBalance},on:{input:function(t){t.target.composing||e.$set(e.selectedUser,"tradingBalance",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"col-span-6 sm:col-span-6"},[t("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"accountBalance"}},[e._v("\n          Account Balance\n        ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedUser.accountBalance,expression:"selectedUser.accountBalance"}],staticClass:"mt-1 w-full px-3 py-3 border outline-none rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm",attrs:{id:"accountBalance",type:"number",step:"0.01",min:"0",name:"accountBalance"},domProps:{value:e.selectedUser.accountBalance},on:{input:function(t){t.target.composing||e.$set(e.selectedUser,"accountBalance",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"w-full pt-10"},[t("button",{staticClass:"bg-black disabled:cursor-not-allowed disabled:opacity-25 w-full text-white py-2.5 rounded-md",attrs:{disabled:e.processing,type:"submit"}},[e._v(e._s(e.processing?"processing":"Submit"))])])])])],1)}),[],!1,null,"06b3e40c",null);t.default=component.exports}}]);