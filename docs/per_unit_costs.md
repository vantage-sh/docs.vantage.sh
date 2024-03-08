---
id: per_unit_costs
title: Per Unit Costs
description: Use business metrics to analyze per-unit costs and cost of goods sold.
keywords:
    - Per unit costs
    - Business Metrics
toc_max_heading_level: 4
---

# Per Unit Costs

A _unit_ is any metric that your business tracks, such as users, requests, transactions, customers, vendors, and so on. Unit costs can help you analyze the cost of goods sold (COGS). You can add unit costs as a trend line on Cost Reports to visualize your cloud infrastructure costs on a per-unit basis. _Business metrics_ are the units of data from your business that are aggregated and combined with costs to produce per-unit costs on Cost Reports. By importing these business metrics into Vantage, you can track unit costs, like cost per daily active user, COGS per customer, cost per million API requests, etc.

In the visual example below, per requests per second is visualized alongside daily costs to show the trend associated with varying costs and requests. 

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Per Unit Costs displayed as a trend line on the graph in a Cost Report" width="100%" src="/img/per-unit-costs.png" />
</div>

## Import Business Metrics

Business metrics can be imported from other systems directly into Vantage and analyzed alongside cost data. You can create automatic import integrations with Amazon CloudWatch or manually import these metrics via a CSV.

:::note
You must be an owner to import unit metrics. Anyone with Editor permissions and above can assign them to a specific Cost Report.
:::

1. From the top navigation, click **Financial Planning**.
2. On the left navigation, select **Business Metrics**. All existing business metrics are displayed. You can edit or delete business metrics from this screen.
3. From the top right of the screen, click **New Business Metric**.
4. Enter a business metric **Title** and click **Create Business Metric**.

The **Business Metrics** screen is displayed:
- In the **Assigned Cost Reports** section, you can select one or more Cost Reports where the business metric will be displayed. See the [Assign Business Metrics to Cost Reports](/per_unit_costs#assign-metrics) section for details. 
- In the **Import Business Metrics** section, you can import business metrics via a [CSV file](/per_unit_costs#importing-from-a-csv) or [Amazon CloudWatch](/per_unit_costs#importing-from-cloudwatch).

### Import from a CSV File {#importing-from-a-csv}

You can upload a CSV using the following two-column format. This CSV file can replace existing data or be used to import new data. You can supply up to six months of metrics.

The `date` column must be `YYYY-MM-DD` format. The `amount` column must be a number.

```
date,amount
2024-01-09,295
2024-01-16,909
2024-01-23,934
2024-01-30,772
2024-02-06,770
2024-02-13,170
2024-02-20,819
2024-02-27,307
...
```

Click **Upload a CSV**. Select the CSV file and upload. After the file is imported, a dropdown menu for each month is displayed. For months with imported metrics, the date and associated metric number are displayed. 

<details><summary>Click to view visual example</summary>
<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="The Imported Costs section with costs displayed for a month" width="80%" src="/img/imported-data.png" />
</div>
</details>

To add additional metrics or change the value of a metric, update your source CSV file. Then, click **Edit** and upload the edited file. The new metric is displayed in the table.

### Import from CloudWatch {#importing-from-cloudwatch}

To import business metrics from Amazon CloudWatch you need a specific metric name and AWS account. 

:::note
If Vantage does not have a Cross-Account IAM Role associated with this account, you will first need to create one. See the [AWS integration](/connecting_aws) documentation for details.
:::

1. From the **Import Business Metrics** section, click **Import via CloudWatch**.
2. For **AWS Account**, select the connected AWS account you want to import metrics from.
3. Select an AWS **Region**.
4. Enter a **Namespace**. A complete list of available namespaces can be found in the AWS documentation for [AWS services that publish CloudWatch Metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html). Namespaces start with `AWS/` followed by the service name (e.g., `AWS/EC2`).
5. Enter a **Metric name**. Each AWS service has metrics that it [sends to CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/viewing_metrics_with_cloudwatch.html). Available metrics can be found in CloudWatch or the AWS documentation. 
   :::tip
   The AWS documentation includes a list of available metrics for services. For example, you can view [EC2 instance metrics](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/viewing_metrics_with_cloudwatch.html). An example metric to track in this instance is `CPUUtilization`. For [Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-metrics.html), an example metric to track is `WriteIOPS` or `ReadIOPS`.
   :::
6. For **Dimensions**, enter a **Name** and **Value**. [Dimensions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Dimension) are used to pull specific statistical data for a metric. For example, `InstanceId` with a value of `i-1234567890abcdef0`. Each CloudWatch metric has a set of dimensions you can select. Click **+ Add a Dimension** to add more than one dimension.
7. For each import, you must specify the **Aggregation** function to be used because metrics will be aggregated to the day. Select either **Sum**, **Average**, **Maximum**, or **Minimum**. 
8. Click **Import Data**.
<details><summary>Click to view visual example</summary>
<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="The CloudWatch metrics import screen with data added to each field" width="80%" src="/img/import-cloudwatch.png" />
</div>
</details>

Metrics will be imported for the last six months. The metrics will be automatically synced, daily, along with cost data from other integrations. 

## Assign Business Metrics to Cost Reports {#assign-metrics}

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Assign metric to cost report" width="80%" src="/img/assign-metrics-cost-report.png" />
</div>

Once your import is complete you can assign metrics to one or more Cost Reports. You can also assign as many different business metrics to a Cost Report as you want.

1. Under **Assigned Cost Reports**, click **+ Add a Report**.
2. In the **Report** dropdown menu, search for and select a Cost Report.
3. For **Unit Scale**, select either **Per Unit**, **Per Hundred**, **Per Thousand**, **Per Million**, or **Per Billion**. The scale is used to divide the business metric before calculating the cost per unit. Use this scale to create a per-unit cost, such as _Cost per Thousand Requests_. If you select **Per Unit**, no division occurs, and the base metric number will be used within the Cost Report.
4. Click **Save**. The metric is displayed on the corresponding Cost Report based on the selected scale.

## View Per Unit Costs on Cost Reports

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Per Unit Costs displayed on a Cost Report" width="100%" src="/img/per-unit-costs-cost-report.png" />
</div>

To inspect your unit costs, navigate to the assigned Cost Report. The average unit cost for the date range selected is displayed at the top of the screen. To see the cost per unit line, ensure your view is set to daily, weekly, or monthly. Hover over a data point to see the cost per unit for that day, week, or month. If you added multiple business metrics to the same Cost Report, each business metric is displayed as a separate line.
