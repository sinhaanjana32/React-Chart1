(this.webpackJsonpmychart=this.webpackJsonpmychart||[]).push([[0],{149:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(44),i=a.n(o),l=(a(52),a(15)),c=a(16),s=a(18),h=a(17),u=(a(53),a(45)),d=function(t){Object(s.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={chartData:t.chartData},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"chart",width:100,height:50},r.a.createElement(u.a,{data:this.state.chartData,options:{options:{title:{display:this.props.displayTitle,text:"cities of world",fontSize:"100"},legend:{display:this.props.displayLegend,position:"right"},layout:{padding:{left:50,right:0,bottom:0,top:0}}}}}))}}]),a}(n.Component);d.defaultProps={displayTitle:!0,displayLegend:!0};var p=d,m=function(t){Object(s.a)(a,t);var e=Object(h.a)(a);function a(){var t;return Object(l.a)(this,a),(t=e.call(this)).state={chartData:{}},t}return Object(c.a)(a,[{key:"componentWillMount",value:function(){this.getChartData()}},{key:"getChartData",value:function(){this.setState({chartData:{labels:["CapeTown","Helsinki","Delhi","Pune","Kolkata","Thailand","Tallin"],datasets:[{label:"Temperature",data:[38,25,36,30,30,25,25],backgroundColor:"yellow",borderWidth:"4",borderColor:"grey"}]}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"header"},r.a.createElement("h2",null,"Welcome To React")),r.a.createElement(p,{chartData:this.state.chartData}),r.a.createElement("h1",null," Created By : Anjana Sinha"))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},47:function(t,e,a){t.exports=a(149)},52:function(t,e,a){},53:function(t,e,a){}},[[47,1,2]]]);
//# sourceMappingURL=main.8e410e1e.chunk.js.map