(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{520:function(t,e,l){t.exports=l.p+"img/create-wallet.bda460c.jpg"},701:function(t,e,l){"use strict";l.r(e);l(34);var r=[function(){var t=this._self._c;return t("aside",{staticClass:"relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"},[t("img",{staticClass:"absolute inset-0 h-full w-full object-cover",attrs:{alt:"Pattern",src:l(520)}})])}],n=(l(60),{layout:"dashboards",data:function(){return{loading:!1,form:{name:"",address:""}}},computed:{isFormEmpty:function(){return!(!this.form.name||!this.form.address)}},methods:{createWallet:function(){var t=this;this.loading=!0,setTimeout((function(){t.loading=!1,t.$toastr.s("Wallet was created sucessfully"),t.$router.push("/admin/dashboard/wallet")}),3e3)}}}),o=l(46),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"bg-white"},[e("div",{staticClass:"lg:grid lg:min-h-screen lg:grid-cols-12"},[t._m(0),t._v(" "),e("main",{staticClass:"flex items-center w-full justify-center px-8 w-full py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"},[e("div",{staticClass:"max-w-xl lg:max-w-3xl w-full"},[e("h1",{staticClass:"mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"},[t._v("\n          Create Wallet\n        ")]),t._v(" "),e("p",{staticClass:"mt-4 leading-relaxed text-gray-500"},[t._v("\n          please fill the following fields with your information.\n        ")]),t._v(" "),e("form",{staticClass:"mt-8 gap-6 w-full space-y-4",on:{submit:function(e){return e.preventDefault(),t.createWallet.apply(null,arguments)}}},[e("div",{staticClass:"col-span-6 sm:col-span-6"},[e("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"walletName"}},[t._v("\n              Wallet Name\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"mt-1 w-full px-3 py-3 border outline-none rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm",attrs:{id:"walletName",type:"text",name:"walletName"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-span-6 sm:col-span-6"},[e("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"walletAddress"}},[t._v("\n              Wallet Address\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"mt-1 w-full px-3 py-3 border outline-none rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm",attrs:{id:"walletAddress",type:"text",name:"walletAddress"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"w-full"},[e("button",{staticClass:"w-full rounded-md border disabled:cursor-not-allowed disabled:opacity-25 border-black bg-black px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500",attrs:{type:"submit",disabled:!t.isFormEmpty||t.loading}},[t._v("\n              "+t._s(t.loading?"saving...":"Create walet")+"\n            ")])])])])])])])}),r,!1,null,null,null);e.default=component.exports}}]);