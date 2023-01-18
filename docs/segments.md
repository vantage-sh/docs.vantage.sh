# Segments

![Example Cost Report](/img/segments-overview.gif)

Segments allow you to create hierarchies of costs which map to teams, departments, apps, or services within your organization. Segments ensure that costs are only allocated once (not duplicated) and do not require any prior robust tagging for cloud resources.

Under [Cost Reporting](https://console.vantage.sh/reporting), there is a [Segments](https://console.vantage.sh/reporting) section that will show a list of all defined top-level Segments. When creating organization hierarchies within a segment you can optionally apply a set of filters.

After doing this a Cost Report will automatically be created within this Segment containing the allocated costs for the set of assigned filters. You can nest segments within one another and the costs associated with nested filters will be bubbled up to any parent segments.

## What is a Segment?

![Example Cost Filters](/img/view-segments.png)

Segments can be found by navigating to "Cost Reporting” and then “Segments”. If you have Segments present in your account, you can see a full list of top-level Segments sorted alphabetically.

Within the Segment, for example "OPEX", you can click on the "OPEX" report to pull up a Cost Report which shows costs only associated with that Segment. In that Cost Report you can select "Group By: Segment" to view costs broken out by the child segments within that Segment. For example, you could view costs grouped by "Customers", "OPS", and "Production" within the "OPEX" segment.

### The Unallocated Segment

Unallocated costs are costs which are captured by the filters that belong to a Segment but are not allocated to any child Segments. For example, if you have a Segment "OPEX" with a filter for the "AWS" provider and a child Segment "OPS" with a filter for "Elastic Compute Service", any costs that are associated with the "AWS" filter but not the "Elastic Compute Service" filter will be allocated to the "Unallocated" segment.

## Creating Segments

![Example Cost Filters](/img/create-segment.png)

Within "Segments" in the "Cost Reporting" tab you can click "New Segment" to add a Segment. A segment is a namespace of costs. It is comprised of the following attributes:

- Segment Name (Required, unique string)
- Segment Description (Not Required, string)
- Filters (Optional, Set of filters which allocate costs to the segment)
- Allocation Priority (Optional, Required if a Filters are specified, Costs are allocated in order of priority - 0 is the highest.)

### Priority

The Priority option dictates the order of the cost allocation priority with 0 being the highest priority. Once a cost is allocated to a segment it will not appear in a segment with a higher priority number.

## Segments in Overview

A Segment widget will be available for each top-level segment and will appear in the [Overview](/overview/) screen. The widget will show a table of second level Segments and a comparison of costs for this month vs last. You can click each of these segment to be taken to the corresponding Cost Report.

## Cost Reports and Segments

When you click into a [Cost Report](/cost_reports/), you’ll be able to “Group By” Segment. If you group by Segment and click into costs for that Segment you will be taken to the corresponding Cost Report for that Segment. The rest of the Cost Report experience is the same. You will be able to view Cost by Service, Category and Resource.

If you would like to transition existing Cost Report filters to Segments you must manually recreate them. If you would like assistance from our customer success team, please reach out to us at [support@vantage.sh](mailto:support@vantage.sh).
