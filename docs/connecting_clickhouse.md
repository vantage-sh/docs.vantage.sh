---
id: connecting_clickhouse
title: ClickHouse Cloud
description: This page walks through how to integrate Vantage with your ClickHouse Cloud account.
keywords:
  - Grafana
  - Connect ClickHouse Cloud
---

# ClickHouse Cloud

Vantage connects to your ClickHouse Cloud account via a read-only API key with Developer permissions to ingest ClickHouse usage, costs, and discounts from ClickHouse’s Organization [usageCost API](https://clickhouse.com/docs/cloud/manage/api/usageCost-api-reference).  Vantage displays ClickHouse Cloud costs and associated [usage metrics](/usage_based_reporting).

:::note
The Clickhouse Organizations usageCost API only supports ClickHouse Cloud and Bring Your Own Cloud (BYOC).
:::

You can view usage data for ClickHouse Cloud consumption. Usage is measured by the following subcategories:

- Compute
- Storage
- [Data transfer](https://clickhouse.com/docs/cloud/manage/network-data-transfer) (egress over the internet and cross-region)
- [ClickPipes](https://clickhouse.com/docs/integrations/clickpipes)

Usage is measured in ClickHouse Cloud Credits (CHCs), which is a metering unit used by ClickHouse.  

:::info
You can learn more about CHCs through [ClickHouse Billing documentation](https://clickhouse.com/docs/en/cloud/manage/jan-2025-faq/billing).
:::

You can integrate multiple ClickHouse Cloud integrations by providing read-only tokens for multiple organizations.

## Connect Your ClickHouse Cloud Account

### Prerequisites

Create a free Vantage account, then follow the steps below to integrate ClickHouse Cloud costs.

:::note
Vantage cannot perform writes to your ClickHouse Cloud organization. Vantage is only able to see metadata associated with your usage.
:::

### Create the Connection

:::note
The below instructions for creating an API key are based on the [ClickHouse documentation](https://clickhouse.com/docs/cloud/manage/openapi).
:::

1. In the ClickHouse Cloud console, navigate to the **Settings** menu. Then, select **API keys**. 
2. Click **+ New API key**.
    <details><summary>Expand to view example image</summary>
      <div>
      <img alt="ClickHouse API Key screen" width="100%" src="/img/clickhouse-api.png"/> </div>
    </details>
3. Add the following key details:
   - For **API key name**, enter *vantage*.
   - For **Organization Permissions**, select **Developer**. (You can read more about roles and permissions in the [ClickHouse documentation](https://clickhouse.com/docs/cloud/security/cloud-access-management/overview).)
   - For **Expires**, select **Never**.
   
  <details><summary>Expand to view example image</summary>
    <div>
    <img alt="Creating a ClickHouse key" width="100%" src="/img/clickhouse-create-key.png"/> </div>
  </details>
4. Click **Generate API Key**.
5. Copy the newly generated **Key ID** and **Key Secret**.
    <details><summary>Expand to view example image</summary>
      <div>
      <img alt="Copying ClickHouse key and secret" width="100%" src="/img/clickhouse-key-secret.png"/> </div>
    </details>
6. From the top navigation in Vantage, click **Settings**.
7. On the left navigation, select **Integrations** and select **ClickHouse Cloud**.
8. The ClickHouse Cloud integrations page is displayed. Ensure you are on the **Connect** tab.
9. At the bottom of the page, click **Add API Key** and paste your newly generated API key and secret.
10. For **Organization ID**, add the ClickHouse Cloud Organization ID that was assigned to your organization during creation. To find this ID:
    - From the **Settings** navigation menu, under **Organization**, select your organization and click **Organization details**.
    - Copy the value displayed next to **Organization ID** and paste this in the Vantage integration form.
 
  <details><summary>Expand to view example image</summary>
    <div>
    <img alt="Copying ClickHouse Organization ID" width="100%" src="/img/clickhouse-org-id.png"/> </div>
  </details>
1.  Click **Connect Account**.

Costs will be ingested and processed as soon as you add the integration. It usually takes less than 15 minutes to ingest ClickHouse Cloud costs. As soon as they are processed, they will be available on your All Resources Cost Report. If you decide to remove your ClickHouse Cloud integration from Vantage, all costs associated with your ClickHouse Cloud API key will be removed from the Vantage console.

### Next Steps: Manage Workspace Access

Once your costs are imported, select which workspaces this integration is associated with. See the [Workspaces](/workspaces#integration-workspace) documentation for information.

## Data Refresh

See the [provider data refresh documentation](/provider_data_refresh) for information on when data for each provider refreshes in Vantage.

## Active Resources[](https://docs.vantage.sh/connecting_planetscale#active-resources)

ClickHouse Cloud services are synced as active resources and available in [resource reports](/active_resources).

## ClickHouse Cloud Reporting Dimensions[](https://docs.vantage.sh/connecting_grafana#grafana-reporting-dimensions)

On ClickHouse Cloud [Cost Reports](/cost_reports), you can filter across several dimensions:

- Organization (i.e., billing account)
- Service (e.g., ClickHouse Cloud)
- Category (e.g., datawarehouse or service)
- Subcategory (e.g., specific usage category, like `interRegionTier1DataTransferCHC` or `publicDataTransferCHC`)
- Resource (specific ID for a given ClickHouse cluster)
- Tags ([Virtual Tags](/tagging) created in Vantage)
- Charge Type (e.g., usage)

You can also view credits or discounts for ClickHouse Cloud costs in Cost Reports.

1. At the top of any ClickHouse Cloud Cost Report, click **Settings**.
2. Then, toggle on/off **Credits** and/or **Discounts**.