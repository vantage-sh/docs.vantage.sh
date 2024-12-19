---
id: dashboards
title: Dashboards
description: Create dashboards in Vantage to view all your Cost Reports in one spot.
keywords:
  - Cost Reports
  - Dashboards
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ReactPlayer from 'react-player'
import Checkmark from '@site/src/components/icons/Checkmark';

# Dashboards

Dashboards contain a set of [Cost Reports](/cost_reports), [segment reports](/segments), [resource reports](/active_resources), or [financial commitment reports](/financial_commitment_reports). You can apply date range and period filters (e.g., display daily costs) to all reports on the dashboard. A consistent date range across all reports on the dashboard can help with cost comparison between different reports. You can assign any number of reports to a dashboard, regardless of which folder the report is in. Once a dashboard is created, you can modify the name and date settings as well as add/remove reports from the dashboard.

:::tip
To get started with Dashboards, you can also watch these video demos on [Vantage University](/vantage_university_cost_reporting) 🎓.
:::

You can add the following widget types to dashboards:

- [Cost Reports](/cost_reports)
- [Usage Reports](/usage_based_reporting)
- [Active Resource Reports](/active_resources)
- [Kubernetes Efficiency Reports](/kubernetes)
- [Financial Commitment Reports](/financial_commitment_reports)

## Create a Dashboard

1. From the top navigation, click **Cost Reporting**.
2. On the left menu, select **Dashboards**. All existing dashboards are displayed within this view.
3. Click **+ New**.
4. Enter a **Name**.
5. Under **Add Reports**, select the reports you want displayed on the dashboard. Widgets are initially added to dashboards in chronological order, with the most recently added widget appearing at the bottom.
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

- To change the date range of all displayed Cost Reports, click **Customize Date**. Select a date range and click **Apply**. On the top right, click **Save Filters** to keep these settings. Click **Clear Filters** on the top left to remove filter updates.
- To change the date grouping, click the **Choose Period** menu. Select either **Cumulative**, **Monthly**, **Weekly**, or **Daily**. On the top right, click **Save Filters** to keep these settings. Click **Clear Filters** on the top left to remove filter updates.
- To create a new dashboard based on an existing dashboard, click the down arrow next to **Save Filters**. Then, click **Save as New**. You can then enter a new dashboard name and add additional customizations.
- To reset each Cost Report back to its original settings, click **Reset**.
- To add more reports to the dashboard or change the dashboard's name, click the pencil icon on the top right of the dashboard.

:::note
The customization options do not apply to folder dashboards, which are designed to be a read-only one-to-one representation of the resources within a folder. These customization options also do not apply to the **Overview** page.
:::

### Edit Widget Name and Type

You can edit the widget type to display as a chart or table. The following widget types are available for the reports listed below.

| Widget Type                   | Chart View   | Table View   |
| ----------------------------- | ------------ | ------------ |
| Cost Reports                  | <Checkmark/> | <Checkmark/> |
| Usage Reports                 | <Checkmark/> | <Checkmark/> |
| Active Resource Reports       |              | <Checkmark/> |
| Kubernetes Efficiency Reports | <Checkmark/> | <Checkmark/> |
| Financial Commitment Reports  | <Checkmark/> | <Checkmark/> |

1. From any widget on a dashboard, click the pencil icon.
2. The widget edit slideout is displayed on the right side of the screen. 
   - To change the widget type, under **Default Widget State** select either **Chart** or **Table**. The widget type is automatically updated.
   - To change the widget's name, click the pencil icon next to the current widget name in the slideout and update the name. 

### Edit Dashboard Report Order

You can edit the order for which reports are displayed on a dashboard. You can edit the order directly on the dashboard or through the dashboard edit screen.

