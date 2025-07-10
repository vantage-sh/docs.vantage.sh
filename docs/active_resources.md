---
id: active_resources
title: Resource Reports
description: This page discusses Resource Reports, which give you the ability to view and filter resources and see associated cost information for active resources across multiple services and providers, including AWS, Azure, GCP, Snowflake, MongoDB Atlas, Confluent, and PlanetScale.
keywords:
  - Active resources
  - Resource reports
---

# Resource Reports

For supported providers, Vantage profiles for _active resources_ within your account. An active resource is a resource, such as a virtual machine, that is currently generating costs within a cloud account. This is in contrast to resources that are included in billing but may no longer be live. Examples of active resources include items like Amazon S3 buckets, Azure Load Balancers, Snowflake queries, Confluent clusters, etc.

You can create _resource reports_ to see filtered views of your active resources. These reports provide visibility into all the currently operational resources within your account and the associated costs incurred by each resource. Reports include filterable dimensions, such as account, tag, region, service, and service-specific metadata.

:::note
Active resource views are currently supported for [AWS](/connecting_aws), [Azure](/connecting_azure), [GCP](/connecting_gcp), [Kubernetes](/connecting_kubernetes), [Snowflake](/connecting_snowflake), [MongoDB](/connecting_mongodb-atlas), [Confluent](/connecting_confluent), [PlanetScale](/connecting_planetscale), [Linode](/connecting_linode), and [ClickHouse Cloud](/connecting_clickhouse).
:::

## AWS Active Resources

Vantage shows only active resources that have an associated IAM role. One common source of confusion is when an organization has only a root/management account with an IAM role. To view active resources from each member account, create an IAM role for each member account. As you create each additional IAM role, the member account's resources are automatically added to the active resource inventory. See the [AWS integration](/connecting_aws) documentation for details.

Not every AWS service is supported for resource-level costs; however, most services that incur costs are supported. To see the full list of services for which there are resource-level costs, see the documentation on [supported AWS services](/aws_supported_services).

## Azure Active Resources

To see the full list of supported Azure services, see the [Azure documentation](/azure_supported_services).

## GCP Active Resources

To see the full list of supported GCP services, see the [GCP documentation](/gcp_supported_services).

## Kubernetes Active Resources

A Kubernetes _managed workload_ is a higher-level abstraction than a pod that automatically manages pod objects on your behalf. Vantage currently supports Deployments, StatefulSets, DaemonSets, Jobs, CronJobs, and ArgoCD Rollouts and syncs these managed worklods as active resources in your account. When available, pods are grouped by controller, and you can view and filter on the following metadata:

- Controller name
- Controller type
- Cluster
- Namespace
- Controller labels

## Other Available Active Resources

The following active resources are available for the additional providers listed below.

<table>
  <tr>
    <th>Provider</th>
    <th>Available Active Resources</th>
  </tr>
  <tr>
    <td><a href="/connecting_snowflake">Snowflake</a></td>
    <td>Snowflake queries</td>
  </tr>
  <tr>
    <td><a href="/connecting_mongodb-atlas">MongoDB Atlas</a></td>
    <td>MongoDB Atlas clusters</td>
  </tr>
  <tr>
    <td><a href="/connecting_confluent">Confluent</a></td>
    <td>Confluent Kafka clusters</td>
  </tr>
  <tr>
    <td><a href="/connecting_planetscale">PlanetScale</a></td>
    <td>PlanetScale databases</td>
  </tr>
  <tr>
    <td><a href="/connecting_linode">Linode</a></td>
    <td>Linode Instances, Kubernetes Clusters, Volumes, Object Storage, Images, and NodeBalancers</td>
  </tr>
  <tr>
    <td><a href="/connecting_clickhouse">ClickHouse Cloud</a></td>
    <td>ClickHouse Cloud services</td>
  </tr>
</table>

## View Active Resources {#viewing-active-resources}

:::note
Active resources are synced for each [workspace](/workspaces) at least once every 24 hours. Vantage syncs all tags specific to a service.
:::

1. From the top navigation, click **Active Resources**.
2. The **Services** screen is displayed, which contains each resource by name (e.g., CloudFront Distributions, Azure Databricks Workspaces, etc.), the total number of active resources, and accrued costs for each resource. Select a resource from the parent list to see a list of all resources within that resource group. In the below example, the NAT Gateways resource is selected from the list.
<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A sample resource report with a box around the NAT Gateways resource in the list" width="100%" src="/img/resource-report-parent.png" />
</div>
3. Select an individual resource from the filtered list.
<div style={{display:"flex", justifyContent:"center"}}>
<img alt="A sample resource report with a box around the NAT Gateways resource in the list" width="100%" src="/img/resource-report-child.png" />
</div>
4. The resource is displayed along with a detailed view of its costs over time. In the below image, the selected AWS NAT Gateway resource is displayed, with current and previous costs incurred. Costs for corresponding categories, like **Data Transfer**, are also provided per resource.
<div style={{display:"flex", justifyContent:"center"}}>
<img alt="Resource Report Drill Down" width="100%" src="/img/resource.png" />
</div>
5. Any tags assigned to the resource (including [Virtual Tags](/tagging)) are also displayed in the **Assigned Tags** section at the bottom. 
<div style={{display:"flex", justifyContent:"center"}}>
<img alt="Assigned Tags on Resource Reports" width="100%" src="/img/assigned-tags.png" />
</div>

