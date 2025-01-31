---
id: connecting_planetscale
title: PlanetScale
description: This page walks through how to integrate Vantage with your PlanetScale account.
keywords:
  - PlanetScale
  - Connect PlanetScale
---

# PlanetScale

Vantage integrates with PlanetScale billing data via the PlanetScale Invoices API. Vantage connects to PlanetScale organizations through an OAuth flow, handled within the PlanetScale app. Vantage supports multiple PlanetScale organization integrations. All organizations are ingested after you connect via the OAuth flow and do not need to be individually added. After authorizing Vantage access to your PlanetScale organizations, Vantage will begin to ingest data using the PlanetScale Organizations, Invoices, and Databases endpoints.

The required PlanetScale scopes to connect are:

- User access
  - `read_organizations`
- Organization access
  - `read_organization`
  - `read_invoices`
  - `read_databases`

No access is granted to the actual databases themselves. Vantage can see only metadata related to the databases.

The Invoices endpoint provides structured cost data, broken down by service (e.g., Database or Support), category (e.g., PS-10, PS-20), and resource (e.g., the specific database). All credentials are encrypted.

Vantage supports Databases and Support services, as well as the following services for Branches:

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
3. You will be brought to the PlanetScale login screen. Log in to your account and select the organizations you want to connect with.
4. Click **Authorize access**.
5. After you authorize a connection, on the [PlanetScale Settings](https://console.vantage.sh/settings/planetscale/) page, you will see the status of your connection change to `Importing`.

Costs will be ingested and processed as soon as you add the integration. It usually takes less than 15 minutes to ingest PlanetScale costs. Once costs are processed, they will be available on your **All Resources** Cost Report.

### Next Steps: Manage Workspace Access

Once your costs are imported, select which workspaces this integration is associated with. See the [Workspaces](/workspaces#integration-workspace) documentation for information.

## Data Refresh

See the [provider data refresh documentation](/provider_data_refresh) for information on when data for each provider refreshes in Vantage.

## PlanetScale Reporting Dimensions

On PlanetScale [Cost Reports](/cost_reports/), you can filter costs across several dimensions:

- Category (e.g., PS-10, PS-20)
- Tag ([virtual tags](/tagging) created in Vantage for this provider)
- Resource (e.g., database name)
- Charge Type (e.g., Usage)
- Organization (organization ID)
- Service (e.g., Database or Support)

You can also view credits or discounts for PlanetScale costs in Cost Reports.

1. At the top of any PlanetScale Cost Report, click **Settings**.
2. Then, toggle on/off **Credits** and/or **Discounts**.

## Active Resources

PlanetScale databases are synced as active resources and available in [resource reports](/active_resources).
