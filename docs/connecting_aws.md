# Setup AWS

## Connecting Your AWS Account

Vantage understands security concerns and aims to provide as secure of a connection as possible with your AWS accounts. Vantage uses a mechanism called a *Cross-Account IAM Role* to interact with services in your AWS account. AWS has [publicly documented](https://aws.amazon.com/blogs/apn/securely-accessing-customer-aws-accounts-with-cross-account-iam-roles/) this method and officially recommends it as the preferred method of doing any cross-account interactions on AWS. Numerous internal AWS services and systems also leverage this method.

This means that Vantage **never** needs access credentials, account logins, or passwords.

> Note that everyone who works at Vantage has previously worked in public cloud infrastructure, including companies like AWS, DigitalOcean, GitHub, Akamai, and Cloudflare, and we're taking best practices learned at those companies into consideration when building Vantage.

### Read-Only by Default

When you create a Cross-Account IAM Role using the provided CloudFormation template, you provide Vantage with various [permissions](https://docs.vantage.sh/permissions_aws/). All these permissions, by default, are read-only. We created this list of permissions based on the official [AWS ReadOnlyAccess policy](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/ReadOnlyAccess.html). In addition, we removed some of the permissions AWS includes in this list to prevent Vantage from seeing information like reading from S3 buckets and reading from databases.

Vantage only collects metadata about your infrastructure and never attempts to read sensitive information from the underlying services. Our CloudFormation template is public, and you can [audit the template's list of permissions here](https://vantage-public.s3.amazonaws.com/vantage-integration-latest.json).

### Connecting Multiple AWS Accounts

Vantage allows you to connect multiple AWS accounts; however, we strongly advise that you connect your **root or management** AWS account first. When you connect the root account, you can see all costs for the organization, including linked accounts. 

> **Important:** If you initially connect a linked or member account rather than the root account, you may experience the following issues:
>   - You will see only costs and costs by resource for that linked account rather than for your whole organization.
>   - You will be unable to see costs for the other member accounts in your AWS organization. 
>   - You may not see the full coverage of cost allocation tags from the organization. 
>   - If Reserved Instances (RIs) are purchased in the linked account, those instances will be realized in the linked account first instead of being realized across the organization. 

By default, we require you to start with one AWS account and ensure it is properly connected. Once you connect your root/management AWS account, Vantage will profile for all member accounts present in the organization. Vantage will be able to show you accrued costs from all member accounts in the organization as well as Active Resources that are present in that _root AWS account_.

If you have multiple member accounts and want to view Active Resources present in those accounts, Vantage will offer you the ability to run a CloudFormation StackSet that will create one role per AWS member account. You're also welcome to skip this step and add/remove AWS accounts from your [account settings](https://console.vantage.sh/settings/workspaces) whenever you want.

We recommend using StackSets if you have several accounts you want to connect. This will automate the process for all the accounts in your Organizational Unit. When connecting your account, if you have at least one member account, you will see instructions specific to your account on how to connect your member accounts using StackSets.

### StackSet Prerequisites

To leverage StackSets, you must enable your organization's access to operate a service-managed StackSet. You'll need to enable this setting in the AWS Management Console. If you don't have this setting enabled and attempt to run a StackSet command, you'll see the following error:

`An error occurred (ValidationError) when calling the CreateStackSet operation: You must enable organizations access to operate a service managed stack set`

For more information, see [AWS's instructions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html) for enabling this setting.

### Connecting with Terraform

During onboarding, instead of following the CloudFormation process, you can use our Terraform module. Refer to the [Terraform documentation](/terraform/) for the needed commands.

### Connecting by Manually Creating an IAM Role

If you want to create IAM roles manually or use another tool to manage your infrastructure, you can create the necessary cross-account role. During onboarding, instead of following the CloudFormation process, select the **IAM Role** option. You will be presented with a Trust Relationship and an Inline Policy that is required for the role. After creating the role, return to the onboarding page and submit the [ARN](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) of the created role to complete the connection.

### AWS Data Ingestion Delay

As of June 2022, Vantage now creates both an IAM role as well as a [Cost and Usage Report](https://docs.aws.amazon.com/cur/latest/userguide/cur-create.html) integration through the same provided CloudFormation template and Terraform file. While an IAM role is created within a minute, and historical data can be populated almost immediately, it can take AWS around 6 or 7 hours to deliver the first Cost and Usage Report to Vantage. As a result, only partial data will be present until this first Cost and Usage Report is received.

This will impact a few features in the Vantage console:

- [Active Resources](/active_resources) will initially show only hourly and monthly _rates_. When the first Cost and Usage Report is received, you can see actual accrued costs per resource, broken down by cost category and subcategory.
- [Cost Reports](/cost_reports) will show line-item data per service initially but will not be able to show "costs by resource" until the first Cost and Usage Report report is received.
- Both [Autopilot](/autopilot/) and [Savings Planner](/savings_planner/) are unavailable until this first Cost and Usage Report is received.

Once Vantage receives its first Cost and Usage Report, this functionality will automatically be made available, and Vantage will alert you via email. Ultimately, this is a limitation imposed by AWS, and we need to wait for them to deliver this data.
