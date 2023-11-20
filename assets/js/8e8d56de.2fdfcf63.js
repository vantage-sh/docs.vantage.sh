"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[7051],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(a),g=r,d=p["".concat(c,".").concat(g)]||p[g]||f[g]||o;return a?n.createElement(d,s(s({ref:t},u),{},{components:a})):n.createElement(d,s({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9449:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const o={},s="Set Up Snowflake",l={unversionedId:"connecting_snowflake",id:"connecting_snowflake",title:"Set Up Snowflake",description:"Create a free Vantage account then follow the steps below to integrate Snowflake costs.",source:"@site/docs/connecting_snowflake.md",sourceDirName:".",slug:"/connecting_snowflake",permalink:"/connecting_snowflake",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/connecting_snowflake.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"MongoDB Atlas",permalink:"/connecting_mongodb-atlas"},next:{title:"Snowflake Costs by Query",permalink:"/snowflake_cost_by_query"}},c={},i=[{value:"Connecting Your Snowflake Account",id:"connecting-your-snowflake-account",level:2},{value:"Snowflake IP Allowed List",id:"snowflake-ip-allowed-list",level:3},{value:"Snowflake Schema for Vantage",id:"snowflake-schema-for-vantage",level:2}],u={toc:i},p="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"set-up-snowflake"},"Set Up Snowflake"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://console.vantage.sh/signup"},"Create a free Vantage account")," then follow the steps below to integrate Snowflake costs."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)("img",{alt:"Snowflake Cost Reports",width:"60%",src:"/img/snowflake_cost_report.png"})),(0,r.kt)("h2",{id:"connecting-your-snowflake-account"},"Connecting Your Snowflake Account"),(0,r.kt)("p",null,"Vantage integrates with your Snowflake account through a secure, read-only user that has access to Snowflake usage tables. Optionally, see below for instructions on creating a specific schema for the Vantage user."),(0,r.kt)("p",null,"Vantage requires read-only access to the following tables:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/sql-reference/functions/warehouse_metering_history.html"},"SNOWFLAKE.ORGANIZATION_USAGE.WAREHOUSE_METERING_HISTORY")),(0,r.kt)("p",{parentName:"li"},"Returns hourly credit usage for both virtual warehouse credit usage and cloud service credit usage per each warehouse for all warehouses in your account. Data retained for 1 year.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/sql-reference/account-usage/query_history.html"},"SNOWFLAKE.ACCOUNT_USAGE.QUERY_HISTORY")),(0,r.kt)("p",{parentName:"li"},"Query history with various dimensions, including total elapsed time, warehouse used, data bytes scanned, etc. Data retained for 1 year.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/sql-reference/organization-usage/usage_in_currency_daily.html"},"SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY")),(0,r.kt)("p",{parentName:"li"},"Returns the daily credit usage and usage in currency for an organization."))),(0,r.kt)("h3",{id:"snowflake-ip-allowed-list"},"Snowflake IP Allowed List"),(0,r.kt)("p",null,"If your Snowflake cluster uses IP allowed list for access control, you will need to add the following IPs to that allowed list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"54.87.66.45\n3.95.43.133\n54.162.3.72\n44.199.143.63\n")),(0,r.kt)("h2",{id:"snowflake-schema-for-vantage"},"Snowflake Schema for Vantage"),(0,r.kt)("p",null,"A best practice is to create a schema specifically for the Vantage user. Note that this is optional. After creating the schema you can add only the needed views to that schema and grant the vantage user access to the schema. Below are a set of commands to accomplish this modified from the Snowflake instructions ",(0,r.kt)("a",{parentName:"p",href:"https://community.snowflake.com/s/article/Solution-Grant-access-to-specific-views-in-SNOWFLAKE-ACCOUNT-USAGE-to-custom-roles"},"here"),"."),(0,r.kt)("p",null,"To start create a user ",(0,r.kt)("inlineCode",{parentName:"p"},"vantage"),", a role ",(0,r.kt)("inlineCode",{parentName:"p"},"vantage")," and a warehouse ",(0,r.kt)("inlineCode",{parentName:"p"},"vantage")," and grant necessary permissions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"use role accountadmin;\ncreate database vantage;\ncreate role vantage;\ncreate user vantage;\ngrant role vantage to user vantage;\ngrant role vantage to role accountadmin;\ncreate warehouse vantage;\ngrant all on warehouse vantage to role vantage;\nalter user vantage set DEFAULT_WAREHOUSE=vantage, DEFAULT_ROLE=vantage;\nalter user vantage set password='<A STRONG PASSWORD>';\n")),(0,r.kt)("p",null,"Next, setup the Vantage specific schema to read billing and usage data from your account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"use warehouse vantage;\ncreate view VANTAGE.PUBLIC.QUERY_HISTORY as select * from SNOWFLAKE.ACCOUNT_USAGE.QUERY_HISTORY;\ncreate view VANTAGE.PUBLIC.WAREHOUSE_METERING_HISTORY as select * from SNOWFLAKE.ORGANIZATION_USAGE.WAREHOUSE_METERING_HISTORY;\ncreate view VANTAGE.PUBLIC.USAGE_IN_CURRENCY_DAILY as select * from SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY;\ngrant usage on schema vantage.public to role vantage;\ngrant usage on database vantage to role vantage;\ngrant select on all views in schema VANTAGE.PUBLIC to role vantage;\n")),(0,r.kt)("p",null,"Lastly, test your setup."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"use role vantage;\nselect * from vantage.public.query_history limit 1;\n")),(0,r.kt)("p",null,"After creating the user and granting access you can visit the ",(0,r.kt)("a",{parentName:"p",href:"https://console.vantage.sh/settings/integrations"},"integrations"),' page and click "Add" on the Snowflake section.'))}f.isMDXComponent=!0}}]);