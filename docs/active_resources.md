---
id: active_resources
title: Resource Reports
description: This page discusses Resource Reports, which give you the ability to view and filter resources and see associated cost information for active resources across multiple services and providers, including AWS, Azure, Snowflake, MongoDB Atlas, Confluent, and PlanetScale.
keywords:
  - Active resources
  - Resource reports
---

# Resource Reports

When you connect [AWS](/connecting_aws), [Azure](/connecting_azure), [Snowflake](/connecting_snowflake), [MongoDB](/connecting_mongodb-atlas), [Confluent](/connecting_confluent), or [PlanetScale](/connecting_planetscale), Vantage will begin profiling active resources via List/Describe service APIs within your account. This action will generate an Active Resource report, enabling you to gain visibility into all the currently operational resources within your account and the associated costs they are incurring.

## Available AWS Resources

Vantage is only able to show you active resources for which there is an IAM Role created. Typically, one point of confusion is that an organization with a root/management account will have an IAM Role but you may think that Vantage is missing resources from various member accounts. In order to see active resources from within each member account, create an IAM role for each member account. As you create IAM Roles for each member account, the resources will automatically be populated from those member accounts in the active resource inventory. The Vantage setup process handles this automatically as described in our documentation on [connecting AWS](/connecting_aws).

Another point to be aware of is that not every AWS service is supported for resource-level costs; however most services that incur costs are supported. To see the full list of services for which there are resource-level costs, see the documentation on [supported AWS services](/supported_services).

## Available Azure Resources

To see the full list of services for which there are resource-level costs, see the documentation on [supported Azure services](/azure_supported_services).

## Other Available Active Resources

The following active resources are available for the providers below.

| Provider      | Active Resources                                                      |
| ------------- | --------------------------------------------------------------------- |
| Snowflake     | Snowflake queries are synced as active resources                      |
| MongoDB Atlas | MongoDB Atlas clusters are synced as active resources.                |
| Confluent     | Confluent Kafka Clusters are synced as active resources.              |
| PlanetScale   | PlanetScale databases and branches are available as active resources. |

## Viewing Active Resources

From the top of the console, select the [Active Resource](https://console.vantage.sh/services) tab.

The **Active Resources** navigation menu contains **Services** (resources by name and total number of active resources) and **Resource Reports** (view and create your own resource reports with total costs tracked).

Click **Resource Reports**. You can create new reports and rename your reports from this page. Below is a view of the **All Resources Report**, which is provided by default:

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Resource Reports" width="80%" src="/img/resource-report.png" />
</div>

## Filtering Resources

Once you have selected **New Report** or started browsing the "All Resources Report", you will be able to filter the list of resources by various dimensions. You can use these filters to create reports including:

- Resources across AWS services that match a certain AWS tag
- Resources within a specific AWS member account
- All AWS EC2 instances which are `m5.large`
- All Snowflake queries belonging to a label

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Resource Report Filter" width="60%" src="/img/resource-report-filter.png" />
</div>

A resource report is a collection of active resources consisting of:

- A name
- A set of configurable filters which include:
  - Provider
  - Region (for AWS only)
  - Account
  - Resource type (EC2 instances, S3 Buckets, etc)
  - Label
  - UUID (also known as ARN for AWS)
  - Metadata
  - Tag

### Resource Syncing

Active resources are synced for each Workspace at least once every 24 hours. Vantage syncs all tags specific to a service.

## Drilling into Resources

Each resource is linked to a page which further drills into its costs. You may click into any resource to see a detailed view of its costs over time as well as metadata and get a link to open that resource in the AWS, Azure, Snowflake, or MongoDB Atlas console. The image below shows an AWS Lambda resource which has been drilled into from a Resource Report:

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Resource Report Drill Down" width="80%" src="/img/resource-report-click.png" />
</div>

## Rightsizing with CloudWatch Metrics

Vantage attempts to give you high-fidelity charts for CloudWatch metrics for certain resources. On resources that support CloudWatch metrics there will be a tab entitled "CloudWatch Metrics" that you can click on and see metrics in-line like below. These metrics are useful for rightsizing servers and databases based on utilization.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Resource Report Drill Down" width="80%" src="/img/cloudwatch-metrics.png" />
</div>

CloudWatch metrics are configured automatically per resource when you connect an AWS account to Vantage. The services that support Cloudwatch metrics are:

- EC2
- RDS
- S3
- ECS
- Fargate

To inquire about support for Cloudwatch Metrics for other services, or for monitoring support for GCP please contact support@vantage.sh.
