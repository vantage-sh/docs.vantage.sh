---
id: connecting_datadog
title: Datadog
description: This page walks through how to integrate Vantage with your Datadog account.
keywords:
  - Datadog
  - Connect Datadog
---

# Datadog

Vantage uses a read-only (scoped to `billing_read`) Datadog OAuth token. This token is used to pull data from the [usage metering endpoint](https://docs.datadoghq.com/api/latest/usage-metering/). The usage metering API provides hourly, daily, and monthly usage across multiple facets of Datadog. This API is available to all Pro and Enterprise customers. For [Datadog business metrics](/per_unit_costs#importing-from-datadog), Vantage also requires the `metrics_read` and `timeseries_query` scopes.

:::note
Usage is only accessible for [parent-level organizations](https://docs.datadoghq.com/account_management/multi_organization/).
:::

For documentation about connecting to Vantage from Datadog, see the [Vantage Integration page](https://docs.datadoghq.com/integrations/vantage/) in Datadog's documentation.

## Connect Your Datadog Account

### Prerequisites

- When connecting your Datadog account, your user will need access to the `usage_read` and `billing_read` scopes to complete the connection. Vantage also requests the `metrics_read` and `timeseries_query` scopes for importing [Datadog business metrics](/per_unit_costs#importing-from-datadog). See the [Datadog documentation](https://docs.datadoghq.com/account_management/rbac/permissions/) for more information on roles.
- [Create a free Vantage account](https://console.vantage.sh/signup), then follow the steps below to integrate Datadog costs.

### Create the Connection

1. From the Vantage console, navigate to the [Integrations page](https://console.vantage.sh/settings/integrations).
2. Select **Datadog** and add a connection.
3. You will be brought to the Datadog login screen and guided through the Datadog OAuth flow for adding your Datadog account.

After authorizing the connection with Vantage, you will see the status of your connection change to `Importing` within the Vantage console.

:::note
Once connected, Vantage will ingest six months of historical Datadog costs.
:::

### Next Steps: Manage Workspace Access

Once your costs are imported, select which workspaces this integration is associated with. See the [Workspaces](/workspaces#integration-workspace) documentation for information.

## Data Refresh

See the [provider data refresh documentation](/provider_data_refresh) for information on when data for each provider refreshes in Vantage.

## Update the Datadog Integration {#update-datadog}

Sometimes an update is required to use new Vantage features related to Datadog. Navigate to the [Manage Integration](https://console.vantage.sh/settings/datadog?manage=true) page for your Datadog integration. If you need to update the integration, the **Update Required** button is displayed in the **Status** column. Click the button to access the OAuth integration workflow and reconnect your integration. 

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Update button for an out-of-date Datadog integration" width="90%" src="https://assets.vantage.sh/docs/datadog-update.png" />
</div>

## Datadog Reporting Dimensions

Within [Cost Reports](/cost_reports/), Vantage will show cost data for at least the following services.

- APM
- Application Security Monitoring
- Audit Trail
- CI Visibility
- CSPM
- Database Monitoring
- Incident Management
- Infrastructure
- Log Management
- Network Monitoring
- Observability pipelines
- RUM
- Sensitive Data Scanner
- Serverless Monitoring
- Synthetic Monitoring
- Workload Security

The following Cost Report filters are available for Datadog:

- Organization
- Category
- Tag/Not Tagged (see the section below)
- Subcategory
- Service

At the Category and Subcategory levels, you can access information such as how much Datadog spend is covered by committed-use discounts or which individual Datadog container is contributing to overall Logging costs.

### Datadog Cost Tags (Usage Attribution Tags)

:::info
This feature is only available if you have a Datadog Enterprise plan with usage tags enabled.
:::

You can have up to three tag keys per organization enabled for [usage attribution](https://docs.datadoghq.com/account_management/billing/usage_attribution/) in Datadog. Once enabled, Datadog begins breaking down the usage by any number of tag values for these keys. This allows you to see usage for specific services allocated to a specific key/value pair.

The following Datadog services support Datadog cost tags:

- APM
- CI Pipeline
- Fargate
- Infrastructure Hosts
- Lambda
- Logs
- NPM
- Synthetic Tests
- Time Series

To use these tags within Vantage:

1. Open any [Cost Report](/cost_reports).
2. Click **Filters**, and select **Datadog** for the provider.
3. Click **New Rule** > **Tag**.

You can also **Group By** a specific tag key on a Datadog Cost Report. The following filter operators are supported:

- Tagged with key
- Tagged with Key where the value: is, is not, contains, does not contain
- Not Tagged
- Not Tagged with Key

If you just applied your first Datadog tag key and value, it can take up to 48 hours for the tag to appear in Vantage. Tags are not applied retroactively.

## Datadog Pricing in Vantage

For certain services, Datadog prices based on the 95th to 99th percentile (p95/p99) of usage rather than _daily_ usage. For example, APM is billed on the [99th percentile](https://docs.datadoghq.com/account_management/billing/apm_tracing_profiler/#apm-hosts-with-dynamic-scaling-containers-fargate-and-no-indexed-spans) of the number of hosts you have running at any given time. In Vantage, Datadog costs are realized on the first day of the month. As the month progresses, you might notice that costs retroactively increase or decrease based on your usage.

Because these costs are always realized on the first of the month, when you compare previous periods for services that price on the p95/p99 of usage, you’ll always have the same comparison dates. For services that do not price on p95/p99, Vantage shows costs realized per day, when the accompanying usage data is available.

In the below visual example, a Cost Report is filtered to all Datadog costs. The date grouping is set to **Daily**. If you select a service row in the table, that service is isolated on the graph, and you can see how the service is priced. In this example, Log Management has accrual data and prices daily; whereas, Containers is priced based on the p95/p99 of usage, and costs are realized on the first of the month.

<div style={{ display: "flex", justifyContent: "center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", borderRadius: "10px", overflow: "hidden" }}>
  <img alt="GIF selecting different Datadog services. When Log Management is selected, costs are displayed for the whole month. When Containers is selected, costs are displayed on the first of the month." width="100%" src="https://assets.vantage.sh/docs/datadog-costs.gif"/>
</div>

## Reporting Dimensions

On Datadog [Cost Reports](/cost_reports), you can filter across several dimensions:

- Organization (organization name)
- Category (e.g., APM integrated spans)
- Tag/Not Tagged (includes Datadog tags and [virtual tags](/tagging) created in Vantage for this provider)
- Subcategory (e.g., Virtual Network Standard IPv4 Static Public IP)
- Charge Type (e.g., Usage)
- Service (e.g., Database Monitoring)

## View Datadog Metrics on Cost Reports

You can import Datadog metrics as business metrics to view alongside Cost Reports. See the [Per Unit Costs](/per_unit_costs#importing-from-datadog) documentation for more information.

## Datadog Host Costs

For cloud resources that have the Datadog agent installed, Vantage can associate Datadog per-host fees along with the primary cloud resources from AWS, Azure, and Google Cloud that drive those costs. See the [Active Resources](/active_resources#datadog-host-costs) documentation for details on how to view these costs.
