"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[9269],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(k,l(l({ref:t},c),{},{components:a})):r.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5889:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={id:"vql_cost_report",title:"VQL for Cost Reports",description:"This page walks through the Vantage Query Language, or VQL, for use within the Cost Reports scope.",keywords:["VQL","Vantage Query Language","Terraform"]},l="VQL for Cost Reports",s={unversionedId:"vql_cost_report",id:"vql_cost_report",title:"VQL for Cost Reports",description:"This page walks through the Vantage Query Language, or VQL, for use within the Cost Reports scope.",source:"@site/docs/vql_cost_report.md",sourceDirName:".",slug:"/vql_cost_report",permalink:"/vql_cost_report",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/vql_cost_report.md",tags:[],version:"current",frontMatter:{id:"vql_cost_report",title:"VQL for Cost Reports",description:"This page walks through the Vantage Query Language, or VQL, for use within the Cost Reports scope.",keywords:["VQL","Vantage Query Language","Terraform"]},sidebar:"someSidebar",previous:{title:"VQL (Vantage Query Language)",permalink:"/vql"},next:{title:"VQL for Resource Reports",permalink:"/vql_resource_report"}},i={},p=[{value:"Cost Reports VQL Schema",id:"cost-reports-vql-schema",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Syntax",id:"syntax",level:2},{value:"VQL Examples",id:"examples",level:2},{value:"Combining Providers",id:"providers",level:3},{value:"Cost Allocation",id:"cost-allocation",level:3},{value:"Costs from a List of Regions",id:"region",level:3},{value:"Get Marketplace Transactions",id:"marketplace",level:3},{value:"Costs by Account ID",id:"account",level:3},{value:"Costs by Provider Account ID",id:"provider-account",level:3},{value:"Per-Resource Costs and Costs by Service",id:"resource",level:3},{value:"Multiple Resource IDs",id:"multiple-resource-ids",level:4},{value:"Costs by Specific Category",id:"category",level:3},{value:"Costs by Specific Subcategory",id:"subcategory",level:3},{value:"Cost by Charge Type",id:"charge-type",level:3},{value:"Filter by Tag",id:"tags",level:3},{value:"Filter by Single Tag",id:"filter-by-single-tag",level:4},{value:"Filter for Multiple Values from a Single Tag Key",id:"filter-for-multiple-values-from-a-single-tag-key",level:4},{value:"Filter by Multiple Tags",id:"multiple-tags",level:4},{value:"Filter for Matching Tags Using <code>LIKE</code>",id:"filter-for-matching-tags-using-like",level:4},{value:"Filter for Untagged Resources",id:"untagged",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"vql-for-cost-reports"},"VQL for Cost Reports"),(0,n.kt)("p",null,"This page describes how to use VQL when querying Cost Reports in the API or using the Terraform Provider."),(0,n.kt)("h2",{id:"cost-reports-vql-schema"},"Cost Reports VQL Schema"),(0,n.kt)("p",null,"VQL comprises two namespaces: ",(0,n.kt)("inlineCode",{parentName:"p"},"costs")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"tags"),", which represent the available ",(0,n.kt)("a",{parentName:"p",href:"/cost_reports#filtering-cost-reports"},"filters")," on Cost Reports in the Vantage console. To reference a filter, use the following syntax: ",(0,n.kt)("inlineCode",{parentName:"p"},"namespace.field")," (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"costs.provider")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"tags.name"),")."),(0,n.kt)("table",{style:{width:"100%"}},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{style:{width:"33%"}},"Namespace"),(0,n.kt)("th",{style:{width:"33%"}},"Field"),(0,n.kt)("th",{style:{width:"33%"}},"VQL Example"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",{rowspan:"11",style:{textAlign:"center"}},(0,n.kt)("code",null,"costs")),(0,n.kt)("td",null,(0,n.kt)("code",null,"provider")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"#providers"},"Providers example"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"allocation")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"#cost-allocation"},"Cost allocation example"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"region")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"#region"},"Region example"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"marketplace")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"#marketplace"},"Marketplace example"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"account_id")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"#account"},"Account ID example"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"provider_account_id")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"#provider-account"},"Provider account ID example"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"service")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"#resource"},"Service example"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"category")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"#category"},"Category example"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"subcategory")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"#subcategory"},"Subcategory example"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"resource_id")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"#resource"},"Resource example"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"charge_type")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"#charge-type"},"Charge Type example"))),(0,n.kt)("tr",null,(0,n.kt)("td",{rowspan:"2",style:{textAlign:"center"}},(0,n.kt)("code",null,"tags")),(0,n.kt)("td",null,(0,n.kt)("code",null,"name")),(0,n.kt)("td",{rowspan:"2"},(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"#tags"},"Tags name/value example")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"#untagged"},"Untagged example"))))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"value"))))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Availability of the fields listed above varies among different cloud providers. For a comprehensive list of available fields per provider, see the ",(0,n.kt)("a",{parentName:"p",href:"/data_dictionary"},"Data Dictionary"),".")),(0,n.kt)("h2",{id:"keywords"},"Keywords"),(0,n.kt)("p",null,"VQL includes a set of keywords to create complex filter conditions. These keywords function similar to their SQL equivalents."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Keyword"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"VQL Sample"),(0,n.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"AND")),(0,n.kt)("td",{parentName:"tr",align:null},"Logical AND operator"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"costs.provider = 'aws' AND costs.service = 'EC2'")),(0,n.kt)("td",{parentName:"tr",align:null},"This example filters AWS costs for the EC2 service, where both conditions must be true.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"OR")),(0,n.kt)("td",{parentName:"tr",align:null},"Logical OR operator"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"costs.provider = 'azure' OR costs.provider = 'aws'")),(0,n.kt)("td",{parentName:"tr",align:null},"This example retrieves costs from either Azure or AWS. At least one condition must be true.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"IN")),(0,n.kt)("td",{parentName:"tr",align:null},"Used to compare against an array list"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"costs.provider = 'azure' AND costs.account_id IN ('account-1', 'account-2')")),(0,n.kt)("td",{parentName:"tr",align:null},"This example filters based on a list of account IDs, returning data for the specified accounts",(0,n.kt)("br",null),(0,n.kt)("br",null),"You can also use ",(0,n.kt)("inlineCode",{parentName:"td"},"IN")," along with a special syntax for filtering by multiple tags. See ",(0,n.kt)("a",{parentName:"td",href:"/vql#multiple-tags"},"Filter by Multiple Tags")," for details.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"LIKE")),(0,n.kt)("td",{parentName:"tr",align:null},"Performs string comparisons"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"costs.provider = 'gcp' AND tags.name = 'environment' AND tags.value LIKE '%prod%'")),(0,n.kt)("td",{parentName:"tr",align:null},"This example selects data where the tag value contains ",(0,n.kt)("inlineCode",{parentName:"td"},"prod"),", such as ",(0,n.kt)("inlineCode",{parentName:"td"},"production-1"),". ",(0,n.kt)("br",null)," Note that at this time, ",(0,n.kt)("inlineCode",{parentName:"td"},"LIKE")," is not compatible with ",(0,n.kt)("inlineCode",{parentName:"td"},"costs.account_id"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"costs.provider_account_id"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"costs.region"),", and ",(0,n.kt)("inlineCode",{parentName:"td"},"costs.service"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"NOT")),(0,n.kt)("td",{parentName:"tr",align:null},"Represents negation"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"costs.provider = 'aws' AND costs.region NOT IN ('us-east-1', 'us-east-2')")),(0,n.kt)("td",{parentName:"tr",align:null},"This example filters out data from both specified regions, providing all AWS costs ",(0,n.kt)("em",{parentName:"td"},"not")," in these regions. Use ",(0,n.kt)("inlineCode",{parentName:"td"},"NOT IN")," to specify a list of single or multiple values. ",(0,n.kt)("br",null),(0,n.kt)("br",null)," You can also use the ",(0,n.kt)("inlineCode",{parentName:"td"},"!=")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"<>"),' operators for "is not." ',(0,n.kt)("br",null),(0,n.kt)("br",null)," ",(0,n.kt)("inlineCode",{parentName:"td"},"costs.provider = 'aws' AND costs.region != 'us-east-1'"),(0,n.kt)("br",null),(0,n.kt)("br",null),"You can use ",(0,n.kt)("inlineCode",{parentName:"td"},"NOT LIKE")," to perform string comparisons:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"costs.provider = 'gcp' AND tags.name = 'environment' AND tags.value NOT LIKE '%prod%'"))))),(0,n.kt)("p",null,"With these keywords, you can construct complex filter conditions in VQL, providing flexibility and precision when querying and analyzing cloud cost data."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("p",null,"You can think of VQL in its current iteration as the ",(0,n.kt)("inlineCode",{parentName:"p"},"WHERE")," clause of a SQL query. By combining the schema and keywords above with parentheses, you can form complex filter operations, such as:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'mongo' AND costs.allocation = 1.0 AND (costs.service = 'REALM' AND costs.resource_id IN ('s3')) OR (costs.provider = 'aws' AND costs.allocation = 1.0 AND costs.account_id IN ('123456798'))\n")),(0,n.kt)("h2",{id:"examples"},"VQL Examples"),(0,n.kt)("p",null,"The following examples cover common use cases for VQL."),(0,n.kt)("h3",{id:"providers"},"Combining Providers"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"To reference a ",(0,n.kt)("a",{parentName:"p",href:"/connecting_custom_providers"},"Custom Provider")," in VQL queries, navigate to the ",(0,n.kt)("a",{parentName:"p",href:"https://console.vantage.sh/settings/custom_providers"},(0,n.kt)("strong",{parentName:"a"},"Integrations")," page"),". Use the displayed ",(0,n.kt)("strong",{parentName:"p"},"Provider ID")," (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"custom_provider:accss_crdntl_123a45bfdaf38765"),").")),(0,n.kt)("p",null,"Filter for provider costs associated with either MongoDB Atlas or AWS."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'mongo' OR costs.provider = 'aws'\n")),(0,n.kt)("h3",{id:"cost-allocation"},"Cost Allocation"),(0,n.kt)("p",null,"Set cost allocation to ",(0,n.kt)("inlineCode",{parentName:"p"},"0.5"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'gcp' AND costs.allocation = 0.5\n")),(0,n.kt)("h3",{id:"region"},"Costs from a List of Regions"),(0,n.kt)("p",null,"Filter for Snowflake costs in two regions. Note that you will need to use the region code, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"us-east-1")," in the case of AWS, or ",(0,n.kt)("inlineCode",{parentName:"p"},"AWS_US_EAST_1")," in the case of Snowflake, below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'snowflake' AND costs.region IN ('AWS_US_EAST_1', 'AWS_US_EAST_2')\n")),(0,n.kt)("h3",{id:"marketplace"},"Get Marketplace Transactions"),(0,n.kt)("p",null,"Retrieve costs associated with the AWS Marketplace."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'aws' AND costs.marketplace = true\n")),(0,n.kt)("h3",{id:"account"},"Costs by Account ID"),(0,n.kt)("p",null,"Costs for a specific set of services and account ID."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'aws' AND costs.account_id = '123456758' AND costs.service IN ('Amazon Relational Database', 'Amazon Elastic Compute Cloud - Compute')\n")),(0,n.kt)("h3",{id:"provider-account"},"Costs by Provider Account ID"),(0,n.kt)("p",null,"The following example represents costs from a specific AWS billing account or costs from a specific Azure subscription."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"(costs.provider = 'aws' AND costs.provider_account_id = 'abcd1234') OR (costs.provider = 'azure' AND costs.provider_account_id = 'abcd1234')\n")),(0,n.kt)("h3",{id:"resource"},"Per-Resource Costs and Costs by Service"),(0,n.kt)("p",null,"Resource costs require both ",(0,n.kt)("inlineCode",{parentName:"p"},"provider")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"service")," in addition to the ",(0,n.kt)("inlineCode",{parentName:"p"},"resource_id"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'aws' AND costs.service = 'Amazon Relational Database Service' AND costs.resource_id = 'arn:aws:rds:us-east-1:123456789:db:primary-01'\n")),(0,n.kt)("h4",{id:"multiple-resource-ids"},"Multiple Resource IDs"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'aws' AND costs.service = 'Amazon Relational Database Service' AND costs.resource_id IN ('arn:aws:rds:us-east-1:123456789:db:primary-01', 'arn:aws:rds:us-east-1:123456789:db:primary-02')\n")),(0,n.kt)("h3",{id:"category"},"Costs by Specific Category"),(0,n.kt)("p",null,"Filter costs to see a specific cost category. Category costs require both ",(0,n.kt)("inlineCode",{parentName:"p"},"provider")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"service")," as well as ",(0,n.kt)("inlineCode",{parentName:"p"},"category"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'fastly' AND costs.service = 'CDN' AND costs.category = 'Data Transfer'\n")),(0,n.kt)("h3",{id:"subcategory"},"Costs by Specific Subcategory"),(0,n.kt)("p",null,"Filter costs by a specific service and subcategory. Subcategory costs require both ",(0,n.kt)("inlineCode",{parentName:"p"},"provider")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"service")," as well as ",(0,n.kt)("inlineCode",{parentName:"p"},"subcategory"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'aws' AND costs.service = 'AWS Certificate Manager' AND costs.subcategory = 'USE1-PaidPrivateCA'\n")),(0,n.kt)("h3",{id:"charge-type"},"Cost by Charge Type"),(0,n.kt)("p",null,"Filter costs by a specific charge type."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'aws' AND costs.charge_type = 'Usage'\n")),(0,n.kt)("h3",{id:"tags"},"Filter by Tag"),(0,n.kt)("h4",{id:"filter-by-single-tag"},"Filter by Single Tag"),(0,n.kt)("p",null,"Filter costs based on a specific tag, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"environment"),", with the value ",(0,n.kt)("inlineCode",{parentName:"p"},"production"),", in AWS."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'aws' AND tags.name = 'environment' AND tags.value = 'production'\n")),(0,n.kt)("h4",{id:"filter-for-multiple-values-from-a-single-tag-key"},"Filter for Multiple Values from a Single Tag Key"),(0,n.kt)("p",null,"If you want to filter for multiple tag values that are tied to one tag key (e.g., costs tagged with the ",(0,n.kt)("inlineCode",{parentName:"p"},"team")," tag of ",(0,n.kt)("inlineCode",{parentName:"p"},"mobile")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"data"),"), use the below syntax."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'aws' AND tags.name = 'team' AND tags.value IN ('mobile', 'data')\n")),(0,n.kt)("h4",{id:"multiple-tags"},"Filter by Multiple Tags"),(0,n.kt)("p",null,"If you want to filter for resources that have more than one tag associated, you can use the syntax shown in the example below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'aws' AND (tags.name, tags.value) IN (('environment', 'staging'), ('team', 'engineering'))\n")),(0,n.kt)("p",null,"This example filters for resources that are tagged with the ",(0,n.kt)("inlineCode",{parentName:"p"},"environment")," tag with a value of ",(0,n.kt)("inlineCode",{parentName:"p"},"staging")," as well as the ",(0,n.kt)("inlineCode",{parentName:"p"},"team")," tag with a value of ",(0,n.kt)("inlineCode",{parentName:"p"},"engineering"),". This filter is the same as creating the following manual filter in the console."),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,n.kt)("img",{alt:"Filter by multiple tags in the console",width:"80%",src:"/img/multiple-tags-example.png"})),(0,n.kt)("h4",{id:"filter-for-matching-tags-using-like"},"Filter for Matching Tags Using ",(0,n.kt)("inlineCode",{parentName:"h4"},"LIKE")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'azure' AND tags.name = 'environment' AND tags.value LIKE '%prod%'\n")),(0,n.kt)("h3",{id:"untagged"},"Filter for Untagged Resources"),(0,n.kt)("p",null,"On providers that have a ",(0,n.kt)("strong",{parentName:"p"},"Not Tagged"),"/",(0,n.kt)("strong",{parentName:"p"},"Not Labeled")," filter option in the console, you can use the below VQL to see untagged resources. This example looks for untagged resources in a multi-cloud environment."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"(costs.provider = 'aws' AND tags.name = NULL) OR (costs.provider = 'azure' AND tags.name = NULL) OR (costs.provider = 'gcp' AND tags.name = NULL)\n")),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"If you are receiving an error when trying to complete a query, check the following troubleshooting tips below."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Each provider exposes certain names to the API. Those names are normalized within the schema. Check the ",(0,n.kt)("a",{parentName:"p",href:"/data_dictionary"},"Data Dictionary")," for normalized field names.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Query parameter values should be wrapped in single quotes."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to view examples"),(0,n.kt)("admonition",{parentName:"li",title:"This works",type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider='aws'\n"))),(0,n.kt)("admonition",{parentName:"li",title:"This does not work",type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'costs.provider="aws"\n'))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Currently, there is a limitation where ",(0,n.kt)("inlineCode",{parentName:"p"},"AND")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"OR"),' are not supported together in a single "query group."'),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to view examples"),(0,n.kt)("admonition",{parentName:"li",title:"This works",type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"(costs.provider = 'aws' AND tags.name = 'environment' AND tags.value = 'dev') OR (costs.provider = 'aws' AND tags.name = 'environment' AND tags.value = 'prod')\n"))),(0,n.kt)("admonition",{parentName:"li",title:"This does not work",type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'aws' AND ((tags.name = 'environment' AND tags.value = 'dev') OR (tags.name = 'environment' AND tags.value = 'prod'))\n"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"costs.provider")," field is required on every call."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to view examples"),(0,n.kt)("admonition",{parentName:"li",title:"This works",type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'fastly' AND costs.service = 'CDN'\n"))),(0,n.kt)("admonition",{parentName:"li",title:"This does not work",type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.service = 'CDN'\n"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Resource costs require both provider and service in addition to the resource ID."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to view examples"),(0,n.kt)("admonition",{parentName:"li",title:"This works",type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'aws' AND costs.service = 'Amazon Relational Database Service' AND costs.resource_id = 'arn:aws:rds:us-east-1:123456789:db:primary-01'\n"))),(0,n.kt)("admonition",{parentName:"li",title:"This does not work",type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'aws' AND costs.resource_id = 'arn:aws:rds:us-east-1:123456789:db:primary-01'\n"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Category and subcategory costs also require provider and service."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to view examples"),(0,n.kt)("admonition",{parentName:"li",title:"These work",type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'fastly' AND costs.service = 'CDN' AND costs.category = 'Data Transfer'\n")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'aws' AND costs.service = 'AWS Certificate Manager' AND costs.subcategory = 'USE1-PaidPrivateCA'\n"))),(0,n.kt)("admonition",{parentName:"li",title:"These do not work",type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'fastly' AND costs.category = 'Data Transfer'\n")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'aws' AND costs.subcategory = 'USE1-PaidPrivateCA'\n")))))))}u.isMDXComponent=!0}}]);