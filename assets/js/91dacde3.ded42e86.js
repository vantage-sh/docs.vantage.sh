"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[5037],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return a?r.createElement(g,l(l({ref:t},d),{},{components:a})):r.createElement(g,l({ref:t},d))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(7462),n=a(7294),o=a(6010),l=a(2466),i=a(6550),s=a(1980),u=a(7392),d=a(12);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function c(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=c(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=g({queryString:a,groupId:r}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),f=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var f=a(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),c=e=>{const t=e.currentTarget,a=d.indexOf(t),r=u[a].value;r!==i&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},l,{className:(0,o.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},n.createElement(b,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return n.createElement(v,(0,r.Z)({key:String(t)},e))}},6443:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=a(7462),n=(a(7294),a(3905)),o=a(4866),l=a(5162);const i={id:"budgets",title:"Budgets",description:"Create and assign budgets to Cost Reports to see how costs are trending for a service or business unit over time.",keywords:["Budgets","Budget alerts"]},s="Budgets",u={unversionedId:"budgets",id:"budgets",title:"Budgets",description:"Create and assign budgets to Cost Reports to see how costs are trending for a service or business unit over time.",source:"@site/docs/budgets.md",sourceDirName:".",slug:"/budgets",permalink:"/budgets",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/budgets.md",tags:[],version:"current",frontMatter:{id:"budgets",title:"Budgets",description:"Create and assign budgets to Cost Reports to see how costs are trending for a service or business unit over time.",keywords:["Budgets","Budget alerts"]},sidebar:"someSidebar",previous:{title:"Autopilot",permalink:"/autopilot"},next:{title:"Unit Costs",permalink:"/per_unit_costs"}},d={},p=[{value:"Create a Budget",id:"create-a-budget",level:2},{value:"Upload a Budget",id:"upload",level:2},{value:"Expected Format",id:"expected-format",level:3},{value:"Import Budget",id:"import-budget",level:3},{value:"Fix Import Errors",id:"fix-import-errors",level:3},{value:"View Budgets on Cost Reports",id:"view-budgets-on-cost-reports",level:2},{value:"Create Budget Alerts",id:"create-alerts",level:2},{value:"Budget Alert Limitations",id:"budget-alert-limitations",level:3},{value:"Budget Alerts and Cost Reports",id:"budget-alerts-and-cost-reports",level:3}],c={toc:p},m="wrapper";function g(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"budgets"},"Budgets"),(0,n.kt)("p",null,"You can create and assign a ",(0,n.kt)("em",{parentName:"p"},"budget")," to a Cost Report. Once a budget is assigned, it's easy to see how costs are trending for a particular service, business unit, or team. You can also create ",(0,n.kt)("em",{parentName:"p"},"budget alerts")," to alert you based on configurable thresholds."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"To get started with budgets, you can also view video demos on ",(0,n.kt)("a",{parentName:"p",href:"/vantage_university_budgeting"},"Vantage University")," \ud83c\udf93.")),(0,n.kt)("h2",{id:"create-a-budget"},"Create a Budget"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The below instructions describe how to manually create a budget. You can also upload a CSV file to create a budget. See the ",(0,n.kt)("a",{parentName:"p",href:"/budgets#upload"},"section below")," for details.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the top navigation, click ",(0,n.kt)("strong",{parentName:"li"},"Financial Planning"),"."),(0,n.kt)("li",{parentName:"ol"},"On the left navigation, select ",(0,n.kt)("strong",{parentName:"li"},"Budgets"),". All existing budgets are displayed. You can edit or delete budgets from this screen.",(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to view example image"),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,n.kt)("img",{alt:"The Budgets landing page with three different budgets displayed. One budget has a month-to-date performance listed.",width:"100%",src:"/img/budget-screen.png"})))),(0,n.kt)("li",{parentName:"ol"},"From the top right of the screen, click ",(0,n.kt)("strong",{parentName:"li"},"New Budget"),"."),(0,n.kt)("li",{parentName:"ol"},"Enter a budget ",(0,n.kt)("strong",{parentName:"li"},"Name")," and click ",(0,n.kt)("strong",{parentName:"li"},"Create Budget"),"."),(0,n.kt)("li",{parentName:"ol"},"A budget details page is displayed. Under ",(0,n.kt)("strong",{parentName:"li"},"Assign to Cost Report or Segment"),", select the report you want the budget to be displayed on. You can create ",(0,n.kt)("strong",{parentName:"li"},"Budget Alerts")," to assign once your budget is created. Any associated alerts will also be listed here. See the ",(0,n.kt)("a",{parentName:"li",href:"/budgets#create-alerts"},"section below")," for more details."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Budget Periods"),", click ",(0,n.kt)("strong",{parentName:"li"},"New Budget Period"),". Budgets can have multiple budget periods, one for each month, with a specific amount for each period:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Enter a start date in ",(0,n.kt)("strong",{parentName:"li"},"YYYY-MM")," format (e.g., 2024-03)."),(0,n.kt)("li",{parentName:"ul"},"Enter an optional period end date."),(0,n.kt)("li",{parentName:"ul"},"Enter a total monthly budget amount in dollars."),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"New Budget Period")," to add additional budget periods.",(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to view example image"),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,n.kt)("img",{alt:"The Budget creation screen with three different periods added to the budget.",width:"100%",src:"/img/create-budget.png"})))))),(0,n.kt)("li",{parentName:"ol"},"At the top right, click ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"),"."),(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"Performance")," tab to see each budget period with a month-to-date performance of how the budget performed or is forecasted to perform.",(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to view example image"),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,n.kt)("img",{alt:"Performance of a budget across six periods with actual and forecasted performance displayed for each month.",width:"100%",src:"/img/budget-performance.png"}))))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Budgets are scoped to a report within a specific ",(0,n.kt)("a",{parentName:"p",href:"/workspaces/"},"workspace"),", and access can be controlled via ",(0,n.kt)("a",{parentName:"p",href:"/rbac"},"teams"),".")),(0,n.kt)("h2",{id:"upload"},"Upload a Budget"),(0,n.kt)("p",null,"If you have existing budgets in spreadsheets or another tool, you can import them all at once by uploading a CSV file."),(0,n.kt)("h3",{id:"expected-format"},"Expected Format"),(0,n.kt)("p",null,"Budget import files must adhere to the following requirements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The file must be in CSV format."),(0,n.kt)("li",{parentName:"ul"},"The header row of the CSV must start with a unique string or identifier (e.g., ",(0,n.kt)("inlineCode",{parentName:"li"},"Budget Name"),").",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The remaining values in the header row must be the budget period start date in ",(0,n.kt)("inlineCode",{parentName:"li"},"YYYY-MM")," format (e.g., ",(0,n.kt)("inlineCode",{parentName:"li"},"2023-02")," for February 2023)."))),(0,n.kt)("li",{parentName:"ul"},"Each additional row in the CSV must start with the name of the budget. Corresponding values must be expressed as decimals (e.g., ",(0,n.kt)("inlineCode",{parentName:"li"},"25000.00"),") for every month where there is an associated budget. If there is no budget for a month, the value can be blank.")),(0,n.kt)("p",null,"The below example shows a readable view, CSV file format, the budget import screen, and the final budget in Vantage. Team 3 does not have a budget for 3/2024, and therefore, no budget period is added for Team 3 during that timeframe. On the import, the period start and end date are set based on the column headers."),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"budget",label:"Budget",default:!0,mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Budget Name"),(0,n.kt)("th",null,"2024-01"),(0,n.kt)("th",null,"2024-02"),(0,n.kt)("th",null,"2024-03")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Team 1"),(0,n.kt)("td",null,"50000.00"),(0,n.kt)("td",null,"51000.00"),(0,n.kt)("td",null,"52000.00")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Team 2"),(0,n.kt)("td",null,"30000.00"),(0,n.kt)("td",null,"30000.00"),(0,n.kt)("td",null,"40000.00")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Team 3"),(0,n.kt)("td",null,"45000.00"),(0,n.kt)("td",null,"50000.00"),(0,n.kt)("td",null)))),(0,n.kt)(l.Z,{value:"csv",label:"CSV File",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,"Budget Name,2024-01,2024-02,2024-03",(0,n.kt)("br",null),"Team 1,50000.00,51000.00,52000.00",(0,n.kt)("br",null),"Team 2,30000.00,30000.00,40000.00",(0,n.kt)("br",null),"Team 3,45000.00,50000.00,"))),(0,n.kt)(l.Z,{value:"upload",label:"Import Screen",mdxType:"TabItem"},(0,n.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,n.kt)("img",{alt:"An imported budget for three teams. The first two teams have three budget periods. The last team has only two budget periods imported.",width:"70%",src:"/img/import-budget.png"}))),(0,n.kt)(l.Z,{value:"imported",label:"Imported Budget",mdxType:"TabItem"},(0,n.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,n.kt)("img",{alt:"Team 1, 2, and 3 budgets listed on the main Budgets screen.",width:"100%",src:"/img/imported-budget.png"})))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"import-budget"},"Import Budget"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the top navigation, click ",(0,n.kt)("strong",{parentName:"li"},"Financial Planning"),"."),(0,n.kt)("li",{parentName:"ol"},"On the left navigation, select ",(0,n.kt)("strong",{parentName:"li"},"Budgets"),"."),(0,n.kt)("li",{parentName:"ol"},"From the top right of the screen, click ",(0,n.kt)("strong",{parentName:"li"},"Import"),". The ",(0,n.kt)("strong",{parentName:"li"},"Import Budget Data")," modal is displayed."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Choose File")," and select a CSV file."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Upload"),". The ",(0,n.kt)("strong",{parentName:"li"},"Review Imported Errors")," screen is displayed. If no errors are present, click ",(0,n.kt)("strong",{parentName:"li"},"Confirm")," > ",(0,n.kt)("strong",{parentName:"li"},"OK"),".")),(0,n.kt)("h3",{id:"fix-import-errors"},"Fix Import Errors"),(0,n.kt)("p",null,"If a formatting error is found in your imported CSV file, the import wizard indicates where the error occurred. To fix the error, correct the issue in your source CSV and re-upload the file. In the below example, an error occurred because the CSV file contained duplicate values in the header row."),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"error",label:"Error Screen",mdxType:"TabItem"},(0,n.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,n.kt)("img",{alt:"Budget import errors",width:"80%",src:"/img/budget-error.png"}))),(0,n.kt)(l.Z,{value:"csv",label:"Source CSV File",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,"Budget Name,2024-01,2024-03,2024-03",(0,n.kt)("br",null),"Team 1,50000.00,51000.00,52000.00,")))),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Use the following troubleshooting suggestions to check for errors in your CSV file:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ensure there are no additional blank columns in the CSV file."),(0,n.kt)("li",{parentName:"ul"},"Ensure that each budget name is unique."),(0,n.kt)("li",{parentName:"ul"},"Ensure the dates in the header row are in the correct format (i.e., ",(0,n.kt)("inlineCode",{parentName:"li"},"YYYY-MM"),")."),(0,n.kt)("li",{parentName:"ul"},"Ensure values do not include other characters and are in decimal format (e.g., ",(0,n.kt)("inlineCode",{parentName:"li"},"56000.00"),", not ",(0,n.kt)("inlineCode",{parentName:"li"},"$56,000.00"),").")),(0,n.kt)("h2",{id:"view-budgets-on-cost-reports"},"View Budgets on Cost Reports"),(0,n.kt)("p",null,"Once a budget is assigned to a ",(0,n.kt)("a",{parentName:"p",href:"/cost_reports/"},"Cost Report"),", a budget report with month-to-date performance is displayed at the top of the Cost Report. The budget reflects amortized costs throughout the month, indicating whether the spending is above or below the budget month to date."),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,n.kt)("img",{alt:"A budget is displayed as a trend line on the Cost Report in the console",width:"100%",src:"/img/cost-report-budget.png"})),(0,n.kt)("p",null,"Budgets are displayed as a yellow line on the graph in the cumulative, daily, weekly, and monthly views on a Cost Report. The dotted portion of the line corresponds to the future budget, which you can track against your forecasted costs."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you select the ",(0,n.kt)("strong",{parentName:"p"},"Weekly")," view, you may see the budget line dip for the first and last week of the month. This is because budgets are metered per day.")),(0,n.kt)("h2",{id:"create-alerts"},"Create Budget Alerts"),(0,n.kt)("p",null,"Budget alerts are automated alerts based on configurable budget thresholds. Create a budget alert for any of your existing budgets to notify you when a percentage of a budget is exceeded for a designated period. You can configure alerts to notify Vantage users via email, Slack, or Microsoft Teams channels. Periods can be set before or after a certain number of days into the month (e.g., \u201c10 days from the start of the month\u201d)."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you want to send alerts to Slack or Microsoft Teams, see the report notifications documentation for information on how to set up a ",(0,n.kt)("a",{parentName:"p",href:"/report_notifications#slack"},"Slack")," or ",(0,n.kt)("a",{parentName:"p",href:"/report_notifications#ms-teams"},"Microsoft Teams")," integration with Vantage. Once you've set up an integration, follow the steps below to set up a budget alert.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the top navigation, click ",(0,n.kt)("strong",{parentName:"li"},"Financial Planning"),"."),(0,n.kt)("li",{parentName:"ol"},"On the left navigation, select ",(0,n.kt)("strong",{parentName:"li"},"Budget Alerts"),"."),(0,n.kt)("li",{parentName:"ol"},"At the top, click ",(0,n.kt)("strong",{parentName:"li"},"Configure Alert"),"."),(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("strong",{parentName:"li"},"New Budget Alert")," modal is displayed. Configure the following parameters:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"For ",(0,n.kt)("strong",{parentName:"li"},"Budget"),", select the budget for which the alert applies."),(0,n.kt)("li",{parentName:"ul"},"For ",(0,n.kt)("strong",{parentName:"li"},"If Costs Exceed"),", select a percentage threshold (e.g., 85% of the budget). You'll receive an alert only if the threshold is reached."),(0,n.kt)("li",{parentName:"ul"},'Optionally, enter a period of observation within the month (e.g., \u201c10 days from the start of the month\u201d or \u201c5 days before the end of the month").'),(0,n.kt)("li",{parentName:"ul"},"For ",(0,n.kt)("strong",{parentName:"li"},"Email recipients"),", select recipients, who are members of your team in Vantage, you want to receive the alert."),(0,n.kt)("li",{parentName:"ul"},"Optionally, select any Slack or Microsoft Teams channels you want to receive the alert.",(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to view example image"),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,n.kt)("img",{alt:"A budget alert configured to send to one user and a Slack team 10 days before the end of the month.",width:"50%",src:"/img/configure-budget-alert.png"})))))),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save"),". Budget alerts will look similar to the below image.")),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,n.kt)("img",{alt:"Email budget alert",width:"60%",src:"/img/email-budget-alert.png"})),(0,n.kt)("p",null,"Recipients will be notified immediately after a Cost Report is updated with the latest data. Reports are updated with the latest data at least once per day. If your budget exceeds the threshold for multiple alerts, you'll be notified only about the most severe alert (the alert with the highest threshold)."),(0,n.kt)("h3",{id:"budget-alert-limitations"},"Budget Alert Limitations"),(0,n.kt)("p",null,"At this time, only dynamic, percentage-based thresholds are supported. Budget alerts can be configured only to send alerts based on actual, not forecasted costs."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"A single cost increase will not typically trigger a budget alert. If you are interested in this feature, see the ",(0,n.kt)("a",{parentName:"p",href:"/cost_anomaly_alerts"},"Cost Anomaly Alerts")," documentation.")),(0,n.kt)("p",null,"Because a budget is defined for a month, you can only be alerted based on the budget amount for the ",(0,n.kt)("em",{parentName:"p"},"entire")," month instead of the month to date. As a workaround, configure the ",(0,n.kt)("strong",{parentName:"p"},"Within"),' option on the alert (e.g., "10 days from the start of the month") to mimic this behavior.'),(0,n.kt)("h3",{id:"budget-alerts-and-cost-reports"},"Budget Alerts and Cost Reports"),(0,n.kt)("p",null,"If you update a Cost Report that is associated with a budget alert, the following message is displayed: ",(0,n.kt)("em",{parentName:"p"},"This report has budget alerts and may trigger a notification. Are you sure you want to save the report?")," You must confirm before saving the report."))}g.isMDXComponent=!0}}]);