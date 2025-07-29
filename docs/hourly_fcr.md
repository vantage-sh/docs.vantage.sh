---
id: hourly_fcr
title: Hourly Financial Commitment Reports
description: How to enable Hourly Financial Commitment Reports.
unlisted: true
keywords:
  - Financial commitment reports
  - Savings Plans
  - Reserved Instances
  - Hourly
---

# Enable Hourly Financial Commitment Reports

With hourly granularity, you can analyze your financial commitment coverage and utilization, by the hour, for any 14-day period within your data retention.

:::note
To enable this feature, contact support@vantage.sh.
:::

If your Cost and Usage Report (CUR) is currently set to daily aggregation (the Vantage default), you must [reconnect your AWS integration](/connecting_aws#create-a-connection) with a new CUR configured to use an hourly time unit. This guide walks through how to obtain an hourly AWS Cost and Usage Report using [CloudFormation](/hourly_fcr#cloudformation), [Terraform](/hourly_fcr#terraform), or through a [manual process](/hourly_fcr#manual).

Vantage will experience a delay in receiving your cost data until the first hourly CUR is received from AWS. This process can take up to 24 hours. In addition, the first hourly CUR that's sent to Vantage contains only the current month's data. Follow the instructions for [backfilling a CUR](/connecting_aws#backfilling-aws-cur-for-previous-reporting-periods) to obtain additional months' data.

## Enable via CloudFormation {#cloudformation}

1. From your AWS management account (or account the CUR is deployed in), navigate to **CloudFormation**. 
2. Open the **ConnectToVantage-** stack.
  <div style={{display:"flex", justifyContent:"center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",}}><img alt="Cloudformation Console" width="100%" src="https://assets.vantage.sh/docs/hourly-cloudformation-step-1.png"/> </div>
1. At the top, click **Update Stack** > **Create a change set**.
  <div style={{display:"flex", justifyContent:"center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",}}><img alt="Cloudformation Console" width="100%" src="https://assets.vantage.sh/docs/hourly-cloudformation-step-2.png"/> </div>
1. Select **Use existing template**, then click **Next**.
  <div style={{display:"flex", justifyContent:"center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",}}><img alt="Cloudformation Console" width="100%" src="https://assets.vantage.sh/docs/hourly-cloudformation-step-3.png"/> </div>
1. Make the following changes:
   - Update the **ReportName** so this it is unique. It is recommended you append _-hourly_ to the existing **ReportName**.
     <div style={{display:"flex", justifyContent:"center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",}}><img alt="Cloudformation Console" width="100%" src="https://assets.vantage.sh/docs/hourly-cloudformation-step-4a.png"/> </div>
   - For **TimeUnit**, change the value from **DAILY** to **HOURLY**. Then, click **Next**.
     <div style={{display:"flex", justifyContent:"center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",}}><img alt="Cloudformation Console" width="100%" src="https://assets.vantage.sh/docs/hourly-cloudformation-step-4b.png"/> </div>
2. Check the box at the bottom to acknowledge the changes that are being made. Then, click **Next**.
  <div style={{display:"flex", justifyContent:"center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",}}><img alt="Cloudformation Console" width="100%" src="https://assets.vantage.sh/docs/hourly-cloudformation-step-5.png"/> </div>
1. Review your changes and click **Submit**.
  <div style={{display:"flex", justifyContent:"center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",}}><img alt="Cloudformation Console" width="100%" src="https://assets.vantage.sh/docs/hourly-cloudformation-step-6.png"/> </div>
1. Your change set will be created based on the changes to your resources. This process may take a few minutes. At the top right, click **Execute change set**. (If you are unable to click the **Execute change set** button, click the circular **Refresh** icon below the button.)
  <div style={{display:"flex", justifyContent:"center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",}}><img alt="Cloudformation Console" width="100%" src="https://assets.vantage.sh/docs/hourly-cloudformation-step-7.png"/> </div>
1. CloudFormation processes your changes, which includes deleting the previous CUR definition and creating a new hourly CUR.
  <div style={{display:"flex", justifyContent:"center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",}}><img alt="Cloudformation Console" width="100%" src="https://assets.vantage.sh/docs/hourly-cloudformation-step-8.png"/> </div>

## Enable via Terraform {#terraform}

:::note
You must be on [version 0.1.6](https://registry.terraform.io/modules/vantage-sh/vantage-integration/aws/0.1.6) or above of the Vantage Terraform provider.
:::

If you are using the Vantage Terraform provider [AWS integration module](https://registry.terraform.io/modules/vantage-sh/vantage-integration/aws/latest), an optional parameter for `cur_report_time_unit` is provided. Update the parameter's value to `HOURLY` and apply your changes.

```hcl
provider "aws" {
  region = "us-east-1"
  assume_role {
    role_arn = "arn:aws:iam::123456789012:role/admin-role"
  }
}

module "vantage-integration" {
  source  = "vantage-sh/vantage-integration/aws"

  # Bucket names must be globally unique. It is provisioned with private acl's
  # and only accessed by Vantage via the provisioned cross account role.
  cur_bucket_name        = "my-company-cur-vantage"
  # Optional: granularity of the CUR report: "HOURLY" or "DAILY"
  cur_report_time_unit   = "HOURLY"
}
```

## Enable via Manual Deployment {#manual}

1. Log in to AWS, and navigate to the **Billing and Cost Management** console. 
2. From the left navigation menu, under **Cost and Usage Analysis**, select **Data Exports**.
  <div style={{display:"flex", justifyContent:"center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",}}><img alt="Cloudformation Console" width="100%" src="https://assets.vantage.sh/docs/hourly-manual-step-1.png"/> </div>
3. Click **Create** to create a new CUR definition.
  <div style={{display:"flex", justifyContent:"center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",}}><img alt="Cloudformation Console" width="100%" src="https://assets.vantage.sh/docs/hourly-manual-step-2.png"/> </div>
3. Create a Data Export with the following parameters:
   - **Export details** section:
     - Select **Legacy CUR export**.
     - Enter an **Export name** of your choice.
   - **Export content** section:
     - For **Additional export content**, select **Include resource IDs**.
     - For **Data refresh settings**, select **Refresh automatically**.
   - **Data export delivery options** section:
     - For **Report data time granularity**, select **Hourly**.
     - For **Report versioning**, select **Overwrite existing report**.
     - For **Compression type**, select **gzip**.
   - **Data Export storage settings** section:
     - For **S3 bucket**, select the same S3 bucket your existing Vantage CUR uses.
     - For **S3 path prefix**, enter _hourly-v1_.
4. Click **Create Report**.
