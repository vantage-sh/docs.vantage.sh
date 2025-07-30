---
id: cost_reports
title: Cost Reports
description: Create Cost Reports in Vantage to drill into your costs and filter on many dimensions.
keywords:
  - Cost Reports
---
import ReactPlayer from 'react-player'

# Cost Reports

By default, Vantage provides you with a Cost Report, named **All Resources**, that will show you all costs across all your connected cloud service accounts.

You can create as many Cost Reports as you'd like and filter your costs across several dimensions. As you create Cost Reports, they will be displayed on the [Overview](/overview) page. Each report will automatically generate a [forecast](/forecasting).

:::tip
To get started with Cost Reports, you can also watch these video demos on [Vantage University](/vantage_university_cost_reporting) 🎓.
:::

## Create a Cost Report {#create-report}

1. From the top navigation, click **Cost Reporting**.
2. On the left menu, select **Cost Reports**.
3. On the top right, click **+ New**. A new, unfiltered Cost Report is displayed.
4. From the top left of the graph, click **Filters**.
5. Click **+ Add a Filter** and select your desired filter criteria.
6. From the top right of the graph, use the date picker to select the date range for the report. You can select a date range that encompasses both previous and future dates, up to 6 months ahead. For more information on future forecast dates, see the [Forecasting](/forecasting) documentation. 

  By default, the Cost Report compares the selected dates to the same previous period. For example, the default comparison date for March 12–March 18 is February 12–18. To select a **custom comparison**:
   - Open the date picker menu. 
   - In the left column, select **Custom**. 
   - On the calendar section, under **Custom**, select the first date period field, then hover your mouse over the calendar to highlight and select a date range. (The current month is selected by default.)
   - Under **Comparing to Previous Period**, select the first date period field and select a custom comparison period. 
   - Click **Apply**. 
   - You can also disable the previous period from showing on a report. Click the toggle next to the Previous Period on the Date Picker.
7. Select one of the following date bins:
   - **Cumulative:** Displayed as a line, pie, or area chart on the graph, along with a forecast for line and area charts, if available
   - **Daily, Weekly, or Monthly:** Displayed as a bar, line, or area chart, with date ranges binned on the bottom axis and a forecast, if available

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

:::tip
If you want to create a new report based on an existing report, open the existing report and click **Save as New** on the top right of the screen. You can then further refine your report criteria on the new report.
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
    <img alt="GIF of selecting a provider filter for GCP and sorting the table by cost in the console" width="80%" src="https://assets.vantage.sh/docs/add-provider-filter.gif"/>
</div>
<br/>

To view available filter options, click **New Rule**. A list of filter options is displayed (e.g., Account or Resource). Filter options vary per provider.

Each filter includes options for exact matching and fuzzy matching. For example, in the image below, you can select **is**, **is not**, **contains**, **does not contain**, **starts with**, and **ends with** for the **Resource** filter. This set of options can vary per selected filter. Select a matching option, then select a filter value (e.g., <code>where <strong>Service</strong> is <strong>Amazon Relational Database Service</strong> + <strong>Amazon Elastic Cloud - Compute</strong></code>)

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Selecting matching criteria for a filter in a Cost Report" width="80%" src="https://assets.vantage.sh/docs/resource-filter-options.png" />
</div>

To continue filtering the report, perform any of the following actions:

- To add another value for that filter, click the **+** icon next to the first value.
- To remove a selected filter value, click the trashcan icon.
- To add more filter criteria, click **New Rule**. The graph is updated to display costs that match the first filter criteria _and_ the second filter criteria.
- To add a separate filter set, click **+ Add a Filter**. You can also use this option to add costs from another provider. The graph is updated to display costs that match the first filter set _or_ the second filter set.
- To remove a filter set, click the three dots (**...**) on the top right of the filter set, then click **Delete**.

### Flexible Match {#flexible-match}

The flexible match operator in Vantage helps you work with inconsistent tag naming conventions. When filtering a Cost Report, you can select the flexible match operator to ignore differences in case, whitespace, underscores, and hyphens. This allows a single filter to match many tag value variations without creating multiple filters or manually normalizing tags.

