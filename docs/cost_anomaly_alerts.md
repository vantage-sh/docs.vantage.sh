---
id: cost_anomaly_alerts
title: Anomaly Detection
description: Create cost anomaly alerts so that you are aware of any issues or changes in your costs.
keywords:
  - Anomaly detection
  - Cost anomaly alerts
---

# Anomaly Detection

Cost anomalies notify teams of excess costs and help engineers fix misconfigurations or other problems before they become very expensive. All costs present in a [Cost Report](/cost_reports/) will be analyzed for anomalies, and all Cost Reports can be configured to send alerts. You can also configure alerts to be sent for detected anomalies.

Alerts can be sent to any number of email addresses. You can select any of your team members with a Vantage account, and add their email to the alert. You can also send alerts via Slack or Microsoft Team channels. If there are new anomalies for that day, they will be sent as a summary once per day.

:::note
At this time, you cannot configure an alert for a specific [resource](/active_resources/); however, you can create a Cost Report filtered to a specific tag or label and configure an alert for that report.
:::

## How Anomaly Detection Works

A machine learning model is trained on every cost category for every service of a Cost Report. If a cost for a specific date falls outside of the expected bounds, it is considered an anomaly. Vantage also filters out very low dollar value cost anomalies to reduce alerting noise.

## View Cost Anomalies

To view cost anomalies, navigate to any Cost Report and select the **Anomalies** tab.

<div style={{ display: "flex", justifyContent: "center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", borderRadius: "10px", overflow: "hidden" }}>
    <img alt="GIF of a Cost Report with the Anomalies tab opened" width="100%" src="/img/cost-anomaly-alerts.gif"/>
</div>
<br/>

:::tip
Anomalies are considered **Active** if they have occurred in the past seven days. Once this time window passes, they move to an **Archived** state.
:::

Anomaly alerts are sent only for the first time they are detected. If an anomaly persists for multiple days in a row, Vantage will not send alerts after the first day. Historical anomalies are available to view for a Cost Report, and the **Anomaly Detected** date will be the first day the anomaly occurred.

## Take Action on Anomalies

1. To view more information about a specific alert, select the link in the **Category** column.
2. The alert is displayed on the corresponding Cost Report. The specific day where the alert was surfaced is highlighted. At the top right of the graph, click **Manage Anomaly**.
3. Select one of the following actions:
   - **Create an Issue**: Select this option to create an [issue](/issues). A new tab is displayed with a new issue. The issue description will contain a link to the Cost Report where the anomaly was detected. This issue can be assigned to yourself or another teammate to resolve later. See the visual example below for how to create an issue. 
   - **Mark as Archived**: The anomaly will be displayed as **Archived** in the anomalies list.
   - **Ignore**: The anomaly will be removed from the anomalies list. The **Ignore Anomaly** pop-up is displayed where you can provide feedback to Vantage on why you are ignoring the anomaly.

<div style={{ display: "flex", justifyContent: "center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", borderRadius: "10px", overflow: "hidden" }}>
    <img alt="GIF of a creating an issue for an Anomaly" width="100%" src="/img/anomaly-issue.gif"/>
</div>

## Configure Cost Anomaly Alerts

:::note
You can configure alerts to be sent via email, Slack, or Microsoft Teams. If you want to use Slack or Teams, you will need to configure the corresponding integration with Vantage. See the [Slack](/report_notifications#slack) or [Microsoft Teams](/report_notifications#ms-teams) integration documentation for Cost Report notifications. Once you have completed the integration steps, complete the below instructions to configure anomaly alerts.
:::

To receive alerts for any detected cost anomalies:

1. From the top of the anomalies list, click **Configure Alert**.
2. Select any email recipients you want to send the alert to. If you have Slack or Microsoft Teams configured, the **Slack channels** or **Microsoft Teams channels** fields are displayed.
3. Enter an **Alert Threshold**. You'll receive an alert only if this threshold is reached.
4. Click **Save**.

To add or remove recipients or change the threshold, click **Configure Alert** and make those updates.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Alert Thresholds" width="60%" src="/img/anomaly-threshold.png" />
</div>
