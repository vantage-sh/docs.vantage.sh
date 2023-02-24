"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(n),m=o,g=l["".concat(c,".").concat(m)]||l[m]||d[m]||a;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},s="Kubernetes (OpenCost)",i={unversionedId:"opencost",id:"opencost",title:"Kubernetes (OpenCost)",description:"OpenCost is an emerging specification for Kubernetes costs. Vantage can ingest costs via OpenCost and Prometheus Remote Write and display them in the console. Any environments supported by OpenCost, including AWS, GCP, Azure, and on-prem, are supported by Vantage.",source:"@site/docs/opencost.md",sourceDirName:".",slug:"/opencost",permalink:"/opencost",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/opencost.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Setup Kubernetes",permalink:"/connecting_kubernetes"},next:{title:"Kubernetes (Container Insights)",permalink:"/kubernetes_container_insights"}},c={},p=[],u={toc:p},l="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kubernetes-opencost"},"Kubernetes (OpenCost)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.opencost.io"},"OpenCost")," is an emerging ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/opencost/opencost/blob/develop/spec/opencost-specv01.md"},"specification")," for Kubernetes costs. Vantage can ingest costs via OpenCost and Prometheus Remote Write and display them in the console. Any environments supported by OpenCost, including AWS, GCP, Azure, and on-prem, are supported by Vantage."),(0,o.kt)("p",null,"OpenCost is the recommended way to integrate Kubernetes cost reporting into Vantage."),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"When deploying an Opencost integration in Vantage the follow steps occur:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"An AWS Managed Prometheus Workspace is deployed into your AWS Account in us-east-1 - which Vantage will query directly."),(0,o.kt)("li",{parentName:"ol"},"An IAM User is created with permissions to write to this workspace."),(0,o.kt)("li",{parentName:"ol"},"Opencost and Prometheus are deployed to your Kubernetes cluster and configured to remote_write to the AWS Managed Prometheus. The created IAM User credentials are used for authentication.")),(0,o.kt)("p",null,"To get started with this integration visit the ",(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/settings/integrations"},"integrations")," page and select the AWS account you would like to get started with. Deploying a Managed Prometheus per account is optional. You can use the single Managed Prometheus Workspace across all regions across all accounts."),(0,o.kt)("p",null,"If you already have a hosted Prometheus solution (such as Grafana) you can contact ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@vantage.sh"},"support@vantage.sh")," to integrate directly."))}d.isMDXComponent=!0}}]);