---
id: connecting_coralogix
title: Coralogix
description: This page walks through how to integrate Vantage with your Coralogix account.
keywords:
  - Coralogix
  - Connect Coralogix
---

# Coralogix

Vantage connects to Coralogix organizations through [gRPC API](https://grpc.io/) calls. After Vantage is authorized to access your Coralogix organization, Vantage will ingest data using the Coralogix [Data Usage Service API](https://coralogix.com/docs/data-usage-service-api/) endpoints. No access is granted to the Coralogix-connected applications. Vantage can see only usage data related to the connected services.

Vantage supports the Logs, Metrics, and Spans services, as well as the [application and subsystem names](https://coralogix.com/docs/application-and-subsystem-names/) for your account. The subsystem name typically refers to the environment (e.g., production, development, or staging). The application name typically refers to the name of the service or applications that send your logs, metrics, and traces. Both the subsystem and application names can be customized, so your values may be different.

## Connect Your Coralogix Account

### Prerequisites

- You will need to be an [Organization Admin](https://coralogix.com/docs/managing-your-organization-manage-admins/) in Coralogix.
- [Create a free Vantage account](https://console.vantage.sh/signup), then follow the steps below to connect to Coralogix.

### Create the Connection

1. Log in to the [Coralogix dashboard](https://dashboard.coralogix.com/).
    :::tip
    If you experience issues logging in to your dashboard, your account may be using a different domain. Ensure you use the [correct domain](https://coralogix.com/docs/coralogix-domain/) to log in to your dashboard.
    :::
2. From the top navigation, expand the **Data Flow** menu.
3. Select **API Keys**. 
  <details><summary>Expand to view example image</summary>
   <div>
   <img alt="The Coralogix Data Flow menu with the API Key option highlighted" width="100%" src="/img/connect-coralogix/coralogix-api-key.png"/> </div>
  </details>
4. Under **Alerts, Rules and Tags API Key**, click **GENERATE NEW API KEY**. Click the copy icon next to the key and copy the generated key.
  <details><summary>Expand to view example image</summary>
   <div>
   <img alt="The Coralogix API Access screen. A box is displayed around the Generate New API Key option." width="100%" src="/img/connect-coralogix/coralogix-generate-api-key.png"/> </div>
  </details>
5. In the top-right corner of the navigation bar, click your user profile icon. Then, select **Organization Admin Console**.
  <details><summary>Expand to view example image</summary>
   <div>
   <img alt="The Coralogix profile menu. A box is displayed around the Organization Admin Console option." width="70%" src="/img/connect-coralogix/coralogix-admin-console.png"/> </div>
  </details>
6. The **Organization Admin Console** screen is displayed. From the left navigation menu, under **Account**, select **Preferences**. 
7. The **Account Preferences** screen is displayed. In the **Change Team name and URL** section, copy the part of the domain after your team's name. For example, if your domain is `https://test-team.cx498.coralogix.com/`, then copy only `cx498.coralogix.com`.
  <details><summary>Expand to view example image</summary>
   <div>
   <img alt="The Coralogix Account Preferences screen. A number 1 tooltip is displayed next to the Preferences option. A number 2 tooltip is displayed next to the team name and URL option." width="100%" src="/img/connect-coralogix/coralogix-account-pref.png"/> </div>
  </details>
8. Navigate to the [Integrations page](https://console.vantage.sh/settings/integrations) in Vantage.
9. Select **Coralogix** and select the **Connect** tab. 
10. At the bottom of the page, click **Add API Key**.
11. Enter your previously generated **API Key** and the **Domain** you copied. 
12. Enter a **Description** for this connection. The **Description** is your team name and is also available in your Coralogix domain URL (e.g., in `https://test-team.cx498.coralogix.com/`, use `test-team`). 
13. Click **Connect Account**.
14. After you authorize a connection, on the [Coralogix Settings](https://console.vantage.sh/settings/coralogix/) page, you will see the status of your connection change to `Importing`.

Costs will be ingested and processed as soon as you add the integration. It usually takes less than 15 minutes to ingest Coralogix costs. Once costs are processed, they will be available on your **All Resources** Cost Report. 

:::note
Based on limits imposed by Coralogix, the integration includes 90 days of historical Coralogix usage and cost data. Coralogix data refreshes daily in Vantage.
:::

### Next Steps: Manage Workspace Access

Once your costs are imported, select which workspaces this integration is associated with. See the [Workspaces](/workspaces#integration-workspace) documentation for information.

## Coralogix Reporting Dimensions

On Coralogix [Cost Reports](/cost_reports/), you can filter costs across several dimensions:

- Service (e.g., Logs, Metrics, Spans)
- Category (subsystem name)
- Subcategory (application name)
- Tag ([virtual tags](/virtual_tagging) created in Vantage for this provider)

:::note
Because the Metrics service doesn’t have a subsystem or application name, costs for this service can't be filtered by category or subcategory.
:::
