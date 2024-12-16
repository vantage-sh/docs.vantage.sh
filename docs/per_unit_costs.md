---
id: per_unit_costs
title: Unit Costs
description: Use business metrics to analyze per-unit costs and cost of goods sold.
keywords:
  - Per unit costs
  - Unit costs
  - Business Metrics
---

# Unit Costs

A _unit_ is any metric that your business tracks, such as users, requests, transactions, customers, vendors, and so on. Unit costs can help you analyze the cost of goods sold (COGS). You can add unit costs as a visualization on [Cost Reports](/cost_reports) to visualize your cloud infrastructure costs on a per unit basis. _Business metrics_ are the units of data from your business that are aggregated and combined with costs to produce per unit costs on Cost Reports. By importing these business metrics into Vantage, you can track unit costs, like cost per daily active user, COGS per customer, cost per million API requests, etc.

In the visual example below, the business metric **Per Requests per Second** is visualized in the graph as a red line alongside daily costs. You can use this visualization to understand how changes in the request metric contribute to changes in your costs.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Per Unit Costs displayed as a trend line on the graph in a Cost Report" width="100%" src="/img/per-unit-costs.png" />
</div>

## Labeled Business Metrics {#labels}

You can optionally include a label for each uploaded metric. The label identifies the source of the metric—like an associated application or cost center. For example, a metric like _Monthly Active Users_ typically applies to more than one application. The ability to allocate these metrics is important for analyzing both overall user activity and individual application performance, enabling more informed decision-making at the application level. 

In the above example, you can create labels like _Active Users App A_, _Active Users App B_, etc. When you assign this metric to a Cost Report, you can decide which labels to include on the Cost Report and in the per unit cost calculation. Any labels you decide to include will be aggregated in the per unit cost calculation. So, in this example, if you decide to include only data with the _Active Users App A_ label, then unit costs will be calculated only for that set of data. If you also include _Active Users App B_, then the per unit cost calculation will aggregate both sets of labeled data. 

## Import Business Metrics

:::tip
To get started with business metrics and unit costs, you can also view a video demo on [Vantage University](/vantage_university_unit_costs) 🎓.
:::

Business metrics can be imported from other systems directly into Vantage and analyzed alongside cost data. You can create automatic import integrations with Amazon CloudWatch, manually import these metrics from a CSV file, or automatically upload metrics via the Vantage API.

