---
id: connecting_azure_ea
title: Azure EA Account
description: This page walks through how to connect your Azure EA account to Vantage.
keywords:
  - Azure EA
  - Connect Azure
---

# Azure EA Account

With the Azure EA integration, you allow the service principal to have access at the billing scope level.

:::note
When you configure this integration, the Vantage service principal is granted **enrollment reader** permissions. The service principal does _not_ have permissions—nor will it ever attempt—to make any changes to your infrastructure.
:::

To integrate your Azure EA account with Vantage, follow the below steps:

<table>
  <tr><td><b>1</b></td><td><a href="/connecting_azure_ea#ea-step1">Create a new application registration</a></td></tr>
  <tr><td><b>2</b></td><td><a href="/connecting_azure_ea#ea-step2">Generate a client secret</a></td></tr>
  <tr><td><b>3</b></td><td><a href="/connecting_azure_ea#ea-step3">Obtain your billing account ID</a></td></tr>
  <tr><td><b>4</b></td><td><a href="/connecting_azure_ea#ea-step4">Assign Enrollment Reader permission to the service principal</a></td></tr>
  <tr><td><b>5</b></td><td><a href="/connecting_azure_ea#ea-step5">Add app registration credentials to Vantage</a></td></tr>
  <tr><td><b>6</b></td><td><a href="/connecting_azure_ea#ea-step6">Send your billing account ID to Vantage</a></td></tr>
</table>

## Step 1: Create a New Application Registration {#ea-step1}

1.  From the main page of the Azure portal, search for and navigate to **Microsoft Entra ID**.
2.  In the left navigation, under **Manage**, select **App registrations**.
3.  Click **+ New registration**.
<details><summary>Expand to view example image</summary>
 <div>
 <img alt="Azure portal with App Registration menu option selected" width="100%" src="/img/connect-azure/azure-new-app-registration.png"/> </div>
 </details>
4.  The **Register an application** screen is displayed. For **Name**, enter _vantage_.
5.  Leave all other settings as their defaults and click **Register**.
<details><summary>Expand to view example image</summary>
<div>
<img alt="Azure portal the Register an application screen and vantage entered as app name" width="100%" src="/img/connect-azure/azure-register-app.png"/> </div>
</details>
6.  The app details are displayed. Record the **Application (client) ID** and **Directory (tenant) ID** to use later.
<details><summary>Expand to view example image</summary>
<div>
<img alt="Azure portal with the client ID and tenant ID displayed and highlighted" width="100%" src="/img/connect-azure/azure-app-ids.png"/> </div>
</details>

## Step 2: Generate a Client Secret {#ea-step2}

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
5. Click **Add**.
6. The newly created secret is displayed. Copy the secret's **Value** to add to the Vantage console later. This value will be displayed only one time.

## Step 3: Obtain Your Billing Account ID {#ea-step3}

