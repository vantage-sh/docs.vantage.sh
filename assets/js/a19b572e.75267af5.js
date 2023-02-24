"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[954],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=o.createContext({}),l=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,g=p["".concat(i,".").concat(d)]||p[d]||f[d]||n;return r?o.createElement(g,s(s({ref:t},u),{},{components:r})):o.createElement(g,s({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<n;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6172:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var o=r(7462),a=(r(7294),r(3905));const n={},s="Forecasting",c={unversionedId:"forecasting",id:"forecasting",title:"Forecasting",description:"For every Cost Report, Vantage will product a forecasts of where your costs are expected to be by the end of the current month. These forecasts are based off of your account's actual cost data and produced from a Vantage-developed machine learning model that is trained anonymously from all Vantage customers to be as accurate as possible.",source:"@site/docs/forecasting.md",sourceDirName:".",slug:"/forecasting",permalink:"/forecasting",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/forecasting.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Cost Reports",permalink:"/cost_reports"},next:{title:"Active Resources",permalink:"/active_resources"}},i={},l=[{value:"AWS Service Forecasts",id:"aws-service-forecasts",level:2},{value:"Forecast Generation",id:"forecast-generation",level:2},{value:"Forecasts for Member Accounts, Tags, or Regions",id:"forecasts-for-member-accounts-tags-or-regions",level:2}],u={toc:l},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"forecasting"},"Forecasting"),(0,a.kt)("p",null,"For every Cost Report, Vantage will product a forecasts of where your costs are expected to be by the end of the current month. These forecasts are based off of your account's actual cost data and produced from a Vantage-developed machine learning model that is trained anonymously from all Vantage customers to be as accurate as possible. "),(0,a.kt)("p",null,"Vantage gives a range of an upper-expected-band and a lower-expected-band with a median forecast that is the middle of these two ranges. This forecast is updated daily as new cost data arrives. "),(0,a.kt)("p",null,"Below is a picture of an example Cost Forecast."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example Cost Forecast",src:r(1453).Z,width:"969",height:"938"})),(0,a.kt)("h2",{id:"aws-service-forecasts"},"AWS Service Forecasts"),(0,a.kt)("p",null,"In addition to seeing forecasts in aggregate for Cost Reports, you can also see a per AWS service cost forecast by clicking the rows in the table below. This will show you forecasts for each individual AWS service. "),(0,a.kt)("h2",{id:"forecast-generation"},"Forecast Generation"),(0,a.kt)("p",null,"Forecasts take some time to generate - typically within 10 minutes but is dependent on the amount of data composing a Cost Report. If you don't see a forecast being generated temporarily after creating your account or creating a new Cost Report check back in after about 10-15 minutes and it should appear. "),(0,a.kt)("h2",{id:"forecasts-for-member-accounts-tags-or-regions"},"Forecasts for Member Accounts, Tags, or Regions"),(0,a.kt)("p",null,"Forecasts are generated for every ",(0,a.kt)("a",{parentName:"p",href:"/cost_reports"},"Cost Report"),". As a result, if you would like to see a forecast for a specific member account, tag or region you can simply create a Cost Report with the dimensions you desire and a forecast will be generated accordingly."))}f.isMDXComponent=!0},1453:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/forecasting-cadd557b33fc13992d494ecbfa39939b.png"}}]);