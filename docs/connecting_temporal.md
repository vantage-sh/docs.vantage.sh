---
id: connecting_temporal
title: Temporal Cloud
description: This page walks through how to integrate Vantage with your Temporal Cloud account.
toc_max_heading_level: 4
keywords:
  - Temporal
  - Connect Temporal Cloud
---

# Temporal Cloud

Vantage connects to Temporal Cloud through a [service account](https://docs.temporal.io/cloud/service-accounts), with the [Finance Admin role](https://docs.temporal.io/cloud/users#account-level-roles), using an associated API key for the service account. After authorizing Vantage access to your Temporal Cloud account, Vantage will begin ingesting data using the Usage endpoint of the [Temporal Cloud Operations API](https://docs.temporal.io/ops). All credentials are encrypted. Vantage then uses the data from the Usage API to calculate costs based on public price sheets available from Temporal Cloud or custom inputs. 

You can connect multiple Temporal Cloud integrations by providing API keys for multiple accounts.

## How Temporal Cloud Costs Are Calculated {#cost-calculation}

During the Temporal Cloud integration, Vantage prompts you to enter custom rates for Actions, Active Storage, and Retained Storage. By default, Vantage applies public pricing and the base rate for Actions (under 5M per month). If you exceed 5M Actions and don’t have a private rate card, you can calculate your blended rates by dividing your total costs by the usage on your bill. 

:::note
Actions rates are measured in millions of Actions; Active and Retained Storage rates are measured in Gigabyte-Hours. At this time, this integration does not account for any Actions included in the plan.
:::

If you have a custom rate for Temporal Cloud, you can enter your enterprise rate in the [integration settings](/connecting_temporal#vantage-console). Vantage multiplies your custom rates by the usage from the Temporal Cloud Usage API to calculate your costs. You can update your rates anytime on the [Settings page](/connecting_temporal#update-custom-rates) in Vantage. 

## Connect Your Temporal Cloud Account

### Prerequisites

- You need the [Account Owner](https://docs.temporal.io/cloud/users#account-level-roles) role in Temporal Cloud to create a dedicated service account for the Vantage integration, assign it the Finance Admin role, and create the associated API key.
:::note
The Finance Admin role has the same permissions as Account Read-only users, with additional permissions to view [billing](https://docs.temporal.io/cloud/billing-and-cost) information and update payment information. Vantage will never perform any actions to change your payment method. It's recommended that you submit a feature request to Temporal Cloud for improved permission scoping, and Vantage will adopt fine-grained permissions if this becomes available.
:::
- Create a free Vantage account, then follow the steps below to integrate Temporal Cloud costs. 

### Create the Connection

To create an integration with Temporal Cloud and Vantage, you need to create a service account and an API key for that service account. 

#### Step 1: Create a Service Account

:::info
The below instructions are based on the [Temporal Cloud documentation](https://docs.temporal.io/cloud/service-accounts#create-a-service-account).
:::

1. In Temporal Cloud, navigate to **[Settings > Identities](https://cloud.temporal.io/settings/identities)**.
2. At the top, click **Create Service Account**. 
  <details><summary>Click to view example image</summary>
    <div>
    <img alt="Creating a Temporal Service Account" width="100%" src="https://assets.vantage.sh/docs/temporal-create-service-account.png"/> </div>
  </details>
3. Enter an **Identity Name**, such as _vantage_integration_.
4. Add an optional description to identify this account.
5. For **Account Level Role**, select **Finance Admin**.
6. For **Namespace Permissions**, set the access for each namespace to **Read-Only**.
  <details><summary>Click to view example image</summary>
    <div>
    <img alt="Setting up the Temporal service account with relevant permissions" width="100%" src="https://assets.vantage.sh/docs/temporal-service-account.png"/> </div>
  </details>
  
  :::note
  If additional namespaces are added after you create this service account, and you want them included in your integration, you will need to go back and update the permissions to account for these new namespaces.
  :::

1. Click **Create Service Account**. Once created, you will be prompted to create an API key for the service account.

#### Step 2: Create an API Key for the Service Account

:::info
The below instructions are based on the [Temporal Cloud documentation](https://docs.temporal.io/cloud/api-keys).
:::

1. After you create the service account, you will be prompted to create an API key. You can also create an API key for the service account at any time. Navigate to **[Settings > API keys](https://cloud.temporal.io/settings/api-keys)**. 
2. Click **Create API Key**. 
  <details><summary>Click to view example image</summary>
    <div>
    <img alt="Creating a new Temporal API key" width="100%" src="https://assets.vantage.sh/docs/temporal-create-api.png"/> </div>
  </details>
3. Under **Create an API key for**, select **Service Account**.
4. For **Mapped to Identity**, search for and select the service account you just created.
5. Give the API key a **Name** and optional **Description**.
6. For **Expiry Date**, select a date for when the key should expire. 
  :::note
  At this time, Temporal Cloud API keys can be configured to be valid for up to 2 years, after which you'll need to rotate your Temporal Cloud API key in the Vantage console.
  :::
  <details><summary>Click to view example image</summary>
    <div>
    <img alt="Creating a new Temporal API key with relevant permissions" width="100%" src="https://assets.vantage.sh/docs/temporal-create-api-key.png"/> </div>
  </details>
1. Click **Generate API Key** and copy the newly generated key.

#### Step 3: Add Your API Key and Pricing Details to Vantage {#vantage-console}

1. From the top navigation in Vantage, click **Settings**.
2. On the left navigation, select **Integrations** > **Temporal Cloud**.
3. The Temporal Cloud integrations page is displayed. Ensure you are on the **Connect** tab.
4. At the bottom of the page, click **Add API Key** and paste your newly generated API key. Optionally, add a **Description** to identify this integration.
5. If you use over 5M Actions or have custom rates, you can enter your blended rates on the form. By default, these fields are pre-filled with Temporal Cloud’s public pricing. If you don't have a private rate card or use under 5M Actions, you can leave these fields as-is. See the [How Temporal Cloud Costs Are Calculated](/connecting_temporal#cost-calculation) section for details. 

   - Price Per Action
   - Price Per Gigabyte-hour of Active Storage
   - Price Per Gigabyte-hour of Retained Storage

  :::note
  You can also update these rates after you complete the integration. See the [Update Custom Rates](/connecting_temporal#update-custom-rates) section for details. 
  :::

  <details><summary>Click to view example image</summary>
    <div>
    <img alt="Adding all credentials and custom rates in the Vantage console" width="100%" src="https://assets.vantage.sh/docs/temporal-vantage-console.png"/> </div>
  </details>
1. Click **Connect Account**. 

Costs will be ingested and processed as soon as you add the integration. It usually takes less than 15 minutes to ingest Temporal Cloud costs. As soon as they are processed, they will be available on your All Resources Cost Report. 

After the integration is complete, two full months plus the current month to date of historical cost data will be imported from Temporal Cloud. Historical data will be priced at the custom rates provided in the integration settings. Vantage will retain cost and usage data to match your retention period for all providers. 

If you decide to remove your Temporal Cloud integration from Vantage, all costs associated with your Temporal Cloud API key will be removed from the Vantage console.

### Temporal Cloud Discounts and Other Fees

The Temporal Cloud Usage API returns only usage information, which Vantage uses to calculate spend, and does not include separate line items for taxes, discounts, or credits. You can choose whether these line items are included in your calculated cost based on the blended rates you input in the integration settings.

In addition, Vantage does not have insights into what is covered by committed spend; all costs are shown based on the blended rate provided in the integration settings.

Vantage also does not include [Plan Costs](https://docs.temporal.io/cloud/pricing#base_plans) as a part of Temporal Cloud costs. You can use the [Custom Providers](/connecting_custom_providers) integration to represent your costs that are outside your usage costs. You can then use cost-based and business metrics-based [cost allocation](https://docs.vantage.sh/tagging/#cost-based-and-business-metrics-based-allocation-tags) to allocate these costs across teams.

## Update Custom Rates {#update-custom-rates}

After you complete the integration, you can update your custom rates if they ever change. To update your rates:

1. Navigate to the Temporal Cloud [settings page](https://console.vantage.sh/settings/temporal).
2. Select your integration from the list. 
3. Scroll down to the **Custom Rates** section.
4. Update your rates accordingly, then click **Save**.
  <details><summary>Click to view example image</summary>
    <div>
    <img alt="Editing rates for the Temporal Cloud integration in Vantage" width="100%" src="https://assets.vantage.sh/docs/temporal-edit-rates.png"/> </div>
  </details>

When you update your custom rate, your historical data will be reprocessed with the updated rate, and any Cost Report with Temporal Cloud costs will display the new rate that you have input. All future costs that are imported will use the new custom rate. 

### Next Steps: Manage Workspace Access

Once your costs are imported, select which workspaces this integration is associated with. See the [Workspaces](/workspaces#integration-workspace) documentation for information.

## Use Case: Associate Temporal Cloud Namespaces with Infrastructure Costs Using Virtual Tags

If your teams are running workloads across Temporal Cloud and other infrastructure providers, you can use [Virtual Tags](/tagging) in Vantage to group and analyze total application costs.

For example, you may want to track the total costs for the Payments team, which operates multiple workloads in Temporal Cloud. By creating a Virtual Tag with the key `Team` and the value `Payments`, you can apply a filter to group together things like Temporal Cloud costs filtered by the `payments-prod` and `payments-staging` namespaces.

You can view all namespaces using the **Resource** filter/grouping criteria on a Cost Report.

:::tip
See the following example in the [FinOps as Code repository](https://github.com/vantage-sh/finops-as-code/tree/main/terraform/temporal-costs) for steps on how to set up a tagging schema for teams and namespaces using the Vantage Terraform provider.
:::

## Data Refresh

See the [provider data refresh documentation](/provider_data_refresh) for information on when data for each provider refreshes in Vantage.

## Temporal Cloud Reporting Dimensions

On Temporal Cloud [Cost Reports](/cost_reports), you can filter across several dimensions:

- Organization (i.e., Temporal Cloud organization name)
- Service (e.g., Temporal Cloud)
- Charge Type (e.g., Usage)
- Category (e.g., Actions)
- Subcategory (e.g., Retained Storage)
- Resource ID (e.g., Namespace)
- Tags ([Virtual Tags](/tagging) created in Vantage)
