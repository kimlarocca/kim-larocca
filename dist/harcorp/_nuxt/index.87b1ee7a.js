import{u as h}from"./composables.e2d9bf86.js";import{a as l,b as f,e as v,f as
r,w as s,h as d,i as b,r as g,o as S,j as p}from"./entry.14e6f7f3.js";const
x=i=>Object.fromEntries(Object.entries(i).filter(([,e])=>e!==void
0)),c=(i,e)=>(n,t)=>(h(()=>i({...x(n),...t.attrs},t)),()=>{var a,o;return
e?(o=(a=t.slots).default)==null?void
0:o.call(a):null}),u={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void
0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void
0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void
0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void
0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void
0},style:String,tabindex:String,title:String,translate:String};l({name:"NoScript",inheritAttrs:!1,props:{...u,title:String,body:Boolean,renderPriority:[String,Number]},setup:c((i,{slots:e})=>{var
a;const n={...i},t=(((a=e.default)==null?void
0:a.call(e))||[]).filter(({children:o})=>o).map(({children:o})=>o).join("");return
t&&(n.children=t),{noscript:[n]}})});l({name:"Link",inheritAttrs:!1,props:{...u,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void
0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:c(i=>({link:[i]}))});l({name:"Base",inheritAttrs:!1,props:{...u,href:String,target:String},setup:c(i=>({base:i}))});const
_=l({name:"Title",inheritAttrs:!1,setup:c((i,{slots:e})=>{var
t,a,o;return{title:((o=(a=(t=e.default)==null?void 0:t.call(e))==null?void
0:a[0])==null?void
0:o.children)||null}})});l({name:"Meta",inheritAttrs:!1,props:{...u,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:c(i=>{const
e={...i};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete
e.httpEquiv),{meta:[e]}})});l({name:"Style",inheritAttrs:!1,props:{...u,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void
0},body:Boolean,renderPriority:[String,Number]},setup:c((i,{slots:e})=>{var
a,o,m;const n={...i},t=(m=(o=(a=e.default)==null?void 0:a.call(e))==null?void
0:o[0])==null?void 0:m.children;return t&&(n.children=t),{style:[n]}})});const
y=l({name:"Head",inheritAttrs:!1,setup:(i,e)=>()=>{var
n,t;return(t=(n=e.slots).default)==null?void
0:t.call(n)}}),q=l({name:"Html",inheritAttrs:!1,props:{...u,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:c(i=>({htmlAttrs:i}),!0)});l({name:"Body",inheritAttrs:!1,props:{...u,renderPriority:[String,Number]},setup:c(i=>({bodyAttrs:i}),!0)});const
H={},B={class:"home"},L=b('
<section
  class="hero mb-7"
><div class="container"><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do</h1><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ipsum dolor sit amet, consectetur </p><a href="#" class="p-button">Call To Action Goes Here</a></div><div class="bubbles"><div class="bubble x1"></div><div class="bubble x2"></div><div class="bubble x3"></div><div class="bubble x4"></div><div class="bubble x5"></div><div class="bubble x6"></div><div class="bubble x7"></div><div class="bubble x8"></div></div></section>
<section
  class="container mb-7"
><div class="grid"><div class="col-12 lg:col box1 p-5"><h2 class="mb-4">Subheading 1</h2><p class="mb-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p><a class="p-button">Learn More</a></div><div class="col-fixed" style="width:48px;"></div><div class="col-12 lg:col box2 p-5"><h2 class="mb-4">Subheading 2</h2><p class="mb-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p><a class="p-button">Learn More</a></div></div></section>
<section
  class="container mb-7"
><h3 class="mb-4">Section Heading</h3><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p></section>
<section
  class="mb-7"
><div class="grid"><div class="col-12 lg:col"><img alt="conference room" src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=768&amp;q=80"></div><div class="col-12 lg:col-7 p-6"><h3 class="mb-4">Section Heading</h3><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p><p><a href="#">Click here to learn more.</a></p></div></div></section>
<section
  class="mb-7"
><div class="grid"><div class="col-12 lg:col-7 p-6"><h3 class="mb-4">Section Heading</h3><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p><p><a href="#">Click here to learn more.</a></p></div><div class="col-12 lg:col"><img alt="conference room" src="https://images.unsplash.com/photo-1634988115889-6fd7b3964ce5?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=768&amp;q=80"></div></div></section>
',5),w={class:"container mb-7"},C={class:"grid"},A=d("p",null," Lorem ipsum
dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Ut enim ad minim veniam.
",-1),M=d("div",{class:"col-fixed",style:{width:"32px"}},null,-1),k=d("p",null,"
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
",-1),N=d("div",{class:"col-fixed",style:{width:"32px"}},null,-1),U=d("p",null,"
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
",-1),E=b('
<section
  class="dark text-center p-6 mb-7"
><h2 class="white mb-4">Section Heading</h2><p class="white w-9 m-auto mb-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p><a href="#" class="p-button ghost dark">Get Started Today</a></section>
<section
  class="container"
><div class="grid"><div class="col-6 lg:col text-center"><i class="pi pi-heart blue mb-3" style="font-size:3rem;"></i><h4 class="mb-2">Icon Heading</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div><div class="col-6 lg:col text-center"><i class="pi pi-lock blue mb-3" style="font-size:3rem;"></i><h4 class="mb-2">Icon Heading</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div><div class="col-6 lg:col text-center"><i class="pi pi-star blue mb-3" style="font-size:3rem;"></i><h4 class="mb-2">Icon Heading</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div><div class="col-6 lg:col text-center"><i class="pi pi-box blue mb-3" style="font-size:3rem;"></i><h4 class="mb-2">Icon Heading</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div></div></section>
',2);function T(i,e){const n=_,t=y,a=q,o=g("Button"),m=g("Card");return
S(),v("div",B,[r(a,{lang:"en"},{default:s(()=>[r(t,null,{default:s(()=>[r(n,null,{default:s(()=>[p("Harcorp
LLC |
Overview")]),_:1})]),_:1})]),_:1}),L,d("section",w,[d("div",C,[r(m,{class:"col-12
lg:col"},{title:s(()=>[p("Triple Card
Heading")]),content:s(()=>[A]),footer:s(()=>[r(o,{icon:"pi
pi-angle-double-right",label:"Learn More"})]),_:1}),M,r(m,{class:"col-12
lg:col"},{title:s(()=>[p("Triple Card
Heading")]),content:s(()=>[k]),footer:s(()=>[r(o,{icon:"pi
pi-angle-double-right",label:"Learn More"})]),_:1}),N,r(m,{class:"col-12
lg:col"},{title:s(()=>[p("Triple Card
Heading")]),content:s(()=>[U]),footer:s(()=>[r(o,{icon:"pi
pi-angle-double-right",label:"Learn More"})]),_:1})])]),E])}const
z=f(H,[["render",T]]);export{z as default};
