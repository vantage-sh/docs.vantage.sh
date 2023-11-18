---
id: workspaces
title: Workspaces
description: This page describes how to view and create Workspaces in the console.
keywords:
    - workspaces
---

# Workspaces

In Vantage, you have the flexibility to link multiple cloud infrastructure provider accounts to a single Vantage account. With this feature, you can view your expenses within a single cloud provider, such as AWS, or across multiple cloud providers, like GCP and Azure.

A *Workspace* is a way to separate costs from individual account(s) within a provider, or across providers, into their own discrete dashboards. Teams can then create more focused views of costs and even restrict access to costs by using [Role-Based Access Controls (RBAC)](/rbac) if they are subscribers of the Vantage [Enterprise plan](https://www.vantage.sh/pricing).

## Workspace Use Cases

| **Use Case**                                   | **Description**                                                                                                 |
|-----------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| Grouping resources together for multiple accounts within a cloud provider | An organization sometimes has multiple accounts within the same cloud provider. Vantage users can use a single workspace to group multiple cloud provider accounts together to view all resources in the same view. |
| Grouping costs together across multiple cloud providers | An organization sometimes has multiple cloud providers (e.g., AWS and GCP). Vantage users can use a single workspace to group multiple cloud provider accounts together to view all resources in the same view. |
| Separate costs per environment | Organizations categorize expenses by associating them with the specific environment to which the resources in the account belong. This is achieved by creating a distinct workspace for each environment, effectively grouping all production, staging, and development resources into separate workspaces. |
| Separate costs per team | Organizations separate costs based on the team that uses the resources in an account. Separate workspaces per team (e.g., infrastructure, product, security). |
| Separate costs per product/service | Organizations separate costs based on the product or service that uses the resources in an account. Separate workspaces per product/service (e.g., payment, console, admin). |
| Separate costs per customer | Organizations separate costs based on customers. Separate workspaces per customer (e.g., Customer A, Customer B, Customer C). |


## Create a Workspace

When your Vantage account is created you are assigned a **Default** workspace. You have the ability to create multiple workspaces. Each workspace is a logical grouping of cloud provider account(s) and has its own respective set of views. 

To create a new workspace, account Owners can complete the following steps:

1. From the top navigation menu, navigate to the [**Settings**](https://console.vantage.sh/account/profile) page. 
2. On the left menu, under **Organization Settings**, click **Workspaces**.
3. Click **New Workspace**. 
4. Enter a **Name** for your new workspace (e.g., *Management*), then click **Create**. 

## Manage Workspaces

On the [**Workspaces** Settings](https://console.vantage.sh/settings/workspaces) screen, you can select a workspace and then perform the following actions:

- Turn off **Active Resource Syncing**. Turn off automatic syncing if you do not want Vantage to be automatically pulling active resource details from your account. This option is useful if you find Vantage is making too many API calls to your AWS endpoints.
- View Team workspace access. See the [Role-Based Access Control](/rbac) documentation for more information about teams.
- View configuration details for the workspace, including workspace API token.
- Delete workspace. **Note that this action is not reversible**. 

## Navigate between Workspaces

When you have more than one workspace in your Vantage account, a workspace menu will appear in the top-left corner of the console to switch between workspaces. Select any of the workspaces from the list. 
