(this["webpackJsonpcolor-picker"]=this["webpackJsonpcolor-picker"]||[]).push([[0],{60:function(e,t,a){e.exports=a(92)},65:function(e,t,a){},66:function(e,t,a){},90:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),l=a.n(r),s=(a(65),a(27)),c=a(28),i=a(33),u=a(32),d=(a(66),a(54)),m=a(47),p=a(10),h=a(121),b=a(125),f=a(126),C=a(48),g=a(53),v=a(38),O=a.n(v),E=(a(90),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.hexToRgb(n.props.value)},n.updateColor=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(m.a)({},t,a));var o=n.rgbToHex(n.state.red,n.state.green,n.state.blue);n.setState({colorSnipped:o})},n.handleListOfColors=function(){n.setState((function(e){return{showListOfColors:!e.showListOfColors}}))},n.handleSliders=function(){n.setState((function(e){return{showSliders:!e.showSliders}}))},n.setColorFromList=function(e){n.setState({colorSnipped:e}),n.handleListOfColors(),n.hexToRgb(e),n.props.onChange(e)},n.cancelChangeColor=function(){n.setState({colorSnipped:n.props.value}),n.handleSliders(),n.hexToRgb(n.props.value)},n.hexToRgb=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);n.setState({red:parseInt(t[1],16),green:parseInt(t[2],16),blue:parseInt(t[3],16)})},n.componentToHex=function(e){var t=Math.abs(e).toString(16);return 1===t.length?"0"+t:t},n.rgbToHex=function(e,t,a){return"#"+n.componentToHex(e)+n.componentToHex(t)+n.componentToHex(a)},n.setColorFromRGB=function(){var e=n.rgbToHex(n.state.red,n.state.green,n.state.blue);n.setState({colorSnipped:e}),n.handleSliders(),n.props.onChange(e)},n.state={showListOfColors:!1,showSliders:!1,colorSnipped:n.props.value},n.updateColor=n.updateColor.bind(Object(p.a)(n)),n.handleListOfColors=n.handleListOfColors.bind(Object(p.a)(n)),n.handleSliders=n.handleSliders.bind(Object(p.a)(n)),n.setColorFromList=n.setColorFromList.bind(Object(p.a)(n)),n.cancelChangeColor=n.cancelChangeColor.bind(Object(p.a)(n)),n.setColorFromRGB=n.setColorFromRGB.bind(Object(p.a)(n)),n.hexToRgb=n.hexToRgb.bind(Object(p.a)(n)),n.rgbToHex=n.rgbToHex.bind(Object(p.a)(n)),n.componentToHex=n.componentToHex.bind(Object(p.a)(n)),n}return Object(c.a)(a,[{key:"render",value:function(){for(var e=this,t=this.state,a=t.showListOfColors,n=t.showSliders,r=[],l=function(){var t=Object(d.a)(c[s],2),a=t[0],n=t[1];r.push(o.a.createElement("li",{onClick:function(){return e.setColorFromList(n)},key:a},a," ",o.a.createElement(h.a,{style:{background:"".concat(n)}})))},s=0,c=Object.entries(this.props.colors);s<c.length;s++)l();return o.a.createElement(h.a,{className:"wrap"},o.a.createElement(h.a,{container:!0,className:"color-picker",direction:"row",wrap:"nowrap",justify:"flex-start",alignItems:"center"},o.a.createElement(b.a,{className:"text-field",value:this.props.value}),o.a.createElement(h.a,{className:"btn-color",onClick:this.handleSliders},o.a.createElement(h.a,{className:"color-squadre",style:{background:"".concat(this.state.colorSnipped)}})),o.a.createElement(h.a,{className:"btn-down",onClick:this.handleListOfColors},o.a.createElement(C.a,{icon:g.a})),a?o.a.createElement(O.a,{onOutsideClick:function(){return e.handleListOfColors()}},o.a.createElement(h.a,{className:"color-list-wrap"},o.a.createElement("ul",{className:"color-list"},r))):null,n?o.a.createElement(O.a,{onOutsideClick:function(){return e.handleSliders()}},o.a.createElement(h.a,{className:"color-list-wrap color-slider-wrap"},o.a.createElement(h.a,{className:"sliders"},o.a.createElement(h.a,{className:"track"},o.a.createElement("label",null,"R:"),o.a.createElement("input",{id:"red",type:"range",name:"red",min:"0",max:"255",steps:"1",value:this.state.red,onChange:function(t){return e.updateColor(t)}})),o.a.createElement(h.a,{className:"track"},o.a.createElement("label",null,"G:"),o.a.createElement("input",{id:"green",type:"range",min:"0",name:"green",max:"255",steps:"1",value:this.state.green,onChange:function(t){return e.updateColor(t)}})),o.a.createElement(h.a,{className:"track"},o.a.createElement("label",null,"B:"),o.a.createElement("input",{id:"blue",type:"range",min:"0",max:"255",name:"blue",steps:"1",value:this.state.blue,onChange:function(t){return e.updateColor(t)}})),o.a.createElement(h.a,{className:"btns-group",container:!0,direction:"row",justify:"flex-end"},o.a.createElement(f.a,{variant:"outlined",className:"cancel",onClick:this.cancelChangeColor},"Cancel"),o.a.createElement(f.a,{variant:"outlined",className:"okay",onClick:this.setColorFromRGB},"Okay"))))):null))}}]),a}(o.a.Component)),S=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleColor=function(e){n.setState({value:e})},n.state={value:"#f2b74c",colors:{yellow:"#f2b74c",red:"#ef3c33",green:"#00a05a",blue:"#00adeb"}},n}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(E,{colors:this.state.colors,value:this.state.value,onChange:this.handleColor}))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.effbd298.chunk.js.map