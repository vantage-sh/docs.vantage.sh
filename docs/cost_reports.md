# Cost Reports

Cost Reports give you the ability to see all accrued costs that match certain conditions. By default, Vantage provides you with a Cost Report named "All Resources" that will show you all costs across all your cloud service accounts, regions, services, resources and tags. You can create as many Cost Reports as you'd like to filter your costs by any of the aforementioned dimensions. As you create cost reports, they will show up in your [Overview](/overview/) and you'll have [forecasts](/forecasting/) generated automatically. For example, many customers typically setup one Cost Report per tag that their team has defined to see costs for certain components of their application.

Below is an example of what a Cost Report will look like after you have connected your account.

![Example Cost Report](/img/cost-report-connected.png)

## Filtering Cost Reports {#filtering-cost-reports}

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Filtering Cost Reports" width="60%" src="/img/cost_filters.png" />
</div>

Cost Reports allow you to see your costs grouped by provider service in descending order of accrued costs. For example, by clicking AWS Service rows in the table above, the graph will update with just costs for that specific service. You may also click the service name link to see subcategory costs which is described below. This works for most other providers like Azure, GCP, Datadog, Snowflake, and more.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Cost Report Folders" width="60%" src="/img/filter-options.png" />
</div>

There is a large set of filters available to you to help you see costs for the resources you care about. These options can vary per provider. In the image above, AWS costs can be filtered by Account, Category, Tag, Not Tagged, Subcategory, Resource, Region, Marketplace, and Service.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Cost Report Folders" width="60%" src="/img/resource-filter-options.png" />
</div>

In addition, each filter includes options for exact matching and fuzzy matching. In the image above, you can select "is", "is not", "contains", "does not contain", "starts with", and "ends with" on a Resource filter. This set of options can vary per filter selected.

## Saved Filters

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Saved Filters" width="60%" src="/img/saved-filter-2.gif" />
</div>

Saved Filters give you the ability to save and reuse filter logic across multiple Cost Reports. A Saved Filter will have any filter logic you would like along with a name for that filter. Once created, the filter can be added to any number of reports.

