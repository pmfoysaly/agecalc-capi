(this.webpackJsonpagecalc=this.webpackJsonpagecalc||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(4),o=a.n(c),u=(a(10),a(1)),b=a(5),i=a(0),s=Object(n.createContext)();function l(e){var t=e.children,a=Object(n.useState)({iYear:"",iMonth:"",iDay:"",iDate:(new Date).toLocaleDateString(),cYear:(new Date).getFullYear(),cMonth:(new Date).getMonth()+1,cDay:(new Date).getDate(),cDate:(new Date).toLocaleDateString(),aaYear:0,aaMonth:0,aaDay:0,naYear:0,naMonth:0,naDay:0,nbMonth:0,nbDay:0,yearOff:!1,monthOff:!0,dayOff:!0,submitOff:!0,color:"orange",message:"First, tell me your birth year!"}),r=Object(b.a)(a,2),c=r[0],o=r[1];return Object(i.jsx)(s.Provider,{value:Object(u.a)(Object(u.a)({},c),{},{setState:o}),children:t})}function h(){var e=Object(n.useContext)(s),t=e.iYear,a=e.iMonth,r=e.iDay,c=e.cYear,o=e.maxMonth,b=e.maxDay,l=Object(n.useContext)(s),h=l.naYear,f=l.naMonth,j=l.naDay,O=l.color,m=l.message,d=l.setState;return Object(n.useEffect)((function(){""==a&&""==r&&(t<=0&&(O="red",m="Year should be greater than 0!"),""==t&&(O="orange",m="First, tell me your birth year!"),t>c&&(O="red",m="Year should be less than or equal ".concat(c,"!")),""!=t&&t>0&&t<=c&&""==a&&(O="green",m="Well. Now tell me your birth month!")),d((function(e){return Object(u.a)(Object(u.a)({},e),{},{color:O,message:m})})),t>0&&t<=c&&""!=a&&""==r&&(a<=0&&(O="red",m="Month should be greater than 0!"),a>o&&(O="red",m="Month should be less than or equal ".concat(o,"!")),a>0&&a<=o&&(O="green",m="Well. Now tell me your birth day!")),d((function(e){return Object(u.a)(Object(u.a)({},e),{},{color:O,message:m})})),function(){if(t>0&&t<=c&&""!=a&&""!=r&&(r<=0&&(O="red",m="Day should be greater than 0!"),r>b&&(O="red",m="Day should be less than or equal ".concat(b,"!")),r>0&&r<=b)){O="green";var e="Good";29==b&&(e="Hey! you born in leapYear",2==a&&r==b&&(e="WoW! you born in leapYear day")),m="".concat(e,". Submit to see your age!")}d((function(e){return Object(u.a)(Object(u.a)({},e),{},{color:O,message:m})}))}()}),[t,a,r]),Object(n.useEffect)((function(){!function(){j=Number(j),f=Number(f);var e=(h=Number(h))>1?"years":"year",t=f>1?"months":"month",a=j>1?"days":"day";if(h>0&&0===f&&0===j){var n="";18===h&&(n=" and now 18+"),O="green",m="".concat("(=!! Happy BirthDay !!=)","\n You have already spent ").concat(h," ").concat(e).concat(n,". Good luck for the future. Be happy!")}h>0&&(0!==f||0!==j)&&(O="green",m="You have already spent ".concat(h," ").concat(e,". Good luck for the future. Be happy!"));0===h&&0!==f&&(O="green",m="You have already spent ".concat(f," ").concat(t,". Good luck for the future. Be happy!"));0===h&&0===f&&0!==j&&(O="green",m="You have already spent ".concat(j," ").concat(a,". Good luck for the future. Be happy!"));d((function(e){return Object(u.a)(Object(u.a)({},e),{},{color:O,message:m})}))}()}),[h,f,j]),Object(i.jsx)("div",{className:"messagebox ".concat(O),children:Object(i.jsx)("p",{className:"message",children:m})})}function f(){var e=Object(n.useContext)(s),t=e.iYear,a=e.iMonth,r=e.iDay,c=e.yearOff,o=e.monthOff,b=e.setState,l=Object(n.useContext)(s),h=l.cYear,f=l.cMonth,j=l.cDay,O=l.dayOff,m=l.submitOff,d=l.iDate;var y=[4,6,9,11];return Object(i.jsxs)("div",{className:"inputs",children:[Object(i.jsx)("input",{type:"number",placeholder:"year",disabled:c,onChange:function(e){b((function(t){return Object(u.a)(Object(u.a)({},t),{},{iYear:e.target.value})})),function(e){var t=!0;e=Number(e),h=Number(h),e>0&&e<=h?t=!1:(a="",r="",O=!0,m=!0);var n={monthOff:t,iMonth:a,iDay:r,dayOff:O,submitOff:m};b((function(e){return Object(u.a)(Object(u.a)({},e),n)}))}(e.target.value)},value:t}),Object(i.jsx)("input",{type:"number",placeholder:"month",disabled:o,onChange:function(e){b((function(t){return Object(u.a)(Object(u.a)({},t),{},{iMonth:e.target.value})})),function(e){var a=!0,n=function(){var e=12;Number(t)===Number(h)&&(e=f);return e}();(e=Number(e))>0&&e<=n?a=!1:(r="",m=!0);var c={dayOff:a,maxMonth:n,iDay:r,submitOff:m};b((function(e){return Object(u.a)(Object(u.a)({},e),c)}))}(e.target.value)},value:a}),Object(i.jsx)("input",{type:"number",placeholder:"day",disabled:O,onChange:function(e){b((function(t){return Object(u.a)(Object(u.a)({},t),{},{iDay:e.target.value})})),function(e){var n=!0,r=function(){var e=31;t=Number(t),h=Number(h),a=Number(a),f=Number(f),y.includes(a)&&(e=30);2===a&&(e=(t=Number(t))%4===0&&t%100!==0||t%400===0?29:28);t===h&&a===f&&(e=Number(j)-1);return e}();(e=Number(e))>0&&e<=r&&(n=!1);b((function(e){return Object(u.a)(Object(u.a)({},e),{},{submitOff:n,maxDay:r})}))}(e.target.value)},value:r}),Object(i.jsx)("input",{type:"submit",value:"submit",disabled:m,onClick:function(e){e.preventDefault(),d="".concat(a,"/").concat(r,"/").concat(t),b((function(e){return Object(u.a)(Object(u.a)({},e),{},{iDate:d})}))}})]})}function j(){var e=Object(n.useContext)(s),t=e.iDate,a=e.cDate,r=e.iYear,c=e.iMonth,o=e.iDay,b=e.cYear,l=e.cMonth,h=e.cDay,f=e.setState,j=Object(n.useContext)(s),O=j.aaYear,m=j.aaMonth,d=j.aaDay,y=j.naYear,g=j.naMonth,D=j.naDay,v=j.nbMonth,p=j.nbDay;function N(e,t){return t>1?"".concat(e,"s"):e}function x(e){return e<10?"0".concat(e):e}return r=Number(r),c=Number(c),o=Number(o),b=Number(b),l=Number(l),h=Number(h),O=Number(O),m=Number(m),d=Number(d),y=Number(y),g=Number(g),D=Number(D),v=Number(v),p=Number(p),Object(n.useEffect)((function(){!function(){var e=new Date(t).getTime()/1e3,n=new Date(a).getTime()/1e3-e;O=Math.floor(n/31104e3),m=Math.floor(n/2592e3%12),d=Math.floor(n/86400%30),f((function(e){return Object(u.a)(Object(u.a)({},e),{},{aaYear:O,aaMonth:m,aaDay:d})}))}(),function(){r=r<=0?b:r,c=c<=0?l:c,o=o<=0?h:o,y=Math.abs(b-r),g=Math.abs(l-c),D=Math.abs(h-o),c>l&&(y--,g=12-g);o>h&&(g--,D=30-D);g<0&&(y--,g=11);f((function(e){return Object(u.a)(Object(u.a)({},e),{},{naYear:y,naMonth:g,naDay:D})}))}(),function(){v=0,p=0,(0!==D||0!==g||0!==y)&&(v=Math.abs(g-l),p=Math.abs(30-D));p>=30&&(v++,p=0);f((function(e){return Object(u.a)(Object(u.a)({},e),{},{nbMonth:v,nbDay:p})}))}()}),[t]),Object(i.jsxs)("div",{className:"outputs",children:[Object(i.jsxs)("h6",{children:["ActualAge:"," ",Object(i.jsxs)("p",{children:[x(O)," ",N("year",O),", ",x(m)," ",N("month",m),", ",x(d)," ",N("day",d),"."]})]}),Object(i.jsxs)("h6",{children:["NormalAge:"," ",Object(i.jsxs)("p",{children:[x(y)," ",N("year",y),", ",x(g)," ",N("month",g),", ",x(D)," ",N("day",D),"."]})]}),Object(i.jsxs)("h6",{children:["NextBirthDay:"," ",Object(i.jsxs)("p",{children:[x(v)," ",N("month",v),", ",x(p)," ",N("day",p),"."]})]})]})}function O(){return Object(i.jsxs)("div",{className:"agecalc",children:[Object(i.jsx)("h3",{className:"title",children:"Age Calculator"}),Object(i.jsxs)(l,{children:[Object(i.jsx)(h,{}),Object(i.jsx)(f,{}),Object(i.jsx)(j,{})]})]})}function m(){return Object(i.jsx)(r.a.Fragment,{children:Object(i.jsx)(O,{})})}var d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),d()}},[[12,1,2]]]);