---
id: connecting_oracle
title: Oracle Cloud
description: This page walks through how to integrate Vantage with your Oracle Cloud account.
keywords:
  - Oracle Cloud
  - Connect Oracle Cloud
---

# Oracle Cloud

Vantage uses a read-only IAM user and API key to read from a [Cost and Usage Reports object storage bucket](https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/usagereportsoverview.htm). When connecting to Oracle, you will be required to create a Vantage-specific IAM user and upload a generated RSA public key to that user. That user must then be granted access to read objects from the [Cost and Usage Report tenancy](https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/usagereportsoverview.htm#policy).

## Connect Your Oracle Cloud Account

### Prerequisites

- The integration process uses the [Oracle Cloud Infrastructure CLI](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/cliconcepts.htm). Ensure you have access to the CLI before proceeding. 
- [Create a free Vantage account](https://console.vantage.sh/signup), then follow the steps below to integrate Oracle Cloud Infrastructure costs.

### Create the Connection

1. Navigate to the [Oracle Settings](https://console.vantage.sh/settings/oracle/) page in the Vantage console.
2. A set of instructions is displayed, which will walk you through how to create an IAM user and group, add an IAM policy, and obtain your Tenancy ID and User ID. This series of commands grants Vantage permission to ingest cost and usage information from your Oracle Cloud account through an API key. All commands need to be performed using the Oracle Cloud Infrastructure CLI.
3. At the bottom of the setup screen, click **Add Connection**. Paste your **Tenancy** and Vantage **User ID**. Then, select your **Home Region**. 
4. Click **Connect Account**. Costs will be ingested and processed as soon as you add the integration. It usually takes less than an hour to ingest Oracle costs.  

:::note
Oracle generally delivers usage logs once per day.
:::

### Next Steps: Manage Workspace Access

Once your costs are imported, select which workspaces this integration is associated with. See the [Workspaces](/workspaces#integration-workspace) documentation for information.

## Oracle Cloud Reporting Dimensions

On Oracle [Cost Reports](/cost_reports), you can filter across several dimensions:

- Service
- Tenancy
- Region
- Cost Category
- Resource
- Tag/Not Tagged
- Compartment