For example, your organization tags workloads by team, but the tag values vary: one service might use `teamA`, another `team-a`, and a third `Team A`. Instead of creating separate filters for each variant, use the flexible match operator as shown in the image below. 

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Flexible match operator" width="60%" src="https://assets.vantage.sh/docs/flex-match.png" />
</div>

Vantage automatically normalizes and matches all variations, as well as match any future iterations that are created of the `Team A` string.

To exclude values, use the **does not flexible match** operator.

### Percent-Based Cost Allocation {#percent-based-cost-allocation}

With percent-based cost allocation, you can filter Cost Reports to show back shared resources, like support costs or multi-tenant databases, to the team or department that uses them. As filters are set in a Cost Report, Vantage will query for costs that meet all those conditions.

To set percent-based cost allocation:

1. From the **Filters** menu, select your desired filter criteria. For example, select the **AWS** provider option and filter by **Service** for only RDS costs.
2. Click the **Add Cost Allocation** button on the filter set and enter a value between 1 and 100%. The set percentage will be applied to all the matching costs and represented accordingly in the Cost Report.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Cost allocation of 50% is added to a filter set on a Kubernetes Cost Report" width="80%" src="https://assets.vantage.sh/docs/showback-cost-allocation.png" />
</div>

When percent-based cost allocation is set as a filter, forecasts will be produced in aggregate for all set conditions, and the percentage allocation will be applied to that forecast.

### Amazon Elastic Container Service (ECS)-Managed Tags {#ecs}

