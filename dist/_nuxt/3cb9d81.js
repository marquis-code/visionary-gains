(window.webpackJsonp=window.webpackJsonp||[]).push([[13,11],{516:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=516},576:function(t,e,n){"use strict";n.r(e);var r={extends:n(517).c,props:{chartdata:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.chartdata,this.options)}},l=n(46),component=Object(l.a)(r,undefined,undefined,!1,null,null,null);e.default=component.exports},707:function(t,e,n){"use strict";n.r(e);var r={components:{LineChart:n(576).default},data:function(){return{options:{},chartdata:{labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{label:"BTC",data:[100,200,300,400,600,700,300,30,50,70,50,70],fill:!0,borderColor:"rgb(255,192,203)",lineTension:.1},{label:"ETH",data:[400,600,700,300,100,200,300,50,70,50,10,59],fill:!0,borderColor:"rgb(0,0,255)",lineTension:.1},{label:"LTC",data:[400,600,100,200,300,700,300,700,300,100,200,500],fill:!0,lineTension:.1}]}}}},l=n(46),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full px-3"},[e("LineChart",{attrs:{height:130,options:t.options,chartdata:t.chartdata}})],1)}),[],!1,null,"5064d054",null);e.default=component.exports}}]);