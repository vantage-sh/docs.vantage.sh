"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[1055],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),k=l(a),m=r,d=k["".concat(c,".").concat(m)]||k[m]||u[m]||o;return a?n.createElement(d,s(s({ref:t},p),{},{components:a})):n.createElement(d,s({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[k]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3435:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={id:"workspaces",title:"Workspaces",description:"This page describes how to view and create Workspaces in the console.",keywords:["workspaces"]},s="Workspaces",i={unversionedId:"workspaces",id:"workspaces",title:"Workspaces",description:"This page describes how to view and create Workspaces in the console.",source:"@site/docs/workspaces.md",sourceDirName:".",slug:"/workspaces",permalink:"/workspaces",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/workspaces.md",tags:[],version:"current",frontMatter:{id:"workspaces",title:"Workspaces",description:"This page describes how to view and create Workspaces in the console.",keywords:["workspaces"]},sidebar:"someSidebar",previous:{title:"Role-Based Access Control (RBAC)",permalink:"/rbac"},next:{title:"Virtual Tagging",permalink:"/virtual_tagging"}},c={},l=[{value:"Navigate between Workspaces",id:"navigate-between-workspaces",level:2},{value:"Create a Workspace",id:"create-a-workspace",level:2},{value:"Manage Workspaces",id:"manage-workspaces",level:2},{value:"Manage Workspace Provider Integrations",id:"integration-workspace",level:2}],p={toc:l},k="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"workspaces"},"Workspaces"),(0,r.kt)("p",null,"In Vantage, a ",(0,r.kt)("em",{parentName:"p"},"workspace")," is a way to separate your provider integrations into distinct cost views. Teams can use workspaces to create focused views of costs and even restrict access to costs within each workspace using ",(0,r.kt)("a",{parentName:"p",href:"/rbac"},"Role-Based Access Controls (RBAC)")," (Enterprise customers). You can specify which ",(0,r.kt)("a",{parentName:"p",href:"/workspaces#integration-workspace"},"integrations")," are available in which workspaces. Some use cases for workspaces are listed below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You may have multiple accounts within the same cloud provider, such as Azure or AWS. You can use a single Vantage workspace to ingest costs for all these accounts into the same view. "),(0,r.kt)("li",{parentName:"ul"},"Create a distinct Vantage workspace for each of your environments, such as production, staging, and development. Then, specify which provider accounts are associated with which workspace. For example, a particular Datadog account may be associated with only your ",(0,r.kt)("em",{parentName:"li"},"Monitoring")," workspace."),(0,r.kt)("li",{parentName:"ul"},"If you manage multiple customers, you can create individual workspaces for each customer account (Customer A, Customer B, etc.). This allows you to separate and manage cost data for each customer independently. Then, you can connect only the corresponding integrations to each customer's workspace, ensuring that they have access only to their data and reports.")),(0,r.kt)("h2",{id:"navigate-between-workspaces"},"Navigate between Workspaces"),(0,r.kt)("p",null,"If you have more than one workspace in your Vantage account, the ",(0,r.kt)("strong",{parentName:"p"},"Workspaces")," menu is displayed on the top left of the console. You can select any of the listed workspaces to move between each workspace."),(0,r.kt)("h2",{id:"create-a-workspace"},"Create a Workspace"),(0,r.kt)("p",null,"When your Vantage account is created, you are assigned a ",(0,r.kt)("strong",{parentName:"p"},"Default")," workspace. You can create other workspaces in addition to the default workspace. To create a new workspace, complete the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the top navigation menu, click ",(0,r.kt)("strong",{parentName:"li"},"Settings"),"."),(0,r.kt)("li",{parentName:"ol"},"On the left navigation, under ",(0,r.kt)("strong",{parentName:"li"},"General Settings"),", click ",(0,r.kt)("strong",{parentName:"li"},"Workspaces"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create a Workspace"),"."),(0,r.kt)("li",{parentName:"ol"},"Enter a ",(0,r.kt)("strong",{parentName:"li"},"Name")," for your new workspace (e.g., ",(0,r.kt)("em",{parentName:"li"},"Management"),"), then click ",(0,r.kt)("strong",{parentName:"li"},"Create"),".")),(0,r.kt)("h2",{id:"manage-workspaces"},"Manage Workspaces"),(0,r.kt)("p",null,"All your existing workspaces are displayed on the ",(0,r.kt)("a",{parentName:"p",href:"https://console.vantage.sh/settings/workspaces"},(0,r.kt)("strong",{parentName:"a"},"Workspaces"))," Settings screen. Select a listed workspace to view additional details, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Turn off ",(0,r.kt)("strong",{parentName:"li"},"Active Resource Syncing"),". Turn off automatic syncing if you do not want Vantage to be automatically pulling active resource details from your account. This option is useful if you find Vantage is making too many API calls to your AWS endpoints."),(0,r.kt)("li",{parentName:"ul"},"View team workspace access. See the ",(0,r.kt)("a",{parentName:"li",href:"/rbac"},"Role-Based Access Control")," documentation for more information about teams."),(0,r.kt)("li",{parentName:"ul"},"View configuration details for the workspace, including the workspace token, which is used as the workspace identifier in ",(0,r.kt)("a",{parentName:"li",href:"https://vantage.readme.io/reference/getworkspaces"},"API calls"),"."),(0,r.kt)("li",{parentName:"ul"},"Delete the workspace.",(0,r.kt)("admonition",{parentName:"li",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Note that this action is not reversible.")))),(0,r.kt)("h2",{id:"integration-workspace"},"Manage Workspace Provider Integrations"),(0,r.kt)("p",null,"Once you connect a cloud provider to Vantage, and costs are fully imported, you'll need to specify the workspaces where this integration should be accessible for creating reports and viewing costs. To manage the workspaces associated with an integration:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the top navigation, click ",(0,r.kt)("strong",{parentName:"li"},"Settings"),"."),(0,r.kt)("li",{parentName:"ol"},"From the left navigation, click ",(0,r.kt)("strong",{parentName:"li"},"Integrations"),"."),(0,r.kt)("li",{parentName:"ol"},"All your provider integrations are displayed. Click the settings icon (looks like a wheel) next to an integration (e.g., Fastly) in the list. "),(0,r.kt)("li",{parentName:"ol"},"The provider's integration page is displayed. Click the settings icon next to a listed account."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("strong",{parentName:"li"},"Manage Connection")," page is displayed. Under ",(0,r.kt)("strong",{parentName:"li"},"Workspace Access"),", select or deselect the checkbox next to a listed workspace to specify which workspaces the integration is associated with. ")),(0,r.kt)("p",null,"In the below example, the Fastly integration is only available in the ",(0,r.kt)("em",{parentName:"p"},"Demo Accounts")," workspace. If you navigate to the ",(0,r.kt)("em",{parentName:"p"},"Management")," or ",(0,r.kt)("em",{parentName:"p"},"Marketing")," workspace, you'll be unable to view Fastly cost data in Cost Reports or other Vantage features."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)("img",{alt:"The integration workspace is displayed with an arrow pointing from the settings icon. The arrow points to the integration screen with another arrow point from the settings icon. That arrow points to the specific integration and the Workspace access section.",width:"100%",src:"/img/integration-workspace.png"})))}u.isMDXComponent=!0}}]);