(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{561:function(t,e,n){var content=n(634);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("30f253e3",content,!0,{sourceMap:!1})},633:function(t,e,n){"use strict";n(561)},634:function(t,e,n){var r=n(65)((function(i){return i[1]}));r.push([t.i,".fade-enter-active[data-v-64861e6c]{transition:all .3s cubic-bezier(.52,.02,.19,1.02) .15s}.fade-leave-active[data-v-64861e6c]{transition:all .3as cubic-bezier(.52,.02,.19,1.02)}.fade-enter-from[data-v-64861e6c]{opacity:0}.fade-enter-from[data-v-64861e6c],.fade-leave-to[data-v-64861e6c]{transform:scale(.8)}",""]),r.locals={},t.exports=r},696:function(t,e,n){"use strict";n.r(e);n(25),n(180);var r=n(49),o=(n(93),n(10),n(8),n(94),n(147),n(14),n(76),n(13),n(27),n(41),n(226)),l=n(90),c=n.n(l),d={name:"DepositsList",components:{EnlargeableImage:o.a},layout:"dashboards",scrollToTop:!0,computed:{filteredDeposits:function(){var t=this.search.toLowerCase();return this.transactionsList.filter((function(e){var n,r,o,l,c,d;return(null==e||null===(n=(r=e.user.firstName).toLowerCase)||void 0===n?void 0:n.call(r).includes(t))||(null==e||null===(o=(l=e.user.lastName).toLowerCase)||void 0===o?void 0:o.call(l).includes(t))||(null==e||null===(c=(d=e.email).toLowerCase)||void 0===c?void 0:c.call(d).includes(t))}))}},data:function(){return{transactionsList:[],fields:[{key:"sn",label:"S/N",class:"font-medium text-gray-400 text-sm"},{key:"user",label:"User",class:"font-medium text-gray-400 text-sm"},{key:"amount",label:"Amount",class:"font-medium text-gray-400 text-sm"},{key:"wallet",label:"Wallet",class:"font-medium text-gray-400 text-sm"},{key:"transactionStatus",label:"Transaction Status",class:"font-medium text-gray-400 text-sm"},{key:"proof",label:"Proof",class:"font-medium text-gray-400 text-sm"},{key:"timeAdded",label:"Date",class:"font-medium text-gray-400 text-sm"},{key:"actions",label:"Actions",class:"font-medium text-end text-gray-400"}],currentPage:1,perPage:6,search:"",showModal:!1,totalRows:1,loading:!1}},head:function(){return{meta:[{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"twitter:image",name:"twitter:image",content:this.image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:this.title},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:image:secure_url",property:"og:image:secure_url",content:this.image},{hid:"og:image:alt",property:"og:image:alt",content:this.title}]}},created:function(){this.fetchTransactions()},mounted:function(){this.totalRows=this.transactionsList.length},methods:{goBack:function(){this.$router.go(-1)},fetchTransactions:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,n=JSON.parse(window.localStorage.getItem("auth")),t.loading=!0,"\n        query {\n          getTransactions {\n            id\n            amount\n            wallet\n            transactionType\n            transactionStatus\n            user {\n              id\n              firstName\n              lastName\n              email\n              Status\n              PlanType\n              accountBalance\n              tradingBalance\n              profit\n              eth\n              btc\n              timeAdded\n            }\n            proof\n            timeAdded\n          }\n        }\n      ",e.prev=4,e.next=7,fetch("https://visionary-zpui.onrender.com/graphql/query",{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer "+n},body:JSON.stringify({query:"\n        query {\n          getTransactions {\n            id\n            amount\n            wallet\n            transactionType\n            transactionStatus\n            user {\n              id\n              firstName\n              lastName\n              email\n              Status\n              PlanType\n              accountBalance\n              tradingBalance\n              profit\n              eth\n              btc\n              timeAdded\n            }\n            proof\n            timeAdded\n          }\n        }\n      "})});case 7:return r=e.sent,e.next=10,r.json();case 10:null!=(data=e.sent)&&data.errors?t.$toastr.e(data.errors[0].message):(t.transactionsList=data.data.getTransactions.filter((function(t){return"Deposit"===t.transactionType})),t.totalRows=t.transactionsList.length);case 12:return e.prev=12,t.loading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[4,,12,15]])})))()},getInitials:function(t,e){var n=t?t.charAt(0):"",r=e?e.charAt(0):"";return"".concat(n).concat(r)},formatDateTime:function(t){if("string"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))return"Invalid Date";return t.toLocaleDateString("en-US",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"})},handleAction:function(data,t){var e=this;c.a.fire({title:"".concat("approve"===t?"Approve":"Reject"," Deposit"),text:"Please Note: You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Proceed!"}).then((function(n){n.value?e.processTransaction(data.id,t):e.$swal("Cancelled","Action was cancelled","info")}))},processTransaction:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,l,c,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.processing=!0,o=JSON.parse(window.localStorage.getItem("auth")),l="approve"===e?"Approved":"reject"===e?"Declined":"Pending",r.prev=3,"\n            mutation ProcessTransaction($transactionID: String!, $status: TransactionStatus!) {\n              processTransaction(transactionID: $transactionID, status: $status)\n            }\n          ",r.next=7,fetch("https://visionary-zpui.onrender.com/graphql/query",{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer "+o},body:JSON.stringify({query:"\n            mutation ProcessTransaction($transactionID: String!, $status: TransactionStatus!) {\n              processTransaction(transactionID: $transactionID, status: $status)\n            }\n          ",variables:{transactionID:t,status:l}})});case 7:return c=r.sent,r.next=10,c.json();case 10:null!=(data=r.sent)&&data.errors?n.$toastr.e(data.errors[0].message):n.$toastr.s("You have successfully ".concat("approve"===e?"Approved":"Rejected"," this transaction."));case 12:return r.prev=12,n.processing=!1,r.finish(12);case 15:case"end":return r.stop()}}),r,null,[[3,,12,15]])})))()},formatNumberAsDollar:function(t){return null==t?void 0:t.toLocaleString("en-US",{style:"currency",currency:"USD"})}}},m=(n(633),n(46)),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("main",[e("Transition",{attrs:{name:"fade"}},[e("section",{staticClass:"text-white"},[e("div",{staticClass:"flex items-center justify-between my-3"},[e("button",{staticClass:"outline-none border bg-gray-200 text-black px-3 py-1 rounded-md text-sm",on:{click:function(e){return t.goBack()}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",viewBox:"0 0 24 24",fill:"none",stroke:"#747070","stroke-width":"2","stroke-linecap":"square","stroke-linejoin":"bevel"}},[e("path",{attrs:{d:"M19 12H6M12 5l-7 7 7 7"}})])])]),t._v(" "),e("div",{staticClass:"sm:flex-1 pb-0 mt-3"},[e("label",{staticClass:"sr-only",attrs:{for:"search"}},[t._v("Search")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"w-full rounded-tr-md rounded-tl-md outline-none bg-white p-3 text-gray-700 transition border focus:border-white focus:outline-none focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent",attrs:{type:"text",placeholder:"Search.."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),e("b-card",{staticClass:"mt-3"},[e("b-table",{attrs:{striped:"","show-empty":"",responsive:"",items:t.filteredDeposits,fields:t.fields,busy:t.loading,"current-page":t.currentPage,"per-page":t.perPage},scopedSlots:t._u([{key:"table-busy",fn:function(){return[e("div",{staticClass:"text-center my-2 cursor-pointer"},[e("b-spinner",{staticClass:"align-middle"}),t._v(" "),e("small",[t._v("Loading...")])],1)]},proxy:!0},{key:"empty",fn:function(){return[e("p",{staticClass:"text-center text-sm text-secondary py-2 cursor-pointer"},[t._v("\n              "+t._s(t.search?'No Transactions found for search value: "'.concat(t.search,'"'):"No Transactions available")+"\n            ")])]},proxy:!0},{key:"cell(sn)",fn:function(data){return[e("div",{staticClass:"font-medium py-4 text-sm cursor-pointer"},[t._v("\n              "+t._s(data.index+1)+"\n            ")])]}},{key:"cell(amount)",fn:function(data){var n,r;return[e("div",{staticClass:"font-medium py-4 text-sm cursor-pointer"},[t._v("\n              "+t._s(null!==(n=t.formatNumberAsDollar(null==data||null===(r=data.item)||void 0===r?void 0:r.amount))&&void 0!==n?n:"N/A")+"\n            ")])]}},{key:"cell(wallet)",fn:function(data){var n,r;return[e("div",{staticClass:"font-medium py-4 text-sm cursor-pointer"},[t._v("\n              "+t._s(null!==(n=null==data||null===(r=data.item)||void 0===r?void 0:r.wallet)&&void 0!==n?n:"N/A")+"\n            ")])]}},{key:"cell(transactionStatus)",fn:function(data){var n,r,o,l,c;return[e("div",{staticClass:"font-medium py-4 text-sm cursor-pointer"},[e("span",{staticClass:"px-3 py-2 rounded-full text-sm",class:["Pending"===(null==data||null===(n=data.item)||void 0===n?void 0:n.transactionStatus)?"bg-yellow-500 text-white":"Approved"===(null==data||null===(r=data.item)||void 0===r?void 0:r.transactionStatus)?"text-white bg-green-500":"Declined"===(null==data||null===(o=data.item)||void 0===o?void 0:o.transactionStatus)?"text-white bg-red-500":""]},[t._v("\n                "+t._s(null!==(l=null==data||null===(c=data.item)||void 0===c?void 0:c.transactionStatus)&&void 0!==l?l:"N/A")+"\n              ")])])]}},{key:"cell(user)",fn:function(data){var n,r,o,l,c;return[e("div",{staticClass:"font-medium text-sm cursor-pointer flex items-center gap-x-2 py-4"},[e("div",{staticClass:"bg-gray-500 text-white rounded-full h-10 w-10 flex text-center justify-center items-center"},[t._v("\n                "+t._s(t.getInitials(null==data||null===(n=data.item)||void 0===n||null===(n=n.user)||void 0===n?void 0:n.firstName,null==data||null===(r=data.item)||void 0===r||null===(r=r.user)||void 0===r?void 0:r.lastName))+"\n              ")]),t._v(" "),e("div",[e("span",[t._v("\n                  "+t._s(null==data||null===(o=data.item)||void 0===o||null===(o=o.user)||void 0===o?void 0:o.firstName)+"\n                ")]),t._v(" "),e("span",[t._v("\n                  "+t._s(null==data||null===(l=data.item)||void 0===l||null===(l=l.user)||void 0===l?void 0:l.lastName)+"\n                ")]),e("br"),t._v(" "),e("span",[t._v("\n                  "+t._s(null==data||null===(c=data.item)||void 0===c||null===(c=c.user)||void 0===c?void 0:c.email)+"\n                ")])])])]}},{key:"cell(proof)",fn:function(data){var n,r,o;return[e("div",{staticClass:"font-medium py-4 text-sm"},[null!=data&&null!==(n=data.item)&&void 0!==n&&n.proof?e("span",[e("enlargeable-image",{staticClass:"z-50",attrs:{src:null==data||null===(r=data.item)||void 0===r?void 0:r.proof,animation_duration:"700"}},[e("img",{staticClass:"h-10 w-10 rounded-full",attrs:{alt:"",src:null==data||null===(o=data.item)||void 0===o?void 0:o.proof}})])],1):e("span",[t._v("N/A")])])]}},{key:"cell(timeAdded)",fn:function(data){var n,r;return[e("div",{staticClass:"font-medium py-4 text-sm"},[t._v("\n              "+t._s(null!==(n=t.formatDateTime(null==data||null===(r=data.item)||void 0===r?void 0:r.timeAdded))&&void 0!==n?n:"N/A")+"\n            ")])]}},{key:"cell(actions)",fn:function(data){var n;return[e("div",{staticClass:"py-4"},["Pending"===(null==data||null===(n=data.item)||void 0===n?void 0:n.transactionStatus)?e("div",{staticClass:"flex items-center gap-x-3"},[e("button",{staticClass:"text-white text-xs bg-green-500 w-full py-1.5 rounded-full",on:{click:function(e){return t.handleAction(data.item,"approve")}}},[t._v("\n                  Approve\n                ")]),t._v(" "),e("button",{staticClass:"text-white text-xs bg-red-500 w-full py-1.5 rounded-full",on:{click:function(e){return t.handleAction(data.item,"reject")}}},[t._v("\n                  Reject\n                ")])]):e("div",[e("button",{staticClass:"bg-black text-white py-2 text-xs px-3 rounded-full",attrs:{disabled:""}},[t._v("\n                  Completed\n                ")])])])]}}])}),t._v(" "),e("div",{staticClass:"flex justify-end items-end"},[e("b-pagination",{staticClass:"my-3",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,size:"md"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)])],1)}),[],!1,null,"64861e6c",null);e.default=component.exports}}]);