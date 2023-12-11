---
id: connecting_fastly
title: Fastly
description: This page walks through how to integrate Vantage with your Fastly account.
keywords:
  - Fastly
  - Connect Fastly
---

# Fastly

Vantage integrates with your Fastly account through a read-only API token. Fastly API tokens are free for you to create, and adding them to the Vantage console takes only a few minutes.

## Connect Your Fastly Account

### Prerequisites

[Create a free Vantage account](https://console.vantage.sh/signup), then follow the steps below to create a Fastly API token.

1. Navigate and log in to the [Fastly console](https://www.fastly.com).
2. On the [**API tokens** page](https://manage.fastly.com/account/personal/tokens/new), re-enter your password if prompted. Then, click **+ Create Token**.
3. Enter the following token details:
   - For **Name**, enter something relevant, like _VantageReadOnlyToken_.
   - For **Type**, select **Automation token**.
   - If the **Role** option is displayed, select **Billing**.
   - For **Scope**, select **Read-only access (`global:read`) — Read account information configuration and stats**. Ensure all other options remain unchecked. Vantage will never attempt to make changes to your Fastly infrastructure.
   - For **Access**, select **All Services on YOUR_ORGANIZATION_NAME**.
   - For **Expiration**, select **Never expire**.
   <details><summary>Click to view example token creation form</summary>
   <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Fastly API token form" width="100%" src="/img/VantageFastlyInstructions_1.png" />
    </div>
   </details>
4. Click **Create Token**, and re-enter your password if prompted. Fastly will generate your API token. Copy this token for the next steps.

### Create the Connection

1. From the Vantage console, navigate to the [Fastly Settings page](https://console.vantage.sh/settings/integrations).
2. At the top, select the **Connect** tab.
3. Click **Add API Token**, then paste the API token you just generated.
4. Click **Connect account**. Vantage will automatically begin ingesting and visualizing your costs within the Vantage console.

## Fastly Reporting Dimensions

On Fastly [Cost Reports](/cost_reports), you can filter across several dimensions:

- Account
- Category (e.g., CDN Data Transfer)
- Subcategory (e.g., CDN Requests)
- Resource
- Region
- Service