:::note
The following steps are for importing via CloudWatch or a CSV file. If you want to automatically import metrics, see [Import via the Vantage API](/per_unit_costs#import-api).
:::

1. From the top navigation, click **Financial Planning**.
2. On the left navigation, click **Business Metrics**. All existing business metrics are displayed. You can edit or delete business metrics from this screen.
3. From the top right of the screen, click **New Business Metric**.
4. Enter a business metric **Title** and click **Create Business Metric**.
5. The **Business Metrics** screen is displayed:
   - In the **Assigned Cost Reports** section, you can select one or more Cost Reports where the business metric will be displayed. See the [Assign Business Metrics to Cost Reports](/per_unit_costs#assign-metrics) section for details.
   - In the **Import Business Metrics** section, you can import business metrics from a [CSV file](/per_unit_costs#importing-from-a-csv), [Amazon CloudWatch](/per_unit_costs#importing-from-cloudwatch), or [Datadog](/per_unit_costs#importing-from-datadog).

### Import from a CSV File {#importing-from-a-csv}

You can upload a CSV file that uses the following three-column format. This CSV file can replace existing data or be used to import new data. You can supply up to six months of metrics.

The `date` column must be in `YYYY-MM-DD` format. The `amount` column must be a number. The `label` column is optional. See the [section above](/per_unit_costs#labels) for more information about labels.

:::note
A label can be added once per date.
:::

```
date,amount,label
2024-01-09,295,app1
2024-01-16,909,app1
2024-01-23,934,app1
2024-01-30,772,app1
2024-01-09,344,app2
2024-01-16,789,app2
2024-01-23,922,app2
2024-01-30,768,app2
...
```

Click **Upload a CSV**. Select the CSV file and upload. After the file is imported, a dropdown menu for each month is displayed. For months with imported metrics, the date and associated metric number are displayed. Months with no metrics are blank.

<details><summary>Click to view visual example</summary>
<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="The Imported Costs section with costs displayed for a month" width="80%" src="/img/imported-data.png" />
</div>
</details>

To add additional metrics or change the value of a metric, update your source CSV file. Then, click **Edit** and upload the edited file. The new or updated metric is displayed in the table. See the [Assign Business Metrics to Cost Reports](/per_unit_costs#assign-metrics) section for the next steps.

### Import from Amazon CloudWatch {#importing-from-cloudwatch}

To import business metrics from Amazon CloudWatch, you need a specific metric name and AWS account, as described below. Ensure AWS is one of your [connected providers](/connecting_aws)

:::note
If Vantage does not have a Cross-Account IAM Role associated with your AWS account, you need to create one. See the [AWS integration](/connecting_aws) documentation for details.
:::

1. From the **Import Business Metrics** section, click **Import via CloudWatch**.
2. For **AWS Account**, select the connected AWS account you want to import metrics from.
3. Select an AWS **Region**.
4. Enter a **Namespace**. A complete list of available namespaces can be found in the AWS documentation for [AWS services that publish CloudWatch Metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html). Namespaces start with `AWS/` followed by the service name (e.g., `AWS/EC2`).
5. Enter a **Metric name**. Each AWS service has metrics that it [sends to CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/viewing_metrics_with_cloudwatch.html). Available metrics can be found in CloudWatch or the AWS documentation.
   :::tip
   The AWS documentation includes a list of available metrics for services. For example, you can view [EC2 instance metrics](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/viewing_metrics_with_cloudwatch.html). An example metric to track in this instance is `CPUUtilization`. For [Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-metrics.html), an example metric to track is `WriteIOPS` or `ReadIOPS`.
   :::
6. For **Dimensions**, enter a **Name** and **Value**. [Dimensions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Dimension) are used to pull specific statistical data for a metric. For example, enter `InstanceId` with a value of `i-1234567890abcdef0`. Each CloudWatch metric has a set of dimensions you can select. Click **+ Add a Dimension** to add more than one dimension.
7. For each import, you must specify the **Aggregation** function to be used because metrics will be aggregated to the day. Select either **Sum**, **Average**, **Maximum**, or **Minimum**.
8. Optionally, enter a [dimension **name**](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Dimension) for the **Label Dimension** field. 
9. Click **Import Data**.
<details><summary>Click to view visual example</summary>
<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="The CloudWatch metrics import screen with data added to each field" width="100%" src="/img/import-cloudwatch.png" />
</div>
</details>

Metrics are imported for the last six months. The metrics will be automatically synced, daily, along with cost data from other integrations. See the [Assign Business Metrics to Cost Reports](/per_unit_costs#assign-metrics) section for the next steps.

### Import from Datadog {#importing-from-datadog}

To import business metrics from Datadog, ensure Datadog is one of your [connected providers](/connecting_datadog). If you do not have Datadog as one of your connected providers, you will be prompted to connect your Datadog account the first time you try to create a metric.

1. From the **Import Business Metrics** section, click **Import via Datadog**.
2. For **Account**, select the connected Datadog account for which you want to import metrics. If this is your first Datadog metric, you may be prompted to reauthorize your Datadog credentials and the required scopes for Vantage (i.e., `usage_read`, `metrics_read`, and `timeseries_query scopes`).
3. For **Metric**, enter a metric along with any specific filter criteria for the metric, as shown in the example below. For a more detailed explanation, expand the box below for an explainer video of how to convert Datadog syntax to Vantage Business Metrics: 
    ```
    aws.applicationelb.request_count{availabilityzone:us-east-1c, region:us-east-1}
    ```
    :::info
    For more information on the Datadog filtering syntax, see the [Datadog documentation](https://docs.datadoghq.com/metrics/advanced-filtering/).
    :::
    <details><summary>Click to view explainer video</summary>
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
    <iframe src="https://www.youtube.com/embed/x1PCc5CRTr8?si=gr__BRYbvrsGkZG3?rel=0&color=white&modestbranding=1&showinfo=0&wmode=transparent" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '10px' }}></iframe>
    </div><br/>
    </details>
4. For **Aggregation**, select either **Sum**, **Average**, **Maximum**, or **Minimum**. The metric is aggregated to the day based on your selection.
<details><summary>Click to view visual example</summary>
<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="The Datadog metrics import screen with data added to each field" width="100%" src="/img/import-datadog.png" />
</div>
</details>
5. Optionally, enter a [tag **name**](https://docs.datadoghq.com/getting_started/tagging/) for the **Label Tag** field. 
6. Click **Import Data**.

Metrics will be imported for the last six months. The metrics will be automatically synced, daily, along with cost data from other integrations. See the [Assign Business Metrics to Cost Reports](/per_unit_costs#assign-metrics) section for the next steps.

### Import via the Vantage API {#import-api}

You can import business metrics to Vantage, from other applications, with the Vantage API. Use the `/business_metrics` endpoint to view, create, update, and delete business metrics.

:::info
The basic steps for using this endpoint are provided below. See the [API documentation](https://vantage.readme.io/reference/createbusinessmetric) for details on parameters, sample requests, and sample responses.
:::

#### Prerequisites

Ensure you have a valid Read/Write [Vantage API token](/vantage_account#api-token).

#### Create a Business Metric

The following example shows how to create a business metric by sending a `POST` request to the `/business_metrics` endpoint.

```bash
curl --request POST \
     --url https://api.vantage.sh/v2/business_metrics \
     --header 'accept: application/json' \
     --header 'authorization: Bearer <AUTH_TOKEN>' \
     --header 'content-type: application/json' \
     --data '
{
  "title": "API Requests",
  "cost_report_tokens_with_metadata": [
    {
      "unit_scale": "per_unit",
      "cost_report_token": "rprt_12abc345def678gh"
    }
  ],
  "values": [
    {
      "date": "2024-02-01",
      "amount": 1512,
      "label": "app1"
    },
    {
      "date": "2024-02-01",
      "amount": 1816,
      "label": "app2"
    },
    {
      "date": "2024-02-02",
      "amount": 1236,
      "label": "app1"
    },
    {
      "date": "2024-02-02",
      "amount": 1711,
      "label": "app2"
    }
  ]
}
'
```

- `title` is a string that represents the business metric title (e.g., `Requests` or `CPUUtilization`).
- `cost_report_tokens_with_metadata` is an array of objects that represents one or more Cost Reports you want the business metric to be added to. 
  - `cost_report_token` is the unique `token` for the Cost Report.
  :::tip
  You can access `cost_report_tokens` via the `/cost_reports` [endpoint](https://vantage.readme.io/reference/getcostreports).
  :::
  - The `unit_scale` determines the scale of the business metric's values within the Cost Report. It has a default value of `per_unit`. Other options include `per_hundred`, `per_thousand`, `per_million`, and `per_billion`.
- `values` is an array of objects that comprises the `date` and `amount` key/value pairs associated with each business metric data point.
  - `date` needs to be in `YYYY-MM-DD` format.
  - `amount` needs to be a number.
  - `label` is an optional field. See the [section above](/per_unit_costs#labels) for details.

The following JSON is returned in a successful `201` response, which includes the unique business metric `token`. Dates in the response are displayed in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

```json
{
  "token": "bsnss_mtrc_ab12345cde67fg8",
  "title": "API Requests",
  "created_by_token": "usr_0a123456789abcde",
  "cost_report_tokens_with_metadata": [
    {
      "cost_report_token": "rprt_12abc345def678gh",
      "unit_scale": "per_unit"
    }
  ],
  "values": [
    { "date": "2024-02-01T00:00:00Z", "amount": "1512.0", "label": "app1", },
    { "date": "2024-02-02T00:00:00Z", "amount": "1816.0", "label": "app2" },
    { "date": "2024-02-03T00:00:00Z", "amount": "1236.0", "label": "app1" },
    { "date": "2024-02-03T00:00:00Z", "amount": "1711.0", "label": "app2" },
  ]
}
```

#### Update a Business Metric

If you need to update or add additional data to a business metric, send a `PUT` request to the `/business_metrics/{business_metric_token}` endpoint. In the below example, an additional month of data is added to the business metric that was previously created. The request `url` includes the unique business metric `token`, received in the response from the `POST` call, to update the data.

```bash
curl --request PUT \
     --url https://api.vantage.sh/v2/business_metrics/bsnss_mtrc_ab12345cde67fg8 \
     --header 'accept: application/json' \
     --header 'authorization: Bearer <AUTH_TOKEN>' \
     --header 'content-type: application/json' \
     --data '
{
    "values": [
        {"date": "2024-03-01", "amount": 1743},
        {"date": "2024-03-02", "amount": 1356},
        {"date": "2024-03-03", "amount": 1563}
    ]
}
'
```

The following JSON is returned in a successful `201` response.

```json
{
  "token": "bsnss_mtrc_ab12345cde67fg8",
  "title": "API Requests",
  "created_by_token": "usr_0a123456789abcde",
  "cost_report_tokens_with_metadata": [
    {
      "cost_report_token": "rprt_12abc345def678gh",
      "unit_scale": "per_unit"
    }
  ],
  "values": [
    { "date": "2024-02-01T00:00:00Z", "amount": "1512.0" },
    { "date": "2024-02-02T00:00:00Z", "amount": "1816.0" },
    { "date": "2024-02-03T00:00:00Z", "amount": "1236.0" },
    { "date": "2024-03-01T00:00:00Z", "amount": "1743.0" },
    { "date": "2024-03-02T00:00:00Z", "amount": "1356.0" },
    { "date": "2024-03-03T00:00:00Z", "amount": "1563.0" }
  ]
}
```

You can also upload data via a CSV. Send a `PUT` request to the `/business_metrics/{business_metric_token}/values.csv` endpoint using the business metric’s `token`. Specify a path to the CSV in the `csv` parameter.

```bash
curl --request PUT \
     --url https://api.vantage.sh/v2/business_metrics/bsnss_mtrc_ab12345cde67fg8/values.csv \
     --header 'accept: application/json' \
     --header 'authorization: Bearer <AUTH_TOKEN>' \
     --header 'content-type: multipart/form-data' \
     --form 'csv=@<PATH_TO_CSV>'
```

#### Additional API Actions

To get all business metrics your API token has access to, send a `GET` request to the endpoint.

```bash
curl --request GET \
     --url https://api.vantage.sh/v2/business_metrics \
     --header 'accept: application/json' \
     --header 'authorization: Bearer <AUTH_TOKEN>'
```

You can also specify a specific business metric `token` in the `url` to get data for only one business metric.

```bash
curl --request GET \
     --url https://api.vantage.sh/v2/business_metrics/bsnss_mtrc_ab12345cde67fg8 \
     --header 'accept: application/json' \
     --header 'authorization: Bearer <AUTH_TOKEN>'
```

If you want to remove values for certain dates, you can pass an empty value as the `amount` for that `date`. Send a `PUT` request to the `/business_metrics/{business_metric_token}` endpoint using the business metric’s `token`. In the below example, an existing amount is removed for March 10th.

```bash
curl --request PUT \
     --url https://api.vantage.sh/v2/business_metrics/bsnss_mtrc_ab12345cde67fg8 \
     --header 'accept: application/json' \
     --header 'authorization: Bearer <AUTH_TOKEN>' \
     --header 'content-type: application/json' \
     --data '
{
  "values": [
    {
      "date": "2024-03-10T00:00:00Z",
      "amount": null
    }
  ]
}
'
```

If you want to _completely_ delete a business metric, send a `DELETE` request to the `/business_metrics` endpoint, and specify the `token` for the business metric you want to delete in the `url`.

```bash
curl --request DELETE \
     --url https://api.vantage.sh/v2/business_metrics/bsnss_mtrc_ab12345cde67fg8 \
     --header 'accept: application/json' \
     --header 'authorization: Bearer <AUTH_TOKEN>'
```

:::warning
Keep in mind that the `DELETE` action is permanent, and you will no longer have access to that business metric or see it displayed on corresponding reports.
:::

## Assign Business Metrics to Cost Reports {#assign-metrics}

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Assign metric to cost report" width="100%" src="/img/assign-metrics-cost-report.png" />
</div>

Once your import is complete you can assign metrics to one or more Cost Reports. You can also assign as many different business metrics to a Cost Report as you want.

1. Under **Assigned Cost Reports**, click **Assign a Report**.
2. The **Assign a Report** popup window is displayed.   In the **Report** dropdown menu, search for and select a Cost Report.
3. For **Unit Scale**, select either **Per Unit**, **Per Hundred**, **Per Thousand**, **Per Million**, or **Per Billion**. The scale is used to divide the business metric before calculating the cost per unit. Use this scale to create a per-unit cost, such as _Cost per Thousand Requests_. If you select **Per Unit**, no division occurs, and the actual metric number will be used within the Cost Report.
4. For **Label Filter**, select any labels that were imported with your data. 
   - Any selected labels will be aggregated and applied to the Cost Report to calculate the per unit costs. For example, if you select the labels `app1` and `app2`, the per unit cost calculation will be an aggregate of the corresponding values for those labels. If you select only `app1`, then the per unit cost calculation will only apply to values that correspond with the `app1` label. 
   - You can also select the **unlabeled** option, which includes any values that don't have a corresponding label.
5. Click **Save**. The metric is displayed on the corresponding Cost Report based on the selected scale and optionally selected labels.

## View Per Unit Costs on Cost Reports

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Per Unit Costs displayed on a Cost Report" width="100%" src="/img/per-unit-costs-cost-report.png" />
</div>

To inspect your unit costs, navigate to the assigned Cost Report. The average unit cost for the date range selected is displayed at the top of the screen.

:::tip
To see the cost per unit line, ensure your view is set to daily, weekly, or monthly.
:::

Hover over a data point to see the cost per unit for that day, week, or month. If you add multiple business metrics to the same Cost Report, each business metric is displayed as a separate line, as shown in the example above.
