---
id: slack
name: Slack
description: Create an integration with Slack for Cost Report notifications, anomaly alerts, and budget alerts.
keywords:
  - Slack
---

# Slack

Vantage integrates with Slack so that you can send [Cost Report notifications](/report_notifications), [cost anomaly alerts](/cost_anomaly_alerts), and [budget Alerts](/budgets#create-alerts) to your Slack channels. Vantage users can add Vantage to their team's Slack account in a specific channel. To complete the integration, ensure you have permission to add integrations to your team's Slack account.

1. Navigate to the [Report Notifications page](https://console.vantage.sh/report_notifications) in the console.
2. Click **Setup Slack Integration**. Enter your workspace's Slack URL. A Slack page that describes the requested permissions for Vantage is displayed. The Vantage integration has permission to list and join channels, as well as post messages to those channels.
   :::note
   Vantage does not read any message posted within your channels.
   :::
3. Select any channel where you would like to add the integration. The first notification will be sent the next day after the integration set up.

  <details><summary>Expand to view example Slack notifications</summary>
    <div>
      <img alt="Example Cost Report notification in Slack message" width="80%" src="/img/slack-notification.png"/>
    </div>
  </details>

4. To add the integration to a private channel:
   - Open the channel in Slack
   - Create a new message in the channel
   - Type `/invite @Vantage` and send the message

