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

See the [Slack](/slack) integration documentation for information on how to set up a connection. See the [Set Up Cost Report Notifications](/report_notifications#create-notifications) section for instructions on how to set up notifications for specific reports.

## Set Up Microsoft Teams Integration {#ms-teams}

See the [Microsoft Teams](/microsoft_teams) integration documentation for information on how to set up a connection. See the [Set Up Cost Report Notifications](/report_notifications#create-notifications) section for instructions on how to set up notifications for specific reports.

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
