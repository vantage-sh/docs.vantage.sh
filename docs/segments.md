---
id: segments
title: Segments
description: Create Segments to perform cost allocation and enforce cost governance for your organization.
keywords:
  - Segments
---

# Segments

:::note
To enable the Segments feature in your account, please contact Support at [support@vantage.sh](mailto:support@vantage.sh).
:::

A Segment is a set of filters that represents a portion of costs for your organization. You can think of Segments like a pivot table for all your costs—or, in other words, a namespace of costs. With Segments, you can perform cost allocation and enforce cost governance for your organization. Optionally, you can create nested hierarchies of costs that can map to teams, departments, apps, or services within your organization. Segments ensure that costs are allocated only once and not duplicated in cases of showback/chargeback scenarios.

## Segments Use Cases

You can leverage Segments for a number of use cases, including the below examples.

- **Map costs to business units.** You can use nested hierarchies for cost allocation. For example, you can see costs grouped by an “Infrastructure Engineering” team, then drill down into all the various sub-teams, like "Infrastructure Engineering Team 1” and “Infrastructure Engineering Team 2." The costs for Team 1 and Team 2 together comprise the total cost allocation line-item for Infrastructure Engineering.
- **Maintain tag governance.** You can create a Segment for a particular tag key you want to enforce across your organization. Whenever there are costs in the “Unallocated” portion of the report, you can go and identify resources to assign to the proper team or service. Unallocated costs are costs that are captured by a Segment's filters but are not allocated to any child Segments. For example, if you have two Segments defined for **OPEX** and **R&D**, any costs that do not match the logic associated with either of these filters will fall into an _Unallocated Segment_. The Unallocated Segment report is automatically displayed at the root- or parent-Segment level.

## Create a Segment

Follow the steps below to create a Segment.

1. From the top navigation, click **Cost Reporting**.
2. On the left navigation, select **Segments**. If you have Segments present in your account, a full list of top-level Segments is displayed in the view on the right, sorted alphabetically.
3. To create a new Segment, click **New Segment**.
4. Set the following parameters for the new Segment:
   - For **Name**, enter a unique string (e.g., _OPEX_). This field is required.
   - For **Description**, optionally enter a text description for the Segment.
   - If you want to optionally track unallocated costs, click the toggle next to **Track unallocated**. _This option is displayed only for the root or parent Segment._
   - For **Priority**, enter a numeric value (e.g., _100_). Costs are allocated in order of priority, with 0 as the highest priority. This field is required if filters are specified (as described in the next step). If you do not specify filters, this field is optional.
     :::note
     Once a cost is allocated to a Segment, it will not appear in a Segment with a higher priority; however, you likely will not need to worry about priority unless your organization has deep scrutiny on cost allocation collision.
     :::
5. Filters allocate costs to the Segment and are optional. To create a filter, click **+ Add a Filter** and configure the following values:
   - Select a **Provider**.
   - Click **New Rule** to add additional logic, such as **Region** or **Category** filters. Segment filters are like filters in Cost Reports. See [Filter Cost Reports](/cost_reports#filtering-cost-reports) for a more detailed explanation of filters. Note that you cannot use _saved filters_ from Cost Reports in Segments.
    <details><summary>Click to view example image</summary>
   <p>This example shows a root- or parent-level Segment called "Management." Child Segment parameters will be the same—except for the <strong>Track unallocated</strong> option, which is not displayed for child Segments.</p>
   <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Create Cost Filters for Segment" width="80%" src="/img/create-segment.png" />
    </div>
   </details>
6. At the bottom, click **Save**. You will see a message indicating **"A Segment Report will appear here when the segment is finished refreshing"** while the report for the Segment is generated. Depending on the filter's complexity, it can take some time for the Segment report to generate (up to 24 hours).

### Edit a Segment

:::note
If you make additional changes to a filter or Segment metadata, like title, it can take up to 24 hours to see those changes reflected in the console.
:::
You can edit a Segment's title, description, priority, and filters within the console. To edit these criteria, click the pencil icon next to the Segment name. Then, update and save the new criteria.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Multi-dimensional Grouping" width="90%" src="/img/edit-segment.png" />
</div>

### View and Create Child Segments

You can create child Segments and nest Segments within one another. Costs associated with nested Segments/filters will be rolled up to any parent Segments. To add a child Segment to a parent Segment, navigate to the parent Segment, and click **+ New Segment**. The image below shows an example of a group of nested Segments.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Multi-dimensional Grouping" width="80%" src="/img/view-segments.png" />
</div>

- In the above example, **Vantage** is the top-level Segment (as displayed in the breadcrumbs at the top of the screen).
- The **Vantage** Segment Cost Report is displayed at the bottom of the list.
- In this example, we selected the option to show **Unallocated costs** when creating this parent Segment. The corresponding **Unallocated** Segment Cost Report is displayed in the list. 
- The **Vantage** parent Segment has two child Segments: **OPEX** and **R&D**.

Select a child Segment. You will see additional third-level child Segments as well as the associated child Segment Cost Report. In the below image, the **R&D** child Segment Cost Report is displayed. R&D contains no additional child Segments; however you can add them if you want. Observe the breadcrumbs at the top, which also indicate **R&D** is a child Segment of **Vantage**. 

<div style={{display:"flex", justifyContent:"center"}}>
<img alt="Create Cost Filters for Segment" width="80%" src="/img/child-segment.png" />
</div>

## View Segment Reports

Select a Segment report to view the associated costs. On the report, costs are displayed for all associated child Segments.

- The report is filtered to **Group By: Segment** to show costs broken out by the child Segments within that Segment. In the below visual example, costs are grouped by **Customers**, **OPS**, and **Production** within the **OPEX** Segment. This is because **Customers**, **OPS**, and **Production** are all third-level child Segments for **OPEX**. 
- Change the filter to view the data by another grouping, such as **Account**.
- From the resource list at the bottom, click the icons next to each resource to isolate costs displayed within the chart. 
- At the top right of the chart, you can change the date range and date bin (e.g., daily, weekly, monthly).

<div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
    <div style={{ position: "relative", zIndex: 1 }}>
        <img
            alt="View Segment Reports"
            style={{ width: "100%", clipPath: "inset(0 10px 15px 0)" }}
            src="/img/segment-cost-report.gif"
        />
    </div>
    <div
        style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            zIndex: 0,
        }}
    />
</div>
<br />

:::note
If you would like to transition existing Cost Report filters to Segments, you must manually re-create them. For assistance, contact Support at [support@vantage.sh](mailto:support@vantage.sh).
:::

## Segments in Overview

A Segment widget is displayed for each top-level Segment on the [Overview](/overview/) screen. This Segments widget shows a table of second-level Segments and a comparison of costs for this month vs. last. You can select any of these Segments to view the corresponding Cost Report.

