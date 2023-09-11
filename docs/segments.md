# Segments

![Example Cost Report](/img/segments-overview.gif)

Segments allow you to perform cost allocation and enforce cost governance for your organization. You have the optional ability to create nested hierarchies of costs which can map to teams, departments, apps, or services within your organization. Additionally, Segments ensure that costs are only allocated once and not duplicated in cases of showback/chargeback scenarios.

In the Vantage console, under [Cost Reporting](https://console.vantage.sh/reporting), there is a [Segments](https://console.vantage.sh/reporting) section that will show a list of all defined top-level Segments. When creating organization hierarchies within a Segment you can optionally apply a set of filters.

After defining your segments, a cost report will automatically be created representing this Segment containing the allocated costs for the set of assigned filters. You can nest segments within one another and the costs associated with nested filters will be bubbled up to any parent segments.

## What is a Segment?

![Example Cost Filters](/img/view-segments.png)

As a very basic explanation, a segment is a set of filters that represents a portion of costs for your organization. You can think of segments as being a pivot table for all of your costs. For example, if you wanted to use Segments to break costs into Opex vs R&D, you can segment your costs accordingly with filter logic to make this happen. Another use-case is if you wanted to have hierarchical drill-downs of costs for allocation purposes you can created nested Segments for representing organizational costs accordingly. 

Segments can be found by navigating to "Cost Reporting" and then "Segments". If you have Segments present in your account, you can see a full list of top-level Segments sorted alphabetically.

Within the Segment, for example "OPEX", you can click on the "OPEX" report to pull up a Cost Report which shows costs only associated with that Segment. In that Cost Report you can select "Group By: Segment" to view costs broken out by the child segments within that Segment. For example, you could view costs grouped by "Customers", "OPS", and "Production" within the "OPEX" segment.

### The Unallocated Segment

Unallocated costs are costs which are captured by the filters that belong to a Segment but are not allocated to any child Segments. For example, if you have two Segments defined for "Opex" and "R&D", any costs that do not match the logic of these filters will fall into an "Unallocated" Segment that's provided to you. 

## Creating Segments

![Example Cost Filters](/img/create-segment.png)

Within "Segments" in the "Cost Reporting" tab you can click "New Segment" to add a Segment. A segment is a namespace of costs. It is comprised of the following attributes:

- Segment Name (Required, unique string)
- Segment Description (Not Required, string)
- Filters (Optional, Set of filters which allocate costs to the segment)
- Allocation Priority (Optional, Required if a Filters are specified, Costs are allocated in order of priority - 0 is the highest.)

### Priority

The Priority option dictates the order of the cost allocation priority with 0 being the highest priority. Once a cost is allocated to a segment it will not appear in a segment with a higher priority number. In practice, you likely will not need to worry about priority unless you organization has deep scrutiny on cost allocation collision that may be occurring. 

## Segments in Overview

A Segment widget will be available for each top-level segment and will appear in the [Overview](/overview/) screen. The widget will show a table of second level Segments and a comparison of costs for this month vs last. You can click each of these segment to be taken to the corresponding Cost Report.

## Cost Reports and Segments

When you click into a [Cost Report](/cost_reports/), you’ll be able to "Group By" Segment. If you group by Segment and click into costs for that Segment you will be taken to the corresponding Cost Report for that Segment. The rest of the Cost Report experience is the same. You will be able to view Cost by Service, Category and Resource.

If you would like to transition existing Cost Report filters to Segments you must manually recreate them. If you would like assistance from our customer success team, please reach out to us at [support@vantage.sh](mailto:support@vantage.sh).
