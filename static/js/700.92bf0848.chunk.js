"use strict";(self.webpackChunkshop_api=self.webpackChunkshop_api||[]).push([[700],{700:function(n,e,t){t.r(e),t.d(e,{default:function(){return X}});var i,r,o,a,s,d,p,c,l,x,u,h,m,g,f,b,Z,j,y=t(3433),w=t(9439),v=t(6298),k=t(6727),z=t(2791),A=t(2007),C=t.n(A),q=t(8174),S=(t(5462),t(168)),_=t(1684),N=t(8617),F=_.Z.div(i||(i=(0,S.Z)(["\n  display: flex;\n  align-items: flex-start;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),B=_.Z.div(r||(r=(0,S.Z)(["\n  border: 10px solid #ece89d;\n  display: flex;\n  width: 800px;\n"]))),J=_.Z.ul(o||(o=(0,S.Z)(["\n  /* padding: 20px 0 20px;\n  margin: 0; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  row-gap: 10px;\n  list-style-type: square;\n\n  flex-wrap: wrap;\n"]))),E=_.Z.li(a||(a=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-top: 20px;\n  padding-right: 5px;\n  padding-left: 5px;\n  padding-bottom: 20px;\n  row-gap: 5px;\n  padding-bottom: 20px;\n  width: 220px;\n"]))),I=(0,_.Z)(v.l0)(s||(s=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: 400px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),O=((0,_.Z)(v.gN)(d||(d=(0,S.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  outline: none;\n  font: inherit;\n  /* width: 800px; */\n"]))),_.Z.button(p||(p=(0,S.Z)(["\n  display: inline-block;\n  width: 38px;\n  height: 38px;\n  border: 0;\n  background: none;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),(0,_.Z)(N.G4C)(c||(c=(0,S.Z)(["\n  width: 25px;\n  height: 25px;\n  /* position: absolute; */\n  right: 7px;\n  top: 9px;\n"]))),_.Z.label(l||(l=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  width: 250px;\n"])))),R=_.Z.p(x||(x=(0,S.Z)(["\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 12px;\n  letter-spacing: 0.03em;\n  margin-bottom: 10px;\n"]))),$=(_.Z.h2(u||(u=(0,S.Z)(["\n  font-weight: 500;\n  font-size: 26px;\n  line-height: 18px;\n  letter-spacing: 0.02em;\n  margin-bottom: 10px;\n"]))),_.Z.div(h||(h=(0,S.Z)(["\n  display: flex;\n  row-gap: 5px;\n"])))),M=_.Z.button(m||(m=(0,S.Z)(["\n  width: 40px;\n  border: 1px solid black;\n  border-radius: 60px;\n  color: #000000;\n  background-color: #e0d6ba;\n  cursor: pointer;\n  font-size: 15px;\n"]))),P=_.Z.p(g||(g=(0,S.Z)(["\n  padding: 5px;\n\n  font-size: 18px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n"]))),G=_.Z.p(f||(f=(0,S.Z)(["\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 6px;\n  letter-spacing: 0.01em;\n  margin-bottom: 10px;\n"]))),V=_.Z.button(b||(b=(0,S.Z)(["\n  width: 110px;\n  border: 1px solid black;\n  border-radius: 5px;\n  color: #000000;\n  background-color: #e0d6ba;\n  cursor: pointer;\n  font-size: 15px;\n"]))),D=_.Z.button(Z||(Z=(0,S.Z)(["\n  width: 200px;\n  border: 1px solid black;\n  border-radius: 5px;\n  color: #000000;\n  background-color: #e0d6ba;\n  cursor: pointer;\n  font-size: 15px;\n"]))),H=_.Z.div(j||(j=(0,S.Z)(["\n  margin-top: 15px;\n"]))),K=t(184),L=k.Ry().shape({name:k.Z_().required(),number:k.Rx().positive().required(),email:k.Z_().required()}),Q=function(){var n=(0,z.useState)((function(){return JSON.parse(localStorage.getItem("add"))||[]})),e=(0,w.Z)(n,2),t=e[0],i=e[1],r=(0,z.useState)([]),o=(0,w.Z)(r,2),a=o[0],s=o[1];(0,z.useEffect)((function(){localStorage.setItem("add",JSON.stringify(t))}),[t]);return(0,K.jsxs)(F,{children:[(0,K.jsx)(q.Ix,{}),(0,K.jsxs)("div",{children:[(0,K.jsx)(v.J9,{initialValues:{name:"",number:"",email:""},onSubmit:function(n,e){var i=e.resetForm;n?(s([{user:n,cart:t}]),console.log(a),i()):(console.log("error"),q.Am.error("Enter a request!",{autoClose:1500}))},validationSchema:L,children:(0,K.jsxs)(I,{children:[(0,K.jsxs)(O,{htmlFor:"name",children:[(0,K.jsx)(R,{children:"Name"}),(0,K.jsx)(v.gN,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,K.jsx)(v.Bc,{name:"name",component:"div"})]}),(0,K.jsxs)(O,{htmlFor:"number",children:[(0,K.jsx)(R,{children:"Phone"}),(0,K.jsx)(v.gN,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,K.jsx)(v.Bc,{name:"number",component:"div"})]}),(0,K.jsxs)(O,{htmlFor:"number",children:[(0,K.jsx)(R,{children:"Email"}),(0,K.jsx)(v.gN,{type:"email",name:"email",pattern:"[-a-zA-Z0-9~!$%^&*_=+}{'?]+(\\.[-a-zA-Z0-9~!$%^&*_=+}{'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(\\.[-a-zA-Z0-9_]+)*\\.([cC][oO][mM]))(:[0-9]{1,5})?",title:"email must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,K.jsx)(v.Bc,{name:"email",component:"div"})]}),(0,K.jsx)(D,{type:"submit",children:"Checkout"})]})}),(0,K.jsx)(H,{children:(0,K.jsxs)(R,{children:["total price:",t.reduce((function(n,e){return n+e.price*e.count}),0)]})})]}),(0,K.jsx)(B,{children:(0,K.jsx)(J,{children:t.length>0?t.map((function(n){return(0,K.jsxs)(E,{title:n.dish,children:[(0,K.jsx)(G,{children:n.dish}),(0,K.jsxs)(R,{children:["price:",n.price]}),(0,K.jsxs)($,{children:[(0,K.jsx)(M,{onClick:function(){return function(n){if(n.count>1){var e=n.count-1;i((0,y.Z)(t),n.count=e)}}(n)},children:"-"}),(0,K.jsx)(P,{children:n.count}),(0,K.jsx)(M,{onClick:function(){return function(n){var e=n.count+1;i((0,y.Z)(t),n.count=e)}(n)},children:"+"})]}),(0,K.jsx)(V,{onClick:function(){return function(n){var e=t.filter((function(e){return e.id!==n.id}));i(e)}(n)},type:"primary",children:"delete"})]},n.id)})):"cart is empty! :("})})]})};Q.prototype={onSubmit:C().func.isRequired};var T,U=Q,W=_.Z.main(T||(T=(0,S.Z)(["\n  margin: 10px 30px;\n"]))),X=function(n){var e=n.cart;return(0,K.jsx)(W,{children:(0,K.jsx)(U,{cart:e})})}}}]);
//# sourceMappingURL=700.92bf0848.chunk.js.map