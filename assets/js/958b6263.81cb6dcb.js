"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[197],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>b});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),l=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),p=l(a),g=r,b=p["".concat(s,".").concat(g)]||p[g]||d[g]||o;return a?n.createElement(b,i(i({ref:e},u),{},{components:a})):n.createElement(b,i({ref:e},u))}));function b(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=g;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[p]="string"==typeof t?t:r,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},131:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={},i="Databricks",c={unversionedId:"connecting_databricks",id:"connecting_databricks",title:"Databricks",description:"Create a free Vantage account then follow the steps below to integrate Databricks costs.",source:"@site/docs/connecting_databricks.md",sourceDirName:".",slug:"/connecting_databricks",permalink:"/connecting_databricks",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/connecting_databricks.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Snowflake Costs by Query",permalink:"/snowflake_cost_by_query"},next:{title:"Fastly",permalink:"/connecting_fastly"}},s={},l=[{value:"Connecting Your Databricks Account",id:"connecting-your-databricks-account",level:2},{value:"Billing Data Only",id:"billing-data-only",level:2},{value:"Databricks Reporting Dimensions",id:"databricks-reporting-dimensions",level:2},{value:"Integration Setup",id:"integration-setup",level:2}],u={toc:l},p="wrapper";function d(t){let{components:e,...o}=t;return(0,r.kt)(p,(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"databricks"},"Databricks"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://console.vantage.sh/signup"},"Create a free Vantage account")," then follow the steps below to integrate Databricks costs."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Databricks cost report",src:a(6020).Z,width:"2630",height:"1638"})),(0,r.kt)("h2",{id:"connecting-your-databricks-account"},"Connecting Your Databricks Account"),(0,r.kt)("p",null,"Vantage integrates with your Databricks account through the use of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.databricks.com/administration-guide/account-settings/billable-usage-delivery.html"},"Billable Usage Logs"),". Vantage provides an S3 bucket for Databricks to deliver usage logs to on a periodic basis."),(0,r.kt)("h2",{id:"billing-data-only"},"Billing Data Only"),(0,r.kt)("p",null,"Databricks delivers cost only data to the bucket outlining the Databricks service utilized, usage in DBU, and metadata related to workspace, cluster, and any related tags."),(0,r.kt)("h2",{id:"databricks-reporting-dimensions"},"Databricks Reporting Dimensions"),(0,r.kt)("p",null,"Databricks ",(0,r.kt)("a",{parentName:"p",href:"/cost_reports/"},"Cost Reports")," enable you to filter Databricks costs along several dimensions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Account"),(0,r.kt)("li",{parentName:"ul"},"Category"),(0,r.kt)("li",{parentName:"ul"},"Tag"),(0,r.kt)("li",{parentName:"ul"},"Not tagged"),(0,r.kt)("li",{parentName:"ul"},"Service")),(0,r.kt)("p",null,"Note that the Tag filter contains values like ",(0,r.kt)("inlineCode",{parentName:"p"},"JobID")," which can be used to view costs for specific Databricks jobs."),(0,r.kt)("h2",{id:"integration-setup"},"Integration Setup"),(0,r.kt)("p",null,"To connect your Databricks account, open the ",(0,r.kt)("a",{parentName:"p",href:"https://console.vantage.sh/settings/databricks/"},"Databricks Settings")," page and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Setup Account")," and follow the instructions. Once created, you will see an additional set of instructions that are run against the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.databricks.com/dev-tools/api/latest/account.html"},"Databricks Account API")," to finalize the integration. Once followed your Databricks integration status should move from ",(0,r.kt)("inlineCode",{parentName:"p"},"Pending")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Importing")," automatically. Databricks generally delivers usage logs once per day."))}d.isMDXComponent=!0},6020:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/databricks-cost-report-103f847dc0cbdfea49b43fa7f7d951ae.png"}}]);