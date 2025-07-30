---
id: segments
title: Segments
description: Create Segments to perform cost allocation and enforce cost governance for your organization.
keywords:
  - Segments
---

# Segments

:::note
To enable segments in your account, contact Vantage Support at [support@vantage.sh](mailto:support@vantage.sh).
:::

A segment is a set of filters that represents a portion of costs for your organization (e.g., costs allocated to a business unit or team). With segments, you can perform cost allocation and enforce cost governance for your organization. You can create nested hierarchies of costs that can map to teams, departments, apps, or services within your organization. Segments ensure that costs are allocated only once and not duplicated in cases of showback/chargeback scenarios. 

The below diagram shows an example of a segment hierarchy. All child and grandchild segment costs roll up to the top-level organization segment. Any costs not assigned to a segment are considered _unallocated costs_. By analyzing your segments, you can identify and burn down these unallocated costs to improve financial accountability and resource management.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Tree diagram of segments with an Organization at the top, three child business unit segments, and two grandchild segments per child segment that represent teams. Each child and grandchild segment has an arrow that points up to the organization segment at the top." width="80%" src="https://assets.vantage.sh/docs/segment-tree.png" />
</div>

:::tip
To get started with cost allocation segments, you can also view a video demo on [Vantage University](/vantage_university_cost_allocation) 🎓.
:::

## Segments Use Cases

You can leverage segments for many use cases, including the below examples.

- **Map costs to business units.** You can use nested hierarchies for cost allocation. For example, you can see costs grouped by an “Infrastructure Engineering” team, then drill down into all the various sub-teams, like "Infrastructure Engineering Team 1” and “Infrastructure Engineering Team 2." The costs for Team 1 and Team 2 together comprise the total cost allocation line item for Infrastructure Engineering.
- **Maintain tag governance.** You can create a segment for a particular tag key you want to enforce across your organization. Whenever there are costs in the “Unallocated” portion of the report, you can go and identify resources to assign to the proper team or service. Unallocated costs are costs that are captured by a segment's filters but are not allocated to any child segments. For example, if you have two segments defined for **OPEX** and **R&D**, any costs that do not match the logic associated with either of these filters will fall into the unallocated segment. The unallocated segment report is automatically displayed at the root or parent segment level.

## Create a Segment

Follow the steps below to create a segment.

1. From the top navigation, click **Cost Reporting**.
2. On the left navigation, select **Segments**. If you have segments present in your account, a full list of top-level segments is displayed in the view on the right, sorted alphabetically.
3. To create a new segment, click **New Segment**.
4. Set the following parameters for the new segment:
   - For **Name**, enter a unique string (e.g., _OPEX_). This field is required.
   - For **Description**, optionally enter a text description for the segment.
   - For options, you can select whether you want to include or exclude credits, refunds, discounts, taxes, and amortization. You can also optionally track unallocated costs.
     :::note
     These options are displayed only for the root or parent segment, and the selections you make will apply to child segments. Track unallocated applies only to the parent segment.
     :::
   - For **Priority**, enter a numeric value (e.g., _100_). Costs are allocated in order of priority, with 0 as the highest priority. This field is required if filters are specified (as described in the next step). If you do not specify filters, this field is optional.
     :::note
     Once a cost is allocated to a segment, it will not appear in a segment with a higher priority; however, you likely will not need to worry about priority unless your organization has deep scrutiny on cost allocation collision.
     :::
