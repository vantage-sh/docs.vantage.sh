---
id: connecting_confluent
title: Confluent
description: This page walks through how to integrate Vantage with your Confluent account.
toc_max_heading_level: 4
keywords:
  - Confluent
  - Connect Confluent
---

# Confluent

Vantage integrates with your Confluent account using a Confluent API key and secret to access the [Billing API](https://docs.confluent.io/cloud/current/billing/overview.html#retrieve-costs-for-a-range-of-dates). This endpoint provides structured cost data, broken down by category (e.g., Kafka or Connect), resource (e.g., Kafka Cluster), and subcategory (e.g., Kafka Storage or Connect Capacity).

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

:::note
To access the Billing API, Vantage needs the `OrganizationAdmin` role attached to the service account (instructions provided below). The `OrganizationAdmin` role provides read/write access; however, Vantage will never perform write operations and will only read from the Billing API and Organizations API.
:::

### Create the Connection
Generate an API key, create a service account, then attach the right role to the service account.

#### Step 1: Generate an API Key and Service Account

1. Log in to the [Confluent Cloud console](https://confluent.cloud/login).
2. From the top right of the console, click the hamburger menu.
3. Under **ADMINISTRATION**, click **API keys**.
4. Click **+ Add API key**.
    <details><summary>Click to view example image</summary>
      <div>
      <img alt="Adding an API key" width="100%" src="https://assets.vantage.sh/docs/confluent-api-key.png"/> </div>
    </details>
5. For **Select an account for API key**, click **Service account**. 
6. Select an existing service account or create a new one, then click **Next**.
    <details><summary>Click to view example image</summary>
      <div>
      <img alt="Adding a service account for the key" width="100%" src="https://assets.vantage.sh/docs/confluent-add-account.png"/> </div>
    </details>
7. For **Select resource scope for API key**, select **Cloud resource management**. Click **Next**.
    <details><summary>Click to view example image</summary>
      <div>
      <img alt="Adding a service account for the key" width="100%" src="https://assets.vantage.sh/docs/confluent-cloud-resource.png"/> </div>
    </details>
8. Add a name and description for the key, then click **Create API key**.
    <details><summary>Click to view example image</summary>
      <div>
      <img alt="Adding a key name" width="100%" src="https://assets.vantage.sh/docs/confluent-create-key.png"/> </div>
    </details>
9.  Copy the displayed key and the secret to add to Vantage. You can also download a copy of the API key from this screen.
    <details><summary>Click to view example image</summary>
      <div>
      <img alt="Copy the newly generated key" width="100%" src="https://assets.vantage.sh/docs/confluent-copy-key.png"/> </div>
    </details>

#### Step 2: Add the `OrganizationAdmin` Role to the Service Account

1. From the top hamburger menu of the Confluent Cloud console, select **Accounts & access**. 
2. On the **Accounts & access** page, select the **Service Accounts** tab, then open the service account you associated with the integration API key. 
    <details><summary>Click to view example image</summary>
      <div>
      <img alt="Confluent Account & access screen" width="100%" src="https://assets.vantage.sh/docs/confluent-account-access.png"/> </div>
    </details>
3. Click the **Access** tab, then click **+ Add role assignment**.
  <details><summary>Click to view example image</summary>
      <div>
      <img alt="Confluent add role assignment" width="100%" src="https://assets.vantage.sh/docs/confluent-add-role-assignment.png"/> </div>
  </details>
4. Select the **OrganizationAdmin** role, then click **Add**.
  <details><summary>Click to view example image</summary>
      <div>
      <img alt="Confluent selecting a role" width="100%" src="https://assets.vantage.sh/docs/confluent-new-role-assignment.png"/> </div>
  </details>

#### Step: Add the API Key to the Vantage Console

1.  From the top navigation in Vantage, click **Settings**.
2. On the left navigation, select **Integrations** and select **Confluent**.
3. The Confluent integrations page is displayed. Ensure you are on the **Connect** tab.
4. At the bottom of the page, click **Add API Key** and paste your newly generated **API key** and **API secret**.
5. Click **Connect Account**.

Costs will be ingested and processed as soon as you add the integration. It usually takes less than 15 minutes to ingest Confluent costs. As soon as the costs are processed, they will be available on your **All Resources** Cost Report. If you decide to remove your Confluent integration from Vantage, all costs associated with your Confluent API key will be removed from the Vantage console.

### Next Steps: Manage Workspace Access

Once your costs are imported, select which workspaces this integration is associated with. See the [Workspaces](/workspaces#integration-workspace) documentation for information.

## Data Refresh

See the [provider data refresh documentation](/provider_data_refresh) for information on when data for each provider refreshes in Vantage.

## Active Resources

Confluent Kafka Clusters are synced as active resources and available in [resource reports](/active_resources).

## Confluent Reporting Dimensions

On Confluent [Cost Reports](/cost_reports/), you can filter costs across several dimensions:

- Category (e.g., Kafka Storage)
- Tag ([virtual tags](/tagging) created in Vantage for this provider)
- Resource (resource service ID)
- Charge Type (e.g., Usage)
- Organization (organization ID)
- Service (e.g., Kafka)

You can also view credits or discounts for Confluent costs in Cost Reports.

1. At the top of any Confluent Cost Report, click **Settings**. 
2. Then, toggle on/off **Credits** and/or **Discounts**.
