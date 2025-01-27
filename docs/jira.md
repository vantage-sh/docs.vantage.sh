---
id: jira
title: Jira
description: This page walks through how to integrate Vantage with Jira.
toc_max_heading_level: 4
keywords:
  - Jira
  - Connect Jira
---

# Jira

Jira is an issue-tracking and agile project management tool from Atlassian. With the Vantage–Jira integration, you can create Jira issues for Cost Anomalies, Budget Alerts, and Resource Reports, including Resource Reports for Cost Recommendations, directly in Vantage. You can also view the progress of the associated Jira issues directly within Vantage.

:::note
This integration is specifically for users on Jira Cloud (hosted by Atlassian). Jira Server integrations (self-hosted Jira) are not currently supported.
:::

## How Vantage Connects with Jira

Vantage integrates with Jira via an OAuth workflow. To create an integration, you need to have the following Jira and Vantage roles:

- **Jira:** Jira users must have Admin access in order to install an application. See the [Atlassian App Integration](https://support.atlassian.com/jira-cloud-administration/docs/integrate-apps/) documentation for additional information. 
- **Vantage:** Vantage users must have Owner or Integration Owner access in order to create Jira issues within Vantage. See the [Role-Based Access Control](/rbac) documentation for information on user roles and permissions.

When you connect your Jira account with Vantage, the following required permissions are automatically requested during the OAuth workflow. No further action is needed on your part to set up these permissions.

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

:::note
You can integrate only a single Jira workspace into Vantage at this time. Additionally, you can only integrate a single Vantage subscription into a Jira workspace.
:::

## Connect to Jira

Follow the steps below to connect to Jira. 

1. From the top navigation of Vantage, click **Settings**.
2. On the side navigation, click **Integrations**. Any provider integrations are listed on this screen, as well as any connected apps.
3. Under **Apps**, select **Jira**. 
4. Click **Connect Jira Account**. 
5. If you are not already logged in to Jira, you will be prompted to log in. Once you are logged in to your account, the **App Authorization** screen is displayed. Review the requested app permissions, and click **Accept**.
   :::note 
   If you have multiple Jira instances, you will be sent back to the Vantage console to select which instance you want to integrate. Click **Confirm** to select an instance.  
   :::

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Permissions for connecting Jira in the console" width="100%" src="/img/jira-permissions.png" />
</div>

Your Jira account instance will be synced with Vantage. Note that this sync might take some time, and you can monitor the status on the Connection page:

- The connection’s status is displayed as either **Connected**, **Syncing,** or **Unstable.** An Unstable status indicates that one of your configurations is no longer valid. For example, you may have deleted an issue type in Jira that is connected to a Vantage Anomaly Alert, Budget Alert, or Resource Report. If you see an **Unstable** connection, contact [support@vantage.sh](mailto:support@vantage.sh) for help with triaging this issue.
- At the top of the screen, the **Check for updates** button is displayed. Click this button if you add new projects in Jira, or if you create new issue types in Jira, to ensure they are synced with Vantage. In addition, if you add new users to your Jira instance and need to resync your user list for fields like **Reporter**, click this button to import those new users.
- All your projects will be listed, along with the connected account name.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Jira connection screen in the Vantage console" width="100%" src="/img/connect-jira.png" />
</div>

### Remove Jira Integration

To remove a Jira integration, navigate to the [Jira Settings](https://console.vantage.sh/settings/jira) screen and click the trashcan icon next to the connected account you want to remove. 

When you remove your Jira integration from Vantage:

- All links to your Jira integration will be removed from the Vantage console. 
- Any Cost Report annotations that were created from budget alerts will persist in Vantage. 
- Any issues that were created will persist in your Jira workspace.

## Create Jira Issues

You can create Jira issues based on Vantage Budget Alerts, Cost Anomalies, and Resource Reports. You can select which Jira project you want the issue sent to, as well as the issue type you want created (e.g., Task or Bug).

:::note
At this time, the only way to have a Jira issue associated with an event in Vantage is if the ticket is created in or by Vantage. You cannot link to existing Jira issues.
:::

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
4. Select an **Issue Type** to indicate the type of Jira issue you want created. The **Issue Type** list is generated based on available issue types within your selected project. Additional required fields will also be listed for the selected issue type, based on your Jira setup. Any non-required Jira fields will not be displayed, and you can update these fields directly in Jira once the issue is created. Common examples are listed below:
    - Bug
        - Enter the corresponding bug Sprint ID: if required by your setup
    - Story
    - Epic
    - Subtask
        - Enter the Jira Parent task ID (e.g., `SCRUM-39`) for the subtask
    - Task
5. Click **Save**.

:::note
Due to a technical limitation at this time, if an issue type requires you to select a team, that issue type will not be displayed.
:::

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
4. Select an **Issue Type** to indicate the type of Jira issue you want created. The **Issue Type** list is generated based on available Issue Types within your selected project. Additional required fields will also be listed for the selected issue type, based on your Jira setup. Examples are listed below:
    - Bug
        - Enter the corresponding bug Sprint ID: if required by your setup
    - Story
    - Epic
    - Subtask
        - Enter the Jira Parent task ID (e.g., `SCRUM-39`) for the subtask
    - Task
5. Click **Save**.

:::note
Due to a technical limitation at this time, if an issue type requires you to select a team, that issue type will not be displayed.
:::

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

### Resource Reports and Cost Recommendations

You can create Jira issues for any [Resource Report](/active_resources) in Vantage. For example, if [Cost Recommendations](/cost_recommendations#view-cost-recommendations) impact specific resources, you can generate a Resource Report to list the affected resources. From there, you can create a corresponding Jira issue in Vantage to assign to a stakeholder, which enables them to address tasks like rightsizing or reconfiguring the affected resources. Unlike Jira issues related to Cost Anomalies or Budget Alerts, you will be creating one issue for the report.

To create a Jira issue for a Resource Report:

1. At the top of a saved Resource Report, click the Jira icon.
2. From the dropdown list, select a **Project**.
3. Select an **Issue Type** to indicate the type of Jira issue you want created. The **Issue Type** list is generated based on available issue types within your selected project. Additional required fields will also be listed for the selected issue type, based on your Jira setup. Any non-required Jira fields will not be displayed, and you can update these fields directly in Jira once the issue is created. Common examples are listed below:
    - Bug
        - Enter the corresponding bug Sprint ID: if required by your setup
    - Story
    - Epic
    - Subtask
        - Enter the Jira Parent task ID (e.g., `SCRUM-39`) for the subtask
    - Task
    
:::note
Due to a technical limitation at this time, if an issue type requires you to select a team, that issue type will not be displayed.
:::

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Creating a resource report issue" width="100%" src="/img/resource-report-ticket.png" />
</div>

4. Click **Create Ticket**. 
5. A new ticket will be created within the selected Jira project. The issue contains information on the person who created the issue in Vantage, the Resource Report name, and a link to the Resource Report. For Resource Reports generated from Cost Recommendations, additional information about the report is also provided, like total costs, number of affected resources, and potential monthly savings.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Creating a resource report ticket for Jira" width="100%" src="/img/resource-report-jira.png" />
</div>

Once the issue is created, to access the corresponding Jira ticket from the Resource Report, click the Jira icon on the top right of the report. 

## Jira Issue Statuses in Vantage

You can see a Jira issue's status in Vantage. Issue statuses are updated once a day. Therefore, a change that is made today (e.g., changing an Issue's status in Jira from "To Do" to "In Progress") might not be reflected until tomorrow. Next to the Jira icon a badge is displayed:

<table>
  <thead>
    <tr>
      <th>Badge</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div style={{display:"flex", justifyContent:"center"}}>
          <img alt="Creating a resource report ticket for Jira" width="100%" src="/img/jira-red.png" />
        </div>
      </td>
      <td>The corresponding Jira issue is currently in the Jira "To Do" status.</td>
    </tr>
    <tr>
      <td>
        <div style={{display:"flex", justifyContent:"center"}}>
          <img alt="Creating a resource report ticket for Jira" width="100%" src="/img/jira-yellow.png" />
        </div>
      </td>
      <td>The corresponding Jira issue is currently in the Jira "In Progress" status.</td>
    </tr>
    <tr>
      <td>
        <div style={{display:"flex", justifyContent:"center"}}>
          <img alt="Creating a resource report ticket for Jira" width="100%" src="/img/jira-green.png" />
        </div>
      </td>
      <td>The corresponding Jira issue is currently in the Jira "Done" status.</td>
    </tr>
    <tr>
      <td>
        <div style={{display:"flex", justifyContent:"center"}}>
          <img alt="Creating a resource report ticket for Jira" width="100%" src="/img/jira-blank.png" />
        </div>
      </td>
      <td>Vantage has not received a status update yet from Jira. It can take a day from the time when a corresponding Jira issue was created in Vantage to update this status.</td>
    </tr>
  </tbody>
</table>

These status badges are displayed next to the Jira icon in the following locations:

- Next to each Cost Anomaly with a corresponding Jira issue in the Cost Anomaly list 
- On any Cost Report Annotations for Budget Alerts
- At the top of a Resource Report with a corresponding Jira issue
