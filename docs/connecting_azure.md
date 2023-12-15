---
id: connecting_azure
title: Set Up Azure
description: This page walks through how to connect your GCP account to Vantage.
keywords:
  - Azure
  - Connect Azure
---

# Set Up Azure

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Vantage integrates with your Azure account using an Active Directory [Service Principal](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/service-accounts-principal). This principal is then assigned access to either [management groups](https://learn.microsoft.com/en-us/azure/governance/management-groups/overview) or individual [subscriptions](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org-subscriptions).

You can connect hundreds of Azure subscriptions to Vantage through the management group method. Any subscriptions that are part of a [resource group](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal) will be automatically imported.

:::note
The service principal is granted [Reader](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#reader) permissions. It does **not** have permissions—nor will it ever attempt—to make any changes to your infrastructure.
:::

## Connect Your Azure Account

### Prerequisites

- The below commands are run via the [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/?view=azure-cli-latest).
- [Create a free Vantage account](https://console.vantage.sh/signup), then follow the steps below to integrate Azure costs.

### Step 1: Create an Azure Service Principal

Create a service principal using the following command: 

```bash
az ad sp create-for-rbac -n "vantage"
```

You should see output similar to the below output:

```bash
{
  "appId": "2d218f0f5-7ad5-4a12-abc7-bad2889d6407",
  "displayName": "vantage",
  "password": "8zkj3~yswKd433U12SHrvp22UoA6tOOOkZ_BYar2",
  "tenant": "1050a480-ef60-43d7-b8db-224aad100b60"
}
```

Record the `appId`, `tenant`, and `password` as you will enter these credentials into the Vantage console.

### Step 2: Grant the Service Principal Permissions {#granting-the-service-principal-permissions}

Grant permissions to the `appId` from the service principal created above. The scope can be a subscription or management group.

:::note
Vantage recommends assigning permissions to a management group that aggregates your subscriptions. By following this recommendation, you do not have to manually assign each subscription.
:::

<Tabs>
  <TabItem value="management-group" label="Management Group" default>

  ```bash
  az role assignment create --assignee <SERVICE_PRINCIPAL_APP_ID> \
    --role Reader \
    --scope "/providers/Microsoft.Management/managementGroups/<MANAGEMENT_GROUP_ID>"
  ```
  </TabItem>
  <TabItem value="subscription" label="Subscription">

  ```bash
  az role assignment create --assignee <SERVICE_PRINCIPAL_APP_ID> \
  --role Reader \
  --scope "/subscriptions/<SUBSCRIPTION_ID>"
  ```

  </TabItem>
</Tabs>

### Step 3: Save the Credentials in Vantage

1. Navigate to the [Integrations page](https://console.vantage.sh/settings/integrations) in the Vantage console, and add an Azure integration.
2. On the Azure integration page, click **Add Credentials**. 
3. Add the **Azure AD Tenant ID**, **Service Principal App ID**, and **Service Principal Password** you previously obtained, then click **Connect Account**. Vantage will begin importing your Azure costs. 

## Azure Cost and Rightsizing Recommendations

Vantage currently supports cost recommendations for Compute Reserved Instances and Compute Unattached Virtual Hard Disks (disks that have not been attached to a VM in the last 30 days). Each recommendation shows potential savings value, which is something that is not shown in Azure Advisor. Savings estimates are displayed in USD.

## Kubernetes and AKS

Vantage supports Kubernetes cost allocation on Azure, including Kubernetes clusters running on VMs or through AKS. Vantage recommends using the [Vantage Kubernetes agent](/kubernetes_agent) to monitor and ingest Kubernetes costs from Azure.

## Azure Reporting Dimensions

On Azure [Cost Reports](/cost_reports), you can filter across several dimensions:

- Resource Group
- Category
- Tagged/Not Tagged
- Subcategory
- Resource
- Region
- Subscription
- Service
