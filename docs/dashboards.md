---
id: dashboards
title: Dashboards
description: Create dashboards in Vantage to view all your Cost Reports in one spot.
keywords:
  - Cost Reports
  - Dashboards
---

# Dashboards

Dashboards contain a set of [Cost Reports](/cost_reports), [segment reports](/segments), or [financial commitment reports](/financial_commitment_reports). You can apply date range and period filters (e.g., display daily costs) to all reports on the dashboard. A consistent date range across all reports on the dashboard can help with cost comparison between different reports. You can assign any number of reports to a dashboard, regardless of which folder the report is in. Once a dashboard is created, you can modify the name, date settings, and add/remove reports from it.

## Create a Dashboard

1. From the top navigation, click **Cost Reporting**.
2. On the left menu, select **Dashboards**. All existing dashboards are displayed within this view.
3. Click **+ New**.
4. Enter a **Name**.
5. Under **Add Reports**, select the reports you want displayed on the dashboard.
   :::note
   At this time, you cannot add widgets from the Overview page, such as **Provider Summary**.
   :::
6. Click **Save**. Reports are displayed on the dashboard in alphabetical order, by report name.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A dashboard in the console displayed with four different reports" width="70%" src="https://assets.vantage.sh/blog/dashboards/dashboards-2.png" />
</div>

For each displayed report, click **View Report** to open that report outside the dashboard.

### Save a Dashboard to Favorites

To save a dashboard to your favorites, navigate to the [Dashboards](https://console.vantage.sh/dashboards) page, then click the star icon to the right of the **Created On** column. Access your starred dashboard from the **Starred By Me** screen in the left navigation. Dashboards you create are also displayed on the **Created By Me** screen.

### Delete a Dashboard

To delete a dashboard, navigate to the [Dashboards](https://console.vantage.sh/dashboards) page, then click the ellipses to the right of the **Created On** column. Click **Delete**.

## Customize a Dashboard

On the dashboard, you can apply the following customizations:

- To change the date range of all displayed Cost Reports, click **Customize**. Select a date range and click **Apply**. Click **Save** to keep these settings. Click **Clear Filters** to remove filter updates.
- To change the date grouping, click the **Choose Period** menu. Select either **Cumulative**, **Monthly**, **Weekly**, or **Daily**. Click **Save** to keep these settings. Click **Clear Filters** to remove filter updates.
- To create a new dashboard based on an existing dashboard, click the down arrow next to **Save**. Then, click **Save as New**. You can then enter a new dashboard name and add additional reports.
- To reset each Cost Report back to its original settings, click **Reset**.
- To add more reports to the dashboard or change the dashboard's name, click **Edit**.

## Saved Filters on Dashboards

You can use [saved filters](/saved_filters) to apply consistent filter logic to multiple Cost Reports on a dashboard. If you have a dashboard of high-level Cost Reports (e.g., filtered only to connected providers or services), and you want to further filter a dashboard to a team or specific category, you can use saved filters on dashboards to quickly apply this logic. Use dashboards to save and maintain filtering logic for teams, business units, or services. When updated, these filters automatically apply to all relevant Cost Reports on the dashboard.

1. From the top right of any dashboard, click the **Saved Filters** dropdown menu.
2. Select one or more saved filters. The filter logic is applied across all Cost Reports on the dashboard. 
  :::note
  When you add a saved filter to a dashboard, if a preexisting filter on a Cost Report and the saved filter use the same provider (e.g., both use AWS), "AND" logic is used between each filter set (i.e., costs where Filter 1 AND Saved Filter are true). If the existing filter and saved filter use different providers, “OR” logic is used between each filter set. 
  :::

## Share a Dashboard

From the top of any dashboard, click **Share**. A link is added to your clipboard where you can share the dashboard with any Vantage user in your organization who has access to view the dashboard. Each report on the dashboard also has a share option, with a unique link.
