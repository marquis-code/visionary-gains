(window.webpackJsonp=window.webpackJsonp||[]).push([[14,9],{516:function(t,r){function e(t){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id=516},544:function(t,r,e){"use strict";e.r(r);var o={extends:e(517).a,props:{chartdata:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.chartdata,this.options)}},n=e(46),component=Object(n.a)(o,undefined,undefined,!1,null,null,null);r.default=component.exports},708:function(t,r,e){"use strict";e.r(r);var o={components:{BarChart:e(544).default},data:function(){return{options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},chartdata:{labels:["January","February","March","April","May"],datasets:[{label:"Website Visitors",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:["rgba(255, 99, 132, 0.2)"],borderColor:["rgb(255, 99, 132)"],borderWidth:1},{label:"Mobile Visitors",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:["rgba(255, 99, 132, 0.2)"],borderColor:["rgb(255, 99, 132)"],borderWidth:1}]}}}},n=e(46),component=Object(n.a)(o,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"w-full"},[r("BarChart",{attrs:{height:200,options:t.options,chartdata:t.chartdata}})],1)}),[],!1,null,"3eee79d8",null);r.default=component.exports}}]);