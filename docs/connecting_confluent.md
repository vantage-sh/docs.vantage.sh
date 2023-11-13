---
id: connecting_confluent
title: Confluent
description: This page walks through how to integrate Vantage with your Confluent account.
keywords:
    - Confluent
    - Connect Confluent
---

# Confluent

Vantage integrates with your Confluent account using a Confluent API key and secret to access the [Billing API](https://docs.confluent.io/cloud/current/billing/overview.html#retrieve-costs-for-a-range-of-dates). This endpoint provides structured cost data, broken down by product (for example, Kafka or Connect) and line-type (for example, Kafka Storage or Connect Capacity).

Vantage currently supports the following Confluent products:

- Kafka
- Connect
- KSQL
- Audit logs
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
3. Click **ADMINISTRATION** > **Cloud API keys**.
4. Click **Add Key**.
5. For the scope, select the **Granular Access** tile.
6. Select an existing service account or create a new one.
7. Copy the key and the secret to add to Vantage.

### Create the Connection

1. From the Vantage console, navigate to the [Confluent Settings](https://console.vantage.sh/settings/confluent/) page.
2. At the top, select the **Connect** tab, then click **Add API Key**.
3. Enter your newly created **API key** and **API secret**. 
4. Click **Connect account**.
5. On the [Confluent Settings](https://console.vantage.sh/settings/confluent/) page, you will see your account listed with a **Status** of `Imported`. 

Confluent data refreshes daily in the Vantage console.

## Confluent Reporting Dimensions

On Confluent [Cost Reports](/cost_reports/), you can filter costs across several dimensions:

- Category (e.g., line-type, like Kafka Storage)
- Organization 
- Service (e.g., Kafka)
