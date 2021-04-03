(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var i=c(1),s=c.n(i),n=c(9),a=c.n(n),r=(c(17),c(18),c(3)),o=Object(i.createContext)(),j=c(0);var d=function(e){var t=Object(i.useState)("none"),c=Object(r.a)(t,2),s=(c[0],c[1],Object(i.useState)(window.innerWidth)),n=Object(r.a)(s,2),a=n[0],d=n[1],l=function(){d(window.innerWidth)};return Object(i.useEffect)((function(){return window.addEventListener("resize",l),function(){return window.removeEventListener("resize",l)}}),[]),Object(j.jsx)(o.Provider,{value:[a,d],children:e.children})};c(20);var l=function(e){var t=Object(i.useContext)(o),c=Object(r.a)(t,2),s=c[0];return c[1],Object(j.jsx)("div",{className:"alert-div",children:Object(j.jsx)("div",{id:"alert-box",style:{display:s},className:"animate__animated animate__slideInDown animate__faster",children:Object(j.jsx)("p",{children:"Mail Sent!"})})})},b=(c(21),c(5)),h=c.n(b),u=c.p+"static/media/MyLogo.3bb2c46b.png",m=c(10),x=c(8);var f=function(){var e=Object(i.useContext)(o),t=Object(r.a)(e,1)[0],c=Object(i.useState)(!1),s=Object(r.a)(c,2),n=s[0],a=s[1],d=Object(i.useRef)(),l=Object(i.useRef)(),b=function(){t<620&&(l.current.style.display=n?"none":"flex",a(!n))};return Object(j.jsxs)("nav",{children:[Object(j.jsxs)("div",{className:"left-nav-div",children:[Object(j.jsx)("img",{src:u,alt:"logo"}),Object(j.jsx)("button",{ref:d,onClick:b,children:Object(j.jsx)(m.a,{style:{height:"30px",width:"30px"},icon:n?x.b:x.a})})]}),Object(j.jsxs)("section",{style:{display:t<620?"none":"flex"},ref:l,className:"link-section",children:[Object(j.jsx)(h.a,{onClick:b,href:"#about-div",children:"About"}),Object(j.jsx)(h.a,{onClick:b,href:"#projects-div",children:"Projects"}),Object(j.jsx)(h.a,{onClick:b,href:"#contact-div",children:"Contact"})]})]})};c(27);var O=function(){return Object(j.jsxs)("div",{className:"me-div",children:[Object(j.jsxs)("section",{children:[Object(j.jsx)("section",{className:"hi",children:Object(j.jsx)("div",{className:"animate__animated animate__tada animate__infinite\tinfinite animate__slow",children:Object(j.jsx)("span",{children:"Hi!"})})}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{children:"I'm Shobhit Sagar."}),Object(j.jsx)("br",{}),Object(j.jsx)("small",{children:"I develop apps and websites."})]}),Object(j.jsx)("div",{className:"shadow"})]})};c(28);var p=function(){return Object(j.jsxs)("div",{id:"about-div",className:"about-div",children:[Object(j.jsx)("h1",{children:"About"}),Object(j.jsx)("div",{style:{width:"40px",height:"1px",backgroundColor:"#000"}}),Object(j.jsxs)("div",{style:{marginTop:"10px",fontSize:"20px"},children:[Object(j.jsx)("p",{children:"My name is Shobhit Sagar. I'm a freelancer. I was born and raised in Ghaziabad."}),Object(j.jsx)("p",{children:"I like to travel. I believe travelling gives you a new perspective to everything. You get to know a lot about the different cultures, their history, the language and all the small unique things every place has to offer."})]})]})};c(29),c.p;var v=function(e){return e.proj,Object(j.jsx)("div",{className:"proj-div"})},g=c(11),w=c.n(g);var y={height:"auto",padding:"80px 0"},_={margin:"0 0 60px 0"},N={width:"80%",margin:"auto",display:"flex",justifyContent:"center",alignItems:"center",flexFlow:"row wrap"},k=function(){var e=Object(i.useState)([{id:"1",title:"Demo Project 1",desc:"This is a demo project 1. I created this on 15th feb 20202."},{id:"2",title:"Demo Project 2",desc:"This is a demo project 2. I created this on 15th feb 20202."},{id:"2",title:"Demo Project 2",desc:"This is a demo project 2. I created this on 15th feb 20202."},{id:"2",title:"Demo Project 2",desc:"This is a demo project 2. I created this on 15th feb 20202."},{id:"2",title:"Demo Project 2",desc:"This is a demo project 2. I created this on 15th feb 20202."},{id:"2",title:"Demo Project 2",desc:"This is a demo project 2. I created this on 15th feb 20202."},{id:"2",title:"Demo Project 2",desc:"This is a demo project 2. I created this on 15th feb 20202."},{id:"2",title:"Demo Project 2",desc:"This is a demo project 2. I created this on 15th feb 20202."}]),t=Object(r.a)(e,2),c=t[0];return t[1],Object(j.jsxs)("div",{id:"projects-div",style:y,children:[Object(j.jsx)("h1",{style:_,children:"Projects"}),Object(j.jsx)("div",{style:N,children:c.map((function(e){return Object(j.jsx)(v,{proj:e},w()())}))})]})},I=c(12),C=c.n(I);c(32);var S=function(){var e=Object(i.useContext)(o),t=Object(r.a)(e,1)[0];return Object(j.jsxs)("div",{id:"contact-div",className:"contact-div",children:[Object(j.jsx)("h1",{children:"Contact"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),C.a.sendForm("gmail_devss","emailjs_gmail_template",e.target,"user_ivxeQpuPYHryzeUITadwL").then((function(e){t("block"),setTimeout((function(){t("none")}),1300)}),(function(e){alert("Mail not Sent!")})),e.target.reset()},children:[Object(j.jsx)("input",{type:"text",placeholder:"Full Name",name:"from_name"}),Object(j.jsx)("input",{type:"text",placeholder:"Email*",name:"email",required:!0}),Object(j.jsx)("input",{type:"text",placeholder:"Subject",name:"subject"}),Object(j.jsx)("textarea",{name:"message",rows:"10",placeholder:"Message*",required:!0}),Object(j.jsx)("button",{style:{color:"black"},children:"Send"})]})]})},P=(c(33),c.p+"static/media/MyIcon.4313a8ae.png");var T=function(){return Object(j.jsx)("footer",{id:"footer",className:"container-fluid text-center container-fluid2",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-sm-4",children:[Object(j.jsx)("h3",{children:"Contact Us"}),Object(j.jsx)("br",{}),Object(j.jsx)("h4",{children:"Our address and contact info here."})]}),Object(j.jsxs)("div",{className:"col-sm-4",children:[Object(j.jsx)("h3",{children:"Connect"}),Object(j.jsx)("a",{href:"https://www.facebook.com/yogesh.sagar.549",target:"_blank",className:"fa fa-facebook"}),Object(j.jsx)("a",{href:"https://twitter.com/shobhitsagar01",target:"_blank",className:"fa fa-twitter"}),Object(j.jsx)("a",{href:"https://www.instagram.com/sudo_codes.ig/",target:"_blank",className:"fa fa-instagram"}),Object(j.jsx)("a",{href:"https://www.linkedin.com/in/shobhit-sagar-50765414b/",target:"_blank",className:"fa fa-linkedin"}),Object(j.jsx)("a",{href:"https://www.youtube.com/channel/UCyfy7slnkEvjN6Q_ua9XiYg",target:"_blank",className:"fa fa-youtube"})]}),Object(j.jsx)("div",{className:"col-sm-4",children:Object(j.jsx)("img",{style:{width:"100px",height:"100px"},src:P,className:"icon"})})]})})};var D=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(d,{children:[Object(j.jsx)(l,{}),Object(j.jsx)(f,{}),Object(j.jsx)(O,{}),Object(j.jsx)(p,{}),Object(j.jsx)(k,{}),Object(j.jsx)(S,{}),Object(j.jsx)(T,{})]})})};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root"))}],[[34,1,2]]]);
//# sourceMappingURL=main.0fc8d08b.chunk.js.map