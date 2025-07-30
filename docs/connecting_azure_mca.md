---
id: connecting_azure_mca
title: Azure MCA Account
description: This page walks through how to connect your Azure MCA account to Vantage.
keywords:
  - Azure MCA
  - Connect Azure
---

# Azure MCA Account

With the Azure MCA integration, you allow the Vantage service principal to have access at the billing scope level.

:::note
When you configure this integration, the Vantage service principal is granted **billing account reader** permissions. The service principal does _not_ have permissions—nor will it ever attempt—to make any changes to your infrastructure.
:::

To integrate your Azure MCA account with Vantage, follow the below steps:

<table>
  <tr><td><b>1</b></td><td><a href="/connecting_azure_mca#mca-step1">Create a new application registration</a></td></tr>
  <tr><td><b>2</b></td><td><a href="/connecting_azure_mca#mca-step2">Generate a client secret</a></td></tr>
  <tr><td><b>3</b></td><td><a href="/connecting_azure_mca#mca-step3">Obtain your billing account ID</a></td></tr>
  <tr><td><b>4</b></td><td><a href="/connecting_azure_mca#mca-step4">Assign the billing account reader role to the service principal</a></td></tr>
  <tr><td><b>5</b></td><td><a href="/connecting_azure_mca#mca-step5">Add app registration credentials to the Vantage console</a></td></tr>
</table>

## Step 1: Create a New Application Registration {#mca-step1}

1.  From the main page of the Azure portal, search for and navigate to **Microsoft Entra ID**.
2.  In the left navigation, under **Manage**, select **App registrations**.
3.  Click **+ New registration**.
<details><summary>Click to view example image</summary>
 <div>
 <img alt="Azure portal with App Registration menu option selected" width="100%" src="https://assets.vantage.sh/docs/connect-azure/azure-new-app-registration.png"/> </div>
 </details>
4.  The **Register an application** screen is displayed. For **Name**, enter _vantage_.
5.  Leave all other settings as their defaults and click **Register**.
<details><summary>Click to view example image</summary>
<div>
<img alt="Azure portal the Register an application screen and vantage entered as app name" width="100%" src="https://assets.vantage.sh/docs/connect-azure/azure-register-app.png"/> </div>
</details>
6.  The app details are displayed. Record the **Application (client) ID** and **Directory (tenant) ID** to use later.
<details><summary>Click to view example image</summary>
<div>
<img alt="Azure portal with the client ID and tenant ID displayed and highlighted" width="100%" src="https://assets.vantage.sh/docs/connect-azure/azure-app-ids.png"/> </div>
</details>

## Step 2: Generate a Client Secret {#mca-step2}

1. On the same page, next to the **Client credentials** field, click **Add a certificate or secret**. (You can also access the **Certificates and secrets** screen from the left navigation menu.)
2. Click **+ New client secret**.
3. The **Add a client secret** pane is displayed. For **Description**, enter a description, such as _vantage-secret_.
   <details><summary>Click to view example image</summary>
   <div>
   <img alt="Azure portal with the Azure client secret window open and a new secreted created called vantage-secret" width="100%" src="https://assets.vantage.sh/docs/connect-azure/azure-client-secret.png"/> </div>
   </details>
4. For **Expires**, select an expiration option for the secret.
   :::caution
   If this secret expires, you will need to supply Vantage with a new secret _before_ the expiration date.
   :::
5. Click **Add**.
6. The newly created secret is displayed. Copy the secret's **Value** to add to the Vantage console later. This value will be displayed only one time.

## Step 3: Obtain Your Billing Account ID {#mca-step3}

1. Navigate to **Cost Management + Billing**.
2. On the left menu, click **Billing scopes** and select your **MCA Billing Account** from the list.
3. On the left menu, click **Settings** > **Properties**.
4. Copy your **Billing account id** to add to the Vantage console later.
<details><summary>Click to view example image</summary>
<div>
<img alt="Azure portal with the billing account id highlighted" width="100%" src="https://assets.vantage.sh/docs/connect-azure/azure-billing-id.png"/> </div>
<i>Source: Microsoft</i>
</details>

## Step 4: Assign the Billing Account Reader Role to the Service Principal {#mca-step4}

1. From the left menu, select **Access Control (IAM)**.
2. At the top, click **Add**.
3. On the right **Add role assignment** pane, select **Billing account reader**.
<details><summary>Click to view example image</summary>
<div>
<img alt="Adding the billing account reader role for the service principal" width="100%" src="https://assets.vantage.sh/docs/connect-azure/azure-billing-account-reader.png"/> </div>
</details>
4. Under **Users, groups, or apps**, search for and select the _vantage_ service principal that was generated when you created the app registration in [step 1](/connecting_azure_mca#mca-step1).
5. Click **Add**.

## Step 5: Add App Registration Credentials to Vantage {#mca-step5}

1. Navigate to the [Integrations page](https://console.vantage.sh/settings/integrations) in the Vantage console, and add an Azure integration.
2. On the Azure integration page, click **Add Credentials**.
3. Add the following credentials:
   - For **Azure AD Tenant ID**, add the **Directory (tenant) ID** you obtained in [step 1](/connecting_azure_mca#mca-step1).
   - For **Service Principal App ID**, add the **Application (client) ID** you obtained in [step 1](/connecting_azure_mca#mca-step1).
   - For **Service Principal Password**, add the client secret you obtained in [step 2](/connecting_azure_mca#mca-step2).
   - For **Billing Account Id**, add the **Billing Account Id** you obtained in [step 3](/connecting_azure_ea#mca-step3).
4. Click **Connect Account**.

Vantage will begin importing your Azure costs.

## Next Steps: Workspace Access

See the [Workspace Access](/connecting_azure#workspace-access) section on the main _Connecting Azure_ page for information on how to assign this integration to one or more workspaces.