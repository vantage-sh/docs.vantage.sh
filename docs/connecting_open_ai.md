---
id: connecting_open_ai
title: OpenAI
description: This page walks through how to integrate Vantage with your OpenAI account.
keywords:
  - OpenAI
  - Connect OpenAI
---

# OpenAI

Vantage integrates with your OpenAI account using the OpenAI Usage API endpoint and an API key.

:::note
The Usage endpoint is currently undocumented, but it provides structured cost data broken down by operation (e.g., Chat Completion or Embedding) and model (e.g., GPT-3.5-turbo).
:::

The following models are supported:

- Language models: GPT-4, GPT-3.5
- GPT-3 fine-tuning models: Ada, Babbage, Curie, and Davinci
- Embedding models: Ada
- Image models: DALL-E
- Audio models: Whisper
  
All models of the following operations are supported:

- Completions
- Chat Completions
- Edits
- Images
- Embeddings
- Audio (Translations and Transcriptions)
- Fine-tunes
- Moderations

### Prerequisites

[Create a free Vantage account](https://console.vantage.sh/signup), then follow the steps below to generate an OpenAI API key.

## Create a Connection

1. Navigate to the [API Keys](https://platform.openai.com/api-keys) page of the OpenAI console. 
2. In the **Default organization** section, select the OpenAI organization you want Vantage to connect.
    <details><summary>Click to view example image</summary>
    <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Default Organization section in OpenAI console" width="100%" src="/img/open-ai-organization.png" />
    </div>
    </details>
3. Click **+ Create new secret key**.
4. For **Name**, add an identifiable name, like _Vantage Integration_. For **Permissions**, select **All**.
    :::note
    Vantage will never attempt to write to any endpoints using your API key. Vantage only reads from the Usage endpoint.
    :::
    <details><summary>Click to view example image</summary>
    <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Create API key modal with a number 1 next to the Create new secret key button and number 2 next to the input field for the key name" width="100%" src="/img/open-ai-secret-key-name.png" />
    </div>
    </details>
5. Click **Create secret key** and copy the generated API key.
    <details><summary>Click to view example image</summary>
    <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A sample API key is displayed on the OpenAI API key console" width="80%" src="/img/open-ai-copy-key.png" />
    </div>
    </details>
6. Navigate to the **Connect** tab of the [OpenAI Settings](https://console.vantage.sh/settings/open_ai?connect=true) page in the Vantage console. Then, click **Add API Token**.
7. The **New OpenAI Account** modal is displayed. For **API key**, paste your previously generated API key. For **Description**, enter any descriptor to identify that you've added this integration, such as your name.
    <details><summary>Click to view example image</summary>
    <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="The API key account modal in the Vantage console with sample data added" width="80%" src="/img/open-ai-add-key.png" />
    </div>
    </details>
8. Click **Connect Account**. Costs will be ingested and processed once you add the integration. It usually takes less than 15 minutes to ingest OpenAI costs. As soon as costs are processed, they will be available on your **All Resources** Cost Report.

:::note
OpenAI data refreshes daily in the Vantage console.
:::

### Next Steps: Manage Workspace Access

Once your costs are imported, select which workspaces this integration is associated with. See the [Workspaces](/workspaces#integration-workspace) documentation for information.

## OpenAI Reporting Dimensions

On OpenAI [Cost Reports](/cost_reports), you can filter across several dimensions:

- Organization
- Operation (e.g., Chat and Completions)
- Model (e.g., GPT-3.5)
