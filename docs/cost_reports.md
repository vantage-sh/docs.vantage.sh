
Cost Reports give you the ability to see all accrued costs that match certain conditions. By default, Vantage provides you with a Cost Report named "All Resources" that will show you all costs across all AWS member accounts, regions, services and tags. You can create as many Cost Reports as you'd like to filter your costs by any of the aforementioned dimensions. Many customers typically setup one Cost Report per AWS tag that their team has defined to see costs for certain components of their application.

Below is an example of what a Cost Report will look like after you have connected your account.

![Example Cost Report](/img/cost_reports.png)

## Filtering Cost Reports

Cost Reports allow you to see your costs grouped by AWS Service in descending order of accrued costs. By clicking AWS Service rows in the table below, the graph will update with just costs for that specific AWS Service. You may also click the AWS Service name link to see subcategory costs which is described in the next section. 

## AWS Service Subcategory Costs

Each AWS Service typically has multiple underlying subcategory costs. For example, in the main cost report table view you'll see all of your S3 Costs in aggregate. However, S3 charges on a number of different subcategories like the amount of storage you've used, the amount of egress traffic for retrieving S3 Objects and for the actual HTTP requests you make to query for S3 Objects. By clicking an AWS service name from the main Cost Report table, you can see a full breakdown of all subcategory costs that comprise that main AWS service cost. Below is an example of subcategory costs for EC2-Other which includes subcategory costs for EBS Volumes, data transfer and more. 

![Example Subcategory Costs](/img/subcategory_costs.png)

When supported and resources are present, Vantage will also show you the Active Resources contributing to these subcategory costs. 