(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,n){e.exports=n(95)},93:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(36),l=n.n(c),i=n(14),s=n.n(i),u=n(4),o=n(96);function m(e){return{type:"CHANGE_ROUTE",route:e}}function d(e,t){return{type:"BOARD_MOUSE_CLICK",x:e,y:t}}function f(e){return{type:"SELECT_ATTACK",attack:e}}function v(e){return{type:"UNDO_MOVEMENT"}}var h=n(1),E=n.n(h);function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(u.b)(e,E.a.merge({},t,{changeRoute:m,boardMouseClick:d,selectAttack:f,undoMovement:v}))}var p=k(function(e){return{files:e.files}})(function(e){return r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"row top"}),r.a.createElement("h1",null,"The Game"),r.a.createElement("div",{className:"row"},r.a.createElement(o.a,{onClick:function(){return e.changeRoute("/new-game")},bsSize:"lg",bsStyle:"primary"},"New Game")),r.a.createElement("div",{className:"row"},r.a.createElement(o.a,{onClick:function(){return e.changeRoute("/options")},bsSize:"lg",bsStyle:"primary"},"Options")),r.a.createElement("div",{className:"row"},r.a.createElement(o.a,{onClick:function(){return e.changeRoute("/about")},bsSize:"lg",bsStyle:"primary"},"About")))}),y=k()(function(e){return r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"row top"}),r.a.createElement("h1",null,"Options"),r.a.createElement("div",{className:"row"},r.a.createElement(o.a,{onClick:function(){return e.changeRoute("/")},bsSize:"lg",bsStyle:"primary"},"Back")))}),g=k()(function(e){return r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"row top"}),r.a.createElement("h1",null,"About"),r.a.createElement("h4",null,"I made it"),r.a.createElement("div",{className:"row"},r.a.createElement(o.a,{onClick:function(){return e.changeRoute("/")},bsSize:"lg",bsStyle:"primary"},"Back")))}),b=s()({getInitialState:function(){return{name:""}},changeName:function(e){this.setState({name:e})},render:function(){var e=this;return r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"row top"}),r.a.createElement("h1",null,"New Game"),r.a.createElement("label",null,"Name"),r.a.createElement("input",{className:"form-control",value:this.state.name,onChange:function(t){return e.changeName(t.target.value)}}),r.a.createElement("div",{className:"row"},r.a.createElement(o.a,{onClick:function(){return e.props.changeRoute("/level-select")},bsSize:"lg",bsStyle:"primary"},"Start Game")),r.a.createElement("div",{className:"row"},r.a.createElement(o.a,{onClick:function(){return e.props.changeRoute("/")},bsSize:"lg",bsStyle:"primary"},"Cancel")))}}),x=k(function(e){return{files:e.files}})(b),N=k()(function(e){var t=E.a.range(1,10);return r.a.createElement("div",null,r.a.createElement("div",{className:"row top"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h1",null,"Choose Level"),t.map(function(t){return r.a.createElement("div",{key:t,className:"row"},r.a.createElement(o.a,{onClick:function(){return e.changeRoute("/ingame")}},"Level ",t))})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(o.a,null,"Shop"),r.a.createElement(o.a,null,"Units"))))}),w=function(e){var t=e.index,n=e.children;return r.a.createElement("svg",{width:"690",height:"460",style:{zIndex:t}},n)},U=k(function(e){return{board:e.board}})(function(e){var t=e.tile,n=e.boardMouseClick;e.board;return t.exists?r.a.createElement("rect",{x:46*t.x,y:46*t.y,width:"40",height:"40",className:"mouse-tile",onClick:function(){return n(t.x,t.y)}}):null}),A=k(function(e){return{board:e.board}})(function(e){var t=e.board;return r.a.createElement(w,{index:4},t.tiles.map(function(e,t){return r.a.createElement(U,{key:t,tile:e})}))}),T=function(e){var t=e.tile;return t.exists?r.a.createElement("rect",{x:46*t.x,y:46*t.y,width:"40",height:"40",style:{fill:"white",opacity:.25}}):null},C=function(e){var t=e.tiles;return r.a.createElement(w,{index:1},t.map(function(e,t){return r.a.createElement(T,{key:t,tile:e})}))},O=function(e){var t=e.unit;if(0===t.tiles.length)return null;var n=t.tiles.map(function(e,n){return r.a.createElement("rect",{key:n,x:46*e[0],y:46*e[1],width:"40",height:"40",fill:t.color})});return n.push(r.a.createElement("text",{key:"pic",x:46*t.tiles[0][0],y:46*t.tiles[0][1]+40,textLength:"40"},t.image)),n},M=function(e){var t=e.units;return r.a.createElement(w,{index:2},t.map(function(e,t){return r.a.createElement(O,{key:t,unit:e})}))},S=k(function(e){return{board:e.board}})(function(e){var t=e.board;return r.a.createElement(w,{index:3},function(e){var t=e.selectedUnit,n=e.tiles,a=e.units,c=e.selectedAttack;if(!t||!t.hasMovementLeft()||c)return null;var l=E.a.flatMap(a.filter(function(e){return e!==t}),"tiles"),i=t.head();return[[i[0],i[1]+1],[i[0],i[1]-1],[i[0]+1,i[1]],[i[0]-1,i[1]]].filter(function(e){var t=E.a.find(n,{x:e[0],y:e[1]});return t&&t.exists&&E.a.every(l,function(t){return!E.a.isEqual(t,e)})}).map(function(e,t){return r.a.createElement("image",{key:t,href:"assets/movement.png",width:"40",height:"40",x:46*e[0],y:46*e[1]})})}({tiles:t.tiles,selectedUnit:t.selectedUnit,units:E.a.concat(t.playerUnits,t.cpuUnits),selectedAttack:t.selectedAttack}),function(e){var t=e.selectedAttack,n=e.selectedUnit,a=e.tiles;if(!t)return null;var c=n.head();return[[c[0],c[1]+1],[c[0],c[1]-1],[c[0]+1,c[1]],[c[0]-1,c[1]]].filter(function(e){var t=E.a.find(a,{x:e[0],y:e[1]});return t&&t.exists&&E.a.every(n.tiles,function(t){return!E.a.isEqual(t,e)})}).map(function(e,t){return r.a.createElement("image",{key:t,href:"assets/target.png",width:"40",height:"40",x:46*e[0],y:46*e[1]})})}({selectedAttack:t.selectedAttack,selectedUnit:t.selectedUnit,tiles:t.tiles}))}),_=k(function(e){return{board:e.board,boardSelection:e.boardSelection}})(function(e){var t=e.board;return r.a.createElement("div",null,r.a.createElement(C,{tiles:t.tiles}),r.a.createElement(M,{units:E.a.concat(t.playerUnits,t.cpuUnits)}),r.a.createElement(S,null),r.a.createElement(A,null))}),L=function(e){var t=e.attack,n=e.selectAttack,a=e.selectedAttack,c="";return a&&a.name===t.name&&(c="selected-attack"),r.a.createElement("div",{className:"attack "+c,onClick:function(){return n(t)}},t.name)},R=k(function(e){return{board:e.board}})(function(e){var t=e.board,n=e.selectAttack,a=e.undoMovement,c=t.selectedUnit;return c?r.a.createElement("div",null,r.a.createElement("h3",null,c.name),r.a.createElement("div",null,"Health: ",c.tiles.length),r.a.createElement("div",null,"Max Health: ",c.maxLength),r.a.createElement("div",null,"Move: ",c.movesTaken,"/",c.moves),r.a.createElement("div",null,"attack: ",JSON.stringify()),c.getAttacks().map(function(e,a){return r.a.createElement(L,{selectedAttack:t.selectedAttack,key:a,attack:e,selectAttack:n})}),r.a.createElement("div",{onClick:function(){return a()}},"Undo")):null}),j={"/":p,"/options":y,"/about":g,"/new-game":x,"/level-select":N,"/ingame":k()(function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"row top"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("ul",{className:"list-group"},r.a.createElement(R,null))),r.a.createElement("div",{className:"col-md-9"},r.a.createElement(_,null))))})},z=Object(u.b)(function(e){return{route:e.route}})(function(e){var t=j[e.route];return t?r.a.createElement(t,null):(console.warn("Route did not match - '".concat(e.route,"'")),r.a.createElement("span",null))}),D=n(8),G=n(6),I=n(43),q=n(44),B={attack1:{name:"attack_one",type:"standard",description:"does an attack super goodly",damage:2},attack2:{name:"cpu_attack",type:"standard",description:"does an attack super goodly",damage:1}},H={player_unit1:{image:"r",tiles:[],color:"orange",name:"the_unit",maxLength:5,moves:4,attacks:["attack1","attack2"]},cpu_unit1:{image:"Z",tiles:[],color:"lightblue",name:"the_bad_guy",maxLength:6,moves:8,attacks:["attack2"]}};var K=function(){function e(t,n){Object(I.a)(this,e);var a=H[t];a||console.warn("cannot find unit type "+t),E.a.merge(this,a),this.tiles=n,this.startTurn()}return Object(q.a)(e,[{key:"getAttacks",value:function(){return this.attacks.map(function(e){return B[e]})}},{key:"head",value:function(){return this.tiles[0]}},{key:"isOn",value:function(e){return E.a.some(this.tiles,function(t){return E.a.isEqual(t,e)})}},{key:"removeTiles",value:function(e){e<=0||(this.tiles=E.a.take(this.tiles,this.tiles.length-e))}},{key:"canMoveTo",value:function(e){return 1===(t=this.head(),n=e,Math.abs(t[0]-n[0])+Math.abs(t[1]-n[1]));var t,n}},{key:"moveTo",value:function(e){var t=E.a.reject(this.tiles,function(t){return E.a.isEqual(t,e)});t.unshift(e),this.tiles=t,this.removeTiles(this.tiles.length-this.maxLength)}},{key:"canAttack",value:function(e,t){return this.canMoveTo(e)}},{key:"performAttack",value:function(e,t){"standard"===e.type&&t.removeTiles(e.damage)}},{key:"hasMovementLeft",value:function(){return this.movesTaken<this.moves}},{key:"startTurn",value:function(){this.movesTaken=0,this.finished=!1,this.startingTiles=E.a.cloneDeep(this.tiles)}},{key:"resetMovement",value:function(){this.movesTaken=0,this.tiles=E.a.cloneDeep(this.startingTiles)}}]),e}(),J=E.a.range(0,15),V=E.a.range(0,10),Z=E.a.flatMap(V,function(e){return J.map(function(t){return{x:t,y:e,exists:!0}})});E.a.find(Z,function(e){return 1===e.x&&4===e.y}).exists=!1,E.a.find(Z,function(e){return 2===e.x&&5===e.y}).exists=!1,E.a.find(Z,function(e){return 4===e.x&&4===e.y}).exists=!1,E.a.find(Z,function(e){return 6===e.x&&4===e.y}).exists=!1;var F={selectedUnit:null,selectedAttack:null,tiles:Z,playerUnits:[new K("player_unit1",[[1,2],[2,2],[2,3],[2,4]])],cpuUnits:[new K("cpu_unit1",[[6,2],[7,2],[7,3],[7,4]])]};var P={route:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/ingame",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"CHANGE_ROUTE"===t.type?t.route:e},board:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("BOARD_MOUSE_CLICK"===t.type){var n=[t.x,t.y],a=E.a.find(E.a.concat(e.playerUnits,e.cpuUnits),function(e){return e.isOn(n)});if(!e.selectedAttack)return e.selectedUnit&&e.selectedUnit.hasMovementLeft()&&(!a||a===e.selectedUnit)&&E.a.find(e.tiles,{x:t.x,y:t.y}).exists&&!function(e,t){var n=e.playerUnits,a=e.cpuUnits,r=e.selectedUnit,c=E()(n).concat(a).reject(function(e){return e===r}).flatMap("tiles").value();return E.a.some(c,function(e){return E.a.isEqual(e,t)})}(e,n)&&e.selectedUnit.canMoveTo(n)?(e.selectedUnit.moveTo(n),Object(G.a)({},e)):Object(G.a)({},e,{selectedUnit:a});if(e.selectedUnit.canAttack(n,e.selectedAttack)&&a)return e.selectedUnit.performAttack(e.selectedAttack,a),Object(G.a)({},e)}else{if("SELECT_ATTACK"===t.type)return Object(G.a)({},e,{selectedAttack:t.attack});if("UNDO_MOVEMENT"===t.type)return e.selectedUnit&&e.selectedUnit.resetMovement(),Object(G.a)({},e)}return e}},Q=Object(D.c)(Object(D.b)(P)),W=s()({render:function(){return r.a.createElement(u.a,{store:Q},r.a.createElement("div",{className:"container"},r.a.createElement(z,null)))}});n(91),n(93);l.a.render(r.a.createElement(W,null),document.getElementById("root"))}},[[45,2,1]]]);
//# sourceMappingURL=main.e60b782b.chunk.js.map