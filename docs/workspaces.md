---
id: workspaces
title: Workspaces
description: This page describes how to view and create Workspaces in the console.
keywords:
  - workspaces
---

# Workspaces

In Vantage, a _workspace_ is a way to separate your provider integrations into distinct cost views. Teams can use workspaces to create focused views of costs and even restrict access to costs within each workspace using [Role-Based Access Controls (RBAC)](/rbac) (Enterprise customers). You can specify which [integrations](/workspaces#integration-workspace) are available in which workspaces. Some use cases for workspaces are listed below.

- You may have multiple accounts within the same cloud provider, such as Azure or AWS. You can use a single Vantage workspace to ingest costs for all these accounts into the same view. 
- Create a distinct Vantage workspace for each of your environments, such as _Production_, _Staging_, and _Development_. Then, specify which provider accounts are associated with which workspace. For example, a particular Datadog account may be associated with only your _Development_ workspace.
- If you manage multiple customers, you can create individual workspaces for each customer account (Customer A, Customer B, etc.). This allows you to separate and manage cost data for each customer independently. Then, you can connect only the corresponding integrations to each customer's workspace, ensuring that they have access only to their data and reports.
  
## Navigate between Workspaces

If you have more than one workspace in your Vantage account, the **Workspaces** menu is displayed on the top left of the console. You can select any of the listed workspaces to move between each workspace.

## Create a Workspace

When your Vantage account is created, you are assigned a **Default** workspace. You can create other workspaces in addition to the default workspace. To create a new workspace, complete the following steps:

1. From the top navigation menu, click **Settings**.
2. On the left navigation, under **General Settings**, click **Workspaces**.
3. Click **Create a Workspace**.
4. Enter a **Name** for your new workspace (e.g., _Management_), then click **Create**.

## Manage Workspaces

All your existing workspaces are displayed on the [**Workspaces**](https://console.vantage.sh/settings/workspaces) Settings screen. Select a listed workspace to view additional details, such as:

- Turn off **Active Resource Syncing**. Turn off automatic syncing if you do not want Vantage to be automatically pulling active resource details from your account. This option is useful if you find Vantage is making too many API calls to your AWS endpoints.
- View team workspace access. See the [Role-Based Access Control](/rbac) documentation for more information about teams.
- View configuration details for the workspace, including the workspace token, which is used as the workspace identifier in [API calls](https://vantage.readme.io/reference/getworkspaces).
- Delete the workspace.
  :::warning
  Note that this action is not reversible.
  :::

## Manage Workspace Provider Integrations {#integration-workspace}

Once you connect a cloud provider to Vantage, and costs are fully imported, you'll need to specify the workspaces where this integration should be accessible for creating reports and viewing costs. To manage the workspaces associated with an integration:

1. From the top navigation, click **Settings**.
2. From the left navigation, click **Integrations**.
3. All your provider integrations are displayed. Click the settings icon (looks like a wheel) next to an integration (e.g., Fastly) in the list. 
4. The provider's integration page is displayed. Click the settings icon next to a listed account.
5. The **Manage Connection** page is displayed. Under **Workspace Access**, select or deselect the checkbox next to a listed workspace to specify which workspaces the integration is associated with. 

In the below example, the Fastly integration is only available in the _Demo Accounts_ workspace. If you navigate to the _Management_ or _Marketing_ workspace, you'll be unable to view Fastly cost data in Cost Reports or other Vantage features.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="The integration workspace is displayed with an arrow pointing from the settings icon. The arrow points to the integration screen with another arrow point from the settings icon. That arrow points to the specific integration and the Workspace access section." width="100%" src="/img/integration-workspace.png" />
</div>


