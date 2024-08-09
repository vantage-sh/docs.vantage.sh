---
id: connecting_new_relic
title: New Relic
description: This page walks through how to integrate Vantage with your New Relic account.
keywords:
  - New Relic
  - Connect New Relic
---

# New Relic

Vantage integrates with your New Relic account using [NerdGraph](https://docs.newrelic.com/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/), New Relic's GraphQL API. It accesses the API using an API token.

## Connect Your New Relic Account

### Prerequisites

[Create a free Vantage account](https://console.vantage.sh/signup), then follow the steps below to generate a New Relic API token and obtain your Account ID.

1. Log in to your New Relic account. Then, follow the instructions in the [New Relic documentation](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/#overview-keys) to create a **User key**.
2. Once you've created a new **User key**, you will see the key in your **API keys** list. Click the ellipses next to the key in the list and select **Copy key**. You will need this value for completing the integration with Vantage.
3. To obtain your Account ID, follow the instructions provided in the [New Relic documentation](https://docs.newrelic.com/docs/accounts/accounts-billing/account-structure/account-id/). Copy the value for your Account ID.

### Create the Connection

1. Navigate to the [New Relic Settings](https://console.vantage.sh/settings/new_relic) page in the Vantage console. 
2. Click **Add Connection**.
3. Paste your **New Relic Account ID** and **New Relic API Key** you previously obtained into the provided fields.
4. Complete the additional fields based on the specific pricing for your account. This can include the per-gigabyte ingestion rate, amount of free ingestion per month, core and full platform user pricing, and any free user seats. For more information on New Relic pricing, see the [New Relic documentation](https://docs.newrelic.com/docs/accounts/accounts-billing/new-relic-one-pricing-billing/new-relic-one-pricing-billing/).
5. Click **Connect Account**. Vantage will automatically begin ingesting and visualizing your costs within the Vantage console, which may take a few minutes.

:::note
New Relic data refreshes daily in the Vantage console.
:::

### Next Steps: Manage Workspace Access

Once your costs are imported, select which workspaces this integration is associated with. See the [Workspaces](/workspaces#integration-workspace) documentation for information.

## New Relic Reporting Dimensions

On New Relic [Cost Reports](/cost_reports), you can filter across several dimensions:

- Account (account name)
- Category (e.g., New Relic Users - CoreUsers)
- Tag ([virtual tags](/virtual_tagging) created in Vantage for this provider)
- Charge Type (e.g., Usage)
- Service (e.g., New Relic Ingestion)
