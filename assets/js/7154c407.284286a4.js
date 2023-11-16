"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2988],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5299:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},i=void 0,c={unversionedId:"Introduction/Architecture",id:"Introduction/Architecture",title:"Architecture",description:"Architecture",source:"@site/docs/01-Introduction/03-Architecture.md",sourceDirName:"01-Introduction",slug:"/Introduction/Architecture",permalink:"/documentation/Introduction/Architecture",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The E-TRACS Setup",permalink:"/documentation/Introduction/The E-TRACS Setup"},next:{title:"Cloud Technology",permalink:"/documentation/Introduction/Cloud Technology"}},s={},l=[{value:"Architecture",id:"architecture",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"Osiris 2 Enterprise Framework is a multi-tiered framework that is\ncomposed of several layers intended to be scalable and dynamic.\nBasically it is composed of three tiers \u2013 the client or presentation,\nthe business application or middle layer and the database layer. See\ndiagram below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image|512x397,100%",src:r(6645).Z,width:"464",height:"352"})),(0,a.kt)("p",null,"Figure 2. E-TRACS Enterprise Architecture"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("u",null,"Client or Presentation Layer")),"\xa0\u2013 this is what users use to\ninteract with the system. It could be any computing device. It can be a\ndesktop or workstation application, a web browser, a mobile application,\na kiosk, or any device like card readers. The E-TRACS program, however,\nat this time is developed for the personal computer and uses the\xa0",(0,a.kt)("em",{parentName:"p"},"Osiris\n2 Client Platform"),".\xa0 \xa0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("u",null,"Business Application Layer")),"\xa0\u2013 Also known as a middle layer,\ndata collected from the client is processed. It acts as the go-between\nthe client and data layer. Transactions are organized as services, and\ncode is written in scripts or a text-like programming language. Services\ncan be accessed by the client or even by another system using another\nprogramming language. This is commonly referred to as Service Oriented\nArchitecture (SOA).\xa0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("u",null,"Data Layer")),"\xa0 \xa0- This is where data will be persisted or\n\u201csaved\u201d and commonly stored in relational databases. However, data\nstorage is not limited to relational databases. Data can be also be\nstored in other data formats like a document database and non-relational\ndatabases. However, at this time, E-TRACS is stored in relational\ndatabases, and an LGU has two options \u2013 MySQL or MS SQL Server. There is\nplanned support for other databases in the future but it depends on the\nrequest of the LGU."))}p.isMDXComponent=!0},6645:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image2-9fc7c662ff84929e1cac1ecf38027d26.png"}}]);