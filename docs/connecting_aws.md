# Setup AWS

## Connecting Your AWS Account

Vantage understands security concerns and aims to provide as secure of a connection as possible with your AWS accounts. Vantage uses a mechanism called a "Cross Account IAM Role" to interact with services in your AWS account. AWS has [publicly documented](https://aws.amazon.com/blogs/apn/securely-accessing-customer-aws-accounts-with-cross-account-iam-roles/) this method and officially recommends it as the preferred method of doing any cross account interactions on AWS. Numerous internal AWS services and systems also leverage this method.

This means that Vantage **never** needs access credentials, account logins or passwords.

Note that everyone who works at Vantage has previously worked in public cloud infrastructure including companies like AWS, DigitalOcean, Github, Akamai and Cloudflare and we are taking best practices learned at those companies into consideration when building Vantage.

### Read Only by Default

When you create a Cross Account IAM Role using the provided CloudFormation template you are giving Vantage various [permissions](https://docs.vantage.sh/permissions_aws/). All of the permissions by default are ReadOnly. The list of permissions was created by using the official AWS ReadOnly policy and removing some of the permissions AWS includes in that list in order to prevent Vantage from seeing information like reading from S3 Buckets and reading from databases.

Vantage only collects metadata about your infrastructure and never even attempts to read sensitive information from the underlying services. Our CloudFormation template is public and you may audit the list of permissions [here](https://vantage-public.s3.amazonaws.com/vantage-integration-latest.json).

### Connecting Multiple AWS Accounts

Vantage allows you to connect multiple AWS accounts. We advise that you connect your master AWS account first. By default, we require you to start with one AWS account and ensure it properly connected. Upon connecting a master AWS account, Vantage will profile for all member accounts present in the organization. Vantage will be able to show you accrued costs from all member accounts in the organization as well as active resources that are present in that _master AWS account_.

In the event that you have multiple member accounts and want to view Active Resources present in those accounts, Vantage will offer you the ability to run something called a CloudFormation StackSet that will create one role per AWS member account. You're also welcome to skip this step and add/remove AWS accounts from your [account settings](https://console.vantage.sh/settings/workspaces) whenever you see fit.

We recommend using StackSets if you have several accounts you would like to connect. This will automate the process for all of the accounts in your Organizational Unit. When connecting your account, if you have at least one member account, you will see instructions specific to your account on how to connect your member accounts using StackSets.

### StackSet Prerequisites

Note that in order to leverage StackSets, you must enable organizations access to operate a service managed stack set. You'll need to enable this in the AWS Console UI. In the event you don't have this enabled and attempt to run a StackSet command you'll get the following error:

`An error occurred (ValidationError) when calling the CreateStackSet operation: You must enable organizations access to operate a service managed stack set`

AWS maintains instructions for the latest way of enabling this which you can find [here](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html).

### Connecting with Terraform

If you manage your infrastructure with Terraform it is very easy to connect to Vantage. During onboarding, instead of following the CloudFormation process, you can use the [Vantage Integrations Module](https://registry.terraform.io/modules/vantage-sh/vantage-integration/aws/latest) to link your AWS and Vantage accounts. Below is an example of adding a member account without CUR integration. Additonal documentation can be found on the [Terraform Registry](https://registry.terraform.io/modules/vantage-sh/vantage-integration/aws/latest).

```hcl
provider "aws" {
  region = "us-east-1"
  assume_role {
    role_arn = "arn:aws:iam::123456789012:role/admin-role"
  }
}

module "vantage-integration" {
  source  = "vantage-sh/vantage-integration/aws"
}
```

### Connecting by Manually Creating an IAM Role

If you would like to create IAM Roles manually or use another tool to manage your infrastructure you can create the necessary cross account role. During onboarding, instead of following the Cloudformation process, you can click on the IAM Role option and you will be presented with a Trust Relationship and an Inline Policy that are required for the role. After creating the role, return to the onboarding page to submit the ARN of the created role to complete the connection.

### AWS Data Ingestion Delay

As of June 2022, Vantage now creates both an IAM Role as well as a [cost and usage report](https://docs.aws.amazon.com/cur/latest/userguide/cur-create.html) integration through the same provided CloudFormation template and terraform file. While an IAM Role is created within a minute and historical data can be populated nearly immediately, it can take AWS around 6 or 7 hours to deliver the first cost and usage report to Vantage. As a result, only partial data will be present until this first cost and usage report is received.

This will impact a few things in the Vantage console.

- [Active Resources](/active_resources) will only show hourly and monthly _rates_ initially. When the first cost and usage report is received, you can see actual accrued costs per resource broken down by cost category and subcategory.
- [Cost Reports](/cost_reports) will show line-item data per service initially but will not be able to show "costs by resource" until the first cost and usage report is received.
- Both [Autopilot](/autopilot/) and [Savings Planner](/savings_planner/) are unavailable until this first cost and usage report is received.

Once Vantage receives its first cost and usage report, this functionality will automatically be made available and Vantage will send you an email letting you know. Ultimately this is a limitation imposed by AWS and we need to wait for them to deliver this data.
