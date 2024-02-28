---
id: connecting_datadog
title: Datadog
description: This page walks through how to integrate Vantage with your Datadog account.
keywords:
  - Datadog
  - Connect Datadog
---

# Datadog

Vantage uses a read-only (scoped to `usage_read`) Datadog OAuth token. This token is used to pull data from the [usage metering endpoint](https://docs.datadoghq.com/api/latest/usage-metering/). The usage metering API allows you to get hourly, daily, and monthly usage across multiple facets of Datadog. This API is available to all Pro and Enterprise customers.

:::note
Usage is only accessible for [parent-level organizations](https://docs.datadoghq.com/account_management/multi_organization/).
:::

For documentation about connecting to Vantage from Datadog, see the [Vantage Integration page](https://docs.datadoghq.com/integrations/vantage/) in Datadog's documentation.

## Connect Your Datadog Account

### Prerequisites

- When connecting your Datadog account, your user will need access to the `usage_read` scope to complete the connection. See the [Datadog documentation](https://docs.datadoghq.com/account_management/rbac/permissions/) for more information on roles.
- [Create a free Vantage account](https://console.vantage.sh/signup), then follow the steps below to integrate Datadog costs.

### Create the Connection

1. From the Vantage console, navigate to the [Integrations page](https://console.vantage.sh/settings/integrations).
2. Select **Datadog** and add a connection.
3. You will be brought to the Datadog login screen and guided through the Datadog OAUTH2 flow for adding your Datadog account.

After authorizing the connection with Vantage, you will see the status of your connection change to `Importing` within the Vantage console.

:::note
Upon connection, Vantage will ingest six months of historical Datadog costs. Each day, at 2 AM UTC, this data is refreshed, but delays up to 72 hours may occur.
:::

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

## Manage Workspace Access

See the [Workspaces](/workspaces#integration-workspace) documentation for information on how to update workspace access for an integration.