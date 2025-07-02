---
id: hourly_fcr
title: Hourly Financial Commitment Reports
description: How to enable Hourly Financial Commitment Reports.
keywords:
  - Financial commitment reports
  - Savings Plans
  - Reserved Instances
  - Hourly
---

# Enabling Hourly Financial Commitment Reports

Hourly granularity within Financial Commitment Reports allows users to analyze their financial commitment coverage and utilization by the hour for any 14 day period within their data retention.  

:::note
Hourly Granularity in Financial Commitment Reports is an Opt-In feature. In order to opt in to Hourly Reporting, please reach out to [support@vantage.sh](mailto:support@vantage.sh). 
:::

This guide will walk you through how to obtain an hourly AWS Cost and Usage Report to enable Hourly Financial Commitment Reporting in Vantage.

# Enabling via CloudFormation

1. Navigate to Cloudformation in the management account (or account the CUR is deployed in), and find the **“ConnectToVantage-”** stack

<div style={{display:"flex", justifyContent:"center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",}}><img alt="Cloudformation Console" width="100%" src="/img/hourly-cloudformation-step-1.png"/> </div>

2. Select **“Update Stack”**, and then chose **“Create a change set”**

<div style={{display:"flex", justifyContent:"center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",}}><img alt="Cloudformation Console" width="100%" src="/img/hourly-cloudformation-step-2.png"/> </div>

3. Select **“Use existing template”**

<div style={{display:"flex", justifyContent:"center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",}}><img alt="Cloudformation Console" width="100%" src="/img/hourly-cloudformation-step-3.png"/> </div>

4. You will need to make two changes on this page. 
    1. Change the **ReportName**, as this must be unique. It is recommended to just append “-hourly” to your existing **ReportName**
    2. From the **TimeUnit** drop down, change from **“DAILY”** to **“HOURLY”**

<div style={{display:"flex", justifyContent:"center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",}}><img alt="Cloudformation Console" width="100%" src="/img/hourly-cloudformation-step-4a.png"/> </div>
<p></p>
<div style={{display:"flex", justifyContent:"center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",}}><img alt="Cloudformation Console" width="100%" src="/img/hourly-cloudformation-step-4b.png"/> </div>

5. Acknowledge the changes that are being made 

<div style={{display:"flex", justifyContent:"center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",}}><img alt="Cloudformation Console" width="100%" src="/img/hourly-cloudformation-step-5.png"/> </div>

6. Review changes and **Submit**

<div style={{display:"flex", justifyContent:"center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",}}><img alt="Cloudformation Console" width="100%" src="/img/hourly-cloudformation-step-6.png"/> </div>

7. Your Change Set will be created for the changes to your resources. This may take a few seconds/minutes. If the **“Execute Change Set”** CTA does is not enabled, hit the refresh button right below it. Once **“Execute Change Set”,** click the button

<div style={{display:"flex", justifyContent:"center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",}}><img alt="Cloudformation Console" width="100%" src="/img/hourly-cloudformation-step-7.png"/> </div>

8. CloudFormation will complete the changes, which include deleting the previous CUR definition and creating a new Hourly CUR

<div style={{display:"flex", justifyContent:"center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",}}><img alt="Cloudformation Console" width="100%" src="/img/hourly-cloudformation-step-8.png"/> </div>

<p></p>

# Enabling via Terraform

If you are using the [Vantage Terraform Privder AWS Integration Module](https://registry.terraform.io/modules/vantage-sh/vantage-integration/aws/latest), there is an optional parameter for <code>cur_report_time_unit</code>. Simply update this to <code>HOURLY</code> and apply your changes.

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

# Enabling via Manual Deployment

1. Log into AWS, and navigate to the Billing and Cost Management Console. Select Data Exports from the left nav bar

<div style={{display:"flex", justifyContent:"center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",}}><img alt="Cloudformation Console" width="100%" src="/img/hourly-manual-step-1.png"/> </div>

2. Click "Create" to create a new CUR definition

<div style={{display:"flex", justifyContent:"center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",}}><img alt="Cloudformation Console" width="100%" src="/img/hourly-manual-step-2.png"/> </div>

3. Create a Data Export with the following parameters
- Export details
  - Select Legacy CUR export
  - Enter an Export name (provide any name of your chosing)
- Export Content
  - Check the box to 'Include resource IDs'
  - Check the box to 'Refresh automatically'
- Data Delivery options
  - Set report data time granularity to <code>Hourly</code>
  - Set 'Report versioning' to 'Overwrite existing report'
  - Set compression type to <code>gzip</code>
- Data Export storage settings
  - Set the S3 bucket to be the same S3 bucket as the S3 bucket as your existing Vantage CUR
  - Enter <code>hourly-v1</code> as the S3 path prefix
- Click "Create Report"

<div style={{display:"flex", justifyContent:"center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",}}><img alt="Cloudformation Console" width="100%" src="/img/hourly-manual-step-3.png"/> </div>


