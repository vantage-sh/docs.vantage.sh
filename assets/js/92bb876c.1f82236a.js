"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[6347],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=l(n),d=o,h=g["".concat(s,".").concat(d)]||g[d]||p[d]||r;return n?a.createElement(h,c(c({ref:t},u),{},{components:n})):a.createElement(h,c({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={},c="Connect Providers",i={unversionedId:"getting_started",id:"getting_started",title:"Connect Providers",description:"To get started using Vantage to explore your cloud infrastructure costs, you'll want to create a data integration between at least one of your providers and Vantage.",source:"@site/docs/getting_started.md",sourceDirName:".",slug:"/getting_started",permalink:"/getting_started",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/getting_started.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Team Accountability",permalink:"/team_accountability"}},s={},l=[{value:"Connecting Amazon Web Services (AWS)",id:"connecting-amazon-web-services-aws",level:2},{value:"Connecting Microsoft Azure",id:"connecting-microsoft-azure",level:2},{value:"Connecting Google Cloud Platform (GCP)",id:"connecting-google-cloud-platform-gcp",level:2},{value:"Connecting Kubernetes",id:"connecting-kubernetes",level:2},{value:"Connecting Datadog",id:"connecting-datadog",level:2},{value:"Connecting New Relic",id:"connecting-new-relic",level:2},{value:"Connecting MongoDB Atlas",id:"connecting-mongodb-atlas",level:2},{value:"Connecting Snowflake",id:"connecting-snowflake",level:2},{value:"Connecting Databricks",id:"connecting-databricks",level:2},{value:"Connecting Fastly",id:"connecting-fastly",level:2},{value:"Other Providers",id:"other-providers",level:2}],u={toc:l},g="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(g,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connect-providers"},"Connect Providers"),(0,o.kt)("p",null,"To get started using Vantage to explore your cloud infrastructure costs, you'll want to create a data integration between at least one of your providers and Vantage."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Connecting providers",src:n(7388).Z,width:"1064",height:"392"})),(0,o.kt)("h2",{id:"connecting-amazon-web-services-aws"},"Connecting Amazon Web Services (AWS)"),(0,o.kt)("p",null,"Vantage integrates with AWS via a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html"},"cross-account IAM role"),". This gives Vantage read-only access to an organization's cost data. Once the role has been created and given the correct set of permissions, Vantage will begin syncing an organization's cost data and resource metadata. After the initial sync is complete, users will be able to take advantage of all of the features of the Vantage platform to manage, inspect and model their AWS spend."),(0,o.kt)("p",null,"Get started by ",(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/signup"},"creating a Vantage account")," and ",(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/setup"},"connecting an AWS account"),". The onboarding flow will guide you through connecting your AWS account to Vantage. Full documentation on connecting an AWS account, can be found ",(0,o.kt)("a",{parentName:"p",href:"/connecting_aws/"},"here"),"."),(0,o.kt)("h2",{id:"connecting-microsoft-azure"},"Connecting Microsoft Azure"),(0,o.kt)("p",null,"Vantage integrates with your Azure account through the use of a Active Directory ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/service-accounts-principal"},"Service Principal"),". This principal is then assigned access to either ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/governance/management-groups/overview"},"management groups")," or individual ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org-subscriptions"},"subscriptions"),". Any subscriptions that are part of a ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal"},"resource group")," will be automatically imported."),(0,o.kt)("p",null,"Get started by ",(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/signup"},"creating a Vantage account")," and ",(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/setup"},"connecting an Azure account"),". The onboarding flow will guide you through connecting your Azure account to Vantage. Full documentation on connecting an Azure account can be found ",(0,o.kt)("a",{parentName:"p",href:"/connecting_azure/"},"here"),"."),(0,o.kt)("h2",{id:"connecting-google-cloud-platform-gcp"},"Connecting Google Cloud Platform (GCP)"),(0,o.kt)("p",null,"Vantage integrates with GCP via a ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/service-accounts"},"service account"),". This gives Vantage read-only access to an organization's cost data. Once the role has been created and given the correct set of permissions, Vantage will begin syncing an organization's cost data and resource metadata. After the initial sync is complete, users will be able to take advantage of all of the features of the Vantage platform to manage, inspect and model their GCP spend."),(0,o.kt)("p",null,"Get started by ",(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/signup"},"creating a Vantage account")," and ",(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/setup"},"connecting a GCP billing account"),". The onboarding flow will guide you through connecting your GCP account to Vantage. Full documentation on connecting a GCP billing account can be found ",(0,o.kt)("a",{parentName:"p",href:"/connecting_gcp/"},"here"),"."),(0,o.kt)("h2",{id:"connecting-kubernetes"},"Connecting Kubernetes"),(0,o.kt)("p",null,"Vantage recommends ",(0,o.kt)("a",{parentName:"p",href:"/opencost"},"OpenCost")," as the preferred integration point for Kubernetes costs, but can also ingest metrics through AWS Container Insights."),(0,o.kt)("p",null,"Get started by ",(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/signup"},"creating a Vantage account")," and ",(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/setup"},"connecting a cloud provider account"),". The onboarding flow will guide you through creating the data integration to your cloud provider. Full documentation on getting started with Kubernetes can be found ",(0,o.kt)("a",{parentName:"p",href:"/connecting_kubernetes/"},"here"),"."),(0,o.kt)("h2",{id:"connecting-datadog"},"Connecting Datadog"),(0,o.kt)("p",null,"Vantage integrates with your Datadog account through a read only Datadog OAuth token. The user which completes this OAuth flow will need access to the ",(0,o.kt)("strong",{parentName:"p"},"usage_read")," scope to complete the connection. Get started with Datadog costs ",(0,o.kt)("a",{parentName:"p",href:"/connecting_datadog"},"here"),"."),(0,o.kt)("h2",{id:"connecting-new-relic"},"Connecting New Relic"),(0,o.kt)("p",null,"Vantage integrates with your New Relic account through the use of ",(0,o.kt)("a",{parentName:"p",href:"https://docs.newrelic.com/docs/accounts/accounts-billing/new-relic-one-pricing-billing/usage-queries-alerts/"},"New Relic Usage Data")," via the New Relic GraphQL API. Get started with New Relic costs ",(0,o.kt)("a",{parentName:"p",href:"/connecting_new_relic"},"here"),"."),(0,o.kt)("h2",{id:"connecting-mongodb-atlas"},"Connecting MongoDB Atlas"),(0,o.kt)("p",null,"Vantage integrates with your MongoDB account through read-only use of the ",(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/atlas/reference/api-resources-spec/#tag/Invoices"},"Invoices API"),". To see ",(0,o.kt)("a",{parentName:"p",href:"/active_resources"},"Active Resources")," for your MongoDB Atlas account, Vantage uses the ",(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/atlas/reference/api-resources-spec/#tag/Clusters"},"Clusters API")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/atlas/reference/api-resources-spec/#tag/Projects"},"Projects API"),". Get started with MongoDB Atlas costs ",(0,o.kt)("a",{parentName:"p",href:"/connecting_mongodb-atlas"},"here"),"."),(0,o.kt)("h2",{id:"connecting-snowflake"},"Connecting Snowflake"),(0,o.kt)("p",null,"Vantage integrates with your Snowflake account through a secure, read-only user that has access to Snowflake usage tables. Optionally, we have a recommendation for creating a dedicated schema which Vantage can pull from. Get started with Snowflake costs ",(0,o.kt)("a",{parentName:"p",href:"/connecting_snowflake"},"here"),"."),(0,o.kt)("h2",{id:"connecting-databricks"},"Connecting Databricks"),(0,o.kt)("p",null,"Vantage integrates with your Databricks account through the use of ",(0,o.kt)("a",{parentName:"p",href:"https://docs.databricks.com/administration-guide/account-settings/billable-usage-delivery.html"},"Billable Usage Logs"),". Vantage provides an S3 bucket for Databricks to deliver usage logs to on a periodic basis. Get started with Databricks costs ",(0,o.kt)("a",{parentName:"p",href:"/connecting_databricks"},"here"),"."),(0,o.kt)("h2",{id:"connecting-fastly"},"Connecting Fastly"),(0,o.kt)("p",null,"Vantage integrates with your Fastly account through a read-only API token. Fastly API Tokens are free for you to create. Adding them to the ",(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/signup"},"Vantage console")," only takes a few minutes. Step by step instructions to connect Fastly can be found ",(0,o.kt)("a",{parentName:"p",href:"/connecting_fastly"},"here"),"."),(0,o.kt)("h2",{id:"other-providers"},"Other Providers"),(0,o.kt)("p",null,"Vantage will be launching support for additional cloud infrastructure providers in the future. If you have a particular provider that you would like supported, please reach out to ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@vantage.sh"},"support@vantage.sh"),"."))}p.isMDXComponent=!0},7388:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connecting-providers-2-92160d7fc36e1db66bcfdd91c9d416d9.png"}}]);