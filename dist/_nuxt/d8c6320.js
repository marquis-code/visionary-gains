(window.webpackJsonp=window.webpackJsonp||[]).push([[12,9],{516:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=516},544:function(t,e,n){"use strict";n.r(e);var r={extends:n(517).a,props:{chartdata:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.chartdata,this.options)}},o=n(46),component=Object(o.a)(r,undefined,undefined,!1,null,null,null);e.default=component.exports},703:function(t,e,n){"use strict";n.r(e);var r={components:{BarChart:n(544).default},data:function(){return{options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},chartdata:{labels:["January","February","March","April"],datasets:[{label:"Page Impressions",data:[10,20,30,40],borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.2)"},{label:"Adsense Clicks",data:[5,15,10,30],type:"line",fill:!1,borderColor:"rgb(54, 162, 235)"}]}}}},o=n(46),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full"},[e("BarChart",{attrs:{height:200,options:t.options,chartdata:t.chartdata}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);