## Create a Resource Report {#create-a-resource-report}

Create a resource report to filter by specific resources or groups of resources. Create detailed reports, including reports that show:

- Resources across AWS services that match a certain AWS tag
- Resources within a specific AWS member account
- All Amazon EC2 instances that are a certain type, like `m5.large`
- All Snowflake queries belonging to a specific label

To create a resource report:

1. From the top navigation, click **Active Resources**.
2. From the left navigation, click **Resource Reports**. You can create new reports and rename your existing reports from this page. The **All Active Resources Report** is provided by default.
<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A full list of active resources for an account. The resource's label, type, costs, provider, region, and account are listed." width="80%" src="/img/resource-report.png" />
</div>
3. From the top right of the page, click **New Report**.
4. From the type right of the resource list, click **Filters**. The **Filters** panel is displayed.
   - Select a **Provider** (e.g., AWS).
   - Click **New Rule**, then select a filter category, like **Region**. (See the section below for details on available filter options.)
   - Depending on the filter criteria, select an operator (e.g., is, is not, contains).
   - Select a value (e.g., _Region_ **is** _eu-west-1_ ).
   - Click **New Rule** to add additional criteria to the same filter. Results are displayed where both rule 1 _AND_ rule 2 are true.
   - Click + Add Filter to add a new filter set. Results are displayed where _either_ filter 1 _OR_ filter 2 are true.
   - At the top of the **Filters** panel, click **Apply Changes**.
   <div style={{display:"flex", justifyContent:"center"}}>
       <img alt="A resource report filter with sample filter criteria for Snowflake and AWS" width="60%" src="/img/resource-report-filter.png" />
   </div>
5. At the top of the report, click **Save**. The report name is displayed in the breadcrumbs above the report. To rename the report, click the pencil icon next to the default report name. Then, update the name and click **Save**.

:::tip
If you have a Jira integration, you can create a corresponding issue for a Resource Report in your Jira instance. See the [Jira](/jira) documentation for details.
:::


## Customizing Resource Report {#custom-columns}

You can customize which columns appear in your Resource Reports, such as resource specific metadata fields, as well as arrange the columns in any order, allowing you to create reports that contain the exact data you need to report on. 

:::note
Resource specific metadata fields are only available when a Resource Report is filtered to a single service. Reports that span multiple services will show the default columns only.
:::

**Selecting Columns**

To choose which columns appear in your Resource Report:

1. Enter a **Service Resource Report** or filter a customer Resource Report to a **single service** (e.g., EC2, EBS) .
2. Click the **Manage Columns** button in the top-right corner of the report table.
3. Use the checkboxes to toggle metadata columns on or off.
4. Click anywhere outside the **Manage Columns** dropdown to return to viewing your report

<div style={{ display: "flex", justifyContent: "center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", borderRadius: "10px", overflow: "hidden" }} width="80%">
    <img alt="GIF of selecting custom columns" width="100%" src="/img/select-columns.gif"/>
</div>
<br/>

**Rearranging Columns**

To reorder columns:

1. Drag the header of a column in between the existing columns you want to place it between. You will see arrows indicating where the column you are dragging will be placed
2. The order of the columns will be updated in the resource report, as well as in the **Manage Columns** drop down

<div style={{ display: "flex", justifyContent: "center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", borderRadius: "10px", overflow: "hidden" }} width="80%">
    <img alt="GIF of selecting custom columns" width="100%" src="/img/reorder-columns.gif"/>
</div>
<br/>

**Sorting**

You can sort all columns within an Active Resource Report by clicking the arrows in the header of a column. The currently sorted column will be highlighted green, with an arrow pointing the direction of the sort order.

:::note
All columns are sortable except for Resource, Type, and Team
::: 

<div style={{ display: "flex", justifyContent: "center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", borderRadius: "10px", overflow: "hidden" }} width="80%">
    <img alt="GIF of selecting custom columns" width="100%" src="/img/sort-columns.gif"/>
</div>
<br/>

The column order is saved per report. If you save a report after customizing the columns, the configuration—including visibility, order, and sort—will persist.

### Resource Report Filters

The following filters are available for resource reports.

