(this["webpackJsonpfeedback-app"]=this["webpackJsonpfeedback-app"]||[]).push([[0],{12:function(e,a,n){},13:function(e,a,n){},15:function(e,a,n){},16:function(e,a,n){"use strict";n.r(a);var c=n(1),t=n.n(c),s=n(3),i=n.n(s),r=n(4),o=n(5),m=n(7),j=n(6),l=(n(12),n(13),n(0)),p=function(e){var a=e.imageUrl,n=e.name,c=e.changeFeedbackPage;console.log(a);return Object(l.jsxs)("li",{className:"emoji-container",children:[Object(l.jsx)("img",{className:"emoji-image",src:a,alt:n,onClick:function(){c()}}),Object(l.jsx)("p",{className:"emoji-name",children:n})]})},d=function(e){Object(m.a)(n,e);var a=Object(j.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,t=new Array(c),s=0;s<c;s++)t[s]=arguments[s];return(e=a.call.apply(a,[this].concat(t))).state={feedbackGiven:!1},e.changeFeedbackPage=function(){e.setState((function(e){return{feedbackGiven:!e.feedbackGiven}}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,a=this.state.feedbackGiven,n=this.props.resources,c=n.emojis,t=n.loveEmojiUrl;return Object(l.jsxs)("div",{className:"feedbackApp-bg-container",children:[!a&&Object(l.jsxs)("div",{className:"feedbackApp-container",children:[Object(l.jsx)("h1",{className:"feedback-ques",children:"How satisfied are you with our customer support performance?"}),Object(l.jsx)("ul",{className:"emojis-bg-container",children:c.map((function(a){return Object(l.jsx)(p,{imageUrl:a.imageUrl,name:a.name,changeFeedbackPage:e.changeFeedbackPage},a.id)}))})]}),a&&Object(l.jsxs)("div",{className:"feedbackApp-container",children:[Object(l.jsx)("img",{className:"love-emoji",src:t,alt:"love emoji"}),Object(l.jsx)("h1",{className:"thankYou-heading",children:"Thank You!"}),Object(l.jsx)("p",{children:"We will use your feedback to improve our customer support performance"})]})]})}}]),n}(c.Component),b=d,u=(n(15),{emojis:[{id:0,name:"Sad",imageUrl:"https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png"},{id:1,name:"None",imageUrl:"https://assets.ccbp.in/frontend/react-js/none-emoji-img.png"},{id:2,name:"Happy",imageUrl:"https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png"}],loveEmojiUrl:"https://assets.ccbp.in/frontend/react-js/love-emoji-img.png"}),h=function(){return Object(l.jsx)(b,{resources:u})};i.a.render(Object(l.jsx)(t.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.625fa833.chunk.js.map