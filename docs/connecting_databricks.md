---
id: connecting_databricks
title: Databricks
description: This page walks through how to integrate Vantage with your Databricks account.
keywords:
    - Databricks
    - Connect Databricks
---

# Databricks

Vantage integrates with your Databricks account through the use of [Billable Usage Logs](https://docs.databricks.com/administration-guide/account-settings/billable-usage-delivery.html). Vantage provides an S3 bucket for Databricks to deliver usage logs to on a periodic basis. Databricks delivers cost-only data to the bucket, outlining the Databricks service used, usage in Databricks Units (DBU), and metadata related to workspace, cluster, and any related tags.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Databricks Cost Reports" width="60%" src="/img/databricks-cost-report.png" />
</div>

## Connect Your Databricks Account

### Prerequisites

[Create a free Vantage account](https://console.vantage.sh/signup), then follow the steps below to integrate Databricks costs.

### Create the Connection

1. From the Vantage console, navigate to the [Databricks Settings](https://console.vantage.sh/settings/databricks/) page.
2. At the top, select the **Connect** tab, then click **Setup Account**.
3. Enter your **Databricks Account ID**. 
   :::tip 
   You can find your Databricks Account ID in the user profile dropdown of the [Databricks account console](https://accounts.cloud.databricks.com/login).
   :::
4. Click **Connect Account**.
5. On the [Databricks Settings](https://console.vantage.sh/settings/databricks/) page, you will see your account listed with a **Status** of `Pending`. Click `Pending` to complete the connection.
6. Follow the additional instructions provided on the **Finalize Your Databricks Account Setup** page. These instructions will walk you step-by-step through setting up your [Databricks Account API](https://docs.databricks.com/dev-tools/api/latest/account.html) authentication, creating a storage configuration, and creating a credential configuration to finalize the integration. 

After completing all the steps above, your Databricks integration status should automatically update from `Pending` to `Importing`. Once fully imported, the status will update to `Imported`. You can view your connection status on the [Databricks Settings](https://console.vantage.sh/settings/databricks/) page. Databricks generally delivers usage logs once per day.

## Databricks Reporting Dimensions

Databricks [Cost Reports](/cost_reports/) enable you to filter Databricks costs across several dimensions:

- Account
- Category
- Tag
- Not tagged
- Service

:::note
The **Tag** filter contains values like `JobID`, which can be used to view costs for specific Databricks jobs.
:::