5. Filters allocate costs to the segment and are optional. To create a filter, click **+ Add a Filter** and configure the following values:
   - Select a **Provider**.
   - Click **New Rule** to add additional logic, such as **Region** or **Category** filters. Segment filters are like filters in Cost Reports. See [Filter Cost Reports](/cost_reports#filtering-cost-reports) for a more detailed explanation of filters. Note that you cannot use _saved filters_ from Cost Reports in segments.
    <details><summary>Click to view example image</summary>
   <p>This example shows a root- or parent-level segment called "Management." Child segment parameters will be the same—except for the <strong>Track unallocated</strong> option, which is not displayed for child segments.</p>
   <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="The segment creation screen with all cost filters displayed for the segment." width="80%" src="https://assets.vantage.sh/docs/create-segment.png" />
    </div>
   </details>
6. At the bottom, click **Save**. You will see a message indicating **"A Segment Report will appear here when the segment is finished refreshing"** while the report for the segment is generated. Depending on the filter's complexity, it can take some time for the segment report to generate (up to 24 hours).

### Edit a Segment

:::note
If you make additional changes to a filter or segment metadata, like title, it can take up to 24 hours after you regenerate the segment to see those changes reflected in the console. 
:::

You can edit a segment's title, description, priority, and filters within the console. On parent-level segments, you can also edit the settings, such as discounts and taxes. 

1. To edit these criteria, click the pencil icon next to the segment name. 
<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="The Segments screen with a list of segments. A box is displayed around the pencil icon where you can edit the segment's settings." width="100%" src="https://assets.vantage.sh/docs/edit-segment.png" />
</div>
2. Update and save the new criteria. 
3. On the main **Segments** screen, the segment's **Status** column indicates if a segment needs to be regenerated. Click **Refresh Segment**. 
<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="The Segments screen is displayed with a list of segments. The Status of the first segment is displayed with the Refresh Segment icon." width="100%" src="https://assets.vantage.sh/docs/refresh-segment.png" />
</div>
4. The **Status** will be displayed as **Refreshing** while the segment is being updated. This process may take up to 24 hours.
<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="The Segments screen is displayed with a list of segments. The Status of the first segment is displayed with the Refreshing... icon." width="100%" src="https://assets.vantage.sh/docs/refreshing-segment.png" />
</div>

### View and Create Child Segments

You can create child segments and nest segments within one another. Costs associated with nested segments/filters will be rolled up to any parent segments. To add a child segment to a parent segment, navigate to the parent segment, and click **New Segment Dimension**. The image below shows an example of a group of nested segments.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A list of child segments is displayed. The status indicates they are in sync. It is a list of nested segments called OPEX and R&D. The Unallocated segment is also listed." width="100%" src="https://assets.vantage.sh/docs/view-segments.png" />
</div>

- In the above example, **Vantage** is the top-level segment (as displayed in the breadcrumbs at the top of the screen).
- The **Vantage** segment report is displayed at the bottom of the list.
- In this example, we selected the option to show **Unallocated costs** when creating this parent segment. The corresponding **Unallocated** segment report is displayed in the list.
- The **Vantage** parent segment has two child segments: **OPEX** and **R&D**.

Select a child segment. You will see additional third-level child segments as well as the associated child segment report. In the below image, the **R&D** child segment report is displayed. R&D contains no additional child segments; however, you can add them if you want. Observe the breadcrumbs at the top, which also indicate **R&D** is a child segment of **Vantage**.

<div style={{display:"flex", justifyContent:"center"}}>
<img alt="Create Cost Filters for segment" width="100%" src="https://assets.vantage.sh/docs/child-segment.png" />
</div>

## View Segment Reports

Select a segment report to view the associated costs. On the report, costs are displayed for all associated child segments.

- The report is filtered to **Group By: Segment** to show costs broken out by the child segments within that segment. In the below example, costs are grouped by **OPEX** and **R&D** within the **Vantage** parent segment. The parent segment is also tracking unallocated costs.
- Change the filter to view the data by another grouping, such as **Account**.
- From the resource list at the bottom, click the icons next to each resource to isolate costs displayed within the chart.
- From the top right of the chart, you can change the date range and date bin (e.g., daily, weekly, monthly).
- Click **Settings** to view the currently enabled settings, like discounts and taxes. From the **Settings** menu, click the **Manage settings** link to update the segment's settings. Settings are updated at the parent-level segment. In this example, settings are updated for the **Vantage** segment and also apply to the **OPEX** and **R&D** child segments.

<div style={{ display: "flex", justifyContent: "center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", borderRadius: "10px", overflow: "hidden" }}>
    <img alt="GIF of viewing and manipulating a segment" width="100%" src="https://assets.vantage.sh/docs/segment-cost-report.gif"/>
</div>
<br/>

:::note
If you would like to transition existing Cost Report filters to segments, you must manually re-create them. For assistance, contact Support at [support@vantage.sh](mailto:support@vantage.sh).
:::

## Segments in Overview

A segment widget is displayed for each top-level segment on the [Overview](/overview/) screen. This segments widget shows a table of second-level segments and a comparison of costs for this month vs. last. You can select any of these segments to view the corresponding Cost Report.
