"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[8963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=u(n),p=o,m=g["".concat(l,".").concat(p)]||g[p]||d[p]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={id:"vantage_university_integrations",title:"Vantage University Integrations",description:"Learn about connecting integrations in this Vantage University section.",sidebar_label:"Integrations",image:"/img/vantage-university/integrations.jpg",keywords:["Vantage University","Integrations"]},i="Integrations",s={unversionedId:"vantage_university_integrations",id:"vantage_university_integrations",title:"Vantage University Integrations",description:"Learn about connecting integrations in this Vantage University section.",source:"@site/docs/vantage_university_integrations.md",sourceDirName:".",slug:"/vantage_university_integrations",permalink:"/vantage_university_integrations",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/vantage_university_integrations.md",tags:[],version:"current",frontMatter:{id:"vantage_university_integrations",title:"Vantage University Integrations",description:"Learn about connecting integrations in this Vantage University section.",sidebar_label:"Integrations",image:"/img/vantage-university/integrations.jpg",keywords:["Vantage University","Integrations"]},sidebar:"someSidebar",previous:{title:"Account Management",permalink:"/vantage_university_account_management"},next:{title:"Cost Reporting",permalink:"/vantage_university_cost_reporting"}},l={},u=[{value:"\ud83d\udca1 What Are Vantage Integrations?",id:"-what-are-vantage-integrations",level:2},{value:"\ud83d\udcdd Integrations Use Cases",id:"-integrations-use-cases",level:2},{value:"\ud83d\udcda Lesson 1: Creating Integrations in Vantage",id:"-lesson-1-creating-integrations-in-vantage",level:2},{value:"\ud83d\udcda Lesson 2: Connecting Custom Providers",id:"-lesson-2-connecting-custom-providers",level:2},{value:"\ud83d\udcda Lesson 3: Integration Example - GitHub",id:"-lesson-3-integration-example---github",level:2},{value:"\ud83d\udcd6 Additional Resources",id:"-additional-resources",level:2}],c={toc:u},g="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integrations"},"Integrations"),(0,o.kt)("h2",{id:"-what-are-vantage-integrations"},"\ud83d\udca1 What Are Vantage Integrations?"),(0,o.kt)("p",null,"Vantage offers a number of native integrations to help you understand all your cloud costs. In addition to integrations within Vantage you can connect ",(0,o.kt)("a",{parentName:"p",href:"/connecting_custom_providers"},"Custom Providers")," so that you can monitor costs across your entire tech stack."),(0,o.kt)("h2",{id:"-integrations-use-cases"},"\ud83d\udcdd Integrations Use Cases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As a ",(0,o.kt)("strong",{parentName:"li"},"DevOps Engineer"),", you need to consolidate cost data from various cloud providers into a single platform for better visibility. You connect both AWS and GCP, which are your main cloud providers. You also want to view monitoring costs from ",(0,o.kt)("strong",{parentName:"li"},"Datadog"),", which you help to oversee, so you use the native Datadog integration in Vantage to view the total cost impact of your work."),(0,o.kt)("li",{parentName:"ul"},"As a ",(0,o.kt)("strong",{parentName:"li"},"FinOps Analyst"),", you are very familiar with the FOCUS schema. You currently have a few of your major cloud providers connected to Vantage, but there are some other tools your organization uses that you would like to see displayed alongside those cloud providers. You convert cost and usage reports from these other providers to the schema that's used on Vantage, and based on FOCUS, and use the Custom Providers feature to see costs for your organization's entire tech stack.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"-lesson-1-creating-integrations-in-vantage"},"\ud83d\udcda Lesson 1: Creating Integrations in Vantage"),(0,o.kt)("div",{style:{position:"relative",paddingBottom:"56.25%",height:0}},(0,o.kt)("iframe",{src:"https://www.youtube.com/embed/kpGLCeDIjzU?si=Dr5QLx3Pe3wzDANd?rel=0&color=white&modestbranding=1&showinfo=0&wmode=transparent",frameborder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowfullscreen:"true",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"10px"}})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"-lesson-2-connecting-custom-providers"},"\ud83d\udcda Lesson 2: Connecting Custom Providers"),(0,o.kt)("div",{style:{position:"relative",paddingBottom:"56.25%",height:0}},(0,o.kt)("iframe",{src:"https://www.youtube.com/embed/bhSyaAG6_tU?si=BcjOEGLNB8Ic7j5Z?rel=0&color=white&modestbranding=1&showinfo=0&wmode=transparent",frameborder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowfullscreen:"true",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"10px"}})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"-lesson-3-integration-example---github"},"\ud83d\udcda Lesson 3: Integration Example - GitHub"),(0,o.kt)("div",{style:{position:"relative",paddingBottom:"56.25%",height:0}},(0,o.kt)("iframe",{src:"https://www.youtube.com/embed/npyZQRlTuGY?si=AtCe7H23BvYFsZsB?rel=0&color=white&modestbranding=1&showinfo=0&wmode=transparent",frameborder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowfullscreen:"true",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"10px"}})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"-additional-resources"},"\ud83d\udcd6 Additional Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/getting_started"},"Integrations quickstart")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/connecting_custom_providers"},"Custom Providers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://focus.finops.org/"},"FOCUS schema"))))}d.isMDXComponent=!0}}]);