<Tabs>
  <TabItem value="dashboard" label="From the Dashboard" default>
    <ol>
      <li>From the top right of a dashboard, click the <strong>Reorder Widgets</strong> icon (looks like a set of six dots).</li>
      <li>Hover over and select any widget. Drag the widget to a new spot on the dashboard.</li> 
      <li>At the top, click <strong>Done Reordering</strong>.
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ 
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", 
              borderRadius: "10px", 
              width: "100%",
              overflow: "hidden" 
            }}>
            <ReactPlayer 
                playing 
                muted 
                playsinline
                loop
                url='/img/dashboard-reorder-dashboard.mp4'
                alt="The Reorder icon is clicked on the dashboard edit screen and each report is reordered." 
                width="100%"
                height="100%"
            />
          </div>
        </div>
      </li>
    </ol> 
  </TabItem>
  <TabItem value="edit-screen" label="From the Dashboard Edit Screen">
      <ol>
        <li>From the top right of a dashboard, click the pencil icon.</li>
        <li>The list of reports on the dashboard is displayed. Click <strong>Reorder</strong>.</li>
        <li>Move the tile for each report up or down to change its order on the dashboard.</li> 
        <li>When you are finished, click <strong>Done Reordering</strong> > <strong>Save</strong>. The new order is displayed on your dashboard.
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ 
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", 
              borderRadius: "10px", 
              width: "100%",
              overflow: "hidden" 
            }}>
            <ReactPlayer 
                playing 
                muted 
                playsinline
                loop
                url='/img/dashboard-reorder.mp4'
                alt="The Reorder icon is clicked on the dashboard edit screen and each report is reordered." 
                width="100%"
                height="100%"
            />
          </div>
        </div>
      </li>
    </ol> 
  </TabItem>
</Tabs>

## Add a Saved Filter to a Dashboard {#saved-filter}

You can use [saved filters](/saved_filters) to apply consistent filter logic to multiple Cost Reports on a dashboard. If you have a dashboard of high-level Cost Reports (e.g., filtered only to connected providers or services), and you want to further filter a dashboard to a team or specific category, you can use saved filters on dashboards to quickly apply this logic.

1. From the top right of any dashboard, click the **Saved Filters** dropdown menu.
2. Select one or more saved filters. The filter logic is applied across all Cost Reports on the dashboard.
   :::note
   When you add a saved filter to a dashboard, if a preexisting filter on a Cost Report and the saved filter use the same provider (e.g., both use AWS), "AND" logic is used between each filter set (i.e., show costs where the preexisting filter _AND_ saved filter are true). If the preexisting filter and saved filter use different providers, “OR” logic is used between each filter set.  
   :::

## Set a Default Dashboard {#default-dashboard}

You can set a default dashboard that's displayed when a user logs in to Vantage and visits `console.vantage.sh`, instead of the [Overview](/overview) screen. This default dashboard can be set for a team or by an individual user. When the user logs in to Vantage, they will be redirected to that dashboard, and will be in the [workspace](/workspaces) that is associated with that dashboard.

:::note

- If a user is a member of a team with a configured default dashboard and also has a personal dashboard configured, the personal dashboard is displayed.
- If a user is a member of two different teams with configured default dashboards, the user will see the default dashboard of the first team they were added to.
  :::

<Tabs>
  <TabItem value="team" label="Set Default Dashboard for Team" default>
  <p>A user with <a href="/rbac">Owner-level</a> permissions can set a default dashboard for a team.</p>
    <ol>
      <li>From the top navigation, click <strong>Settings</strong>.</li>
      <li>From the left navigation, under <strong>General Settings</strong>, click <strong>Teams</strong>.</li>
      <li>Under <strong>Default Dashboard</strong>, select the dashboard that should be displayed when a member of the team visits <code>console.vantage.sh</code>. If you want to remove the default dashboard and display the Overview page instead, select <strong>None</strong>.</li> 
      <li>Click <strong>Save</strong>.</li>
      </ol> 
  </TabItem>
  <TabItem value="user" label="Set Personal Default Dashboard">
    <ol>
      <li>From the top navigation, click <strong>Settings</strong>.</li>
      <li>From the left navigation, under <strong>Personal Settings</strong>, click <strong>Profile</strong>.</li>
      <li>Under <strong>Default Dashboard</strong>, select the dashboard that should be displayed when you visit <code>console.vantage.sh</code>. If you want to remove the default dashboard and display the Overview page instead, select <strong>None</strong>.</li> 
      <li>Click <strong>Save</strong>.</li>
      </ol> 
  </TabItem>
</Tabs>

---

:::tip
A user can also select their personal default dashboard from any existing dashboard. At the top right of the dashboard, click the ellipses. Click **Set Default Dashboard** and confirm.
:::

## Share a Dashboard

From the top of any dashboard, click **Share**. A link is added to your clipboard where you can share the dashboard with any Vantage user in your organization who has access to view the dashboard. Each report on the dashboard also has a share option, with a unique link.
