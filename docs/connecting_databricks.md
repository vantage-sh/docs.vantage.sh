---
id: connecting_databricks
title: Databricks
description: This page walks through how to integrate Vantage with your Databricks account.
keywords:
  - Databricks
  - Connect Databricks
---

# Databricks

Vantage connects to your Databricks account using a dedicated Serverless SQL warehouse to query `system` tables within a [Unity Catalog](https://docs.databricks.com/aws/en/data-governance/unity-catalog/get-started)-enabled workspace. Vantage requires only the Data Reader permission to access these system tables and does not have the ability to perform any write actions or administrative changes in your Databricks account.

You can perform the Databricks integration for each Databricks account you have or each region your Databricks account uses. Each integration you perform will collect data for all the workspaces within your Databricks account that are deployed within the same region.

[Usage data](/usage_based_reporting) is available for services that measure consumption, such as usage in DBUs ([Databricks Units](https://docs.databricks.com/aws/en/getting-started/concepts#billing-databricks-units-dbus)) or GBs.

## Databricks System Tables

[System tables](https://docs.databricks.com/aws/en/admin/system-tables/) are a set of Unity Catalog tables that expose operational and billing metadata. For cost monitoring, Vantage uses the following tables:

- `system.billing.usage`: contains SKU-level usage data by workspace.
- `system.billing.list_prices`: provides SKU-level list pricing.
- `system.billing.account_prices`: shows discounted prices for customers on enterprise agreements. 
:::note
This table is considered to be in [Private Preview](https://docs.databricks.com/aws/en/release-notes/release-types) through Databricks and may require you to work with your Databricks account team to enable it.
:::

- `system.compute.clusters`: contains metadata, like human-readable names, for clusters and custom tagging.
- `system.compute.warehouses`: contains metadata such as warehouse configuration, human-readable warehouse names, and custom tags.
- `system.access.workspace_latest`: contains human-readable names for workspaces.

## Migrate to the New Databricks Billing Integration {#migrate}

This section provides information about v1 and v2 of the Databricks integration in Vantage.

### What's Improved in the New Integration

Previously, Vantage ingested Databricks costs using Databricks billable usage logs (integration released in December 2022). These logs provided SKU-level usage but reflected only list pricing, and enterprise customers had to manually apply discounts in Vantage to approximate their actual costs.

The new integration (released in July 2025) uses the Databricks system tables and provides more accurate, granular cost data. Switching to this integration ensures your cloud cost data in Vantage is more complete, accurate, and reflective of your negotiated Databricks pricing.

Vantage recommends you perform the new integration to receive the most up-to-date billing data from Databricks, as new products will not be added to the former billable usage logs.

### What You Need to Know Before Migrating

Data availability for the new integration depends on:

- Your Databricks account’s creation date
- When system tables were enabled
- How long the data has been retained in your account

Databricks currently provides [one year of free retention](https://docs.databricks.com/aws/en/admin/system-tables/#which-system-tables-are-available), with plans to add configurable retention for system tables; however, backfills of system tables in Databricks will not be supported. 

:::tip
Run this query in your Databricks account to see the oldest full month of data available:

```sql
SELECT MIN(usage_date) as oldest_full_month
FROM system.billing.usage
WHERE DAY(usage_date) = 1;
```

:::

If your Vantage retention period extends further back than your available system tables data, you can continue to use the previous Vantage integration to maintain historical continuity.

To ensure data is not double-counted, Vantage will:

- Backfill your new Databricks Vantage integration as far back as the Databricks system tables contain data
- Remove any overlapping data from your old Databricks Vantage integration

### How to Migrate from the v1 Integration to v2

This integration guide provides the steps for migrating from v1 to v2. 

#### Step 1: Disable CUR Delivery to Vantage

1. Configure the [Databricks CLI](https://docs.databricks.com/en/dev-tools/cli/install.html) for account-level authentication. Follow the [user-to-machine authentication guide](https://docs.databricks.com/en/dev-tools/cli/authentication.html#u2m-auth) to ensure you have valid credentials.
   :::note
   The commands below assume you have followed Databricks’s instructions and have account-level access. Be sure to use the profile that corresponds with your Databricks account administrator.
   :::
2.  Disable the log delivery configuration named `vantage-billable-usage-delivery` using its `config_id`.

   ```bash
   # find log delivery with config_name = 'vantage-billable-usage-delivery'
   databricks account log-delivery list | jq '.[] | select(.config_name == "vantage-billable-usage-delivery" and .status == "ENABLED")'

   #disable log delivery
   databricks account log-delivery patch-status 
                        <config-id> 
                        --json '{ "status": "DISABLED" }' 
   ```

<details><summary>Click to view an example log delivery</summary>

```bash
  {
    "account_id": "90d61e57-21e1-482d-ad62-f98904e47a4b",
    "config_id": "d0bd8965-576c-11f0-8bd2-063fa5ec6fe1",
    "config_name": "vantage-billable-usage-delivery",
    "creation_time": 1751478531000,
    "credentials_id": "d8116e60-094f-4dce-a8e7-21b0f8fe1678",
    "delivery_path_prefix": "databricks/23c328cc-d58d-4cba-9b6a-5f1d061cdf69/90d61e57-21e1-482d-ad62-f98904e47a4b",
    "delivery_start_time": "2025-01",
    "log_delivery_status": {
      "last_attempt_time": "2025-07-29T12:57:06Z",
      "last_successful_attempt_time": "2025-07-29T12:57:06Z",
      "message": "All logs were successfully delivered.",
      "status": "SUCCEEDED"
    },
    "log_type": "BILLABLE_USAGE",
    "output_format": "CSV",
    "status": "DISABLED",
    "storage_configuration_id": "341a1551-0822-40d6-b6d0-9fbc3f78e906",
    "update_time": 1753857212000
  },
```

</details>

Once disabled, Databricks stops pushing data to a bucket, and it will no longer trigger any data ingests to Vantage.

#### Step 2: Set Up the v2 Integration

Follow the steps below to create a new Databricks integration, using one of the following methods: 

- [Manually via your Databricks account](/connecting_databricks#manual-integration)
- [Using a Terraform module](/connecting_databricks#terraform)

To view your v1 Databricks integration in Vantage, navigate to the [Integrations page](https://console.vantage.sh/settings/databricks). The integration is displayed with the label `V1 - Read Only`, and you’ll be unable to make updates to that integration in Vantage.

:::note
If you need to update any manually applied Databricks discounts on a v1 integration, contact [support@vantage.sh](mailto:support@vantage.sh).
:::

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Databricks v1 integration in read-only mode" width="90%" src="https://assets.vantage.sh/docs/connect-databricks/databricks-v1-integration.png" />
</div>

## Connect Your Databricks Account

You can connect to Databricks either [manually](/connecting_databricks#manual-integration) using the below workflow or using a [Terraform module](/connecting_databricks#terraform).

:::note
The Serverless SQL Warehouse required for the integration will incur a cost, estimated at approximately $84/month. Vantage uses the smallest possible Serverless SQL Warehouse to keep these costs minimal.
:::

### Prerequisites

- You need [account admin](https://docs.databricks.com/en/administration-guide/index.html) privileges in Databricks.
- A [Unity Catalog-enabled](https://docs.databricks.com/aws/en/data-governance/unity-catalog/get-started#how-do-i-know-if-my-workspace-was-enabled-for-unity-catalog) workspace.
   - Review [this page](https://docs.databricks.com/aws/en/data-governance/unity-catalog/manage-privileges/) from the Databricks documentation for additional information about permissions with Unity Catalog.
- [Create a free Vantage account](https://console.vantage.sh/signup), then follow the steps below to integrate Databricks costs.

:::note
Vantage will use the [following IP addresses](https://docs.vantage.sh/security#:~:text=Does%20Vantage%20use%20fixed%20IP%20addresses%20when%20connecting%20to%20external%20providers%2C%20such%20as%20AWS%20or%20Azure%3F) when connecting to your Databricks account.
:::

### Create the Connection {#manual-integration}

To integrate your Databricks account with Vantage, follow the below steps:

<table>
  <tr><td><b>1</b></td><td><a href="/connecting_databricks#step1">Collect your workspace and account credentials</a></td></tr>
  <tr><td><b>2</b></td><td><a href="/connecting_databricks#step2">Create a service principal</a></td></tr>
  <tr><td><b>3</b></td><td><a href="/connecting_databricks#step3">Create a serverless SQL warehouse and grant the service principal "Can Use" permissions on the warehouse</a></td></tr>
  <tr><td><b>4</b></td><td><a href="/connecting_databricks#step4">Grant the service principal Data Reader permissions on the system tables</a></td></tr>
  <tr><td><b>5</b></td><td><a href="/connecting_databricks#step5">Add resource IDs and account credentials to the Vantage integration form</a></td></tr>
</table>

### Step 1: Collect Credentials and Open Workspace {#step1}

1. Log in to the [Databricks console](https://accounts.cloud.databricks.com/).
2. From the top right of the console, click your avatar and copy your **Databricks Account ID** for later use.
   <details><summary>Click to view example image</summary>
   <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Copy Databricks Account ID" width="100%" src="https://assets.vantage.sh/docs/connect-databricks/databricks-1-1.png" />
   </div>
   </details>
3. Click **Workspaces**, then select a Unity Catalog-enabled workspace within your Databricks account.
4. Copy your **Workspace URL** for later use. Then, open the workspace.
   <details><summary>Click to view example image</summary>
   <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Copy Databricks workspace URL" width="100%" src="https://assets.vantage.sh/docs/connect-databricks/databricks-1-4.png" />
   </div>
   </details>

### Step 2: Create a Service Principal {#step2}

1. From the top right of the workspace, click your avatar and select **Settings**.
2. **On the Settings** screen, under **Workspace admin**, select **Identity and access**.
3. Next to **Service principals**, click **Manage**.
   <details><summary>Click to view example image</summary>
   <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Next to Service principals click manage" width="90%" src="https://assets.vantage.sh/docs/connect-databricks/databricks-2-3.png" />
   </div>
   </details>
4. Click **Add service principal**.
   - On the **Add new service principal** modal, click **Add new**.
   - For **Service principal name**, enter _vantage-billing-sp_.
   - Click **Add**.
   <details><summary>Click to view example image</summary>
   <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Add service principal" width="100%" src="https://assets.vantage.sh/docs/connect-databricks/databricks-2-4.png" />
   </div>
   </details>
5. Open the newly created service principal, then select the **Secrets** tab.
6. Click **Generate secret**.
7. Enter a secret **Lifetime** of 730 days, then click **Generate**. (When the secret expires, you'll need to create a new one and reconfigure the integration in Vantage with the corresponding secret and client ID.)
   <details><summary>Click to view example image</summary>
   <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Generate OAuth secret" width="90%" src="https://assets.vantage.sh/docs/connect-databricks/databricks-2-7.png" />
   </div>
   </details>
8. Your **Secret** and **Client ID** are displayed. Copy these values for later use.
   <details><summary>Click to view example image</summary>
   <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Copy client ID and secret" width="90%" src="https://assets.vantage.sh/docs/connect-databricks/databricks-2-8.png" />
   </div>
   </details>

### Step 3: Create a Serverless SQL Warehouse and Assign Permissions {#step3}

1. From the left navigation menu, under **SQL**, click **SQL Warehouses.**
2. Click **Create SQL warehouse**, and enter the following information:
   - For **Name,** enter _vantage-billing-warehouse_.
   - For **Cluster size**, select **2X-Small**.
   - For **Type**, select **Serverless**.
   <details><summary>Click to view example image</summary>
   <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Create a SQL warehouse" width="90%" src="https://assets.vantage.sh/docs/connect-databricks/databricks-3-2.png" />
   </div>
   </details>
3. Click **Create**.
4. After the warehouse is created, the **Manage permissions** modal window is displayed. (To access this modal, you can also click **Permissions** on the top right of the screen.)
5. Search for and select the **vantage-billing-sp** service principal.
6. Select the **Can Use** permission and click **Add**.
   <details><summary>Click to view example image</summary>
   <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Manage permissions for service principal" width="90%" src="https://assets.vantage.sh/docs/connect-databricks/databricks-3-6.png" />
   </div>
   </details>
7. Close the **Manage permissions** modal and copy your warehouse ID, displayed next to the warehouse name, for later use.
   <details><summary>Click to view example image</summary>
   <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Copy warehouse ID" width="90%" src="https://assets.vantage.sh/docs/connect-databricks/databricks-3-7.png" />
   </div>
   </details>

### Step 4: Grant Data Reader Permissions to the Service Principal {#step4}

1. From the top of the left navigation menu, click **Catalog**.
2. In the **Catalog** menu, expand **My Organization > system**.
3. Select the `access` schema. On the right, click **Permissions > Grant**.
   <details><summary>Click to view example image</summary>
   <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Add permissions to schemas" width="90%" src="https://assets.vantage.sh/docs/connect-databricks/databricks-4-3.png" />
   </div>
   </details>
4. Enter the following information to create a grant on `system.access`:
   - For **Principals**, select the **vantage-billing-sp** service principal.
   - For **Privilege presets**, select **Data Reader**.
5. Click **Confirm**.
   <details><summary>Click to view example image</summary>
   <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Manage permissions for service principal" width="90%" src="https://assets.vantage.sh/docs/connect-databricks/databricks-4-5.png" />
   </div>
   </details>
6. Repeat the last two steps and grant Data Reader permissions for the `billing` and `compute` schemas.

### Step 5: Add Credentials to Vantage {#step5}

1. From the Vantage console, navigate to the [Databricks Settings](https://console.vantage.sh/settings/databricks/) page.
2. Click the **Connect** tab, then click **Set Up Account**.
3. On the **Integration** modal screen, enter the following information:
   - For **Databricks Account ID**, enter your account ID that you obtained in [step 1](connecting_databricks#step1).
   - For **Service Principal OAuth Client ID** and **Service Principal OAuth Client Secret**, add the ID and secret you obtained in [step 2](connecting_databricks#step2).
   - For **Workspace URL**, add the URL you obtained in [step 1](connecting_databricks#step1).
   - For **SQL Warehouse ID**, add the warehouse ID you obtained in [step 3](connecting_databricks#step3).
4. Click **Connect Account**.

Costs will be ingested and processed as soon as you add the integration. Vantage will load the previous six months of Databricks usage data. It usually takes less than 15 minutes to ingest Databricks costs. As soon as they are processed, they will be available on your **All Resources** Cost Report.

If you decide to remove your Databricks integration from Vantage, all costs associated with your Databricks account will be removed from the Vantage console.

## Connect via Terraform {#terraform}

You can also connect your Databricks account using the `terraform-databricks-vantage-integration` module. Follow the steps in the module's [README](https://github.com/vantage-sh/terraform-databricks-vantage-integration) to connect your account.

## Next Steps: Manage Workspace Access

Once your costs are imported, select which workspaces this integration is associated with. See the [Workspaces](/workspaces#integration-workspace) documentation for information.

## Data Refresh

See the [provider data refresh documentation](/provider_data_refresh) for information on when data for each provider refreshes in Vantage.

## Databricks Reporting Dimensions

On Databricks [Cost Reports](/cost_reports), you can filter across several dimensions:

- Billing Account (e.g., Organization)
- Linked Account (e.g., Workspace)
- Service (e.g., Jobs Compute)
- Charge Type (e.g., Usage)
- Category (e.g., Photon)
- Resource ID (specific ID for a given Databricks resource)
- Tags (Tags from Databricks, see section below, and [Virtual Tags](/tagging) created in Vantage)

### Databricks Tags

The Tag filter contains values like job_id, which can be used to view costs for specific Databricks jobs. Vantage gets tags from `identity_metadata`, `usage_metadata`, and `custom_tags` from `system.billing_usage`; `workspace_name` from `system.access.workspaces_latest`; `cluster_name`, `tags`, and `driver_instance_pool_id` from `system.compute.clusters`; and `warehouse_channel`, `warehouse_type`, `warehouse_name` from `system.compute.warehouses`. Below is a list of tags Vantage ingests.

<details><summary>Click to view a list of tags Vantage ingests</summary>

- `cluster_id`
- `job_id`
- `warehouse_id`
- `instance_pool_id`
- `node_type`
- `job_run_id`
- `notebook_id`
- `dlt_pipeline_id`
- `endpoint_name`
- `endpoint_id`
- `dlt_update_id`
- `dlt_maintenace_id`
- `metastore_id`
- `run_name`
- `job_name`
- `notebook_path`
- `central_clean_room_id`
- `source_region`
- `destination_region`
- `app_id`
- `app_name`
- `private_endpoint_name`
- `budget_policy_id`
- `run_as`
- `sql_warehouse_own_by`
- `created_by`
- `workspace_name`
- `cluster_name`
- `cluster_own_by`
- `clusterNodeType`
- `warehouse_name`
- `warehouse_channel`
- `warehouse_type`
- `driver_instance_pool_id`

</details>