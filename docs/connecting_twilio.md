---
id: connecting_twilio
title: Twilio
description: This page walks through how to integrate Vantage with your Twilio account.
keywords:
  - Twilio
  - Connect Twilio
toc_max_heading_level: 4
---

# Twilio

Vantage connects to Twilio via a [Standard API key](https://www.twilio.com/docs/iam/api-keys#types-of-api-keys) to ingest cost and usage date through the [Usage Records API](https://www.twilio.com/docs/usage/api/usage-record). After authorizing Vantage access to your Twilio account, Vantage will begin ingesting data using the Usage API. All credentials are encrypted. You can connect multiple Twilio Cloud integrations by providing API keys for multiple accounts.

[Usage data](/usage_based_reporting) is also available for Twilio, such as quantity of Phone Numbers or number of SMS messages.

:::note
Vantage has access to all Twilio API resources, except for [API key](https://www.twilio.com/docs/iam/api-keys/key-resource-v1) and [Account](https://www.twilio.com/docs/iam/api/account) resources.  Vantage will never perform any write actions to your account. Although Twilio has scoping for API keys, usage and billing APIs are not included. We recommend customers submit a feature request to Twilio for improved permission scoping, and Vantage will adopt fine-grained permissions if this becomes available.
:::

## Connect Your Twilio Account

### Prerequisites
- You must have an Administrator or Developer role in Twilio to create an API key.
- Create a free Vantage account, then follow the steps below to integrate Temporal Cloud costs.

### Twilio Account Limitations {#limitations}

If you create an API key in your top-level main account, Vantage includes all cost data incurred in any subaccounts that roll up to the top-level main account. When you view usage on a report, it will appear as if the costs were incurred in the parent account.

If you want to specifically capture the subaccount, you can create an API key specifically for that subaccount, and connect the subaccount as its own integration.

:::note 
Ideally, you could provide a single API key for an Organization, and Vantage could capture subaccount-level granularity, but this is unfortunately a limitation of Twilio's APIs. Contact your Twilio CSM to ask for enhancements to the Billing and Usage APIs.
:::

### Create the Connection

Follow the steps below to create a connection with Twilio.

#### Step 1: Create a Twilio Standard API Key

1. Log in to the [Twilio console](https://console.twilio.com/). Ensure you are logged in to your main Twilio account. (See the [section above](/connecting_twilio#limitations) for information on limitations between main and subaccounts.)
2. On the **Account Dashboard**, your **Account SID** is displayed in the **Account Info** section. Copy the **Account SID** to use in the next section when connecting to Vantage.
  <details><summary>Expand to view example image</summary>
    <div>
    <img alt="Twilio console homepage account SID" width="100%" src="/img/twilio-account-sid.png"/> </div>
  </details>
3. At the top of the console, click **Admin** > **Account management**.
  <details><summary>Expand to view example image</summary>
    <div>
    <img alt="Twilio console Account Management" width="100%" src="/img/twilio-account.png"/> </div>
  </details>
4. On the left navigation menu, under **Keys & Credentials**, click **API keys & tokens**.
5. Click **Create API key**.
  <details><summary>Expand to view example image</summary>
    <div>
    <img alt="Twilio console Create API screen" width="100%" src="/img/twilio-api.png"/> </div>
  </details>
6. On the **Create new API key** page, add the following information:
    1. Enter a **Friendly name**, like *vantage.*
    2. Select a **Region**.
    3. For **Key type**, select **Standard**.
7. At the bottom, click **Create**.
  <details><summary>Expand to view example image</summary>
    <div>
    <img alt="Twilio console New API screen" width="100%" src="/img/twilio-create-api.png"/> </div>
  </details>
8. Copy the **SID** (i.e., the string identifier for the API key) and **Secret**.
  <details><summary>Expand to view example image</summary>
    <div>
    <img alt="Twilio console copy key screen" width="100%" src="/img/twilio-copy-key.png"/> </div>
  </details>

#### Step 2: Add Credentials to Vantage

1. From the top navigation in Vantage, click **Settings**.
2. On the left navigation, select **Integrations** > **Twilio**.
3. The Twilio integrations page is displayed. Ensure you are on the **Connect** tab.
4. At the bottom of the page, click **Add API Key:**
    - For **API Key**, paste the API key SID you just obtained in the last step.
    - For **API Secret**, paste the API secret you just obtained in the last step.
    - For **Account SID**, paste the **Account SID** you obtained in step 2 of the last section.
    - For **Account Name**, add a name that will be used for the Billing Account filter in Cost Reports. It’s recommended that you use your account name as displayed in the Twilio console (see example image below). This name must be unique across all Twilio integrations in Vantage.
      <details><summary>Expand to view example image</summary>
      <div>
      <img alt="Twilio account name" width="100%" src="/img/twilio-account-name.png"/> </div>
      <p><i>For example, the account name here would be "My first Twilio account."</i></p>
      </details>
    - Optionally, add a **Description** to identify this integration.
5. Click **Connect Account**.

Costs will be ingested and processed as soon as you add the integration. Vantage will load the previous six months of Twilio usage data. It usually takes less than 15 minutes to ingest Twilio costs. As soon as they are processed, they will be available on your **All Resources** Cost Report. 

If you decide to remove your Twilio integration from Vantage, all costs associated with your Twilio API token will be removed from the Vantage console.

### Next Steps: Manage Workspace Access

Once your costs are imported, select which workspaces this integration is associated with. See the [Workspaces](/workspaces#integration-workspace) documentation for information.

## Data Refresh

See the [provider data refresh documentation](/provider_data_refresh) for information on when data for each provider refreshes in Vantage.

## Twilio Reporting Dimensions

On Twilio [Cost Reports](/cost_reports), you can filter across several dimensions:

- Billing Account (the name of Twilio account entered at time of integration)
- Account (account ID of the account your Standard API key is created in)
- Service (e.g., SMS & MMS)
- Charge Type (e.g., Usage)
- Category (e.g., sms-outbound)
- Tags ([Virtual Tags](/tagging) created in Vantage)