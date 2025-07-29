---
id: connecting_databricks
title: Databricks
description: This page walks through how to integrate Vantage with your Databricks account.
keywords:
  - Databricks
  - Connect Databricks
---

# Databricks

Vantage integrates with your Databricks account through the use of [Billable Usage Logs](https://docs.databricks.com/administration-guide/account-settings/billable-usage-delivery.html). Vantage provides an S3 bucket for Databricks to periodically deliver usage logs. Databricks delivers cost-only data to the bucket, outlining the Databricks service used, usage in Databricks Units (DBU), and metadata related to workspace, cluster, and any related tags.

## Connect Your Databricks Account

### Prerequisites

- You need [account admin](https://docs.databricks.com/en/administration-guide/index.html) privileges in Databricks. 
- [Create a free Vantage account](https://console.vantage.sh/signup), then follow the steps below to integrate Databricks costs.

### Create the Connection

1. From the Vantage console, navigate to the [Databricks Settings](https://console.vantage.sh/settings/databricks/) page.
2. Click **Setup Account**.
3. Enter your **Databricks Account ID**.
   :::tip
   You can find your Databricks Account ID in the user profile dropdown of the [Databricks account console](https://accounts.cloud.databricks.com/login).
   :::
4. Click **Connect Account**.
5. On the [Databricks Settings](https://console.vantage.sh/settings/databricks/) page, you will see your account listed with a **Status** of `Pending`. Click `Pending` to complete the connection. Additional steps will be displayed on the **Finalize Your Databricks Account Setup** page. Keep this page open.

### Finalize Your Databricks Account Setup

Vantage will prepare an S3 bucket to store your Databricks [billable usage logs](https://docs.databricks.com/en/administration-guide/account-settings/usage.html#how-to-authenticate-to-the-account-api). You will need to configure Databricks to deliver your usage logs to that bucket.

1. Install or update the [Databricks CLI](https://docs.databricks.com/en/dev-tools/cli/install.html).
2. Configure authentication for the Databricks CLI:
   :::info
   The below steps are based on the [OAuth user-to-machine (U2M) authentication](https://docs.databricks.com/en/dev-tools/cli/authentication.html#oauth-user-to-machine-u2m-authentication) Databricks documentation.
   :::

   Create `~/.databrickscfg`. Replace `<ACCOUNT_ID>` with the value of your Databricks account. (See the Databricks documentation for how to [locate your account ID](https://docs.databricks.com/en/administration-guide/account-settings/index.html#account-id).) Replace the `<ADMIN_USERNAME>` and `<ADMIN_PASSWORD>` with your account administrator user's credentials.

   ```bash
   [production]
   host       = accounts.cloud.databricks.com
   account_id = <ACCOUNT_ID>
   username   = <ADMIN_USERNAME>
   password   = <ADMIN_PASSWORD>
   ```

3. Initiate OAuth token management with the following command, replacing `ACCOUNT_ID` with the account ID you used in the last step:

   ```bash
   databricks auth login --host https://accounts.cloud.databricks.com/ --account-id <ACCOUNT_ID>
   ```

4. Follow the remaining instructions provided on the **Finalize Your Databricks Account Setup** page in Vantage. These instructions will walk you step by step through creating a storage configuration, creating a credential configuration, and creating a log delivery configuration to finalize the integration.

After completing all the steps above, your Databricks integration status should automatically update from `Pending` to `Importing`. Once fully imported, the status will update to `Imported`. You can view your connection status on the [Databricks Settings](https://console.vantage.sh/settings/databricks/) page.

Databricks generally delivers usage logs once per day.

### Connect via Terraform

You can also connect your Databricks account using the `terraform-databricks-vantage-integration` module. Follow the steps in the module's [README](https://github.com/vantage-sh/terraform-databricks-vantage-integration) to connect your account. 

### Next Steps: Manage Workspace Access

Once your costs are imported, select which workspaces this integration is associated with. See the [Workspaces](/workspaces#integration-workspace) documentation for information.

## Data Refresh

See the [provider data refresh documentation](/provider_data_refresh) for information on when data for each provider refreshes in Vantage.

## Custom Pricing in Databricks {#custom-pricing}

From the [Databricks integration page](https://console.vantage.sh/settings/databricks), you can set custom discounts on Databricks [SKU groups](https://www.databricks.com/product/sku-groups). Once the discounts are saved, the discounted rate is applied, and Cost Reports are automatically updated to reflect the newly discounted prices. Currently, only AWS is supported. If you are using Databricks on Azure, these discounts are reflected in your Azure billing data, and a Databricks integration is not required.

The following Databricks SKU groups are supported:

- AWS Jobs Compute
- AWS Jobs Compute Photon
- AWS All-Purpose Compute
- AWS All-Purpose Compute Photon
- AWS SQL Compute
- AWS DLT Compute
- AWS DLT Compute Photon
- AWS Serverless SQL Compute
- AWS Serverless Inference
- AWS Model Training

:::note
At this time, the AWS Security and Compliance SKU group is not supported. 
:::

To add custom pricing for SKU groups:

1. From the top navigation, click **Settings**.
2. From the side navigation, click **Integrations**.
3. The **Connected Providers** page is displayed. Select the **Databricks** integration.
4. On the **Manage** tab, select a connected account. 
5. In the **Custom Discounts** section, click **+ Add a Discount**. 
6. For **Service Name**, select a SKU group from the list. 
7. For **Your Discount**, enter a discount as a percentage.
   <details><summary>Click to view example image</summary>
   <div style={{display:"flex", justifyContent:"center"}}>
      <img alt="A list of three different Databricks SKU discounts in the console. " width="80%" src="https://assets.vantage.sh/docs/databricks-skus.png" />
   </div>
   </details>
8. To add another SKU group discount, click **+ Add a Discount**. When you are finished, click **Save**.

Once the discounts are saved, all existing cost data for the integration is re-processed. The status of each billing period is displayed on the integration page. Once the data is processed, any corresponding reports are automatically refreshed. The refresh process may take up to an hour until they are displayed on all reports.

## Databricks Reporting Dimensions

On Databricks [Cost Reports](/cost_reports/), you can filter across several dimensions:

- Account (account name)
- Category (e.g., Jobs Compute - Photon)
- Tag/Not Tagged (includes Databricks tags and [virtual tags](/tagging) created in Vantage for this provider)
- Cluster (e.g., Jobs Compute - `<CLUSTER_ID>`)
- Charge Type (e.g., Usage)
- Service (e.g., All Purpose Compute)

:::note
The **Tag** filter contains values like `JobID`, which can be used to view costs for specific Databricks jobs.
:::
