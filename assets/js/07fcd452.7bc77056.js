"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[720],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),g=l(a),c=n,m=g["".concat(p,".").concat(c)]||g[c]||u[c]||s;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[g]="string"==typeof e?e:n,o[1]=i;for(var l=2;l<s;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5229:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const s={id:"usage_based_reporting",title:"Usage-Based Reporting",description:"This page describes how to view and manage Usage-Based Reports in Vantage.",keywords:["Usage-Based Reporting","Usage-Based Reports","Cost Reports"]},o="Usage-Based Reporting",i={unversionedId:"usage_based_reporting",id:"usage_based_reporting",title:"Usage-Based Reporting",description:"This page describes how to view and manage Usage-Based Reports in Vantage.",source:"@site/docs/usage_based_reporting.md",sourceDirName:".",slug:"/usage_based_reporting",permalink:"/usage_based_reporting",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/usage_based_reporting.md",tags:[],version:"current",frontMatter:{id:"usage_based_reporting",title:"Usage-Based Reporting",description:"This page describes how to view and manage Usage-Based Reports in Vantage.",keywords:["Usage-Based Reporting","Usage-Based Reports","Cost Reports"]},sidebar:"someSidebar",previous:{title:"Dashboards",permalink:"/dashboards"},next:{title:"Annotations",permalink:"/annotations"}},p={},l=[{value:"Create Usage-Based Reports",id:"create-usage-based-reports",level:2},{value:"Export Usage Reports",id:"export-usage-reports",level:3},{value:"View Usage Data for Custom Costs",id:"view-usage-data-for-custom-costs",level:3},{value:"Understand Usage Units",id:"understand-usage-units",level:2},{value:"Use Virtual Tags with Usage-Based Reporting",id:"use-virtual-tags-with-usage-based-reporting",level:2},{value:"Usage-Based Reporting on Dashboards",id:"dashboards",level:2},{value:"Usage Reports Examples",id:"usage-reports-examples",level:2},{value:"Understand EC2 Running Hours",id:"understand-ec2-running-hours",level:3},{value:"View S3 Storage by Tier",id:"view-s3-storage-by-tier",level:3}],d={toc:l},g="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(g,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"usage-based-reporting"},"Usage-Based Reporting"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"To get started with Usage-Basesd Reports, you can also watch a video demo on ",(0,n.kt)("a",{parentName:"p",href:"/vantage_university_cost_reporting"},"Vantage University")," \ud83c\udf93.")),(0,n.kt)("p",null,"Usage-Based Reporting provides infrastructure consumption in non-monetary metrics, such as virtual machine running hours, stored gigabytes of data, and read/write units consumed. These reports are available within ",(0,n.kt)("a",{parentName:"p",href:"/cost_reports"},"Cost Reports"),", where you can toggle between viewing consumption by spend or by usage."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Usage-Based Reporting is currently available for AWS, GCP, Azure, and Oracle. Vantage plans to add support for\xa0other providers. Please contact\xa0",(0,n.kt)("a",{parentName:"p",href:"mailto:support@vantage.sh"},"support@vantage.sh"),"\xa0with other providers you\u2019d like to see added.")),(0,n.kt)("h2",{id:"create-usage-based-reports"},"Create Usage-Based Reports"),(0,n.kt)("p",null,"You can view usage from any Cost Report."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to any Cost Report, or create a new report. By default, the report displays ",(0,n.kt)("strong",{parentName:"li"},"Spend"),"."),(0,n.kt)("li",{parentName:"ol"},"Apply any desired filters and ",(0,n.kt)("strong",{parentName:"li"},"Group By")," criteria. Then, click the ",(0,n.kt)("strong",{parentName:"li"},"Usage")," toggle to the right of the ",(0,n.kt)("strong",{parentName:"li"},"Settings")," menu.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"To get the most value from these reports, create a filter that represents a single unit of measure, comparing like resources (e.g., GB or Hours).")),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,n.kt)("img",{alt:"Toggle to show Usage-Based Reporting",width:"80%",src:"/img/usage-toggle.png"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"The following elements are displayed on the ",(0,n.kt)("strong",{parentName:"li"},"Usage")," view:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The graph and chart display usage over the selected timeframe."),(0,n.kt)("li",{parentName:"ul"},"The total cost is displayed as a trendline on the chart."),(0,n.kt)("li",{parentName:"ul"},"In the table below the graph, the ",(0,n.kt)("strong",{parentName:"li"},"Usage Unit")," (e.g., GB-Hours or Metrics) and ",(0,n.kt)("strong",{parentName:"li"},"Accrued Usage (a numerical value of calculated usage for that unit)")," columns are displayed to show accrued usage for each grouping. The ",(0,n.kt)("strong",{parentName:"li"},"Usage Unit")," column is normalized for consistency across usage type for spelling, abbreviation, and capitalization."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Accrued Cost, Previous Period Cost"),", and ",(0,n.kt)("strong",{parentName:"li"},"Change")," between these cost values are also displayed. Click the ",(0,n.kt)("strong",{parentName:"li"},"By Date")," option above the table to see the usage data split out by date."))),(0,n.kt)("li",{parentName:"ol"},"Save the report.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Usage data refreshes daily in the Vantage console. At this time, you cannot view retroactive usage metrics. Contact\xa0",(0,n.kt)("a",{parentName:"p",href:"mailto:support@vantage.sh"},"support@vantage.sh"),"\xa0if you want to view historical usage data.")),(0,n.kt)("h3",{id:"export-usage-reports"},"Export Usage Reports"),(0,n.kt)("p",null,"To export usage reports, ",(0,n.kt)("a",{parentName:"p",href:"/cost_reports#exporting-cost-reports"},"follow the steps")," provided in the Cost Reports documentation. Ensure you are on the ",(0,n.kt)("strong",{parentName:"p"},"Usage")," view and ",(0,n.kt)("strong",{parentName:"p"},"Usage Unit")," is selected."),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,n.kt)("img",{alt:"Exporting a Cost Report on the Usage view",width:"60%",src:"/img/export-usage.png"})),(0,n.kt)("h3",{id:"view-usage-data-for-custom-costs"},"View Usage Data for Custom Costs"),(0,n.kt)("p",null,"When you create a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.vantage.sh/connecting_custom_providers"},"Custom Provider"),", you can add usage data to your CSV upload files. Ensure you complete the ",(0,n.kt)("inlineCode",{parentName:"p"},"ConsumedQuantity")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"ConsumedUnit")," columns. See the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.vantage.sh/connecting_custom_providers#data-format"},"Custom Providers documentation")," for information on the required schema."),(0,n.kt)("h2",{id:"understand-usage-units"},"Understand Usage Units"),(0,n.kt)("p",null,"The Usage Units displayed on Usage-Based Reporting include any dimension that a supported provider (e.g., AWS) meters and bills. Vantage standardizes these dimensions for inconsistencies in unit case and spelling across providers. For example, Vantage standardized ",(0,n.kt)("inlineCode",{parentName:"p"},"Hours"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"hrs"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Hrs"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"hours")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"Hours"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If a provider does not have usage data, the Usage Unit column is empty and the Accrued Usage column displays 0.00.")),(0,n.kt)("h2",{id:"use-virtual-tags-with-usage-based-reporting"},"Use Virtual Tags with Usage-Based Reporting"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.vantage.sh/virtual_tagging"},"Virtual Tags")," work across both cost and usage consumption for supported providers. If you created Virtual Tags based on cost, the associated usage consumption will inherit the same Virtual Tag. You can use Virtual Tags within your filter criteria to apply Virtual Tags based on usage."),(0,n.kt)("h2",{id:"dashboards"},"Usage-Based Reporting on Dashboards"),(0,n.kt)("p",null,"You can add Usage-Based Reports to dashboards. Ensure you are on the ",(0,n.kt)("strong",{parentName:"p"},"Usage")," toggle, save the report, and then add it to a dashboard. Follow the ",(0,n.kt)("a",{parentName:"p",href:"/dashboards"},"Dashboards")," documentation for details on how to add a report to a dashboard. "),(0,n.kt)("h2",{id:"usage-reports-examples"},"Usage Reports Examples"),(0,n.kt)("p",null,"The following examples provide some common use cases for working with Usage-Based Reporting."),(0,n.kt)("h3",{id:"understand-ec2-running-hours"},"Understand EC2 Running Hours"),(0,n.kt)("p",null,"As an Engineering Manager, you want to view your Amazon EC2 usage by instance hours, so that you can get a profile of your compute usage. This is important because it helps you identify patterns in compute resource consumption. This type of report can help you create more efficient resource planning and cost optimization based on your team's workload needs."),(0,n.kt)("p",null,"You create the following Usage-Based Report in Vantage:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Filter: All costs from ",(0,n.kt)("strong",{parentName:"li"},"AWS")," where Category ",(0,n.kt)("strong",{parentName:"li"},"Amazon Elastic Compute Cloud - Compute")," is ",(0,n.kt)("strong",{parentName:"li"},"Compute Instance")),(0,n.kt)("li",{parentName:"ul"},"Group By: ",(0,n.kt)("strong",{parentName:"li"},"Subcategory"))),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,n.kt)("img",{alt:"Example of Usage-Based Report displaying EC2 instance running hours",width:"80%",src:"/img/usage-ec2-running-hours.png"})),(0,n.kt)("p",null,"The table below the chart includes the accrued usage and the unit of measure for each line item being viewed, such as EC2 instance bill code. To get the most value from this report, focus on identifying high-usage instance families and regions to optimize compute resources and explore opportunities for cost-saving strategies, like instance rightsizing or transitioning to Savings Plans."),(0,n.kt)("h3",{id:"view-s3-storage-by-tier"},"View S3 Storage by Tier"),(0,n.kt)("p",null,"As a Storage Admin or Engineering Manager, you want to view detailed storage metrics across specific AWS services, such as the total data stored in S3 by tier. With this report, you can better understand the overall profile and efficiency of stored assets and potentially determine whether additional storage policies are required to optimize storage usage and growth."),(0,n.kt)("p",null,"You create the following Usage-Based report to see total data stored in S3 in Vantage:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Filter: All costs from ",(0,n.kt)("strong",{parentName:"li"},"AWS")," where Category ",(0,n.kt)("strong",{parentName:"li"},"Amazon Simple Storage Service")," is ",(0,n.kt)("strong",{parentName:"li"},"Storage")),(0,n.kt)("li",{parentName:"ul"},"Group By: ",(0,n.kt)("strong",{parentName:"li"},"Subcategory"))),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,n.kt)("img",{alt:"Example of Usage-Based Report displaying S3 storage options",width:"80%",src:"/img/usage-s3-storage.png"})),(0,n.kt)("p",null,"In the table below the graph, usage data is displayed in GB-Months for subcategories like:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"TimedStorage-INT-AIA-ByteHrs")," (Infrequent Access Tier)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"TimedStorage-INT-IA-ByteHrs")," (Intelligent Tiering)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"TimedStorage-ByteHrs")," (Standard Tier)")),(0,n.kt)("p",null,"These metrics provide an overview of how data is distributed across different S3 storage tiers. Next steps could include analyzing whether data in the ",(0,n.kt)("strong",{parentName:"p"},"Infrequent Access")," and ",(0,n.kt)("strong",{parentName:"p"},"Intelligent Tiering")," categories is optimally stored, or you could decide whether more aggressive lifecycle policies are needed to move infrequently accessed data to cheaper storage tiers, like Glacier. You could also use this usage information to identify potential cost savings by reducing the storage volume in higher-cost tiers, such as the ",(0,n.kt)("strong",{parentName:"p"},"Standard Tier"),"."))}u.isMDXComponent=!0}}]);