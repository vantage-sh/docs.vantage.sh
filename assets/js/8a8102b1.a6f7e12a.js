"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[1668],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||g[d]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={id:"connecting_new_relic",title:"New Relic",description:"This page walks through how to integrate Vantage with your New Relic account.",keywords:["New Relic","Connect New Relic"]},a="New Relic",c={unversionedId:"connecting_new_relic",id:"connecting_new_relic",title:"New Relic",description:"This page walks through how to integrate Vantage with your New Relic account.",source:"@site/docs/connecting_new_relic.md",sourceDirName:".",slug:"/connecting_new_relic",permalink:"/connecting_new_relic",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/connecting_new_relic.md",tags:[],version:"current",frontMatter:{id:"connecting_new_relic",title:"New Relic",description:"This page walks through how to integrate Vantage with your New Relic account.",keywords:["New Relic","Connect New Relic"]},sidebar:"someSidebar",previous:{title:"Datadog",permalink:"/connecting_datadog"},next:{title:"MongoDB Atlas",permalink:"/connecting_mongodb-atlas"}},l={},s=[{value:"Connect Your New Relic Account",id:"connect-your-new-relic-account",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Create the Connection",id:"create-the-connection",level:3},{value:"Next Steps: Manage Workspace Access",id:"next-steps-manage-workspace-access",level:3},{value:"New Relic Reporting Dimensions",id:"new-relic-reporting-dimensions",level:2}],p={toc:s},u="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"new-relic"},"New Relic"),(0,o.kt)("p",null,"Vantage integrates with your New Relic account using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.newrelic.com/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/"},"NerdGraph"),", New Relic's GraphQL API. It accesses the API using an API token."),(0,o.kt)("h2",{id:"connect-your-new-relic-account"},"Connect Your New Relic Account"),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/signup"},"Create a free Vantage account"),", then follow the steps below to generate a New Relic API token and obtain your Account ID."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log in to your New Relic account. Then, follow the instructions in the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/#overview-keys"},"New Relic documentation")," to create a ",(0,o.kt)("strong",{parentName:"li"},"User key"),"."),(0,o.kt)("li",{parentName:"ol"},"Once you've created a new ",(0,o.kt)("strong",{parentName:"li"},"User key"),", you will see the key in your ",(0,o.kt)("strong",{parentName:"li"},"API keys")," list. Click the ellipses next to the key in the list and select ",(0,o.kt)("strong",{parentName:"li"},"Copy key"),". You will need this value for completing the integration with Vantage."),(0,o.kt)("li",{parentName:"ol"},"To obtain your Account ID, follow the instructions provided in the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.newrelic.com/docs/accounts/accounts-billing/account-structure/account-id/"},"New Relic documentation"),". Copy the value for your Account ID.")),(0,o.kt)("h3",{id:"create-the-connection"},"Create the Connection"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to the ",(0,o.kt)("a",{parentName:"li",href:"https://console.vantage.sh/settings/new_relic"},"New Relic Settings")," page in the Vantage console. "),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add Connection"),"."),(0,o.kt)("li",{parentName:"ol"},"Paste your ",(0,o.kt)("strong",{parentName:"li"},"New Relic Account ID")," and ",(0,o.kt)("strong",{parentName:"li"},"New Relic API Key")," you previously obtained into the provided fields."),(0,o.kt)("li",{parentName:"ol"},"Complete the additional fields based on the specific pricing for your account. This can include the per-gigabyte ingestion rate, amount of free ingestion per month, core and full platform user pricing, and any free user seats. For more information on New Relic pricing, see the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.newrelic.com/docs/accounts/accounts-billing/new-relic-one-pricing-billing/new-relic-one-pricing-billing/"},"New Relic documentation"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Connect Account"),". Vantage will automatically begin ingesting and visualizing your costs within the Vantage console, which may take a few minutes.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"New Relic data refreshes daily in the Vantage console.")),(0,o.kt)("h3",{id:"next-steps-manage-workspace-access"},"Next Steps: Manage Workspace Access"),(0,o.kt)("p",null,"Once your costs are imported, select which workspaces this integration is associated with. See the ",(0,o.kt)("a",{parentName:"p",href:"/workspaces#integration-workspace"},"Workspaces")," documentation for information."),(0,o.kt)("h2",{id:"new-relic-reporting-dimensions"},"New Relic Reporting Dimensions"),(0,o.kt)("p",null,"On New Relic ",(0,o.kt)("a",{parentName:"p",href:"/cost_reports"},"Cost Reports"),", you can filter across several dimensions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Account"),(0,o.kt)("li",{parentName:"ul"},"Service"),(0,o.kt)("li",{parentName:"ul"},"Category (e.g., New Relic Users - CoreUsers)")))}g.isMDXComponent=!0}}]);