| Filter             | Provider                | Examples                                                                                                                                                                                                                                                                                                         |
| ------------------ | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Account            | AWS, GCP                | AWS or GCP account name (e.g., production)                                                                                                                                                                                                                                                                       |
| Billing Account    | AWS                     | AWS billing account name                                                                                                                                                                                                                                                                                         |
| Label              | All providers           | The resource's label (i.e., name)                                                                                                                                                                                                                                                                                |
| Metadata           | All providers           | Specific to each resource type (e.g., AWS S3 buckets object count; Azure Load Balancers provisioning state; GCP Dataflow Jobs create time; Confluent Kafka cluster type; MongoDB Atlas cluster deployed region; PlanetScale database branches count; Snowflake query invocations; Kubernetes workload namespace) |
| Not Tagged         | All providers           | Filter to see resources not tagged with a specific tag key or any tag key                                                                                                                                                                                                                                        |
| Region             | AWS, Azure, GCP, Linode | us-east-1, ap-northeast-2, eastus, us-east4, us-lax                                                                                                                                                                                                                                                              |
| Resource group     | Azure                   | The Azure resource group name                                                                                                                                                                                                                                                                                    |
| Resource type      | All providers           | EC2 instances, S3 buckets, Confluent Kafka clusters, Snowflake queries, etc.                                                                                                                                                                                                                                     |
| Subscription       | Azure                   | The Azure subscription name                                                                                                                                                                                                                                                                                      |
| Tag                | All providers           | Filter to see resource by a specific tag key or tag key/value; includes Virtual Tags                                                                                                                                                                                                                                                    |
| UUID (ARN for AWS) | All providers           | The unique provider ID (i.e., ARN for AWS) for the resource                                                                                                                                                                                                                                                      |

## Export Resource Report

To export a resource report, click the export button (looks like an arrow pointing down) on the top right of a saved resource report. The resources in the report are exported in a ZIP file with a CSV file per active resource type. Each row includes an active resource along with its cost and metadata. Select one or more Vantage user emails to send the report. Then, click **Export**. It may take a few minutes for the email to be sent.

## Additional Active Resource Views

The following tabs are available for specific resources on the **Active Resources** screen. These tabs provide additional resource-specific information.

### Billing Code Descriptions

