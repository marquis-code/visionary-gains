(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{670:function(t,e,n){"use strict";n.r(e);var r=n(49),o=(n(93),n(27),n(8),n(25),{layout:"authLayout",data:function(){return{processing:!1,isEmailValid:!0,form:{email:"",password:""}}},computed:{isFormEmpty:function(){return!(!this.form.email||!this.form.password)}},watch:{"form.email":function(t){this.form.email=t,this.validateEmail(t)}},methods:{login:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.processing=!0,n='\n        mutation {\n          adminLogin(email: "'.concat(t.form.email,'", password: "').concat(t.form.password,'") {\n            jwt\n            user {\n              id\n              firstName\n              lastName\n              email\n              Status\n              PlanType\n              accountBalance\n              tradingBalance\n              profit\n              eth\n              btc\n              timeAdded\n            }\n          }\n        }\n      '),e.prev=2,e.next=5,fetch("https://visionary-zpui.onrender.com/graphql/query",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({query:n,variables:{email:t.form.email,password:t.form.password}})});case 5:return r=e.sent,e.next=8,r.json();case 8:null!=(data=e.sent)&&data.errors?t.$toastr.e(data.errors[0].message):(window.localStorage.setItem("auth",JSON.stringify(null==data||null===(o=data.data)||void 0===o||null===(o=o.adminLogin)||void 0===o?void 0:o.jwt)),window.localStorage.setItem("user",JSON.stringify(null==data||null===(l=data.data)||void 0===l||null===(l=l.adminLogin)||void 0===l?void 0:l.user)),t.$toastr.s("Login was successful"),t.$router.push("/admin/dashboard"));case 10:return e.prev=10,t.processing=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[2,,10,13]])})))()},validateEmail:function(t){/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)?this.isEmailValid=!0:this.isEmailValid=!1}}}),l=n(46),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"bg-[#003b6d] h-screen"},[e("section",{staticClass:"bbg-[#003b6d] flex justify-center items-center pt-20 container mx-auto"},[e("div",{staticClass:"p-4 md:p-8 space-y-3 w-11/12 mx-auto mt-20 bg-white rounded-xl md:w-[500px] border shadow-sm"},[e("h1",{staticClass:"text-2xl font-bold text-center"},[t._v("\n        Admin Login\n      ")]),t._v(" "),e("form",{staticClass:"space-y-10 w-full bg-white",on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[e("div",{staticClass:"space-y-1 text-sm w-full"},[e("label",{staticClass:"block dark:text-gray-400",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"border w-full px-4 py-3 rounded-md outline-none",attrs:{id:"email",type:"email",name:"email",placeholder:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),t.isEmailValid?t._e():e("small",{staticClass:"text-red-600 text-sm font-medium"},[t._v("Please enter a valid email\n            address")])]),t._v(" "),e("div",{staticClass:"space-y-1 text-sm w-full"},[e("label",{staticClass:"block dark:text-gray-400",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"border w-full px-4 py-3 rounded-md outline-none",attrs:{id:"password",type:"password",name:"password",placeholder:"Password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),t._v(" "),e("button",{staticClass:"block w-full disabled:cursor-not-allowed disabled:opacity-25 p-3 text-sm text-center bg-black text-white rounded-md",attrs:{disabled:!t.isFormEmpty||t.processing}},[t._v("\n          "+t._s(t.processing?"processing...":"Sign in")+"\n        ")])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);