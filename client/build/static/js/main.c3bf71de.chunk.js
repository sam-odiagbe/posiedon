(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{51:function(e,t,a){e.exports=a(91)},56:function(e,t,a){},57:function(e,t,a){},88:function(e,t){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(46),l=a.n(c),s=(a(56),a(5)),i=a(6),o=a(8),u=a(7),m=a(10),d=a(9),p=a(13),h=a(11),E=(a(57),function(e){return r.a.createElement("div",{className:"tp-navigation"},r.a.createElement(p.b,{to:"/",exact:!0,className:"tp-brand"},"Poseidon"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.c,{to:"/withdrawal_request",activeClassName:"tp-nav-active"},"withdrawals")),r.a.createElement("li",null,r.a.createElement(p.c,{to:"/game",activeClassName:"tp-nav-active"},"game"))))}),b=new(a(49))("https://topner.herokuapp.com"),g={getgameobject:"GET-GAME",setgameobject:"SET-GAME",turngameonoroff:"TURN-ON-OFF",updategameobject:"UPDATE-GAME-OBJECT",newuserjoined:"NEW-USER",resetuser:"RESETUSER",getwithdrawalrequest:"GET-WITHDRAWAL-REQUESTS",requests:"RECIEVED-REQUEST"},v=g.setgameobject,j=g.newuserjoined,f=g.requests,w=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.socket,a=e.setGameObject,n=e.setWithdrawalRequest;t.on(v,function(e){a(e)}),t.on(j,function(e){}),t.on(f,function(e){n(e)})}},{key:"render",value:function(){return null}}]),t}(n.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.withdrawals,t=e?e.map(function(e){return r.a.createElement("div",{className:"tp-withdraw-request"},r.a.createElement("div",null,r.a.createElement("h2",null,e.user.username),r.a.createElement("h5",null,e.user.bank),r.a.createElement("h5",null,e.user.account_number),r.a.createElement("h5",null,"\u20a6 ",e.amount)),r.a.createElement("div",null,r.a.createElement("span",{style:{fontSize:40,color:"red"}},"\xd7")))}):"no withdrawals for now";return r.a.createElement("div",{className:"tp-withdrawals"},r.a.createElement("h4",{className:"tp-heading"},"Withdrawals"),t)}}]),t}(n.Component),G=a(21),k=a(50),N=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).handleInputChange=e.handleInputChange.bind(Object(m.a)(e)),e.updateGameObject=e.updateGameObject.bind(Object(m.a)(e)),e.state={game:{question:"",options:"",date:"",answer:""}},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleInputChange",value:function(e){var t=this.state.game;this.setState({game:Object(k.a)({},t,Object(G.a)({},e.target.id,e.target.value))})}},{key:"updateGameObject",value:function(e){e.preventDefault();var t=this.state.game,a=this.props.updateGameObject;a(t),e.target.reset()}},{key:"render",value:function(){var e=this.state.game,t=e.question,a=e.options,n=(e.possibleWinners,e.date),c=e.answer;return r.a.createElement("div",{className:"tp-create-game"},r.a.createElement("h4",{style:{padding:10,paddingLeft:0}},"Create a new game"),r.a.createElement("form",{onSubmit:this.updateGameObject},r.a.createElement("div",null,r.a.createElement("textarea",{className:"tp-input-field",placeholder:"question",id:"question",required:!0,value:t,onChange:this.handleInputChange})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",className:"tp-input-field",placeholder:"options",value:a,required:!0,id:"options",onChange:this.handleInputChange})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Answer",value:c,className:"tp-input-field",id:"answer",required:!0,onChange:this.handleInputChange})),r.a.createElement("div",null,r.a.createElement("input",{type:"date",id:"date",className:"tp-input-field",placeholder:"Choose date",onChange:this.handleInputChange,value:n})),r.a.createElement("div",null,r.a.createElement("button",{className:"tp-auth-btn"},"Create game"))))}}]),t}(n.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.game,t=e?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"".concat(e.gameison?"tp-on":"tp-off")},e.question.question),r.a.createElement("div",{className:"tp-options"},e.question.option.map(function(e){return r.a.createElement("div",{className:"tp-chip"},e)}),r.a.createElement("label",{className:"tp-container"},"set game on/off",r.a.createElement("input",{type:"checkbox",onChange:this.props.setGameState,checked:e.gameison}),r.a.createElement("span",{className:"tp-checkmark"})))):"Getting game....";return r.a.createElement("div",{className:"game"},r.a.createElement("h4",{className:"tp-heading"},"Game"),r.a.createElement("h4",null,"Current game"),r.a.createElement("div",{className:"tp-on-game"},t),r.a.createElement(N,{updateGameObject:this.props.updateGameObject}))}}]),t}(n.Component),C=g.getgameobject,q=g.turngameonoroff,S=g.resetuser,R=g.updategameobject,W=g.getwithdrawalrequest,I=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={game:null,totalSignedUp:null,withdrawals:[]},e.setGameObject=e.setGameObject.bind(Object(m.a)(e)),e.setWithdrawalRequest=e.setWithdrawalRequest.bind(Object(m.a)(e)),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"setGameObject",value:function(e){console.log(e),this.setState({game:e})}},{key:"updateGameObject",value:function(e){b.emit(R,e)}},{key:"setGameState",value:function(e){var t=e.target.checked;prompt("Are you sure you want to continue")&&(t?b.emit(q,!0):(b.emit(q,!1),b.emit(S)))}},{key:"setWithdrawalRequest",value:function(e){this.setState({withdrawals:e})}},{key:"componentDidMount",value:function(){b.emit(C),b.emit(W)}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(E,{setGameState:this.setGameState}),r.a.createElement("div",{className:"tp-main-container"},r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/withdrawal_request",exact:!0,render:function(t){return r.a.createElement(O,Object.assign({},t,{withdrawals:e.state.withdrawals}))}}),r.a.createElement(h.a,{path:"/game",exact:!0,render:function(t){return r.a.createElement(y,Object.assign({},t,{game:e.state.game,setGameState:e.setGameState,updateGameObject:e.updateGameObject}))}}))),r.a.createElement(w,{socket:b,setWithdrawalRequest:this.setWithdrawalRequest,setGameObject:this.setGameObject})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[51,1,2]]]);
//# sourceMappingURL=main.c3bf71de.chunk.js.map