Head to the [Saved Filters](https://console.vantage.sh/saved_filters) page in Cost Reporting to create or update your filters. You must have editor permissions to update Saved Filters and add them to Cost Reports.

When combining multiple Saved Filters on Cost Reports, "AND" logic will be used. This is in contrast to combining multiple normal filters where "OR" logic is used.

## Saving Cost Reports {#saving-cost-reports}

When you have selected which filters to apply to the report you can save your changes and name the report. Select "Save As New" to create a new Cost Report with your changes or "Save Changes" to modify the current report. When you change the date range, date bucket (such as "Last 30 Days"), or Grouping you may also save those changes permanently. The new date range, date bucket, and grouping will persist to the [Overview](/overview) page. When saving a report which only includes changes to Filter Sets, the Overview page will show costs for the last 6 months.

## Category and Subcategory Costs

Each Service typically has multiple underlying category and subcategory costs. For example, if you have AWS connected you will see all of your S3 costs in aggregate in the "All Resources" report table. However, S3 charges on a number of different subcategories like the amount of storage you've used, the amount of egress traffic for retrieving S3 Objects and for the actual HTTP requests you make to query for S3 Objects. By clicking an AWS service name from the main Cost Report table, you can see a full breakdown of all subcategory costs that comprise that main AWS service cost. Below is an example of subcategory costs for EC2-Other which includes subcategory costs for EBS Volumes, data transfer and more.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Example AWS Subcategory Costs" width="80%" src="/img/category_costs.png" />
</div>

Azure and GCP also support category and subcategory costs on cost reports. In the filters below, we are selecting specific Azure VMs as part of filtering on the Virtual Machines service. In GCP, the labels you apply to resources will show up in as subcategories.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Example Azure Subcategory Costs" width="80%" src="/img/azure-subcategory.png" />
</div>

## Per Resource Costs

When supported in the list of [support services](/supported_services/), Vantage will also be able to show you each individual resource cost. For example, you can see not only the total cost of RDS instances in aggregate day by day but then if you click into "Costs by Resource" within a Cost Report, you can also see how much each individual resource costs. Below is an example of two RDS instances present in the account how much each one of them is driving in costs - this data can be seen without the need for you to do any additional tagging:

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Example of Per Resource Costs" width="80%" src="/img/per_resource_list.png" />
</div>

Additionally, you can click in to see the category and subcategory costs on a per-resource basis. So looking at the example above if you want to see a breakdown of costs for the RDS instance named "vantage-production-core-db" this is what that would look like:

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Example of a Single Resource Costs" width="80%" src="/img/per_resource_individual.png" />
</div>

## Percent Based Cost Allocation {#percent-based-cost-allocation}

It can be useful to show back shared resources like support costs or multi-tenant databases to the team or department utilizing them. As filters are set in a cost report, Vantage will query for costs that meet all of those conditions. In the event that a percentage is set by the customer on a Filter Set, that percentage will be applied to all of the matching costs and represented accordingly in the Cost Report.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Example of using Cost Allocation Percents" width="80%" src="/img/showback_cost_allocation.png" />
</div>

To use Percentage Based Allocation, you can do the following:

- Head to any Cost Report
- Click "Filters"
- Configure filters to see a subset of costs. For example, see the costs just for RDS.
- Click the new "Add Cost Allocation" option on that filter set and set a value of 1-100%.
- Save the report.

When percent based cost allocation is set as a filter, forecasts will be produced in aggregate for all the set conditions and the percentage allocation will be applied to that forecast.

## Amortization

By default, all Cost Reports show upfront fees, such as fees for Reserved
Instances, Savings Plans, Marketplace purchases, and Support, amortized
day by day for the period of the fee.

In addition, Vantage uses committed use attribution for linked accounts. By default, you will see fees for Reserved Instances and Savings Plans assigned to the AWS account that *benefited* from the discount — not the account that purchased the commitment. 

For more information about this logic, see <a href="https://www.vantage.sh/blog/vantage-launches-committed-use-float-cost-attribution" target="_blank">the following Vantage blog post</a>. 

:::note
In contrast to AWS Cost Explorer, which displays fees associated with the account responsible for the commitment or purchase, Vantage provides a comprehensive view by showing fees based on the account where the benefits were actually realized.
:::

### Disabling Amortization

You can choose to toggle a Cost Report to not amortize upfront fees if you
want to view the upfront fees on the day they were incurred.

1. From the top of any Cost Report, click **Settings**.
2. Under **Amortization**, uncheck **Enabled**.

## Multi-Dimensional Grouping

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Multi-dimensional Grouping" width="80%" src="/img/cost-report-grouping.png" />
</div>

The “Grouping” component on cost reports has been updated to allow for multi-selection format, allowing you to choose one or more dimensions to group by. Once selected, both the Cost Report table and graph will display the costs aggregated by the selected groupings. Once the report is saved the report’s corresponding overview widget will be updated as well.

You can group by the following dimensions:

- Account (i.e. member account on AWS, project on GCP, etc.)
- Service (i.e. AWS S3, Azure VMs, etc.)
- Provider (i.e. AWS, GCP, Azure)
- Region
- Resource
- Tag Key (only one)

After a Cost Report has been grouped, each grouping will have its own column in the table below the graph. On the graph itself, the label will be displayed with dashes between the groupings, such as `grouping 1 - grouping 2 - 2023/06/01: $500`.

To sort the table by multiple columns, Shift + Click on the column headers. You can also export grouped Cost Reports and the groupings will be respected in the downloaded CSV.

**Limitations.** Costs by category and resource and forecasts are not currently supported when grouping by multiple dimensions. As costs can be duplicated across multiple tag keys, grouping by multiple tag keys is not supported.

## Folders {#cost-report-folders}

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Cost Report Folders" width="80%" src="/img/folders-nobg.png" />
</div>

Cost Report folders give you an easy way to organize Cost Reports. You can quickly create and name folders, move Cost Reports to these folders and nest folders within each other to create complex organizational structures. There is also a global search feature to quickly find either Cost Reports or folders. For a quick reference to your most important reports, you can "star" Cost Reports or folders. Navigate to the [reporting page](https://console.vantage.sh/reporting) in the console to make use of folders.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Cost Report Exports" width="60%" src="/img/move-folder-2.gif" />
</div>

Cost Report folders include several additional features for sharing and quickly viewing costs. By pressing the new "View in Overview" button in the top right of any folder, you can see all of its reports summarized on the Overview page. From that page you can also share a link with teammates. For example, you can organize all the costs associated with one team or business unit in one folder then share the link with that team so they can view all their costs in one place.

## Exporting Cost Reports {#exporting-cost-reports}

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Cost Report Exports" width="40%" src="/img/cost-report-exports.png" />
</div>

After clicking the "..." button, select "Export Data" to trigger a modal. There are two modes of exporting a report: Basic and Advanced. A Basic Export only allows you to modify the date range of a report. An Advanced Export allows you to arbitrarily choose the columns, a date range, and a date bin. The columns can be any combination of groupings from the following list:

- Provider (AWS, GCP, New Relic, etc)
- Service (EC2, EBS, etc)
- Service category (Storage, Compute, etc..)
- Service subcategory (m5.large, StandardTier, etc..)
- Account (AWS member account, GCP project, etc)
- Resource (S3 Bucket ARN, EC2 Instance ID, MongoDB Atlas Cluster name, etc..)

Regarding Date Bins, when you select Week the week in the export will begin on Monday UTC. When you select Month the month in the export will begin on the first of the month UTC.

You can add other recipients to receive the report download link when it is ready. These recipients must be users in your organization.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Cost Report Exports" width="60%" src="/img/custom-csv-export.png" />
</div>

When the Export is finished generating, you’ll receive an email with a link to download the exported data, typically within a few minutes. An example export in a spreadsheet tool with groupings of "Service category" and "Service subcategory" is shown above.

## Comparative Cost Reporting

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Comparative View" width="80%" src="/img/by-date-view.png" />
</div>

To compare costs day by day, week by week, or month by month on Cost Reports you can toggle the "By Date" selector above the cost table. This will show a view of costs at the same date binning as selected for the graphical display of costs on the Cost Report. To switch back to the previous, current, and percent change view, select "Cumulative".

## Dashboards {#dashboards}

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Dashboards" width="80%" src="/img/dashboards.png" />
</div>

Users can now create [dashboards](https://console.vantage.sh/dashboards) and apply date range and period filters to all reports present on them. The period can be Cumulative, Monthly, Weekly or Daily. You can add cost reports and cost allocation reports to dashboards by clicking "Edit". Reports are displayed on the dashboard in alphabetical order. At this time you cannot add widgets from the overview page such as Provider Summary.

You can star dashboards so that they appear in "Starred by me". Dashboards will also show up in "Recently Viewed". You can save dashboards or save new dashboards with the "Save" button in the top right. If you are viewing all the reports in a folder as a dashboard, you can save this dashboard by choosing "Save as New".
