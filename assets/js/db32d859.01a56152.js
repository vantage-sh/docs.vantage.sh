"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[6653],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var s=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=s.createContext({}),c=function(e){var t=s.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},y=s.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),y=r,h=p["".concat(l,".").concat(y)]||p[y]||d[y]||n;return a?s.createElement(h,o(o({ref:t},u),{},{components:a})):s.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<n;c++)o[c]=a[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,a)}y.displayName="MDXCreateElement"},7215:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var s=a(7462),r=(a(7294),a(3905));const n={id:"security",title:"Security",description:"This page discusses Vantage app security and frequently asked security questions."},o="Security",i={unversionedId:"security",id:"security",title:"Security",description:"This page discusses Vantage app security and frequently asked security questions.",source:"@site/docs/security.md",sourceDirName:".",slug:"/security",permalink:"/security",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/security.md",tags:[],version:"current",frontMatter:{id:"security",title:"Security",description:"This page discusses Vantage app security and frequently asked security questions."},sidebar:"someSidebar",previous:{title:"Vantage Account Settings",permalink:"/vantage_account"},next:{title:"Setup AWS",permalink:"/connecting_aws"}},l={},c=[{value:"Read-Only Billing Access",id:"read-only-billing-access",level:2},{value:"Cross-Account IAM Roles on AWS",id:"cross-account-iam-roles-on-aws",level:2},{value:"Customizing Cross-Account Role Permissions",id:"customizing-cross-account-role-permissions",level:3},{value:"Data Revocation",id:"data-revocation",level:2},{value:"Data Sharing",id:"data-sharing",level:2},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,s.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"security"},"Security"),(0,r.kt)("p",null,"As an infrastructure tool that requires access to your cloud provider, we understand there may be questions, concerns, and necessary clarification around our own infrastructure, processes, and procedures. We, as developers at Vantage, are also customers of Vantage, which more closely aligns our own security concerns with those of our customers."),(0,r.kt)("h2",{id:"read-only-billing-access"},"Read-Only Billing Access"),(0,r.kt)("p",null,"Vantage uses read-only service accounts, service roles, API keys, and other read-only means to access billing data across all the integrations we use. This means we don't store sensitive information, like account access keys and access key secrets, to use Vantage. Should you have any other questions, please feel free to email us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:security@vantage.sh"},"security@vantage.sh"),"."),(0,r.kt)("h2",{id:"cross-account-iam-roles-on-aws"},"Cross-Account IAM Roles on AWS"),(0,r.kt)("p",null,"Vantage uses a Cross-Account IAM Role to sync information about your infrastructure resources. This method is the ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/apn/securely-accessing-customer-aws-accounts-with-cross-account-iam-roles/"},"the AWS-recommended")," approach. When you grant Vantage access to your account by running the provided CloudFormation stack, the stack creates a cross-account role with in-line policies selected by Vantage. These policies are a trimmed-down version of the policies in the AWS-managed ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadOnlyAccess")," policy, but we've removed actions that would otherwise allow us to access sensitive information in databases, buckets, and certain services. Our CloudFormation template is open source and ",(0,r.kt)("a",{parentName:"p",href:"https://vantage-public.s3.amazonaws.com/vantage-integration-latest.json"},"hosted publicly")," for transparency."),(0,r.kt)("h3",{id:"customizing-cross-account-role-permissions"},"Customizing Cross-Account Role Permissions"),(0,r.kt)("p",null,"Vantage requests various in-line read-only permissions when creating the cross-account role on your behalf; however, we understand this can be too broad of a permission set for certain use-cases. As a result, we do allow you to create Cross-Account IAM roles with whatever permissions you're comfortable with. However, keep in mind that narrowing the scope of the role's permissions will limit certain functionality in Vantage."),(0,r.kt)("p",null,"If you email ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@vantage.sh"},"support@vantage.sh")," in advance, we can facilitate provisioning your account with a custom role. Please note that we will provide you with some custom attributes to associate with your Cross-Account IAM Role to prevent ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html"},'the "confused deputy" problem'),". As a result, you will need to contact Vantage support ",(0,r.kt)("em",{parentName:"p"},"before")," you create the role."),(0,r.kt)("h2",{id:"data-revocation"},"Data Revocation"),(0,r.kt)("p",null,"In the account ",(0,r.kt)("strong",{parentName:"p"},"Settings")," section, you have the ability to revoke the Cross-Account IAM Role at any time. Automatically and nearly instantly, Vantage will delete all data associated with that Cross-Account IAM Role. Note that the deletion doesn't remove the set of custom Vantage views you've created; however, these views will be empty, as there are no longer any resources."),(0,r.kt)("p",null,"In the account ",(0,r.kt)("strong",{parentName:"p"},"Settings")," section, you also have the ability to delete your account. Once you delete your account, all data is deleted as well."),(0,r.kt)("h2",{id:"data-sharing"},"Data Sharing"),(0,r.kt)("p",null,"We do not share any data externally. We do not sell or share any user data with any third parties."),(0,r.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Does Vantage periodically perform penetration tests?"),(0,r.kt)("p",null,"Yes. Vantage has outsourced penetration tests to a third party that regularly performs these tests.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Does Vantage hold any security certifications, such as SOC 2 or ISO 27001?"),(0,r.kt)("p",null,"Yes. Vantage is SOC 2 Type 2 certified. To request a copy of our report, visit the ",(0,r.kt)("a",{parentName:"p",href:"https://vantage.sh/security"},"Vantage Security Page"),". We believe that we already roughly adhere to the standards set forth in ISO 27001.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"In terms of application security, how does Vantage deal with security reports received from security researchers? In other words, does Vantage have a bug bounty program or a straightforward process to report security issues?"),(0,r.kt)("p",null,"Vantage receives reports via ",(0,r.kt)("a",{parentName:"p",href:"mailto:security@vantage.sh"},"security@vantage.sh"),". We review every single report that we receive. We do not have a formal bug bounty program, but we do have a process as well as a set of policies and standards we adhere to in order to process security requests.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Does Vantage support 2FA, SSO, or any defensive options?"),(0,r.kt)("p",null,"Yes. We support ",(0,r.kt)("a",{parentName:"p",href:"/sso"},"SAML SSO"),", and 2FA is on the roadmap.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How is customers\u2019 data protected, and who has access to Vantage data?"),(0,r.kt)("p",null,"All data is encrypted in transit and at rest. Only a subset of senior employees has access to data on the Vantage side. We regularly review and revise the list of individuals on the Vantage team with access to customer data.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Do you have a list of third parties Vantage uses that explains what each third party is allowed to access and its purpose?"),(0,r.kt)("p",null,"We use a subset of third parties, largely for analytics, support, and payment processing. There is no PII sent to third parties, and no cost data is shared with third parties. A list of third parties is provided below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mixpanel: Customer analytics"),(0,r.kt)("li",{parentName:"ul"},"Segment: Customer analytics"),(0,r.kt)("li",{parentName:"ul"},"Customer.io: Customer communications"),(0,r.kt)("li",{parentName:"ul"},"HubSpot: Sales management"),(0,r.kt)("li",{parentName:"ul"},"Intercom: Support management"),(0,r.kt)("li",{parentName:"ul"},"Stripe: Payment processing"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Do you have a security contact person in case of breaches?"),(0,r.kt)("p",null,"A team responds to messages at ",(0,r.kt)("a",{parentName:"p",href:"mailto:security@vantage.sh"},"security@vantage.sh"),". Upon request, a security employee can be temporarily assigned to your account as well.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Do you log access activities of Vantage\u2019s employees who have access to the data?"),(0,r.kt)("p",null,"Yes.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Does Vantage store any information regarding cloud infrastructure in the database?"),(0,r.kt)("p",null,"Yes. We store basic metadata on cloud infrastructure to be able to show corresponding costs for associated resources. We do not have the ability to access any of the underlying resources.")))}d.isMDXComponent=!0}}]);