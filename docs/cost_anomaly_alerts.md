# Cost Anomaly Detection and Alerts

![Cost Anomaly Alert](/img/cost-alert.png)

Cost Anomaly Alerts notify teams of excess costs, and help engineers fix misconfigurations or other problems before they become very expensive. All costs present in a [Cost Report](/cost_reports/) will be analyzed for anomalies and all Cost Reports can be configured to send alerts. At the moment you cannot configure an alert for a specific [resource](/active_resources/). However, you can create a Cost Report filtered to a specific tag or label and configure an alert for this report.

Alerts can be sent to any number of email addresses as well as a set of Slack or Microsoft Team channels. You can choose any of your invited team members and add their email to the alert.

Anomalies will be sent as a summary once per day if there are new anomalies for that day.

## Anomalies vs. Alerts

Cost anomalies are detected automatically and populated in the Anomalies tab of a Cost Report. Just because an anomaly is detected does not mean an alert is sent. You must choose "Create Alert" in the Anomalies tab and select a destination for the alert (Slack, Teams, or Email).

## Configure Alerts

![Create a Cost Anomaly Alert](/img/create_alert.png)

You can configure a cost anomaly alert by visiting any Cost Report, switching to the Anomalies tab and creating an alert. From there you can configure which report is being monitored, where the alert is sent and an optional minimum threshold. When viewing anomalies for a cost report you will be prompted to create an alert for that report if one is not already configured.

## Taking Action on Alerts

From the Anomalies list on a Cost Report you have two options to take action on the alert. You may click into the alert through the Category column to see it displayed on the overall Cost Report where the specific day which triggered the alert will be highlighted. From here you can choose "Manage Anomaly" and create an issue or ignore the anomaly. The same two actions are available in the More Options menu in the anomalies list. Anomalies have three states: Active, Archived, and Ignored.

If you create a [Vantage Issue](https://www.vantage.sh/features/issues) you can link to the Cost Report that is causing the problem. This issue can be assigned to yourself or another teammate to resolve later. The assignee will be able to check the Notifications page to see the alert and any other past Cost Alerts.

## How Anomaly Detection Works

A machine learning model is trained on every cost category for every service of a cost report. If a cost for a specific date falls outside of the expected bounds it is considered an anomaly. Vantage also filters out very low dollar value cost anomalies to reduce alerting noise.

Anomalies are active if they have occurred in the past 7 days. Once this window passes they move to archived. Anomalies will only alert the first time they are detected. If an anomaly persists for multiple days in a row Vantage will not send alerts after the first day. However, anomalies will be available to be viewed historically for a cost report and the date will be marked as the first day the anomaly occurred.
