---
id: cost_reports
title: Cost Reports
description: Create Cost Reports in Vantage to drill into your costs and filter on many dimensions.
keywords:
  - Cost Reports
---

# Cost Reports

By default, Vantage provides you with a Cost Report, named **All Resources**, that will show you all costs across all your connected cloud service accounts.

You can create as many Cost Reports as you'd like and filter your costs across several dimensions. As you create Cost Reports, they will be displayed on the [Overview](/overview) page. Each report will automatically generate a [forecast](/forecasting).

## Create a Cost Report

1. From the top navigation, click **Cost Reporting**.
2. On the left menu, select **Cost Reports**.
3. On the top right, click **+ New**. A new, unfiltered Cost Report is displayed.
4. From the top left of the graph, click **Filters**.
5. Click **+ Add a Filter** and select your desired filter criteria.
6. From the top right of the graph, use the date picker to select the date range for the report.
7. Select one of the following date bins:
   - **Cumulative:** Displayed as a line chart on the graph, along with a forecast
   - **Daily, Weekly, or Monthly:** Displayed as a bar chart, with each date range organized into bins within the bar chart

You can perform additional filter and analysis operations on your Cost Report. See the following sections for additional instructions:

- [Filter a cost report](#filtering-cost-reports)
- [Configure report groups](#configure-report-groups)
- [Configure Credits, Discounts, Refunds, Taxes](#credits-discounts)
- [Enable/disable amortization](#amortization)
- [Perform comparative cost reporting](#comparative-cost-reporting)

### Save a Cost Report {#saving-cost-reports}

After you apply all desired filters to the report, you can save your changes and name the report.

1. From the top right of the graph, click **Save As New** to create a new Cost Report with your changes, or **Save Changes** to modify the current report.
2. Enter a name, then click **Save**.
   :::note
   If you update the date range, date bin (e.g., **Last 30 Days**), or grouping, you can also permanently save these changes. Once saved, the new date range, date bucket, and grouping will persist on the [Overview](/overview) page. If you save a report that includes only changes to filter sets, the report will be displayed on the Overview page with the last six months of costs.
   :::

### Organize Cost Reports

#### Cost Report Folders {#cost-report-folders}

You can organize your Cost Reports in folders and separate them by team or group. See the [Folders](/folders) documentation for more information.

#### Dashboards {#dashboards}

Cost Reports can be displayed as a group on a dashboard. The dashboard has options to display all reports by the same date range. See the [Dashboards](/dashboards) documentation for more information.

### Anomalies, Forecasts, and Annotations

Cost Reports have several other features, including [anomaly detection](/cost_anomaly_alerts), [forecasts](/forecasting), and [annotations](/annotations). See the linked documentation for more information about these features.

## Filter Cost Reports {#filtering-cost-reports}

On the **Filters** menu, click **Select a provider** and choose from any of your connected providers (AWS, Azure, etc.). Costs are filtered to all costs for the selected provider. Within the table, costs are grouped by provider service (e.g., Amazon Relational Database Service), in descending order of **Accrued Costs**.

<div style={{ display: "flex", justifyContent: "center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", borderRadius: "10px", overflow: "hidden" }}>
    <img alt="GIF of selecting a provider filter for GCP and sorting the table by cost in the console" width="80%" src="/img/add-provider-filter.gif"/>
</div>
<br/>

To view available filter options, click **New Rule**. A list of filter options is displayed (e.g., Account or Resource). Filter options vary per provider.

Each filter includes options for exact matching and fuzzy matching. For example, in the image below, you can select **is**, **is not**, **contains**, **does not contain**, **starts with**, and **ends with** for the **Resource** filter. This set of options can vary per selected filter. Select a matching option, then select a filter value (e.g., <code>where <strong>Service</strong> is <strong>Amazon Relational Database Service</strong> + <strong>Amazon Elastic Cloud - Compute</strong></code>)

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Selecting matching criteria for a filter in a Cost Report" width="80%" src="/img/resource-filter-options.png" />
</div>

To continue filtering the report, perform any of the following actions:

- To add another value for that filter, click the **+** icon next to the first value.
- To remove a selected filter value, click the trashcan icon.
- To add more filter criteria, click **New Rule**. The graph is updated to display costs that match the first filter criteria _and_ the second filter criteria.
- To add a separate filter set, click **+ Add a Filter**. You can also use this option to add costs from another provider. The graph is updated to display costs that match the first filter set _or_ the second filter set.
- To remove a filter set, click the three dots (**...**) on the top right of the filter set, then click **Delete**.

### Category and Subcategory Cost Filters

Each service typically has multiple underlying category and subcategory costs. For example, you have AWS as a connected provider. You can filter by several subcategories, like the amount of storage you've used or the amount of egress traffic for retrieving S3 objects as well as for the actual HTTP requests you make to query for S3 objects.

Similarly, Azure and GCP also support category and subcategory costs on Cost Reports. For example, with Azure, if you filter by **Subcategory** for the **Service** of **Virtual Machines**, you can then filter for individual Azure VMs. In GCP, the labels you apply to resources will be displayed as subcategories.

To drill down in the costs table to view **Category** costs:

1. Add a filter for a provider, like AWS. The table below the graph is updated to show costs grouped by service.
2. A few icons are displayed next to each listed service. Click the **Costs by Category** icon (looks like a set of squares; see the example below). A full breakdown of all subcategory costs that make up the main AWS service cost is displayed.

<div style={{ display: "flex", justifyContent: "center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", borderRadius: "10px", overflow: "hidden" }}>
    <img alt="GIF of filtering RDS costs by category and sorting the table in the console" width="80%" src="/img/category-costs.gif"/>
</div>
<br/>

### Per-Resource Cost Filters

For certain providers, like AWS, you can view individual resources.

1. Add a filter for a provider, like AWS. The table below the graph contains costs grouped by service.
2. Next to each listed service, observe a few icons. Click the **Costs by Resource** icon (looks like a set of different shapes). A full breakdown of all resource costs that make up the main AWS service is displayed.

In the below example, two RDS instances are present in the account. The table displays how much each instance is driving in costs—without the need for any additional tagging.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Example of Per Resource Costs" width="80%" src="/img/per-resource-list.png" />
</div>

You can also view the **Category** and **Subcategory** costs on a per-resource basis. In the previous example, to view a breakdown of costs for the RDS instance named **core-production-primary-01**, click the **Costs by Category** icon (looks like a dollar sign—**$**). Costs are now displayed by resource, within a category, for a specific service.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Example of a Single Resource Costs" width="80%" src="/img/per-resource-individual.png" />
</div>

### Percent-Based Cost Allocation {#percent-based-cost-allocation}

With percent-based cost allocation, you can filter Cost Reports to show back shared resources, like support costs or multi-tenant databases, to the team or department that uses them. As filters are set in a Cost Report, Vantage will query for costs that meet all those conditions.

To set percent-based cost allocation:

1. From the **Filters** menu, select your desired filter criteria. For example, select the **AWS** provider option and filter by **Service** for only RDS costs.
2. Click the **Add Cost Allocation** button on the filter set and enter a value between 1 and 100%. The set percentage will be applied to all the matching costs and represented accordingly in the Cost Report.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Cost allocation of 50% is added to a filter set on a Kubernetes Cost Report" width="80%" src="/img/showback-cost-allocation.png" />
</div>

When percent-based cost allocation is set as a filter, forecasts will be produced in aggregate for all set conditions, and the percentage allocation will be applied to that forecast.

### Saved Filters

You can create and use **Saved Filters** to apply commonly used filters across multiple reports. Review the [Saved Filters documentation](/saved_filters) for more information.

## Configure Report Groups {#configure-report-groups}

With the **Group By** option, you can select one or more dimensions to group by. If you select a grouping option, both the Cost Report table and graph will include costs aggregated by the selected groupings. Once the report is saved, the report’s corresponding [Overview](/overview) widget will be updated as well.

You can group by the following dimensions:

- Account (e.g., member account on AWS, project on GCP)
- Billing Account
- Region
- Service (e.g., Amazon S3, Azure VMs)
- Resource
- Provider (e.g., AWS, GCP, Azure)
- Category
- Subcategory
- Charge Type
- Tag Key

:::note
As costs can be duplicated across multiple tag keys, grouping by multiple tag keys is not currently supported.
:::

After a Cost Report has been grouped, each grouping is displayed as a column in the table below the graph. On the graph itself, group labels are displayed with dashes between each grouping, such as `production - Acme - nat-123456`.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A Cost Report that is enabled with Multi-dimensional Grouping" width="90%" src="/img/cost-report-grouping.png" />
</div>

:::tip
To sort the table by multiple columns in the table, press **Shift + Click** on the column headers.
:::

You can adjust the graph to be displayed as either an area chart or a line chart that includes a line for each group. Toggle either option using the corresponding buttons on the top right of the chart.

<img src="/img/area-to-line.gif" alt="Toggling between area and line chart views on a Cost Report" style={{borderRadius: "10px", boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)"}}/>

### Expand Other Grouping Category

By default, the top five groups of costs by amount are displayed on the graph. In addition, the Other Costs category is displayed as an aggregation of all remaining costs. To add more costs to the graph and table, click the down arrow next to **Other Costs**. The number of other costs is displayed. Click **Show X More Items**, to add additional cost groups to the report.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Displaying additional costs using the Other Costs dropdown menu on a Cost Report" width="90%" src="/img/other-costs.png" />
</div>

## Configure Report Settings

### Credits, Discounts, Refunds, and Taxes {#credits-discounts}

By default, all Cost Reports include discounts and taxes. You can optionally enable credits and discounts, too.

- **Credits:** Credits are often promotional codes redeemed for services or trials on your account.
- **Discounts:** Discounts can include programs like the AWS Enterprise Discount program. Discounts are often negotiated with the cloud provider and based on usage. You might see discounts reflected as negative values in the Cost Report table. You can follow the below best practices for analyzing Cost Reports with discounts:
  - If you remove the **Discount** setting, you can view usage and costs _before_ the discount was applied.
  - Group or filter the Cost Report by **Charge Type**. This grouping displays costs separated by items like usage, discounts, EDP discounts, and taxes.
- **Refunds:** Any associated refunds.
- **Taxes:** Any associated taxes.

To configure these options:

1. Above the Cost Report graph, click **Settings**.
2. Select an option to toggle on/off any of the included costs (e.g., discounts, etc.).

### Amortization {#amortization}

By default, all Cost Reports show upfront fees, such as fees for Reserved Instances, Savings Plans, Marketplace purchases, and Support, amortized day by day for the period of the fee.

In addition, Vantage uses committed use attribution for linked accounts. By default, you will see fees for Reserved Instances and Savings Plans assigned to the AWS account that _benefited_ from the discount—not the account that purchased the commitment.

For more information about this logic, see the following [Vantage blog post](https://www.vantage.sh/blog/vantage-launches-committed-use-float-cost-attribution).

:::note
In contrast to AWS Cost Explorer, which displays fees associated with the account responsible for the commitment or purchase, Vantage provides a comprehensive view by showing fees based on the account where the benefits were actually realized.
:::

#### Disabling Amortization

You can toggle a Cost Report to not amortize upfront fees if you want to view the upfront fees on the day they were incurred.

1. From the top of any Cost Report, click **Settings**.
2. Under **Amortization**, uncheck **Enabled**.

<img src="https://assets.vantage.sh/blog/analyze-aws-cost-data/amortization.gif" alt="Enabling and disabling amortization in the console" style={{borderRadius: "10px", boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)"}}/>

### Vantage vs. Cost Explorer

If you notice your costs in Vantage differ from what you see in Cost Explorer, this could be for many reasons, including:

- **Amortization logic:** As noted above, Vantage uses a different amortization logic from Cost Explorer.
  :::tip
  If you want to align the view in Vantage to Cost Explorer, disable amortization in Vantage and compare the numbers to unblended costs in Cost Explorer.
  :::
- **EC2-Other:** In Cost Explorer, this cost category comprises many subcategories (e.g., Data Transfer). In Vantage, EC2-Other is reallocated into direct line items. For example, if you filter for NAT gateway expenditures, the charges initially categorized under transit or egress in EC2-Other are assigned to the individual resource that created the charge.

For more tips on reviewing your cost data against Cost Explorer, see [the following blog post](https://www.vantage.sh/blog/analyze-aws-cost-data).

## Comparative Cost Reporting {#comparative-cost-reporting}

To compare costs day by day, week by week, or month by month on Cost Reports, click the **By Date** option above the cost table. A view of costs with the same date binning selected for the graph is displayed. To switch back to the previous, current, and percent change view, select **Cumulative**.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Comparative View" width="80%" src="/img/by-date-view.png" />
</div>

## Export Cost Reports {#exporting-cost-reports}

You can select from two modes when you export a report: Basic or Advanced.

- With a Basic export, you can modify only the date range of a report.
- With an Advanced export, you can arbitrarily select the columns, a date range, and a date bin. The columns can be any combination of groupings from the following list:
  - Provider (e.g., AWS, GCP, New Relic)
  - Service (e.g., EC2, EBS)
  - Region (e.g., us-east-1)
  - Service category (e.g., Storage, Compute)
  - Service subcategory (e.g., m5.large, StandardTier)
  - Account (e.g., AWS member account, GCP project)
  - Charge Type (e.g., Usage)
  - Resource (e.g., S3 bucket ARN, EC2 instance ID, MongoDB Atlas cluster name)
- The Advanced export also has the option to select a specific Tag key. Tag key will be included as an additional column in the export, in the following format: `Tag:<TAG KEY>` (e.g., `Tag:Project`).

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Cost Report Exports" width="40%" src="/img/cost-report-exports.png" />
</div>

1. From the top right of any Cost Report, click the download icon (looks like an arrow with a line below it).
2. Select the **Basic** or **Advanced** download option, and select your desired export criteria.
3. Select or enter the emails for the users who you want to receive an emailed copy of the report. Note that these recipients must be users in your organization.
4. Click **Export**.

:::note
For the **Date Bin** export option, when you select **Week**, the week in the export will begin on Monday, UTC. When you select **Month**, the month in the export will begin on the first of the month, UTC.
:::

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Cost Report Exports" width="60%" src="/img/custom-csv-export.png" />
</div>

When the export is finished generating, you’ll receive an email with a link to download the exported data, typically within a few minutes. An example export, with groupings of **Service Category** and **Service Subcategory**, is shown above. You can also export grouped Cost Reports and the groupings will be respected in the downloaded CSV.
