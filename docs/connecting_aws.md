---
id: connecting_aws
title: AWS
description: This page walks through how to integrate Vantage with your AWS account.
keywords:
  - AWS
  - Connect AWS
---

# AWS

Vantage has a few options to connect to AWS, including CloudFormation, the AWS CLI, a Terraform module, and the AWS IAM Console. All options are described below.

## How Vantage Connects with AWS

Vantage understands security concerns and aims to provide as secure a connection as possible with your AWS accounts. Vantage uses a mechanism called a _Cross-Account IAM Role_ to interact with services in your AWS account. AWS has [publicly documented](https://aws.amazon.com/blogs/apn/securely-accessing-customer-aws-accounts-with-cross-account-iam-roles/) this method and officially recommends it as the preferred method of doing any cross-account interactions on AWS. Numerous internal AWS services and systems also leverage this method.

This means that Vantage **never** needs access credentials, account logins, or passwords for AWS.

### Read-Only by Default {#read-only-by-default}

When you create a Cross-Account IAM Role using the provided CloudFormation template, or via Terraform, you provide Vantage with various [permissions](https://docs.vantage.sh/permissions_aws/). All these permissions, by default, are read-only. We created this list of permissions based on the official [AWS ReadOnlyAccess policy](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/ReadOnlyAccess.html). In addition, we removed some of the permissions AWS includes in this list to prevent Vantage from seeing certain information, like reading from S3 buckets and reading from databases.

:::note
Vantage only collects metadata about your infrastructure and never attempts to read sensitive information from the underlying services. Our CloudFormation template is public, and you can [audit the template's list of permissions](https://vantage-public.s3.amazonaws.com/vantage-integration-latest.json).
:::

### AWS GovCloud Environments

Vantage supports ingesting costs for infrastructure in [GovCloud](https://aws.amazon.com/govcloud-us/details/) environments. Note that at this time, we are unable to sync active resources from GovCloud regions into the [Active Resources](/active_resources#viewing-active-resources) screen in Vantage; however, you can still view costs by resource in [Cost Reports](/cost_reports). You also have access to all other Vantage functionality. 

## Create a Connection

Navigate to the [Vantage Integrations](https://console.vantage.sh/settings/integrations) page, and create a new AWS connection. On the AWS connection page, you will see a few options to connect.

- **AWS Console:** Click the purple **Connect Vantage via AWS Console** button to directly log in to AWS. You will be directed to CloudFormation to create the necessary stack that will contain prefilled parameters.
- **AWS CLI:** Click the **More Connection Options** dropdown and select **Connect via AWS CLI**. The CLI commands needed to create a connection are provided on this screen.
- **Terraform:** Click the **More Connection Options** dropdown and select **Connect via AWS Terraform**. Instructions for how to connect using the Terraform module are provided on this screen. See the [section below](/connecting_aws#terraform) for more details.
- **AWS IAM Console:** Click the **More Connection Options** dropdown and select **Connect via AWS IAM Console**. Instructions are provided on this screen. See the [section below](/connecting_aws#iam_console) for more details.
- **CloudFormation StackSet for Multiple Member Accounts:** Click the **Connect via CloudFormation StackSet** button. The necessary commands to create this connection are displayed. See the next section for more information.

After you create your integration between AWS and Vantage, you can view the status of your connection on the [AWS Settings page](https://console.vantage.sh/settings/aws).

:::note
Vantage will experience [a delay](/connecting_aws#aws-data-ingestion-delay) in receiving all your cost data until the first Cost and Usage Report (CUR) is received from AWS. In addition, the first CUR that's sent to Vantage contains only the current month's data. See the instructions below for [backfilling a CUR](/connecting_aws#backfilling-aws-cur-for-previous-reporting-periods).
:::

### Connect Multiple AWS Accounts {#connecting-multiple-aws-accounts}

You can connect multiple AWS accounts to Vantage; however, we strongly advise that you connect your **root or management** AWS account first. When you connect the root account, you can see all costs for the organization, including linked accounts.

:::caution Important
**If you connect only a linked or member account, you will experience the following issues:**

- You will see only costs and costs by resource for that linked account, rather than for your whole organization.
- You will be unable to see costs for the other member accounts in your AWS organization.
- You may not see the full coverage of cost allocation tags from the organization.
- If Reserved Instances (RIs) are purchased in the linked account, those instances will be realized in the linked account first instead of being realized across the organization.
:::

Once you connect your root/management AWS account, Vantage will profile all member accounts present in the organization. Vantage will be able to show you accrued costs from all member accounts in the organization, as well as Active Resources that are present in that _root AWS account_.

If you have multiple member accounts and want to view Active Resources present in those accounts, you use the CloudFormation StackSet that will create one role per AWS member account. You're also welcome to skip this step and add/remove individual AWS accounts from your [account settings](https://console.vantage.sh/settings/aws) whenever you want.

We recommend using StackSets if you have several accounts you want to connect. Using the StackSet will automate the process for all the accounts in your organizational unit. When connecting your account, if you have at least one member account, you will see instructions, specific to your account, on how to connect your member accounts using StackSets.

#### StackSet Prerequisites

To leverage StackSets, you must enable your organization's access to operate a service-managed StackSet. You'll need to enable this setting in the AWS Management Console. If you don't have this setting enabled and attempt to run a StackSet command, you'll see the following error:

`An error occurred (ValidationError) when calling the CreateStackSet operation: You must enable organizations access to operate a service managed stack set`

For more information, see [AWS's instructions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html) for enabling this setting.

### Connect with Terraform {#terraform}

During onboarding, instead of following the CloudFormation process, you can use the Vantage Terraform module. Refer to the [Terraform documentation](/terraform#integrations-module) for more information.

### Connect by Manually Creating an IAM Role {#iam_console}

If you want to create IAM roles manually or use another tool to manage your infrastructure, you can create the necessary cross-account role.

1. On the AWS connection page in the Vantage console, click **More Connection Options** > **Connect via AWS IAM Console**.
2. You will be presented with a **Trust Relationship** and an **Inline Policy** that is required for the role. Follow the steps provided in the Vantage console to set up the role. Keep this tab open as you will need some submit the **[ARN](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html)** of the role to complete the connection.
3. After creating the role in IAM, return to the onboarding page in Vantage and add the **ARN** of the created role to the **Cross account arn** field at the bottom of the connection workflow pop-up window. Then, click **Connect** to complete the connection.

## AWS Data Ingestion Delay {#aws-data-ingestion-delay}

Vantage creates both an IAM role and a [Cost and Usage Report (CUR)](https://docs.aws.amazon.com/cur/latest/userguide/cur-create.html) integration when onboarding to AWS. While an IAM role is created within a minute, and historical data can be populated almost immediately, it can take AWS up to 24 hours to deliver the first CUR to Vantage. As a result, only partial data will be present until this first CUR is received.

This delay will impact a few features in the Vantage console:

- [Active Resources](/active_resources) will initially show only hourly and monthly rates. Once the first CUR is received, you can see actual accrued costs per resource, broken down by cost category and subcategory.
- [Cost Reports](/cost_reports) will show line-item data per service initially but will not be able to show _costs by resource_ until the first CUR is received.
- Both [Autopilot](/autopilot/) and [Savings Planner](/savings_planner/) are unavailable until the first CUR is received.

Once Vantage receives its first CUR, this functionality will automatically be made available, and Vantage will alert you via email. Ultimately, this is a limitation imposed by AWS, and all Vantage features will become active once the data is received.

## Backfill AWS CUR for Previous Reporting Periods {#backfilling-aws-cur-for-previous-reporting-periods}

The first CUR that's sent to Vantage contains only the current month's data. If you want to see historical data in Vantage, you can backfill your CUR for re-ingestion into Vantage.

If you have _existing_ historical CUR files, add a copy of these files to the shared Vantage S3 bucket. Then, email [our Support team](mailto:support@vantage.sh) to ingest the backfilled CUR. By default, Vantage will automatically process CUR files for the current calendar month, but our Support team can manually process historical CURs when notified in a manual process.

:::note
Ideally, these files should be a daily CSV; however, Vantage can also support hourly and/or Parquet formats.
:::

If you do not have this data available, you can contact AWS Support and open a ticket for AWS to backfill your CUR. Follow the steps below.

1. From your AWS root/management account, use the top search bar to search for and navigate to **Cost and Usage Reports**.
2. A table of CURs is displayed. Observe the **Report Name** column. You should see the CUR that was created by Vantage when the integration was set up. Take note of the values in the **Report Name** and **S3 Bucket** columns.
3. Open a ticket with [AWS Support](https://docs.aws.amazon.com/cur/latest/userguide/billing-get-answers.html) to backfill the Vantage CUR. You can use the sample email template below when creating your request.

   <details>
   <summary>AWS Support Request Template</summary>

   _Subject: Request for Backfilling AWS Cost and Usage Report_

   **[Insert your organization name]** needs help backfilling an AWS Cost and Usage Report per the below requirements:

   - Please backfill the existing **[Insert Vantage CUR report name]** report from the **[Insert CUR's S3 bucket name]** S3 bucket.
   - We need historical data for the following period: **[Insert start date]** to **[Insert end date]**.
   - This should be a daily CSV file.

   Once the historical data is successfully backfilled into the above CUR, please send us a notification or confirmation.

   Thank you,

   **[Insert your name]**

   </details>

4. Once AWS Support completes your request, please email [support@vantage.sh](mailto:support@vantage.sh) to re-ingest the backfilled CUR.

## Update the Vantage AWS Integration

Occasionally, Vantage will modify the permission sets it uses to access billing and resource data on AWS. When this happens, you can update your integration.

1. Navigate to the [**Integrations** page](https://console.vantage.sh/settings/integrations) of the Vantage console.
2. From the **AWS** tile, click **Manage**.
3. The **Account** list is displayed. Click **Manage** for the cloud account that you want to update. (For AWS organizations with multiple accounts, this will usually be the Management account.)
4. Click **Update Vantage via AWS Console** to perform the update, or click **More Update Options** for command-line and other deployment methods.

## Manage Workspace Access

See the [Workspaces](/workspaces#integration-workspace) documentation for information on how to update workspace access for an integration.