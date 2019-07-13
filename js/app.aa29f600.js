(function(e){function t(t){for(var r,a,s=t[0],l=t[1],c=t[2],p=0,m=[];p<s.length;p++)a=s[p],i[a]&&m.push(i[a][0]),i[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01ca":function(e,t,n){"use strict";var r=n("1c2b"),i=n.n(r);i.a},"034f":function(e,t,n){"use strict";var r=n("64a9"),i=n.n(r);i.a},"1c2b":function(e,t,n){},"2c02":function(e,t,n){"use strict";var r=n("f3a5"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-small",attrs:{id:"app"}},[n("h1",[e._v("Employees")]),n("employee-form",{on:{"add:employee":e.addEmployee}}),n("employee-table",{attrs:{employees:e.employees},on:{"delete:employee":e.deleteEmployee,"edit:employee":e.editEmployee}})],1)},o=[],a=n("75fc"),s=(n("96cf"),n("3b8d")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"employee-table"}},[e.employees.length<1?n("p",{staticClass:"empty-table"},[e._v("\n    No employees :C\n    ")]):n("table",[e._m(0),n("tbody",e._l(e.employees,function(t){return n("tr",{key:t.id},[e.editing===t.id?n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"employee.name"}],attrs:{type:"text"},domProps:{value:t.name},on:{input:function(n){n.target.composing||e.$set(t,"name",n.target.value)}}})]):n("td",[e._v(e._s(t.name))]),e.editing===t.id?n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"employee.email"}],attrs:{type:"email"},domProps:{value:t.email},on:{input:function(n){n.target.composing||e.$set(t,"email",n.target.value)}}})]):n("td",[e._v(e._s(t.email))]),e.editing===t.id?n("td",[n("button",{on:{click:function(n){return e.editEmployee(t)}}},[e._v("Save")]),n("button",{staticClass:"muted-button",on:{click:function(n){return e.cancelEdit(t)}}},[e._v("Cancel")])]):n("td",[n("button",{on:{click:function(n){return e.$emit("delete:employee",t.id)}}},[e._v("Delete")]),n("button",{on:{click:function(n){return e.editMode(t.id)}}},[e._v("Edit")])])])}),0)])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("Employee Name")]),n("th",[e._v("Employee Mail")]),n("th",[e._v("Actions ")])])])}],u=(n("7f7f"),{name:"employee-table",props:{employees:Array},data:function(){return{editing:null}},methods:{editMode:function(e){this.editing=e,this.cachedEmployee=Object.assign({},employee),this.editing=employee.id},cancelEdit:function(e){Object.assign(e,this.cachedEmployee),this.editing=null},editEmployee:function(e){""!==e.name&&""!==e.email&&(this.$emit("edit:employee",e.id,e),this.editing=null)}}}),p=u,m=(n("2c02"),n("2877")),d=Object(m["a"])(p,l,c,!1,null,"5dc5eee4",null),f=d.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"employee-form"}},[n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("label",{attrs:{for:""}},[e._v("Employee Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.name,expression:"employee.name"}],ref:"first",class:{"has-error":e.submitting&&e.invalidName},attrs:{type:"text"},domProps:{value:e.employee.name},on:{focus:e.clearStatus,keypress:e.clearStatus,input:function(t){t.target.composing||e.$set(e.employee,"name",t.target.value)}}}),n("label",{attrs:{for:""}},[e._v("Employee E-Mail")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.email,expression:"employee.email"}],class:{"has-error":e.submitting&&e.invalidEmail},attrs:{type:"email"},domProps:{value:e.employee.email},on:{focus:e.clearStatus,input:function(t){t.target.composing||e.$set(e.employee,"email",t.target.value)}}}),e.error&&e.submitting?n("p",{staticClass:"error-message"},[e._v("Please fill out all required fields")]):e._e(),e.success?n("p",{staticClass:"success-message"},[e._v("Succeded bruh")]):e._e(),n("button",[e._v("Add Employee")])])])},y=[],v={name:"employee-form",data:function(){return{submitting:!1,error:!1,success:!1,employee:{name:"",email:""}}},methods:{handleSubmit:function(){this.submitting=!0,this.clearStatus(),this.invalidName||this.invalidEmail?this.error=!0:(this.$emit("add:employee",this.employee),this.$refs.first.focus(),this.employee={name:"",email:""},this.error=!1,this.success=!0,this.submitting=!1)},clearStatus:function(){this.success=!1,this.error=!1}},computed:{invalidName:function(){return""===this.employee.name},invalidEmail:function(){return""===this.employee.email}}},b=v,g=(n("01ca"),Object(m["a"])(b,h,y,!1,null,"62ae10d7",null)),_=g.exports,E={name:"app",components:{EmployeeTable:f,EmployeeForm:_},data:function(){return{employees:[]}},mounted:function(){this.getEmployees()},methods:{getEmployees:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.employees=n,e.next=12;break;case 10:e.prev=10,e.t0=e["catch"](0);case 12:case"end":return e.stop()}},e,this,[[0,10]])}));function t(){return e.apply(this,arguments)}return t}(),addEmployee:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users",{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,this.employees=[].concat(Object(a["a"])(this.employees),[r]),e.next=12;break;case 10:e.prev=10,e.t0=e["catch"](0);case 12:case"end":return e.stop()}},e,this,[[0,10]])}));function t(t){return e.apply(this,arguments)}return t}(),editEmployee:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t,n){var r,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users/${id}",{method:"PUT",body:JSON.stringify(n),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:return r=e.sent,e.next=6,r.json();case 6:i=e.sent,this.employees=this.employees.map(function(e){return e.id===t?i:e}),e.next=12;break;case 10:e.prev=10,e.t0=e["catch"](0);case 12:case"end":return e.stop()}},e,this,[[0,10]])}));function t(t,n){return e.apply(this,arguments)}return t}(),deleteEmployee:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users/${id}",{method:"DELETE"});case 3:this.employees=this.employees.filter(function(e){return e.id!==t}),e.next=8;break;case 6:e.prev=6,e.t0=e["catch"](0);case 8:case"end":return e.stop()}},e,this,[[0,6]])}));function t(t){return e.apply(this,arguments)}return t}()}},x=E,j=(n("034f"),Object(m["a"])(x,i,o,!1,null,null,null)),w=j.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(w)}}).$mount("#app")},"64a9":function(e,t,n){},f3a5:function(e,t,n){}});
//# sourceMappingURL=app.aa29f600.js.map