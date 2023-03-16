# Cost Reports

Cost Reports give you the ability to see all accrued costs that match certain conditions. By default, Vantage provides you with a Cost Report named "All Resources" that will show you all costs across all AWS member accounts, regions, services and tags. You can create as many Cost Reports as you'd like to filter your costs by any of the aforementioned dimensions. As you create cost reports, they will show up in your [Overview](/overview/) and you'll have [forecasts](/forecasting/) generated automatically. For example, many customers typically setup one Cost Report per AWS tag that their team has defined to see costs for certain components of their application.

Below is an example of what a Cost Report will look like after you have connected your account.

![Example Cost Report](/img/cost_reports.png)

## Filtering Cost Reports

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Cost Report Folders" width="60%" src="/img/cost_filters.png" />
</div>

Cost Reports allow you to see your costs grouped by provider service in descending order of accrued costs. For example, by clicking AWS Service rows in the table above, the graph will update with just costs for that specific AWS Service. You may also click the AWS Service name link to see subcategory costs which is described in the next section. This works for most other providers like Azure, GCP, Datadog, Snowflake, and more.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Cost Report Folders" width="60%" src="/img/filter-options.png" />
</div>

There is a large set of filters available to you to help you see costs for the resources you care about. These options can vary per provider. In the image above, AWS costs can be filtered by Account, Category, Tag, Not Tagged, Subcategory, Resource, Region, Marketplace, and Service.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Cost Report Folders" width="60%" src="/img/resource-filter-options.png" />
</div>

In addition, each filter includes options for exact matching and fuzzy matching. In the image above, you can select "is", "is not", "contains", "does not contain", "starts with", and "ends with" on a Resource filter. This set of options can vary per filter selected.


## Saving Cost Reports

When you have selected which filters to apply to the report you can save your changes and name the report. Select "Save As New" to create a new Cost Report with your changes or "Save Changes" to modify the current report. When you change the date range, date bucket (such as "Last 30 Days"), or Grouping you may also save those changes permanently. The new date range, date bucket, and grouping will persist to the [Overview](/overview) page. When saving a report which only includes changes to Filter Sets, the Overview page will show costs for the last 6 months.

## AWS Service Category and Subcategory Costs

Each AWS Service typically has multiple underlying category and subcategory costs. For example, in the main cost report table view you'll see all of your S3 Costs in aggregate. However, S3 charges on a number of different subcategories like the amount of storage you've used, the amount of egress traffic for retrieving S3 Objects and for the actual HTTP requests you make to query for S3 Objects. By clicking an AWS service name from the main Cost Report table, you can see a full breakdown of all subcategory costs that comprise that main AWS service cost. Below is an example of subcategory costs for EC2-Other which includes subcategory costs for EBS Volumes, data transfer and more.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Example Subcategory Costs" width="60%" src="/img/category_costs.png" />
</div>

## Per Resource Costs

When supported in the list of [support services](/supported_services/), Vantage will also be able to show you each individual resource cost. For example, you can see not only the total cost of RDS instances in aggregate day by day but then if you click into "Costs by Resource" within a Cost Report, you can also see how much each individual resource costs. Below is an example of two RDS instances present in the account how much each one of them is driving in costs - this data can be seen without the need for you to do any additional tagging:

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Example of Per Resource Costs" width="60%" src="/img/per_resource_list.png" />
</div>

Additionally, you can click in to see the category and subcategory costs on a per-resource basis. So looking at the example above if you want to see a breakdown of costs for the RDS instance named "vantage-production-core-db" this is what that would look like:

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Example of a Single Resource Costs" width="60%" src="/img/per_resource_individual.png" />
</div>

## Percent Based Cost Allocation

It can be useful to showback shared resources like support costs or multi-tenant databases to the team or department utilizing them. As filters are set in a cost report, Vantage will query for costs that meet all of those conditions. In the event that a percentage is set by the customer on a Filter Set, that percentage will be applied to all of the matching costs and represented accordingly in the Cost Report.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Example of using Cost Allocation Percents" width="80%" src="/img/showback_cost_allocation.png" />
</div>

To use Percentage Based Allocation, you can do the following:

- Head to any Cost Report
- Click “Filters”
- Configure filters to see a subset of costs. For example, see the costs just for RDS.
- Click the new "Add Cost Allocation" option on that filter set and set a value of 1-100%.
- Save the report.

When percent based cost allocation is set as a filter, forecasts will be produced in aggregate for all the set conditions and the percentage allocation will be applied to that forecast.

## Folders

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Cost Report Folders" width="80%" src="/img/folders-nobg.png" />
</div>

Cost Report folders give you an easy way to organize Cost Reports. You can quickly create and name folders, move Cost Reports to these folders and nest folders within each other to create complex organizational structures. There is also a global search feature to quickly find either Cost Reports or folders. For a quick reference to your most important reports, you can “star” Cost Reports or folders. Navigate to the [reporting page](https://console.vantage.sh/reporting) in the console to make use of folders.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Cost Report Exports" width="60%" src="/img/move-folder-2.gif" />
</div>

Cost Report folders include several additional features for sharing and quickly viewing costs. By pressing the new "View in Overview" button in the top right of any folder, you can see all of its reports summarized on the Overview page. From that page you can also share a link with teammates. For example, you can organize all the costs associated with one team or business unit in one folder then share the link with that team so they can view all their costs in one place.

## Exporting Cost Reports

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Cost Report Exports" width="40%" src="/img/cost-report-exports.png" />
</div>

The “Export Data” on each Cost Report will trigger a modal to allow you to arbitrarily choose which format they would like to group data by, a date range and a date bin. Customers will be able to choose any combination of groupings from the following list: Provider, Service, Category, Sub Category, Account and Resource. 

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Cost Report Exports" width="60%" src="/img/custom-csv-export.png" />
</div>

When the Export is finished generating, you’ll receive an email with a link to download the exported data, typically within a few minutes. An export with groupings of "Service category" and "Service subcategory" would look like the image above in a spreadsheet tool. 
