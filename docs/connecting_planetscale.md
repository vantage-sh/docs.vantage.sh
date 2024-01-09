---
id: connecting_planetscale
title: PlanetScale
description: This page walks through how to integrate Vantage with your PlanetScale account.
keywords:
  - PlanetScale
  - Connect PlanetScale
---

# PlanetScale

Vantage integrates with PlanetScale billing data via the PlanetScale Invoices API. Vantage connects to PlanetScale organizations through an OAuth flow, handled within the PlanetScale app. Vantage supports multiple PlanetScale organization integrations. All organizations are ingested after you connect via the OAuth flow and do not need to be individually added.

Vantage supports Databases and the following services for Branches:

- PS-10
- PS-20
- PS-40
- PS-80
- PS-160
- PS-320
- PS-400

## Connect Your PlanetScale Account

### Prerequisites

- You will need the [Organization Admin role](https://planetscale.com/docs/concepts/access-control) in PlanetScale to complete the connection.
- [Create a free Vantage account](https://console.vantage.sh/signup), then follow the steps below to connect to PlanetScale.

### Create the Connection

1. From the Vantage console, navigate to the [Integrations page](https://console.vantage.sh/settings/integrations).
2. Select **PlanetScale**, then click **Connect PlanetScale Account**.
3. You will be brought to the PlanetScale login screen. Log in to your account, then select the organizations you want to connect.
4. Click **Authorize access**. 
5. After you authorize a connection, on the [PlanetScale Settings](https://console.vantage.sh/settings/planetscale/) page, you will see the status of your connection change to `Importing`.

Costs will be ingested and processed as soon as you add the integration. It usually takes less than 15 minutes to ingest PlanetScale costs. As soon as the costs are processed, they will be available on your **All Resources** Cost Report.

:::note
PlanetScale data refreshes daily in Vantage.
:::

## PlanetScale Reporting Dimensions

On PlanetScale [Cost Reports](/cost_reports/), you can filter costs across several dimensions:

- Organization
- Service (e.g., PS-10)
- Category (e.g., Database)
- Subcategory (e.g., the name of the Database)
- Resource

You can also view credits or discounts for PlanetScale costs in Cost Reports.

1. At the top of any PlanetScale Cost Report, click **Settings**.
2. Then, toggle on/off **Credits** and/or **Discounts**.

## Active Resources

PlanetScale databases are synced as active resources and available in [resource reports](/active_resources).