1. Navigate to **Cost Management + Billing**.
2. On the left menu, click **Billing scopes** and select your **EA Billing Account** from the list.
3. On the left menu, click **Settings** > **Properties**.
4. Copy your **Billing account id** to [later send to Vantage](/connecting_azure_ea#ea-step6).

## Step 4: Assign Enrollment Reader Permission to the Service Principal {#ea-step4}

:::note
You need to have the **billing account owner** role permissions to assign enrollment reader permissions to the service principal. The below steps are based on the [Azure documentation](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/assign-roles-azure-service-principals).
:::

1. Navigate to **Microsoft Entra ID**, then select **Enterprise applications**.
2. From the **All applications** list, select the _vantage_ application you previously created.
   <details><summary>Expand to view example image</summary>
   <div>
   <img alt="Azure portal with all apps listed in Enterprise Applications" width="100%" src="/img/connect-azure/azure-ea-all-apps.png"/> </div>
   <i>Source: Microsoft</i>
   </details>
3. Under **Properties**, copy the **Application ID** and **Object ID**.
   <details><summary>Expand to view example image</summary>
   <div>
   <img alt="Azure portal with App and Object ID listed" width="100%" src="/img/connect-azure/azure-ea-app-id.png"/> </div>
   <i>Source: Microsoft</i>
   </details>
4. Open the [_Role Assignments - Put_ article](https://learn.microsoft.com/en-us/rest/api/billing/role-assignments/put?view=rest-billing-2019-10-01-preview&tabs=HTTP) from the Microsoft documentation in a new tab. 
5. Next to the _Create or update a billing role assignment_ step, click **Try It**.
   <details><summary>Expand to view example image</summary>
   <div>
   <img alt="Azure API role assignment sample call" width="100%" src="/img/connect-azure/azure-ea-role-assignment.png"/> </div>
   <i>Source: Microsoft</i>
   </details>
6. A login in screen is displayed on the right. Using your account credentials, log in to the tenant that you want to assign enrollment reader access.
7. An API request form is displayed. In the **Parameters** section add the following values:
   - `billingAccountName`: Add the **billing account ID** you obtained in [step 3](/connecting_azure_ea#ea-step3).
   - `billingRoleAssignmentName`: Generate a unique GUID using the [a GUID generator](https://guidgenerator.com/), as suggested by Microsoft.
   - `api-version`: Use `2019-10-01-preview`.
8. In the **Body** section, copy and paste the request body below. 
   ```json
   {
   "properties": {
      "principalId": "<YOUR_OBJECT_ID>",
      "principalTenantId": "<YOUR_TENANT_ID>",
      "roleDefinitionId": "/providers/Microsoft.Billing/billingAccounts/<YOUR_BILLING_ACCOUNT_ID>/billingRoleDefinitions/24f8edb6-1668-4659-b5e2-40bb5f3a7d7e"
   }
   }
   ```

9. Update placeholders in the **Body** as follows:
    - `principalId`: The **Object ID** you copied at the beginning of this section.
    - `principalTenantId`: Your **Directory (tenant) ID** that you copied in [step 1](/connecting_azure_ea#ea-step1).
    - `roleDefinitionId`: Replace `<YOUR_BILLING_ACCOUNT_ID>` with the **Billing account id** you copied in [step 3](/connecting_azure_ea#ea-step3). 
      - Note that `24f8edb6-1668-4659-b5e2-40bb5f3a7d7e` is the billing role definition ID for an [EnrollmentReader](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/assign-roles-azure-service-principals#permissions-that-can-be-assigned-to-the-service-principal).
   
   <details><summary>Expand to view example image</summary>
      <div>
      <img alt="Azure API role assignment parameters filled in" width="100%" src="/img/connect-azure/azure-ea-run.png"/> </div>
      <i>Source: Microsoft</i>
   </details>
   
10. Click **Run**. You should see a `200 OK` response, indicating that the request was successful. 
   :::tip
   If you receive an error, see the [Troubleshoot section](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/assign-roles-azure-service-principals#troubleshoot) of the Microsoft article these instructions were based on.
   :::

## Step 5: Add App Registration Credentials to Vantage {#ea-step5}

1. Navigate to the [Integrations page](https://console.vantage.sh/settings/integrations) in the Vantage console, and add an Azure integration.
2. On the Azure integration page, click **Add Credentials**.
3. Add the following credentials:
   - For **Azure AD Tenant ID**, add the **Directory (tenant) ID** you obtained in [step 1](/connecting_azure_ea#ea-step1).
   - For **Service Principal App ID**, add the **Application (client) ID** you obtained in [step 1](/connecting_azure_ea#ea-step1).
   - For **Service Principal Password**, add the client secret you obtained in [step 2](/connecting_azure_ea#ea-step2).
4. Click **Connect Account**.

Vantage will begin importing your Azure costs.

## Step 6: Send Your Billing Account ID to Vantage {#ea-step6}

Send the **Billing account id** you obtained in [step 3](/connecting_azure_ea#ea-step3) to [support@vantage.sh](mailto:support@vantage.sh) to complete the configuration. Indicate that you have set up an Azure integration and that you are a customer on an EA agreement.

## Next Steps: Workspace Access

See the [Workspace Access](/connecting_azure#workspace-access) section on the main _Connecting Azure_ page for information on how to assign this integration to one or more workspaces.
