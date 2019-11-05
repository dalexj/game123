(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,n){e.exports=n(95)},93:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(36),c=n.n(l),i=n(13),u=n.n(i),o=n(4),s=n(96);function m(e){return{type:"CHANGE_ROUTE",route:e}}function d(e,t){return{type:"BOARD_MOUSE_CLICK",x:e,y:t}}var v=n(2),E=n.n(v);function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(o.b)(e,E.a.merge({},t,{changeRoute:m,boardMouseClick:d}))}var h=f(function(e){return{files:e.files}})(function(e){return r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"row top"}),r.a.createElement("h1",null,"The Game"),r.a.createElement("div",{className:"row"},r.a.createElement(s.a,{onClick:function(){return e.changeRoute("/new-game")},bsSize:"lg",bsStyle:"primary"},"New Game")),r.a.createElement("div",{className:"row"},r.a.createElement(s.a,{onClick:function(){return e.changeRoute("/options")},bsSize:"lg",bsStyle:"primary"},"Options")),r.a.createElement("div",{className:"row"},r.a.createElement(s.a,{onClick:function(){return e.changeRoute("/about")},bsSize:"lg",bsStyle:"primary"},"About")))}),p=f()(function(e){return r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"row top"}),r.a.createElement("h1",null,"Options"),r.a.createElement("div",{className:"row"},r.a.createElement(s.a,{onClick:function(){return e.changeRoute("/")},bsSize:"lg",bsStyle:"primary"},"Back")))}),g=f()(function(e){return r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"row top"}),r.a.createElement("h1",null,"About"),r.a.createElement("h4",null,"I made it"),r.a.createElement("div",{className:"row"},r.a.createElement(s.a,{onClick:function(){return e.changeRoute("/")},bsSize:"lg",bsStyle:"primary"},"Back")))}),y=u()({getInitialState:function(){return{name:""}},changeName:function(e){this.setState({name:e})},render:function(){var e=this;return r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"row top"}),r.a.createElement("h1",null,"New Game"),r.a.createElement("label",null,"Name"),r.a.createElement("input",{className:"form-control",value:this.state.name,onChange:function(t){return e.changeName(t.target.value)}}),r.a.createElement("div",{className:"row"},r.a.createElement(s.a,{onClick:function(){return e.props.changeRoute("/level-select")},bsSize:"lg",bsStyle:"primary"},"Start Game")),r.a.createElement("div",{className:"row"},r.a.createElement(s.a,{onClick:function(){return e.props.changeRoute("/")},bsSize:"lg",bsStyle:"primary"},"Cancel")))}}),b=f(function(e){return{files:e.files}})(y),k=f()(function(e){var t=E.a.range(1,10);return r.a.createElement("div",null,r.a.createElement("div",{className:"row top"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h1",null,"Choose Level"),t.map(function(t){return r.a.createElement("div",{key:t,className:"row"},r.a.createElement(s.a,{onClick:function(){return e.changeRoute("/ingame")}},"Level ",t))})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(s.a,null,"Shop"),r.a.createElement(s.a,null,"Units"))))}),x=function(e){var t=e.index,n=e.children;return r.a.createElement("svg",{width:"690",height:"460",style:{zIndex:t}},n)},N=f(function(){return{}})(function(e){var t=e.tile,n=e.boardMouseClick;return t.exists?r.a.createElement("rect",{x:46*t.x,y:46*t.y,width:"40",height:"40",className:"mouse-tile",onClick:function(){return n(t.x,t.y)}}):null}),w=function(e){var t=e.tiles;return r.a.createElement(x,{index:4},t.map(function(e,t){return r.a.createElement(N,{key:t,tile:e})}))},S=function(e){var t=e.tile;return t.exists?r.a.createElement("rect",{x:46*t.x,y:46*t.y,width:"40",height:"40",style:{fill:"white",opacity:.25}}):null},C=function(e){var t=e.tiles;return r.a.createElement(x,{index:1},t.map(function(e,t){return r.a.createElement(S,{key:t,tile:e})}))},O=function(e){var t=e.unit;if(0===t.tiles.length)return null;var n=t.tiles.map(function(e,n){return r.a.createElement("rect",{key:n,x:46*e[0],y:46*e[1],width:"40",height:"40",fill:t.color})});return n.push(r.a.createElement("text",{key:"pic",x:46*t.tiles[0][0],y:46*t.tiles[0][1]+40,textLength:"40"},t.image)),n},U=function(e){var t=e.units;return r.a.createElement(x,{index:2},t.map(function(e,t){return r.a.createElement(O,{key:t,unit:e})}))},_=function(){return r.a.createElement(x,{index:3})},R=f(function(e){return{board:e.board,boardSelection:e.boardSelection}})(function(e){var t=e.board;return r.a.createElement("div",null,r.a.createElement(C,{tiles:t.tiles}),r.a.createElement(U,{units:E.a.concat(t.playerUnits,t.cpuUnits)}),r.a.createElement(_,null),r.a.createElement(w,{tiles:t.tiles}))}),M=function(e){var t=e.attack;return r.a.createElement("div",{className:"attack"},t.name)},j=f(function(e){return{board:e.board}})(function(e){var t=e.board.selectedUnit;return t?r.a.createElement("div",null,r.a.createElement("h3",null,t.name),r.a.createElement("div",null,"Health: ",t.tiles.length),r.a.createElement("div",null,"Max Health: ",t.maxLength),r.a.createElement("div",null,"Move: ",t.moves),t.getAttacks().map(function(e,t){return r.a.createElement(M,{key:t,attack:e})})):null}),L={"/":h,"/options":p,"/about":g,"/new-game":b,"/level-select":k,"/ingame":f()(function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"row top"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("ul",{className:"list-group"},r.a.createElement(j,null))),r.a.createElement("div",{className:"col-md-9"},r.a.createElement(R,null))))})},T=Object(o.b)(function(e){return{route:e.route}})(function(e){var t=L[e.route];return t?r.a.createElement(t,null):(console.warn("Route did not match - '".concat(e.route,"'")),r.a.createElement("span",null))}),z=n(7),A=n(23),G=n(43),I=n(44),B={attack1:{name:"attack_one",type:"standard",description:"does an attack super goodly"},attack2:{name:"cpu_attack",type:"standard",description:"does an attack super goodly"}},H={player_unit1:{image:"r",tiles:[],color:"orange",name:"the_unit",maxLength:5,moves:4,attacks:["attack1","attack2"]},cpu_unit1:{image:"Z",tiles:[],color:"red",name:"the_bad_guy",maxLength:6,moves:8,attacks:["attack2"]}};var q=function(){function e(t,n){Object(G.a)(this,e);var a=H[t];a||console.warn("cannot find unit type "+t),E.a.merge(this,a,{tiles:n})}return Object(I.a)(e,[{key:"isOn",value:function(e){return E.a.some(this.tiles,function(t){return E.a.isEqual(t,[e.x,e.y])})}},{key:"getAttacks",value:function(){return this.attacks.map(function(e){return B[e]})}},{key:"head",value:function(){return this.tiles[0]}},{key:"removeTiles",value:function(e){e<=0||(this.tiles=E.a.take(this.tiles,this.tiles.length-e))}},{key:"canMoveTo",value:function(e){return 1===(t=this.head(),n=e,Math.abs(t[0]-n[0])+Math.abs(t[1]-n[1]));var t,n}},{key:"moveTo",value:function(e){var t=E.a.reject(this.tiles,function(t){return E.a.isEqual(t,e)});t.unshift(e),this.tiles=t,this.removeTiles(this.tiles.length-this.maxLength)}}]),e}(),D=E.a.range(0,15),J=E.a.range(0,10),K=E.a.flatMap(J,function(e){return D.map(function(t){return{x:t,y:e,exists:!0}})});E.a.find(K,function(e){return 1===e.x&&4===e.y}).exists=!1,E.a.find(K,function(e){return 2===e.x&&5===e.y}).exists=!1,E.a.find(K,function(e){return 4===e.x&&4===e.y}).exists=!1,E.a.find(K,function(e){return 6===e.x&&4===e.y}).exists=!1;var Z={selectedUnit:null,tiles:K,playerUnits:[new q("player_unit1",[[1,2],[2,2],[2,3],[2,4]])],cpuUnits:[new q("cpu_unit1",[[6,2],[7,2],[7,3],[7,4]])]},F={route:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/ingame",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"CHANGE_ROUTE"===t.type?t.route:e},board:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("BOARD_MOUSE_CLICK"===t.type){var n=[t.x,t.y],a=E.a.find(E.a.concat(e.playerUnits,e.cpuUnits),function(e){return E.a.isEqual(e.tiles[0],n)});return e.selectedUnit&&!a&&e.selectedUnit.canMoveTo(n)?(console.log("can"),e.selectedUnit.moveTo(n),Object(A.a)({},e)):Object(A.a)({},e,{selectedUnit:a})}return e}},P=Object(z.c)(Object(z.b)(F)),Q=u()({render:function(){return r.a.createElement(o.a,{store:P},r.a.createElement("div",{className:"container"},r.a.createElement(T,null)))}});n(91),n(93);c.a.render(r.a.createElement(Q,null),document.getElementById("root"))}},[[45,2,1]]]);
//# sourceMappingURL=main.439cfc06.chunk.js.map