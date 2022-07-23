import{SvelteComponent,add_flush_callback,append,attr,bind,binding_callbacks,check_outros,children,claim_component,claim_element,claim_space,claim_text,create_component,destroy_component,destroy_each,detach,element,empty,group_outros,init,insert,listen,mount_component,noop,run_all,safe_not_equal,set_data,space,svg_element,text,transition_in,transition_out}from"../../web_modules/svelte/internal/index.mjs";import MediaGrid from"./media_grid.js";import ButtonWrapper from"./button_wrapper.js";import Button from"./button.js";import{isImage}from"./assets_checker.js";function get_each_context(e,t,n){const s=e.slice();return s[17]=t[n],s}function create_each_block(e){let t,n=e[17]+"",s,o,i,a;function r(){return e[12](e[17])}return{c(){t=element("div"),s=text(n),this.h()},l(e){t=claim_element(e,"DIV",{class:!0});var o=children(t);s=claim_text(o,n),o.forEach(detach),this.h()},h(){attr(t,"class",o="filter"+(e[2].includes(e[17])?" active":"")+" svelte-1hs4gys")},m(e,n){insert(e,t,n),append(t,s),i||(a=listen(t,"click",r),i=!0)},p(i,a){e=i,a&16&&n!==(n=e[17]+"")&&set_data(s,n),a&20&&o!==(o="filter"+(e[2].includes(e[17])?" active":"")+" svelte-1hs4gys")&&attr(t,"class",o)},d(e){e&&detach(t),i=!1,a()}}}function create_if_block_1(e){let n,t,i,s,o,a,r;return{c(){n=element("div"),t=svg_element("svg"),i=svg_element("path"),s=svg_element("line"),o=svg_element("line"),this.h()},l(e){n=claim_element(e,"DIV",{class:!0});var a,r=children(n);t=claim_element(r,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1),a=children(t),i=claim_element(a,"path",{stroke:!0,d:!0,fill:!0},1),children(i).forEach(detach),s=claim_element(a,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(s).forEach(detach),o=claim_element(a,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(o).forEach(detach),a.forEach(detach),r.forEach(detach),this.h()},h(){attr(i,"stroke","none"),attr(i,"d","M0 0h24v24H0z"),attr(i,"fill","none"),attr(s,"x1","18"),attr(s,"y1","6"),attr(s,"x2","6"),attr(s,"y2","18"),attr(o,"x1","6"),attr(o,"y1","6"),attr(o,"x2","18"),attr(o,"y2","18"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"class","icon icon-tabler icon-tabler-x"),attr(t,"width","20"),attr(t,"height","20"),attr(t,"viewBox","5 5 14 14"),attr(t,"stroke-width","1.5"),attr(t,"stroke","#2c3e50"),attr(t,"fill","none"),attr(t,"stroke-linecap","round"),attr(t,"stroke-linejoin","round"),attr(n,"class","close svelte-1hs4gys")},m(c,l){insert(c,n,l),append(n,t),append(t,i),append(t,s),append(t,o),a||(r=listen(n,"click",e[8]),a=!0)},p:noop,d(e){e&&detach(n),a=!1,r()}}}function create_if_block(e){let t,n;return t=new ButtonWrapper({props:{$$slots:{default:[create_default_slot]},$$scope:{ctx:e}}}),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},p(e,n){const s={};n&1048640&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_default_slot(e){let s,a,o,n,t,r,i,c,l;function u(t){e[16](t)}let d={buttonText:"Delete Selected Media",action:"delete",encoding:"text"};return e[6]!==void 0&&(d.commitList=e[6]),t=new Button({props:d}),binding_callbacks.push(()=>bind(t,"commitList",u)),{c(){s=element("button"),a=text("Download selected"),o=space(),n=element("div"),create_component(t.$$.fragment),this.h()},l(e){s=claim_element(e,"BUTTON",{});var i,r=children(s);a=claim_text(r,"Download selected"),r.forEach(detach),o=claim_space(e),n=claim_element(e,"DIV",{class:!0}),i=children(n),claim_component(t.$$.fragment,i),i.forEach(detach),this.h()},h(){attr(n,"class","delete-wrapper")},m(r,d){insert(r,s,d),append(s,a),insert(r,o,d),insert(r,n,d),mount_component(t,n,null),i=!0,c||(l=[listen(s,"click",e[9]),listen(n,"click",e[10])],c=!0)},p(e,n){const s={};!r&&n&64&&(r=!0,s.commitList=e[6],add_flush_callback(()=>r=!1)),t.$set(s)},i(e){if(i)return;transition_in(t.$$.fragment,e),i=!0},o(e){transition_out(t.$$.fragment,e),i=!1},d(e){e&&detach(s),e&&detach(o),e&&detach(n),destroy_component(t),c=!1,run_all(l)}}}function create_fragment(e){let a,i,r,m,f,o,v,g,p,u,l,h,c=e[4],s=[];for(let t=0;t<c.length;t+=1)s[t]=create_each_block(get_each_context(e,c,t));let n=e[2].length>0&&create_if_block_1(e);function y(t){e[13](t)}function b(t){e[14](t)}function j(t){e[15](t)}let d={files:e[5]};e[3]!==void 0&&(d.selectedMedia=e[3]),e[0]!==void 0&&(d.changingAsset=e[0]),e[1]!==void 0&&(d.showMedia=e[1]),o=new MediaGrid({props:d}),binding_callbacks.push(()=>bind(o,"selectedMedia",y)),binding_callbacks.push(()=>bind(o,"changingAsset",b)),binding_callbacks.push(()=>bind(o,"showMedia",j));let t=e[3].length>0&&create_if_block(e);return{c(){a=element("div"),i=element("div"),r=element("div");for(let e=0;e<s.length;e+=1)s[e].c();m=space(),n&&n.c(),f=space(),create_component(o.$$.fragment),u=space(),t&&t.c(),l=empty(),this.h()},l(e){a=claim_element(e,"DIV",{class:!0});var c,h,d=children(a);i=claim_element(d,"DIV",{class:!0}),c=children(i),r=claim_element(c,"DIV",{class:!0}),h=children(r);for(let e=0;e<s.length;e+=1)s[e].l(h);h.forEach(detach),m=claim_space(c),n&&n.l(c),c.forEach(detach),f=claim_space(d),claim_component(o.$$.fragment,d),d.forEach(detach),u=claim_space(e),t&&t.l(e),l=empty(),this.h()},h(){attr(r,"class","filters svelte-1hs4gys"),attr(i,"class","filters-wrapper svelte-1hs4gys"),attr(a,"class","media-wrapper svelte-1hs4gys")},m(e,c){insert(e,a,c),append(a,i),append(i,r);for(let e=0;e<s.length;e+=1)s[e].m(r,null);append(i,m),n&&n.m(i,null),append(a,f),mount_component(o,a,null),insert(e,u,c),t&&t.m(e,c),insert(e,l,c),h=!0},p(e,[a]){if(a&148){c=e[4];let t;for(t=0;t<c.length;t+=1){const n=get_each_context(e,c,t);s[t]?s[t].p(n,a):(s[t]=create_each_block(n),s[t].c(),s[t].m(r,null))}for(;t<s.length;t+=1)s[t].d(1);s.length=c.length}e[2].length>0?n?n.p(e,a):(n=create_if_block_1(e),n.c(),n.m(i,null)):n&&(n.d(1),n=null);const d={};a&32&&(d.files=e[5]),!v&&a&8&&(v=!0,d.selectedMedia=e[3],add_flush_callback(()=>v=!1)),!g&&a&1&&(g=!0,d.changingAsset=e[0],add_flush_callback(()=>g=!1)),!p&&a&2&&(p=!0,d.showMedia=e[1],add_flush_callback(()=>p=!1)),o.$set(d),e[3].length>0?t?(t.p(e,a),a&8&&transition_in(t,1)):(t=create_if_block(e),t.c(),transition_in(t,1),t.m(l.parentNode,l)):t&&(group_outros(),transition_out(t,1,1,()=>{t=null}),check_outros())},i(e){if(h)return;transition_in(o.$$.fragment,e),transition_in(t),h=!0},o(e){transition_out(o.$$.fragment,e),transition_out(t),h=!1},d(e){e&&detach(a),destroy_each(s,e),n&&n.d(),destroy_component(o),e&&detach(u),t&&t.d(e),e&&detach(l)}}}function instance(e,t,n){let u,l,{assets:i}=t,{changingAsset:a}=t,{showMedia:r}=t,c=[],s=[],o=[];for(const e of i)if(!isImage(e)){const t=e.split("/").slice(1,-1);for(const e of t)c.includes(e)||(c=[...c,e])}const d=e=>{s.includes(e)?n(2,s=s.filter(t=>t!=e)):n(2,s=[...s,e])},h=()=>{n(2,s=[])},m=()=>{o.forEach(e=>{const t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download",e.substring(e.lastIndexOf("/")+1)),t.click()})},f=()=>{o.forEach(e=>{n(11,i=i.filter(t=>t!=e))}),n(3,o=[])},p=e=>d(e);function g(e){o=e,n(3,o)}function v(e){a=e,n(0,a)}function b(e){r=e,n(1,r)}function j(e){l=e,(n(6,l),n(3,o))}return e.$$set=e=>{"assets"in e&&n(11,i=e.assets),"changingAsset"in e&&n(0,a=e.changingAsset),"showMedia"in e&&n(1,r=e.showMedia)},e.$$.update=()=>{if(e.$$.dirty&2052)$:n(5,u=i.filter(e=>s.length==0||e.split("/").slice(1,-1).some(e=>s.includes(e))));if(e.$$.dirty&8)$:n(6,l=o.map(e=>({file:e,contents:null})))},[a,r,s,o,c,u,l,d,h,m,f,i,p,g,v,b,j]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{assets:11,changingAsset:0,showMedia:1})}}export default Component