/*! For license information please see 92bb876c.cfb8ca23.js.LICENSE.txt */
(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[6347],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,f=d["".concat(c,".").concat(p)]||d[p]||g[p]||r;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2961:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>K,contentTitle:()=>Z,default:()=>ee,frontMatter:()=>W,metadata:()=>H,toc:()=>X});var a=n(7462),o=n(7294),r=n(3905),s=n(4184),i=n.n(s),c=n(6792),l=n(5893);const u=o.forwardRef((({className:e,bsPrefix:t,as:n="div",...a},o)=>(t=(0,c.vE)(t,"card-body"),(0,l.jsx)(n,{ref:o,className:i()(e,t),...a}))));u.displayName="CardBody";const d=u,g=o.forwardRef((({className:e,bsPrefix:t,as:n="div",...a},o)=>(t=(0,c.vE)(t,"card-footer"),(0,l.jsx)(n,{ref:o,className:i()(e,t),...a}))));g.displayName="CardFooter";const p=g,f=o.createContext(null);f.displayName="CardHeaderContext";const m=f,v=o.forwardRef((({bsPrefix:e,className:t,as:n="div",...a},r)=>{const s=(0,c.vE)(e,"card-header"),u=(0,o.useMemo)((()=>({cardHeaderBsPrefix:s})),[s]);return(0,l.jsx)(m.Provider,{value:u,children:(0,l.jsx)(n,{ref:r,...a,className:i()(t,s)})})}));v.displayName="CardHeader";const h=v,y=o.forwardRef((({bsPrefix:e,className:t,variant:n,as:a="img",...o},r)=>{const s=(0,c.vE)(e,"card-img");return(0,l.jsx)(a,{ref:r,className:i()(n?`${s}-${n}`:s,t),...o})}));y.displayName="CardImg";const b=y,k=o.forwardRef((({className:e,bsPrefix:t,as:n="div",...a},o)=>(t=(0,c.vE)(t,"card-img-overlay"),(0,l.jsx)(n,{ref:o,className:i()(e,t),...a}))));k.displayName="CardImgOverlay";const w=k,x=o.forwardRef((({className:e,bsPrefix:t,as:n="a",...a},o)=>(t=(0,c.vE)(t,"card-link"),(0,l.jsx)(n,{ref:o,className:i()(e,t),...a}))));x.displayName="CardLink";const N=x,A=e=>o.forwardRef(((t,n)=>(0,l.jsx)("div",{...t,ref:n,className:i()(t.className,e)}))),C=A("h6"),P=o.forwardRef((({className:e,bsPrefix:t,as:n=C,...a},o)=>(t=(0,c.vE)(t,"card-subtitle"),(0,l.jsx)(n,{ref:o,className:i()(e,t),...a}))));P.displayName="CardSubtitle";const O=P,j=o.forwardRef((({className:e,bsPrefix:t,as:n="p",...a},o)=>(t=(0,c.vE)(t,"card-text"),(0,l.jsx)(n,{ref:o,className:i()(e,t),...a}))));j.displayName="CardText";const _=j,E=A("h5"),R=o.forwardRef((({className:e,bsPrefix:t,as:n=E,...a},o)=>(t=(0,c.vE)(t,"card-title"),(0,l.jsx)(n,{ref:o,className:i()(e,t),...a}))));R.displayName="CardTitle";const T=R,V=o.forwardRef((({bsPrefix:e,className:t,bg:n,text:a,border:o,body:r=!1,children:s,as:u="div",...g},p)=>{const f=(0,c.vE)(e,"card");return(0,l.jsx)(u,{ref:p,...g,className:i()(t,f,n&&`bg-${n}`,a&&`text-${a}`,o&&`border-${o}`),children:r?(0,l.jsx)(d,{children:s}):s})}));V.displayName="Card";const I=Object.assign(V,{Img:b,Title:T,Subtitle:O,Body:d,Link:N,Text:_,Header:h,Footer:p,ImgOverlay:w}),S=["as","disabled"];function D({tagName:e,disabled:t,href:n,target:a,rel:o,role:r,onClick:s,tabIndex:i=0,type:c}){e||(e=null!=n||null!=a||null!=o?"a":"button");const l={tagName:e};if("button"===e)return[{type:c||"button",disabled:t},l];const u=a=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(n))&&a.preventDefault(),t?a.stopPropagation():null==s||s(a)};return"a"===e&&(n||(n="#"),t&&(n=void 0)),[{role:null!=r?r:"button",disabled:void 0,tabIndex:t?void 0:i,href:n,target:"a"===e?a:void 0,"aria-disabled":t||void 0,rel:"a"===e?o:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},l]}const $=o.forwardRef(((e,t)=>{let{as:n,disabled:a}=e,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,S);const[r,{tagName:s}]=D(Object.assign({tagName:n,disabled:a},o));return(0,l.jsx)(s,Object.assign({},o,r,{ref:t}))}));$.displayName="Button";const z=o.forwardRef((({as:e,bsPrefix:t,variant:n="primary",size:a,active:o=!1,disabled:r=!1,className:s,...u},d)=>{const g=(0,c.vE)(t,"btn"),[p,{tagName:f}]=D({tagName:e,disabled:r,...u}),m=f;return(0,l.jsx)(m,{...p,...u,ref:d,disabled:r,className:i()(s,g,o&&"active",n&&`${g}-${n}`,a&&`${g}-${a}`,u.href&&r&&"disabled")})}));z.displayName="Button";const B=z;var M=n(5697),F=n.n(M);const G=e=>{let{title:t,icon:n,content:a,iconAltText:r,link:s}=e;return o.createElement(I,{className:"custom-card"},o.createElement(I.Body,null,o.createElement("div",{className:"d-flex justify-content-between align-items-center"},o.createElement("div",null,o.createElement("img",{className:"custom-icon",src:n,alt:r}),o.createElement("h2",{className:"custom-title"},t)),o.createElement("p",null,a))),o.createElement("div",{className:"custom-card-button-container"},o.createElement(B,{variant:"primary",className:"custom-button",href:s,role:"button","aria-label":"View Documentation"},"View Documentation")))};G.propTypes={title:F().string.isRequired,icon:F().string.isRequired,paragraph:F().string.isRequired,iconAltText:F().string.isRequired,link:F().string.isRequired};const L=G;var Q=n(4051),q=n(1555);const U=function(e){let{cards:t,columns:n}=e;const a=n,r=Math.ceil(t.length/a),s=[];for(let i=0;i<r;i++){const e=i*a,n=e+a,r=t.slice(e,n),c=o.createElement(Q.Z,{xs:4,md:4,className:"g-4 custom-card-row"},r.map(((e,t)=>o.createElement(q.Z,{key:t,className:"custom-card-col"},o.createElement(L,{title:e.title,content:e.content,icon:e.icon,link:e.link,iconAltText:e.iconAltText})))));s.push(c)}return o.createElement("div",{className:"custom-card-group"},s)},W={id:"getting_started",title:"Quickstart",description:"Learn how to use Vantage to connect multiple cloud providers and create cost reports as resources.",keywords:["Quickstart","Connect providers"]},Z="Quickstart",H={unversionedId:"getting_started",id:"getting_started",title:"Quickstart",description:"Learn how to use Vantage to connect multiple cloud providers and create cost reports as resources.",source:"@site/docs/getting_started.md",sourceDirName:".",slug:"/getting_started",permalink:"/getting_started",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/getting_started.md",tags:[],version:"current",frontMatter:{id:"getting_started",title:"Quickstart",description:"Learn how to use Vantage to connect multiple cloud providers and create cost reports as resources.",keywords:["Quickstart","Connect providers"]},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Team Accountability",permalink:"/team_accountability"}},K={},X=[{value:"Step 1: Create an Account",id:"step-1-create-an-account",level:2},{value:"Step 2: Connect Providers",id:"step-2-connect-providers",level:2},{value:"Step 3: View Ingested Costs and Create Cost Reporting Resources",id:"step-3-view-ingested-costs-and-create-cost-reporting-resources",level:2}],Y={toc:X},J="wrapper";function ee(e){let{components:t,...n}=e;return(0,r.kt)(J,(0,a.Z)({},Y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quickstart"},"Quickstart"),(0,r.kt)("admonition",{title:"Get Started",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This quickstart guide will help you to set up your Vantage account, connect one or multiple providers, and start using Cost Reporting and Financial Planning features. ")),(0,r.kt)("h2",{id:"step-1-create-an-account"},"Step 1: Create an Account"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get started by ",(0,r.kt)("a",{parentName:"li",href:"https://console.vantage.sh/signup"},"creating a Vantage account"),". "),(0,r.kt)("li",{parentName:"ul"},"Optionally, you can upgrade to a paid plan to unlock additional features and track higher amounts of cloud infrastructure costs. View the ",(0,r.kt)("a",{parentName:"li",href:"https://www.vantage.sh/pricing"},"Vantage Pricing page")," for all pricing and plan details. All paid plans have an option to trial the service before committing to a subscription.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"step-2-connect-providers"},"Step 2: Connect Providers"),(0,r.kt)("p",null,"Next, create a data integration between at least one of your providers and Vantage. Detailed integration documentation is linked for each of the providers below. "),(0,r.kt)(U,{cards:[{icon:"/img/logos/logo-icon-aws.svg",iconAltText:"AWS logo",title:"Amazon Web Services (AWS)",content:"Vantage integrates with your AWS account through a Cross-Account IAM role, giving Vantage read-only access to an organization's cost data. After the initial sync, you will be able to take advantage of features in Vantage to manage, inspect, and model your AWS spend.",link:"/connecting_aws"},{icon:"/img/logos/logo-icon-azure.svg",iconAltText:"Azure logo",title:"Azure",content:"Vantage integrates with your Azure account by using an Active Directory Service Principal, which can be assigned access to both management groups or individual subscriptions. Any subscriptions that are part of a resource group will be automatically imported.",link:"/connecting_azure"},{icon:"/img/logos/logo-icon-gcp.svg",iconAltText:"GCP logo",title:"Google Cloud Platform (GCP)",content:"Vantage integrates with your GCP account through a service account, providing Vantage with read-only access to an organization's cost data. Following the creation of the role with the appropriate permissions, Vantage will initiate the synchronization of cost data and resource metadata.",link:"/connecting_gcp"},{icon:"/img/logos/logo-icon-kubernetes.svg",iconAltText:"Kubernetes logo",title:"Kubernetes",content:"Vantage recommends OpenCost as the preferred integration point for Kubernetes costs, but it can also ingest metrics through AWS Container Insights.",link:"/connecting_kubernetes"},{icon:"/img/logos/logo-icon-datadog.svg",iconAltText:"Datadog logo",title:"Datadog",content:"Vantage integrates with your Datadog account through a read-only Datadog OAuth token. After connecting, Vantage automatically receives read-only access to appropriate cost and usage APIs to begin ingesting Datadog cost data",link:"/connecting_datadog"},{icon:"/img/logos/logo-icon-new-relic.svg",iconAltText:"New Relic logo",title:"New Relic",content:"Vantage integrates with your New Relic account through the use of New Relic Usage Data via the New Relic GraphQL API.",link:"/connecting_new_relic"},{icon:"/img/logos/logo-icon-mongodb.svg",iconAltText:"MongoDB Atlas logo",title:"MongoDB Atlas",content:"Vantage integrates with MongoDB Atlas account through read-only use of the Invoices API. To see Active Resources for your MongoDB Atlas account, Vantage uses the Clusters API and the Projects API.",link:"/connecting_mongodb-atlas"},{icon:"/img/logos/logo-icon-snowflake.svg",iconAltText:"Snowflake logo",title:"Snowflake",content:"Vantage integrates with your Snowflake account through a secure, read-only user who has access to Snowflake usage tables. Optionally, Vantage can pull from a dedicated schema that you create.",link:"/connecting_snowflake"},{icon:"/img/logos/logo-icon-databricks.svg",iconAltText:"Databricks logo",title:"Databricks",content:"Vantage integrates with your Databricks account through the use of Billable Usage Logs. Vantage provides an S3 bucket for Databricks to deliver usage logs to on a periodic basis.",link:"/connecting_databricks"},{icon:"/img/logos/logo-icon-fastly.svg",iconAltText:"Fastly logo",title:"Fastly",content:"Vantage integrates with your Fastly account through a read-only API token. Fastly API tokens are free for you to create\u2014and adding them to the Vantage console only takes a few minutes.",link:"/connecting_fastly"},{icon:"/img/logos/logo-icon-openai.svg",iconAltText:"OpenAI logo",title:"OpenAI",content:"Vantage integrates with your OpenAI account through an API token. OpenAI API tokens are free for you to create\u2014and adding them to the Vantage console only takes a few minutes.",link:"/connecting_open_ai"},{icon:"/img/logos/logo-icon-oracle.svg",iconAltText:"Oracle Cloud logo",title:"Oracle Cloud",content:"Vantage connects to Oracle Cloud using a read-only IAM user and API key to read from a Cost and Usage Reports object storage bucket.",link:"/connecting_oracle"},{icon:"/img/logos/logo-icon-confluent.svg",iconAltText:"Confluent logo",title:"Confluent",content:"Vantage integrates with your Confluent account through a revocable read/write API key and secret. Confluent API keys are free for you to create\u2014and adding to the Vantage console only takes a few minutes.",link:"/connecting_confluent"}],columns:2,mdxType:"CustomCardGroup"}),(0,r.kt)("br",null),(0,r.kt)("admonition",{title:"Other Providers",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Vantage will be launching support for additional cloud infrastructure providers in the future. If you have a particular provider that you would like supported, please reach out to ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@vantage.sh"},"support@vantage.sh"),".")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"step-3-view-ingested-costs-and-create-cost-reporting-resources"},"Step 3: View Ingested Costs and Create Cost Reporting Resources"),(0,r.kt)("p",null,"Once you create some provider integrations, Vantage will automatically begin ingesting billing information for your account. The default landing page in the Vantage console is the ",(0,r.kt)("a",{parentName:"p",href:"/overview"},(0,r.kt)("strong",{parentName:"a"},"Overview"))," page. This page serves as an executive-level summary, providing a comprehensive snapshot of the cost metrics that matter most to you. "),(0,r.kt)("p",null,"As you continue to set up your cost reporting infrastructure, you can use the below guides for some best practices in Vantage. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/team_accountability"},(0,r.kt)("strong",{parentName:"a"},"Team Accountability")),": To ensure team accountability in cloud cost management, follow this guide. Create Cost Report Folders for specific teams, generate Cost Reports for various dimensions, implement Cost Report notifications, set team budgets, and continually monitor and optimize to minimize unnecessary expenses, thus guaranteeing efficient cloud spending."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/executive_reporting"},(0,r.kt)("strong",{parentName:"a"},"Executive Reporting")),": If you want to set up executive-level reporting, follow this guide. Use tools in Vantage to effortlessly gather and present comprehensive insights into your organization's cloud spending, enabling you to deliver actionable reports that facilitate informed decision-making at the executive level."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/hidden_costs"},(0,r.kt)("strong",{parentName:"a"},"Find Hidden Costs")),": If you want to uncover hidden costs and optimize spending, follow this guide. Vantage provides tools like Active Resources for listing cost-driving resources and Cost Anomaly Alerts to automatically detect and alert on unexpected expenses.")))}ee.isMDXComponent=!0},4184:(e,t)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var s=o.apply(null,n);s&&e.push(s)}}else if("object"===r){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},1555:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(4184),o=n.n(a),r=n(7294),s=n(6792),i=n(5893);const c=r.forwardRef(((e,t)=>{const[{className:n,...a},{as:r="div",bsPrefix:c,spans:l}]=function({as:e,bsPrefix:t,className:n,...a}){t=(0,s.vE)(t,"col");const r=(0,s.pi)(),i=(0,s.zG)(),c=[],l=[];return r.forEach((e=>{const n=a[e];let o,r,s;delete a[e],"object"==typeof n&&null!=n?({span:o,offset:r,order:s}=n):o=n;const u=e!==i?`-${e}`:"";o&&c.push(!0===o?`${t}${u}`:`${t}${u}-${o}`),null!=s&&l.push(`order${u}-${s}`),null!=r&&l.push(`offset${u}-${r}`)})),[{...a,className:o()(n,...c,...l)},{as:e,bsPrefix:t,spans:c}]}(e);return(0,i.jsx)(r,{...a,ref:t,className:o()(n,!l.length&&c)})}));c.displayName="Col";const l=c},4051:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(4184),o=n.n(a),r=n(7294),s=n(6792),i=n(5893);const c=r.forwardRef((({bsPrefix:e,className:t,as:n="div",...a},r)=>{const c=(0,s.vE)(e,"row"),l=(0,s.pi)(),u=(0,s.zG)(),d=`${c}-cols`,g=[];return l.forEach((e=>{const t=a[e];let n;delete a[e],null!=t&&"object"==typeof t?({cols:n}=t):n=t;const o=e!==u?`-${e}`:"";null!=n&&g.push(`${d}${o}-${n}`)})),(0,i.jsx)(n,{ref:r,...a,className:o()(t,c,...g)})}));c.displayName="Row";const l=c},6792:(e,t,n)=>{"use strict";n.d(t,{pi:()=>u,vE:()=>l,zG:()=>d});var a=n(7294);n(5893);const o=["xxl","xl","lg","md","sm","xs"],r="xs",s=a.createContext({prefixes:{},breakpoints:o,minBreakpoint:r}),{Consumer:i,Provider:c}=s;function l(e,t){const{prefixes:n}=(0,a.useContext)(s);return e||n[t]||t}function u(){const{breakpoints:e}=(0,a.useContext)(s);return e}function d(){const{minBreakpoint:e}=(0,a.useContext)(s);return e}},5251:(e,t,n)=>{"use strict";n(7418);var a=n(7294),o=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;o=r("react.element"),r("react.fragment")}var s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var a,r={},l=null,u=null;for(a in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,a)&&!c.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===r[a]&&(r[a]=t[a]);return{$$typeof:o,type:e,key:l,ref:u,props:r,_owner:s.current}}t.jsx=l},5893:(e,t,n)=>{"use strict";e.exports=n(5251)}}]);