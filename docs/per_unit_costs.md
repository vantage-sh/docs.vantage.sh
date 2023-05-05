# Per Unit Costs

Unit Costs are a visualization on Cost Reports which display cloud infrastructure costs on a per-unit basis. A unit can be any metric that your business tracks such as users, requests, transactions, customers, vendors, and so on. Unit costs are a fantastic tool for helping analyze cost of goods sold (COGS). By importing these Business Metrics into Vantage, you can add them to Cost Reports to track things like cost per daily active user, COGS per customer, cost per million API requests, and more.

![Per-Unit Costs](/img/per-unit-costs.jpg)

Business Metrics refer to the units of data from your business that are aggregated and combined with costs to produce Per Unit Costs on Cost Reports.

To get started with Per Unit Costs, head to [Business Metrics](https://console.vantage.sh/financial_planning/business_metrics) in the Financial Planning section of the Vantage console.

## Importing Business Metrics

Business Metrics can be imported from other systems directly into Vantage and analyzed alongside cost data. You can create automatic import integrations with CloudWatch and manually import these metrics via a CSV.

##### Permissions

You must be an owner in order to import unit metrics. Anyone with Editor and above can assign them to a specific Cost Report.

##### Aggregation

There a different options for importing unit metrics. For each import you must specify the aggregation function to be used as these metrics will be aggregated to the day.

### Importing from CloudWatch

To import Business Metrics from CloudWatch you need a specific metric name and AWS account. If Vantage does not have a Cross Account IAM Role for this account one will have to be created.

![Import from CloudWatch](/img/import-cloudwatch.png)

Next, fill out the Region, Namespace, Metric Name, and Dimensions to import.

#### Namespace

A complete list of available namespaces can be found in the AWS documentation for [AWS services that publish CloudWatch Metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html). Namespaces start with `AWS/` followed by the service name.

#### Metric Name

Each AWS service that you use will have its own metrics that it [sends to CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/viewing_metrics_with_cloudwatch.html). Available metrics can be found in CloudWatch or in the AWS documentation. For example, here are the available [EC2 instance metrics](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/viewing_metrics_with_cloudwatch.html).

### Dimensions

[Dimensions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Dimension) are used to pull specific statistical data for a metric. Each Cloudwatch metric has it's own set of dimensions that you could choose from.

#### Automatic Syncing

Metrics will be imported for the last 6 months. They will be automatically synced up on a daily basis along with cost data from other integrations. 

### Importing from a CSV

You can upload a CSV in a specific two column format which can either replace existing data on upload or be used to import new data. You may supply up to 6 months worth of metrics.

The format for CSV upload is:

```
date,amount
2023-01-09,295
2023-01-16,909
2023-01-23,934
2023-01-30,772
2023-02-06,770
2023-02-13,170
2023-02-20,819
2023-02-27,307
...
```

The date column must be in the format YYYY-MM-DD. The amount column must be a number.

## Assign Business Metrics to Cost Reports

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Assign metric to cost report" width="60%" src="/img/assign-metrics-cost-report.png" />
</div>

Once your import is complete you can assign metrics to [Cost Reports](/cost_reports). In order to utilize the same Cost Report data across multiple business metrics you can assign as many unit metrics to the same Cost Report as you like. You can also assign the same metric to multiple reports.

When adding a Business Metric to a Cost Report you will select the scale. A unit scale can be Per Unit, Per Hundred, Per Thousand, Per Million and Per Billion. The scale is used to divide the business metric prior to calculating the cost per unit. This allows you to create a Per Unit cost such as "Cost per Thousand Requests." If you select Per Unit no division will take place and the base metric number will be used.

## View Per Unit Costs on Cost Reports

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Per Unit Costs displayed on a Cost Report" width="60%" src="/img/per-unit-costs-cost-report.png" />
</div>

To inspect your unit costs, navigate to the Cost Reports you assigned them to. The average unit cost for the date range selected will appear on the right. You must be viewing a daily, weekly or monthly view in order to see the cost per unit line. By mousing over any particular data point you can see the cost per unit for that day, week, or month. If you have added multiple business metrics to the same Cost Report you will see these displayed as multiple lines.
