---
id: report_notifications
title: Cost Report Notifications
description: Create Cost Report notifications to receive scheduled updates of your costs via Slack, Microsoft Teams, or email. 
keywords:
  - Notifications
  - Cost Report Notifications
---

# Cost Report Notifications

Cost Report notifications provide either daily, weekly, or monthly reports for one or more Cost Reports. You can receive these notifications from the following methods:

- **Slack:** You can send a notification to one or more public or private channels in a Slack workspace.
- **Microsoft Teams:** You can send a notification to one or more public or private channels in a Microsoft Teams account.
- **Email:** You can send a notification to one or more email addresses.

:::note
You can create either a Slack integration or a Microsoft Teams integration, but not both.
:::

Before any notification is sent, Vantage ensures it has the most up-to-date representation of your cost data to give you an accurate report.

## Cost Report Notifications vs. Cost Anomaly Alerts

Vantage also has a separate feature called _cost anomaly alerts_ to alert you on excess costs. Cost Report notifications provide a digest of individual reports and are sent on a scheduled basis. Cost anomaly alerts are sent when costs exceed a predetermined alert threshold. They are sent as a summary, once per day, if there are new anomalies for that day. See the [Cost Anomaly Alerts documentation](/cost_anomaly_alerts) for more information.

## Set Up Slack Integration {#slack}

Vantage users can add Vantage to their team's Slack account in a specific channel. To complete the integration, ensure you have permission to add integrations to your team's Slack account.

1. Navigate to the [Report Notifications page](https://console.vantage.sh/report_notifications) in the console.
2. Click **Setup Slack Integration**. Enter your workspace's Slack URL. A Slack page that describes the requested permissions for Vantage is displayed. The Vantage integration has permission to list and join channels as well as post messages to those channels.
   :::note
   Vantage does not read any message posted within your channels.
   :::
3. Select any channel where you would like to add the integration. The first notification will be sent the next day after the integration set up.

<details><summary>Expand to view example Slack notifications</summary>
  <div>
    <img alt="Example Cost Report notification in Slack message" width="80%" src="/img/slack-notification.png"/>
  </div>
</details>

To add the integration to a private channel, open the channel in Slack, create a new message in the channel, and type `/invite @Vantage`. See the [Set Up Cost Report Notifications](/report_notifications#create-notifications) section for instructions on how to set up notifications for specific reports.

## Set Up Microsoft Teams Integration {#ms-teams}

Vantage also integrates with Microsoft Teams. You can adjust cost report notifications to be delivered to a specific public or private channel in Microsoft Teams. To complete the integration, ensure you have permission to add integrations to your team's Microsoft Teams account.

1. Navigate to the [Report Notifications page](https://console.vantage.sh/report_notifications) in the console.
2. Click **Setup Microsoft Teams Integration**.
3. Log in with your Microsoft 365 account and provide Vantage with authorization to access your account. Vantage will ask for the following permissions on your Teams account:
   - Read names and descriptions of Teams
   - Read names and descriptions of channels
   - Send messages to channels

<details><summary>Expand to view example MS Teams notifications</summary>
  <div>
    <img alt="Example Cost Report notification in an MS Teams message" width="60%" src="/img/ms-teams.png"/>
  </div>
</details>

The Vantage app for Microsoft Teams has been verified by Microsoft. Vantage interacts with Microsoft Office 365 to set the approved permissions for the app in your account and makes use of the Microsoft Graph API to get and send info to your Microsoft Teams account. See the [Set Up Cost Report Notifications](/report_notifications#create-notifications) section for instructions on how to set up notifications for specific reports.

## Set Up Cost Report Notifications {#create-notifications}

Once you have set up either a Slack or Microsoft Teams integration, follow the steps below to create Cost Report notifications.

If you instead want to create an email notification, the email report will contain a list of all of your views and a point-in-time cost for each view. The bottom of the email will include [cost recommendations](/cost_recommendations). Cost recommendations are not sent for Slack or Microsoft Teams alerts.

<details><summary>Expand to view example email notification</summary>
  <div>
    <img alt="Example Cost Report notification in an email" width="100%" src="/img/email-notification.png"/>
  </div>
</details>

1. Navigate to the [Cost Report Notifications screen](https://console.vantage.sh/report_notifications).
   :::tip
   You can also click the bell icon in the top right of the console.
   :::
2. Click **New Report Notification**.
3. Enter a **Title** for the report.
4. If you want to send the report as an email, select the emails for any current Vantage users you want to receive the report.
5. Depending on which integration you've enabled, a **Slack Channels** or **Microsoft Teams Channels** field is displayed. Select the channels you want to send the notification to. You can add as many channels as you want, and they will all receive the notification.
6. Select a report from the dropdown list, then select a **Frequency** (e.g., daily, weekly, or monthly).
   :::note
   Monthly notifications will be sent on the second of the month. Weekly notifications will be sent on Mondays.
   :::
7. For **Change**, select **Dollars** or **Percentage**.
8. Click **Save**.

You can edit the notification's settings (e.g., add or remove recipients or change which channels it's sent to) from this screen.
