(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{674:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"relative flex h-32 items-end bg-[#303435] lg:col-span-5 lg:h-full xl:col-span-6"},[e("img",{staticClass:"absolute inset-0 h-full w-full object-cover opacity-80",attrs:{alt:"Night",src:"https://images.unsplash.com/photo-1627253781598-63b98c51da42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"}}),t._v(" "),e("div",{staticClass:"hidden lg:relative lg:block lg:p-12"},[e("a",{staticClass:"block text-white",attrs:{href:"/"}},[e("span",{staticClass:"sr-only"},[t._v("Home")]),t._v(" "),e("img",{staticClass:"w-48",attrs:{src:r(75),alt:"logo"}})]),t._v(" "),e("h2",{staticClass:"mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl"},[t._v("\n          Welcome to Visionary Gains\n        ")]),t._v(" "),e("p",{staticClass:"mt-4 leading-relaxed text-white/90"},[t._v("\n          Trade global financial markets ON OVER 1,000 ASSETS. Forex, Stocks,\n          Commodities, Indices & Cryptocurrencies\n        ")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative -mt-16 block lg:hidden"},[e("a",{staticClass:"inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20",attrs:{href:"/"}},[e("span",{staticClass:"sr-only"},[t._v("Home")]),t._v(" "),e("img",{staticClass:"w-48",attrs:{src:r(75),alt:"logo"}})]),t._v(" "),e("h1",{staticClass:"mt-2 text-2xl font-bold text-gray-200 sm:text-3xl md:text-4xl"},[t._v("\n            Welcome to Visionary Gains\n          ")]),t._v(" "),e("p",{staticClass:"mt-4 leading-relaxed text-sm text-white"},[t._v("\n            Trade global financial markets ON OVER 1,000 ASSETS. Forex,\n            Stocks, Commodities, Indices & Cryptocurrencies\n          ")])])}],o=r(48),l=(r(93),r(8),{layout:"authLayout",data:function(){return{processing:!1,formBusy:!1,form:{first_name:"",last_name:"",email:"",password:"",referralCode:""}}},computed:{isFormEmpty:function(){return!!(this.form.first_name&&this.form.last_name&&this.form.email&&this.form.password)}},methods:{handleSubmit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,data,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.formBusy=!0,e.prev=1,e.next=5,fetch("https://visionary-zpui.onrender.com/graphql/query",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({query:"\n          mutation newUser($input: NewUser!) {\n            newUser(input: $input) {\n                  jwt\n            }\n          }\n        ",variables:{input:{firstName:t.form.first_name,lastName:t.form.last_name,email:t.form.email,password:t.form.password,referralCode:t.form.referralCode}}})});case 5:return r=e.sent,e.next=8,r.json();case 8:null!=(data=e.sent)&&data.errors?t.$toastr.e(data.errors[0].message):(window.localStorage.setItem("auth",JSON.stringify(null==data||null===(n=data.data)||void 0===n||null===(n=n.newUser)||void 0===n?void 0:n.jwt)),window.localStorage.setItem("user",JSON.stringify(null==data||null===(o=data.data)||void 0===o||null===(o=o.newUser)||void 0===o?void 0:o.user)),t.$toastr.s("Signup was successful"),t.$router.push("/login"));case 10:return e.prev=10,t.formBusy=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,,10,13]])})))()}}}),m=r(46),component=Object(m.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"bg-white space-y-6"},[e("div",{staticClass:"lg:grid lg:min-h-screen lg:grid-cols-12 w-full"},[t._m(0),t._v(" "),e("main",{staticClass:"items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 bg-[#303435] w-full"},[e("div",{staticClass:"max-w-xl lg:max-w-3xl lg:mx-auto grid place-content-center h-full"},[t._m(1),t._v(" "),e("form",{staticClass:"lg:w-[500px] space-y-6 pt-10",on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("div",{staticClass:"col-span-6 sm:col-span-3"},[e("label",{staticClass:"block text-sm text-white",attrs:{for:"FirstName"}},[t._v("\n              First Name\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.first_name,expression:"form.first_name"}],staticClass:"mt-1 w-full py-3 pl-3 outline-none border-none rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm",attrs:{id:"FirstName",type:"text",name:"first_name"},domProps:{value:t.form.first_name},on:{input:function(e){e.target.composing||t.$set(t.form,"first_name",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-span-6 sm:col-span-3"},[e("label",{staticClass:"block text-sm text-white",attrs:{for:"LastName"}},[t._v("\n              Last Name\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.last_name,expression:"form.last_name"}],staticClass:"mt-1 w-full py-3 pl-3 outline-none border-none rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm",attrs:{id:"LastName",type:"text",name:"last_name"},domProps:{value:t.form.last_name},on:{input:function(e){e.target.composing||t.$set(t.form,"last_name",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-span-6"},[e("label",{staticClass:"block text-sm text-white",attrs:{for:"Email"}},[t._v("\n              Email\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"mt-1 w-full py-3 pl-3 outline-none border-none rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm",attrs:{id:"Email",type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-span-6 sm:col-span-3"},[e("label",{staticClass:"block text-sm text-white",attrs:{for:"Password"}},[t._v("\n              Password\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"mt-1 w-full py-3 pl-3 outline-none border-none rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm",attrs:{id:"Password",type:"password",name:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-span-6"},[e("label",{staticClass:"block text-sm text-white",attrs:{for:"referralCode"}},[t._v("\n              Referral Code\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.referralCode,expression:"form.referralCode"}],staticClass:"mt-1 w-full py-3 pl-3 outline-none border-none rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm",attrs:{id:"referralCode",type:"text",name:"referralCode"},domProps:{value:t.form.referralCode},on:{input:function(e){e.target.composing||t.$set(t.form,"referralCode",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"w-full"},[e("button",{staticClass:"inline-block w-full shrink-0 text-xs rounded-md border border-green-500 bg-green-600 px-12 py-3 font-medium text-white transition",class:[t.isFormEmpty?"":"opacity-25 cursor-not-allowed"],attrs:{disabled:!t.isFormEmpty}},[t._v("\n              "+t._s(t.formBusy?"processing...":" Create an account")+"\n            ")]),t._v(" "),e("p",{staticClass:"mt-4 text-sm text-white sm:mt-0"},[t._v("\n              Already have an account?\n              "),e("nuxt-link",{staticClass:"text-white underline",attrs:{to:"/login"}},[t._v("\n                Log in\n              ")]),t._v(".\n            ")],1)])])])])])])}),n,!1,null,null,null);e.default=component.exports}}]);