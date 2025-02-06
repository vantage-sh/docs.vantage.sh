---
id: connecting_grafana
title: Grafana Cloud
description: This page walks through how to integrate Vantage with your Grafana account.
keywords:
  - Grafana
  - Connect Grafana
---

# Grafana Cloud

Vantage connects to your Grafana Cloud account via a customer-generated read-only token attached to a cloud access policy, which allows Vantage to ingest Grafana Cloud usage costs. Vantage displays Grafana Cloud costs and associated [usage metrics](/usage_based_reporting), like GB of Traces, Log Retention GB-Month, or number of Incident Response and Management Users, directly in line with other infrastructure costs.

You can integrate multiple Grafana Cloud integrations by providing read-only tokens for multiple organizations.

## Connect Your Grafana Cloud Account

### Prerequisites

[Create a free Vantage account](https://console.vantage.sh/signup), then follow the steps below to integrate Grafana Cloud costs.

:::note
Vantage cannot perform writes to your Grafana Cloud organization. Vantage is only able to see metadata associated with your usage.
:::

### Create the Connection

1. From your Grafana instance, navigate to the **Cloud access policies** page.
2. At the top of the page, click **Create access policy**.
3. For **Display name** and **Name**, enter _vantage_.
4. Under **Scopes**, add the `billing-metrics:read` and `orgs:read` scopes. (You may need to search for scopes in the **Add scope** search box below the checklist.)
      <details><summary>Expand to view example image</summary>
   <div>
   <img alt="Grafana cloud access policy screen" width="60%" src="/img/grafana-cap.png"/> </div>
   </details>

   :::note
   If you have any IP restrictions on this instance, ensure you allow the following IP addresses for Vantage:
   - `54.87.66.45`
   - `3.95.43.133`
   - `54.162.3.72`
   - `44.199.143.63`
   - `3.218.103.23`
   :::
5. Click **Create**.
6. The new access policy is created. On the access policy tile, click **Add token**.
7. Give the token a name and set the expiration to no expiry.
8. Click **Create**, then copy the new token.
9.  From the top navigation in Vantage, click **Settings**.
10. On the left navigation, select **Integrations** and select **Grafana Cloud**.
11. The Grafana Cloud integrations page is displayed. Ensure you are on the **Connect** tab.
12. At the bottom of the page, click **Add API Key** and paste your newly generated token.
13. For **Organization slug**, enter the organization name that appears in your Grafana organization URL (e.g., in `https://grafana.com/orgs/vantagesh`, enter only `vantagesh`).
14. Click **Connect Account**.

Costs will be ingested and processed as soon as you add the integration. It usually takes less than 15 minutes to ingest Grafana Cloud costs. As soon as they are processed, they will be available on your All Resources Cost Report. If you decide to remove your Grafana Cloud integration from Vantage, all costs associated with your Grafana Cloud API key will be removed from the Vantage console.

### Next Steps: Manage Workspace Access

Once your costs are imported, select which workspaces this integration is associated with. See the [Workspaces](/workspaces#integration-workspace) documentation for information.

## Data Refresh

See the [provider data refresh documentation](/provider_data_refresh) for information on when data for each provider refreshes in Vantage.

## Grafana Costs on Cost Reports 

Due to Grafana’s billing process, billing data for the current month becomes available only on the 1st of the following month. Grafana Cloud costs are not amortized across the month; therefore, it is recommended that you view Grafana costs and usage using the **Monthly** date binning.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="" width="90%" src="/img/grafana-report.png" />
</div>

## Grafana Reporting Dimensions

On Grafana [Cost Reports](/cost_reports), you can filter across several dimensions:

- Service (e.g., Metrics, Traces, Logs)
- Category (Specific usage category, like Hosted Metrics Usage or Hosted Logs Usage)
- Organization
- Account ID (Grafana stack)
- Tags ([Virtual Tags](/tagging) created in Vantage)
- Charge Type (e.g., usage)
