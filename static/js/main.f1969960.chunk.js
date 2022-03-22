(this["webpackJsonpappointment-book"]=this["webpackJsonpappointment-book"]||[]).push([[0],{31:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(19),i=n.n(a),s=n(17),r=n(4),j=n(11),o=n(2),l=n(0),u=function(t){var e=t.name,n=t.onChange,c=t.contacts;return Object(l.jsxs)("select",{name:e,onChange:n,children:[Object(l.jsx)("option",{value:"",selected:"selected",children:"No Contact Selected"},-1),c.map((function(t){return Object(l.jsx)("option",{value:t,children:t},t)}))]})},b=function(t){var e=t.contacts,n=t.title,c=t.setTitle,a=t.contact,i=t.setContact,s=t.date,j=t.setDate,o=t.time,b=t.setTime,d=t.handleSubmit;return Object(l.jsxs)("form",{onSubmit:d,children:[Object(l.jsx)("label",{children:Object(l.jsx)("input",{type:"text",name:"title",value:n,onChange:function(t){return c(t.target.value)},required:!0,placeholder:"Appointment Title"})}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{children:Object(l.jsx)(u,{name:"contact",value:a,contacts:e.map((function(t){return t.name})),onChange:function(t){return i(t.target.vaue)},placeholder:"Appointment Contact"})}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{children:Object(l.jsx)("input",{type:"date",name:"date",min:function(){var t=(new Date).toLocaleDateString("en-US").split("/"),e=Object(r.a)(t,3),n=e[0],c=e[1],a=e[2];return"".concat(a,"-").concat(n.padStart(2,"0"),"-").concat(c.padStart(2,"0"))}(),value:s,onChange:function(t){return j(t.target.value)},required:!0})}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{children:Object(l.jsx)("input",{type:"time",name:"time",value:o,onChange:function(t){return b(t.target.value)},required:!0})}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"submit",value:"Add Appointment"})]})},d=function(t){var e=t.tile;return Object(l.jsx)("div",{className:"tile-container",children:Object.values(e).map((function(t,e){return Object(l.jsx)("p",{className:"".concat(0===e?"tile-title":""," tile"),children:t},e)}))})},O=function(t){var e=t.tiles;return Object(l.jsx)("div",{children:e.map((function(t,e){return Object(l.jsx)(d,{tile:t},e)}))})},m=function(t){var e=t.appointments,n=t.addAppointment,a=t.contacts,i=Object(c.useState)(""),s=Object(r.a)(i,2),j=s[0],o=s[1],u=Object(c.useState)(a.length>0?a[0].name:""),d=Object(r.a)(u,2),m=d[0],p=d[1],h=Object(c.useState)(""),x=Object(r.a)(h,2),v=x[0],f=x[1],S=Object(c.useState)(""),g=Object(r.a)(S,2),C=g[0],A=g[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:"Add Appointment"}),Object(l.jsx)(b,{contacts:a,title:j,setTitle:o,contact:m,setContact:p,date:v,setDate:f,time:C,setTime:A,handleSubmit:function(t){t.preventDefault(),n(j,m,v,C),o(""),p(""),f(""),A("")}})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:"Appointments"}),Object(l.jsx)(O,{tiles:e})]})]})},p=function(t){var e=t.name,n=t.setName,c=t.phone,a=t.setPhone,i=t.email,s=t.setEmail,r=t.handleSubmit;return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:r,children:[Object(l.jsx)("input",{type:"text",name:"name",value:e,onChange:function(t){return n(t.target.value)},required:!0,placeholder:"Contact Name"}),Object(l.jsx)("input",{type:"tel",name:"phone",pattern:"((\\(\\d{3}\\) ?)|(\\d{3}-))?\\d{3}-\\d{4}",value:c,onChange:function(t){return a(t.target.value)},required:!0,placeholder:"Phone Number"}),Object(l.jsx)("input",{type:"email",name:"email",value:i,onChange:function(t){return s(t.target.value)},placeholder:"Email Address"}),Object(l.jsx)("input",{type:"submit",value:"Add Contact"})]})})},h=function(t){var e=t.contacts,n=t.addContact,a=Object(c.useState)(""),i=Object(r.a)(a,2),s=i[0],j=i[1],o=Object(c.useState)(""),u=Object(r.a)(o,2),b=u[0],d=u[1],m=Object(c.useState)(""),h=Object(r.a)(m,2),x=h[0],v=h[1],f=Object(c.useState)(!1),S=Object(r.a)(f,2),g=S[0],C=S[1];return Object(c.useEffect)((function(){void 0!==e.find((function(t){return t.name===s}))?C(!0):C(!1)}),[s,e,g]),Object(l.jsxs)("div",{children:[Object(l.jsxs)("section",{children:[Object(l.jsxs)("h2",{children:["Add Contact ",g?"* Name Already Exists":""]}),Object(l.jsx)(p,{name:s,setName:j,phone:b,setPhone:d,email:x,setEmail:v,handleSubmit:function(t){t.preventDefault(),g||(n(s,b,x),j(""),d(""),v(""))}})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:"Contacts"}),Object(l.jsx)(O,{tiles:e})]})]})};var x=function(){var t=Object(c.useState)((function(){var t=localStorage.getItem("contacts");return JSON.parse(t)||[]})),e=Object(r.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)((function(){var t=localStorage.getItem("appointments");return JSON.parse(t)||[]})),u=Object(r.a)(i,2),b=u[0],d=u[1],O="/contacts",p="/appointments";return Object(c.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n)),localStorage.setItem("appointments",JSON.stringify(b))}),[n,b]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("nav",{children:[Object(l.jsx)(j.b,{to:O,activeClassName:"active",children:"Contacts"}),Object(l.jsx)(j.b,{to:p,activeClassName:"active",children:"Appointments"})]}),Object(l.jsx)("main",{children:Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{exact:!0,path:"/",children:Object(l.jsx)(o.a,{to:O})}),Object(l.jsx)(o.b,{path:O,children:Object(l.jsx)(h,{contacts:n,addContact:function(t,e,c){a([].concat(Object(s.a)(n),[{name:t,phone:e,email:c}]))}})}),Object(l.jsx)(o.b,{path:p,children:Object(l.jsx)(m,{appointments:b,addAppointment:function(t,e,n,c){d([].concat(Object(s.a)(b),[{title:t,contact:e,date:n,time:c}]))},contacts:n})})]})})]})};i.a.render(Object(l.jsx)(j.a,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.f1969960.chunk.js.map