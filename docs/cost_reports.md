# Cost Reports

Cost Reports give you the ability to see all accrued costs that match certain conditions. By default, Vantage provides you with a Cost Report named "All Resources" that will show you all costs across all AWS member accounts, regions, services and tags. You can create as many Cost Reports as you'd like to filter your costs by any of the aforementioned dimensions. As you create cost reports, they will show up in your [Overview](/overview/) and you'll have [forecasts](/forecasting/) generated automatically. For example, many customers typically setup one Cost Report per AWS tag that their team has defined to see costs for certain components of their application.

Below is an example of what a Cost Report will look like after you have connected your account.

![Example Cost Report](/img/cost_reports.png)

## Filtering Cost Reports

![Example Cost Filters](/img/cost_filters.png)

Cost Reports allow you to see your costs grouped by AWS Service in descending order of accrued costs. By clicking AWS Service rows in the table below, the graph will update with just costs for that specific AWS Service. You may also click the AWS Service name link to see subcategory costs which is described in the next section.

## AWS Service Category and Subcategory Costs

Each AWS Service typically has multiple underlying category and subcategory costs. For example, in the main cost report table view you'll see all of your S3 Costs in aggregate. However, S3 charges on a number of different subcategories like the amount of storage you've used, the amount of egress traffic for retrieving S3 Objects and for the actual HTTP requests you make to query for S3 Objects. By clicking an AWS service name from the main Cost Report table, you can see a full breakdown of all subcategory costs that comprise that main AWS service cost. Below is an example of subcategory costs for EC2-Other which includes subcategory costs for EBS Volumes, data transfer and more.

![Example Subcategory Costs](/img/category_costs.png)

## Per Resource Costs

When supported in the list of [support services](/supported_services/), Vantage will also be able to show you each individual resource cost. For example, you can see not only the total cost of RDS instances in aggregate day by day but then if you click into "Costs by Resource" within a Cost Report, you can also see how much each individual resource costs. Below is an example of two RDS instances present in the account how much each one of them is driving in costs - this data can be seen without the need for you to do any additional tagging:

![Example of Per Resource Costs](/img/per_resource_list.png)

Additionally, you can click in to see the category and subcategory costs on a per-resource basis. So looking at the example above if you want to see a breakdown of costs for the RDS instance named "vantage-production-core-db" this is what that would look like:

![Example of a Single Resource Costs](/img/per_resource_individual.png)

## Percent Based Cost Allocation

It can be useful to showback shared resources like support costs or multi-tenant databases to the team or department utilizing them. As filters are set in a cost report, Vantage will query for costs that meet all of those conditions. In the event that a percentage is set by the customer on a Filter Set, that percentage will be applied to all of the matching costs and represented accordingly in the Cost Report.

![Example of using Cost Allocation Percents](/img/showback_cost_allocation.png)

To use Percentage Based Allocation, you can do the following:

- Head to any Cost Report
- Click “Filters”
- Configure filters to see a subset of costs. For example, see the costs just for RDS.
- Click the new "Add Cost Allocation" option on that filter set and set a value of 1-100%.
- Save the report.

When percent based cost allocation is set as a filter, forecasts will be produced in aggregate for all the set conditions and the percentage allocation will be applied to that forecast.

## Cost Report Folders

![Cost Report folders](/img/folders-nobg.png)

Cost Report folders give you an easy way to organize Cost Reports. You can quickly create and name folders, move Cost Reports to these folders and nest folders within each other to create complex organizational structures. There is also a global search feature to quickly find either Cost Reports or folders. For a quick reference to your most important reports, you can “star” Cost Reports or folders. Navigate to the [reporting page](https://console.vantage.sh/reporting) in the console to make use of folders.

![Move Cost Reports](/img/move-folder-2.gif)

Cost Report folders include several additional features for sharing and quickly viewing costs. By pressing the new "View in Overview" button in the top right of any folder, you can see all of its reports summarized on the Overview page. From that page you can also share a link with teammates. For example, you can organize all the costs associated with one team or business unit in one folder then share the link with that team so they can view all their costs in one place.
