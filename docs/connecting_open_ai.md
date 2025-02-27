---
id: connecting_open_ai
title: OpenAI
description: This page walks through how to integrate Vantage with your OpenAI account.
keywords:
  - OpenAI
  - Connect OpenAI
---

# OpenAI

Vantage integrates with your OpenAI account using the OpenAI [Costs API endpoint](https://platform.openai.com/docs/api-reference/usage/costs) and a read-only Admin Key. Vantage supports any services and models that are returned in the Costs endpoint.

### Prerequisites

[Create a free Vantage account](https://console.vantage.sh/signup), then follow the steps below to generate an OpenAI read-only Admin Key. Note that you must be an _Organization Owner_ in your OpenAI organization to create an Admin Key.

:::note
Note that the Costs endpoint is not available to non-admin API keys. Vantage does not have the ability to perform any actions that incur costs; however, OpenAI requires an Admin Key to access the Usage APIs. You will provide read-only access via the integration below.
:::

## Create a Connection

1. Navigate to the [Admin Keys](https://platform.openai.com/settings/organization/admin-keys) page of the OpenAI console, and log in using your company email.
2. At the top, click **+ Create new Admin key**.
3. For **Name**, add an identifiable name, like _Vantage Integration_.
<details><summary>Click to view example image</summary>
<div style={{display:"flex", justifyContent:"center"}}>
<img alt="Create API key modal with a number 1 next to the Create new secret key button and number 2 next to the input field for the key name" width="100%" src="/img/openai-admin-key.png" />
</div>
</details>
4. For **Permissions**, select **Read only**.
5. Click **Create admin key** and copy the generated key.
6. Navigate to the **Connect** tab of the [OpenAI Settings](https://console.vantage.sh/settings/open_ai?connect=true) page in the Vantage console. Then, click **Add Admin Key**.
7. The **New OpenAI Account** modal is displayed. For **API key**, paste your previously generated Admin Key. For **Description**, enter any descriptor to identify that you've added this integration, such as your name.
<details><summary>Click to view example image</summary>
<div style={{display:"flex", justifyContent:"center"}}>
<img alt="The API key account modal in the Vantage console with sample data added" width="80%" src="/img/open-ai-add-key.png" />
</div>
</details>
8. Click **Connect Account**.

Costs will be ingested and processed as soon as you add the integration. It usually takes less than 15 minutes to ingest OpenAI costs. As soon as they are processed, they will be available on your All Resources Cost Report. If you decide to remove your OpenAI integration from Vantage, all costs associated with your OpenAI Admin Key will be removed from the Vantage console.

### Next Steps: Manage Workspace Access

Once your costs are imported, select which workspaces this integration is associated with. See the [Workspaces](/workspaces#integration-workspace) documentation for information.

## Data Refresh

See the [provider data refresh documentation](/provider_data_refresh) for information on when data for each provider refreshes in Vantage.

## OpenAI Reporting Dimensions

On OpenAI [Cost Reports](/cost_reports), you can filter and group across several dimensions:

- Service (i.e., Operations, such as “Chats and Completions”, “Images”, and “Embeddings”)
- Category (i.e., Models and operation-specific details, such as “gpt-4o”, “text-embedding-3-small”, and “assistants api”)
- Subcategory (i.e., Operation-specific metadata, such as “input”, output”, “cached input”)
- Billing Account/Organization
- Account/Project
