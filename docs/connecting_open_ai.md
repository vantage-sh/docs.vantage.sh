---
id: connecting_open_ai
title: OpenAI
unlisted: true
---

# OpenAI

:::caution Important
New OpenAI integrations are currently unavailable due to API issues. 
:::

Vantage has the ability to visualize, filter on and forecast your OpenAI costs. All you'll need to do is generate an OpenAI API Key and Vantage will ingest your cost and usage data from OpenAI accordingly. Before getting started, [ensure you have a free Vantage account](https://console.vantage.sh/signup) then follow the steps below to integrate OpenAI costs.

## Technical overview

Vantage integrates with your OpenAI account through the use of the "Usage" API. This endpoint is not formally documented by OpenAI at the time of publishing this article. The ability for Vantage to know this API existed and how to make use of it was actually originally recommended by simply asking ChatGPT. 

## Select the default organization

Select the organization that will be used by default when connecting to OpenAI. This can be changed later in the [OpenAI API Keys](https://platform.openai.com/account/api-keys) page.

![OpenAI Organization Step](/img/open-ai-organization.png)

## Connecting your OpenAI organization

To connect your OpenAI organization, open the [OpenAI Settings](https://console.vantage.sh/settings/open_ai) page in the Vantage console. Follow the instructions which require performing the following operations in the [OpenAI API Keys page](https://platform.openai.com/account/api-keys). Begin by clicking  `Add API key` in the Vantage console.

### Create an API Key

Next, select the "+ Create new secret key" button.

![OpenAI Secret Key Step](/img/open-ai-secret-key.png)

Give it a name like "Vantage Integration". By default, all OpenAI API keys have both read and write access primarily because OpenAI hasn't yet launched more fine-grained permissions related to granting read versus write functionality. Despite this OpenAI platform restriction, Vantage will never attempt to write to any endpoints using your API key. Vantage will only read from the "Usage" endpoint.

![OpenAI Secret Key Name Step](/img/open-ai-secret-key-name.png)

Copy the key into the "API Key" field in Vantage and give it a description that helps identify yourself, such as your name.

![OpenAI Add Key Step](/img/open-ai-add-key.png)

Click `Connect Account` to grant Vantage access to the Usage API. Your OpenAI costs will be ingested automatically and you'll receive an email when the ingestion is complete to view within the Vantage console. 