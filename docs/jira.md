---
id: jira
title: Jira
description: This page walks through how to integrate Vantage with Jira.
toc_max_heading_level: 4
keywords:
  - Jira
  - Connect Jira
unlisted: true
---

# Jira

:::caution Early Access
🚧 This documentation is provided for early access users of the Vantage-Jira integration. This page is currently in draft and will be updated and refined as new features are developed.
::: 

Jira is an issue-tracking and agile project management tool from Atlassian. With the Vantage–Jira integration, you can create Jira Issues for Cost Anomalies, Budget Alerts, and Cost Recommendations directly in Vantage. You can also view the progress of the associated Jira Issues directly within Vantage.

:::note
This integration is specifically for users on Jira Cloud (hosted by Atlassian). Jira Server integrations (self-hosted Jira) are not currently supported.
:::

## How Vantage Connects with Jira

Vantage integrates with Jira via an OAuth workflow. When you connect your Jira account with Vantage, the following required permissions are automatically requested during the OAuth workflow. No further action is needed on your part to set up these permissions.

<table>
  <thead>
    <tr>
      <th>Access Type</th>
      <th>Permission</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>View</td>
      <td>
        <code>jira-user</code>, <code>jira-work</code>
      </td>
      <td>
        <ul>
          <li>View user information in Jira that the user has access to, including usernames, email addresses, and avatars.</li>
          <li>Read Jira project and issue data, search for issues, and objects associated with issues like attachments and worklogs.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Update</td>
      <td>
        <code>jira-work</code>
      </td>
      <td>
        Create and edit issues in Jira, post comments as the user, create worklogs, and delete issues.
      </td>
    </tr>
  </tbody>
</table>

## Connect to Jira

Follow the steps below to connect to Jira. 

1. From the top navigation of Vantage, click **Settings**.
2. On the side navigation, click **Integrations**. Any provider integrations are listed on this screen, as well as any connected apps.
3. Under **Apps**, select **Jira**. 
4. Click **Connect Jira Account**. 
5. If you are not already logged in to Jira, you will be prompted to log in. Once you are logged in to your account, the App Authorization screen is displayed. Review the requested app permissions, and click **Accept**.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Permissions for connecting Jira in the console" width="100%" src="/img/jira-permissions.png" />
</div>

Your Jira account will be connected to Vantage. On the Connection page, all your projects will be listed. If you need to update the integration or resync your projects, click **Check for updates**. 

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Jira connection screen in the Vantage console" width="100%" src="/img/connect-jira.png" />
</div>

## Create Jira Issues

You can create Jira issues based on Vantage budget alerts, anomalies, and recommendations. You can select which Jira project you want the issue sent to, as well as the issue type you want created (e.g., Task or Bug).

:::info
For an explanation of Jira issue types, see the [Jira documentation](https://support.atlassian.com/jira-cloud-administration/docs/what-are-issue-types/).
:::

### Budget Alerts

Budget alerts are automated alerts based on configurable budget thresholds. You can configure your budget alerts to create a corresponding Jira issue when the alert is triggered. When the set budget threshold is reached, Vantage creates a corresponding Jira issue.

:::info
Review the [Vantage Budget alerts documentation](/budgets#create-alerts) for more details on budget alerts.
:::

1. Create a new budget alert. Enter all budget alert criteria, such as **Threshold**. 
2. Under **Setup App Alerts**, expand the **Jira Alerts** section. 
3. Select the Jira **Project** where you want the issue to be created. 
4. Select an **Issue Type** to indicate the type of Jira issue you want created. The **Issue Type** list is generated based on available Issue Types within your selected project. Additional required fields will also be listed for the selected Issue Type, based on your Jira setup. Examples are listed below:
    - Bug
        - Enter the corresponding bug Sprint ID: if required by your setup
        - People: if required by your setup
    - Story
    - Epic
    - Subtask
        - Enter the Jira Parent task ID (e.g., `SCRUM-39`) for the subtask
    - Task
5. Click **Save**.

When a budget alert is triggered, the corresponding issue is generated in Jira. In the below visual example:

- A story issue type was created based on a budget alert that went off.
- The **Description** contains the date when the alert was triggered, the associated Cost Report, and the name of the budget.
- An [annotation](/annotations) is added to the associated Cost Report for the date when the alert was triggered, and a link to the annotation is also provided in the Jira issue description.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Jira representation of a Vantage Budget Alert" width="100%" src="/img/budget-alert-jira.png" />
</div>

### Cost Anomaly Alerts

Anomaly alerts notify teams of excess costs and are identified via Cost Reports. You can configure your anomaly alerts to create a corresponding Jira issue when the alert is triggered.  When an alert is triggered for an individual service, Vantage creates a corresponding Jira issue.

:::info
Review the Vantage [anomaly alerts documentation](/cost_anomaly_alerts#configure-cost-anomaly-alerts) for more details on cost anomaly alerts.
:::

1. Create a new anomaly alert. Enter all anomaly alert criteria, such as **Alert Threshold**. 
2. Under **Setup App Alerts**, expand the **Jira Alerts** section. 
3. Select the Jira **Project** where you want the issue to be created. 
4. Select an **Issue Type** to indicate the type of Jira issue you want created. The **Issue Type** list is generated based on available Issue Types within your selected project. Additional required fields will also be listed for the selected Issue Type, based on your Jira setup. Examples are listed below:
    - Bug
        - Enter the corresponding bug Sprint ID: if required by your setup
        - People: if required by your setup
    - Story
    - Epic
    - Subtask
        - Enter the Jira Parent task ID (e.g., `SCRUM-39`) for the subtask
    - Task
5. Click **Save**.

When an anomaly alert is triggered for a given service, the corresponding issue is generated in Jira. As shown in the image below, the Jira icon is also displayed to the right of the anomaly, with a link to the corresponding Jira issue. 

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Anomaly in the Vantage console" width="100%" src="/img/anomaly-vantage.png" />
</div>

In Jira, an issue is created as shown in the image below.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Jira representation of a Vantage anomaly alert" width="100%" src="/img/anomaly-jira.png" />
</div>


In this example:

- A story issue type was created based on an anomaly alert that was created for the Datadog Metrics service.
- The **Description** contains the date when the alert was triggered, the change in the dollar amount that caused this alert, and the associated Cost Report.
- A link to the anomaly is also provided.

### Cost Recommendations

_Coming soon._