If you want to view Amazon Elastic Container Service (ECS) cluster tags, you need to enable ECS-Managed Tags. See the [AWS documentation](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html#managed-tags) for more information. 

### AWS Organization Tags {#aws-organization-tags}

You can filter and group by [AWS Organization Tags](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html) in Cost Reports. Create a filter for **Tag**. For the **Tag Key**, these tags are displayed like `aws:organizations:tag`. 

### Network Costs {#network-costs}

For resources that generate network traffic costs (e.g., NAT Gateways), a **Network Costs** button is displayed in the Cost Report list. See the [Network Flow Reports documentation](/network_flow_reports) for details on network costs.

In the below example, this Cost Report is grouped by **Service** and **Resource**. The **Network Costs** button is displayed next to NAT Gateway resources. 

<div style={{display:"flex", justifyContent:"center"}}>
  <img alt="Network Costs option on a Cost Report" width="80%" src="https://assets.vantage.sh/docs/nfr-cost-report.png" />
</div>

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
- Charge Type (see the [section below](/cost_reports#charge-type) for definitions)
- Tagged (e.g., see whether resources are or are not tagged)
- Tag (includes [virtual tags](/tagging))

After a Cost Report has been grouped, each grouping is displayed as a column in the table below the graph. On the graph itself, group labels are displayed with dashes between each grouping, such as `production - Acme - nat-123456`.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A Cost Report that is enabled with Multi-dimensional Grouping" width="90%" src="https://assets.vantage.sh/docs/cost-report-grouping.png" />
</div>

:::tip
To sort the table by multiple columns in the table, press **Shift + Click** on the column headers.
:::

### Charge Type Grouping Category {#charge-type}

The Charge Type grouping includes costs separated by items like usage, discounts, EDP discounts, and taxes. Expand the section below to view the associated providers and definitions for each charge type.

<details><summary>Click to view Charge Types</summary>
<table>
  <thead>
    <tr>
      <th>Charge Type</th>
      <th>Provider</th>
      <th>Definition</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>adjustment</td>
      <td>GCP</td>
      <td>GCP adjustments due to reasons like goodwill or SLA violations</td>
    </tr>
    <tr>
      <td>AllocatedAmortizedDiscount</td>
      <td>AWS</td>
      <td>The fee that is associated with the discount</td>
    </tr>
    <tr>
      <td>AllocatedAmortizedFee</td>
      <td>AWS</td>
      <td>Savings Plans and Reserved Instances that have been amortized and allocated to an account with usage</td>
    </tr>
    <tr>
      <td>AmortizedFee</td>
      <td>AWS</td>
      <td>Amortized Savings Plan and Reserved Instance purchases</td>
    </tr>
    <tr>
      <td>AmortizedTax</td>
      <td>AWS</td>
      <td>Tax related to amortized savings plan and reserved instance purchases</td>
    </tr>
    <tr>
      <td>AWS Marketplace</td>
      <td>AWS</td>
      <td>AWS Marketplace fees</td>
    </tr>
    <tr>
      <td>Bundled Discount</td>
      <td>AWS</td>
      <td>Discounted usage for one product/service based on the usage of another product/service</td>
    </tr>
    <tr>
      <td>Credit</td>
      <td>AWS</td>
      <td>Any AWS credits that were applied to your bill</td>
    </tr>
    <tr>
      <td>COMMITTED_USAGE_DISCOUNT</td>
      <td>GCP</td>
      <td>Compute Engine resource-based committed use discounts</td>
    </tr>
    <tr>
      <td>COMMITTED_USAGE_DISCOUNT_DOLLAR_BASE</td>
      <td>GCP</td>
      <td>Spend-based committed use discounts</td>
    </tr>
    <tr>
      <td>DISCOUNT</td>
      <td>Any provider</td>
      <td>Discounts applied by a provider for your usage</td>
    </tr>
    <tr>
      <td>DistributorDiscount</td>
      <td>AWS</td>
      <td>Discounts through the <a href="https://aws.amazon.com/partners/programs/distribution-resellers/">AWS Distribution Resellers Program</a></td>
    </tr>
    <tr>
      <td>Enterprise Discount Program Discount</td>
      <td>AWS</td>
      <td>Discounts applied through the <a href="https://aws.amazon.com/pricing/enterprise/">AWS Enterprise Discount Program (EDP)</a></td>
    </tr>
    <tr>
      <td>Fee</td>
      <td>AWS</td>
      <td>Upfront annual fees paid for subscriptions, such as the fee paid for All Upfront subscriptions</td>
    </tr>
    <tr>
      <td>FeeTax</td>
      <td>AWS</td>
      <td>Tax related to “Fee” type</td>
    </tr>
    <tr>
      <td>FREE_TIER</td>
      <td>GCP</td>
      <td>Credits applied related to GCP Free Tier usage</td>
    </tr>
    <tr>
      <td>Monthly Minimum Fee</td>
      <td>Fastly</td>
      <td>Minimum fee for <a href="https://www.fastly.com/pricing">Fastly</a></td>
    </tr>
    <tr>
      <td>Private Rate Discount</td>
      <td>AWS</td>
      <td>AWS discount based on private pricing rates</td>
    </tr>
    <tr>
      <td>PROMOTION</td>
      <td>GCP</td>
      <td>GCP promotional credits related to items like marketing promotions</td>
    </tr>
    <tr>
      <td>Purchase</td>
      <td>Azure</td>
      <td>RI and Savings Plans purchases in Azure</td>
    </tr>
    <tr>
      <td>Refund</td>
      <td>AWS</td>
      <td>Negative charges, indicating money refunded by AWS</td>
    </tr>
    <tr>
      <td>regular</td>
      <td>GCP</td>
      <td>GCP regular charges</td>
    </tr>
    <tr>
      <td>RESELLER_MARGIN</td>
      <td>GCP</td>
      <td>Discounts for <a href="https://cloud.google.com/marketplace/docs/partners/resell/reseller-incentives">GCP Reseller Program</a></td>
    </tr>
    <tr>
      <td>Reserved Instance Discounted Spend</td>
      <td>AWS</td>
      <td>The rate for instances benefiting from Reserved Instance (RI) benefits.</td>
    </tr>
    <tr>
      <td>Reserved Instance Fee</td>
      <td>AWS</td>
      <td>Monthly recurring fees for Reserved Instance subscriptions</td>
    </tr>
    <tr>
      <td>RiVolumeDiscount</td>
      <td>AWS</td>
      <td>Volume discounts for large Reserved Instance purchases</td>
    </tr>
    <tr>
      <td>rounding_error</td>
      <td>GCP</td>
      <td>GCP cost type for rounding errors</td>
    </tr>
    <tr>
      <td>Savings Plan Discounted Spend</td>
      <td>AWS</td>
      <td>On-demand costs covered by your Savings Plan, offsetting corresponding Savings Plan negation items</td>
    </tr>
    <tr>
      <td>Savings Plan Negation</td>
      <td>AWS</td>
      <td>Offset costs through your Savings Plan benefit associated with covered usage items</td>
    </tr>
    <tr>
      <td>Savings Plan Recurring Fee</td>
      <td>AWS</td>
      <td>Hourly recurring charges associated with a No Upfront or Partial Upfront Savings Plan</td>
    </tr>
    <tr>
      <td>Savings Plan Upfront Fee</td>
      <td>AWS</td>
      <td>One-time upfront fee from purchasing All Upfront or Partial Upfront Savings Plans</td>
    </tr>
    <tr>
      <td>Solution Provider Program Discount</td>
      <td>AWS</td>
      <td>Discounts through the <a href="https://aws.amazon.com/partners/programs/solution-provider/">AWS Solution Provider Program</a></td>
    </tr>
    <tr>
      <td>SUBSCRIPTION_BENEFIT</td>
      <td>GCP</td>
      <td>Credits earned after purchase of long-term subscriptions</td>
    </tr>
    <tr>
      <td>SUSTAINED_USAGE_DISCOUNT</td>
      <td>GCP</td>
      <td>Credit for running certain Compute Engine resources for a large portion of the month</td>
    </tr>
    <tr>
      <td>Tax/tax</td>
      <td>AWS, GCP</td>
      <td>Taxes applied, such as sales tax</td>
    </tr>
    <tr>
      <td>Usage</td>
      <td>Any provider (for GCP, see "regular")</td>
      <td>Charges for usage at regular or on-demand rates</td>
    </tr>
  </tbody>
</table>
</details>

### Other Grouping Category

By default, the top five groups of costs by amount are displayed on the graph. In addition, the Other Costs category is displayed as an aggregation of all remaining costs. To add more costs to the graph and table, click the down arrow next to **Other Costs**. The number of other costs is displayed. Click **Show X More Items**, to add additional cost groups to the report.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Displaying additional costs using the Other Costs dropdown menu on a Cost Report" width="90%" src="https://assets.vantage.sh/docs/other-costs.png" />
</div>

## Drill Down in Costs Table {#drilldown}

Within the table below the graph, you can drill down into your report to create precise filtering and grouping views. Your options to drill down in the report will vary based on if the report is ungrouped or has some grouping criteria applied to it.

### Drill Down in Ungrouped Report

When a report is ungrouped (i.e., the **Group By** dropdown is set to **Ungrouped**), a few icons are displayed within each line of the table, depending on your ingested resources.

#### Category and Subcategory Cost Filters

Each service typically has multiple underlying category and subcategory costs. For example, you have AWS as a connected provider. You can filter by several subcategories, like the amount of storage you've used or the amount of egress traffic for retrieving S3 objects as well as for the actual HTTP requests you make to query for S3 objects.

1. Add a filter for a provider, like AWS. 
2. A few icons are displayed next to each listed AWS service. Click the **Costs by Category** icon (looks like a set of squares; see the example below). A full breakdown of all subcategory costs that make up the main AWS service cost is displayed.

<div style={{ display: "flex", justifyContent: "center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", borderRadius: "10px", overflow: "hidden" }}>
    <img alt="GIF of filtering RDS costs by category and sorting the table in the console" width="80%" src="https://assets.vantage.sh/docs/category-costs.gif"/>
</div>
<br/>

#### Per-Resource Cost Filters

For certain providers, like AWS, you can view individual resources.

1. Add a filter for a provider, like AWS. 
2. Next to each listed AWS service, observe a few icons. Click the **Costs by Resource** icon (looks like a set of different shapes). A full breakdown of all resource costs that make up the main AWS service is displayed.

In the below example, two RDS instances are present in the account. The table displays how much each instance is driving in costs—without the need for any additional tagging.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Example of Per Resource Costs" width="80%" src="https://assets.vantage.sh/docs/per-resource-list.png" />
</div>

You can also view the **Category** and **Subcategory** costs on a per-resource basis. In the previous example, to view a breakdown of costs for the RDS instance named **core-production-primary-01**, click the **Costs by Category** icon (looks like a dollar sign—**$**). Costs are now displayed by resource, within a category, for a specific service.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Example of a Single Resource Costs" width="80%" src="https://assets.vantage.sh/docs/per-resource-individual.png" />
</div>

### Drill Down in Grouped Report

If you apply grouping criteria to the Cost Report (e.g., set the **Group By** field to **Service**), another set of drilldown options is displayed on the Cost Report. In the below example:

- The report is filtered to **AWS** costs and grouped by **Service**.
- On the line item for **Elastic Compute Cloud - Compute**, click the **Drilldown** icon.
  - A filter for line items matching only the **Elastic Compute Cloud - Compute** service is added in the **Filters** menu. 
  - In addition, the report is now also grouped by **Category**. 
  - The **Category** column also now appears in the table.

<div style={{ display: "flex", justifyContent: "center" }}>
    <div style={{ 
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", 
        borderRadius: "10px", 
        width: "100%",
        overflow: "hidden" 
    }}>
    <ReactPlayer 
        playing 
        muted 
        playsinline
        loop
        url='https://assets.vantage.sh/docs/drilldown-category.mp4'
        alt="The Drilldown icon is clicked and adds a filter and grouping item for Category." 
        width="100%"
        height="100%"
    />
    </div>
</div>

<br/>

- You can continue to click the **Drilldown** icon to add filters for selected line items and group by other options, like **Subcategory**. For example, if you click the **Drilldown** icon on the **EC2 > Data Transfer** line item:
  - The **Data Transfer** category filter is applied in the **Filters** menu. 
  - A grouping of **Subcategory** is available.
  - **Subcategory** is also displayed as a column in the table.
<br/>

<div style={{ display: "flex", justifyContent: "center" }}>
    <div style={{ 
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", 
        borderRadius: "10px", 
        width: "100%",
        overflow: "hidden" 
    }}>
    <ReactPlayer 
        playing 
        muted 
        playsinline
        loop
        url='https://assets.vantage.sh/docs/drilldown-subcategory.mp4'
        alt="The Drilldown icon is clicked and adds a filter and grouping item for Subcategory." 
        width="100%"
        height="100%"
    />
    </div>
</div>
<br/>

- You can also click the **Filter On** list to the right of the **Drilldown** icon and select a specific grouping/filtering option. In the below example, you select the **Region** option for the **EC2 > Data Transfer > EU-DataTransfer-Out-Bytes** line item. In the resulting report, **EC2 > Data Transfer > EU-DataTransfer-Out-Bytes** is broken down with individual line items per region.
  - The additional filter for the **EU-DataTransfer-Out-Bytes** is added to the **Filters** menu.
  - The report is now also grouped by **Region**.
  - **Region** is now a column in the table.
<br/>

<div style={{ display: "flex", justifyContent: "center" }}>
    <div style={{ 
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", 
        borderRadius: "10px", 
        width: "100%",
        overflow: "hidden" 
    }}>
    <ReactPlayer 
        playing 
        muted 
        playsinline
        loop
        url='https://assets.vantage.sh/docs/drilldown-region.mp4'
        alt="The Filter On menu is clicked and adds a filter and grouping item for Region." 
        width="100%"
        height="100%"
    />
    </div>
</div>

### Billing Code Descriptions

AWS practitioners who are having trouble understanding AWS billing codes present in Cost Reports can find descriptions of each billing code, other variations of that billing code, and other services that use the same billing code within Cost Reports. When you view any AWS Cost Report grouped by **Provider, Service, Category, and Subcategory**, you can hover over any subcategory line item and a tooltip with a link to [cur.vantage.sh](https://cur.vantage.sh/) is provided that takes you to a page with details for that billing line item. 

:::info
[cur.vantage.sh](https://cur.vantage.sh/) is a free utility that gives cloud practitioners simple definitions of billing codes for every AWS service. The site has a distinct page for each AWS service (e.g., S3 or EC2) that clusters together similar billing codes for that service, as there may be separate or distinct billing codes for each individual region.
:::

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A Cost Report grouped to show a subcategory link with the corresponding cur.vantage.sh page" width="90%" src="https://assets.vantage.sh/docs/cur-cost-report.png" />
</div>

## Adjust Chart Visualization

You can adjust the chart to be displayed as either a bar chart, line chart, area chart, or pie chart. To toggle these options, click one of the corresponding buttons on the top right of the chart.

:::tip
For the Cumulative date bin, you can view line charts, pie charts, and area charts. For Daily, Weekly, or Monthly bins, you can view bar charts, line charts, and area charts. Report groupings (see section below) are viewable on all chart types.
:::

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A square around the top right of the chart highlights where you can toggle different visualization options, like line charts and area charts" width="100%" src="https://assets.vantage.sh/docs/cost-report-visualizations.png" />
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
In contrast to AWS Cost Explorer, which displays fees associated with the account responsible for the commitment or purchase, Vantage provides a comprehensive view by showing fees based on the account where the benefits were realized.
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

### Usage-Based Reporting
Usage-Based Reporting provides infrastructure consumption in non-monetary metrics, such as virtual machine running hours, stored gigabytes of data, and read/write units consumed. These reports are available within Cost Reports, where you can toggle between viewing consumption by spend or by usage. See the [Usage-Based Reporting](/usage_based_reporting) documentation for details on how to use and view these reports.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Toggle to show Usage-Based Reporting" width="80%" src="https://assets.vantage.sh/docs/usage-toggle.png" />
</div>

## Comparative Cost Reporting {#comparative-cost-reporting}

To compare costs day by day, week by week, or month by month on Cost Reports, click the **By Date** option above the cost table. A view of costs with the same date binning selected for the graph is displayed. To switch back to the previous, current, and percent change view, select **Cumulative**.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Comparative View" width="80%" src="https://assets.vantage.sh/docs/by-date-view.png" />
</div>

When you view the **By Date** option, a **Total Costs** row is displayed at the top of the table. 

## Export Cost Reports {#exporting-cost-reports}

You can select from two modes when you export a report: **Basic** or **Advanced**.

  <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Cost Report Exports" width="40%" src="https://assets.vantage.sh/docs/cost-report-exports.png" />
</div>

- With a **Basic** export, you can modify only the date range of a report.
  - If your Cost Report has an associated [buisiness metric](/per_unit_costs), you can choose whether you want to export your unit costs at the same time as your costs export. This export will be sent to you as a separate CSV.
- With an **Advanced** export, you have the same functionality as a **Basic** export, but you can also arbitrarily select the columns you want on the report, a date range, and a date bin. The columns can be any combination of groupings from the following list:
  - Provider (e.g., AWS, GCP, New Relic)
  - Service (e.g., EC2, EBS)
  - Region (e.g., us-east-1)
  - Service category (e.g., Storage, Compute)
  - Service subcategory (e.g., m5.large, StandardTier)
  - Charge Type (e.g., Usage)
  - Account (e.g., AWS member account, GCP project)
  - Billing Account (e.g., billing account name)
  - Resource ID (e.g., S3 bucket ARN, MongoDB Atlas cluster name)
  - Usage (toggle to export [Usage-Based Reporting](/usage_based_reporting) data)
- The **Advanced** export also has the option to select a specific Tag key. The Tag key will be included as an additional column in the export, in the following format: `Tag:<TAG KEY>` (e.g., `Tag:Project`).
- For the **Schema** option, select either Vantage's default schema or the [FinOps Foundation FOCUS](https://focus.finops.org/) schema.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Cost Report Exports" width="40%" src="https://assets.vantage.sh/docs/cost-report-exports.png" />
</div>

1. From the top right of any Cost Report, click the download icon (looks like an arrow with a line below it).
2. Select the **Basic** or **Advanced** download option, and select your desired export criteria.
3. Select or enter the emails for the users who you want to receive an emailed copy of the report. Note that these recipients must be users in your organization.
4. Click **Export**.

:::note
For the **Date Bin** export option, when you select **Week**, the week in the export will begin on Monday, UTC. When you select **Month**, the month in the export will begin on the first of the month, UTC.
:::

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Cost Report Exports" width="60%" src="https://assets.vantage.sh/docs/custom-csv-export.png" />
</div>

When the export is finished generating, you’ll receive an email with a link to download the exported data, typically within a few minutes. An example export, with groupings of **Service Category** and **Service Subcategory**, is shown above. You can also export grouped Cost Reports and the groupings will be respected in the downloaded CSV.

## Starred by Me {#starred}

If you want to save your favorite Cost Reports or [folders](/folders) to a convenient location, you can _star_ specific resources.

1. From the [All Cost Reports](https://console.vantage.sh/reporting) screen, select the checkbox next to one or more Cost Reports.
2. Above the list, click **Star**. A star icon will be displayed next to the report.
3. To access all starred reports, navigate to the [**Starred By Me**](https://console.vantage.sh/reporting?starred=true) screen, also accessible from the left Cost Reporting navigation pane.