AWS practitioners who are having trouble understanding AWS billing codes can find descriptions of each billing code, other variations of that billing code, and other services that use the same billing code for specific services in Resource Reports. When you view a Resource Report for a specific service (e.g., EC2 instances), a link to [cur.vantage.sh](https://cur.vantage.sh/) is provided that takes you to a page with details for that billing line item. 

:::info
[cur.vantage.sh](https://cur.vantage.sh/) is a free utility that gives cloud practitioners simple definitions of billing codes for every AWS service. The site has a distinct page for each AWS service (e.g., S3 or EC2) that clusters together similar billing codes for that service, as there may be separate or distinct billing codes for each individual region.
:::

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A Resource Report grouped to show a subcategory link with the corresponding cur.vantage.sh page" width="90%" src="/img/cur-active-resource.png" />
</div>

### Resource Relationships

You can view relationships between specific resources on the **Relationships** tab.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="The Relationships tab with an example EBS volume displayed" width="100%" src="/img/resource-report-relationships.png" />
</div>

Below are some examples of relationships you may see within your active resources.

| Resource               | Relationship                                                                                                                                                                                                                                 |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Amazon EBS Volumes     | See associated EC2 instances, with accrued cost, account, instance ID, region, instance type, launch time, and lifecycle                                                                                                                     |
| Amazon EC2 Instances   | See associated EBS volumes, with accrued cost, account, volume type, size, IOPs, and state                                                                                                                                                   |
| Azure Disks            | See associated Azure Virtual Machines with accrued costs, account, resource ID, admin username, virtual machine size, boot diagnostics enabled, secure boot enabled, date/time created                                                       |
| Azure Virtual Machines | See associated disk resources with accrued cost, account, resource ID, disk size, OS type, disk IOPs read/write, disk state, encryption type, network access policy, provisioning state, public network access, zones, and date/time created |

### S3 Storage Summary

For S3 buckets, a **Storage Summary** tab is available that provides a list of storage classes, their corresponding storage sizes, and approximate monthly costs for objects in the S3 bucket.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="An example of the S3 Storage Summary screen with Intelligent Tiering suggestions" width="90%" src="/img/resource-report-s3-buckets.png" />
</div>

When available, this screen also includes **S3 Intelligent Tiering Considerations** with a table of possible maximum savings you can potentially yield as a result of implementing S3 Intelligent Tiering across all objects in the bucket with Standard Storage.

### S3 Request Metrics and Egress

AWS charges you on a per-request basis for S3 with potentially different rates for each request type. The **Request Metrics & Egress** tab provides a summary of request metrics for the bucket and each metric's cost for the trailing 30 days.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="An example of the S3 Storage Summary screen with Intelligent Tiering suggestions" width="90%" src="/img/resource-report-egress.png" />
</div>

A graph of each request type (`GET`, `PUT`, `HEAD`, `POST`, `SELECT`, and `LIST`) is provided, which visualizes the total number of requests. The total cost for each request type is also provided.

:::info
See the [AWS documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/metrics-configurations.html) for information on how to enable ingress and egress request metrics. Note that it takes roughly 15 minutes for AWS to begin delivering these metrics after they are enabled.
:::

### EC2 Rightsizing Recommendations

For EC2 instances where Vantage identifies rightsizing opportunities, the **Rightsizing** tab is displayed with recommendations. See the [Cost Recommendations](/cost_recommendations) documentation for details.

### CloudWatch Metrics

For certain resources, you can view high-fidelity charts for CloudWatch metrics. On resources that support CloudWatch metrics, the **CloudWatch Metrics** tab is displayed. These metrics are useful for rightsizing servers and databases based on utilization.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Resource Report Drill Down" width="80%" src="/img/cloudwatch-metrics.png" />
</div>

When you connect an AWS account to Vantage, CloudWatch metrics are configured automatically, per resource. The following services support CloudWatch metrics:

- EC2
- RDS
- S3
- ECS
- Fargate

:::note
To inquire about support for Cloudwatch metrics for other services, or for monitoring support for GCP contact [support@vantage.sh](mailto:support@vantage.sh).
:::

### VPC Flow Logs {#flow-logs}

For active resources that generate network traffic costs, such as NAT Gateways and EC2 instances, the **VPC Flow Logs** tab is displayed. Select this tab to view peer resources and the associated traffic category (e.g., public). A Sankey diagram of each associated network flow is provided. See the [Network Flow Reports](/network_flow_reports) documentation for details on network flow reporting.

<div style={{display:"flex", justifyContent:"center"}}>
  <img alt="Network Flow Report provider resource view" width="90%" src="/img/nfr-resource.png" />
</div>

### GCP Compute Rightsizing Recommendations

For GCP Compute resources where Vantage identifies rightsizing opportunities, the **Rightsizing** tab is displayed with recommendations. See the [Cost Recommendations](/cost_recommendations) documentation for details.

### Kubernetes Rightsizing Recommendations

For Kubernetes workloads where Vantage identifies rightsizing opportunities, the **Rightsizing** tab is displayed with recommendations. See the [Cost Recommendations](/cost_recommendations#kubernetes-rightsizing) documentation for details on how to view and use this information.

### Datadog Host Costs {#datadog-host-costs}

For cloud resources that have the Datadog agent installed, Vantage can associate Datadog per-host fees along with the primary cloud resources from AWS, Azure, and Google Cloud that drive those costs.

:::note
To view these costs and agent information, you need to have a [Datadog](/connecting_datadog) integration, along with either an [AWS](/connecting_aws), [Azure](/connecting_azure), or [GCP](/connecting_gcp) integration.
:::

On Active Resource views for resources like EC2 instances or Virtual Machines, the **Associated Datadog Costs** section is displayed and provides a service breakdown of costs.

The following resources are supported:

- Compute resources with the Datadog agent installed, such as virtual machines or container services
- Databases that are monitored by Datadog’s DBM

The following Datadog services are supported:

- Infrastructure Monitoring
- Database Monitoring
- APM (Hosts)

For eligible resources, the **Datadog Agent Installed** dimension, indicates whether the agent is installed. The below image shows resource data for a particular EC2 instance. On the right information panel, the **Datadog Agent Installed** dimension displays **True**. Observe associated Datadog costs for **Infrastructure Monitoring** and **APM** in the table at the bottom.

<div style={{display:"flex", justifyContent:"center"}}>
  <img alt="The Associated Datadog Costs section is displayed on an active resource" width="90%" src="/img/datadog-host-screen.png" />
</div>

You can also create a Resource Report that filters for resources where the Datadog agent is installed. In the below image, the filter looks for EC2 instances where the agent is installed.

:::tip
Vantage automatically generates this type of report when it finds the Datadog Agent installed on relevant resources. Navigate to the [Resource Reports](https://console.vantage.sh/resources) screen. Autogenerated reports will have a name similar to _AWS EC2 Instances with the Datadog Agent Installed_.
:::

1. Select the **Metadata** filter option.
2. For **Resource Type**, select an eligible resource, like **EC2 Instances** or **RDS Instances**.
3. For **Select a Key**, select **Datadog Agent Installed**.
4. For **Value**, select **true**.

<div style={{display:"flex", justifyContent:"center"}}>
  <img alt="Metadata filter for Datadog Agent costs" width="90%" src="/img/datadog-filters.png" />
</div>
