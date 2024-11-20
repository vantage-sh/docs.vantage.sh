---
id: connecting_linode
title: Linode
description: This page walks through how to integrate Vantage with your Linode account.
keywords:
  - Linode
  - Akamai Connected Cloud
  - Connect Linode
---

# Linode from Akamai Connected Cloud

Vantage uses a read-only API key to ingest Linode from Akamai Connected Cloud costs and discounts as invoices become available. Vantage also uses service-specific APIs to enrich cost data with additional resource-specific metadata.

:::note
Vantage cannot and will not perform writes to your Linode account and can see only metadata associated with your usage.
:::

With the Vantage–Linode integration, you can track costs for Kubernetes Clusters, Linode Instances, Node Balancers, Object Storage, Images, and Storage Volumes.

## Linode Kubernetes Clusters

You can install the Vantage Kubernetes Agent on Linode Kubernetes Clusters to see detailed insights into real-time cluster resource utilization, efficiency, and cost allocation. See the [agent documentation](https://docs.vantage.sh/kubernetes_agent) for details on how to set up the agent.

## Connect Your Linode Account

### Prerequisites

[Create a free Vantage account](https://console.vantage.sh/signup), then follow the steps below to connect to Linode.

:::note
You can create multiple Linode integrations by providing read-only API keys for multiple accounts.
:::

### Create the Connection

:::info
These instructions are a condensed version of the instructions on Linode’s [documentation](https://techdocs.akamai.com/cloud-computing/docs/manage-personal-access-tokens).
:::

1. Log in to [Akamai Cloud Manager](https://cloud.linode.com/).
2. Navigate to your Linode profile's [API token page](https://cloud.linode.com/profile/tokens). You can also access this page by selecting your user profile at the top. Then, under **My Profile**, \***\*select **API Tokens\*\*.
3. Click **Create Personal Access Token**.
4. Enter the following information:
   1. For **Label**, enter something that identifies this token, such as _Vantage Integration_.
   2. For **Expiry**, select **Never**.
   3. For **Access**, select **Read Only** for all items except VPCs. For **VPCs**, select **No Access**.
5. Click **Create Token**. Your Personal Access Token is displayed once. Copy this token to use in your Vantage integration.
6. From the top navigation in Vantage, click **Settings**.
7. On the left navigation, select **Integrations** and **s**elect **Linode**.
8. The Linode integrations page is displayed. Ensure you are on the **Connect** tab.
9. At the bottom of the page, click **Add API Key**.
10. For **API key**, add your previously generated Personal Access Token.
11. For **Description**, you can use your name or any other descriptor here to identify that you've added this integration.
12. Click **Connect Account**.

Costs will be ingested and processed as soon as you add the integration. It usually takes less than 15 minutes to ingest Linode costs. As soon as they are processed, they will be available on your All Resources Cost Report. If you decide to remove your Linode integration from Vantage, all costs associated with your Linode API token will be removed from the Vantage console.

### Next Steps: Manage Workspace Access

Once your costs are imported, select which workspaces this integration is associated with. See the [Workspaces](/workspaces#integration-workspace) documentation for information.

## Data Refresh

See the [provider data refresh documentation](/provider_data_refresh) for information on when data for each provider refreshes in Vantage.

## Linode Reporting Dimensions

On Linode [Cost Reports](/cost_reports/), you can filter costs across several dimensions:

- Category (e.g., Linode Instance - Compute)
- Subcategory (e.g., Linode Instance - Dedicated 16GB)
- Tag ([Virtual Tags](https://docs.vantage.sh/virtual_tagging) created in Vantage for this provider)
- Resource (e.g., specific resource names)
- Charge Type (e.g., Usage or Discount)
- Service (e.g., Node Balancer)

You can also view credits, discounts, refunds, and taxes for Linode costs in Cost Reports.

1. At the top of any Linode Cost Report, click **Settings**.
2. Then, toggle on/off these options.

## Active Resources

The following Linode resources are synced as active resources and available in [Resource Reports](https://docs.vantage.sh/active_resources).

- Linode Instances
- Linode Kubernetes Clusters
- Volumes
- Object Storage
- Images
- NodeBalancers
