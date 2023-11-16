"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1476],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5443:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={slug:"/"},s="Introduction",i={unversionedId:"Introduction/Introduction",id:"Introduction/Introduction",title:"Introduction",description:"Overview of E-TRACS",source:"@site/docs/01-Introduction/01-Introduction.md",sourceDirName:"01-Introduction",slug:"/",permalink:"/docs/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/"},sidebar:"tutorialSidebar",next:{title:"The E-TRACS Setup",permalink:"/docs/Introduction/The E-TRACS Setup"}},c={},l=[{value:"Overview of E-TRACS",id:"overview-of-e-tracs",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("h2",{id:"overview-of-e-tracs"},"Overview of E-TRACS"),(0,o.kt)("p",null,"E-TRACS (Enhanced Tax Revenue Assessment and Collection System) is a\nsoftware system designed and developed by Rameses Systems Inc.\n(Rameses). The system's primary goal is to automate real property\nassessments, business permits licensing and revenue collection\noperations of local government units (LGU). Through automation, the LGU\nwill become more efficient and improve its reporting accuracy. The\nsystem controls the processes through carefully designed business\nworkflows based on the standard operating procedures and guidelines of\nLGUs."),(0,o.kt)("p",null,"The use of E-TRACS promotes transparency and good governance since it\napplies controls for check and balance. Each transaction made is\naudited, thus making it difficult to do fraudulent activities."),(0,o.kt)("p",null,"The standard system can be configured for City, Municipality, or\nProvince and is composed of three modules as follows:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Collection (Treasury Revenue Operations)")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Real Property Assessment")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Business Permits and Licensing")),(0,o.kt)("p",null,"E-TRACS can also be configured for satellite offices of the LGUs like\nbarangays, bus terminals, hospitals, waterworks, markets, etc. This is\ncalled micro installations and is a stripped-down version of E-TRACS.\nThe objective is to allow transactions to be collected. The transaction\nhappens to reduce data capture in the main office and ensure on-time\ncollection and remittance."),(0,o.kt)("p",null,"E-TRACS is designed as a modular platform and runs on the\xa0",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Osiris 2\nEnterprise Framework")),", a proprietary framework of Rameses. The\nplatform hosts small applications called\xa0",(0,o.kt)("em",{parentName:"p"},"plug-ins."),"\xa0Being a multi-user\nsystem, the user can only access these applications if they have the\nproper authorization and permissions. Because transactions in the system\nare sensitive and require accountability, E-TRACS has a comprehensive\nsecurity model. Users are assigned roles and permissions that can be\nfurther customized per user. Data passing through the network are\nencrypted. Each terminal connecting to the server must be registered by\nthe system administrator. Users are required to change passwords from\ntime to time. Besides system-level security, it can also be\napplication-specific; for example, collectors cannot perform collection\nif they do not have cashbook defined and they do not have accountable\nforms on hand.\xa0\xa0"),(0,o.kt)("p",null,"E-TRACS aims to elevate innovation in tax revenue collection to provide\nan efficient and transparent local government unit and improve the\nquality of service to taxpayers."))}d.isMDXComponent=!0}}]);