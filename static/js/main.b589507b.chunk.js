(this.webpackJsonpbudgettracker=this.webpackJsonpbudgettracker||[]).push([[0],{12:function(e,t,a){e.exports=a(19)},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(7),r=a.n(l),m=a(10),o=a(4),u=a(2),s=a(5),i=c.a.createContext({amount:"",company:"",note:"",total:0});var d=function(){var e=Object(n.useContext)(i),t=e.handleInput,a=e.handleSubmit;return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:a},c.a.createElement("div",{className:"card-group"},c.a.createElement("div",{className:"card"},c.a.createElement("img",{src:"./images/adding-money-clipart-18.png",className:"card-img-top",alt:"adding money image"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"How much was it?? "),c.a.createElement("input",{type:"integer",name:"amount",placeholder:"Enter Purchase Amount",onChange:function(e){return t(e)}}))),c.a.createElement("div",{className:"card"},c.a.createElement("img",{src:"./images/adding-money-place.png",className:"card-img-top",alt:"company image"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"Where'd you get it?? "),c.a.createElement("input",{type:"text",name:"company",placeholder:"Enter Company Name",onChange:function(e){return t(e)}}))),c.a.createElement("div",{className:"card"},c.a.createElement("img",{src:"./images/notes-clipart.jpg",className:"card-img-top",alt:"note image"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"What is it??"),c.a.createElement("input",{type:"text",name:"note",placeholder:"Enter Item Description",onChange:function(e){return t(e)}})))),c.a.createElement("button",{className:"btn btn-success",type:"submit"},"Submit")))},p=a(11);var E=function(e){return c.a.createElement("div",null,c.a.createElement(p.a,{striped:!0,bordered:!0,hover:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Amount"),c.a.createElement("th",null,"Company"),c.a.createElement("th",null,"Notes"))),c.a.createElement("tbody",null,e.expenses.map((function(e){return c.a.createElement("tr",null,c.a.createElement("td",null,"$",e.amount),c.a.createElement("td",null,e.company),c.a.createElement("td",null,e.note))})))))};var b=function(e){var t=Object(n.useContext)(i).total;return c.a.createElement("div",null,"Your total expense is: ",t)};var g=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)({amount:"",company:"",note:"",total:0}),p=Object(s.a)(r,2),g=p[0],v=p[1];return c.a.createElement("div",null,c.a.createElement("div",{className:"jumbotron jumbotron-fluid"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"display-4"},"Budget Tracker"))),c.a.createElement(i.Provider,{value:Object(u.a)(Object(u.a)({},g),{},{handleInput:function(e){var t=e.target,a=t.name,n=t.value;v(Object(u.a)(Object(u.a)({},g),{},Object(o.a)({},a,n)))},handleSubmit:function(e){e.preventDefault(),console.log("You added an expense of: "+g.amount+" "+g.company+" "+g.note),l([].concat(Object(m.a)(a),[{amount:g.amount,company:g.company,note:g.note}])),console.log(a)}})},c.a.createElement(d,null),c.a.createElement(E,{expenses:a}),c.a.createElement(b,null)))};a(17),a(18);var v=function(){return c.a.createElement(g,null)};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.b589507b.chunk.js.map