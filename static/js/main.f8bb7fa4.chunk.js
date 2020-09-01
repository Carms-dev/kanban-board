(this["webpackJsonpkanban-board"]=this["webpackJsonpkanban-board"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(8),c=a.n(o),r=(a(14),a(5)),s=a(1),u=a(2),m=a(4),i=a(3),d=function(){return l.a.createElement("div",{className:"navbar"},l.a.createElement("h1",null,"Kanban Board"))},p=a(6),f=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).updateTask=function(t){t.preventDefault();var a=e.props,n=a.columns,l=a.columnKey,o=a.taskKey,c=a.updateColumn,s=n[l].tasks[o],u=Object(r.a)(Object(r.a)({},s),{},Object(p.a)({},t.currentTarget.name,t.currentTarget.value)),m=n[l];m.tasks[o]=u,c(l,m)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.columns,a=e.columnKey,n=e.taskKey,o=t[a].tasks[n];return l.a.createElement("form",null,l.a.createElement("h2",{style:{marginBottom:"1rem"}},"Edit Task"),l.a.createElement("input",{autoFocus:!0,type:"text",onChange:this.updateTask,name:"title",placeholder:"Enter title",value:o.title}),l.a.createElement("input",{type:"text",name:"description",onChange:this.updateTask,placeholder:"Enter description",value:o.description}))}}]),a}(l.a.Component),k=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).deleteTask=function(t){var a=e.props.columns[e.props.columnKey];delete a.tasks[t],e.props.updateColumn(e.props.columnKey,a)},e.handleKeyDown=function(t){13!==t.keyCode&&27!==t.keyCode||e.props.selectTask(e.props.columnKey,null)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.columns,n=t.selectTask,o=t.columnKey,c=t.taskKey,r=t.updateColumn;return l.a.createElement("div",{className:"modal-wrapper"},l.a.createElement("div",{className:"modal",onKeyDown:this.handleKeyDown},l.a.createElement("button",{className:"modal-close",onClick:function(){return n(o,null)}},"\u2716"),l.a.createElement(f,{columns:a,columnKey:o,taskKey:c,updateColumn:r}),l.a.createElement("button",{className:"sq-btn",onClick:function(){return e.deleteTask(c)}},"\ud83d\uddd1")))}}]),a}(n.Component),y=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.columns,a=e.selectTask,n=e.selectedTaskKey,o=e.columnKey,c=e.taskKey,r=e.updateColumn,s=t[o].tasks[c];return l.a.createElement("div",{className:"task-card","data-tkey":c,"data-ckey":o,draggable:this.props.draggable,onDragStart:function(e){var t=e.target;e.dataTransfer.setData("tkey",t.dataset.tkey),e.dataTransfer.setData("ckey",t.dataset.ckey)},onDragOver:function(e){e.preventDefault()},onDrop:function(e){e.preventDefault();var a=e.dataTransfer.getData("tKey"),n=e.dataTransfer.getData("cKey"),l=e.currentTarget.dataset.tkey,o=e.currentTarget.dataset.ckey,c=e.currentTarget.getBoundingClientRect(),s=e.clientY-c.top,u=c.height,m=Object.keys(t[o].tasks),i=s/u<.5?m.indexOf(l):m.indexOf(l)+1,d=m.splice(0,i),p=t[o],f={};if(d.forEach((function(e){f[e]=p.tasks[e]})),f[a]=t[n].tasks[a],m.forEach((function(e){f[e]=p.tasks[e]})),p.tasks=f,r(o,p),n!==o){var k=t[n];delete k.tasks[a],r(n,k)}}},l.a.createElement("button",{className:"task",onClick:function(){return a(o,c)}},l.a.createElement("h3",null,s.title),l.a.createElement("span",{className:"icon-btn"},"\ud83d\udd8b")),n===c?l.a.createElement(k,{columns:t,columnKey:o,taskKey:c,selectTask:a,updateColumn:r}):l.a.createElement("div",null))}}]),a}(n.Component),v=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).titleRef=l.a.createRef(),e.createTask=function(t){t.preventDefault();var a={title:e.titleRef.current.value},n=e.props.columns[e.props.columnKey];n.tasks["task".concat(Date.now())]=a,e.props.updateColumns(e.props.columnKey,n),t.currentTarget.reset(),e.props.selectColumn(null)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("form",{className:"add-task-form",onSubmit:this.createTask},l.a.createElement("input",{autoFocus:!0,required:!0,ref:this.titleRef,type:"text",name:"title",placeholder:"Enter task title..."}),l.a.createElement("button",{type:"submit"},"Add Task"),l.a.createElement("button",{onClick:function(){return e.props.selectColumn(null)}},"\u2716"))}}]),a}(l.a.Component),h=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.columns,a=e.columnKey,n=e.updateColumn,o=e.deleteColumn,c=e.selectColumn,r=e.selectedColumnKey,s=e.selectTask,u=e.selectedTaskKey;return l.a.createElement("div",{className:"column-card"},l.a.createElement("div",{className:"column-header","data-ckey":a,onDragOver:function(e){e.preventDefault()},onDrop:function(e){e.preventDefault();var a=e.dataTransfer.getData("tKey"),l=e.dataTransfer.getData("cKey"),o=e.currentTarget.dataset.ckey;if(l!==o){var c=t[o],r=t[l].tasks[a];c.tasks[a]=r,n(o,c),console.log(c);var s=t[l];delete s.tasks[a],n(l,s)}}},l.a.createElement("h2",null,t[a].name),l.a.createElement("button",{className:"sq-btn display-hover",onClick:function(){return o(a)}},"\ud83d\uddd1")),Object.keys(t[a].tasks).map((function(e){return l.a.createElement(y,{key:e,columns:t,columnKey:a,taskKey:e,updateColumn:n,selectTask:s,selectedTaskKey:u,draggable:"true"})})),r===a?l.a.createElement(v,{columns:t,columnKey:a,updateColumns:n,selectColumn:c}):l.a.createElement("button",{className:"add-btn",style:{width:"100%"},onClick:function(){c(a)}},"+ Add a Task"))}}]),a}(n.Component),b=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).nameRef=l.a.createRef(),e.createColumn=function(t){t.preventDefault();var a={name:e.nameRef.current.value,tasks:{}};e.props.addColumn(a),t.currentTarget.reset(),e.props.toggleAddCol()},e}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("form",{className:"add-column-form",onSubmit:this.createColumn},l.a.createElement("input",{autoFocus:!0,required:!0,ref:this.nameRef,type:"text",name:"name",placeholder:"Enter column name..."}),l.a.createElement("button",{type:"submit"},"Add Column"),l.a.createElement("button",{onClick:this.props.toggleAddCol},"\u2716"))}}]),a}(l.a.Component),C=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={columns:{},isAddCol:!1,selectedColumnKey:null,selectedTaskKey:null},e.initColumns=function(){var t={};["Todo","In progress","Done"].forEach((function(e,a){t["column".concat(a)]={name:e,tasks:{}}})),e.setState({columns:t})},e.selectColumn=function(t){e.state.columns[t]?e.setState({selectedColumnKey:t}):e.setState({selectedColumnKey:null})},e.selectTask=function(t,a){var n=e.state.columns[t].tasks[a]?a:null;e.setState({selectedTaskKey:n})},e.addColumn=function(t){var a=Object(r.a)({},e.state.columns);a["column".concat(Date.now())]=t,e.setState({columns:a})},e.updateColumn=function(t,a){var n=Object(r.a)({},e.state.columns);n[t]=a,e.setState({columns:n})},e.deleteColumn=function(t){var a=Object(r.a)({},e.state.columns);delete a[t],e.setState({columns:a})},e.toggleAddCol=function(){e.setState({isAddCol:!e.state.isAddCol})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){0===Object.keys(this.state.columns).length&&this.initColumns();var e=localStorage.getItem("kanban");e&&this.setState({columns:JSON.parse(e)});var t=document.createElement("script");t.src="https://code.iconify.design/1/1.0.7/iconify.min.js",t.async=!0,document.body.appendChild(t)}},{key:"componentDidUpdate",value:function(){localStorage.setItem("kanban",JSON.stringify(this.state.columns))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("div",{className:"columns"},Object.keys(this.state.columns).map((function(t){return l.a.createElement(h,{key:t,columnKey:t,columns:e.state.columns,selectedColumnKey:e.state.selectedColumnKey,selectedTaskKey:e.state.selectedTaskKey,selectColumn:e.selectColumn,selectTask:e.selectTask,updateColumn:e.updateColumn,deleteColumn:e.deleteColumn})})),this.state.isAddCol?l.a.createElement(b,{toggleAddCol:this.toggleAddCol,addColumn:this.addColumn}):l.a.createElement("button",{className:"add-btn",onClick:this.toggleAddCol,style:{marginLeft:"0.5rem"}},"+ Add Another Column")))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(15);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.f8bb7fa4.chunk.js.map