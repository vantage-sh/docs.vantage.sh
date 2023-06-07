---
description: Resource Reports gives you the ability to view and filter resources and see associated cost information for active resources across multiple services and providers, including AWS, Snowflake, and MongoDB Atlas.
---

# Resource Reports

When you connect [AWS](/connect_aws), [Snowflake](/connect_snowflake), or [MongoDB](/connect_mongodb-atlas), Vantage will begin profiling active resources via List/Describe service APIs within your account. This will provide you with an "active resource" report that allows you to see all running resources within your account and the costs they are accruing while doing so. You can access these reports in the [Active Resource](https://console.vantage.sh/active_resource_reports) tab in the console.

This tab will display a list of all Resource Reports with the number of resources and total costs tracked in the report. You can create new reports and rename your reports from this page. Below is a view of the "All Resources Report":

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Resource Reports" width="80%" src="/img/resource-report.png" />
</div>

### Available AWS Resources

Vantage is only able to show you active resources for which there is an IAM Role created. Typically one point of confusion is that an organization with a root/management account will have an IAM Role but you may think that Vantage is missing resources from various member accounts. In order to see active resources from within each member account, you'll simply need to create an IAM role for each member account. As you create IAM Roles for each member account, the resources will automatically be populated from those member accounts in the active resource inventory. The Vantage setup process handles this automatically as described in our documentation on [connecting AWS](/connect_aws).

Another point to be aware of is that not every AWS service is supported for resource level costs, albeit the vast majority of services which incur costs are. To see the full list of services for which there are resource level costs, please consult our documentation on [supported AWS services](/supported_services).

## Filtering Resources

Once you have selected "New Report" or started browsing the "All Resources Report", you will be able to filter the list of resources by various dimensions. You can use these filters to create reports including:

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

Each resource is linked to a page which further drills into its costs. You may click into any resource to see a detailed view of its costs over time as well as metadata and get a link to open that resource in the AWS, Snowflake, or MongoDB Atlas console. The image below shows an AWS Lambda resource which has been drilled into from a Resource Report:

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Resource Report Drill Down" width="80%" src="/img/resource-report-click.png" />
</div>

## Cloudwatch Metrics

Vantage attempts to give you high-fidelity charts for CloudWatch metrics on each resource page. On resources that support CloudWatch metrics there will be a tab entitled "Metrics" that you can click on and see metrics in-line on like below:

Cloudwatch metrics are configured automatically per resource when you connect an AWS account to Vantage.
