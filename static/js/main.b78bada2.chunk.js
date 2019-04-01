(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(e,t,a){e.exports=a(278)},146:function(e,t,a){},198:function(e,t,a){},278:function(e,t,a){"use strict";a.r(t);var n,r=a(1),o=a.n(r),l=a(6),c=a.n(l),i=(a(146),a(25)),s=a(31),u=a(33),m=a(32),p=a(34),d=a(79),h=a(285),f=a(36),v=a(137);!function(e){e.SayHelloAsync="SayHelloAsync",e.SayHelloResult="SayHelloResult"}(n||(n={}));var b={message:"Loading...."};var g=Object(f.c)({hello:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.SayHelloAsync:return e;case n.SayHelloResult:return{message:t.message};default:return e}}}),O=a(41),y=a.n(O),E=a(47);var j={api:{endpoint:"https://asjo188lu2.execute-api.us-east-1.amazonaws.com/latest"}};function w(e){var t={name:e},a={method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return fetch(j.api.endpoint+"/hello",a).then(function(e){return e.json()}).then(function(e){return{message:e.message}}).catch(function(e){throw console.error("helloApi failed"+JSON.stringify(e)),"helloApi failed"})}var D=y.a.mark(F),S=y.a.mark(x);function F(e){var t;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(E.b)(w,e.name);case 2:return t=a.sent,a.next=5,Object(E.d)((r=t.message,{type:n.SayHelloResult,message:r}));case 5:case"end":return a.stop()}var r},D,this)}function x(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.e)(n.SayHelloAsync,F);case 2:case"end":return e.stop()}},S,this)}var C=y.a.mark(H);function H(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.a)([Object(E.c)(x)]);case 2:case"end":return e.stop()}},C,this)}var V,k=H,A=function(){var e=Object(v.a)(),t=Object(f.e)(g,Object(f.a)(e));return e.run(k),t},I=a(282),T=a(287),U=a(281),N=a(277),P=(a(198),a(284)),R=a(283),q=a(286),J=a(279),z=a(200),B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){e.preventDefault();var t=+a.props.form.getFieldValue("recordingDuration"),n=a.props.form.getFieldValue("recordingDurationUnit"),r=a.props.form.getFieldValue("fps"),o=+a.props.form.getFieldValue("numFrames"),l=+a.props.form.getFieldValue("intervalSec"),c=+a.props.form.getFieldValue("timelapseDuration"),i=a.props.form.getFieldValue("timelapseDurationUnit"),s=+z.duration(c,i).as("seconds");console.log("\n      formTimelapseDuration=".concat(c,"\n      formTimelapseDurationSec=").concat(s,"\n      formTimelapseDurationUnit=").concat(i,"\n      formRecordingDuration=").concat(t,"\n      formRecordingDurationUnit=").concat(n,"\n      formFps=").concat(r,"\n      formNumFrames=").concat(o,"\n      formIntervalSec=").concat(l,"\n      "));var u=r*s,m=u*l,p=z.duration(m,"seconds").as(n);a.props.form.setFieldsValue({recordingDuration:p,numFrames:u}),console.log("\n      numFrames=".concat(u,"\n      recordingDurationSec=").concat(m,"\n      recordingDuration=").concat(p,"\n      ")),gtag("event","UseTimelapseTool")},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=e("timelapseDurationUnit",{initialValue:"seconds"})(o.a.createElement(P.a,null,o.a.createElement(P.a.Option,{value:"seconds"},"sec"),o.a.createElement(P.a.Option,{value:"minutes"},"min"),o.a.createElement(P.a.Option,{value:"hours"},"hr"),o.a.createElement(P.a.Option,{value:"days"},"day"))),a=e("recordingDurationUnit",{initialValue:"minutes"})(o.a.createElement(P.a,null,o.a.createElement(P.a.Option,{value:"seconds"},"sec"),o.a.createElement(P.a.Option,{value:"minutes"},"min"),o.a.createElement(P.a.Option,{value:"hours"},"hr"),o.a.createElement(P.a.Option,{value:"days"},"day"))),n=e("recordingIntervalUnit",{initialValue:"seconds"})(o.a.createElement(P.a,null,o.a.createElement(P.a.Option,{value:"seconds"},"sec"),o.a.createElement(P.a.Option,{value:"minutes"},"min"),o.a.createElement(P.a.Option,{value:"hours"},"hr"),o.a.createElement(P.a.Option,{value:"days"},"day")));return o.a.createElement(R.a,{labelCol:{span:9},wrapperCol:{span:13},onChange:this.handleChange,onSubmit:this.handleChange},o.a.createElement(R.a.Item,{label:"Video Duration"},e("timelapseDuration",{initialValue:10,rules:[{required:!1,message:"Please input the expected timelapse length."}]})(o.a.createElement(q.a,{autoFocus:!0,addonAfter:t,style:{width:"100%"}}))),o.a.createElement(R.a.Item,{label:"Frames / sec"},e("fps",{initialValue:30,rules:[{required:!1,message:"Please input the expected fps."}]})(o.a.createElement(q.a,{style:{width:"100%"}}))),o.a.createElement(R.a.Item,{label:"Number of frames"},e("numFrames",{rules:[{required:!1,message:"Please input the expected total number of frames."}]})(o.a.createElement(q.a,{style:{width:"100%"}}))),o.a.createElement(R.a.Item,{label:"Capture Interval"},e("intervalSec",{initialValue:6,rules:[{required:!1,message:"Please input the expected frame interval."}]})(o.a.createElement(q.a,{addonAfter:n,style:{width:"100%"}}))),o.a.createElement(R.a.Item,{label:"Capture Duration"},e("recordingDuration",{rules:[{required:!1,message:"Please input the expected recording time."}]})(o.a.createElement(q.a,{addonAfter:a,style:{width:"100%"}}))),o.a.createElement(R.a.Item,{wrapperCol:{span:24,offset:0}},o.a.createElement(J.a,{type:"primary",size:"large",htmlType:"submit"},"Submit")))}}]),t}(o.a.Component),W=R.a.create({name:"timelapse"})(B),L=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(W,null)))}}]),t}(o.a.Component);!function(e){e.Home="Home"}(V||(V={}));var $=function e(){Object(i.a)(this,e)};$.Home={component:L,id:V.Home,path:"/",title:"Timelapse Solver"};var G=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(U.a,null,o.a.createElement(N.a,{path:$.Home.path,component:$.Home.component}))}}]),t}(o.a.Component),K=Object(I.a)(G),M=T.a.Content,Q=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(T.a,{style:{minHeight:"100vh"}},o.a.createElement(T.a,null,o.a.createElement(M,{style:{margin:"16px 16px"}},o.a.createElement(K,null)," "))))}}]),t}(o.a.Component),X=Object(I.a)(Object(d.b)(null,null)(Q)),Y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,{store:A()},o.a.createElement(h.a,null,o.a.createElement(X,null)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[141,2,1]]]);
//# sourceMappingURL=main.b78bada2.chunk.js.map