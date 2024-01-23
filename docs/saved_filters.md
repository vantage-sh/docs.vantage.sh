---
id: saved_filters
title: Saved Filters
description: Create saved filters in Vantage to reuse popular Cost Report filters.
keywords:
  - Cost Reports
  - Saved Filters
---

# Saved Filters

Use saved filters to reuse filter logic across multiple Cost Reports. If you update the filter logic on a saved filter, all Cost Reports that use the saved filter will be automatically updated.

For example, you may have multiple Cost Reports for a specific team, business unit, or environment. If any filter criteria changes, such as tag names or account numbers, you can update the saved filter for all affected reports, without having to individually update each report.

## Create a Saved Filter

1. From the top navigation bar, click **Cost Reporting**.
2. On the left menu, select **Saved Filters**. All existing saved filters are displayed.
3. Click **New Filter**.
4. Enter a **Filter Name**.
5. If you want to add a filter to a [folder](/folders), select the **Folders** tab. Then, select any applicable folders. The saved filter will be added to any existing Cost Reports within that folder, as well as any new Cost Reports you create within that folder. The saved filter will also apply to any sub-folders within that folder. For individual Cost Reports, saved filters can be assigned only from within that Cost Report. (See the next section for details.)
6. Under **Filters**, click **+ Add a Filter**. Select your filter criteria.
   :::info
   For more information about creating filters and filter options, see the [Cost Reports filter documentation](/cost_reports#filtering-cost-reports).
   :::
7. At the top, click **Save**.

### Make a Copy of an Existing Saved Filter

You can also create a copy of any existing saved filter to use when creating a new saved filter.

At the top of any saved filter, click the **Duplicate** icon (to the left of **Save**). This action will replicate the filter logic but not the associated reports.

## Add Saved Filter to a Cost Report

1. Open any Cost Report.
2. At the top, click **Filters**.
3. Click **Saved Filters**. A list of existing saved filters is displayed.
4. Select a saved filter to add it to the Cost Report. You can select multiple saved filters. You can also add additional ad-hoc filter criteria as a separate filter set.
   <div style={{ display: "flex", justifyContent: "center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", borderRadius: "10px", overflow: "hidden" }}>
    <img alt="GIF of filtering RDS costs by category and sorting the table in the console" width="80%" src="/img/saved-filter.gif"/>
    </div>
    <br/>

5. At the top, click **Save**.
   :::note
   When you combine multiple saved filters on Cost Reports, "AND" logic is used between each filter. This is in contrast to combining multiple ad-hoc filter sets where "OR" logic is used.

   For example, if you have one saved filter for "Production" and one saved filter for "Kubernetes," you could create a report with both saved filters and see results for "Production Kubernetes." The report will show costs that match the criteria for both "Production" _AND_ "Kubernetes."
   :::

### Saved Filters within Folders

If a saved filter is applied to a folder, you will be unable to remove it from the individual Cost Reports within that folder.

1. To remove the saved filter from a folder, navigate to the [Saved Filters](https://console.vantage.sh/saved_filters) page.
2. Then, click the ellipses (**...**) next to the saved filter and click **Edit**.
3. Remove the folder from the **Folders** list and click **Save**.
