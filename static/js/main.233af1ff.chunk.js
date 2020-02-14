(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{13:function(e,t,n){e.exports=n(21)},18:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),l=n.n(r),o=n(12),u=n(1),i=n(2),s=n(4),m=n(3),h=n(5),b=(n(18),function(e){var t=e.children;return c.a.createElement("div",{className:"Layout"},t)}),f=n(10),d=n.n(f),v=n(11),p=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={name:"",number:""},n.handleChange=function(e){var t=e.target,a=t.name,c=t.value;n.setState(Object(v.a)({},a,c))},n.handleSubmit=function(e){e.preventDefault(),n.props.onAddContact(n.state),n.setState({name:"",number:""})},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return c.a.createElement("div",{className:"contactEdit"},c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("label",null,c.a.createElement("p",null,"Name"),c.a.createElement("input",{type:"text",value:t,name:"name",onChange:this.handleChange})),c.a.createElement("label",null,c.a.createElement("p",null,"Number"),c.a.createElement("input",{type:"text",value:n,name:"number",onChange:this.handleChange})),c.a.createElement("button",{type:"submit",className:"submit"},"Add contact")))}}]),t}(a.Component);function E(e){var t=e.contacts,n=e.onRemoveContact;return c.a.createElement("ul",null,t.map((function(e){var t=e.name,a=e.id,r=e.number;return c.a.createElement("li",{key:a,className:"contactList"},c.a.createElement("p",null,t,": ",r),c.a.createElement("button",{className:"deleteButton",type:"button",onClick:function(){return n(a)}},"Delete"))})))}function C(e){var t=e.value,n=e.onChangeFilter;return c.a.createElement("div",null,c.a.createElement("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)}}))}var g=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={contacts:[],filter:""},n.addContact=function(e){var t=e.name,a=e.number,c=n.state.contacts.map((function(e){return e.name})),r={id:d.a.v4(),name:t,number:a};c.includes(t)?alert("".concat(t," is allready exist in contacts.")):n.setState((function(e){return{contacts:[].concat(Object(o.a)(e.contacts),[r])}}))},n.removeContact=function(e){n.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},n.changeFilter=function(e){n.setState({filter:e})},n.getVisibleContacts=function(){var e=n.state,t=e.contacts,a=e.filter;return t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=this.getVisibleContacts();return c.a.createElement(b,null,c.a.createElement("h1",null,"Phonebook"),c.a.createElement(p,{onAddContact:this.addContact}),c.a.createElement("h2",null,"Contacts"),t.length>1&&c.a.createElement("div",null,c.a.createElement("h3",null,"Find contact by name"),c.a.createElement(C,{value:n,onChangeFilter:this.changeFilter})),a.length>0&&c.a.createElement(E,{contacts:a,onRemoveContact:this.removeContact}))}}]),t}(a.Component);l.a.render(c.a.createElement(g,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.233af1ff.chunk.js.map