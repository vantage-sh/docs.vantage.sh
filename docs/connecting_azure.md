---
id: connecting_azure
title: Azure
description: This page walks through how to connect your Azure account to Vantage.
keywords:
  - Azure
  - Connect Azure
toc_max_heading_level: 4
---

# Azure

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Vantage integrates with your Azure account using an Active Directory [Service Principal](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/service-accounts-principal). This principal is then assigned access to either [management groups](https://learn.microsoft.com/en-us/azure/governance/management-groups/overview) or individual [subscriptions](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org-subscriptions).

You can connect hundreds of Azure subscriptions to Vantage through the management group method. Any subscriptions that are part of a [resource group](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal) will be automatically imported.

:::note
The service principal is granted [Reader](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#reader) permissions. It does **not** have permissions—nor will it ever attempt—to make any changes to your infrastructure.
:::

## Connect Your Azure Account 

:::tip
Instructions are provided below for you to connect via the [Azure CLI](/connecting_azure#azure-cli) or the [Azure portal](/connecting_azure#azure-portal).
:::

### Connect via the Azure CLI {#azure-cli}

#### Prerequisites

- The below commands are run via the [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/?view=azure-cli-latest). Ensure you have access to Azure CLI and can create service principals and manage their permissions. 
- [Create a free Vantage account](https://console.vantage.sh/signup), then follow the steps below to integrate Azure costs.

#### Step 1: Create an Azure Service Principal

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

Record the `appId`, `password`, and `tenant` as you will enter these credentials into the Vantage console.

#### Step 2: Grant the Service Principal Permissions {#granting-the-service-principal-permissions}

:::note
Vantage recommends assigning permissions to a management group that aggregates your subscriptions. By following this recommendation, you do not have to manually assign each subscription.
:::

Grant permissions to the `appId` from the service principal created above. The scope can be a subscription or management group. Ensure you replace `<SERVICE_PRINCIPAL_APP_ID>` with the `appId`. Replace `<MANAGEMENT_GROUP_ID>` (or `<SUBSCRIPTION_ID>`) with your management group ID (or subscription ID). 

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

Skip to the [Save the Credentials in Vantage](/connecting_azure#save-credentials) section for the steps to complete the connection with Vantage.


### Connect via the Azure Portal {#azure-portal}

#### Prerequisites

- The below instructions are for connecting using the Azure portal. If you already completed the steps via the Azure CLI, skip to the [Save the Credentials in Vantage](/connecting_azure#save-credentials) section. You should have access to set up service principals and grant those service principals permissions. 
- [Create a free Vantage account](https://console.vantage.sh/signup), then follow the steps below to integrate Azure costs.

#### Step 1: Create a New Application Registration

 1. From the main page of the Azure portal, search for and navigate to **Microsoft Entra ID**. 
 2. In the left navigation, under **Manage**, select **App registrations**.
 3. Click **+ New registration**. 
  <details><summary>Expand to view example image</summary>
   <div>
   <img alt="Azure portal with App Registration menu option selected" width="100%" src="/img/connect-azure/azure-new-app-registration.png"/> </div>
   </details>
 4. The **Register an application** screen is displayed. For **Name**, enter _vantage_.
 5. Leave all other settings as their defaults and click **Register**. 
   <details><summary>Expand to view example image</summary>
   <div>
   <img alt="Azure portal the Register an application screen and vantage entered as app name" width="100%" src="/img/connect-azure/azure-register-app.png"/> </div>
   </details>
 6. The app details are displayed. Record the **Application (client) ID** and **Directory (tenant) ID** to use later.
   <details><summary>Expand to view example image</summary>
   <div>
   <img alt="Azure portal with the client ID and tenant ID displayed and highlighted" width="100%" src="/img/connect-azure/azure-app-ids.png"/> </div>
   </details>

#### Step 2: Generate a Client Secret

1. On the same page, next to the **Client credentials** field, click **Add a certificate or secret**. (You can also access the **Certificates and secrets** screen from the left navigation menu.)
2. Click **+ New client secret**. 
3. The **Add a client secret** pane is displayed. For **Description**, enter a description, such as _vantage-secret_. 
   <details><summary>Expand to view example image</summary>
   <div>
   <img alt="Azure portal with the Azure client secret window open and a new secreted created called vantage-secret" width="100%" src="/img/connect-azure/azure-client-secret.png"/> </div>
   </details>
4. For **Expires**, select an expiration option for the secret.
  :::caution
  If this secret expires, you will need to supply Vantage with a new secret _before_ the expiration date.
  :::
1. Click **Add**.
2. The newly created secret is displayed. Copy the secret's **Value** to add to the Vantage console later. This value will be displayed only one time.

#### Step 3: Grant the Service Principal Permissions 

:::note
Vantage recommends assigning permissions to a management group that aggregates your subscriptions. By following this recommendation, you do not have to manually assign each subscription.
:::

1. From the top navigation, search for and navigate to **Management groups**. (If you want to assign permissions to a subscription, navigate to **Subscriptions**.)
2. Open the management group for which you will be assigning permissions.  
3. On the left navigation, click **Access control (IAM)**. 
4. Click **Add role assignment**. 
   <details><summary>Expand to view example image</summary>
   <div>
   <img alt="Azure portal with management group window open. The Access control tab is highlighted." width="100%" src="/img/connect-azure/azure-add-role-assign.png"/> </div>
   </details>
5. On the **Add role assignment** screen, select **Reader**. Then, click **Next**. 
   <details><summary>Expand to view example image</summary>
   <div>
   <img alt="Azure portal with Reader role highlighted" width="100%" src="/img/connect-azure/azure-add-reader-role.png"/> </div>
   </details>
6. For **Assign access to**, select **User, group, or service principal**.
7. Click **+ Select members**. The **Select members** tab is displayed on the right. Search for the _vantage_ app you created before. Select the listed app, then click **Select**.
   <details><summary>Expand to view example image</summary>
   <div>
   <img alt="Azure portal with Add role assignment window displayed" width="100%" src="/img/connect-azure/azure-add-role-assignment.png"/> </div>
   </details>
8. Click **Next** > **Review + assign**. 

### Save the Credentials in Vantage {#save-credentials}

After you complete the steps for connecting via the Azure CLI or Azure portal, follow the steps below to add the Azure tenant ID, service principal App ID, and service principal password/secret in Vantage. 

1. Navigate to the [Integrations page](https://console.vantage.sh/settings/integrations) in the Vantage console, and add an Azure integration.
2. On the Azure integration page, click **Add Credentials**. 
3. Add the **Azure AD Tenant ID**, **Service Principal App ID**, and **Service Principal Password** you previously obtained, then click **Connect Account**. Vantage will begin importing your Azure costs. 
4. See the [Workspace Access](/connecting_azure#workspace-access) section below for some additional steps.

## Azure MCA Customers: Additional Integration Steps {#azure-mca}

If you currently have an [Microsoft Customer Agreement (MCA) account](https://learn.microsoft.com/en-us/azure/cost-management-billing/understand/mca-overview), after you complete the steps above, you need to follow the additional steps below to ensure Vantage pulls data from this top-level billing scope instead of pulling data subscription by subscription. With these additional steps, you will allow the service principal to have access at the billing scope level.

### Step 1: Obtain Your Billing Account ID

1. In Azure, navigate to **Cost Management + Billing**.
2. On the left menu, click **Billing scopes**. 
3. Select your **MCA Billing Account** from the list. 
4. On the left menu, click **Settings** > **Properties**. 
5. Copy your **Billing account id** to later send to Vantage.

### Step 2: Assign the Billing Account Reader Role to the Service Principal

1. From the left menu, select **Access Control (IAM)**.
2. At the top, click **Add**.
3. On the right **Add role assignment** menu, select **Billing account reader**. 
4. Under **Users, groups, or apps**, select the `vantage` service principal you previously created.
  :::note 
  If you already have a Billing Reader group, add the `vantage` service principal as a new member.
  :::
5. Click **Add**.

### Step 3: Send Your Billing Account ID to Vantage

Send the **Billing account id** you previously copied to [support@vantage.sh](mailto:support@vantage.sh). 
- Indicate that you have set up an Azure integration and that you are a customer on an MCA agreement. 
- In addition, indicate whether you want your Azure costs set to amortized or actual (unamortized). Note that with amortization, Reserved Instances and Savings Plans are visible.

## Next Steps: Manage Workspace Access {#workspace-access}

Once your costs are imported, select which workspaces this integration is associated with. See the [Workspaces](/workspaces#integration-workspace) documentation for information.

## Data Refresh

See the [provider data refresh documentation](/provider_data_refresh) for information on when data for each provider refreshes in Vantage.

## Azure Cost Recommendations

Vantage provides different [cost recommendations](/cost_recommendations) for Azure. Each recommendation includes a potential monthly savings value, which is something that is not shown in Azure Advisor. Savings estimates are displayed in USD.

## Kubernetes and AKS

Vantage supports Kubernetes cost allocation on Azure, including Kubernetes clusters running on VMs or through AKS. Vantage recommends using the [Vantage Kubernetes agent](/kubernetes_agent) to monitor and ingest Kubernetes costs from Azure.

## Azure Reporting Dimensions

On Azure [Cost Reports](/cost_reports), you can filter across several dimensions:

- Resource Group (resource group name)
- Category (e.g., Virtual Network IP Addresses)
- Tag/Not Tagged (includes Azure tags and [virtual tags](/tagging) created in Vantage for this provider)
- Subcategory (e.g., Virtual Network Standard IPv4 Static Public IP)
- Resource (resource ID)
- Region (e.g., Us East)
- Charge Type (e.g., Usage)
- Subscription (subscription name)
- Marketplace (Toggle to show only Marketplace purchases or excluded) 
- Service (e.g., Virtual Machines)
