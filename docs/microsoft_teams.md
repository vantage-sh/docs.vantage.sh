---
id: microsoft_teams
name: Microsoft Teams
description: Create an integration with Microsoft Teams for Report Notifications, anomaly alerts, and budget alerts.
keywords:
  - Microsoft Teams
---

# Microsoft Teams

Vantage integrates with Microsoft Teams so that you can send [Report Notifications](/report_notifications), [Cost Alerts](/cost_alerts), [Cost Anomaly Alerts](/cost_anomaly_alerts), and [Budget Alerts](/budgets#create-alerts) to your Teams channels. You can adjust notifications to be delivered to a specific public or private channel in Microsoft Teams. 

To complete the integration, ensure you have permission to add integrations to your team's Microsoft Teams account.

1. From the top navigation, click **Settings**.
2. On the left navigation, click **Integrations**.
3. Under the **Apps** section, click **Teams**.
4. Click **Connect Teams**. 
5. Log in with your Microsoft 365 account and provide Vantage with authorization to access your account. Vantage will ask for the following permissions on your Teams account:
   - Read names and descriptions of Teams
   - Read names and descriptions of channels
   - Send messages to channels

<details><summary>Click to view example MS Teams notifications</summary>
  <div>
    <img alt="Example Report Notification in an MS Teams message" width="60%" src="https://assets.vantage.sh/docs/ms-teams.png"/>
  </div>
</details>

The Vantage app for Microsoft Teams has been verified by Microsoft. Vantage interacts with Microsoft Office 365 to set the approved permissions for the app in your account and uses the Microsoft Graph API to get and send info to your Microsoft Teams account. 