"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[197],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),l=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),u=l(a),d=r,m=u["".concat(s,".").concat(d)]||u[d]||k[d]||i;return a?n.createElement(m,o(o({ref:e},p),{},{components:a})):n.createElement(m,o({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[u]="string"==typeof t?t:r,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},131:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={id:"connecting_databricks",title:"Databricks",description:"This page walks through how to integrate Vantage with your Databricks account.",keywords:["Databricks","Connect Databricks"]},o="Databricks",c={unversionedId:"connecting_databricks",id:"connecting_databricks",title:"Databricks",description:"This page walks through how to integrate Vantage with your Databricks account.",source:"@site/docs/connecting_databricks.md",sourceDirName:".",slug:"/connecting_databricks",permalink:"/connecting_databricks",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/connecting_databricks.md",tags:[],version:"current",frontMatter:{id:"connecting_databricks",title:"Databricks",description:"This page walks through how to integrate Vantage with your Databricks account.",keywords:["Databricks","Connect Databricks"]},sidebar:"someSidebar",previous:{title:"Snowflake Costs by Query",permalink:"/snowflake_cost_by_query"},next:{title:"Fastly",permalink:"/connecting_fastly"}},s={},l=[{value:"Connect Your Databricks Account",id:"connect-your-databricks-account",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Create the Connection",id:"create-the-connection",level:3},{value:"Finalize Your Databricks Account Setup",id:"finalize-your-databricks-account-setup",level:3},{value:"Databricks Reporting Dimensions",id:"databricks-reporting-dimensions",level:2}],p={toc:l},u="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"databricks"},"Databricks"),(0,r.kt)("p",null,"Vantage integrates with your Databricks account through the use of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.databricks.com/administration-guide/account-settings/billable-usage-delivery.html"},"Billable Usage Logs"),". Vantage provides an S3 bucket for Databricks to deliver usage logs to on a periodic basis. Databricks delivers cost-only data to the bucket, outlining the Databricks service used, usage in Databricks Units (DBU), and metadata related to workspace, cluster, and any related tags."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)("img",{alt:"Databricks Cost Reports",width:"60%",src:"/img/databricks-cost-report.png"})),(0,r.kt)("h2",{id:"connect-your-databricks-account"},"Connect Your Databricks Account"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://console.vantage.sh/signup"},"Create a free Vantage account"),", then follow the steps below to integrate Databricks costs."),(0,r.kt)("h3",{id:"create-the-connection"},"Create the Connection"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the Vantage console, navigate to the ",(0,r.kt)("a",{parentName:"li",href:"https://console.vantage.sh/settings/databricks/"},"Databricks Settings")," page."),(0,r.kt)("li",{parentName:"ol"},"At the top, select the ",(0,r.kt)("strong",{parentName:"li"},"Connect")," tab, then click ",(0,r.kt)("strong",{parentName:"li"},"Setup Account"),"."),(0,r.kt)("li",{parentName:"ol"},"Enter your ",(0,r.kt)("strong",{parentName:"li"},"Databricks Account ID"),".",(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can find your Databricks Account ID in the user profile dropdown of the ",(0,r.kt)("a",{parentName:"p",href:"https://accounts.cloud.databricks.com/login"},"Databricks account console"),"."))),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Connect Account"),"."),(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("a",{parentName:"li",href:"https://console.vantage.sh/settings/databricks/"},"Databricks Settings")," page, you will see your account listed with a ",(0,r.kt)("strong",{parentName:"li"},"Status")," of ",(0,r.kt)("inlineCode",{parentName:"li"},"Pending"),". Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Pending")," to complete the connection. Additional steps will be displayed on the ",(0,r.kt)("strong",{parentName:"li"},"Finalize Your Databricks Account Setup")," page. Keep this page open.")),(0,r.kt)("h3",{id:"finalize-your-databricks-account-setup"},"Finalize Your Databricks Account Setup"),(0,r.kt)("p",null,"Vantage will prepare an S3 bucket to store your Databricks ",(0,r.kt)("a",{parentName:"p",href:"https://docs.databricks.com/en/administration-guide/account-settings/usage.html#how-to-authenticate-to-the-account-api"},"billable usage logs"),". You will need to configure Databricks to deliver your usage logs to that bucket."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install or update the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.databricks.com/en/dev-tools/cli/install.html"},"Databricks CLI"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure authentication for the Databricks CLI:"),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The below steps are based on the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.databricks.com/en/dev-tools/cli/authentication.html#oauth-user-to-machine-u2m-authentication"},"OAuth user-to-machine (U2M) authentication")," Databricks documentation.")),(0,r.kt)("p",{parentName:"li"},"Create ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.databrickscfg"),". Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<ACCOUNT_ID>")," with the value of your Databricks account. (See the Databricks documentation for how to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.databricks.com/en/administration-guide/account-settings/index.html#account-id"},"locate your account ID"),".) Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"<ADMIN_USERNAME>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<ADMIN_PASSWORD>")," with your account administrator user's credentials."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[production]\nhost       = accounts.cloud.databricks.com\naccount_id = <ACCOUNT_ID>\nusername   = <ADMIN_USERNAME>\npassword   = <ADMIN_PASSWORD>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Initiate OAuth token management with the following command, replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"ACCOUNT_ID")," with the account ID you used in the last step:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"databricks auth login --host https://accounts.cloud.databricks.com/ --account-id <ACCOUNT_ID>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Follow the remaining instructions provided on the ",(0,r.kt)("strong",{parentName:"p"},"Finalize Your Databricks Account Setup")," page in Vantage. These instructions will walk you step by step through creating a storage configuration, creating a credential configuration, and creating a log delivery configuration to finalize the integration."))),(0,r.kt)("p",null,"After completing all the steps above, your Databricks integration status should automatically update from ",(0,r.kt)("inlineCode",{parentName:"p"},"Pending")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Importing"),". Once fully imported, the status will update to ",(0,r.kt)("inlineCode",{parentName:"p"},"Imported"),". You can view your connection status on the ",(0,r.kt)("a",{parentName:"p",href:"https://console.vantage.sh/settings/databricks/"},"Databricks Settings")," page."),(0,r.kt)("p",null,"Databricks generally delivers usage logs once per day."),(0,r.kt)("h2",{id:"databricks-reporting-dimensions"},"Databricks Reporting Dimensions"),(0,r.kt)("p",null,"Databricks ",(0,r.kt)("a",{parentName:"p",href:"/cost_reports/"},"Cost Reports")," enable you to filter Databricks costs across several dimensions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Account"),(0,r.kt)("li",{parentName:"ul"},"Category"),(0,r.kt)("li",{parentName:"ul"},"Tag"),(0,r.kt)("li",{parentName:"ul"},"Not tagged"),(0,r.kt)("li",{parentName:"ul"},"Service")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("strong",{parentName:"p"},"Tag")," filter contains values like ",(0,r.kt)("inlineCode",{parentName:"p"},"JobID"),", which can be used to view costs for specific Databricks jobs.")))}k.isMDXComponent=!0}}]);