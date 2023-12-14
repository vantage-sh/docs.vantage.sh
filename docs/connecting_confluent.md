---
id: connecting_confluent
title: Confluent
description: This page walks through how to integrate Vantage with your Confluent account.
keywords:
  - Confluent
  - Connect Confluent
---

# Confluent

Vantage integrates with your Confluent account using a Confluent API key and secret to access the [Billing API](https://docs.confluent.io/cloud/current/billing/overview.html#retrieve-costs-for-a-range-of-dates). This endpoint provides structured cost data, broken down by by category (e.g., Kafka or Connect), resource (e.g., Kafka Cluster), and subcategory (e.g., Kafka Storage or Connect Capacity).

Vantage currently supports the following Confluent products:

- Kafka
- Connect
- KSQL
- Audit Logs
- Cluster Links
- Custom Connect
- Support Cloud

## Connect Your Confluent Account

### Prerequisites

[Create a free Vantage account](https://console.vantage.sh/signup), then follow the steps below to generate a Confluent API key.

:::info
Confluent requires an `OrganizationAdmin` role on the service account used in order to access the Billing API. See the [Confluent documentation](https://docs.confluent.io/cloud/current/access-management/access-control/rbac/manage-role-bindings.html) for information on how to add the role to your service account.

The `OrganizationAdmin` role provides read/write access; however, Vantage will never perform write operations and will only read from the Billing API and Organizations API.
:::

1. Log in to the [Confluent Cloud console](https://confluent.cloud/login).
2. From the top right of the console, click the hamburger menu.
3. Under **ADMINISTRATION**, click **Cloud API keys**.
4. Click **Create key**.
5. For the scope, select the **Granular access** tile.
6. Select an existing service account or create a new one.
7. Copy the key and the secret to add to Vantage.

### Create the Connection

1. From the Vantage console, navigate to the [Confluent Settings](https://console.vantage.sh/settings/confluent/) page.
2. Click **Add API Key**.
3. Enter your newly created **API key** and **API secret**.
4. Click **Connect Account**.
5. On the [Confluent Settings](https://console.vantage.sh/settings/confluent/) page, you will see your account listed with a **Status** of `Imported`.

Costs will be ingested and processed as soon as you add the integration. It usually takes less than 15 minutes to ingest Confluent costs. As soon as the costs are processed, they will be available on your **All Resources** Cost Report.

:::note
Confluent data refreshes daily in the Vantage console.
:::

## Confluent Reporting Dimensions

On Confluent [Cost Reports](/cost_reports/), you can filter costs across several dimensions:

- Organization
- Service (e.g., Kafka)
- Category (e.g., Kafka Storage)
- Resource

You can also view credits or discounts for Confluent costs in Cost Reports.

1. At the top of any Confluent Cost Report, click **Settings**. 
2. Then, toggle on/off **Credits** and/or **Discounts**.

## Active Resources

Confluent Kafka Clusters are synced as active resources and available in [resource reports](/active_resources).
